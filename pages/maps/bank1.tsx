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

const gadgetsArray = [{name: 'Barbed Wire', title: 'Barbed Wire', quantity: 2, image: '/gadgets/barbed_wire.png'}, {name: 'Bulletproof Camera', title: 'Bulletproof Camera', quantity: 1, image: '/gadgets/bulletproof_camera.png'}, {name: 'Deployable Shield', title: 'Deployable Shield', quantity: 1, image: '/gadgets/deployable_shield.png'}, {name: 'Nitro Cell', title: 'Nitro Cell', quantity: 1, image: '/gadgets/nitro_cell.png'}, {name: 'Proximity Alarm', title: 'Proximity Alarm', quantity: 2, image: '/gadgets/proximity_alarm.png'}, {name: 'Impact Grenade', title: 'Impact Grenade', quantity: 2, image: '/gadgets/impact_grenade.png'}];

const defendersArray = [{ arrayindex: 0, name: 'Mute' },{ arrayindex: 2, name: 'Smoke' },{ arrayindex: 4, name: 'Castle' },{ arrayindex: 6, name: 'Pulse' },{ arrayindex: 8, name: 'Doc' },{ arrayindex: 10, name: 'Rook' },{ arrayindex: 12, name: 'Jager' },{ arrayindex: 14, name: 'Bandit' },{ arrayindex: 16, name: 'Tachanka' },{ arrayindex: 18, name: 'Kapkan' },{ arrayindex: 20, name: 'Frost' },{ arrayindex: 22, name: 'Valkyrie' },{ arrayindex: 24, name: 'Caveira' },{ arrayindex: 26, name: 'Echo' },{ arrayindex: 28, name: 'Mira' },{ arrayindex: 30, name: 'Lesion' },{ arrayindex: 32, name: 'Ela' },{ arrayindex: 34, name: 'Vigil' },{ arrayindex: 36, name: 'Alibi' },{ arrayindex: 38, name: 'Maestro' },{ arrayindex: 40, name: 'Clash' },{ arrayindex: 42, name: 'Kaid' },{ arrayindex: 44, name: 'Mozzie' },{ arrayindex: 46, name: 'Warden' },{ arrayindex: 48, name: 'Goyo' },{ arrayindex: 50, name: 'Wamai' },{ arrayindex: 52, name: 'Oryx' },{ arrayindex: 54, name: 'Melusi' },{ arrayindex: 56, name: 'Aruni' },{ arrayindex: 58, name: 'Thunderbird' },{ arrayindex: 60, name: 'Thorn' },{ arrayindex: 62, name: 'Azami' }];
const attackersArray = [{ arrayindex: 1, name: 'Sledge' },{ arrayindex: 3, name: 'Thatcher' },{ arrayindex: 5, name: 'Ash' },{ arrayindex: 7, name: 'Thermite' },{ arrayindex: 9, name: 'Montagne' },{ arrayindex: 11, name: 'Twitch' },{ arrayindex: 13, name: 'Blitz' },{ arrayindex: 15, name: 'IQ' },{ arrayindex: 17, name: 'Fuze' },{ arrayindex: 19, name: 'Glaz' },{ arrayindex: 21, name: 'Buck' },{ arrayindex: 23, name: 'Blackbeard' },{ arrayindex: 25, name: 'Capitao' },{ arrayindex: 27, name: 'Hibana' },{ arrayindex: 29, name: 'Jackal' },{ arrayindex: 31, name: 'Ying' },{ arrayindex: 33, name: 'Zofia' },{ arrayindex: 35, name: 'Dokkaebi' },{ arrayindex: 37, name: 'Finka' },{ arrayindex: 39, name: 'Lion' },{ arrayindex: 41, name: 'Maverick' },{ arrayindex: 43, name: 'Nomad' },{ arrayindex: 45, name: 'Gridlock' },{ arrayindex: 47, name: 'Nokk' },{ arrayindex: 49, name: 'Amaru' },{ arrayindex: 51, name: 'Kali' },{ arrayindex: 53, name: 'Iana' },{ arrayindex: 55, name: 'Ace' },{ arrayindex: 57, name: 'Zero' },{ arrayindex: 59, name: 'Flores' },{ arrayindex: 61, name: 'Osa' }]

const Bank1: NextPage = () => {
    
    // const [name, setName] = useState(String);
    // const [count, setCount] = useState(Number);
    const [visibility, setVisibility] = useState(false);
    const [showedDefenders, setShowedDefenders] = useState<any>([]);
    const [selectedDefender, setSelectedDefender] = useState('0');
    const [showedAttackers, setShowedAttackers] = useState<any>([]);
    const [selectedAttacker, setSelectedAttacker] = useState('0');
    const [titleOps, setTitleOps] = useState('');
    const [refsDataState, setRefsDataState] = useState<any>([]);
    const [selectAtkDef, setSelectAtkDef] = useState<string>('Defenders');
    const [selectStyle, setSelectStyle] = useState<string>('bg-blue-700 hover:bg-blue-900');
    
    // const showedLength = showedDefenders.length;
    
    const defendersRefs = useRef<any>([]);
    const attackersRef = useRef<any>([]);
    
    const textAreaRef = useRef<any>();
    
    const refsDataArray: any[] = [];

    const selectTagDef = useRef<any>();
    const selectTagAtk = useRef<any>();
    
    const selectsArray = [(<select ref={selectTagDef} key={0} style={{ color: 'black', textAlign: 'center' }} id={'defenderSelect'} onChange={selectDefender}>
    {defendersArray.map(({ name, arrayindex }, Index) => {
        return (
            <option key={arrayindex} value={Index}>
                {name}
            </option>
        );
    })}
</select>), (<select ref={selectTagAtk} key={1} style={{ color: 'black', textAlign: 'center' }} id={'attackerSelect'} onChange={selectAttacker}>
    {attackersArray.map(({ name, arrayindex }, Index) => {
        return (
            <option key={arrayindex} value={Index}>
                {name}
            </option>
        );
    })}
</select>)];

    const [selectSelected, setSelectSelected] = useState<JSX.Element>(selectsArray[0]);

    function addOperator() {
        if(selectAtkDef == 'Defenders')
        {            
            setShowedDefenders([...showedDefenders, { id: selectedDefender, title: titleOps }]);
        }
        else
        {
            setShowedAttackers([...showedAttackers, { id: selectedAttacker, title: titleOps }]);
        }
        console.log(selectedDefender);
        setTitleOps('');
        textAreaRef.current.value = '';
    }

    // function addAttacker() {
    //     console.log(selectedAttacker);
    //     setTitleOps('');
    // }

    function selectDefender(e: any) {
        const defender = e.target.value;
        setSelectedDefender(defender);
    }

    function selectAttacker(e: any) {
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
        defendersRefs.current.forEach((element: any) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + ' attributes.x.nodeValue : ', element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + ' attributes.y.nodeValue : ', element.firstChild.attributes.y.nodeValue)
            }
        });
        attackersRef.current.forEach((element: any) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + ' attributes.x.nodeValue : ', element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + ' attributes.y.nodeValue : ', element.firstChild.attributes.y.nodeValue)
            }
        });
    }

    function saveAllRefs() {
        refsDataArray.length = 0;
        let index = 0;
        defendersRefs.current.forEach((element: any) => {
            if (element.firstChild != null && element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
                console.log(element.firstChild.alt + ' attributes.x.nodeValue : ', element.firstChild.attributes.x.nodeValue)
                console.log(element.firstChild.alt + ' attributes.y.nodeValue : ', element.firstChild.attributes.y.nodeValue)
                refsDataArray.push({
                    id: element.firstChild.id.split('_')[0],
                    type: element.firstChild.className.split(' ')[0],
                    title: element.firstChild.title,
                    x: element.firstChild.attributes.x.nodeValue,
                    y: element.firstChild.attributes.y.nodeValue});
                loadOpsRef(index);
                // setRefsDataState([...refsDataState, {
                //     id: element.firstChild.id.split('_')[0],
                //     type: element.firstChild.className.split(' ')[0],
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
        //     console.log(element.firstChild.alt + ' img : ', element.firstChild);
        //     if (element.firstChild.attributes.x != null && element.firstChild.attributes.y != null) {
        //         console.log(element.firstChild.alt + ' attributes.x.nodeValue : ', element.firstChild.attributes.x.nodeValue)
        //         console.log(element.firstChild.alt + ' attributes.y.nodeValue : ', element.firstChild.attributes.y.nodeValue)
        //     }
        // });
    }

    function loadOpsRef(index: number)
    {
        setRefsDataState((previous: any) => [...previous, {
            id: defendersRefs.current[index].firstChild.id.split('_')[0],
            type: defendersRefs.current[index].firstChild.className.split(' ')[0],
            title: defendersRefs.current[index].firstChild.title,
            x: parseInt(defendersRefs.current[index].firstChild.attributes.x.nodeValue),
            y: parseInt(defendersRefs.current[index].firstChild.attributes.y.nodeValue)
        }]);
    }


    function changingSelectAtkDef()
    {
        console.log('selectSelected');
        if(selectAtkDef == 'Defenders')
        {
            setSelectSelected(selectsArray[1]);
            setSelectAtkDef('Attackers');
            setSelectStyle('bg-red-700 hover:bg-red-900');
            setSelectedDefender('0');
            setSelectedAttacker('0');
        }
        else
        {
            setSelectSelected(selectsArray[0]);
            setSelectAtkDef('Defenders');
            setSelectStyle('bg-blue-700 hover:bg-blue-900');
            setSelectedAttacker('0');
            setSelectedDefender('0');
        }
    }

    return (
        <div className='bg-black h-screen'>
            {/* <Head>
                <title>R6 Help - Index</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head> */}
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className='flex justify-center align-middle'>
                        <div>
                            <button className={selectStyle+' text-white font-bold py-2 px-4 rounded'} onClick={() => changingSelectAtkDef()}>
                                {selectAtkDef}
                            </button>
                            <div className={styles.flexOps}>
                                {selectSelected}
                            </div>
                        </div>
                        <div className={styles.flexOps}>
                            <textarea ref={textAreaRef} style={{ color: 'black' }} name='defenderText' id='defAdd' cols={30} rows={4} onChange={e => setTitleOps(e.target.value)} placeholder='&nbsp;&nbsp;&nbsp;What should the operator do?&nbsp;&nbsp; &rarr;Make the rotates&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Reinforce hatches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &rarr;Drone, e.g., Lobby'></textarea>
                        </div>
                        <div className={styles.flexOps}>
                            <button onClick={addOperator}>
                                Add Operator
                            </button>
                        </div>
                    </div>
                    <div className={styles.flexOps}>
                        {refsDataState.map(({ id, type, title, x, y}: any, Index: any) => {
                            if(type == 'defender')
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
                                        <Attackers key={Index} id={id} title={title} loaded={true} x={x} y={y}/>
                                    </div>  
                                );
                            }
                        })}
                    </div>
                    {/* <div>
                        <button onClick={showAllRefs} style={{ color: 'yellow' }}>
                            showAllRefs
                        </button>
                    </div>
                    <div>
                        <button onClick={refreshRefs} style={{ color: 'yellow' }}>
                            refreshRefs
                        </button>
                    </div>
                    <div>
                        <button onClick={saveAllRefs} style={{ color: 'yellow' }}>
                            saveAllRefs
                        </button>
                    </div>
                    <div>
                        <button onClick={() => setVisibility(!visibility)}>Click here for<br></br>Smoke{visibility}</button>
                        {visibility ? <Defenders id={1} title={"There's a fkg smoke"} loaded={false} x={0} y={0} /> : null}
                    </div> */}
                    {/* <div id='utilities' className={styles.flexOps}>
                        <Draggable>
                            <img src='/utilities/green-dot1.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable>
                            <img src='/utilities/green-dot2.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable>
                            <img src='/utilities/green-dot3.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable>
                            <img src='/utilities/green-dot4.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                        <Draggable>
                            <img src='/utilities/line.png' alt='Green Dot' width={25} height={25} title={'Crouch'}>
                            </img>
                        </Draggable>
                    </div> */}

                </main>
                <div className='flex'>
                    <img src='/maps/bank/r6-maps-bank-blueprint-3.jpg' alt='Bank Basement' height={'85%'} width={'85%'}>
                    </img>
                    <div className='flex-row'>
                        {gadgetsArray.map(({name, title, quantity, image}: any, Index) => {
                            const returnedItems = [];
                            for(let i = 0; i < quantity; i++)
                            {
                                returnedItems.push(
                                    <Draggable key={quantity + i}>
                                        <img src={image} alt={name} title={title} id={Index+'_gadget'}
                                        width={25} height={25}>
                                        </img>
                                    </Draggable>
                                );
                            }
                            return (
                                returnedItems
                            );
                        })}
                    </div>
                    <div className='flex-row'>
                        {showedDefenders.map(({ id, title }: any, Index: any) => {
                            return (
                                <div key={Index} ref={defender => defendersRefs.current[Index] = defender}>
                                    <Defenders key={Index} id={id} title={title} loaded={false} x={0} y={0} />
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex-row'>
                        {showedAttackers.map(({ id, title }: any, Index: any) => {
                            return (
                                <div key={Index} ref={attacker => attackersRef.current[Index] = attacker}>
                                    <Attackers key={Index} id={id} title={title} loaded={false} x={0} y={0} />
                                </div>
                            );
                        })}
                    </div>

                </div>

                    <img src='/maps/bank/r6-maps-bank-blueprint-1.jpg' alt='Bank 1st Floor' height={'85%'} width={'85%'}>
                    </img>
                    <img src='/maps/bank/r6-maps-bank-blueprint-2.jpg' alt='Bank 2nd Floor' height={'85%'} width={'85%'}>
                    </img>
                    <img src='/maps/bank/r6-maps-bank-blueprint-4.jpg' alt='Bank Roof' height={'85%'} width={'85%'}>
                    </img>

                {/* <footer className={styles.footer}>
                    <a href='#' target='_blank' rel='noopener noreferrer'>
                        Powered by Me{' '}
                        <span className={styles.logo}>
                            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                        </span>
                    </a>
                </footer> */}
            </div>
        </div>
    )
}

export default Bank1
