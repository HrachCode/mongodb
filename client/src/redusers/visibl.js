const initialstate = {
    adminpanelvisibl: false,
    movies:false,
   
}

const adminpanel = (state = initialstate, action) => {
    switch (action.type) {
        case 'SET_VISIBBL':
        
            return {
                ...state,
                movies:action.payload
            };
   
          
        default:
            return state
    }

}

export default adminpanel