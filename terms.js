//search
document.addEventListener("DOMContentLoaded", function () {
    let searchButton = document.getElementById("searchButton");
    let searchInput = document.getElementById("searchInput");

    // Додаємо розмитий фон
    let overlay = document.createElement("div");
    overlay.classList.add("search-overlay");
    document.body.appendChild(overlay);

    if (!searchButton || !searchInput) {
        console.error("❌ Елементи не знайдено! Переконайтеся, що HTML-код правильний.");
        return;
    }

    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Запобігає миттєвому закриттю при кліку на кнопку
        searchInput.classList.add("active");
        overlay.classList.add("active");
        searchInput.focus();
    });

    document.addEventListener("click", function (event) {
        if (event.target !== searchInput && event.target !== searchButton) {
            searchInput.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});
//change language
const translations = {
    "en": {
        "home": "Home",
        "support": "Support",
        "search": "Search",
        "account": "Account",
        "searchPlaceholder": "Enter a query...",
        "tagline": "Buy and sell more comfortably",
        "start": "Start using Vistula MarketPlace now",
        "startBtn": "Get Started"
    },
    "ua": {
        "home": "Головна",
        "support": "Підтримка",
        "search": "Пошук",
        "account": "Акаунт",
        "searchPlaceholder": "Введіть запит...",
        "tagline": "Продавай і купуй комфортніше",
        "start": "Почни користуватися Vistula MarketPlace зараз",
        "startBtn": "Почати"
    },
    "pl": {
        "home": "Strona główna",
        "support": "Wsparcie",
        "search": "Szukaj",
        "account": "Konto",
        "searchPlaceholder": "Wpisz zapytanie...",
        "tagline": "Kupuj i sprzedawaj wygodniej",
        "start": "Zacznij korzystać z Vistula MarketPlace teraz",
        "startBtn": "Rozpocznij"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");

    // Відновлюємо вибрану мову з localStorage
    const savedLang = localStorage.getItem("selectedLanguage") || "ua";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    // Зміна мови при виборі з випадаючого списку
    languageSelect.addEventListener("change", () => {
        const selectedLang = languageSelect.value;
        localStorage.setItem("selectedLanguage", selectedLang);
        changeLanguage(selectedLang);
    });
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = translations[lang][el.getAttribute("data-lang")];
    });

    document.querySelector("[data-placeholder]").setAttribute("placeholder", translations[lang]["searchPlaceholder"]);
}

