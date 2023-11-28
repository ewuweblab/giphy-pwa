// API Key
const API_KEY = 'vRgpxNRNKxyIlc1sk9lEifd6kDJZDK57';
// Search term
// const searchTerm = 'coffee';

// Go fetch Giphy API data
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=r`)
      .then( response => response.json() )
      .then( gifs => {
      
        // Check Check         
        console.log(gifs.data[0].images.downsized);
      
      // Get container for data
      const container = document.querySelector('.container');         
      
       // Loop through the array of data
      gifs.data.map( gif => {
        
          // template 
          const template  = `
          <div class="carousel-item w-full">
            <img class="border-8 border-white" src=" ${gif.images.downsized.url} " />
            <h2 class="text-5xl text-center text-white"> ${gif.title} </h2>
		     </div>
          `;
        
          // append
          container.insertAdjacentHTML("afterbegin", template);
        
      });
      
    });