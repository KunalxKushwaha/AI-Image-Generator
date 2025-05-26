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


}

    const formData = new FormData();
    formData.append('prompt', promptValue);

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


}