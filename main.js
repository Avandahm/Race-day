let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true) {
raceNumber = (raceNumber + 1000);
}

if (runnersAge > 18 && registeredEarly === true) {
console.log("Race will start 9:30 am and your number will be " + raceNumber);
}
else if (runnersAge > 18 && registeredEarly === false) {
  console.log("Late adults run at 11:00 am and your number will be "+ raceNumber);
}
else if (runnersAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration) and your race number will be " + raceNumber);
}
