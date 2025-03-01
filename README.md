# 📌 Search Bar Project

> **A simple web page featuring a search bar and quick access links with a dynamic background.**

---

## 🚀 Features

✅ **Search Bar**: Integrated with Google for fast searches.  
✅ **Dynamic Background**: Updates every 10 minutes with images from Unsplash API.  
✅ **Quick Access Links**: Fast navigation to important websites (GitHub, Moodle, Google Classroom, etc.).  
✅ **Minimalist Design**: Clean and modern UI with a sleek blurred effect.  

---

## 📂 File Structure

| File        | Description                                        |
|------------|------------------------------------------------|
| `index.html` | Main HTML file with the search bar and quick links |
| `style.css` | Stylesheet containing animations and effects      |
| `script.js` | JavaScript file handling background updates      |

---

## 📦 Installation & Setup
### Enable dynamic wallpepr
```js
<script src="script.js"></script>

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
```
💡 To enable the dynamic background, replace `<YOUR_USPLASH_KEY>` in `script.js` with your Unsplash API key.

## 🛠️ Technologies Used

📌 **HTML5**  
📌 **CSS3** (Google Fonts, Responsive Design)  
📌 **JavaScript** (Fetch API for Unsplash images)  

## License

📜 This project is licensed under the MIT License – feel free to modify and use it as needed.  
