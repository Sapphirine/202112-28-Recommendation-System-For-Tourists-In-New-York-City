/* EECS 6893 Group 28*/
var socket;
var current=0;
var total;
var chatWindowMessage = document.querySelector('.chat-window-message'),
    chatThread = document.querySelector('.chat-thread');
connect();
function connect() {
    var host = "ws://127.0.0.1:9996/" ;
    socket = new WebSocket(host);
    try {
        socket.onopen = function (msg) {
            document.getElementById("btnSend").disabled = "";
        };
        socket.onmessage = function (msg) {
        displayContent(msg.data);
        current=0;
        total=0;
    };

    socket.onerror = function (error) {alert("Error："+ error.name); };

    socket.onclose = function (msg) {
        document.getElementById("btnSend").disabled = true;
    };
}
catch (ex) {
    log(ex);
}

}
async function send() {
    var reg = /[~#^$@%&!*;?|^<>`=]/gi;
    var str = chatWindowMessage.value;
    var chatNewThread = document.createElement('li');
    var chatNewMessage;
    if(reg.test(str)){
        chatNewMessage = document.createTextNode(str);
        chatNewThread.appendChild(chatNewMessage);
        chatThread.appendChild(chatNewThread);
        chatThread.scrollTop = chatThread.scrollHeight;
        var chatErrorMessage = document.createTextNode("Sorry, your input is invalid");
        chatNewThread = document.createElement('li');
        chatNewThread.appendChild(chatErrorMessage);
    }
    else{
        chatNewMessage = document.createTextNode(str);
        chatNewThread.appendChild(chatNewMessage);
    }
    chatThread.appendChild(chatNewThread);
    chatThread.scrollTop = chatThread.scrollHeight;
    chatWindowMessage.value = '';
    if (!reg.test(str)){
        socket.send(str);
    }
}
async function displayContent(msg) {
    var messages = msg.split("\n");
    var chatNewThread = document.createElement('li');
    var chatNewMessage;
    var i;
    // var url;
    var next = false;
    for (i = 0; i<msg.length; i++){
        if (messages[i] !== undefined){
            if (next == false) {
                if (messages[i].includes('select')) {
                    next = true;
                }
                chatNewMessage = document.createTextNode(messages[i]);
                chatNewThread.appendChild(chatNewMessage);
                chatNewThread.appendChild(document.createElement("br"));
            }
            else{
                let choicesArray = messages[i].split('or')
                // var choices = document.getElementById('selection');
                for(let i = 0; i < choicesArray.length; i++) {
                    let opt = document.createElement('button');
                    opt.id = 'choice'
                    opt.innerHTML = choicesArray[i];
                    opt.value = choicesArray[i];
                    opt.offsetWidth = 15;
                    opt.addEventListener("click", function () {
                        chatWindowMessage.value = this.value;
                        send();
                    })
                    chatNewThread.appendChild(opt);
                    chatNewThread.appendChild(document.createElement("br"));
                }
                // chatNewThread.appendChild(choices);
                chatNewThread.appendChild(document.createElement("br"));
            }
        }
    }
    chatThread.appendChild(chatNewThread);
    chatThread.scrollTop = chatThread.scrollHeight;

}

chatWindowMessage.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        chatWindowMessage.value = chatWindowMessage.value.replace(/(\r\n|\n|\r)/gm, "");
        send();
    }
});

window.onbeforeunload = function () {
try {
    socket.close();
    socket = null;
}
catch (ex) {
}
};

