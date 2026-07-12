async function loadPartial(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Couldn't load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

        highlightCurrentPage();
    } catch (err) {
        console.error(err);
    }
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