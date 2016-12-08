import React, { Component, PropTypes } from 'react';

class TaskItem extends Component {
 render(){
   return (
    <tr>
      <td className="table-text">
        <div><span>{this.props.item.id}</span>&nbsp;{this.props.item.name}</div>
      </td>

      <td>
        <button type="submit" id="delete-task-{{ $task->id }}" className="btn btn-danger" onClick={this.props.handleDelete}>
          <i className="fa fa-btn fa-trash"></i>Delete
        </button>
      </td>
    </tr>
   );
 }
}

export default TaskItem;
