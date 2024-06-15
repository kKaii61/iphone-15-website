import { useGSAP } from '@gsap/react';
import { advertiseText } from '../constants';
import gsap from 'gsap';

const Advertise = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.ad-container',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.25,
        duration: 1.75,
      }
    );
  }, []);

  return (
    <div className="flex bg-gray-700 py-7 w-full justify-center ad-container">
      <div className="text-center py=10 advertise-container">
        <h2 className="text-gray-white ad-text">
          {advertiseText}{' '}
          <a className=" text-blue-500 hover:underline" href="">
            {' '}
            Buy
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Advertise;
