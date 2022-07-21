import "./Card.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountryById } from "../actions/actions";
export default function Card ({id, name, image, continent, capital, subregion, area, population }){
const dispatch = useDispatch()
const history = useHistory()
   
const handleClick=()=>{
    
    dispatch(getCountryById(id))
    history.push(`/home/detail/${id}`)
    console.log("history",id)

    }

    return (<div className="allCard">
                <button className="Card-cnt" onClick={() =>{handleClick()}}>
                <h1>Pais: {name}</h1>
                <div className="img-Size"><img className="img-cnt" src={image} alt="no se encontro la imagen" /></div>
                <h3>Continente: {continent}</h3>
                </button>

    </div>)



}