interface LoadingSpinnerProps {
  size?: string;
  aspectRatio?: string;
}

const LoadingSpinner = ({ size = "7.2rem" }: LoadingSpinnerProps) => {
  return (
    <span
      className="loading-spinner"
      style={{ display: "block", margin: "0 auto" }}
    >
      <img
        src="/images/loading_spinner.svg"
        style={{ width: size, height: size }}
      />
    </span>
  );
};

export default LoadingSpinner;
