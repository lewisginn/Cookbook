// Asia recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ─────────────────────────────── Chinese ────────────────────────────────
  {
    id: 'beef-chow-fun',
    name: 'Beef Chow Fun',
    nativeName: '乾炒牛河',
    short: 'Chow fun',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Cantonese',
    emoji: '🍜',
    description: 'The Cantonese wok classic: wide, silky rice noodles stir-fried over blazing heat with tender beef, bean sprouts and scallions in a savory soy sauce, with smoky wok hei.',
    servings: 2,
    time: { prep: 20, cook: 10, inactive: 20, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['beef', 'noodles', 'stir-fry', 'quick'],
    ingredients: [
      { group: 'Beef', qty: 8, unit: 'oz', item: 'flank steak', note: 'thinly sliced against the grain', aisle: 'meat' },
      { group: 'Beef', qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Beef', qty: 1, unit: 'tsp', item: 'cornstarch', aisle: 'pantry' },
      { group: 'Beef', qty: 0.25, unit: 'tsp', item: 'baking soda', aisle: 'pantry' },
      { group: 'Beef', qty: 1, unit: 'tsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'oyster sauce', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 1, unit: 'lb', item: 'fresh wide rice noodles (ho fun)', aisle: 'international' },
      { group: 'Stir-fry', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 0.5, item: 'yellow onion', note: 'sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Stir-fry', qty: 4, item: 'scallions', note: 'in 2-inch lengths', aisle: 'produce' },
      { group: 'Stir-fry', qty: 2, unit: 'cup', item: 'bean sprouts', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Marinate the beef',
        text: 'Toss the beef with the soy sauce, cornstarch, baking soda and oil. Marinate for 20 minutes.',
        tip: 'A pinch of baking soda is the Chinese restaurant trick for silky, tender beef.'
      },
      {
        title: 'Prep the noodles',
        text: 'Separate the noodles gently. If they\'re stiff from the fridge, microwave for 1 minute to soften.'
      },
      {
        title: 'Sear the beef',
        text: 'Heat a wok over the highest heat until smoking. Add 1 tbsp oil and sear the beef for 1 minute until browned. Set aside.'
      },
      {
        title: 'Noodles',
        text: 'Add the remaining oil, the onion and scallion whites for 30 seconds. Add the noodles and sauce and toss for 2 minutes, letting them sit occasionally to char.'
      },
      {
        title: 'Finish',
        text: 'Add the beef, bean sprouts and scallion greens and toss for 1 minute. Serve immediately.'
      }
    ],
    notes: [
      'Cook in small batches. An overloaded wok won\'t get the smoky char.'
    ]
  },
  {
    id: 'char-siu',
    name: 'Char Siu',
    nativeName: '叉燒',
    short: 'Char siu',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Cantonese',
    emoji: '🍖',
    description: 'Cantonese barbecue pork: pork shoulder marinated in hoisin, five-spice, honey and soy, then roasted and glazed until sticky, lacquered and charred at the edges.',
    servings: 6,
    time: { prep: 15, cook: 60, inactive: 720, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['pork', 'roast', 'make-ahead'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'boneless pork shoulder', note: 'cut into 2-inch-thick strips', aisle: 'meat' },
      { qty: 0.25, unit: 'cup', item: 'hoisin sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'Shaoxing wine', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'honey', note: 'plus 2 tbsp for glazing', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'Chinese five-spice powder', aisle: 'spices' },
      { qty: 3, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'red fermented bean curd', note: 'optional, for color', aisle: 'international', optional: true },
      { qty: 1, unit: 'tsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Mix everything except the extra honey and rice. Coat the pork and marinate overnight (at least 12 hours).'
      },
      {
        title: 'Roast',
        text: 'Heat the oven to 400°F. Set the pork on a rack over a foil-lined pan with a little water in it. Roast for 25 minutes, basting with marinade.'
      },
      {
        title: 'Flip & roast',
        text: 'Flip, baste, and roast for 20 minutes more.'
      },
      {
        title: 'Glaze',
        text: 'Mix the remaining honey with 1 tbsp hot water. Brush it over the pork and broil for 3 minutes per side until sticky and charred at the edges.',
        tip: 'Watch closely under the broiler. Honey goes from caramelized to burnt fast.'
      },
      {
        title: 'Serve',
        text: 'Rest for 10 minutes, then slice and serve over rice with blanched greens.'
      }
    ],
    notes: [
      'Leftovers go into fried rice, bao and noodle soups.'
    ]
  },
  {
    id: 'dan-dan-noodles',
    name: 'Dan Dan Noodles',
    nativeName: '担担面',
    short: 'Dan dan',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Sichuan',
    emoji: '🍜',
    description: 'Sichuan street noodles: springy noodles in a numbing-spicy sauce of chili oil, sesame paste, black vinegar and Sichuan pepper, topped with crispy pork and preserved greens.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 3,
    tags: ['noodles', 'pork', 'spicy', 'quick'],
    ingredients: [
      { group: 'Pork topping', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Pork topping', qty: 0.5, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { group: 'Pork topping', qty: 1, unit: 'tbsp', item: 'Shaoxing wine', aisle: 'international' },
      { group: 'Pork topping', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Pork topping', qty: 2, unit: 'tbsp', item: 'Sichuan preserved vegetable (ya cai)', aisle: 'international', optional: true },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'chili oil or chili crisp', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'Chinese sesame paste or tahini', shop: 'tahini', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'Chinkiang black vinegar', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'Sichuan peppercorns', note: 'toasted and ground', aisle: 'international' },
      { group: 'Sauce', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Noodles', qty: 1, unit: 'lb', item: 'fresh wheat noodles', note: 'or dried lo mein', aisle: 'international' },
      { group: 'Noodles', qty: 1, unit: 'head', item: 'baby bok choy', note: 'quartered', shop: 'baby bok choy', aisle: 'produce' },
      { group: 'Noodles', qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'Noodles', qty: 2, unit: 'tbsp', item: 'roasted unsalted peanuts', note: 'crushed', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Crisp the pork',
        text: 'Fry the pork in the oil over high heat for 6 minutes until browned and crispy. Add the wine, soy sauce and preserved vegetable and cook for 1 minute.'
      },
      {
        title: 'Sauce',
        text: 'Divide the sauce ingredients among 4 bowls and stir each together.'
      },
      {
        title: 'Noodles & greens',
        text: 'Boil the noodles until just tender, adding the bok choy for the last minute. Save a cup of the cooking water.'
      },
      {
        title: 'Assemble',
        text: 'Add 2 tbsp noodle water to each bowl, then the noodles, bok choy and crispy pork. Top with scallions and peanuts.',
        tip: 'Toss everything together from the bottom so every strand gets coated.'
      }
    ],
    notes: [
      'Adjust the chili oil to taste. The real deal is very spicy and very numbing.'
    ]
  },
  {
    id: 'hot-and-sour-soup',
    name: 'Hot & Sour Soup',
    nativeName: '酸辣汤',
    short: 'Hot & sour',
    continent: 'Asia',
    region: 'Chinese',
    emoji: '🥣',
    description: 'A silky, peppery, tangy soup with shiitakes, tofu, bamboo shoots and egg ribbons, sharpened with black vinegar and white pepper.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 2,
    tags: ['soup', 'tofu', 'quick'],
    ingredients: [
      { qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 4, unit: 'oz', item: 'ground pork', note: 'or thinly sliced pork', aisle: 'meat' },
      { qty: 6, item: 'dried shiitake mushrooms', note: 'soaked and sliced', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'bamboo shoots', note: 'julienned', aisle: 'international' },
      { qty: 8, unit: 'oz', item: 'extra-firm tofu', note: 'in thin strips', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 0.25, unit: 'cup', item: 'Chinkiang black vinegar', note: 'or rice vinegar', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'white pepper', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'chili oil or chili crisp', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'cornstarch', note: 'mixed with ¼ cup water', aisle: 'pantry' },
      { qty: 2, item: 'eggs', note: 'beaten', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Simmer',
        text: 'Bring the stock to a boil, add the pork and break it up. Add the mushrooms, bamboo shoots and tofu and simmer for 5 minutes.'
      },
      {
        title: 'Season',
        text: 'Stir in the soy sauce, vinegar, white pepper and chili oil.'
      },
      {
        title: 'Thicken',
        text: 'Stir in the cornstarch slurry and simmer for 1 minute until silky.'
      },
      {
        title: 'Egg ribbons',
        text: 'Slowly drizzle in the beaten eggs while stirring gently in one direction to make ribbons.',
        tip: 'Turn the heat off just before adding the egg for the most delicate ribbons.'
      },
      {
        title: 'Serve',
        text: 'Finish with sesame oil and scallions. Taste and add more vinegar or pepper to your liking.'
      }
    ],
    notes: [
      'White pepper gives the "hot." Vinegar gives the "sour." Adjust both freely.'
    ]
  },
  {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    nativeName: '宫保鸡丁',
    short: 'Kung pao',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Sichuan',
    emoji: '🌶️',
    description: 'The real Sichuan classic: tender chicken stir-fried with toasted dried chilies, tingly Sichuan pepper and peanuts in a glossy sweet-sour-savory sauce.',
    servings: 4,
    time: { prep: 20, cook: 10 },
    heat: 2,
    tags: ['chicken', 'stir-fry', 'quick', 'spicy'],
    ingredients: [
      { group: 'Chicken', qty: 1.25, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'in ¾-inch cubes', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'Shaoxing wine', aisle: 'international' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'cornstarch', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'Chinkiang black vinegar', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'toasted sesame oil', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tsp', item: 'cornstarch', aisle: 'pantry' },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'water', aisle: 'none' },
      { group: 'Stir-fry', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 10, item: 'dried árbol chilies', note: 'or Sichuan chilies, halved and seeds shaken out', aisle: 'international' },
      { group: 'Stir-fry', qty: 1, unit: 'tsp', item: 'Sichuan peppercorns', aisle: 'international' },
      { group: 'Stir-fry', qty: 3, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Stir-fry', qty: 1, unit: 'in', item: 'fresh ginger', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Stir-fry', qty: 4, item: 'scallions', note: 'whites in 1-inch pieces, greens sliced', aisle: 'produce' },
      { group: 'Stir-fry', qty: 0.5, unit: 'cup', item: 'roasted unsalted peanuts', aisle: 'pantry' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the chicken with the soy sauce, Shaoxing wine and cornstarch and marinate for 10 minutes. Start the rice.'
      },
      {
        title: 'Mix the sauce',
        text: 'Stir together all the sauce ingredients in a small bowl.'
      },
      {
        title: 'Toast the chilies',
        text: 'Heat a wok over high heat, add the oil, then the chilies and Sichuan peppercorns. Stir for about 15 seconds until fragrant and the chilies darken. Don\'t let them blacken.',
        tip: 'Have everything ready by the stove first. This dish moves fast.'
      },
      {
        title: 'Stir-fry the chicken',
        text: 'Add the chicken, spread it out, and sear for 1 minute. Then stir-fry for 2 minutes until opaque.'
      },
      {
        title: 'Aromatics',
        text: 'Add the garlic, ginger and scallion whites and toss for 30 seconds.'
      },
      {
        title: 'Sauce',
        text: 'Stir the sauce, pour it in, and toss for 30 seconds until glossy and thick.'
      },
      {
        title: 'Finish',
        text: 'Off the heat, toss in the peanuts and scallion greens. Serve with rice.'
      }
    ],
    notes: [
      'Don\'t eat the dried chilies. They\'re there to flavor the oil.'
    ]
  },
  {
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    nativeName: '麻婆豆腐',
    short: 'Mapo tofu',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Sichuan',
    emoji: '🥢',
    description: 'Silky tofu and crisp ground pork in a glossy, fiery sauce of fermented chili bean paste, finished with tingly Sichuan peppercorn. Fast, bold and made for a bowl of rice.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 3,
    tags: ['tofu', 'pork', 'spicy', 'weeknight'],
    ingredients: [
      { qty: 1.5, unit: 'tsp', item: 'Sichuan peppercorns', aisle: 'international' },
      { qty: 16, unit: 'oz', item: 'soft or medium tofu', note: '1 block', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'doubanjiang', note: 'Pixian chili bean paste', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'fermented black beans', note: 'rinsed and chopped', aisle: 'international', optional: true },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'minced', aisle: 'produce' },
      { qty: 3, item: 'scallions', note: 'whites and greens separated, sliced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'Shaoxing wine', note: 'or dry sherry', aisle: 'international' },
      { qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tsp', item: 'cornstarch', note: 'mixed with 2 tbsp water', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'chili oil or chili crisp', aisle: 'international' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', note: 'uncooked, to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Toast & grind the peppercorns',
        text: 'Toast the Sichuan peppercorns in a dry pan over medium-low heat for 2 minutes until fragrant. Grind finely and set aside.'
      },
      {
        title: 'Firm up the tofu',
        text: 'Cut the tofu into 1-inch cubes. Slip them into a pot of gently simmering salted water for 3 minutes, then drain carefully.',
        tip: 'This seasons the tofu and helps the cubes hold together in the sauce.'
      },
      {
        title: 'Crisp the pork',
        text: 'Heat the oil in a wok over medium-high heat. Add the pork and cook for 4 minutes, breaking it up, until browned and a little crispy.'
      },
      {
        title: 'Fry the chili bean paste',
        text: 'Lower the heat to medium. Add the doubanjiang and black beans and stir for 1 minute until the oil turns deep red. Add the garlic, ginger and scallion whites and cook for 30 seconds.'
      },
      {
        title: 'Build the sauce',
        text: 'Pour in the Shaoxing wine, stock, soy sauce and sugar and bring to a simmer.'
      },
      {
        title: 'Simmer the tofu',
        text: 'Slide in the tofu and simmer gently for 5 minutes. Nudge it with the back of your spatula rather than stirring, so the cubes stay whole.'
      },
      {
        title: 'Thicken',
        text: 'Stir up the cornstarch slurry and drizzle it in two additions, nudging gently, then simmer for 1 minute until the sauce is glossy and clings to the tofu.'
      },
      {
        title: 'Finish & serve',
        text: 'Drizzle with chili oil and sprinkle with the ground Sichuan pepper and scallion greens. Serve over steamed rice.'
      }
    ],
    notes: [
      'Doubanjiang brands vary in saltiness — taste before adding the soy sauce.',
      'Vegetarian: replace the pork with finely chopped shiitake mushrooms and use vegetable stock.'
    ]
  },
  {
    id: 'pork-chive-dumplings',
    name: 'Pork & Chive Dumplings',
    nativeName: '韭菜猪肉饺子',
    short: 'Jiaozi',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Northern Chinese',
    emoji: '🥟',
    description: 'Juicy homemade jiaozi with a gingery pork and garlic-chive filling, boiled or pan-fried as potstickers and dipped in black vinegar and chili oil.',
    servings: 6,
    time: { prep: 60, cook: 20 },
    heat: 0,
    tags: ['pork', 'dumplings', 'freezer-friendly', 'celebration'],
    ingredients: [
      { group: 'Filling', qty: 1, unit: 'lb', item: 'ground pork', note: 'fatty', aisle: 'meat' },
      { group: 'Filling', qty: 1, unit: 'bunch', item: 'garlic chives', note: 'finely chopped (or scallions)', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'Shaoxing wine', aisle: 'international' },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'white pepper', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.25, unit: 'cup', item: 'chicken stock', note: 'cold', aisle: 'pantry' },
      { group: 'Wrappers', qty: 50, item: 'round dumpling wrappers', note: 'store-bought', aisle: 'international' },
      { group: 'Dipping sauce', qty: 0.25, unit: 'cup', item: 'Chinkiang black vinegar', aisle: 'international' },
      { group: 'Dipping sauce', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Dipping sauce', qty: 1, unit: 'tbsp', item: 'chili oil or chili crisp', aisle: 'international' },
      { group: 'Dipping sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Filling',
        text: 'Stir the pork with the ginger, soy sauce, wine, sesame oil, pepper and salt in one direction until sticky. Gradually stir in the cold stock, then fold in the chives.',
        tip: 'Stirring in one direction and adding stock makes the filling bouncy and juicy.'
      },
      {
        title: 'Fold',
        text: 'Place a spoonful of filling in each wrapper, wet the edge, fold in half and pleat one side to seal.'
      },
      {
        title: 'Boil',
        text: 'Boil in batches. When they float, add ½ cup cold water; when it returns to a boil, cook for 2 minutes more.'
      },
      {
        title: 'Or pan-fry',
        text: 'For potstickers, fry flat side down in oil for 2 minutes, add ⅓ cup water, cover and steam for 6 minutes, then uncover until crisp.'
      },
      {
        title: 'Serve',
        text: 'Mix the dipping sauce and serve with the hot dumplings.'
      }
    ],
    notes: [
      'Freeze uncooked dumplings on a tray, then bag. Cook from frozen.'
    ]
  },
  {
    id: 'hong-shao-rou',
    name: 'Red-Braised Pork Belly',
    nativeName: '红烧肉',
    short: 'Hong shao rou',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Shanghainese',
    emoji: '🐷',
    description: 'Chairman Mao\'s favorite: cubes of pork belly braised in caramelized sugar, soy, Shaoxing wine and star anise until meltingly tender and glazed a glossy mahogany.',
    servings: 4,
    time: { prep: 15, cook: 105 },
    heat: 0,
    tags: ['pork', 'braise', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'skin-on pork belly', note: 'in 1½-inch cubes', shop: 'pork belly', aisle: 'meat' },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'rock sugar', note: 'or granulated sugar', aisle: 'international' },
      { qty: 3, item: 'scallions', note: 'in 2-inch pieces', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { qty: 3, item: 'star anise', aisle: 'spices' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'Shaoxing wine', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 2, unit: 'cup', item: 'hot water', aisle: 'none' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Blanch',
        text: 'Blanch the pork in boiling water for 3 minutes to clean it. Drain and pat dry.'
      },
      {
        title: 'Render',
        text: 'Fry the pork in the oil in a wok or heavy pot over medium heat for 8 minutes until lightly browned and some fat renders. Pour off excess fat.'
      },
      {
        title: 'Caramelize',
        text: 'Push the pork aside, add the sugar, and let it melt and turn amber, about 2 minutes. Toss the pork in the caramel.',
        tip: 'Take the caramel to deep amber, not dark brown, or it turns bitter.'
      },
      {
        title: 'Braise',
        text: 'Add the scallions, ginger, star anise, cinnamon, wine, both soy sauces and hot water. Cover and simmer on low for 75 minutes until very tender.'
      },
      {
        title: 'Reduce',
        text: 'Uncover, raise the heat, and reduce for 10 minutes, stirring, until the sauce is thick and glossy and coats the pork.'
      },
      {
        title: 'Serve',
        text: 'Serve over steamed rice with blanched bok choy.'
      }
    ],
    notes: [
      'Add hard-boiled eggs during the braise. They absorb the sauce beautifully.'
    ]
  },
  {
    id: 'tomato-egg-stir-fry',
    name: 'Tomato & Egg Stir-Fry',
    nativeName: '番茄炒蛋',
    short: 'Tomato egg',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Home-style',
    emoji: '🍅',
    description: 'China\'s most beloved home dish: fluffy scrambled eggs folded into a sweet-savory, saucy stir-fry of ripe tomatoes. Ten minutes, total comfort, over rice.',
    servings: 2,
    time: { prep: 5, cook: 10 },
    heat: 0,
    tags: ['eggs', 'vegetarian', 'quick', 'weeknight'],
    ingredients: [
      { qty: 4, item: 'eggs', aisle: 'dairy' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'Shaoxing wine', aisle: 'international', optional: true },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, item: 'ripe tomatoes', note: 'in wedges', shop: 'ripe tomatoes', aisle: 'produce' },
      { qty: 1, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'ketchup', note: 'optional, for color', aisle: 'pantry', optional: true },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Eggs',
        text: 'Beat the eggs with half the salt and the wine. Heat 2 tbsp oil in a wok over high heat and scramble the eggs for 30 seconds until just set in big curds. Remove.',
        tip: 'Undercook the eggs slightly. They go back in later.'
      },
      {
        title: 'Tomatoes',
        text: 'Add the remaining oil and the garlic, then the tomatoes. Stir-fry for 3 minutes until they soften and release juice.'
      },
      {
        title: 'Season',
        text: 'Add the sugar, remaining salt, ketchup and 2 tbsp water and simmer for 1 minute until saucy.'
      },
      {
        title: 'Combine',
        text: 'Return the eggs, fold gently, and scatter with scallions. Serve over rice.'
      }
    ],
    notes: [
      'The sauce should be juicy enough to soak into the rice.'
    ]
  },
  {
    id: 'cumin-lamb',
    name: 'Xi\'an Cumin Lamb',
    nativeName: '孜然羊肉',
    short: 'Cumin lamb',
    continent: 'Asia',
    region: 'Chinese',
    cuisine: 'Xi\'an · Northwestern',
    emoji: '🐑',
    description: 'A smoky, spicy northwestern Chinese stir-fry of thinly sliced lamb with whole cumin, dried chilies, Sichuan pepper and onions. Bold Silk Road flavor.',
    servings: 4,
    time: { prep: 20, cook: 10, inactive: 20, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['lamb', 'stir-fry', 'spicy', 'quick'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'boneless lamb shoulder', note: 'thinly sliced (or lamb leg)', aisle: 'meat' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'Shaoxing wine', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'cornstarch', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'cumin seeds', note: 'lightly crushed', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Sichuan peppercorns', note: 'ground', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 8, item: 'dried árbol chilies', note: 'halved', aisle: 'international' },
      { qty: 1, item: 'red onion', note: 'sliced', shop: 'red onions', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the lamb with the soy sauce, wine and cornstarch and marinate for 20 minutes.'
      },
      {
        title: 'Sear',
        text: 'Heat 2 tbsp oil in a wok over the highest heat. Sear the lamb in batches for 2 minutes until browned. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Add the remaining oil, the dried chilies, cumin and Sichuan pepper and fry for 20 seconds until fragrant. Add the onion and garlic and stir-fry for 2 minutes.'
      },
      {
        title: 'Combine',
        text: 'Return the lamb with the pepper flakes and salt and toss for 1 minute.',
        tip: 'The cumin should coat every piece of lamb. Don\'t be shy with it.'
      },
      {
        title: 'Serve',
        text: 'Toss in the cilantro and scallions and serve with rice, or stuffed into flatbread for a Chinese "burger" (roujiamo).'
      }
    ],
    notes: [
      'Partially freezing the lamb for 30 minutes makes thin slicing much easier.'
    ]
  },
  // ─────────────────────────────── Filipino ───────────────────────────────
  {
    id: 'chicken-adobo',
    name: 'Chicken Adobo',
    short: 'Adobo',
    continent: 'Asia',
    region: 'Filipino',
    emoji: '🍗',
    description: 'The Philippines\' unofficial national dish: chicken braised in vinegar, soy sauce, garlic, bay leaves and black pepper until tender and glazed in a tangy, savory sauce.',
    servings: 4,
    time: { prep: 10, cook: 55, inactive: 30, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['chicken', 'braise', 'one-pot', 'family favorite'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', aisle: 'meat' },
      { qty: 0.33, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { qty: 10, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'distilled white vinegar', note: 'or Filipino cane vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'tsp', item: 'black peppercorns', note: 'lightly crushed', aisle: 'spices' },
      { qty: 3, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', optional: true, staple: true },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the chicken with the soy sauce and garlic and marinate for 30 minutes.'
      },
      {
        title: 'Brown',
        text: 'Lift the chicken out (save the marinade) and pat dry. Brown skin side down in the oil in a Dutch oven over medium-high heat for 6 minutes until golden, then flip for 2 minutes.'
      },
      {
        title: 'Add the liquids',
        text: 'Add the marinade, vinegar, water, peppercorns, bay leaves and sugar. Bring to a boil and let it bubble for 2 minutes without stirring.',
        tip: 'Tradition says don\'t stir after adding vinegar until it boils. It mellows the sharpness.'
      },
      {
        title: 'Braise',
        text: 'Cover and simmer on low for 30 minutes, turning the chicken halfway.'
      },
      {
        title: 'Reduce',
        text: 'Uncover and simmer for 10 minutes until the sauce reduces and turns glossy.'
      },
      {
        title: 'Serve',
        text: 'For crispier skin, broil the chicken for 3 minutes. Serve over rice with plenty of sauce and scallions.'
      }
    ],
    notes: [
      'Adobo improves overnight. Leftover sauce makes amazing garlic fried rice.'
    ]
  },
  {
    id: 'lumpia-shanghai',
    name: 'Lumpia Shanghai',
    short: 'Lumpia',
    continent: 'Asia',
    region: 'Filipino',
    emoji: '🥢',
    description: 'Thin, shatteringly crisp Filipino spring rolls filled with seasoned pork, carrots and onions. A must at every Filipino party, served with sweet chili sauce.',
    servings: 8,
    time: { prep: 45, cook: 30 },
    heat: 0,
    tags: ['pork', 'fried', 'party', 'freezer-friendly'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { qty: 1, item: 'carrots', note: 'finely grated', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'finely minced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 3, item: 'scallions', note: 'finely chopped', aisle: 'produce' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 30, item: 'spring roll wrappers', note: 'thin lumpia wrappers, thawed', aisle: 'frozen' },
      { qty: 4, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'sweet chili sauce', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Filling',
        text: 'Mix the pork, carrot, onion, garlic, scallions, egg, soy sauce, salt and pepper until combined.'
      },
      {
        title: 'Roll',
        text: 'Put 1 tbsp filling in a thin line near the bottom of a wrapper. Fold the bottom over, fold in the sides, and roll up tightly into a thin cigar. Seal the edge with water.',
        tip: 'Roll them thin and tight, about pencil-thick. That\'s what makes them extra crispy.'
      },
      {
        title: 'Fry',
        text: 'Heat the oil to 350°F. Fry in batches for 5 minutes, turning, until deep golden and the filling is cooked through. Drain on a rack.'
      },
      {
        title: 'Serve',
        text: 'Cut in half on the diagonal and serve with sweet chili sauce.'
      }
    ],
    notes: [
      'Freeze rolled, uncooked lumpia and fry from frozen. Perfect for parties.'
    ]
  },
  {
    id: 'pancit-bihon',
    name: 'Pancit Bihon',
    short: 'Pancit',
    continent: 'Asia',
    region: 'Filipino',
    emoji: '🍜',
    description: 'Filipino celebration noodles: thin rice noodles stir-fried with chicken, shrimp and vegetables in a savory soy-garlic broth. Eaten on birthdays for long life.',
    servings: 6,
    time: { prep: 25, cook: 25 },
    heat: 0,
    tags: ['noodles', 'chicken', 'party'],
    ingredients: [
      { qty: 8, unit: 'oz', item: 'rice vermicelli (bihon)', shop: 'rice vermicelli', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.75, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'thinly sliced', aisle: 'meat' },
      { qty: 0.5, unit: 'lb', item: 'large shrimp', note: 'peeled', aisle: 'seafood' },
      { qty: 2, item: 'carrots', note: 'julienned', aisle: 'produce' },
      { qty: 0.25, unit: 'head', item: 'green cabbage', note: 'shredded', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'snow peas', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'oyster sauce', aisle: 'international' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 2, item: 'limes', note: 'or calamansi, in wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soak the noodles',
        text: 'Soak the noodles in warm water for 10 minutes until pliable. Drain.'
      },
      {
        title: 'Chicken & shrimp',
        text: 'Heat the oil in a large wok and cook the onion and garlic for 2 minutes. Add the chicken and cook for 4 minutes, then the shrimp for 2 minutes. Remove the shrimp.'
      },
      {
        title: 'Vegetables',
        text: 'Add the carrots, cabbage and snow peas and stir-fry for 2 minutes.'
      },
      {
        title: 'Noodles',
        text: 'Add the stock, soy sauce, oyster sauce and pepper and bring to a boil. Add the noodles and toss for 4 minutes until they absorb the liquid.',
        tip: 'Keep tossing so the noodles absorb the broth evenly without clumping.'
      },
      {
        title: 'Serve',
        text: 'Return the shrimp, toss with scallions, and serve with lime or calamansi to squeeze over.'
      }
    ],
    notes: [
      'Mix in some canton (egg) noodles for pancit bihon-canton.'
    ]
  },
  {
    id: 'sinigang',
    name: 'Pork Sinigang',
    nativeName: 'Sinigang na Baboy',
    short: 'Sinigang',
    continent: 'Asia',
    region: 'Filipino',
    emoji: '🍲',
    description: 'The Philippines\' beloved sour soup: tender pork ribs in a tangy tamarind broth with radish, long beans, eggplant, tomatoes and leafy greens.',
    servings: 6,
    time: { prep: 20, cook: 90 },
    heat: 1,
    tags: ['pork', 'soup', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'pork ribs', note: 'cut into pieces (or pork belly)', aisle: 'meat' },
      { qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, item: 'yellow onions', note: 'quartered', aisle: 'produce' },
      { qty: 3, item: 'Roma tomatoes', note: 'quartered', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'package', item: 'sinigang mix (tamarind soup base)', note: 'or 3 tbsp tamarind concentrate', aisle: 'international' },
      { qty: 0.5, unit: 'lb', item: 'daikon radish', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'eggplant', note: 'Japanese, sliced', aisle: 'produce' },
      { qty: 8, unit: 'oz', item: 'long beans or green beans', note: 'in 2-inch pieces', shop: 'green beans', aisle: 'produce' },
      { qty: 2, item: 'serrano chilies', note: 'or long green chilies', aisle: 'produce' },
      { qty: 2, unit: 'head', item: 'water spinach (kangkong) or bok choy', shop: 'baby bok choy', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Simmer the pork',
        text: 'Bring the pork and water to a boil, skim the foam, and add the onion and tomatoes. Simmer for 1 hour until the pork is tender.'
      },
      {
        title: 'Sour broth',
        text: 'Stir in the fish sauce and sinigang mix (or tamarind). Taste and add more for a sourer soup.',
        tip: 'Sinigang should be bracingly sour. That\'s the point.'
      },
      {
        title: 'Hard vegetables',
        text: 'Add the radish and simmer for 8 minutes, then the eggplant, beans and chilies for 5 minutes.'
      },
      {
        title: 'Greens',
        text: 'Add the greens and cook for 1 minute until just wilted.'
      },
      {
        title: 'Serve',
        text: 'Serve piping hot with rice and fish sauce with chili on the side for dipping.'
      }
    ],
    notes: [
      'Shrimp sinigang (sinigang na hipon) is a quick alternative. Add shrimp at the end.'
    ]
  },
  // ──────────────────────────────── Indian ────────────────────────────────
  {
    id: 'aloo-gobi',
    name: 'Aloo Gobi',
    short: 'Aloo gobi',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🥔',
    description: 'A dry, homestyle curry of potatoes and cauliflower cooked with cumin, turmeric, ginger and tomato until tender with crisp, golden edges.',
    servings: 4,
    time: { prep: 15, cook: 35 },
    heat: 1,
    tags: ['vegan', 'vegetarian', 'weeknight'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'serrano chilies', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 1, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in 1-inch cubes', aisle: 'produce' },
      { qty: 1, unit: 'head', item: 'cauliflower', note: 'in florets', aisle: 'produce' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Tadka',
        text: 'Heat the oil in a wide pan and sizzle the cumin seeds for 30 seconds. Add the onion and cook for 6 minutes.'
      },
      {
        title: 'Masala',
        text: 'Add the garlic, ginger, chili, turmeric, coriander and chili powder for 1 minute, then the tomato for 3 minutes.'
      },
      {
        title: 'Vegetables',
        text: 'Add the potatoes, cauliflower and salt and toss to coat. Cover and cook on medium-low for 20 minutes, stirring occasionally, until tender.',
        tip: 'No water needed. The vegetables steam in their own moisture.'
      },
      {
        title: 'Crisp',
        text: 'Uncover, turn up the heat, and cook for 5 minutes to brown the edges. Sprinkle with garam masala and cilantro.'
      }
    ],
    notes: [
      'Serve with roti or as a side to dal and rice.'
    ]
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    nativeName: 'Murgh Makhani',
    short: 'Butter chicken',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🍗',
    description: 'Delhi\'s silky, gently spiced classic: yogurt-marinated chicken charred under the broiler, then simmered in a buttery tomato and cream sauce perfumed with dried fenugreek.',
    servings: 4,
    time: { prep: 20, cook: 40, inactive: 60, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['curry', 'chicken', 'creamy', 'crowd-pleaser'],
    ingredients: [
      { group: 'Marinade', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'cut into 1½-inch pieces', aisle: 'meat' },
      { group: 'Marinade', qty: 0.5, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { group: 'Marinade', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Marinade', qty: 3, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Marinade', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', note: 'or ½ tsp paprika + ¼ tsp cayenne', aisle: 'spices' },
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 1, item: 'yellow onions', note: 'finely chopped', aisle: 'produce' },
      { group: 'Sauce', qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Sauce', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Sauce', qty: 14, unit: 'oz', item: 'canned crushed tomatoes', note: '1 can', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 0.5, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Sauce', qty: 0.75, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'dried fenugreek leaves', note: 'kasuri methi', aisle: 'international' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'basmati rice', note: 'uncooked', aisle: 'pantry' },
      { group: 'To serve', qty: 4, item: 'naan', aisle: 'bakery', optional: true }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Stir together the yogurt, lemon juice, garlic, ginger, garam masala, chili powder, turmeric and salt. Add the chicken, coat well, cover and refrigerate for at least 1 hour or up to overnight.'
      },
      {
        title: 'Char the chicken',
        text: 'Heat the broiler with a rack about 6 inches from the element. Spread the chicken on a foil-lined sheet pan and broil for 10 minutes, flipping halfway, until charred in spots. It will finish cooking in the sauce.',
        tip: 'Those blackened edges are where the smoky "tandoor" flavor comes from.'
      },
      {
        title: 'Soften the onion',
        text: 'Melt 2 tbsp of the butter with the oil in a large, deep skillet over medium heat. Cook the onion for 8 minutes, stirring, until soft and golden.'
      },
      {
        title: 'Bloom the aromatics',
        text: 'Add the garlic and ginger and cook for 1 minute. Stir in the chili powder, cumin, coriander and garam masala and cook for 30 seconds until fragrant.'
      },
      {
        title: 'Simmer the sauce',
        text: 'Add the tomatoes, sugar, salt and water. Simmer, stirring now and then, for 15 minutes until thick and a shade darker.'
      },
      {
        title: 'Blend',
        text: 'Off the heat, blend the sauce until completely smooth with an immersion blender (or carefully in a regular blender), then return it to the pan.',
        tip: 'Optional, but this is what makes restaurant butter chicken so velvety.'
      },
      {
        title: 'Add cream & chicken',
        text: 'Stir in the cream, then add the chicken and any juices. Simmer gently for 10 minutes until the chicken is cooked through.'
      },
      {
        title: 'Finish & serve',
        text: 'Crush the fenugreek leaves between your palms over the pan and stir in the remaining 2 tbsp butter. Taste for salt, scatter with cilantro, and serve with rice or naan.'
      }
    ],
    notes: [
      'Kasuri methi is the signature flavor — find it at Indian grocers or online. It keeps for a year.',
      'Keeps 4 days refrigerated; freezes well for 3 months.'
    ]
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    short: 'Chana masala',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🫘',
    description: 'Punjab\'s beloved chickpea curry: tangy, warmly spiced and naturally vegan. Mashing a few chickpeas thickens the gravy, and a finish of garam masala and lemon makes it pop.',
    servings: 4,
    time: { prep: 15, cook: 40 },
    heat: 2,
    tags: ['curry', 'vegan', 'vegetarian', 'budget', 'weeknight'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { qty: 1, item: 'large yellow onion', note: 'finely chopped', shop: 'yellow onions', aisle: 'produce' },
      { qty: 5, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'serrano chili', note: 'minced', shop: 'serrano chilies', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 3, item: 'Roma tomatoes', note: 'finely chopped', aisle: 'produce' },
      { qty: 2, unit: 'can', item: 'chickpeas', note: '15 oz each, drained and rinsed', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'amchur', note: 'dried mango powder', aisle: 'international', optional: true },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'basmati rice', note: 'uncooked, to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Sizzle the cumin',
        text: 'Heat the oil in a heavy pot over medium heat. Add the cumin seeds and let them sizzle for 30 seconds until a shade darker.'
      },
      {
        title: 'Brown the onion',
        text: 'Add the onion and cook for 10 minutes, stirring often, until golden brown.'
      },
      {
        title: 'Aromatics & spices',
        text: 'Add the garlic, ginger and serrano and cook for 1 minute. Stir in the coriander, ground cumin, chili powder and turmeric and cook for 30 seconds.'
      },
      {
        title: 'Cook the tomatoes',
        text: 'Add the tomatoes and cook for 8 minutes, mashing them, until they collapse and the oil starts to separate at the edges.',
        tip: 'Oil pooling at the edges is the classic sign the masala is properly cooked.'
      },
      {
        title: 'Simmer the chickpeas',
        text: 'Add the chickpeas, water and salt. Mash a handful of chickpeas against the side of the pot to thicken the gravy. Simmer, partly covered, for 20 minutes.'
      },
      {
        title: 'Finish',
        text: 'Stir in the garam masala, amchur (if using) and lemon juice. Taste for salt and sourness, top with cilantro and serve with rice, roti or bhatura.'
      }
    ],
    notes: [
      'Even better the next day. Keeps 5 days refrigerated.',
      'Starting from dried chickpeas? Soak 1 cup overnight and pressure-cook or simmer until very tender.'
    ]
  },
  {
    id: 'chettinad-chicken',
    name: 'Chicken Chettinad',
    short: 'Chettinad',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'South Indian · Tamil Nadu',
    emoji: '🌶️',
    description: 'A fiery, peppery South Indian curry from Tamil Nadu, built on a freshly roasted and ground masala of coconut, black pepper, fennel, chilies and star anise.',
    servings: 4,
    time: { prep: 25, cook: 45 },
    heat: 3,
    tags: ['chicken', 'curry', 'spicy'],
    ingredients: [
      { group: 'Chettinad masala', qty: 0.33, unit: 'cup', item: 'unsweetened shredded coconut', aisle: 'pantry' },
      { group: 'Chettinad masala', qty: 6, item: 'dried árbol chilies', aisle: 'international' },
      { group: 'Chettinad masala', qty: 1, unit: 'tbsp', item: 'coriander seeds', aisle: 'spices' },
      { group: 'Chettinad masala', qty: 2, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { group: 'Chettinad masala', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Chettinad masala', qty: 1, unit: 'tsp', item: 'fennel seeds', aisle: 'spices' },
      { group: 'Chettinad masala', qty: 1, item: 'star anise', aisle: 'spices' },
      { group: 'Chettinad masala', qty: 4, item: 'whole cloves', aisle: 'spices' },
      { group: 'Curry', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 15, item: 'curry leaves', note: 'fresh', aisle: 'international' },
      { group: 'Curry', qty: 2, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Curry', qty: 5, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Curry', qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Curry', qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'Curry', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Curry', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'in chunks', aisle: 'meat' },
      { group: 'Curry', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Curry', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Roast the masala',
        text: 'Dry-roast the coconut and all the whole spices in a skillet over medium-low heat for 5 minutes until the coconut is golden. Cool, then grind into a fine powder with a splash of water.',
        tip: 'The freshly roasted masala is the soul of Chettinad cooking. Don\'t skip it.'
      },
      {
        title: 'Base',
        text: 'Heat the oil, add the curry leaves (they\'ll splutter), then the onions and cook for 10 minutes until golden.'
      },
      {
        title: 'Aromatics',
        text: 'Add the garlic and ginger for 1 minute, then the tomatoes and turmeric for 5 minutes until soft.'
      },
      {
        title: 'Chicken',
        text: 'Add the chicken, salt and ground masala and stir to coat. Cook for 5 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the water and simmer for 20 minutes until the chicken is cooked and the sauce is thick. Scatter with cilantro and serve with rice.'
      }
    ],
    notes: [
      'Find fresh curry leaves at Indian grocers. Freeze them for long storage.'
    ]
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    short: 'Tikka masala',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'British-Indian',
    emoji: '🥘',
    description: 'Smoky grilled chicken tikka folded into a rich, onion-forward tomato and cream masala. Bolder and spicier than butter chicken, with a deeper onion base.',
    servings: 4,
    time: { prep: 25, cook: 45, inactive: 60, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['curry', 'chicken', 'creamy', 'grilled'],
    ingredients: [
      { group: 'Tikka marinade', qty: 2, unit: 'lb', item: 'boneless skinless chicken breasts', note: 'cut into 1½-inch chunks', aisle: 'meat' },
      { group: 'Tikka marinade', qty: 0.75, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { group: 'Tikka marinade', qty: 1, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Tikka marinade', qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Tikka marinade', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Tikka marinade', qty: 2, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Tikka marinade', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Tikka marinade', qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { group: 'Tikka marinade', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Tikka marinade', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Masala sauce', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Masala sauce', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Masala sauce', qty: 2, item: 'yellow onions', note: 'finely chopped', aisle: 'produce' },
      { group: 'Masala sauce', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Masala sauce', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Masala sauce', qty: 1, item: 'serrano chili', note: 'minced', shop: 'serrano chilies', aisle: 'produce' },
      { group: 'Masala sauce', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Masala sauce', qty: 2, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Masala sauce', qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Masala sauce', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Masala sauce', qty: 1, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Masala sauce', qty: 28, unit: 'oz', item: 'canned crushed tomatoes', note: '1 large can', aisle: 'pantry' },
      { group: 'Masala sauce', qty: 1, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Masala sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Masala sauce', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'basmati rice', note: 'uncooked', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate the tikka',
        text: 'Mix the yogurt, lemon juice, garlic, ginger and all the marinade spices with the salt. Toss in the chicken, cover, and refrigerate for at least 1 hour, or up to a day.'
      },
      {
        title: 'Grill the tikka',
        text: 'Thread the chicken onto skewers if you like. Grill over high heat or broil close to the element for 12 minutes, turning once or twice, until charred at the edges. It\'s fine if the centers are slightly underdone.'
      },
      {
        title: 'Build the onion base',
        text: 'Heat the oil and butter in a large pot over medium heat. Cook the onions for 10 minutes, stirring often, until deep golden.'
      },
      {
        title: 'Aromatics & spices',
        text: 'Add the garlic, ginger and serrano and cook for 1 minute. Stir in the tomato paste, coriander, garam masala, cumin and smoked paprika and cook for 2 minutes until the paste darkens to brick red.'
      },
      {
        title: 'Simmer the masala',
        text: 'Add the crushed tomatoes, sugar and salt. Simmer for 15 minutes, stirring occasionally, until thick.',
        tip: 'Blend it smooth at this point if you prefer a silky sauce.'
      },
      {
        title: 'Combine',
        text: 'Stir in the cream, then add the tikka and any juices. Simmer gently for 10 minutes until the chicken is cooked through and the sauce coats it.'
      },
      {
        title: 'Serve',
        text: 'Taste and adjust salt, top with cilantro, and serve with basmati rice and naan.'
      }
    ],
    notes: [
      'Thighs work too and are harder to overcook — use 2 lb boneless skinless thighs.',
      'Makes excellent leftovers; reheat gently with a splash of water.'
    ]
  },
  {
    id: 'chicken-vindaloo',
    name: 'Chicken Vindaloo',
    short: 'Vindaloo',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Goan',
    emoji: '🍛',
    description: 'A fiery, tangy Goan curry. Chicken thighs marinate in a paste of dried Kashmiri chilies, warm spices, garlic and vinegar, then braise until tender in a deep-red sauce.',
    servings: 4,
    time: { prep: 25, cook: 55, inactive: 60, inactiveLabel: 'marinate' },
    heat: 3,
    tags: ['curry', 'spicy', 'chicken', 'make-ahead'],
    ingredients: [
      { group: 'Vindaloo paste', qty: 10, item: 'dried Kashmiri red chilies', note: 'stems removed; shake out seeds for less heat', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 0.5, unit: 'cup', item: 'apple cider vinegar', note: 'or coconut/palm vinegar', aisle: 'pantry' },
      { group: 'Vindaloo paste', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 1, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 0.5, unit: 'tsp', item: 'black mustard seeds', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 6, item: 'whole cloves', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 1, unit: 'stick', item: 'cinnamon', note: '2-inch', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Vindaloo paste', qty: 8, item: 'garlic cloves', note: 'peeled', aisle: 'produce' },
      { group: 'Vindaloo paste', qty: 2, unit: 'in', item: 'fresh ginger', note: 'peeled and sliced', aisle: 'produce' },
      { group: 'Vindaloo paste', qty: 1, unit: 'tbsp', item: 'brown sugar', note: 'or jaggery', aisle: 'pantry', staple: true },
      { group: 'Vindaloo paste', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'cut into 1½-inch pieces', aisle: 'meat' },
      { group: 'Curry', qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'or ghee', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 2, item: 'yellow onions', note: 'finely chopped', aisle: 'produce' },
      { group: 'Curry', qty: 2, item: 'Roma tomatoes', note: 'chopped', aisle: 'produce' },
      { group: 'Curry', qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'basmati rice', note: 'uncooked, cooked to package directions', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak the chilies',
        text: 'Warm the vinegar until steaming (30 seconds in the microwave is plenty). Pour it over the dried chilies in a small bowl and let them soften for 20 minutes.'
      },
      {
        title: 'Toast the whole spices',
        text: 'In a dry skillet over medium heat, toast the cumin, peppercorns, mustard seeds, cloves, cardamom and cinnamon, shaking the pan, for 2 minutes until fragrant and the mustard seeds start to pop.',
        tip: 'Pull them off the heat the moment they smell toasty — burnt spices turn bitter.'
      },
      {
        title: 'Blend the paste',
        text: 'Add the chilies with their vinegar, the toasted spices, turmeric, garlic, ginger, sugar and salt to a blender. Blend until completely smooth, adding a splash of water if needed to keep it moving.'
      },
      {
        title: 'Marinate',
        text: 'Toss the chicken with all of the paste in a bowl. Cover and refrigerate for at least 1 hour, or up to overnight for the best flavor.'
      },
      {
        title: 'Brown the onions',
        text: 'Heat the oil in a heavy pot or Dutch oven over medium heat. Cook the onions, stirring often, for 12 minutes until deep golden brown.',
        tip: 'Well-browned onions give the sauce its body and sweetness — don\'t rush this step.'
      },
      {
        title: 'Cook down the tomatoes',
        text: 'Add the tomatoes and cook for 5 minutes, mashing with your spoon, until they break down into a jammy sauce.'
      },
      {
        title: 'Sear the chicken',
        text: 'Add the chicken and every bit of marinade. Cook, stirring, for 5 minutes until the paste darkens slightly and coats the chicken.'
      },
      {
        title: 'Braise',
        text: 'Stir in the water and bring to a simmer. Cover, lower the heat, and cook gently for 25 minutes, stirring once or twice so nothing sticks.'
      },
      {
        title: 'Thicken & season',
        text: 'Uncover and simmer for 10 minutes until the sauce clings to the chicken. Taste: add salt if flat, a pinch of sugar if too sharp, or a splash of vinegar if it needs more tang.'
      },
      {
        title: 'Serve',
        text: 'Scatter with cilantro and serve with basmati rice.',
        tip: 'Vindaloo tastes even better the next day — the flavors deepen overnight.'
      }
    ],
    notes: [
      'Kashmiri chilies give vivid color with moderate heat. For more fire, swap 2–3 of them for dried árbol chilies.',
      'Keeps 4 days in the fridge or 3 months in the freezer.'
    ]
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    short: 'Dal makhani',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🫘',
    description: 'Black lentils and kidney beans slow-simmered for hours with butter, cream and tomato into a silky, smoky, indulgent dal. A Punjabi dhaba legend.',
    servings: 6,
    time: { prep: 15, cook: 150, inactive: 720, inactiveLabel: 'soak lentils' },
    heat: 1,
    tags: ['vegetarian', 'lentils', 'creamy'],
    ingredients: [
      { qty: 1, unit: 'cup', item: 'whole black lentils (urad dal)', shop: 'whole urad dal', aisle: 'international' },
      { qty: 2, unit: 'oz', item: 'dried red kidney beans', note: 'about ¼ cup', aisle: 'pantry' },
      { qty: 6, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 4, unit: 'oz', item: 'tomato purée', shop: 'canned tomato sauce', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'dried fenugreek leaves', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the lentils and beans overnight (12 hours). Drain.'
      },
      {
        title: 'Cook',
        text: 'Simmer them in the water with the salt for 1.5 hours until completely soft (or 30 minutes in a pressure cooker).'
      },
      {
        title: 'Masala',
        text: 'Melt 2 tbsp butter, sizzle the cumin for 30 seconds, then cook the onion for 8 minutes. Add the garlic, ginger and chili powder for 1 minute, then the tomato purée for 5 minutes.'
      },
      {
        title: 'Slow simmer',
        text: 'Add the masala to the lentils and simmer on low for 45 minutes, stirring and mashing occasionally, until thick and creamy.',
        tip: 'The longer it simmers, the better. Restaurants cook it overnight.'
      },
      {
        title: 'Finish',
        text: 'Stir in the cream, the remaining butter, garam masala and crushed fenugreek. Serve with naan or rice.'
      }
    ],
    notes: [
      'For smoky dhungar flavor, place a hot coal in a foil cup on the dal, add a drop of ghee, and cover for 2 minutes.'
    ]
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    short: 'Dal tadka',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'North Indian',
    emoji: '🥣',
    description: 'Everyday yellow lentils simmered until creamy, then finished with a sizzling tadka of ghee, cumin, garlic, chilies and tomato poured over the top.',
    servings: 4,
    time: { prep: 10, cook: 40 },
    heat: 1,
    tags: ['vegetarian', 'lentils', 'budget', 'weeknight'],
    ingredients: [
      { group: 'Dal', qty: 1, unit: 'cup', item: 'toor dal or yellow split peas', note: 'rinsed', shop: 'toor dal', aisle: 'international' },
      { group: 'Dal', qty: 4, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Dal', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Dal', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tadka', qty: 2, unit: 'tbsp', item: 'ghee', aisle: 'international' },
      { group: 'Tadka', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Tadka', qty: 2, item: 'dried árbol chilies', aisle: 'international' },
      { group: 'Tadka', qty: 0.5, item: 'yellow onion', note: 'finely diced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Tadka', qty: 4, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { group: 'Tadka', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Tadka', qty: 1, item: 'serrano chilies', note: 'slit', aisle: 'produce' },
      { group: 'Tadka', qty: 1, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'Tadka', qty: 0.5, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { group: 'Tadka', qty: 0.5, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Cook the dal',
        text: 'Simmer the dal with the water, turmeric and salt for 30 minutes, stirring occasionally, until soft and creamy. Whisk to break it down and add water if it\'s too thick.'
      },
      {
        title: 'Tadka',
        text: 'Heat the ghee in a small pan. Add the cumin seeds and dried chilies and let them sizzle for 30 seconds. Add the onion and cook for 5 minutes.'
      },
      {
        title: 'Aromatics',
        text: 'Add the garlic, ginger and green chili for 1 minute, then the tomato, chili powder and garam masala for 3 minutes.'
      },
      {
        title: 'Pour & serve',
        text: 'Pour the sizzling tadka over the dal, scatter with cilantro, and serve with rice.',
        tip: 'Pour it on just before serving, while it\'s still sizzling.'
      }
    ],
    notes: [
      'Masoor (red lentil) dal cooks faster, in about 20 minutes.'
    ]
  },
  {
    id: 'chicken-biryani',
    name: 'Hyderabadi Chicken Biryani',
    short: 'Biryani',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Hyderabadi',
    emoji: '🍚',
    description: 'A celebration dish: spiced yogurt-marinated chicken layered with fragrant basmati, crispy fried onions, fresh mint and saffron milk, then sealed and steamed (dum).',
    servings: 6,
    time: { prep: 40, cook: 80, inactive: 60, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['chicken', 'rice', 'party', 'weekend project'],
    ingredients: [
      { group: 'Chicken', qty: 2.5, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { group: 'Chicken', qty: 5, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Chicken', qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Chicken', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 2, item: 'serrano chilies', note: 'slit', aisle: 'produce' },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'fresh mint', note: 'leaves, divided', aisle: 'produce' },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped, divided', aisle: 'produce' },
      { group: 'Fried onions', qty: 3, item: 'large yellow onions', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Fried onions', qty: 0.5, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 2.5, unit: 'cup', item: 'basmati rice', note: 'aged, long-grain', aisle: 'pantry' },
      { group: 'Rice', qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { group: 'Rice', qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { group: 'Rice', qty: 4, item: 'whole cloves', aisle: 'spices' },
      { group: 'Rice', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Rice', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Rice', qty: 2, unit: 'tbsp', item: 'kosher salt', note: 'for the rice water', aisle: 'pantry', staple: true },
      { group: 'Layering', qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { group: 'Layering', qty: 0.25, unit: 'cup', item: 'whole milk', note: 'warm', aisle: 'dairy' },
      { group: 'Layering', qty: 3, unit: 'tbsp', item: 'ghee', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Mix the yogurt, garlic, ginger, chili powder, turmeric, garam masala, lemon juice, salt, green chilies and half the mint and cilantro. Coat the chicken and marinate for at least 1 hour (overnight is best).'
      },
      {
        title: 'Soak the rice',
        text: 'Rinse the rice until the water runs clear, then soak it for 30 minutes.'
      },
      {
        title: 'Fry the onions',
        text: 'Fry the onions in the oil over medium-high heat for 20 minutes, stirring often, until deep golden-brown and crisp. Drain, save the oil, and mix half the onions into the chicken.',
        tip: 'These crispy onions (birista) carry a lot of the biryani\'s flavor. Take them dark.'
      },
      {
        title: 'Cook the chicken',
        text: 'Steep the saffron in the warm milk. Heat 3 tbsp of the onion oil in a heavy Dutch oven, add the chicken and all its marinade, and cook covered over medium heat for 15 minutes, stirring once, until about three-quarters cooked and the sauce is thick.'
      },
      {
        title: 'Par-boil the rice',
        text: 'Meanwhile, bring 12 cups of water to a boil with the whole spices and 2 tbsp salt. Add the drained rice and boil for 5 minutes, until about 70% cooked (it should snap with a firm core). Drain.'
      },
      {
        title: 'Layer',
        text: 'Spread the rice over the chicken. Scatter with the remaining mint, cilantro and fried onions, drizzle with the saffron milk and ghee.'
      },
      {
        title: 'Dum (steam)',
        text: 'Seal the pot tightly with foil, then the lid. Cook on medium-low for 25 minutes, then rest off the heat, still sealed, for 10 minutes.'
      },
      {
        title: 'Serve',
        text: 'Gently scoop from the side so each serving gets rice and chicken. Serve with raita.'
      }
    ],
    notes: [
      'Quick raita: stir grated cucumber, a pinch of cumin and salt into 1 cup yogurt.'
    ]
  },
  {
    id: 'kerala-fish-curry',
    name: 'Kerala Fish Curry',
    nativeName: 'Meen Curry',
    short: 'Fish curry',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'South Indian · Kerala',
    emoji: '🐟',
    description: 'Fish simmered in a tangy, coconut-rich sauce with mustard seeds, curry leaves, tamarind and Kashmiri chili. Bright red and coastal.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 2,
    tags: ['seafood', 'fish', 'curry', 'coconut'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'firm white fish fillets', note: 'kingfish, pomfret or cod, in chunks', aisle: 'seafood' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'coconut oil', note: 'or vegetable oil', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'black mustard seeds', aisle: 'spices' },
      { qty: 15, item: 'curry leaves', aisle: 'international' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'julienned', aisle: 'produce' },
      { qty: 2, item: 'serrano chilies', note: 'slit', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 1, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { qty: 1.5, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Season the fish',
        text: 'Rub the fish with the turmeric and half the salt.'
      },
      {
        title: 'Temper',
        text: 'Heat the coconut oil, add the mustard seeds, and when they pop, add the curry leaves. Add the onion and cook for 6 minutes.'
      },
      {
        title: 'Masala',
        text: 'Add the garlic, ginger and chilies for 1 minute, then the chili powder and coriander for 30 seconds. Add the tomato and cook for 4 minutes.'
      },
      {
        title: 'Sauce',
        text: 'Stir in the tamarind, coconut milk and remaining salt and bring to a gentle simmer.'
      },
      {
        title: 'Fish',
        text: 'Slide in the fish and simmer gently for 8 minutes without stirring, just swirling the pan, until cooked through.',
        tip: 'Swirl, don\'t stir, so the fish stays in chunks.'
      },
      {
        title: 'Serve',
        text: 'Serve with rice.'
      }
    ],
    notes: [
      'Traditionally soured with kudampuli (Malabar tamarind). Regular tamarind works great.'
    ]
  },
  {
    id: 'rogan-josh',
    name: 'Lamb Rogan Josh',
    short: 'Rogan josh',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Kashmiri',
    emoji: '🍖',
    description: 'Kashmir\'s aromatic lamb curry: tender lamb braised in yogurt with Kashmiri chili, fennel and dried ginger into a deep red, fragrant gravy.',
    servings: 6,
    time: { prep: 20, cook: 105 },
    heat: 2,
    tags: ['lamb', 'curry', 'dinner party'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'ghee', note: 'or vegetable oil', aisle: 'international' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { qty: 1, item: 'black cardamom pod', aisle: 'spices', optional: true },
      { qty: 4, item: 'whole cloves', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 2, unit: 'lb', item: 'boneless lamb shoulder', note: 'in 1½-inch cubes', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'ground fennel', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground ginger', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 1, unit: 'cup', item: 'plain whole-milk yogurt', note: 'whisked', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 2, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Whole spices',
        text: 'Heat the ghee in a Dutch oven and fry the whole spices and bay leaves for 30 seconds until fragrant.'
      },
      {
        title: 'Brown the lamb',
        text: 'Add the lamb and brown for 8 minutes. Add the onion and cook for 8 minutes more.'
      },
      {
        title: 'Masala',
        text: 'Add the garlic and ginger for 1 minute, then the chili powder, fennel, ground ginger and coriander for 1 minute.'
      },
      {
        title: 'Yogurt',
        text: 'Lower the heat and add the yogurt a spoonful at a time, stirring constantly so it doesn\'t split. Cook for 5 minutes.',
        tip: 'Adding yogurt slowly over low heat keeps the sauce smooth.'
      },
      {
        title: 'Braise',
        text: 'Add the water and salt, cover, and simmer on low for 1 hour 15 minutes until the lamb is tender and the sauce is deep red and thick.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with garam masala and serve with rice or naan.'
      }
    ],
    notes: [
      'Kashmiri chili gives color more than heat. Don\'t substitute cayenne one-for-one.'
    ]
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    short: 'Palak paneer',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🥬',
    description: 'Golden cubes of paneer in a vivid, velvety spinach sauce spiced with cumin, garlic, ginger and garam masala, finished with a swirl of cream.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 1,
    tags: ['vegetarian', 'curry', 'weeknight'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'fresh spinach', note: 'or 10 oz frozen, thawed', aisle: 'produce' },
      { qty: 8, unit: 'oz', item: 'paneer', note: 'in 1-inch cubes', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'ghee', note: 'or vegetable oil, divided', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { qty: 1, item: 'yellow onions', note: 'finely chopped', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'serrano chilies', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'finely chopped', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'dried fenugreek leaves', aisle: 'international' },
      { qty: 0.5, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 1.5, unit: 'cup', item: 'basmati rice', note: 'or serve with naan', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Blanch the spinach',
        text: 'Blanch the spinach in boiling salted water for 1 minute, then plunge into ice water. Squeeze lightly and blend with ¼ cup ice water into a smooth purée.',
        tip: 'The ice bath keeps the sauce bright green instead of khaki.'
      },
      {
        title: 'Brown the paneer',
        text: 'Fry the paneer in 1 tbsp ghee over medium-high heat for 3 minutes, turning, until golden on a few sides. Set aside.'
      },
      {
        title: 'Masala',
        text: 'Add the remaining ghee and the cumin seeds and let them sizzle for 30 seconds. Cook the onion for 8 minutes until golden, then add the garlic, ginger and chili for 1 minute.'
      },
      {
        title: 'Tomatoes & spices',
        text: 'Add the tomatoes and cook for 5 minutes until soft. Stir in the coriander, turmeric and chili powder for 30 seconds.'
      },
      {
        title: 'Spinach',
        text: 'Add the spinach purée and salt and simmer for 5 minutes. Don\'t cook it longer, or it loses its color.'
      },
      {
        title: 'Finish',
        text: 'Stir in the cream, crushed fenugreek leaves, garam masala and paneer and simmer for 2 minutes. Serve with rice or naan.'
      }
    ],
    notes: [
      'To keep store-bought paneer soft, soak the browned cubes in hot salted water until you add them.'
    ]
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji',
    short: 'Pav bhaji',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Mumbai street food',
    emoji: '🍞',
    description: 'Mumbai\'s buttery street-food favorite: a spiced, mashed mixed-vegetable curry served with soft buttered and toasted dinner rolls, raw onion and lime.',
    servings: 6,
    time: { prep: 20, cook: 40 },
    heat: 2,
    tags: ['vegetarian', 'street food', 'vegetables'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'russet potatoes', note: 'peeled and cubed', aisle: 'produce' },
      { qty: 0.5, unit: 'head', item: 'cauliflower', note: 'in florets (about 2 cups)', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { qty: 1, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'divided, plus more for the buns', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'finely diced, plus more to serve', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'finely diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 4, item: 'Roma tomatoes', note: 'finely chopped', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'pav bhaji masala', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 2, item: 'limes', note: 'in wedges', aisle: 'produce' },
      { qty: 12, item: 'soft dinner rolls', note: 'pav', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Boil the vegetables',
        text: 'Boil the potatoes, cauliflower, peas and carrot in salted water for 15 minutes until very soft. Drain and mash.'
      },
      {
        title: 'Masala',
        text: 'Melt 3 tbsp butter in a wide pan and cook the onion and pepper for 6 minutes. Add the garlic and ginger for 1 minute, then the tomatoes, pav bhaji masala and chili powder. Cook for 8 minutes until the tomatoes break down.'
      },
      {
        title: 'Bhaji',
        text: 'Add the mashed vegetables, salt and ½ cup water. Mash everything together and simmer for 10 minutes. Stir in 2 tbsp butter and the cilantro.',
        tip: 'Mash right in the pan for the authentic texture. Street vendors use a flat masher on a griddle.'
      },
      {
        title: 'Toast the pav',
        text: 'Split the rolls, butter generously, and toast on a hot griddle until golden, with a sprinkle of pav bhaji masala.'
      },
      {
        title: 'Serve',
        text: 'Serve the bhaji topped with butter, raw onion and cilantro, with lime and the toasted pav.'
      }
    ],
    notes: [
      'Pav bhaji masala is sold in Indian grocers (Everest or MDH).'
    ]
  },
  {
    id: 'samosas',
    name: 'Punjabi Samosas',
    short: 'Samosas',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🥟',
    description: 'Flaky, crisp pastry pyramids stuffed with spiced potato and peas, fried slowly until blistered and golden. Serve with tamarind and mint chutneys.',
    servings: 6,
    time: { prep: 60, cook: 40, inactive: 30, inactiveLabel: 'rest dough' },
    heat: 1,
    tags: ['vegetarian', 'fried', 'snack', 'party'],
    ingredients: [
      { group: 'Pastry', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Pastry', qty: 1, unit: 'tsp', item: 'ajwain (carom seeds)', aisle: 'international', optional: true },
      { group: 'Pastry', qty: 0.75, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pastry', qty: 0.25, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Pastry', qty: 0.33, unit: 'cup', item: 'cold water', shop: 'water', aisle: 'none' },
      { group: 'Filling', qty: 1.5, unit: 'lb', item: 'russet potatoes', note: 'boiled and roughly mashed', aisle: 'produce' },
      { group: 'Filling', qty: 0.5, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'coriander seeds', note: 'crushed', aisle: 'spices' },
      { group: 'Filling', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Filling', qty: 1, item: 'serrano chilies', note: 'minced', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'amchur', note: 'dried mango powder', aisle: 'international' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Frying', qty: 6, unit: 'cup', item: 'vegetable oil', aisle: 'pantry' },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'tamarind chutney', aisle: 'international' },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'mint chutney', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Pastry',
        text: 'Mix the flour, ajwain and salt, then rub in the oil until it holds together when squeezed. Add cold water little by little to make a stiff dough. Cover and rest for 30 minutes.',
        tip: 'A stiff dough with plenty of fat gives blistered, flaky samosas.'
      },
      {
        title: 'Filling',
        text: 'Heat the oil and sizzle the cumin and coriander for 30 seconds. Add the ginger, chili and peas for 2 minutes, then the potatoes, garam masala, amchur, salt and cilantro. Mix and cool.'
      },
      {
        title: 'Shape',
        text: 'Divide the dough into 6 balls, roll each into an oval and cut in half. Fold each half into a cone, sealing the seam with water, fill with potato, and pinch the top closed.'
      },
      {
        title: 'Fry low',
        text: 'Heat the oil to only 300°F. Fry the samosas for 12 minutes, turning, until pale golden, then raise to 350°F for 3 minutes until deep golden.'
      },
      {
        title: 'Serve',
        text: 'Serve hot with tamarind and mint chutneys.'
      }
    ],
    notes: [
      'Shaped samosas freeze well. Fry from frozen at low heat.'
    ]
  },
  {
    id: 'rajma-chawal',
    name: 'Rajma Chawal',
    short: 'Rajma',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'Punjabi',
    emoji: '🫘',
    description: 'North India\'s Sunday comfort meal: red kidney beans simmered in a thick, spiced onion-tomato gravy until creamy, served over steamed basmati.',
    servings: 4,
    time: { prep: 15, cook: 60 },
    heat: 1,
    tags: ['vegan', 'beans', 'comfort'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'or ghee', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'serrano chilies', note: 'minced', aisle: 'produce' },
      { qty: 3, item: 'Roma tomatoes', note: 'puréed', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 2, unit: 'can', item: 'red kidney beans', note: '15 oz each, drained', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Tadka',
        text: 'Heat the oil, sizzle the cumin and bay leaf for 30 seconds, then cook the onion for 10 minutes until golden.'
      },
      {
        title: 'Masala',
        text: 'Add the garlic, ginger and chili for 1 minute, then the tomato purée and spices. Cook for 8 minutes until the oil separates.'
      },
      {
        title: 'Beans',
        text: 'Add the beans, water and salt. Mash a few beans to thicken and simmer for 25 minutes until thick and creamy.',
        tip: 'Simmer long enough for the gravy to become rich and the beans soft.'
      },
      {
        title: 'Serve',
        text: 'Stir in the garam masala and cilantro and serve over basmati rice.'
      }
    ],
    notes: [
      'From dried beans: soak 1 cup overnight and pressure-cook for 20 minutes first.'
    ]
  },
  {
    id: 'sambar',
    name: 'Sambar',
    short: 'Sambar',
    continent: 'Asia',
    region: 'Indian',
    cuisine: 'South Indian',
    emoji: '🥣',
    description: 'South India\'s tangy lentil and vegetable stew, flavored with tamarind and sambar powder and finished with a crackling tempering of mustard seeds and curry leaves.',
    servings: 6,
    time: { prep: 15, cook: 45 },
    heat: 1,
    tags: ['vegan', 'lentils', 'vegetables'],
    ingredients: [
      { qty: 0.75, unit: 'cup', item: 'toor dal or yellow split peas', shop: 'toor dal', aisle: 'international' },
      { qty: 5, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 2, item: 'carrots', note: 'in chunks', aisle: 'produce' },
      { qty: 1, item: 'eggplant', note: 'small, in chunks', aisle: 'produce' },
      { qty: 1, item: 'Roma tomatoes', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, item: 'yellow onion', note: 'in chunks', shop: 'yellow onions', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'sambar powder', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'brown sugar', note: 'or jaggery', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black mustard seeds', aisle: 'spices' },
      { qty: 2, item: 'dried árbol chilies', aisle: 'international' },
      { qty: 15, item: 'curry leaves', aisle: 'international' },
      { item: 'asafoetida (hing)', note: 'a pinch', aisle: 'international', optional: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Cook the dal',
        text: 'Simmer the dal in 3 cups water with the turmeric for 30 minutes until mushy. Mash well.'
      },
      {
        title: 'Vegetables',
        text: 'Meanwhile, simmer the carrots, eggplant, tomato and onion in the remaining 2 cups water for 12 minutes until tender.'
      },
      {
        title: 'Combine',
        text: 'Add the mashed dal, sambar powder, tamarind, sugar and salt to the vegetables and simmer for 10 minutes.'
      },
      {
        title: 'Temper',
        text: 'Heat the oil, add the mustard seeds, and when they pop, add the chilies, curry leaves and asafoetida for 10 seconds. Pour over the sambar.',
        tip: 'Have a lid ready. Mustard seeds jump.'
      },
      {
        title: 'Serve',
        text: 'Top with cilantro and serve with rice, idli or dosa.'
      }
    ],
    notes: [
      'Use any vegetables you like: drumsticks, okra, pumpkin and pearl onions are all traditional.'
    ]
  },
  // ──────────────────────── Indonesian & Malaysian ────────────────────────
  {
    id: 'beef-rendang',
    name: 'Beef Rendang',
    short: 'Rendang',
    continent: 'Asia',
    region: 'Indonesian & Malaysian',
    cuisine: 'Minangkabau · West Sumatra',
    emoji: '🍛',
    description: 'A dark, intensely spiced "dry" curry: beef slow-cooked in coconut milk and a chili-lemongrass paste until the liquid disappears and the meat fries in its own fragrant oil.',
    servings: 6,
    time: { prep: 30, cook: 210 },
    heat: 2,
    tags: ['beef', 'curry', 'coconut', 'weekend project'],
    ingredients: [
      { group: 'Spice paste', qty: 10, item: 'dried árbol chilies', note: 'soaked', aisle: 'international' },
      { group: 'Spice paste', qty: 6, item: 'shallots', aisle: 'produce' },
      { group: 'Spice paste', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Spice paste', qty: 2, unit: 'in', item: 'fresh ginger', aisle: 'produce' },
      { group: 'Spice paste', qty: 2, unit: 'in', item: 'galangal', note: 'or extra ginger', aisle: 'produce' },
      { group: 'Spice paste', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Spice paste', qty: 3, unit: 'stalk', item: 'lemongrass', note: '2 sliced for the paste, 1 bruised', aisle: 'produce' },
      { group: 'Rendang', qty: 0.5, unit: 'cup', item: 'unsweetened shredded coconut', aisle: 'pantry' },
      { group: 'Rendang', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Rendang', qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { group: 'Rendang', qty: 3, item: 'whole cloves', aisle: 'spices' },
      { group: 'Rendang', qty: 3, item: 'star anise', aisle: 'spices' },
      { group: 'Rendang', qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { group: 'Rendang', qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'in 2-inch chunks', aisle: 'meat' },
      { group: 'Rendang', qty: 27, unit: 'oz', item: 'coconut milk', note: '2 cans', aisle: 'international' },
      { group: 'Rendang', qty: 6, item: 'makrut lime leaves', note: 'torn', aisle: 'produce' },
      { group: 'Rendang', qty: 1, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { group: 'Rendang', qty: 1, unit: 'tbsp', item: 'palm sugar', note: 'or brown sugar', aisle: 'international' },
      { group: 'Rendang', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak the chilies',
        text: 'Soak the dried chilies in hot water for 15 minutes, then drain.'
      },
      {
        title: 'Blend the paste',
        text: 'Blend the chilies, shallots, garlic, ginger, galangal, turmeric and 2 sliced lemongrass stalks into a smooth paste, adding a splash of water if needed.'
      },
      {
        title: 'Make the kerisik',
        text: 'Toast the coconut in a dry skillet over medium-low heat for 5 minutes until deep golden. Pound or blitz it into an oily paste.'
      },
      {
        title: 'Fry the paste',
        text: 'Heat the oil in a Dutch oven over medium heat. Fry the spice paste for 8 minutes, stirring, until darker, fragrant, and the oil starts to separate.'
      },
      {
        title: 'Whole spices & beef',
        text: 'Add the cinnamon, cloves, star anise, cardamom and bruised lemongrass for 1 minute. Add the beef and stir to coat for 5 minutes.'
      },
      {
        title: 'Long simmer',
        text: 'Add the coconut milk, lime leaves, tamarind, palm sugar and salt. Bring to a boil, then simmer uncovered on low for 2 hours, stirring occasionally.'
      },
      {
        title: 'Dry it down',
        text: 'Stir in the kerisik and keep simmering for 1 hour more, stirring more often as it thickens, until the liquid is gone and the beef fries in its own oil, turning dark brown.',
        tip: 'Stir frequently in the last half hour. The sauce can scorch quickly once it\'s thick.'
      },
      {
        title: 'Serve',
        text: 'Fish out the whole spices if you like and serve with jasmine rice.'
      }
    ],
    notes: [
      'Rendang keeps beautifully for days, and the flavor deepens.'
    ]
  },
  {
    id: 'chicken-satay',
    name: 'Chicken Satay with Peanut Sauce',
    nativeName: 'Sate Ayam',
    short: 'Satay',
    continent: 'Asia',
    region: 'Indonesian & Malaysian',
    cuisine: 'Malaysian & Indonesian',
    emoji: '🍢',
    description: 'Turmeric- and lemongrass-marinated chicken skewers grilled until charred, served with a rich, sweet and spicy peanut sauce, cucumber and onion.',
    servings: 4,
    time: { prep: 30, cook: 15, inactive: 120, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['chicken', 'grilled', 'party'],
    ingredients: [
      { group: 'Chicken', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'in 1-inch strips', aisle: 'meat' },
      { group: 'Chicken', qty: 2, unit: 'stalk', item: 'lemongrass', note: 'minced', aisle: 'produce' },
      { group: 'Chicken', qty: 2, item: 'shallots', aisle: 'produce' },
      { group: 'Chicken', qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chicken', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 20, item: 'bamboo skewers', note: 'soaked', aisle: 'other' },
      { group: 'Peanut sauce', qty: 0.75, unit: 'cup', item: 'roasted unsalted peanuts', aisle: 'pantry' },
      { group: 'Peanut sauce', qty: 1, unit: 'tbsp', item: 'Thai red curry paste', aisle: 'international' },
      { group: 'Peanut sauce', qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { group: 'Peanut sauce', qty: 2, unit: 'tbsp', item: 'kecap manis (sweet soy sauce)', aisle: 'international' },
      { group: 'Peanut sauce', qty: 1, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { group: 'Peanut sauce', qty: 1, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 1, item: 'cucumber', note: 'in chunks', shop: 'cucumbers', aisle: 'produce' },
      { group: 'To serve', qty: 0.5, item: 'red onion', note: 'in chunks', shop: 'red onions', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Marinade',
        text: 'Blend the lemongrass, shallots, garlic, spices, sugar, salt and oil into a paste. Coat the chicken and marinate for at least 2 hours.'
      },
      {
        title: 'Peanut sauce',
        text: 'Grind the peanuts coarsely. Simmer the curry paste in a little coconut milk for 2 minutes, then add the rest of the coconut milk, peanuts, kecap manis, tamarind and sugar. Simmer for 8 minutes until thick.'
      },
      {
        title: 'Skewer',
        text: 'Thread the chicken onto the soaked skewers.'
      },
      {
        title: 'Grill',
        text: 'Grill over high heat for 3 minutes per side, brushing with oil, until charred and cooked through.',
        tip: 'Charcoal gives the authentic smoky street-stall flavor.'
      },
      {
        title: 'Serve',
        text: 'Serve with the peanut sauce, cucumber and red onion.'
      }
    ],
    notes: [
      'Serve with ketupat (compressed rice cakes) for the classic Malaysian plate.'
    ]
  },
  {
    id: 'curry-laksa',
    name: 'Curry Laksa',
    short: 'Laksa',
    continent: 'Asia',
    region: 'Indonesian & Malaysian',
    cuisine: 'Malaysian',
    emoji: '🍜',
    description: 'A rich, spicy Malaysian coconut curry noodle soup with chicken, shrimp, tofu puffs, bean sprouts and a boiled egg, finished with fresh herbs and sambal.',
    servings: 4,
    time: { prep: 25, cook: 35 },
    heat: 2,
    tags: ['noodles', 'soup', 'seafood', 'coconut'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 0.33, unit: 'cup', item: 'laksa paste', aisle: 'international' },
      { qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { qty: 1, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'sliced', aisle: 'meat' },
      { qty: 0.5, unit: 'lb', item: 'large shrimp', note: 'peeled', aisle: 'seafood' },
      { qty: 8, item: 'fried tofu puffs', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'palm sugar', aisle: 'international' },
      { qty: 8, unit: 'oz', item: 'rice vermicelli', aisle: 'international' },
      { qty: 8, unit: 'oz', item: 'fresh egg noodles', note: 'yellow noodles', aisle: 'international' },
      { qty: 2, unit: 'cup', item: 'bean sprouts', aisle: 'produce' },
      { qty: 2, item: 'eggs', note: 'hard-boiled, halved', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'fresh mint', note: 'or Vietnamese coriander (laksa leaf)', aisle: 'produce' },
      { qty: 2, item: 'limes', note: 'in wedges', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'sambal oelek', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Fry the paste',
        text: 'Heat the oil in a large pot and fry the laksa paste for 3 minutes until fragrant and darkened.'
      },
      {
        title: 'Broth',
        text: 'Add the stock and coconut milk and bring to a simmer. Add the chicken and simmer for 10 minutes.'
      },
      {
        title: 'Shrimp & tofu',
        text: 'Add the shrimp, tofu puffs, fish sauce and sugar and simmer for 3 minutes until the shrimp are pink.',
        tip: 'The tofu puffs soak up the broth like sponges. They\'re a highlight.'
      },
      {
        title: 'Noodles',
        text: 'Cook both noodles according to their packages and divide among bowls with the bean sprouts.'
      },
      {
        title: 'Serve',
        text: 'Ladle the hot laksa over the noodles. Top with egg halves and herbs and serve with lime and sambal.'
      }
    ],
    notes: [
      'Good store-bought laksa paste makes this a weeknight dish.'
    ]
  },
  {
    id: 'nasi-goreng',
    name: 'Nasi Goreng',
    short: 'Nasi goreng',
    continent: 'Asia',
    region: 'Indonesian & Malaysian',
    cuisine: 'Indonesian',
    emoji: '🍳',
    description: 'Indonesia\'s national fried rice: day-old rice wok-fried with a shallot-chili paste, sweet soy sauce and shrimp paste, topped with a fried egg and crispy shallots.',
    servings: 4,
    time: { prep: 15, cook: 15 },
    heat: 2,
    tags: ['rice', 'eggs', 'quick', 'leftovers'],
    ingredients: [
      { qty: 4, unit: 'cup', item: 'cooked jasmine rice', note: 'day-old, cold', shop: 'jasmine rice', aisle: 'pantry' },
      { qty: 4, item: 'shallots', note: 'chopped', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { qty: 3, item: 'red Thai chilies', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'shrimp paste (terasi)', note: 'optional', aisle: 'international', optional: true },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'diced, or shrimp', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'kecap manis (sweet soy sauce)', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 4, item: 'eggs', note: 'fried', aisle: 'dairy' },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'fried shallots', note: 'store-bought', aisle: 'international' },
      { qty: 1, item: 'cucumber', note: 'sliced', shop: 'cucumbers', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'sliced', aisle: 'produce' },
      { item: 'prawn crackers (krupuk)', note: 'to serve', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Spice paste',
        text: 'Pound or blend the shallots, garlic, chilies and shrimp paste into a coarse paste.'
      },
      {
        title: 'Fry the paste',
        text: 'Heat the oil in a wok over medium-high heat and fry the paste for 2 minutes until fragrant.'
      },
      {
        title: 'Chicken',
        text: 'Add the chicken and stir-fry for 4 minutes until cooked.'
      },
      {
        title: 'Rice',
        text: 'Turn the heat to high, add the rice, breaking up any clumps, and toss for 3 minutes. Add the kecap manis and soy sauce and toss until evenly colored.',
        tip: 'Cold, day-old rice is essential. Fresh rice turns mushy.'
      },
      {
        title: 'Serve',
        text: 'Top each plate with a fried egg, scallions and fried shallots, with cucumber, tomato and prawn crackers on the side.'
      }
    ],
    notes: [
      'Kecap manis is thick and sweet. It\'s what makes nasi goreng unique.'
    ]
  },
  {
    id: 'nasi-lemak',
    name: 'Nasi Lemak',
    short: 'Nasi lemak',
    continent: 'Asia',
    region: 'Indonesian & Malaysian',
    cuisine: 'Malaysian',
    emoji: '🍚',
    description: 'Malaysia\'s national breakfast: fragrant coconut-pandan rice with spicy-sweet sambal, crispy anchovies, roasted peanuts, cucumber and a boiled or fried egg.',
    servings: 4,
    time: { prep: 25, cook: 40 },
    heat: 2,
    tags: ['rice', 'breakfast', 'coconut'],
    ingredients: [
      { group: 'Coconut rice', qty: 2, unit: 'cup', item: 'jasmine rice', note: 'rinsed', aisle: 'pantry' },
      { group: 'Coconut rice', qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { group: 'Coconut rice', qty: 0.75, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Coconut rice', qty: 2, item: 'pandan leaves', note: 'knotted (optional)', aisle: 'international', optional: true },
      { group: 'Coconut rice', qty: 1, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { group: 'Coconut rice', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Sambal', qty: 10, item: 'dried árbol chilies', note: 'soaked', aisle: 'international' },
      { group: 'Sambal', qty: 4, item: 'shallots', aisle: 'produce' },
      { group: 'Sambal', qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Sambal', qty: 1, unit: 'tsp', item: 'shrimp paste (belacan)', aisle: 'international', optional: true },
      { group: 'Sambal', qty: 0.25, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Sambal', qty: 1, item: 'red onion', note: 'sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'Sambal', qty: 2, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { group: 'Sambal', qty: 2, unit: 'tbsp', item: 'palm sugar', aisle: 'international' },
      { group: 'Toppings', qty: 1, unit: 'cup', item: 'dried anchovies (ikan bilis)', aisle: 'international' },
      { group: 'Toppings', qty: 0.5, unit: 'cup', item: 'roasted unsalted peanuts', aisle: 'pantry' },
      { group: 'Toppings', qty: 4, item: 'eggs', note: 'hard-boiled or fried', aisle: 'dairy' },
      { group: 'Toppings', qty: 1, item: 'cucumber', note: 'sliced', shop: 'cucumbers', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Coconut rice',
        text: 'Combine the rice, coconut milk, water, pandan, ginger and salt in a pot. Bring to a boil, cover, and cook on low for 18 minutes. Rest for 10 minutes.'
      },
      {
        title: 'Sambal paste',
        text: 'Blend the soaked chilies, shallots, garlic and shrimp paste into a paste.'
      },
      {
        title: 'Cook the sambal',
        text: 'Fry the paste in the oil over medium-low heat for 15 minutes, stirring, until dark red and the oil separates. Add the onion, tamarind and sugar and cook for 5 minutes more.',
        tip: 'Cook the sambal low and slow until the oil "breaks." Raw-tasting sambal is the most common mistake.'
      },
      {
        title: 'Crisp the anchovies',
        text: 'Fry the anchovies in a little oil until crisp, about 3 minutes. Drain.'
      },
      {
        title: 'Serve',
        text: 'Mound the rice on plates (traditionally on a banana leaf) and arrange sambal, anchovies, peanuts, egg and cucumber around it.'
      }
    ],
    notes: [
      'Add fried chicken (ayam goreng) for nasi lemak ayam.'
    ]
  },
  // ─────────────────────────────── Japanese ───────────────────────────────
  {
    id: 'karaage',
    name: 'Chicken Karaage',
    nativeName: '唐揚げ',
    short: 'Karaage',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍗',
    description: 'Japanese fried chicken: thigh pieces marinated in soy, ginger and garlic, coated in potato starch and double-fried for a light, shattering crust.',
    servings: 4,
    time: { prep: 15, cook: 20, inactive: 30, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['chicken', 'fried', 'snack'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'boneless chicken thighs', note: 'skin on if possible, in 1½-inch pieces', shop: 'boneless skinless chicken thighs', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'sake', aisle: 'other' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 0.75, unit: 'cup', item: 'potato starch', note: 'or cornstarch', aisle: 'international' },
      { qty: 4, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { qty: 1, item: 'lemons', note: 'in wedges', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'Kewpie mayonnaise', shop: 'mayonnaise', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the chicken with the soy sauce, sake, sugar, ginger and garlic. Marinate for 30 minutes.'
      },
      {
        title: 'Coat',
        text: 'Drain off any excess marinade and toss the chicken in the potato starch until well coated.'
      },
      {
        title: 'First fry',
        text: 'Heat the oil to 340°F. Fry in batches for 3 minutes until pale golden. Rest on a rack for 4 minutes.',
        tip: 'Resting between fries lets the inside finish cooking gently while the crust dries out.'
      },
      {
        title: 'Second fry',
        text: 'Raise the oil to 375°F and fry again for 1 minute until deep golden and very crisp.'
      },
      {
        title: 'Serve',
        text: 'Serve hot with lemon wedges and Kewpie mayo.'
      }
    ],
    notes: [
      'Perfect in a bento or over rice with shredded cabbage.'
    ]
  },
  {
    id: 'katsu-curry',
    name: 'Chicken Katsu Curry',
    nativeName: 'カツカレー',
    short: 'Katsu curry',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍛',
    description: 'Japanese comfort in a bowl: crisp panko-fried chicken cutlet on fluffy rice with a thick, mildly sweet curry sauce full of potatoes and carrots.',
    servings: 4,
    time: { prep: 25, cook: 45 },
    heat: 1,
    tags: ['chicken', 'curry', 'fried', 'family favorite'],
    ingredients: [
      { group: 'Curry', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 1, item: 'large yellow onion', note: 'sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Curry', qty: 2, item: 'carrots', note: 'in chunks', aisle: 'produce' },
      { group: 'Curry', qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in chunks', aisle: 'produce' },
      { group: 'Curry', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Curry', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Curry', qty: 3, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Curry', qty: 3.5, unit: 'oz', item: 'Japanese curry roux', note: 'half a box, e.g. Golden Curry', aisle: 'international' },
      { group: 'Curry', qty: 1, unit: 'tbsp', item: 'ketchup', aisle: 'pantry' },
      { group: 'Curry', qty: 1, unit: 'tsp', item: 'honey', aisle: 'pantry' },
      { group: 'Curry', qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Katsu', qty: 1.25, unit: 'lb', item: 'boneless skinless chicken breasts', note: 'butterflied and pounded ½ inch thick', aisle: 'meat' },
      { group: 'Katsu', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Katsu', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Katsu', qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Katsu', qty: 2, item: 'eggs', aisle: 'dairy' },
      { group: 'Katsu', qty: 2, unit: 'cup', item: 'panko breadcrumbs', aisle: 'pantry' },
      { group: 'Katsu', qty: 1.5, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { group: 'To serve', item: 'fukujinzuke pickles', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Start the rice',
        text: 'Rinse and cook the rice.'
      },
      {
        title: 'Cook the vegetables',
        text: 'Heat the oil in a pot over medium heat and cook the onion for 10 minutes until golden. Add the carrots, potatoes, ginger and garlic for 2 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the water, bring to a boil, then cover and simmer for 15 minutes until the vegetables are tender.'
      },
      {
        title: 'Add the roux',
        text: 'Turn off the heat, break in the curry roux and stir until dissolved. Add the ketchup, honey and soy sauce and simmer for 5 minutes, stirring, until thick.'
      },
      {
        title: 'Bread the chicken',
        text: 'Season the chicken. Dredge in flour, dip in beaten egg, and press firmly into the panko.'
      },
      {
        title: 'Fry',
        text: 'Heat ½ inch of oil in a skillet to 350°F. Fry the chicken for 4 minutes per side until deep golden and 165°F inside. Rest on a rack for 5 minutes, then slice into strips.',
        tip: 'Resting on a rack, not paper towels, keeps the bottom crisp.'
      },
      {
        title: 'Serve',
        text: 'Mound rice on one side of each plate, ladle curry beside it, and lay the sliced katsu on top. Add pickles.'
      }
    ],
    notes: [
      'Swap the chicken for pork loin for tonkatsu curry.'
    ]
  },
  {
    id: 'chicken-teriyaki',
    name: 'Chicken Teriyaki',
    nativeName: '照り焼きチキン',
    short: 'Teriyaki',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍗',
    description: 'Crisp-skinned chicken thighs pan-seared and glazed in a simple, glossy sauce of soy, mirin, sake and sugar. Real teriyaki, no cornstarch needed.',
    servings: 4,
    time: { prep: 5, cook: 20 },
    heat: 0,
    tags: ['chicken', 'quick', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'boneless chicken thighs', note: 'skin on if possible', shop: 'boneless skinless chicken thighs', aisle: 'meat' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'mirin', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'sake', aisle: 'other' },
      { qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'toasted sesame seeds', aisle: 'international' },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Season',
        text: 'Pat the chicken dry and season lightly with salt.'
      },
      {
        title: 'Sear',
        text: 'Heat the oil in a skillet over medium heat. Cook the chicken skin side down for 8 minutes, pressing occasionally, until deeply golden and crisp. Flip and cook for 4 minutes.'
      },
      {
        title: 'Sauce',
        text: 'Pour off the excess fat. Mix the soy sauce, mirin, sake and sugar and pour into the pan.'
      },
      {
        title: 'Glaze',
        text: 'Simmer for 3 minutes, spooning the sauce over the chicken, until it turns thick and glossy.',
        tip: 'The sauce thickens fast at the end. Keep spooning so it doesn\'t burn.'
      },
      {
        title: 'Serve',
        text: 'Slice, drizzle with any remaining glaze, and sprinkle with sesame seeds and scallions. Serve with rice.'
      }
    ],
    notes: [
      'Works beautifully with salmon fillets, too.'
    ]
  },
  {
    id: 'gyudon',
    name: 'Gyudon',
    nativeName: '牛丼',
    short: 'Gyudon',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍚',
    description: 'Japan\'s favorite fast-food bowl: thinly sliced beef and sweet onions simmered in a soy-dashi broth and spooned over rice, topped with pickled ginger and an egg.',
    servings: 2,
    time: { prep: 10, cook: 15 },
    heat: 0,
    tags: ['beef', 'rice bowl', 'quick'],
    ingredients: [
      { qty: 0.75, unit: 'lb', item: 'beef ribeye', note: 'shaved paper-thin', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'instant dashi granules', aisle: 'international' },
      { qty: 0.75, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'mirin', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'sake', aisle: 'other' },
      { qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { qty: 2, item: 'eggs', note: 'raw or soft-poached, for topping', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'pickled red ginger (beni shoga)', aisle: 'international' },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Rice',
        text: 'Cook the rice.'
      },
      {
        title: 'Simmer the onion',
        text: 'Combine the dashi, water, soy sauce, mirin, sake and sugar in a skillet and bring to a simmer. Add the onion and cook for 5 minutes until soft.'
      },
      {
        title: 'Beef',
        text: 'Add the beef, separating the slices, and simmer for 2 minutes until just cooked. Skim any foam.',
        tip: 'Don\'t overcook. Thin beef turns tough fast.'
      },
      {
        title: 'Serve',
        text: 'Spoon the beef, onions and some broth over bowls of rice. Top with an egg, pickled ginger and scallions.'
      }
    ],
    notes: [
      'Asian markets sell pre-shaved beef for hot pot, which is perfect here.'
    ]
  },
  {
    id: 'miso-glazed-salmon',
    name: 'Miso-Glazed Salmon',
    nativeName: '鮭の西京焼き',
    short: 'Miso salmon',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍣',
    description: 'Salmon marinated in sweet white miso, mirin and sake, then broiled until caramelized and lacquered. Rich, savory and almost no effort.',
    servings: 4,
    time: { prep: 10, cook: 10, inactive: 360, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['seafood', 'salmon', 'quick'],
    ingredients: [
      { qty: 0.33, unit: 'cup', item: 'white miso paste', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'mirin', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'sake', aisle: 'other' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'lb', item: 'skin-on salmon fillet', note: '4 pieces', aisle: 'seafood' },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinade',
        text: 'Whisk the miso, mirin, sake and sugar until smooth.'
      },
      {
        title: 'Marinate',
        text: 'Coat the salmon in the marinade and refrigerate for 6 hours or up to 2 days.'
      },
      {
        title: 'Broil',
        text: 'Wipe off most of the marinade (it burns easily). Broil skin side down on a foil-lined pan for 8 minutes until caramelized and just cooked through.',
        tip: 'Watch closely. The sugar in the miso can go from caramelized to burnt fast.'
      },
      {
        title: 'Serve',
        text: 'Scatter with scallions and serve with rice and pickles.'
      }
    ],
    notes: [
      'Black cod (sablefish) is the classic Nobu version.'
    ]
  },
  {
    id: 'okonomiyaki',
    name: 'Okonomiyaki',
    nativeName: 'お好み焼き',
    short: 'Okonomiyaki',
    continent: 'Asia',
    region: 'Japanese',
    cuisine: 'Osaka',
    emoji: '🥞',
    description: 'Osaka\'s savory cabbage pancake loaded with pork belly, griddled until crisp, then drizzled with okonomi sauce and mayo and showered with bonito flakes.',
    servings: 2,
    time: { prep: 15, cook: 20 },
    heat: 0,
    tags: ['pork', 'street food', 'quick'],
    ingredients: [
      { qty: 0.75, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'instant dashi granules', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 0.25, unit: 'head', item: 'green cabbage', note: 'finely shredded (about 4 cups)', aisle: 'produce' },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'pickled red ginger (beni shoga)', aisle: 'international' },
      { qty: 4, unit: 'oz', item: 'pork belly', note: 'thinly sliced', aisle: 'meat' },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'okonomiyaki sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'Kewpie mayonnaise', shop: 'mayonnaise', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'bonito flakes', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'aonori (seaweed flakes)', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Batter',
        text: 'Whisk the flour, baking powder, dashi and water until smooth. Beat in the eggs.'
      },
      {
        title: 'Fold',
        text: 'Fold in the cabbage, scallions and pickled ginger. It should be mostly cabbage, just lightly coated.',
        tip: 'Fold gently and don\'t overmix. Air keeps it fluffy.'
      },
      {
        title: 'Cook',
        text: 'Heat the oil in a skillet over medium heat. Spread half the batter into a thick round and lay pork slices on top. Cook for 5 minutes until golden underneath.'
      },
      {
        title: 'Flip',
        text: 'Flip so the pork is on the bottom and cook for 5 minutes more until crisp. Repeat with the second pancake.'
      },
      {
        title: 'Top & serve',
        text: 'Brush with okonomi sauce, zigzag with mayo, and top with bonito flakes and aonori. The flakes "dance" from the heat.'
      }
    ],
    notes: [
      'Okonomi means "as you like." Add shrimp, squid, cheese or mochi.'
    ]
  },
  {
    id: 'oyakodon',
    name: 'Oyakodon',
    nativeName: '親子丼',
    short: 'Oyakodon',
    continent: 'Asia',
    region: 'Japanese',
    emoji: '🍳',
    description: 'Chicken and egg simmered in a sweet-savory dashi broth until the eggs are just barely set, slid over a bowl of hot rice. Ready in 20 minutes.',
    servings: 2,
    time: { prep: 10, cook: 15 },
    heat: 0,
    tags: ['chicken', 'eggs', 'quick', 'rice bowl'],
    ingredients: [
      { group: 'Broth', qty: 1, unit: 'tsp', item: 'instant dashi granules', aisle: 'international' },
      { group: 'Broth', qty: 0.75, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Broth', qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Broth', qty: 2, unit: 'tbsp', item: 'mirin', aisle: 'international' },
      { group: 'Broth', qty: 1, unit: 'tbsp', item: 'sake', aisle: 'other', optional: true },
      { group: 'Broth', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Bowl', qty: 0.5, item: 'yellow onion', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Bowl', qty: 0.75, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'in bite-size pieces', aisle: 'meat' },
      { group: 'Bowl', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Bowl', qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'Bowl', qty: 1, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { group: 'Bowl', item: 'shichimi togarashi', note: 'to serve', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Cook the rice',
        text: 'Rinse and cook the rice so it\'s hot when the topping is ready.'
      },
      {
        title: 'Simmer the onion',
        text: 'Combine the dashi granules, water, soy sauce, mirin, sake and sugar in a small skillet and bring to a simmer. Add the onion and cook for 3 minutes until soft.'
      },
      {
        title: 'Cook the chicken',
        text: 'Add the chicken in a single layer and simmer for 5 minutes, turning once, until cooked through.'
      },
      {
        title: 'Add the eggs',
        text: 'Lightly beat the eggs, leaving streaks of white. Pour two-thirds in a circle over the chicken, cover, and cook for 1 minute.'
      },
      {
        title: 'Finish',
        text: 'Pour in the rest of the egg, scatter the scallions, cover, and cook for 30 seconds more, until just set but still soft and a little runny.',
        tip: 'Pull it early. The eggs keep cooking on the hot rice.'
      },
      {
        title: 'Serve',
        text: 'Slide the chicken and egg over bowls of rice, pour over the broth, and sprinkle with shichimi.'
      }
    ],
    notes: [
      'Traditionally made one portion at a time in a small oyakodon pan. Split the ingredients in half and cook two batches if you like.'
    ]
  },
  {
    id: 'shoyu-ramen',
    name: 'Shoyu Ramen',
    nativeName: '醤油ラーメン',
    short: 'Ramen',
    continent: 'Asia',
    region: 'Japanese',
    cuisine: 'Tokyo',
    emoji: '🍜',
    description: 'A clear, savory Tokyo-style ramen: chicken and dashi broth seasoned with a soy tare, with springy noodles, chashu-style pork, jammy soy eggs, scallions and nori.',
    servings: 4,
    time: { prep: 30, cook: 90, inactive: 240, inactiveLabel: 'marinate eggs' },
    heat: 0,
    tags: ['noodles', 'soup', 'pork', 'weekend project'],
    ingredients: [
      { group: 'Soy eggs', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Soy eggs', qty: 0.25, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { group: 'Soy eggs', qty: 0.25, unit: 'cup', item: 'mirin', aisle: 'international' },
      { group: 'Soy eggs', qty: 0.25, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Broth', qty: 8, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Broth', qty: 1, unit: 'tsp', item: 'instant dashi granules', aisle: 'international' },
      { group: 'Broth', qty: 4, item: 'dried shiitake mushrooms', aisle: 'international' },
      { group: 'Broth', qty: 2, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { group: 'Broth', qty: 4, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { group: 'Broth', qty: 4, item: 'scallions', note: 'whites for the broth, greens to serve', aisle: 'produce' },
      { group: 'Pork & tare', qty: 1, unit: 'lb', item: 'pork belly', note: 'rolled and tied, or pork shoulder', aisle: 'meat' },
      { group: 'Pork & tare', qty: 0.5, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { group: 'Pork & tare', qty: 0.25, unit: 'cup', item: 'mirin', aisle: 'international' },
      { group: 'Pork & tare', qty: 0.25, unit: 'cup', item: 'sake', aisle: 'other' },
      { group: 'Pork & tare', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Bowls', qty: 4, item: 'portions fresh ramen noodles', shop: 'fresh ramen noodles', aisle: 'international' },
      { group: 'Bowls', qty: 2, item: 'sheets nori', note: 'cut into squares', shop: 'nori sheets', aisle: 'international' },
      { group: 'Bowls', qty: 0.5, unit: 'cup', item: 'menma (bamboo shoots)', aisle: 'international', optional: true },
      { group: 'Bowls', qty: 1, unit: 'tsp', item: 'toasted sesame oil', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Soy eggs',
        text: 'Boil the eggs for 6 minutes 30 seconds, then plunge into ice water and peel. Marinate in the soy sauce, mirin and water for at least 4 hours.',
        tip: 'Six and a half minutes gives jammy, custardy yolks.'
      },
      {
        title: 'Braise the pork',
        text: 'Brown the pork in a pot, then add the soy sauce, mirin, sake, sugar and 1 cup water. Cover and simmer for 1 hour, turning occasionally. The braising liquid becomes your tare.'
      },
      {
        title: 'Broth',
        text: 'Meanwhile, simmer the stock with the dashi, shiitakes, ginger, garlic and scallion whites for 45 minutes. Strain.'
      },
      {
        title: 'Noodles',
        text: 'Cook the noodles according to the package (usually 1–2 minutes). Drain well.'
      },
      {
        title: 'Assemble',
        text: 'Put 3 tbsp tare in each bowl, add 2 cups hot broth, then the noodles. Top with sliced pork, a halved egg, nori, menma, scallion greens and a drop of sesame oil.'
      }
    ],
    notes: [
      'The soy eggs keep 4 days in the fridge and are great on rice too.'
    ]
  },
  // ──────────────────────────────── Korean ────────────────────────────────
  {
    id: 'beef-bulgogi',
    name: 'Beef Bulgogi',
    nativeName: '불고기',
    short: 'Bulgogi',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🥩',
    description: 'Thin-sliced ribeye marinated in soy, sesame and grated Asian pear, then seared hard in a ripping-hot pan. Sweet, savory and caramelized — wrap it in lettuce or pile it on rice.',
    servings: 4,
    time: { prep: 20, cook: 10, inactive: 60, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['beef', 'grilled', 'family favorite'],
    ingredients: [
      { group: 'Beef', qty: 1.5, unit: 'lb', item: 'beef ribeye', note: 'or sirloin', aisle: 'meat' },
      { group: 'Marinade', qty: 0.5, item: 'Asian pear', note: 'peeled and grated (or ½ Bosc pear)', shop: 'Asian pears', aisle: 'produce' },
      { group: 'Marinade', qty: 1, item: 'yellow onions', note: 'half grated, half thinly sliced', aisle: 'produce' },
      { group: 'Marinade', qty: 5, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Marinade', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Marinade', qty: 5, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Marinade', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 1, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { group: 'Marinade', qty: 1, unit: 'tbsp', item: 'honey', aisle: 'pantry' },
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 4, item: 'scallions', note: 'whites cut in 2-inch pieces, greens sliced for garnish', aisle: 'produce' },
      { group: 'To cook & serve', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'To cook & serve', qty: 1, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' },
      { group: 'To cook & serve', qty: 1.5, unit: 'cup', item: 'short-grain white rice', note: 'uncooked', aisle: 'pantry' },
      { group: 'To cook & serve', qty: 1, unit: 'head', item: 'red leaf lettuce', note: 'for wraps', aisle: 'produce', optional: true },
      { group: 'To cook & serve', item: 'kimchi', aisle: 'international', optional: true },
      { group: 'To cook & serve', item: 'gochujang or ssamjang', note: 'for the table', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Slice the beef',
        text: 'Freeze the beef for 30 minutes to firm it up, then slice it across the grain as thinly as you can (about ⅛ inch).',
        tip: 'Korean and Asian markets sell pre-sliced "bulgogi beef" — a great shortcut.'
      },
      {
        title: 'Make the marinade',
        text: 'Grate the pear, half the onion, the garlic and ginger into a large bowl. Whisk in the soy sauce, brown sugar, sesame oil, honey and pepper.'
      },
      {
        title: 'Marinate',
        text: 'Add the beef, the sliced half onion and the scallion whites. Massage everything together, cover, and refrigerate for at least 1 hour or up to overnight.',
        tip: 'The pear\'s enzymes tenderize the beef — don\'t go past 24 hours or it turns mushy.'
      },
      {
        title: 'Cook the rice',
        text: 'Rinse the rice until the water runs clear and cook it according to the package or in a rice cooker.'
      },
      {
        title: 'Sear in batches',
        text: 'Heat a cast-iron skillet over high heat until smoking and add a little oil. Lay in a single layer of beef and cook for 2 minutes without moving it, then toss for 1 minute until caramelized. Repeat with the rest.',
        tip: 'Crowding the pan steams the meat — small batches give you the charred edges.'
      },
      {
        title: 'Serve',
        text: 'Scatter with scallion greens and sesame seeds. Serve with rice, lettuce leaves for wrapping, kimchi and gochujang.'
      }
    ],
    notes: [
      'Marinated raw bulgogi freezes beautifully — freeze flat in bags for a 10-minute dinner later.',
      'Swap in thinly sliced pork shoulder and add 1 tbsp gochujang to the marinade for dwaeji bulgogi.'
    ]
  },
  {
    id: 'bibimbap',
    name: 'Bibimbap',
    nativeName: '비빔밥',
    short: 'Bibimbap',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🍲',
    description: 'A rainbow bowl of rice topped with seasoned vegetables, savory beef and a fried egg, mixed together with spicy-sweet gochujang sauce. Crispy-bottomed in a stone pot.',
    servings: 4,
    time: { prep: 40, cook: 30 },
    heat: 1,
    tags: ['beef', 'rice bowl', 'vegetables'],
    ingredients: [
      { group: 'Beef', qty: 0.5, unit: 'lb', item: 'ground beef', note: 'or thinly sliced ribeye', aisle: 'meat' },
      { group: 'Beef', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Beef', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Beef', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Vegetables', qty: 2, item: 'carrots', note: 'julienned', aisle: 'produce' },
      { group: 'Vegetables', qty: 1, item: 'zucchini', note: 'julienned', aisle: 'produce' },
      { group: 'Vegetables', qty: 6, unit: 'oz', item: 'fresh spinach', shop: 'fresh spinach', aisle: 'produce' },
      { group: 'Vegetables', qty: 2, unit: 'cup', item: 'bean sprouts', aisle: 'produce' },
      { group: 'Vegetables', qty: 6, item: 'shiitake mushrooms', note: 'sliced', shop: 'fresh shiitake mushrooms', aisle: 'produce' },
      { group: 'Vegetables', qty: 3, unit: 'tbsp', item: 'toasted sesame oil', note: 'divided', aisle: 'international' },
      { group: 'Vegetables', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Vegetables', qty: 1, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'gochujang', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'honey', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'rice vinegar', aisle: 'international' },
      { group: 'Bowls', qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { group: 'Bowls', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Bowls', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Bowls', item: 'kimchi', note: 'to serve', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Rice & sauce',
        text: 'Cook the rice. Stir the sauce ingredients together.'
      },
      {
        title: 'Vegetables',
        text: 'Blanch the spinach for 30 seconds and the bean sprouts for 2 minutes. Squeeze dry and season each with a little sesame oil and salt. Sauté the carrots, zucchini and mushrooms separately in a little sesame oil for 2 minutes each, seasoning with salt.'
      },
      {
        title: 'Beef',
        text: 'Cook the beef with the soy sauce, sugar and garlic for 5 minutes until browned.'
      },
      {
        title: 'Eggs',
        text: 'Fry the eggs sunny-side up.'
      },
      {
        title: 'Assemble',
        text: 'Put rice in each bowl and arrange the vegetables and beef on top in sections. Crown with an egg and sesame seeds.',
        tip: 'For crispy rice, heat a greased cast-iron or stone bowl, add the rice and toppings, and let it sizzle for 5 minutes.'
      },
      {
        title: 'Mix & eat',
        text: 'Add gochujang sauce to taste, mix everything together vigorously, and serve with kimchi.'
      }
    ],
    notes: [
      'Leftover vegetables (namul) are great as standalone side dishes (banchan).'
    ]
  },
  {
    id: 'galbi-jjim',
    name: 'Galbi Jjim',
    nativeName: '갈비찜',
    short: 'Galbi jjim',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🍖',
    description: 'Korea\'s special-occasion braised short ribs: tender beef ribs simmered in a sweet soy, pear and garlic sauce with chestnuts, carrots, radish and jujubes.',
    servings: 6,
    time: { prep: 30, cook: 150, inactive: 60, inactiveLabel: 'soak ribs' },
    heat: 0,
    tags: ['beef', 'braise', 'celebration'],
    ingredients: [
      { qty: 4, unit: 'lb', item: 'bone-in beef short ribs', note: 'English cut, 2 inches', aisle: 'meat' },
      { qty: 0.5, item: 'Asian pear', note: 'grated', shop: 'Asian pears', aisle: 'produce' },
      { qty: 0.5, item: 'yellow onion', note: 'grated', shop: 'yellow onions', aisle: 'produce' },
      { qty: 8, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { qty: 0.25, unit: 'cup', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'mirin', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, item: 'carrots', note: 'in chunks', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'daikon radish', note: 'in chunks', aisle: 'produce' },
      { qty: 10, item: 'roasted chestnuts', note: 'peeled', aisle: 'international' },
      { qty: 6, item: 'dried jujubes (Korean dates)', aisle: 'international', optional: true },
      { qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'toasted sesame seeds', aisle: 'international' },
      { qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak & blanch',
        text: 'Soak the ribs in cold water for 1 hour to draw out blood. Blanch in boiling water for 5 minutes, then rinse and trim excess fat.'
      },
      {
        title: 'Sauce',
        text: 'Mix the pear, onion, garlic, ginger, soy sauce, sugar, mirin, sesame oil and pepper.'
      },
      {
        title: 'Braise',
        text: 'Put the ribs, sauce and water in a heavy pot. Bring to a boil, then cover and simmer for 1.5 hours.'
      },
      {
        title: 'Vegetables',
        text: 'Add the carrots, radish, chestnuts and jujubes and simmer for 40 minutes until everything is tender and the sauce has reduced to a glaze.',
        tip: 'Skim the fat from the top before adding the vegetables for a cleaner sauce.'
      },
      {
        title: 'Serve',
        text: 'Scatter with scallions and sesame seeds and serve with rice.'
      }
    ],
    notes: [
      'Traditionally served at Chuseok and Lunar New Year.'
    ]
  },
  {
    id: 'japchae',
    name: 'Japchae',
    nativeName: '잡채',
    short: 'Japchae',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🍜',
    description: 'Korea\'s celebration noodles: chewy sweet potato glass noodles stir-fried with beef, spinach, mushrooms and colorful vegetables in a sweet sesame-soy sauce.',
    servings: 6,
    time: { prep: 30, cook: 25 },
    heat: 0,
    tags: ['noodles', 'beef', 'party'],
    ingredients: [
      { qty: 8, unit: 'oz', item: 'Korean sweet potato glass noodles (dangmyeon)', shop: 'sweet potato glass noodles', aisle: 'international' },
      { qty: 0.5, unit: 'lb', item: 'beef ribeye', note: 'thinly sliced', aisle: 'meat' },
      { qty: 0.25, unit: 'cup', item: 'soy sauce', note: 'divided', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'granulated sugar', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'toasted sesame oil', note: 'divided', aisle: 'international' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 6, unit: 'oz', item: 'fresh spinach', aisle: 'produce' },
      { qty: 1, item: 'carrots', note: 'julienned', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'thinly sliced', aisle: 'produce' },
      { qty: 0.5, item: 'yellow onion', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 6, item: 'shiitake mushrooms', note: 'sliced', shop: 'fresh shiitake mushrooms', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'in 2-inch lengths', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Marinate the beef',
        text: 'Toss the beef with 1 tbsp soy sauce, 1 tsp sugar, 1 tsp sesame oil and the garlic.'
      },
      {
        title: 'Noodles',
        text: 'Boil the noodles for 6 minutes until chewy-tender. Drain, rinse, and cut into shorter lengths with scissors. Toss with 1 tbsp sesame oil.'
      },
      {
        title: 'Vegetables',
        text: 'Blanch the spinach for 30 seconds and squeeze dry. Stir-fry the carrot, pepper, onion and mushrooms in the vegetable oil for 3 minutes. Set aside.'
      },
      {
        title: 'Beef',
        text: 'Stir-fry the beef for 2 minutes until cooked.'
      },
      {
        title: 'Toss',
        text: 'In a large bowl, toss the noodles with the vegetables, beef, scallions, remaining soy sauce, sugar and sesame oil until evenly glossy.',
        tip: 'Toss with your hands (wear gloves). It\'s the Korean way, and it coats everything evenly.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with sesame seeds and serve warm or at room temperature.'
      }
    ],
    notes: [
      'Japchae is a holiday staple and keeps well for parties.'
    ]
  },
  {
    id: 'kimchi-jjigae',
    name: 'Kimchi Jjigae',
    nativeName: '김치찌개',
    short: 'Kimchi stew',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🍲',
    description: 'A bubbling, spicy-sour Korean stew of well-fermented kimchi, rich pork belly and soft tofu. The best possible use for kimchi that\'s gone extra sour.',
    servings: 4,
    time: { prep: 10, cook: 30 },
    heat: 2,
    tags: ['pork', 'stew', 'spicy', 'weeknight'],
    ingredients: [
      { qty: 1, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 0.5, unit: 'lb', item: 'pork belly', note: 'thinly sliced', aisle: 'meat' },
      { qty: 2, unit: 'cup', item: 'kimchi', note: 'well-fermented and sour, chopped, plus ¼ cup juice', aisle: 'international' },
      { qty: 0.5, item: 'yellow onion', note: 'sliced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'gochugaru (Korean chili flakes)', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'gochujang', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'cup', item: 'water', note: 'or anchovy stock', aisle: 'none' },
      { qty: 16, unit: 'oz', item: 'soft or medium tofu', note: 'sliced ½ inch thick', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'short-grain white rice', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Render the pork',
        text: 'Heat the sesame oil in a pot over medium-high heat. Cook the pork belly for 4 minutes until the fat renders and the edges brown.'
      },
      {
        title: 'Fry the kimchi',
        text: 'Add the kimchi, onion and garlic and stir-fry for 5 minutes until the kimchi softens and smells toasty.',
        tip: 'Frying the kimchi first deepens its flavor. The more sour the kimchi, the better the stew.'
      },
      {
        title: 'Season',
        text: 'Stir in the gochugaru, gochujang and sugar for 1 minute.'
      },
      {
        title: 'Simmer',
        text: 'Add the water and kimchi juice. Bring to a boil, then cover and simmer for 15 minutes.'
      },
      {
        title: 'Add the tofu',
        text: 'Slide in the tofu slices and simmer for 5 minutes. Taste and add soy sauce as needed.'
      },
      {
        title: 'Serve',
        text: 'Top with scallions and serve bubbling hot with rice.'
      }
    ],
    notes: [
      'Swap the pork for canned tuna (stir it in with the tofu) for chamchi kimchi jjigae.'
    ]
  },
  {
    id: 'korean-fried-chicken',
    name: 'Korean Fried Chicken',
    nativeName: '양념치킨',
    short: 'KFC',
    continent: 'Asia',
    region: 'Korean',
    emoji: '🍗',
    description: 'Ultra-crunchy double-fried chicken wings glazed in a sticky, sweet-spicy gochujang sauce with garlic and honey. Korea\'s famous "chimaek" partner for beer.',
    servings: 4,
    time: { prep: 20, cook: 40 },
    heat: 2,
    tags: ['chicken', 'fried', 'game day'],
    ingredients: [
      { group: 'Chicken', qty: 3, unit: 'lb', item: 'chicken wings', note: 'split', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'potato starch', note: 'or cornstarch', aisle: 'international' },
      { group: 'Chicken', qty: 0.25, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Chicken', qty: 6, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'Glaze', qty: 3, unit: 'tbsp', item: 'gochujang', aisle: 'international' },
      { group: 'Glaze', qty: 3, unit: 'tbsp', item: 'honey', aisle: 'pantry' },
      { group: 'Glaze', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Glaze', qty: 2, unit: 'tbsp', item: 'ketchup', aisle: 'pantry' },
      { group: 'Glaze', qty: 1, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Glaze', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Glaze', qty: 1, unit: 'tbsp', item: 'rice vinegar', aisle: 'international' },
      { group: 'Glaze', qty: 1, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Season',
        text: 'Toss the wings with the salt, pepper and ginger.'
      },
      {
        title: 'Coat',
        text: 'Mix the potato starch, flour and baking powder and toss the wings until fully coated. Shake off the excess.'
      },
      {
        title: 'First fry',
        text: 'Heat the oil to 325°F and fry in batches for 8 minutes. Rest on a rack for 5 minutes.'
      },
      {
        title: 'Second fry',
        text: 'Raise the oil to 375°F and fry again for 4 minutes until very crisp and golden.',
        tip: 'Double-frying is the secret to the famous Korean crunch that lasts even after saucing.'
      },
      {
        title: 'Glaze',
        text: 'Simmer the gochujang, honey, soy sauce, ketchup, sugar, garlic and vinegar for 3 minutes until sticky.'
      },
      {
        title: 'Toss & serve',
        text: 'Toss the hot wings in the glaze, sprinkle with sesame seeds, and serve with pickled radish and cold beer.'
      }
    ],
    notes: [
      'Serve half glazed and half plain ("ban-ban") for the classic combo.'
    ]
  },
  {
    id: 'tteokbokki',
    name: 'Tteokbokki',
    nativeName: '떡볶이',
    short: 'Tteokbokki',
    continent: 'Asia',
    region: 'Korean',
    cuisine: 'Street food',
    emoji: '🌶️',
    description: 'Korea\'s favorite street snack: chewy rice cakes and fish cakes simmered in a fiery, sweet gochujang sauce with scallions and boiled eggs.',
    servings: 4,
    time: { prep: 10, cook: 20 },
    heat: 3,
    tags: ['street food', 'spicy', 'quick'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'Korean rice cakes (tteok)', note: 'cylinder-shaped, soaked if frozen', shop: 'Korean rice cakes', aisle: 'international' },
      { qty: 3, unit: 'cup', item: 'water', note: 'or anchovy stock', aisle: 'none' },
      { qty: 0.25, unit: 'cup', item: 'gochujang', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'gochugaru (Korean chili flakes)', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 4, unit: 'oz', item: 'Korean fish cakes (eomuk)', note: 'sliced', aisle: 'international' },
      { qty: 4, item: 'scallions', note: 'in 2-inch lengths', aisle: 'produce' },
      { qty: 2, item: 'eggs', note: 'hard-boiled', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'toasted sesame seeds', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Sauce',
        text: 'Bring the water to a boil and stir in the gochujang, gochugaru, sugar, soy sauce and garlic.'
      },
      {
        title: 'Rice cakes',
        text: 'Add the rice cakes and simmer for 8 minutes, stirring often so they don\'t stick, until soft and chewy.',
        tip: 'If your rice cakes are hard from the fridge, soak them in warm water for 10 minutes first.'
      },
      {
        title: 'Fish cakes & eggs',
        text: 'Add the fish cakes, scallions and eggs and simmer for 5 minutes until the sauce is thick and glossy.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with sesame seeds and serve hot.'
      }
    ],
    notes: [
      'Melt a slice of mozzarella or cheddar on top for "cheese tteokbokki."'
    ]
  },
  // ─────────────────────────── Nepali & Tibetan ───────────────────────────
  {
    id: 'momos',
    name: 'Chicken Momos',
    short: 'Momos',
    continent: 'Asia',
    region: 'Nepali & Tibetan',
    cuisine: 'Nepali',
    emoji: '🥟',
    description: 'Juicy Himalayan steamed dumplings filled with spiced chicken, onion, ginger and cilantro, served with a fiery roasted tomato-sesame achar.',
    servings: 6,
    time: { prep: 60, cook: 30, inactive: 30, inactiveLabel: 'rest dough' },
    heat: 2,
    tags: ['chicken', 'dumplings', 'freezer-friendly'],
    ingredients: [
      { group: 'Dough', qty: 2.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dough', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 0.75, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'ground chicken', note: 'thigh meat', aisle: 'meat' },
      { group: 'Filling', qty: 1, item: 'red onion', note: 'finely diced', shop: 'red onions', aisle: 'produce' },
      { group: 'Filling', qty: 3, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Filling', qty: 3, item: 'scallions', note: 'finely chopped', aisle: 'produce' },
      { group: 'Filling', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'Sichuan peppercorns', note: 'ground (timur)', aisle: 'international' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Tomato achar', qty: 4, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Tomato achar', qty: 2, item: 'dried árbol chilies', aisle: 'international' },
      { group: 'Tomato achar', qty: 2, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' },
      { group: 'Tomato achar', qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Tomato achar', qty: 0.5, item: 'lime', note: 'juiced', shop: 'limes', aisle: 'produce' },
      { group: 'Tomato achar', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Dough',
        text: 'Mix the flour, salt and water into a firm, smooth dough. Knead for 5 minutes, cover, and rest for 30 minutes.'
      },
      {
        title: 'Filling',
        text: 'Mix the chicken with the onion, garlic, ginger, scallions, cilantro, spices, salt and oil until sticky.'
      },
      {
        title: 'Achar',
        text: 'Char the tomatoes and chilies under the broiler for 10 minutes. Blend with the sesame seeds, garlic, lime juice and salt.'
      },
      {
        title: 'Shape',
        text: 'Roll the dough into small, thin 3-inch circles (thinner at the edges). Add a spoonful of filling and pleat the edges together into a round purse or half-moon.',
        tip: 'Keep the dough you\'re not using covered so it doesn\'t dry out.'
      },
      {
        title: 'Steam',
        text: 'Steam on an oiled or lined steamer basket for 12 minutes until the wrappers are translucent and the filling is cooked.'
      },
      {
        title: 'Serve',
        text: 'Serve hot with the tomato achar.'
      }
    ],
    notes: [
      'Freeze uncooked momos on a tray and steam from frozen for 15 minutes.'
    ]
  },
  // ────────────────────────────── Pakistani ───────────────────────────────
  {
    id: 'nihari',
    name: 'Beef Nihari',
    short: 'Nihari',
    continent: 'Asia',
    region: 'Pakistani',
    cuisine: 'Karachi · Old Delhi',
    emoji: '🍲',
    description: 'A rich, silky, slow-cooked stew of beef shank in a deeply spiced gravy, traditionally eaten for breakfast after cooking overnight. Garnished with ginger, chilies and lemon.',
    servings: 6,
    time: { prep: 20, cook: 270 },
    heat: 2,
    tags: ['beef', 'stew', 'slow-cooked', 'weekend project'],
    ingredients: [
      { group: 'Nihari masala', qty: 1, unit: 'tbsp', item: 'fennel seeds', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, unit: 'tsp', item: 'coriander seeds', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, item: 'black cardamom pod', aisle: 'spices' },
      { group: 'Nihari masala', qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { group: 'Nihari masala', qty: 4, item: 'whole cloves', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { group: 'Nihari masala', qty: 0.25, unit: 'tsp', item: 'ground nutmeg', aisle: 'spices' },
      { group: 'Nihari masala', qty: 1, unit: 'tsp', item: 'ground ginger', aisle: 'spices' },
      { group: 'Nihari', qty: 0.5, unit: 'cup', item: 'ghee', aisle: 'international' },
      { group: 'Nihari', qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Nihari', qty: 3, unit: 'lb', item: 'bone-in beef shank', note: 'cross-cut, or chuck', aisle: 'meat' },
      { group: 'Nihari', qty: 6, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Nihari', qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Nihari', qty: 1, unit: 'tbsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { group: 'Nihari', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Nihari', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Nihari', qty: 8, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Nihari', qty: 0.33, unit: 'cup', item: 'whole wheat or all-purpose flour', shop: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Garnish', qty: 1, unit: 'in', item: 'fresh ginger', note: 'julienned', aisle: 'produce' },
      { group: 'Garnish', qty: 3, item: 'serrano chilies', note: 'sliced', aisle: 'produce' },
      { group: 'Garnish', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Garnish', qty: 2, item: 'lemons', note: 'in wedges', aisle: 'produce' },
      { group: 'Garnish', qty: 4, item: 'naan', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Grind the masala',
        text: 'Toast the whole spices for 2 minutes, then grind with the nutmeg and ground ginger.'
      },
      {
        title: 'Brown',
        text: 'Heat the ghee in a heavy pot and fry the onion for 10 minutes until golden. Remove half for garnish. Add the beef and brown for 8 minutes.'
      },
      {
        title: 'Spice',
        text: 'Add the garlic, ginger, chili powder, turmeric, salt and 2 tbsp of the nihari masala. Cook for 5 minutes, adding splashes of water to prevent sticking.'
      },
      {
        title: 'Slow cook',
        text: 'Add the water, cover, and cook on the lowest heat for 3.5 hours until the meat falls off the bone.',
        tip: 'Traditionally it cooks overnight. Low and slow is the whole point.'
      },
      {
        title: 'Thicken',
        text: 'Whisk the flour with 1 cup water until smooth, stir into the stew, and simmer for 20 minutes until silky. Skim some of the red fat from the top to drizzle over each bowl.'
      },
      {
        title: 'Serve',
        text: 'Serve topped with fried onions, ginger, chilies, cilantro and a squeeze of lemon, with naan.'
      }
    ],
    notes: [
      'Add bone marrow (nalli) for an even richer nihari.'
    ]
  },
  {
    id: 'chapli-kebab',
    name: 'Chapli Kebab',
    short: 'Chapli kebab',
    continent: 'Asia',
    region: 'Pakistani',
    cuisine: 'Peshawar',
    emoji: '🍔',
    description: 'Peshawar\'s flat, crispy-edged beef patties loaded with crushed coriander, pomegranate seeds, tomato and green chilies, shallow-fried until crunchy.',
    servings: 6,
    time: { prep: 25, cook: 20 },
    heat: 2,
    tags: ['beef', 'street food', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'ground beef', note: '80/20', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'finely diced and squeezed dry', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'seeded and finely diced', aisle: 'produce' },
      { qty: 3, item: 'serrano chilies', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'coriander seeds', note: 'toasted and coarsely crushed', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'cumin seeds', note: 'toasted and crushed', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'dried pomegranate seeds (anardana)', note: 'crushed', aisle: 'international' },
      { qty: 0.33, unit: 'cup', item: 'cornmeal', note: 'or chickpea flour', shop: 'yellow cornmeal', aisle: 'pantry' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'vegetable oil', note: 'for shallow frying', aisle: 'pantry', staple: true },
      { qty: 4, item: 'naan', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Mix',
        text: 'Mix everything except the oil and naan with your hands until well combined and sticky.'
      },
      {
        title: 'Shape',
        text: 'Divide into 10 balls and flatten each into a thin, wide patty about ¼ inch thick. Press a tomato slice into the top of each, if you like.',
        tip: 'Thin patties get the signature lacy, crispy edges.'
      },
      {
        title: 'Fry',
        text: 'Shallow-fry in batches over medium-high heat for 4 minutes per side until deeply browned and crisp.'
      },
      {
        title: 'Serve',
        text: 'Serve hot with naan, sliced onions, and yogurt or green chutney.'
      }
    ],
    notes: [
      'Traditionally fried in animal fat. Beef tallow gives the most authentic flavor.'
    ]
  },
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    short: 'Karahi',
    continent: 'Asia',
    region: 'Pakistani',
    cuisine: 'Lahore · Peshawar',
    emoji: '🍗',
    description: 'A fast, intensely flavored Pakistani curry cooked in a wok-like karahi: chicken, tomatoes, ginger, garlic and green chilies cooked down to a thick, glossy masala.',
    servings: 4,
    time: { prep: 15, cook: 35 },
    heat: 2,
    tags: ['chicken', 'curry', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'cut into small pieces', aisle: 'meat' },
      { qty: 0.33, unit: 'cup', item: 'vegetable oil', note: 'or ghee', aisle: 'pantry', staple: true },
      { qty: 6, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'in', item: 'fresh ginger', note: 'half grated, half julienned', aisle: 'produce' },
      { qty: 5, item: 'Roma tomatoes', note: 'halved', aisle: 'produce' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'cumin seeds', note: 'toasted and crushed', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'coriander seeds', note: 'toasted and crushed', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'black pepper', note: 'coarsely ground', aisle: 'pantry', staple: true },
      { qty: 4, item: 'serrano chilies', note: 'slit', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { qty: 0.5, unit: 'tsp', item: 'garam masala', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 4, item: 'naan', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Sear',
        text: 'Heat the oil in a karahi or wok over high heat. Add the chicken and cook for 6 minutes until the color changes. Add the grated garlic and ginger for 1 minute.'
      },
      {
        title: 'Tomatoes',
        text: 'Lay the tomatoes cut side down on the chicken, cover, and cook for 8 minutes until soft. Pull off and discard the skins.'
      },
      {
        title: 'Bhuno',
        text: 'Add the salt, chili powder, pepper flakes, cumin, coriander and black pepper. Cook over high heat, stirring constantly, for 10 minutes until the tomatoes break down and the oil separates.',
        tip: 'This high-heat stir-frying (bhuno) is what makes karahi taste like karahi.'
      },
      {
        title: 'Finish',
        text: 'Add the green chilies and yogurt and cook for 5 minutes until glossy. Top with julienned ginger, garam masala and cilantro.'
      },
      {
        title: 'Serve',
        text: 'Serve straight from the pan with naan.'
      }
    ],
    notes: [
      'No onions in a classic karahi. The tomatoes make the sauce.'
    ]
  },
  // ───────────────────────────── Singaporean ──────────────────────────────
  {
    id: 'hainanese-chicken-rice',
    name: 'Hainanese Chicken Rice',
    short: 'Chicken rice',
    continent: 'Asia',
    region: 'Singaporean',
    emoji: '🐔',
    description: 'Singapore\'s national dish: silky poached chicken with fragrant rice cooked in chicken fat and broth, served with chili-ginger sauce, ginger-scallion oil and dark soy.',
    servings: 4,
    time: { prep: 25, cook: 75 },
    heat: 1,
    tags: ['chicken', 'rice', 'comfort'],
    ingredients: [
      { group: 'Chicken', qty: 1, item: 'whole chicken', note: '3½ lb, excess fat removed and saved', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 2, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { group: 'Chicken', qty: 4, item: 'scallions', aisle: 'produce' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'toasted sesame oil', aisle: 'international' },
      { group: 'Rice', qty: 2, unit: 'cup', item: 'jasmine rice', note: 'rinsed and drained', aisle: 'pantry' },
      { group: 'Rice', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Rice', qty: 1, unit: 'in', item: 'fresh ginger', note: 'minced', aisle: 'produce' },
      { group: 'Rice', qty: 2, item: 'pandan leaves', note: 'knotted, optional', aisle: 'international', optional: true },
      { group: 'Chili sauce', qty: 6, item: 'red Thai chilies', aisle: 'produce' },
      { group: 'Chili sauce', qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Chili sauce', qty: 1, unit: 'in', item: 'fresh ginger', aisle: 'produce' },
      { group: 'Chili sauce', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Chili sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 1, item: 'cucumber', note: 'sliced', shop: 'cucumbers', aisle: 'produce' },
      { group: 'To serve', qty: 3, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Poach',
        text: 'Rub the chicken with salt, stuff with the sliced ginger and scallions, and lower into a pot of boiling water to cover. Return to a bare simmer, cover, and poach gently for 35 minutes. Turn off the heat and let it sit for 10 minutes.'
      },
      {
        title: 'Ice bath',
        text: 'Plunge the chicken into ice water for 10 minutes, then rub with sesame oil. Keep the poaching broth.',
        tip: 'The ice bath gives the skin its signature smooth, gelatinous texture.'
      },
      {
        title: 'Chicken fat rice',
        text: 'Render the saved chicken fat in a pot for 5 minutes, then fry the garlic and ginger for 1 minute. Add the rice and toast for 2 minutes. Add 2½ cups of poaching broth and the pandan, cover, and cook on low for 18 minutes.'
      },
      {
        title: 'Chili sauce',
        text: 'Blend the chilies, garlic, ginger, lime juice, sugar, a pinch of salt and 2 tbsp of broth.'
      },
      {
        title: 'Serve',
        text: 'Carve the chicken and serve over the rice with cucumber, chili sauce, dark soy and a bowl of hot broth with scallions.'
      }
    ],
    notes: [
      'Every hawker stall\'s chili sauce is a closely guarded secret. Adjust to taste.'
    ]
  },
  {
    id: 'chili-crab',
    name: 'Singapore Chili Crab',
    short: 'Chili crab',
    continent: 'Asia',
    region: 'Singaporean',
    emoji: '🦀',
    description: 'Singapore\'s legendary seafood dish: crab stir-fried in a sweet, savory and gently spicy tomato-chili sauce, thickened with ribbons of egg. Mop it up with fried mantou buns.',
    servings: 4,
    time: { prep: 20, cook: 25 },
    heat: 2,
    tags: ['seafood', 'crab', 'celebration'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'crab legs', note: 'Dungeness or king crab, cracked into pieces', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 4, item: 'shallots', note: 'minced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'minced', aisle: 'produce' },
      { qty: 4, item: 'red Thai chilies', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'sambal oelek', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'ketchup', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'sweet chili sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'cornstarch', note: 'mixed with 2 tbsp water', aisle: 'pantry' },
      { qty: 2, item: 'eggs', note: 'beaten', aisle: 'dairy' },
      { qty: 1, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { qty: 8, item: 'mantou buns', note: 'fried or steamed, or crusty bread', aisle: 'frozen' }
    ],
    steps: [
      {
        title: 'Aromatics',
        text: 'Heat the oil in a large wok and fry the shallots, garlic, ginger and chilies for 2 minutes until fragrant. Add the sambal for 1 minute.'
      },
      {
        title: 'Sauce',
        text: 'Add the ketchup, sweet chili sauce, soy sauce, sugar and stock and bring to a boil.'
      },
      {
        title: 'Crab',
        text: 'Add the crab, toss to coat, cover, and simmer for 8 minutes until heated through (or cooked, if raw).'
      },
      {
        title: 'Thicken',
        text: 'Stir in the cornstarch slurry. Then, off the heat, drizzle in the beaten eggs while stirring gently to make silky ribbons. Squeeze in the lime.',
        tip: 'The egg ribbons make the sauce rich and velvety. Add them off the heat.'
      },
      {
        title: 'Serve',
        text: 'Scatter with cilantro and serve with fried mantou to mop up every drop of sauce. Lots of napkins!'
      }
    ],
    notes: [
      'Black pepper crab is the other Singapore classic. Swap the tomato sauce for butter, black pepper and oyster sauce.'
    ]
  },
  // ────────────────────────────── Sri Lankan ──────────────────────────────
  {
    id: 'kottu-roti',
    name: 'Kottu Roti',
    short: 'Kottu',
    continent: 'Asia',
    region: 'Sri Lankan',
    cuisine: 'Street food',
    emoji: '🥘',
    description: 'Sri Lanka\'s clattering street-food favorite: chopped flatbread stir-fried on a griddle with vegetables, egg, chicken and spicy curry gravy.',
    servings: 4,
    time: { prep: 20, cook: 20 },
    heat: 2,
    tags: ['chicken', 'street food', 'stir-fry'],
    ingredients: [
      { qty: 6, item: 'paratha or roti', note: 'frozen paratha works great, cooked and cooled', shop: 'frozen paratha', aisle: 'frozen' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 15, item: 'curry leaves', aisle: 'international' },
      { qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'serrano chilies', note: 'sliced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'julienned', aisle: 'produce' },
      { qty: 0.25, unit: 'head', item: 'green cabbage', note: 'thinly sliced', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'cooked chicken curry or shredded chicken', note: 'with ½ cup curry gravy', shop: 'cooked chicken', aisle: 'meat' },
      { qty: 2, unit: 'tsp', item: 'curry powder', aisle: 'spices' },
      { qty: 3, item: 'eggs', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Chop the roti',
        text: 'Cut the roti into thin strips, about ½ inch wide.'
      },
      {
        title: 'Aromatics',
        text: 'Heat the oil in a large wok or griddle over high heat. Fry the curry leaves for 10 seconds, then the onion, garlic and chilies for 3 minutes.'
      },
      {
        title: 'Vegetables',
        text: 'Add the carrots, cabbage and half the scallions and stir-fry for 3 minutes.'
      },
      {
        title: 'Egg',
        text: 'Push everything to the side, scramble the eggs in the space, and mix in.'
      },
      {
        title: 'Kottu',
        text: 'Add the chicken, gravy, curry powder, soy sauce, salt and roti. Stir-fry, chopping with two metal spatulas, for 4 minutes until everything is mixed and hot.',
        tip: 'The rhythmic clang of chopping spatulas is the sound of kottu on Sri Lankan streets.'
      },
      {
        title: 'Serve',
        text: 'Top with the remaining scallions and serve with extra curry gravy.'
      }
    ],
    notes: [
      'Cheese kottu (with grated cheddar stirred in) is a popular late-night variation.'
    ]
  },
  {
    id: 'sri-lankan-chicken-curry',
    name: 'Sri Lankan Chicken Curry',
    short: 'SL chicken curry',
    continent: 'Asia',
    region: 'Sri Lankan',
    emoji: '🍛',
    description: 'A dark, aromatic Sri Lankan curry made with toasted (roasted) curry powder, pandan, curry leaves and lemongrass, finished with coconut milk.',
    servings: 4,
    time: { prep: 20, cook: 45 },
    heat: 2,
    tags: ['chicken', 'curry', 'coconut'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed, cut into pieces', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'roasted Sri Lankan curry powder', note: 'or regular curry powder, dry-toasted until dark', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Kashmiri chili powder', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'coconut oil', aisle: 'pantry' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { qty: 4, item: 'whole cloves', aisle: 'spices' },
      { qty: 15, item: 'curry leaves', aisle: 'international' },
      { qty: 1, unit: 'stalk', item: 'lemongrass', note: 'bruised', aisle: 'produce' },
      { qty: 1, item: 'pandan leaf', note: 'optional', aisle: 'international', optional: true },
      { qty: 1, item: 'red onion', note: 'diced', shop: 'red onions', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { qty: 0.5, item: 'lime', note: 'juiced', shop: 'limes', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the chicken with the curry powder, chili powder, turmeric and salt. Let it sit while you prep.'
      },
      {
        title: 'Temper',
        text: 'Heat the coconut oil and fry the cinnamon, cardamom, cloves, curry leaves, lemongrass and pandan for 1 minute.'
      },
      {
        title: 'Aromatics',
        text: 'Add the onion and cook for 6 minutes, then the garlic, ginger and tomato for 3 minutes.'
      },
      {
        title: 'Chicken',
        text: 'Add the chicken and cook for 5 minutes, then add half the coconut milk and ½ cup water. Cover and simmer for 25 minutes.'
      },
      {
        title: 'Finish',
        text: 'Stir in the remaining coconut milk and simmer for 5 minutes. Squeeze in the lime and serve with rice.',
        tip: 'Roasted curry powder is darker and nuttier than Indian blends. It\'s the Sri Lankan signature.'
      }
    ],
    notes: [
      'Serve with pol sambol (coconut relish) and dhal for a classic rice and curry spread.'
    ]
  },
  // ────────────────────────────── Taiwanese ───────────────────────────────
  {
    id: 'lu-rou-fan',
    name: 'Braised Pork Rice',
    nativeName: '滷肉飯',
    short: 'Lu rou fan',
    continent: 'Asia',
    region: 'Taiwanese',
    emoji: '🍚',
    description: 'Taiwan\'s ultimate comfort bowl: finely chopped pork belly slow-braised with fried shallots, soy and five-spice into a glossy sauce spooned over rice with a soy egg.',
    servings: 6,
    time: { prep: 20, cook: 90 },
    heat: 0,
    tags: ['pork', 'rice bowl', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'skin-on pork belly', note: 'finely diced', shop: 'pork belly', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 6, item: 'shallots', note: 'thinly sliced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'Shaoxing wine', aisle: 'international' },
      { qty: 0.33, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'rock sugar', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'Chinese five-spice powder', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'white pepper', aisle: 'spices' },
      { qty: 3, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 6, item: 'eggs', note: 'hard-boiled and peeled', aisle: 'dairy' },
      { qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'pickled daikon or cucumber', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Fry the shallots',
        text: 'Heat the oil and fry the shallots over medium heat for 8 minutes until golden and crisp. Remove half for topping.'
      },
      {
        title: 'Render the pork',
        text: 'Add the pork and cook for 10 minutes until the fat renders and it browns lightly. Add the garlic for 1 minute.'
      },
      {
        title: 'Braise',
        text: 'Add the wine, both soy sauces, sugar, five-spice, white pepper, water and eggs. Simmer partly covered for 1 hour, stirring occasionally.',
        tip: 'The eggs braise in the sauce and turn deep brown. Turn them occasionally.'
      },
      {
        title: 'Reduce',
        text: 'Uncover and simmer for 15 minutes until the sauce is thick and glossy.'
      },
      {
        title: 'Serve',
        text: 'Spoon the pork and sauce over bowls of rice and add a halved egg, the reserved crispy shallots and pickles.'
      }
    ],
    notes: [
      'It\'s even better the next day. Keep a pot in the fridge for quick dinners.'
    ]
  },
  {
    id: 'taiwanese-beef-noodle-soup',
    name: 'Taiwanese Beef Noodle Soup',
    nativeName: '紅燒牛肉麵',
    short: 'Beef noodle soup',
    continent: 'Asia',
    region: 'Taiwanese',
    emoji: '🍜',
    description: 'Taiwan\'s national dish: tender braised beef shank in a rich, spicy broth of chili bean paste, star anise and soy, with chewy wheat noodles and bok choy.',
    servings: 6,
    time: { prep: 20, cook: 180 },
    heat: 2,
    tags: ['beef', 'noodles', 'soup', 'weekend project'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in beef shank', note: 'or chuck, in 2-inch chunks', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'in wedges', aisle: 'produce' },
      { qty: 2, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { qty: 6, item: 'scallions', note: 'in 2-inch lengths, plus more to serve', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'doubanjiang', aisle: 'international' },
      { qty: 2, item: 'Roma tomatoes', note: 'in wedges', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'Shaoxing wine', aisle: 'international' },
      { qty: 0.33, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'rock sugar', aisle: 'international' },
      { qty: 4, item: 'star anise', aisle: 'spices' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Sichuan peppercorns', aisle: 'international' },
      { qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1.5, unit: 'lb', item: 'fresh wheat noodles', aisle: 'international' },
      { qty: 3, unit: 'head', item: 'baby bok choy', note: 'halved', shop: 'baby bok choy', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'pickled mustard greens', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Blanch',
        text: 'Blanch the beef in boiling water for 5 minutes. Drain and rinse.'
      },
      {
        title: 'Aromatics',
        text: 'Heat the oil in a large pot and cook the onion, ginger, garlic and scallions for 5 minutes. Add the doubanjiang and fry for 1 minute until the oil turns red.'
      },
      {
        title: 'Braise',
        text: 'Add the tomatoes, wine, both soy sauces, sugar, spices, beef and water. Bring to a boil, then simmer partly covered for 2.5 hours until the beef is very tender.',
        tip: 'Tie the spices in cheesecloth so they\'re easy to remove.'
      },
      {
        title: 'Noodles',
        text: 'Cook the noodles and blanch the bok choy.'
      },
      {
        title: 'Serve',
        text: 'Divide the noodles among big bowls, add beef and bok choy, ladle over the hot broth, and top with scallions and pickled mustard greens.'
      }
    ],
    notes: [
      'The broth freezes well. Make a double batch.'
    ]
  },
  {
    id: 'three-cup-chicken',
    name: 'Three-Cup Chicken',
    nativeName: '三杯雞',
    short: 'San bei ji',
    continent: 'Asia',
    region: 'Taiwanese',
    emoji: '🍗',
    description: 'Taiwan\'s fragrant classic: chicken braised in "three cups" (sesame oil, rice wine and soy) with whole garlic, ginger and handfuls of Thai basil until sticky and glazed.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 1,
    tags: ['chicken', 'braise', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'boneless chicken thighs', note: 'skin on if possible, in bite-size pieces', shop: 'boneless skinless chicken thighs', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 2, unit: 'in', item: 'fresh ginger', note: 'thinly sliced', aisle: 'produce' },
      { qty: 15, item: 'garlic cloves', note: 'peeled, whole', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'in 2-inch pieces', aisle: 'produce' },
      { qty: 2, item: 'red Thai chilies', note: 'sliced', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'Shaoxing wine', note: 'or Taiwanese rice wine', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'rock sugar', note: 'or brown sugar', aisle: 'international' },
      { qty: 1, unit: 'bunch', item: 'Thai basil', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Aromatics',
        text: 'Heat the sesame oil in a clay pot or wok over medium heat. Fry the ginger slices for 3 minutes until curled and golden, then the garlic for 3 minutes until golden.',
        tip: 'Fry the ginger until it curls and crisps. It\'s the backbone of the flavor.'
      },
      {
        title: 'Brown',
        text: 'Turn up the heat, add the chicken, and brown for 5 minutes.'
      },
      {
        title: 'Braise',
        text: 'Add the scallions, chilies, wine, both soy sauces and sugar. Cover and simmer for 12 minutes.'
      },
      {
        title: 'Reduce',
        text: 'Uncover and cook on high for 5 minutes, stirring, until the sauce is thick and sticky.'
      },
      {
        title: 'Basil & serve',
        text: 'Toss in all the basil, cover for 30 seconds to wilt, and serve right away with rice.'
      }
    ],
    notes: [
      'Traditionally brought to the table bubbling in a clay pot.'
    ]
  },
  // ───────────────────────────────── Thai ─────────────────────────────────
  {
    id: 'khao-soi',
    name: 'Khao Soi',
    nativeName: 'ข้าวซอย',
    short: 'Khao soi',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Northern Thai · Chiang Mai',
    emoji: '🍜',
    description: 'Chiang Mai\'s iconic curry noodle soup: egg noodles and tender chicken in a rich coconut curry broth, topped with crispy fried noodles, pickled mustard greens, shallots and lime.',
    servings: 4,
    time: { prep: 20, cook: 45 },
    heat: 2,
    tags: ['noodles', 'chicken', 'curry', 'coconut'],
    ingredients: [
      { qty: 27, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'Thai red curry paste', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'curry powder', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1.5, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', aisle: 'meat' },
      { qty: 2, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'palm sugar', aisle: 'international' },
      { qty: 1, unit: 'lb', item: 'fresh egg noodles', note: 'divided', aisle: 'international' },
      { qty: 1, unit: 'cup', item: 'vegetable oil', note: 'for frying noodles', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'pickled mustard greens', note: 'chopped', aisle: 'international' },
      { qty: 2, item: 'shallots', note: 'thinly sliced', aisle: 'produce' },
      { qty: 2, item: 'limes', note: 'in wedges', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { item: 'roasted chili oil', note: 'for the table', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Fry the paste',
        text: 'Simmer 1 cup of the thick coconut cream in a pot for 3 minutes until the oil separates. Add the curry paste, curry powder and turmeric and fry for 2 minutes.'
      },
      {
        title: 'Simmer the chicken',
        text: 'Add the chicken, the remaining coconut milk, the stock, fish sauce and sugar. Simmer for 30 minutes until the chicken is tender.'
      },
      {
        title: 'Crispy noodles',
        text: 'Fry a quarter of the noodles in the hot oil for 1 minute until golden and crisp. Drain.'
      },
      {
        title: 'Cook the noodles',
        text: 'Boil the remaining noodles until tender and divide among bowls.'
      },
      {
        title: 'Serve',
        text: 'Ladle the curry and a piece of chicken over the noodles. Top with crispy noodles and serve with mustard greens, shallots, lime, cilantro and chili oil for everyone to add.',
        tip: 'The condiments aren\'t optional. They balance the rich curry.'
      }
    ],
    notes: [
      'Beef khao soi is popular too. Simmer beef chunks for 1.5 hours.'
    ]
  },
  {
    id: 'larb-gai',
    name: 'Larb Gai',
    nativeName: 'ลาบไก่',
    short: 'Larb',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Isan',
    emoji: '🥬',
    description: 'A zesty northeastern Thai minced chicken salad tossed with lime, fish sauce, chili, toasted rice powder and loads of fresh herbs. Eaten with sticky rice and lettuce.',
    servings: 4,
    time: { prep: 15, cook: 10 },
    heat: 2,
    tags: ['chicken', 'salad', 'quick'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'uncooked sticky (glutinous) rice', note: 'for toasted rice powder', shop: 'glutinous rice', aisle: 'international' },
      { qty: 1, unit: 'lb', item: 'ground chicken', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'water', aisle: 'none' },
      { qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'red pepper flakes', note: 'Thai chili flakes', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, item: 'shallots', note: 'thinly sliced', aisle: 'produce' },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'fresh mint', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { qty: 1, unit: 'head', item: 'butter lettuce', aisle: 'produce' },
      { qty: 1, item: 'cucumber', note: 'sliced', shop: 'cucumbers', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Toasted rice',
        text: 'Toast the raw sticky rice in a dry pan for 5 minutes until deep golden, then grind into a coarse powder.',
        tip: 'Toasted rice powder (khao khua) adds nutty crunch. It\'s what makes larb taste like larb.'
      },
      {
        title: 'Cook the chicken',
        text: 'Cook the chicken with the water in a skillet over medium heat for 5 minutes, breaking it up, until just cooked. No oil needed.'
      },
      {
        title: 'Dress',
        text: 'Off the heat, stir in the fish sauce, lime juice, chili flakes and sugar.'
      },
      {
        title: 'Herbs & rice',
        text: 'Toss in the shallots, scallions, mint, cilantro and 1 tbsp toasted rice powder.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with more rice powder and serve with lettuce cups, cucumber and sticky rice.'
      }
    ],
    notes: [
      'Larb moo (with ground pork) is just as popular.'
    ]
  },
  {
    id: 'massaman-curry',
    name: 'Massaman Beef Curry',
    nativeName: 'แกงมัสมั่น',
    short: 'Massaman',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Southern Thai',
    emoji: '🥘',
    description: 'A rich, mild Thai curry with Persian roots: tender beef and potatoes in coconut milk with cinnamon, cardamom, tamarind, palm sugar and roasted peanuts.',
    servings: 6,
    time: { prep: 20, cook: 150 },
    heat: 1,
    tags: ['beef', 'curry', 'coconut'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'beef chuck roast', note: 'in 1½-inch cubes', aisle: 'meat' },
      { qty: 27, unit: 'oz', item: 'coconut milk', note: '2 cans, unshaken', aisle: 'international' },
      { qty: 4, unit: 'tbsp', item: 'massaman curry paste', aisle: 'international' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { qty: 2, item: 'star anise', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in chunks', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'in wedges', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'palm sugar', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'roasted unsalted peanuts', aisle: 'pantry' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Simmer the beef',
        text: 'Put the beef in a pot with the thin coconut milk from both cans (save the thick cream on top) and 1 cup water. Simmer, covered, for 1.5 hours until tender.'
      },
      {
        title: 'Fry the paste',
        text: 'In a separate pan, simmer the thick coconut cream for 3 minutes until the oil separates. Add the curry paste, cinnamon, cardamom and star anise and fry for 3 minutes until fragrant.'
      },
      {
        title: 'Combine',
        text: 'Add the fried paste to the beef with the potatoes and onion. Simmer for 25 minutes until the potatoes are tender.'
      },
      {
        title: 'Season',
        text: 'Stir in the fish sauce, palm sugar, tamarind and peanuts. Simmer for 5 minutes and taste. It should be sweet, salty and gently sour.',
        tip: 'Massaman leans sweeter than other Thai curries. Adjust the sugar and tamarind to balance.'
      },
      {
        title: 'Serve',
        text: 'Serve with jasmine rice.'
      }
    ],
    notes: [
      'Chicken massaman: use bone-in thighs and simmer for just 30 minutes before adding the potatoes.'
    ]
  },
  {
    id: 'pad-see-ew',
    name: 'Pad See Ew',
    nativeName: 'ผัดซีอิ๊ว',
    short: 'Pad see ew',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Bangkok street food',
    emoji: '🍜',
    description: 'Wide rice noodles wok-charred with chicken, Chinese broccoli and egg in a sweet, savory dark soy sauce. Smoky, chewy and comforting.',
    servings: 2,
    time: { prep: 15, cook: 10 },
    heat: 0,
    tags: ['noodles', 'chicken', 'stir-fry', 'quick'],
    ingredients: [
      { qty: 12, unit: 'oz', item: 'fresh wide rice noodles (ho fun)', aisle: 'international' },
      { qty: 0.5, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'thinly sliced', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'bunch', item: 'Chinese broccoli (gai lan)', note: 'in 2-inch pieces', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'dark soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'oyster sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 2, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'distilled white vinegar', aisle: 'pantry' },
      { item: 'white pepper', note: 'to taste', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Prep',
        text: 'Separate the noodles. Toss the chicken with 1 tsp soy sauce. Mix the dark soy, oyster sauce, soy sauce, sugar and vinegar.'
      },
      {
        title: 'Chicken',
        text: 'Heat a wok over the highest heat with 1 tbsp oil and stir-fry the chicken and garlic for 2 minutes. Add the gai lan stems and cook for 1 minute.'
      },
      {
        title: 'Egg',
        text: 'Push aside, add 1 tbsp oil and scramble the eggs until just set.'
      },
      {
        title: 'Noodles',
        text: 'Add the remaining oil, the noodles and the sauce. Toss, then let the noodles sit for 30 seconds at a time to char before tossing again. Add the gai lan leaves.',
        tip: 'Let the noodles sit undisturbed to get the smoky, caramelized char.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with white pepper and serve with chili vinegar and sugar on the side.'
      }
    ],
    notes: [
      'Use broccolini if you can\'t find gai lan.'
    ]
  },
  {
    id: 'pad-thai',
    name: 'Pad Thai',
    nativeName: 'ผัดไทย',
    short: 'Pad thai',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Bangkok street food',
    emoji: '🍤',
    description: 'Bangkok street-style stir-fried rice noodles with shrimp, egg and a sweet-sour-salty tamarind sauce, finished with crunchy sprouts, peanuts and lime.',
    servings: 2,
    time: { prep: 25, cook: 10, inactive: 30, inactiveLabel: 'soak noodles' },
    heat: 1,
    tags: ['noodles', 'shrimp', 'stir-fry', 'quick'],
    ingredients: [
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'tamarind concentrate', note: 'seedless', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'palm sugar', note: 'or light brown sugar', aisle: 'international' },
      { group: 'Stir-fry', qty: 6, unit: 'oz', item: 'dried rice stick noodles', note: '¼-inch / pad thai width', aisle: 'international' },
      { group: 'Stir-fry', qty: 0.5, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { group: 'Stir-fry', qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'divided', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 1, item: 'shallot', note: 'thinly sliced', shop: 'shallots', aisle: 'produce' },
      { group: 'Stir-fry', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stir-fry', qty: 4, unit: 'oz', item: 'extra-firm tofu', note: 'cut into small cubes', aisle: 'produce', optional: true },
      { group: 'Stir-fry', qty: 2, item: 'eggs', aisle: 'dairy' },
      { group: 'Stir-fry', qty: 1.5, unit: 'cup', item: 'bean sprouts', note: 'plus more to serve', aisle: 'produce' },
      { group: 'Stir-fry', qty: 4, item: 'scallions', note: 'or garlic chives, cut into 2-inch lengths', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'roasted unsalted peanuts', note: 'chopped', aisle: 'pantry' },
      { group: 'To serve', qty: 1, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'To serve', item: 'red pepper flakes', note: 'or Thai chili flakes, to taste', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Soak the noodles',
        text: 'Cover the noodles with room-temperature water and soak for 30 minutes, until pliable and opaque but still firm. Drain well.',
        tip: 'Don\'t use hot water — the noodles finish softening in the wok and turn mushy if pre-softened.'
      },
      {
        title: 'Make the sauce',
        text: 'Warm the tamarind, fish sauce and palm sugar in a small pan for 1 minute, stirring until the sugar dissolves. Taste: it should be equally sweet, sour and salty.'
      },
      {
        title: 'Cook the shrimp',
        text: 'Heat a wok or large skillet over high heat until smoking. Add 2 tbsp oil and the shrimp; cook for 1 minute per side until just pink. Transfer to a plate.'
      },
      {
        title: 'Aromatics',
        text: 'Add the remaining 1 tbsp oil, the shallot, garlic and tofu (if using). Stir-fry for 30 seconds until fragrant.'
      },
      {
        title: 'Noodles & sauce',
        text: 'Add the drained noodles and the sauce. Toss constantly for 2 minutes until the sauce is absorbed and the noodles are chewy-tender. Add a splash of water if they seem dry or stiff.'
      },
      {
        title: 'Scramble the eggs',
        text: 'Push the noodles to one side. Crack the eggs into the empty space, scramble for 30 seconds until nearly set, then fold them through the noodles.'
      },
      {
        title: 'Finish',
        text: 'Return the shrimp, add the bean sprouts and scallions, and toss for 30 seconds just to wilt. Serve right away with peanuts, lime wedges, chili flakes and extra sprouts.'
      }
    ],
    notes: [
      'Cook no more than 2 servings at a time — a crowded wok steams the noodles instead of frying them.',
      'Swap the shrimp for thinly sliced chicken, or go vegetarian with tofu and soy sauce in place of fish sauce.'
    ]
  },
  {
    id: 'pad-kra-pao',
    name: 'Thai Basil Chicken',
    nativeName: 'ผัดกะเพรา',
    short: 'Pad kra pao',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Bangkok street food',
    emoji: '🌿',
    description: 'Thailand\'s favorite quick lunch: chicken stir-fried with garlic, fiery chilies and holy basil, served over rice with a crispy-edged fried egg.',
    servings: 2,
    time: { prep: 15, cook: 10 },
    heat: 3,
    tags: ['chicken', 'stir-fry', 'quick', 'spicy'],
    ingredients: [
      { qty: 0.75, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'finely chopped by hand (or ground chicken)', aisle: 'meat' },
      { qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { qty: 4, item: 'red Thai chilies', note: 'or to taste', aisle: 'produce' },
      { qty: 1, item: 'shallots', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'oyster sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'dark soy sauce', aisle: 'international', optional: true },
      { qty: 1, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'bunch', item: 'Thai basil', note: 'or holy basil, leaves picked', aisle: 'produce' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'vegetable oil', note: 'for frying the eggs', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Prep',
        text: 'Cook the rice. Pound the garlic and chilies into a coarse paste with a mortar and pestle (or mince finely). Mix the oyster sauce, soy sauces, fish sauce, sugar and water.'
      },
      {
        title: 'Fry the eggs',
        text: 'Heat the oil in a wok over high heat until shimmering. Crack in an egg and spoon hot oil over it for 1 minute, until the white puffs and the edges turn crisp and brown while the yolk stays runny. Drain and repeat.'
      },
      {
        title: 'Aromatics',
        text: 'Pour off all but 2 tbsp oil. Add the garlic-chili paste and shallot and stir for 30 seconds.',
        tip: 'Turn on the vent. Frying chilies makes everyone cough.'
      },
      {
        title: 'Chicken',
        text: 'Add the chicken, break it up, and stir-fry for 2 minutes until cooked.'
      },
      {
        title: 'Sauce',
        text: 'Add the sauce and toss for 1 minute until glossy and mostly absorbed.'
      },
      {
        title: 'Basil & serve',
        text: 'Off the heat, fold in the basil until just wilted. Serve over rice with a fried egg on top.'
      }
    ],
    notes: [
      'Holy basil (kra pao) is peppery and clove-like. Thai basil is the easier-to-find substitute.'
    ]
  },
  {
    id: 'thai-green-curry',
    name: 'Thai Green Curry with Chicken',
    nativeName: 'แกงเขียวหวานไก่',
    short: 'Green curry',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Central Thai',
    emoji: '🥥',
    description: 'Fragrant, creamy and fiery: chicken simmered in coconut milk with green curry paste, makrut lime leaves, eggplant and a fistful of Thai basil.',
    servings: 4,
    time: { prep: 15, cook: 25 },
    heat: 2,
    tags: ['chicken', 'curry', 'coconut', 'weeknight'],
    ingredients: [
      { qty: 27, unit: 'oz', item: 'coconut milk', note: '2 cans, full-fat, unshaken', aisle: 'international' },
      { qty: 4, unit: 'tbsp', item: 'Thai green curry paste', note: 'e.g. Maesri or Mae Ploy', aisle: 'international' },
      { qty: 1.5, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'thinly sliced', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'palm sugar', note: 'or light brown sugar', aisle: 'international' },
      { qty: 6, item: 'makrut lime leaves', note: 'torn', aisle: 'produce', optional: true },
      { qty: 1, item: 'eggplant', note: 'Japanese, in chunks (or 1 cup Thai eggplants)', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'bunch', item: 'Thai basil', note: 'leaves picked', aisle: 'produce' },
      { qty: 2, item: 'red Thai chilies', note: 'sliced', aisle: 'produce', optional: true },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Start the rice',
        text: 'Rinse and cook the jasmine rice.'
      },
      {
        title: 'Crack the coconut cream',
        text: 'Spoon the thick cream from the top of one can into a wok or pot over medium-high heat. Simmer for 3 minutes, stirring, until the oil separates.',
        tip: '"Cracking" the cream lets the curry paste fry properly, which is the key to a fragrant curry.'
      },
      {
        title: 'Fry the paste',
        text: 'Add the curry paste and fry for 2 minutes until very fragrant.'
      },
      {
        title: 'Chicken',
        text: 'Add the chicken and stir for 2 minutes to coat it in the paste.'
      },
      {
        title: 'Simmer',
        text: 'Pour in the remaining coconut milk with the fish sauce, palm sugar and lime leaves. Simmer for 8 minutes.'
      },
      {
        title: 'Vegetables',
        text: 'Add the eggplant and bell pepper and simmer for 5 minutes until tender.'
      },
      {
        title: 'Finish',
        text: 'Off the heat, stir in the Thai basil and chilies. Taste for a balance of salty, sweet and spicy, and adjust with fish sauce or sugar. Serve with rice.'
      }
    ],
    notes: [
      'Store-bought pastes vary a lot in heat. Start with 3 tbsp and add more to taste.'
    ]
  },
  {
    id: 'tom-yum-goong',
    name: 'Tom Yum Goong',
    nativeName: 'ต้มยำกุ้ง',
    short: 'Tom yum',
    continent: 'Asia',
    region: 'Thai',
    cuisine: 'Central Thai',
    emoji: '🦐',
    description: 'Thailand\'s famous hot and sour shrimp soup: a fragrant broth of lemongrass, galangal and lime leaves, sharpened with lime juice, fish sauce and chili paste.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 3,
    tags: ['soup', 'seafood', 'shrimp', 'spicy'],
    ingredients: [
      { qty: 4, unit: 'cup', item: 'chicken stock', note: 'or shrimp stock from the shells', aisle: 'pantry' },
      { qty: 3, unit: 'stalk', item: 'lemongrass', note: 'in 2-inch pieces, bruised', aisle: 'produce' },
      { qty: 2, unit: 'in', item: 'galangal', note: 'sliced', aisle: 'produce' },
      { qty: 6, item: 'makrut lime leaves', note: 'torn', aisle: 'produce' },
      { qty: 4, item: 'red Thai chilies', note: 'smashed', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'Thai chili paste in oil (nam prik pao)', aisle: 'international' },
      { qty: 8, unit: 'oz', item: 'oyster mushrooms', note: 'torn (or straw mushrooms)', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'large shrimp', note: 'peeled, tails on', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 3, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'evaporated milk', note: 'optional, for creamy "nam khon"', aisle: 'pantry', optional: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Infuse',
        text: 'Bring the stock to a boil with the lemongrass, galangal, lime leaves and chilies. Simmer for 5 minutes until fragrant.'
      },
      {
        title: 'Chili paste & mushrooms',
        text: 'Stir in the chili paste and mushrooms and simmer for 3 minutes.'
      },
      {
        title: 'Shrimp',
        text: 'Add the shrimp and cook for 2 minutes until just pink.'
      },
      {
        title: 'Season off the heat',
        text: 'Turn off the heat and stir in the fish sauce, lime juice and evaporated milk, if using. Taste: it should be boldly sour, salty and spicy.',
        tip: 'Add lime juice off the heat. Boiling turns it bitter.'
      },
      {
        title: 'Serve',
        text: 'Top with cilantro. The lemongrass, galangal and lime leaves are for flavor, not eating.'
      }
    ],
    notes: [
      'Simmer the shrimp shells in the stock for 10 minutes first for a deeper flavor.'
    ]
  },
  // ────────────────────────────── Vietnamese ──────────────────────────────
  {
    id: 'beef-pho',
    name: 'Beef Pho',
    nativeName: 'Phở Bò',
    short: 'Pho',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Hanoi',
    emoji: '🍜',
    description: 'A clear, deeply aromatic beef broth simmered with charred onion, ginger and toasted spices, ladled over rice noodles and paper-thin beef, finished at the table with herbs, lime and chili.',
    servings: 6,
    time: { prep: 45, cook: 210 },
    heat: 1,
    tags: ['soup', 'noodles', 'beef', 'weekend project'],
    ingredients: [
      { group: 'Broth', qty: 4, unit: 'lb', item: 'beef soup bones', note: 'marrow and knuckle', aisle: 'meat' },
      { group: 'Broth', qty: 1, unit: 'lb', item: 'beef brisket', note: 'one piece', aisle: 'meat' },
      { group: 'Broth', qty: 2, item: 'large yellow onions', note: 'halved, skin on', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Broth', qty: 4, unit: 'in', item: 'fresh ginger', note: 'halved lengthwise', aisle: 'produce' },
      { group: 'Broth', qty: 5, unit: 'quart', item: 'water', aisle: 'none' },
      { group: 'Broth', qty: 3, unit: 'tbsp', item: 'fish sauce', note: 'plus more to taste', aisle: 'international' },
      { group: 'Broth', qty: 2, unit: 'tbsp', item: 'rock sugar', note: 'or 1 tbsp sugar', aisle: 'international' },
      { group: 'Broth', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Spice bag', qty: 5, item: 'star anise', aisle: 'spices' },
      { group: 'Spice bag', qty: 6, item: 'whole cloves', aisle: 'spices' },
      { group: 'Spice bag', qty: 1, unit: 'stick', item: 'cinnamon', note: '3-inch', aisle: 'spices' },
      { group: 'Spice bag', qty: 1, unit: 'tbsp', item: 'coriander seeds', aisle: 'spices' },
      { group: 'Spice bag', qty: 1, unit: 'tsp', item: 'fennel seeds', aisle: 'spices' },
      { group: 'Spice bag', qty: 1, item: 'black cardamom pod', note: 'optional', aisle: 'spices', optional: true },
      { group: 'Spice bag', qty: 1, item: 'cheesecloth or spice bag', aisle: 'other', optional: true },
      { group: 'Bowls', qty: 1, unit: 'lb', item: 'dried flat rice noodles', note: 'bánh phở, small/⅛-inch', aisle: 'international' },
      { group: 'Bowls', qty: 0.5, unit: 'lb', item: 'beef eye of round or sirloin', note: 'for slicing paper-thin', aisle: 'meat' },
      { group: 'Bowls', qty: 0.5, item: 'yellow onion', note: 'sliced paper-thin', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Bowls', qty: 3, item: 'scallions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Bowls', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Garnish platter', qty: 2, unit: 'cup', item: 'bean sprouts', aisle: 'produce' },
      { group: 'Garnish platter', qty: 1, unit: 'bunch', item: 'Thai basil', aisle: 'produce' },
      { group: 'Garnish platter', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Garnish platter', qty: 2, item: 'jalapeños or Thai chilies', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Garnish platter', item: 'hoisin sauce', note: 'for the table', aisle: 'international' },
      { group: 'Garnish platter', item: 'sriracha', note: 'for the table', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Parboil the bones',
        text: 'Put the bones in a large stockpot, cover with cold water, and bring to a rolling boil. Boil hard for 10 minutes, then drain and rinse the bones and the pot to wash away the scum.',
        tip: 'This is the secret to a crystal-clear broth.'
      },
      {
        title: 'Char the aromatics',
        text: 'While the bones boil, char the onion halves and ginger under the broiler (or directly over a gas flame), turning occasionally, for 15 minutes until blackened in spots. Rinse off any loose burnt skin.'
      },
      {
        title: 'Toast the spices',
        text: 'Toast the star anise, cloves, cinnamon, coriander, fennel and black cardamom in a dry skillet over medium-low heat for 3 minutes until fragrant. Tie them up in cheesecloth or a spice bag.'
      },
      {
        title: 'Start the broth',
        text: 'Return the bones to the clean pot with the 5 quarts of fresh water, the brisket, and the charred onion and ginger. Bring to a boil, then immediately drop to the barest simmer. Skim off any foam that rises during the first 15 minutes.',
        tip: 'Never let it boil hard from here on — boiling makes the broth cloudy.'
      },
      {
        title: 'Simmer & pull the brisket',
        text: 'Simmer uncovered for 1.5 hours, until the brisket is tender. Lift out the brisket, plunge it into ice water for 10 minutes to keep it from darkening, then wrap and refrigerate.'
      },
      {
        title: 'Season & keep simmering',
        text: 'Add the spice bag, fish sauce, rock sugar and salt. Keep simmering for 1.5 hours more. Taste after 45 minutes and fish out the spice bag once the broth is as fragrant as you like.'
      },
      {
        title: 'Prep the bowls',
        text: 'Meanwhile, freeze the eye of round for 15 minutes, then slice it paper-thin against the grain. Thinly slice the chilled brisket. Soak the sliced onion in cold water for 10 minutes to mellow it, then drain.'
      },
      {
        title: 'Soak the noodles',
        text: 'Soak the dried noodles in a bowl of cold water for 30 minutes (or follow the package). Set out the garnish platter: bean sprouts, Thai basil, lime wedges, chilies, hoisin and sriracha.'
      },
      {
        title: 'Strain & finish the broth',
        text: 'Strain the broth through a fine-mesh sieve into a clean pot and skim off the fat. Taste and season with more fish sauce, salt or sugar until it\'s bold and savory. Keep it at a full boil for serving.'
      },
      {
        title: 'Cook the noodles',
        text: 'Working one portion at a time, dip the soaked noodles in boiling water for 20 seconds until just tender. Drain well and divide among big bowls.'
      },
      {
        title: 'Assemble & serve',
        text: 'Top the noodles with sliced brisket and raw beef. Ladle the boiling broth over the raw beef so it cooks pink-to-brown in the bowl. Finish with onion, scallions and cilantro, and pass the garnish platter.',
        tip: 'The broth must be at a hard boil when it hits the bowl or the raw beef won\'t cook.'
      }
    ],
    notes: [
      'Broth keeps 5 days refrigerated or 3 months frozen — make a double batch.',
      'Ask your butcher to slice the eye of round paper-thin to skip the freezing step.'
    ]
  },
  {
    id: 'bun-bo-hue',
    name: 'Bún Bò Huế',
    short: 'Bún bò Huế',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Huế · Central Vietnam',
    emoji: '🌶️',
    description: 'Central Vietnam\'s spicy beef noodle soup: a lemongrass- and chili-infused broth with tender beef shank and thick round rice noodles, served with plenty of herbs.',
    servings: 6,
    time: { prep: 30, cook: 180 },
    heat: 3,
    tags: ['beef', 'noodles', 'soup', 'spicy'],
    ingredients: [
      { group: 'Broth', qty: 2, unit: 'lb', item: 'beef soup bones', aisle: 'meat' },
      { group: 'Broth', qty: 1.5, unit: 'lb', item: 'bone-in beef shank', aisle: 'meat' },
      { group: 'Broth', qty: 4, unit: 'stalk', item: 'lemongrass', note: '2 bruised, 2 minced', aisle: 'produce' },
      { group: 'Broth', qty: 1, item: 'yellow onions', note: 'halved', aisle: 'produce' },
      { group: 'Broth', qty: 14, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Broth', qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { group: 'Broth', qty: 1, unit: 'tbsp', item: 'fermented shrimp paste (mắm ruốc)', note: 'dissolved in ½ cup water', aisle: 'international' },
      { group: 'Broth', qty: 2, unit: 'tbsp', item: 'rock sugar', aisle: 'international' },
      { group: 'Broth', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chili oil', qty: 0.25, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Chili oil', qty: 3, item: 'shallots', note: 'minced', aisle: 'produce' },
      { group: 'Chili oil', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Chili oil', qty: 2, unit: 'tbsp', item: 'red pepper flakes', note: 'or Vietnamese chili flakes', aisle: 'spices' },
      { group: 'Chili oil', qty: 1, unit: 'tsp', item: 'ground annatto (achiote)', note: 'for color', aisle: 'spices' },
      { group: 'Bowls', qty: 1.5, unit: 'lb', item: 'thick round rice noodles (bún bò Huế noodles)', shop: 'thick round rice noodles', aisle: 'international' },
      { group: 'Bowls', qty: 0.5, item: 'yellow onion', note: 'paper-thin', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Bowls', qty: 1, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Bowls', qty: 1, unit: 'cup', item: 'fresh mint', aisle: 'produce' },
      { group: 'Bowls', qty: 2, unit: 'cup', item: 'bean sprouts', aisle: 'produce' },
      { group: 'Bowls', qty: 2, item: 'limes', note: 'in wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Parboil',
        text: 'Boil the bones and shank for 10 minutes, drain, and rinse.'
      },
      {
        title: 'Broth',
        text: 'Return to the pot with the bruised lemongrass, onion and water. Simmer for 2 hours, skimming. Remove the shank after 1.5 hours when tender, and chill it.'
      },
      {
        title: 'Chili oil',
        text: 'Warm the oil and fry the shallots, garlic and minced lemongrass for 3 minutes. Off the heat, stir in the chili flakes and annatto.'
      },
      {
        title: 'Season',
        text: 'Strain the broth. Add the fish sauce, strained shrimp paste water, sugar, salt and half the chili oil. Taste. It should be spicy, savory and fragrant.',
        tip: 'The shrimp paste gives the signature funk. Strain it so the broth stays smooth.'
      },
      {
        title: 'Noodles',
        text: 'Cook the thick noodles according to the package and slice the shank thinly.'
      },
      {
        title: 'Serve',
        text: 'Put noodles and beef in big bowls, ladle over the boiling broth, and top with onion and herbs. Serve with bean sprouts, lime and the remaining chili oil.'
      }
    ],
    notes: [
      'Traditionally includes pork knuckle and congealed pork blood cubes.'
    ]
  },
  {
    id: 'bun-cha',
    name: 'Bún Chả',
    short: 'Bún chả',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Hanoi',
    emoji: '🍢',
    description: 'Hanoi\'s grilled pork feast: caramelized pork patties and belly slices in a sweet-sour fish sauce broth, with rice vermicelli and piles of fresh herbs.',
    servings: 4,
    time: { prep: 30, cook: 20, inactive: 60, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['pork', 'noodles', 'grilled'],
    ingredients: [
      { group: 'Pork', qty: 1, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { group: 'Pork', qty: 0.5, unit: 'lb', item: 'pork belly', note: 'thinly sliced', aisle: 'meat' },
      { group: 'Pork', qty: 3, item: 'shallots', note: 'minced', aisle: 'produce' },
      { group: 'Pork', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Pork', qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { group: 'Pork', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 1, unit: 'tbsp', item: 'oyster sauce', aisle: 'international' },
      { group: 'Pork', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Nuoc cham', qty: 0.33, unit: 'cup', item: 'fish sauce', aisle: 'international' },
      { group: 'Nuoc cham', qty: 0.33, unit: 'cup', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Nuoc cham', qty: 1.5, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Nuoc cham', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Nuoc cham', qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Nuoc cham', qty: 2, item: 'red Thai chilies', note: 'sliced', aisle: 'produce' },
      { group: 'Nuoc cham', qty: 1, item: 'carrots', note: 'thinly sliced', aisle: 'produce' },
      { group: 'To serve', qty: 12, unit: 'oz', item: 'rice vermicelli', aisle: 'international' },
      { group: 'To serve', qty: 1, unit: 'head', item: 'red leaf lettuce', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'fresh mint', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'bunch', item: 'Thai basil', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Mix the shallots, garlic, fish sauce, sugar, oyster sauce and pepper. Divide between the ground pork and sliced belly and marinate both for 1 hour.'
      },
      {
        title: 'Nuoc cham',
        text: 'Dissolve the sugar in the warm water, then add the fish sauce, lime juice, garlic, chilies and carrot.'
      },
      {
        title: 'Shape',
        text: 'Form the ground pork into small flat patties.'
      },
      {
        title: 'Grill',
        text: 'Grill the patties and belly slices over high heat (or broil) for 3 minutes per side until charred and caramelized.',
        tip: 'Charcoal is traditional and gives the best smoky flavor.'
      },
      {
        title: 'Noodles',
        text: 'Cook the vermicelli according to the package, rinse and drain.'
      },
      {
        title: 'Serve',
        text: 'Put the hot grilled pork in bowls of nuoc cham. Serve with noodles, lettuce and herbs. Dip the noodles and herbs into the pork broth as you eat.'
      }
    ],
    notes: [
      'Obama and Anthony Bourdain famously ate bún chả together in Hanoi.'
    ]
  },
  {
    id: 'ca-kho-to',
    name: 'Caramelized Fish in Clay Pot',
    nativeName: 'Cá Kho Tộ',
    short: 'Cá kho',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Southern Vietnamese · Mekong',
    emoji: '🐟',
    description: 'A Mekong Delta home favorite: catfish braised in a dark, bittersweet caramel with fish sauce, shallots, black pepper and chili until sticky and intensely savory.',
    servings: 4,
    time: { prep: 15, cook: 35 },
    heat: 1,
    tags: ['seafood', 'fish', 'braise'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'catfish fillets', note: 'or steaks, in 2-inch pieces', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'black pepper', note: 'coarsely ground', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, item: 'shallots', note: 'sliced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'red Thai chilies', note: 'sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'coconut water', note: 'or water', aisle: 'international' },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'jasmine rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the fish with the fish sauce and half the pepper.'
      },
      {
        title: 'Caramel',
        text: 'In a clay pot or small heavy pot, melt the sugar with 1 tbsp water over medium heat and cook for 4 minutes until dark amber.',
        tip: 'Take it darker than you think. A deep caramel gives the bittersweet flavor.'
      },
      {
        title: 'Aromatics',
        text: 'Carefully add the oil, shallots, garlic and chilies (it will spatter) and stir for 1 minute.'
      },
      {
        title: 'Braise',
        text: 'Add the fish and marinade in a single layer, then the coconut water. Simmer uncovered on low for 25 minutes, turning once, until the sauce is thick and sticky.'
      },
      {
        title: 'Serve',
        text: 'Top with the remaining pepper and scallions and serve with lots of rice and a simple soup.'
      }
    ],
    notes: [
      'Thit kho (caramelized pork belly with eggs) uses the same technique.'
    ]
  },
  {
    id: 'goi-cuon',
    name: 'Fresh Spring Rolls',
    nativeName: 'Gỏi Cuốn',
    short: 'Spring rolls',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Southern Vietnamese',
    emoji: '🥬',
    description: 'Fresh, translucent rice paper rolls packed with shrimp, pork, vermicelli, lettuce and herbs, dunked in a creamy hoisin-peanut sauce.',
    servings: 4,
    time: { prep: 40, cook: 10 },
    heat: 0,
    tags: ['seafood', 'shrimp', 'no-cook', 'summer'],
    ingredients: [
      { group: 'Rolls', qty: 0.5, unit: 'lb', item: 'large shrimp', note: 'peeled', aisle: 'seafood' },
      { group: 'Rolls', qty: 0.5, unit: 'lb', item: 'pork belly', note: 'or pork shoulder, boiled and thinly sliced', aisle: 'meat' },
      { group: 'Rolls', qty: 4, unit: 'oz', item: 'rice vermicelli', aisle: 'international' },
      { group: 'Rolls', qty: 12, item: 'rice paper wrappers', note: '8½-inch', aisle: 'international' },
      { group: 'Rolls', qty: 1, unit: 'head', item: 'red leaf lettuce', aisle: 'produce' },
      { group: 'Rolls', qty: 1, unit: 'cup', item: 'fresh mint', aisle: 'produce' },
      { group: 'Rolls', qty: 1, unit: 'bunch', item: 'Thai basil', aisle: 'produce' },
      { group: 'Rolls', qty: 1, unit: 'bunch', item: 'garlic chives', aisle: 'produce', optional: true },
      { group: 'Peanut sauce', qty: 0.25, unit: 'cup', item: 'hoisin sauce', aisle: 'international' },
      { group: 'Peanut sauce', qty: 2, unit: 'tbsp', item: 'natural peanut butter', aisle: 'pantry' },
      { group: 'Peanut sauce', qty: 0.25, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Peanut sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Peanut sauce', qty: 1, unit: 'tbsp', item: 'roasted unsalted peanuts', note: 'crushed', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Cook the fillings',
        text: 'Boil the shrimp for 2 minutes, then halve lengthwise. Cook the vermicelli according to the package, rinse and drain.'
      },
      {
        title: 'Peanut sauce',
        text: 'Warm the hoisin, peanut butter, water and garlic, whisking until smooth. Top with crushed peanuts.'
      },
      {
        title: 'Soften the wrapper',
        text: 'Dip a rice paper in warm water for a few seconds and lay it on a damp cutting board.',
        tip: 'It\'ll still feel a little firm. It keeps softening as you fill it.'
      },
      {
        title: 'Roll',
        text: 'Lay lettuce, noodles, herbs and pork on the lower third. Place 3 shrimp halves cut side up just above. Fold the bottom over, fold in the sides, and roll up tightly so the shrimp show through.'
      },
      {
        title: 'Serve',
        text: 'Serve right away with the peanut sauce.'
      }
    ],
    notes: [
      'Cover finished rolls with a damp towel so they don\'t dry out.'
    ]
  },
  {
    id: 'banh-mi',
    name: 'Lemongrass Pork Bánh Mì',
    nativeName: 'Bánh Mì Thịt Nướng',
    short: 'Bánh mì',
    continent: 'Asia',
    region: 'Vietnamese',
    cuisine: 'Saigon street food',
    emoji: '🥖',
    description: 'Crackly baguettes stuffed with caramelized lemongrass pork, quick-pickled carrot and daikon, cool cucumber, chilies and a fistful of cilantro.',
    servings: 4,
    time: { prep: 30, cook: 15, inactive: 60, inactiveLabel: 'pickle & marinate' },
    heat: 1,
    tags: ['sandwich', 'pork', 'pickles', 'lunch'],
    ingredients: [
      { group: 'Quick pickles (đồ chua)', qty: 1, item: 'large carrot', note: 'julienned', shop: 'carrots', aisle: 'produce' },
      { group: 'Quick pickles (đồ chua)', qty: 0.5, unit: 'lb', item: 'daikon radish', note: 'julienned', aisle: 'produce' },
      { group: 'Quick pickles (đồ chua)', qty: 1, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Quick pickles (đồ chua)', qty: 0.5, unit: 'cup', item: 'rice vinegar', aisle: 'international' },
      { group: 'Quick pickles (đồ chua)', qty: 3, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Quick pickles (đồ chua)', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Lemongrass pork', qty: 1.5, unit: 'lb', item: 'boneless pork shoulder', note: 'sliced ⅛-inch thin', aisle: 'meat' },
      { group: 'Lemongrass pork', qty: 2, unit: 'stalk', item: 'lemongrass', note: 'tender core finely minced', aisle: 'produce' },
      { group: 'Lemongrass pork', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Lemongrass pork', qty: 1, item: 'shallot', note: 'minced', shop: 'shallots', aisle: 'produce' },
      { group: 'Lemongrass pork', qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { group: 'Lemongrass pork', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Lemongrass pork', qty: 1.5, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Lemongrass pork', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Lemongrass pork', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Sandwiches', qty: 4, item: 'Vietnamese-style baguettes', note: 'or light, crusty French rolls', aisle: 'bakery' },
      { group: 'Sandwiches', qty: 0.25, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Sandwiches', qty: 4, unit: 'oz', item: 'pork or chicken liver pâté', aisle: 'meat', optional: true },
      { group: 'Sandwiches', qty: 1, item: 'cucumber', note: 'cut into long spears', shop: 'cucumbers', aisle: 'produce' },
      { group: 'Sandwiches', qty: 2, item: 'jalapeños', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Sandwiches', qty: 1, unit: 'cup', item: 'cilantro', note: 'sprigs', aisle: 'produce' },
      { group: 'Sandwiches', item: 'Maggi seasoning', note: 'a few dashes', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Quick-pickle the vegetables',
        text: 'Dissolve the sugar and salt in the warm water, then stir in the vinegar. Add the carrot and daikon, press them under the brine, and let them pickle for at least 1 hour.',
        tip: 'Pickles keep 2 weeks in the fridge — make extra for rice bowls.'
      },
      {
        title: 'Marinate the pork',
        text: 'Mix the lemongrass, garlic, shallot, fish sauce, soy sauce, brown sugar, pepper and 1 tbsp of the oil. Toss with the pork and marinate for at least 30 minutes (or overnight in the fridge).'
      },
      {
        title: 'Sear the pork',
        text: 'Heat a large skillet or grill pan over high heat with the remaining oil. Cook the pork in a single layer, in batches, for 3 minutes per side until caramelized and charred at the edges.'
      },
      {
        title: 'Crisp the bread',
        text: 'Warm the baguettes in a 350°F oven for 5 minutes until the crust crackles. Split them lengthwise, leaving a hinge, and pull out a little of the soft crumb.'
      },
      {
        title: 'Build the sandwiches',
        text: 'Spread mayo (and pâté, if using) inside each roll. Layer in the pork, a big pinch of drained pickles, cucumber spears, jalapeño slices and cilantro. Finish with a few dashes of Maggi and eat right away.'
      }
    ],
    notes: [
      'Can\'t find Vietnamese baguettes? Choose the lightest, airiest rolls you can — dense bread overwhelms the fillings.',
      'The pork is also great over rice noodles as bún thịt nướng.'
    ]
  }
);
