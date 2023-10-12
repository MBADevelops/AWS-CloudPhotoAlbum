function fetchPhotos() {
    // Replace this with your API Gateway URL
    const apiUrl = "https://tqocxfa5ui.execute-api.us-east-1.amazonaws.com/prod/photos";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const photoList = document.getElementById('photoList');
            photoList.innerHTML = ''; // Clear any existing photos

            // Loop through each photo and add to the list
            data.body.forEach(photo => {
                const listItem = document.createElement('li');
                listItem.textContent = photo;
                photoList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was an error fetching the photos:', error);
        });
}
