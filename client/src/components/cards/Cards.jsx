
import "./Cards.css"
import Card from "../card/Card"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getAllCountries, getActivity} from "../actions/actions"


export default function Cards(){


    const getCountries = useSelector(initialState=>initialState?.allCountries)
    const getFiltered = useSelector(initialState=>initialState?.filteredResults)
    const flagInNav= useSelector(initialState=>initialState?.flagInNav)
    const [pagina, setPagina] = useState(0)
    const [paginaActual, setPaginaActual] = useState([])
    const [settingPage, setSettingPage] = useState(0)


    


    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getAllCountries())
        dispatch(getActivity())



    },[])
    
    const data = getFiltered?.length > 0 ? getFiltered : getCountries

    useEffect(()=>{
        if(data){
            if(data.length < 10){
                setPagina(0)
            }
            setPaginaActual(data.slice(pagina, pagina + 10))
        }
    },[pagina,data,flagInNav])


    const siguientePag = ()=>{
        if(pagina / 10 <= data.length / 10 - 2){
            setPagina(pagina + 10 )
        }
    }

    console.log(pagina,"pagina")
    console.log(paginaActual,"paginaActual")

    const anteriorPag = ()=>{

    if(pagina >= 10){
        setPagina(pagina - 10 )
    }
    }
    
    

    
        useEffect(()=>{
            
        },[paginaActual])


    return (
        <div className="container-cards">
            <div className="previousNext" >
                <button className="btn-style" onClick={()=>{anteriorPag()}}>Pagina Anterior</button>
                <button className="btn-style" onClick={()=>{siguientePag()}}>Pagina Siguiente</button>
            </div>
            <div className="Cards-cnt">
                {paginaActual?.map((c)=>{

             
                    return(
                        <Card
                        id={c.id}
                        key={c?.id}
                        name={c?.name}
                        image={c?.image}
                        continent={c?.continent}
                        
            />
      
                
                    )
                }
                    )
            }
    

            </div>
        </div>
    
    )
}