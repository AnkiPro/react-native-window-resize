export type DeviceModel = {
  name: string;
  width: number;
  height: number;
};

export type IWindowResizerModule = {
  resizeToDefault: () => void;
  resizeTo: (deviceModelName: string) => void;
  getAvailableDeviceModels: (
    onComplete: (deviceModels: ReadonlyArray<DeviceModel>) => void
  ) => void;
};
