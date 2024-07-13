// using the export to send the data from
//  the file to the app file and can access that data in the app.js
// using the object property in the file
// creating our own modules and using them in our project and make them more efficient.
exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
};

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
};
