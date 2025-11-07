'use client'
import React, { useState } from 'react';
import styles from './tools.module.css';
import { TOOL_ITEMS } from './const';

const ToolsPage: React.FC = () => {
  // 状态管理：跟踪当前选择的工具
  const [selectedTool, setSelectedTool] = useState<string>(TOOL_ITEMS[0].href);

  // 处理标签点击
  const handleToolClick = (href: string) => {
    setSelectedTool(href);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        {TOOL_ITEMS.map((item) => (
          <button
            key={item.href}
            className={`${styles.tag} ${selectedTool === item.href ? styles.activeTag : ''}`}
            onClick={() => handleToolClick(item.href)}
            aria-pressed={selectedTool === item.href}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.iframeContainer}>
        <iframe
          src={selectedTool}
          title={TOOL_ITEMS.find(item => item.href === selectedTool)?.label || '工具'}
          className={styles.iframe}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ToolsPage;