const STREAMING_SITES = [
  "streamed.su",
  "streamed.st",
  "streamed.pk",
  "the.streameast.app",
  "totalsportek100.com",
  "streameast.gd",
  "1stream.eu",
  "crackstreams.cx",
  "streameasttv.net",
  "720pstream.nu",
  "daddylive.mp",
  "ppv.wtf",
  "ppv.to",
  "ppvs.su",
  "techradan.com",
  "visualnewshub.com",
  "dailypudding.com",
  "methstreams.ing",
  "streami.su",
];



chrome.tabs.onCreated.addListener((newTab) => {
  if (newTab) {
    if(newTab.url == ''){
      setTimeout(() => {
          //need to get the new tabs information after timeout, have to use id in parameter
          chrome.tabs.get(newTab.id, (updatedTab) => {
          if (updatedTab.url == 'chrome://newtab/' || updatedTab.url == 'chrome://newtab'){
            return;
          }
          removeTab(updatedTab)
        })
      },100)
    }else{
    removeTab(updatedTab)
    }
  }
});

function removeTab(tab) {
    chrome.tabs.get(tab.openerTabId, (openerTab) => {

      const openerUrl = new URL(openerTab.url);
      
      const originalHostname = openerUrl.hostname;

      //for loop needed as searching for partial, if did .includes on whole array would not do partial
      for (let i = 0; i < STREAMING_SITES.length; i++) {
        
        const siteFromList = STREAMING_SITES[i];

        if (originalHostname.includes(siteFromList)) {
          chrome.tabs.remove(tab.id);
          break;
        }
      }
    });
  }
