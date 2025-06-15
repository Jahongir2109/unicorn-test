import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartModule } from "primeng/chart";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-incoming-documents-chart",
  standalone: true,
  imports: [CommonModule, ChartModule, ButtonModule],
  template: `
    <div
      class="rounded-xl overflow-hidden shadow-md bg-gradient-to-r from-blue-300 to-blue-500 p-4 h-full"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-white text-lg font-semibold">
          Kelib tushgan hujjatlar
        </h3>
        <div class="flex gap-2">
          <p-button
            label="O'TGAN HAFTA"
            (onClick)="selectWeek('last')"
            [ngClass]="{
              'text-white': selectedWeek === 'last',
            }"
            [severity]="selectedWeek === 'last' ? 'success' : 'info'"
            styleClass="text-xs px-3 py-1 rounded-full !shadow-none !border"
            class="!p-0"
          ></p-button>

          <p-button
            label="SHU HAFTA"
            (onClick)="selectWeek('current')"
            [severity]="selectedWeek === 'current' ? 'success' : 'info'"
            [ngClass]="{
              'text-white': selectedWeek === 'current',
            }"
            styleClass="text-xs px-3 py-1 rounded-full"
            class="!p-0"
          ></p-button>
        </div>
      </div>

      <div>
        <p-chart
          type="line"
          [data]="chartData"
          [options]="chartOptions"
          styleClass="h-full w-full"
        ></p-chart>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .p-chart canvas {
        height: 100% !important;
        width: 100% !important;
      }
    `,
  ],
})
export class IncomingDocumentsChartComponent implements OnInit {
  selectedWeek: "current" | "last" = "current"; // boshlang‘ich tanlov

  chartData: any;
  chartOptions: any;

  // Haqiqiy ma'lumotlar
  currentWeekData = [6, 12, 14, 26, 34, 37, 28];
  lastWeekData = [4, 8, 10, 8, 22, 11, 19];

  ngOnInit() {
    this.initChart(this.currentWeekData);
  }

  selectWeek(week: "current" | "last") {
    this.selectedWeek = week;
    const data = week === "current" ? this.currentWeekData : this.lastWeekData;
    this.initChart(data);
  }

  initChart(data: number[]) {
    this.chartData = {
      labels: ["Du", "Se", "Cho", "Pa", "Ju", "Sha", "Ya"],
      datasets: [
        {
          data: data,
          borderColor: "#3B82F6",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#3B82F6",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
        },
      ],
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          backgroundColor: "#374151",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "#E5E7EB",
          borderWidth: 1,
          cornerRadius: 8,
          callbacks: {
            label: function (context: any) {
              return context.parsed.y;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: {
            color: "#F3F4F6",
            font: { size: 12, weight: "500" },
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "#F3F4F6",
            font: { size: 12 },
          },
          grid: {
            color: "rgba(255,255,255,0.3)",
            borderDash: [5, 5],
          },
        },
      },
    };
  }
}
