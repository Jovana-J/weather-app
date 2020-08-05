import React from "react";
import "./_form.scss";
import Info from "./info";
import Form from "./form";
import Loader from "./loader";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: "",
      latitude: "",
      weather: [],
      loaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.longitude);
    console.log(this.state.latitude);
  }

  async fetchWeatherData() {
    this.setState({
      loaded: true,
    });
    const response = await fetch(
      `http://www.7timer.info/bin/civillight.php?lon=${this.state.longitude}&lat=${this.state.latitude}&ac=0&lang=en&unit=metric&output=json&tzshift=0`
    );
    this.setState({
      weather: await response.json(),
      loaded: false,
    });
    console.log(this.state.weather.init);
  }

  render() {
    if (this.state.weather.dataseries) {
      return (
        <div className="App">
          <Info weatherData={this.state.weather.dataseries} />
        </div>
      );
    } else if (this.state.loaded) {
      return (
        <div className="App">
          <Loader propsLoad={this.state.loaded} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Form
            stateProps={this.state}
            handleChange={this.handleChange}
            fetchWeatherData={this.fetchWeatherData}
          />
        </div>
      );
    }
  }
}

export default Input;
