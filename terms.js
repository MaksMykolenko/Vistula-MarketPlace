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
        "startBtn": "Get Started",
        "termsTitle": "Terms of Use",
        "section1": "1. General Provisions",
        "section1_1": "1.1 V1stula MarketPlace is an online trading platform.",
        "section2": "2. Registration and Account",
        "section2_1": "2.1 By registering, you agree to the collection of your data, such as email, password, and login.",
        "section2_2": "2.2 By adding contact details to your account, you allow them to be viewed by the site's administration and other users.",
        "section3": "3. Buying and Selling",
        "section3_1": "3.1 When selling, you must provide information about the product, including a textual description and photos.",
        "section4": "4. Responsibility",
        "section4_1": "4.1 V1stula MarketPlace is not responsible for the quality of the product you purchase.",
        "section4_2": "4.2 Users are responsible for the accuracy of the provided information.",
        "section4_3": "4.3 The site administration reserves the right to block accounts that violate the platform's rules.",
        "section5": "5. Privacy Policy",
        "section5_1": "5.1 We collect personal data such as name, email, and contact information to ensure quality service.",
        "section5_2": "5.2 Collected data is used for communication, identity verification, and improving the platform.",
        "section5_3": "5.3 We do not share your personal data with third parties without your permission, except as required by law.",
        "section5_4": "5.4 You have the right to modify or delete your personal data in your account settings.",
        "section6": "6. Changes to Terms",
        "section6_1": "6.1 The site administration may change the terms of use without prior notice.",
        "section6_2": "6.2 Updated rules take effect upon publication.",
        "lastUpdated": "Last updated: April 2, 2025."
    },
    "ua": {
        "home": "Головна",
        "support": "Підтримка",
        "search": "Пошук",
        "account": "Акаунт",
        "searchPlaceholder": "Введіть запит...",
        "tagline": "Продавай і купуй комфортніше",
        "start": "Почни користуватися Vistula MarketPlace зараз",
        "startBtn": "Почати",
        "termsTitle": "Умови користування",
        "section1": "1. Загальні положення",
        "section1_1": "1.1 V1stula MarketPlace — це виключно торгівельна платформа.",
        "section2": "2. Реєстрація та акаунт",
        "section2_1": "2.1 Реєструючись, ви даєте дозвіл на збирання ваших даних, таких як електронна пошта, пароль та логін.",
        "section2_2": "2.2 Додаючи контактні дані до свого акаунту, ви надаєте дозвіл на їх перегляд адміністрації сайту та іншим користувачам сервісу.",
        "section3": "3. Купівля та продаж",
        "section3_1": "3.1 При продажі ви маєте надати інформацію про товар, включаючи текстовий опис та фотографії.",
        "section4": "4. Відповідальність",
        "section4_1": "4.1 V1stula MarketPlace не несе відповідальності за якість товару, який ви купуєте.",
        "section4_2": "4.2 Користувачі самостійно відповідають за достовірність наданої інформації.",
        "section4_3": "4.3 Адміністрація сайту залишає за собою право блокувати акаунти, що порушують правила платформи.",
        "section5": "5. Політика конфіденційності",
        "section5_1": "5.1 Ми збираємо персональні дані, такі як ім’я, електронна пошта, контактна інформація, щоб забезпечити якісне використання сервісу.",
        "section5_2": "5.2 Зібрані дані використовуються для комунікації, підтвердження особистості та покращення роботи платформи.",
        "section5_3": "5.3 Ми не передаємо ваші персональні дані третім особам без вашого дозволу, за винятком випадків, передбачених законодавством.",
        "section5_4": "5.4 Ви маєте право змінювати або видаляти свої персональні дані у налаштуваннях акаунту.",
        "section6": "6. Зміни в умовах",
        "section6_1": "6.1 Адміністрація сайту може змінювати умови користування без попереднього повідомлення.",
        "section6_2": "6.2 Оновлені правила набувають чинності з моменту їх публікації.",
        "lastUpdated": "Дата останньої зміни: 2 квітня 2025 року."
    },
    "pl": {
        "home": "Strona główna",
        "support": "Wsparcie",
        "search": "Szukaj",
        "account": "Konto",
        "searchPlaceholder": "Wpisz zapytanie...",
        "tagline": "Kupuj i sprzedawaj wygodniej",
        "start": "Zacznij korzystać z Vistula MarketPlace teraz",
        "startBtn": "Rozpocznij",
        "termsTitle": "Warunki użytkowania",
        "section1": "1. Postanowienia ogólne",
        "section1_1": "1.1 V1stula MarketPlace to platforma handlowa online.",
        "section2": "2. Rejestracja i konto",
        "section2_1": "2.1 Rejestrując się, wyrażasz zgodę na zbieranie twoich danych, takich jak email, hasło i login.",
        "section2_2": "2.2 Dodając dane kontaktowe do swojego konta, zezwalasz na ich przeglądanie przez administrację witryny oraz innych użytkowników.",
        "section3": "3. Kupno i sprzedaż",
        "section3_1": "3.1 Sprzedając, musisz podać informacje o produkcie, w tym opis tekstowy i zdjęcia.",
        "section4": "4. Odpowiedzialność",
        "section4_1": "4.1 V1stula MarketPlace nie ponosi odpowiedzialności za jakość zakupionych towarów.",
        "section4_2": "4.2 Użytkownicy są odpowiedzialni za prawdziwość podanych informacji.",
        "section4_3": "4.3 Administracja witryny zastrzega sobie prawo do blokowania kont naruszających zasady platformy.",
        "section5": "5. Polityka prywatności",
        "section5_1": "5.1 Zbieramy dane osobowe, takie jak imię, email, dane kontaktowe, aby zapewnić wysoką jakość usług.",
        "section5_2": "5.2 Zebrane dane są wykorzystywane do komunikacji, weryfikacji tożsamości i poprawy działania platformy.",
        "section5_3": "5.3 Nie udostępniamy twoich danych osobowych osobom trzecim bez twojej zgody, z wyjątkiem przypadków przewidzianych przez prawo.",
        "section5_4": "5.4 Masz prawo do zmiany lub usunięcia swoich danych osobowych w ustawieniach konta.",
        "section6": "6. Zmiany warunków",
        "section6_1": "6.1 Administracja witryny może zmieniać warunki użytkowania bez wcześniejszego powiadomienia.",
        "section6_2": "6.2 Zaktualizowane zasady obowiązują od momentu ich publikacji.",
        "lastUpdated": "Ostatnia aktualizacja: 2 kwietnia 2025 r."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");

    // Відновлюємо вибрану мову з localStorage або встановлюємо "ua" за замовчуванням
    const savedLang = localStorage.getItem("selectedLanguage") || "ua";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    // Зміна мови при виборі в <select>
    languageSelect.addEventListener("change", () => {
        const selectedLang = languageSelect.value;
        localStorage.setItem("selectedLanguage", selectedLang);
        changeLanguage(selectedLang);
    });

    // Слухаємо події з localStorage (синхронізація між вкладками)
    window.addEventListener("storage", (event) => {
        if (event.key === "selectedLanguage") {
            languageSelect.value = event.newValue;
            changeLanguage(event.newValue);
        }
    });
});

function changeLanguage(lang) {
    if (!translations[lang]) return; // Переконуємося, що мова існує в об'єкті translations

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Оновлюємо placeholder, якщо такий елемент є
    const searchInput = document.querySelector("[data-placeholder]");
    if (searchInput && translations[lang]["searchPlaceholder"]) {
        searchInput.setAttribute("placeholder", translations[lang]["searchPlaceholder"]);
    }
}
