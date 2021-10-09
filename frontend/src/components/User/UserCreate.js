import React from "react";

export class UserCreate extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            group_id: '',
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value})
    }

    handleChangeGroup(event) {
        this.setState({group_id: event.target.value})
    }

    onClick() {
        this.props.createUser(this.state.username, this.state.group_id);
        this.setState({
            username: '',
            group_id: '',
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create User</h5>
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
                                        {this.props.groups.map((el) => <option key={el.id} value={el.id}>{el.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button"
                                        className="btn btn-primary" disabled={!this.state.username}
                                        onClick={() => this.onClick()}>
                                    Create User
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav justify-content-end">
                    <button type="button" className="btn btn-primary me-md-2" data-bs-toggle="modal"
                            data-bs-target="#createModal">
                        Create User
                    </button>
                </div>
            </div>

        )
    }
}


