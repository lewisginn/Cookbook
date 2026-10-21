// Europe recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ─────────────────────────── Belgian & Swiss ────────────────────────────
  {
    id: 'carbonnade-flamande',
    name: 'Carbonnade Flamande',
    short: 'Carbonnade',
    continent: 'Europe',
    region: 'Belgian & Swiss',
    cuisine: 'Belgian · Flemish',
    emoji: '🍺',
    description: 'Flemish beef and onion stew braised in dark Belgian ale, sweetened with brown sugar and thickened with mustard-smeared bread. Served with fries.',
    servings: 6,
    time: { prep: 20, cook: 180 },
    heat: 0,
    tags: ['beef', 'stew', 'beer', 'winter'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'in 2-inch cubes', aisle: 'meat' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 3, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 24, unit: 'oz', item: 'dark Belgian ale', note: 'e.g. Chimay or brown ale', aisle: 'other' },
      { qty: 1, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 2, unit: 'slice', item: 'white sandwich bread', note: 'or gingerbread', aisle: 'bakery' },
      { qty: 2, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brown the beef',
        text: 'Season the beef and brown in batches in the butter in a Dutch oven, about 8 minutes per batch. Set aside.'
      },
      {
        title: 'Onions',
        text: 'Cook the onions for 15 minutes until deep golden. Sprinkle in the flour for 1 minute.'
      },
      {
        title: 'Ale',
        text: 'Pour in the ale and stock, scraping the pot, then add the sugar, vinegar, thyme and bay leaves. Return the beef.'
      },
      {
        title: 'Mustard bread',
        text: 'Spread the bread with mustard and lay it on top of the stew, mustard side down. It will dissolve and thicken the sauce.',
        tip: 'This is the traditional Flemish thickener. It sounds odd, but it works.'
      },
      {
        title: 'Braise',
        text: 'Cover and simmer on low for 2.5 hours, stirring occasionally, until the beef is very tender.'
      },
      {
        title: 'Serve',
        text: 'Remove the herb stems and bay leaves and serve with fries (and mayo) or mashed potatoes.'
      }
    ],
    notes: [
      'Even better the next day.'
    ]
  },
  {
    id: 'moules-frites',
    name: 'Moules Frites',
    short: 'Moules frites',
    continent: 'Europe',
    region: 'Belgian & Swiss',
    cuisine: 'Belgian',
    emoji: '🦪',
    description: 'Belgium\'s national dish: mussels steamed in white wine, shallots, garlic and butter, served in their pot with crispy fries and mayo for dipping.',
    servings: 4,
    time: { prep: 20, cook: 30 },
    heat: 0,
    tags: ['seafood', 'quick', 'bistro'],
    ingredients: [
      { qty: 4, unit: 'lb', item: 'mussels', note: 'scrubbed and debearded', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 2, item: 'shallots', note: 'minced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'finely diced', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'heavy cream', aisle: 'dairy', optional: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 2, unit: 'lb', item: 'frozen french fries', note: 'or homemade double-fried', aisle: 'frozen' },
      { qty: 0.5, unit: 'cup', item: 'mayonnaise', note: 'for the fries', aisle: 'pantry' },
      { qty: 1, item: 'baguette', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Fries',
        text: 'Bake or fry the fries according to the package so they\'re ready when the mussels are.'
      },
      {
        title: 'Check the mussels',
        text: 'Discard any mussels with cracked shells or that stay open when tapped.'
      },
      {
        title: 'Aromatics',
        text: 'Melt the butter in a large pot and cook the shallots, garlic and celery for 4 minutes.'
      },
      {
        title: 'Steam',
        text: 'Add the wine and thyme and bring to a boil. Add the mussels, cover, and steam for 5 minutes, shaking the pot, until they open.',
        tip: 'Discard any that stay closed.'
      },
      {
        title: 'Serve',
        text: 'Stir in the cream and parsley. Serve in big bowls with the broth, fries, mayo and bread.'
      }
    ],
    notes: [
      'Use an empty shell as pincers to eat the rest, the Belgian way.'
    ]
  },
  {
    id: 'cheese-fondue',
    name: 'Swiss Cheese Fondue',
    nativeName: 'Fondue Moitié-Moitié',
    short: 'Fondue',
    continent: 'Europe',
    region: 'Belgian & Swiss',
    cuisine: 'Swiss',
    emoji: '🫕',
    description: 'A bubbling pot of Gruyère and Vacherin melted with white wine, garlic and kirsch, kept warm at the table for dunking crusty bread, potatoes and pickles.',
    servings: 4,
    time: { prep: 15, cook: 15 },
    heat: 0,
    tags: ['cheese', 'vegetarian', 'party', 'winter'],
    ingredients: [
      { qty: 1, item: 'garlic cloves', note: 'halved', aisle: 'produce' },
      { qty: 1.25, unit: 'cup', item: 'dry white wine', note: 'Swiss Chasselas or Sauvignon Blanc', aisle: 'other' },
      { qty: 1, unit: 'tbsp', item: 'cornstarch', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'kirsch', note: 'cherry brandy, optional', aisle: 'other', optional: true },
      { qty: 10, unit: 'oz', item: 'Gruyère', note: 'grated', aisle: 'dairy' },
      { qty: 10, unit: 'oz', item: 'Vacherin Fribourgeois or Emmental', note: 'grated', aisle: 'dairy' },
      { item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' },
      { qty: 1, item: 'baguette', note: 'in 1-inch cubes, a day old', aisle: 'bakery' },
      { qty: 1, unit: 'lb', item: 'baby red potatoes', note: 'boiled', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'cornichons', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Rub the pot',
        text: 'Rub the inside of a fondue pot or heavy saucepan with the cut garlic.'
      },
      {
        title: 'Heat the wine',
        text: 'Add the wine and bring to a gentle simmer. Dissolve the cornstarch in the kirsch (or a little wine).'
      },
      {
        title: 'Melt the cheese',
        text: 'Add the cheese a handful at a time, stirring in a figure-eight, letting each handful melt before adding the next.',
        tip: 'Keep it below a boil, or the cheese can turn stringy and separate.'
      },
      {
        title: 'Thicken',
        text: 'Stir in the cornstarch mixture and nutmeg and cook for 2 minutes until smooth and creamy.'
      },
      {
        title: 'Serve',
        text: 'Set over a burner at the table and dunk the bread, potatoes and pickles.'
      }
    ],
    notes: [
      'Swiss tradition: if you drop your bread in the pot, you buy the next round.'
    ]
  },
  // ─────────────────────────── British & Irish ────────────────────────────
  {
    id: 'bangers-and-mash',
    name: 'Bangers & Mash',
    short: 'Bangers & mash',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'British pub',
    emoji: '🌭',
    description: 'Juicy pork sausages on a pillow of buttery mashed potatoes, drowned in a rich, sweet onion gravy. Pure pub comfort.',
    servings: 4,
    time: { prep: 15, cook: 45 },
    heat: 0,
    tags: ['pork', 'sausage', 'comfort'],
    ingredients: [
      { qty: 8, item: 'pork sausages', note: 'British-style bangers', aisle: 'meat' },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 2.5, unit: 'lb', item: 'russet potatoes', note: 'peeled and cubed', aisle: 'produce' },
      { qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'whole milk', note: 'warm', aisle: 'dairy' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'Dijon mustard', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Sausages',
        text: 'Cook the sausages in the oil over medium-low heat for 20 minutes, turning often, until browned all over and cooked through.'
      },
      {
        title: 'Mash',
        text: 'Meanwhile, boil the potatoes for 15 minutes until tender. Drain and mash with 4 tbsp butter, the warm milk and 1 tsp salt.'
      },
      {
        title: 'Onion gravy',
        text: 'Melt the remaining butter and cook the onions with the sugar over medium heat for 15 minutes until deep golden.'
      },
      {
        title: 'Thicken',
        text: 'Sprinkle in the flour for 1 minute, then whisk in the stock, Worcestershire and mustard. Simmer for 5 minutes and season.'
      },
      {
        title: 'Serve',
        text: 'Pile the mash on plates, top with the sausages, and pour over plenty of onion gravy. Peas on the side.'
      }
    ],
    notes: [
      'Cooking sausages low and slow keeps them from bursting. That\'s where "bangers" got the name.'
    ]
  },
  {
    id: 'cornish-pasties',
    name: 'Cornish Pasties',
    short: 'Pasties',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'Cornwall',
    emoji: '🥟',
    description: 'The miner\'s lunch: sturdy, buttery pastry crimped around raw beef skirt, potato, swede and onion that steam together into a peppery, juicy filling.',
    servings: 6,
    time: { prep: 45, cook: 55, inactive: 60, inactiveLabel: 'chill pastry' },
    heat: 0,
    tags: ['beef', 'pastry', 'freezer-friendly'],
    ingredients: [
      { group: 'Pastry', qty: 4, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Pastry', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pastry', qty: 8, unit: 'tbsp', item: 'unsalted butter', note: 'cold, cubed', aisle: 'dairy' },
      { group: 'Pastry', qty: 0.5, unit: 'cup', item: 'lard', note: 'or shortening, cold', aisle: 'meat' },
      { group: 'Pastry', qty: 0.75, unit: 'cup', item: 'ice water', aisle: 'none' },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'beef skirt steak', note: 'in small dice', shop: 'skirt steak', aisle: 'meat' },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'russet potatoes', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Filling', qty: 0.5, unit: 'lb', item: 'rutabaga (swede)', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Filling', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Filling', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Filling', qty: 1, item: 'eggs', note: 'beaten, for glaze', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Pastry',
        text: 'Rub the butter and lard into the flour and salt until crumbly. Add ice water to make a firm dough. Knead briefly, wrap, and chill for 1 hour.'
      },
      {
        title: 'Roll',
        text: 'Heat the oven to 400°F. Divide the dough into 6 and roll each into an 8-inch circle.'
      },
      {
        title: 'Fill',
        text: 'Layer potato, swede, onion and beef on one half of each circle, seasoning each layer well with salt and plenty of pepper. Top with a little butter.',
        tip: 'The filling goes in raw. It steams inside the pastry.'
      },
      {
        title: 'Crimp',
        text: 'Fold over, press the edges together, and crimp along the edge with your fingers. Cut a small steam hole and brush with egg.'
      },
      {
        title: 'Bake',
        text: 'Bake for 20 minutes, then lower to 350°F and bake for 30 minutes more until deep golden.'
      }
    ],
    notes: [
      'Freeze unbaked pasties and bake from frozen, adding about 15 minutes.'
    ]
  },
  {
    id: 'fish-and-chips',
    name: 'Fish & Chips',
    short: 'Fish & chips',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'British',
    emoji: '🐟',
    description: 'Flaky cod in a puffy, crackling beer batter with thick-cut, twice-fried chips, malt vinegar and mushy peas. Chip-shop perfection at home.',
    servings: 4,
    time: { prep: 30, cook: 40 },
    heat: 0,
    tags: ['seafood', 'fried', 'classic'],
    ingredients: [
      { group: 'Chips', qty: 2.5, unit: 'lb', item: 'russet potatoes', note: 'cut into thick chips', aisle: 'produce' },
      { group: 'Chips', qty: 8, unit: 'cup', item: 'vegetable oil', note: 'or beef dripping, for frying', aisle: 'pantry' },
      { group: 'Fish', qty: 1.5, unit: 'lb', item: 'cod or haddock fillets', note: '4 thick pieces', aisle: 'seafood' },
      { group: 'Fish', qty: 1.5, unit: 'cup', item: 'all-purpose flour', note: 'plus more for dusting', aisle: 'pantry' },
      { group: 'Fish', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Fish', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Fish', qty: 12, unit: 'oz', item: 'cold lager or ale', aisle: 'other' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'frozen peas', note: 'for mushy peas', aisle: 'frozen' },
      { group: 'To serve', qty: 1, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'To serve', item: 'malt vinegar', note: 'for sprinkling', aisle: 'pantry' },
      { group: 'To serve', qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' },
      { group: 'To serve', item: 'tartar sauce', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'First fry',
        text: 'Rinse and dry the chips. Fry in 300°F oil for 6 minutes until soft but pale. Drain.',
        tip: 'Twice-frying is the key to fluffy insides and crunchy outsides.'
      },
      {
        title: 'Batter',
        text: 'Whisk the flour, baking powder and salt, then whisk in the cold beer just until smooth.'
      },
      {
        title: 'Fry the fish',
        text: 'Heat the oil to 350°F. Pat the fish dry, dust with flour, dip in batter, and lower in slowly, away from you. Fry for 6 minutes until puffed and golden. Drain on a rack.'
      },
      {
        title: 'Second fry',
        text: 'Raise the oil to 375°F and fry the chips again for 3 minutes until golden and crisp. Salt well.'
      },
      {
        title: 'Mushy peas',
        text: 'Simmer the peas for 3 minutes, drain, and roughly mash with the butter and a pinch of salt.'
      },
      {
        title: 'Serve',
        text: 'Serve with malt vinegar, lemon, tartar sauce and mushy peas.'
      }
    ],
    notes: [
      'Haddock is the Scottish favorite; cod is the English one.'
    ]
  },
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
    id: 'irish-soda-bread',
    name: 'Irish Soda Bread',
    short: 'Soda bread',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'Irish',
    emoji: '🍞',
    description: 'A rustic, craggy loaf made in minutes with just flour, buttermilk, baking soda and salt. No yeast and no kneading. Perfect with butter and stew.',
    servings: 8,
    time: { prep: 10, cook: 40 },
    heat: 0,
    tags: ['bread', 'vegetarian', 'quick'],
    ingredients: [
      { qty: 4, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'baking soda', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.75, unit: 'cup', item: 'buttermilk', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Mix',
        text: 'Heat the oven to 425°F. Whisk the flour, baking soda and salt. Make a well, pour in the buttermilk, and mix with your hand into a soft, shaggy dough.'
      },
      {
        title: 'Shape',
        text: 'Turn onto a floured surface and gently shape into a round about 2 inches high. Don\'t knead.',
        tip: 'Handle it as little as possible. Overworking makes it tough.'
      },
      {
        title: 'Score',
        text: 'Place on a floured sheet pan and cut a deep cross on top ("to let the fairies out").'
      },
      {
        title: 'Bake',
        text: 'Bake for 15 minutes, then lower to 400°F and bake for 25 minutes more, until it sounds hollow when tapped underneath.'
      },
      {
        title: 'Cool',
        text: 'Wrap in a clean towel to keep the crust soft, and cool before slicing.'
      }
    ],
    notes: [
      'Add 1 cup raisins and 2 tbsp sugar for "spotted dog."'
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
  {
    id: 'sticky-toffee-pudding',
    name: 'Sticky Toffee Pudding',
    short: 'Sticky toffee',
    continent: 'Europe',
    region: 'British & Irish',
    cuisine: 'English',
    emoji: '🍮',
    description: 'A moist, rich date sponge drenched in hot, buttery toffee sauce. The ultimate British pub dessert, best with vanilla ice cream or cream.',
    servings: 9,
    time: { prep: 20, cook: 40 },
    heat: 0,
    tags: ['dessert', 'comfort', 'holiday'],
    ingredients: [
      { group: 'Cake', qty: 12, item: 'Medjool dates', note: 'about 8 oz, pitted and chopped', aisle: 'produce' },
      { group: 'Cake', qty: 1, unit: 'cup', item: 'boiling water', aisle: 'none' },
      { group: 'Cake', qty: 1, unit: 'tsp', item: 'baking soda', aisle: 'pantry' },
      { group: 'Cake', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'softened', aisle: 'dairy' },
      { group: 'Cake', qty: 0.75, unit: 'cup', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Cake', qty: 2, item: 'eggs', aisle: 'dairy' },
      { group: 'Cake', qty: 1, unit: 'tsp', item: 'vanilla extract', aisle: 'pantry' },
      { group: 'Cake', qty: 1.25, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Cake', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Cake', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Toffee sauce', qty: 6, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Toffee sauce', qty: 0.75, unit: 'cup', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Toffee sauce', qty: 1, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Toffee sauce', item: 'kosher salt', note: 'a pinch', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak the dates',
        text: 'Heat the oven to 350°F and butter a 9-inch square pan. Pour the boiling water over the dates, stir in the baking soda, and let sit for 10 minutes.'
      },
      {
        title: 'Batter',
        text: 'Beat the butter and sugar, then beat in the eggs and vanilla. Fold in the flour, baking powder and salt, then the dates and their liquid.'
      },
      {
        title: 'Bake',
        text: 'Pour into the pan and bake for 30 minutes until a toothpick comes out clean.'
      },
      {
        title: 'Toffee sauce',
        text: 'Simmer the butter, sugar, cream and salt for 5 minutes, stirring, until thick and glossy.'
      },
      {
        title: 'Soak',
        text: 'Poke holes all over the warm cake and pour over half the sauce. Let it soak in for 10 minutes.',
        tip: 'This is what makes it "sticky." Don\'t skip it.'
      },
      {
        title: 'Serve',
        text: 'Cut into squares and serve warm with the remaining sauce and vanilla ice cream or cream.'
      }
    ],
    notes: [
      'Make a day ahead and reheat. It only gets stickier.'
    ]
  },
  // ────────────────────── Central & Eastern European ──────────────────────
  {
    id: 'khachapuri',
    name: 'Adjarian Khachapuri',
    nativeName: 'აჭარული ხაჭაპური',
    short: 'Khachapuri',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Georgian',
    emoji: '🧀',
    description: 'Georgia\'s boat-shaped cheese bread: a golden yeasted crust filled with a molten pool of cheese, topped with an egg yolk and butter stirred in at the table.',
    servings: 4,
    time: { prep: 25, cook: 20, inactive: 75, inactiveLabel: 'rise' },
    heat: 0,
    tags: ['bread', 'cheese', 'vegetarian'],
    ingredients: [
      { group: 'Dough', qty: 2.5, unit: 'cup', item: 'bread flour', aisle: 'pantry' },
      { group: 'Dough', qty: 1.5, unit: 'tsp', item: 'instant yeast', aisle: 'pantry' },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 0.75, unit: 'cup', item: 'whole milk', note: 'warm', aisle: 'dairy' },
      { group: 'Dough', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 8, unit: 'oz', item: 'low-moisture mozzarella', note: 'shredded', aisle: 'dairy' },
      { group: 'Filling', qty: 6, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' },
      { group: 'Filling', qty: 2, item: 'eggs', note: '1 for the filling, 1 for egg wash', aisle: 'dairy' },
      { group: 'Filling', qty: 4, item: 'eggs', note: 'yolks only, for topping', aisle: 'dairy' },
      { group: 'Filling', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'cold, in 4 pats', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Dough',
        text: 'Mix the flour, yeast, sugar, salt, warm milk and oil and knead for 6 minutes until smooth. Cover and let rise for 1 hour.'
      },
      {
        title: 'Cheese',
        text: 'Mix the mozzarella and feta with 1 egg.'
      },
      {
        title: 'Shape the boats',
        text: 'Heat the oven to 475°F. Divide the dough into 4 and roll each into an oval. Roll the long edges inward toward the center and pinch the ends to make a boat shape.'
      },
      {
        title: 'Fill & bake',
        text: 'Fill each boat with cheese, brush the crust with beaten egg, and bake for 12 minutes until golden and bubbling.'
      },
      {
        title: 'Egg & butter',
        text: 'Make a well in the cheese, drop in an egg yolk and a pat of butter, and bake for 2 minutes more.',
        tip: 'Stir the yolk and butter into the hot cheese with a fork, then tear off the crust to dip.'
      }
    ],
    notes: [
      'Traditionally made with Georgian sulguni and imeruli cheeses.'
    ]
  },
  {
    id: 'beef-stroganoff',
    name: 'Beef Stroganoff',
    short: 'Stroganoff',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Russian',
    emoji: '🍄',
    description: 'Tender strips of seared beef and mushrooms in a creamy, tangy sour cream and mustard sauce over buttered egg noodles. Quick, rich comfort.',
    servings: 4,
    time: { prep: 15, cook: 25 },
    heat: 0,
    tags: ['beef', 'creamy', 'weeknight'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'beef sirloin', note: 'in thin strips', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 8, unit: 'oz', item: 'cremini mushrooms', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { qty: 12, unit: 'oz', item: 'wide egg noodles', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Sear the beef',
        text: 'Season the beef and sear in batches in the oil over high heat for 1 minute per side. Set aside.',
        tip: 'Very hot pan, small batches, and pull it while still pink.'
      },
      {
        title: 'Mushrooms & onion',
        text: 'Melt the butter and cook the mushrooms and onion for 8 minutes until browned. Add the garlic for 1 minute.'
      },
      {
        title: 'Sauce',
        text: 'Sprinkle in the flour for 1 minute, then whisk in the stock, mustard and Worcestershire. Simmer for 3 minutes.'
      },
      {
        title: 'Finish',
        text: 'Lower the heat and stir in the sour cream and beef with its juices. Warm gently for 2 minutes, without boiling.'
      },
      {
        title: 'Serve',
        text: 'Serve over buttered noodles, topped with dill.'
      }
    ],
    notes: [
      'Also great over mashed potatoes or rice.'
    ]
  },
  {
    id: 'bigos',
    name: 'Bigos',
    short: 'Bigos',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Polish',
    emoji: '🍲',
    description: 'Poland\'s "hunter\'s stew": sauerkraut and fresh cabbage slow-cooked with kielbasa, pork, mushrooms, prunes and red wine. Deeply savory and better every day.',
    servings: 8,
    time: { prep: 25, cook: 180 },
    heat: 0,
    tags: ['pork', 'sausage', 'stew', 'winter', 'make-ahead'],
    ingredients: [
      { qty: 0.5, unit: 'oz', item: 'dried porcini mushrooms', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'hot water', aisle: 'none' },
      { qty: 6, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'boneless pork shoulder', note: 'in 1-inch cubes', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'kielbasa', note: 'sliced', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'lb', item: 'sauerkraut', note: 'drained and rinsed lightly', aisle: 'pantry' },
      { qty: 0.5, unit: 'head', item: 'green cabbage', note: 'shredded', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'pitted prunes', note: 'chopped', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 3, item: 'bay leaves', aisle: 'spices' },
      { qty: 6, item: 'juniper berries', note: 'crushed', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'caraway seeds', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the porcini in the hot water for 20 minutes. Chop, and keep the liquid.'
      },
      {
        title: 'Brown the meats',
        text: 'Cook the bacon in a large pot for 6 minutes. Brown the pork for 8 minutes, then the kielbasa for 4 minutes. Add the onion for 5 minutes.'
      },
      {
        title: 'Combine',
        text: 'Add the sauerkraut, cabbage, mushrooms and their liquid, prunes, wine, tomato paste and spices.'
      },
      {
        title: 'Simmer',
        text: 'Cover and simmer on low for 2.5 hours, stirring occasionally, until everything is soft and melded. Season with salt.',
        tip: 'Bigos is traditionally reheated over several days. Each time, it gets better.'
      },
      {
        title: 'Serve',
        text: 'Serve with rye bread or boiled potatoes.'
      }
    ],
    notes: [
      'Freezes beautifully.'
    ]
  },
  {
    id: 'chicken-paprikash',
    name: 'Chicken Paprikash',
    nativeName: 'Paprikás Csirke',
    short: 'Paprikash',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Hungarian',
    emoji: '🍗',
    description: 'Chicken braised in a velvety Hungarian paprika and onion sauce enriched with sour cream. Serve over buttered egg noodles or nokedli dumplings.',
    servings: 4,
    time: { prep: 15, cook: 50 },
    heat: 1,
    tags: ['chicken', 'braise', 'comfort'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', aisle: 'meat' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'lard', note: 'or vegetable oil', aisle: 'meat' },
      { qty: 2, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'sweet paprika', note: 'Hungarian', aisle: 'spices' },
      { qty: 1, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { qty: 1.5, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 12, unit: 'oz', item: 'wide egg noodles', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brown',
        text: 'Season the chicken and brown skin side down in the lard for 6 minutes. Set aside.'
      },
      {
        title: 'Onions',
        text: 'Cook the onions and pepper in the fat for 10 minutes until soft and golden. Add the garlic for 1 minute.'
      },
      {
        title: 'Paprika',
        text: 'Take the pot off the heat, stir in the paprika, then add the tomato and stock.',
        tip: 'Always add paprika off the heat. It scorches and turns bitter in seconds.'
      },
      {
        title: 'Braise',
        text: 'Return the chicken, cover, and simmer for 30 minutes until tender.'
      },
      {
        title: 'Finish',
        text: 'Whisk the sour cream with the flour and a ladle of the hot sauce, then stir it into the pot and heat gently for 2 minutes, without boiling. Serve over buttered noodles.'
      }
    ],
    notes: [
      'Hungarian nokedli (similar to spätzle) are the traditional side.'
    ]
  },
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
    id: 'pierogi',
    name: 'Potato & Cheese Pierogi',
    nativeName: 'Pierogi Ruskie',
    short: 'Pierogi',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Polish',
    emoji: '🥟',
    description: 'Tender dumplings stuffed with mashed potato, farmer\'s cheese and caramelized onion, boiled then pan-fried in butter and served with sour cream.',
    servings: 6,
    time: { prep: 60, cook: 30, inactive: 30, inactiveLabel: 'rest dough' },
    heat: 0,
    tags: ['vegetarian', 'dumplings', 'freezer-friendly'],
    ingredients: [
      { group: 'Dough', qty: 3, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1, item: 'eggs', aisle: 'dairy' },
      { group: 'Dough', qty: 0.5, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { group: 'Dough', qty: 0.5, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Filling', qty: 1.5, unit: 'lb', item: 'russet potatoes', note: 'peeled', aisle: 'produce' },
      { group: 'Filling', qty: 2, item: 'yellow onions', note: 'finely diced, divided', aisle: 'produce' },
      { group: 'Filling', qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { group: 'Filling', qty: 8, unit: 'oz', item: 'farmer\'s cheese', note: 'or dry cottage cheese', aisle: 'dairy' },
      { group: 'Filling', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { group: 'To serve', qty: 2, unit: 'tbsp', item: 'fresh dill', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Dough',
        text: 'Mix the flour, salt, egg, sour cream and warm water into a soft dough. Knead for 5 minutes until smooth, cover, and rest for 30 minutes.'
      },
      {
        title: 'Filling',
        text: 'Boil the potatoes for 20 minutes and mash. Cook half the onions in 2 tbsp butter for 10 minutes until golden, then mix into the potatoes with the cheese, salt and pepper. Cool.'
      },
      {
        title: 'Shape',
        text: 'Roll the dough ⅛ inch thick and cut 3-inch circles. Put a spoonful of filling on each, fold, and pinch the edges firmly to seal.',
        tip: 'Make sure there\'s no air trapped inside, or they\'ll burst when boiled.'
      },
      {
        title: 'Boil',
        text: 'Boil in batches in salted water. Once they float, cook for 2 minutes more, then lift out.'
      },
      {
        title: 'Fry & serve',
        text: 'Fry the remaining onions in the remaining butter for 8 minutes, add the pierogi, and fry for 3 minutes until golden. Serve with sour cream and dill.'
      }
    ],
    notes: [
      'Freeze uncooked pierogi on a tray, then bag. Boil from frozen.'
    ]
  },
  {
    id: 'sarmale',
    name: 'Sarmale (Stuffed Cabbage Rolls)',
    short: 'Sarmale',
    continent: 'Europe',
    region: 'Central & Eastern European',
    cuisine: 'Romanian',
    emoji: '🥬',
    description: 'Romania\'s beloved holiday dish: pickled cabbage leaves rolled around spiced pork and rice, slowly baked with smoked bacon, tomato and dill.',
    servings: 8,
    time: { prep: 60, cook: 180 },
    heat: 0,
    tags: ['pork', 'holiday', 'make-ahead'],
    ingredients: [
      { qty: 1, item: 'jar whole pickled cabbage leaves', note: 'or 1 large head fresh cabbage, blanched', shop: 'pickled cabbage leaves', aisle: 'international' },
      { qty: 2, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { qty: 0.5, unit: 'cup', item: 'medium-grain white rice', note: 'rinsed', aisle: 'pantry' },
      { qty: 2, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'fresh dill', note: 'chopped, plus more', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'sauerkraut', aisle: 'pantry' },
      { qty: 6, unit: 'oz', item: 'smoked bacon', note: 'thick-cut, in strips', shop: 'thick-cut bacon', aisle: 'meat' },
      { qty: 14, unit: 'oz', item: 'canned crushed tomatoes', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 3, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'cup', item: 'sour cream', note: 'to serve', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Filling',
        text: 'Cook the onions in the oil for 8 minutes. Cool slightly, then mix with the pork, rice, tomato paste, paprika, thyme, salt, pepper and dill.'
      },
      {
        title: 'Roll',
        text: 'Place a spoonful of filling at the stem end of each cabbage leaf, roll up, and tuck in the sides.'
      },
      {
        title: 'Layer',
        text: 'Spread half the sauerkraut in a large Dutch oven. Pack in the rolls snugly in layers, tucking bacon strips and bay leaves between them. Top with the remaining sauerkraut.'
      },
      {
        title: 'Bake',
        text: 'Pour over the tomatoes mixed with the water. Cover and bake at 325°F for 3 hours.',
        tip: 'Long, slow cooking makes the rolls meltingly tender.'
      },
      {
        title: 'Serve',
        text: 'Serve hot with sour cream, polenta (mămăligă) and fresh dill.'
      }
    ],
    notes: [
      'Sarmale are even better reheated the next day.'
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
    id: 'beef-bourguignon',
    name: 'Beef Bourguignon',
    nativeName: 'Bœuf Bourguignon',
    short: 'Bourguignon',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Burgundy',
    emoji: '🍷',
    description: 'Beef braised in a whole bottle of red Burgundy with bacon, carrots and thyme, finished with browned mushrooms and pearl onions in a glossy, deep sauce.',
    servings: 6,
    time: { prep: 30, cook: 210 },
    heat: 0,
    tags: ['beef', 'braise', 'wine', 'dinner party'],
    ingredients: [
      { group: 'Stew', qty: 6, unit: 'oz', item: 'thick-cut bacon', note: 'in lardons', aisle: 'meat' },
      { group: 'Stew', qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'in 2-inch cubes, patted dry', aisle: 'meat' },
      { group: 'Stew', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 2, item: 'carrots', note: 'in thick slices', aisle: 'produce' },
      { group: 'Stew', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Stew', qty: 3, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Stew', qty: 3, unit: 'cup', item: 'dry red wine', note: '1 bottle (750 ml), Burgundy or Pinot Noir', aisle: 'other' },
      { group: 'Stew', qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Stew', qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Stew', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Garnish', qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Garnish', qty: 16, unit: 'oz', item: 'cremini mushrooms', note: 'quartered', aisle: 'produce' },
      { group: 'Garnish', qty: 10, unit: 'oz', item: 'frozen pearl onions', note: 'thawed', aisle: 'frozen' },
      { group: 'Garnish', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Bacon',
        text: 'Cook the bacon in a Dutch oven over medium heat for 8 minutes until crisp. Set aside.'
      },
      {
        title: 'Brown the beef',
        text: 'Season the beef. Brown it in batches in the bacon fat plus oil over medium-high heat, about 8 minutes per batch, until deeply browned. Set aside.',
        tip: 'Dry beef and small batches give the best crust. Crowded beef steams.'
      },
      {
        title: 'Vegetables',
        text: 'Cook the onion and carrots for 6 minutes. Add the garlic and tomato paste for 1 minute, then sprinkle in the flour and stir for 1 minute.'
      },
      {
        title: 'Braise',
        text: 'Add the wine, stock, thyme, bay leaves, beef and bacon. Bring to a simmer, cover, and braise in a 325°F oven for 3 hours until the beef is very tender.'
      },
      {
        title: 'Garnish',
        text: 'Brown the mushrooms and pearl onions in the butter over medium-high heat for 10 minutes. Stir them into the stew.'
      },
      {
        title: 'Serve',
        text: 'Remove the herb stems and bay leaves, scatter with parsley, and serve with mashed potatoes, noodles or crusty bread.'
      }
    ],
    notes: [
      'Make it a day ahead. The flavor improves and the fat is easy to lift off.'
    ]
  },
  {
    id: 'bouillabaisse',
    name: 'Bouillabaisse',
    short: 'Bouillabaisse',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Marseille',
    emoji: '🐟',
    description: 'Marseille\'s famous fisherman\'s stew: a saffron, fennel and orange-scented tomato broth with mixed fish and shellfish, served with garlicky rouille toasts.',
    servings: 6,
    time: { prep: 40, cook: 60 },
    heat: 1,
    tags: ['seafood', 'stew', 'dinner party'],
    ingredients: [
      { group: 'Broth', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Broth', qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { group: 'Broth', qty: 1, item: 'fennel bulb', note: 'sliced', aisle: 'produce' },
      { group: 'Broth', qty: 1, item: 'leek', note: 'white part, sliced', shop: 'leeks', aisle: 'produce' },
      { group: 'Broth', qty: 4, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { group: 'Broth', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Broth', qty: 14, unit: 'oz', item: 'canned diced tomatoes', aisle: 'pantry' },
      { group: 'Broth', qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { group: 'Broth', qty: 1, item: 'orange', note: '2 strips of zest', shop: 'oranges', aisle: 'produce' },
      { group: 'Broth', qty: 3, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Broth', qty: 1, item: 'bay leaves', aisle: 'spices' },
      { group: 'Broth', qty: 6, unit: 'cup', item: 'seafood stock', aisle: 'pantry' },
      { group: 'Broth', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Seafood', qty: 1.5, unit: 'lb', item: 'firm white fish fillets', note: 'mix of halibut, cod, monkfish', aisle: 'seafood' },
      { group: 'Seafood', qty: 1, unit: 'lb', item: 'mussels', note: 'scrubbed', aisle: 'seafood' },
      { group: 'Seafood', qty: 0.75, unit: 'lb', item: 'large shrimp', note: 'shell on', aisle: 'seafood' },
      { group: 'Rouille & toasts', qty: 0.5, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Rouille & toasts', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Rouille & toasts', qty: 0.5, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Rouille & toasts', qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Rouille & toasts', qty: 1, item: 'baguette', note: 'sliced and toasted', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Aromatics',
        text: 'Heat the oil in a large pot and cook the onion, fennel and leek for 10 minutes. Add the garlic and tomato paste for 2 minutes.'
      },
      {
        title: 'Broth',
        text: 'Add the tomatoes, saffron, orange zest, thyme, bay leaf, stock and salt. Simmer for 25 minutes.'
      },
      {
        title: 'Rouille',
        text: 'Stir the mayo with a pinch of saffron steeped in 1 tsp hot water, the garlic, paprika and cayenne.'
      },
      {
        title: 'Fish',
        text: 'Bring the broth to a lively simmer. Add the firm fish, then the mussels and shrimp. Cover and cook for 6 minutes until the mussels open and the fish flakes.',
        tip: 'Add the firmest fish first and the most delicate last.'
      },
      {
        title: 'Serve',
        text: 'Ladle the broth into bowls with the seafood, and pass toasts spread with rouille to float on top.'
      }
    ],
    notes: [
      'In Marseille, the broth is served first and the fish afterward on a platter.'
    ]
  },
  {
    id: 'cassoulet',
    name: 'Cassoulet',
    short: 'Cassoulet',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Toulouse · Languedoc',
    emoji: '🫘',
    description: 'The rustic southwestern French bean feast: creamy white beans baked slowly with duck confit, garlic sausage and pork under a golden, crackling crust.',
    servings: 8,
    time: { prep: 40, cook: 240, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 0,
    tags: ['beans', 'pork', 'duck', 'weekend project'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried white beans', note: 'Tarbais or cannellini', aisle: 'pantry' },
      { qty: 6, unit: 'oz', item: 'thick-cut bacon', note: 'or pancetta, diced', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'boneless pork shoulder', note: 'in 1½-inch cubes', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'garlic pork sausage', note: 'Toulouse-style, in chunks', aisle: 'meat' },
      { qty: 4, item: 'duck confit legs', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 8, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'cup', item: 'panko breadcrumbs', note: 'optional topping', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Soak & par-cook beans',
        text: 'Soak the beans overnight (12 hours). Drain, cover with fresh water, and simmer for 45 minutes until almost tender. Drain.'
      },
      {
        title: 'Brown the meats',
        text: 'In a Dutch oven, cook the bacon for 5 minutes. Brown the pork for 8 minutes and the sausage for 5 minutes. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onion and carrots in the fat for 8 minutes. Add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Assemble',
        text: 'Layer the beans and browned meats in the pot, tucking in the duck legs, thyme and bay leaves. Add the stock and salt to just cover.'
      },
      {
        title: 'Bake & break the crust',
        text: 'Bake uncovered at 300°F for 3 hours. Each time a golden crust forms (about every 45 minutes), break it and push it under, adding a splash of stock if it looks dry.',
        tip: 'Breaking the crust several times is the tradition, and it builds layers of flavor.'
      },
      {
        title: 'Final crust',
        text: 'For the last 30 minutes, sprinkle with breadcrumbs and let a final crust form. Serve straight from the pot.'
      }
    ],
    notes: [
      'Duck confit is sold in cans or vacuum packs at specialty stores.'
    ]
  },
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
      { group: 'Braise', qty: 3, unit: 'cup', item: 'dry red wine', note: '1 bottle (750 ml), Pinot Noir or Burgundy', aisle: 'other' },
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
    id: 'croque-monsieur',
    name: 'Croque Monsieur',
    short: 'Croque monsieur',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Parisian café',
    emoji: '🥪',
    description: 'The Parisian café classic: ham and Gruyère between slices of bread, topped with creamy béchamel and more cheese, and baked until bubbling and golden.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 0,
    tags: ['sandwich', 'pork', 'cheese', 'brunch'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'plus more for the bread', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'slice', item: 'pain de mie or sturdy white bread', aisle: 'bakery' },
      { qty: 2, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 8, unit: 'oz', item: 'deli ham', note: 'thinly sliced (jambon de Paris)', aisle: 'meat' },
      { qty: 6, unit: 'oz', item: 'Gruyère', note: 'grated, divided', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Béchamel',
        text: 'Melt the butter, whisk in the flour for 1 minute, then whisk in the milk and simmer for 3 minutes until thick. Season with nutmeg and salt.'
      },
      {
        title: 'Toast',
        text: 'Heat the oven to 400°F. Butter one side of each slice and toast buttered side down in a skillet for 2 minutes until golden.'
      },
      {
        title: 'Build',
        text: 'On the untoasted side of 4 slices, spread mustard, then add ham and half the Gruyère. Top with the remaining bread, toasted side up.'
      },
      {
        title: 'Top & bake',
        text: 'Spread béchamel over the tops, sprinkle with the remaining Gruyère, and bake for 10 minutes. Broil for 2 minutes until bubbling and browned.'
      }
    ],
    notes: [
      'Top with a fried egg and it becomes a croque madame.'
    ]
  },
  {
    id: 'french-crepes',
    name: 'French Crêpes',
    short: 'Crêpes',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Brittany',
    emoji: '🥞',
    description: 'Thin, lacy, buttery crêpes for sweet or savory fillings: lemon and sugar, Nutella and banana, or ham, egg and cheese.',
    servings: 4,
    time: { prep: 10, cook: 25, inactive: 30, inactiveLabel: 'rest batter' },
    heat: 0,
    tags: ['breakfast', 'dessert', 'vegetarian'],
    ingredients: [
      { qty: 1, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', note: 'skip for savory crêpes', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, item: 'eggs', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', note: 'melted, plus more for the pan', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'vanilla extract', aisle: 'pantry', optional: true },
      { qty: 1, item: 'lemons', note: 'cut into wedges, to serve', aisle: 'produce' },
      { item: 'Nutella and bananas', note: 'to serve, optional', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Batter',
        text: 'Blend the flour, sugar, salt, eggs, milk, melted butter and vanilla until smooth. Rest for 30 minutes.',
        tip: 'Resting relaxes the gluten so the crêpes are tender, not rubbery.'
      },
      {
        title: 'Heat the pan',
        text: 'Heat a nonstick or crêpe pan over medium heat and brush with butter.'
      },
      {
        title: 'Swirl',
        text: 'Pour in ¼ cup batter and immediately swirl to coat the pan thinly. Cook for 1 minute until the edges lift and the underside is golden.'
      },
      {
        title: 'Flip',
        text: 'Flip and cook for 30 seconds more. Stack on a plate.'
      },
      {
        title: 'Fill & serve',
        text: 'Fill with lemon and sugar, Nutella and banana, or ham and cheese, and fold into quarters.'
      }
    ],
    notes: [
      'The first crêpe is always a test. Don\'t worry if it\'s ugly.'
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
    id: 'quiche-lorraine',
    name: 'Quiche Lorraine',
    short: 'Quiche',
    continent: 'Europe',
    region: 'French',
    cuisine: 'Lorraine',
    emoji: '🥧',
    description: 'A tall, silky custard tart with smoky bacon and Gruyère in a crisp, buttery pastry shell. Perfect for brunch, warm or at room temperature.',
    servings: 8,
    time: { prep: 30, cook: 75, inactive: 60, inactiveLabel: 'chill pastry' },
    heat: 0,
    tags: ['eggs', 'pork', 'brunch', 'make-ahead'],
    ingredients: [
      { group: 'Pastry', qty: 1.25, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Pastry', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pastry', qty: 8, unit: 'tbsp', item: 'unsalted butter', note: 'very cold, cubed', aisle: 'dairy' },
      { group: 'Pastry', qty: 3, unit: 'tbsp', item: 'ice water', aisle: 'none' },
      { group: 'Filling', qty: 8, unit: 'oz', item: 'thick-cut bacon', note: 'in lardons', aisle: 'meat' },
      { group: 'Filling', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Filling', qty: 1, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Filling', qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Filling', item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' },
      { group: 'Filling', qty: 4, unit: 'oz', item: 'Gruyère', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Pastry',
        text: 'Pulse the flour and salt with the cold butter until pea-sized. Add ice water until it just holds together. Press into a disc, wrap and chill for 1 hour.'
      },
      {
        title: 'Blind bake',
        text: 'Heat the oven to 375°F. Roll out the dough and line a 9-inch deep tart pan. Line with parchment, fill with pie weights, and bake for 20 minutes. Remove the weights and bake for 10 minutes more.'
      },
      {
        title: 'Bacon',
        text: 'Cook the bacon until crisp, about 8 minutes. Drain.'
      },
      {
        title: 'Custard',
        text: 'Whisk the eggs, cream, milk, salt, pepper and nutmeg.'
      },
      {
        title: 'Fill & bake',
        text: 'Lower the oven to 325°F. Scatter the bacon and Gruyère in the shell, pour in the custard, and bake for 35 minutes until just set with a slight wobble in the center.',
        tip: 'Pull it while the middle still jiggles. It sets as it cools.'
      },
      {
        title: 'Cool',
        text: 'Cool for at least 20 minutes before slicing.'
      }
    ],
    notes: [
      'Store-bought pie crust works fine. Just blind-bake it the same way.'
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
    id: 'rouladen',
    name: 'Beef Rouladen',
    nativeName: 'Rinderrouladen',
    short: 'Rouladen',
    continent: 'Europe',
    region: 'German & Austrian',
    cuisine: 'German',
    emoji: '🥩',
    description: 'Thin slices of beef spread with mustard and rolled around bacon, onion and pickle, then braised until tender in a rich, dark gravy.',
    servings: 6,
    time: { prep: 30, cook: 120 },
    heat: 0,
    tags: ['beef', 'braise', 'sunday supper'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'beef top round slices', note: '6 thin slices, about ¼ inch thick (rouladen cut)', shop: 'beef top round', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'spicy brown mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'oz', item: 'thick-cut bacon', note: '6 slices', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 3, item: 'dill pickles', note: 'quartered lengthwise', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'cornstarch', note: 'mixed with 1 tbsp water', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Fill',
        text: 'Lay out the beef slices, season, and spread with mustard. Top each with a bacon slice, some onion and a pickle spear.'
      },
      {
        title: 'Roll',
        text: 'Roll up tightly from the short end and secure with toothpicks or kitchen twine.'
      },
      {
        title: 'Brown',
        text: 'Brown the rolls in the oil in a Dutch oven for 8 minutes, turning. Set aside.'
      },
      {
        title: 'Braise',
        text: 'Cook the carrot, celery and remaining onion for 5 minutes. Add the tomato paste for 1 minute, then the wine, stock and bay leaf. Return the rolls, cover, and simmer on low for 1.5 hours.'
      },
      {
        title: 'Gravy & serve',
        text: 'Remove the rolls and twine. Strain or blend the sauce, thicken with the cornstarch slurry, and serve over the rouladen with potatoes and red cabbage.'
      }
    ],
    notes: [
      'A German butcher will slice "rouladen" for you.'
    ]
  },
  {
    id: 'german-potato-salad',
    name: 'German Potato Salad',
    nativeName: 'Kartoffelsalat',
    short: 'Potato salad',
    continent: 'Europe',
    region: 'German & Austrian',
    cuisine: 'Southern German',
    emoji: '🥔',
    description: 'Warm potatoes soaked in a tangy bacon-vinegar dressing with onions and chives. No mayo. Perfect next to sausages or schnitzel.',
    servings: 6,
    time: { prep: 15, cook: 30 },
    heat: 0,
    tags: ['side', 'potatoes', 'pork'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'Yukon Gold potatoes', aisle: 'produce' },
      { qty: 6, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'beef stock', note: 'hot', aisle: 'pantry' },
      { qty: 0.33, unit: 'cup', item: 'apple cider vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 3, unit: 'tbsp', item: 'fresh chives', note: 'snipped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Boil',
        text: 'Boil the whole potatoes in salted water for 20 minutes until just tender. Peel while warm and slice ¼ inch thick.'
      },
      {
        title: 'Bacon',
        text: 'Cook the bacon until crisp, about 8 minutes. Add the onion to the fat and cook for 4 minutes.'
      },
      {
        title: 'Dressing',
        text: 'Add the hot stock, vinegar, mustard, sugar, salt and pepper and bring to a simmer.'
      },
      {
        title: 'Toss',
        text: 'Pour the hot dressing over the warm potatoes and toss gently. Let stand for 15 minutes to soak it up.',
        tip: 'Warm potatoes absorb the dressing. Cold ones won\'t.'
      },
      {
        title: 'Serve',
        text: 'Fold in the chives and serve warm or at room temperature.'
      }
    ],
    notes: [
      'Swabian-style: skip the bacon and use a little oil for a vegetarian version.'
    ]
  },
  {
    id: 'kasespatzle',
    name: 'Käsespätzle',
    short: 'Käsespätzle',
    continent: 'Europe',
    region: 'German & Austrian',
    cuisine: 'Swabian · Alpine',
    emoji: '🧀',
    description: 'The Alpine mac and cheese: fresh egg spätzle layered with melty Emmental and Gruyère and topped with sweet, crispy fried onions.',
    servings: 4,
    time: { prep: 20, cook: 30 },
    heat: 0,
    tags: ['vegetarian', 'cheese', 'comfort'],
    ingredients: [
      { group: 'Spätzle', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Spätzle', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Spätzle', item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' },
      { group: 'Spätzle', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Spätzle', qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Topping', qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Topping', qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Topping', qty: 6, unit: 'oz', item: 'Emmental', note: 'grated', aisle: 'dairy' },
      { group: 'Topping', qty: 4, unit: 'oz', item: 'Gruyère', note: 'grated', aisle: 'dairy' },
      { group: 'Topping', qty: 2, unit: 'tbsp', item: 'fresh chives', note: 'snipped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Batter',
        text: 'Beat the flour, salt, nutmeg, eggs and milk with a wooden spoon for 2 minutes until thick, smooth and bubbly. Rest for 10 minutes.'
      },
      {
        title: 'Crispy onions',
        text: 'Melt the butter in a skillet and cook the onions over medium heat for 15 minutes until deep golden and crisp.'
      },
      {
        title: 'Cook the spätzle',
        text: 'Press the batter through a spätzle maker or a colander with large holes into simmering salted water. When they float, after about 2 minutes, scoop them out.'
      },
      {
        title: 'Layer',
        text: 'Heat the oven to 400°F. Layer the hot spätzle and cheeses in a baking dish.'
      },
      {
        title: 'Bake & serve',
        text: 'Bake for 8 minutes until the cheese melts. Top with the crispy onions and chives.'
      }
    ],
    notes: [
      'Serve with a simple green salad to cut the richness.'
    ]
  },
  {
    id: 'sauerbraten',
    name: 'Sauerbraten',
    short: 'Sauerbraten',
    continent: 'Europe',
    region: 'German & Austrian',
    cuisine: 'German · Rhineland',
    emoji: '🥩',
    description: 'Germany\'s national pot roast: beef marinated for days in spiced wine vinegar, braised until tender, with a sweet-sour gingersnap gravy.',
    servings: 6,
    time: { prep: 20, cook: 180, inactive: 4320, inactiveLabel: 'marinate' },
    heat: 0,
    tags: ['beef', 'braise', 'weekend project'],
    ingredients: [
      { group: 'Marinade', qty: 1.5, unit: 'cup', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Marinade', qty: 1.5, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { group: 'Marinade', qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Marinade', qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { group: 'Marinade', qty: 1, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { group: 'Marinade', qty: 10, item: 'juniper berries', note: 'crushed', aisle: 'spices' },
      { group: 'Marinade', qty: 6, item: 'whole cloves', aisle: 'spices' },
      { group: 'Marinade', qty: 3, item: 'bay leaves', aisle: 'spices' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'black peppercorns', aisle: 'spices' },
      { group: 'Marinade', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Roast', qty: 3.5, unit: 'lb', item: 'beef bottom round roast', note: 'or chuck', aisle: 'meat' },
      { group: 'Roast', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Roast', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Roast', qty: 0.5, unit: 'cup', item: 'gingersnap cookies', note: 'crushed', aisle: 'pantry' },
      { group: 'Roast', qty: 0.25, unit: 'cup', item: 'golden raisins', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Bring all the marinade ingredients to a simmer, then cool completely. Submerge the beef in it, cover, and refrigerate for 3 days, turning once a day.',
        tip: 'Yes, 3 days. The long marinade tenderizes the beef and gives it the classic tang.'
      },
      {
        title: 'Sear',
        text: 'Remove the beef, pat dry and season with salt. Strain the marinade, keeping the liquid and vegetables. Brown the beef in the oil in a Dutch oven for 4 minutes per side.'
      },
      {
        title: 'Braise',
        text: 'Add the marinade vegetables and 2 cups of the liquid. Cover and braise in a 325°F oven for 2.5 hours until tender.'
      },
      {
        title: 'Gravy',
        text: 'Remove the beef. Strain the braising liquid, return it to the pot, and whisk in the gingersnaps. Simmer for 5 minutes until thick; add the raisins.'
      },
      {
        title: 'Serve',
        text: 'Slice the beef and serve with the gravy, red cabbage and potato dumplings or spätzle.'
      }
    ],
    notes: [
      'The gingersnaps thicken and sweeten the gravy. It\'s a traditional trick.'
    ]
  },
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
    id: 'avgolemono',
    name: 'Avgolemono Soup',
    short: 'Avgolemono',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🍋',
    description: 'Greek chicken and rice soup made silky and bright with a tempered egg-and-lemon sauce. Comforting and tangy.',
    servings: 6,
    time: { prep: 15, cook: 45 },
    heat: 0,
    tags: ['soup', 'chicken', 'comfort'],
    ingredients: [
      { qty: 8, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1.5, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { qty: 0.5, item: 'yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 1, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 0.66, unit: 'cup', item: 'medium-grain white rice', note: 'or orzo', aisle: 'pantry' },
      { qty: 3, item: 'eggs', aisle: 'dairy' },
      { qty: 2, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'fresh dill', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Poach',
        text: 'Simmer the chicken in the stock with the onion and carrot for 20 minutes. Lift out the chicken and shred it.'
      },
      {
        title: 'Rice',
        text: 'Add the rice to the broth and simmer for 15 minutes until tender.'
      },
      {
        title: 'Egg-lemon',
        text: 'Whisk the eggs with the lemon juice until frothy. Slowly whisk in 2 ladles of hot broth to temper.',
        tip: 'Add the hot broth slowly, whisking constantly, or the eggs will scramble.'
      },
      {
        title: 'Thicken',
        text: 'Off the heat, stir the egg mixture back into the pot. Warm gently for 2 minutes, without boiling, until silky.'
      },
      {
        title: 'Serve',
        text: 'Return the chicken, season with salt and pepper, and top with dill.'
      }
    ],
    notes: [
      'Reheat gently. Boiling will curdle the eggs.'
    ]
  },
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
    id: 'horiatiki',
    name: 'Greek Village Salad',
    nativeName: 'Horiatiki',
    short: 'Greek salad',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🥗',
    description: 'The real Greek salad: ripe tomatoes, cucumber, green pepper, red onion and Kalamata olives with a thick slab of feta, oregano and good olive oil. No lettuce.',
    servings: 4,
    time: { prep: 15, cook: 0 },
    heat: 0,
    tags: ['salad', 'vegetarian', 'no-cook', 'summer'],
    ingredients: [
      { qty: 4, item: 'ripe tomatoes', note: 'in wedges', shop: 'ripe tomatoes', aisle: 'produce' },
      { qty: 1, item: 'cucumber', note: 'thickly sliced', shop: 'cucumbers', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'sliced into rings', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 0.5, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'Kalamata olives', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'capers', aisle: 'pantry', optional: true },
      { qty: 7, unit: 'oz', item: 'feta', note: 'one block', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'olive oil', note: 'good extra-virgin', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Combine',
        text: 'Toss the tomatoes, cucumber, pepper and onion with the salt and vinegar in a wide bowl.'
      },
      {
        title: 'Top',
        text: 'Scatter over the olives and capers and lay the block of feta on top.'
      },
      {
        title: 'Finish',
        text: 'Sprinkle with oregano and pour the olive oil generously over everything.',
        tip: 'Serve with bread to mop up the juices at the bottom of the bowl. That\'s the best part.'
      }
    ],
    notes: [
      'Only make it with ripe summer tomatoes.'
    ]
  },
  {
    id: 'moussaka',
    name: 'Moussaka',
    short: 'Moussaka',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🍆',
    description: 'Greece\'s great baked casserole: layers of golden eggplant and potato with cinnamon-spiced lamb sauce under a thick, fluffy béchamel crown.',
    servings: 8,
    time: { prep: 45, cook: 90 },
    heat: 0,
    tags: ['lamb', 'casserole', 'dinner party', 'make-ahead'],
    ingredients: [
      { group: 'Vegetables', qty: 3, item: 'eggplants', note: 'sliced ½ inch thick', shop: 'eggplant', aisle: 'produce' },
      { group: 'Vegetables', qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'sliced ¼ inch thick', aisle: 'produce' },
      { group: 'Vegetables', qty: 0.5, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Vegetables', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Meat sauce', qty: 2, unit: 'lb', item: 'ground lamb', note: 'or beef', aisle: 'meat' },
      { group: 'Meat sauce', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Meat sauce', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Meat sauce', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Meat sauce', qty: 0.5, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { group: 'Meat sauce', qty: 14, unit: 'oz', item: 'canned crushed tomatoes', aisle: 'pantry' },
      { group: 'Meat sauce', qty: 1, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Meat sauce', qty: 0.25, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Meat sauce', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Meat sauce', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Béchamel', qty: 6, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Béchamel', qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Béchamel', qty: 3, unit: 'cup', item: 'whole milk', note: 'warm', aisle: 'dairy' },
      { group: 'Béchamel', qty: 2, item: 'eggs', note: 'yolks only', aisle: 'dairy' },
      { group: 'Béchamel', qty: 2, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated (or kefalotyri)', aisle: 'dairy' },
      { group: 'Béchamel', item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Roast the vegetables',
        text: 'Heat the oven to 425°F. Brush the eggplant and potato slices with oil, season, and roast on sheet pans for 25 minutes until golden.'
      },
      {
        title: 'Meat sauce',
        text: 'Brown the lamb with the onion for 10 minutes. Add the garlic and tomato paste for 1 minute, then the wine, tomatoes, spices and salt. Simmer for 20 minutes until thick.'
      },
      {
        title: 'Béchamel',
        text: 'Melt the butter, whisk in the flour for 1 minute, then whisk in the warm milk and simmer for 5 minutes until thick. Off the heat, whisk in the yolks, cheese and nutmeg.'
      },
      {
        title: 'Layer',
        text: 'Lower the oven to 350°F. In a 9x13 dish, layer the potatoes, half the eggplant, the meat sauce and the remaining eggplant. Spread the béchamel over the top.'
      },
      {
        title: 'Bake',
        text: 'Bake for 45 minutes until the top is deep golden. Rest for at least 30 minutes before cutting.',
        tip: 'The long rest is essential. It sets the layers so they slice cleanly.'
      }
    ],
    notes: [
      'Moussaka is even better the next day, reheated.'
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
  {
    id: 'spanakopita',
    name: 'Spanakopita',
    short: 'Spanakopita',
    continent: 'Europe',
    region: 'Greek',
    emoji: '🥬',
    description: 'Flaky, golden phyllo pie filled with spinach, feta, scallions and dill. Great warm or at room temperature, as a main or cut into party squares.',
    servings: 8,
    time: { prep: 30, cook: 50 },
    heat: 0,
    tags: ['vegetarian', 'pastry', 'party'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'fresh spinach', note: 'or 20 oz frozen, thawed and squeezed', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 6, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 12, unit: 'oz', item: 'feta', note: 'crumbled', aisle: 'dairy' },
      { qty: 3, item: 'eggs', aisle: 'dairy' },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { item: 'ground nutmeg', note: 'a pinch', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'phyllo dough', note: 'thawed', aisle: 'frozen' },
      { qty: 8, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Wilt the spinach',
        text: 'Wilt the spinach in batches in a large pot, then squeeze out as much liquid as you can and chop.',
        tip: 'Squeeze hard. Wet spinach makes soggy phyllo.'
      },
      {
        title: 'Filling',
        text: 'Cook the scallions in the oil for 3 minutes. Mix with the spinach, dill, parsley, feta, eggs, pepper and nutmeg.'
      },
      {
        title: 'Bottom layers',
        text: 'Heat the oven to 375°F. Brush a 9x13 dish with butter. Lay in 8 sheets of phyllo, brushing each with butter and letting the edges hang over.'
      },
      {
        title: 'Fill & top',
        text: 'Spread in the filling and fold the overhanging edges over. Top with 8 more buttered sheets, tucking in the edges.'
      },
      {
        title: 'Bake',
        text: 'Score the top into squares and bake for 45 minutes until deep golden. Rest for 15 minutes before cutting.'
      }
    ],
    notes: [
      'Keep the phyllo you\'re not using covered with a damp towel so it doesn\'t dry out.'
    ]
  },
  // ─────────────────────────────── Italian ────────────────────────────────
  {
    id: 'amatriciana',
    name: 'Bucatini all\'Amatriciana',
    short: 'Amatriciana',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Lazio',
    emoji: '🍝',
    description: 'Crisp guanciale, a splash of white wine, tomato and chili tossed with thick bucatini and showered with Pecorino. Rome\'s other great pasta.',
    servings: 4,
    time: { prep: 10, cook: 30 },
    heat: 1,
    tags: ['pasta', 'pork', 'weeknight'],
    ingredients: [
      { qty: 6, unit: 'oz', item: 'guanciale', note: 'or pancetta, cut into strips', aisle: 'meat' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 0.25, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 28, unit: 'oz', item: 'canned whole peeled tomatoes', note: 'San Marzano, crushed by hand', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'lb', item: 'bucatini', note: 'or spaghetti', aisle: 'pantry' },
      { qty: 2, unit: 'oz', item: 'Pecorino Romano', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Render',
        text: 'Cook the guanciale in a cold skillet over medium heat for 8 minutes until the fat renders and the edges crisp. Add the pepper flakes for 30 seconds.'
      },
      {
        title: 'Wine',
        text: 'Add the wine and let it bubble away for 1 minute.'
      },
      {
        title: 'Tomatoes',
        text: 'Add the tomatoes and salt and simmer for 15 minutes until thick.'
      },
      {
        title: 'Pasta',
        text: 'Cook the bucatini until just shy of al dente. Toss it into the sauce with a splash of pasta water for 1 minute.'
      },
      {
        title: 'Serve',
        text: 'Off the heat, toss with most of the Pecorino and serve with the rest on top.'
      }
    ],
    notes: [
      'No garlic and no onion in the traditional Amatrice recipe.'
    ]
  },
  {
    id: 'cacio-e-pepe',
    name: 'Cacio e Pepe',
    short: 'Cacio e pepe',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Roman',
    emoji: '🧀',
    description: 'Rome\'s three-ingredient wonder: spaghetti tossed with Pecorino Romano, toasted black pepper and starchy pasta water into a glossy, peppery cream.',
    servings: 4,
    time: { prep: 5, cook: 15 },
    heat: 1,
    tags: ['pasta', 'vegetarian', 'quick'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'spaghetti', note: 'or tonnarelli', aisle: 'pantry' },
      { qty: 2, unit: 'tsp', item: 'black pepper', note: 'freshly cracked, coarse', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'optional insurance', aisle: 'dairy', optional: true },
      { qty: 5, unit: 'oz', item: 'Pecorino Romano', note: 'very finely grated', aisle: 'dairy' },
      { item: 'kosher salt', note: 'for the pasta water', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Boil',
        text: 'Cook the pasta in a wide pan with less water than usual (lightly salted, since Pecorino is salty) until 1 minute short of al dente.',
        tip: 'Less water means starchier water, which is the key to the sauce.'
      },
      {
        title: 'Toast the pepper',
        text: 'Meanwhile, toast the pepper in a large dry skillet for 1 minute until fragrant. Add a ladle of pasta water (and the butter, if using).'
      },
      {
        title: 'Cheese paste',
        text: 'Mix the Pecorino with a few spoonfuls of warm (not boiling) pasta water into a thick paste.'
      },
      {
        title: 'Toss',
        text: 'Move the pasta into the skillet and toss for 1 minute. Take the pan off the heat, add the cheese paste, and toss vigorously with splashes of pasta water until creamy and glossy.'
      },
      {
        title: 'Serve',
        text: 'Serve immediately with more Pecorino and pepper.'
      }
    ],
    notes: [
      'If the cheese clumps, the pan was too hot. Let it cool for 30 seconds and add more water.'
    ]
  },
  {
    id: 'chicken-cacciatore',
    name: 'Chicken Cacciatore',
    short: 'Cacciatore',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Central Italian',
    emoji: '🍗',
    description: '"Hunter\'s-style" chicken braised with mushrooms, peppers, onions, rosemary, wine and tomatoes into a rustic sauce. Great with polenta or crusty bread.',
    servings: 4,
    time: { prep: 20, cook: 60 },
    heat: 0,
    tags: ['chicken', 'braise', 'one-pot'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', aisle: 'meat' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'sliced', aisle: 'produce' },
      { qty: 8, unit: 'oz', item: 'cremini mushrooms', note: 'quartered', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'sprig', item: 'fresh rosemary', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { qty: 28, unit: 'oz', item: 'canned whole peeled tomatoes', note: 'crushed by hand', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'Kalamata olives', note: 'optional', aisle: 'pantry', optional: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Brown the chicken',
        text: 'Season the chicken and brown skin side down in the oil in a Dutch oven for 6 minutes, then flip for 2 minutes. Set aside.'
      },
      {
        title: 'Vegetables',
        text: 'Cook the onion, pepper and mushrooms for 8 minutes until browned. Add the garlic and rosemary for 1 minute.'
      },
      {
        title: 'Wine & tomatoes',
        text: 'Add the wine and simmer for 2 minutes, then the tomatoes.'
      },
      {
        title: 'Braise',
        text: 'Return the chicken, skin side up, cover, and simmer for 35 minutes until tender. Add the olives for the last 5 minutes.'
      },
      {
        title: 'Serve',
        text: 'Remove the rosemary stems, scatter with parsley, and serve with polenta or bread.'
      }
    ],
    notes: [
      'In southern Italy it\'s made with white wine and no tomatoes, so try both.'
    ]
  },
  {
    id: 'eggplant-parmigiana',
    name: 'Eggplant Parmigiana',
    nativeName: 'Parmigiana di Melanzane',
    short: 'Eggplant parm',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Southern Italian',
    emoji: '🍆',
    description: 'Layers of fried eggplant, basil-scented tomato sauce, mozzarella and Parmigiano baked until bubbling. The southern Italian original, with no breading.',
    servings: 6,
    time: { prep: 40, cook: 70 },
    heat: 0,
    tags: ['vegetarian', 'casserole', 'make-ahead'],
    ingredients: [
      { qty: 3, item: 'eggplants', note: 'about 3 lb, sliced ⅓ inch thick', shop: 'eggplant', aisle: 'produce' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'cup', item: 'olive oil', note: 'for frying', aisle: 'pantry', staple: true },
      { qty: 3, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { qty: 56, unit: 'oz', item: 'canned whole peeled tomatoes', note: '2 large cans, crushed by hand', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'fresh basil', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'fresh mozzarella', note: 'sliced and patted dry', aisle: 'dairy' },
      { qty: 3, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Salt the eggplant',
        text: 'Layer the eggplant slices in a colander with 1 tsp salt and let drain for 30 minutes. Pat dry.'
      },
      {
        title: 'Sauce',
        text: 'Warm 2 tbsp oil and the garlic in a saucepan, add the tomatoes and the remaining salt, and simmer for 25 minutes. Tear in half the basil.'
      },
      {
        title: 'Fry',
        text: 'Fry the eggplant in batches in the remaining oil over medium-high heat for 2 minutes per side until golden. Drain on paper towels.',
        tip: 'For a lighter version, brush with oil and roast at 425°F for 20 minutes instead.'
      },
      {
        title: 'Layer',
        text: 'Heat the oven to 375°F. In a 9x13 dish, layer sauce, eggplant, mozzarella, Parmigiano and basil. Repeat three or four times, ending with sauce and Parmigiano.'
      },
      {
        title: 'Bake',
        text: 'Bake for 40 minutes until bubbling and browned. Rest for at least 20 minutes before cutting.'
      }
    ],
    notes: [
      'Even better at room temperature the next day.'
    ]
  },
  {
    id: 'minestrone',
    name: 'Minestrone',
    short: 'Minestrone',
    continent: 'Europe',
    region: 'Italian',
    emoji: '🥣',
    description: 'A thick, hearty Italian vegetable soup with beans, small pasta, greens and a Parmigiano rind simmered in for depth.',
    servings: 8,
    time: { prep: 25, cook: 50 },
    heat: 0,
    tags: ['soup', 'vegetarian', 'budget', 'make-ahead'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, item: 'zucchini', note: 'diced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'diced', aisle: 'produce' },
      { qty: 14, unit: 'oz', item: 'canned diced tomatoes', aisle: 'pantry' },
      { qty: 8, unit: 'cup', item: 'vegetable stock', aisle: 'pantry' },
      { qty: 1, item: 'Parmigiano-Reggiano rind', aisle: 'dairy', optional: true },
      { qty: 1, unit: 'can', item: 'cannellini beans', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'ditalini', note: 'or small shells', aisle: 'pantry' },
      { qty: 1, unit: 'bunch', item: 'lacinato kale or collard greens', note: 'chopped', aisle: 'produce' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated, to serve', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Soffritto',
        text: 'Heat the oil in a large pot and cook the onion, carrots and celery for 10 minutes. Add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Vegetables & broth',
        text: 'Add the zucchini, potatoes, tomatoes, stock and Parmigiano rind. Simmer for 20 minutes.'
      },
      {
        title: 'Beans & pasta',
        text: 'Add the beans, pasta and greens and simmer for 10 minutes until the pasta is tender.'
      },
      {
        title: 'Serve',
        text: 'Remove the rind, season, and serve with grated Parmigiano and a drizzle of olive oil.'
      }
    ],
    notes: [
      'Cook the pasta separately if you plan to have leftovers, so it doesn\'t get soggy.'
    ]
  },
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
    id: 'osso-buco',
    name: 'Osso Buco alla Milanese',
    short: 'Osso buco',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Milan',
    emoji: '🦴',
    description: 'Cross-cut veal shanks braised in white wine and stock until meltingly tender, finished with bright gremolata. Spoon out the marrow.',
    servings: 4,
    time: { prep: 25, cook: 150 },
    heat: 0,
    tags: ['veal', 'braise', 'dinner party'],
    ingredients: [
      { group: 'Osso buco', qty: 4, item: 'veal shanks', note: 'about 1½ inches thick, tied', aisle: 'meat' },
      { group: 'Osso buco', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Osso buco', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Osso buco', qty: 0.33, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Osso buco', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Osso buco', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Osso buco', qty: 1, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Osso buco', qty: 1, item: 'carrots', note: 'finely diced', aisle: 'produce' },
      { group: 'Osso buco', qty: 1, unit: 'stalk', item: 'celery', note: 'finely diced', aisle: 'produce' },
      { group: 'Osso buco', qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Osso buco', qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Osso buco', qty: 1, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { group: 'Osso buco', qty: 2, unit: 'cup', item: 'beef stock', note: 'or veal stock', aisle: 'pantry' },
      { group: 'Osso buco', qty: 2, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Osso buco', qty: 1, item: 'bay leaves', aisle: 'spices' },
      { group: 'Gremolata', qty: 1, item: 'lemons', note: 'zested', aisle: 'produce' },
      { group: 'Gremolata', qty: 1, item: 'garlic cloves', note: 'finely minced', aisle: 'produce' },
      { group: 'Gremolata', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'finely chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Sear',
        text: 'Season the shanks and dust with flour. Brown in the oil and butter in a Dutch oven over medium-high heat for 4 minutes per side. Set aside.'
      },
      {
        title: 'Soffritto',
        text: 'Cook the onion, carrot and celery for 8 minutes until soft. Add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Deglaze',
        text: 'Add the wine and simmer for 3 minutes, scraping up the browned bits. Add the stock, thyme and bay leaf.'
      },
      {
        title: 'Braise',
        text: 'Return the shanks in a single layer, cover, and braise in a 325°F oven for 2 hours, until the meat is falling off the bone.'
      },
      {
        title: 'Gremolata',
        text: 'Mix the lemon zest, garlic and parsley.'
      },
      {
        title: 'Serve',
        text: 'Spoon the sauce over the shanks, scatter with gremolata, and serve with saffron risotto or polenta.'
      }
    ],
    notes: [
      'Serve with small spoons for scooping out the marrow, the cook\'s treat.'
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
  {
    id: 'tiramisu',
    name: 'Tiramisù',
    short: 'Tiramisù',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Veneto',
    emoji: '☕',
    description: 'Espresso-soaked ladyfingers layered with a silky mascarpone cream and dusted with cocoa. The classic Italian pick-me-up.',
    servings: 8,
    time: { prep: 30, cook: 0, inactive: 360, inactiveLabel: 'chill' },
    heat: 0,
    tags: ['dessert', 'no-bake', 'make-ahead'],
    ingredients: [
      { qty: 4, item: 'eggs', note: 'very fresh, separated', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 16, unit: 'oz', item: 'mascarpone', note: 'cold', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'brewed espresso', note: 'cooled (or very strong coffee)', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'dark rum or Marsala', aisle: 'other', optional: true },
      { qty: 7, unit: 'oz', item: 'Savoiardi ladyfingers', note: 'about 24', aisle: 'bakery' },
      { qty: 2, unit: 'tbsp', item: 'unsweetened cocoa powder', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Yolk cream',
        text: 'Beat the yolks with the sugar until pale and thick, then beat in the mascarpone until smooth.'
      },
      {
        title: 'Fold in the whites',
        text: 'Whip the egg whites to stiff peaks and gently fold into the mascarpone mixture.'
      },
      {
        title: 'Dip',
        text: 'Mix the espresso and rum. Dip each ladyfinger very briefly, just a quick dunk on each side, and lay in a 9x9 dish.',
        tip: 'A quick dip is enough. Soaked ladyfingers collapse into mush.'
      },
      {
        title: 'Layer',
        text: 'Spread half the cream over the ladyfingers, add another layer of dipped ladyfingers, then the rest of the cream.'
      },
      {
        title: 'Chill & dust',
        text: 'Chill for at least 6 hours or overnight. Dust generously with cocoa just before serving.'
      }
    ],
    notes: [
      'Uses raw eggs. Use pasteurized eggs if serving young children, pregnant guests or anyone immunocompromised.'
    ]
  },
  {
    id: 'pesto-genovese',
    name: 'Trofie al Pesto Genovese',
    short: 'Pesto',
    continent: 'Europe',
    region: 'Italian',
    cuisine: 'Liguria',
    emoji: '🌿',
    description: 'Liguria\'s classic: bright basil pesto with pine nuts, garlic, Parmigiano and Pecorino, tossed with short twisted pasta, potatoes and green beans.',
    servings: 4,
    time: { prep: 15, cook: 20 },
    heat: 0,
    tags: ['pasta', 'vegetarian', 'summer'],
    ingredients: [
      { group: 'Pesto', qty: 3, unit: 'cup', item: 'fresh basil', note: 'packed leaves', aisle: 'produce' },
      { group: 'Pesto', qty: 0.33, unit: 'cup', item: 'pine nuts', aisle: 'pantry' },
      { group: 'Pesto', qty: 1, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Pesto', qty: 1.5, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' },
      { group: 'Pesto', qty: 0.5, unit: 'oz', item: 'Pecorino Romano', note: 'grated', aisle: 'dairy' },
      { group: 'Pesto', qty: 0.5, unit: 'cup', item: 'olive oil', note: 'mild extra-virgin', aisle: 'pantry', staple: true },
      { group: 'Pesto', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pasta', qty: 1, unit: 'lb', item: 'trofie', note: 'or trenette/linguine', aisle: 'pantry' },
      { group: 'Pasta', qty: 0.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in small cubes', aisle: 'produce' },
      { group: 'Pasta', qty: 4, unit: 'oz', item: 'green beans', note: 'cut in 1-inch pieces', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Make the pesto',
        text: 'Pound or pulse the garlic, pine nuts and salt, then add the basil and work into a paste. Stir in the cheeses and the oil.',
        tip: 'Pulse gently and keep it cool. Heat from the blades turns basil dark.'
      },
      {
        title: 'Potatoes & beans',
        text: 'Boil the potatoes in a big pot of salted water for 5 minutes.'
      },
      {
        title: 'Pasta',
        text: 'Add the pasta and green beans and cook until the pasta is al dente. Save 1 cup of pasta water.'
      },
      {
        title: 'Toss',
        text: 'Drain and toss everything with the pesto and a splash of pasta water until creamy. Serve right away.'
      }
    ],
    notes: [
      'Never cook pesto. Toss it off the heat.'
    ]
  },
  // ────────────────────────────── Portuguese ──────────────────────────────
  {
    id: 'bacalhau-a-bras',
    name: 'Bacalhau à Brás',
    short: 'Bacalhau à Brás',
    continent: 'Europe',
    region: 'Portuguese',
    cuisine: 'Lisbon',
    emoji: '🐟',
    description: 'Lisbon\'s salt cod scramble: flaked bacalhau, golden onions and crispy matchstick potatoes folded into softly set eggs with olives and parsley.',
    servings: 4,
    time: { prep: 15, cook: 25, inactive: 1440, inactiveLabel: 'soak salt cod' },
    heat: 0,
    tags: ['seafood', 'eggs', 'brunch'],
    ingredients: [
      { qty: 12, unit: 'oz', item: 'salt cod', note: 'boneless', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 4, unit: 'cup', item: 'shoestring potato sticks', aisle: 'pantry' },
      { qty: 6, item: 'eggs', aisle: 'dairy' },
      { qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'Kalamata olives', note: 'or Portuguese black olives', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the salt cod in cold water in the fridge for 24 hours, changing the water 3 or 4 times.'
      },
      {
        title: 'Flake',
        text: 'Simmer the cod in fresh water for 10 minutes, drain, and flake finely, removing any skin or bones.'
      },
      {
        title: 'Onions',
        text: 'Cook the onions and garlic in the oil over medium heat for 10 minutes until soft and golden. Add the cod and cook for 3 minutes.'
      },
      {
        title: 'Eggs & potatoes',
        text: 'Fold in the potato sticks. Beat the eggs with the pepper, pour them in, and stir gently over low heat for 2 minutes until just set and creamy.',
        tip: 'Pull it off the heat while the eggs are still glossy.'
      },
      {
        title: 'Serve',
        text: 'Scatter with parsley and olives and serve immediately.'
      }
    ],
    notes: [
      'Taste the cod before cooking. If it\'s still very salty, soak it longer.'
    ]
  },
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
  {
    id: 'frango-piri-piri',
    name: 'Piri-Piri Chicken',
    nativeName: 'Frango Piri-Piri',
    short: 'Piri-piri',
    continent: 'Europe',
    region: 'Portuguese',
    cuisine: 'Algarve · Portuguese-Mozambican',
    emoji: '🌶️',
    description: 'Spatchcocked chicken marinated in a fiery, garlicky red chili, lemon and paprika sauce, then roasted or grilled until charred. Extra sauce for dipping.',
    servings: 4,
    time: { prep: 20, cook: 45, inactive: 240, inactiveLabel: 'marinate' },
    heat: 3,
    tags: ['chicken', 'grilled', 'spicy'],
    ingredients: [
      { group: 'Piri-piri sauce', qty: 6, item: 'red Thai chilies', note: 'or bird\'s eye chilies', aisle: 'produce' },
      { group: 'Piri-piri sauce', qty: 1, item: 'red bell peppers', note: 'roasted (jarred is fine)', aisle: 'produce' },
      { group: 'Piri-piri sauce', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Piri-piri sauce', qty: 1, item: 'lemons', note: 'zested and juiced', aisle: 'produce' },
      { group: 'Piri-piri sauce', qty: 2, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Piri-piri sauce', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Piri-piri sauce', qty: 2, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Piri-piri sauce', qty: 0.33, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Piri-piri sauce', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, item: 'whole chicken', note: '4 lb, spatchcocked', aisle: 'meat' }
    ],
    steps: [
      {
        title: 'Blend the sauce',
        text: 'Blend all the sauce ingredients until smooth. Set aside ½ cup for serving.'
      },
      {
        title: 'Marinate',
        text: 'Slash the chicken legs and breasts a few times and rub the rest of the sauce all over and into the cuts. Marinate for at least 4 hours.'
      },
      {
        title: 'Roast',
        text: 'Roast skin side up at 425°F for 40 minutes until the thigh reaches 175°F. Or grill over medium heat, turning, for about 40 minutes.'
      },
      {
        title: 'Char',
        text: 'Broil for 3 minutes to char the skin.',
        tip: 'Baste with the reserved sauce only after cooking, not during, so it stays fresh and bright.'
      },
      {
        title: 'Serve',
        text: 'Rest for 10 minutes, cut into pieces, and serve with the reserved sauce, fries and salad.'
      }
    ],
    notes: [
      'Wear gloves when handling the chilies.'
    ]
  },
  // ───────────────────────────── Scandinavian ─────────────────────────────
  {
    id: 'frikadeller',
    name: 'Danish Frikadeller',
    short: 'Frikadeller',
    continent: 'Europe',
    region: 'Scandinavian',
    cuisine: 'Danish',
    emoji: '🧆',
    description: 'Denmark\'s favorite pan-fried pork meatballs: light, juicy and oval-shaped, browned in butter and served with potatoes, gravy and pickled red cabbage.',
    servings: 4,
    time: { prep: 20, cook: 25, inactive: 30, inactiveLabel: 'rest' },
    heat: 0,
    tags: ['pork', 'comfort', 'family favorite'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'ground pork', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'grated', aisle: 'produce' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 0.33, unit: 'cup', item: 'plain dry breadcrumbs', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1.5, unit: 'lb', item: 'baby red potatoes', note: 'boiled, to serve', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'pickled red cabbage', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Mix',
        text: 'Mix the pork, onion, egg, breadcrumbs, milk, salt, pepper and allspice until sticky. Rest in the fridge for 30 minutes.'
      },
      {
        title: 'Shape',
        text: 'Using a wet tablespoon, scoop and shape into ovals about 3 inches long.'
      },
      {
        title: 'Fry',
        text: 'Fry in the butter over medium heat for 5 minutes per side until browned and cooked through.'
      },
      {
        title: 'Serve',
        text: 'Serve with boiled potatoes, brown gravy made from the pan drippings, and pickled red cabbage.'
      }
    ],
    notes: [
      'Leftovers are classic on rye bread (smørrebrød) with cabbage.'
    ]
  },
  {
    id: 'lohikeitto',
    name: 'Finnish Salmon Soup',
    nativeName: 'Lohikeitto',
    short: 'Salmon soup',
    continent: 'Europe',
    region: 'Scandinavian',
    cuisine: 'Finnish',
    emoji: '🍲',
    description: 'A gentle, creamy Finnish soup of salmon, potatoes and leeks with plenty of fresh dill. Simple, cozy and ready in 30 minutes.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 0,
    tags: ['soup', 'seafood', 'salmon', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, item: 'leek', note: 'sliced', shop: 'leeks', aisle: 'produce' },
      { qty: 1, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'cubed', aisle: 'produce' },
      { qty: 4, unit: 'cup', item: 'seafood stock', note: 'or vegetable stock', aisle: 'pantry' },
      { qty: 4, item: 'allspice berries', aisle: 'spices' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'skinless salmon fillet', note: 'in 1-inch cubes', aisle: 'seafood' },
      { qty: 1, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 0.33, unit: 'cup', item: 'fresh dill', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soften',
        text: 'Melt the butter and cook the leek and carrot for 5 minutes.'
      },
      {
        title: 'Potatoes',
        text: 'Add the potatoes, stock, allspice and bay leaf and simmer for 15 minutes until tender.'
      },
      {
        title: 'Salmon',
        text: 'Add the salmon and cream and simmer very gently for 5 minutes until the fish is just opaque.',
        tip: 'Keep it at a bare simmer so the salmon stays tender.'
      },
      {
        title: 'Serve',
        text: 'Season with salt and pepper, stir in the dill, and serve with rye bread and butter.'
      }
    ],
    notes: [
      'Fish out the allspice berries and bay leaf before serving.'
    ]
  },
  {
    id: 'gravlax',
    name: 'Gravlax with Mustard-Dill Sauce',
    nativeName: 'Gravlax med Hovmästarsås',
    short: 'Gravlax',
    continent: 'Europe',
    region: 'Scandinavian',
    cuisine: 'Swedish',
    emoji: '🐟',
    description: 'Silky salt-and-sugar-cured salmon with lots of fresh dill, sliced paper-thin and served with a sweet mustard-dill sauce on dark rye.',
    servings: 8,
    time: { prep: 20, cook: 0, inactive: 2880, inactiveLabel: 'cure' },
    heat: 0,
    tags: ['seafood', 'salmon', 'no-cook', 'make-ahead'],
    ingredients: [
      { group: 'Gravlax', qty: 2, unit: 'lb', item: 'skin-on salmon fillet', note: 'sushi-grade, center cut', aisle: 'seafood' },
      { group: 'Gravlax', qty: 0.33, unit: 'cup', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Gravlax', qty: 0.33, unit: 'cup', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Gravlax', qty: 1, unit: 'tbsp', item: 'black peppercorns', note: 'crushed', aisle: 'spices' },
      { group: 'Gravlax', qty: 1, unit: 'cup', item: 'fresh dill', note: 'chopped (about 1 bunch), plus more for the sauce', aisle: 'produce' },
      { group: 'Gravlax', qty: 2, unit: 'tbsp', item: 'aquavit or vodka', aisle: 'other', optional: true },
      { group: 'Sauce', qty: 3, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'honey', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'red wine vinegar', note: 'or white wine vinegar', aisle: 'pantry' },
      { group: 'Sauce', qty: 0.33, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 1, unit: 'loaf', item: 'dark rye bread', aisle: 'bakery' },
      { group: 'To serve', qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Cure',
        text: 'Mix the salt, sugar and pepper. Cut the salmon in half crosswise. Rub the cure all over the flesh, pack the dill on top, drizzle with aquavit, and sandwich the halves together, skin sides out.'
      },
      {
        title: 'Press',
        text: 'Wrap tightly in plastic, set in a dish, and weigh down with a few cans. Refrigerate for 48 hours, flipping every 12 hours.',
        tip: 'Liquid will collect in the dish. That\'s the cure working.'
      },
      {
        title: 'Sauce',
        text: 'Whisk the mustard, honey and vinegar, then slowly whisk in the oil. Stir in 2 tbsp chopped dill.'
      },
      {
        title: 'Slice',
        text: 'Scrape off the cure and dill, pat dry, and slice paper-thin on an angle, away from the skin.'
      },
      {
        title: 'Serve',
        text: 'Serve on rye bread with the sauce and lemon.'
      }
    ],
    notes: [
      'Keeps for 5 days refrigerated once cured.'
    ]
  },
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
    id: 'fabada-asturiana',
    name: 'Fabada Asturiana',
    short: 'Fabada',
    continent: 'Europe',
    region: 'Spanish',
    cuisine: 'Asturias',
    emoji: '🫘',
    description: 'A rich, smoky stew of buttery white beans slowly simmered with chorizo, morcilla and pork belly. Northern Spain\'s winter comfort.',
    servings: 6,
    time: { prep: 15, cook: 150, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 0,
    tags: ['beans', 'pork', 'stew', 'winter'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried large white beans', note: 'fabes or butter beans', aisle: 'pantry' },
      { qty: 8, unit: 'oz', item: 'Spanish chorizo', note: 'whole links', aisle: 'meat' },
      { qty: 8, unit: 'oz', item: 'morcilla (Spanish blood sausage)', note: 'optional', aisle: 'meat', optional: true },
      { qty: 8, unit: 'oz', item: 'pork belly', note: 'in one piece', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'halved', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'saffron threads', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the beans overnight (12 hours). Drain.'
      },
      {
        title: 'Simmer',
        text: 'Put the beans, meats, onion, garlic, bay leaf, paprika and saffron in a pot. Cover with cold water by 1 inch and bring slowly to a simmer, skimming the foam.'
      },
      {
        title: 'Cook gently',
        text: 'Simmer very gently, partly covered, for 2.5 hours. Add a splash of cold water whenever it stops simmering, and shake the pot instead of stirring.',
        tip: 'Shaking instead of stirring keeps the delicate beans whole.'
      },
      {
        title: 'Serve',
        text: 'Remove the meats, slice them, and return to the pot. Season with salt and serve with crusty bread and cider.'
      }
    ],
    notes: [
      'Rest it for 30 minutes before serving; the broth thickens beautifully.'
    ]
  },
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
    id: 'gazpacho',
    name: 'Gazpacho Andaluz',
    short: 'Gazpacho',
    continent: 'Europe',
    region: 'Spanish',
    cuisine: 'Andalusian',
    emoji: '🍅',
    description: 'Andalusia\'s chilled summer soup of ripe tomatoes, cucumber, pepper, garlic, sherry vinegar and plenty of olive oil, blended silky smooth.',
    servings: 6,
    time: { prep: 20, cook: 0, inactive: 120, inactiveLabel: 'chill' },
    heat: 0,
    tags: ['soup', 'vegan', 'no-cook', 'summer'],
    ingredients: [
      { qty: 8, item: 'ripe tomatoes', note: 'about 2½ lb, cored and chopped', aisle: 'produce' },
      { qty: 1, item: 'cucumber', note: 'peeled and chopped', shop: 'cucumbers', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'chopped', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 0.25, item: 'red onion', shop: 'red onions', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { qty: 1, unit: 'slice', item: 'white sandwich bread', note: 'stale, crust removed', aisle: 'bakery' },
      { qty: 3, unit: 'tbsp', item: 'sherry vinegar', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'olive oil', note: 'extra-virgin', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Blend',
        text: 'Blend the tomatoes, cucumber, pepper, onion, garlic, bread, vinegar and salt until very smooth.'
      },
      {
        title: 'Emulsify',
        text: 'With the blender running, drizzle in the olive oil until the soup turns pale and creamy.'
      },
      {
        title: 'Strain',
        text: 'Strain through a sieve for a silky texture, if you like.'
      },
      {
        title: 'Chill',
        text: 'Chill for at least 2 hours. Taste again for salt and vinegar, since cold dulls flavor.'
      },
      {
        title: 'Serve',
        text: 'Serve in glasses or bowls, garnished with diced cucumber, pepper and a drizzle of oil.'
      }
    ],
    notes: [
      'Only make it with ripe, in-season tomatoes.'
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
  },
  {
    id: 'patatas-bravas',
    name: 'Patatas Bravas',
    short: 'Bravas',
    continent: 'Europe',
    region: 'Spanish',
    cuisine: 'Madrid tapas',
    emoji: '🥔',
    description: 'Crispy fried potato cubes with smoky, spicy salsa brava and garlicky aioli. The most popular tapa in Spain.',
    servings: 4,
    time: { prep: 15, cook: 40 },
    heat: 2,
    tags: ['vegetarian', 'potatoes', 'tapas'],
    ingredients: [
      { group: 'Potatoes', qty: 2, unit: 'lb', item: 'russet potatoes', note: 'peeled, in 1-inch cubes', aisle: 'produce' },
      { group: 'Potatoes', qty: 3, unit: 'cup', item: 'vegetable oil', note: 'or olive oil, for frying', aisle: 'pantry' },
      { group: 'Potatoes', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Brava sauce', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Brava sauce', qty: 1, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Brava sauce', qty: 2, unit: 'tsp', item: 'smoked paprika', note: 'hot pimentón if you have it', aisle: 'spices' },
      { group: 'Brava sauce', qty: 0.5, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Brava sauce', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Brava sauce', qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Brava sauce', qty: 1, unit: 'tsp', item: 'sherry vinegar', aisle: 'pantry' },
      { group: 'Aioli', qty: 0.5, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Aioli', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Aioli', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Par-boil',
        text: 'Boil the potatoes in salted water for 5 minutes. Drain and let them steam dry for 10 minutes.',
        tip: 'Par-boiling and drying is the secret to extra-crisp edges.'
      },
      {
        title: 'Brava sauce',
        text: 'Warm the oil, stir in the flour, paprika and cayenne for 30 seconds, then whisk in the stock and tomato paste. Simmer for 5 minutes and add the vinegar.'
      },
      {
        title: 'Aioli',
        text: 'Stir the mayo with the garlic and lemon juice.'
      },
      {
        title: 'Fry',
        text: 'Heat the oil to 350°F and fry the potatoes in batches for 8 minutes until deep golden and crisp. Drain and salt.'
      },
      {
        title: 'Serve',
        text: 'Pile the potatoes on a plate and spoon over brava sauce and aioli. Serve with toothpicks.'
      }
    ],
    notes: [
      'Oven option: toss par-boiled potatoes with oil and roast at 450°F for 35 minutes.'
    ]
  },
  {
    id: 'tortilla-espanola',
    name: 'Tortilla Española',
    short: 'Tortilla',
    continent: 'Europe',
    region: 'Spanish',
    emoji: '🥚',
    description: 'Spain\'s iconic thick omelet: potatoes and onions slowly poached in olive oil, folded into eggs and cooked into a golden cake with a just-set, creamy center.',
    servings: 6,
    time: { prep: 15, cook: 45 },
    heat: 0,
    tags: ['eggs', 'vegetarian', 'tapas'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'peeled, thinly sliced', aisle: 'produce' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 6, item: 'eggs', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Poach the potatoes',
        text: 'Warm the oil in a 10-inch nonstick skillet over medium-low heat. Add the potatoes, onion and 1 tsp salt and cook gently for 25 minutes, stirring now and then, until very tender but not browned.'
      },
      {
        title: 'Drain',
        text: 'Drain the potatoes in a sieve over a bowl, saving the oil.'
      },
      {
        title: 'Soak in egg',
        text: 'Beat the eggs with the remaining salt, fold in the warm potatoes, and let sit for 10 minutes.',
        tip: 'The rest lets the potatoes soak up the egg, which gives a creamier tortilla.'
      },
      {
        title: 'Cook',
        text: 'Heat 2 tbsp of the saved oil in the skillet over medium heat. Pour in the mixture, smooth it out, and cook for 5 minutes until the edges set, shaking the pan.'
      },
      {
        title: 'Flip',
        text: 'Cover with a large plate, flip the tortilla onto it, then slide it back into the pan. Cook for 3 minutes more for a soft center.'
      },
      {
        title: 'Serve',
        text: 'Serve warm or at room temperature, cut into wedges.'
      }
    ],
    notes: [
      'Save the potato-flavored oil for frying eggs or roasting vegetables.'
    ]
  }
);
