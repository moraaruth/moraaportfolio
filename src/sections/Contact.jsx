import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const formWrapRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
      formWrapRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: formWrapRef.current, start: 'top 85%' },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: '', email: '', message: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div ref={titleRef}>
          <TitleHeader title="Get in Touch – Let's Connect" sub="💬 Have questions or ideas? Let's talk! 🚀" />
        </div>

        <div className="grid-12-cols mt-16">
          <div ref={formWrapRef} className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text" id="name" name="name" value={form.name}
                    onChange={handleChange} placeholder="What's your good name?" required
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email" id="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="What's your email address?" required
                  />
                </div>
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message" name="message" value={form.message}
                    onChange={handleChange} placeholder="How can I help you?" rows="5" required
                  />
                </div>

                {success && (
                  <div className="bg-green-500 text-white p-3 rounded-lg mb-4 text-center animate-pulse">
                    ✅ Message sent successfully!
                  </div>
                )}

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? 'Sending...' : 'Send Message'}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
