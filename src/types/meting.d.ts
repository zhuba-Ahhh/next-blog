// meting.d.ts

// 扩展HTMLElementTagNameMap以支持meting-js标签
declare namespace JSX {
  interface IntrinsicElements {
    'meting-js': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      server?: string;
      type?: string;
      id?: string;
      auto?: string;
      api?: string;
      fixed?: string;
      mini?: string;
      autoplay?: string;
      theme?: string;
      loop?: string;
      order?: string;
      preload?: string;
      volume?: string;
      mutex?: string;
      'lrc-type'?: string;
      'list-folded'?: string;
      'list-max-height'?: string;
      'storage-name'?: string;
    };
  }
}

// 扩展Window接口以支持全局meting_api变量
declare interface Window {
  meting_api?: string;
}

// 声明meting模块
declare module 'meting' {
  // meting是一个客户端库，没有具体的导出，主要是注册自定义元素
  const meting: undefined;
  export default meting;
}