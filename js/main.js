async function loadPartial(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    highlightCurrentPage();

}

function highlightCurrentPage() {

    const page = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href").replace("/", "");

        if (href === page) {

            link.classList.add("active");

        }

    });

}

document.addEventListener("DOMContentLoaded", () => {

    loadPartial("header", "/partials/header.html");

    loadPartial("footer", "/partials/footer.html");

});