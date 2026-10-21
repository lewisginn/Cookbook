// Caribbean recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ──────────────────────────────── Cuban ─────────────────────────────────
  {
    id: 'frijoles-negros',
    name: 'Cuban Black Beans',
    nativeName: 'Frijoles Negros',
    short: 'Black beans',
    continent: 'Caribbean',
    region: 'Cuban',
    emoji: '🫘',
    description: 'Silky, savory black beans simmered with a garlicky sofrito, cumin, oregano, bay and a splash of vinegar. Spoon over white rice for moros or serve on the side.',
    servings: 8,
    time: { prep: 15, cook: 120, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 0,
    tags: ['beans', 'vegan', 'side', 'budget'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried black beans', aisle: 'pantry' },
      { qty: 8, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the beans overnight (12 hours). Drain.'
      },
      {
        title: 'Simmer',
        text: 'Simmer the beans in the water with the bay leaves for 1.5 hours until tender.'
      },
      {
        title: 'Sofrito',
        text: 'Heat the oil and cook the onion and pepper for 8 minutes. Add the garlic, cumin and oregano for 1 minute.'
      },
      {
        title: 'Combine',
        text: 'Stir the sofrito into the beans with the vinegar, sugar and salt. Mash a cup of beans to thicken and simmer uncovered for 20 minutes.'
      },
      {
        title: 'Serve',
        text: 'Serve over rice with a drizzle of olive oil.'
      }
    ],
    notes: [
      'A splash of dry white wine with the sofrito is a nice addition.'
    ]
  },
  {
    id: 'lechon-asado',
    name: 'Cuban Mojo Roast Pork',
    nativeName: 'Lechón Asado',
    short: 'Lechón asado',
    continent: 'Caribbean',
    region: 'Cuban',
    emoji: '🐖',
    description: 'Pork shoulder soaked overnight in garlicky sour-orange mojo, then slow-roasted until meltingly tender with crackling-crisp edges.',
    servings: 8,
    time: { prep: 20, cook: 300, inactive: 720, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['pork', 'holiday', 'party'],
    ingredients: [
      { qty: 5, unit: 'lb', item: 'bone-in pork shoulder', aisle: 'meat' },
      { qty: 12, item: 'garlic cloves', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 3, item: 'oranges', note: 'juiced', aisle: 'produce' },
      { qty: 3, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Make the mojo',
        text: 'Mash the garlic, salt and peppercorns into a paste. Stir in the cumin, oregano, orange juice, lime juice and oil.'
      },
      {
        title: 'Marinate',
        text: 'Stab the pork all over, rub with the mojo (reserve ½ cup), and marinate with the onions overnight, at least 12 hours.'
      },
      {
        title: 'Roast low',
        text: 'Roast the pork with the marinade and onions at 300°F for 4.5 hours, basting occasionally, until fork-tender.'
      },
      {
        title: 'Crisp',
        text: 'Turn the oven to 450°F and roast for 20 minutes more to crisp the fat.'
      },
      {
        title: 'Serve',
        text: 'Rest for 15 minutes, then shred or slice and drizzle with the reserved mojo and pan onions.'
      }
    ],
    notes: [
      'Leftovers go straight into Cuban sandwiches.'
    ]
  },
  {
    id: 'cuban-picadillo',
    name: 'Cuban Picadillo',
    short: 'Picadillo',
    continent: 'Caribbean',
    region: 'Cuban',
    emoji: '🥘',
    description: 'Savory-sweet ground beef simmered with sofrito, tomato, cumin, briny olives and raisins. A weeknight Cuban classic over white rice.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 0,
    tags: ['beef', 'weeknight', 'budget'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1.5, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'oz', item: 'canned tomato sauce', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 0.33, unit: 'cup', item: 'green olives', note: 'pimento-stuffed, halved', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'golden raisins', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'capers', aisle: 'pantry' },
      { qty: 1.5, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Sofrito',
        text: 'Heat the oil in a large skillet and cook the onion and pepper for 6 minutes. Add the garlic for 1 minute.'
      },
      {
        title: 'Brown the beef',
        text: 'Add the beef, cumin, oregano and salt and cook for 8 minutes, breaking it up, until browned.'
      },
      {
        title: 'Simmer',
        text: 'Stir in the tomato sauce, wine, olives, raisins and capers. Simmer for 15 minutes until thick.'
      },
      {
        title: 'Serve',
        text: 'Serve over white rice with black beans and fried plantains.'
      }
    ],
    notes: [
      'Add diced potatoes fried until crisp for picadillo con papas.'
    ]
  },
  {
    id: 'cuban-sandwich',
    name: 'Cuban Sandwich',
    nativeName: 'Cubano',
    short: 'Cubano',
    continent: 'Caribbean',
    region: 'Cuban',
    cuisine: 'Cuban · Miami',
    emoji: '🥪',
    description: 'Mojo roast pork, ham, Swiss, pickles and mustard on Cuban bread, buttered and pressed until crisp and melty.',
    servings: 4,
    time: { prep: 10, cook: 15 },
    heat: 0,
    tags: ['sandwich', 'pork', 'leftovers'],
    ingredients: [
      { qty: 1, item: 'loaf Cuban bread', note: 'or soft Italian bread', shop: 'Cuban bread', aisle: 'bakery' },
      { qty: 3, unit: 'tbsp', item: 'yellow mustard', aisle: 'pantry' },
      { qty: 12, unit: 'oz', item: 'roast pork', note: 'sliced (ideally leftover lechón asado)', aisle: 'meat' },
      { qty: 8, unit: 'oz', item: 'deli ham', note: 'thinly sliced', aisle: 'meat' },
      { qty: 8, unit: 'slice', item: 'Swiss cheese', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'dill pickle chips', aisle: 'pantry' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', note: 'softened', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Build',
        text: 'Cut the bread into 4 sandwich lengths and split. Spread mustard on both cut sides, then layer the pork, ham, Swiss and pickles.'
      },
      {
        title: 'Butter',
        text: 'Butter the outside of the bread.'
      },
      {
        title: 'Press',
        text: 'Cook in a skillet over medium heat, pressed under a heavy pan, for 4 minutes per side until crisp and the cheese melts.',
        tip: 'A panini press or a foil-wrapped brick works perfectly.'
      },
      {
        title: 'Serve',
        text: 'Slice diagonally and serve hot.'
      }
    ],
    notes: [
      'Add salami for the Tampa-style version.'
    ]
  },
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
  // ────────────────────────────── Dominican ───────────────────────────────
  {
    id: 'dominican-sancocho',
    name: 'Sancocho Dominicano',
    short: 'Sancocho',
    continent: 'Caribbean',
    region: 'Dominican',
    emoji: '🍲',
    description: 'The Dominican Republic\'s ultimate comfort stew: several meats simmered with root vegetables, plantains and corn into a thick, deeply savory broth.',
    servings: 8,
    time: { prep: 30, cook: 120 },
    heat: 0,
    tags: ['stew', 'beef', 'pork', 'chicken', 'party'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'beef chuck roast', note: 'in 1-inch cubes', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'pork ribs', note: 'cut into pieces', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', aisle: 'meat' },
      { qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 1, item: 'sazón packet', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'lb', item: 'yuca', note: 'peeled, in chunks', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'calabaza or butternut squash', note: 'in chunks', aisle: 'produce' },
      { qty: 2, item: 'green plantains', note: 'in chunks', aisle: 'produce' },
      { qty: 2, item: 'ears of corn', note: 'in rounds', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'to serve', aisle: 'pantry' },
      { qty: 2, item: 'avocados', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Season the meats',
        text: 'Rub the meats with lime juice, sazón, oregano and salt.'
      },
      {
        title: 'Brown',
        text: 'Heat the oil in a large pot and brown the beef and pork for 8 minutes. Add the onion, garlic and half the cilantro for 2 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the water, bring to a boil, and simmer for 40 minutes. Add the chicken and simmer for 20 minutes more.'
      },
      {
        title: 'Root vegetables',
        text: 'Add the yuca and squash and simmer for 15 minutes, then the plantains and corn for 20 minutes, until everything is tender and the squash thickens the broth.'
      },
      {
        title: 'Serve',
        text: 'Stir in the remaining cilantro and taste for salt. Serve with white rice and avocado.'
      }
    ],
    notes: [
      'Add hot sauce and a squeeze of lime at the table.'
    ]
  },
  // ─────────────────────────────── Haitian ────────────────────────────────
  {
    id: 'haitian-griot',
    name: 'Griot with Pikliz',
    short: 'Griot',
    continent: 'Caribbean',
    region: 'Haitian',
    emoji: '🍖',
    description: 'Haiti\'s favorite party dish: pork shoulder marinated in citrus and epis, braised until tender, then fried crisp. Served with fiery pikliz slaw.',
    servings: 6,
    time: { prep: 30, cook: 90, inactive: 240, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['pork', 'fried', 'party'],
    ingredients: [
      { group: 'Pikliz', qty: 0.25, unit: 'head', item: 'green cabbage', note: 'finely shredded', aisle: 'produce' },
      { group: 'Pikliz', qty: 1, item: 'carrots', note: 'julienned', aisle: 'produce' },
      { group: 'Pikliz', qty: 0.5, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'Pikliz', qty: 2, item: 'scotch bonnet peppers', note: 'sliced', aisle: 'produce' },
      { group: 'Pikliz', qty: 1, unit: 'cup', item: 'distilled white vinegar', aisle: 'pantry' },
      { group: 'Pikliz', qty: 1, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Pikliz', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Epis & pork', qty: 1, item: 'green bell pepper', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Epis & pork', qty: 6, item: 'scallions', aisle: 'produce' },
      { group: 'Epis & pork', qty: 1, unit: 'cup', item: 'flat-leaf parsley', aisle: 'produce' },
      { group: 'Epis & pork', qty: 8, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Epis & pork', qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Epis & pork', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Epis & pork', qty: 3, unit: 'lb', item: 'boneless pork shoulder', note: 'in 2-inch cubes', aisle: 'meat' },
      { group: 'Epis & pork', qty: 2, item: 'oranges', note: 'juiced', aisle: 'produce' },
      { group: 'Epis & pork', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Epis & pork', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Epis & pork', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Epis & pork', qty: 2, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Pikliz',
        text: 'Pack the cabbage, carrot, onion and scotch bonnets into a jar. Pour over the vinegar, lime juice and salt. Refrigerate for at least a day; it keeps for weeks.'
      },
      {
        title: 'Epis',
        text: 'Blend the bell pepper, scallions, parsley, garlic, thyme leaves and olive oil into a green paste.'
      },
      {
        title: 'Marinate',
        text: 'Toss the pork with ½ cup epis, the citrus juices, salt and pepper. Marinate for at least 4 hours.'
      },
      {
        title: 'Braise',
        text: 'Put the pork and marinade in a pot with water just to cover. Simmer for 1 hour until tender and most of the liquid has evaporated.'
      },
      {
        title: 'Fry',
        text: 'Fry the pork in batches in 350°F oil for 5 minutes until deeply browned and crisp. Drain.'
      },
      {
        title: 'Serve',
        text: 'Serve with pikliz, fried plantains (bannann peze) and rice and beans.'
      }
    ],
    notes: [
      'Freeze leftover epis in ice cube trays. It\'s the base of most Haitian cooking.'
    ]
  },
  {
    id: 'soup-joumou',
    name: 'Soup Joumou',
    short: 'Soup joumou',
    continent: 'Caribbean',
    region: 'Haitian',
    emoji: '🎃',
    description: 'Haiti\'s Independence Day soup: a rich squash broth with beef, vegetables and pasta, once forbidden to enslaved people and now a symbol of freedom.',
    servings: 8,
    time: { prep: 30, cook: 120 },
    heat: 1,
    tags: ['soup', 'beef', 'holiday'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'beef chuck roast', note: 'in 1-inch cubes', aisle: 'meat' },
      { qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'Haitian epis', note: 'see the griot recipe, or blend scallions, parsley, garlic and thyme', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, unit: 'lb', item: 'calabaza or butternut squash', note: 'peeled and cubed', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'cubed', aisle: 'produce' },
      { qty: 0.25, unit: 'head', item: 'green cabbage', note: 'chopped', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'scotch bonnet peppers', note: 'whole', aisle: 'produce' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 4, unit: 'oz', item: 'rigatoni', note: 'or other short pasta', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Season the beef',
        text: 'Rinse the beef with lime juice, then toss with the epis and 1 tsp salt. Marinate for 30 minutes.'
      },
      {
        title: 'Simmer the beef',
        text: 'Simmer the beef in the water for 45 minutes.'
      },
      {
        title: 'Cook the squash',
        text: 'Add the squash and cook for 25 minutes until very soft. Scoop out the squash, blend with some broth until smooth, and return it to the pot.'
      },
      {
        title: 'Vegetables',
        text: 'Add the carrots, potatoes, cabbage, celery, onion, scotch bonnet, thyme and remaining salt. Simmer for 20 minutes.'
      },
      {
        title: 'Pasta',
        text: 'Add the pasta and butter and simmer for 12 minutes until tender. Remove the pepper and serve.'
      }
    ],
    notes: [
      'Traditionally eaten on January 1st, Haitian Independence Day.'
    ]
  },
  // ─────────────────────────────── Jamaican ───────────────────────────────
  {
    id: 'ackee-and-saltfish',
    name: 'Ackee & Saltfish',
    short: 'Ackee & saltfish',
    continent: 'Caribbean',
    region: 'Jamaican',
    emoji: '🍳',
    description: 'Jamaica\'s national dish: buttery, scrambled-egg-like ackee sautéed with flaked salt cod, onion, tomato, peppers and scotch bonnet.',
    servings: 4,
    time: { prep: 15, cook: 30, inactive: 720, inactiveLabel: 'soak saltfish' },
    heat: 1,
    tags: ['seafood', 'breakfast'],
    ingredients: [
      { qty: 8, unit: 'oz', item: 'salt cod', note: 'boneless', aisle: 'seafood' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.5, item: 'scotch bonnet pepper', note: 'minced', shop: 'scotch bonnet peppers', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'sliced', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'chopped', aisle: 'produce' },
      { qty: 2, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { qty: 2, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'can', item: 'ackee', note: '19 oz, drained', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Soak the saltfish',
        text: 'Soak the salt cod in cold water for 12 hours, changing the water a few times.'
      },
      {
        title: 'Boil & flake',
        text: 'Boil the cod in fresh water for 15 minutes, drain, and flake into small pieces, removing any bones or skin.'
      },
      {
        title: 'Sauté',
        text: 'Heat the oil in a skillet over medium heat. Cook the onion, garlic, scotch bonnet and bell pepper for 5 minutes. Add the tomatoes, scallions and thyme for 3 minutes.'
      },
      {
        title: 'Add the fish',
        text: 'Stir in the flaked saltfish and black pepper and cook for 3 minutes.'
      },
      {
        title: 'Fold in the ackee',
        text: 'Gently fold in the ackee and heat for 3 minutes. Don\'t stir hard; ackee is delicate.',
        tip: 'Canned ackee is already cooked. You\'re just warming it through.'
      }
    ],
    notes: [
      'Serve with fried dumplings, boiled green bananas, or fried plantains.'
    ]
  },
  {
    id: 'jamaican-beef-patties',
    name: 'Jamaican Beef Patties',
    short: 'Beef patties',
    continent: 'Caribbean',
    region: 'Jamaican',
    emoji: '🥟',
    description: 'Flaky, golden turmeric-and-curry pastry crescents stuffed with spicy, thyme-scented ground beef. Jamaica\'s favorite grab-and-go lunch.',
    servings: 8,
    time: { prep: 45, cook: 50, inactive: 30, inactiveLabel: 'chill dough' },
    heat: 2,
    tags: ['beef', 'pastry', 'freezer-friendly'],
    ingredients: [
      { group: 'Pastry', qty: 3, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Pastry', qty: 2, unit: 'tsp', item: 'Jamaican curry powder', aisle: 'spices' },
      { group: 'Pastry', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Pastry', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pastry', qty: 1, unit: 'cup', item: 'unsalted butter', note: 'very cold, cubed', aisle: 'dairy' },
      { group: 'Pastry', qty: 0.5, unit: 'cup', item: 'ice water', aisle: 'none' },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Filling', qty: 3, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { group: 'Filling', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Filling', qty: 0.5, item: 'scotch bonnet pepper', note: 'minced', shop: 'scotch bonnet peppers', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'Jamaican curry powder', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.5, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Filling', qty: 0.33, unit: 'cup', item: 'plain dry breadcrumbs', aisle: 'pantry' },
      { group: 'Filling', qty: 1, item: 'eggs', note: 'beaten, for egg wash', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Pastry',
        text: 'Whisk the flour, curry powder, turmeric and salt. Cut in the cold butter until pea-sized, then add ice water until the dough just holds together. Wrap and chill for 30 minutes.'
      },
      {
        title: 'Filling',
        text: 'Heat the oil and cook the onion, scallions, garlic and scotch bonnet for 5 minutes. Add the beef and brown for 8 minutes. Add the spices, salt and stock and simmer for 10 minutes. Stir in the breadcrumbs and cool.'
      },
      {
        title: 'Shape',
        text: 'Heat the oven to 400°F. Roll the dough ⅛ inch thick and cut 6-inch circles. Spoon 3 tbsp filling onto one half, fold over, and crimp with a fork.'
      },
      {
        title: 'Bake',
        text: 'Brush with egg wash and bake for 25 minutes until golden and flaky.'
      }
    ],
    notes: [
      'Freeze unbaked patties and bake from frozen at 375°F for about 35 minutes.'
    ]
  },
  {
    id: 'curry-goat',
    name: 'Jamaican Curry Goat',
    short: 'Curry goat',
    continent: 'Caribbean',
    region: 'Jamaican',
    emoji: '🍛',
    description: 'Bone-in goat marinated in Jamaican curry powder, scallion, thyme and scotch bonnet, then slow-simmered with potatoes until tender and richly golden.',
    servings: 6,
    time: { prep: 20, cook: 150, inactive: 240, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['goat', 'curry', 'sunday supper'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in goat', note: 'in 2-inch pieces (or lamb shoulder)', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'Jamaican curry powder', note: 'divided', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { qty: 6, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 1, item: 'scotch bonnet peppers', note: 'whole', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 4, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in chunks', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Rub the goat with 2 tbsp curry powder, the allspice, salt, pepper, onion, garlic, ginger, scallions and thyme. Marinate for at least 4 hours or overnight.'
      },
      {
        title: 'Burn the curry',
        text: 'Heat the oil in a Dutch oven over medium heat and fry the remaining 1 tbsp curry powder for 1 minute until dark and fragrant.',
        tip: '"Burning" (toasting) the curry in oil is what gives Jamaican curry its deep flavor.'
      },
      {
        title: 'Brown',
        text: 'Add the goat and all its marinade and cook for 10 minutes, turning, until the meat is coated and browned.'
      },
      {
        title: 'Simmer',
        text: 'Add the water and whole scotch bonnet, cover, and simmer on low for 1.5 hours.'
      },
      {
        title: 'Potatoes',
        text: 'Add the potatoes and simmer uncovered for 30 minutes until the goat is tender and the potatoes thicken the sauce.'
      },
      {
        title: 'Serve',
        text: 'Remove the pepper and serve with rice.'
      }
    ],
    notes: [
      'Ask a halal or Caribbean butcher for goat cut for curry.'
    ]
  },
  {
    id: 'jamaican-oxtail',
    name: 'Jamaican Oxtail Stew',
    short: 'Oxtail',
    continent: 'Caribbean',
    region: 'Jamaican',
    emoji: '🍖',
    description: 'Oxtails browned dark, then braised for hours with allspice, thyme, scotch bonnet and butter beans into a sticky, rich, fall-off-the-bone gravy.',
    servings: 6,
    time: { prep: 20, cook: 210, inactive: 120, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['beef', 'braise', 'sunday supper'],
    ingredients: [
      { qty: 4, unit: 'lb', item: 'oxtails', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'browning sauce', note: 'e.g. Grace or Kitchen Bouquet', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 4, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 6, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 1, item: 'scotch bonnet peppers', note: 'whole', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'can', item: 'butter beans', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'or rice and peas', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the oxtails with the soy sauce, browning, allspice, salt, pepper, half the onion, garlic, ginger and scallions. Marinate for 2 hours or overnight.'
      },
      {
        title: 'Brown',
        text: 'Scrape off the aromatics (save them). Heat the oil and sugar in a Dutch oven until the sugar darkens, then brown the oxtails in batches for 8 minutes per batch until deeply colored.',
        tip: 'Browning in caramelized sugar is the Jamaican trick for that deep, dark gravy.'
      },
      {
        title: 'Braise',
        text: 'Return all the oxtails and saved aromatics with the remaining onion and garlic. Add the stock, thyme and whole scotch bonnet. Cover and simmer on low for 2.5 hours.'
      },
      {
        title: 'Finish',
        text: 'Add the carrots and butter beans and simmer uncovered for 30 minutes until the meat falls off the bone and the gravy is thick.'
      },
      {
        title: 'Serve',
        text: 'Remove the pepper and thyme stems and serve over rice with plenty of gravy.'
      }
    ],
    notes: [
      'Pressure cooker: 45 minutes at high pressure after browning.'
    ]
  },
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
  },
  {
    id: 'mofongo',
    name: 'Mofongo',
    short: 'Mofongo',
    continent: 'Caribbean',
    region: 'Puerto Rican',
    emoji: '🍌',
    description: 'Fried green plantains mashed in a pilón with garlic, olive oil and crispy chicharrón, shaped into domes and served with a savory garlic broth.',
    servings: 4,
    time: { prep: 20, cook: 25 },
    heat: 0,
    tags: ['plantains', 'pork', 'side'],
    ingredients: [
      { qty: 4, item: 'green plantains', aisle: 'produce' },
      { qty: 3, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'cup', item: 'chicharrones', note: 'crumbled pork rinds, or crisp bacon', aisle: 'meat' },
      { qty: 1, unit: 'cup', item: 'chicken stock', note: 'hot', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Prep the plantains',
        text: 'Peel the plantains (score the skin lengthwise to help) and cut into 1-inch pieces.'
      },
      {
        title: 'Fry',
        text: 'Heat the oil to 350°F and fry the plantains for 8 minutes until golden and tender inside, but not crisp. Drain.'
      },
      {
        title: 'Garlic oil',
        text: 'Mash the garlic and salt in a pilón or mortar, then stir in the olive oil.'
      },
      {
        title: 'Mash',
        text: 'Working in batches while hot, mash the plantains with the garlic oil, chicharrones and a splash of hot stock until chunky and moist.',
        tip: 'Mash while the plantains are hot. They harden as they cool.'
      },
      {
        title: 'Shape & serve',
        text: 'Press into a small bowl to form domes and unmold onto plates. Spoon a little hot stock around each and serve with shrimp in garlic sauce, pernil, or steak.'
      }
    ],
    notes: [
      'No pilón? Use a potato masher in a sturdy bowl.'
    ]
  },
  {
    id: 'pastelon',
    name: 'Pastelón',
    short: 'Pastelón',
    continent: 'Caribbean',
    region: 'Puerto Rican',
    emoji: '🥧',
    description: 'Puerto Rican "lasagna": layers of sweet fried ripe plantains, savory sofrito-spiced picadillo and melted cheese, bound with egg and baked.',
    servings: 8,
    time: { prep: 30, cook: 60 },
    heat: 0,
    tags: ['beef', 'plantains', 'casserole'],
    ingredients: [
      { qty: 5, item: 'very ripe plantains', note: 'mostly black', shop: 'ripe plantains', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 0.5, unit: 'cup', item: 'sofrito', note: 'homemade or store-bought', aisle: 'international' },
      { qty: 1, item: 'sazón packet', aisle: 'international' },
      { qty: 8, unit: 'oz', item: 'canned tomato sauce', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'green olives', note: 'pimento-stuffed, sliced', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'oz', item: 'mozzarella', note: 'shredded', aisle: 'dairy' },
      { qty: 4, item: 'eggs', note: 'beaten', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Fry the plantains',
        text: 'Peel the plantains and slice lengthwise into ¼-inch planks. Fry in the oil for 2 minutes per side until golden. Drain.'
      },
      {
        title: 'Picadillo',
        text: 'Brown the beef with the sofrito for 8 minutes. Add the sazón, tomato sauce, olives, oregano and salt and simmer for 10 minutes until thick.'
      },
      {
        title: 'Layer',
        text: 'Heat the oven to 350°F. In a greased 9x13 dish, pour in half the eggs, then layer plantains, picadillo and cheese. Repeat, finishing with plantains, the remaining eggs and cheese.'
      },
      {
        title: 'Bake',
        text: 'Bake for 30 minutes until set and golden. Rest for 10 minutes before cutting.'
      }
    ],
    notes: [
      'The riper the plantains, the sweeter the pastelón.'
    ]
  },
  {
    id: 'pernil',
    name: 'Pernil',
    short: 'Pernil',
    continent: 'Caribbean',
    region: 'Puerto Rican',
    emoji: '🍖',
    description: 'Puerto Rico\'s holiday centerpiece: a pork shoulder rubbed with garlic, oregano and adobo, slow-roasted until tender with a shatteringly crisp cuerito skin.',
    servings: 10,
    time: { prep: 20, cook: 360, inactive: 720, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['pork', 'holiday', 'party'],
    ingredients: [
      { qty: 8, unit: 'lb', item: 'bone-in skin-on pork shoulder', note: 'picnic cut', aisle: 'meat' },
      { qty: 15, item: 'garlic cloves', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'adobo seasoning', aisle: 'spices' },
      { qty: 1, item: 'sazón packet', aisle: 'international' },
      { qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'distilled white vinegar', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Make the paste',
        text: 'Mash the garlic, salt, oregano, pepper, adobo and sazón into a paste (a mortar and pestle is traditional), then stir in the oil and vinegar.'
      },
      {
        title: 'Season',
        text: 'Lift the skin in one flap, leaving it attached on one side. Cut deep slits in the meat and rub the paste everywhere, under the skin and into the slits. Lay the skin back over.'
      },
      {
        title: 'Marinate',
        text: 'Cover and refrigerate for at least 12 hours.'
      },
      {
        title: 'Slow roast',
        text: 'Roast skin side up, covered with foil, at 325°F for 5 hours.'
      },
      {
        title: 'Crisp the cuerito',
        text: 'Uncover, raise the oven to 425°F, and roast for 45 minutes more until the skin is blistered and crackling.',
        tip: 'Watch closely at the end. The skin can go from golden to burnt quickly.'
      },
      {
        title: 'Serve',
        text: 'Rest for 20 minutes, break up the crackling, and pull the meat. Serve with arroz con gandules.'
      }
    ],
    notes: [
      'Pernil is the classic Christmas Eve (Nochebuena) dish.'
    ]
  },
  // ───────────────────────────── Trinidadian ──────────────────────────────
  {
    id: 'trini-pelau',
    name: 'Pelau',
    short: 'Pelau',
    continent: 'Caribbean',
    region: 'Trinidadian',
    emoji: '🍚',
    description: 'Trinidad\'s one-pot beach-lime favorite: chicken caramelized in sugar, then cooked with rice, pigeon peas, coconut milk and pumpkin.',
    servings: 6,
    time: { prep: 20, cook: 55, inactive: 60, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['chicken', 'rice', 'one-pot'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed, chopped into pieces', aisle: 'meat' },
      { qty: 4, item: 'scallions', note: 'chopped', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'parboiled rice', note: 'rinsed', shop: 'long-grain parboiled rice', aisle: 'pantry' },
      { qty: 1, unit: 'can', item: 'pigeon peas (gandules)', note: '15 oz, drained', aisle: 'international' },
      { qty: 13.5, unit: 'oz', item: 'coconut milk', aisle: 'international' },
      { qty: 2, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 0.75, unit: 'lb', item: 'calabaza or butternut squash', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'scotch bonnet peppers', note: 'whole', aisle: 'produce' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Toss the chicken with the scallions, garlic, soy sauce and salt. Marinate for 1 hour.'
      },
      {
        title: 'Caramelize',
        text: 'Heat the oil in a heavy pot over medium-high heat, add the sugar, and let it melt and bubble until dark amber, about 3 minutes.',
        tip: 'Take it right to the edge of burnt, but no further. This gives pelau its color and flavor.'
      },
      {
        title: 'Brown the chicken',
        text: 'Carefully add the chicken (it will spatter) and stir to coat in the caramel. Cook for 8 minutes until deep brown.'
      },
      {
        title: 'Add the rest',
        text: 'Add the onion, rice, pigeon peas, coconut milk, stock, squash, whole scotch bonnet and thyme. Bring to a boil.'
      },
      {
        title: 'Cook',
        text: 'Cover and simmer on low for 30 minutes until the rice is tender and the liquid is absorbed. Remove the pepper and fluff.'
      }
    ],
    notes: [
      'Serve with coleslaw and a squeeze of lime.'
    ]
  },
  {
    id: 'trini-curry-chicken',
    name: 'Trinidad Curry Chicken',
    short: 'Trini curry',
    continent: 'Caribbean',
    region: 'Trinidadian',
    emoji: '🍛',
    description: 'Chicken marinated in green seasoning, then cooked in "burned" curry with potatoes until tender. The Indo-Trinidadian Sunday favorite, served with roti or rice.',
    servings: 6,
    time: { prep: 20, cook: 50, inactive: 60, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['chicken', 'curry'],
    ingredients: [
      { group: 'Green seasoning', qty: 6, item: 'scallions', aisle: 'produce' },
      { group: 'Green seasoning', qty: 0.5, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Green seasoning', qty: 6, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Green seasoning', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Green seasoning', qty: 0.5, item: 'yellow onion', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Green seasoning', qty: 0.25, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Curry', qty: 3, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed', aisle: 'meat' },
      { group: 'Curry', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Curry', qty: 3, unit: 'tbsp', item: 'curry powder', note: 'Trinidad-style if possible', aisle: 'spices' },
      { group: 'Curry', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Curry', qty: 1, item: 'scotch bonnet peppers', note: 'whole', aisle: 'produce' },
      { group: 'Curry', qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in chunks', aisle: 'produce' },
      { group: 'Curry', qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'or roti', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Green seasoning',
        text: 'Blend the scallions, cilantro, thyme leaves, garlic, onion and water into a coarse purée.'
      },
      {
        title: 'Marinate',
        text: 'Toss the chicken with half the green seasoning and the salt. Marinate for at least 1 hour.'
      },
      {
        title: 'Burn the curry',
        text: 'Heat the oil in a Dutch oven over medium heat. Mix the curry powder and cumin with ¼ cup water into a paste and fry for 3 minutes, stirring, until dark and grainy.'
      },
      {
        title: 'Brown the chicken',
        text: 'Add the chicken and stir to coat in the curry. Cook for 5 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the potatoes, whole scotch bonnet and 2 cups water. Cover and simmer for 30 minutes, then uncover for 10 minutes until the sauce thickens.'
      },
      {
        title: 'Serve',
        text: 'Remove the pepper and serve with rice or roti.'
      }
    ],
    notes: [
      'Leftover green seasoning keeps for a week in the fridge.'
    ]
  },
  {
    id: 'trini-doubles',
    name: 'Trinidad Doubles',
    short: 'Doubles',
    continent: 'Caribbean',
    region: 'Trinidadian',
    emoji: '🫓',
    description: 'Trinidad\'s beloved street breakfast: two soft, turmeric-yellow fried flatbreads (bara) sandwiching curried chickpeas (channa), topped with tamarind and pepper sauce.',
    servings: 6,
    time: { prep: 30, cook: 40, inactive: 90, inactiveLabel: 'rise' },
    heat: 2,
    tags: ['vegan', 'street food', 'breakfast'],
    ingredients: [
      { group: 'Bara', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Bara', qty: 1, unit: 'tsp', item: 'instant yeast', aisle: 'pantry' },
      { group: 'Bara', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Bara', qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Bara', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Bara', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Bara', qty: 0.75, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Bara', qty: 3, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'Channa', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Channa', qty: 0.5, item: 'yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Channa', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Channa', qty: 2, unit: 'tbsp', item: 'curry powder', aisle: 'spices' },
      { group: 'Channa', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Channa', qty: 2, unit: 'can', item: 'chickpeas', note: '15 oz each, drained', aisle: 'pantry' },
      { group: 'Channa', qty: 1.5, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Channa', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Toppings', qty: 0.5, unit: 'cup', item: 'tamarind chutney', aisle: 'international' },
      { group: 'Toppings', qty: 2, unit: 'tbsp', item: 'scotch bonnet pepper sauce', aisle: 'international' },
      { group: 'Toppings', qty: 0.5, item: 'cucumber', note: 'thinly sliced', shop: 'cucumbers', aisle: 'produce' },
      { group: 'Toppings', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'or culantro (shado beni)', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Bara dough',
        text: 'Mix the flour, yeast, turmeric, cumin, sugar and salt, then add the warm water to make a soft, sticky dough. Knead for 3 minutes, cover, and rise for 1.5 hours.'
      },
      {
        title: 'Channa',
        text: 'Heat the oil and cook the onion and garlic for 4 minutes. Add the curry powder and cumin for 1 minute, then the chickpeas, water and salt. Simmer for 20 minutes, mashing some chickpeas, until soft and saucy.'
      },
      {
        title: 'Shape the bara',
        text: 'With oiled hands, pinch off golf-ball pieces and pat into thin 4-inch rounds.'
      },
      {
        title: 'Fry',
        text: 'Fry in 350°F oil for 15 seconds per side until puffed and pale golden. Drain.',
        tip: 'Bara should stay soft and pale, not crisp.'
      },
      {
        title: 'Assemble',
        text: 'Lay two bara slightly overlapping, spoon channa on top, and add tamarind chutney, pepper sauce, cucumber and cilantro. Eat with your hands.'
      }
    ],
    notes: [
      'Ask for "slight pepper" if you\'re cautious with heat.'
    ]
  }
);
