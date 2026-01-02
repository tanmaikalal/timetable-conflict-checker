// ===== DATA STRUCTURE =====
let classes = [];

// ===== ADD CLASS =====
function addClass() {
  let subject = document.getElementById("subject").value;
  let time = document.getElementById("time").value;

  classes.push({ subject, time });

  document.getElementById("output").innerHTML =
    "Class added successfully ✔️";
}

// ===== CONFLICT DETECTION ALGORITHM =====
function checkConflicts() {
  for (let i = 0; i < classes.length; i++) {
    for (let j = i + 1; j < classes.length; j++) {
      if (classes[i].time === classes[j].time) {
        document.getElementById("output").innerHTML =
          "❌ Conflict detected between " +
          classes[i].subject +
          " and " +
          classes[j].subject;
        return;
      }
    }
  }

  document.getElementById("output").innerHTML =
    "✅ No conflicts found. Timetable is valid.";
}
