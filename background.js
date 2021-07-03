function clickButton() {
  document.querySelector("#sockets-view-close-idle-button").click();
  document.querySelector("#sockets-view-flush-button").click();
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function openSocketsPage() {
  const tab = await getCurrentTab();
  currentTab = tab;

  chrome.tabs.create(
    { url: "chrome://net-internals/#sockets" },
    function (tab) {
      console.log("open chrome://net-internals/#sockets", { tab });
      createdTab = tab;
    }
  );
}

let createdTab;
let currentTab;

chrome.action.onClicked.addListener(openSocketsPage);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("onMessage", { request });

  if (request.msg == "openSocketsPage") openSocketsPage();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("tab updated", { tabId, changeInfo, tab, createdTab });

  if (
    createdTab &&
    tabId === createdTab.id &&
    changeInfo.status == "complete" &&
    tab.active
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        function: clickButton,
      })
      .then(function () {
        chrome.action.getPopup({}).then(function (popup) {
          console.log("check popup", { popup });
          if (popup !== "") {
            chrome.action.setPopup({ popup: "" });
          }
        });
        chrome.tabs.remove(createdTab.id);
        chrome.tabs.update(currentTab.id, { selected: true });
      })
      .catch(function (error) {
        console.error(error);
        chrome.action.setPopup({ popup: "permission-denied.html" });
      });
  }
});
