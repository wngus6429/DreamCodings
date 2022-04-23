fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data.dataseries));
