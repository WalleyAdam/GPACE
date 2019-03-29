import React from 'react';
import Menu from './Menu';

const Header = () =>{
    return (
        <div className="ui header segment">
            <h5 className="ui center aligned header">
                Graduation PACE System
            </h5>
            <Menu />
        </div>
    );
}

export default Header;