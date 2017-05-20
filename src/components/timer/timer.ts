import { Component } from '@angular/core';

/**
 * Generated class for the Timer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class Timer
{
    text: string;
    constructor()
    {
        console.log('Hello Timer Component');
        this.text = 'Hello World';
    }
}
