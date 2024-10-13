// Function to get the time of the day
const getTimeOfTheDay = () => {
  try {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "evening";
    } else {
      return "night";
    }
  } catch (error) {
    console.log("Error in getTimeOfTheDay function", error);
  }
};

// Function to construct a greeting message
const constructGreeting = (name, timeOfTheDay) => {
  try {
    let greeting = "";
    if (timeOfTheDay) {
      switch (timeOfTheDay) {
        case "morning":
          greeting = `Hello, ${name}! Have a good morning!`;
          break;
        case "afternoon":
          greeting = `Hello, ${name}! Have a good afternoon!`;
          break;
        case "evening":
          greeting = `Hello, ${name}! Have a good evening!`;
          break;
        case "night":
          greeting = `Hello, ${name}! Have a good night!`;
          break;
        default:
          greeting = `Hello, ${name}!`;
          break;
      }
    } else {
      greeting = `Hello, ${name}!`;
    }
    return greeting;
  } catch (error) {
    console.log("Error in constructGreeting function", error);
  }
};

module.exports = { getTimeOfTheDay, constructGreeting };
