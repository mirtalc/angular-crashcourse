import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // Properties
    numberOfClicks: number = 0;
    name: string = 'Change this!';

    // Methods
    constructor() { }

    ngOnInit(): void {
    }

    // Custom methods
    countClick() {
        this.numberOfClicks += 1;
    }

    setClasses() {
        let myClasses = {
            active: this.numberOfClicks > 4,
            notActive: this.numberOfClicks <= 4,
        }
        return myClasses;
    }
}
