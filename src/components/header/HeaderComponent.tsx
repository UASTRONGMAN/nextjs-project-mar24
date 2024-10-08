import React from 'react';
import Link from "next/link";
import css from './header.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <Link href={'/'}>Home</Link>
            <Link href={'/genres'}>Genres</Link>
            <form>
                <input type="text" placeholder={'Search request'}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default HeaderComponent;