import React, {Component, Fragment} from 'react'
import Header from "./header"
import Footer from "./footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fav from "./../pages/favorite/index"
import Catalog from "./../pages/catalog/index"
import Basket from "../pages/basket/index"
import Login from "../pages/login/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../css/style.css"
import * as firebase from 'firebase'
import {connect} from "react-redux";
import ItemSwitch from "../pages/catalog/switch"
import Particles from 'react-particles-js';


class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        
        return(
            <Fragment>
                        <BrowserRouter>
                        <Particles className={"partJs"} 
                            params={{
                                    particles: {
                                        number : {
                                            value: 150,
                                            density: {
                                                enable: true,
                                                value_area: 800
                                            }
                                        },
                                        color: {
                                            value: "#000000"
                                        },
                                        line_linked: {
                                            color: "#000000"
                                        }
                                    }
                                }}
                            style={{
                                width: '100%',
                                color: "black"
                            }}
                            />
                            <Header/>
                            <Switch>
                                <Route exact path="/" component={Fav} />
                                <Route exact path="/catalog" component={Catalog} />   
                                <Route exact path="/basket" component={Basket} /> 
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/catalog/switch/:id" component={ItemSwitch}/>  
                            </Switch>
                            <Footer/>
                        </BrowserRouter>
            </Fragment>
        )
    }

    

        componentDidMount(){
            let database = firebase.database();
            let obj = database.ref('articles');
            obj.on('value', snap => {
                this.props.dispatch({
                    type: "ADD",
                    data : {
                        name: "statie",
                        text: snap.val()
                    }
                })
            })
                
          }


}

const setStateToProps = (store) =>{
    return{
    }
}


export default connect(setStateToProps)(App)