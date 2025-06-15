import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartModule } from "primeng/chart";

@Component({
  selector: "app-execution-period-chart",
  standalone: true,
  imports: [CommonModule, ChartModule],
  template: `
    <div class="card">
      <h3>Ijro muddati bo'yicha</h3>
      <p-chart type="bar" [data]="chartData" [options]="chartOptions"></p-chart>
    </div>
  `,
  styles: [
    `
      .card {
        background: #ffffff;
        border-radius: 1.25rem;
        padding: 1.5rem;
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      h3 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1f2937;
      }

      /* Chart canvas'ini majburlab kattalashtirish */
      ::ng-deep .p-chart canvas {
        height: 400px !important;
      }
    `,
  ],
})
export class ExecutionPeriodChartComponent implements OnInit {
  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.chartData = {
      labels: [
        "Muddati o'tgan",
        "1 kun",
        "2 kun",
        "3 kun",
        "1 kun (Murojaat)",
        "2 kun (Murojaat)",
        "3 kun (Murojaat)",
      ],
      datasets: [
        {
          data: [8, 12, 10, 3, 10, 7, 9],
          backgroundColor: "#B1B2EC",
          borderRadius: 10,
          barPercentage: 0.6,
          categoryPercentage: 0.5,
        },
      ],
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#6B7280",
            font: {
              size: 12,
            },
          },
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          suggestedMax: 13,
          ticks: {
            stepSize: 1,
            color: "#6B7280",
            font: {
              size: 12,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            borderDash: [5, 5],
          },
        },
      },
    };
  }
}
