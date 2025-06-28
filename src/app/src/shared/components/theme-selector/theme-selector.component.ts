import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { IconMoonComponent } from '../../../../../assets/svgs/icon-moon.component';
import { IconSunComponent } from '../../../../../assets/svgs/icon-sun.component';
import { ThemeService } from '../../services/theme.service';

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
    private readonly themeService = inject(ThemeService);

    protected readonly isDarkTheme = computed(() => this.themeService.isDarkTheme());

    protected toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
