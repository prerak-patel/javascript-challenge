// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filterbutton = d3.select("#filter-btn");
var datetime = d3.select("#datetime")
var city = d3.select("#city")
var state = d3.select("#state")
var country = d3.select("#country")
var shape = d3.select("#shape")

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
  
  searchByDateVal = datetime.property("value");
  searchByCityVal = city.property("value");
  searchByStateVal = state.property("value");
  searchByCountryVal = country.property("value");
  searchByShapeVal = shape.property("value");
  // var filteredData = tableData;
  
  var filteredData = []
  if(searchByDateVal){
    filteredData = tableData.filter(data => data.datetime === searchByDateVal);
  }
  
  if(searchByCityVal){
    filteredData = filteredData.filter(data => data.city === searchByCityVal);
  }

  if(searchByStateVal){
    filteredData = filteredData.filter(data => data.state === searchByStateVal);
  }

  if(searchByCountryVal){
    filteredData = filteredData.filter(data => data.country === searchByCountryVal);
  }

  if(searchByShapeVal){
    filteredData = filteredData.filter(data => data.shape === searchByShapeVal);
  }

  


  filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});






