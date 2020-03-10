import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Item from "./item.js";
import Filter from "./filter.js"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: [],
            rend: false,
            clone: null
        }
    }

    render() {
        return (
            <Fragment>
                <h1 onClick={this.Go}>{"Каталог"}</h1>
                <Filter filterPrice={this.FilterPrice} Sale={this.Sale} Top={this.Top} New={this.New} All={this.All} />
                <div className="GridList">
                    {this.props.items && this.state.clone == null ? this.props.items.map((items, i) => <Item key={i} title={items.title} price={items.price} status={items.status} id={items.id} />) : ""}
                    {this.state.clone ? this.state.clone.map((items, i) => <Item key={i} src={items.src} title={items.title} price={items.price} status={items.status} id={items.id} />) : ""}
                </div>
            </Fragment>
        )
    }

    Go = () => {
        console.log(this.props)
    }
    Sale = () => {
        let Clone = this.props.items.filter(function (item) {
            return item.status == "Sale";
        })
        this.setState({
            clone: Clone
        })
    }

    All = () => {
        this.setState({
            clone: null
        })
    }

    Top = () => {
        let Clone = this.props.items.filter(function (item) {
            return item.status == "Top";
        })
        this.setState({
            clone: Clone
        })
    }

    New = () => {
        let Clone = this.props.items.filter(function (item) {
            return item.status == "New";
        })
        this.setState({
            clone: Clone
        })
    }

    FilterPrice = () => {
        if (this.state.clone == null) {
            this.props.items.sort(function (a, b) {
                return (a.price - b.price);
            });
            this.setState({
                rend: !this.state.rend
            })
        } else {
            this.state.clone.sort(function (a, b) {
                return (a.price - b.price);
            });
            this.setState({
                rend: !this.state.rend
            })
        }

    }

    componentDidMount() {
        console.log('test', this.props.items)
    }

}

const setStateToProps = (store) => {
    console.log(store)
    return {
        items: store.items.text
    }
}

export default connect(setStateToProps)(About)