export const content19 = `# React 实现流式接口对接：打造实时响应的 AI 对话体验

在现代 AI 对话应用中，流式响应（Streaming Response）已经成为提升用户体验的关键技术。本文将详细介绍如何在 React 应用中实现流式接口的对接。

## 一、流式接口的基本概念

流式接口允许服务器以流的形式持续发送数据，而不是等待所有数据准备就绪后一次性返回。在 AI 对话场景中，这意味着用户可以实时看到 AI 的回复，而不是等待完整回复后才能看到内容。

## 二、技术实现

### 1. 服务端请求实现

\`\`\`typescript
const response = await fetch('/api/stream', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/event-stream',
  },
  cache: 'no-store',
  keepalive: true,
  body: JSON.stringify(payload)
});

const reader = response.body?.getReader();
const decoder = new TextDecoder();
\`\`\`

关键点：
- 使用 \`fetch\` API 发起请求
- 设置 \`Accept: text/event-stream\` 头部
- 使用 \`ReadableStream\` 读取流数据
- 通过 \`TextDecoder\` 解码二进制数据

### 2. 数据处理与解析

\`\`\`typescript
while (reader) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value, { stream: true });
  const lines = chunk.split('\n').filter(line => line.trim());
  
  for (const line of lines) {
    if (line.startsWith('data:')) {
      const jsonStr = line.replace(/^data:/, '').trim();
      const message = JSON.parse(jsonStr);
      // 处理消息
    }
  }
}
\`\`\`

关键点：
- 循环读取流数据
- 按行解析数据
- 处理 SSE（Server-Sent Events）格式
- JSON 解析与错误处理

### 3. React 状态更新

由于后端返回的分片长度可能不一(网关、AP、协议等原因)以及React短时间多次更新状态会合并成成一次更新，所以需要前端自己兼容实现稳定的输出

\`\`\`typescript
const [messages, setMessages] = useState<Message[]>([]);

const handleNewContent = (content: string) => {
  flushSync(() => {
    setMessages(oldMessages => {
      const newMessages = [...oldMessages];
      newMessages[newMessages.length - 1] = {
        ...newMessages[newMessages.length - 1],
        content: newMessages[newMessages.length - 1].content + content
      };
      return newMessages;
    });
  });
};
\`\`\`

关键点：
- 使用 \`useState\` 管理消息状态
- 使用 \`flushSync\` 确保状态更新的同步性
- 增量更新消息内容

### 4. 打字机效果实现

\`\`\`typescript
const chars = content.split('');
await Promise.all(
  chars.map((char, index) =>
    new Promise(resolve =>
      setTimeout(() => {
        onNewMsg(char);
        resolve(null);
      }, index * 50)
    )
  )
);
\`\`\`

关键点：
- 字符分割
- 使用 \`Promise.all\` 和 \`setTimeout\` 实现打字效果
- 可配置的打字速度

## 三、错误处理与中断控制

\`\`\`typescript
try {
  if (options.abortSignal?.aborted) {
    reader.cancel();
    return false;
  }
  // ... 处理逻辑
} catch (error) {
  console.error('Stream error:', error);
  return { content: '请求失败', isError: true };
}
\`\`\`

关键点：
- 支持请求中断
- 错误状态处理
- 用户友好的错误提示

## 四、性能优化

1. **批量更新**：使用 \`flushSync\` 确保状态更新的及时性
2. **防抖处理**：对频繁的状态更新进行控制
3. **内存管理**：及时清理不需要的数据和监听器

## 五、用户体验提升

1. **加载状态**：显示打字机效果
2. **错误处理**：友好的错误提示
3. **实时反馈**：即时显示接收到的内容

## 总结

实现流式接口不仅需要考虑技术实现，还要注重用户体验。通过合理的状态管理、错误处理和性能优化，可以打造出流畅的 AI 对话体验。

关键代码可参考：
- 请求：
\`\`\`ts
export type AIStreamResponse = {
  content: string;
  hasDone: boolean;
  isError: boolean;
};

export const postAIStream = async (
  options: {
    messages: AIMessage[];
    abortSignal?: AbortSignal; // 新增可中断信号
  },
  onNewMsg: (msg: string) => void,
  model: string,
  operator: string,
): Promise<AIStreamResponse | false> => {
  // 检查是否中断
  if (options.abortSignal?.aborted) {
    return false;
  }
  // 新增 usage 变量
  let usage: any = {};
  // 将原来的 Modal.confirm 替换为统一函数 showRetryConfirm

  try {
    const response = await fetch('/model/service/stream', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      // 添加HTTP/2相关配置
      cache: 'no-store',
      keepalive: true,
      body: JSON.stringify({
        operator,
        model,
        messages: options.messages,
        stream: true,
      }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    let hasDone = false;
    let content = '';
    let incompleteLine = ''; // 存储不完整的行

    while (reader) {
      // 检查中断信号
      if (options.abortSignal?.aborted) {
        reader.cancel();
        return false;
      }
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      const chunk = decoder.decode(value, { stream: true });

      // 将上一个不完整的行与当前chunk拼接
      const textToProcess = incompleteLine + chunk;
      incompleteLine = '';

      // 按行分割，但保持事件标记完整
      const lines = textToProcess
        .split(/\n/)
        .map((line) => line.trim())
        .filter((line) => line);

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // 标记正常结束
        if (line.includes(\`event:done\`)) {
          hasDone = true;
        }

        // 如果是最后一行且chunk没有以换行符结束，认为可能是不完整的
        if (i === lines.length - 1 && !chunk.endsWith('\n')) {
          incompleteLine = line;
          continue;
        }

        if (line.startsWith('data:')) {
          try {
            const jsonStr = line.replace(/^data:/, '').trim();
            // 确保不处理空字符串
            if (!jsonStr) continue;

            const message = JSON.parse(jsonStr);
            // 新增：处理 usage 字段
            if (message.data && message.data.usage) {
              usage = message.data.usage;
            }

            if (!message.finish && message.data?.choices?.[0]?.message?.content) {
              const currentContent = message.data.choices[0].message.content;
              // 按字符分割当前内容
              const chars = currentContent.split('');
              // 使用 Promise.all 和 setTimeout 实现均匀的打字效果
              await Promise.all(
                chars.map(
                  (char: string, index: number) =>
                    new Promise(
                      (resolve) =>
                        setTimeout(() => {
                          onNewMsg(char);
                          resolve(null);
                        }, index * 50), // 每个字符之间间隔 50ms
                    ),
                ),
              );
              content += currentContent;
            }
          } catch (e) {
            console.warn('Parse error, might be incomplete JSON:', line);
            // 如果不是最后一行却解析失败，记录错误
            if (i < lines.length - 1) {
              console.error('JSON parse error in middle of chunk:', e);
            }
            continue;
          }
        }
      }
    }
    // 结束时返回 content 和 usage
    if (hasDone) {
      return { content, usage, hasDone, isError: false };
    }
    return { content: '大模型调用失败', usage, hasDone: true, isError: true };
  } catch (error) {
    console.error('Stream error:', error);
    return { content: '大模型调用失败', usage, hasDone: true, isError: true };
  }
};
\`\`\`

- 调用
\`\`\`ts
    const res = await postAIStream(
      {
        messages: [newMessages],
      },
      (content) => {
        flushSync(() =>
          setMessages((oldMessage) => {
            const messages = [...oldMessage];
            messages[messages.length - 1] = {
              content: messages[messages.length - 1].content + content,
              role: 'assistant',
            };

            return messages;
          }),
        );
        if (!isStart) {
          isStart = true;
        }
      },
      currentModel,
      userInfo?.username,
    ).finally(() => {
      setLoading(false);
    });
\`\`\``;
