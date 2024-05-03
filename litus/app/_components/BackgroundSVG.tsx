import Image from 'next/image';
import React from 'react';
import bg1 from '/public/bg-1.svg'

const BackgroundSVG = () => {
  return (
    <Image 
        alt="Background SVG"
        src={bg1}
        quality={100}
        fill
    />
  )
};

export default BackgroundSVG;