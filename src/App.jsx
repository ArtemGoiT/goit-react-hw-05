import css from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className={css.appContainer}>
      <Navigation />
      <div className={css.contentContainer}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
