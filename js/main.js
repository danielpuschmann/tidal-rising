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

function normalizePath(path) {
    return path
        .replace(/\/index\.html$/, "/")
        .replace(/\/+$/, "") || "/";
}

function highlightCurrentPage() {
    const currentPath = normalizePath(location.pathname);

    document.querySelectorAll("nav a").forEach(link => {
        const linkPath = normalizePath(
            new URL(link.href, location.origin).pathname
        );

        const isCurrent = linkPath === currentPath;

        link.classList.toggle("active", isCurrent);

        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {

    loadPartial("header", "/partials/header.html");

    loadPartial("footer", "/partials/footer.html");

});