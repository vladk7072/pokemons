import { FC } from "react";
import gif from "../../assets/images/footer/poke.gif";
import grass from "../../assets/images/footer/grass.png";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <img className={styles.poke} src={gif} alt="" />
        </div>
      </div>
      <div className={styles.grass_wrapper}>
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
        <img className={styles.grass} src={grass} alt="" />
      </div>
    </footer>
  );
};