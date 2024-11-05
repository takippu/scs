import ApexCharts from "apexcharts";

// ===== chartFour
const chart04 = () => {
  const dataValues = [
    14, 20, 41, 59, 31, 43, 67, 20, 53, 92, 62, 22, 25,
  ];
  
  // Find the maximum value in the data array
  const maxValue = Math.max(...dataValues);

  // Create colors array where the highest value is red, and the rest are blue
  const colors = dataValues.map(value => (value === maxValue ? "#FF0000" : "#3C50E0"));

  const chartFourOptions = {
    series: [
      {
        data: dataValues,
      },
    ],
    colors: colors, // Apply colors dynamically
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        borderRadius: 2,
        distributed: true, // Enable distributed colors
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        // "11pm",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      markers: {
        radius: 99,
      },
    },
    yaxis: {
      min: 0,    // Set the minimum value on the Y-axis
      max: 100,  // Set the maximum value on the Y-axis
      title: {
        text: "Visitors",  // Y-axis label (optional)
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const chartSelector = document.querySelectorAll("#chartFour");

  if (chartSelector.length) {
    const chartFour = new ApexCharts(
      document.querySelector("#chartFour"),
      chartFourOptions
    );
    chartFour.render();
  }
};

export default chart04;
