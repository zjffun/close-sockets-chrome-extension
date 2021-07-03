customElements.define(
  "w-tabs",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["active-key"];
    }

    constructor() {
      super();
      this.tabPaneEls = Array.from(this.querySelectorAll("w-tab-pane"));
      this.navItemEls = [];

      this.setStyle();
      this.setNav();
    }

    updateActiveKey() {
      const activeKey = this.getAttribute("active-key");

      this.navItemEls.forEach((navItemEl, i) => {
        if (navItemEl.wTabKey !== activeKey) {
          navItemEl.classList.remove("active");
          this.tabPaneEls[i].hidden = true;
          return;
        }

        navItemEl.classList.add("active");
        this.tabPaneEls[i].hidden = false;
      });
    }

    setNav() {
      // nav
      const navEl = document.createElement("div");
      this.prepend(navEl);
      navEl.classList.add("w-tab__nav");
      navEl.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("w-tab__nav__item")) {
          this.setAttribute("active-key", target.wTabKey);
        }
      });

      // nav item
      this.tabPaneEls.forEach((tabPaneEl, i) => {
        const navItemText = tabPaneEl.getAttribute("tab") || `w-tab-pane${i}`;
        const navItemKey = tabPaneEl.getAttribute("key") || `w-tab-pane${i}`;
        const navItemEl = navEl.appendChild(document.createElement("div"));
        navItemEl.innerText = navItemText;
        navItemEl.classList.add("w-tab__nav__item");
        navItemEl.wTabKey = navItemKey;
        this.navItemEls.push(navItemEl);
      });
    }

    setStyle() {
      const styleEl = this.appendChild(document.createElement("style"));
      styleEl.textContent = `
        .w-tab__nav {
          display: flex;
        }
        .w-tab__nav__item {
          cursor: pointer;
          margin-right: 0.5em;
          line-height: 1.5;
        }
        .w-tab__nav__item.active,
        .w-tab__nav__item:hover {
          color: #1890ff;
        }
        .w-tab__nav__item:last-child {
          margin-right: 0;
        }
      `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "active-key") {
        this.updateActiveKey();
      }
    }
  }
);

function copy() {
  console.log("permission-denied copy click");

  var copyText = document.getElementById("js-copy-data");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");
}

function openSocketsPage() {
  console.log("permission-denied openSocketsPage click");

  chrome.runtime.sendMessage({ msg: "openSocketsPage" });
}

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("js-copy-btn")) {
    copy();
    return;
  }

  if (target.classList.contains("js-open-sockets-page-btn")) {
    openSocketsPage();
    return;
  }
});
