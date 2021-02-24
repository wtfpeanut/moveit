import Head from 'next/head';
import ChallengeBox from '../src/components/ChallengeBox';
import { CompleteChallenges } from '../src/components/CompleteChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from '../src/components/Profile';
import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | move.it </title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      
    </div>
  )
}
