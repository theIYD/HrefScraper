//Start
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("myBtn").addEventListener("click", click);
});

	//On Click
	function click(e) {
		console.log(e);
	  chrome.tabs.executeScript(null, {file: "assets/script.js"});
	  window.close();
	}
