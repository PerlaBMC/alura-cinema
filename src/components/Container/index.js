import styles from "./containe.module.css"

function Container ({children}) {
    return (<>
    <section className={styles.container}>

        {children}
    </section>
    </>)
}

export default Container