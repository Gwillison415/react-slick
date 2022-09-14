import moment from "moment";

export function getUnixTimeFromDate(date, format = "YYYY-MM-DD") {
  return moment(date, format).unix();
}

export function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
export function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
export function getMonthFromDateFromYYYYMM(year, month) {
  const monthDateObject = new Date(year, Number(monthOfDate) - 1, 1);
  return monthDateObject;
}
export function getMonthNameFromDate(monthDateObject) {
  const monthName = monthDateObject.toLocaleString("default", {
    month: "long",
  });
  return monthName;
}

export function getFirstLastAndNumberOfDaysOfMonthFromDate(monthDateObject) {
  const firstDay = firstDayOfMonth(monthDate);
  const lastDay = lastDayOfMonth(monthDate);
  const daysInMonth = (lastDay.getTime() - firstDay.getTime()) / 86400000 + 1;
  return { firstDay, lastDay, daysInMonth };
}
