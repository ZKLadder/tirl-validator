# tirl-validator

Utilities to enable verifying TrustlessIRL physical labels. Built for React Native

## Installation

```sh
npm install --save tirl-validator
```

## About

This library facilitates easy integration with the [TrustlessIRL](https://tirl.xyz) protocol by enabling mobile applications to perform camera based scans of TIRL labels.

Read more about the TrustlessIRL protocol [here.](https://docs.tirl.xyz)

Successful scans must capture images of the label with the camera tilted slightly to the left, and slightly to the right - as TIRL labels are 3-Dimensional.

## Usage

The TirlValidator class exposes a single function:

#### validate(imagePath): Promise<scanResult>

Read the image at `imagePath` and return result if scan completed, or further scan requirements if not.

**Params**

- imagePath `string` - should contain an image of a valid TIRL label

**Returns**

```ts
{
  labelId: string; // ID of TIRL label being scanned
  scanDone: boolean; // Returns true when scanning is complete and no more image capture is necessary
  valid: boolean; // Notifies whether scanned label is authentic. Field set only when scanDone is true
  scanLeft: boolean; // Scan completed from the left side
  scanRight: boolean; // Scan completed from the right side
  error: Object; // Any errors will be returned here
}
```

### Example

A full example can be found [here](https://github.com/ZKLadder/tirl-validator/blob/main/example/src/App.tsx) which utilizes [vision-camera](https://github.com/mrousavy/react-native-vision-camera) and [react-native-fs](https://github.com/itinance/react-native-fs)

### Running the example

Make sure you have followed all of the steps required for setting up your [React Native Development Environment](https://reactnative.dev/docs/environment-setup)

```sh
npm run bootstrap
cd example

#IOS
npm run ios

#Android
npm run android
```

You may need to add the following to the `example/android/local.properties` file

```sh
# On Windows
sdk.dir=C:\\Users\\<name>\\AppData\\Local\\Android\\sdk

# On Mac
sdk.dir=/Users/<name>/Library/Android/sdk
```

_You will also need to have a working webcam or camera device attached to your mobile emulator_

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
