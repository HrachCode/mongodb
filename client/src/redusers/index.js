const initialstate = {
    goods: false,
    loader:false,
}

const reduser = (state = initialstate, action) => {
    switch (action.type) {
        case 'GOODS_LOADED':
        
            return {
                ...state,
                goods:action.payload
            };
        case 'FETCHIN_DATA':
            
            return {
                
            ...state,
            goods:action.payload
            };
        case 'LOADED':
          console.log(action.payload);
          
              return {
                  ...state,
                  loader:action.payload
              }
        
          
          
        default:
            return state
    }

}

export default reduser