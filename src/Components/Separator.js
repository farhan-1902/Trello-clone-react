import React from 'react';

export default function Separator(props) {
    const className = () => {
        let class_name = "";
        if (props.name === "left") class_name = "left-vertical-line";
        if (props.name === "right") class_name = "right-vertical-line";
        if (props.name === "right" && props.pos === "two") class_name = "right-vertical-line-two";
        if (props.name === "right" && props.pos === "three") class_name = "right-vertical-line-three";
        return class_name;
    }

    return (
        <span class={className()}></span>
    )

}