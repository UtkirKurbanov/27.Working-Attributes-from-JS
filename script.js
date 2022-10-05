var a = document.querySelector("a");

console.log(a);

var oldHref = a.getAttribute("href");
console.log(a.getAttribute("href"));

console.log(a.getAttribute("title"));

a.setAttribute("href", "https://mail.ru");
a.setAttribute("title", "Go to Mail");
a.textContent = "Mail";

console.log(a.attributes);
