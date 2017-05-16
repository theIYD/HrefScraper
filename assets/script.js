//Grab all the hrefs on the current page
var y = [], linkVar = document.links;
for(var i=0; i<linkVar.length; i++) {
  y.push(linkVar[i].href);
}

//Paste those hrefs into a text document and download that file.
function downloadAllHref(filename, text) {
    var x = document.createElement('a');
    x.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    x.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('mouseevents');
        event.initEvent('click', true, true);
        x.dispatchEvent(event);
    }
    else {
        x.click();
    }
}

//Call
downloadAllHref('links.txt', y);