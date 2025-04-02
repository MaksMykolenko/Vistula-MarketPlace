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

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("registerForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const languageSelect = document.getElementById("languageSelect");

    // Перемикання видимості пароля
    togglePassword.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            togglePassword.textContent = "🙈"; // Іконка закритого ока
        } else {
            password.type = "password";
            togglePassword.textContent = "👁️"; // Іконка відкритого ока
        }
    });

    // Валідація форми
    loginForm.addEventListener("submit", (e) => {
        let valid = true;

        if (!email.value.includes("@") || !email.value.includes(".")) {
            alert("Введіть коректну електронну пошту");
            valid = false;
        }

        if (password.value.length < 6) {
            alert("Пароль має містити не менше 6 символів");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });

    // Локалізація
    const translations = {
        "en": {
            "home": "Home",
            "support": "Support",
            "search": "Search",
            "account": "Account",
            "searchPlaceholder": "Enter a query...",
            "login": "Login",
            "email": "Email:",
            "password": "Password:",
            "loginBtn": "Log In",
            "noAccount": "Don't have an account?",
            "forgotPassword": "Forgot password?"
        },
        "ua": {
            "home": "Головна",
            "support": "Підтримка",
            "search": "Пошук",
            "account": "Акаунт",
            "searchPlaceholder": "Введіть запит...",
            "login": "Вхід",
            "email": "Електронна пошта:",
            "password": "Пароль:",
            "loginBtn": "Увійти",
            "noAccount": "Не маєш аккаунту?",
            "forgotPassword": "Забув пароль?"
        },
        "pl": {
            "home": "Strona główna",
            "support": "Wsparcie",
            "search": "Szukaj",
            "account": "Konto",
            "searchPlaceholder": "Wpisz zapytanie...",
            "login": "Logowanie",
            "email": "E-mail:",
            "password": "Hasło:",
            "loginBtn": "Zaloguj się",
            "noAccount": "Nie masz konta?",
            "forgotPassword": "Zapomniałeś hasła?"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[lang][el.getAttribute("data-lang")];
        });

        document.querySelector("[data-placeholder]").setAttribute("placeholder", translations[lang]["searchPlaceholder"]);

        // Оновлення тексту у формі
        document.querySelector("h2:nth-of-type(2)").textContent = translations[lang]["login"];
        document.querySelector("label[for='email']").textContent = translations[lang]["email"];
        document.querySelector("label[for='password']").textContent = translations[lang]["password"];
        document.querySelector("button[type='submit']").textContent = translations[lang]["loginBtn"];

        // Оновлення тексту у посиланнях
        const forgotPasswordLink = document.querySelector(".forgot-password");
        const noAccountLink = document.querySelector(".sign-up");

        if (forgotPasswordLink) {
            forgotPasswordLink.textContent = translations[lang]["forgotPassword"];
        }

        if (noAccountLink) {
            noAccountLink.textContent = translations[lang]["noAccount"];
        }
    }

    const savedLang = localStorage.getItem("selectedLanguage") || "ua";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    languageSelect.addEventListener("change", () => {
        localStorage.setItem("selectedLanguage", languageSelect.value);
        changeLanguage(languageSelect.value);
    });
});
