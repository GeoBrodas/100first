export function formatTime(time) {
  const [h, m, s, ms] = time.split(':');
  let string;

  // format string according to the data present
  if (h === '0' && m === '0' && s === '0') {
    string = `${ms}ms`;
  } else if (h === '0' && m === '0') {
    string = `${s}s ${ms}ms`;
  } else if (h === '0') {
    string = `${m}m ${s}s`;
  } else {
    string = `${h}h ${m}m ${s}s`;
  }

  return string;
}

export function findIfNextDay(currentTime, lastSubmittedDataTIme) {
  let nextDay = false;

  if (currentTime !== lastSubmittedDataTIme) {
    nextDay = true;
  }

  return nextDay;
}
