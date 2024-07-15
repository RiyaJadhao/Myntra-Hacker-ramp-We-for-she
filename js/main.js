document.addEventListener('DOMContentLoaded', () => {
    // Dummy friend data
    const friends = [
        { id: 1, name: 'John Doe', profilePic: 'profile1.jpg' },
        { id: 2, name: 'Jane Smith', profilePic: 'profile2.jpg' },
        { id: 3, name: 'Alice Johnson', profilePic: 'profile3.jpg' }
    ];

    const products = [
        { id: 1, name: 'Product 1', image: 'product1.jpg', details: 'Details of Product 1' },
        { id: 2, name: 'Product 2', image: 'product2.jpg', details: 'Details of Product 2' },
        { id: 3, name: 'Product 3', image: 'product3.jpg', details: 'Details of Product 3' }
    ];

    // Render friends
    const renderFriends = () => {
        const friendList = document.getElementById('friend-list');
        friendList.innerHTML = '';
        friends.forEach(friend => {
            const friendItem = document.createElement('li');
            friendItem.innerHTML = `
                <img src="images/${friend.profilePic}" alt="${friend.name}" width="50" class="friend-pic">
                <span>${friend.name}</span>
                <button class="share-btn" onclick="shareWithFriend(${friend.id})">Share</button>
            `;
            friendList.appendChild(friendItem);
        });
    };

    // Add new friend
    document.getElementById('add-friend-btn').addEventListener('click', () => {
        const friendName = prompt('Enter friend name:');
        const profilePic = prompt('Enter friend profile picture URL:');
        if (friendName && profilePic) {
            const newFriend = { id: friends.length + 1, name: friendName, profilePic: profilePic };
            friends.push(newFriend);
            renderFriends();
        }
    });

    // Share product with friend
    window.shareWithFriend = (friendId) => {
        const friend = friends.find(f => f.id === friendId);
        const productName = prompt(`Enter product name to share with ${friend.name}:`);
        if (productName) {
            alert(`Shared ${productName} with ${friend.name}!`);
        }
    };

    // Render products
    const renderProducts = () => {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}" width="50">
                <span>${product.name}</span>
                <button class="share-btn" onclick="shareProduct('${product.name}')">Share</button>
            `;
            productList.appendChild(productItem);
        });
    };

    // Function to simulate sharing functionality
    window.shareProduct = (productName) => {
        alert(`Sharing ${productName} via social friends!`);
    };

    renderFriends();
    renderProducts();
});

