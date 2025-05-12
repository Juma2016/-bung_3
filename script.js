console.log("Skript geladen!");


document.getElementById("headline").addEventListener("click", () => {
  console.log("Überschrift angeklickt");
  document.getElementById("headline").innerText = "Überschrift wurde geändert!";
});


const img = document.getElementById("image");
img.addEventListener("mouseover", () => {
  console.log("Maus über Bild");
  img.src = "bild2.png";
});
img.addEventListener("mouseout", () => {
  console.log("Maus verlässt Bild");
  img.src = "bild1.png";
});


document.getElementById("addTextBtn").addEventListener("click", () => {
  console.log("Button 'Neuen Text hinzufügen' geklickt");
  const p = document.createElement("p");
  p.innerText = "Neuer Text wurde hinzugefügt!";
  document.getElementById("textContainer").appendChild(p);
});


document.getElementById("listTitle").addEventListener("click", () => {
  console.log("Liste-Überschrift angeklickt");
  document.getElementById("listTitle").innerText = "Titel der Liste geändert";
});


document.getElementById("sortBtn").addEventListener("click", () => {
  console.log("Button 'Liste alphabetisch sortieren' geklickt");
  const ul = document.getElementById("itemList");
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => a.innerText.localeCompare(b.innerText, "de"));
  ul.innerHTML = "";
  items.forEach(li => ul.appendChild(li));
});
