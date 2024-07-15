document.addEventListener('DOMContentLoaded', function() {
    const postImageInput = document.getElementById('post-image');
    const productTagInput = document.getElementById('product-tag');
    const productSuggestions = document.getElementById('product-suggestions');
    const postSubmitBtn = document.getElementById('post-submit-btn');

    postImageInput.addEventListener('change', handleImageUpload);
    productTagInput.addEventListener('input', showProductSuggestions);
    postSubmitBtn.addEventListener('click', handleSubmitPost);

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Display uploaded image preview (optional)
                const imgPreview = document.createElement('img');
                imgPreview.src = e.target.result;
                imgPreview.style.maxWidth = '100%';
                imgPreview.style.marginTop = '10px';
                postImageInput.parentElement.appendChild(imgPreview);
            };
            reader.readAsDataURL(file);
        }
    }

    function showProductSuggestions(event) {
        const query = event.target.value.toLowerCase();
        if (query.length > 0) {
            productSuggestions.style.display = 'block';
            productSuggestions.innerHTML = ''; // Clear previous suggestions

            // Mock product data
            const products = [
                'Red Dress',
                'Blue Jeans',
                'Green Shirt',
                'Yellow Skirt',
                'Black Jacket'
            ];

            const filteredProducts = products.filter(product => product.toLowerCase().includes(query));
            filteredProducts.forEach(product => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = product;
                suggestionDiv.addEventListener('click', () => {
                    productTagInput.value = product;
                    productSuggestions.style.display = 'none';
                });
                productSuggestions.appendChild(suggestionDiv);
            });
        } else {
            productSuggestions.style.display = 'none';
        }
    }

    function handleSubmitPost(event) {
        event.preventDefault();
        const postImage = postImageInput.files[0];
        const productTag = productTagInput.value;
        const postDescription = document.getElementById('post-description').value;

        if (postImage && productTag && postDescription) {
            // Handle post submission (e.g., save to server)
            alert('Post submitted successfully!');

            // Clear the form
            postImageInput.value = '';
            productTagInput.value = '';
            document.getElementById('post-description').value = '';
            productSuggestions.innerHTML = '';
            productSuggestions.style.display = 'none';
        } else {
            alert('Please fill in all fields.');
        }
    }
});
