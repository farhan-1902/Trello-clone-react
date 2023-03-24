import React from 'react';
import ButtonIcon from './Buttons/IconButton.js';
import Separator from './Separator';
import PublicButton from './Buttons/PublicButton.js';
import BoardButton from './Buttons/BoardButton.js';
import Dropdown from './Buttons/Dropdown.js';
import Hamburger from './Buttons/Hamburger.js';
import Profile from './Buttons/Profile.js';
import Filter from './Buttons/Filter.js';

export default function Header() {
    return (
        <>
        <div className="header">
            <h2 className="header-text text-2xl font-medium">FE-ASSIGNMENT</h2>
            <ButtonIcon />
            <Separator name="left"/>
            <PublicButton />
            <Separator name="left"/>
            <BoardButton />
            <Dropdown />
            <Hamburger />
            <Separator name="right"/>
            <Profile />
            <Separator name="right" pos="two"/>
            <Filter />
            <Separator name="right" pos="three"/>
        </div>
        </>
    )
}