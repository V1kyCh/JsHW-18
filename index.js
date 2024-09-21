// №1
const categoriesListEls = document.querySelectorAll('ul#categories>li')
console.log(`У списку ${categoriesListEls.length} категорії.`)

const mainList = document.querySelector('ul#categories')
categoriesListEls.forEach(cat => {
    const i = cat.querySelectorAll('li')
    console.log(`Категорія: ${cat.firstElementChild.textContent}, Кількість елементів: ${i.length}`)
})

// №2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsListEl = document.querySelector('#ingredients')
ingredients.forEach(ingr => {
    const ingredientEl = document.createElement('li')
    ingredientEl.textContent = ingr
    ingredientsListEl.append(ingredientEl)
})

// №3
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const galleryEl = document.querySelector('#gallery')

images.forEach(imgSettings => {
    const galleryItemEl = document.createElement('li')
    galleryEl.append(galleryItemEl)

    const imgEl = document.createElement('img')
    imgEl.src = imgSettings.url
    imgEl.alt = imgSettings.alt

    imgEl.classList.add('img-style')

    galleryItemEl.append(imgEl)
})

galleryEl.classList.add('gallery-position')