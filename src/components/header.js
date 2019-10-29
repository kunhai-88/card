import React from "react";
import { Link } from "react-router-dom";

import styles from "./style.less";

export default () => (
  <header className={styles.Header}>
    <div className={styles.InnerHeaer}>
      <Link to={`/`}>
        <h1>随缘卡片</h1>
      </Link>
    </div>
  </header>
);
