import React from 'react';
import Link from 'next/link';
import styles from './BlobButton.module.css';

function BlobButton({ 
  href, 
  children, 
  onClick, 
  className = '', 
  target = '_self' 
}) {
  const buttonContent = (
    <button 
      className={`${styles.blobBtn} ${className}`} 
      onClick={onClick}
    >
      {children}
      <span className={styles.blobBtnInner}>
        <span className={styles.blobBtnBlobs}>
          <span className={styles.blobBtnBlob}></span>
          <span className={styles.blobBtnBlob}></span>
          <span className={styles.blobBtnBlob}></span>
          <span className={styles.blobBtnBlob}></span>
        </span>
      </span>
    </button>
  );


  if (href) {
    return (
      <Link href={href} target={target}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}


export function BlobButtonGooFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default BlobButton;
