# Camera Lens Effect - Premium Photography Portfolio

A sophisticated, minimalist camera-lens inspired visual effect designed for premium photography portfolios. This effect simulates realistic camera optics with depth of field, chromatic aberration, vignetting, and cinematic breathing animations.

## Features

### Optical Effects
- **Depth of Field Simulation**: Radial blur with smooth Gaussian-like falloff, mimicking f/1.8–f/2.8 aperture
- **Chromatic Aberration**: Subtle RGB color split at lens edges (<2px)
- **Vignetting**: Natural darkening toward lens periphery
- **Light Refraction**: Minimal glass-like distortion effects
- **Focus Breathing**: Micro zoom oscillation (<3%) for cinematic feel

### Animations
- **Breathing Animation**: 4-second cycle with subtle scale changes
- **Scroll-Reactive**: Blur intensity adjusts based on scroll position
- **Hover Interactions**: Focus tightens on hover with smooth transitions
- **60fps Performance**: Hardware-accelerated transforms for smooth rendering

### Design Philosophy
- Premium, editorial aesthetic
- Non-intrusive enhancement
- Content remains fully readable
- No game UI or sci-fi elements
- Natural photography light behavior
- Timeless, handcrafted appearance

## Usage

### Basic Implementation

```tsx
import CameraLensEffect from './components/CameraLensEffect';

function Hero() {
  return (
    <section className="h-screen">
      <CameraLensEffect>
        {/* Your content here */}
        <div className="hero-content">
          <h1>Your Title</h1>
          <p>Your description</p>
        </div>
      </CameraLensEffect>
    </section>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lensSize` | number | 600 | Diameter of the lens circle in pixels |
| `focusIntensity` | number | 0.6 | Strength of depth of field effect (0-1) |
| `chromaticAberration` | number | 1.5 | RGB color split in pixels (0-3) |
| `vignetteStrength` | number | 0.3 | Darkening at lens edges (0-1) |
| `children` | ReactNode | - | Content to render inside the lens effect |

### Presets

#### Default (50mm f/2.8)
```tsx
<CameraLensEffect
  lensSize={700}
  focusIntensity={0.5}
  chromaticAberration={1.2}
  vignetteStrength={0.25}
>
```

#### Portrait (85mm f/1.8)
```tsx
<CameraLensEffect
  lensSize={800}
  focusIntensity={0.7}
  chromaticAberration={1.8}
  vignetteStrength={0.4}
>
```

#### Minimal (35mm f/4)
```tsx
<CameraLensEffect
  lensSize={600}
  focusIntensity={0.3}
  chromaticAberration={0.8}
  vignetteStrength={0.15}
>
```

#### Cinematic (50mm f/1.4)
```tsx
<CameraLensEffect
  lensSize={900}
  focusIntensity={0.8}
  chromaticAberration={2.2}
  vignetteStrength={0.5}
>
```

## Interactive Demo

Visit `/lens-demo` to access an interactive demo page where you can:
- Adjust all effect parameters in real-time
- Test different lens presets
- See technical implementation details
- Fine-tune settings for your specific needs

## Technical Details

### Performance Optimizations
- Hardware-accelerated CSS transforms
- `will-change` properties for smooth animations
- `backface-visibility: hidden` to prevent flickering
- Optimized SVG filters with minimal overhead
- 60fps target on modern devices

### Browser Compatibility
- Modern browsers with CSS backdrop-filter support
- Graceful degradation for older browsers
- Mobile-optimized with reduced effects on low-power devices

### File Structure
```
components/
├── CameraLensEffect.tsx      # Main component
└── CameraLensEffect.css       # Supplementary styles

src/pages/
└── LensDemo.tsx               # Interactive demo page
```

## Customization

### Adjusting Blur Intensity
Modify the `focusIntensity` prop to control how strong the depth of field effect appears. Lower values (0.2-0.4) create subtle effects, while higher values (0.6-0.8) create more dramatic separation.

### Changing Lens Size
The `lensSize` prop controls the diameter of the focal area. Larger values (800-1000px) work well for hero sections, while smaller values (500-600px) suit tighter compositions.

### Fine-Tuning Chromatic Aberration
Keep `chromaticAberration` between 0.8-2.0px for realistic results. Values above 2px may appear exaggerated and less photographic.

### Vignette Strength
Adjust `vignetteStrength` based on your background. Darker backgrounds may need lower values (0.15-0.25), while lighter backgrounds can handle higher values (0.3-0.5).

## Best Practices

1. **Content Readability**: Always ensure text remains readable. The effect should enhance, not obscure.
2. **Performance**: Use on hero sections or key focal points, not throughout entire pages.
3. **Responsive Design**: Consider reducing effect intensity on mobile devices.
4. **Accessibility**: Provide `prefers-reduced-motion` alternatives for users sensitive to animations.
5. **Testing**: Test across different screen sizes and devices to ensure consistent quality.

## Integration with Existing Portfolio

The effect is already integrated into your Hero section at:
```
components/Hero.tsx
```

To apply it to other sections:
1. Import the component
2. Wrap your section content
3. Adjust props to match the section's aesthetic
4. Test scroll behavior and interactions

## Troubleshooting

### Effect Not Visible
- Check z-index stacking contexts
- Ensure parent container has defined dimensions
- Verify backdrop-filter browser support

### Performance Issues
- Reduce `lensSize` for better performance
- Lower `focusIntensity` to reduce blur calculations
- Disable on mobile devices if needed

### Blur Not Smooth
- Ensure hardware acceleration is enabled
- Check for conflicting CSS filters
- Verify browser supports SVG filters

## Credits

Designed for premium photography portfolios with inspiration from:
- Real camera optics (50mm, 85mm prime lenses)
- Cinematic depth of field techniques
- Editorial photography aesthetics
- Modern web design best practices

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**License**: Proprietary - AYMAN Limouri Photography Portfolio
