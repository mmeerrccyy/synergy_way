import React from "react";

export class UserTable extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id: '',
            username: '',
            group_id: '',
            current_username: ''
        }
        this.clickEdit = this.clickEdit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
    }

    clickEdit(el) {
        this.setState({
            user_id: el.id,
            username: el.username,
            group_id: el.group.id,
            current_username: el.username,
        })
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value})
    }

    handleChangeGroup(event) {
        this.setState({group_id: event.target.value})
    }

    onClick() {
        this.props.updateUser(
            this.state.user_id, this.state.username, this.state.group_id
        )
    }


    render() {
        return (
            <div>
                <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editing
                                    User {this.state.current_username} (ID: {this.state.user_id})</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Username"
                                           aria-label="Username" onChange={this.handleChangeUsername}
                                           value={this.state.username}/>
                                </div>
                                <div className="input-group mb-3">
                                    <select className="form-select" onChange={this.handleChangeGroup}>
                                        <option selected={!this.state.group_id} value=''>None</option>
                                        {this.props.groups.map((el) => <option key={el.id} value={el.id}
                                                                               selected={el.id === this.state.group_id}>{el.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" disabled={!this.state.username}
                                        onClick={this.onClick}>Save
                                    changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Created</th>
                        <th scope="col">Group</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((el) =>
                        <tr key={el.username.toString()}>
                            <th width='1'>{el.username}</th>
                            <th width='1'>{el.created}</th>
                            <th width='1'>{el.group.name}</th>
                            <th width='1'>
                                <button className="btn btn-primary me-md-2" type="button" data-bs-toggle="modal"
                                        data-bs-target="#updateModal" onClick={() => this.clickEdit(el)}>Edit
                                </button>
                                <button className="btn btn-danger" type="button"
                                        onClick={() => this.props.deleteUser(el.id)}>Delete
                                </button>
                            </th>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        )
    }
}