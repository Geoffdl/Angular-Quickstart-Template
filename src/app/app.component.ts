import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MainContentComponent } from './shared/components/main-content/main-content.component';
import { SamplePageWithTodoComponent } from './pages/sample-page-with-todo.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, MainContentComponent, SamplePageWithTodoComponent, FooterComponent],
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
