import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './src/shared/components/navbar/navbar.component';
import { MainContentComponent } from './src/shared/components/main-content/main-content.component';
import { FooterComponent } from './src/shared/components/footer/footer.component';
import { SamplePageWithTodoComponent } from './src/pages/sample-page-with-todo.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, MainContentComponent, FooterComponent, SamplePageWithTodoComponent],
    template: `
        <div class="flex min-h-screen flex-col">
            <!-- Navbar -->
            <app-navbar></app-navbar>

            <!-- Main Content Area-->
            <app-main-content>
                <app-sample-page-with-todo />
            </app-main-content>

            <!-- Footer -->
            <app-footer></app-footer>

            <!-- Router Outlet -->
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent {
    title = 'simple-template-lts';
}
