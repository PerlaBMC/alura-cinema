import Banner from "components/Banner";
import Titulo from "components/Titulo/Index";
import Card from "components/Card";
import styles from "./index.module.css"
import { useEffect, useState } from "react";



function Inicio() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/PerlaBMC/alura-cinema-api/videos")
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  },[])

  return (
    <>
      <Banner img="home" color="#154580"/>
      <Titulo>
        <h1>Un lugar para guardar tus video favoritos</h1>
      </Titulo>
     <section className={styles.container}>
      {videos.map((video) => {
        return <Card {...video} key={video.id}/>
      })}
     </section>
    </>
  );
}

export default Inicio;
