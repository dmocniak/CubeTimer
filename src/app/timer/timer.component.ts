import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  startTime: number;
  timerRunning: boolean = false;
  interval: any;
  time = { secs: '00', mSecs: '00' };
  loggedTime = [];
  buttonValue = 'Start';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      this.startTimer();
    }
  }

  runTime() {
    var now = Date.now();
    var time: number = 0;
    var secs: string;
    var mSecs: string;
    time += now - this.startTime;
    var currentTime = new Date(time);
    secs = currentTime.getSeconds().toString();
    if (secs.length < 2) {
      secs = `0${secs}`;
    }

    mSecs = currentTime.getMilliseconds().toString();

    switch (mSecs.length) {
      case 1:
        mSecs = `00${mSecs}`.substring(0, 2);
        break;
      case 2:
        mSecs = `0${mSecs}`.substring(0, 2);
        break;
      case 3:
        mSecs = `${mSecs}`.substring(0, 2);
        break;
    }

    this.time = { secs: secs, mSecs: mSecs };
  }

  startTimer() {
    if (this.timerRunning === false) {
      this.interval = setInterval(() => {
        this.runTime();
      }, 10);
      this.startTime = Date.now();
      this.timerRunning = true;
      this.buttonValue = 'Stop';
    } else {
      clearInterval(this.interval);
      this.interval = null;
      this.timerRunning = false;
      this.buttonValue = 'Start';

      if (this.loggedTime.length <= 4) {
        this.loggedTime.push(this.time);
      } else {
        this.loggedTime.shift();
        this.loggedTime.push(this.time);
      }
    }
  }

  logReset(emptyLog) {
    this.loggedTime = emptyLog;
    this.time = { secs: '00', mSecs: '00' };
  }

  ngOnInit() {}
}
