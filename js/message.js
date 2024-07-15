// Example JavaScript for message functionality
document.addEventListener('DOMContentLoaded', function() {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    // Function to send a message
    function sendMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `
            <div class="avatar">
                <img src="images/avatar.jpg" alt="User Avatar">
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="timestamp">${getCurrentTime()}</span>
            </div>`;
        chatMessages.appendChild(messageDiv);
        scrollToBottom(chatMessages);

        // Simulate receiving a response after a delay
        setTimeout(() => {
            receiveMessage('Hello! How can I help you?');
        }, 1000); // Example delay
    }

    // Function to receive a message
    function receiveMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'received');
        messageDiv.innerHTML = `
            <div class="avatar">
                <img src="images/friend1.jpg" alt="Friend Avatar">
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="timestamp">${getCurrentTime()}</span>
            </div>`;
        chatMessages.appendChild(messageDiv);
        scrollToBottom(chatMessages);
    }

    // Function to scroll to the bottom of chat container
    function scrollToBottom(element) {
        element.scrollTop = element.scrollHeight;
    }

    // Function to get current time formatted as HH:MM
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Send message event listener
    sendMessageBtn.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            sendMessage(messageText);
            messageInput.value = '';
        }
    });

    // Example initial messages
    receiveMessage('Welcome to Myntra messaging!');
    setTimeout(() => {
        receiveMessage('Check out our latest collections.');
    }, 2000); // Example delay

    // Functionality to add friends dynamically (replace with actual data)
    const friendList = document.getElementById('friendList');
    function addFriend(name, imageUrl) {
        const friendItem = document.createElement('li');
        friendItem.classList.add('friend');
        friendItem.innerHTML = `
            <img src="${imageUrl}" alt="${name} Image">
            <p class="friend-name">${name}</p>`;
        friendList.appendChild(friendItem);
    }

    // Example friends (simulate adding friends dynamically)
    addFriend('John Doe', 'images/friend1.jpg');
    addFriend('Emily Smith', 'images/friend2.jpg');

    // Functionality to share products dynamically (replace with actual data)
    const sharedProducts = document.getElementById('sharedProducts');
    function shareProduct(productName, imageUrl) {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <img src="${imageUrl}" alt="${productName} Image">
            <p>${productName}</p>`;
        sharedProducts.appendChild(productItem);
    }

    // Example shared products (simulate adding products dynamically)
    shareProduct('Trendy Dress', 'images/product1.jpg');
    shareProduct('Stylish Shoes', 'images/product2.jpg');

    // Functionality to recommend products dynamically (replace with actual data)
    const recommendations = document.getElementById('recommendations');
    function recommendProduct(productName, imageUrl) {
        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation');
        recommendationItem.innerHTML = `
            <img src="${imageUrl}" alt="${productName} Image">
            <p>${productName}</p>`;
        recommendations.appendChild(recommendationItem);
    }

    // Example recommendations (simulate adding recommendations dynamically)
    recommendProduct('Fashionable Glasses', 'images/recommended-product1.jpg');
    recommendProduct('Casual T-shirt', 'images/recommended-product2.jpg');
});

