
import { Component } from 'react';
import './App.css';
import CandlestickChartComponent from './candlestick/CandlestickChartComponent';

const candlestickData = [
  { date: '2022-01-01', open: 100, high: 120, low: 80, close: 110 },
  { date: '2022-01-02', open: 110, high: 130, low: 90, close: 120 },
  // Add more data points as needed
];

class App extends Component{
  render(){
    return(
      <div className='app'>
        <h1>Design Candlestick</h1>
        <CandlestickChartComponent data={candlestickData} />
      </div>
    )
  }
}

export default App;
