import "./styles/App.sass"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./routes/SearchPage"
import BookDetails from "./routes/BookDetails"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="search/books/:id" element={<BookDetails/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
