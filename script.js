console.log("Skript geladen!");

// 1) Überschrift ändern
document.getElementById("headline").addEventListener("click", () => {
  console.log("Überschrift angeklickt");
  document.getElementById("headline").innerText = "Überschrift wurde geändert!";
});

// 2) Bild tauschen
const img = document.getElementById("image");
img.addEventListener("mouseover", () => {
  console.log("Maus über Bild");
  img.src = "bild2.png";
});
img.addEventListener("mouseout", () => {
  console.log("Maus verlässt Bild");
  img.src = "bild1.png";
});

// 3) Neuen Text hinzufügen
document.getElementById("addTextBtn").addEventListener("click", () => {
  console.log("Button 'Neuen Text hinzufügen' geklickt");
  const p = document.createElement("p");
  p.innerText = "Neuer Text wurde hinzugefügt!";
  document.getElementById("textContainer").appendChild(p);
});

// 4a) Listentitel ändern
document.getElementById("listTitle").addEventListener("click", () => {
  console.log("Liste-Überschrift angeklickt");
  document.getElementById("listTitle").innerText = "Titel der Liste geändert";
});

// 4b) Liste sortieren
document.getElementById("sortBtn").addEventListener("click", () => {
  console.log("Button 'Liste alphabetisch sortieren' geklickt");
  const ul = document.getElementById("itemList");
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => a.innerText.localeCompare(b.innerText, "de"));
  ul.innerHTML = "";
  items.forEach(li => ul.appendChild(li));
});
