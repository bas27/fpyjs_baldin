const widget = document.querySelector('.chat-widget')
const msg = document.getElementById('chat-widget__input');
const chat = document.getElementById('chat-widget__messages')

widget.addEventListener('click', () => {
    if (!widget.className.includes('chat-widget_active')) {
        widget.classList.add('chat-widget_active')
    }
})

function getTime() {
    let time = new Date();
    return time.toLocaleTimeString();
}

function getAnswer() {
    answers = [
        "Добрый день!", 
        "Вы еще здесь?", 
        "У нас все хорошо ;)"
    ]

    index = Math.floor(Math.random() * answers.length);

    return answers[index];
}

// function scroll() {
//     document.getElementById('chat-widget__messages').scrollTop = 
//     document.getElementById('chat-widget__messages').scrollHeight;
//     };

function scroll() {
    chat.scrollIntoView({block: "end"})
}

function message() {
    
    chat.innerHTML += `
    Сообщение от клиента
        <div class="message message_client">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${msg.value}</div>
        </div>
    `;
  }

function robot() {

    chat.innerHTML += `
    Сообщение от робота
        <div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${getAnswer()}</div>
        </div>
    `;
}


msg.addEventListener('keypress', (e) => {
    if (e.key == 'Enter' && msg.value != '') {
        message();
        msg.value = "";
        robot()
        scroll()

    }
})