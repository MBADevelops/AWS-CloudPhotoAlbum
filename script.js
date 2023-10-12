function fetchPhotos() {
    // I've set my API Gateway endpoint to the 'apiUrl' constant.
    const apiUrl = "https://tqocxfa5ui.execute-api.us-east-1.amazonaws.com/prod/photos";

    // I'm making an HTTP request to the API I set up using the 'fetch' method.
    fetch(apiUrl)
        .then(response => {
            // Here, I'm converting the response I received into a JSON format.
            return response.json();
        })
        .then(data => {
            // I'm selecting the 'photoList' element from the HTML to display the photos.
            const photoList = document.getElementById('photoList');

            // I'm clearing out any existing content to ensure the new list doesn't overlap with any old data.
            photoList.innerHTML = '';

            // I'm looping through each photo I got from the response.
            data.body.forEach(photo => {
                // For every photo, I'm creating a new list item.
                const listItem = document.createElement('li');

                // I'm setting the content of the list item to the name of the photo.
                listItem.textContent = photo;

                // Then, I'm appending this list item to the 'photoList' so it's visible on the website.
                photoList.appendChild(listItem);
            });
        })
        .catch(error => {
            // If anything goes wrong, I'll catch the error here and log it for my reference.
            console.error('There was an error fetching the photos:', error);
        });
}
