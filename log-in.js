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
        if (!translations[lang]) return; // Перевіряємо, чи є переклади для обраної мови
    
        // Оновлення всіх текстів із data-lang
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    
        // Оновлення placeholder у полі пошуку (перевіряємо існування елемента)
        const searchInput = document.querySelector("[data-placeholder]");
        if (searchInput && translations[lang]["searchPlaceholder"]) {
            searchInput.setAttribute("placeholder", translations[lang]["searchPlaceholder"]);
        }
    
        // Оновлення тексту у формі входу (перевіряємо наявність перед зміною)
        const loginTitle = document.querySelector("h2:nth-of-type(2)");
        if (loginTitle && translations[lang]["login"]) {
            loginTitle.textContent = translations[lang]["login"];
        }
    
        const emailLabel = document.querySelector("label[for='email']");
        if (emailLabel && translations[lang]["email"]) {
            emailLabel.textContent = translations[lang]["email"];
        }
    
        const passwordLabel = document.querySelector("label[for='password']");
        if (passwordLabel && translations[lang]["password"]) {
            passwordLabel.textContent = translations[lang]["password"];
        }
    
        const loginButton = document.querySelector("button[type='submit']");
        if (loginButton && translations[lang]["loginBtn"]) {
            loginButton.textContent = translations[lang]["loginBtn"];
        }
    
        // Оновлення тексту у посиланнях (перевіряємо, чи вони існують)
        const forgotPasswordLink = document.querySelector(".forgot-password");
        if (forgotPasswordLink && translations[lang]["forgotPassword"]) {
            forgotPasswordLink.textContent = translations[lang]["forgotPassword"];
        }
    
        const noAccountLink = document.querySelector(".sign-up");
        if (noAccountLink && translations[lang]["noAccount"]) {
            noAccountLink.textContent = translations[lang]["noAccount"];
        }
    }
    
    // Отримуємо збережену мову або встановлюємо "ua" за замовчуванням
    const savedLang = localStorage.getItem("selectedLanguage") || "ua";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);
    
    // Слухаємо зміну мови
    languageSelect.addEventListener("change", () => {
        const selectedLang = languageSelect.value;
        localStorage.setItem("selectedLanguage", selectedLang);
        changeLanguage(selectedLang);
    });
});    