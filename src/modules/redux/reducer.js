

const types = {
 SAVE_IMAGES: 'SAVE_IMAGES',
 ERROR_WHILE_FETCHING:'ERROR_WHILE_FETCHING'
}

const initialState={
    result:{

    }
}

export const testReducer =(state=initialState, action)=>{
        switch(action.type){
            case types.SAVE_IMAGES:
                return{
                    ...state,
                    res:"SAVE_IMAGES"
                    
                }
            case types.ERROR_WHILE_FETCHING:
                return{
                        ...state,
                        res:"ERROR_WHILE_FETCHING"
                }
            default:
                return state;
        }
}

export const actions = {
    testAction: payload=> dispatch => dispatch(types.SAVE_IMAGES)
}