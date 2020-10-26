import React, { useEffect, useState } from "react";
import styles from "./Square.module.css";
const GrayBox = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setOn(!on);
      },
      on ? 1500 : 500
    );

    return () => {
      setTimeout(timerId);
    };
  }, [on]);

  return (
    <div
      className={on ? styles.gray : styles.white}
      style={{ width: 150, height: 150 }}
    ></div>
  );
};

export default GrayBox;
