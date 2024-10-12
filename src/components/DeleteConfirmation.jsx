import { useEffect, useState } from "react";

const Timer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(Timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Would run just after Komponent Render auf Browser
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timer SET");
      onConfirm();
    }, Timer);

    // Would Once-Run When Komponet Disapear from Browser
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>

      <progress value={remainingTime} max={Timer} />
    </div>
  );
}
