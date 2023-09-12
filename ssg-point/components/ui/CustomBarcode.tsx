import React from 'react';
import { useBarcode } from 'next-barcode';

interface CustomBarcodeProps {
  value: string;
  options: {
    // 필요한 옵션들을 여기에 정의
    background?: string;
    lineColor?: string;
    width?: number;
    height?: number;
    displayValue: boolean;
    // ...기타
  };
}

function CustomBarcode({ value, options }: CustomBarcodeProps) {
  const { inputRef } = useBarcode({
    value,
    options,
  });

  return <canvas ref={inputRef} />;
}

export default CustomBarcode;
