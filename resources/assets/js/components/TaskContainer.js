import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Container } from 'flux/utils';
import TaskActionCreators from '../actions/TaskActionCreators';

import TaskStore from '../stores/TaskStore';

class TaskContainer extends Component {

  componentDidMount() {
    setTimeout(() => {
      TaskActionCreators.getAllTasks();
    }, 0);
  }

  render() {
    let content = this.props.children && React.cloneElement(this.props.children, {
      storeState: this.state.storeState,
    });

    return content;
  }
}

TaskContainer.getStores = () => ([TaskStore]);
TaskContainer.calculateState = (prevState) => ({
  storeState: TaskStore.getState()
});

export default Container.create(TaskContainer);
