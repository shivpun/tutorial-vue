import Badge from "@/components/badge/Badge.vue";
import stockJson from "@/components/chart/chart.json";
import colorJson from "@/constants/colors.json";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarController,
  Tooltip,
  BarElement,
  CategoryScale,
} from "chart.js";

export default {
  name: "chart-0",
  components: {
    Badge,
  },
  data() {
    let sample = [];
    let labels = "";
    let datasets = [];
    for (let index = 0; index < stockJson.length; index++) {
      sample.push({
        name: stockJson[index]["name"],
        color: colorJson[index].className,
      });
      labels = stockJson[index]["reportDate"];
      datasets.push({
        label: "# of " + stockJson[index]["name"],
        data: [stockJson[index]["deliveryPercent"]],
        backgroundColor: colorJson[index].hex,
        borderColor: colorJson[index].hex,
        borderWidth: 1,
        borderRadius: 12,
        barPercentage: 0.2,
        barThickness: 25,
        maxBarThickness: 15,
        minBarLength: 2,
        barValueSpacing: 0,
        borderSkipped: false,
      });
    }
    return {
      show: false,
      jsonData: stockJson,
      xAxis: [labels],
      data: sample,
      sample,
      datasets,
      canvasCtx: null,
    };
  },
  beforeCreate() {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      Title,
      Tooltip,
      BarElement,
      BarController,
      CategoryScale
    );
  },
  mounted() {
    this.canvasCtx = document.getElementById("chart1").getContext("2d");
    this.createChart(this.xAxis, this.datasets);
  },
  methods: {
    openCard() {
      this.show = !this.show;
      this.data = this.sample;
      console.log("Open Card");
    },
    createChart(labels, datasets) {
      var ctx = this.canvasCtx;
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          barRoundness: 1,
          layout: {
            padding: {
              left: 5,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    },
  },
};
