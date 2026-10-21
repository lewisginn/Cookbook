// Middle East recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ─────────────────────────────── Israeli ────────────────────────────────
  {
    id: 'shakshuka',
    name: 'Shakshuka',
    short: 'Shakshuka',
    continent: 'Middle East',
    region: 'Israeli',
    cuisine: 'Maghrebi roots',
    emoji: '🍳',
    description: 'Eggs gently poached in a smoky, cumin-spiced sauce of tomatoes and sweet peppers, crowned with feta and herbs. One pan, endlessly dunkable.',
    servings: 4,
    time: { prep: 10, cook: 30 },
    heat: 1,
    tags: ['eggs', 'vegetarian', 'brunch', 'one-pan'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'red bell peppers', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'red pepper flakes', note: 'or 1 tbsp harissa', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 28, unit: 'oz', item: 'canned whole peeled tomatoes', note: '1 large can', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', note: 'if tomatoes are sharp', aisle: 'pantry', optional: true, staple: true },
      { qty: 6, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped (or cilantro)', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'crusty bread', note: 'or warm pita, for dunking', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Soften the vegetables',
        text: 'Heat the oil in a 12-inch skillet over medium heat. Cook the onion and peppers for 10 minutes, stirring occasionally, until soft and sweet.'
      },
      {
        title: 'Toast the spices',
        text: 'Add the garlic, cumin, both paprikas, chili flakes and tomato paste. Stir for 1 minute until fragrant and brick red.'
      },
      {
        title: 'Simmer the sauce',
        text: 'Add the tomatoes and their juice, crushing them with your hands as they go in. Add the salt (and sugar if needed). Simmer for 10 minutes until thick enough that a spoon dragged through leaves a trail.'
      },
      {
        title: 'Add the eggs',
        text: 'Make 6 wells in the sauce with a spoon and crack an egg into each. Season the eggs with a pinch of salt. Cover and cook over medium-low heat for 6 minutes, until the whites are set but the yolks still run.',
        tip: 'Like jammy yolks? Give it 2 minutes more.'
      },
      {
        title: 'Serve',
        text: 'Scatter with feta and parsley and bring the pan straight to the table with plenty of bread.'
      }
    ],
    notes: [
      'The sauce can be made 3 days ahead — reheat it, then add the eggs.',
      'Green shakshuka variation: swap the tomatoes for sautéed spinach, chard and leeks.'
    ]
  },
  // ────────────────────────────── Levantine ───────────────────────────────
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma',
    nativeName: 'شاورما',
    short: 'Shawarma',
    continent: 'Middle East',
    region: 'Levantine',
    emoji: '🥙',
    description: 'Warm-spiced, lemony chicken thighs roasted hot until the edges char, sliced thin and stuffed into pita with creamy tahini-yogurt sauce, tomato, cucumber and onion.',
    servings: 4,
    time: { prep: 20, cook: 30, inactive: 120, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['chicken', 'wraps', 'sheet-pan'],
    ingredients: [
      { group: 'Chicken', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', aisle: 'meat' },
      { group: 'Chicken', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 5, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Chicken', qty: 0.25, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Chicken', qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Chicken', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Tahini sauce', qty: 0.33, unit: 'cup', item: 'tahini', aisle: 'international' },
      { group: 'Tahini sauce', qty: 0.5, unit: 'cup', item: 'plain Greek yogurt', aisle: 'dairy' },
      { group: 'Tahini sauce', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Tahini sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Tahini sauce', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tahini sauce', qty: 3, unit: 'tbsp', item: 'water', aisle: 'none' },
      { group: 'To serve', qty: 4, item: 'pita breads', aisle: 'bakery' },
      { group: 'To serve', qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'cucumber', note: 'diced', shop: 'cucumbers', aisle: 'produce' },
      { group: 'To serve', qty: 0.5, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', item: 'pickled turnips', note: 'the bright pink ones', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Whisk the oil, lemon juice, garlic, all the spices, salt and pepper in a bowl. Add the chicken, turn to coat, cover and refrigerate for at least 2 hours, or overnight.'
      },
      {
        title: 'Roast hot',
        text: 'Heat the oven to 425°F. Spread the chicken on a foil-lined sheet pan in a single layer and roast for 25 minutes until cooked through and browned at the edges.'
      },
      {
        title: 'Char',
        text: 'Switch the oven to broil and broil for 3 minutes until the edges blacken in spots. Rest the chicken for 5 minutes, then slice thinly.',
        tip: 'The charred bits are what make it taste like it came off a spit — don\'t skip the broil.'
      },
      {
        title: 'Make the tahini sauce',
        text: 'While the chicken roasts, whisk the tahini, yogurt, lemon juice, garlic and salt. Whisk in water a spoonful at a time until it\'s pourable.',
        tip: 'Tahini seizes up and looks curdled at first — keep whisking and it turns silky.'
      },
      {
        title: 'Warm the pitas',
        text: 'Warm the pitas in a dry skillet for 30 seconds per side.'
      },
      {
        title: 'Assemble',
        text: 'Pile the chicken into the pitas with tomato, cucumber, red onion, parsley and pickled turnips, and drizzle generously with tahini sauce.'
      }
    ],
    notes: [
      'Make it a bowl: serve over rice or salad greens with the same toppings.',
      'Leftover chicken reheats well in a hot skillet, which re-crisps the edges.'
    ]
  },
  {
    id: 'falafel',
    name: 'Falafel with Tahini Sauce',
    nativeName: 'فلافل',
    short: 'Falafel',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Egyptian & Levantine',
    emoji: '🧆',
    description: 'Crisp, deep-golden falafel with a fluffy, bright-green herb interior, made the proper way from soaked (never canned) chickpeas, with lemony tahini sauce for dipping.',
    servings: 4,
    time: { prep: 30, cook: 20, inactive: 720, inactiveLabel: 'soak chickpeas' },
    heat: 0,
    tags: ['vegan', 'vegetarian', 'fried', 'wraps'],
    ingredients: [
      { group: 'Falafel', qty: 1, unit: 'cup', item: 'dried chickpeas', note: 'not canned', aisle: 'pantry' },
      { group: 'Falafel', qty: 0.5, item: 'yellow onion', note: 'roughly chopped', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Falafel', qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Falafel', qty: 1, unit: 'cup', item: 'flat-leaf parsley', note: 'leaves and tender stems', aisle: 'produce' },
      { group: 'Falafel', qty: 1, unit: 'cup', item: 'cilantro', note: 'leaves and tender stems', aisle: 'produce' },
      { group: 'Falafel', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Falafel', qty: 1, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Falafel', qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Falafel', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Falafel', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Falafel', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Falafel', qty: 2, unit: 'tbsp', item: 'all-purpose flour', note: 'only if the mix is crumbly', aisle: 'pantry', optional: true },
      { group: 'Falafel', qty: 4, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'Tahini sauce', qty: 0.33, unit: 'cup', item: 'tahini', aisle: 'international' },
      { group: 'Tahini sauce', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Tahini sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Tahini sauce', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tahini sauce', qty: 0.33, unit: 'cup', item: 'ice water', aisle: 'none' },
      { group: 'To serve', qty: 4, item: 'pita breads', aisle: 'bakery' },
      { group: 'To serve', qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'cucumber', note: 'diced', shop: 'cucumbers', aisle: 'produce' },
      { group: 'To serve', item: 'pickled turnips', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Soak the chickpeas',
        text: 'Cover the dried chickpeas with plenty of cold water (they triple in size) and soak for at least 12 hours. Drain and pat them very dry.',
        tip: 'Canned or cooked chickpeas make falafel that falls apart in the oil — soaked raw chickpeas are the secret.'
      },
      {
        title: 'Grind the mix',
        text: 'Pulse the chickpeas, onion, garlic, parsley, cilantro, spices, salt and pepper in a food processor, scraping down the sides, until finely ground like coarse sand. Stop before it turns into a paste.'
      },
      {
        title: 'Chill',
        text: 'Transfer to a bowl, cover and refrigerate for 1 hour so the mixture firms up.'
      },
      {
        title: 'Make the tahini sauce',
        text: 'Whisk the tahini, lemon juice, garlic and salt, then whisk in the ice water a little at a time until smooth and creamy.'
      },
      {
        title: 'Shape',
        text: 'Stir the baking powder into the chilled mix. Squeeze a little in your hand: if it won\'t hold together, add the flour. Shape into balls or small patties of about 1½ tablespoons each.'
      },
      {
        title: 'Fry',
        text: 'Heat 2 inches of oil in a heavy pot to 350°F. Fry the falafel in batches without crowding for 4 minutes, turning once, until deep golden brown. Drain on a rack and sprinkle with salt.',
        tip: 'Fry one test falafel first — if it crumbles, mix more flour into the batch.'
      },
      {
        title: 'Serve',
        text: 'Tuck the falafel into pitas with tomato, cucumber, pickled turnips and lots of tahini sauce, or serve them on a platter with hummus.'
      }
    ],
    notes: [
      'Shaped, uncooked falafel freeze well — fry them straight from frozen, adding a minute.',
      'Air fryer: brush with oil and cook at 375°F for 12–14 minutes, flipping halfway.'
    ]
  },
  {
    id: 'mujadara',
    name: 'Mujadara',
    nativeName: 'مجدرة',
    short: 'Mujadara',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Lebanese & Palestinian',
    emoji: '🧅',
    description: 'Humble and wildly delicious: lentils and rice cooked with warm spices and crowned with a heap of deeply browned, crispy onions. Vegan comfort food.',
    servings: 4,
    time: { prep: 15, cook: 55 },
    heat: 0,
    tags: ['vegan', 'vegetarian', 'budget', 'lentils'],
    ingredients: [
      { group: 'Crispy onions', qty: 3, item: 'large yellow onions', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Crispy onions', qty: 0.5, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Crispy onions', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Lentils & rice', qty: 1, unit: 'cup', item: 'brown or green lentils', aisle: 'pantry' },
      { group: 'Lentils & rice', qty: 4, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Lentils & rice', qty: 1, unit: 'cup', item: 'basmati rice', note: 'rinsed', aisle: 'pantry' },
      { group: 'Lentils & rice', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Lentils & rice', qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Lentils & rice', qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Lentils & rice', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Lentils & rice', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'plain Greek yogurt', aisle: 'dairy' },
      { group: 'To serve', qty: 1, item: 'cucumber', note: 'diced', shop: 'cucumbers', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Par-cook the lentils',
        text: 'Simmer the lentils in the water for 15 minutes until just tender but holding their shape. Drain, saving the cooking liquid.'
      },
      {
        title: 'Fry the onions',
        text: 'Meanwhile, fry the onions in the oil in a wide, deep skillet over medium-high heat for 25 minutes, stirring often and lowering the heat as they darken, until deep brown and crisp. Move half to paper towels and sprinkle with salt.',
        tip: 'Be patient and push them darker than you think. Brown onions are the whole flavor of the dish.'
      },
      {
        title: 'Toast the rice',
        text: 'To the onions and oil left in the pan, add the rice, cumin, cinnamon and allspice and stir for 2 minutes.'
      },
      {
        title: 'Cook together',
        text: 'Add the lentils and 2 cups of the reserved liquid (top up with water), plus the salt and pepper. Bring to a boil, cover, and cook on low for 18 minutes until the rice is tender. Rest off the heat for 10 minutes.'
      },
      {
        title: 'Serve',
        text: 'Fluff and pile onto a platter. Top with the crispy onions and serve with yogurt mixed with cucumber and parsley, and lemon wedges.'
      }
    ],
    notes: [
      'Keeps 4 days in the fridge. Re-crisp the onions in a dry pan before serving.'
    ]
  },
  {
    id: 'hummus',
    name: 'Silky Hummus',
    nativeName: 'حمص',
    short: 'Hummus',
    continent: 'Middle East',
    region: 'Levantine',
    emoji: '🥙',
    description: 'Ultra-smooth, fluffy hummus made from scratch: chickpeas cooked until falling apart, whipped with plenty of tahini, lemon and ice water.',
    servings: 6,
    time: { prep: 15, cook: 60, inactive: 720, inactiveLabel: 'soak chickpeas' },
    heat: 0,
    tags: ['vegan', 'vegetarian', 'dip', 'make-ahead'],
    ingredients: [
      { qty: 1, unit: 'cup', item: 'dried chickpeas', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'baking soda', note: 'divided', aisle: 'pantry' },
      { qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.67, unit: 'cup', item: 'tahini', note: 'well stirred', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'ice water', aisle: 'none' },
      { qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'olive oil', note: 'for serving', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'sweet paprika', note: 'or sumac', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 4, item: 'pita breads', note: 'warm, to serve', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the chickpeas overnight (at least 12 hours) in plenty of water with ½ tsp baking soda.'
      },
      {
        title: 'Cook until mushy',
        text: 'Drain and rinse. Cover with fresh water by 2 inches, add the remaining ½ tsp baking soda, and simmer for 1 hour until completely soft and falling apart. Skim off any loose skins.',
        tip: 'Overcooked chickpeas are the secret to smooth hummus. They should mash with no pressure.'
      },
      {
        title: 'Mellow the garlic',
        text: 'Meanwhile, blend the lemon juice, garlic and salt in a food processor and let it sit for 10 minutes.'
      },
      {
        title: 'Whip the tahini',
        text: 'Add the tahini and blend. With the motor running, add ice water a spoonful at a time until the mixture turns pale and fluffy.'
      },
      {
        title: 'Blend',
        text: 'Add the hot drained chickpeas and cumin and blend for 3 minutes, scraping down the sides, until ultra-smooth. Add more ice water if needed and adjust the salt and lemon.'
      },
      {
        title: 'Serve',
        text: 'Swoosh onto a plate, make a well with a spoon, and fill with olive oil. Dust with paprika, scatter with parsley, and serve with warm pita.'
      }
    ],
    notes: [
      'Shortcut: simmer 2 cans of drained chickpeas with ½ tsp baking soda for 20 minutes, then continue from step 3.'
    ]
  },
  // ─────────────────────────────── Persian ────────────────────────────────
  {
    id: 'ghormeh-sabzi',
    name: 'Ghormeh Sabzi',
    nativeName: 'قورمه‌سبزی',
    short: 'Ghormeh sabzi',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🌿',
    description: 'Iran\'s beloved herb stew: mountains of parsley, cilantro and fenugreek fried until dark and fragrant, then slow-cooked with lamb, kidney beans and tangy dried limes.',
    servings: 6,
    time: { prep: 30, cook: 200 },
    heat: 0,
    tags: ['lamb', 'stew', 'herbs', 'make-ahead'],
    ingredients: [
      { group: 'Herbs', qty: 4, unit: 'cup', item: 'flat-leaf parsley', note: 'finely chopped', aisle: 'produce' },
      { group: 'Herbs', qty: 2, unit: 'cup', item: 'cilantro', note: 'finely chopped', aisle: 'produce' },
      { group: 'Herbs', qty: 6, item: 'scallions', note: 'green parts, finely chopped', aisle: 'produce' },
      { group: 'Herbs', qty: 3, unit: 'tbsp', item: 'dried fenugreek leaves', aisle: 'international' },
      { group: 'Herbs', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Stew', qty: 2, unit: 'lb', item: 'boneless lamb shoulder', note: 'or beef chuck, in 1-inch cubes', aisle: 'meat' },
      { group: 'Stew', qty: 5, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Stew', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 4, item: 'dried limes (limoo amani)', note: 'pierced a few times', aisle: 'international' },
      { group: 'Stew', qty: 1, unit: 'can', item: 'red kidney beans', note: '15 oz, drained', aisle: 'pantry' },
      { group: 'Stew', qty: 0.5, item: 'lemon', note: 'juiced, optional for extra tang', shop: 'lemons', aisle: 'produce' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Fry the herbs',
        text: 'Heat 2 tbsp oil in a large skillet over medium heat. Add the parsley, cilantro, scallion greens and fenugreek and cook for 20 minutes, stirring often, until dark green, much reduced and very fragrant.',
        tip: 'This is the soul of the dish. Go slowly and don\'t let the herbs scorch.'
      },
      {
        title: 'Brown the meat',
        text: 'Heat 1 tbsp oil in a Dutch oven over medium heat. Cook the onion for 8 minutes until golden, add the turmeric for 30 seconds, then add the meat and brown for 8 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the water, salt and pepper. Bring to a boil, then cover and simmer for 1 hour.'
      },
      {
        title: 'Add herbs & limes',
        text: 'Stir in the fried herbs and the pierced dried limes. Cover and simmer for 1.5 hours, stirring now and then, until the meat is very tender and a sheen of oil rises to the top.'
      },
      {
        title: 'Beans',
        text: 'Add the kidney beans and simmer for 20 minutes. Season, and add lemon juice if you want it more sour.'
      },
      {
        title: 'Serve',
        text: 'Serve over basmati rice. Press the softened limes against the pot for extra tang, but don\'t eat them whole.'
      }
    ],
    notes: [
      'Persian markets sell pre-chopped frozen ghormeh sabzi herb mix, which saves a lot of chopping.'
    ]
  },
  {
    id: 'joojeh-kabab',
    name: 'Saffron Chicken Kebabs',
    nativeName: 'Joojeh Kabab',
    short: 'Joojeh kabab',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🍢',
    description: 'Persian grilled chicken marinated in saffron, yogurt, onion and lemon, glowing golden and tender from the grill. Serve with fluffy saffron rice and charred tomatoes.',
    servings: 4,
    time: { prep: 20, cook: 15, inactive: 240, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['chicken', 'grilled', 'summer'],
    ingredients: [
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { group: 'Marinade', qty: 3, unit: 'tbsp', item: 'hot water', aisle: 'none' },
      { group: 'Marinade', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'in 1½-inch pieces', aisle: 'meat' },
      { group: 'Marinade', qty: 1, item: 'yellow onions', note: 'grated', aisle: 'produce' },
      { group: 'Marinade', qty: 0.5, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { group: 'Marinade', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Marinade', qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Grill', qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' },
      { group: 'Grill', qty: 4, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Grill', qty: 8, item: 'metal skewers', note: 'or soaked wooden skewers', aisle: 'other', optional: true },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'basmati rice', aisle: 'pantry' },
      { group: 'To serve', qty: 1, unit: 'tsp', item: 'ground sumac', aisle: 'spices' },
      { group: 'To serve', qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Bloom the saffron',
        text: 'Grind the saffron with a pinch of sugar and steep it in the hot water for 10 minutes.'
      },
      {
        title: 'Marinate',
        text: 'Mix half the saffron water with the onion, yogurt, lemon juice, oil, salt, pepper and turmeric. Add the chicken, cover, and refrigerate for at least 4 hours or overnight.'
      },
      {
        title: 'Skewer',
        text: 'Thread the chicken onto skewers, and thread the whole tomatoes onto separate skewers. Mix the melted butter with the remaining saffron water for basting.'
      },
      {
        title: 'Grill',
        text: 'Grill over high heat for 10 minutes, turning and basting with saffron butter, until charred at the edges and cooked through. Grill the tomatoes until blistered.'
      },
      {
        title: 'Rice',
        text: 'Cook the basmati rice according to the package, or make chelow with a crispy tahdig if you\'re feeling ambitious.'
      },
      {
        title: 'Serve',
        text: 'Serve the kebabs over the rice with the charred tomatoes, a sprinkle of sumac, and lemon wedges.'
      }
    ],
    notes: [
      'No grill? Broil on a rack close to the element for about 12 minutes, turning once.'
    ]
  },
  // ─────────────────────────────── Turkish ────────────────────────────────
  {
    id: 'mercimek-corbasi',
    name: 'Turkish Red Lentil Soup',
    nativeName: 'Mercimek Çorbası',
    short: 'Lentil soup',
    continent: 'Middle East',
    region: 'Turkish',
    emoji: '🥣',
    description: 'Turkey\'s everyday comfort soup: red lentils simmered until they melt into a velvety purée, topped with sizzling chili-mint butter and a squeeze of lemon.',
    servings: 6,
    time: { prep: 10, cook: 35 },
    heat: 1,
    tags: ['soup', 'vegetarian-adaptable', 'budget', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Turkish red pepper paste (biber salçası)', aisle: 'international', optional: true },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 1.5, unit: 'cup', item: 'red lentils', note: 'rinsed', aisle: 'pantry' },
      { qty: 7, unit: 'cup', item: 'chicken stock', note: 'or vegetable stock', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'Aleppo pepper', note: 'or ½ tsp red pepper flakes', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried mint', aisle: 'spices' },
      { qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soften the vegetables',
        text: 'Heat the oil and 1 tbsp butter in a large pot over medium heat. Cook the onion and carrot for 8 minutes until soft.'
      },
      {
        title: 'Spices',
        text: 'Add the garlic, tomato paste, pepper paste, cumin and paprika and stir for 2 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the lentils, stock, salt and pepper. Bring to a boil, then simmer partly covered for 25 minutes until the lentils completely collapse.'
      },
      {
        title: 'Purée',
        text: 'Purée until silky with an immersion blender. Thin with a little water if it\'s too thick, and season.'
      },
      {
        title: 'Sizzle & serve',
        text: 'Melt the remaining 1 tbsp butter until foaming, take it off the heat, and stir in the Aleppo pepper and mint for 30 seconds. Drizzle over each bowl and serve with lemon.'
      }
    ],
    notes: [
      'Vegan: use vegetable stock and olive oil instead of butter.'
    ]
  }
);
