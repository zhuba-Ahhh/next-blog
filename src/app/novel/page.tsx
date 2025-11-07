import React, { Suspense } from 'react';
import styles from './novel.module.css';
import DictumList from './DictumList';

const NovelPage: React.FC = () => {
  return (
    <DictumList />
  );
};

export default NovelPage;