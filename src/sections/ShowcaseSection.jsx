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

  <section className="project-list-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
  
  {/* PROJECT 1 */}
  <article className="project flex flex-col overflow-hidden">
    <div className="image-wrapper bg-[#FFEFDB] overflow-hidden rounded-lg">
      <img
        src="/images/project5.png"
        alt="Health Management Website"
        className="w-full h-60 object-cover"
      />
    </div>

    <div className="text-content mt-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold">
        The Health Management Website
        
      </h2>
       <p className="text-white/70 mt-2">
       A smart health management platform designed to streamline patient records, appointments, and healthcare operations efficiently.
      </p>
    </div>
  </article>

  {/* PROJECT 2 */}
  <article className="project flex flex-col overflow-hidden">
    <div className="image-wrapper overflow-hidden rounded-lg">
      <img
        src="/images/perfecthomesss.png"
        alt="Real Estate Website"
        className="w-full h-60 object-cover"
      />
    </div>

    <div className="text-content mt-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold">
        The Real Estate Management Website
      </h2>

      <p className="text-white/70 mt-2">
       A modern real estate management platform built with ReactJS, NextAuth, and TailwindCSS for seamless property, tenant, and rental operations.
      </p>
    </div>
  </article>
  {/* project 3 */}
 <article className="project flex flex-col overflow-hidden">
    <div className="image-wrapper overflow-hidden rounded-lg">
      <img
        src="/images/whatsappautomation.png"
        alt="Real Estate Website"
        className="w-full h-60 object-cover"
      />
    </div>

    <div className="text-content mt-4">
      <h2 className="text-white text-xl md:text-2xl font-semibold">
        Whatsapp Automation
      </h2>

      <p className="text-white/70 mt-2">
        An intelligent WhatsApp automation platform for managing customer communication, workflows, and business engagement at scale.
      </p>
    </div>
  </article>
</section>

<div className="project" ref={rydeRef}>
  <div className="image-wrapper">
    <img src="/images/more work.png" alt="Real Estate Management" />
  </div>
  {/* <div className="text-content">
    <h2>The Real Estate Management Website</h2>
    <p className="text-white-50 md:text-xl">
      An app built with ReactJS, NextAuth, & TailwindCSS for a fast, user-friendly experience.
    </p>
  </div> */}
</div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
