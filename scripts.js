// 1) تغيير العنوان
function changeHeadline() {
  const h = document.getElementById("headline");
  h.innerText = "تمّ تغيير العنوان!";
}

// 2) تبديل الصورة عند المرور وإعادتها عند الخروج
function changeImage() {
  document.getElementById("image").src = "bild2.png";
}
function resetImage() {
  document.getElementById("image").src = "bild1.png";
}

// 3) إضافة نص جديد عند الضغط على الزر
document.getElementById("addTextBtn").addEventListener("click", () => {
  const container = document.getElementById("textContainer");
  const p = document.createElement("p");
  p.innerText = "تمت إضافة نص جديد!";
  container.appendChild(p);
});

// 4) تغيير عنوان القائمة عند النقر
function changeListTitle() {
  document.getElementById("listTitle").innerText = "القائمة بعد تغيير العنوان";
}

// 5) فرز القائمة أبجديًا
document.getElementById("sortBtn").addEventListener("click", () => {
  const ul = document.getElementById("itemList");
  const items = Array.from(ul.querySelectorAll("li"));
  items.sort((a, b) => a.innerText.localeCompare(b.innerText, "ar"));
  ul.innerHTML = "";
  items.forEach(li => ul.appendChild(li));
});

// >>> للتأكد من أن السكريبت فعّال:
// افتح Console في أدوات المطور (F12) وتأكد من عدم وجود أخطاء 404 أو JavaScript  
