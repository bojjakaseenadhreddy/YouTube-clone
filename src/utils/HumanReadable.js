export const numbersToText = (num) => {
  if (!num) {
    return null;
  }
  let res = "" + num;
  if (num >= 1_000_000_000) {
    const quotient = num / 1_000_000_000;
    res = getRoundedValue(quotient) + "B";
  } else if (num >= 1_000_000) {
    const quotient = num / 1_000_000;
    res = getRoundedValue(quotient) + "M";
  } else if (num >= 1_000) {
    const quotient = num / 1_000;
    res = getRoundedValue(quotient) + "K";
  }
  return res;
};

const getRoundedValue = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const SECOND_IN_MILLIS = 1000; // in millis
const HOUR = 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const lessThanHour = HOUR - 1;
const lessThanDay = DAY - 1;
const lessThanWeek = WEEK - 1;
const lessThanMonth = MONTH - 1;
const lessThanYear = YEAR - 1;

const getPostFix = (number) => {
  if (number === 1) {
    return " ago";
  } else {
    return "s ago";
  }
};

export const dateToText = (date) => {
  if (!date) {
    return null;
  }
  const minutes = (new Date() - new Date(date)) / (SECOND_IN_MILLIS * HOUR);
  let res = "";
  if (minutes <= lessThanHour) {
    res = minutes + " minute" + getPostFix(minutes);
  } else if (minutes <= lessThanDay) {
    const hours = Math.round(minutes / HOUR);
    res = hours + " hour" + getPostFix(hours);
  } else if (minutes <= lessThanWeek) {
    const days = Math.round(minutes / DAY);
    res = days + " day" + getPostFix(days);
  } else if (minutes <= lessThanMonth) {
    const weeks = Math.round(minutes / WEEK);
    res = weeks + " week" + getPostFix(weeks);
  } else if (minutes <= lessThanYear) {
    const months = Math.round(minutes / MONTH);
    res = months + " month" + getPostFix(months);
  } else {
    const years = Math.round(minutes / YEAR);
    res = years + " year" + getPostFix(years);
  }
  return res;
};
