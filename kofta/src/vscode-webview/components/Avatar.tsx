import React from "react";

interface AvatarProps {
  src: string;
  size?: number;
  active?: boolean;
  circle?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 70,
  active,
  circle,
}) => {
  return (
    <img
      alt="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: circle ? "50%" : "30%",
        boxShadow: active
          ? "0 0 0 3px var(--vscode-textLink-foreground)"
          : undefined,
      }}
      src={src}
    />
  );
};
