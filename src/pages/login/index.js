import React, { Component, Fragment } from 'react'
import { Redirect } from "react-router-dom";
import Modal from "./modal"

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.redirect ? <Redirect to="/basket" /> : ''}
                <h1>{"Авторизация"}</h1>
                <form className={"formLogin"} onSubmit={this.SubmitForm}>
                    <label>
                        <span>Логин: </span>
                        <input type="text" name="login"></input>
                    </label>
                    <label>
                        <span>Пароль: </span>
                        <input type="text" name="password"></input>
                    </label>
                    <button type="submit" >Войти</button>
                    {/* <Modal></Modal> */}
                </form>
            </Fragment>
        )
    }

    SubmitForm = (e) => {
        e.preventDefault();
        let form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            if (form.elements.login.value == "admin" && form.elements.password.value == "123") {
                document.cookie = "username=Admin";
                this.setState({
                    redirect: !this.state.redirect
                })

            }
            else {
                event.preventDefault();
                this.setState({
                    redirect: false
                })
            }
        })


    }
}
