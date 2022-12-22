chrome.runtime.onInstalled.addListener(()=>{

    let context = {
        "id": "wiki",
        "title": "Search on Wiki",
        "contexts": ["selection"]
    }

    chrome.contextMenu.create(context);

    chrome.context.onClick.addListener(function(info, tab){
        console.log('info', info)
        let newURL = "https://en.wikipedia.org/wiki/"+info.selectionText;

        chrome.tabs.create({url: newURL})
    })
})