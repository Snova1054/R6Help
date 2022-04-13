/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import * as React from "react";
import Draggable from 'react-draggable';
import styles from '/styles/Operators.module.css'
// import Example from './operatorsTest'

const defendersInfo = [
    {
        id: 'mute',
        operator: 'Mute',
        alt: 'Mute',
        image: '/operators/mute.png',
        title: ''
    },
    {
        id: 'smoke',
        operator: 'Smoke',
        alt: 'Smoke',
        image: '/operators/smoke.png',
        title: ''
    },
    {
        id: 'castle',
        operator: 'Castle',
        alt: 'Castle',
        image: '/operators/castle.png',
        title: ''
    },
    {
        id: 'pulse',
        operator: 'Pulse',
        alt: 'Pulse',
        image: '/operators/pulse.png',
        title: ''
    },
    {
        id: 'doc',
        operator: 'Doc',
        alt: 'Doc',
        image: '/operators/doc.png',
        title: ''
    },
    {
        id: 'rook',
        operator: 'Rook',
        alt: 'Rook',
        image: '/operators/rook.png',
        title: ''
    },
    {
        id: 'jager',
        operator: 'Jager',
        alt: 'Jager',
        image: '/operators/jager.png',
        title: ''
    },
    {
        id: 'bandit',
        operator: 'Bandit',
        alt: 'Bandit',
        image: '/operators/bandit.png',
        title: ''
    },
    {
        id: 'tachanka',
        operator: 'Tachanka',
        alt: 'Tachanka',
        image: '/operators/tachanka.png',
        title: ''
    },
    {
        id: 'kapkan',
        operator: 'Kapkan',
        alt: 'Kapkan',
        image: '/operators/kapkan.png',
        title: ''
    },
    {
        id: 'frost',
        operator: 'Frost',
        alt: 'Frost',
        image: '/operators/frost.png',
        title: ''
    },
    {
        id: 'valkyrie',
        operator: 'Valkyrie',
        alt: 'Valkyrie',
        image: '/operators/valkyrie.png',
        title: ''
    },
    {
        id: 'caveira',
        operator: 'Caveira',
        alt: 'Caveira',
        image: '/operators/caveira.png',
        title: ''
    },
    {
        id: 'echo',
        operator: 'Echo',
        alt: 'Echo',
        image: '/operators/echo.png',
        title: ''
    },
    {
        id: 'mira',
        operator: 'Mira',
        alt: 'Mira',
        image: '/operators/mira.png',
        title: ''
    },
    {
        id: 'lesion',
        operator: 'Lesion',
        alt: 'Lesion',
        image: '/operators/lesion.png',
        title: ''
    },
    {
        id: 'ela',
        operator: 'Ela',
        alt: 'Ela',
        image: '/operators/ela.png',
        title: ''
    },
    {
        id: 'vigil',
        operator: 'Vigil',
        alt: 'Vigil',
        image: '/operators/vigil.png',
        title: ''
    },
    {
        id: 'alibi',
        operator: 'Alibi',
        alt: 'Alibi',
        image: '/operators/alibi.png',
        title: ''
    },
    {
        id: 'maestro',
        operator: 'Maestro',
        alt: 'Maestro',
        image: '/operators/maestro.png',
        title: ''
    },
    {
        id: 'clash',
        operator: 'Clash',
        alt: 'Clash',
        image: '/operators/clash.png',
        title: ''
    },
    {
        id: 'kaid',
        operator: 'Kaid',
        alt: 'Kaid',
        image: '/operators/kaid.png',
        title: ''
    },
    {
        id: 'mozzie',
        operator: 'Mozzie',
        alt: 'Mozzie',
        image: '/operators/mozzie.png',
        title: ''
    },
    {
        id: 'warden',
        operator: 'Warden',
        alt: 'Warden',
        image: '/operators/warden.png',
        title: ''
    },
    {
        id: 'goyo',
        operator: 'Goyo',
        alt: 'Goyo',
        image: '/operators/goyo.png',
        title: ''
    },
    {
        id: 'wamai',
        operator: 'Wamai',
        alt: 'Wamai',
        image: '/operators/wamai.png',
        title: ''
    },
    {
        id: 'oryx',
        operator: 'Oryx',
        alt: 'Oryx',
        image: '/operators/oryx.png',
        title: ''
    },
    {
        id: 'melusi',
        operator: 'Melusi',
        alt: 'Melusi',
        image: '/operators/melusi.png',
        title: ''
    },
    {
        id: 'aruni',
        operator: 'Aruni',
        alt: 'Aruni',
        image: '/operators/aruni.png',
        title: ''
    },
    {
        id: 'thunderbird',
        operator: 'Thunderbird',
        alt: 'Thunderbird',
        image: '/operators/thunderbird.png',
        title: ''
    },
    {
        id: 'thorn',
        operator: 'Thorn',
        alt: 'Thorn',
        image: '/operators/thorn.png',
        title: ''
    },
    {
        id: 'azami',
        operator: 'Azami',
        alt: 'Azami',
        image: '/operators/azami.png',
        title: ''
    }
]

const attackersInfo = [
    {
        id: 'sledge',
        operator: 'Sledge',
        alt: 'Sledge',
        image: '/operators/sledge.png',
        title: ''
    },
    {
        id: 'thatcher',
        operator: 'Thatcher',
        alt: 'Thatcher',
        image: '/operators/thatcher.png',
        title: ''
    },
    {
        id: 'ash',
        operator: 'Ash',
        alt: 'Ash',
        image: '/operators/ash.png',
        title: ''
    },
    {
        id: 'thermite',
        operator: 'Thermite',
        alt: 'Thermite',
        image: '/operators/thermite.png',
        title: ''
    },
    {
        id: 'montagne',
        operator: 'Montagne',
        alt: 'Montagne',
        image: '/operators/montagne.png',
        title: ''
    },
    {
        id: 'twitch',
        operator: 'Twitch',
        alt: 'Twitch',
        image: '/operators/twitch.png',
        title: ''
    },
    {
        id: 'blitz',
        operator: 'Blitz',
        alt: 'Blitz',
        image: '/operators/blitz.png',
        title: ''
    },
    {
        id: 'iq',
        operator: 'IQ',
        alt: 'IQ',
        image: '/operators/iq.png',
        title: ''
    },
    {
        id: 'fuze',
        operator: 'Fuze',
        alt: 'Fuze',
        image: '/operators/fuze.png',
        title: ''
    },
    {
        id: 'glaz',
        operator: 'Glaz',
        alt: 'Glaz',
        image: '/operators/glaz.png',
        title: ''
    },
    {
        id: 'buck',
        operator: 'Buck',
        alt: 'Buck',
        image: '/operators/buck.png',
        title: ''
    },
    {
        id: 'blackbeard',
        operator: 'Blackbeard',
        alt: 'Blackbeard',
        image: '/operators/blackbeard.png',
        title: ''
    },
    {
        id: 'capitao',
        operator: 'Capitao',
        alt: 'Capitao',
        image: '/operators/capitao.png',
        title: ''
    },
    {
        id: 'hibana',
        operator: 'Hibana',
        alt: 'Hibana',
        image: '/operators/hibana.png',
        title: ''
    },
    {
        id: 'jackal',
        operator: 'Jackal',
        alt: 'Jackal',
        image: '/operators/jackal.png',
        title: ''
    },
    {
        id: 'ying',
        operator: 'Ying',
        alt: 'Ying',
        image: '/operators/ying.png',
        title: ''
    },
    {
        id: 'zofia',
        operator: 'Zofia',
        alt: 'Zofia',
        image: '/operators/zofia.png',
        title: ''
    },
    {
        id: 'dokkaebi',
        operator: 'Dokkaebi',
        alt: 'Dokkaebi',
        image: '/operators/dokkaebi.png',
        title: ''
    },
    {
        id: 'finka',
        operator: 'Finka',
        alt: 'Finka',
        image: '/operators/finka.png',
        title: ''
    },
    {
        id: 'lion',
        operator: 'Lion',
        alt: 'Lion',
        image: '/operators/lion.png',
        title: ''
    },
    {
        id: 'maverick',
        operator: 'Maverick',
        alt: 'Maverick',
        image: '/operators/maverick.png',
        title: ''
    },
    {
        id: 'nomad',
        operator: 'Nomad',
        alt: 'Nomad',
        image: '/operators/nomad.png',
        title: ''
    },
    {
        id: 'gridlock',
        operator: 'Gridlock',
        alt: 'Gridlock',
        image: '/operators/gridlock.png',
        title: ''
    },
    {
        id: 'nokk',
        operator: 'Nokk',
        alt: 'Nokk',
        image: '/operators/nokk.png',
        title: ''
    },
    {
        id: 'amaru',
        operator: 'Amaru',
        alt: 'Amaru',
        image: '/operators/amaru.png',
        title: ''
    },
    {
        id: 'kali',
        operator: 'Kali',
        alt: 'Kali',
        image: '/operators/kali.png',
        title: ''
    },
    {
        id: 'iana',
        operator: 'Iana',
        alt: 'Iana',
        image: '/operators/iana.png',
        title: ''
    },
    {
        id: 'ace',
        operator: 'Ace',
        alt: 'Ace',
        image: '/operators/ace.png',
        title: ''
    },
    {
        id: 'zero',
        operator: 'Zero',
        alt: 'Zero',
        image: '/operators/zero.png',
        title: ''
    },
    {
        id: 'flores',
        operator: 'Flores',
        alt: 'Flores',
        image: '/operators/flores.png',
        title: ''
    },
    {
        id: 'osa',
        operator: 'Osa',
        alt: 'Osa',
        image: '/operators/osa.png',
        title: ''
    }
]

const Operators: NextPage = () => {
  const nodeRef = React.useRef(null);

  return (
    <div>
      <div id='defenders' className={styles.flexOps}>
        {defendersInfo.map(({id, operator, alt, image, title}) => {
            return (
                <Draggable nodeRef={nodeRef} key={id}>
                    <img ref={nodeRef} src={image} alt={alt} width={25} height={25} title={title}>
                    </img>
                </Draggable>
            );
        })}
      </div>
      <div id='attackers' className={styles.flexOps}>
        {attackersInfo.map(({id, operator, alt, image, title}) => {
            return (
                <Draggable nodeRef={nodeRef} key={id}>
                    <img ref={nodeRef} src={image} alt={alt} width={25} height={25} title={title}>
                    </img>
                </Draggable>
            );
        })}
      </div>
    </div>
  )
}
export default Operators;