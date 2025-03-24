import { Link, Outlet } from "react-router";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Link to="/">
        <h1>멋사몰</h1>
      </Link>
      <Outlet />
    </div>
  );
};

export default Layout;
