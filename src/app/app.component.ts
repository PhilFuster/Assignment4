import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appElements = [];


  onGameEventFired(elementData: {count: number}) {
    if ( elementData.count % 2 === 0 ) {
      this.appElements.push(
        {
          type: 'even',
          value: elementData.count,

        });
    } else {
        this.appElements.push(
          {
            type: 'odd',
            value: elementData.count,

          });
      }

    }




  }



