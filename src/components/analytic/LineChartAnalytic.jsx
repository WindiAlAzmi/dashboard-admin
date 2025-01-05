/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataValue = [
  { value: 10 },
  { value: 20 },
  { value: 30 },
  { value: 20 },
  { value: 28 },
];


export default function LineChartAnalytic(props) {
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div
            style={{
              padding: "5px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <span style={{ color: "red", marginRight: "5px" }}>●</span>
            {props.percentage}
          </div>
        );
      }
      return null;
    };


  return (
    <div className="h-[78px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataValue}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF5A5F"
            strokeWidth={2}
            dot={false}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
