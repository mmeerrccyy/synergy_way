import React from "react";
import {GroupCreate} from "./GroupCreate";
import axios from "axios";
import {API} from "../../settings";
import {GroupTable} from "./GroupTable";

export class Group extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: [],
        }
        this.deleteGroup = this.deleteGroup.bind(this);
        this.createGroup = this.createGroup.bind(this);
        this.updateGroup = this.updateGroup.bind(this);
    }

    deleteGroup(group_id) {
        axios.delete(`${API}/group/${group_id}/delete/`).then((response) => {
            this.componentDidMount();
        }).catch()
    }

    createGroup(name, description) {
        axios.post(`${API}/group/create/`, {
            name: name,
            description: description
        }).then((response) => {
            this.componentDidMount();
        }).catch()
    }

    updateGroup(group_id, name, description) {
        axios.put(`${API}/group/${group_id}/update/`, {
            name: name,
            description: description,
        }).then((response) => {
            this.componentDidMount();
        }).catch()
    }

    componentDidMount() {
        axios.get(`${API}/group/`).then((response) => {
            this.setState({
                groups: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <GroupCreate createGroup={(name, description) => this.createGroup(name, description)}/>
                <GroupTable data={this.state.groups} deleteGroup={(group_id) => this.deleteGroup(group_id)}
                            updateGroup={(group_id, name, description) => this.updateGroup(group_id, name, description)}/>
            </div>
        )
    }
}