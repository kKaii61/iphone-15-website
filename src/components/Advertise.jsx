import { useGSAP } from '@gsap/react';
import { advertiseText } from '../constants';
import gsap from 'gsap';
import { rightImg } from '../utils';

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
    <div className="flex py-7 w-full justify-center main-gray-bg">
      <div className="py=10 text-center text advertise-container">
        <h2 className="text-gray-white ad-text">
          {advertiseText}{' '}
          <h2 className=" text-blue-500 hover:underline">
            Buy
            <img src={rightImg} alt="right" className="ml-2" />
          </h2>
        </h2>
      </div>
    </div>
  );
};

export default Advertise;
