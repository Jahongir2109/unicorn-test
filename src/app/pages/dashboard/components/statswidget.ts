import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    styles: [
        `
            .custom-card {
                background-image: url('src/assets/images/card.png');
                background-size: cover;
                background-position: center;
                min-height: 120px;
                border-radius: 1.5rem 2.5rem 1.5rem 1.5rem;
                box-shadow: 0 4px 24px 0 rgba(52, 123, 173, 0.08);
                position: relative;
                overflow: visible;
                padding: 1.5rem 1.25rem 1.25rem 1.25rem;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }
            .stat-number {
                color: #f44336;
                font-size: 2rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            .stat-title {
                color: #222;
                font-size: 1.1rem;
                font-weight: 500;
            }
            .stat-icon {
                position: absolute;
                top: 5px;
                right: -26px;
                background: #2196f3;
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px 0 rgba(33, 150, 243, 0.1);
                border: 4px solid #fff;
            }
            .stat-icon i {
                color: #fff;
                font-size: 1.5rem;
            }
            .tab-card {
                background-color: #fff;
                border-radius: 1rem;
                padding: 0.5rem;
                display: flex;
                gap: 1rem;
                box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
                width: 100%;
                margin-bottom: 1.5rem;
            }

            .tab-button {
                padding: 0.5rem 1rem;
                border-radius: 9999px;
                background-color: transparent;
                color: #333;
                font-weight: 500;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .tab-button:hover {
                background-color: #e3f2fd;
            }

            .tab-button.active {
                background-color: #29b6f6;
                color: #fff;
            }
        `
    ],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12">
                <div class="tab-card">
                    <button class="tab-button">Yangiliklar</button>
                    <button class="tab-button active">Statistika</button>
                    <button class="tab-button">So'rovnoma</button>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="custom-card">
                    <div class="stat-icon"><i class="pi pi-briefcase"></i></div>
                    <div class="stat-number">11</div>
                    <div class="stat-title">Prezident hujjatlari</div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="custom-card">
                    <div class="stat-icon"><i class="pi pi-briefcase"></i></div>
                    <div class="stat-number" style="color:#1976D2">4</div>
                    <div class="stat-title">Vazirlar Mahkamasi hujjatlari</div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="custom-card">
                    <div class="stat-icon"><i class="pi pi-users"></i></div>
                    <div class="stat-number" style="color:#E53935">27</div>
                    <div class="stat-title">Hukumat komissiyasi</div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-3">
                <div class="custom-card">
                    <div class="stat-icon"><i class="pi pi-file"></i></div>
                    <div class="stat-number" style="color:#FBC02D">56</div>
                    <div class="stat-title">Ichki hujjatlar</div>
                </div>
            </div>
        </div>
    `
})
export class StatsWidget {}
