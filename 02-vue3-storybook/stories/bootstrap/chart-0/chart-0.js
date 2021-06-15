import { Chart, LineController, LineElement, PointElement, LinearScale, Title, BarController, BarElement, CategoryScale } from 'chart.js'
import { h } from 'vue';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title,BarElement, BarController,CategoryScale);

export default {
    name: 'chart',
    mounted() {
        console.log('Chart CREATED');
        var ctx = document.getElementById("chart1").getContext('2d');;

        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["20-5-2021", "21-5-2021", "22-5-2021", "23-5-2021", "24-5-2021", "25-5-2021"],
        datasets: [{
            label: '# of Deliverable',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            borderRadius:12,
            barPercentage: 0.2,
            barThickness: 25,
            maxBarThickness: 15,
            minBarLength: 2,
            barValueSpacing: 0,
      borderSkipped: false
        },{
            label: '# of Deliverable',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            borderRadius:12,
            barPercentage: 0.2,
            barThickness: 25,
            maxBarThickness: 15,
            minBarLength: 2,
            barValueSpacing: 0,
      borderSkipped: false
        }]
            },
            options: {
                responsive: true,
                barRoundness: 1,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
          });
    },
    render() {
        return h('canvas')
      }
}  