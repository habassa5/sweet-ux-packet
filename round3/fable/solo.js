/* Isolate one .phone at native 402×874. No gallery chrome, no crop. */
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
  var s = document.createElement("style");
  s.textContent =
    "html,body.solo{margin:0!important;padding:0!important;width:402px!important;height:874px!important;overflow:hidden!important;background:#111!important;}" +
    "body.solo .row,body.solo .variant{display:block!important;margin:0!important;padding:0!important;gap:0!important;}" +
    "body.solo .phone{margin:0!important;border-radius:0!important;box-shadow:none!important;width:402px!important;height:874px!important;}";
  document.head.appendChild(s);
  var phone = document.querySelector(".phone");
  if (phone) {
    document.body.innerHTML = "";
    document.body.appendChild(phone);
  }
})();
