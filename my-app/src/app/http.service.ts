import { Injectable } from '@angular/core';
// 1. import the HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    // 2. Create an instance of HttpClient through dependency injection
    constructor(private http: HttpClient) { }

    // 3. Create a method that returns the response from the API
    getBeer() {
        // it returns an observable
        return this.http.get('https://api.openbrewerydb.org/breweries');
    }
}
