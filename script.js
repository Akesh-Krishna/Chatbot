document.addEventListener('DOMContentLoaded', function () {
    // Show initial bot message
    const initialBotMessage = "Hi, I'm Aisha, your WMA AI Assistant. How can I assist you today?";
    animateBotTyping(initialBotMessage, 'bot-message');
  
    document.getElementById('send-button').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Add the event listener for Main Menu Button
    document.getElementById('mainMenuButton').addEventListener('click', toggleTiles);

    // Add event listeners for each tile
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
      tile.addEventListener('click', handleTileClick);
    });
  });

  function animateBotTyping(messageText, messageClass) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = createBotMessageElement(messageText, messageClass);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const messageText = inputField.value.trim();
  
    if (messageText !== '') {
      addMessageToChat(messageText, 'user-message');
      inputField.value = '';
  
      // Simulate AI response
      setTimeout(() => {
        const botResponse = `AI Response to: ${messageText}`;
        animateBotTyping(botResponse, 'bot-message');
      }, 1000);
    }
  }

  function createBotMessageElement(messageText, messageClass) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
  
    const botImage = document.createElement('img');
    botImage.src = "./images/WMAAssistant.jpg"; // Ensure the path is correct
    botImage.classList.add('bot-image');
  
    const textElement = document.createElement('div');
    textElement.textContent = messageText;
  
    messageElement.appendChild(botImage);
    messageElement.appendChild(textElement);
  
    return messageElement;
  }

  function addMessageToChat(messageText, messageClass) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
    messageElement.textContent = messageText;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function toggleTiles() {
    const tilesContainer = document.getElementById("tilesContainer");
    // Toggle the visibility of the tiles
    if (tilesContainer.style.display === "none" || tilesContainer.style.display === "") {
      tilesContainer.style.display = "grid";
    } else {
      tilesContainer.style.display = "none";
    }
  }

  function handleTileClick(event) {
    // Hide all tiles
    document.getElementById('tilesContainer').style.display = 'none';

    // Get the text of the clicked tile
    const tileText = event.target.textContent.trim();

    // Show chatbot response
    setTimeout(() => {
      animateBotTyping(`Please enter the Policy Number for ${tileText}`, 'bot-message');
    }, 500);
  }
