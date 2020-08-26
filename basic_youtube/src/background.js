const PATTERN = "youtube.com";


function test(tabId, changeInfo, tab)
    { 
        if(tab.url.includes(PATTERN) && "loading"==changeInfo.status)
        {   
            let currentUrl=tab.url.split(PATTERN);
            if("/"==currentUrl[1])
            {
                chrome.tabs.insertCSS(
                    tabId,
                    {
                        file:"/src/home_style.css",
                        runAt:"document_start"
                    });
                chrome.tabs.executeScript(
                    tabId,
                    {
                        file:"/src/content.js"
                    });
                
                   
            }
            else if(changeInfo.url && currentUrl[1].startsWith("/results"))
            {   

                chrome.tabs.reload(tabId);
            }
            else if(currentUrl[1].startsWith("/watch"))
            {
                chrome.tabs.insertCSS(
                    tabId,
                    {
                        file:"/src/video_style.css",
                        runAt:"document_start"
                    });
            }
        }
        
    }

chrome.tabs.onUpdated.addListener(test);
