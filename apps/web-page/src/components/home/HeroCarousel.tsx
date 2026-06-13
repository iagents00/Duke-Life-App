const IMAGES = [
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000', // Bienvenida — villa de lujo con piscina infinita
  'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2000', // Lujo — yate privado al atardecer
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000', // Educación — sala/mentor business
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000'  // Network — gala social internacional
];

const MESSAGES = [
  'Bienvenido',
  'Lujo a precios exclusivos',
  'Educación de Alto Impacto',
  'Network Internacional'
];

interface HeroCarouselProps {
  currentIndex: number;
}

export default function HeroCarousel({ currentIndex }: HeroCarouselProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '21/9' }}>
      {/* Images */}
      {IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 delay-[1500ms]' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Luxury Experience ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Luxury Black Gradient Fade - Bottom to Top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      ))}

      {/* Dynamic Welcome Messages - Bottom Left */}
      {MESSAGES.map((message, index) => (
        <div
          key={index}
          className={`absolute left-6 bottom-6 z-10 max-w-[85%] md:max-w-md pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 delay-[1500ms]' : 'opacity-0'
          }`}
        >
          <span className="text-xs md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 tracking-[0.2em] uppercase drop-shadow-lg leading-relaxed block">
            {message}
          </span>
        </div>
      ))}
    </div>
  );
}
