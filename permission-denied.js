function copy() {
  var copyText = document.getElementById("js-copy-data");
  console.log(copyText);

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");
}

document.getElementById("js-copy-btn").addEventListener("click", copy);
