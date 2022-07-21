import "./Form.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {useSelector} from "react-redux"

export default function Form() {
    const paises = useSelector(initialState=>initialState?.allCountries)
    
    const [error, setError] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        country: "",
    })
    const [habilitacion, setHabilitacion] = useState(true)
    const [data, setData] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        country: [],
    })



    function validate(e) {
 
        if(e.target.name === "country"){
            let dataCountry = data.country
            setData({ ...data, country:[...dataCountry,e.target.value]})
        }else{
        if(e.target.name ==="name" && data.name.length > 15){
        setData({ ...data, [e.target.name]:""})
        setError({ ...error, [e.target.name]:"El nombre de la actividad no puede superar los 15 caracteres"})

        }else{
        if (e.target.value.length === 0) {    
            setData({ ...data, [e.target.name]: "" })
            setError({ ...error, [e.target.name]: "Este campo es obligatorio" })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
            setError({ ...error, [e.target.name]: "" })
        }}}

        
    }

    useEffect(() => {
        console.log("afuera")
        if(data.country.length && data.dificulty.length && data.duration.length && data.season.length && data.name.length){
            if(!error.country.length && !error.dificulty.length && !error.duration.length && !error.season.length && !error.name.length ){
                setHabilitacion(false)
            }else{
                setHabilitacion(true)
            }
        }else{
            setHabilitacion(true)}

    }, [error, data])




    const handleSubmit = async (e) => {
        e.preventDefault()
       
        try {
            axios.post(`http://localhost:3001/activities`, {

                name: data.name,
                dificulty: data.dificulty,
                duration: data.duration,
                season: data.season,
                country: data.country

            })
       
            window.location.assign("/home")
            alert("Actividad creada exitosamente")

        } catch (err) {
            alert("No se pudo crear la actividad. Verifique los datos y vuelva a intentarlo")
            return err
        }


    }




    return (<div className="form form-bkg" >

        <h1 className="titleCr">Aqui puedes completar tu actividad llenando los campos requeridos:</h1>
    
        <form  className="Form-Cnt" onSubmit={(e) => { handleSubmit(e) }}>


            <div className={"singleInpt"}><label>Nombre de la actividad: </label>
            <input className={error.name && 'danger'} name="name" value={data.name} type="text" placeholder="Nombre"
                onChange={(e) => { validate(e) }} /> {!error.name ? null : <span>{error.name}</span>}
            </div>
           
           
           <div className={"singleInpt"}>
                <label>Dificultad: </label>
                <select  name="dificulty" value={data.dificulty} onChange={(e) => { validate(e) }}>
                <option disabled selected>Selecciona el nivel de dificultad</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>

                </select>
                {!error.dificulty ? null : <span>{error.dificulty}</span>}
            </div>
            <div className={"singleInpt"}>
                <label>Duracion: </label>
                <select name="duration" value={data.duration} onChange={(e) => { validate(e) }}>
                <option disabled selected>Selecciona el horario</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                </select>
                {!error.duration ? null : <span>{error.duration}</span>}
            </div>

            <div className={"singleInpt"}>
                <label>Estaciones del año: </label>
                <select name="season" value={data.season} onChange={(e) => { validate(e) }}>
                <option value={"Selecciona una temporada"}>Selecciona una temporada</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>
            <div className={"singleInpt"}>
                <label >Elige el pais al que le quieras agregar la actividad: </label>
                <select name="country" id="country" multiple={false} onChange={(e) => { validate(e) }}>
                <option disabled selected>Selecciona un pais</option>
                        {
                          paises?.map((p)=>{return <option  >{p?.name}</option>})
                        }


                 
                </select>
                        {data.country.map((c)=>(<p className="sel-Count">{c}</p>))}
            </div>


            <button disabled={habilitacion} type="submit" >Enviar</button>
        </form>
    </div>)


}