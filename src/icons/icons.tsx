import React from "react";

type IconName = "personIcon" | "microphoneIcon";

interface IconProps {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, width, height }) => {
  switch (name) {
    case "microphoneIcon":
      return (
        <svg
          width={width}
          height={height}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          
        >
          <path d="M12 19v3" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <rect x="9" y="2" width="6" height="13" rx="3" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;

