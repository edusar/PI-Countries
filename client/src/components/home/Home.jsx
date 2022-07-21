import "./Home.css"
import Cards from "../cards/Cards"
import Nav from "../nav/Nav"
import {Link} from "react-router-dom"  

export default function Home(){


    return (
        <div className="home-cnt">
            <Nav />
            <Cards/>
        </div>
    
    )
}