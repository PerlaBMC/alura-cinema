import { useFavoritosContext } from "Context/favoritos";
import styles from "./favoritos.module.css"
import Banner from "components/Banner/index"
import Titulo from "components/Titulo/Index";
import Card from "components/Card";

function Favoritos () {
const {favorito} = useFavoritosContext();

    return (
			<>
				<Banner img="favoritos" color="#154580" />
				<Titulo>
					<h1>Favoritos</h1>
				</Titulo>
				<section className={styles.container}>
				{favorito.map((fav) => {
					return <Card {...fav} key={fav.id}/>
				})}
				</section>
			</>
		);
}

export default Favoritos