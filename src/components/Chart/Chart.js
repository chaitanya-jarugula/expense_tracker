import "./Chart.css";
import ChartBar  from "./ChartBar";

const Chart = (props) => {
  let chartDatapointValues = props.datapoints.map(datapoint=>datapoint.value);
  let totalMaxValue = Math.max(...chartDatapointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaxValue}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
