import React, { FC, memo } from 'react';
import styles from './App.module.css';

interface IProps {}

const App: FC = memo<IProps>(() => {
  return (
      <div className={styles.App}>
          <p>This is app pages</p>
      </div>
  );
})

export default App;
