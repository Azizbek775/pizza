import pizza from '../assets/image/pizza.png'
import pastaImg from '../assets/image/pasta.jpeg'
import soups from '../assets/image/soups.png'
import salads from '../assets/image/salads.png'
import drink from '../assets/image/drinks.png'
import dessert from '../assets/image/dessert.webp'
import antipasti from '../assets/image/antipasti.png'

const sharedProduct = {
  nameKey: 'products.shared.shrimpTruffle.name',
  descriptionKey: 'products.shared.shrimpTruffle.description',
}

const createProducts = ({ count, startId, image, priceKey, priceValue, defaultPrice }) =>
  Array.from({ length: count }, (_, index) => ({
    id: startId + index,
    image,
    ...sharedProduct,
    priceKey,
    priceValue,
    price: defaultPrice,
  }))

const pizzaData = createProducts({
  count: 16,
  startId: 1,
  image: pizza,
  priceKey: 'products.prices.from600',
  priceValue: 600,
  defaultPrice: 'от 600 ₽',
})

const pastaData = createProducts({
  count: 12,
  startId: 17,
  image: pastaImg,
  priceKey: 'products.prices.from500',
  priceValue: 500,
  defaultPrice: 'от 500 ₽',
})

const soupsData = createProducts({
  count: 12,
  startId: 29,
  image: soups,
  priceKey: 'products.prices.from300',
  priceValue: 300,
  defaultPrice: 'от 300 ₽',
})

const saladsData = createProducts({
  count: 12,
  startId: 41,
  image: salads,
  priceKey: 'products.prices.from400',
  priceValue: 400,
  defaultPrice: 'от 400 ₽',
})

const drinksData = createProducts({
  count: 12,
  startId: 53,
  image: drink,
  priceKey: 'products.prices.from120',
  priceValue: 120,
  defaultPrice: 'от 120 ₽',
})

const dessertData = createProducts({
  count: 12,
  startId: 65,
  image: dessert,
  priceKey: 'products.prices.from600',
  priceValue: 600,
  defaultPrice: 'от 600 ₽',
})

const antipastiData = createProducts({
  count: 12,
  startId: 77,
  image: antipasti,
  priceKey: 'products.prices.from600',
  priceValue: 600,
  defaultPrice: 'от 600 ₽',
})

const allProducts = [
  ...pizzaData,
  ...pastaData,
  ...soupsData,
  ...saladsData,
  ...drinksData,
  ...dessertData,
  ...antipastiData,
]

export {
  allProducts,
  antipastiData,
  dessertData,
  drinksData,
  pastaData,
  pizzaData,
  saladsData,
  soupsData,
}