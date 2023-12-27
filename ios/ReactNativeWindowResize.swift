import Foundation
import UIKit
import React

@objc(ReactNativeWindowResize)
class ReactNativeWindowResize: NSObject, RCTBridgeModule {
  @objc func resizeToDefault() {
    DispatchQueue.main.async {
      WindowResizer.resizeWindow(to: UIScreen.main.bounds.size)
    }
  }

  @objc
  func resize(to model: String) {
    DispatchQueue.main.async {
      if let model = DeviceModel(rawValue: model) {
        WindowResizer.resizeWindow(to: model)
      }
    }
  }

  @objc
  func getAvailableDeviceModels(_ callback: @escaping RCTResponseSenderBlock) {
    let currentSize = UIScreen.main.bounds.size
    let availableModels = DeviceModel.allCases.filter { model in
      return model.screenSize.width < currentSize.width && model.screenSize.height <= currentSize.height
    }
    let modelArray = availableModels.map { model in
      let screenSize = model.screenSize
      return ["name": model.rawValue, "width": screenSize.width, "height": screenSize.height]
    }
    callback([modelArray])
  }

  // MARK: - RCTBridgeModule
  
  @objc
  static func moduleName() -> String! {
    return "ReactNativeWindowResize"
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

