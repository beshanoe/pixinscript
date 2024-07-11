/// <reference types="./globals/Array" />
/// <reference types="./globals/ArrayBuffer" />
/// <reference types="./globals/ArrayBufferView" />
/// <reference types="./globals/BRQuadTree" />
/// <reference types="./globals/Bitmap" />
/// <reference types="./globals/Boolean" />
/// <reference types="./globals/Brush" />
/// <reference types="./globals/ByteArray" />
/// <reference types="./globals/CheckBox" />
/// <reference types="./globals/Cipher" />
/// <reference types="./globals/Color" />
/// <reference types="./globals/ColorComboBox" />
/// <reference types="./globals/ComboBox" />
/// <reference types="./globals/Complex" />
/// <reference types="./globals/Compression" />
/// <reference types="./globals/ConicalGradientBrush" />
/// <reference types="./globals/Console" />
/// <reference types="./globals/Control" />
/// <reference types="./globals/CoreApplication" />
/// <reference types="./globals/CryptographicHash" />
/// <reference types="./globals/Cursor" />
/// <reference types="./globals/DataView" />
/// <reference types="./globals/Date" />
/// <reference types="./globals/Dialog" />
/// <reference types="./globals/Edit" />
/// <reference types="./globals/ElapsedTime" />
/// <reference types="./globals/EphemerisFile" />
/// <reference types="./globals/EphemerisHandle" />
/// <reference types="./globals/Error" />
/// <reference types="./globals/ExternalProcess" />
/// <reference types="./globals/FITSKeyword" />
/// <reference types="./globals/File" />
/// <reference types="./globals/FileDialog" />
/// <reference types="./globals/FileDownload" />
/// <reference types="./globals/FileFind" />
/// <reference types="./globals/FileFormat" />
/// <reference types="./globals/FileFormatInstance" />
/// <reference types="./globals/FileInfo" />
/// <reference types="./globals/FileTransfer" />
/// <reference types="./globals/FileUpload" />
/// <reference types="./globals/FileWatcher" />
/// <reference types="./globals/Float32Array" />
/// <reference types="./globals/Float64Array" />
/// <reference types="./globals/Font" />
/// <reference types="./globals/Frame" />
/// <reference types="./globals/Function" />
/// <reference types="./globals/GetDirectoryDialog" />
/// <reference types="./globals/Global" />
/// <reference types="./globals/GradientBrush" />
/// <reference types="./globals/Graphics" />
/// <reference types="./globals/GridInterpolation" />
/// <reference types="./globals/GroupBox" />
/// <reference types="./globals/Histogram" />
/// <reference types="./globals/HorizontalSizer" />
/// <reference types="./globals/HorizontalSlider" />
/// <reference types="./globals/Image" />
/// <reference types="./globals/ImageDescription" />
/// <reference types="./globals/ImageStatistics" />
/// <reference types="./globals/ImageWindow" />
/// <reference types="./globals/Int16Array" />
/// <reference types="./globals/Int32Array" />
/// <reference types="./globals/Int8Array" />
/// <reference types="./globals/JSON" />
/// <reference types="./globals/Label" />
/// <reference types="./globals/LinearFunction" />
/// <reference types="./globals/LinearGradientBrush" />
/// <reference types="./globals/Math" />
/// <reference types="./globals/Matrix" />
/// <reference types="./globals/MessageBox" />
/// <reference types="./globals/MessageListener" />
/// <reference types="./globals/NetworkTransfer" />
/// <reference types="./globals/Number" />
/// <reference types="./globals/NumericControl" />
/// <reference types="./globals/NumericEdit" />
/// <reference types="./globals/Object" />
/// <reference types="./globals/ObserverPosition" />
/// <reference types="./globals/OpenFileDialog" />
/// <reference types="./globals/PDF" />
/// <reference types="./globals/Parameters" />
/// <reference types="./globals/Pen" />
/// <reference types="./globals/Point" />
/// <reference types="./globals/PointGridInterpolation" />
/// <reference types="./globals/PointSurfaceSpline" />
/// <reference types="./globals/Position" />
/// <reference types="./globals/ProcessInstance" />
/// <reference types="./globals/Promise" />
/// <reference types="./globals/PushButton" />
/// <reference types="./globals/QuadTreeNode" />
/// <reference types="./globals/RANSACPointMatcher" />
/// <reference types="./globals/RGBColorSystem" />
/// <reference types="./globals/RadialGradientBrush" />
/// <reference types="./globals/RadioButton" />
/// <reference types="./globals/Rect" />
/// <reference types="./globals/RegExp" />
/// <reference types="./globals/SVG" />
/// <reference types="./globals/SaveFileDialog" />
/// <reference types="./globals/ScrollBox" />
/// <reference types="./globals/SectionBar" />
/// <reference types="./globals/Security" />
/// <reference types="./globals/Settings" />
/// <reference types="./globals/ShepardInterpolation" />
/// <reference types="./globals/SimpleColorDialog" />
/// <reference types="./globals/Sizer" />
/// <reference types="./globals/Slider" />
/// <reference types="./globals/SpinBox" />
/// <reference types="./globals/StarDetector" />
/// <reference types="./globals/StarPosition" />
/// <reference types="./globals/String" />
/// <reference types="./globals/SurfaceSimplifier" />
/// <reference types="./globals/SurfaceSpline" />
/// <reference types="./globals/TabBox" />
/// <reference types="./globals/TextBox" />
/// <reference types="./globals/Timer" />
/// <reference types="./globals/ToolButton" />
/// <reference types="./globals/TreeBox" />
/// <reference types="./globals/TreeBoxNode" />
/// <reference types="./globals/TypedArray" />
/// <reference types="./globals/TypeDescription" />
/// <reference types="./globals/Uint16Array" />
/// <reference types="./globals/Uint32Array" />
/// <reference types="./globals/Uint8Array" />
/// <reference types="./globals/Uint8ClampedArray" />
/// <reference types="./globals/Vector" />
/// <reference types="./globals/VectorGraphics" />
/// <reference types="./globals/VerticalSizer" />
/// <reference types="./globals/VerticalSlider" />
/// <reference types="./globals/View" />
/// <reference types="./globals/ViewList" />
/// <reference types="./globals/WebView" />

/// <reference types="./utils" />

interface Console {
  log(...args: any[]): void;
  error(...args: any[]): void;
  warn(...args: any[]): void;
}

declare function setTimeout<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
  ...args: TArgs
): number;
declare function setTimeout(
  callback: (args: void) => void,
  ms?: number
): number;
declare function clearTimeout(timerId: number): void;

declare function setInterval<TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  ms?: number,
  ...args: TArgs
): number;
declare function setInterval(
  callback: (args: void) => void,
  ms?: number
): number;
declare function clearInterval(timerId: number): void;
