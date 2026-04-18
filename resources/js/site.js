// This is all you.

require("./prism.js");

function fillArticleToc(targetId) {
    const body = document.getElementById("article-body");
    const root = document.getElementById(targetId);
    if (!body || !root) return;

    const headings = body.querySelectorAll("h2, h3");
    headings.forEach((h, i) => {
        if (!h.id) {
            h.id = "section-" + (i + 1);
        }
        const a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent.trim();
        const pad = h.tagName === "H3" ? "pl-4" : "pl-2";
        a.className =
            "block py-1 text-sm text-gray-600 hover:text-[#5956E9] border-l-2 border-transparent hover:border-[#5956E9] " +
            pad;
        root.appendChild(a);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fillArticleToc("article-toc");
    fillArticleToc("article-toc-mobile");

    document.querySelectorAll(".js-copy-link").forEach((btn) => {
        btn.addEventListener("click", () => {
            const url = btn.getAttribute("data-url");
            if (!url || !navigator.clipboard) return;
            navigator.clipboard.writeText(url).then(() => {
                const label = btn.querySelector("span");
                if (label) {
                    label.textContent = "Copied!";
                }
            });
        });
    });
});
