//script to delete chat box
//classes
const chatBoxClasses = [
    
    ".w-full.h-auto.border-border\\/40.border-2.rounded-lg.drop-shadow-lg.p-2.relative", //streamedsu
    ".style-scope.yt-live-chat-renderer", //STREAMEast app
    ".stream-chat", //general ones that catch twitch and yt
    ".yt-live-chat-renderer",
    ".no-pm", //720pstream
    ".message-window",
    ".box", //daddylive
    //".bg-gray-900.p-2.h-96.verflow-y-scroll.rounded",//crackstreams
    ".live-chat-icon-container",
    ".chat-container", //for streamed.pk
    //any chat that loads in after use iframe to remove
    'iframe[src="https://chat.dailywrestling.cc:4343/?aew"]', 
    'iframe[src="https://chat.dailywrestling.cc:4343/?wwe"]', 
    'iframe[src^="https://chat.dailywrestling.cc:4343/"]', //catch all 
    'iframe[src="https://www2.cbox.ws/box/?boxid=2400909&boxtag=30q0rb&tid=1&tkey=5b7cdd27db70d81e"]',
    'iframe[src="https://st.chatango.com/h5/gz/r0610250550/id.html"]',
    'iframe[src="https://www.youtube.com/live_chat?v=1-K8pOUDDO4&embed_domain=the.streameast.app&dark_theme=1"]',

    '.message-cont'
]
//ids
const chatBoxIDs = [
    //'chat-col',
    'chat-messages',
    'chat-container'
    
]


function removeChat(attempt = 0) {
    let delay = 1000
    const maxRetries = 1000

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

