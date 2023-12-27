// Copyright © 2023 Vedas Apps Ltd. All rights reserved.

import Foundation

enum DeviceModel: String, CaseIterable {
  case iPhoneSE = "iPhone SE"
  case iPhone8 = "iPhone 8"
  case iPhone8Plus = "iPhone 8 Plus"
  case iPhoneX = "iPhone X"
  case iPhone15 = "iPhone 15"
  case iPhone15ProMax = "iPhone 15 Pro Max"
  case iPadMini_5thGen = "iPad Mini (5th Gen)"
  case iPad_10thGen = "iPad (10th Gen)"
  case iPadPro_6thGen_11 = "iPad Pro (6th Gen 11\")"
  case iPadPro_6thGen_12_9 = "iPad Pro (6th Gen 12.9\")"

  var screenSize: CGSize {
    switch self {
    case .iPhoneSE:
      return CGSize(width: 320, height: 568)
    case .iPhone8:
      return CGSize(width: 375, height: 667)
    case .iPhone8Plus:
      return CGSize(width: 414, height: 736)
    case .iPhoneX:
      return CGSize(width: 375, height: 812)
    case .iPhone15:
      return CGSize(width: 393, height: 852)
    case .iPhone15ProMax:
      return CGSize(width: 430, height: 932)
    case .iPadMini_5thGen:
      return CGSize(width: 768, height: 1024)
    case .iPad_10thGen:
      return CGSize(width: 820, height: 1180)
    case .iPadPro_6thGen_11:
      return CGSize(width: 834, height: 1194)
    case .iPadPro_6thGen_12_9:
      return CGSize(width: 1024, height: 1366)
    }
  }
}
