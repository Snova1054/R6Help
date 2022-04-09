/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import * as React from "react";
import Draggable from 'react-draggable';
import styles from '/styles/Operators.module.css'

const Operators: NextPage = () => {
  const nodeRef = React.useRef(null);

  return (
    <div>
      <div id='defenders' className={styles.flexOps}>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/mute.png' alt='Mute' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/smoke.png' alt='Smoke' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/castle.png' alt='Castle' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/pulse.png' alt='Pulse' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/doc.png' alt='Doc' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/Rook.png' alt='Rook' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/jager.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/bandit.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/tachanka.png' alt='Tachanka' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/kapkan.png' alt='Kapkan' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/frost.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/valkyrie.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/caveira.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/echo.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/mira.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/lesion.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/ela.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/vigil.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/alibi.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/maestro.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/clash.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/kaid.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/mozzie.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/warden.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/goyo.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/wamai.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/oryx.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/melusi.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/aruni.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/thunderbird.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/thorn.png' alt='Jager' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/azami.png' alt='Bandit' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
      </div>
      <div id='attackers' className={styles.flexOps}>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/sledge.png' alt='Sledge' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/thatcher.png' alt='Thatcher' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/ash.png' alt='Ash' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/thermite.png' alt='Thermite' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/montagne.png' alt='Montagne' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/twitch.png' alt='Twitch' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/blitz.png' alt='Blitz' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/iq.png' alt='IQ' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/fuze.png' alt='Fuze' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/glaz.png' alt='Glaz' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/buck.png' alt='Buck' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/blackbeard.png' alt='Blackbeard' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/capitao.png' alt='Capitao' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/hibana.png' alt='Hibana' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/jackal.png' alt='Jackal' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/ying.png' alt='Ying' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/zofia.png' alt='Zofia' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/dokkaebi.png' alt='Dokkaebi' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/finka.png' alt='Finka' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/lion.png' alt='Lion' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/maverick.png' alt='Maverick' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/nomad.png' alt='Nomad' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/gridlock.png' alt='Gridlock' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/nokk.png' alt='Nokk' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/amaru.png' alt='Amaru' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/kali.png' alt='Kali' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/iana.png' alt='Iana' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/ace.png' alt='Ace' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/zero.png' alt='Zero' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/flores.png' alt='Flores' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
            <img ref={nodeRef} src='/operators/osa.png' alt='Osa' width={25} height={25} title={'hello'}>
            </img>
        </Draggable>
      </div>
    </div>
  )
}
export default Operators;