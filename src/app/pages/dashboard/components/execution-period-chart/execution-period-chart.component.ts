import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-execution-period-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  template: `
    <div class="card">
      <h3>Ijro muddati bo'yicha</h3>
      <p-chart type="bar" [data]="chartData" [options]="chartOptions"></p-chart>
    </div>
  `,
  styles: [`
    .card {
      background: var(--surface-card);
      border-radius: var(--content-border-radius);
      padding: 2rem;
      width: 100%;
      flex-shrink: 0;
      flex-grow: 0;
      min-height: 0;
      height: 100%;
    }
    h3 {
      font-size: 1.25rem; /* Equivalent to text-xl */
      font-weight: 700; /* Equivalent to font-bold */
      color: var(--text-color);
      margin-bottom: 1.5rem; /* Equivalent to mb-6 */
    }
  `]
})
export class ExecutionPeriodChartComponent implements OnInit {

  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.chartData = {
      labels: ['Muddati o\'tgan', '1 kun', '2 kun', '3 kun', '1 kun (Murojaat)', '2 kun (Murojaat)', '3 kun (Murojaat)'],
      datasets: [
        {
          data: [8, 12, 10, 3, 10, 7, 9],
          backgroundColor: '#B1B2EC', // Example color, adjust to match image
          borderRadius: 8, // Rounded corners for bars
          barPercentage: 0.7, // Adjust bar width
          categoryPercentage: 0.8, // Adjust space between categories
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: false // Hide legend as per image
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: 'var(--text-color)', // Adjust color for data labels
          font: {
            weight: 'bold'
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Hide x-axis grid lines
          },
          ticks: {
            color: 'var(--text-color-secondary)' // Adjust x-axis label color
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)', // Light grid lines
            borderDash: [5, 5] // Dashed grid lines
          },
          ticks: {
            color: 'var(--text-color-secondary)' // Adjust y-axis label color
          }
        }
      }
    };
  }
} 