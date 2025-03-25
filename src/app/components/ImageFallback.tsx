"use client";

import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

type ImageFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
} & Omit<ImageProps, 'src' | 'alt'>;

const ImageFallback = ({
  src,
  alt,
  fallbackSrc = '/placeholder-image.svg',
  ...props
}: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isError, setIsError] = React.useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setIsError(true);
        setImgSrc(fallbackSrc);
      }}
      style={{
        ...(props.style || {}),
        backgroundColor: isError ? '#18181b' : undefined,
      }}
    />
  );
};

export default ImageFallback; 