/* Isolate one .phone at 402×874 so Fable matches Codex screen size. */
(function () {
  var m = /(?:\?|&)solo=(\d+)/.exec(location.search || "");
  if (!m) return;
  var n = parseInt(m[1], 10);
  document.documentElement.classList.add("solo");
  document.body.classList.add("solo");
  var variants = document.querySelectorAll(".variant");
  if (!variants.length) return;
  variants.forEach(function (v, i) {
    if (i !== n) v.remove();
  });
  ["h1", "h2", ".lead", ".label", ".note"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.remove();
    });
  });
  document.body.style.cssText = "margin:0;padding:0;background:#111;overflow:hidden;";
  var phone = document.querySelector(".phone");
  if (!phone) return;
  phone.style.cssText =
    "margin:0;border-radius:0;box-shadow:none;width:402px;height:874px;";
})();
