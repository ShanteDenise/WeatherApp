import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;


class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value

        let country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`)
        //Convert the api data to Json format to a readable format
        const data = await api_call.json();
        // If the error code is 404, set State to error message else if the city and country exists run the code 
    
        if (data.cod === '404') {
            this.setState({
                error: 'Invalid Entry (Not Found)'
            })
        } else if (city && country) {

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                error: null
            })
        }
    }


    render() {
        return (
             <div>
        <div className="wrapper">
          <div className="main-fluid">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
           
        );
    }
};





export default App;