// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filterbutton = d3.select("#filter-btn");
var datetime = d3.select("#datetime")

data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Filter records by date
filterbutton.on("click", function() {
  // Clear table contents before appending filtered results
  $("#ufo-table").find("tbody").empty();
  
  inputValue = datetime.property("value");
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData);


  filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});



