import React  from 'react'

class Titles extends React.Component {
  render() {
    return (
      <div>
          <div>
              <h1 className="title-container__title">Weather Search</h1>
              <p className="title-container__subtitle">Input city and country to get Temperature, Conditions, and More</p>
          </div>
        
      </div>
    )
  }
}

export default Titles;