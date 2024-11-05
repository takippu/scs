import ApexCharts from "apexcharts";

// ===== chartFive
const chart03 = () => {
  const chartFiveOptions = {
    series: [10, 20, 30, 40],
    chart: {
      type: "donut",
      width: 380,
    },
    colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
    labels: ["1-12", "13-21", "22-35", ">35"],
    // labels: ["Male", "Tablet", "Mobile", "Unknown"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const chartSelector = document.querySelectorAll("#chartFive");

  if (chartSelector.length) {
    const chartFive = new ApexCharts(
      document.querySelector("#chartFive"),
      chartFiveOptions
    );
    chartFive.render();
  }
};

export default chart03;
