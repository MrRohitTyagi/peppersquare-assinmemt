import React from "react";
type SkeletonLoaderProps = {
  className?: string;
};
const SkeletonLoader = ({ className = "" }: SkeletonLoaderProps) => {
  return <div className={`animate-pulse bg-gray-300 ${className}`} />;
};

export default SkeletonLoader;
