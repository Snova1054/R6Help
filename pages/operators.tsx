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


const Operators: NextPage = () => {
const nodeRef = React.useRef(null);

const [dragging, setDragging] = useState(0)

const handleStop = (event, dragElement) => {
    console.log("X : ", dragElement.x)
    console.log("Y : ", dragElement.y)
    console.log("Object : ", event.path[0])
    console.log("Element : ", event.path)
    event.path[0].style.transform = "translate("+dragElement.x+"px, "+dragElement.y+"px)"
    if((event.path[0].className).includes("defender"))
    {
        defendersInfo[event.path[0].id].xPos = dragElement.x
        defendersInfo[event.path[0].id].yPos = dragElement.y
        console.log("defendersInfo[event.path[0].id].xPos", defendersInfo[event.path[0].id].xPos)
        console.log("defendersInfo[event.path[0].id].yPos", defendersInfo[event.path[0].id].yPos)

        if(dragElement.y < 0)
        {
            event.path[0].style.transform = "translate(0px, 0px)"
            defendersInfo[event.path[0].id].xPos = 0
            defendersInfo[event.path[0].id].yPos = 0
            event.path[0].style.transform = "translate("+defendersInfo[event.path[0].id].xPos+"px, "+defendersInfo[event.path[0].id].yPos+"px)"
            event.path[0].remove();
        }
    }
    else if((event.path[0].className).includes("attacker"))
    {
        attackersInfo[event.path[0].id].xPos = dragElement.x
        attackersInfo[event.path[0].id].yPos = dragElement.y
        console.log("attackersInfo[event.path[0].id].xPos", attackersInfo[event.path[0].id].xPos)
        console.log("attackersInfo[event.path[0].id].yPos", attackersInfo[event.path[0].id].yPos)

        if(dragElement.y < 0)
        {
            event.path[0].style.transform = "translate(0px, 0px)"
            attackersInfo[event.path[0].id].xPos = 0
            attackersInfo[event.path[0].id].yPos = 0
            event.path[0].style.transform = "translate("+attackersInfo[event.path[0].id].xPos+"px, "+attackersInfo[event.path[0].id].yPos+"px)"
            event.path[0].remove();
        }
    }
}
// const x = 100;
// const y = 100;
// const stylese = { 
//     transform: `translate(${x}px, ${y}px)` 
// };

  return (
    <div>
      <div id='defenders' className={styles.flexOps}>
        {defendersInfo.map(({id, operator, alt, image, title, xPos, yPos}, Index) => {
            let i = ""+Index+"";
            return (
                <Draggable nodeRef={nodeRef} key={id} onStop={handleStop}>
                {/* <Draggable nodeRef={nodeRef} key={Index} onStop={handleStop}> */}
                    <img ref={nodeRef} id={i} className="defender" src={image} alt={alt} width={25} height={25} title={title}>
                    </img>
                </Draggable>
            );
        })}
      </div>
      <div id='attackers' className={styles.flexOps}>
        {attackersInfo.map(({id, operator, alt, image, title, xPos, yPos}, Index) => {
            let i = ""+Index+"";
            return (
                <Draggable nodeRef={nodeRef} key={id} onStop={handleStop}>
                    <img ref={nodeRef} id={i} className="attacker" src={image} alt={alt} width={25} height={25} title={title}>
                    </img>
                </Draggable>
            );
        })}
      </div>
    </div>
  )
}
export default Operators;