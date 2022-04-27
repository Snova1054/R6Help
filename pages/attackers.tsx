/* eslint-disable @next/next/no-img-element */
import { drag } from 'd3';
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import styles from '/styles/Operators.module.css'
// import Example from './operatorsTest'

const attackersInfo = [
    {
        id: 'sledge',
        operator: 'Sledge',
        alt: 'Sledge',
        image: '/operators/sledge.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'thatcher',
        operator: 'Thatcher',
        alt: 'Thatcher',
        image: '/operators/thatcher.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'ash',
        operator: 'Ash',
        alt: 'Ash',
        image: '/operators/ash.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'thermite',
        operator: 'Thermite',
        alt: 'Thermite',
        image: '/operators/thermite.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'montagne',
        operator: 'Montagne',
        alt: 'Montagne',
        image: '/operators/montagne.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'twitch',
        operator: 'Twitch',
        alt: 'Twitch',
        image: '/operators/twitch.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'blitz',
        operator: 'Blitz',
        alt: 'Blitz',
        image: '/operators/blitz.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'iq',
        operator: 'IQ',
        alt: 'IQ',
        image: '/operators/iq.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'fuze',
        operator: 'Fuze',
        alt: 'Fuze',
        image: '/operators/fuze.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'glaz',
        operator: 'Glaz',
        alt: 'Glaz',
        image: '/operators/glaz.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'buck',
        operator: 'Buck',
        alt: 'Buck',
        image: '/operators/buck.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'blackbeard',
        operator: 'Blackbeard',
        alt: 'Blackbeard',
        image: '/operators/blackbeard.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'capitao',
        operator: 'Capitao',
        alt: 'Capitao',
        image: '/operators/capitao.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'hibana',
        operator: 'Hibana',
        alt: 'Hibana',
        image: '/operators/hibana.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'jackal',
        operator: 'Jackal',
        alt: 'Jackal',
        image: '/operators/jackal.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'ying',
        operator: 'Ying',
        alt: 'Ying',
        image: '/operators/ying.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'zofia',
        operator: 'Zofia',
        alt: 'Zofia',
        image: '/operators/zofia.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'dokkaebi',
        operator: 'Dokkaebi',
        alt: 'Dokkaebi',
        image: '/operators/dokkaebi.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'finka',
        operator: 'Finka',
        alt: 'Finka',
        image: '/operators/finka.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'lion',
        operator: 'Lion',
        alt: 'Lion',
        image: '/operators/lion.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'maverick',
        operator: 'Maverick',
        alt: 'Maverick',
        image: '/operators/maverick.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'nomad',
        operator: 'Nomad',
        alt: 'Nomad',
        image: '/operators/nomad.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'gridlock',
        operator: 'Gridlock',
        alt: 'Gridlock',
        image: '/operators/gridlock.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'nokk',
        operator: 'Nokk',
        alt: 'Nokk',
        image: '/operators/nokk.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'amaru',
        operator: 'Amaru',
        alt: 'Amaru',
        image: '/operators/amaru.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'kali',
        operator: 'Kali',
        alt: 'Kali',
        image: '/operators/kali.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'iana',
        operator: 'Iana',
        alt: 'Iana',
        image: '/operators/iana.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'ace',
        operator: 'Ace',
        alt: 'Ace',
        image: '/operators/ace.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'zero',
        operator: 'Zero',
        alt: 'Zero',
        image: '/operators/zero.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'flores',
        operator: 'Flores',
        alt: 'Flores',
        image: '/operators/flores.png',
        title: '',
        xPos: 0,
        yPos: 0
    },
    {
        id: 'osa',
        operator: 'Osa',
        alt: 'Osa',
        image: '/operators/osa.png',
        title: '',
        xPos: 0,
        yPos: 0
    }
]

function Attackers(props: any) {
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
        // attackersInfo[event.path[0].id].xPos = dragElement.x
        // attackersInfo[event.path[0].id].yPos = dragElement.y
        // console.log("attackersInfo[event.path[0].id].xPos", attackersInfo[event.path[0].id].xPos)
        // console.log("attackersInfo[event.path[0].id].yPos", attackersInfo[event.path[0].id].yPos)

        if (dragElement.x > 0) {
            // event.path[0].style.transform = "translate(0px, 0px)"
            // attackersInfo[event.path[0].id].xPos = 0
            // attackersInfo[event.path[0].id].yPos = 0
            // event.path[0].style.transform = "translate("+attackersInfo[event.path[0].id].xPos+"px, "+attackersInfo[event.path[0].id].yPos+"px)"
            event.path[0].remove();
        }
    }
    if (!props.loaded) {
        return (
            <Draggable nodeRef={nodeRef} onStop={handleStop}>
                <img ref={nodeRef} src={attackersInfo[Index].image} alt={attackersInfo[Index].alt} title={props.title} id={Index + "_atk"}
                    className={styles.attackers} width={25} height={25}>
                </img>
            </Draggable>
        )
    }
    else
    {
        return (
            <Draggable nodeRef={nodeRef} onStop={handleStop} defaultPosition={{ x: props.x, y: props.y }}>
                <img ref={nodeRef} src={attackersInfo[Index].image} alt={attackersInfo[Index].alt} title={props.title} id={Index + "_atk"}
                    className={styles.attackers} width={25} height={25}>
                </img>
            </Draggable>
        )
    }
}
export default Attackers;