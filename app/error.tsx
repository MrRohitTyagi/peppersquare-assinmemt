// app/somepage/error.tsx
"use client";

const ErrorBoundary = ({ error }: { error: Error; reset: () => void }) => {
  return error;
};

export default ErrorBoundary;
