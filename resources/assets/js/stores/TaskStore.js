import { ReduceStore } from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';

let defaultState = {
  input: '',
  items: []
};

class TaskStore extends ReduceStore {
  getInitialState() {
    var initState = {
      viewInitialized: true // to control loading
    };

    return update(initState, {
      $merge: defaultState
    });
  }

  getTaskIndex(id) {
    // var array = this._state.items;
    // var index = array.indexOf(item);
    // return index;
    console.log(id);
    console.log(this._state.items);
    return this._state.items.findIndex((item) => item.id == id);
  }

  reduce(state, action) {
    switch(action.type) {
      case constants.GET_ALL_TASKS:
        return state;

      case constants.GET_ALL_TASKS_SUCCESS:
        var res = action.payload.response;
        return update(
          state, {
            items: {$set: res.data.tasks.map(
              (obj) => {
                var rObj = {};
                rObj.id = obj.id;
                rObj.name = obj.name;
                return rObj;
              }
            )}
          }
        );

      case constants.GET_ALL_TASKS_ERROR:
        return state;

      case constants.ADD_TASK:
        var task = {
          id: action.payload.taskId,
          name: action.payload.name
        }
        return update(this.getState(), {
          items: {$push: [task]}
        });

      case constants.ADD_TASK_SUCCESS:
        var taskIndex = this.getTaskIndex(action.payload.taskId);
        console.log('test'+taskIndex);
        var res = action.payload.response;
        return update(this.getState(), {
          items: {
            [taskIndex]: {
              id: {$set: res.id}
            }
          }
        });
        console.log(item);

      case constants.ADD_TASK_ERROR:
        return state;

      case constants.DELETE_TASK:
       var taskIndex = action.payload.taskIndex;
       console.log(taskIndex);
       return update(this.getState(), {items: {
         $splice:[[taskIndex, 1]]
       }});

      case constants.DELETE_TASK_ERROR:
        var taskIndex = action.payload.taskIndex;
        return update(this.getState(), {items: {
         $splice:[[taskIndex, 0, action.payload.task]]
       }});

      default:
        return state;
    }
  }
}

export default new TaskStore(AppDispatcher);
