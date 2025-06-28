import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'synthwave';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly THEME_KEY = 'app-theme';
    private readonly DEFAULT_THEME: Theme = 'light';

    currentTheme = signal<Theme>(this.DEFAULT_THEME);

    constructor() {
        this.initializeTheme();

        effect(() => {
            this.updateDocumentTheme(this.currentTheme());
        });
    }

    private initializeTheme(): void {
        const savedTheme = this.getStoredTheme();
        if (savedTheme) {
            this.currentTheme.set(savedTheme);
        }
    }

    private getStoredTheme(): Theme | null {
        try {
            const stored = localStorage.getItem(this.THEME_KEY);
            return stored === 'light' || stored === 'synthwave' ? stored : null;
        } catch {
            return null;
        }
    }

    private updateDocumentTheme(theme: Theme): void {
        document.documentElement.setAttribute('data-theme', theme);
    }

    private saveTheme(theme: Theme): void {
        try {
            localStorage.setItem(this.THEME_KEY, theme);
        } catch {
            console.warn('Could not save theme preference');
        }
    }

    setTheme(theme: Theme): void {
        this.currentTheme.set(theme);
        this.saveTheme(theme);
    }

    toggleTheme(): void {
        const newTheme: Theme = this.currentTheme() === 'light' ? 'synthwave' : 'light';
        this.setTheme(newTheme);
    }

    isCurrentTheme(theme: Theme): boolean {
        return this.currentTheme() === theme;
    }

    isDarkTheme(): boolean {
        return this.currentTheme() === 'synthwave';
    }
}
