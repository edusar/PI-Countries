import { useSelector } from "react-redux";
import "./CardDetail.css"


export default function CardDetail(){
    const detail = useSelector(initialState=>initialState.cardDetail)

  
    const backHome=()=>{
        window.location.assign("/home")
  
    }


    return(<div className="detail-cnt">
                <button onClick={backHome}>Volver</button>
                <div className="card-cnt">
                <h1>Pais: {detail?.name}</h1>
                <img className="image-cnt"src={detail?.image} alt="" />
                <h3>Capital : {detail?.capital?detail.capital:"Este pais no tiene capital"}</h3>
                <h3>Subregion : {detail?.subregion}</h3>
                <h3>Continente: {detail?.continent}</h3>
                <h3>Area : {detail?.area}</h3>
                <h3>Population : {detail?.population}</h3>

                    <h3>Actividades:</h3>
                <div>
                    {detail?.activities&&detail?.activities.length?detail?.activities.map(a=>
                    <ul className="act-card">
                    <li>Nombre: <span>{a.name}</span></li>
                    
                    <li>Duracion en horas: <span>{a.duration} hs</span></li>
                   
                  
                    <li>Dificultad: <span>{a.dificulty} estrellas</span></li>
                        
                    
                    <li>Temporada: <span>{a.season}</span></li>
              
                    </ul>
                    ):<span>No existen actividades creadas para este pais hasta el momento</span>}
                    </div>

                    </div>

    </div>)

}