import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import TaskApi from '../api/TaskApi';

let TaskActionCreators = {

  getAllTasks() {
    AppDispatcher.dispatchAsync(TaskApi.getAllTasks(), {
      request: constants.GET_ALL_TASKS,
      success: constants.GET_ALL_TASKS_SUCCESS,
      failure: constants.GET_ALL_TASKS_ERROR
    });
  },

  // deleteTask(task){
  //   AppDispatcher.dispatch({
  //     type: constants.DELETE_TASK,
  //     payload: {task}
  //   });
  // },

  // addTask(task) {
  //   AppDispatcher.dispatch({
  //     type: constants.ADD_TASK,
  //     payload: {task}
  //   });
  // }

  addTask(name) {
    let taskId = Date.now();
    AppDispatcher.dispatchAsync(TaskApi.addTask(name), {
      request: constants.ADD_TASK,
      success: constants.ADD_TASK_SUCCESS,
      failure: constants.ADD_TASK_ERROR
    }, {name, taskId});
  },

  deleteTask(taskId, taskIndex, task){
    AppDispatcher.dispatchAsync(TaskApi.deleteTask(taskId), {
      request: constants.DELETE_TASK,
      success: constants.DELETE_TASK_SUCCESS,
      failure: constants.DELETE_TASK_ERROR
    }, {taskId, taskIndex, task});
  },
};

export default TaskActionCreators;