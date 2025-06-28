import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterSvgComponent } from '../../../../../assets/svgs/twitter.component';
import { LinkedinSvgComponent } from '../../../../../assets/svgs/linkedin.component';
import { GithubSvgComponent } from '../../../../../assets/svgs/github.component';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, TwitterSvgComponent, LinkedinSvgComponent, GithubSvgComponent],
    template: `
        <footer class="du-footer bg-base-300 text-base-content p-10">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <!-- Company Info -->
                    <aside class="flex flex-col">
                        <div class="mb-4 flex items-center space-x-2">
                            <span class="text-2xl font-bold"> <span class="text-primary">My</span>App </span>
                        </div>
                        <p class="text-sm opacity-80">Building amazing experiences with modern web technologies.</p>
                    </aside>

                    <!-- Quick Links -->
                    <nav class="flex flex-col">
                        <h6 class="du-footer-title">Quick Links</h6>
                        <a class="link link-hover">Home</a>
                        <a class="link link-hover">About</a>
                        <a class="link link-hover">Services</a>
                        <a class="link link-hover">Contact</a>
                    </nav>

                    <!-- Services -->
                    <nav class="flex flex-col">
                        <h6 class="du-footer-title">Services</h6>
                        <a class="link link-hover">Web Development</a>
                        <a class="link link-hover">Mobile Apps</a>
                        <a class="link link-hover">Consulting</a>
                        <a class="link link-hover">Support</a>
                    </nav>

                    <!-- Social -->
                    <nav class="flex flex-col">
                        <h6 class="du-footer-title">Follow Us</h6>
                        <div class="grid grid-flow-col gap-4">
                            <a class="link link-hover" title="Twitter">
                                <svg-twitter></svg-twitter>
                            </a>
                            <a class="link link-hover" title="LinkedIn">
                                <svg-linkedin></svg-linkedin>
                            </a>
                            <a class="link link-hover" title="GitHub">
                                <svg-github></svg-github>
                            </a>
                        </div>
                    </nav>
                </div>

                <!-- Copyright -->
                <div class="du-divider"></div>
                <div class="text-center">
                    <p class="text-sm opacity-70">© {{ currentYear() }} MyApp. All rights reserved. Built with Angular & DaisyUI.</p>
                </div>
            </div>
        </footer>
    `,
})
export class FooterComponent {
    protected readonly currentYear = computed(() => new Date().getFullYear());
}
