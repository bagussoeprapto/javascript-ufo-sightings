// from data.js
var tableData = data;
var tbody = d3.select("tbody");



//Use d3 to append 1 cell per UFO report value (datetime, city, state, country, shape, durationMinutes, comments)
data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    
    Object.entries(UFO).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);    
    });
    });