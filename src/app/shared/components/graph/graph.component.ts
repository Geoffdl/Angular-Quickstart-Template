import { Component } from '@angular/core';
import { LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { multi } from './data';

interface ChartData {
    name: string;
    series: Array<{
        name: string | Date;
        value: number;
    }>;
}

@Component({
    selector: 'app-graph',
    imports: [NgxChartsModule],
    template: `
        <h2 class="du-card-title text-primary">Interactive Charts</h2>
        <div class="size-auto">
            <ngx-charts-line-chart
                class="fill-base-content"
                [legend]="legend"
                [legendPosition]="legendPosition"
                [showXAxisLabel]="showXAxisLabel"
                [showYAxisLabel]="showYAxisLabel"
                [showGridLines]="false"
                [xAxis]="xAxis"
                [yAxis]="yAxis"
                [xAxisLabel]="xAxisLabel"
                [yAxisLabel]="yAxisLabel"
                [xAxisTickFormatting]="xAxisTickFormatting"
                [timeline]="true"
                [scheme]="colorScheme"
                [results]="multi"
                (select)="onSelect($event)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
            >
                >
            </ngx-charts-line-chart>
        </div>
    `,
    styles: ``,
})
export class GraphComponent {
    multi: ChartData[] = [];
    view: [number, number] = [1200, 400];

    schemeType: ScaleType = ScaleType.Linear;
    legend: boolean = true;
    legendPosition: LegendPosition = LegendPosition.Below;

    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Date';
    yAxisLabel: string = 'Value';
    timeline: boolean = true;

    xAxisTickFormatting = (value: string | Date) => {
        const date = new Date(value);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
        });
    };

    constructor() {
        this.multi = multi.map((country) => ({
            ...country,
            series: country.series.map((dataPoint) => ({
                ...dataPoint,
                name: new Date(dataPoint.name),
            })),
        }));
    }

    colorScheme = {
        name: 'custom',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    };
    onSelect(data: unknown): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: unknown): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: unknown): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}
