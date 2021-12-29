// create a function that returns a greeting based on time
export function getGreetingBasedOnTime() {
  var time = new Date().getHours();
  if (time < 12) {
    return 'Good morning';
  } else if (time < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}
