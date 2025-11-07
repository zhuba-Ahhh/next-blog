declare module 'aplayer' {
  interface APlayerOptions {
    container: HTMLElement;
    mini?: boolean;
    autoplay?: boolean;
    theme?: string;
    loop?: string;
    order?: string;
    preload?: string;
    volume?: number;
    mutex?: boolean;
    listFolded?: boolean;
    listMaxHeight?: string;
    lrcType?: number;
    audio: {
      name: string;
      artist: string;
      url: string;
      cover: string;
      lrc?: string;
      theme?: string;
    }[];
    storageName?: string;
  }

  class APlayer {
    constructor(options: APlayerOptions);
    play(): void;
    pause(): void;
    toggle(): void;
    seek(time: number): void;
    volume(percentage: number, nostorage?: boolean): void;
    toggleMode(): void;
    toggleLoop(): void;
    toggleOrder(): void;
    skipBack(): void;
    skipForward(): void;
    skipTo(index: number): void;
    destroy(): void;
    on(event: string, handler: (...args: any[]) => void): void;
    off(event: string, handler?: (...args: any[]) => void): void;
    emit(event: string, ...args: any[]): void;
    list: {
      show(): void;
      hide(): void;
      toggle(): void;
    };
    lrc: {
      show(): void;
      hide(): void;
      toggle(): void;
    };
  }

  export = APlayer;
}