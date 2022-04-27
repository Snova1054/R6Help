/* eslint-disable @next/next/no-img-element */
import { drag } from 'd3';
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import styles from '/styles/Operators.module.css'
// import Example from './operatorsTest'

const defendersInfo = [
    {
        id: 'mute',
        operator: 'Mute',
        alt: 'Mute',
        image: '/operators/mute.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'smoke',
        operator: 'Smoke',
        alt: 'Smoke',
        image: '/operators/smoke.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'castle',
        operator: 'Castle',
        alt: 'Castle',
        image: '/operators/castle.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'pulse',
        operator: 'Pulse',
        alt: 'Pulse',
        image: '/operators/pulse.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'doc',
        operator: 'Doc',
        alt: 'Doc',
        image: '/operators/doc.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'rook',
        operator: 'Rook',
        alt: 'Rook',
        image: '/operators/rook.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'jager',
        operator: 'Jager',
        alt: 'Jager',
        image: '/operators/jager.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'bandit',
        operator: 'Bandit',
        alt: 'Bandit',
        image: '/operators/bandit.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'tachanka',
        operator: 'Tachanka',
        alt: 'Tachanka',
        image: '/operators/tachanka.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'kapkan',
        operator: 'Kapkan',
        alt: 'Kapkan',
        image: '/operators/kapkan.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'frost',
        operator: 'Frost',
        alt: 'Frost',
        image: '/operators/frost.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'valkyrie',
        operator: 'Valkyrie',
        alt: 'Valkyrie',
        image: '/operators/valkyrie.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'caveira',
        operator: 'Caveira',
        alt: 'Caveira',
        image: '/operators/caveira.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'echo',
        operator: 'Echo',
        alt: 'Echo',
        image: '/operators/echo.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'mira',
        operator: 'Mira',
        alt: 'Mira',
        image: '/operators/mira.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'lesion',
        operator: 'Lesion',
        alt: 'Lesion',
        image: '/operators/lesion.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'ela',
        operator: 'Ela',
        alt: 'Ela',
        image: '/operators/ela.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'vigil',
        operator: 'Vigil',
        alt: 'Vigil',
        image: '/operators/vigil.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'alibi',
        operator: 'Alibi',
        alt: 'Alibi',
        image: '/operators/alibi.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'maestro',
        operator: 'Maestro',
        alt: 'Maestro',
        image: '/operators/maestro.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'clash',
        operator: 'Clash',
        alt: 'Clash',
        image: '/operators/clash.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'kaid',
        operator: 'Kaid',
        alt: 'Kaid',
        image: '/operators/kaid.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'mozzie',
        operator: 'Mozzie',
        alt: 'Mozzie',
        image: '/operators/mozzie.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'warden',
        operator: 'Warden',
        alt: 'Warden',
        image: '/operators/warden.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'goyo',
        operator: 'Goyo',
        alt: 'Goyo',
        image: '/operators/goyo.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'wamai',
        operator: 'Wamai',
        alt: 'Wamai',
        image: '/operators/wamai.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'oryx',
        operator: 'Oryx',
        alt: 'Oryx',
        image: '/operators/oryx.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'melusi',
        operator: 'Melusi',
        alt: 'Melusi',
        image: '/operators/melusi.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'aruni',
        operator: 'Aruni',
        alt: 'Aruni',
        image: '/operators/aruni.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'thunderbird',
        operator: 'Thunderbird',
        alt: 'Thunderbird',
        image: '/operators/thunderbird.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'thorn',
        operator: 'Thorn',
        alt: 'Thorn',
        image: '/operators/thorn.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'azami',
        operator: 'Azami',
        alt: 'Azami',
        image: '/operators/azami.png',
        title: '',
        xPos: 0,
        yPos: 0
    }
]

function Defenders(props: any) {
    const nodeRef = React.useRef(null);
    const Index = props.id;

    const handleStop = (event: any, dragElement: any) => {
        console.log("X : ", dragElement.x)
        console.log("Y : ", dragElement.y)
        console.log("Object : ", event.path[0])
        console.log("Element : ", event.path)
        event.path[0].style.transform = "translate(" + dragElement.x + "px, " + dragElement.y + "px)"
        event.path[0].setAttribute("x", dragElement.x);
        event.path[0].setAttribute("y", dragElement.y);
        // defendersInfo[event.path[0].id].xPos = dragElement.x
        // defendersInfo[event.path[0].id].yPos = dragElement.y
        // console.log("defendersInfo[event.path[0].id].xPos", defendersInfo[event.path[0].id].xPos)
        // console.log("defendersInfo[event.path[0].id].yPos", defendersInfo[event.path[0].id].yPos)

        if (dragElement.x > 0) {
            // event.path[0].style.transform = "translate(0px, 0px)"
            // defendersInfo[event.path[0].id].xPos = 0
            // defendersInfo[event.path[0].id].yPos = 0
            // event.path[0].style.transform = "translate("+defendersInfo[event.path[0].id].xPos+"px, "+defendersInfo[event.path[0].id].yPos+"px)"
            event.path[0].remove();
        }
    }
    if (!props.loaded) {
        return (
            <Draggable nodeRef={nodeRef} onStop={handleStop}>
                    <img ref={nodeRef} src={defendersInfo[Index].image} alt={defendersInfo[Index].alt} title={props.title} id={Index + "_def"}
                        className={styles.defenders} width={25} height={25}>
                    </img>
            </Draggable>
        )
    }
    else
    {
        return (
            <Draggable nodeRef={nodeRef} onStop={handleStop} defaultPosition={{ x: props.x, y: props.y }}>
                    <img ref={nodeRef} src={defendersInfo[Index].image} alt={defendersInfo[Index].alt} title={props.title} id={Index + "_def"}
                        className={styles.defenders} width={25} height={25}>
                    </img>
            </Draggable>
        )
    }
}
export default Defenders;