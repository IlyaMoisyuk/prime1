import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import Item from "../catalog/item"

class Contacts extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
           <Fragment>
               <h1 onClick={this.q}>{"Корзина"}</h1>
               <div className="GridLists">
               {this.props.basket ? this.props.basket.map( (items,i) =>  <Item key={i} src={items.text.src} title={items.text.title} price={items.text.price} status={items.text.status} id={items.text.id}/>) : ""}
               </div>
           </Fragment>
        )
    }

    q = () => {
        console.log(this.props)
    }
}

const setStateToProps = (store) =>{
    console.log(store)
    return{
        basket: store.basket
    }
}

export default connect(setStateToProps)(Contacts)