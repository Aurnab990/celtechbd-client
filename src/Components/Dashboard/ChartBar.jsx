import React from 'react';
import { TEChart } from "tw-elements-react";

const ChartBar = () => {
    return (
        <TEChart
        className=''
        type="bar"
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Earnings",
              data: [100000, 234308, 154500, 342300, 210000, 198500, 98700],
            },
          ],
        }}
      />
    );
};

export default ChartBar;