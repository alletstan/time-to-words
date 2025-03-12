// expecting time to be a string in the format like '8:15' or '12:30'
const hourToWordMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
};

const minutesToWordMap = {
  11: "eleven",
  15: "quarter",
  30: "half",
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const timeSplit = time.split(":");

  if (timeSplit[1] > 30) {
    return (
      minutesToWordMap[60 - timeSplit[1]] +
      " to " +
      hourToWordMap[Number(timeSplit[0]) + 1]
    );
  } else {
    return (
      minutesToWordMap[timeSplit[1]] + " past " + hourToWordMap[timeSplit[0]]
    );
  }
}

module.exports = { convertTimeToWords };
