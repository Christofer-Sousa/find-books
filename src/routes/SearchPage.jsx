import {Link} from "react-router-dom"
import "../styles/SearchPage.sass"

import axios from "axios"


import FindBooks from "../images/findbooks.svg"
import NotFoundImg from "../images/notfound.svg"
import { useState } from "react"


const SearchPage = () => {

    const [items, setItems] = useState(null)
    const [book, setBook] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book.toLowerCase() +"&maxResults=25&key=AIzaSyCwzvQMO-gD8Qa5ORG7g4M7VrIH8D6M69o").then((res)=>{

            setItems(res.data.items)
        })


    }
    
    const handleChange = (e) => {
        e.preventDefault()

        setBook(e.target.value)
    }
    
    return(
        <div className="search-page">
            <section className="form-section">
                <div className="form-container">
                    <h1>Encontre o livro que voce tanto procura</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Type authon, book name..." 
                            onChange={handleChange}
                            value={book}
                        />
                        <button className="btn-search" type="submit">Search</button>
                    </form>
                </div>
            </section>

            <section className="books-section">
                    {items ?
                        <div className="books-container">
                            {items && items.map(item => (
                                <div key={item.id} className="card-book">
                                    <div className="cover">
                                        <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : NotFoundImg} alt="capa do livro" />
                                    </div>
                                    <div className="info-book">
                                        <p><span>Book Name: </span>{item.volumeInfo.title}</p>
                                        <p><span>Author: </span>{item.volumeInfo.authors}</p>
                                        <p><span>Published: </span> {item.volumeInfo.publisher}</p>
                                        <p><span>Published date: </span>{item.volumeInfo.publishedDate}</p>
        
                                        <Link to={`books/${item.id}`}>More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : <img width="200px" src={FindBooks}/> }
            </section>
        </div>
    )
}

export default SearchPage