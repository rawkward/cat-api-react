import styles from "./styles.module.css";
import RandomCatWidget from "./components/RandomCatWidget/RandomCatWidget.tsx";

function App() {

  return (
  <div className={styles.app}>
    <RandomCatWidget/>
  </div>
  );
}

export default App;
