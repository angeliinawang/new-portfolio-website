import React from 'react';
import Image from 'next/image';

interface GradientBackgroundProps {
    color: string;
    imageSrc: string;
    imageAlt: string;
}

const RadialCircle: React.FC<GradientBackgroundProps> = ({ color, imageSrc, imageAlt }) => {
    return (
        <div className="relative">
            <div
                className="rounded-full transition-transform duration-300 hover:scale-110"
                style={{
                    width: 300,
                    height: 300,
                    background: `radial-gradient(circle at center, ${color} 0%, #101010 60%)`,
                  }}
                
            >

            <Image
                src={imageSrc}
                alt={imageAlt}
                width={144}
                height={144}
                className="absolute top-1/2 left-1/2 z-10 w-[140px] h-[140px] object-cover border-2 border-[#252525] rounded-xl"
                style={{
                transform: "translate(-50%, -50%)", // Center the image relative to the circle
                }}
            />
                
            </div>
        </div>
    );
};

export default RadialCircle;