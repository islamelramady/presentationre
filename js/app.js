/* ===== Peachtree Presentation Guide — V2 (Bilingual) ===== */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- i18n ---------- */
  var I18N = {
    ar: {
      dir: "rtl", lang: "ar", other: "English",
      "brand.sub": "دليل البرزنتيشن وتوزيع الأدوار",
      "nav.home": "الرئيسية",
      "nav.flow": "السير",
      "nav.team": "الفريق",
      "nav.slides": "الشرائح",
      "nav.present": "وضع التقديم",
      "hero.titleAr": "برنامج Peachtree المحاسبي",
      "hero.titleEn": "Computerized Accounting Software",
      "hero.subAr": "المميزات والمهام الخمس الأساسية",
      "hero.subEn": "Benefits and Core Tasks",
      "hero.desc": "صفحة واحدة مقسّمة بالكامل: كل متحدث يعرف شرايحه بالظبط، والكلمة اللي يقوله كلمة بكلمة، والجملة اللي يسلّم بيها للي بعده.",
      "cta.present": "ابدأ وضع التقديم",
      "cta.team": "شوف الفريق",
      "cta.download": "نزّل ملف البرزنتيشن",
      "flow.title": "سير البرزنتيشن",
      "flow.desc": "الترتيب من أول شريحة لآخر شريحة — كل متحدث له دوره ووقته.",
      "team.title": "الفريق والأدوار",
      "team.desc": "دوس على أي متحدث يشوف سكربته كامل: شرايحه، اللي يقوله بالظبط بالعربي والإنجليزي، وجملة التسليم.",
      "detail.back": "← رجوع للفريق",
      "slides.title": "خريطة الشرائح",
      "slides.desc": "الـ 13 شريحة وكل شريحة ومعاها صاحبها — دوس عليها تروح له.",
      "present.title": "وضع التقديم",
      "present.desc": "سكربت كبير + تايمر لكل متحدث. الأسهم للتنقل والمسافة للتشغيل/الإيقاف.",
      "stats.presenters": "متحدثين",
      "stats.slides": "شريحة",
      "stats.minutes": "دقيقة تقديراً",
      "labels.say": "قول بالظبط",
      "labels.slideContent": "محتوى الشريحة",
      "labels.tip": "نصيحة",
      "labels.note": "ملاحظة",
      "labels.slides": "شرائح",
      "labels.min": "دقيقة",
      "labels.handoff": "جملة التسليم — سلّم الدور لـ",
      "labels.endHandoff": "نهاية البرزنتيشن — افتح باب الأسئلة",
      "labels.script": "السكربت",
      "timer.play": "تشغيل",
      "timer.pause": "إيقاف",
      "timer.reset": "إعادة",
      "nav.prev": "السابق",
      "nav.next": "التالي"
    },
    en: {
      dir: "ltr", lang: "en", other: "العربية",
      "brand.sub": "Presentation guide & role split",
      "nav.home": "Home",
      "nav.flow": "Flow",
      "nav.team": "Team",
      "nav.slides": "Slides",
      "nav.present": "Present mode",
      "hero.titleAr": "Peachtree Accounting Software",
      "hero.titleEn": "Computerized Accounting Software",
      "hero.subAr": "Benefits and the five core tasks",
      "hero.subEn": "Benefits and Core Tasks",
      "hero.desc": "One page, fully split: every presenter knows their slides, exactly what to say in English and Arabic, and the handoff phrase to the next speaker.",
      "cta.present": "Start present mode",
      "cta.team": "See the team",
      "cta.download": "Download the slides",
      "flow.title": "Presentation flow",
      "flow.desc": "From the first slide to the last — each speaker has their role and their time.",
      "team.title": "Team & roles",
      "team.desc": "Tap any presenter to see their full script: slides, what to say in English and Arabic, and the handoff phrase.",
      "detail.back": "← Back to team",
      "slides.title": "Slide map",
      "slides.desc": "The 13 slides and their owners — tap a slide to jump to its presenter.",
      "present.title": "Present mode",
      "present.desc": "Big bilingual script + a timer per speaker. Arrow keys to move, space to play/pause.",
      "stats.presenters": "Speakers",
      "stats.slides": "Slides",
      "stats.minutes": "minutes total",
      "labels.say": "Say exactly",
      "labels.slideContent": "Slide content",
      "labels.tip": "Tip",
      "labels.note": "Note",
      "labels.slides": "Slides",
      "labels.min": "min",
      "labels.handoff": "Handoff phrase — hand it over to",
      "labels.endHandoff": "End of the presentation — invite questions",
      "labels.script": "Script",
      "timer.play": "Play",
      "timer.pause": "Pause",
      "timer.reset": "Reset",
      "nav.prev": "Previous",
      "nav.next": "Next"
    }
  };

  var lang = "ar";
  function t(key) { return I18N[lang][key]; }
  function L(obj) { return obj[lang]; }

  /* ---------- helpers ---------- */
  var presenters = DATA.presenters;
  var slides = DATA.slides;
  function byId(id) { return presenters.filter(function (p) { return p.id === id; })[0]; }
  function slideByNum(n) { return slides.filter(function (s) { return s.n === n; })[0]; }
  function scrollToEl(el, block) {
    if (el && typeof el.scrollIntoView === "function") el.scrollIntoView({ behavior: "smooth", block: block || "start" });
  }

  /* ---------- static i18n ---------- */
  function applyStaticI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = I18N[lang].dir;
    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    $$(".i18n-lang").forEach(function (el) {
      var target = el.getAttribute("data-lang");
      el.style.display = (target === lang) ? "" : "none";
    });
    $("#langBtn").textContent = t("other");
    $("#timerToggle").textContent = timerId ? t("timer.pause") : t("timer.play");
    $("#timerReset").textContent = t("timer.reset");
    $("#prevSeg").textContent = t("nav.prev");
    $("#nextSeg").textContent = t("nav.next");
  }

  /* ---------- HERO ---------- */
  function heroTags() {
    var tags = lang === "ar" ? DATA.tagsAr : DATA.tagsEn;
    $("#heroTags").innerHTML = tags.map(function (x) { return "<li>" + x + "</li>"; }).join("");
  }

  function heroStats() {
    var totalMin = Math.round(presenters.reduce(function (a, p) { return a + p.minutes; }, 0));
    var stats = [
      { b: presenters.length, s: t("stats.presenters") },
      { b: slides.length, s: t("stats.slides") },
      { b: "~" + totalMin, s: t("stats.minutes") }
    ];
    $("#heroStats").innerHTML = stats.map(function (st) {
      return '<div class="stat"><b>' + st.b + "</b><span>" + st.s + "</span></div>";
    }).join("");
  }

  /* ---------- FLOW ---------- */
  function renderFlow() {
    $("#flowStrip").innerHTML = presenters.map(function (p, i) {
      return (
        '<div class="flow-card" style="--accent:' + p.color + '">' +
        '<div class="flow-num">' + (i + 1) + "</div>" +
        "<b>" + (lang === "ar" ? p.nameAr : p.nameEn) + "</b>" +
        '<div class="who">' + (lang === "ar" ? p.roleAr : p.roleEn) + "</div>" +
        '<div class="min">' + p.slides.join(" + ") + " · " + p.minutes + " " + t("labels.min") + "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------- TEAM ---------- */
  function renderTeam() {
    $("#teamGrid").innerHTML = presenters.map(function (p, i) {
      return (
        '<button class="team-card" data-open="' + p.id + '" style="--accent:' + p.color + '">' +
        '<div class="team-top"><div class="avatar">' + p.initials + '</div>' +
        "<div><h3>" + p.nameAr + "</h3><div class=\"team-role\">" + p.roleAr + " · " + p.roleEn + "</div></div></div>" +
        '<div class="team-slides">' + p.slides.map(function (n) { return '<span class="chip">' + n + "</span>"; }).join("") + "</div>" +
        '<div class="team-meta"><span>' + (i + 1) + " · " + p.minutes + ' ' + t("labels.min") + '</span><span class="team-link">' + (lang === "ar" ? "شوف السكربت ←" : "Open script →") + "</span></div>" +
        "</button>"
      );
    }).join("");
    $$("#teamGrid .team-card").forEach(function (c) {
      c.addEventListener("click", function () { openDetail(c.getAttribute("data-open")); });
    });
  }

  /* ---------- DETAIL ---------- */
  function lineHTML(line) {
    return (
      '<div class="script-line"><div class="en">' + line.en + "</div>" +
      '<div class="ar">' + line.ar + "</div></div>"
    );
  }

  function slideBlockHTML(slide) {
    var p = byId(slide.owner);
    var points = slide.pointsEn.map(function (pt) { return "<li>" + pt + "</li>"; }).join("");
    var script = slide.say.map(lineHTML).join("");
    var note = lang === "ar" ? slide.noteAr : slide.noteEn;
    return (
      '<div class="slide-block">' +
      '<div class="slide-block-head"><div class="slide-num">' + slide.n + "</div><div>" +
      '<div class="kicker">' + slide.kicker + '</div><h3>' + slide.titleEn + "</h3></div></div>" +
      '<div class="slide-body">' +
      (slide.gistAr ? '<div class="slide-gist">' + slide.gistAr + "</div>" : "") +
      (slide.subtitleEn ? '<div class="slide-note"><b>' + (lang === "ar" ? "العنوان الفرعي:" : "Subtitle: ") + '</b> <span dir="ltr" style="display:inline-block">' + slide.subtitleEn + "</span></div>" : "") +
      "<div><div class=\"slide-points-title\">" + t("labels.slideContent") + '</div><ul class="slide-points">' + points + "</ul></div>" +
      "<div><div class=\"script-title\">" + t("labels.say") + '</div><div style="display:grid;gap:10px;margin-top:10px">' + script + "</div></div>" +
      '<div class="slide-note"><b>' + t("labels.note") + ":</b> " + note + "</div>" +
      "</div></div>"
    );
  }

  function handoffHTML(p) {
    if (!p.handoffTo) {
      return (
        '<div class="handoff-box"><h4>' + t("labels.endHandoff") + "</h4>" +
        '<div class="ho-text">' + p.handoffEn + '</div><div class="ho-text ar">' + p.handoffAr + "</div></div>"
      );
    }
    var next = byId(p.handoffTo);
    return (
      '<div class="handoff-box"><h4>' + t("labels.handoff") + " " + (lang === "ar" ? next.nameAr : next.nameEn) + "</h4>" +
      '<div class="ho-avatar"><span class="avatar" style="background:' + next.color + '">' + next.initials + "</span> " + (lang === "ar" ? next.nameAr : next.nameEn) + "</div>" +
      '<div class="ho-text">' + p.handoffEn + '</div><div class="ho-text ar">' + p.handoffAr + "</div></div>"
    );
  }

  function openDetail(id) {
    var p = byId(id);
    var body =
      '<div class="detail-hero"><div class="avatar">' + p.initials + "</div>" +
      "<div><h2>" + p.nameAr + ' <span style="font-size:15px;color:#b8c6da">' + p.nameEn + "</span></h2>" +
      '<div class="sub">' + p.roleAr + " · " + p.roleEn + "</div></div>" +
      '<div class="dh-meta"><span class="chip">' + t("labels.slides") + ": " + p.slides.join(", ") + '</span><span class="chip">' + p.minutes + " " + t("labels.min") + "</span></div></div>";

    p.slides.forEach(function (n) { body += slideBlockHTML(slideByNum(n)); });

    body += '<div class="slide-note" style="margin-bottom:18px"><b>' + t("labels.tip") + ":</b> " + (lang === "ar" ? p.tipAr : p.tipEn) + "</div>";
    body += handoffHTML(p);

    $("#detailBody").innerHTML = body;
    $("#detail").hidden = false;
    scrollToEl($("#detail"));
  }

  $("#backToTeam").addEventListener("click", function () {
    $("#detail").hidden = true;
    scrollToEl($("#team"));
  });

  /* ---------- SLIDES MAP ---------- */
  function renderSlidesMap() {
    $("#slidesGrid").innerHTML = slides.slice().sort(function (a, b) { return a.n - b.n; }).map(function (s) {
      var p = byId(s.owner);
      return (
        '<button class="slide-map-card" style="--accent:' + p.color + '" data-goto="' + s.owner + '">' +
        '<div class="slide-num">' + s.n + "</div><div><h4>" + s.titleEn + "</h4>" +
        '<div class="section-tag">' + s.kicker + '</div><div class="owner-name">' + p.nameAr + "</div></div></button>"
      );
    }).join("");
    $$("#slidesGrid .slide-map-card").forEach(function (c) {
      c.addEventListener("click", function () { openDetail(c.getAttribute("data-goto")); });
    });
  }

  /* ---------- PRESENT MODE ---------- */
  var cur = 0, timerId = null, elapsed = 0, scriptSize = 21;

  function fmt(sec) {
    var sign = sec < 0 ? "-" : "";
    sec = Math.abs(sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return sign + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function renderPresent() {
    var p = presenters[cur];
    $("#segIndex").textContent = (cur + 1) + " / " + presenters.length;
    $("#segName").textContent = (lang === "ar" ? p.nameAr : p.nameEn) + " — " + (lang === "ar" ? p.roleAr : p.roleEn);
    $("#segSlides").textContent = t("labels.slides") + ": " + p.slides.join(" + ");

    $("#presentFlow").innerHTML = presenters.map(function (sp, i) {
      var cls = i === cur ? "pf-item active" : (i < cur ? "pf-item done" : "pf-item");
      return '<button class="' + cls + '" data-seg="' + i + '"><b>' + (i + 1) + ". " + sp.nameAr + "</b><span>" + sp.roleAr + "</span></button>";
    }).join("");
    $$("#presentFlow .pf-item").forEach(function (el) {
      el.addEventListener("click", function () {
        cur = parseInt(el.getAttribute("data-seg"), 10);
        renderPresent();
      });
    });

    var html = "";
    p.slides.forEach(function (n) {
      var slide = slideByNum(n);
      html += '<div class="ps-slide-tag">' + n + " · " + slide.kicker + " — " + slide.titleEn + "</div>";
      slide.say.forEach(function (line) {
        var primary = lang === "ar" ? line.ar : line.en;
        var secondary = lang === "ar" ? line.en : line.ar;
        html += '<div class="ps-line"><span class="' + (lang === "ar" ? "ar" : "en") + '" style="direction:' + (lang === "ar" ? "rtl" : "ltr") + ';text-align:' + (lang === "ar" ? "right" : "left") + '">' + primary + "</span>" +
          '<span class="' + (lang === "ar" ? "en" : "ar") + '" style="direction:' + (lang === "ar" ? "ltr" : "rtl") + ';text-align:' + (lang === "ar" ? "left" : "right") + ";font-size:16px;color:#8fa3bd;display:block;margin-top:6px\">" + secondary + "</span></div>";
      });
    });
    var ps = $("#presentScript");
    ps.innerHTML = html;
    ps.style.setProperty("--script-size", scriptSize + "px");

    $("#presentHandoff").innerHTML =
      "<h4>" + t("labels.handoff") + (p.handoffTo ? " " + byId(p.handoffTo).nameAr : "") + "</h4>" +
      "<p>" + p.handoffEn + '</p><p class="ar">' + p.handoffAr + "</p>";

    resetTimer();
  }

  function resetTimer() {
    stopTimer();
    elapsed = 0;
    $("#timerDisplay").textContent = fmt(Math.round(presenters[cur].minutes * 60));
    $("#timerDisplay").classList.remove("over");
  }
  function startTimer() {
    if (timerId) return;
    var target = Math.round(presenters[cur].minutes * 60);
    $("#timerToggle").textContent = t("timer.pause");
    timerId = setInterval(function () {
      elapsed++;
      var remain = target - elapsed;
      var d = $("#timerDisplay");
      d.textContent = fmt(remain);
      if (remain <= 0) d.classList.add("over");
    }, 1000);
  }
  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    var b = $("#timerToggle");
    if (b) b.textContent = t("timer.play");
  }

  $("#timerToggle").addEventListener("click", function () { timerId ? stopTimer() : startTimer(); });
  $("#timerReset").addEventListener("click", resetTimer);

  function go(dir) {
    var n = cur + dir;
    if (n < 0 || n >= presenters.length) return;
    cur = n;
    renderPresent();
  }
  $("#nextSeg").addEventListener("click", function () { go(1); });
  $("#prevSeg").addEventListener("click", function () { go(-1); });

  function changeFont(delta) {
    scriptSize = Math.max(15, Math.min(34, scriptSize + delta));
    $("#presentScript").style.setProperty("--script-size", scriptSize + "px");
  }
  $("#fontPlus").addEventListener("click", function () { changeFont(2); });
  $("#fontMinus").addEventListener("click", function () { changeFont(-2); });

  document.addEventListener("keydown", function (e) {
    var box = $("#present").getBoundingClientRect();
    var visible = box.top < window.innerHeight * 0.6 && box.bottom > window.innerHeight * 0.3;
    if (!visible) return;
    if (e.key === "ArrowLeft") { go(1); e.preventDefault(); }
    else if (e.key === "ArrowRight") { go(-1); e.preventDefault(); }
    else if (e.key === " ") { timerId ? stopTimer() : startTimer(); e.preventDefault(); }
  });

  /* ---------- NAV & LANG ---------- */
  $("#navToggle").addEventListener("click", function () { $("#mainNav").classList.toggle("open"); });
  $$(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      $$(".nav-link").forEach(function (l) { l.classList.remove("active"); });
      link.classList.add("active");
      $("#mainNav").classList.remove("open");
    });
  });

  $("#langBtn").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    renderAll();
  });

  /* ---------- INIT ---------- */
  function renderAll() {
    applyStaticI18n();
    heroTags();
    heroStats();
    renderFlow();
    renderTeam();
    renderSlidesMap();
    renderPresent();
  }
  renderAll();
})();

