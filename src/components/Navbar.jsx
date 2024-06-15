import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" height={14} width={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}>
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className="opacity-70 hover:opacity-100 transition-opacity"
            src={searchImg}
            alt="search"
            width={18}
            height={18}
          />
          <img
            className="opacity-70 hover:opacity-100 transition-opacity"
            src={bagImg}
            alt="search"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
