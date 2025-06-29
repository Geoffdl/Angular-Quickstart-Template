import { Component } from '@angular/core';
import { GraphComponent } from '../../shared/components/graph/graph.component';

@Component({
    selector: 'app-sample-charts',
    imports: [GraphComponent],
    template: `<app-graph />`,
    styles: ``,
})
export class SampleChartsComponent {}
