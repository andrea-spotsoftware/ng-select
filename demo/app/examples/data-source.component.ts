import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Person } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'select-search',
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <ngx-custom-input></ngx-custom-input>
        <p>
            Most common case is showing data from backend
            API and with ng-select this is extremely simple since you can bind directly to 
            observable when using angular <b> | async</b> pipe
        </p>

        <br />Selected: {{selectedPersonId}}

        <hr />
        <p>
            You can also set array of objects as items input
        </p>

        <br />Selected: {{selectedPersonId2}}

        <hr />
        <p>
            While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans
        </p>

        <br />Selected: {{selectedSimpleItem | json}}

        <hr />
        <p>
            If you have simple use case, you can omit items array and bind options directly in html using <b>ng-option</b> component.
        </p>

        <br />Selected: {{staticValue | json}}
    `
})
export class DataSourceComponent {
    people$: Observable<Person[]>;
    people: Person[] = [];
    selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
    selectedPersonId2 = '5a15b13c36e7a7f00cf0d7cb';

    selectedSimpleItem = 'Two';
    simpleItems = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.people$ = this.dataService.getPeople();
        this.dataService.getPeople().subscribe(items => this.people = items);
        this.simpleItems = [true, 'Two', 3];
    }
}


