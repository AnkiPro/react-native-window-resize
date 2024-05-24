import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WindowResizer from '@ankipro/react-native-window-resize';
import type { DeviceModel } from '@ankipro/react-native-window-resize';

export default function App() {
  const [currentDevice, setCurrentDevice] = useState<string>();
  const [deviceModels, setDeviceModels] = useState<ReadonlyArray<DeviceModel>>(
    []
  );

  useEffect(() => {
    WindowResizer.getAvailableDeviceModels(setDeviceModels);
  }, []);

  const reset = () => {
    WindowResizer.resizeToDefault();
    setCurrentDevice('');
  };

  const renderDeviceModel = (deviceModel: DeviceModel) => {
    const handlePress = () => {
      setCurrentDevice(deviceModel.name);
      WindowResizer.resizeTo(deviceModel.name);
    };

    return (
      <TouchableOpacity
        key={deviceModel.name}
        style={[
          styles.deviceButton,
          currentDevice === deviceModel.name && styles.active,
        ]}
        onPress={handlePress}
      >
        <Text
          style={[
            styles.deviceName,
            currentDevice === deviceModel.name && styles.activeText,
          ]}
        >
          {deviceModel.name} ({deviceModel.width}x{deviceModel.height})
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resize this window</Text>

      {deviceModels.map(renderDeviceModel)}

      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 4,
    marginBottom: 64,
    width: '80%',
    textAlign: 'center',
  },
  deviceButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#333',
    borderWidth: 3,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
  },
  active: {
    backgroundColor: 'black',
  },
  deviceName: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  activeText: {
    color: 'white',
  },
  resetButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'red',
    borderRadius: 8,
    marginTop: 32,
    width: '80%',
  },
  resetText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
});
