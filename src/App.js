import React, { Component } from 'react';
import './App.css';
import adhan from "adhan";
import moment from "moment";

class App extends Component {
  render() {
    let coordinates = new adhan.Coordinates(52.4862, 1.8904);
    let date = new Date(2019, 2, 22);
    let params = adhan.CalculationMethod.Other();
    params.madhab = adhan.Madhab.Hanafi;
    
    let prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
    console.log(prayerTimes)
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
          fajr {moment(prayerTimes.fajr).format('LTS')}
          </p>
          <p>
          sunrise {moment(prayerTimes.sunrise).format('LTS')}
          </p>
          <p>
          dhuhr {moment(prayerTimes.dhuhr).format('LTS')}
          </p>
          <p>
          asr{moment(prayerTimes.asr).format('LTS')}
          </p>
          <p>
          maghrib {moment(prayerTimes.maghrib).format('LTS')}
          </p>
          <p>
          isha {moment(prayerTimes.isha).format('LTS')}
          </p>
          <p>

           {(prayerTimes.currentPrayer)}
           {(prayerTimes.nextPrayer)}
           {adhan.Date.formattedTime(prayerTimes.fajr)}
          </p>
          
           

        </header>
      </div>
    );
  }
}

export default App;
