import React from "react";
import axios from "axios";
import {API} from "../../settings";
import {UserTable} from "./UserTable";
import {UserCreate} from "./UserCreate";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            groups: [],
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        axios.get(`${API}/user/`).then((response) => {
            this.setState({
                data: response.data
            })
        })
        axios.get(`${API}/group/`).then((response) => {
            this.setState({
                groups: response.data
            })
        })
    }

    deleteUser(user_id) {
        axios.delete(`${API}/user/${user_id}/delete/`).then(() => {
            this.componentDidMount();
        }).catch()
    }

    createUser(username, group_id) {
        axios.post(`${API}/user/create/`, {
            username: username,
            group: group_id
        }).then(() => {
            this.componentDidMount();
        }).catch()
    }

    updateUser(user_id, username, group_id) {
        axios.put(`${API}/user/${user_id}/update/`, {
            username: username,
            group: group_id,
        }).then(() => {
            this.componentDidMount();
        }).catch()
    }

    render() {
        return (
            <div>
                <UserCreate groups={this.state.groups}
                            createUser={(username, group_id) => this.createUser(username, group_id)}
                            isUniqueUsername={(current_username, username) => {
                                this.isUniqueUsername(current_username, username)
                            }}/>
                <UserTable data={this.state.data} groups={this.state.groups}
                           deleteUser={(user_id) => this.deleteUser(user_id)}
                           updateUser={(user_id, username, group_id) => this.updateUser(user_id, username, group_id)}
                           isUniqueUsername={(current_username, username) => {
                               this.isUniqueUsername(current_username, username)
                           }}/>
            </div>
        )
    }
}