"use client";

import { clientAccessToken } from "@/lib/http";
import { useState } from "react";

function PrivateProviders({
  children,
  inittialAcessToken = ''
}: Readonly<{
  children: React.ReactNode;
  inittialAcessToken?: string
}>) {

  useState(() => {
    if (typeof window !== 'undefined') {
      clientAccessToken.value = inittialAcessToken;
    }
  })

  return (
    <>
      {children}
    </>
  )
}

export default PrivateProviders;