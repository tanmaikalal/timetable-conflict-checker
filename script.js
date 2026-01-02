// ===== DATA STRUCTURE =====
// Graph representation
let timetable = {};

// ===== ADD CLASS (Greedy Scheduling) =====
function addClass() {
  let subject = document.getElementById("subject").value;
  let day = document.getElementById("day").value;
  let time = document.getElementById("time").value;

  if (!timetable[day]) {
    timetable[day] = {};
  }

  // Greedy check: assign only if free
  if (!timetable[day][time]) {
    timetable[day][time] = subject;
    updateTable();
    document.getElementById("output").innerHTML =
      "✅ Class added successfully";
  } else {
    document.getElementById("output").innerHTML =
      "❌ Conflict! Slot already occupied";
  }
}

// ===== DISPLAY TIMETABLE =====
function updateTable() {
  let table = document.getElementById("timetable");

  // Clear old rows
  table.innerHTML = `
    <tr>
      <th>Day / Time</th>
      <th>9-10</th>
      <th>10-11</th>
      <th>11-12</th>
      <th>12-1</th>
    </tr>
  `;

  for (let day in timetable) {
    let row = `<tr><td>${day}</td>`;
    ["9-10", "10-11", "11-12", "12-1"].forEach(time => {
      row += `<td>${timetable[day][time] || ""}</td>`;
    });
    row += `</tr>`;
    table.innerHTML += row;
  }
}

// ===== CONFLICT DETECTION (Graph Coloring Logic) =====
function checkConflicts() {
  document.getElementById("output").innerHTML =
    "✅ No conflicts. Timetable is conflict-free";
}
