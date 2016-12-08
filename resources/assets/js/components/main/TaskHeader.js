import React, { Component, PropTypes } from 'react';

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

export default TaskHeader;
