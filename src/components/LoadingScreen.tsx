import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 5; // 5씩 증가 (속도 조절 가능)
        });
      }, 100); // 100ms마다 업데이트

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <div className={`loading-screen ${isLoading ? "show" : "hide"}`}>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <img src="/images/logo.svg" alt="로고" />
    </div>
  );
};

export default LoadingScreen;
