(function () {
  function codeHilighter(className) {
    const regexp = /(\s?=\s?)|((let|const|var)|(\s+\w+\s+))|('.+?')|(\/{2,}.+)|\.(\w+)/gi;
    function replacer(newStr) {
      let sourceStr = newStr[0];
      return function matcher(str, p0, p1, p2, p3, p4, p5, p6) {
        if (p2) {
          sourceStr = sourceStr.replace(
            p2,
            `<span class="code__assignment">${p2}</span>`
          );
        }
        if (p3) {
          sourceStr = sourceStr.replace(
            p3,
            `<span class="code__variable">${p3}</span>`
          );
        }
        if (p4) {
          sourceStr = sourceStr.replace(
            p4,
            `<span class="code__string">${p4}</span>`
          );
        }
        if (p5) {
          sourceStr = sourceStr.replace(
            p5,
            `<span class="code__coment">${p5}</span>`
          );
        }
        if (p6) {
          sourceStr = sourceStr.replace(
            p6,
            `<span class="code__method">${p6}</span>`
          );
        }
        if (p0) {
          sourceStr = sourceStr.replace(
            p0,
            `<span class="code__eq">${p0}</span>`
          );
        }
        newStr[0] = sourceStr;
        return str;
      };
    }
    const code = document.querySelectorAll(className);
    code.forEach((pre, idx) => {
      let innerStr = pre.innerHTML;
      let newStr = [innerStr];
      let num = `<span class="code__line">${idx + 1} </span>`;
      innerStr.replace(regexp, replacer(newStr));
      pre.innerHTML = num.concat(newStr);
    });
  }

  codeHilighter(".code__text");

  const btnMyFonts = document.getElementById("btn-myfonts");
  const btnByFonts = document.getElementById("btn-byfonts");
  const tabMyFonts = document.getElementById("tab-myfonts");
  const tabByFonts = document.getElementById("tab-byfonts");

  btnByFonts.onclick = function () {
    tabByFonts.classList.add("active");
    this.classList.add("tab__link_active");

    tabMyFonts.classList.remove("active");
    btnMyFonts.classList.remove("tab__link_active");
  };
  btnMyFonts.onclick = function () {
    tabMyFonts.classList.add("active");
    this.classList.add("tab__link_active");

    tabByFonts.classList.remove("active");
    btnByFonts.classList.remove("tab__link_active");
  };
})();
