chrome.runtime.onInstalled.addListener(()=>{

    let contextMenuItem = {
        "id": "wiki",
        "title": "Search on Wiki",
        "contexts": ["selection"]
    }

    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.onClicked.addListener(function(info, tab){
      
        let newURL = "https://en.wikipedia.org/wiki/"+info.selectionText;

        chrome.tabs.create({url: newURL})
        console.log('info', info)
    })
})