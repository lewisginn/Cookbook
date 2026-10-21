// Middle East recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ────────────────────────── Arabian Peninsula ───────────────────────────
  {
    id: 'chicken-kabsa',
    name: 'Chicken Kabsa',
    nativeName: 'كبسة دجاج',
    short: 'Kabsa',
    continent: 'Middle East',
    region: 'Arabian Peninsula',
    cuisine: 'Saudi',
    emoji: '🍗',
    description: 'Saudi Arabia\'s national dish: chicken and long-grain rice cooked together in a warmly spiced tomato broth with dried lime, then topped with toasted almonds and raisins.',
    servings: 6,
    time: { prep: 20, cook: 75 },
    heat: 1,
    tags: ['chicken', 'rice', 'one-pot', 'party'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'or a cut-up chicken', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'or ghee', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, item: 'carrots', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'kabsa spice mix', note: 'or baharat', aisle: 'spices' },
      { qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { qty: 4, item: 'whole cloves', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, item: 'dried limes (limoo amani)', note: 'pierced', aisle: 'international' },
      { qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2.5, unit: 'cup', item: 'basmati rice', note: 'soaked 30 minutes', aisle: 'pantry' },
      { qty: 0.33, unit: 'cup', item: 'sliced almonds', aisle: 'pantry' },
      { qty: 0.33, unit: 'cup', item: 'golden raisins', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brown the chicken',
        text: 'Brown the chicken in the oil in a large pot for 8 minutes. Set aside.'
      },
      {
        title: 'Base',
        text: 'Cook the onion for 6 minutes, then the garlic for 1 minute. Add the tomatoes, tomato paste, carrot, spice mix and whole spices and cook for 5 minutes.'
      },
      {
        title: 'Simmer the chicken',
        text: 'Return the chicken, add the dried lime, stock and salt, and simmer covered for 30 minutes. Lift out the chicken.'
      },
      {
        title: 'Rice',
        text: 'Add the drained rice to the broth (top up with water so it covers the rice by ½ inch). Cover and cook on low for 20 minutes until tender.'
      },
      {
        title: 'Crisp the chicken',
        text: 'Meanwhile, broil the chicken for 6 minutes until the skin is crisp.'
      },
      {
        title: 'Serve',
        text: 'Toast the almonds and raisins in a little oil. Pile the rice on a large platter, top with the chicken, and scatter with nuts and raisins.'
      }
    ],
    notes: [
      'Serve with a tomato-chili sauce (daqoos) and a cucumber-yogurt salad.'
    ]
  },
  {
    id: 'chicken-mandi',
    name: 'Chicken Mandi',
    nativeName: 'مندي دجاج',
    short: 'Mandi',
    continent: 'Middle East',
    region: 'Arabian Peninsula',
    cuisine: 'Yemeni',
    emoji: '🍚',
    description: 'Yemen\'s smoky celebration rice: spice-rubbed chicken roasted over fragrant rice that cooks in the drippings, finished with a smoldering charcoal for that signature smoke.',
    servings: 6,
    time: { prep: 20, cook: 90, inactive: 120, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['chicken', 'rice', 'roast', 'celebration'],
    ingredients: [
      { group: 'Mandi spice', qty: 1, unit: 'tbsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Mandi spice', qty: 2, unit: 'tsp', item: 'ground coriander', aisle: 'spices' },
      { group: 'Mandi spice', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Mandi spice', qty: 1, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Mandi spice', qty: 1, unit: 'tsp', item: 'ground cardamom', aisle: 'spices' },
      { group: 'Mandi spice', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Mandi spice', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, item: 'whole chicken', note: '4 lb, halved', aisle: 'meat' },
      { group: 'Chicken', qty: 3, unit: 'tbsp', item: 'unsalted butter', note: 'melted (or ghee)', aisle: 'dairy' },
      { group: 'Rice', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Rice', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Rice', qty: 4, item: 'green cardamom pods', aisle: 'spices' },
      { group: 'Rice', qty: 4, item: 'whole cloves', aisle: 'spices' },
      { group: 'Rice', qty: 1, unit: 'stick', item: 'cinnamon', aisle: 'spices' },
      { group: 'Rice', qty: 1, item: 'dried limes (limoo amani)', note: 'pierced', aisle: 'international' },
      { group: 'Rice', qty: 2.5, unit: 'cup', item: 'basmati rice', note: 'soaked 30 minutes', aisle: 'pantry' },
      { group: 'Rice', qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Smoke (optional)', qty: 1, item: 'piece natural lump charcoal', shop: 'lump charcoal', aisle: 'other', optional: true }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Mix the mandi spices. Rub half over the chicken with the melted butter and marinate for 2 hours.'
      },
      {
        title: 'Rice base',
        text: 'Heat the oven to 375°F. In a large roasting pan or Dutch oven on the stove, cook the onion in the oil for 6 minutes, then add the garlic, whole spices, dried lime and remaining mandi spice for 1 minute.'
      },
      {
        title: 'Add rice',
        text: 'Stir in the drained rice and the stock and bring to a boil.'
      },
      {
        title: 'Roast together',
        text: 'Set a rack over the rice and place the chicken on it so the drippings fall into the rice. Cover tightly with foil and roast for 60 minutes, then uncover and roast for 20 minutes more until the chicken is golden.'
      },
      {
        title: 'Smoke (optional)',
        text: 'Light the charcoal until glowing. Set it in a small foil cup on the rice, drizzle with a little oil, cover tightly for 5 minutes, then remove.',
        tip: 'Do this near an open window or vent. This is the traditional Yemeni smoke finish.'
      },
      {
        title: 'Serve',
        text: 'Fluff the rice onto a platter and top with the chicken. Serve with a spicy tomato salsa.'
      }
    ],
    notes: [
      'For a simpler smoky flavor, add ½ tsp smoked paprika to the rice instead of charcoal.'
    ]
  },
  {
    id: 'fahsa',
    name: 'Fahsa',
    nativeName: 'فحسة',
    short: 'Fahsa',
    continent: 'Middle East',
    region: 'Arabian Peninsula',
    cuisine: 'Yemeni',
    emoji: '🍲',
    description: 'Yemen\'s bubbling lamb stew served in a sizzling stone pot, topped with frothy fenugreek hulba and eaten with flatbread and fiery zhug.',
    servings: 4,
    time: { prep: 20, cook: 120 },
    heat: 2,
    tags: ['lamb', 'stew', 'spicy'],
    ingredients: [
      { group: 'Stew', qty: 2, unit: 'lb', item: 'boneless lamb shoulder', note: 'in 1-inch pieces', aisle: 'meat' },
      { group: 'Stew', qty: 6, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stew', qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 2, unit: 'tsp', item: 'hawaij spice blend', note: 'or 1 tsp each cumin and black pepper + ½ tsp turmeric', aisle: 'spices' },
      { group: 'Stew', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Hulba & zhug', qty: 2, unit: 'tbsp', item: 'ground fenugreek', aisle: 'spices' },
      { group: 'Hulba & zhug', qty: 0.5, unit: 'cup', item: 'cold water', shop: 'water', aisle: 'none' },
      { group: 'Hulba & zhug', qty: 1, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Hulba & zhug', qty: 3, item: 'serrano chilies', aisle: 'produce' },
      { group: 'Hulba & zhug', qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Hulba & zhug', qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Hulba & zhug', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'To serve', qty: 4, item: 'pita breads', note: 'or malawach', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Simmer the lamb',
        text: 'Simmer the lamb in the water for 1 hour until tender. Lift out, shred, and keep the broth.'
      },
      {
        title: 'Hulba',
        text: 'Soak the fenugreek in the cold water for 1 hour, pour off the water, then whisk vigorously until frothy and pale.'
      },
      {
        title: 'Zhug',
        text: 'Blend the cilantro, chilies, garlic, cumin, lemon juice and a pinch of salt into a coarse sauce.'
      },
      {
        title: 'Stew',
        text: 'Heat the oil in a heavy pot (or a stone pot if you have one) and cook the onion, garlic and tomatoes for 8 minutes. Add the hawaij, salt, shredded lamb and 1 cup broth and simmer for 15 minutes until thick.'
      },
      {
        title: 'Serve sizzling',
        text: 'Bring the pot to the table bubbling hot, spoon hulba on top, and serve with bread and zhug.',
        tip: 'Fahsa is meant to arrive still bubbling. Heat the serving pot well first.'
      }
    ],
    notes: [
      'Hulba\'s bittersweet froth is acquired but addictive.'
    ]
  },
  // ──────────────────────────────── Iraqi ─────────────────────────────────
  {
    id: 'masgouf',
    name: 'Masgouf-Style Grilled Fish',
    nativeName: 'مسگوف',
    short: 'Masgouf',
    continent: 'Middle East',
    region: 'Iraqi',
    emoji: '🐟',
    description: 'Iraq\'s national dish, adapted for home: butterflied whole fish brushed with tamarind, turmeric and tomato, grilled until smoky, served with flatbread and pickles.',
    servings: 4,
    time: { prep: 20, cook: 30 },
    heat: 1,
    tags: ['seafood', 'fish', 'grilled'],
    ingredients: [
      { qty: 2, item: 'whole fish', note: 'carp, branzino or snapper, 2 lb each, butterflied through the back', shop: 'whole fish (carp or branzino)', aisle: 'seafood' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'tamarind concentrate', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, item: 'Roma tomatoes', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'lemons', note: 'in wedges', aisle: 'produce' },
      { qty: 4, item: 'pita breads', note: 'or Iraqi samoon bread', aisle: 'bakery' },
      { item: 'mixed pickles (torshi)', note: 'to serve', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Season',
        text: 'Pat the butterflied fish dry and rub the flesh with salt and turmeric.'
      },
      {
        title: 'Glaze',
        text: 'Mix the tamarind, oil, cumin and pepper and brush it over the flesh.'
      },
      {
        title: 'Grill',
        text: 'Grill skin side down over medium heat, lid closed, for 20 minutes. Lay the tomato and onion slices on top for the last 5 minutes.',
        tip: 'Traditional masgouf is slow-roasted upright beside an open fire. A closed grill gets you close.'
      },
      {
        title: 'Serve',
        text: 'Serve on a platter with flatbread, lemon wedges and pickles.'
      }
    ],
    notes: [
      'A 425°F oven works too: roast on a rack for about 20 minutes.'
    ]
  },
  {
    id: 'tashreeb-dijaj',
    name: 'Tashreeb Dijaj',
    nativeName: 'تشريب دجاج',
    short: 'Tashreeb',
    continent: 'Middle East',
    region: 'Iraqi',
    emoji: '🍲',
    description: 'Iraqi comfort food: chicken simmered with dried black limes, turmeric and chickpeas, ladled over torn flatbread that soaks up the tangy broth.',
    servings: 6,
    time: { prep: 15, cook: 75 },
    heat: 0,
    tags: ['chicken', 'soup', 'comfort'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'quartered', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'baharat spice blend', note: 'or ½ tsp each allspice and cinnamon', aisle: 'spices' },
      { qty: 3, item: 'dried limes (limoo amani)', note: 'pierced', aisle: 'international' },
      { qty: 8, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'can', item: 'chickpeas', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 4, item: 'pita breads', note: 'or Iraqi flatbread, torn', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Brown',
        text: 'Brown the chicken in the oil in a large pot for 8 minutes. Add the onion, turmeric and baharat for 2 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the dried limes, water and salt. Bring to a boil, skim, and simmer for 45 minutes.'
      },
      {
        title: 'Chickpeas',
        text: 'Stir in the chickpeas and tomato paste and simmer for 15 minutes.'
      },
      {
        title: 'Serve',
        text: 'Line wide bowls with torn bread, set the chicken on top, and ladle over the broth so the bread soaks it up.',
        tip: 'Press the softened dried limes against the pot to release more tang.'
      }
    ],
    notes: [
      'Lamb tashreeb is also popular. Use bone-in lamb and simmer for 1.5 hours.'
    ]
  },
  // ─────────────────────────────── Israeli ────────────────────────────────
  {
    id: 'israeli-couscous-salad',
    name: 'Israeli Couscous with Roasted Vegetables',
    short: 'Pearl couscous',
    continent: 'Middle East',
    region: 'Israeli',
    emoji: '🥗',
    description: 'Toasty pearl couscous tossed with roasted zucchini, peppers and onions, chickpeas, herbs, feta and a lemony za\'atar dressing. Great warm or cold.',
    servings: 6,
    time: { prep: 20, cook: 30 },
    heat: 0,
    tags: ['vegetarian', 'salad', 'make-ahead'],
    ingredients: [
      { qty: 2, item: 'zucchini', note: 'in ½-inch pieces', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'in ½-inch pieces', aisle: 'produce' },
      { qty: 1, item: 'red onion', note: 'in wedges', shop: 'red onions', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'olive oil', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'cup', item: 'pearl (Israeli) couscous', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'vegetable stock', aisle: 'pantry' },
      { qty: 1, unit: 'can', item: 'chickpeas', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'za\'atar', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'fresh mint', note: 'chopped', aisle: 'produce' },
      { qty: 4, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Roast',
        text: 'Heat the oven to 425°F. Toss the zucchini, pepper and onion with 2 tbsp oil and 1 tsp salt and roast for 25 minutes until browned at the edges.'
      },
      {
        title: 'Couscous',
        text: 'Toast the couscous in 1 tbsp oil for 3 minutes until golden. Add the stock, cover, and simmer for 10 minutes until tender.'
      },
      {
        title: 'Dressing',
        text: 'Whisk the remaining oil with the lemon juice, za\'atar and remaining salt.'
      },
      {
        title: 'Toss & serve',
        text: 'Toss the couscous with the vegetables, chickpeas, dressing and herbs. Top with feta.'
      }
    ],
    notes: [
      'Keeps well for 3 days, so it\'s great for lunches.'
    ]
  },
  {
    id: 'sabich',
    name: 'Sabich',
    short: 'Sabich',
    continent: 'Middle East',
    region: 'Israeli',
    cuisine: 'Iraqi-Jewish roots',
    emoji: '🥙',
    description: 'Israel\'s favorite pita sandwich: fried eggplant, hard-boiled egg, hummus, tahini, Israeli salad, pickles and spicy amba (mango pickle sauce).',
    servings: 4,
    time: { prep: 20, cook: 25 },
    heat: 1,
    tags: ['vegetarian', 'sandwich', 'street food'],
    ingredients: [
      { qty: 1, item: 'eggplant', note: 'sliced into ½-inch rounds', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 4, item: 'eggs', note: 'hard-boiled and sliced', aisle: 'dairy' },
      { qty: 4, item: 'pita breads', note: 'thick, fluffy pockets', aisle: 'bakery' },
      { qty: 0.5, unit: 'cup', item: 'store-bought hummus', aisle: 'international' },
      { qty: 0.33, unit: 'cup', item: 'tahini', note: 'thinned with lemon and water', aisle: 'international' },
      { qty: 2, item: 'Roma tomatoes', note: 'finely diced', aisle: 'produce' },
      { qty: 1, item: 'cucumber', note: 'finely diced', shop: 'cucumbers', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'amba (mango pickle sauce)', aisle: 'international' },
      { qty: 0.5, unit: 'cup', item: 'dill pickle chips', aisle: 'pantry' },
      { item: 'zhug or hot sauce', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Fry the eggplant',
        text: 'Salt the eggplant slices and let sit for 10 minutes. Pat dry and fry in the oil for 3 minutes per side until deeply golden and creamy. Drain.'
      },
      {
        title: 'Israeli salad',
        text: 'Toss the tomatoes, cucumber and parsley with the lemon juice and a pinch of salt.'
      },
      {
        title: 'Assemble',
        text: 'Open the pitas, smear hummus inside, and layer in eggplant, egg slices, salad and pickles.'
      },
      {
        title: 'Sauce & serve',
        text: 'Drizzle with tahini and amba, add zhug if you like heat, and eat right away.',
        tip: 'Amba is tangy, funky and essential. Look for it at Middle Eastern or Indian grocers.'
      }
    ],
    notes: [
      'Traditionally a Shabbat morning breakfast in Iraqi-Jewish homes.'
    ]
  },
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
    id: 'baba-ganoush',
    name: 'Baba Ganoush',
    nativeName: 'بابا غنوج',
    short: 'Baba ganoush',
    continent: 'Middle East',
    region: 'Levantine',
    emoji: '🍆',
    description: 'Smoky charred eggplant whipped with tahini, lemon and garlic into a creamy dip, finished with olive oil, pomegranate and parsley.',
    servings: 6,
    time: { prep: 15, cook: 40 },
    heat: 0,
    tags: ['vegan', 'dip', 'make-ahead'],
    ingredients: [
      { qty: 2, item: 'eggplants', note: 'about 2 lb', shop: 'eggplant', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'tahini', aisle: 'international' },
      { qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'olive oil', note: 'for serving', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'pomegranate seeds', aisle: 'produce', optional: true },
      { qty: 1, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 4, item: 'pita breads', note: 'warm, to serve', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Char',
        text: 'Char the whole eggplants directly over a gas flame or under the broiler for 25 minutes, turning, until completely blackened and collapsed.',
        tip: 'The more charred the skin, the smokier the dip.'
      },
      {
        title: 'Drain',
        text: 'Let cool slightly, then scoop out the flesh and drain in a sieve for 10 minutes.'
      },
      {
        title: 'Mash',
        text: 'Mash the eggplant with a fork, then stir in the tahini, lemon juice, garlic, salt and cumin.'
      },
      {
        title: 'Serve',
        text: 'Spread on a plate, drizzle with olive oil, and top with pomegranate seeds and parsley. Serve with warm pita.'
      }
    ],
    notes: [
      'Mash by hand for a better texture than the food processor gives.'
    ]
  },
  {
    id: 'baked-kibbeh',
    name: 'Baked Kibbeh',
    nativeName: 'كبة بالصينية',
    short: 'Kibbeh',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Lebanese & Syrian',
    emoji: '🥧',
    description: 'Layers of spiced bulgur-lamb shell sandwiching a filling of minced lamb, onions and toasted pine nuts, scored into diamonds and baked golden.',
    servings: 8,
    time: { prep: 45, cook: 45 },
    heat: 0,
    tags: ['lamb', 'casserole', 'party'],
    ingredients: [
      { group: 'Shell', qty: 1.5, unit: 'cup', item: 'fine bulgur', aisle: 'pantry' },
      { group: 'Shell', qty: 1.5, unit: 'lb', item: 'ground lamb', note: 'lean, divided', aisle: 'meat' },
      { group: 'Shell', qty: 1, item: 'yellow onions', note: 'quartered', aisle: 'produce' },
      { group: 'Shell', qty: 1, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Shell', qty: 1, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Shell', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Filling', qty: 0.33, unit: 'cup', item: 'pine nuts', aisle: 'pantry' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Topping', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'plain Greek yogurt', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Soak the bulgur',
        text: 'Rinse the bulgur, cover with cold water for 15 minutes, then squeeze dry.'
      },
      {
        title: 'Shell',
        text: 'Pulse the quartered onion until fine, then add 1 lb of the lamb, the bulgur, spices and salt and pulse into a smooth, sticky paste.'
      },
      {
        title: 'Filling',
        text: 'Cook the diced onion in the oil for 6 minutes. Add the remaining ½ lb lamb and brown for 6 minutes. Stir in the pine nuts, allspice and salt.'
      },
      {
        title: 'Layer',
        text: 'Heat the oven to 375°F. Press half the shell mixture into a greased 9x13 pan with wet hands. Spread the filling over it, then cover with the remaining shell mixture, smoothing the top.'
      },
      {
        title: 'Score & bake',
        text: 'Score into diamonds, cutting all the way down, and run a knife around the edges. Pour the melted butter over the top and bake for 35 minutes until deep golden.',
        tip: 'Wet your hands often while pressing the layers. It keeps the paste from sticking.'
      },
      {
        title: 'Serve',
        text: 'Serve warm with yogurt and a salad.'
      }
    ],
    notes: [
      'Kibbeh is also delicious cold the next day.'
    ]
  },
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
    id: 'fattoush',
    name: 'Fattoush',
    nativeName: 'فتوش',
    short: 'Fattoush',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Lebanese',
    emoji: '🥗',
    description: 'A crunchy, tangy Levantine bread salad of crisp fried pita, cucumber, tomato, radish and herbs tossed in a bright sumac-lemon dressing.',
    servings: 4,
    time: { prep: 20, cook: 10 },
    heat: 0,
    tags: ['salad', 'vegan', 'summer'],
    ingredients: [
      { group: 'Pita chips', qty: 2, item: 'pita breads', note: 'torn into bite-size pieces', aisle: 'bakery' },
      { group: 'Pita chips', qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Salad', qty: 1, unit: 'head', item: 'romaine lettuce', note: 'chopped', aisle: 'produce' },
      { group: 'Salad', qty: 1, item: 'cucumber', note: 'chopped', shop: 'cucumbers', aisle: 'produce' },
      { group: 'Salad', qty: 3, item: 'Roma tomatoes', note: 'chopped', aisle: 'produce' },
      { group: 'Salad', qty: 0.5, unit: 'bunch', item: 'radishes', note: 'sliced', aisle: 'produce' },
      { group: 'Salad', qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'Salad', qty: 0.5, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'Salad', qty: 0.25, unit: 'cup', item: 'fresh mint', note: 'chopped', aisle: 'produce' },
      { group: 'Dressing', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Dressing', qty: 1, unit: 'tbsp', item: 'pomegranate molasses', aisle: 'international' },
      { group: 'Dressing', qty: 2, unit: 'tsp', item: 'ground sumac', aisle: 'spices' },
      { group: 'Dressing', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Dressing', qty: 0.33, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Dressing', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Crisp the pita',
        text: 'Fry the pita pieces in the oil over medium heat for 5 minutes, tossing, until golden and crisp. Sprinkle with a little sumac and salt.'
      },
      {
        title: 'Dressing',
        text: 'Whisk the lemon juice, pomegranate molasses, sumac, garlic, oil and salt.'
      },
      {
        title: 'Toss',
        text: 'Toss the vegetables and herbs with the dressing.'
      },
      {
        title: 'Serve',
        text: 'Fold in the pita chips just before serving so they stay crunchy.'
      }
    ],
    notes: [
      'Baked pita chips work too: 10 minutes at 400°F.'
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
    id: 'musakhan',
    name: 'Musakhan',
    nativeName: 'مسخن',
    short: 'Musakhan',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Palestinian',
    emoji: '🍗',
    description: 'Palestine\'s national dish: sumac-roasted chicken over flatbread soaked with olive oil and heaps of sweet, sumac-stained caramelized onions and toasted pine nuts.',
    servings: 4,
    time: { prep: 20, cook: 70 },
    heat: 0,
    tags: ['chicken', 'roast', 'sharing'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'or a cut-up chicken', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'ground sumac', note: 'divided', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'olive oil', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 4, item: 'large red onions', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'pine nuts', aisle: 'pantry' },
      { qty: 4, item: 'taboon bread or large pitas', shop: 'pita breads', aisle: 'bakery' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Season & roast',
        text: 'Heat the oven to 400°F. Rub the chicken with 1 tbsp sumac, the allspice, cinnamon, 1 tsp salt and 2 tbsp oil. Roast for 40 minutes until golden and cooked through.'
      },
      {
        title: 'Onions',
        text: 'Meanwhile, cook the onions slowly in ¼ cup oil with the remaining salt for 30 minutes until very soft and sweet. Stir in the remaining 2 tbsp sumac.',
        tip: 'Be generous and patient with the onions. They\'re the heart of the dish.'
      },
      {
        title: 'Pine nuts',
        text: 'Toast the pine nuts in a dry pan for 3 minutes until golden.'
      },
      {
        title: 'Assemble',
        text: 'Brush the breads with the remaining oil and the chicken pan juices. Pile the onions on top and set a piece of chicken on each.'
      },
      {
        title: 'Bake & serve',
        text: 'Bake for 8 minutes until the bread edges crisp. Scatter with pine nuts and parsley, and serve with yogurt.'
      }
    ],
    notes: [
      'Rolled-up musakhan in thin bread makes great party wraps.'
    ]
  },
  {
    id: 'shish-tawook',
    name: 'Shish Tawook',
    nativeName: 'شيش طاووق',
    short: 'Shish tawook',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Lebanese',
    emoji: '🍢',
    description: 'Juicy Lebanese chicken skewers marinated in yogurt, lemon, garlic and paprika, grilled until charred and served with toum (garlic sauce) and pickles.',
    servings: 4,
    time: { prep: 20, cook: 15, inactive: 240, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['chicken', 'grilled', 'summer'],
    ingredients: [
      { group: 'Chicken', qty: 2, unit: 'lb', item: 'boneless skinless chicken breasts', note: 'or thighs, in 1½-inch cubes', aisle: 'meat' },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'plain whole-milk yogurt', aisle: 'dairy' },
      { group: 'Chicken', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Chicken', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Chicken', qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Chicken', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Quick toum', qty: 0.5, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Quick toum', qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Quick toum', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'To serve', qty: 4, item: 'pita breads', aisle: 'bakery' },
      { group: 'To serve', item: 'pickled turnips', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Whisk the yogurt, lemon juice, garlic, tomato paste, oil, spices and salt. Toss with the chicken and marinate for at least 4 hours.'
      },
      {
        title: 'Toum',
        text: 'Stir the mayo with the garlic and lemon juice. (Real toum is an emulsion of garlic, oil and lemon. This is the quick version.)'
      },
      {
        title: 'Skewer',
        text: 'Thread the chicken onto skewers.'
      },
      {
        title: 'Grill',
        text: 'Grill over medium-high heat for 10 minutes, turning, until charred and cooked through.'
      },
      {
        title: 'Serve',
        text: 'Serve in warm pita with toum, pickles and fries or salad.'
      }
    ],
    notes: [
      'The tomato paste gives the classic red color and depth.'
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
  {
    id: 'tabbouleh',
    name: 'Tabbouleh',
    nativeName: 'تبولة',
    short: 'Tabbouleh',
    continent: 'Middle East',
    region: 'Levantine',
    cuisine: 'Lebanese',
    emoji: '🌿',
    description: 'The real Lebanese tabbouleh: a vibrant herb salad of finely chopped parsley and mint with a little bulgur, tomato, scallion, lemon and olive oil.',
    servings: 6,
    time: { prep: 30, cook: 0, inactive: 20, inactiveLabel: 'soak bulgur' },
    heat: 0,
    tags: ['salad', 'vegan', 'no-cook', 'summer'],
    ingredients: [
      { qty: 0.25, unit: 'cup', item: 'fine bulgur', aisle: 'pantry' },
      { qty: 3, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { qty: 4, unit: 'cup', item: 'flat-leaf parsley', note: 'very finely chopped (about 3 bunches)', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'fresh mint', note: 'finely chopped', aisle: 'produce' },
      { qty: 3, item: 'Roma tomatoes', note: 'finely diced', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'olive oil', note: 'extra-virgin', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 1, unit: 'head', item: 'romaine lettuce', note: 'leaves, for scooping', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soak the bulgur',
        text: 'Toss the bulgur with half the lemon juice and let it soften for 20 minutes.'
      },
      {
        title: 'Chop the herbs',
        text: 'Wash and thoroughly dry the parsley and mint, then chop very finely with a sharp knife.',
        tip: 'Dry herbs are crucial. Wet ones turn the salad soggy. A food processor bruises them, so chop by hand.'
      },
      {
        title: 'Combine',
        text: 'Toss the herbs with the tomatoes, scallions and bulgur.'
      },
      {
        title: 'Dress & serve',
        text: 'Dress with the remaining lemon juice, the olive oil, salt and allspice. Serve right away with lettuce leaves for scooping.'
      }
    ],
    notes: [
      'It should be green and herby, not grainy. Parsley is the star.'
    ]
  },
  // ─────────────────────────────── Persian ────────────────────────────────
  {
    id: 'ash-reshteh',
    name: 'Ash Reshteh',
    nativeName: 'آش رشته',
    short: 'Ash reshteh',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🥣',
    description: 'A thick Persian noodle soup of beans, lentils and mountains of herbs, topped with tangy kashk, crispy fried onions, garlic and dried mint oil.',
    servings: 8,
    time: { prep: 30, cook: 90 },
    heat: 0,
    tags: ['soup', 'vegetarian', 'herbs', 'winter'],
    ingredients: [
      { group: 'Soup', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Soup', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Soup', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Soup', qty: 10, unit: 'cup', item: 'vegetable stock', aisle: 'pantry' },
      { group: 'Soup', qty: 0.5, unit: 'cup', item: 'brown or green lentils', aisle: 'pantry' },
      { group: 'Soup', qty: 1, unit: 'can', item: 'chickpeas', note: '15 oz, drained', aisle: 'pantry' },
      { group: 'Soup', qty: 1, unit: 'can', item: 'red kidney beans', note: '15 oz, drained', aisle: 'pantry' },
      { group: 'Soup', qty: 2, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 2, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 1, unit: 'cup', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 6, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 4, unit: 'oz', item: 'fresh spinach', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 6, unit: 'oz', item: 'reshteh noodles', note: 'or linguine', aisle: 'international' },
      { group: 'Soup', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Toppings', qty: 2, item: 'yellow onions', note: 'thinly sliced, fried crisp', aisle: 'produce' },
      { group: 'Toppings', qty: 4, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { group: 'Toppings', qty: 2, unit: 'tbsp', item: 'dried mint', aisle: 'spices' },
      { group: 'Toppings', qty: 0.33, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Toppings', qty: 0.5, unit: 'cup', item: 'kashk', note: 'or sour cream thinned with water', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Base',
        text: 'Heat the oil in a large pot and cook the onion for 8 minutes with the turmeric. Add the stock and lentils and simmer for 25 minutes.'
      },
      {
        title: 'Beans & herbs',
        text: 'Add the chickpeas, kidney beans, all the herbs, scallions and spinach. Simmer for 30 minutes.'
      },
      {
        title: 'Noodles',
        text: 'Break in the noodles and cook for 10 minutes until tender and the soup is thick. Season with salt.'
      },
      {
        title: 'Toppings',
        text: 'Fry the sliced onions in the oil for 15 minutes until crisp. Remove, then fry the garlic for 1 minute. Take off the heat and stir the dried mint into the oil.',
        tip: 'Mint burns fast. Add it off the heat.'
      },
      {
        title: 'Serve',
        text: 'Ladle into bowls and top with swirls of kashk, crispy onions, garlic and mint oil.'
      }
    ],
    notes: [
      'Kashk (fermented whey) is tangy and salty. Find it at Persian grocers.'
    ]
  },
  {
    id: 'fesenjan',
    name: 'Fesenjan',
    nativeName: 'خورش فسنجان',
    short: 'Fesenjan',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🍗',
    description: 'A luxurious Persian stew of chicken simmered in a dark, glossy sauce of ground toasted walnuts and tangy-sweet pomegranate molasses.',
    servings: 6,
    time: { prep: 15, cook: 120 },
    heat: 0,
    tags: ['chicken', 'stew', 'celebration'],
    ingredients: [
      { qty: 2, unit: 'cup', item: 'walnuts', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'pomegranate molasses', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'granulated sugar', note: 'to taste', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'pomegranate seeds', note: 'to garnish', aisle: 'produce', optional: true },
      { qty: 2, unit: 'cup', item: 'basmati rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Toast & grind the walnuts',
        text: 'Toast the walnuts in a dry pan for 5 minutes, then grind to a fine, almost buttery meal.'
      },
      {
        title: 'Brown',
        text: 'Heat the oil and cook the onion for 8 minutes. Add the chicken, turmeric, cinnamon and salt and brown for 6 minutes.'
      },
      {
        title: 'Walnut sauce',
        text: 'Add the ground walnuts and stock. Simmer, partly covered, for 45 minutes, stirring often, until the walnuts release their oil and the sauce darkens.',
        tip: 'The longer it cooks, the darker and richer it gets. Stir often so it doesn\'t catch.'
      },
      {
        title: 'Pomegranate',
        text: 'Stir in the pomegranate molasses and simmer for 45 minutes more until thick and almost black. Taste and balance sweet and sour with sugar.'
      },
      {
        title: 'Serve',
        text: 'Scatter with pomegranate seeds and serve over basmati rice.'
      }
    ],
    notes: [
      'Traditionally made with duck. Use 2 duck legs for a special occasion.'
    ]
  },
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
    id: 'kuku-sabzi',
    name: 'Kuku Sabzi',
    nativeName: 'کوکو سبزی',
    short: 'Kuku sabzi',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🌿',
    description: 'A Persian herb frittata bursting with parsley, cilantro, dill and scallions, studded with walnuts and barberries. More herbs than egg, and that\'s the point.',
    servings: 6,
    time: { prep: 25, cook: 30 },
    heat: 0,
    tags: ['vegetarian', 'eggs', 'herbs', 'brunch'],
    ingredients: [
      { qty: 2, unit: 'cup', item: 'flat-leaf parsley', note: 'finely chopped', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'cilantro', note: 'finely chopped', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'fresh dill', note: 'finely chopped', aisle: 'produce' },
      { qty: 6, item: 'scallions', note: 'finely chopped', aisle: 'produce' },
      { qty: 6, item: 'eggs', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.33, unit: 'cup', item: 'walnuts', note: 'chopped', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'dried barberries', note: 'or dried cranberries', aisle: 'international' },
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Herbs',
        text: 'Make sure the herbs are washed and very dry, then chop finely.',
        tip: 'Dry herbs = a kuku that holds together.'
      },
      {
        title: 'Mix',
        text: 'Beat the eggs with the baking powder, turmeric, salt and pepper. Stir in the herbs, scallions, walnuts and barberries.'
      },
      {
        title: 'Cook',
        text: 'Heat the oil in a 10-inch nonstick skillet over medium-low heat. Pour in the mixture, cover, and cook for 15 minutes until the bottom is browned and the top mostly set.'
      },
      {
        title: 'Finish',
        text: 'Flip onto a plate and slide back into the pan, or finish in a 375°F oven for 10 minutes.'
      },
      {
        title: 'Serve',
        text: 'Cut into wedges and serve warm or at room temperature with yogurt and flatbread.'
      }
    ],
    notes: [
      'Traditionally served for Nowruz, the Persian New Year.'
    ]
  },
  {
    id: 'chelow-tahdig',
    name: 'Persian Rice with Tahdig',
    nativeName: 'Chelow ba Tahdig',
    short: 'Tahdig',
    continent: 'Middle East',
    region: 'Persian',
    emoji: '🍚',
    description: 'Fluffy, saffron-crowned steamed basmati with the prized golden, crunchy crust (tahdig) from the bottom of the pot. Flipped out like a cake.',
    servings: 6,
    time: { prep: 15, cook: 75, inactive: 60, inactiveLabel: 'soak rice' },
    heat: 0,
    tags: ['rice', 'vegetarian', 'side', 'celebration'],
    ingredients: [
      { qty: 2.5, unit: 'cup', item: 'basmati rice', note: 'aged, long-grain', aisle: 'pantry' },
      { qty: 3, unit: 'tbsp', item: 'kosher salt', note: 'for soaking and boiling', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { qty: 3, unit: 'tbsp', item: 'hot water', aisle: 'none' },
      { qty: 3, unit: 'tbsp', item: 'plain Greek yogurt', aisle: 'dairy' },
      { qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'melted, divided', aisle: 'dairy' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Rinse the rice until the water runs clear, then soak in salted water for 1 hour.'
      },
      {
        title: 'Bloom the saffron',
        text: 'Grind the saffron with a pinch of sugar and steep in the hot water for 10 minutes.'
      },
      {
        title: 'Par-boil',
        text: 'Boil the drained rice in a large pot of heavily salted water for 6 minutes until the grains are soft outside but still firm inside. Drain and rinse with lukewarm water.'
      },
      {
        title: 'Tahdig layer',
        text: 'Heat the oil and 1 tbsp butter in a nonstick pot. Mix 1 cup of the rice with the yogurt and half the saffron water and press it into the bottom of the pot.'
      },
      {
        title: 'Steam',
        text: 'Mound the remaining rice on top in a pyramid, poke a few holes with a spoon handle, and drizzle with the remaining butter. Wrap the lid in a towel, cover tightly, and cook on medium for 10 minutes, then on low for 50 minutes.',
        tip: 'Listen for a gentle sizzle. That\'s the crust forming. No peeking.'
      },
      {
        title: 'Flip & serve',
        text: 'Drizzle the remaining saffron water over the top. Set the pot in cold water for 1 minute, then flip onto a platter to reveal the golden tahdig.'
      }
    ],
    notes: [
      'Potato tahdig: line the pot with thin potato slices instead of the yogurt rice.'
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
    id: 'cilbir',
    name: 'Çılbır (Turkish Eggs)',
    short: 'Çılbır',
    continent: 'Middle East',
    region: 'Turkish',
    cuisine: 'Ottoman',
    emoji: '🥚',
    description: 'Silky poached eggs on a bed of garlicky whipped yogurt, drizzled with sizzling Aleppo-pepper butter. An elegant, five-minute brunch.',
    servings: 2,
    time: { prep: 10, cook: 10 },
    heat: 1,
    tags: ['eggs', 'breakfast', 'vegetarian', 'quick'],
    ingredients: [
      { qty: 1, unit: 'cup', item: 'plain Greek yogurt', note: 'room temperature', aisle: 'dairy' },
      { qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 4, item: 'eggs', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'distilled white vinegar', aisle: 'pantry' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'Aleppo pepper', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { qty: 1, item: 'baguette', note: 'toasted, to serve', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Garlic yogurt',
        text: 'Stir the yogurt with the garlic and salt and spread it on two plates.'
      },
      {
        title: 'Poach the eggs',
        text: 'Bring a pan of water to a gentle simmer and add the vinegar. Swirl, slip in the eggs one at a time, and poach for 3 minutes until the whites are set and the yolks are runny.'
      },
      {
        title: 'Chili butter',
        text: 'Melt the butter until foaming and lightly browned, then stir in the Aleppo pepper off the heat.'
      },
      {
        title: 'Serve',
        text: 'Lay the eggs on the yogurt, spoon over the chili butter, scatter with dill, and serve with toasted bread.'
      }
    ],
    notes: [
      'Room-temperature yogurt keeps the eggs warm. Don\'t serve it fridge-cold.'
    ]
  },
  {
    id: 'imam-bayildi',
    name: 'Imam Bayıldı',
    short: 'Imam bayıldı',
    continent: 'Middle East',
    region: 'Turkish',
    cuisine: 'Ottoman',
    emoji: '🍆',
    description: '"The imam fainted": whole eggplants braised in olive oil and stuffed with a sweet, silky filling of onions, garlic and tomatoes. Served at room temperature.',
    servings: 4,
    time: { prep: 25, cook: 60 },
    heat: 0,
    tags: ['vegan', 'vegetarian', 'make-ahead'],
    ingredients: [
      { qty: 4, item: 'Japanese or small Italian eggplants', shop: 'eggplant', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'olive oil', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { qty: 4, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'water', aisle: 'none' }
    ],
    steps: [
      {
        title: 'Prep the eggplants',
        text: 'Peel the eggplants in stripes, salt them, and let sit for 15 minutes. Pat dry.'
      },
      {
        title: 'Fry',
        text: 'Fry the eggplants whole in ¼ cup oil over medium heat for 10 minutes, turning, until soft and golden.'
      },
      {
        title: 'Filling',
        text: 'Cook the onions in the remaining oil for 15 minutes until very soft. Add the garlic for 2 minutes, then the tomatoes, sugar and salt for 5 minutes. Stir in the parsley.'
      },
      {
        title: 'Stuff',
        text: 'Heat the oven to 350°F. Slit each eggplant lengthwise, open into a pocket, and pack with the filling. Arrange in a dish.'
      },
      {
        title: 'Braise',
        text: 'Pour over the lemon juice and water and bake for 30 minutes until meltingly tender.',
        tip: 'Serve at room temperature, as they do in Turkey. The flavor is much better than hot.'
      }
    ],
    notes: [
      'Keeps for days in the fridge. Bring to room temperature before serving.'
    ]
  },
  {
    id: 'lahmacun',
    name: 'Lahmacun',
    short: 'Lahmacun',
    continent: 'Middle East',
    region: 'Turkish',
    emoji: '🫓',
    description: 'Turkish "pizza": paper-thin flatbreads spread with spiced lamb, tomato and pepper, baked until crisp-edged, then rolled with parsley, onion and lemon.',
    servings: 4,
    time: { prep: 30, cook: 20, inactive: 60, inactiveLabel: 'rise' },
    heat: 1,
    tags: ['lamb', 'flatbread', 'street food'],
    ingredients: [
      { group: 'Dough', qty: 2.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'instant yeast', aisle: 'pantry' },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Dough', qty: 1, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Topping', qty: 0.75, unit: 'lb', item: 'ground lamb', aisle: 'meat' },
      { group: 'Topping', qty: 1, item: 'Roma tomatoes', note: 'grated', aisle: 'produce' },
      { group: 'Topping', qty: 0.5, item: 'red bell pepper', note: 'finely minced', shop: 'red bell peppers', aisle: 'produce' },
      { group: 'Topping', qty: 0.5, item: 'yellow onion', note: 'grated', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Topping', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Topping', qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Topping', qty: 1, unit: 'tbsp', item: 'Turkish red pepper paste (biber salçası)', aisle: 'international', optional: true },
      { group: 'Topping', qty: 1, unit: 'tsp', item: 'Aleppo pepper', aisle: 'spices' },
      { group: 'Topping', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Topping', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Topping', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped, plus more to serve', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'lemons', note: 'in wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Dough',
        text: 'Mix the flour, yeast, salt, water and oil and knead for 5 minutes. Cover and rise for 1 hour.'
      },
      {
        title: 'Topping',
        text: 'Mix the lamb with the tomato, pepper, onion, garlic, pastes, spices, salt and parsley into a soft, spreadable paste.'
      },
      {
        title: 'Roll thin',
        text: 'Heat the oven as hot as it goes (500°F+) with a sheet pan or stone inside. Divide the dough into 6 and roll each paper-thin into an oval.'
      },
      {
        title: 'Spread & bake',
        text: 'Spread a thin layer of topping right to the edges. Bake for 7 minutes until the edges are crisp and the meat is cooked.',
        tip: 'Thin is the goal. The meat layer should be almost translucent.'
      },
      {
        title: 'Serve',
        text: 'Pile with parsley and onion, squeeze over lemon, and roll up to eat.'
      }
    ],
    notes: [
      'Store-bought pizza dough works if you\'re short on time.'
    ]
  },
  {
    id: 'adana-kofta',
    name: 'Lamb Kofta Kebabs',
    nativeName: 'Adana Kebap',
    short: 'Kofta',
    continent: 'Middle East',
    region: 'Turkish',
    cuisine: 'Adana',
    emoji: '🍢',
    description: 'Spicy minced lamb seasoned with red pepper flakes, paprika and garlic, pressed onto wide skewers and grilled. Served on flatbread with sumac onions.',
    servings: 4,
    time: { prep: 25, cook: 12, inactive: 30, inactiveLabel: 'chill' },
    heat: 2,
    tags: ['lamb', 'grilled', 'summer'],
    ingredients: [
      { group: 'Kofta', qty: 2, unit: 'lb', item: 'ground lamb', note: 'fatty, about 20%', aisle: 'meat' },
      { group: 'Kofta', qty: 1, item: 'red bell peppers', note: 'very finely minced and squeezed dry', aisle: 'produce' },
      { group: 'Kofta', qty: 0.5, item: 'yellow onion', note: 'grated and squeezed dry', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Kofta', qty: 3, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Kofta', qty: 2, unit: 'tsp', item: 'Aleppo pepper', note: 'or 1 tsp red pepper flakes', aisle: 'spices' },
      { group: 'Kofta', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Kofta', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Kofta', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Sumac onions', qty: 1, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'Sumac onions', qty: 1, unit: 'tbsp', item: 'ground sumac', aisle: 'spices' },
      { group: 'Sumac onions', qty: 0.5, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 4, item: 'lavash or pita breads', shop: 'pita breads', aisle: 'bakery' },
      { group: 'To serve', qty: 4, item: 'Roma tomatoes', note: 'for grilling', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'plain Greek yogurt', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Mix',
        text: 'Knead the lamb with the pepper, onion, garlic, spices and salt for 3 minutes until very sticky. Chill for 30 minutes.',
        tip: 'Long kneading makes the meat cling to the skewer and stay juicy.'
      },
      {
        title: 'Skewer',
        text: 'With wet hands, press long, flat sausages of meat onto wide flat skewers (or shape into logs without skewers).'
      },
      {
        title: 'Sumac onions',
        text: 'Toss the onion with the sumac, parsley and a pinch of salt.'
      },
      {
        title: 'Grill',
        text: 'Grill over high heat for 8 minutes, turning once, until charred and just cooked. Grill the tomatoes alongside.'
      },
      {
        title: 'Serve',
        text: 'Lay the kebabs on flatbread with grilled tomatoes, sumac onions and yogurt.'
      }
    ],
    notes: [
      'No grill? Broil on a rack close to the element.'
    ]
  },
  {
    id: 'menemen',
    name: 'Menemen',
    short: 'Menemen',
    continent: 'Middle East',
    region: 'Turkish',
    emoji: '🍳',
    description: 'Turkey\'s favorite breakfast: eggs softly scrambled into a sweet, juicy sauté of tomatoes and green peppers with butter and Aleppo pepper.',
    servings: 2,
    time: { prep: 10, cook: 15 },
    heat: 1,
    tags: ['eggs', 'breakfast', 'vegetarian', 'quick'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'or olive oil', aisle: 'dairy' },
      { qty: 2, item: 'Anaheim or Cubanelle peppers', note: 'sliced', shop: 'Anaheim peppers', aisle: 'produce' },
      { qty: 3, item: 'ripe tomatoes', note: 'grated or finely diced', shop: 'ripe tomatoes', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'Aleppo pepper', aisle: 'spices' },
      { qty: 4, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'oz', item: 'feta', note: 'crumbled, optional', aisle: 'dairy', optional: true },
      { qty: 1, item: 'baguette', note: 'or crusty bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Peppers',
        text: 'Melt the butter in a skillet over medium heat and cook the peppers for 5 minutes until soft.'
      },
      {
        title: 'Tomatoes',
        text: 'Add the tomatoes, salt and Aleppo pepper and cook for 6 minutes until jammy.'
      },
      {
        title: 'Eggs',
        text: 'Lightly beat the eggs, pour them in, and stir gently for 2 minutes until just set and still glossy.',
        tip: 'Stop while the eggs are still soft. They keep cooking from the pan\'s heat.'
      },
      {
        title: 'Serve',
        text: 'Crumble over the feta and serve in the pan with lots of bread for dipping.'
      }
    ],
    notes: [
      'Onions or no onions? A great Turkish debate. Add a diced onion with the peppers if you like.'
    ]
  },
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
