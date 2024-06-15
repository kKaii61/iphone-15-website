import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState, useEffect } from 'react';
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 2.3,
      duration: 0.75,
    });
    tl.to('#cta', { opacity: 1, duration: 2, yPercent: -200 });
    tl.from('#cta .cta-target', { opacity: 0, stagger: 0.2, y: 100 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>

        <div className="video-container md:w-10/12 w-9/12">
          <video
            className="video pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn cta-target">
          Buy
        </a>
        <p className="font-normal text-xl cta-target">
          From $999 or $41.62/mo. for 24 mo.
        </p>
      </div>
    </section>
  );
};

export default Hero;
