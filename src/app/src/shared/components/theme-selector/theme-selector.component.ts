import { Component, ChangeDetectionStrategy, computed, signal, effect } from '@angular/core';
import { IconMoonComponent } from '../../../../../assets/svgs/icon-moon.component';
import { IconSunComponent } from '../../../../../assets/svgs/icon-sun.component';

enum Theme {
    LightTheme = 'light',
    DarkTheme = 'synthwave',
}

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
    private readonly themes = Object.values(Theme);
    private readonly currentThemeIndex = signal<number>(0);

    protected readonly currentTheme = computed(() => this.themes[this.currentThemeIndex()]);

    protected readonly isDarkTheme = computed(() => this.currentTheme() === Theme.DarkTheme);

    constructor() {
        const saved = localStorage.getItem('theme');
        const savedIndex = this.themes.indexOf(saved as Theme);
        if (savedIndex !== -1) {
            this.currentThemeIndex.set(savedIndex);
        }

        effect(() => {
            const theme = this.currentTheme();
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    protected toggleTheme(): void {
        const nextIndex = (this.currentThemeIndex() + 1) % this.themes.length;
        this.currentThemeIndex.set(nextIndex);
    }
}
