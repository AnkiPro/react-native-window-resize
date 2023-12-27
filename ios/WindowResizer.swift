import UIKit

// iPad split screen mode is not supported yet

class WindowResizer {
  static func resizeWindow(to model: DeviceModel) {
    resizeWindow(to: model.screenSize)
  }

  static func resizeWindow(to newSize: CGSize) {
    guard let window = UIApplication.shared.windows.first else { return }

    // Calculate new origin to center the window
    let screenWidth = UIScreen.main.bounds.width
    let screenHeight = UIScreen.main.bounds.height
    let newOriginX = (screenWidth - newSize.width) / 2.0
    let newOriginY = (screenHeight - newSize.height) / 2.0

    // Update the window frame
    let newFrame = CGRect(origin: CGPoint(x: newOriginX, y: newOriginY), size: newSize)
    window.frame = newFrame

    // Update the window frame
    window.frame = newFrame

    // Set additionalSafeAreaInsets of rootViewController to 0
    window.rootViewController?.additionalSafeAreaInsets = UIEdgeInsets.zero

    // Save safeAreaInsets
    let safeAreaInsets = window.rootViewController?.view.safeAreaInsets ?? .zero

    // Calculate the additionalSafeAreaInsets given the new size
    let additionalSafeAreaInsets = UIEdgeInsets(
      top: max(-safeAreaInsets.top, (newSize.height - screenHeight) / 2.0),
      left: max(-safeAreaInsets.left, (newSize.width - screenWidth) / 2.0),
      bottom: max(-safeAreaInsets.top, (newSize.height - screenHeight) / 2.0),
      right: max(-safeAreaInsets.left, (newSize.width - screenWidth) / 2.0)
    )
    window.rootViewController?.additionalSafeAreaInsets = additionalSafeAreaInsets

    // Call setNeedsLayout() and layoutIfNeeded() on the window and root view
    window.setNeedsLayout()
    window.layoutIfNeeded()

    // Notify so that RN updates the UI
    NotificationCenter.default.post(name: NSNotification.Name(rawValue: "RCTUserInterfaceStyleDidChangeNotification"), object: nil)
  }
}

