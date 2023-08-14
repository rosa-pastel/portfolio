import styles from "./butterfly.module.css";
export default function Butterfly() {
  return (
    <>
      <div className={styles.Butterfly}>
        <div className={styles.wing}></div>
        <div className={styles.body}></div>
        <div className={styles.wing}></div>
      </div>
    </>
  );
}
