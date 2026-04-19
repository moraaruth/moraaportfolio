import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { socialImgs } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current?.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 95%' },
      }
    );
  }, []);

  return (
    <footer className="footer">
      <div ref={footerRef} className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Get In Touch</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ruth Moraa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
