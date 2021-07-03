function copy() {
  console.log("permission-denied copy click");

  var copyText = document.getElementById("js-copy-data");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");
}

document.getElementById("js-copy-btn").addEventListener("click", copy);

function openSocketsPage() {
  console.log("permission-denied openSocketsPage click");

  chrome.runtime.sendMessage({ msg: "openSocketsPage" });
}

document
  .getElementById("js-open-sockets-page-btn")
  .addEventListener("click", openSocketsPage);
