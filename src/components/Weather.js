import React from 'react'

class Weather extends React.Component {
  render() {
    return (
      <div className="weather__info">
          {/* If the props exist only then will the <p> tags be shown */}
          { 
              this.props.city && this.props.country && <p className="weather__key">Location: 
              <span className="weather__value"> {this.props.city}, {this.props.country}</span>
              </p>
              }
          { 
              this.props.temperature && <p className="weather__key">Temperature: 
              <span className="weather__value"> {this.props.temperature}F</span>

               </p>
              }
          { 
              this.props.humidity && <p className="weather__key">Humidity:
              <span className="weather__value"> {this.props.humidity} </span>
              </p>
              }
          {
              this.props.description && this.props.icon && <p className="weather__key">Description:
              <span className="weather__value"> {this.props.description}
              <img className="weather__icon" src = {`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather_icon"/>
              </span>
              </p>
              }
          {
              this.props.error && <p className="weather__key"> 
              <span className="weather__error"> {this.props.error}
              </span>
              </p>
              }
      </div>
    )
  }
}

export default Weather;