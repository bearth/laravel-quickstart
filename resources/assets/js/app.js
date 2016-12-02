import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class TaskItem extends Component {
 render(){
   return (
    <tr>
      <td className="table-text">
        <div>{this.props.item.name}</div>
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

class TaskHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  _handleChange(e) {
    this.setState({ input: e.target.value });
  }

  _handleSubmit(e) {
    this.props.handleClick(this.state.input);
    this.setState({ input: "" });
  }

 render(){
   return (
     <div className="panel-body">
       <div className="form-group">
           <label htmlFor="task-name" className="col-sm-3 control-label">Task</label>

           <div className="col-sm-6">
               <input type="text" name="name" id="task-name" className="form-control" onChange={this._handleChange.bind(this)} value={this.state.input}/>
           </div>
       </div>
       <div className="form-group">
           <div className="col-sm-offset-3 col-sm-6">
             <button type="submit" className="btn btn-default" onClick={this._handleSubmit.bind(this)}>
                 <i className="fa fa-plus"></i> Add Task
             </button>
           </div>
       </div>
     </div>
   );
 }
}

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'walk the dog'
        },
        {
          id: 2,
          name: 'do homework'
        },
        {
          id: 3,
          name: 'clean the room'
        },
        {
          id: 4,
          name: 'pet cat'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(inputValue) {
    if (inputValue.length !== 0) {
      let id = new Date();
      console.log(id);
      this.setState({
        items: [
          ...this.state.items,
          {
            id: id,
            name: inputValue
          }
        ]
      });
    }
  }

  handleDelete(item) {
    var array = this.state.items;
    var index = array.indexOf(item);

    if (index > -1) {
      array.splice(index, 1);
    }

    this.setState({
      items: array
    });
  }

 render(){
   return (
     <div>
      <TaskHeader handleClick={this.handleClick.bind(this)} />
      <div className="panel panel-default">
        <div className="panel-heading">
          Current Tasks
        </div>

        <div className="panel-body">
          <table className="table table-striped task-table">
            <thead>
              <th>Task</th>
              <th>&nbsp;</th>
            </thead>

            <tbody>
            {
              this.state.items.map((item) => (<TaskItem key={item.id} item={item} handleDelete={this.handleDelete.bind(this, item)} />))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
 }
}

var APP_CONTAINER_DOM_ID = 'app-container';
var _appDest = document.getElementById(APP_CONTAINER_DOM_ID);
if (_appDest) {
  render((
    <div>
      <TaskView />
    </div>
  ), _appDest);
}
