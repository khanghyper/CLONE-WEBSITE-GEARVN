'use client'

import UserProvider from "@/app/(private)/admin/categories/all/test-context";
import React from "react";

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )
}

