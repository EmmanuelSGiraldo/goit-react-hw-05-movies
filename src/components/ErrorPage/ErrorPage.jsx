import styles from "./ErrorPage.module.scss";
import imgError from "../../images/page-404.png";

const ErrorPage = () => {
  return <img className={styles.image} src={imgError} alt="Page 404" />;
};

export default ErrorPage;
