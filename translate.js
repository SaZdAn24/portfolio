document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".language-switcher");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    function setLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    switcher.addEventListener("click", (event) => {
        const lang = event.target.getAttribute("data-translate");
        if (lang === "lang-ru") {
            setLanguage("ru");
        } else if (lang === "lang-pl") {
            setLanguage("pl");
        }
    });

    setLanguage("ru");
});
