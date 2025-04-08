import {useEffect, useState} from "react";
import useFetchRandomImage from "../../hooks/useFetchRandomImage.ts";
import styles from "./styles.module.css"
import Checkbox from "../Checkbox/Checkbox.tsx";
import CatImage from "../CatImage/CatImage.tsx";

const RandomCatWidget = () => {
  const [enabledChecked, setEnabledChecked] = useState<boolean>(false);
  const [autoRefreshChecked, setAutoRefreshChecked] = useState<boolean>(false);

  const handleEnabledOnChange = () => {
    setEnabledChecked(!enabledChecked);
    if (enabledChecked) setAutoRefreshChecked(false);
  };

  const handleAutoRefreshOnChange = () => {
    setAutoRefreshChecked(!autoRefreshChecked);
  };

  const { fetchImage, imageUrl, loading, error } = useFetchRandomImage();

  useEffect(() => {
    if (enabledChecked && autoRefreshChecked) {
      void fetchImage();
      const interval = setInterval(fetchImage, 5000);
      return () => clearInterval(interval);
    }
  }, [fetchImage, autoRefreshChecked, enabledChecked]);

  return (
    <div className={styles.randomCatWidget}>
      <Checkbox
        name={"Enabled"}
        checked={enabledChecked}
        onChange={handleEnabledOnChange}
        disabled={false}
      />
      <Checkbox
        name={"Auto-refresh every 5 seconds"}
        checked={autoRefreshChecked}
        onChange={handleAutoRefreshOnChange}
        disabled={!enabledChecked}
      />
      <div className={styles.image_container}>
        <button
          className={styles.button}
          onClick={fetchImage}
          disabled={!enabledChecked}
        >
          Get cat
        </button>
        {imageUrl && <CatImage url={imageUrl} />}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  )
};

export default RandomCatWidget;

