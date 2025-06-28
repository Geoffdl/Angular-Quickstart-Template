import { Component } from '@angular/core';
import { MultipleFeaturesContainerComponent } from '../../shared/components/multiple-features-container/multiple-features-container.component';

@Component({
    selector: 'app-landing',
    imports: [MultipleFeaturesContainerComponent],
    template: `
        <div class="flex h-full flex-col justify-between">
            <!-- header + features container -->
            <div>
                <div class="mb-8 text-center">
                    <h1 class="text-primary mb-4 text-4xl font-bold">Welcome to Simple Template</h1>
                    <p class="text-base-content mb-8 text-lg opacity-80">A ready to use template for your next project!</p>
                    <p>It contains base layout styles and a some components to get started fast.</p>
                </div>

                <app-multiple-features-container>
                    <h3 class="du-card-title" feature-1-title>Feature 1</h3>
                    <p feature-1-body>Modular component architecture for easy maintenance and scalability.</p>

                    <h3 class="du-card-title" feature-2-title>Feature 2</h3>
                    <p feature-2-body>Beautiful responsive design with Tailwind CSS and DaisyUI.</p>

                    <h3 class="du-card-title" feature-3-title>Feature 3</h3>
                    <p feature-3-body>Easy content projection with ng-content for different page views.</p>
                </app-multiple-features-container>
            </div>

            <!-- button at the bottom -->
            <button class="du-btn w-full">Get Started</button>
        </div>
    `,
    styles: ``,
})
export class LandingComponent {}
