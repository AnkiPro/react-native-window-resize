import { NativeModules, Platform } from 'react-native';
import type { DeviceModel, IWindowResizerModule } from './types';

const LINKING_ERROR =
  `The package '@ankipro/react-native-window-resize' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n';

const ReactNativeWindowResize = NativeModules.ReactNativeWindowResize
  ? NativeModules.ReactNativeWindowResize
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const WindowResizer: IWindowResizerModule = {
  resizeToDefault: () => {
    ReactNativeWindowResize?.resizeToDefault();
  },
  resizeTo: (deviceModelName: string) => {
    ReactNativeWindowResize?.resizeTo(deviceModelName);
  },
  getAvailableDeviceModels: (
    onComplete: (deviceModels: ReadonlyArray<DeviceModel>) => void
  ) => {
    ReactNativeWindowResize?.getAvailableDeviceModels(onComplete);
  },
};

export default WindowResizer;

export * from './types';
