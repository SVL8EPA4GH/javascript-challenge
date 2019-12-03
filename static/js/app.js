// appending data from data.js into tbody of index.html table
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((UFO)=>{
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// take input from date entry 


//filter table based on provided date
var button = d3.select("#filter-btn");

button.on("click", function(){
    // prevent default form refresh and clear table body
    d3.event.preventDefault();
    tbody.html("");
    // get input date value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log("Date entered:", inputValue);

    // filter data according to input date
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log("Data filtered:", filteredData);

    //Update table with filteredData
    var tbody_filtered = d3.select("tbody");
    filteredData.forEach((UFO)=>{
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
   
})