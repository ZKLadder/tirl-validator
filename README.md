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
  scanDone: boolean; // Returns true when both scanLeft and scanRight are true. Indicates scanning has completed.
  valid: boolean; // Notifies whether scanned label is authentic. Field is set only when scanDone === true
  scanLeft: boolean; // Indicates whether sufficient data has been captured with the camera tilted left.
  scanRight: boolean; // Indicates whether sufficient data has been captured with the camera tilted right.
  error: Object; // Any errors will be returned here
}
```

#### Error Handling

Occasionally the `validate()` function can return a property called `error`. The following is a list of common errors and how best to handle them based on the `error.message` property.

| Error Message                                          | Description                                                                                  | Handling                                                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Barcode not found                                      | Indicates that the image being processed does not contain a TIRL label or is out of focus    | Safe to ignore and continue with scan. Can optionally prompt the user to adjust camera distance |
| Found new barcode. Create a new TirlValidator instance | Indicates that the user may be scanning multiple unique labels within a single scan session. | Should instantiate a new instance of the TirlValidator class and restart the scan               |
| Label not indexed by ceramic                           | Indicates that the Tirl label being scanned is not known by the network                      | This is a fatal error and it will not be possible to validate the label being scanned           |

### Example

A full [example](https://github.com/ZKLadder/tirl-validator/blob/main/example/src/App.tsx) can be found in this repository which utilizes [vision-camera](https://github.com/mrousavy/react-native-vision-camera) and [react-native-fs](https://github.com/itinance/react-native-fs)

### Running the example

Make sure you have followed all of the steps required for setting up your [React Native Development Environment](https://reactnative.dev/docs/environment-setup)

## Running on an IOS Simulator
_The IOS Simulator does not support camera usage so it will not be possible to fully test scanning functionality_

```sh
export BUILD_TARGET=iossimulator
npm run bootstrap
cd example
npm run ios
```

## Running on an IOS Device

Follow the instructions for [running React Native on your IOS Device](https://reactnative.dev/docs/running-on-device)

## Running on Android

```sh
npm run bootstrap
cd example
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
