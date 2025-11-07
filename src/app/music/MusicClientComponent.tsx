'use client';

import React, { useEffect, useRef } from 'react';
import styles from './music.module.css';

const MusicClientComponent: React.FC = () => {
  const metingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 由于脚本已在layout.tsx中预加载，直接创建meting-js元素
    if (!metingContainerRef.current) return;

    // 清理之前的播放器（如果存在）
    const existingPlayer = metingContainerRef.current.querySelector('meting-js');
    if (existingPlayer) {
      // 安全地检查并销毁APlayer实例
      try {
        const apLayerInstance = (existingPlayer as any).aplayer;
        if (apLayerInstance && typeof apLayerInstance.destroy === 'function') {
          apLayerInstance.destroy();
        }
      } catch (error) {
        console.warn('Error destroying existing player:', error);
      }
      metingContainerRef.current.removeChild(existingPlayer);
    }

    // 创建新的meting-js元素
    const metingElement = document.createElement('meting-js');
    metingElement.setAttribute('server', 'tencent');
    metingElement.setAttribute('type', 'playlist');
    metingElement.setAttribute('id', '9608551232');
    metingElement.setAttribute('theme', '#FADFA3');
    metingElement.setAttribute('loop', 'all');
    metingElement.setAttribute('order', 'random');
    metingElement.setAttribute('preload', 'auto');
    metingElement.setAttribute('list-folded', 'false');
    metingElement.setAttribute('list-max-height', '250px');
    metingElement.setAttribute('lrc-type', '3');
    metingElement.setAttribute('mutex', 'true');

    metingContainerRef.current.appendChild(metingElement);

    // 组件卸载时的清理工作
    return () => {
      if (metingContainerRef.current) {
        const player = metingContainerRef.current.querySelector('meting-js');
        if (player) {
          // 安全地检查并销毁APlayer实例
          try {
            const apLayerInstance = (player as any).aplayer;
            if (apLayerInstance && typeof apLayerInstance.destroy === 'function') {
              apLayerInstance.destroy();
            }
          } catch (error) {
            console.warn('Error destroying player on unmount:', error);
          }
          metingContainerRef.current.removeChild(player);
        }
      }
    };
  }, []); // 只需在组件挂载时执行一次

  return (
    <div className={styles.aplayerContainer}>
      <div ref={metingContainerRef}></div>
    </div>
  );
};

export default MusicClientComponent;