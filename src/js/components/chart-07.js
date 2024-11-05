import ApexCharts from "apexcharts";

// ===== chartSeven (Visitor Time vs Conversion Rate)
const chart07 = () => {
  const chartSevenOptions = {
    series: [
      {
        name: "Conversion Rate",
        data: [
          [0, 5],  // 12 AM - 5% conversion rate
          [1, 12], // 1 AM - 12% conversion rate
          [2, 8],  // 2 AM - 8%
          [3, 15], // 3 AM - 15%
          [4, 9],  // 4 AM - 9%
          [5, 3],  // 5 AM - 3%
          [6, 10], // 6 AM - 10%
          [7, 18], // 7 AM - 18%
          [8, 20], // 8 AM - 20%
          [9, 25], // 9 AM - 25%
          [10, 35], // 10 AM - 35%
          [11, 30], // 11 AM - 30%
          [12, 28], // 12 PM - 28%
          [13, 24], // 1 PM - 24%
          [14, 22], // 2 PM - 22%
          [15, 19], // 3 PM - 19%
          [16, 15], // 4 PM - 15%
          [17, 20], // 5 PM - 20%
          [18, 25], // 6 PM - 25%
          [19, 30], // 7 PM - 30%
          [20, 40], // 8 PM - 40%
          [21, 35], // 9 PM - 35%
          [22, 30], // 10 PM - 30%
          [23, 20]  // 11 PM - 20%
        ],
      },
    ],
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "heatmap",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    plotOptions: {
      heatmap: {
        radius: 2,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 10,
              color: "#3C50E0", // Low conversion rate
              name: "Low",
            },
            {
              from: 11,
              to: 20,
              color: "#00E396", // Medium conversion rate
              name: "Medium",
            },
            {
              from: 21,
              to: 30,
              color: "#FEB019", // High conversion rate
              name: "High",
            },
            {
              from: 31,
              to: 50,
              color: "#FF4560", // Very high conversion rate
              name: "Very High",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM",
        "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM",
        "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Conversion Rate (%)",
        style: {
          fontSize: "14px",
        },
      },
      min: 0,
      max: 10,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  const chartSelector = document.querySelectorAll("#chartSeven");

  if (chartSelector.length) {
    const chartSeven = new ApexCharts(
      document.querySelector("#chartSeven"),
      chartSevenOptions
    );
    chartSeven.render();
  }
};

export default chart07;
