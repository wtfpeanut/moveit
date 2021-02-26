import Head from 'next/head';
import { GetServerSideProps } from 'next'
import ChallengeBox from '../src/components/ChallengeBox';
import { CompleteChallenges } from '../src/components/CompleteChallenges';
import { Countdown } from '../src/components/Countdown';
import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from '../src/components/Profile';
import { CountdownProvider } from '../src/contexts/CountdownContext';
import styles from '../src/styles/pages/Home.module.css';
import React from 'react';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (

    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>

        <Head>
          <title>Início | move.it </title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
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
        </CountdownProvider>
        
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    }
  }
}