exports.getDate = function(){
  var today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  return today.toLocaleDateString("en-US", options)
}

//day
exports.getDay = function(){
  var today = new Date();
  let options = {
    day: "numeric"
  }
  return today.toLocaleDateString("en-US", options)
}
