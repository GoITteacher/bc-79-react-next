/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("START INTERVAL");
    const intervalId = setInterval(() => {
      console.log(`Update time: ${time.toISOString()}`);
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("STOP INTERVAL");
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
