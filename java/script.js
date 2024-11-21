// إضافة JavaScript لتمكين القائمة الفرعية عند التحويم
document.addEventListener("DOMContentLoaded", function () {
  // تحديد جميع العناصر التي تحتوي على القائمة DeepDrop
  var dropdownDeep = document.querySelectorAll(".dropdown-Deep");

  dropdownDeep.forEach(function (DeepDrop) {
    // فتح القائمة عند تحويم الماوس فوق DropDown
    DeepDrop.addEventListener("mouseover", function () {
      var DeepMenu = DeepDrop.querySelector(".dropdown-menu");
      DeepMenu.classList.add("show");
    });

    // إغلاق القائمة عند إزالة الماوس من DropDown
    DeepDrop.addEventListener("mouseout", function () {
      var DeepMenu = DeepDrop.querySelector(".dropdown-menu");
      DeepMenu.classList.remove("show");
    });

    //   السلوك المتغير لجعل القائمة عند الضغط عليها _ للقائمة الفرعية _ DeepDrop
    var deepSubMenu = DeepDrop.querySelector(".dropdown-submenu");
    deepSubMenu.addEventListener("mouseclick", function () {
      var subMenu = deepSubMenu.querySelector(".dropdown-menu");
      subMenu.classList.add("show");
    });

    deepSubMenu.addEventListener("mouseclick", function () {
      var subMenu = deepSubMenu.querySelector(".dropdown-menu");
      subMenu.classList.remove("show");
    });
  });
});
// navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Text Typer
const words = ["Freelancer", "Designer", "Photographer"];
const typerText = document.querySelector(".typer-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typerText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typerText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000); // انتظر قبل بدء الحذف
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500); // انتظر قبل بدء الكلمة التالية
  } else {
    setTimeout(type, isDeleting ? 100 : 200); // سرعة الكتابة والحذف
  }
}

type();


// تحسين القوائم المنسدلة المتعددة المستويات على الأجهزة المحمولة
document.addEventListener("click", function (e) {
  var dropdownToggle = e.target.closest(".dropdown-toggle");
  if (dropdownToggle && window.innerWidth < 992) {
    e.preventDefault();
    e.stopPropagation();
    var dropdownMenu = dropdownToggle.nextElementSibling;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("show");
    }
  }
});
