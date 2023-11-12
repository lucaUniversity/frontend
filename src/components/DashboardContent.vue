<template>
  <div class="container mt-5">
    <div class="row pt-3">
      <div class="col">
        <div>
          <h4 style="text-align: left; padding-left: 40px; padding-top: 10px; margin-bottom: -10px;">Notifications</h4>
          <div class="m-3 box-small">
            Notifications
          </div>
        </div>
        <div>
          <h4 style="text-align: left; padding-left: 40px; padding-top: 10px; margin-bottom: -5px;">Connected Data</h4>
          <div class="mt-2 ml-1 box-small">
            Connected Data
          </div>
        </div>
      </div>
      <div class="col">
        <div>
          <h4 style="text-align: left; padding-left: 40px; padding-top: 10px; margin-bottom: -10px;">Forecast</h4>
          <div class="m-3 box-big">
            Forecast
            <canvas id="myChart" width="100" height="100"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';



  export default {
    name: 'DashboardContent',
    mounted() {
      const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };


      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'line',
  data: data,

      })

      myChart;
    }
};
</script>

<style scoped>
  @import '@/style/sites.css';
</style>
