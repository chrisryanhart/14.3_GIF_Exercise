//get form info and set as parameter
const form = document.querySelector('form');

//gets input value from form and saves it as a variable
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const textVal = document.querySelector('input').value;

    getGIF(textVal);
    form.reset();
})

//initializes remove button to clear GIFs
const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click',function(){
    const div = document.querySelector('#container');
    div.innerHTML = '';
})

//searches GIF API for search terms
async function getGIF(searchTerm){
    const GIF = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: '8usFgoBUNpORZzjlPSaSLx2iYcrp9bLC', q: searchTerm}});
    const embedUrl = GIF.data.data[0].embed_url;
    
    appendGIF(embedUrl);
}

//appends the new image to the DOM
function appendGIF(link){
    const div = document.querySelector('#container');
    const iframe = document.createElement('iframe');
    const p = document.createElement('p');

    iframe.src = `${link}`;
    iframe.frameBorder = "0";
    
    // p.append(iframe);
    div.append(iframe);
}



