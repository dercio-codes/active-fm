import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ShowsContainer from "../component/ShowsContainer"
import Banner from "../component/Banner"
import TalkShows from "../component/TalkShows"
import MorningShows from "../component/MorningShows"
import EveningShows from "../component/EveningShows";
import MusicShows from "../component/MusicShows";
import Ad from "../component/Ad";
import Schedule from "../component/Schedule";
import Footer from "../component/Footer";


export default function Home() {
  return (
    <main>
      <Banner />
      <TalkShows/>
      <Ad/>
      <MorningShows/>
      <Ad/>
      <EveningShows />
      <Ad/>
      <MusicShows />
      <Schedule />
      <Footer />
      {/* <ShowsContainer /> */}
    </main>
  );
}
