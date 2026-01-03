// ===============================
// TIMETABLE DATA STRUCTURE
// ===============================
let timetable = {};

// ===============================
// ADD CLASS (Graph Coloring Logic)
// ===============================
function addClass() {
  let subject = document.getElementById("subject").value;
  let day = document.getElementById("day").value;

  // Available colors (time slots)
  let slots = ["9-10", "10-11", "11-12", "12-1"];

  if (!subject) {
    document.getElementById("output").innerHTML =
      "❌ Please enter subject name";
    return;
  }

  if (!timetable[day]) {
    timetable[day] = {};
  }

  // 🟢 GREEDY COLORING LOGIC
  for (let time of slots) {
    if (!timetable[day][time]) {
      timetable[day][time] = subject;
      updateTable();
      document.getElementById("output").innerHTML =
        "✅ Assigned using Greedy Coloring (" + time + ")";
      return;
    }
  }

  // ❌ If no color (slot) available
  document.getElementById("output").innerHTML =
    "❌ No available time slot for " + subject;
}
// ===============================
// DISPLAY TIMETABLE
// ===============================
function updateTable() {
  let table = document.getElementById("timetable");

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
    row += "</tr>";
    table.innerHTML += row;
  }
}

