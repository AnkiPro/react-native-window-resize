import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WindowResizer, {
  type DeviceModel,
} from '@ankipro/react-native-window-resize';

export default function App() {
  const [deviceModels, setDeviceModels] = useState<ReadonlyArray<DeviceModel>>(
    []
  );

  useEffect(() => {
    WindowResizer.getAvailableDeviceModels(setDeviceModels);
  }, []);

  const renderDeviceModel = (deviceModel: DeviceModel) => {
    const handlePress = () => {
      WindowResizer.resizeTo(deviceModel.name);
    };

    return (
      <TouchableOpacity style={[styles.deviceButton]} onPress={handlePress}>
        <Text style={styles.deviceName} key={deviceModel.name}>
          {deviceModel.name} ({deviceModel.width}x{deviceModel.height})
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resize this window</Text>

      {deviceModels.map(renderDeviceModel)}

      <TouchableOpacity
        style={styles.resetButton}
        onPress={WindowResizer.resizeToDefault}
      >
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
  deviceName: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
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
