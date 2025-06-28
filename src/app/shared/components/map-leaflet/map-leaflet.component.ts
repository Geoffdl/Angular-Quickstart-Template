import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import * as L from 'leaflet';
import { marker, icon, Icon } from 'leaflet';

@Component({
    selector: 'app-map-leaflet',
    imports: [LeafletModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="du-card bg-base-100 shadow-lg">
            <div class="du-card-body">
                <h2 class="du-card-title text-primary">Interactive Map</h2>

                <div leaflet [leafletOptions]="options()" [leafletLayers]="layers()" [leafletLayersControl]="layersControl" class="map-container"></div>
            </div>
        </div>
    `,
    styles: [
        `
            .map-container {
                height: 600px;
                width: 100%;
                border-radius: 0.5rem;
                overflow: hidden;
            }
        `,
    ],
})
export class MapLeafletComponent implements OnInit {
    options = signal<L.MapOptions>({
        zoom: 10,
        center: L.latLng(42.916672, 3.03333),
    });

    osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
    });

    satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: '© Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community',
    });

    oceanLayer = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Esri, Garmin, GEBCO, NOAA NGDC, and other contributors',
    });

    greyBaseLayer = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Esri, HERE, Garmin, (c) OpenStreetMap contributors, and the GIS user community',
    });
    natGeoLayer = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: 'Esri, HERE, Garmin, (c) OpenStreetMap contributors, and the GIS user community',
    });
    layers = signal<L.Layer[]>([this.osmLayer]);

    layersControl = {
        baseLayers: {
            'Open Street Map': this.osmLayer,
            'Satellite View': this.satelliteLayer,
            'Ocean view': this.oceanLayer,
            'Grey base': this.greyBaseLayer,
            'NatGeo ': this.natGeoLayer,
        },
        overlays: {
            Circle: L.circle([42.916672, 3.03333], {
                radius: 2000,
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2,
            }),
            Area: L.polygon(
                [
                    [42.9, 3.0],
                    [42.93, 3.0],
                    [42.93, 3.06],
                    [42.9, 3.06],
                ],
                {
                    color: 'blue',
                    fillColor: '#30f',
                    fillOpacity: 0.2,
                },
            ),
        },
    };

    ngOnInit() {
        this.addSampleMarker();
    }

    addSampleMarker(): void {
        const sampleMarker = marker([42.916672, 3.03333], {
            icon: icon({
                ...Icon.Default.prototype.options,
                iconUrl: 'assets/map-icons/marker-icon.png',
                iconRetinaUrl: 'assets/map-icons/marker-icon-2x.png',
                shadowUrl: 'assets/map-icons/marker-shadow.png',
            }),
        }).bindPopup('<b>Leucate!</b><br>Super spot de kite');

        this.layers.update((currentLayers) => [...currentLayers, sampleMarker]);
    }
}
