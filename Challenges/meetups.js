"use strict";

class Meetup {
  constructor(year, month) {
    this.month = month - 1;
    this.year = year;
  }

  day(weekday, schedule) {
    let calendar = [];
    let currentDay = 1;
    let currentDate = new Date(this.year, this.month, currentDay);
    while (currentDate.getMonth() === this.month) {
      calendar.push(currentDate);
      currentDay++;
      currentDate = new Date(this.year, this.month, currentDay);
    }

    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    weekday = weekday.toLowerCase();
    calendar = calendar.filter((date) => date.getDay() === weekdays.indexOf(weekday));

    schedule = schedule.toLowerCase();
    if (schedule === "first") {
      return calendar[0];
    } else if (schedule === "second") {
      return calendar[1];
    } else if (schedule === "third") {
      return calendar[2];
    } else if (schedule === "fourth") {
      return calendar[3];
    } else if (schedule === "fifth") {
      if (calendar.length < 5) return null;
      return calendar[4];
    } else if (schedule === "last") {
      return [calendar[calendar.length - 1]];
    } else {
      let teenth = [13, 14, 15, 16, 17, 18, 19];
      return calendar.find((date) => teenth.includes(date.getDate()))
    }
  }
}

module.exports = Meetup;