import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import * as firebase from 'firebase'
import Slider from "./slider"


class Fav extends Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
           <Fragment>
               <div class="banner">
                   <img src="https://www.ziko.by/upload/ammina.optimizer/jpg-webp/q95/upload/resize_cache/uf/c06/2560_1440_1/c06de7e0145a3511dd7dae8fe5330ad8.webp"></img>
               </div>
               <div class="index-flex">
               <Slider/>
               <div class="loremIpsum">
                   <p>Вот уже много лет ювелирный завод HUNTER занимает лидирующие позиции по производству ювелирных изделий в Беларуси. Объемы производства, качество и ассортимент продукции позволяют смело называть завод крупнейшим предприятием республики.
Это стало возможным благодаря сочетанию высоких технологий мирового уровня и современного передового оборудования, которое позволяет выпускать широкий ассортимент ювелирных украшений в Минске – от классического до оригинального дизайна. Каждое изделие уникально и эксклюзивно. Каждая стадия его производства, начиная от подготовки эскиза и заканчивая конечной обработкой – это тончайшее искусство, делающее изделия узнаваемыми и любимыми.</p>
               </div>
               </div>
           </Fragment>
        )
    }

    cam = () =>{
        this.props.dispatch({
            type: "ADD",
            data : {
                name: "statasdie",
                text: 123
            }
        })
    }

    componentDidMount(){

          
    }
}

const setStateToProps = (store) =>{
    return{}
}

export default connect(setStateToProps)(Fav)