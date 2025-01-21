document.addEventListener('DOMContentLoaded', function () {
  const initialBotMessage = "Hello, I'm your WMA AI Assistant! I can help you manage your wealth-related tasks and transactions. How can I assist you today?";
  animateBotTyping(initialBotMessage, 'bot-message');

  document.getElementById('send-button').addEventListener('click', sendMessage);
  document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});

function animateBotTyping(messageText, messageClass) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', messageClass);
  chatBox.appendChild(messageElement);

  // Simulate typing effect
  const words = messageText.split(' ');
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < words.length) {
      messageElement.textContent += words[i] + ' ';
      chatBox.scrollTop = chatBox.scrollHeight;
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 150);
}

function sendMessage() {
  const inputField = document.getElementById('chat-input');
  const messageText = inputField.value.trim();

  if (messageText !== '') {
    addMessageToChat(messageText, 'user-message');
    inputField.value = '';

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);
      addMessageToChat(botResponse, 'bot-message', true);
    }, 1000);
  }
}

function addMessageToChat(messageText, messageClass, isBotMessage = false) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', messageClass);

  if (isBotMessage) {
    const botImageContainer = document.getElementById('bot-image');
    const botImage = document.createElement('img');
    botImage.src = "./images/WMAAssistant.png"; // Ensure the path is correct
    botImage.classList.add('bot-image');
    botImageContainer.innerHTML = ''; // Clear previous image if any
    botImageContainer.appendChild(botImage);
  }

  const textElement = document.createElement('div');
  textElement.textContent = messageText;
  messageElement.appendChild(textElement);

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userInput) {
  // Basic logic to respond to user queries
  if (userInput.toLowerCase().includes('help')) {
    return "I can assist you with checking your policy details, managing transactions, or answering wealth management queries.";
  }
  return `You said: ${userInput}. How else can I assist you?`;
}
