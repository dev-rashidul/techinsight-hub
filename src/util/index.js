export const getDateDifferenceFromNow = (fromDate) => {
  const now = new Date();
  const from = new Date(fromDate);

  let difference = now.getTime() - from.getTime();

  difference = difference / 1000;
  let yearDifference = Math.floor(difference / (3600 * 24 * 365));
  difference -= yearDifference * 3600 * 24 * 365;
  let dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;
  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;
  let secondDifference = Math.floor(difference);

  // Calculate months
  const averageDaysInMonth = 30.44; // Average days in a month
  let monthDifference = Math.floor(dayDifference / averageDaysInMonth);
  dayDifference = Math.floor(dayDifference % averageDaysInMonth);

  let message = "";

  if (yearDifference > 0) {
    message += `${yearDifference} year${yearDifference > 1 ? 's' : ''} `;
  }

  if (monthDifference > 0) {
    message += `${monthDifference} month${monthDifference > 1 ? 's' : ''} `;
  }

  if (dayDifference > 0) {
    message += `${dayDifference} day${dayDifference > 1 ? 's' : ''} `;
  }

  if (hourDifference > 0) {
    message += `${hourDifference} hour${hourDifference > 1 ? 's' : ''} `;
  }

  if (hourDifference < 1) {
    message = "Less than 1 hour";
  } else if (minuteDifference > 0) {
    message += `${minuteDifference} minute${minuteDifference > 1 ? 's' : ''} `;
  }

  // If less than a minute
  if (hourDifference < 1 && minuteDifference < 1) {
    message = "Less than 1 hour";
  }

  // Add "ago" to all time differences except "Less than 1 hour"
  if (message !== "Less than 1 hour") {
    message += "ago";
  }

  return message.trim();
};
