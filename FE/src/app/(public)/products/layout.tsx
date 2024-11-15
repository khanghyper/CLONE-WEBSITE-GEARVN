import React from 'react'

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="wrap-main bg-body">
      <div className="page">
        {children}
      </div>
    </main>
  )
}
