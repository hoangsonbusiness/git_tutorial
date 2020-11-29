function onWindowLoad() {

	//alert("abc")
	var content = DOMtoString(document)
	alert(content)
  var content = document.querySelector('#content');
    
  chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    content.innerText = request.source;
	
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	chrome.browserAction.setBadgeText({text: request.source });
 });
  }
});

  
}

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
}

window.onload = onWindowLoad;