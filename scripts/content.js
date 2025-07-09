//script to delete chat box
//classes
const chatBoxClasses = [
    ".w-full.h-auto.border-border\\/40.border-2.rounded-lg.drop-shadow-lg.p-2.relative", //streamedsu
    ".style-scope.yt-live-chat-renderer", //STREAMEast app
    ".col-xl-3.chat-width.mb-2.mb-lg-0.pe-0", //ppvwtf
    ".stream-chat", //general ones that catch twitch and yt
    ".yt-live-chat-renderer",
    ".no-pm", //720pstream
    ".message-window",
    ".box", //daddylive
    ".bg-gray-900.p-2.h-96.verflow-y-scroll.rounded"//crackstreams

]
//divs
const chatBoxIDs = [
    "chat-col",
    "chat-messages",
    "testing",
    "iframeHolder"
]


function removeChat(attempt = 0) {
    let delay = 1000
    const maxRetries = 5
    chatBoxClasses.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(el => el.remove()); 
    })

    chatBoxIDs.forEach(id => {
    const elements = document.getElementById(id);
    if(elements) elements.remove();
    })

    if(attempt < maxRetries) {
        delay = delay * (2 ** attempt); //exponential dropoff
        setTimeout(() => { removeChat(attempt + 1), delay});
    }

}

removeChat();

