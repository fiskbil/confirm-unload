var registerEvent = window.attachEvent || window.addEventListener;
var unloadEvent = window.attachEvent ? 'onbeforeunload' : 'beforeunload';

function confirmLeave(event) {
	// Don't confirm when there's no gradio app. Happens when the UI (re)loads.
	elements = document.getElementsByTagName("gradio-app");
	if (elements.length > 0) {
		var msg = 'Are you sure to leave the page?';
		(event || window.event).returnValue = msg;
		return msg;
	}
}

registerEvent(unloadEvent, confirmLeave);
