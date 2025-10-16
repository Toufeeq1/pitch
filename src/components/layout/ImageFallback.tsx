"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallback?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallback = "/placeholder.svg",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      fill 
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  )
}
