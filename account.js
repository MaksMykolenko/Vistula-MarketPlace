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
        "account": "Log out",
        "searchPlaceholder": "Enter a query...",
        "emailLabel": "Email:",
        "phoneLabel": "Phone:",
        "adsLabel": "Ads:",
        "purchasesLabel": "Purchases:",
        "editProfile": "Edit Profile",
        "orderHistory": "Order History",
        "orderExample1": "Order #1234 – Item 1 – 250 UAH",
        "orderExample2": "Order #5678 – Item 2 – 500 UAH"
    },
    "ua": {
        "home": "Головна",
        "support": "Підтримка",
        "search": "Пошук",
        "account": "Вийти",
        "searchPlaceholder": "Введіть запит...",
        "emailLabel": "Електронна пошта:",
        "phoneLabel": "Телефон:",
        "adsLabel": "Оголошення:",
        "purchasesLabel": "Покупки:",
        "editProfile": "Редагувати профіль",
        "orderHistory": "Історія замовлень",
        "orderExample1": "Замовлення #1234 – Товар 1 – 250 грн",
        "orderExample2": "Замовлення #5678 – Товар 2 – 500 грн"
    },
    "pl": {
        "home": "Strona główna",
        "support": "Wsparcie",
        "search": "Szukaj",
        "account": "Wyloguj",
        "searchPlaceholder": "Wpisz zapytanie...",
        "emailLabel": "E-mail:",
        "phoneLabel": "Telefon:",
        "adsLabel": "Ogłoszenia:",
        "purchasesLabel": "Zakupy:",
        "editProfile": "Edytuj profil",
        "orderHistory": "Historia zamówień",
        "orderExample1": "Zamówienie #1234 – Przedmiot 1 – 250 PLN",
        "orderExample2": "Zamówienie #5678 – Przedmiot 2 – 500 PLN"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");

    // Відновлюємо вибрану мову з localStorage або встановлюємо "ua" за замовчуванням
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
        const key = el.getAttribute("data-lang");
        el.textContent = translations[lang][key];
    });

    document.querySelector("[data-placeholder]").setAttribute("placeholder", translations[lang]["searchPlaceholder"]);

    // Переклад кнопки редагування
    document.getElementById("editProfile").textContent = translations[lang]["editProfile"];

    // Переклад заголовка "Історія замовлень"
    document.querySelector(".order-history h2").textContent = translations[lang]["orderHistory"];

    // Переклад міток у профілі
    const labels = document.querySelectorAll(".profile-details p strong");
    if (labels.length >= 4) {
        labels[0].textContent = translations[lang]["emailLabel"];
        labels[1].textContent = translations[lang]["phoneLabel"];
        labels[2].textContent = translations[lang]["adsLabel"];
        labels[3].textContent = translations[lang]["purchasesLabel"];
    }

    // Переклад історії замовлень
    const orderItems = document.querySelectorAll(".order-history ul li p");
    if (orderItems.length > 1) {
        orderItems[0].textContent = translations[lang]["orderExample1"];
        orderItems[1].textContent = translations[lang]["orderExample2"];
    }
}
