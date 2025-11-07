import React, { Suspense } from 'react';
import styles from './music.module.css';
import MusicClientComponent from './MusicClientComponent';
import { Skeleton } from '@/components/ui/skeleton';

// 加载骨架组件
const LoadingSkeleton = () => {
  return (
    <div className={styles.aplayerContainer}>
      <div className="flex flex-col gap-4 p-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-2 w-full" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>音乐播放器</h1>
      <p className={styles.description}>使用 APlayer 欣赏音乐</p>
      <Suspense fallback={<LoadingSkeleton />}>
        <MusicClientComponent />
      </Suspense>
    </div>
  );
};

export default MusicPage;