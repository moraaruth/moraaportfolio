import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: 0.15 * index,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/primepresence.png" alt="Prime presence" />
            </div>
            <div className="text-content">
              <h2>The Luxury Digital Presence</h2>
           <p className="text-white-50 md:text-xl">
  Prime Presence builds world-class digital platforms for elite professionals.
  <br />
  <a
    href="https://prime-presence.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline"
  >
    https://prime-presence.vercel.app/
  </a>
</p>
            </div>
          </div>

         <div className="project" ref={libraryRef}>
  <div className="image-wrapper bg-[#FFEFDB]">
    <img src="/images/project5.png" alt="Health Management Website" />
  </div>
  <div className="text-content">
    <h2>The Health Management Website</h2>
  </div>
</div>

<div className="project" ref={rydeRef}>
  <div className="image-wrapper">
    <img src="/images/perfecthomesss.png" alt="Real Estate Management" />
  </div>
  <div className="text-content">
    <h2>The Real Estate Management Website</h2>
    <p className="text-white-50 md:text-xl">
      An app built with ReactJS, NextAuth, & TailwindCSS for a fast, user-friendly experience.
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
