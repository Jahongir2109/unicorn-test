import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard-right-panel',
    standalone: true,
    imports: [CalendarModule, FormsModule],
    styles: [
        `
        :host ::ng-deep .p-calendar .p-datepicker {
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
        }
        :host ::ng-deep .p-calendar .p-datepicker table td > span.p-highlight {
            background-color: var(--primary-color);
            color: var(--primary-color-text);
        }
        :host ::ng-deep .p-calendar .p-datepicker table td > span:focus {
            box-shadow: none;
        }
        :host ::ng-deep .p-calendar .p-datepicker table td.p-datepicker-today > span {
            background-color: rgba(255, 255, 255, 0.2);
        }
        :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-title, :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-prev, :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-next {
            color: white;
        }
        :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-title .p-link {
            color: white;
        }
        :host ::ng-deep .p-calendar .p-datepicker table th {
            color: rgba(255, 255, 255, 0.7);
        }
        :host ::ng-deep .p-calendar .p-datepicker table td span {
            color: white;
        }
        :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-prev.p-link,
        :host ::ng-deep .p-calendar .p-datepicker-header .p-datepicker-next.p-link {
            color: white;
        }
        `
    ],
    template: `
        <div class="flex flex-col gap-6">
            <!-- Calendar widget -->
            <div class="card p-4">
                <p-calendar [inline]="true" [(ngModel)]="dateValue" [monthNavigator]="true" [yearNavigator]="true" yearRange="2000:2030" styleClass="custom-datepicker"></p-calendar>
            </div>
            <!-- Weather widget -->
            <div class="card p-4 flex items-center gap-4">
                <div class="text-3xl">🌤️</div>
                <div>
                    <div class="font-semibold">Tashkent</div>
                    <div class="text-2xl font-bold">32°</div>
                    <div class="text-xs text-muted">Cloudy</div>
                </div>
            </div>
            <!-- Quick links widget -->
            <div class="card p-4">
                <div class="font-semibold mb-2">Quick Links</div>
                <button class="w-full mb-2 p-2 rounded bg-blue-100 text-blue-700">+ Create</button>
                <button class="w-full p-2 rounded bg-gray-100 text-gray-700">Join</button>
            </div>
            <!-- Notes widget -->
            <div class="card p-4">
                <div class="font-semibold mb-2">Notes</div>
                <textarea class="w-full p-2 rounded border border-gray-200" rows="3" placeholder="Take a note..."></textarea>
            </div>
        </div>
    `
})
export class DashboardRightPanel {
    dateValue: Date = new Date();

    constructor() {
        this.dateValue.setMonth(8); // Set to September (month index 8 for September)
        this.dateValue.setFullYear(2024);
        this.dateValue.setDate(20); // Highlight 20th as in the image
    }
} 