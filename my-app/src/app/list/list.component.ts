import { Component, OnInit } from '@angular/core';

// We import our service
import { HttpService } from '../http.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    // Properties
    brews: Object;

    constructor(private _http: HttpService) { }

    ngOnInit(): void {
        // we suscribe to the observable that "getBeer()" returns.
        this._http.getBeer().subscribe(data => {
            this.brews = data;
            console.log("We received this data from the API", data);
        });
    }

}
