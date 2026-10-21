// Europe recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ─────────────────────────── British & Irish ────────────────────────────
  {
    id: 'irish-guinness-stew',
    name: 'Irish Beef & Guinness Stew',
    short: 'Guinness stew',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'Irish',
    emoji: '🍺',
    description: 'Tender beef braised in a dark, malty Guinness gravy with carrots, potatoes and thyme. The pub classic, best eaten with buttered brown bread.',
    servings: 6,
    time: { prep: 25, cook: 180 },
    heat: 0,
    tags: ['beef', 'stew', 'winter', 'make-ahead'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'in 1½-inch cubes', aisle: 'meat' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 15, unit: 'oz', item: 'Guinness or other stout', note: '1 can', aisle: 'other' },
      { qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 4, item: 'carrots', note: 'in thick chunks', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in chunks', aisle: 'produce' },
      { qty: 2, item: 'parsnips', note: 'in chunks', aisle: 'produce', optional: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'crusty bread', note: 'or Irish brown bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Flour & brown the beef',
        text: 'Season the beef with the salt and pepper and toss with the flour. Brown it in batches in the oil in a Dutch oven over medium-high heat, about 8 minutes per batch. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onion for 5 minutes, then add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Guinness',
        text: 'Pour in the Guinness, scrape up every browned bit, and simmer for 3 minutes.'
      },
      {
        title: 'Braise',
        text: 'Add the stock, Worcestershire, sugar, thyme and bay leaves and return the beef. Cover and simmer on low (or in a 325°F oven) for 1.5 hours.'
      },
      {
        title: 'Add the vegetables',
        text: 'Add the carrots, potatoes and parsnips. Cover and cook for 1 hour more until the beef and vegetables are tender.'
      },
      {
        title: 'Serve',
        text: 'Remove the herb stems and bay leaves, season to taste, scatter with parsley, and serve with buttered bread.'
      }
    ],
    notes: [
      'Like all stews, it\'s even better the next day.'
    ]
  },
  {
    id: 'shepherds-pie',
    name: 'Shepherd\'s Pie',
    short: 'Shepherd\'s pie',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'British',
    emoji: '🥧',
    description: 'Savory minced lamb in a rich, herby gravy with carrots and peas, under a fluffy mashed-potato lid baked until the ridges turn golden and crisp.',
    servings: 6,
    time: { prep: 30, cook: 70 },
    heat: 0,
    tags: ['lamb', 'casserole', 'comfort', 'make-ahead'],
    ingredients: [
      { group: 'Mash', qty: 2.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'peeled and quartered', aisle: 'produce' },
      { group: 'Mash', qty: 4, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Mash', qty: 0.5, unit: 'cup', item: 'whole milk', note: 'warm', aisle: 'dairy' },
      { group: 'Mash', qty: 1, item: 'eggs', note: 'yolk only', aisle: 'dairy' },
      { group: 'Mash', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1.5, unit: 'lb', item: 'ground lamb', note: 'use beef for cottage pie', aisle: 'meat' },
      { group: 'Filling', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Filling', qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { group: 'Filling', qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { group: 'Filling', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Filling', qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { group: 'Filling', qty: 1.5, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Filling', qty: 2, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'sprig', item: 'fresh rosemary', aisle: 'produce' },
      { group: 'Filling', qty: 1, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Make the mash',
        text: 'Boil the potatoes in salted water for 20 minutes until tender. Drain, mash with the butter, warm milk and salt, then beat in the egg yolk.'
      },
      {
        title: 'Brown the lamb',
        text: 'Heat the oven to 400°F. Brown the lamb in the oil in a large skillet over medium-high heat for 8 minutes, then spoon off most of the fat.'
      },
      {
        title: 'Vegetables',
        text: 'Add the onion, carrots and celery and cook for 8 minutes until soft. Add the garlic and tomato paste for 1 minute, then the flour for 1 minute more.'
      },
      {
        title: 'Gravy',
        text: 'Stir in the Worcestershire, stock, thyme and rosemary and simmer for 10 minutes until thick. Remove the herb stems, stir in the peas, and season.'
      },
      {
        title: 'Assemble',
        text: 'Spread the filling in a 9x13 baking dish. Spoon the mash over the top, spread it to the edges, and rough it up with a fork.',
        tip: 'The fork ridges turn into crispy golden peaks in the oven.'
      },
      {
        title: 'Bake',
        text: 'Bake for 25 minutes until golden and bubbling at the edges. Rest for 10 minutes before serving.'
      }
    ],
    notes: [
      'Assemble up to a day ahead and refrigerate; add 15 minutes to the baking time.'
    ]
  },
  // ────────────────────── Central & Eastern European ──────────────────────
  {
    id: 'hungarian-goulash',
    name: 'Hungarian Beef Goulash',
    nativeName: 'Gulyás',
    short: 'Goulash',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Hungarian',
    emoji: '🥣',
    description: 'The real Hungarian goulash: a brothy, paprika-red stew of tender beef, slow-cooked onions, peppers, potatoes and caraway. Warming, simple and deeply flavorful.',
    servings: 6,
    time: { prep: 25, cook: 150 },
    heat: 1,
    tags: ['beef', 'stew', 'soup', 'winter'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'lard', note: 'or vegetable oil', aisle: 'meat' },
      { qty: 3, item: 'large yellow onions', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 2.5, unit: 'lb', item: 'beef chuck roast', note: 'cut into 1-inch cubes', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'sweet paprika', note: 'Hungarian, and fresh', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'caraway seeds', note: 'lightly crushed', aisle: 'spices' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 2, item: 'red bell peppers', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 6, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'cut into 1-inch chunks', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'sour cream', note: 'to serve', aisle: 'dairy', optional: true },
      { qty: 1, unit: 'loaf', item: 'crusty bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Cook the onions slowly',
        text: 'Melt the lard in a large Dutch oven over medium heat. Cook the onions for 12 minutes, stirring, until soft and golden.',
        tip: 'Slow-cooked onions melt into the broth and give goulash its body.'
      },
      {
        title: 'Brown the beef',
        text: 'Raise the heat to medium-high, add the beef, and cook for 8 minutes, stirring, until it loses its raw color all over.'
      },
      {
        title: 'Paprika off the heat',
        text: 'Take the pot off the heat. Stir in the paprika, caraway, garlic and tomato paste for 30 seconds until everything is coated and brick red.',
        tip: 'Paprika burns and turns bitter in seconds over direct heat, so always add it off the burner.'
      },
      {
        title: 'Simmer',
        text: 'Return the pot to the heat and add the peppers, tomatoes, stock, bay leaves, salt and pepper. Bring to a boil, then cover and simmer on low for 1.5 hours.'
      },
      {
        title: 'Add potatoes & carrots',
        text: 'Add the potatoes and carrots and simmer uncovered for 30 minutes, until they\'re tender and the beef falls apart easily.'
      },
      {
        title: 'Serve',
        text: 'Taste for salt and remove the bay leaves. Ladle into bowls with a dollop of sour cream and plenty of bread.'
      }
    ],
    notes: [
      'Paprika loses its flavor fast; buy a fresh tin of Hungarian sweet paprika for this.',
      'For a thicker stew (closer to pörkölt), use 3 cups of stock and skip the potatoes.'
    ]
  },
  {
    id: 'ukrainian-borscht',
    name: 'Ukrainian Borscht',
    nativeName: 'Борщ',
    short: 'Borscht',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Ukrainian',
    emoji: '🥣',
    description: 'Deep ruby beet soup with beef, cabbage and potatoes, brightened with vinegar and finished with garlic, dill and a big spoonful of sour cream.',
    servings: 8,
    time: { prep: 30, cook: 120 },
    heat: 0,
    tags: ['soup', 'beef', 'winter', 'make-ahead'],
    ingredients: [
      { group: 'Broth', qty: 1.5, unit: 'lb', item: 'bone-in beef short ribs', note: 'or beef shank', aisle: 'meat' },
      { group: 'Broth', qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Broth', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Broth', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Beet base', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Beet base', qty: 3, item: 'beets', note: 'peeled and coarsely grated', aisle: 'produce' },
      { group: 'Beet base', qty: 2, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Beet base', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Beet base', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Beet base', qty: 2, item: 'carrots', note: 'grated', aisle: 'produce' },
      { group: 'Beet base', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Soup', qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'diced', aisle: 'produce' },
      { group: 'Soup', qty: 0.5, unit: 'head', item: 'green cabbage', note: 'thinly shredded', aisle: 'produce' },
      { group: 'Soup', qty: 4, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Soup', qty: 0.25, unit: 'cup', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { group: 'Soup', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { group: 'To serve', qty: 1, unit: 'loaf', item: 'dark rye bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Make the broth',
        text: 'Put the ribs, water, bay leaves and salt in a large pot. Bring to a boil, skim off the foam for 10 minutes, then simmer partly covered for 1 hour until the meat is tender.'
      },
      {
        title: 'Cook the beet base',
        text: 'Meanwhile, heat the oil in a large skillet over medium heat. Cook the beets with the vinegar and sugar for 10 minutes, then add the onion and carrot for 8 minutes. Stir in the tomato paste for 2 minutes.',
        tip: 'The vinegar keeps the beets a vivid ruby red.'
      },
      {
        title: 'Shred the meat',
        text: 'Lift out the ribs, shred the meat and discard the bones. Keep the broth simmering.'
      },
      {
        title: 'Potatoes & cabbage',
        text: 'Add the potatoes to the broth and cook for 10 minutes. Add the cabbage and cook for 5 minutes more.'
      },
      {
        title: 'Bring it together',
        text: 'Stir in the beet base and the meat and simmer for 10 minutes until the cabbage is tender.'
      },
      {
        title: 'Rest',
        text: 'Off the heat, stir in the garlic and dill and season with pepper. Cover and let it rest for 15 minutes so the color deepens and the flavors meld.'
      },
      {
        title: 'Serve',
        text: 'Ladle into bowls with a big dollop of sour cream and rye bread on the side.'
      }
    ],
    notes: [
      'Borscht is famously better on day two or three.'
    ]
  },
  // ──────────────────────────────── French ────────────────────────────────
  {
    id: 'coq-au-vin',
    name: 'Coq au Vin',
    short: 'Coq au vin',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Burgundy',
    emoji: '🍷',
    description: 'Chicken braised in red wine with bacon, mushrooms and pearl onions until tender, in a glossy, deeply savory sauce. Classic French comfort that tastes better the next day.',
    servings: 6,
    time: { prep: 30, cook: 120 },
    heat: 0,
    tags: ['chicken', 'braise', 'wine', 'dinner party'],
    ingredients: [
      { group: 'Braise', qty: 6, unit: 'oz', item: 'thick-cut bacon', note: 'cut into ½-inch pieces (or lardons)', aisle: 'meat' },
      { group: 'Braise', qty: 3.5, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'or a mix of thighs and drumsticks', aisle: 'meat' },
      { group: 'Braise', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Braise', qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { group: 'Braise', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Braise', qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Braise', qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Braise', qty: 2, unit: 'tbsp', item: 'brandy or cognac', aisle: 'other', optional: true },
      { group: 'Braise', qty: 750, unit: 'ml', item: 'dry red wine', note: '1 bottle, Pinot Noir or Burgundy', aisle: 'other' },
      { group: 'Braise', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Braise', qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Braise', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Garnish', qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Garnish', qty: 8, unit: 'oz', item: 'cremini mushrooms', note: 'quartered', aisle: 'produce' },
      { group: 'Garnish', qty: 10, unit: 'oz', item: 'frozen pearl onions', note: 'thawed', aisle: 'frozen' },
      { group: 'Garnish', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'loaf', item: 'crusty bread', note: 'or mashed potatoes or egg noodles', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Season the chicken',
        text: 'Heat the oven to 325°F. Pat the chicken very dry and season all over with the salt and pepper.'
      },
      {
        title: 'Crisp the bacon',
        text: 'Cook the bacon in a large Dutch oven over medium heat for 8 minutes until crisp. Scoop it out, leaving the fat behind.'
      },
      {
        title: 'Brown the chicken',
        text: 'Raise the heat to medium-high. Brown the chicken skin side down in batches for 6 minutes until deep golden, flip for 3 minutes, and set aside.',
        tip: 'Don\'t crowd the pot — well-browned skin is where much of the flavor comes from.'
      },
      {
        title: 'Build the base',
        text: 'Pour off all but 2 tbsp of fat. Cook the onion and carrots for 5 minutes until softened. Add the garlic and tomato paste for 1 minute, then sprinkle in the flour and stir for 1 minute more.'
      },
      {
        title: 'Deglaze',
        text: 'Off the heat, add the brandy (if using) and scrape up the browned bits. Pour in the wine and stock, add the thyme and bay leaves, and bring to a boil.'
      },
      {
        title: 'Braise',
        text: 'Return the chicken and bacon to the pot, skin side up and above the liquid. Cover and braise in the oven for 1 hour, until the chicken is very tender.'
      },
      {
        title: 'Brown the garnish',
        text: 'Meanwhile, melt the butter in a skillet over medium-high heat. Cook the mushrooms and pearl onions for 10 minutes, stirring now and then, until browned. Season with a pinch of salt.'
      },
      {
        title: 'Reduce the sauce',
        text: 'Lift the chicken onto a plate. Discard the thyme and bay leaves and boil the sauce on the stove for 10 minutes, until it coats the back of a spoon.'
      },
      {
        title: 'Finish & serve',
        text: 'Stir in the mushrooms and onions, return the chicken, and scatter with parsley. Serve with crusty bread, mashed potatoes or buttered egg noodles.'
      }
    ],
    notes: [
      'Cook with a wine you would happily drink; there\'s no need for an expensive bottle.',
      'Make it a day ahead: refrigerate, lift off the fat, and reheat gently.'
    ]
  },
  {
    id: 'french-onion-soup',
    name: 'French Onion Soup',
    nativeName: 'Soupe à l\'Oignon Gratinée',
    short: 'Onion soup',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Parisian',
    emoji: '🧅',
    description: 'Onions slowly caramelized to deep mahogany, simmered in rich beef broth, and topped with a toasted baguette and a bubbling crust of Gruyère.',
    servings: 6,
    time: { prep: 20, cook: 110 },
    heat: 0,
    tags: ['soup', 'cheese', 'winter', 'bistro'],
    ingredients: [
      { qty: 4, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 6, item: 'large yellow onions', note: 'about 3 lb, thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'dry white wine', note: 'or dry sherry', aisle: 'other' },
      { qty: 8, unit: 'cup', item: 'beef stock', note: 'the best you can get', aisle: 'pantry' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'brandy or cognac', aisle: 'other', optional: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, item: 'baguette', note: 'sliced ¾ inch thick', aisle: 'bakery' },
      { qty: 8, unit: 'oz', item: 'Gruyère', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Wilt the onions',
        text: 'Melt the butter in a large Dutch oven over medium heat. Add the onions and salt, cover, and cook for 15 minutes until wilted.'
      },
      {
        title: 'Caramelize slowly',
        text: 'Uncover and cook over medium-low heat for 60 minutes, stirring every few minutes and scraping up the browned bits, until deep mahogany and jammy. Add a splash of water whenever the bottom starts to darken too fast.',
        tip: 'There\'s no shortcut here. The color of the onions is the flavor of the soup.'
      },
      {
        title: 'Deglaze',
        text: 'Add the garlic for 1 minute, then pour in the wine, scrape the pot clean, and simmer for 2 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the stock, thyme and bay leaf and simmer for 20 minutes. Remove the herbs, stir in the brandy, and season with salt and pepper.'
      },
      {
        title: 'Toast the bread',
        text: 'Toast the baguette slices on a sheet pan in a 400°F oven for 8 minutes until dry and crisp.'
      },
      {
        title: 'Gratinée',
        text: 'Set oven-safe bowls on a sheet pan and ladle in the soup. Float the toasts on top, pile on the Gruyère, and broil for 3 minutes until bubbling and browned in spots.'
      }
    ],
    notes: [
      'The caramelized onions freeze well. Make a double batch for next time.'
    ]
  },
  {
    id: 'ratatouille',
    name: 'Ratatouille',
    short: 'Ratatouille',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Provençal',
    emoji: '🍆',
    description: 'A Provençal summer stew of eggplant, zucchini, peppers and tomatoes, each browned separately then gently simmered together with garlic, thyme and lots of olive oil.',
    servings: 6,
    time: { prep: 30, cook: 75 },
    heat: 0,
    tags: ['vegan', 'vegetarian', 'summer', 'make-ahead'],
    ingredients: [
      { qty: 1, item: 'eggplant', note: 'large, in 1-inch dice', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'olive oil', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 2, item: 'zucchini', note: 'in 1-inch dice', aisle: 'produce' },
      { qty: 2, item: 'red bell peppers', note: 'in 1-inch pieces', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 5, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 5, item: 'Roma tomatoes', note: 'chopped (or 28 oz canned whole tomatoes)', aisle: 'produce' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'fresh basil', note: 'torn', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'crusty bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Salt the eggplant',
        text: 'Toss the eggplant with 1 tsp salt in a colander and let it drain for 20 minutes. Pat dry.'
      },
      {
        title: 'Brown the eggplant',
        text: 'Heat 3 tbsp oil in a Dutch oven over medium-high heat and brown the eggplant for 8 minutes. Set aside.'
      },
      {
        title: 'Brown the zucchini',
        text: 'Add 2 tbsp oil and brown the zucchini for 6 minutes. Set aside with the eggplant.',
        tip: 'Cooking each vegetable on its own keeps them from turning into mush.'
      },
      {
        title: 'Peppers & onion',
        text: 'Add 2 tbsp oil, the peppers and onion, and cook for 8 minutes until soft. Add the garlic for 1 minute and the tomato paste for 1 minute more.'
      },
      {
        title: 'Tomatoes',
        text: 'Add the tomatoes, thyme, bay leaf and the remaining 1 tsp salt and simmer for 10 minutes until saucy.'
      },
      {
        title: 'Simmer together',
        text: 'Return the eggplant and zucchini and simmer gently, uncovered, for 25 minutes, stirring occasionally, until everything is tender and melded.'
      },
      {
        title: 'Finish',
        text: 'Remove the thyme and bay leaf. Stir in the basil and the last drizzle of oil, season with pepper, and serve warm or at room temperature with bread.'
      }
    ],
    notes: [
      'Ratatouille tastes even better the next day. Serve it with eggs, over polenta, or with grilled fish.'
    ]
  },
  // ────────────────────────── German & Austrian ───────────────────────────
  {
    id: 'wiener-schnitzel',
    name: 'Wiener Schnitzel',
    short: 'Schnitzel',
    continent: 'Europe',
    region: 'German & Austrian',
    cuisine: 'Austrian',
    emoji: '🥩',
    description: 'Vienna\'s pride: veal pounded thin, lightly breaded and fried while swirling the pan so the crust puffs up into golden waves. Lemon and lingonberry on the side.',
    servings: 4,
    time: { prep: 20, cook: 15 },
    heat: 0,
    tags: ['veal', 'pork', 'fried', 'quick'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'veal cutlets', note: 'or boneless pork loin cutlets', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'heavy cream', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'plain dry breadcrumbs', note: 'fine-textured', aisle: 'pantry' },
      { qty: 1.5, unit: 'cup', item: 'vegetable oil', note: 'or lard, for frying', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 2, item: 'lemons', note: 'cut into wedges', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'lingonberry jam', aisle: 'pantry', optional: true },
      { qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Pound thin',
        text: 'Pound the cutlets between sheets of plastic wrap to ⅛ inch thick. Season both sides with salt and pepper.'
      },
      {
        title: 'Set up the breading',
        text: 'Put the flour in one shallow dish, beat the eggs with the cream in a second, and put the breadcrumbs in a third.'
      },
      {
        title: 'Heat the fat',
        text: 'Heat ½ inch of oil with the butter in a large skillet to 340°F.'
      },
      {
        title: 'Bread lightly',
        text: 'Dredge a cutlet in flour, dip in egg, then lay it in the crumbs and turn to coat without pressing. Fry immediately.',
        tip: 'A loose coating is what lets the crust puff away from the meat.'
      },
      {
        title: 'Fry & swirl',
        text: 'Fry 1–2 at a time for 2 minutes per side, gently swirling the pan so hot fat washes over the top. That\'s what makes the crust puff into waves.'
      },
      {
        title: 'Serve',
        text: 'Drain briefly, sprinkle with salt, and serve immediately with lemon wedges, parsley, lingonberry jam, and potato or cucumber salad.'
      }
    ],
    notes: [
      'Made with pork, it\'s officially "Schnitzel Wiener Art." It\'s just as delicious.'
    ]
  },
  // ──────────────────────────────── Greek ─────────────────────────────────
  {
    id: 'chicken-souvlaki',
    name: 'Chicken Souvlaki with Tzatziki',
    nativeName: 'Σουβλάκι',
    short: 'Souvlaki',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🍢',
    description: 'Lemon-, garlic- and oregano-marinated chicken skewers grilled until charred, wrapped in warm pita with cool, garlicky tzatziki, tomato and red onion.',
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
      { group: 'Chicken', qty: 8, item: 'wooden skewers', note: 'or metal', aisle: 'other', optional: true },
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
  {
    id: 'shrimp-saganaki',
    name: 'Shrimp Saganaki',
    nativeName: 'Γαρίδες Σαγανάκι',
    short: 'Saganaki',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🦐',
    description: 'Plump shrimp baked in a garlicky white-wine tomato sauce under a blanket of melting feta. A taverna favorite that comes together in under an hour; bring lots of bread.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 1,
    tags: ['seafood', 'shrimp', 'one-pan', 'weeknight'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'olive oil', note: 'plus more to finish', aisle: 'pantry', staple: true },
      { qty: 2, item: 'shallots', note: 'finely chopped', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'dry white wine', note: 'such as Assyrtiko or Sauvignon Blanc', aisle: 'other' },
      { qty: 14, unit: 'oz', item: 'canned crushed tomatoes', note: '1 can', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined, tails on', aisle: 'seafood' },
      { qty: 4, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, item: 'lemon', note: 'cut into wedges', shop: 'lemons', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'crusty bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Soften the aromatics',
        text: 'Heat the oven to 400°F. Warm the oil in a 10- to 12-inch ovenproof skillet over medium heat. Cook the shallots for 3 minutes until soft, then add the garlic and pepper flakes and cook for 1 minute.'
      },
      {
        title: 'Reduce the wine',
        text: 'Pour in the wine and simmer for 2 minutes, until reduced by about half.'
      },
      {
        title: 'Simmer the sauce',
        text: 'Add the tomatoes, oregano and salt. Simmer for 10 minutes, stirring now and then, until thickened.'
      },
      {
        title: 'Add shrimp & feta',
        text: 'Nestle the shrimp into the sauce in a single layer and scatter the feta over the top.'
      },
      {
        title: 'Bake',
        text: 'Bake for 10 minutes, until the shrimp are pink and curled and the feta is soft and starting to brown.',
        tip: 'For a golden top, run it under the broiler for the last minute or two — watch it closely.'
      },
      {
        title: 'Serve',
        text: 'Scatter with parsley, drizzle with a little olive oil, and serve straight from the pan with lemon wedges and bread for the sauce.'
      }
    ],
    notes: [
      'Also great tossed with orzo or spaghetti.',
      'Frozen shrimp work well; thaw them in cold water and pat dry first.'
    ]
  },
  // ─────────────────────────────── Italian ────────────────────────────────
  {
    id: 'mushroom-risotto',
    name: 'Mushroom Risotto',
    nativeName: 'Risotto ai Funghi',
    short: 'Risotto',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Northern Italian',
    emoji: '🍄',
    description: 'Creamy, loose risotto layered with deep porcini flavor and golden seared cremini, finished the Italian way with a vigorous beating of butter and Parmigiano.',
    servings: 4,
    time: { prep: 15, cook: 45 },
    heat: 0,
    tags: ['vegetarian-adaptable', 'rice', 'comfort'],
    ingredients: [
      { qty: 0.5, unit: 'oz', item: 'dried porcini mushrooms', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'hot water', aisle: 'none' },
      { qty: 6, unit: 'cup', item: 'chicken stock', note: 'or vegetable stock', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { qty: 16, unit: 'oz', item: 'cremini mushrooms', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'sprig', item: 'fresh thyme', note: 'leaves only', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'shallots', note: 'minced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'Arborio rice', note: 'or Carnaroli', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 2, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'finely grated', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soak the porcini',
        text: 'Soak the porcini in the hot water for 20 minutes. Lift them out, chop, and strain the soaking liquid into the stock. Keep the stock at a bare simmer.'
      },
      {
        title: 'Sear the mushrooms',
        text: 'Heat the oil and 1 tbsp butter in a wide pan over high heat. Sear the cremini for 8 minutes until deeply browned. Add the porcini, thyme and garlic for 1 minute, season, and set aside.'
      },
      {
        title: 'Toast the rice',
        text: 'Lower the heat to medium. Melt 1 tbsp butter and cook the shallots for 3 minutes. Add the rice and toast for 2 minutes until the edges turn translucent.'
      },
      {
        title: 'Wine',
        text: 'Pour in the wine and stir for 1 minute until absorbed.'
      },
      {
        title: 'Add stock gradually',
        text: 'Add the hot stock a ladle at a time, stirring often and waiting until it\'s nearly absorbed before adding more. After about 20 minutes the rice should be creamy and just al dente.',
        tip: 'Risotto should flow like lava when you tilt the pan. Add an extra splash of stock at the end if needed.'
      },
      {
        title: 'Mantecatura',
        text: 'Off the heat, beat in the remaining 2 tbsp butter and the Parmigiano until glossy. Fold in half the mushrooms and let rest for 2 minutes.'
      },
      {
        title: 'Serve',
        text: 'Spoon onto warm plates and top with the remaining mushrooms and parsley.'
      }
    ],
    notes: [
      'Use vegetable stock for a vegetarian version.'
    ]
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    short: 'Carbonara',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Roman',
    emoji: '🍝',
    description: 'The Roman original: crisp guanciale, Pecorino Romano, eggs and a heap of black pepper emulsified with starchy pasta water into a silky sauce. No cream required.',
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
  },
  {
    id: 'ragu-bolognese',
    name: 'Tagliatelle al Ragù Bolognese',
    short: 'Bolognese',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Bologna',
    emoji: '🍝',
    description: 'The real deal from Bologna: beef and pork slowly simmered with soffritto, milk, wine and a little tomato for hours into a rich, velvety ragù.',
    servings: 6,
    time: { prep: 20, cook: 225 },
    heat: 0,
    tags: ['pasta', 'beef', 'pork', 'sunday supper'],
    ingredients: [
      { group: 'Ragù', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Ragù', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Ragù', qty: 4, unit: 'oz', item: 'pancetta', note: 'finely diced', aisle: 'meat' },
      { group: 'Ragù', qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Ragù', qty: 2, item: 'carrots', note: 'finely diced', aisle: 'produce' },
      { group: 'Ragù', qty: 2, unit: 'stalk', item: 'celery', note: 'finely diced', aisle: 'produce' },
      { group: 'Ragù', qty: 1, unit: 'lb', item: 'ground beef', note: '80/20 chuck', aisle: 'meat' },
      { group: 'Ragù', qty: 0.5, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { group: 'Ragù', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Ragù', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Ragù', qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Ragù', item: 'ground nutmeg', note: 'a few gratings', aisle: 'spices' },
      { group: 'Ragù', qty: 1, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { group: 'Ragù', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Ragù', qty: 14, unit: 'oz', item: 'canned crushed tomatoes', note: '1 can', aisle: 'pantry' },
      { group: 'Ragù', qty: 1, unit: 'cup', item: 'beef stock', note: 'plus more as needed', aisle: 'pantry' },
      { group: 'To serve', qty: 1, unit: 'lb', item: 'tagliatelle', note: 'or pappardelle; spaghetti if you must', aisle: 'pantry' },
      { group: 'To serve', qty: 2, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Render the pancetta',
        text: 'Heat the oil and butter in a Dutch oven over medium heat. Cook the pancetta for 4 minutes until the fat renders.'
      },
      {
        title: 'Soffritto',
        text: 'Add the onion, carrot and celery and cook gently for 10 minutes until soft but not browned.'
      },
      {
        title: 'Brown the meat',
        text: 'Raise the heat to medium-high, add the beef and pork with the salt and pepper, and cook for 8 minutes, breaking it up, until no longer pink and starting to brown.'
      },
      {
        title: 'Milk',
        text: 'Pour in the milk and simmer for 10 minutes until it has mostly evaporated. Grate in a little nutmeg.',
        tip: 'Milk before tomato is the Bolognese secret. It makes the meat tender and the sauce mellow.'
      },
      {
        title: 'Wine',
        text: 'Add the wine and simmer for 10 minutes until it evaporates.'
      },
      {
        title: 'Long simmer',
        text: 'Stir in the tomato paste, tomatoes and stock. Bring to the barest simmer and cook uncovered on the lowest heat for 3 hours, stirring occasionally and adding a splash of stock whenever it looks dry.'
      },
      {
        title: 'Toss with pasta',
        text: 'Cook the pasta until al dente. Toss with the ragù and a splash of pasta water until glossy, and serve with Parmigiano.'
      }
    ],
    notes: [
      'Makes extra-good lasagna. Freezes perfectly for 3 months.'
    ]
  },
  // ────────────────────────────── Portuguese ──────────────────────────────
  {
    id: 'caldo-verde',
    name: 'Caldo Verde',
    short: 'Caldo verde',
    continent: 'Europe',
    region: 'Portuguese',
    emoji: '🥬',
    description: 'Portugal\'s beloved green soup: silky puréed potato broth with ribbons of tender kale and smoky slices of chouriço, finished with a swirl of olive oil.',
    servings: 6,
    time: { prep: 15, cook: 40 },
    heat: 0,
    tags: ['soup', 'sausage', 'winter', 'budget'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'olive oil', note: 'plus more to serve', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'oz', item: 'linguiça or chouriço', note: 'sliced (or Spanish chorizo)', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'lb', item: 'Yukon Gold potatoes', note: 'peeled and sliced', aisle: 'produce' },
      { qty: 8, unit: 'cup', item: 'chicken stock', note: 'or water', aisle: 'pantry' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'bunch', item: 'lacinato kale or collard greens', note: 'stems removed', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'crusty bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Brown the sausage',
        text: 'Brown the sausage in 1 tbsp oil in a large pot over medium heat for 5 minutes. Set aside.'
      },
      {
        title: 'Onion & garlic',
        text: 'Add the remaining oil and the onion and cook for 6 minutes until soft. Add the garlic for 1 minute.'
      },
      {
        title: 'Simmer the potatoes',
        text: 'Add the potatoes, stock, bay leaf and salt and simmer for 20 minutes until the potatoes are falling apart.'
      },
      {
        title: 'Purée',
        text: 'Remove the bay leaf and purée the soup until smooth with an immersion blender.'
      },
      {
        title: 'Add the greens',
        text: 'Roll the greens into tight cigars and slice into hair-thin ribbons. Stir them into the soup and simmer for 5 minutes until bright and tender.',
        tip: 'The thinner the ribbons, the more authentic and silky the soup.'
      },
      {
        title: 'Serve',
        text: 'Return the sausage, season with pepper, and finish each bowl with a drizzle of olive oil.'
      }
    ],
    notes: [
      'Vegetarian: skip the sausage and add a pinch of smoked paprika to the onions.'
    ]
  },
  // ───────────────────────────── Scandinavian ─────────────────────────────
  {
    id: 'swedish-meatballs',
    name: 'Swedish Meatballs',
    nativeName: 'Köttbullar',
    short: 'Meatballs',
    continent: 'Europe',
    region: 'Scandinavian',
    cuisine: 'Swedish',
    emoji: '🧆',
    description: 'Tender, warmly spiced beef-and-pork meatballs in a silky cream gravy, served with buttery mashed potatoes and tart lingonberry jam.',
    servings: 4,
    time: { prep: 25, cook: 40 },
    heat: 0,
    tags: ['beef', 'pork', 'comfort', 'family favorite'],
    ingredients: [
      { group: 'Meatballs', qty: 0.5, unit: 'cup', item: 'plain dry breadcrumbs', aisle: 'pantry' },
      { group: 'Meatballs', qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Meatballs', qty: 0.5, item: 'yellow onion', note: 'finely grated', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Meatballs', qty: 3, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { group: 'Meatballs', qty: 0.75, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { group: 'Meatballs', qty: 0.5, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { group: 'Meatballs', qty: 1, item: 'eggs', aisle: 'dairy' },
      { group: 'Meatballs', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Meatballs', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Meatballs', qty: 0.25, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Meatballs', qty: 0.25, unit: 'tsp', item: 'ground nutmeg', aisle: 'spices' },
      { group: 'Gravy', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Gravy', qty: 3, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Gravy', qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Gravy', qty: 0.5, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Gravy', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Gravy', qty: 1, unit: 'tsp', item: 'Dijon mustard', aisle: 'pantry' },
      { group: 'To serve', qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'for mashing', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'lingonberry jam', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak the crumbs',
        text: 'Stir the breadcrumbs into the milk and let them soak for 5 minutes.'
      },
      {
        title: 'Soften the onion',
        text: 'Cook the grated onion in 1 tbsp butter over medium heat for 4 minutes until soft. Let it cool a little.'
      },
      {
        title: 'Mix & roll',
        text: 'Mix the soaked crumbs, onion, beef, pork, egg, salt, pepper, allspice and nutmeg with your hands until tacky. Roll into 1-inch balls (about 30).',
        tip: 'Wet your hands to keep the mixture from sticking.'
      },
      {
        title: 'Brown',
        text: 'Brown the meatballs in the remaining 2 tbsp butter in a large skillet over medium heat, in batches, for 8 minutes, turning until browned all over and cooked through. Set aside.'
      },
      {
        title: 'Potatoes',
        text: 'Meanwhile, boil the potatoes in salted water for 20 minutes until tender, then mash with a knob of butter and a splash of milk.'
      },
      {
        title: 'Make the gravy',
        text: 'Melt the butter in the same skillet and whisk in the flour for 1 minute. Gradually whisk in the stock and simmer for 3 minutes. Stir in the cream, soy sauce and mustard and season.'
      },
      {
        title: 'Simmer & serve',
        text: 'Return the meatballs to the gravy and simmer for 5 minutes. Serve with mashed potatoes and lingonberry jam.'
      }
    ],
    notes: [
      'Cranberry sauce is a good stand-in for lingonberry jam.'
    ]
  },
  // ─────────────────────────────── Spanish ────────────────────────────────
  {
    id: 'gambas-al-ajillo',
    name: 'Gambas al Ajillo',
    short: 'Garlic shrimp',
    continent: 'Europe',
    region: 'Spanish',
    cuisine: 'Madrid tapas',
    emoji: '🦐',
    description: 'Sizzling garlic shrimp straight from a Madrid tapas bar: shrimp poached in golden garlic-and-chili olive oil with smoked paprika and a splash of sherry. Bread is mandatory.',
    servings: 4,
    time: { prep: 10, cook: 10 },
    heat: 1,
    tags: ['seafood', 'shrimp', 'tapas', 'quick'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'smoked paprika', note: 'pimentón de la Vera', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'olive oil', note: 'good Spanish extra-virgin', aisle: 'pantry', staple: true },
      { qty: 8, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { qty: 2, item: 'dried árbol chilies', note: 'or guindillas, broken in half', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'dry sherry', aisle: 'other' },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 1, item: 'baguette', note: 'for dunking', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Season the shrimp',
        text: 'Toss the shrimp with the salt and paprika and let them sit while you prep the garlic.'
      },
      {
        title: 'Infuse the oil',
        text: 'Warm the oil, garlic and chilies in a cazuela or skillet over medium-low heat for 4 minutes, until the garlic is pale golden.',
        tip: 'Take your time. Brown garlic turns bitter, so keep it pale.'
      },
      {
        title: 'Cook the shrimp',
        text: 'Raise the heat to medium-high, add the shrimp in a single layer, and cook for 1 minute per side until just pink.'
      },
      {
        title: 'Finish',
        text: 'Add the sherry, lemon juice and parsley and let it sizzle for 30 seconds.'
      },
      {
        title: 'Serve sizzling',
        text: 'Bring the pan straight to the table with plenty of bread for the garlicky oil.'
      }
    ],
    notes: [
      'Make it a meal: toss with spaghetti and a splash of pasta water.'
    ]
  },
  {
    id: 'paella-valenciana',
    name: 'Paella Valenciana',
    short: 'Paella',
    continent: 'Europe',
    region: 'Spanish',
    cuisine: 'Valencian',
    emoji: '🥘',
    description: 'The original paella from Valencia: chicken, green beans and butter beans with saffron and rosemary, cooked in a wide, shallow pan until the rice forms a crispy socarrat.',
    servings: 6,
    time: { prep: 25, cook: 65 },
    heat: 0,
    tags: ['rice', 'chicken', 'party', 'one-pan'],
    ingredients: [
      { qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'cut into 2-inch chunks (ask your butcher)', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'rabbit', note: 'cut up; traditional but optional', aisle: 'meat', optional: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'lb', item: 'Romano or flat green beans', note: 'trimmed and halved', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'Roma tomatoes', note: 'halved and grated, skins discarded', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', note: 'Spanish pimentón', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { qty: 6, unit: 'cup', item: 'chicken stock', note: 'hot', aisle: 'pantry' },
      { qty: 1, unit: 'can', item: 'butter beans', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 2, unit: 'sprig', item: 'fresh rosemary', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'Bomba or Calasparra rice', aisle: 'pantry' },
      { qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Bloom the saffron',
        text: 'Crumble the saffron into ¼ cup of the hot stock and let it steep.'
      },
      {
        title: 'Brown the meat',
        text: 'Heat the oil in a 15-inch paella pan (or your widest skillet) over medium-high heat. Season the chicken (and rabbit) with salt and brown for 15 minutes, turning, until deep golden all over.'
      },
      {
        title: 'Green beans',
        text: 'Push the meat to the edges and cook the green beans in the center for 5 minutes.'
      },
      {
        title: 'Sofrito',
        text: 'Add the garlic for 30 seconds, then the grated tomato and paprika. Cook for 5 minutes until jammy.'
      },
      {
        title: 'Broth',
        text: 'Pour in the hot stock and saffron, add the butter beans and rosemary, and simmer for 10 minutes. Taste. The broth should be quite salty.'
      },
      {
        title: 'Add the rice',
        text: 'Scatter the rice evenly across the pan and gently shake it level. From now on, do not stir. Boil over medium-high heat for 10 minutes, then lower to medium-low for 8 minutes until the liquid is absorbed and the rice is tender.',
        tip: 'No stirring is the golden rule. It\'s how the crust forms on the bottom.'
      },
      {
        title: 'Socarrat',
        text: 'Turn the heat to high for 1 minute and listen for crackling. That\'s the socarrat crust forming. Pull it off as soon as it smells toasty.'
      },
      {
        title: 'Rest & serve',
        text: 'Remove the rosemary, cover the pan with a towel and rest for 5 minutes. Serve from the pan with lemon wedges.'
      }
    ],
    notes: [
      'No paella pan? Use the widest skillet you own. The rice layer should be no more than ½ inch deep.'
    ]
  }
);
