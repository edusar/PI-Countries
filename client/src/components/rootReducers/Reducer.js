import {GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, ORDER_ACTIVITY,ORDER_ALPHABET,ORDER_POPULATION,ORDER_CONTINENT, GET_COUNTRY_BY_ACTIVITY} from "../actions/actions"
const initialState = {

    allCountries: [],
    filteredResults:[],
    byName: [],
    cardDetail: {},
    filteredCountriesBy: [],
    activitiesBar:[],
    flagInNav:true
}

export default function reducer(state=initialState,action){

    switch (action.type) {
        case GET_ALL_COUNTRIES:
         
            return{
                ...state,
                allCountries: action.payload,
              

            }
            case GET_COUNTRY_BY_NAME:
                console.log("IdCountiresname", initialState)
                return{
                ...state,
                allCountries: action.payload,
    
                    
                }
            case GET_COUNTRY_BY_ID:
             
                return{
                ...state,
                cardDetail: action?.payload
            }

            case ORDER_ALPHABET :
                let allData = []
                const data = state.filteredResults?.length > 0 ? state.filteredResults : state.allCountries
              
                    allData = action.payload === false ? data.sort((a,b)=>(a.name.toLowerCase()>b.name.toLowerCase()) ? 1 : -1) : data.sort((a,b)=>(a.name.toLowerCase()<b.name.toLowerCase())?1:-1)   
                
                return {
                    ...state,
                    filteredResults:allData,
                    flagInNav:action.payload
                }
                
              
               
            
            case ORDER_CONTINENT:
                let allData2 = []
                const data2 = state.filteredResults?.length > 0 ? state.filteredResults : state.allCountries
                allData2 = action.payload === false ? data2.sort((a,b)=>(a.continent.toLowerCase()>b.continent.toLowerCase())?1:-1):data2.sort((a,b)=>(a.continent.toLowerCase()<b.continent.toLowerCase())?1:-1)   
                
                return {
                    ...state,
                    filteredResults:allData2,
                    flagInNav:action.payload

            }


            case ORDER_POPULATION:
                let allData3 = []
                const data3 = state.filteredResults?.length > 0 ? state.filteredResults : state.allCountries
                allData3 = action.payload === false ? data3.sort((a,b) => (a.population>b.population) ? 1 : -1):  data3.sort((a,b)=>(a.population<b.population) ? 1 : -1 )   
                
                return {
                    ...state,
                    filteredResults:allData3,
                    flagInNav:action.payload

            }
            
            case  ORDER_ACTIVITY:

            return {
                ...state,
                activitiesBar:action.payload
            }


            case GET_COUNTRY_BY_ACTIVITY:
            let filteredResult = []
                state.allCountries.map(b=>{
                const activityfiltered = b.activities.map(p=>{
                    if(p.name === action.payload){
                        
                        filteredResult.push(b) 
                    
                }})
            })

    

            console.log("action", action.payload)
            console.log("state",state.allCountries)       
            console.log(filteredResult,"este es order")
            return {
                ...state,
                filteredResults:filteredResult,
                // flagInNav:!state.flagInNav
                
            }
              
        default:
       
    }
}