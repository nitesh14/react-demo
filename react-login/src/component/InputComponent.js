import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
      super(props)
      this.changeHandler = this.changeHandler.bind(this)
    }
      
    changeHandler(e) {
      this.props.userproperty(e.target.value)
    }
    
    render() {
      return (
        <div>
          <label>{this.props.labelName}</label>
          <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
        </div>
      )
    }
  }
  export default InputComponent;