import styles from "./styles.module.css";

type TCatImageProps = {
  url: string | null;
};

const CatImage = ({ url }: TCatImageProps) => {
  if (!url) return null;

  return <img className={styles.image} src={url} alt={"image of a cat"} />;
};

export default CatImage;
