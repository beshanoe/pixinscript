declare class WebView extends Control {
  constructor(parent?: Control);

  backgroundColor: number;
  readonly hasSelection: Boolean;
  readonly selectedText: String;
  zoomFactor: Number;

  onHTMLAvailable(html: String): void;
  onLoadFinished(ok: Boolean): void;
  onLoadProgress(progress: number): void;
  onLoadStarted(): void;
  onPlainTextAvailable(text: String): void;
  onScriptResultAvailable(value: Object): void;
  onSelectionUpdated(): void;

  evaluateScript(sourceCode: String, language?: String): void;
  loadContent(url: String): void;
  reload(): void;
  requestHTML(): void;
  requestPlainText(): void;

  saveAsPDF(
    filePath: String,
    pageWidth?: Number,
    pageHeight?: Number,
    marginLeft?: Number,
    marginTop?: Number,
    marginRight?: Number,
    marginBottom?: Number,
    landscape?: Boolean
  ): void;

  setContent(data: ByteArray, mimeType?: String): void;
  setHTML(html: String): void;
  setPlainText(text: String): void;
  stop(): void;
}
