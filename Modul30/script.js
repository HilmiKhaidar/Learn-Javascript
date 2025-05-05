const saveBtn = document.getElementById("saveBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("secretNotes")) || [];

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.onclick = () => {
      notes.splice(index, 1);
      localStorage.setItem("secretNotes", JSON.stringify(notes));
      renderNotes();
    };

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if (note) {
    notes.push(note);
    localStorage.setItem("secretNotes", JSON.stringify(notes));
    noteInput.value = "";
    renderNotes();
  }
});

renderNotes();
