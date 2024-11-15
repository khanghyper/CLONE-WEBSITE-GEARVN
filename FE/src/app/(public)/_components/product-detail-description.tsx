'use client'

import { useEffect, useRef } from "react"

export default function ProductDetailDescription({ description }: { description: string | undefined }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (description && ref.current) {
      ref.current.innerHTML = description
    }
  }, [description])
  return (
    <div className="w-full px-5 py-5" ref={ref}>
      {description}
    </div>
  )
}
