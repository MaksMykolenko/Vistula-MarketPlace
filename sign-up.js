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


//=====================================================================//
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const username = document.getElementById("username");
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
    registerForm.addEventListener("submit", (e) => {
        let valid = true;

        if (username.value.trim().length < 3) {
            alert("Ім'я користувача має містити не менше 3 символів");
            valid = false;
        }

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
            "signup": "Sign Up",
            "username": "Username:",
            "email": "Email:",
            "password": "Password:",
            "registerBtn": "Register",
            "haveAccount": "Already have an account?",
            "termsText": "I agree with the",
            "termsLink": "terms of service"
        },
        "ua": {
            "home": "Головна",
            "support": "Підтримка",
            "search": "Пошук",
            "account": "Акаунт",
            "searchPlaceholder": "Введіть запит...",
            "signup": "Реєстрація",
            "username": "Ім'я користувача:",
            "email": "Електронна пошта:",
            "password": "Пароль:",
            "registerBtn": "Зареєструватися",
            "haveAccount": "Вже маєш аккаунт?",
            "termsText": "Я погоджуюсь з",
            "termsLink": "умовами обслуговування"
        },
        "pl": {
            "home": "Strona główna",
            "support": "Wsparcie",
            "search": "Szukaj",
            "account": "Konto",
            "searchPlaceholder": "Wpisz zapytanie...",
            "signup": "Rejestracja",
            "username": "Nazwa użytkownika:",
            "email": "E-mail:",
            "password": "Hasło:",
            "registerBtn": "Zarejestruj się",
            "haveAccount": "Masz już konto?",
            "termsText": "Zgadzam się z",
            "termsLink": "warunkami korzystania"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.textContent = translations[lang][el.getAttribute("data-lang")];
        });
        document.querySelector("[data-placeholder]").setAttribute("placeholder", translations[lang]["searchPlaceholder"]);
        
        // Оновлення тексту у елементах форми
        document.querySelector("label[for='username']").textContent = translations[lang]["username"];
        document.querySelector("label[for='email']").textContent = translations[lang]["email"];
        document.querySelector("label[for='password']").textContent = translations[lang]["password"];
        document.querySelector("button[type='submit']").textContent = translations[lang]["registerBtn"];
        document.querySelector(".not-have-account a").textContent = translations[lang]["haveAccount"];
        
        // Оновлення тексту для галочки умов обслуговування
        document.getElementById("termsText").textContent = translations[lang]["termsText"];
        document.getElementById("termsLink").textContent = translations[lang]["termsLink"];
    }

    const savedLang = localStorage.getItem("selectedLanguage") || "ua";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    languageSelect.addEventListener("change", () => {
        localStorage.setItem("selectedLanguage", languageSelect.value);
        changeLanguage(languageSelect.value);
    });
});
