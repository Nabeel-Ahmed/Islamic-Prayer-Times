import React, { Component } from 'react';
import './App.css';
import adhan from "adhan";

class App extends Component {
  render() {
    let coordinates = new adhan.Coordinates(35.78056, -78.6389);
    let date = new Date(2019, 2, 22);
    let params = adhan.CalculationMethod.MuslimWorldLeague();
    let prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
    console.log(prayerTimes)
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
          {JSON.stringify(prayerTimes.fajr)}
          </p>
          
           

        </header>
      </div>
    );
  }
}

export default App;
