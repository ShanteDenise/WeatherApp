import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <div>
          {/* On form submission use getWeather function passed in via props from App.js */}
    <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="city.."/>
        <input type="text" name="country" placeholder="county.."/>
        <button> Get Weather</button>
    </form>
      </div>
    )
  }
}

export default Form;
