import { Component } from '@angular/core';
import { TodoComponent } from '../shared/components/todo/todo.component';
import { MultipleFeaturesContainerComponent } from '../shared/components/multiple-features-container/multiple-features-container.component';

@Component({
    selector: 'app-sample-page-with-todo',
    imports: [TodoComponent, MultipleFeaturesContainerComponent],
    template: `
        <div class="mb-8 text-center">
            <h1 class="text-primary mb-4 text-4xl font-bold">Welcome to Simple Template</h1>
            <p class="text-base-content mb-8 text-lg opacity-80">A ready to use template for your next project!</p>
            <p>It contains base layout styles and a some components to get started fast.</p>
        </div>

        <!-- Example: Todo Component -->
        <div class="du-card bg-base-100 mb-6 shadow-xl">
            <div class="du-card-body">
                <h2 class="du-card-title text-success mb-4 justify-center">Todo Demo Component</h2>
                <app-todo></app-todo>
            </div>
        </div>

        <!-- Projected Feature Content -->
        <app-multiple-features-container>
            <h3 class="du-card-title" feature-1-title>Feature 1</h3>
            <p feature-1-body>Modular component architecture for easy maintenance and scalability.</p>

            <h3 class="du-card-title" feature-2-title>Feature 2</h3>
            <p feature-2-body>Beautiful responsive design with Tailwind CSS and DaisyUI.</p>

            <h3 class="du-card-title" feature-3-title>Feature 3</h3>
            <p feature-3-body>Easy content projection with ng-content for different page views.</p>
        </app-multiple-features-container>
    `,
    styles: ``,
})
export class SamplePageWithTodoComponent {}
