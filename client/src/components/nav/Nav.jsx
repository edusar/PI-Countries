import "./Nav.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, orderByAlpha,orderByContinent,orderByPopulation, getCountryByActivity} from "../actions/actions";
import { useHistory } from "react-router-dom";




export default function Nav (){
// console.log(actividades,"actividades")
const activities = useSelector(initialState=>initialState?.activitiesBar)
const dispatch = useDispatch()
const[search,setSearch]=useState("")
const[order, setOrder]=useState("")
const[flagOrder,setFlagOrder]=useState(true)
const history = useHistory()

console.log(activities,"activities")

const onSearch=(e)=>{
    e.preventDefault()
    console.log(search,"este es el nombre del pais")
    dispatch(getCountryByName(search))
    setSearch(search)
    }



    const onSelect=(e)=>{
        
        dispatch(getCountryByActivity(e.target.value))
    }
    
    const onChange=(e)=>{

        setSearch(e.target.value)
        
    }

    const onClickOrders=(type)=>{
        setOrder(type)
        setFlagOrder(!flagOrder)
    }

    
    
    useEffect(()=>{
        console.log(flagOrder,"flagOrder")
        if(order === "alphabet"){
            dispatch(orderByAlpha(flagOrder))
        }
        if(order === "continent"){
            dispatch(orderByContinent(flagOrder))
        }
        if(order === "population"){
            dispatch(orderByPopulation(flagOrder))
        }
        

    
    },[order, flagOrder])

    const goToForm = ()=>{
        history.push("/home/form")
    }

    return (
    <div className="nav-cnt">
   
        <div className="div-cnt">
            <form className = "form-cnt" onSubmit={(e)=>{onSearch(e)}} >
                <input type="text" value={search} onChange={(e)=>{onChange(e)}}/>
                <button className="btn-style" type="submit">Buscar</button>
                <button className="btn-style" type="button" name="alphabet" onClick={()=>{onClickOrders("alphabet")}}>Ordenar Alfabeticamente</button>
                <button className="btn-style" type="button" name="continentt" onClick={(e)=>{onClickOrders("continent")}}>Ordenar por continente</button>
                <button className="btn-style" type="button" name="population" onClick={(e)=>{onClickOrders("population")}}>Ordenar por n° poblacional</button>
                <button className="btn-style" onClick={()=>{goToForm()}}>Crear actividades</button>
                    <select className="btn-style" name="" id="" onChange={(e)=>{onSelect(e)}}>
                        <option value="" disabled selected>Selecciona una actividad</option>
                        <option key="25252525">Quitar filtro</option>
                            {
                                activities?.map((n) => { return <option key={n} >{n}</option> })
                            }
                    </select>
                
            </form>
        </div>
        <div className="title-nav">Turism & Countries</div>
    </div>
    )
}