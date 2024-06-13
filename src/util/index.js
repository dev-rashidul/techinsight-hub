export const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  difference = difference / 1000;
  let yearDifference = Math.floor(difference / (3600 * 24 * 365));
  difference -= yearDifference * 3600 * 24 * 365;
  let dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;
  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  // Calculate months
  const averageDaysInMonth = 30.44; // Average days in a month
  let monthDifference = Math.floor(dayDifference / averageDaysInMonth);
  dayDifference = Math.floor(dayDifference % averageDaysInMonth);

  let message = "";

  if (yearDifference > 0) {
    message += `${yearDifference} years `;
  }

  if (monthDifference > 0) {
    message += `${monthDifference} months `;
  }

  if (dayDifference > 0) {
    message += `${dayDifference} days `;
  }

  if (hourDifference > 0) {
    message += `${hourDifference} hours `;
  }
  return message.trim();
};
