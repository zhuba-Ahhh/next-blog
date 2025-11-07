'use client'
import React, { useMemo, useState } from 'react';
import styles from './novel.module.css';
import DictumList from './DictumList';
import { dictumsArr } from './data';

const NovelPage: React.FC = () => {
  // 状态管理：跟踪当前选择的小说数据源
  const [selectedNovel, setSelectedNovel] = useState<string>('剑来');

  // 根据选择的小说获取对应的数据源
  const currentDictums = useMemo(() => {
    return dictumsArr.find((item) => item.novel === selectedNovel)?.dictums || [];
  }, [selectedNovel]);

  // 处理标签点击
  const handleNovelClick = (novelName: string) => {
    setSelectedNovel(novelName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tagsContainer}>
        {dictumsArr.map((item) => (
          <button
            key={item.novel}
            className={`${styles.tag} ${selectedNovel === item.novel ? styles.activeTag : ''}`}
            onClick={() => handleNovelClick(item.novel)}
            aria-pressed={selectedNovel === item.novel}
          >
            {item.novel}
          </button>
        ))}
      </div>

      <DictumList
        origin={selectedNovel}
        dictums={currentDictums}
      />
    </div>
  );
};

export default NovelPage;