import React from 'react';

import styles from '../sass/app.module';

export default function App() {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.red}>Welcome To Webpack SCSS Modules</h1>
    </div>
  );
}
