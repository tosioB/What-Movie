interface LoadingSpinnerProps {
  size?: string;
}

const LoadingSpinner = ({ size = "7.2rem" }: LoadingSpinnerProps) => {
  return (
    <span
      className="loading-spinner"
      style={{ display: "block", width: size, height: size }}
    >
      <img
        src="/images/loading_spinner.svg"
        style={{ width: "100%", height: "100%" }}
      />
    </span>
  );
};

export default LoadingSpinner;
