// Asia recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ─────────────────────────────── Chinese ────────────────────────────────
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
  // ──────────────────────────────── Indian ────────────────────────────────
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
  // ─────────────────────────────── Japanese ───────────────────────────────
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
  // ───────────────────────────────── Thai ─────────────────────────────────
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
      { group: 'Broth', qty: 1, unit: 'oz', item: 'rock sugar', note: 'or 1 tbsp sugar', aisle: 'international' },
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
