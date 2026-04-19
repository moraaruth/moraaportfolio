import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { testimonials } from '../constants';
import TitleHeader from '../components/TitleHeader';
import GlowCard from '../components/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      gridRef.current?.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div ref={titleRef}>
          <TitleHeader title="What People Say About Me?" sub="⭐️ Customer feedback highlights" />
        </div>

        <div ref={gridRef} className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <GlowCard card={testimonial} index={index}>
                <div className="flex items-center gap-3" />
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
