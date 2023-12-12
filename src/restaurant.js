const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

// Create and append background image element

const image = document.createElement('img');
image.src='https://res.cloudinary.com/dv08wmbhc/image/upload/v1701373979/cld-sample-4.jpg';
image.style.background = 'https://res.cloudinary.com/dv08wmbhc/image/upload/v1701373979/cld-sample-4.jpg';
image.className = "background-image";
content.appendChild(image);

// Create and append head element

const headline = document.createElement('h1');
headline.setAttribute("id", "headline");
headline.textContent = 'Welcome to Veggies';
pageContent.appendChild(headline);
content.appendChild(pageContent);

// Create and append greeting text element

const p1 = document.createElement('div');
p1.setAttribute("id", "square");
p1.textContent = 'Do you long for a quality and healthy meal that will nourish your body, give you strength for a new working day and allow your body to take a break from daily intake of fatty and unhealthy foods?'
pageContent.appendChild(p1);
content.appendChild(pageContent);

// Create and append restaurant image element

const img9 = document.createElement('img');
img9.setAttribute("id", "divPic");
img9.setAttribute('src', './images/Clip_9.jpg');
pageContent.appendChild(img9)
content.appendChild(pageContent);

}

export default createRestaurantHomePage;



   