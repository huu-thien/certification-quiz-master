import { useEffect, useState } from "react";

export const Timer = ({
  duration,
  onTimeout,
}: {
  duration: number;
  onTimeout: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="text-xl font-mono text-red-600">
      {mins}:{secs < 10 ? "0" : ""}
      {secs}
    </div>
  );
};
