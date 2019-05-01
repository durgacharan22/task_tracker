var existingData = [
    { "name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    { "name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    { "name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    { "name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    { "name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    { "name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    { "name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

window.onload = function () {
    onLoad()
}

function onLoad() {
    var tb = "<h3>Existing Tasks</h3><div id = 'tb'></div><table>";
    for (var i = 0; i < existingData.length; i++) {
        tb += "<tr>";
        tb += "<td>" + existingData[i].name + " " + existingData[i].date + "</td>";
        tb += "<td>" + existingData[i].assigned + "</td>";
        tb += "</tr>";
    }
    tb += "</table></div>";
    document.getElementById("table").innerHTML = tb;
}

function addTask() {
    event.preventDefault();
    var taskName = document.getElementById('taskName').value;
    var date = document.getElementById('date').value;
    var assignedTo = document.getElementById('assignedTo').value;

    var addedObj = { "name": taskName, "date": date, "assigned": assignedTo };
    existingData.push(addedObj);
    onLoad();
}
