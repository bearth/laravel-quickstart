import 'whatwg-fetch';
import 'babel-polyfill';
import Moment from 'moment';

const API_URL = '/api';
const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
};

let TaskApi = {
	getAllTasks() {
		return fetch(`${API_URL}/tasks`,
		{
		  method: 'GET',
		  headers: API_HEADERS,
		})
		.then((response) => response.json())
	},

	addTask(name) {
    return fetch(`${API_URL}/add/task`,
    {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify({
    		name: name
      })
    })
    .then((response) => response.json())
	},

	deleteTask(id) {
    return fetch(`${API_URL}/delete/task`,
    {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify({
    		id: id
      })
    })
    .then((response) => response.json())
	}
}

export default TaskApi;