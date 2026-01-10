import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import LiquidGlass from 'liquid-glass-react';

interface CameraLensEffectProps {
    lensSize?: number;
    focusIntensity?: number;
    chromaticAberration?: number;
    vignetteStrength?: number;
}

const CameraLensEffect: React.FC<CameraLensEffectProps> = ({
    lensSize = 600,
    focusIntensity = 0.6,
    chromaticAberration = 1.5,
    vignetteStrength = 0.3,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const { scrollYProgress } = useScroll();
    const containerRef = useRef<HTMLDivElement>(null);

    const breathingScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.015, 1]);

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 z-15"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                mixBlendMode: 'normal',
                pointerEvents: 'none',
            }}
        >
            {/* Circular lens area with liquid glass effect */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: lensSize,
                    height: lensSize,
                    scale: breathingScale,
                    pointerEvents: 'auto',
                }}
                animate={{
                    scale: isHovered ? 1.008 : 1,
                }}
                transition={{
                    scale: {
                        duration: 2.5,
                        ease: [0.4, 0, 0.2, 1],
                    },
                }}
            >
                <LiquidGlass
                    mouseContainer={containerRef}
                    displacementScale={64}
                    blurAmount={0.2}
                    saturation={120}
                    aberrationIntensity={2}
                    elasticity={0.35}
                    style={{
                        width: lensSize,
                        height: lensSize,
                        borderRadius: '50%',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            borderRadius: '50%',
                        }}
                    >
                        {/* Blur overlay - only within the lens circle */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                            }}
                        />

                        {/* Soft gradient border - blends with background */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at center, transparent 0%, transparent 92%, rgba(255,255,255,0.03) 96%, transparent 100%)',
                                filter: 'blur(2px)',
                            }}
                        />

                        {/* Asymmetric border - bottom more visible, top fades */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: `
                  radial-gradient(circle at center, transparent 0%, transparent 92%, rgba(255,255,255,0.08) 96%, transparent 100%),
                  linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,1) 100%)
                `,
                                WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 92%, black 96%, transparent 100%)',
                                maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 92%, black 96%, transparent 100%)',
                                filter: 'blur(1px)',
                            }}
                        />

                        {/* Outer lens ring - subtle glass effect with gradient */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 30%, transparent 50%)',
                                boxShadow: 'inset 0 0 40px rgba(255,255,255,0.02), inset 0 0 80px rgba(255,255,255,0.01), 0 0 60px rgba(0,0,0,0.1)',
                            }}
                        />

                        {/* Chromatic aberration layer (edges only) */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: `radial-gradient(circle at center, transparent 0%, transparent 65%, rgba(255,0,80,${chromaticAberration * 0.015}) 85%, rgba(0,150,255,${chromaticAberration * 0.015}) 100%)`,
                                mixBlendMode: 'screen',
                            }}
                            animate={{
                                opacity: isHovered ? 0.8 : 0.5,
                            }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* Vignette layer - radial fade from 80% at border to 0% at center */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)',
                                mixBlendMode: 'multiply',
                            }}
                        />

                        {/* Subtle light refraction */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at 32% 32%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 25%, transparent 45%)',
                            }}
                            animate={{
                                opacity: isHovered ? 0.9 : 0.6,
                            }}
                            transition={{ duration: 0.8 }}
                        />

                        {/* Focus breathing indicator - visible pulse */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: '1px solid rgba(255,255,255,0.06)',
                            }}
                            animate={{
                                scale: [1, 1.012, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Inner glow for depth */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(255,255,255,0.02) 100%)',
                                boxShadow: 'inset 0 0 60px rgba(255,255,255,0.02)',
                            }}
                        />
                    </div>
                </LiquidGlass>
            </motion.div>

            {/* Micro bokeh particles (very subtle) */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                    width: lensSize * 0.4,
                    height: lensSize * 0.4,
                }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default CameraLensEffect;
