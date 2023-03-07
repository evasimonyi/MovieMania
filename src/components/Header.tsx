import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => {
  return (
    <header className={["h-1/3 flex flex-col", styles.header].join(" ")}>
      <Logo />
      <div className='flex flex-col justify-center m-auto w-1/2 gap-6'>
        <Search />
      </div>
    </header>
  )
}

export default Header;
