export default function postReducer (state = [], action) {
    switch(action.type){
        case 'CREATE_POST' :
            return [...state,
                Object.assing({}, action.course)
            ]
        default :
            return state
    }
}