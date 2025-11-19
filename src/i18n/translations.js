export const supportedLanguages = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'uz', label: 'UZ', name: "O'zbekcha" },
]

export const fallbackLanguage = 'ru'

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      pizza: 'Пицца',
      pasta: 'Паста',
      soups: 'Супы',
      salads: 'Салаты',
      drinks: 'Напитки',
      dessert: 'Десерты',
      antipasti: 'Антипасти',
      promotions: 'Акции',
      contact: 'Контакты',
      favorites: 'Избранное',
      cart: 'Корзина',
    },
    categories: {
      pizza: 'Пицца',
      pasta: 'Паста',
      soups: 'Супы',
      salads: 'Салаты',
      drinks: 'Напитки',
      dessert: 'Десерты',
      antipasti: 'Антипасти',
    },
    buttons: {
      requestCall: 'Заказать звонок',
      addToCart: 'В корзину',
      viewAllPromotions: 'Все акции',
      writeUs: 'Написать нам',
      clear: 'Очистить',
      checkout: 'Оформить заказ',
      delete: 'Удалить',
    },
    home: {
      featuredTitle: 'Новинки',
      items: {
        carbonara: { name: 'Карбонара', price: 'от 120 ₽' },
        quattro: { name: 'Четыре сыра', price: 'от 150 ₽' },
        pepperoni: { name: 'Пепперони', price: 'от 140 ₽' },
        veggie: { name: 'Овощной микс', price: 'от 110 ₽' },
      },
    },
    promotions: {
      titlePrefix: 'Наши',
      titleHighlight: 'акции',
    },
    contact: {
      title: 'Оплата и доставка',
      cards: {
        delivery: 'Доставка по Москве за 45 минут',
        payment: 'Оплата наличными, картой или онлайн',
        schedule: 'Работаем ежедневно с 10:00 до 23:00',
        pickup: 'Самовывоз из четырёх ресторанов',
      },
    },
    footer: {
      question: 'Остались вопросы? А мы всегда на связи:',
      nutrition: 'Калорийность и состав',
      legal: 'Правовая информация',
      writeUs: 'Написать нам',
      callRequest: 'Заказать звонок',
      address: 'Москва, ул. Проспект Вернадского 86В',
      rights: 'YaBao Все права защищены © 2025',
    },
    favorites: {
      title: 'Избранное',
      emptyTitle: 'Избранное пусто',
      emptySubtitle: 'Добавьте товары в избранное',
    },
    cart: {
      title: 'Ваша корзина',
      emptyTitle: 'Корзина пуста',
      emptySubtitle: 'Добавьте товары из каталога',
      total: 'Итого',
    },
    products: {
      shared: {
        shrimpTruffle: {
          name: 'С креветками и трюфелями',
          description: 'Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
        },
      },
      prices: {
        from600: 'от 600 ₽',
        from500: 'от 500 ₽',
        from400: 'от 400 ₽',
        from300: 'от 300 ₽',
        from120: 'от 120 ₽',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      pizza: 'Pizza',
      pasta: 'Pasta',
      soups: 'Soups',
      salads: 'Salads',
      drinks: 'Drinks',
      dessert: 'Desserts',
      antipasti: 'Antipasti',
      promotions: 'Promotions',
      contact: 'Contact',
      favorites: 'Favorites',
      cart: 'Cart',
    },
    categories: {
      pizza: 'Pizza',
      pasta: 'Pasta',
      soups: 'Soups',
      salads: 'Salads',
      drinks: 'Drinks',
      dessert: 'Desserts',
      antipasti: 'Antipasti',
    },
    buttons: {
      requestCall: 'Request a call',
      addToCart: 'Add to cart',
      viewAllPromotions: 'All promotions',
      writeUs: 'Write to us',
      clear: 'Clear',
      checkout: 'Checkout',
      delete: 'Remove',
    },
    home: {
      featuredTitle: 'New arrivals',
      items: {
        carbonara: { name: 'Carbonara', price: 'from 120 ₽' },
        quattro: { name: 'Four cheese', price: 'from 150 ₽' },
        pepperoni: { name: 'Pepperoni', price: 'from 140 ₽' },
        veggie: { name: 'Veggie mix', price: 'from 110 ₽' },
      },
    },
    promotions: {
      titlePrefix: 'Our',
      titleHighlight: 'promotions',
    },
    contact: {
      title: 'Payment & delivery',
      cards: {
        delivery: 'Delivery across Moscow in 45 minutes',
        payment: 'Pay with cash, card, or online',
        schedule: 'We work daily from 10:00 to 23:00',
        pickup: 'Pickup available in four restaurants',
      },
    },
    footer: {
      question: 'Have questions? We are always in touch:',
      nutrition: 'Calories & ingredients',
      legal: 'Legal information',
      writeUs: 'Write to us',
      callRequest: 'Request a call',
      address: 'Moscow, Prospekt Vernadskogo 86B',
      rights: 'YaBao All rights reserved © 2025',
    },
    favorites: {
      title: 'Favorites',
      emptyTitle: 'No favorites yet',
      emptySubtitle: 'Add dishes to your favorites',
    },
    cart: {
      title: 'Your cart',
      emptyTitle: 'Cart is empty',
      emptySubtitle: 'Add dishes from the catalog',
      total: 'Total',
    },
    products: {
      shared: {
        shrimpTruffle: {
          name: 'Shrimp & truffle',
          description: 'Fresh fettuccine, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
        },
      },
      prices: {
        from600: 'from 600 ₽',
        from500: 'from 500 ₽',
        from400: 'from 400 ₽',
        from300: 'from 300 ₽',
        from120: 'from 120 ₽',
      },
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      pizza: 'Pitsa',
      pasta: 'Pasta',
      soups: 'Sho\'rvalar',
      salads: 'Salatlar',
      drinks: 'Ichimliklar',
      dessert: 'Desertlar',
      antipasti: 'Antipasti',
      promotions: 'Aksiyalar',
      contact: 'Kontaktlar',
      favorites: 'Sevimlilar',
      cart: 'Savat',
    },
    categories: {
      pizza: 'Pitsa',
      pasta: 'Pasta',
      soups: 'Sho\'rvalar',
      salads: 'Salatlar',
      drinks: 'Ichimliklar',
      dessert: 'Desertlar',
      antipasti: 'Antipasti',
    },
    buttons: {
      requestCall: 'Qo\'ng\'iroq buyurtma qilish',
      addToCart: 'Savatga qo\'shish',
      viewAllPromotions: 'Barcha aksiyalar',
      writeUs: 'Bizga yozing',
      clear: 'Tozalash',
      checkout: 'Buyurtma berish',
      delete: 'O\'chirish',
    },
    home: {
      featuredTitle: 'Yangiliklar',
      items: {
        carbonara: { name: 'Karbоnara', price: '120 ₽ dan' },
        quattro: { name: 'To\'rt pishloq', price: '150 ₽ dan' },
        pepperoni: { name: 'Pepperoni', price: '140 ₽ dan' },
        veggie: { name: 'Sabzavotli mikс', price: '110 ₽ dan' },
      },
    },
    promotions: {
      titlePrefix: 'Bizning',
      titleHighlight: 'aksiyalar',
    },
    contact: {
      title: 'To\'lov va yetkazib berish',
      cards: {
        delivery: 'Moskva bo\'ylab 45 daqiqada yetkazib beramiz',
        payment: 'Naqd, karta yoki onlayn to\'lov',
        schedule: 'Har kuni 10:00 dan 23:00 gacha ishlaymiz',
        pickup: 'To\'rtta restorandan o\'zingiz olib keting',
      },
    },
    footer: {
      question: 'Savollaringiz bormi? Biz doim aloqadamiz:',
      nutrition: 'Kaloriyalar va tarkib',
      legal: 'Huquqiy ma\'lumot',
      writeUs: 'Bizga yozing',
      callRequest: 'Qo\'ng\'iroq buyurtma qilish',
      address: 'Moskva, Vernadskiy prospekti 86B',
      rights: 'YaBao Barcha huquqlar himoyalangan © 2025',
    },
    favorites: {
      title: 'Sevimlilar',
      emptyTitle: 'Sevimlilar ro\'yxati bo\'sh',
      emptySubtitle: 'Taomlarni sevimlilarga qo\'shing',
    },
    cart: {
      title: 'Savat',
      emptyTitle: 'Savat bo\'sh',
      emptySubtitle: 'Katalogdan taom qo\'shing',
      total: 'Jami',
    },
    products: {
      shared: {
        shrimpTruffle: {
          name: 'Krevetka va trufelli',
          description: 'Uy qurilishi fettuccine, qaymoqli sous, krevetka, trufel moyi, qora murch, parmezan. 350 g',
        },
      },
      prices: {
        from600: '600 ₽ dan',
        from500: '500 ₽ dan',
        from400: '400 ₽ dan',
        from300: '300 ₽ dan',
        from120: '120 ₽ dan',
      },
    },
  },
}

