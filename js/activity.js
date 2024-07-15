document.addEventListener('DOMContentLoaded', function() {
    const mostSeenProductsList = document.getElementById('most-seen-products-list');
    const recommendationList = document.getElementById('recommendation-list');
    const postsList = document.getElementById('posts-list');
    const activityList = document.getElementById('activity-list');

    const mostSeenProducts = [
        { id: 1, name: 'Product 1', image: 'product1.jpg', description: 'Description for product 1' },
        { id: 2, name: 'Product 2', image: 'product2.jpg', description: 'Description for product 2' },
        { id: 3, name: 'Product 3', image: 'product3.jpg', description: 'Description for product 3' },
        { id: 4, name: 'Product 4', image: 'product4.jpg', description: 'Description for product 4' },
        { id: 5, name: 'Product 5', image: 'product5.jpg', description: 'Description for product 5' }
    ];

    const recommendations = [
        { id: 1, name: 'Recommendation 1', image: 'recommendation1.jpg', description: 'Description for recommendation 1' },
        { id: 2, name: 'Recommendation 2', image: 'recommendation2.jpg', description: 'Description for recommendation 2' },
        { id: 3, name: 'Recommendation 3', image: 'recommendation3.jpg', description: 'Description for recommendation 3' },
        { id: 4, name: 'Recommendation 4', image: 'recommendation4.jpg', description: 'Description for recommendation 4' },
        { id: 5, name: 'Recommendation 5', image: 'recommendation5.jpg', description: 'Description for recommendation 5' }
    ];

    const friendPosts = [
        { id: 1, name: 'Friend 1', image: 'friend1.jpg', post: 'Post by friend 1' },
        { id: 2, name: 'Friend 2', image: 'friend2.jpg', post: 'Post by friend 2' },
        { id: 3, name: 'Friend 3', image: 'friend3.jpg', post: 'Post by friend 3' },
        { id: 4, name: 'Friend 4', image: 'friend4.jpg', post: 'Post by friend 4' },
        { id: 5, name: 'Friend 5', image: 'friend5.jpg', post: 'Post by friend 5' }
    ];

    const userActivities = [
        { id: 1, activity: 'Viewed Product 1'},
        { id: 2, activity: 'Liked Product 2' },
        { id: 3, activity: 'Shared Product 3' },
        { id: 4, activity: 'Commented on Product 4' },
        { id: 5, activity: 'Purchased Product 5' }
    ];

    function loadItems(items, container, type) {
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add(`${type}-item`);
            itemElement.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}">
                <div class="${type}-info">
                    <h3>${item.name}</h3>
                    <p>${item.description || item.post || item.activity}</p>
                </div>
            `;
            container.appendChild(itemElement);
        });
    }

    loadItems(mostSeenProducts, mostSeenProductsList, 'product');
    loadItems(recommendations, recommendationList, 'recommendation');
    loadItems(friendPosts, postsList, 'post');
    loadItems(userActivities, activityList, 'activity');

    function createToggleButton(section) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Show More';
        toggleButton.classList.add('toggle-button');

        toggleButton.addEventListener('click', function() {
            const items = section.querySelectorAll('.hidden');
            items.forEach(item => item.classList.toggle('hidden'));
            toggleButton.textContent = toggleButton.textContent === 'Show More' ? 'Show Less' : 'Show More';
        });

        section.appendChild(toggleButton);
    }

    function addToggleFeature(section) {
        const items = section.querySelectorAll('div');
        if (items.length > 3) {
            items.forEach((item, index) => {
                if (index >= 3) {
                    item.classList.add('hidden');
                }
            });
            createToggleButton(section);
        }
    }

    addToggleFeature(mostSeenProductsList);
    addToggleFeature(recommendationList);
    addToggleFeature(postsList);
    addToggleFeature(activityList);
});
