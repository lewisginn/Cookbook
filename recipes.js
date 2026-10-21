// Recipe data for the Cookbook app.
// To add a recipe: append an object to the array below (see CLAUDE.md for the full schema).
// Recipes are grouped in the UI by `region`; `cuisine` is shown as a subtitle.
// Times in step text like "10 minutes" or "1.5 hours" automatically become tap-to-start timers.

window.RECIPES = [
  // ───────────────────────────── South Asian ─────────────────────────────
  {
    id: 'chicken-vindaloo',
    name: 'Chicken Vindaloo',
    short: 'Vindaloo',
    region: 'South Asian',
    cuisine: 'Indian · Goan',
    emoji: '🍛',
    description:
      'A fiery, tangy Goan curry. Chicken thighs marinate in a paste of dried Kashmiri chilies, warm spices, garlic and vinegar, then braise until tender in a deep-red sauce.',
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
    id: 'butter-chicken',
    name: 'Butter Chicken',
    nativeName: 'Murgh Makhani',
    short: 'Butter chicken',
    region: 'South Asian',
    cuisine: 'Indian · Punjabi',
    emoji: '🍗',
    description:
      'Delhi\'s silky, gently spiced classic: yogurt-marinated chicken charred under the broiler, then simmered in a buttery tomato and cream sauce perfumed with dried fenugreek.',
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
      { group: 'To serve', qty: 4, item: 'naan', optional: true, aisle: 'bakery' }
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
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    short: 'Tikka masala',
    region: 'South Asian',
    cuisine: 'British-Indian',
    emoji: '🥘',
    description:
      'Smoky grilled chicken tikka folded into a rich, onion-forward tomato and cream masala. Bolder and spicier than butter chicken, with a deeper onion base.',
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
    id: 'chana-masala',
    name: 'Chana Masala',
    short: 'Chana masala',
    region: 'South Asian',
    cuisine: 'Indian · Punjabi',
    emoji: '🫘',
    description:
      'Punjab\'s beloved chickpea curry: tangy, warmly spiced and naturally vegan. Mashing a few chickpeas thickens the gravy, and a finish of garam masala and lemon makes it pop.',
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
      { qty: 1, unit: 'tsp', item: 'amchur', note: 'dried mango powder', optional: true, aisle: 'international' },
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

  // ─────────────────────────── Southeast Asian ───────────────────────────
  {
    id: 'beef-pho',
    name: 'Beef Pho',
    nativeName: 'Phở Bò',
    short: 'Pho',
    region: 'Southeast Asian',
    cuisine: 'Vietnamese',
    emoji: '🍜',
    description:
      'A clear, deeply aromatic beef broth simmered with charred onion, ginger and toasted spices, ladled over rice noodles and paper-thin beef, finished at the table with herbs, lime and chili.',
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
      { group: 'Spice bag', qty: 1, item: 'black cardamom pod', note: 'optional', optional: true, aisle: 'spices' },
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
    id: 'pad-thai',
    name: 'Pad Thai',
    nativeName: 'ผัดไทย',
    short: 'Pad thai',
    region: 'Southeast Asian',
    cuisine: 'Thai',
    emoji: '🍤',
    description:
      'Bangkok street-style stir-fried rice noodles with shrimp, egg and a sweet-sour-salty tamarind sauce, finished with crunchy sprouts, peanuts and lime.',
    servings: 2,
    time: { prep: 25, cook: 10, inactive: 30, inactiveLabel: 'soak noodles' },
    heat: 1,
    tags: ['noodles', 'shrimp', 'stir-fry', 'quick'],
    ingredients: [
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'tamarind concentrate', note: 'seedless', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'fish sauce', aisle: 'international' },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'palm sugar', note: 'or light brown sugar', aisle: 'international' },
      { group: 'Stir-fry', qty: 6, unit: 'oz', item: 'dried rice stick noodles', note: '¼-inch / pad thai width', aisle: 'international' },
      { group: 'Stir-fry', qty: 8, unit: 'oz', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { group: 'Stir-fry', qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'divided', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 1, item: 'shallot', note: 'thinly sliced', shop: 'shallots', aisle: 'produce' },
      { group: 'Stir-fry', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stir-fry', qty: 4, unit: 'oz', item: 'extra-firm tofu', note: 'cut into small cubes', optional: true, aisle: 'produce' },
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
    id: 'banh-mi',
    name: 'Lemongrass Pork Bánh Mì',
    nativeName: 'Bánh Mì Thịt Nướng',
    short: 'Bánh mì',
    region: 'Southeast Asian',
    cuisine: 'Vietnamese',
    emoji: '🥖',
    description:
      'Crackly baguettes stuffed with caramelized lemongrass pork, quick-pickled carrot and daikon, cool cucumber, chilies and a fistful of cilantro.',
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
      { group: 'Sandwiches', qty: 4, unit: 'oz', item: 'pork or chicken liver pâté', optional: true, aisle: 'meat' },
      { group: 'Sandwiches', qty: 1, item: 'cucumber', note: 'cut into long spears', shop: 'cucumbers', aisle: 'produce' },
      { group: 'Sandwiches', qty: 2, item: 'jalapeños', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Sandwiches', qty: 1, unit: 'cup', item: 'cilantro', note: 'sprigs', aisle: 'produce' },
      { group: 'Sandwiches', item: 'Maggi seasoning', note: 'a few dashes', optional: true, aisle: 'international' }
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
  },

  // ───────────────────────────── East Asian ──────────────────────────────
  {
    id: 'beef-bulgogi',
    name: 'Beef Bulgogi',
    nativeName: '불고기',
    short: 'Bulgogi',
    region: 'East Asian',
    cuisine: 'Korean',
    emoji: '🥩',
    description:
      'Thin-sliced ribeye marinated in soy, sesame and grated Asian pear, then seared hard in a ripping-hot pan. Sweet, savory and caramelized — wrap it in lettuce or pile it on rice.',
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
      { group: 'To cook & serve', qty: 1, unit: 'head', item: 'red leaf lettuce', note: 'for wraps', optional: true, aisle: 'produce' },
      { group: 'To cook & serve', item: 'kimchi', optional: true, aisle: 'international' },
      { group: 'To cook & serve', item: 'gochujang or ssamjang', note: 'for the table', optional: true, aisle: 'international' }
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
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    nativeName: '麻婆豆腐',
    short: 'Mapo tofu',
    region: 'East Asian',
    cuisine: 'Chinese · Sichuan',
    emoji: '🥢',
    description:
      'Silky tofu and crisp ground pork in a glossy, fiery sauce of fermented chili bean paste, finished with tingly Sichuan peppercorn. Fast, bold and made for a bowl of rice.',
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
      { qty: 1, unit: 'tbsp', item: 'fermented black beans', note: 'rinsed and chopped', optional: true, aisle: 'international' },
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

  // ──────────────────────────── Middle Eastern ───────────────────────────
  {
    id: 'shakshuka',
    name: 'Shakshuka',
    short: 'Shakshuka',
    region: 'Middle Eastern',
    cuisine: 'North African · Israeli',
    emoji: '🍳',
    description:
      'Eggs gently poached in a smoky, cumin-spiced sauce of tomatoes and sweet peppers, crowned with feta and herbs. One pan, endlessly dunkable.',
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
      { qty: 1, unit: 'tsp', item: 'granulated sugar', note: 'if tomatoes are sharp', optional: true, aisle: 'pantry', staple: true },
      { qty: 6, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped (or cilantro)', aisle: 'produce' },
      { qty: 1, item: 'loaf crusty bread', note: 'or warm pita, for dunking', aisle: 'bakery' }
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

  // ──────────────────────────── Latin American ───────────────────────────
  {
    id: 'birria-tacos',
    name: 'Birria Tacos',
    nativeName: 'Quesabirria',
    short: 'Birria',
    region: 'Latin American',
    cuisine: 'Mexican · Jalisco',
    emoji: '🌮',
    description:
      'Beef braised for hours in a brick-red adobo of toasted chilies and warm spices, tucked into cheesy, griddle-crisped tortillas and dunked in the rich consommé.',
    servings: 6,
    time: { prep: 40, cook: 210 },
    heat: 2,
    tags: ['tacos', 'beef', 'braise', 'weekend project'],
    ingredients: [
      { group: 'Adobo', qty: 6, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Adobo', qty: 4, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Adobo', qty: 3, item: 'dried árbol chilies', note: 'for heat', optional: true, aisle: 'international' },
      { group: 'Adobo', qty: 1, item: 'white onion', note: 'halved', shop: 'white onions', aisle: 'produce' },
      { group: 'Adobo', qty: 2, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Adobo', qty: 8, item: 'garlic cloves', note: 'peeled', aisle: 'produce' },
      { group: 'Adobo', qty: 1, unit: 'tsp', item: 'cumin seeds', aisle: 'spices' },
      { group: 'Adobo', qty: 1, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { group: 'Adobo', qty: 4, item: 'whole cloves', aisle: 'spices' },
      { group: 'Adobo', qty: 1, unit: 'stick', item: 'cinnamon', note: 'Mexican canela if you can find it', aisle: 'spices' },
      { group: 'Adobo', qty: 1, unit: 'tbsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Adobo', qty: 2, unit: 'tbsp', item: 'apple cider vinegar', aisle: 'pantry' },
      { group: 'Braise', qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'cut into 3-inch chunks', aisle: 'meat' },
      { group: 'Braise', qty: 1, unit: 'lb', item: 'bone-in beef short ribs', note: 'or oxtail', aisle: 'meat' },
      { group: 'Braise', qty: 1, unit: 'tbsp', item: 'kosher salt', note: 'plus more to taste', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 3, item: 'bay leaves', aisle: 'spices' },
      { group: 'Braise', qty: 8, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Tacos', qty: 18, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Tacos', qty: 12, unit: 'oz', item: 'Oaxaca cheese', note: 'shredded (or mozzarella)', aisle: 'dairy' },
      { group: 'Tacos', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Tacos', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Tacos', qty: 3, item: 'limes', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Toast & soak the chilies',
        text: 'Toast the guajillo, ancho and árbol chilies in a dry skillet over medium heat for 30 seconds per side until pliable and fragrant. Cover with boiling water and soak for 20 minutes.',
        tip: 'Burnt chilies make the whole pot bitter — pull them the moment they smell toasty.'
      },
      {
        title: 'Sear the beef',
        text: 'Season the chuck and short ribs with the salt. Heat the oil in a large Dutch oven over medium-high heat and brown the meat in batches, about 8 minutes per batch. Set aside.'
      },
      {
        title: 'Char the aromatics',
        text: 'In the same pot, char the onion halves, tomatoes and garlic for 5 minutes, turning, until blistered.'
      },
      {
        title: 'Toast the spices',
        text: 'Toast the cumin, peppercorns, cloves and cinnamon in the dry skillet for 1 minute until fragrant.'
      },
      {
        title: 'Blend the adobo',
        text: 'Drain the chilies. Blend them with the charred vegetables, toasted spices, oregano, vinegar and 2 cups of the water until very smooth.'
      },
      {
        title: 'Braise',
        text: 'Return the beef to the pot. Pour the adobo through a sieve over the meat, pressing on the solids. Add the remaining 6 cups water and the bay leaves. Bring to a boil, then cover and simmer on low for 3 hours until the beef falls apart.'
      },
      {
        title: 'Shred & skim',
        text: 'Lift out the meat, shred it with two forks and discard the bones. Skim the red fat from the top of the consommé into a small bowl and save it. Season the consommé with salt.'
      },
      {
        title: 'Griddle the tacos',
        text: 'Heat a griddle or skillet over medium-high heat. Dip a tortilla in the reserved red fat, lay it on the griddle, top with cheese and beef, and fold. Cook for 2 minutes per side until crisp and the cheese melts.'
      },
      {
        title: 'Serve',
        text: 'Serve the tacos with mugs of hot consommé topped with chopped onion and cilantro, and lime wedges for squeezing and dipping.'
      }
    ],
    notes: [
      'Pressure cooker: after step 6, cook on high pressure for 60 minutes with natural release.',
      'The braised meat and consommé freeze well for up to 3 months.'
    ]
  },

  // ───────────────────────────── Mediterranean ───────────────────────────
  {
    id: 'chicken-souvlaki',
    name: 'Chicken Souvlaki with Tzatziki',
    nativeName: 'Σουβλάκι',
    short: 'Souvlaki',
    region: 'Mediterranean',
    cuisine: 'Greek',
    emoji: '🍢',
    description:
      'Lemon-, garlic- and oregano-marinated chicken skewers grilled until charred, wrapped in warm pita with cool, garlicky tzatziki, tomato and red onion.',
    servings: 4,
    time: { prep: 30, cook: 15, inactive: 60, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['chicken', 'grilled', 'summer', 'wraps'],
    ingredients: [
      { group: 'Chicken', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'cut into 1¼-inch pieces', aisle: 'meat' },
      { group: 'Chicken', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, item: 'lemons', note: 'zested and juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'dried oregano', note: 'preferably Greek', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Chicken', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 8, item: 'wooden skewers', note: 'or metal', optional: true, aisle: 'other' },
      { group: 'Tzatziki', qty: 1, item: 'English cucumber', shop: 'cucumbers', aisle: 'produce' },
      { group: 'Tzatziki', qty: 1.5, unit: 'cup', item: 'plain Greek yogurt', note: 'full-fat', aisle: 'dairy' },
      { group: 'Tzatziki', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Tzatziki', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Tzatziki', qty: 2, unit: 'tbsp', item: 'fresh dill', note: 'chopped (or mint)', aisle: 'produce' },
      { group: 'Tzatziki', qty: 1, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Tzatziki', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 4, item: 'pita breads', note: 'pocketless/Greek-style', aisle: 'bakery' },
      { group: 'To serve', qty: 2, item: 'Roma tomatoes', note: 'sliced', aisle: 'produce' },
      { group: 'To serve', qty: 0.5, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Marinate the chicken',
        text: 'Whisk the oil, lemon zest and juice, garlic, oregano, vinegar, salt and pepper. Toss with the chicken and refrigerate for 1 to 8 hours. If using wooden skewers, soak them in water for 30 minutes.',
        tip: 'Don\'t marinate overnight — the lemon starts to make the chicken mealy.'
      },
      {
        title: 'Make the tzatziki',
        text: 'Coarsely grate the cucumber, then wrap it in a clean towel and squeeze out as much liquid as you can. Stir it into the yogurt with the garlic, lemon juice, dill, oil and salt. Chill until serving.',
        tip: 'Squeezing the cucumber dry is what keeps tzatziki thick, not watery.'
      },
      {
        title: 'Skewer',
        text: 'Thread the chicken onto skewers, packing the pieces snugly together.'
      },
      {
        title: 'Grill',
        text: 'Grill over medium-high heat (or in a grill pan) for 12 minutes, turning every few minutes, until charred and cooked through (175°F inside).'
      },
      {
        title: 'Warm the pitas',
        text: 'Brush the pitas with a little oil and warm them on the grill for 30 seconds per side.'
      },
      {
        title: 'Serve',
        text: 'Slide the chicken off the skewers into the pitas with a big spoonful of tzatziki, tomato and red onion. Add fries inside for the full Athens street-food experience.'
      }
    ],
    notes: [
      'Tzatziki keeps 4 days in the fridge and gets more garlicky as it sits.',
      'Make it a plate: serve with Greek salad, rice pilaf or lemon potatoes.'
    ]
  },

  // ──────────────────────────────── African ──────────────────────────────
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    short: 'Jollof',
    region: 'African',
    cuisine: 'West African · Nigerian',
    emoji: '🍚',
    description:
      'West Africa\'s celebration rice: long-grain rice steamed in a deeply fried tomato and red pepper base with scotch bonnet, thyme and curry powder — smoky, savory and vivid orange.',
    servings: 6,
    time: { prep: 20, cook: 75 },
    heat: 2,
    tags: ['rice', 'one-pot', 'party', 'vegetarian-adaptable'],
    ingredients: [
      { group: 'Pepper base', qty: 3, item: 'Roma tomatoes', note: 'quartered', aisle: 'produce' },
      { group: 'Pepper base', qty: 2, item: 'red bell peppers', note: 'seeded and chopped', aisle: 'produce' },
      { group: 'Pepper base', qty: 1, item: 'yellow onions', note: 'quartered', aisle: 'produce' },
      { group: 'Pepper base', qty: 1, item: 'scotch bonnet pepper', note: 'or habanero; use half for less heat', shop: 'scotch bonnet peppers', aisle: 'produce' },
      { group: 'Rice', qty: 0.33, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Rice', qty: 3, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Rice', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Rice', qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Rice', qty: 1.5, unit: 'tsp', item: 'curry powder', note: 'Nigerian-style if possible', aisle: 'spices' },
      { group: 'Rice', qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { group: 'Rice', qty: 3, item: 'bay leaves', aisle: 'spices' },
      { group: 'Rice', qty: 2, item: 'chicken bouillon cubes', aisle: 'pantry' },
      { group: 'Rice', qty: 3, unit: 'cup', item: 'long-grain parboiled rice', note: 'e.g. Uncle Ben\'s/Golden Sella', aisle: 'pantry' },
      { group: 'Rice', qty: 3, unit: 'cup', item: 'chicken stock', note: 'plus extra as needed', aisle: 'pantry' },
      { group: 'Rice', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 2, unit: 'tbsp', item: 'unsalted butter', optional: true, aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Blend the pepper base',
        text: 'Blend the tomatoes, bell peppers, quartered onion and scotch bonnet until completely smooth.'
      },
      {
        title: 'Reduce the base',
        text: 'Pour the purée into a pot and boil over medium-high heat, uncovered, for 15 minutes, stirring now and then, until reduced by about half and thick.'
      },
      {
        title: 'Rinse the rice',
        text: 'While the base reduces, rinse the rice in several changes of water until it runs mostly clear. Drain well.'
      },
      {
        title: 'Fry the tomato paste',
        text: 'Heat the oil in a large heavy pot over medium heat. Cook the sliced onion for 5 minutes until soft. Add the tomato paste and fry for 5 minutes, stirring constantly, until it darkens from bright to brick red.',
        tip: 'Frying the paste well removes its raw, sour edge — this is the heart of good jollof.'
      },
      {
        title: 'Season the base',
        text: 'Add the garlic, ginger, curry powder, thyme, bay leaves and crumbled bouillon cubes and stir for 1 minute. Add the reduced pepper base and fry for 10 minutes, stirring, until the oil rises to the surface.'
      },
      {
        title: 'Add rice & stock',
        text: 'Stir in the rice, stock and salt until every grain is coated. The liquid should just barely cover the rice. Taste the liquid — it should be well seasoned.'
      },
      {
        title: 'Steam',
        text: 'Bring to a boil, then cover tightly with foil and the lid, turn the heat to its lowest setting, and cook for 30 minutes without stirring or peeking.',
        tip: 'A slightly smoky, caught bottom is prized — it\'s "party jollof" flavor. Just don\'t let it burn black.'
      },
      {
        title: 'Check & finish',
        text: 'Taste a few grains from the top. If still firm, sprinkle with a few tablespoons of stock, re-cover and steam for 10 minutes more. Stir in the butter, fluff gently, and serve.'
      }
    ],
    notes: [
      'Serve with fried plantains, grilled or fried chicken, and a simple coleslaw.',
      'Vegetarian: use vegetable stock and vegetable bouillon.'
    ]
  },

  // ─────────────────────────────── European ──────────────────────────────
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    short: 'Carbonara',
    region: 'European',
    cuisine: 'Italian · Roman',
    emoji: '🍝',
    description:
      'The Roman original: crisp guanciale, Pecorino Romano, eggs and a heap of black pepper emulsified with starchy pasta water into a silky sauce. No cream required.',
    servings: 4,
    time: { prep: 10, cook: 20 },
    heat: 0,
    tags: ['pasta', 'pork', 'quick', 'weeknight'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'spaghetti', note: 'or rigatoni', aisle: 'pantry' },
      { item: 'kosher salt', note: 'for the pasta water', aisle: 'pantry', staple: true },
      { qty: 6, unit: 'oz', item: 'guanciale', note: 'or pancetta', aisle: 'meat' },
      { qty: 6, item: 'eggs', note: '4 yolks + 2 whole eggs', aisle: 'dairy' },
      { qty: 3, unit: 'oz', item: 'Pecorino Romano', note: 'finely grated (about 1½ cups), divided', aisle: 'dairy' },
      { qty: 2, unit: 'tsp', item: 'black pepper', note: 'coarsely ground, plus more to serve', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Boil the water',
        text: 'Bring a large pot of water to a boil and salt it well (it should taste lightly of the sea).'
      },
      {
        title: 'Prep the guanciale & eggs',
        text: 'Cut the guanciale into ½-inch strips. In a bowl, whisk the 4 yolks, 2 whole eggs, most of the Pecorino and the pepper into a thick paste. Save the egg whites for another use.'
      },
      {
        title: 'Render the guanciale',
        text: 'Put the guanciale in a large cold skillet and set it over medium heat. Cook for 8 minutes, stirring occasionally, until the fat renders and the edges are golden and crisp. Turn off the heat.',
        tip: 'Starting in a cold pan renders more fat — that fat is part of the sauce.'
      },
      {
        title: 'Cook the pasta',
        text: 'Cook the spaghetti until just shy of al dente (a minute less than the package says). Scoop out 1 cup of the starchy pasta water, then drain.'
      },
      {
        title: 'Toss in the fat',
        text: 'Add the pasta to the skillet with the guanciale (heat still off) and toss for 1 minute to coat and cool slightly.'
      },
      {
        title: 'Make the sauce',
        text: 'Whisk 2 tablespoons of hot pasta water into the egg mixture to temper it. Pour it over the pasta and toss vigorously, adding splashes of pasta water, until the sauce turns creamy and glossy and clings to every strand.',
        tip: 'If it\'s too runny, toss over the lowest heat for a few seconds at a time — never long enough to scramble.'
      },
      {
        title: 'Serve immediately',
        text: 'Plate right away, topped with the remaining Pecorino and more black pepper.'
      }
    ],
    notes: [
      'Carbonara waits for no one — have everyone seated before you toss the sauce.',
      'Guanciale (cured pork jowl) is worth seeking out at Italian delis; thick-cut pancetta is the best substitute.'
    ]
  }
];
