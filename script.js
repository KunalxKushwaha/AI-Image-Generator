const API_KEY = 'vk-zGfW2YvQ2jAF322Dq9L8NsBE9vdiJdeBl2Khnlbnlwz25sp'; // Paste your API Key
const API_URL = 'https://api.vyro.ai/v2/image/generations';

const imageContainer = document.getElementById('imageContainer');
const imageResultElement = document.getElementById('imageResult');

// Function to generate the image
function generateImage() {
    const promptValue = document.getElementById('prompt').value;
    const styleValue = document.getElementById('dropdownStyles').value;
    const ratioValue = document.getElementById('dropdownRatio').value;

    if (!promptValue) {
        alert('Please enter a prompt.');
        return;
    }

    setLoadingState(true);

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + API_KEY);

    const formData = new FormData();
    formData.append('prompt', promptValue);
    formData.append('style', styleValue);
    formData.append('aspect_ratio', ratioValue);

    var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
};
fetch(API_URL,requestOptions)
    .then(response => response.blob())
   .then(blob => {
     const imageUrl = URL.createObjectURL(blob);
     imageResultElement.src = imageUrl;
   })
   .catch(error => {
    console.log('error', error);
    alert('An error occurred while Generating the Image. Please try Again.');
   })
    .finally(() => {
        setLoadingState(false);
    });


}




function setLoadingState(isLoading) {
        if (isLoading) {
            imageResultElement.style.display = 'none';
            imageContainer.classList.add('loading');
        } else{
            imageResultElement.style.display = 'block';
            imageContainer.classList.remove('loading');

        }

}

function downloadImage() {
       const imageUrl = imageResultElement.src;
    if (!imageUrl) {
        alert('No image to Download. Please Generate an Image First.');
        return;
    }

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'Ai-Generated_Image.jpg';
    link.click();

}