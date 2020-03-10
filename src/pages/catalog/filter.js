import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";

class Filter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="filterBlock">
               <p>Cортировать:</p>
               <span onClick={this.props.filterPrice}>Цена</span>
               <span onClick={this.props.Sale}>Sale</span>
               <span onClick={this.props.Top}>Top</span>
               <span onClick={this.props.New}>New</span>
               <span onClick={this.props.All}>Все</span>
           </div>
        )
    }

    componentDidMount(){

    }

}

const setStateToProps = (store) =>{
    return{
    }
}

export default connect(setStateToProps)(Filter)