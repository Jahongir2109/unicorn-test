import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-incoming-documents-chart',
  standalone: true,
  imports: [CommonModule, ChartModule, ButtonModule],
  template: `
    <div class="card">
      <div class="flex justify-content-between align-items-center mb-4">
        <h3>Kelib tushgan hujjatlar</h3>
        <div class="flex gap-2">
          <p-button label="O'TGAN HAFTA" styleClass="p-button-sm"></p-button>
          <p-button label="SHU HAFTA" styleClass="p-button-sm p-button-outlined"></p-button>
        </div>
      </div>
      <p-chart type="line" [data]="chartData" [options]="chartOptions"></p-chart>
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
      margin: 0; /* Remove default margin from h3 */
    }
    .p-button.p-button-sm {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      background-color: #3B82F6; /* Dark blue from image for active button */
      color: #FFFFFF; /* White text for active button */
      border: 1px solid #3B82F6;
    }
    .p-button.p-button-outlined {
      background-color: transparent;
      color: #3B82F6; /* Blue text from image for outlined button */
      border: 1px solid #3B82F6; /* Blue border from image */
    }

    /* Chart specific styles */
    :host ::ng-deep .p-chart {
        height: 100%; /* Adjust height as needed */
    }
    :host ::ng-deep .p-chart canvas {
        height: 100% !important;
        width: 100% !important;
    }

    /* Custom styles for the chart to match the image */
    :host ::ng-deep .p-chart-line {
      .p-tooltip {
        background-color: var(--surface-900);
        color: var(--surface-0);
        padding: 0.5rem 0.75rem;
        border-radius: var(--border-radius);
        font-size: 0.875rem;
      }
    }
  `]
})
export class IncomingDocumentsChartComponent implements OnInit {

  chartData: any;
  chartOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
      datasets: [
        {
          data: [6, 12, 14, 26, 34, 37, 28],
          fill: true,
          borderColor: '#3B82F6', // Blue color from image
          tension: 0.4,
          backgroundColor: 'rgba(59, 130, 246, 0.2)', // Light blue fill
          pointRadius: 6,
          pointBackgroundColor: '#3B82F6',
          pointBorderColor: '#FFFFFF',
          pointBorderWidth: 2,
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false // Hide legend as per image
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context: any) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false, // Hide x-axis grid lines
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary,
            beginAtZero: true
          },
          grid: {
            color: surfaceBorder, // Light grid lines
            borderDash: [5, 5] // Dashed grid lines
          }
        }
      }
    };
  }
} 