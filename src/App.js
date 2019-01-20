import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;


class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value

        var country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
        //Convert the api data to Json format to a readable format
        const data = await api_call.json();
        console.log(data)
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            error: ""


        })

    }
    render() {
        return (
            <div>
                <Titles/>
                {/* Giving Form component access to the getWeather function */}
                <Form getWeather={this.getWeather}/>
                <Weather />



            </div>
        );
    }
}

export default App;