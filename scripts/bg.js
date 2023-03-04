chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("fired onUpdated")
    if (changeInfo.url) {
      // Do something when the URL changes
      console.log('tabId', tabId)
        console.log('changeInfo', changeInfo)
        console.log('tab', tab)
    } else {
        // Do something else
        console.log("no change")
    }

  });