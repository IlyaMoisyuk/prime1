import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sq: null,
        }
    }

    render() {
        let href = document.location.href.split('/');
        console.log("href", href)
        let new_href = Number(href[href.length - 1]);

        if (this.props.info) {
            return (
                <Fragment>
                    <div className="cartProduct">
                        <div className="imgCart">
                            <span className="status">{this.props.info[new_href].status}</span>
                            <img src='https://www.ziko.by/upload/resize_cache/iblock/008/220_200_1/0082c691ce44a9338e331e518e1228d7.png'></img>
                        </div>
                        <div>
                            <span className="titleCart">{this.props.info[new_href].title}</span>
                            <p className="moreInfo">{this.props.info[new_href].full_text}</p>
                            <span className="priceCart">Цена: {this.props.info[new_href].price} руб.</span>
                            <button className="onBasket" onClick={() => this.onBasket(this.props.info[new_href])}> В корзину </button>
                        </div>
                    </div>
                    <Link to={'/catalog/'} className='back'>← Назад</Link>
                </Fragment>
            )
        } else {
            return (
                <p></p>
            )
        }
    }

    onBasket = (go) => {
        this.props.dispatch({
            type: "ADD_BASKET",
            data: {
                name: "basket",
                text: go
            }
        })

        let but = document.querySelector(".onBasket")
        but.setAttribute("disabled", "disabled");
        but.innerHTML = "В корзине";


    }


    componentDidMount() {

    }

}

const setStateToProps = (store) => {
    console.log(store)
    return {
        info: store.items.text,
    }
}

export default connect(setStateToProps)(Sw)