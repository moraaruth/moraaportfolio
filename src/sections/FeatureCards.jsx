import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { abilities } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
        },
      }
    );

    cardsRef.current.forEach((card) => {
      const icon = card?.querySelector('.feature-icon');
      gsap.fromTo(
        icon,
        { scale: 0.4, rotate: -20, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        }
      );
    });
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, i) => (
          <div
            key={title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="card-border rounded-xl p-8 flex flex-col gap-4 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]"
          >
            <div className="feature-icon size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
