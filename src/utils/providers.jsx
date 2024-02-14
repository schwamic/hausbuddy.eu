"use client";

import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
