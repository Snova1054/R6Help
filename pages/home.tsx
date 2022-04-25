import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/Navbar";
import Center from "components/Center";
import styles from "/styles/Home.module.css";
import Maps from "pages/maps";
import Bank1 from "pages/maps/bank1";
import { SetStateAction, useState } from "react";

const Home = (props: any) => {
    //   const [here, setHere] = useState(false);
    //   const [rendered, setRendered] = useState(<Maps />);

    //   function renderer(renderThis: SetStateAction<JSX.Element>) {
    //     setRendered(renderThis);
    //   }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to
                    <Link href={"/maps/bank"}>
                        <a> R6 Help</a>
                    </Link>
                </h1>

                <p className={styles.description}>
                    Some <code className={styles.code}>code</code>
                </p>

                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h2>Maps &rarr;</h2>
                        <p>Ranked and Casual map pool (excluding Barlett)</p>
                    </a>

                    <a className={styles.card}>
                        <h2>Operators &rarr;</h2>
                        <p>Operators utility, usage and fun facts</p>
                    </a>

                    <a className={styles.card}>
                        <h2>Ideas from you &rarr;</h2>
                        <p>Map & strat ideas/propositions from you </p>
                    </a>

                    <a className={styles.card}>
                        <h2>Extra &rarr;</h2>
                        <p>
                            Extra &rarr; &rarr; &rarr; &rarr; &rarr; &rarr; &rarr; &rarr;
                            &rarr; Extra &rarr; &rarr; &rarr; &rarr; &rarr; &rarr; &rarr;
                            &rarr; &rarr;{" "}
                        </p>
                    </a>
                </div>
            </div>

            {/* <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Me{' '}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer> */}
        </div>
    );
};

export default Home;
