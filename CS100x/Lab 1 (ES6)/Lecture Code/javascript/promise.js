const API_KEY = "43a19a70-b76e-11e8-bf0e-e9322ccde4db";

window.addEventListener('DOMContentLoaded', () => {
  const galleries_url = `https://api.harvardartmuseums.org/gallery?apikey=${API_KEY}`;
  fetch(galleries_url)
  .then(response => response.json())
  .then(data => {
      data.records.forEach(gallery => {
          // etc etc
      })
  })
