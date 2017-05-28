import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEvent = new EventEmitter<{count: number}>();
  count;
  intervalRef;

  constructor() {
    this.count = 0;
    this.incrementCount.bind(this);

  }

  ngOnInit() {
  }

  startGame() {



    this.intervalRef = setInterval( this.incrementCount.bind(this), 1000 );

  }

  stopGame() {
    clearInterval(this.intervalRef);
  }

  incrementCount() {
    this.count = this.count + 1;
    this.gameEvent.emit({
        count: this.count
    });
    return this;

  }
}
