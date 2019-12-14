import React, { Component } from "react";
import { Wrapper, Main, Form } from "./components/Styled";
import Info from "./components/Info";
import Input from "./components/Input";
import Weather from "./components/Weather";
import { API_KEY } from "./API_KEY";

class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Enter the name of the city"
      });
    }
  };

  render() {
    return (
      <Wrapper className="wrapper">
        <Main className="main">
          <Info className="info" />
          <Form className="form">
            <Input weatherMethod={this.gettingWeather} className="input" />
            <Weather {...this.state} className="weather" />
          </Form>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
