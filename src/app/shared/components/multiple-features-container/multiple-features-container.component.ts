import { Component } from '@angular/core';

@Component({
    selector: 'app-multiple-features-container',
    imports: [],
    template: `
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <!-- Feature 1 -->
            <div class="du-card bg-primary text-primary-content">
                <div class="du-card-body">
                    <ng-content select="[feature-1-title]"></ng-content>
                    <ng-content select="[feature-1-body]"></ng-content>
                </div>
            </div>

            <!-- Feature 2 -->
            <div class="du-card bg-secondary text-secondary-content">
                <div class="du-card-body">
                    <ng-content select="[feature-2-title]"></ng-content>
                    <ng-content select="[feature-2-body]"></ng-content>
                </div>
            </div>

            <!-- Feature 3 -->
            <div class="du-card bg-accent text-accent-content">
                <div class="du-card-body">
                    <ng-content select="[feature-3-title]"></ng-content>
                    <ng-content select="[feature-3-body]"></ng-content>
                </div>
            </div>
        </div>
    `,
    styles: ``,
})
export class MultipleFeaturesContainerComponent {}
