import { styles } from '@/styles';
import { navLinks } from '@/constants';
import { logo, menu, close } from '@/assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full
        items-center
        py-5
        fixed
        top-0
        z-20
        bg-primary
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-lg font-bold cursor-pointer flex">
            <span className="lg:block hidden">Nguyen Trong Nhan</span>
            <span className="lg:hidden block">Nhan Nguyen</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link, idx: number) => (
            <li
              key={idx}
              className={`
                ${active === link.title ? 'text-white' : 'text-secondary'} 
                hover:text-white 
                text-lg 
                font-medium 
                cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1knhgSCP3wEGXOjMqf4p5FstiRZDtBQgq/view?usp=sharing"
              className="font-poppins font-medium text-lg cursor-pointer text-secondary hover:text-white"
              onClick={(ev) => {
                ev.preventDefault();

                window.open(
                  'https://drive.google.com/file/d/1knhgSCP3wEGXOjMqf4p5FstiRZDtBQgq/view?usp=sharing',
                  '_blank',
                );
              }}
            >
              Résumé
            </a>
          </li>
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`
            ${!toggle ? 'hidden' : 'flex'}
            p-6 
            black-gradient 
            absolute 
            top-20 
            right-0 
            mx-4 
            my-2 
            min-w-[140px] 
            z-10 
            rounded-xl
          `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link, idx: number) => (
                <li
                  key={idx}
                  className={`
                    ${active === link.title ? 'text-white' : 'text-secondary'} 
                    font-poppins
                    font-medium
                    cursor-pointer
                    
                  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1knhgSCP3wEGXOjMqf4p5FstiRZDtBQgq/view?usp=sharing"
                  className="font-poppins font-medium text-lg cursor-pointer text-secondary hover:text-white"
                  onClick={(ev) => {
                    ev.preventDefault();

                    window.open(
                      'https://drive.google.com/file/d/1knhgSCP3wEGXOjMqf4p5FstiRZDtBQgq/view?usp=sharing',
                      '_blank',
                    );
                  }}
                >
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
