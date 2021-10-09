import Head from "next/head";
import A from '../components/A'
import { MainContainer } from "../components/MainContainer";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainContainer keywords="main page">
      <div className={styles.container}>
        <h1>Home Page</h1>
      </div>
    </MainContainer>
  )
}
