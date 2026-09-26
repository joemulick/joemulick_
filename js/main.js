/* =========================================================
   Joe Mulick — portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header shadow on scroll ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* =========================================================
     WORK GALLERY
     ---------------------------------------------------------
     To use a REAL screenshot instead of a CSS mockup, set the
     item's `image` to a path (e.g. "img/welcome-email.png").
     When `image` is set it is used automatically; otherwise the
     inline `preview` HTML mockup is shown.
     ========================================================= */

  var CHANNELS = {
    email:   { label: "Email",        cls: "channel-email" },
    sms:     { label: "SMS",          cls: "channel-sms" },
    push:    { label: "Push",         cls: "channel-push" },
    landing: { label: "Landing page", cls: "channel-landing" }
  };

  // NOTE: These are illustrative samples with placeholder branding ("Marlow Goods").
  // Swap the copy, metrics, and screenshots for your real work.
  var WORK = [
    {
      id: "welcome",
      channel: "email",
      typeLabel: "Welcome email",
      title: "Welcome series — Email 1",
      blurb: "First-touch onboarding email that sets expectations and drives the first purchase.",
      desc: "The opening message of a 4-part onboarding journey. Establishes the brand voice, previews the value of membership, and moves the new subscriber toward an activating first order with a single, unmissable call to action.",
      meta: { Role: "Strategy, copy, HTML, QA", Journey: "Onboarding · Activation", Platform: "Braze", Result: "First-order conversion lift" },
      preview:
        '<div class="mock-email">' +
          '<div class="me-bar"><div class="me-avatar">M</div><div><div class="me-from">Marlow Goods</div><div class="me-sub">Welcome — your first box is 40% off 👋</div></div></div>' +
          '<div class="me-hero"><div class="eyebrow">Welcome series · 1 of 4</div><h4>Good to have you here.</h4></div>' +
          '<div class="me-content"><div class="me-line w90"></div><div class="me-line w80"></div><div class="me-line w60"></div><span class="me-btn">Claim your welcome offer</span></div>' +
        '</div>'
    },
    {
      id: "cart-sms",
      channel: "sms",
      typeLabel: "SMS",
      title: "Cart recovery — SMS",
      blurb: "Time-boxed text nudge that recovers abandoned carts before the offer expires.",
      desc: "A two-message recovery flow triggered on cart abandonment. Leads with the saved cart, adds urgency with an expiring shipping perk, and keeps compliance clean with a clear opt-out.",
      meta: { Role: "Flow logic, copy, QA", Journey: "Conversion · Recovery", Platform: "Braze", Result: "Recovered checkout revenue" },
      preview:
        '<div class="mock-phone"><div class="mp-screen"><div class="mp-notch"></div>' +
          '<div class="mp-top">Marlow Goods</div>' +
          '<div class="mp-thread">' +
            '<div class="bubble them">We saved your cart! Free shipping ends tonight 🛒</div>' +
            '<div class="bubble you">Pick up where you left off: <span class="link">mrlw.co/cart</span></div>' +
            '<div class="bubble them">Reply STOP to opt out</div>' +
          '</div>' +
        '</div></div>'
    },
    {
      id: "winback",
      channel: "email",
      typeLabel: "Winback email",
      title: "Winback offer — churned customers",
      blurb: "Reactivation email that brought lapsed customers back while protecting margin.",
      desc: "Part of a reactivation program that beat its goals every week during a 16-week coverage stretch — while cutting coupon spend by more than 30%. The offer is tiered by how long the customer has been away, so discount depth matches likelihood to return.",
      meta: { Role: "Strategy, segmentation, copy", Journey: "Winback · Reactivation", Platform: "Braze", Result: "Goals beat 16/16 weeks · −30% coupon spend" },
      preview:
        '<div class="mock-email">' +
          '<div class="me-bar"><div class="me-avatar">M</div><div><div class="me-from">Marlow Goods</div><div class="me-sub">We miss you — here\'s 25% to come back</div></div></div>' +
          '<div class="me-hero" style="background:linear-gradient(135deg,#5b57ec,#2925b4)"><div class="eyebrow">Winback · Tier 2</div><h4>It\'s been a while.</h4></div>' +
          '<div class="me-content"><div class="me-line w80"></div><div class="me-line w90"></div><div class="me-line w60"></div><span class="me-btn">Restart my subscription</span></div>' +
        '</div>'
    },
    {
      id: "premium",
      channel: "email",
      typeLabel: "Product launch email",
      title: "Premium tier launch",
      blurb: "Launch announcement built on new dynamic modules and a fresh color system.",
      desc: "Primary owner of the email library during a premium-tier rollout. Introduced dynamic color schemes and reusable custom modules so the whole program could adopt the new look without rebuilding every template — and revised the critical transactional emails to match.",
      meta: { Role: "Email library owner, build", Journey: "Cross-sell · Upgrade", Platform: "Braze", Result: "Reusable module system shipped" },
      preview:
        '<div class="mock-email">' +
          '<div class="me-bar"><div class="me-avatar" style="background:#fbeede;color:#d9871f">+</div><div><div class="me-from">Marlow Goods</div><div class="me-sub">Introducing Marlow+ — more of what you love</div></div></div>' +
          '<div class="me-hero" style="background:linear-gradient(135deg,#d9871f,#b56a12)"><div class="eyebrow">Now available</div><h4>Meet Marlow+</h4></div>' +
          '<div class="me-content"><div class="me-line w90"></div><div class="me-line w80"></div><div style="display:flex;gap:.5rem;margin:.6rem 0"><div style="flex:1;height:34px;border-radius:7px;background:#f2f3f5"></div><div style="flex:1;height:34px;border-radius:7px;background:#f2f3f5"></div></div><span class="me-btn" style="background:#d9871f">Upgrade to Marlow+</span></div>' +
        '</div>'
    },
    {
      id: "loyalty-lp",
      channel: "landing",
      typeLabel: "Landing page",
      title: "Loyalty program landing page",
      blurb: "Enrollment page for an automated loyalty program that lifted LTV and cut churn.",
      desc: "The sign-up destination for a loyalty program built entirely inside the CRM lifecycle — no product-team resources required. The page explains how points work, sets the value exchange up front, and makes joining a single decision.",
      meta: { Role: "Concept, copy, layout", Journey: "Retention · Loyalty", Platform: "CRM lifecycle", Result: "Higher LTV · lower churn" },
      preview:
        '<div class="mock-browser">' +
          '<div class="mb-bar"><div class="mb-dots"><i></i><i></i><i></i></div><div class="mb-url">marlowgoods.com/rewards</div></div>' +
          '<div class="mb-page"><h4>Every order earns you more.</h4><p>Join Marlow Rewards and turn each box into points toward free goods.</p><span class="mb-cta">Join for free</span><div class="mb-row"><div class="mb-tile"></div><div class="mb-tile"></div><div class="mb-tile"></div></div></div>' +
        '</div>'
    },
    {
      id: "cart-push",
      channel: "push",
      typeLabel: "Push notification",
      title: "Abandoned cart — push",
      blurb: "Lock-screen nudge that reopens the app straight to the unfinished cart.",
      desc: "A push companion to the cart-recovery flow, timed to fire after the email but before the SMS so channels reinforce rather than overlap. Deep-links directly to checkout to remove every extra tap.",
      meta: { Role: "Flow logic, copy", Journey: "Conversion · Recovery", Platform: "Braze", Result: "Faster checkout completion" },
      preview:
        '<div style="width:100%"><div class="mock-push"><div class="pn-icon">↑</div><div class="pn-body"><div class="pn-app">Marlow · now</div><h4>You left something behind</h4><p>Your box is waiting — finish it in one tap.</p></div></div></div>'
    },
    {
      id: "inapp",
      channel: "push",
      typeLabel: "In-app message",
      title: "In-app upsell",
      blurb: "Contextual in-app card that surfaces the right add-on at the right moment.",
      desc: "An in-app message triggered by browsing behavior, shown as a bottom sheet so it never blocks the task at hand. Personalized to the category the customer was viewing, with a single clear action.",
      meta: { Role: "Targeting, copy, QA", Journey: "Cross-sell", Platform: "Braze", Result: "Incremental attach rate" },
      preview:
        '<div class="mock-phone"><div class="mp-screen"><div class="mp-notch"></div>' +
          '<div class="mp-app"><div class="app-head"><div class="app-pill"></div><div class="app-pill s"></div></div>' +
            '<div class="inapp-card"><div class="tag">Just for you</div><h4>Add fresh coffee to your box?</h4><p>Members save 15% when you bundle it with this week\'s order.</p><span class="ia-btn">Add to my box</span></div>' +
          '</div>' +
        '</div></div>'
    },
    {
      id: "delivery-sms",
      channel: "sms",
      typeLabel: "Transactional SMS",
      title: "Delivery update — SMS",
      blurb: "Transactional text that keeps customers informed and reduces support tickets.",
      desc: "A transactional message in the fulfillment journey. Confirms the delivery window, links to live tracking, and gives a self-serve way to make changes — cutting inbound support volume during peak.",
      meta: { Role: "Copy, QA, compliance", Journey: "Post-purchase", Platform: "Braze", Result: "Fewer 'where is my order' tickets" },
      preview:
        '<div class="mock-phone"><div class="mp-screen"><div class="mp-notch"></div>' +
          '<div class="mp-top">Marlow Goods</div>' +
          '<div class="mp-thread">' +
            '<div class="bubble them">📦 Your box ships today and arrives Thursday.</div>' +
            '<div class="bubble them">Track it live: <span class="link">mrlw.co/track</span></div>' +
            '<div class="bubble you">Need to change your delivery day?</div>' +
          '</div>' +
        '</div></div>'
    },
    {
      id: "referral-lp",
      channel: "landing",
      typeLabel: "Landing page",
      title: "Referral landing page",
      blurb: "Give-and-get referral page that turns happy customers into a growth channel.",
      desc: "The shareable destination behind a referral program. Frames the give-and-get clearly, pre-fills the advocate's code, and keeps the friend's first step to a single tap.",
      meta: { Role: "Concept, copy, layout", Journey: "Acquisition · Advocacy", Platform: "CRM lifecycle", Result: "New referred customers" },
      preview:
        '<div class="mock-browser">' +
          '<div class="mb-bar"><div class="mb-dots"><i></i><i></i><i></i></div><div class="mb-url">marlowgoods.com/refer</div></div>' +
          '<div class="mb-page"><h4>Give $20, get $20.</h4><p>Share Marlow with a friend. They save on their first box, you get credit on your next.</p><span class="mb-cta">Share my link</span><div class="mb-row"><div class="mb-tile"></div><div class="mb-tile"></div></div></div>' +
        '</div>'
    }
  ];

  var grid = document.getElementById("workGrid");
  if (grid) {
    renderCards(WORK);
    setupFilters();
    setupModal();
  }

  function cardPreview(item) {
    if (item.image) {
      return '<img src="' + item.image + '" alt="' + escapeAttr(item.title) + '" loading="lazy" />';
    }
    return item.preview || "";
  }

  function renderCards(items) {
    grid.innerHTML = items.map(function (item) {
      var ch = CHANNELS[item.channel];
      var journey = item.meta && item.meta.Journey
        ? '<span class="wc-journey"><span class="j-dot ' + ch.cls + '"></span>' + escapeHtml(item.meta.Journey) + '</span>'
        : "";
      return (
        '<button class="work-card" data-channel="' + item.channel + '" data-id="' + item.id + '" aria-label="View ' + escapeAttr(item.title) + '">' +
          '<div class="wc-preview">' +
            '<span class="wc-tag ' + ch.cls + '">' + escapeHtml(item.typeLabel) + '</span>' +
            cardPreview(item) +
          '</div>' +
          '<div class="wc-body">' +
            '<h3>' + escapeHtml(item.title) + '</h3>' +
            '<p>' + escapeHtml(item.blurb) + '</p>' +
            journey +
          '</div>' +
        '</button>'
      );
    }).join("");
  }

  function setupFilters() {
    var filterBar = document.getElementById("filters");
    var empty = document.getElementById("workEmpty");
    if (!filterBar) return;

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;

      filterBar.querySelectorAll(".filter").forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      var filter = btn.getAttribute("data-filter");
      var visible = 0;
      grid.querySelectorAll(".work-card").forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-channel") === filter;
        card.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });
      empty.classList.toggle("show", visible === 0);
    });
  }

  /* ---- Modal ---- */
  function setupModal() {
    var modal = document.getElementById("modal");
    var previewBox = document.getElementById("modalPreview");
    var tagEl = document.getElementById("modalTag");
    var titleEl = document.getElementById("modalTitle");
    var descEl = document.getElementById("modalDesc");
    var metaEl = document.getElementById("modalMeta");
    var lastFocused = null;

    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".work-card");
      if (!card) return;
      var item = WORK.find(function (w) { return w.id === card.getAttribute("data-id"); });
      if (item) openModal(item, card);
    });

    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });

    function openModal(item, trigger) {
      lastFocused = trigger;
      var ch = CHANNELS[item.channel];
      previewBox.innerHTML = cardPreview(item);
      tagEl.textContent = item.typeLabel;
      tagEl.className = "tag " + ch.cls;
      titleEl.textContent = item.title;
      descEl.textContent = item.desc;
      metaEl.innerHTML = Object.keys(item.meta || {}).map(function (k) {
        return "<dt>" + escapeHtml(k) + "</dt><dd>" + escapeHtml(item.meta[k]) + "</dd>";
      }).join("");
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modal.querySelector(".modal-close").focus();
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }
  }

  /* ---- helpers ---- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escapeAttr(s) { return escapeHtml(s); }
})();
