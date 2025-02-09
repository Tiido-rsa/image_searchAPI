"use strict";

var accessKey = "kzSJMC_kpUtkqkd5B_m2CVzceCg7R5EXdySQ9c_rFVk";
var formEl = document.querySelector("form");
var inputEl = document.getElementById("search-input");
var searchResult = document.querySelector(".search-results");
var showMore = document.getElementById("show-more-btn");
var inputData = "";
var page = 1;

function searchimages() {
  var url, response, data, results;
  return regeneratorRuntime.async(function searchimages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          inputData = inputEl.value;
          url = "https://api.unsplash.com/search/photos?page=".concat(page, "&query=").concat(inputData, "&client_id=").concat(accessKey);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          results = data.results;

          if (page === 1) {
            searchResult.innerHTML = "";
          }

          results.map(function (result) {
            var imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            var image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;
            var imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;
            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResult.appendChild(imageWrapper);
          });
          page++;

          if (page > 1) {
            showMore.style.display = "block";
          }

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  page = 1;
  searchimages();
});
showMore.addEventListener("click", function () {
  searchimages();
});
//# sourceMappingURL=app.dev.js.map
