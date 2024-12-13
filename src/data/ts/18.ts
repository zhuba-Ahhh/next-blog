export const content18 = `
## 情况

使用\`@nestjs/swagger\`撰写api文档，本地打包预览正常，上传部署报错:
\`swagger-ui.css\`等资源缺失

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d55bf5102a524a9f96280f559d9b3af1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5bGx6Z2S6Iqx5qyy54eDMzEw:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMzcwMzYyMDA3ODY3OTY3MSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1734666281&x-orig-sign=QM0Dm%2FUPU1S2Y%2Bi3rYwfbzqht1E%3D)

## 解法

使用\`customCssUrl\`和\`customJs\`动态注入资源

\`\`\`ts
const CSS_URL = [
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.css',
];

const JS_URL = [
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.18.2/swagger-ui-standalone-preset.min.js',
];


SwaggerModule.setup('doc', app, document, {
    jsonDocumentUrl: 'doc/json',
    customCssUrl: CSS_URL,
    customJs: JS_URL,
  });
\`\`\`

缺点：

1.  依旧会报错
2.  页面会出来慢一点

有其他解决方案可以分享交流下\~

参考： [Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/openapi/introduction)
`;
