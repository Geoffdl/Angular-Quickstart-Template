import { Component, ChangeDetectionStrategy, computed, signal, effect } from '@angular/core';
import { IconMoonComponent } from '../../../../../assets/svgs/icon-moon.component';
import { IconSunComponent } from '../../../../../assets/svgs/icon-sun.component';

type Theme = 'light' | 'synthwave';

@Component({
    selector: 'app-theme-selector',
    imports: [IconMoonComponent, IconSunComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <label class="du-swap du-swap-rotate">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" class="du-theme-controller" [checked]="isDarkTheme()" (change)="toggleTheme()" />

            <!-- sun icon (light theme) -->
            <div class="du-swap-off">
                <svg-icon-sun />
            </div>

            <!-- moon icon (dark theme) -->
            <div class="du-swap-on">
                <svg-icon-moon />
            </div>
        </label>
    `,
})
export class ThemeSelectorComponent {
    private readonly currentTheme = signal<Theme>('light');

    protected readonly isDarkTheme = computed(() => this.currentTheme() === 'synthwave');

    constructor() {
        const saved = localStorage.getItem('theme') as Theme;
        if (saved === 'light' || saved === 'synthwave') {
            this.currentTheme.set(saved);
        }
        effect(() => {
            const theme = this.currentTheme();
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    protected toggleTheme(): void {
        const newTheme: Theme = this.currentTheme() === 'light' ? 'synthwave' : 'light';
        this.currentTheme.set(newTheme);
    }
}
