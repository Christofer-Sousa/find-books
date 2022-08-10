import "../styles/Header.sass"
import {Link} from "react-router-dom"

const Header = () => {

    

    return(
        <header>
            
            <Link to="/">Find<span>Books</span></Link>
        </header>
    )
}

export default Header