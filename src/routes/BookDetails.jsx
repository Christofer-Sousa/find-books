import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

import "../styles/BookDetails.sass"

const BookDetails = () => {

    const {id} = useParams()
    const [book, setBook] = useState(null)

    useEffect(()=> async () => {
        const res = await fetch("https://www.googleapis.com/books/v1/volumes/"+ id +"?key=AIzaSyCwzvQMO-gD8Qa5ORG7g4M7VrIH8D6M69o")

        const json = await res.json()

        setBook(json)
    }, [])

    function goBackPage() {
        window.history.back();
    }

    return(
        <div>
            {book && (
                <div className="main-details">
                    <button className="back" onClick={goBackPage}>Voltar</button>
                   <section className="details-section">
                        <div className="details-container">
                            <h1 className="book-name">{book.volumeInfo.title}</h1>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="capa do livro"/>

                            <div className="infos">
                                <p><span>Author: </span>{book.volumeInfo.authors}</p>
                                <p><span>Publisher: </span>{book.volumeInfo.publisher}</p>
                                <p><span>Publisher date: </span>{book.volumeInfo.publishedDate}</p>
                                <p><span>Numbers of pages: </span>{book.volumeInfo.pageCount}</p>
                            </div>

                            <div className="book-description">
                                <h2>Book description</h2>
                                <p>{book.volumeInfo.description}</p>
                            </div>

                            <div className="buttons">
                                <a href={book.volumeInfo.previewLink}>Read a sample</a>
                                <a href={book.volumeInfo.canonicalVolumeLink}>Buy this book</a>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>       
    )
}

export default BookDetails