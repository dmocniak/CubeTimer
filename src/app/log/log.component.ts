import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input() loggedTime: any = [];
  @Output() logReset = new EventEmitter();

  getBest() {
    if (this.loggedTime.length === 0) {
      return '00:00';
    }
    var arr = this.loggedTime
      .map(time => {
        return `${time.secs}:${time.mSecs}`;
      })
      .sort();
    return arr[0];
  }
  getWorst() {
    if (this.loggedTime.length === 0) {
      return '00:00';
    }
    var arr = this.loggedTime
      .map(time => {
        return `${time.secs}:${time.mSecs}`;
      })
      .sort();
    return arr[arr.length - 1];
  }

  getAverage() {
    if (this.loggedTime.length === 0) {
      return '00:00';
    }

    var arr = this.loggedTime.map(time => {
      return parseInt(`${time.secs}${time.mSecs}`);
    });

    var sum: any = 0;
    for (let i in arr) {
      sum += arr[i];
    }

    sum = Math.round(sum / arr.length).toString();

    switch (sum.length) {
      case 1:
        sum = `000${sum}`;
        break;
      case 2:
        sum = `00${sum}`;
        break;
      case 3:
        sum = `0${sum}`;
        break;
    }
    sum = `${sum.substring(0, 2)}:${sum.substring(2, 4)}`;

    return sum;
  }

  // getAvgFive() {}

  resetLog() {
    this.logReset.emit([]);
  }

  ngOnInit() {}
}
