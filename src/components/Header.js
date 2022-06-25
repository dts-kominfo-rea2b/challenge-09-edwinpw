// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import style from './HeaderStyle.css';

const Header = () => {
    return (
        <header className={style.headercontainer}>
      <div className={style.headercontent}>
        <h1 className={style.headertitle}>Call a Friend</h1>
        <p className={style.headerdesc}>your friendly contact app</p>
      </div>
    </header>
    )
}

export default Header;