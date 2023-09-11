const currentDate = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = currentDate.getDay();
const currentDayName = dayNames[dayOfWeek];
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = `Current Day of the Week: ${currentDayName}`;

const currentUTCTime = Date.now();
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
