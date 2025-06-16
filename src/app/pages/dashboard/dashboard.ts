import { Component } from "@angular/core";
import { NotificationsWidget } from "./components/notificationswidget";
import { StatsWidget } from "./components/statswidget";
import { RecentSalesWidget } from "./components/recentsaleswidget";
import { BestSellingWidget } from "./components/bestsellingwidget";
import { RevenueStreamWidget } from "./components/revenuestreamwidget";
import { DashboardRightPanel } from "./components/dashboardrightpanel";
import { ExecutionPeriodChartComponent } from "./components/execution-period-chart/execution-period-chart.component";
import { IncomingDocumentsChartComponent } from "./components/incoming-documents-chart/incoming-documents-chart.component";
import { IncomingTasksWidgetComponent } from "./components/incoming-tasks-widget/incoming-tasks-widget.component";

@Component({
  selector: "app-dashboard",
  styles: [
    `
      .custom-height {
        height: 350px;
      }

      .cloud-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1.25rem 1.5rem;
        border-radius: 1.5rem;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)); /* Glassmorphism effect */
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        color: #000000;
        position: relative;
        overflow: hidden;
        min-height: 120px; /* Ensure sufficient height */
      }

      .cloud-num {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        color: #000000;
      }

      .cloud-label {
        font-size: 0.875rem;
        color: #6b7280;
        margin-top: 0.25rem;
      }

      .cloud-arrow-icon-circle {
        background-color: #B4D4E5;
        border-radius: 50%;
        width: 2.75rem;
        height: 2.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s;
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
      }

      .cloud-arrow-icon-circle:hover {
        background-color: #90CAF9;
      }

      .cloud-arrow-icon-circle i {
        color: #1E88E5;
        font-size: 1.25rem;
      }

      .news-card-container {
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
        padding: 1.5rem;
        max-height: 400px;
        overflow-y: auto;
      }
      .news-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
        border-bottom: 1px solid #eee;
      }
      .news-item:last-child {
        border-bottom: none;
      }
      .news-icon-circle {
        background-color: #e3f2fd;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .news-icon-circle i {
        color: #2196f3;
        font-size: 1.25rem;
      }

      .news-content {
        flex-grow: 1;
      }

      .news-title {
        font-weight: 500;
        color: #333;
        margin-bottom: 0.25rem;
      }

      .news-desc {
        font-size: 0.8rem;
        color: #666;
      }

      .news-arrow-circle {
        background-color: #e3f2fd;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .news-arrow-circle:hover {
        background-color: #cce3f3;
      }

      .news-arrow-circle i {
        color: #2196f3;
        font-size: 1rem;
      }
    `,
  ],
  imports: [
    StatsWidget,
    DashboardRightPanel,
    ExecutionPeriodChartComponent,
    IncomingDocumentsChartComponent,
    IncomingTasksWidgetComponent,
  ],
  template: `
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-9 flex flex-col gap-6">
        <app-stats-widget />
        <!-- Kelib tushgan topshiriqlar -->
        <div style="flex-grow: 1; display: flex; flex-direction: column;">
          <div class="font-semibold text-lg mb-2">
            Kelib tushgan topshiriqlar
          </div>
          <div class="grid grid-cols-12 gap-4 h-full">
            <div class="col-span-12 lg:col-span-3 flex flex-col h-full">
              <app-incoming-tasks-widget class="custom-height" />
            </div>
            <div class="col-span-12 lg:col-span-5 flex flex-col h-full">
              <app-execution-period-chart class="custom-height" />
            </div>
            <div class="col-span-12 lg:col-span-4 flex flex-col h-full">
              <app-incoming-documents-chart class="custom-height" />
            </div>
          </div>
        </div>
        <!-- Yuborilgan topshiriqlar -->
        <div class="mt-6">
          <div class="font-semibold text-lg mb-2">Yuborilgan topshiriqlar</div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">25</div>
                  <div class="cloud-label">Barcha topshiriqlar</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">17</div>
                  <div class="cloud-label">Ijro uchun</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">6</div>
                  <div class="cloud-label">Ma'lumot uchun</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">13</div>
                  <div class="cloud-label">Muddati o'tgan</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">917</div>
                  <div class="cloud-label">Imzolash uchun</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">917</div>
                  <div class="cloud-label">Imzoda</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">7</div>
                  <div class="cloud-label">Kelishish uchun</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3">
              <div class="cloud-card">
                <div class="cloud-content">
                  <div class="cloud-num">0</div>
                  <div class="cloud-label">Kelishilmagan</div>
                </div>
                <div class="cloud-arrow-icon-circle">
                  <i class="pi pi-arrow-up-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Qonunchilikdagi yangiliklar -->
        <div class="mt-6">
          <div class="flex justify-content-between align-items-center mb-2">
            <div class="font-semibold text-lg">
              Qonunchilikdagi yangiliklar (lex.uz)
            </div>
            <div class="cloud-arrow-icon-circle">
              <i class="pi pi-arrow-up-right"></i>
            </div>
          </div>
          <div class="news-card-container">
            <div class="news-item">
              <div class="news-icon-circle">
                <i class="pi pi-check"></i>
              </div>
              <div class="news-content">
                <div class="news-title">
                  Mikromoliya tashkilotlari tomonidan islomiy moliyalashtirishga
                  oid xizmatlarni ko'rsatish tartibi to'g'risidagi nizomni
                  tasdiqlash haqida
                </div>
                <div class="news-desc">
                  O'zbekiston Respublikasi Markaziy Banki boshqaruvining
                  qarori, 26.07.2024 yilda ro'yxatdan o'tgan, ro'yxat raqami
                  3536
                </div>
              </div>
              <div class="news-arrow-circle">
                <i class="pi pi-arrow-up-right"></i>
              </div>
            </div>
            <div class="news-item">
              <div class="news-icon-circle">
                <i class="pi pi-check"></i>
              </div>
              <div class="news-content">
                <div class="news-title">
                  O'zbekiston Respublikasi buxgalteriya hisobining milliy
                  standarti (8-sonli BXMS) "Konsolidatsiyalashgan moliyaviy
                  hisobotlar va shu'ba xo'jalik jamiyatlariga investitsiyalar
                  hisobi"ni tasdiqlash haqida
                </div>
                <div class="news-desc">
                  O'zbekiston Respublikasi iqtisodiyot va moliya vazirining
                  buyrug'i, 26.07.2024 yilda ro'yxatdan o'tgan, ro'yxat raqami
                  3537
                </div>
              </div>
              <div class="news-arrow-circle">
                <i class="pi pi-arrow-up-right"></i>
              </div>
            </div>
            <div class="news-item">
              <div class="news-icon-circle">
                <i class="pi pi-check"></i>
              </div>
              <div class="news-content">
                <div class="news-title">
                  O'zbekiston Respublikasi Hukumatining ayrim qarorlariga
                  respublika ijro etuvchi hokimiyat organlarining nomlarini
                  o'zaro muvofiqlashtirishni nazarda tutuvchi o'zgartirish va
                  qo'shimchalar kiritish to'g'risida
                </div>
                <div class="news-desc">
                  O'zbekiston Respublikasi Vazirlar Mahkamasining qarori,
                  25.07.2024 yildagi 453-son
                </div>
              </div>
              <div class="news-arrow-circle">
                <i class="pi pi-arrow-up-right"></i>
              </div>
            </div>
            <div class="news-item">
              <div class="news-icon-circle">
                <i class="pi pi-check"></i>
              </div>
              <div class="news-content">
                <div class="news-title">
                  O'zbekiston Respublikasi buxgalteriya hisobi milliy
                  standarti (11-sonli BXMS) "Ilmiy-tadqiqot va
                  tajriba-konstruktorlik ishlari bo'yicha xarajatlar"ni
                  tasdiqlash haqida
                </div>
                <div class="news-desc">
                  O'zbekiston Respublikasi iqtisodiyot va moliya vazirining
                  buyrug'i, 25.07.2024 yilda ro'yxatdan o'tgan, ro'yxat raqami
                  3535
                </div>
              </div>
              <div class="news-arrow-circle">
                <i class="pi pi-arrow-up-right"></i>
              </div>
            </div>
            <div class="news-item">
              <div class="news-icon-circle">
                <i class="pi pi-check"></i>
              </div>
              <div class="news-content">
                <div class="news-title">
                  Kriminologik faoliyatni ilmiy ta'minlash chora-tadbirla
                  t'g'risida
                </div>
                <div class="news-desc">
                  O'zbekiston Respublikasi Prezidentining Farmoni, 26.07.2024
                  yildagi PF-135-son
                </div>
              </div>
              <div class="news-arrow-circle">
                <i class="pi pi-arrow-up-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-3">
        <app-dashboard-right-panel />
      </div>
    </div>
  `,
})
export class Dashboard {}


