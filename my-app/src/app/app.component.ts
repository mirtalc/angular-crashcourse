/**
 * 1. Imports
 */
import { Component } from '@angular/core';

/**
 * 2. Component decorator, which includes your component's properties
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

/**
 * 3. Component logic; where the code will be
 */
export class AppComponent {
    title = 'my-app';
}
