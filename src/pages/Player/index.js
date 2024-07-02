import Banner from "components/Banner/index.js"
import styles from "./Player.module.css"
import Titulo from "components/Titulo/Index"
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {

const [video, setVideo] = useState([])


const paramtros = useParams();
useEffect(() => {
	fetch(`https://my-json-server.typicode.com/PerlaBMC/alura-cinema-api/videos?id=${paramtros.id}`)
	.then(response => response.json())
	.then(data => {
		setVideo(...data)
	})
}, [])

//const video = videos.find(video => video.id === Number(paramtros.id))
console.log (video);
if(!video) return <NotFound/>
	return (
		<>
			<Banner img="player" color="#58B9AE" />
			<Titulo>
				<h1>Player</h1>
			</Titulo>
            <section className={styles.container}>
            <iframe width="100%" height="100%" 
            src={video.link}
            title={video.titulo}
            allowFullScreen></iframe>
            </section>
		</>
	);
} 

export default Player