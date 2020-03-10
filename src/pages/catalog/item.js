import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ItemSwitch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="wrapperItem">
                    <div className="prevBlock">
                        <Link to={`/catalog/switch/${this.props.id}`}>
                            <span className="status">{this.props.status}</span>
                            <div className="ItemImg"><img src='https://www.ziko.by/upload/resize_cache/iblock/008/220_200_1/0082c691ce44a9338e331e518e1228d7.png' /></div>
                            <span className="titleSwitch">{this.props.title}</span>
                            <span className="price">{this.props.price} руб.</span>
                        </Link>
                    </div>
                    <div className="hoverBlock">
                        <Link to={`/catalog/switch/${this.props.id}`}>
                            <span className="status">{this.props.status}</span>
                            <div className="ItemImg"><img src='https://www.ziko.by/upload/resize_cache/iblock/008/220_200_1/0082c691ce44a9338e331e518e1228d7.png' /></div>
                            <span className="titleSwitch">{this.props.title}</span>
                            <span className="price">{this.props.price} руб.</span>
                        </Link>
                        <button className="onBasket" onClick={this.onBasket}> В корзину </button>
                    </div>
                </div>
            </Fragment>
        )
    }

    onBasket = () => {
        this.props.dispatch({
            type: "ADD_BASKET",
            data: {
                name: "basket",
                text: this.props
            }
        })
    }

    componentDidMount() {

    }

}

const setStateToProps = (store) => {
    return {
    }
}

export default connect(setStateToProps)(ItemSwitch)