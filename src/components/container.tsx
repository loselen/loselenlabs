import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}
