// Caribbean recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ──────────────────────────────── Cuban ─────────────────────────────────
  {
    id: 'ropa-vieja',
    name: 'Ropa Vieja',
    short: 'Ropa vieja',
    continent: 'Caribbean',
    region: 'Cuban',
    emoji: '🥩',
    description: 'Cuba\'s national dish: flank steak braised with peppers, onions, tomato, cumin and olives until it pulls into tender "old clothes" shreds. Serve over rice.',
    servings: 6,
    time: { prep: 20, cook: 180 },
    heat: 0,
    tags: ['beef', 'braise', 'make-ahead'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'flank steak', note: 'cut into 3 pieces', aisle: 'meat' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'thinly sliced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 5, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 14, unit: 'oz', item: 'canned crushed tomatoes', note: '1 can', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'green olives', note: 'pimento-stuffed, halved', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'capers', aisle: 'pantry', optional: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brown the beef',
        text: 'Season the beef with the salt and pepper. Brown in the oil in a Dutch oven over medium-high heat for 5 minutes per side, in batches. Set aside.'
      },
      {
        title: 'Soften the vegetables',
        text: 'Cook the onion and peppers in the same pot for 8 minutes until soft. Add the garlic, cumin, oregano and paprika for 1 minute.'
      },
      {
        title: 'Deglaze',
        text: 'Pour in the wine, scrape up the browned bits, and simmer for 2 minutes. Stir in the tomatoes, tomato paste, stock and bay leaves.'
      },
      {
        title: 'Braise',
        text: 'Return the beef, cover, and simmer on low for 2.5 hours until it shreds easily with a fork.'
      },
      {
        title: 'Shred & finish',
        text: 'Shred the beef right in the pot with two forks. Add the olives and capers and simmer uncovered for 15 minutes until the sauce thickens.'
      },
      {
        title: 'Serve',
        text: 'Remove the bay leaves, scatter with parsley, and serve over white rice with black beans and fried sweet plantains.'
      }
    ],
    notes: [
      'Slow cooker: after step 3, cook on low for 8 hours.'
    ]
  },
  // ─────────────────────────────── Jamaican ───────────────────────────────
  {
    id: 'jerk-chicken',
    name: 'Jerk Chicken',
    short: 'Jerk chicken',
    continent: 'Caribbean',
    region: 'Jamaican',
    emoji: '🔥',
    description: 'Chicken soaked in a fiery, aromatic marinade of scotch bonnets, scallions, allspice and thyme, then roasted or grilled until charred and sticky. Bold, smoky and hot.',
    servings: 6,
    time: { prep: 20, cook: 50, inactive: 240, inactiveLabel: 'marinate' },
    heat: 3,
    tags: ['chicken', 'grilled', 'spicy', 'summer'],
    ingredients: [
      { group: 'Jerk marinade', qty: 6, item: 'scallions', note: 'roughly chopped', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 3, item: 'scotch bonnet peppers', note: 'stemmed; seed some for less heat', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 0.5, item: 'yellow onion', note: 'roughly chopped', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 2, unit: 'in', item: 'fresh ginger', note: 'sliced', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 6, unit: 'sprig', item: 'fresh thyme', note: 'leaves only', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 1, unit: 'tbsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Jerk marinade', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Jerk marinade', qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Jerk marinade', qty: 0.25, unit: 'tsp', item: 'ground nutmeg', aisle: 'spices' },
      { group: 'Jerk marinade', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Jerk marinade', qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Jerk marinade', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Jerk marinade', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Jerk marinade', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 4, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'or drumsticks', aisle: 'meat' },
      { group: 'To serve', qty: 1, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'uncooked; or make rice and peas', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Blend the marinade',
        text: 'Blend every marinade ingredient until mostly smooth. It should be thick and pourable.',
        tip: 'Wear gloves when handling scotch bonnets, and don\'t touch your eyes.'
      },
      {
        title: 'Marinate',
        text: 'Cut a few deep slashes in each piece of chicken, down to the bone. Rub the marinade into the cuts and all over, then cover and refrigerate for at least 4 hours, or overnight for the best flavor.'
      },
      {
        title: 'Roast',
        text: 'Heat the oven to 425°F. Arrange the chicken skin side up on a rack set over a foil-lined sheet pan. Roast for 40 minutes, until it reaches 175°F inside and is charred in spots.',
        tip: 'To grill instead: cook over indirect medium heat with the lid closed until cooked through, then finish over direct heat to char.'
      },
      {
        title: 'Char',
        text: 'Broil for 3 minutes for extra-crispy, blackened edges.'
      },
      {
        title: 'Rest & serve',
        text: 'Rest the chicken for 5 minutes. Serve with lime wedges and rice.'
      }
    ],
    notes: [
      'Allspice (pimento) is the key flavor, so don\'t skip it.',
      'The marinade keeps 1 week refrigerated and is also excellent on pork or shrimp.'
    ]
  },
  // ───────────────────────────── Puerto Rican ─────────────────────────────
  {
    id: 'arroz-con-gandules',
    name: 'Arroz con Gandules',
    short: 'Arroz con gandules',
    continent: 'Caribbean',
    region: 'Puerto Rican',
    emoji: '🍚',
    description: 'Puerto Rico\'s holiday rice: medium-grain rice and pigeon peas cooked with homemade sofrito, ham, olives and sazón, crowned with a prized crispy bottom (pegao).',
    servings: 8,
    time: { prep: 15, cook: 50 },
    heat: 0,
    tags: ['rice', 'holiday', 'one-pot'],
    ingredients: [
      { group: 'Sofrito', qty: 0.5, item: 'yellow onion', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Sofrito', qty: 0.5, item: 'green bell pepper', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Sofrito', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Sofrito', qty: 1, unit: 'cup', item: 'cilantro', note: 'plus a few culantro leaves if you can find them', aisle: 'produce' },
      { group: 'Sofrito', qty: 4, item: 'ajíes dulces', note: 'sweet chili peppers', aisle: 'produce', optional: true },
      { group: 'Rice', qty: 2, unit: 'tbsp', item: 'vegetable oil', note: 'or annatto oil', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 4, unit: 'oz', item: 'smoked ham', note: 'diced', aisle: 'meat' },
      { group: 'Rice', qty: 8, unit: 'oz', item: 'canned tomato sauce', aisle: 'pantry' },
      { group: 'Rice', qty: 0.25, unit: 'cup', item: 'green olives', note: 'pimento-stuffed', aisle: 'pantry' },
      { group: 'Rice', qty: 1, unit: 'tbsp', item: 'capers', aisle: 'pantry' },
      { group: 'Rice', qty: 1, item: 'sazón packet', note: 'with culantro & achiote', aisle: 'international' },
      { group: 'Rice', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Rice', qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Rice', qty: 1, unit: 'can', item: 'pigeon peas (gandules)', note: '15 oz, with liquid', aisle: 'international' },
      { group: 'Rice', qty: 3.5, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Rice', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Rice', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Rice', qty: 3, unit: 'cup', item: 'medium-grain white rice', note: 'rinsed', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Blend the sofrito',
        text: 'Blend the onion, pepper, garlic, cilantro and ajíes dulces into a coarse paste. You need about ½ cup; freeze any extra.'
      },
      {
        title: 'Brown the ham',
        text: 'Heat the oil in a caldero or heavy Dutch oven over medium heat and brown the ham for 4 minutes. Add the sofrito and cook for 3 minutes.'
      },
      {
        title: 'Season the base',
        text: 'Stir in the tomato sauce, olives, capers, sazón, oregano and cumin and cook for 2 minutes.'
      },
      {
        title: 'Add the liquid',
        text: 'Add the pigeon peas with their liquid, the stock, salt and bay leaves and bring to a boil. Taste. It should be slightly saltier than you\'d like, because the rice absorbs it.'
      },
      {
        title: 'Add the rice',
        text: 'Stir in the rice and boil uncovered for about 5 minutes, until the liquid drops just below the surface of the rice.'
      },
      {
        title: 'Steam',
        text: 'Stir once, mound the rice toward the center, then cover tightly (foil under the lid) and cook on low for 25 minutes. No peeking.',
        tip: 'The golden crust that forms on the bottom is pegao. Scrape it up and fight over it.'
      },
      {
        title: 'Fluff & serve',
        text: 'Remove the bay leaves, fluff gently, and serve with roast pork (pernil) or on its own.'
      }
    ],
    notes: [
      'Store-bought sofrito (like Goya Recaíto) works in a pinch.'
    ]
  }
);
