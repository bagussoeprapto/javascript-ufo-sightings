// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the value property from the input element
  var inputElement = d3.select("#datetime").property("value");
  
  // Filter the date based on the input element
  var filteredData = data.filter(data => data.datetime === inputElement);

  //Use d3 to append 1 cell per filtered report object
  var tbody = d3.select("tbody");

  // Iterate per value within the object
  filteredData.forEach(function(d) {
    
    // Append a cell to the row for each value
    var row = tbody.append("tr");
      Object.entries(d).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);    
      });
  });
});
