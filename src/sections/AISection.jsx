import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const aiFeatures = [
  {
    icon: '🤖',
    title: 'AI-Powered Development',
    desc: 'Using AI tools to write, review, and optimize code faster without sacrificing quality.',
  },
  {
    icon: '⚡',
    title: 'Rapid Iteration',
    desc: 'Delivering solutions quickly by leveraging AI to automate repetitive tasks and accelerate workflows.',
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    desc: 'Continuously refining outputs using AI feedback loops to meet evolving customer requirements.',
  },
];

const AISection = () => {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Glow pulse animation (runs continuously)
    gsap.to(glowRef.current, {
      scale: 1.3,
      opacity: 0.18,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Title fade + slide up on scroll
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      }
    );

    // Paragraph reveal
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 88%',
        },
      }
    );

    // Staggered cards: slide up + fade in
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
        },
      }
    );

    // Icon bounce on each card scroll into view
    cardsRef.current.forEach((card) => {
      const icon = card?.querySelector('.ai-icon');
      gsap.fromTo(
        icon,
        { scale: 0.5, rotate: -15 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full section-padding pb-20 md:pb-32 flex flex-col items-center gap-12 bg-black-100 relative overflow-hidden"
      id="ai"
    >
      {/* Animated glow orb */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-purple-700 opacity-10 rounded-full blur-[130px] pointer-events-none"
      />

      <div ref={titleRef}>
        <TitleHeader title="AI-Driven Solutions" sub="How I Work" />
      </div>

      <p
        ref={paraRef}
        className="text-white-50 text-lg max-w-2xl text-center leading-relaxed"
      >
        I leverage AI to deliver efficient, effective solutions fast — and
        continuously improve them to meet evolving customer requirements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        {aiFeatures.map(({ icon, title, desc }, i) => (
          <div
            key={title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-black-200 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.25)] cursor-default"
          >
            <span className="ai-icon text-4xl inline-block">{icon}</span>
            <h3 className="text-white font-semibold text-xl">{title}</h3>
            <p className="text-white-50 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AISection;
