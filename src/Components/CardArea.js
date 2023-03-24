import React from 'react';
import DynamicCard from './Card.js';

export default function CardArea() {

    // onDragEnd = result => {
    //     //Do something
    // }

    return (
        <>
            <DynamicCard type={"To Do"} />
            <DynamicCard type={"Doing"} />
            <DynamicCard type={"Done"} />
        </>
    )
}