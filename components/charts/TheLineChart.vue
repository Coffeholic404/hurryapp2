<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Sales',
            data: [0, 100, 200, 300, 400, 500, 600],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true,  // set to true if you want the area under the line to be filled
            tension: 0.4 // controls the curve of the line, 0 for straight lines
        }
    ]
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            labels: {
                font: {
                    size: 14,
                    family: 'Arial',
                    style: 'italic'
                },
                color: '#000'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
                size: 16,
                family: 'Arial'
            },
            bodyFont: {
                size: 14,
                family: 'Arial'
            },
            displayColors: false
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#000',
                font: {
                    size: 12,
                    family: 'Arial'
                }
            }
        },
        y: {
            ticks: {
                color: '#000',
                font: {
                    size: 12,
                    family: 'Arial'
                }
            }
        }
    }
}
</script>

<template>
    <div class="chart-container">
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>

<style scoped>
.chart-container {
    width: 800px; /* Set your desired width */
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}
</style>
