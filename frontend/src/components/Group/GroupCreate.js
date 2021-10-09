import React from "react";

export class GroupCreate extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            description: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})

    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value})
    }

    onClick() {
        this.props.createGroup(this.state.name, this.state.description)
        this.setState({
            name: '',
            description: '',
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="createGroupModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Group</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Name of Group"
                                           aria-label="Name of Group" onChange={this.handleChangeName}
                                           value={this.state.name}/>
                                </div>
                                <div className="input-group mb-3">
                                    <textarea className="form-control" placeholder="Description"
                                              aria-label="Description" onChange={this.handleChangeDescription}
                                              value={this.state.description}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary" disabled={!this.state.name}
                                        onClick={() => this.onClick()}>Create Group
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav justify-content-end">
                    <button type="button" className="btn btn-primary me-md-2" data-bs-toggle="modal"
                            data-bs-target="#createGroupModal">
                        Create Group
                    </button>
                </div>
            </div>
        )
    }
}
