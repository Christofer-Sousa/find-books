import "../styles/Home.sass"

import {Link} from "react-router-dom"

import Reading from "../images/reading.svg"
import FindBooks from "../images/findbooks.svg"

const Home = () => {
    return(
        <div className="app">
            <section className="main-section">
                <div className="main-container">
                    <div className="main-texts">
                        <h1>Encontre o livro que voce tanto procura</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, commodi eum culpa minima deserunt ea nemo, distinctio voluptate sit doloribus</p>
                        <Link className="btn-search" to="/search">Search now</Link>
                    </div>

                    <div className="main-image">
                        <img src={FindBooks} alt="livro" />
                    </div>
                </div>
            </section>

            <section className="info-section">
                <div className="info-container">
                    <div className="info-cardsimg">
                        <img src={Reading} alt="mulher lendo um livro" />
                        <div className="card1"><p>Todos os livros que voce procura em um só lugar</p></div>
                    </div>
                    
                    <div className="card2"><p>Download samples in PDF or EPUB of your favorite books</p></div>
                </div>
            </section>
        </div>
    )
}

export default Home