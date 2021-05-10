const copyBtn = document.querySelectorAll(".code-hljs .btn--copy");

copyBtn.forEach(btn => btn.addEventListener("click", () => {
    const codeElem = btn.nextElementSibling;
    navigator.clipboard.writeText(codeElem.textContent)
        .then(() => {
            btn.textContent = "Copied!";
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i>'
            }, 1800);
        }).catch(() => {
            console.log("failed")
        })
}))