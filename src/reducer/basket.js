export default function Basket(state=[],action) {
    if (action.type !=undefined ) {
        switch (action.type){

            case "ADD_BASKET" : {
                return  [...state, action.data];
            }

            case "IN_BASKET" : {
                return  [...state, action.data];
            }

            default : {
                return state
            }
        }
    }
    return state
}