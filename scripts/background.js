const STREAMING_SITES = [
  "streamed.su",
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
  "ppvs.su"
];
//on new tab check if on one of sites needed to be an adblocker for
chrome.tabs.onCreated.addListener((newTab) => {
  if (newTab) {
    //need callback function as .get is an async function 
    chrome.tabs.get(newTab.openerTabId, (openerTab) => {

      const openerUrl = new URL(openerTab.url);
      const originalHostname = openerUrl.hostname;

      //for loop needed as searching for partial, if did .includes on whole array would not do partial
      for (let i = 0; i < STREAMING_SITES.length; i++) {
        
        //get the current site we are checking
        const siteFromList = STREAMING_SITES[i];

        //check if the opener tab's hostname contains the site from our list
        if (originalHostname.includes(siteFromList)) {
          chrome.tabs.remove(newTab.id);
          break;
        }
      }
    });
  }
});