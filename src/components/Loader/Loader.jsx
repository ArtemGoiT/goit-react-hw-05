import { FidgetSpinner } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <FidgetSpinner
        visible={true}
        height={80}
        width={80}
        color="#007bff" // Пример цвета
        secondaryColor="#6c757d" // Пример вторичного цвета
        radius={40} // Пример размера
        speed={0.8} // Пример скорости анимации
        ariaLabel="fidget-spinner-loading"
      />
      <p className={css.loaderText}>Загрузка...</p>
    </div>
  );
};

export default Loader;
