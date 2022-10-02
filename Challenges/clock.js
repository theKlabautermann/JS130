"use strict";

class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  toString() {
    function doubleDigits(inputNum) {
      if (String(inputNum).length <= 1) {
        return `0${inputNum}`;
      } else {
        return `${inputNum}`;
      }
    }

    return `${doubleDigits(this.hours)}:${doubleDigits(this.minutes)}`
  }

  isEqual(comparison) {
    return this.toString() === comparison.toString();
  }

  add(inputNum) {
    const MINUTES_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;
    const MINUTES_PERDAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

    inputNum = inputNum % MINUTES_PERDAY;
    this.minutes += inputNum;
    let carryOver = Math.floor(this.minutes / MINUTES_PER_HOUR);
    this.minutes = this.minutes % MINUTES_PER_HOUR;

    this.hours += carryOver;
    this.hours = this.hours % HOURS_PER_DAY;

    return this;
  }

  subtract(inputNum) {
    const MINUTES_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;
    const MINUTES_PERDAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

    inputNum = inputNum % MINUTES_PERDAY;
    return this.add(MINUTES_PERDAY - inputNum);
  }
}

module.exports = Clock;