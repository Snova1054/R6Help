/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Map.module.css'
import React, { useState, useEffect, createRef, useRef } from 'react';
import Draggable from 'react-draggable';
import Defenders from '../defenders'
import Attackers from '../attackers'
import { render } from 'react-dom';

const defendersArray = [
    { name: "Mute" },
    { name: "Smoke" },
    { name: "Castle" },
    { name: "Pulse" },
    { name: "Doc" },
    { name: "Rook" },
    { name: "Jager" },
    { name: "Bandit" },
    { name: "Tachanka" },
    { name: "Kapkan" },
    { name: "Frost" },
    { name: "Valkyrie" },
    { name: "Caveira" },
    { name: "Echo" },
    { name: "Mira" },
    { name: "Lesion" },
    { name: "Ela" },
    { name: "Vigil" },
    { name: "Alibi" },
    { name: "Maestro" },
    { name: "Clash" },
    { name: "Kaid" },
    { name: "Mozzie" },
    { name: "Warden" },
    { name: "Goyo" },
    { name: "Wamai" },
    { name: "Oryx" },
    { name: "Melusi" },
    { name: "Aruni" },
    { name: "Thunderbird" },
    { name: "Thorn" },
    { name: "Azami" }
];
const attackersArray = [
    { name: 'Sledge' },
    { name: 'Thatcher' },
    { name: 'Ash' },
    { name: 'Thermite' },
    { name: 'Montagne' },
    { name: 'Twitch' },
    { name: 'Blitz' },
    { name: 'IQ' },
    { name: 'Fuze' },
    { name: 'Glaz' },
    { name: 'Buck' },
    { name: 'Blackbeard' },
    { name: 'Capitao' },
    { name: 'Hibana' },
    { name: 'Jackal' },
    { name: 'Ying' },
    { name: 'Zofia' },
    { name: 'Dokkaebi' },
    { name: 'Finka' },
    { name: 'Lion' },
    { name: 'Maverick' },
    { name: 'Nomad' },
    { name: 'Gridlock' },
    { name: 'Nokk' },
    { name: 'Amaru' },
    { name: 'Kali' },
    { name: 'Iana' },
    { name: 'Ace' },
    { name: 'Zero' },
    { name: 'Flores' },
    { name: 'Osa' }
]

const Bank1: NextPage = () => {
    const nodeRef = React.useRef(null);
    
    const [name, setName] = useState(String);
    const [count, setCount] = useState(Number);
    const [visibility, setVisibility] = useState(false);
    const [showedDefenders, setShowedDefenders] = useState<any>([]);
    const [selectedDefender, setSelectedDefender] = useState('0');
    const [showedAttackers, setShowedAttackers] = useState<any>([]);
    const [selectedAttacker, setSelectedAttacker] = useState('0');
    const [titleOps, setTitleOps] = useState("");
    const [refsDataState, setRefsDataState] = useState<any>([]);

    // const showedLength = showedDefenders.length;

    const defendersRefs = useRef<any>([]);
    const attackersRef = useRef<any>([]);

    const textAreaRef = useRef<any>();

    const refsDataArray: { id: any; type: any; title: any; x: any; y: any; }[] = [];


    function addDefender() {
        console.log(selectedDefender);
        setShowedDefenders([...showedDefenders, { id: selectedDefender, title: titleOps }]);
        setTitleOps("");
        textAreaRef.current.value = "";
    }

    function addAttacker() {
        console.log(selectedAttacker);
        setShowedAttackers([...showedAttackers, { id: selectedAttacker, title: titleOps }]);
        setTitleOps("");
    }

    function selectDefender(e: { target: { value: any; }; }) {
        const defender = e.target.value;
        setSelectedDefender(defender);
    }

    function selectAttacker(e: { target: { value: any; }; }) {
        const attacker = e.target.value;
        setSelectedAttacker(attacker);
    }

    // // Los estados definidos se pueden usar dentro de otras funciones
    // function getName(){
    //     console.log(name)
    // }

    /**
     * Console logs if DragElement has been removed
     * 
     * @param fileName
     * @returns script version
    */
    function refreshRefs() {
        for (let i = 0; i < defendersRefs.current.length; i++) {
            if (defendersRefs.current[i].firstChild == null) {
                // defendersRefs.current[i].splice(i, 1);
                console.log(defendersRefs.current[i])
            }
        }
        for (let i = 0; i < attackersRef.current.length; i++) {
            if (attackersRef.current[i].firstChild == null) {
                // attackersRef.current[i].splice(i, 1);
                console.log(attackersRef.current[i])
            }
        }
        // defendersRefs.splice(index, 1)
        // defendersRefs.current.filter(isNull);
        // attackersRef.current.filter(isNull);
    }

    function showAllRefs() {
        defendersRefs.current.forEach((element: { firstChild: { attributes: { x: { nodeValue: any; } | null; y: { nodeValue: any; } | null; }; alt: string; } | null; }) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + " attributes.x.nodeValue : ", element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + " attributes.y.nodeValue : ", element.firstChild.attributes.y.nodeValue)
            }
        });
        attackersRef.current.forEach((element: { firstChild: { attributes: { x: { nodeValue: any; } | null; y: { nodeValue: any; } | null; }; alt: string; } | null; }) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + " attributes.x.nodeValue : ", element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + " attributes.y.nodeValue : ", element.firstChild.attributes.y.nodeValue)
            }
        });
    }

    function saveAllRefs() {
        refsDataArray.length = 0;
        let index = 0;
        defendersRefs.current.forEach((element: { firstChild: { attributes: { x: { nodeValue: any; } | null; y: { nodeValue: any; } | null; }; alt: string; id: string; className: string; title: any; } | null; }) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + " attributes.x.nodeValue : ", element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + " attributes.y.nodeValue : ", element.firstChild.attributes.y.nodeValue)
                refsDataArray.push({
                    id: element.firstChild.id.split("_")[0],
                    type: element.firstChild.className.split(" ")[0],
                    title: element.firstChild.title,
                    x: element.firstChild.attributes.x.nodeValue,
                    y: element.firstChild.attributes.y.nodeValue});
                loadOpsRef(index);
                // setRefsDataState([...refsDataState, {
                //     id: element.firstChild.id.split("_")[0],
                //     type: element.firstChild.className.split(" ")[0],
                //     title: element.firstChild.title,
                //     x: element.firstChild.attributes.x.nodeValue,
                //     y: element.firstChild.attributes.y.nodeValue
                // }]);
            }
            index++;
        });
        // console.log(refsDataArray);
        // console.log(refsDataState);
        // {refsDataState.map(({ type }) => {
        //     console.log(type)
        // })}


        // attackersRef.current.forEach(element => {
        //     console.log(element.firstChild.alt + " img : ", element.firstChild);
        //     if (element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
        //         console.log(element.firstChild.alt + " attributes.x.nodeValue : ", element.firstChild.attributes.x.nodeValue)
        //         console.log(element.firstChild.alt + " attributes.y.nodeValue : ", element.firstChild.attributes.y.nodeValue)
        //     }
        // });
    }

    function loadOpsRef(index: number)
    {
        setRefsDataState((previous: any) => [...previous, {
            id: defendersRefs.current[index].firstChild.id.split("_")[0],
            type: defendersRefs.current[index].firstChild.className.split(" ")[0],
            title: defendersRefs.current[index].firstChild.title,
            x: parseInt(defendersRefs.current[index].firstChild.attributes.x.nodeValue),
            y: parseInt(defendersRefs.current[index].firstChild.attributes.y.nodeValue)
        }]);
    }

    // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
    // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
    // Y se ira actualizando al mismo tiempo que vaya cambiando su valor
    useEffect(() => {
        // document.title = `${count} Clicks`
        console.log(`Number of clicks : ${count}`)
    })


    return (
        <div className='bg-black h-screen'>
            <Head>
                <title>R6 Help - Index</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    Header here
                </header>

                <main className={styles.main}>
                    <div className={styles.flexOps}>
                        <select style={{ color: "black", textAlign: "center" }} id={"defenderSelect"} onChange={selectDefender}>
                            {defendersArray.map(({ name }, Index) => {
                                return (
                                    <option key={Index} value={Index}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                        &nbsp;
                        <select style={{ color: "black", textAlign: "center" }} id={"attackerSelect"} onChange={selectAttacker}>
                            {attackersArray.map(({ name }, Index) => {
                                return (
                                    <option key={Index} value={Index}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={styles.flexOps}>
                        <textarea ref={textAreaRef} style={{ color: "black" }} name="defenderText" id="defAdd" cols={30} rows={4} onChange={e => setTitleOps(e.target.value)} placeholder="&nbsp;&nbsp;&nbsp;What should the operator do?&nbsp;&nbsp; &rarr;Make the rotates&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Reinforce hatches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Drone, e.g., Lobby"></textarea>
                        &nbsp;
                        <textarea style={{ color: "black" }} name="attackerText" id="atkAdd" cols={30} rows={4} onChange={e => setTitleOps(e.target.value)} placeholder="&nbsp;&nbsp;&nbsp;What should the operator do?&nbsp;&nbsp; &rarr;Make the rotates&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Reinforce hatches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Drone, e.g., Lobby"></textarea>
                    </div>
                    <div className={styles.flexOps}>
                        <button onClick={addDefender}>
                            Add defender
                        </button>
                        &nbsp;
                        <button onClick={addAttacker}>
                            Add attacker
                        </button>
                    </div>
                    <div className={styles.flexOps}>
                        {refsDataState.map(({ id, type, title, x, y}: any, Index: any) => {
                            if(type == "defender")
                            {
                                return(
                                    <div key={Index}>
                                        <Defenders key={Index} id={id} title={title} loaded={true} x={x} y={y}/>
                                    </div>  
                                );
                            }
                            else
                            {
                                return(
                                <div key={Index}>
                                    <Attackers key={Index} id={id}/>
                                </div>  
                                );
                            }
                        })}
                    </div>
                    <div className={styles.flexOps}>
                        {showedDefenders.map(({ id, title }: any, Index: any) => {
                            return (
                                <div key={Index} ref={defender => defendersRefs.current[Index] = defender}>
                                    <Defenders key={Index} id={id} title={title} loaded={false} x={0} y={0} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.flexOps}>
                        {showedAttackers.map(({ id, title }: any, Index: any) => {
                            return (
                                <div key={Index} ref={attacker => attackersRef.current[Index] = attacker}>
                                    <Attackers key={Index} id={id} />
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <button onClick={showAllRefs} style={{ color: "yellow" }}>
                            showAllRefs
                        </button>
                    </div>
                    <div>
                        <button onClick={refreshRefs} style={{ color: "yellow" }}>
                            refreshRefs
                        </button>
                    </div>
                    <div>
                        <button onClick={saveAllRefs} style={{ color: "yellow" }}>
                            saveAllRefs
                        </button>
                    </div>
                    <div>
                        {/* <p>Input Name: <input type="text" onChange={e => setName(e.target.value)} /></p>
                    <p>Name: {name}</p>
                    <button onClick={getName}>console.log(name)</button>
                    <br/> */}
                        <button onClick={() => setVisibility(!visibility)}>Click here for<br></br>Smoke{visibility}</button>
                        {visibility ? <Defenders id={1} title={"There's a fkg smoke"} loaded={false} x={0} y={0} /> : null}
                    </div>
                    <div id='utilities' className={styles.flexOps}>
                        <Draggable nodeRef={nodeRef}>
                            <img ref={nodeRef} src='/utilities/green-dot1.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable nodeRef={nodeRef}>
                            <img ref={nodeRef} src='/utilities/green-dot2.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable nodeRef={nodeRef}>
                            <img ref={nodeRef} src='/utilities/green-dot3.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable nodeRef={nodeRef}>
                            <img ref={nodeRef} src='/utilities/green-dot4.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable nodeRef={nodeRef}>
                            <img ref={nodeRef} src='/utilities/line.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                    </div>
                    <img src='/maps/bank/r6-maps-bank-blueprint-3.jpg' alt='Bank 2nd Floor  ' height={'85%'} width={'85%'}>
                    </img>
                    <img src='/maps/bank/r6-maps-bank-blueprint-1.jpg' alt='Bank 2nd Floor  ' height={'85%'} width={'85%'}>
                    </img>
                    <img src='/maps/bank/r6-maps-bank-blueprint-2.jpg' alt='Bank 2nd Floor  ' height={'85%'} width={'85%'}>
                    </img>
                    <img src='/maps/bank/r6-maps-bank-blueprint-4.jpg' alt='Bank 2nd Floor  ' height={'85%'} width={'85%'}>
                    </img>

                </main>

                <footer className={styles.footer}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        Powered by Me{' '}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default Bank1
