import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerMenuSvgComponent } from '../../../../assets/svgs/hamburger-menu.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, HamburgerMenuSvgComponent],
    template: `
        <div class="du-navbar bg-base-100 shadow-lg">
            <div class="du-navbar-start">
                <div class="du-dropdown">
                    <div tabindex="0" role="button" class="du-btn du-btn-ghost lg:hidden">
                        <svg-hamburger-menu></svg-hamburger-menu>
                    </div>
                    <ul tabindex="0" class="du-menu du-menu-sm du-dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a class="du-btn du-btn-ghost text-xl font-bold"> <span class="text-primary">Simple</span>Template </a>
            </div>

            <div class="du-navbar-center hidden lg:flex">
                <ul class="du-menu du-menu-horizontal px-1">
                    <li><a class="hover:text-primary">Home</a></li>
                    <li><a class="hover:text-primary">About</a></li>
                    <li><a class="hover:text-primary">Services</a></li>
                    <li><a class="hover:text-primary">Contact</a></li>
                </ul>
            </div>

            <div class="du-navbar-end">
                <div class="du-dropdown du-dropdown-end">
                    <div tabindex="0" role="button" class="du-btn du-btn-ghost du-btn-circle du-avatar">
                        <div class="w-10 rounded-full">
                            <div class="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                                <span class="text-primary-content font-semibold">Hi</span>
                            </div>
                        </div>
                    </div>
                    <ul tabindex="0" class="du-menu du-menu-sm du-dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [],
})
export class NavbarComponent {}
