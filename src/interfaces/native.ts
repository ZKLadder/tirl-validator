interface NativeValidator {
  libraryVersion(): Promise<string>;
  testColor(fileName: string): Promise<string>;
  findBarcode(fileName: string, flash: boolean): Promise<string>;
  processLabel(barcodeData: string): Promise<string>;
  authenticate(labelData: string, imageData: string): Promise<string>;
}

export type { NativeValidator };
