import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#B92F2C"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
