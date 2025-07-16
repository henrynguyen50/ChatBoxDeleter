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

    if (newTab.url == '') {
      //most new tabs start as '', so wait for it to update to see if ad or not
      setTimeout(() => {
        chrome.tabs.get(newTab.id, (updatedTab) => {
          //just an empty tab
          if (updatedTab.url === 'chrome://newtab/' || updatedTab.url === 'chrome://newtab') {
            return;
          }
          checkAndBlock(updatedTab);
        });
      }, 100); 
      return;
    }
    //if URL is not empty check immediately usually doesnt happen but for edge cases
    checkAndBlock(newTab);
  }
});

function checkAndBlock(tab) {
  chrome.tabs.get(tab.openerTabId, (openerTab) => {
    const openerUrl = new URL(openerTab.url);
    const originalHostname = openerUrl.hostname;

    //need to loop through as searching for partials 
    for (let i = 0; i < STREAMING_SITES.length; i++) {
      const siteFromList = STREAMING_SITES[i];

      if (originalHostname.includes(siteFromList)) {
        chrome.tabs.remove(tab.id);
        break;
      }
    }
  });
}