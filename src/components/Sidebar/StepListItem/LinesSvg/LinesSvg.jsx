import "./LinesSvg.scss";

export default function LinesSvg() {
  return (
    <div className="svg-wrapper">
      <svg
        width="4"
        height="24"
        viewBox="0 0 4 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="4" height="9" rx="1" fill="currentColor" />
        <rect y="15" width="4" height="9" rx="1" fill="currentColor" />
      </svg>
    </div>
  );
}
