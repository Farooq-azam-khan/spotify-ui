
import React from 'react';
import * as Icons from 'heroicons-react';
import { Link } from 'react-router-dom'
const MobileHeader = () => {
    return (<section className="sm:hidden w-full flex py-2 items-center justify-end px-3">
        <Link to="/profile">
            <Icons.CogOutline className="w-6 h-6" />
        </Link>
    </section>)
}

export default MobileHeader; 