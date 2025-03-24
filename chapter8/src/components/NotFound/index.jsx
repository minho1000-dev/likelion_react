import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      페이지를 찾을 수 없습니다.
      <br />
      다시 시도해주세요.
    </div>
  );
};

export default NotFound;
