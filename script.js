
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


