
import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID"
export const GET_COUNTRY_BY_ACTIVITY= "GET_COUNTRY_BY_ACTIVITY"
export const SEND_INFO = "SEND_INFO"
export const ORDER_ACTIVITY = "ORDER_ACTIVITY"
export const ORDER_POPULATION = "ORDER_POPULATION"
export const ORDER_ALPHABET = "ORDER_ALPHABET"
export const ORDER_CONTINENT = "ORDER_CONTINENT"

export function getAllCountries() {

    return async function (dispatch){

        axios.get("http://localhost:3001/countries")
        .then(res =>{
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload:res.data
            }) 
        } )
        .catch(err=>{
            return (err, "Error en action getAllCountries")
        })
       

        //     dispatch({
        //         type: GET_ALL_COUNTRIES,
        //         payload:bringCountries.data
        //     })
        // .catch(err){
           
           
        // }
    }
}

export function getCountryByName(name){
    
    return async function (dispatch){
        const bringCountryByName = await axios.get(`http://localhost:3001/countries?name=${name}`)
        console.log(bringCountryByName.data,"countriesbyname en actions")
        try {
            dispatch(
                {
                    type: GET_COUNTRY_BY_NAME ,
                    payload:bringCountryByName.data
                }
                )
            }catch(err){
                // alert("Error al cargar el nombre del paises")
                return (err, "Error en getCountryByName")
            }
        }
    }
    
    export function getCountryById(id){
        return async function (dispatch){
            
            const bringCountriesById = await axios.get(`http://localhost:3001/countries/${id}`)

            
            try{
                dispatch({
                type: GET_COUNTRY_BY_ID,
                payload:bringCountriesById.data
            })
        }catch(err){
            return (err,"Error en action getCountryById")
        }
    }
}




export function orderByAlpha(payload){
    try{
   
        return async function (dispatch){
            dispatch({
                type: ORDER_ALPHABET,
                payload
            })

        
        
    }
 
}catch(err){
    return console.log("error en order action")
}
}


export function orderByContinent (payload){
    try{
        return async function (dispatch){
            dispatch({
                type: ORDER_CONTINENT,
                payload
            })

    }}catch(err){
        return console.log(err.message)
    }

}


export function orderByPopulation (payload){
    try{
        return async function (dispatch){
            dispatch({
                type: ORDER_POPULATION,
                payload
            })

    }}catch(err){
        return console.log(err.message)
    }

}

export function getCountryByActivity (name){
   
    try{
        return async function (dispatch){

            dispatch({
                type: GET_COUNTRY_BY_ACTIVITY,
                payload:name
            })
        }
    }catch(err){
        return console.log(err.message)
    }
}


export function getActivity (){
    try{
        return async function (dispatch){
            
            const getActivities = await axios.get(`http://localhost:3001/countries`)
                console.log(getActivities,"getActivities")

            const activityArr =[] 
            const filteredActivities = getActivities.data.map(a=>a.activities.map(c=>c.name))
            filteredActivities.forEach(element => {
                element.map((b)=>{
                    if(!activityArr.includes(b)){
                        activityArr.push(b)
                    }
                })
                
            });
            console.log("actividades", activityArr)
            
            
            dispatch({
                type: ORDER_ACTIVITY,
                payload:activityArr
            })

    }}catch(err){
        return console.log(err.message)
    }

}




