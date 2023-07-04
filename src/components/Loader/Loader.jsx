import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}>
        <ThreeDots
          height={80}
          width={80}
          radius={9}
          color="#B92F2C"
          ariaLabel="three-dots-loading"
          visible={true}
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Loader;
