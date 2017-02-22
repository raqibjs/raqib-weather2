import React from 'react';

import WeatherForm from './weather-components/WeatherForm';
import WeatherMessage from './weather-components/WeatherMessage';

//to call openweathermap api
import axios from 'axios';

export default class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            iconClass: 'fa fa-exclamation-triangle'
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {
        //Make loading message
        this.setState({
            isLoading: true,
            iconClass: "fa fa-spinner fa-pulse fa-fw"
        });

        let openWeatherURL = 'api.openweathermap.org/data/2.5/find?units=metric&appid=484abfb7a6b64e76e29f4179e2bef8e3';
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `http://${openWeatherURL}&q=${encodedLocation}`;

        let that = this;
        
        axios.get(requestURL)
            .then(function (response) {
                let temperature = response.data.list[0].main.temp;
                that.setState({
                    isLoading: false,
                    iconClass : "fa fa-cloud",
                    location: location,
                    temperature: temperature,
                });
            })
            .catch(function (error) {
                that.setState({
                    isLoading: false,
                    iconClass : "fa fa-exclamation-triangle",
                    location: "",
                    temperature: 0
                });
            });
    }

    render() {

        let {isLoading, location, temperature} = this.state;

        function renderMessage() {
            if (isLoading) {
                return "";
            } else if (location !== '' && temperature) {
                return `Its ${temperature}°С in ${location} `;
            } else {
                return "Location not found!";
            }
        }

        return (
            <div>
                <h3>Weather Forecast</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <br />
                <WeatherMessage iconClass={this.state.iconClass} message={renderMessage()} />

            </div>
        );
    }
}