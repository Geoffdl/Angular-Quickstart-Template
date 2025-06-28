import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './src/shared/components/todo/todo.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TodoComponent],
    template: `
        <div class="container mx-auto max-w-7xl p-5">
            <h1 class="text-primary mb-8 text-center text-4xl font-bold">Angular Todo App with Tailwind & DaisyUI</h1>

            <div class="du-card bg-base-100 shadow-xl">
                <div class="du-card-body">
                    <h2 class="du-card-title text-success justify-center">Modern Angular Todo Component</h2>
                    <app-todo></app-todo>
                </div>
            </div>
        </div>

        <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'simple-template-lts';
}
