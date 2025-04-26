//script to delete chat box

const chatBoxClasses = [
    ".w-full.h-auto.border-border\\/40.border-2.rounded-lg.drop-shadow-lg.p-2.relative", //streamedsu
    ".col-xl-3.chat-width.mb-2.mb-lg-0.pe-0", //ppvwtf
    ".stream-chat", //general ones that catch twitch and yt
    ".yt-live-chat-renderer",
    ".no-pm", //720pstream
    ".message-window",
    ".box", //daddylive
    ".bg-gray-900.p-2.h-96.verflow-y-scroll.rounded"//crackstreams

]



//loop through chatBoxClasses and delete 
chatBoxClasses.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(el => el.remove()); //remove each element
})