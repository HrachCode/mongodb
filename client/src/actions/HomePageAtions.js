import axios from 'axios'


export const loadmuvies = (muvi) =>{
  return { type: 'SET_VISIBBL', payload: muvi }
}
const loader  = (load)=>{
  return {
      type: 'LOADED',
      payload: load   
  }
}


export const fetchData = (fetch)=> async (dispatch)=>{
   try {
    loader(true) 
    const data = await axios.post(fetch);
    dispatch(loadmuvies(data.data))
    loader(false)

   } catch (error) {
     console.log(error);
     
   }

}
