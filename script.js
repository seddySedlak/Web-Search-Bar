function setRandomBackground() {
  const url = "https://api.unsplash.com/search/photos?query=universe&client_id=<YOUR_USPLASH_KEY>";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const imageUrl = data.results[randomIndex].urls.full;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
      } else {
        console.warn("No images found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
setRandomBackground();
setInterval(setRandomBackground, 600000);

