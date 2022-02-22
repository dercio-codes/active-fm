import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ShowsContainer from "../component/ShowsContainer"
import Banner from "../component/Banner"
import TalkShows from "../component/TalkShows"
import MorningShows from "../component/MorningShows"
import EveningShows from "../component/EveningShows";

export default function Home() {
  return (
    <main>
      <Banner />
      <TalkShows/>
      <MorningShows/>
      <EveningShows />
      {/* <ShowsContainer /> */}
    </main>
  );
}
