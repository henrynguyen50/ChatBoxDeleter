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
  "methstreams.ing"
];

chrome.tabs.onCreated.addListener((newTab) => {
  if (newTab) {
    //need callback function as .get is an async function 
    chrome.tabs.get(newTab.openerTabId, (openerTab) => {

      const openerUrl = new URL(openerTab.url);
      const originalHostname = openerUrl.hostname;

      //for loop needed as searching for partial, if did .includes on whole array would not do partial
      for (let i = 0; i < STREAMING_SITES.length; i++) {
        
        const siteFromList = STREAMING_SITES[i];

        if (originalHostname.includes(siteFromList)) {
          chrome.tabs.remove(newTab.id);
          break;
        }
      }
    });
  }
});