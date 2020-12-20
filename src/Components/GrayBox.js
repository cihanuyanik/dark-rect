import React, { useEffect, useState } from "react";
import styles from "./Square.module.css";
const GrayBox = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setOn(!on);
      },
      on ? 2000 : 750
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [on]);

  return (
    <div
      className={on ? styles.gray : styles.white}
      style={{ width: 150, height: 150 }}
    />
  );
};

export default GrayBox;
