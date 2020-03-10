export default function Items(state=[{name:"hallo gays", text:[]}],action) {
    console.log('зашел')
    if (action.type !=undefined ) {
        switch (action.type){
            case "ADD" : {
                return action.data;
            }

            case "DEC" : {
                return state - action.data;
            }

            default : {
                return state
            }
        }
    }
    return state
}