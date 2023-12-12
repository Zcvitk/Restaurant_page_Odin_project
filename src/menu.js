const createMenuPage = () => { 
const content = document.querySelector('#content');
const pageContent = document.createElement('div');
pageContent.classList.add('page-content');

const heading = document.createElement('h1');
heading.textContent = 'Our menu:';
heading.setAttribute('id', 'heading-menuPage');

const menuGrid = document.createElement('div');
menuGrid.setAttribute('id', 'menuGrid');

const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menuContainer');
menuContainer.appendChild(menuGrid);

const menuItem1 = document.createElement('div');
menuItem1.classList.add('menu-item');
const text1 = 'Quinoa Vegetarian Meatballs';
const img1 = document.createElement('img');
img1.setAttribute('src', './images/Clip_1.jpg');
const textDiv1 = document.createElement('div');
textDiv1.textContent = text1;
const description1 = document.createElement('p');
description1.textContent = 'These easy meatballs are packed with lots of flavor from traditional Italian spices, fresh herbs, and two types of cheese! They have a beautiful crispy exterior and tender, flavorful interior. You will never even miss the meat!';
menuItem1.appendChild(textDiv1);
menuItem1.appendChild(img1);
menuItem1.appendChild(description1);
const price1 = document.createElement('div');
price1.setAttribute('id', 'price');
price1.textContent = '7,00 $';
menuItem1.appendChild(price1);

const menuItem2 = document.createElement('div');
menuItem2.classList.add('menu-item');
const text2 = 'Butternut Squash Mac and Cheese';
const img2 = document.createElement('img');
img2.setAttribute('src', './images/Clip_2.jpg');
const textDiv2 = document.createElement('div');
textDiv2.textContent = text2;
const description2 = document.createElement('p');
description2.textContent = 'This delicious recipe was featured on "The Doctors" tv show on CBS ... and has more than 500 reviews! No soy, fake cheese, or nutritional yeast. Just creamy, perfect comfort food goodness! Jenn promises, "You will not believe how good this is!"';
menuItem2.appendChild(textDiv2);
menuItem2.appendChild(img2);
menuItem2.appendChild(description2);
const price2 = document.createElement('div');
price2.setAttribute('id', 'price');
price2.textContent = '6,50 $';
menuItem2.appendChild(price2);

const menuItem3 = document.createElement('div');
menuItem3.classList.add('menu-item');
const text3 = 'Chipotle Inspired Vegan Burrito Bowl';
const img3 = document.createElement('img');
img3.setAttribute('src', './images/Clip_3.jpg');
const textDiv3 = document.createElement('div');
textDiv3.textContent = text3;
const description3 = document.createElement('p');
description3.textContent = 'If you love Chipotle, then you must try this delicious vegetarian meal that is just bursting with spices and flavor! Set out all those tasty burrito fillings and cilantro-lime brown rice.';
menuItem3.appendChild(textDiv3);
menuItem3.appendChild(img3);
menuItem3.appendChild(description3);
const price3 = document.createElement('div');
price3.setAttribute('id', 'price');
price3.textContent = '8,50 $';
menuItem3.appendChild(price3);

const menuItem4 = document.createElement('div');
menuItem4.classList.add('menu-item');
const text4 = 'Sweet and Sour Tofu';
const img4 = document.createElement('img');
img4.setAttribute('src', './images/Clip_4.jpg');
const textDiv4 = document.createElement('div');
textDiv4.textContent = text4;
const description4 = document.createElement('p');
description4.textContent = 'Crispy tofu and a sticky sweet and sour sauce mimic the classic Chinese takeout dish in this vegetarian friendly meal.';
menuItem4.appendChild(textDiv4);
menuItem4.appendChild(img4);
menuItem4.appendChild(description4);
const price4 = document.createElement('div');
price4.setAttribute('id', 'price');
price4.textContent = '9,30 $';
menuItem4.appendChild(price4);

const menuItem5 = document.createElement('div');
menuItem5.classList.add('menu-item');
const text5 = 'Vegetarian Quesadillas (Black Beans and Sweet Potato)';
const img5 = document.createElement('img');
img5.setAttribute('src', './images/Clip_5.jpg');
const textDiv5 = document.createElement('div');
textDiv5.textContent = text5;
const description5 = document.createElement('p');
description5.textContent = 'Filled with black beans, sweet potatoes, avocado and cheese ... so nourishing and delicious!';
menuItem5.appendChild(textDiv5);
menuItem5.appendChild(img5);
menuItem5.appendChild(description5);
const price5 = document.createElement('div');
price5.setAttribute('id', 'price');
price5.textContent = '6,80 $';
menuItem5.appendChild(price5);

const menuItem6 = document.createElement('div');
menuItem6.classList.add('menu-item');
const text6 = 'Creamy (Vegan) Red Pepper Alfredo over Zoodles';
const img6 = document.createElement('img');
img6.setAttribute('src', './images/Clip_6.jpg');
const textDiv6 = document.createElement('div');
textDiv6.textContent = text6;
const description6 = document.createElement('p');
description6.textContent = 'Nutritious zucchini noodles are draped in a glorious alfredo sauce that combines roasted red peppers, soaked walnuts, veggie broth, and spices. A veggie-packed vegan meal!';
menuItem6.appendChild(textDiv6);
menuItem6.appendChild(img6);
menuItem6.appendChild(description6);
const price6 = document.createElement('div');
price6.setAttribute('id', 'price');
price6.textContent = '6,90 $';
menuItem6.appendChild(price6);

const menuItem7 = document.createElement('div');
menuItem7.classList.add('menu-item');
const text7 = 'Vegetable Chow Mein';
const img7 = document.createElement('img');
img7.setAttribute('src', './images/Clip_7.jpg');
const textDiv7 = document.createElement('div');
textDiv7.textContent = text7;
const description7 = document.createElement('p');
description7.textContent = 'This Instant Pot Vegetable Chow Mein is a terrific go-to recipe for busy nights. Soniya says, "When I make these noodles everyone gobbles them up!"';
menuItem7.appendChild(textDiv7);
menuItem7.appendChild(img7);
menuItem7.appendChild(description7);
const price7 = document.createElement('div');
price7.setAttribute('id', 'price');
price7.textContent = '6,50 $';
menuItem7.appendChild(price7);

const menuItem8 = document.createElement('div');
menuItem8.classList.add('menu-item');
const text8 = 'Chickpea Avocado Sandwich';
const img8 = document.createElement('img');
img8.setAttribute('src', './images/Clip_8.jpg');
const textDiv8 = document.createElement('div');
textDiv8.textContent = text8;
const description8 = document.createElement('p');
description8.textContent = 'This vegan sandwich is packed with protein and filled with the delicious flavors of cilantro, celery, dill, green onion and lime. Top your creation with raw veggies like juicy tomatoes, zippy red onion, and fresh greens for extra flavor, texture and nutrition!';
menuItem8.appendChild(textDiv8);
menuItem8.appendChild(img8);
menuItem8.appendChild(description8);
const price8 = document.createElement('div');
price8.setAttribute('id', 'price');
price8.textContent = '5,30 $';
menuItem8.appendChild(price8);

menuGrid.appendChild(menuItem1);
menuGrid.appendChild(menuItem2);
menuGrid.appendChild(menuItem3);
menuGrid.appendChild(menuItem4);
menuGrid.appendChild(menuItem5);
menuGrid.appendChild(menuItem6);
menuGrid.appendChild(menuItem7);
menuGrid.appendChild(menuItem8);

pageContent.appendChild(heading);
pageContent.appendChild(menuContainer);
content.appendChild(pageContent);

};

export default createMenuPage;