import styles from "./Hero.module.css"
function Hero(){
    const [movie, setMovies] = useState(""); //Menggunakan distructing
    useEffect(() => {
        async function fetchMovie() {
            const url = "https://www.omdbapi.com/?apikey=fgf50ae6&i=tt2975590"
            const response = await fetch(url)
            const data = await response.json()
            setMovie(data)
        }
        fetchMovie()
    }, [])
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3>
                        Genre: Thriller, Drama , Romance
                    </h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi id 
                        adipisci nisi pariatur a accusamus perspiciatis, reiciendis doloribus.
                        Sit doloremque magnam sequi laborum! Sunt omnis placeat magnam quae deleniti!
                    </p>
                    <button >Watch</button>
                </div>
                <div className={styles.hero__right} >
                    <img className={styles.hero__image} 
                    src="https://picsum.photos/200/300" alt="" />
                </div>
            </section>

        </div>
    )
}
export default Hero
