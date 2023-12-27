# @ankipro/react-native-window-resize

React Native window resizer for iOS

![example](./assets/example.gif)

## Installation

```sh
yarn add @ankipro/react-native-window-resize
```

install pods

```sh
npx pod-install
```

## Usage

```ts
import WindowResizer from '@ankipro/react-native-window-resize';

// ...

WindowResizer.resizeToDefault();

WindowResizer.resizeTo(deviceModel);

WindowResizer.getAvailableDeviceModels((deviceModels) => ...)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
