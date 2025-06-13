import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { DashboardRightPanel } from './components/dashboardrightpanel';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, DashboardRightPanel],
    template: `
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 xl:col-span-9 flex flex-col gap-6">
                <app-stats-widget />
                <!-- Kelib tushgan topshiriqlar -->
                <div>
                    <div class="font-semibold text-lg mb-2">Kelib tushgan topshiriqlar</div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-3 flex flex-col gap-2">
                            <div class="task-badge-card blue">
                                <div class="task-badge-num">916</div>
                                <div class="task-badge-label">Imzolash uchun</div>
                                <div class="task-badge-icon"><i class="pi pi-pencil"></i></div>
                            </div>
                            <div class="task-badge-card purple">
                                <div class="task-badge-num">13</div>
                                <div class="task-badge-label">Rezolyutsiya</div>
                                <div class="task-badge-icon"><i class="pi pi-check-square"></i></div>
                            </div>
                            <div class="task-badge-card green">
                                <div class="task-badge-num">0</div>
                                <div class="task-badge-label">Kelishish uchun</div>
                                <div class="task-badge-icon"><i class="pi pi-comments"></i></div>
                            </div>
                            <div class="task-badge-card gray">
                                <div class="task-badge-num">21</div>
                                <div class="task-badge-label">Nazorat reja yaratish</div>
                                <div class="task-badge-icon"><i class="pi pi-calendar"></i></div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-9 flex flex-col gap-4">
                            <div class="card chart-card">Ijro muddati bo'yicha [CHART]</div>
                            <div class="card chart-card">Kelib tushgan hujjatlar [CHART]</div>
                        </div>
                    </div>
                </div>
                <!-- Yuborilgan topshiriqlar -->
                <div class="mt-6">
                    <div class="font-semibold text-lg mb-2">Yuborilgan topshiriqlar</div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">25</div>
                                <div class="cloud-label">Barcha topshiriqlar</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">17</div>
                                <div class="cloud-label">Ijro uchun</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">6</div>
                                <div class="cloud-label">Ma'lumot uchun</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">13</div>
                                <div class="cloud-label">Muddati o'tgan</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">917</div>
                                <div class="cloud-label">Imzolash uchun</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">917</div>
                                <div class="cloud-label">Imzoda</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">7</div>
                                <div class="cloud-label">Kelishish uchun</div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="cloud-card">
                                <div class="cloud-num">0</div>
                                <div class="cloud-label">Kelishilmagan</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Qonunchilikdagi yangiliklar -->
                <div class="mt-6">
                    <div class="font-semibold text-lg mb-2">Qonunchilikdagi yangiliklar (lex.uz)</div>
                    <div class="flex flex-col gap-2">
                        <div class="news-card">
                            <div class="news-icon"><i class="pi pi-file"></i></div>
                            <div class="news-content">
                                <div class="news-title">Микромолия ташкилотлари томонидан исломий молиялаштиришга оид хизматларни кўрсатиш тартиби тўғрисидаги низомни тасдиқлаш ҳақида</div>
                                <div class="news-desc">Ўзбекистон Республикаси Марказий банки бошқарувининг қарори, 26.07.2024 йилда рўйхатдан ўтган, рўйхат рақами 3536</div>
                            </div>
                            <div class="news-arrow"><i class="pi pi-arrow-right"></i></div>
                        </div>
                        <div class="news-card">
                            <div class="news-icon"><i class="pi pi-file"></i></div>
                            <div class="news-content">
                                <div class="news-title">O'zbekiston Respublikasi buxgalteriya hisobi...</div>
                                <div class="news-desc">Ўзбекистон Республикаси иқтисодиёти ва молия вазирлиги буйруғи, 26.07.2024 йилда рўйхатдан ўтган, рўйхат рақами 3537</div>
                            </div>
                            <div class="news-arrow"><i class="pi pi-arrow-right"></i></div>
                        </div>
                        <!-- Yana yangiliklar shu tarzda -->
                    </div>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-3">
                <app-dashboard-right-panel />
            </div>
        </div>
    `
})
export class Dashboard {}
