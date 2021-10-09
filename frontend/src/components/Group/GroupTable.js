import React from "react";

export class GroupTable extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            group_id: '',
            current_name: '',
        }
        this.clickEdit = this.clickEdit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    clickEdit(el) {
        this.setState({
            name: el.name,
            description: el.description,
            group_id: el.id,
            current_name: el.name,
        })
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})

    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value})
    }

    onClick() {
        this.props.updateGroup(this.state.group_id, this.state.name, this.state.description)
    }


    render() {
        return (
            <div>
                <div className="modal fade" id="updateGroupModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editing
                                    Group {this.state.current_name} (ID: {this.state.group_id})</h5>
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
                                        onClick={this.onClick}>Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((el) =>
                        <tr key={el.name.toString()}>
                            <th width='1'>{el.id}</th>
                            <th width='1'>{el.name}</th>
                            <th width='1'>{el.description}</th>
                            <th width='1'>
                                <button className="btn btn-primary me-md-2" type="button" data-bs-toggle="modal"
                                        data-bs-target="#updateGroupModal" onClick={() => this.clickEdit(el)}>Edit
                                </button>
                                <button className="btn btn-danger" type="button"
                                        onClick={() => this.props.deleteGroup(el.id)}
                                        disabled={el.user_amount !== 0}>Delete
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