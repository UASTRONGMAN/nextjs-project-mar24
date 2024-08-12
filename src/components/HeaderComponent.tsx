import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
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