import { Button as ButtonBase } from "@base-ui/react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <ButtonBase className="bg-orange-500 text-white px-3 py-1.5 rounded-xl hover:bg-orange-600 active:bg-orange-700">
      {children}
    </ButtonBase>
  );
}
