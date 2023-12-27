#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeWindowResize, NSObject)

RCT_EXTERN_METHOD(resizeToDefault)

RCT_EXTERN_METHOD(resizeTo:(NSString*)model)

RCT_EXTERN_METHOD(getAvailableDeviceModels:(RCTResponseSenderBlock)callback)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
