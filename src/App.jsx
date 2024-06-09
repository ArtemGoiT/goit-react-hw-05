import css from "./App.css";
import Navigation from "./components/Navigation/Navigation";

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
