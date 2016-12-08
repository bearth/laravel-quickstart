import React, { Component, PropTypes } from 'react';

import TaskHeader from './TaskHeader';
import TaskItem from './TaskItem';
import TaskActionCreators from '../../actions/TaskActionCreators';

class TaskView extends Component {
  

  handleClick(inputValue) {
    if (inputValue.length !== 0) {
      // let id = new Date();
      // this.setState({
      //   items: [
      //     ...this.state.items,
      //     {
      //       id: id,
      //       name: inputValue
      //     }
      //   ]
      // });
      //========================
      // let id = Date.now();

      // var item = {
      //   id: id,
      //   name: inputValue
      // };

      // TaskActionCreators.addTask(item);
      //========================

      let name = inputValue;

      TaskActionCreators.addTask(name);
    }

  }

  handleDelete(itemId, itemIndex, item) {
    // var array = this.state.items;
    // var index = array.indexOf(item);

    // if (index > -1) {
    //   array.splice(index, 1);
    // }

    // this.setState({
    //   items: array
    // });
    TaskActionCreators.deleteTask(itemId, itemIndex, item);
  }

 render() {
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
              this.props.storeState.items.map((item, itemIndex) => (<TaskItem key={item.id} item={item} handleDelete={this.handleDelete.bind(this, item.id, itemIndex, item)} />))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
 }
}

export default TaskView;
