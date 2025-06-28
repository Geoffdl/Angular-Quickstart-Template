import { Component } from '@angular/core';
import { MapLeafletComponent } from '../../shared/components/map-leaflet/map-leaflet.component';

@Component({
    selector: 'app-map',
    imports: [MapLeafletComponent],
    template: ` <app-map-leaflet /> `,
    styles: ``,
})
export class MapComponent {}
