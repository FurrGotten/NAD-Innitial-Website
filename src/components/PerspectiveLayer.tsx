import * as React from 'react';

type PerspectiveLayerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  perspective: number;
  zIndex: number;
};

export const PerspectiveLayer = ({
                                   children,
                                   className = '',
                                   style = {},
                                   zIndex,
                                   perspective
                                 }: PerspectiveLayerProps) => {
  const scale = 1 + Math.abs(zIndex) / perspective;

  return (
    <div
      style={{
        zIndex,
        transform: `translateZ(${zIndex}px) scale(${scale})`,
        ...style
      }}
      className={`perspective-layer absolute inset-0 [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </div>
  );
};
