import React, { useState } from 'react';
import CameraLensEffect from '../../components/CameraLensEffect';
import { motion } from 'motion/react';

const LensDemo: React.FC = () => {
    const [lensSize, setLensSize] = useState(700);
    const [focusIntensity, setFocusIntensity] = useState(0.5);
    const [chromaticAberration, setChromaticAberration] = useState(1.2);
    const [vignetteStrength, setVignetteStrength] = useState(0.25);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Demo Hero Section */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <CameraLensEffect
                    lensSize={lensSize}
                    focusIntensity={focusIntensity}
                    chromaticAberration={chromaticAberration}
                    vignetteStrength={vignetteStrength}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="h-full w-full bg-cover bg-center opacity-70"
                            style={{
                                backgroundImage: 'url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80")',
                            }}
                        />
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10" />

                    {/* Content */}
                    <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
                        <motion.h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-tight font-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            CAMERA LENS
                            <br />
                            <span className="italic">EFFECT</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-neutral-300 mb-8 font-light tracking-wide max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Premium optical simulation with depth of field, chromatic aberration, and cinematic breathing.
                        </motion.p>
                    </div>
                </CameraLensEffect>
            </section>

            {/* Controls Panel */}
            <section className="relative bg-neutral-900 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif mb-8 text-center">Effect Controls</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Lens Size */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-neutral-300">
                                Lens Size: <span className="text-white font-bold">{lensSize}px</span>
                            </label>
                            <input
                                type="range"
                                min="400"
                                max="1000"
                                step="50"
                                value={lensSize}
                                onChange={(e) => setLensSize(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                            <p className="text-xs text-neutral-400">
                                Diameter of the circular lens area
                            </p>
                        </div>

                        {/* Focus Intensity */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-neutral-300">
                                Focus Intensity: <span className="text-white font-bold">{focusIntensity.toFixed(2)}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={focusIntensity}
                                onChange={(e) => setFocusIntensity(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                            <p className="text-xs text-neutral-400">
                                Strength of the depth of field effect
                            </p>
                        </div>

                        {/* Chromatic Aberration */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-neutral-300">
                                Chromatic Aberration: <span className="text-white font-bold">{chromaticAberration.toFixed(1)}px</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="3"
                                step="0.1"
                                value={chromaticAberration}
                                onChange={(e) => setChromaticAberration(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                            <p className="text-xs text-neutral-400">
                                RGB color split at lens edges
                            </p>
                        </div>

                        {/* Vignette Strength */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-neutral-300">
                                Vignette Strength: <span className="text-white font-bold">{vignetteStrength.toFixed(2)}</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={vignetteStrength}
                                onChange={(e) => setVignetteStrength(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
                            />
                            <p className="text-xs text-neutral-400">
                                Darkening at lens edges
                            </p>
                        </div>
                    </div>

                    {/* Presets */}
                    <div className="mt-12 pt-8 border-t border-neutral-700">
                        <h3 className="text-xl font-serif mb-6 text-center">Presets</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => {
                                    setLensSize(700);
                                    setFocusIntensity(0.5);
                                    setChromaticAberration(1.2);
                                    setVignetteStrength(0.25);
                                }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                            >
                                Default (50mm f/2.8)
                            </button>
                            <button
                                onClick={() => {
                                    setLensSize(800);
                                    setFocusIntensity(0.7);
                                    setChromaticAberration(1.8);
                                    setVignetteStrength(0.4);
                                }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                            >
                                Portrait (85mm f/1.8)
                            </button>
                            <button
                                onClick={() => {
                                    setLensSize(600);
                                    setFocusIntensity(0.3);
                                    setChromaticAberration(0.8);
                                    setVignetteStrength(0.15);
                                }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                            >
                                Minimal (35mm f/4)
                            </button>
                            <button
                                onClick={() => {
                                    setLensSize(900);
                                    setFocusIntensity(0.8);
                                    setChromaticAberration(2.2);
                                    setVignetteStrength(0.5);
                                }}
                                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                            >
                                Cinematic (50mm f/1.4)
                            </button>
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 pt-8 border-t border-neutral-700">
                        <h3 className="text-xl font-serif mb-4">Technical Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-400">
                            <div>
                                <h4 className="text-white font-medium mb-2">Optical Effects</h4>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Radial depth of field simulation</li>
                                    <li>Gaussian-like blur falloff</li>
                                    <li>RGB chromatic aberration</li>
                                    <li>Natural vignetting</li>
                                    <li>Subtle light refraction</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-2">Animations</h4>
                                <ul className="space-y-1 list-disc list-inside">
                                    <li>Focus breathing (4s cycle)</li>
                                    <li>Micro zoom oscillation (&lt;3%)</li>
                                    <li>Scroll-reactive blur</li>
                                    <li>Hover focus tightening</li>
                                    <li>60fps hardware acceleration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LensDemo;
