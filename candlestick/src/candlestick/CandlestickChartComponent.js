import { Component } from "react";
import { ResponsiveContainer, XAxis, YAxis, Candlestick, Tooltip, Legend } from 'recharts';


class CandlestickChartComponent extends Component {
    render() {
      const { data } = this.props;
  
      return (
        <ResponsiveContainer width="100%" height={400}>
          <CandlestickChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Candlestick
              name="Candle"
              dataKey="candle"
              fill="#ff0000"
              stroke="#0000ff"
              strokeWidth={2}
            />
          </CandlestickChart>
        </ResponsiveContainer>
      );
    }
  }
  
  export default CandlestickChartComponent;