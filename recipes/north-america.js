// North America recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ──────────────────────────── Cajun & Creole ────────────────────────────
  {
    id: 'chicken-andouille-gumbo',
    name: 'Chicken & Andouille Gumbo',
    short: 'Gumbo',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Cajun · Louisiana',
    emoji: '🫕',
    description: 'A Louisiana classic built on a dark, nutty roux and the "holy trinity" of onion, celery and pepper, simmered with chicken and smoky andouille sausage and served over rice.',
    servings: 8,
    time: { prep: 30, cook: 120 },
    heat: 1,
    tags: ['chicken', 'sausage', 'stew', 'crowd-pleaser'],
    ingredients: [
      { group: 'Meat', qty: 1, unit: 'lb', item: 'andouille sausage', note: 'sliced into ¼-inch coins', aisle: 'meat' },
      { group: 'Meat', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'cut into bite-size pieces', aisle: 'meat' },
      { group: 'Meat', qty: 1, unit: 'tbsp', item: 'Cajun seasoning', aisle: 'spices' },
      { group: 'Roux', qty: 0.75, unit: 'cup', item: 'vegetable oil', aisle: 'pantry' },
      { group: 'Roux', qty: 0.75, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Trinity', qty: 1, item: 'large yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Trinity', qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Trinity', qty: 3, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { group: 'Trinity', qty: 5, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Gumbo', qty: 8, unit: 'cup', item: 'chicken stock', note: 'warmed', aisle: 'pantry' },
      { group: 'Gumbo', qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { group: 'Gumbo', qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Gumbo', qty: 3, item: 'bay leaves', aisle: 'spices' },
      { group: 'Gumbo', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Gumbo', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'uncooked', aisle: 'pantry' },
      { group: 'To serve', item: 'Louisiana hot sauce', note: 'for the table', aisle: 'pantry' },
      { group: 'To serve', item: 'filé powder', note: 'for the table', aisle: 'spices', optional: true }
    ],
    steps: [
      {
        title: 'Prep everything first',
        text: 'Dice the trinity and garlic, slice the sausage, and toss the chicken with the Cajun seasoning. Warm the stock in a saucepan. Once you start the roux you can\'t walk away.'
      },
      {
        title: 'Brown the meats',
        text: 'In a large Dutch oven over medium heat, brown the sausage for 5 minutes and set aside. Brown the chicken for 6 minutes and set aside with the sausage.'
      },
      {
        title: 'Make the roux',
        text: 'Add the oil to the pot, then whisk in the flour. Stir constantly over medium to medium-low heat for 30 minutes, until the roux is the color of dark chocolate and smells nutty.',
        tip: 'If you see black specks or smell burning, it\'s scorched. Start over, because burnt roux ruins the pot.'
      },
      {
        title: 'Add the trinity',
        text: 'Stir in the onion, bell pepper and celery (they stop the roux from darkening) and cook for 8 minutes until soft. Add the garlic for 1 minute.'
      },
      {
        title: 'Add the stock',
        text: 'Whisk in the warm stock one ladle at a time so it stays smooth. Add the thyme, cayenne, bay leaves, salt and pepper.'
      },
      {
        title: 'Simmer',
        text: 'Return the sausage and chicken, bring to a boil, then simmer uncovered for 1 hour, stirring now and then and skimming off any fat that rises.'
      },
      {
        title: 'Cook the rice',
        text: 'While the gumbo simmers, cook the rice according to the package.'
      },
      {
        title: 'Serve',
        text: 'Taste for salt and spice and remove the bay leaves. Stir in the scallions and parsley and ladle over rice. Pass the hot sauce and filé.'
      }
    ],
    notes: [
      'Gumbo is better the next day and freezes well (freeze it without the rice).',
      'Add 1 lb peeled shrimp in the last 5 minutes for a seafood version.'
    ]
  },
  {
    id: 'jambalaya',
    name: 'Chicken & Sausage Jambalaya',
    short: 'Jambalaya',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Creole · New Orleans',
    emoji: '🥘',
    description: 'New Orleans red jambalaya: smoky andouille, chicken and shrimp cooked right into tomato-rich, trinity-spiked rice. A one-pot party.',
    servings: 8,
    time: { prep: 25, cook: 60 },
    heat: 2,
    tags: ['one-pot', 'rice', 'sausage', 'crowd-pleaser'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'andouille sausage', note: 'sliced into ¼-inch coins', aisle: 'meat' },
      { qty: 1.5, unit: 'lb', item: 'boneless skinless chicken thighs', note: 'cut into bite-size pieces', aisle: 'meat' },
      { qty: 4, unit: 'tsp', item: 'Cajun seasoning', note: 'divided', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'large yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 3, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 14, unit: 'oz', item: 'canned diced tomatoes', note: '1 can, with juice', aisle: 'pantry' },
      { qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { qty: 1, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { item: 'Louisiana hot sauce', note: 'for the table', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brown the meats',
        text: 'In a large Dutch oven over medium-high heat, brown the sausage in the oil for 5 minutes and set aside. Toss the chicken with 1 tbsp Cajun seasoning, brown it for 6 minutes, and set aside with the sausage.'
      },
      {
        title: 'Cook the trinity',
        text: 'Cook the onion, bell pepper and celery in the fat for 8 minutes until soft. Add the garlic for 1 minute, then the tomato paste for 1 minute more.'
      },
      {
        title: 'Build the liquid',
        text: 'Add the tomatoes, stock, thyme, bay leaves, cayenne, salt and the remaining 1 tsp Cajun seasoning. Bring to a boil and taste. It should be well seasoned.'
      },
      {
        title: 'Cook the rice',
        text: 'Stir in the rice, sausage and chicken. Cover and simmer on low for 20 minutes without stirring.',
        tip: 'Stirring releases starch and makes jambalaya gummy, so leave the lid on.'
      },
      {
        title: 'Add the shrimp',
        text: 'Scatter the shrimp over the top, cover again, and cook for 8 minutes until the shrimp are pink and the rice is tender.'
      },
      {
        title: 'Rest & serve',
        text: 'Take the pot off the heat and let it rest, covered, for 10 minutes. Fluff, remove the bay leaves, and finish with scallions, parsley and hot sauce.'
      }
    ],
    notes: [
      'Cajun (country) jambalaya skips the tomatoes and gets its brown color from well-browned meat.'
    ]
  },
  {
    id: 'red-beans-and-rice',
    name: 'Red Beans & Rice',
    short: 'Red beans',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Creole · New Orleans',
    emoji: '🫘',
    description: 'The New Orleans Monday tradition: kidney beans simmered for hours with smoked ham hock, andouille and the trinity until creamy, served over fluffy rice.',
    servings: 8,
    time: { prep: 20, cook: 180, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 1,
    tags: ['beans', 'sausage', 'budget', 'make-ahead'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried red kidney beans', aisle: 'pantry' },
      { qty: 1, unit: 'lb', item: 'andouille sausage', note: 'sliced into ½-inch coins', aisle: 'meat' },
      { qty: 1, item: 'smoked ham hock', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 3, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 5, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Cajun seasoning', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { qty: 8, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', note: 'or to taste', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { item: 'Louisiana hot sauce', note: 'for the table', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak the beans',
        text: 'Cover the beans with plenty of cold water and soak for 12 hours or overnight. Drain.'
      },
      {
        title: 'Brown the sausage',
        text: 'Brown the sausage in the oil in a large Dutch oven over medium heat for 5 minutes. Set aside.'
      },
      {
        title: 'Cook the trinity',
        text: 'Cook the onion, bell pepper and celery in the fat for 8 minutes until soft. Add the garlic and cook for 1 minute.'
      },
      {
        title: 'Simmer the beans',
        text: 'Add the beans, ham hock, water, thyme, bay leaves, Cajun seasoning and cayenne. Bring to a boil, then simmer partly covered for 2 hours, stirring now and then, until the beans are very tender.'
      },
      {
        title: 'Make it creamy',
        text: 'Mash about a quarter of the beans against the side of the pot. Pull the meat off the ham hock, chop it, and return it with the sausage. Simmer uncovered for 30 minutes until thick and creamy.',
        tip: 'Don\'t salt until the end. The ham hock adds a lot.'
      },
      {
        title: 'Cook the rice',
        text: 'Cook the rice while the beans finish.'
      },
      {
        title: 'Serve',
        text: 'Season the beans with salt, remove the bay leaves, and ladle over rice with scallions and hot sauce.'
      }
    ],
    notes: [
      'Like most bean dishes, even better the next day. Freezes well.'
    ]
  },
  // ─────────────────────────── Central American ───────────────────────────
  {
    id: 'pupusas',
    name: 'Bean & Cheese Pupusas',
    nativeName: 'Pupusas de Frijol con Queso',
    short: 'Pupusas',
    continent: 'North America',
    region: 'Central American',
    cuisine: 'Salvadoran',
    emoji: '🫓',
    description: 'El Salvador\'s national dish: thick masa griddle cakes stuffed with refried beans and melty cheese, served with tangy curtido slaw and a simple tomato salsa.',
    servings: 4,
    time: { prep: 40, cook: 30, inactive: 60, inactiveLabel: 'curtido' },
    heat: 0,
    tags: ['vegetarian', 'griddle', 'street food'],
    ingredients: [
      { group: 'Curtido', qty: 0.5, unit: 'head', item: 'green cabbage', note: 'finely shredded', aisle: 'produce' },
      { group: 'Curtido', qty: 1, item: 'large carrot', note: 'grated', shop: 'carrots', aisle: 'produce' },
      { group: 'Curtido', qty: 0.5, item: 'white onion', note: 'thinly sliced', shop: 'white onions', aisle: 'produce' },
      { group: 'Curtido', qty: 1, item: 'jalapeños', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Curtido', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Curtido', qty: 0.5, unit: 'cup', item: 'apple cider vinegar', aisle: 'pantry' },
      { group: 'Curtido', qty: 0.5, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Curtido', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Curtido', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Salsa roja', qty: 2, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Salsa roja', qty: 0.25, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Salsa roja', qty: 1, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Salsa roja', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Salsa roja', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Pupusas', qty: 2, unit: 'cup', item: 'masa harina', aisle: 'international' },
      { group: 'Pupusas', qty: 1.75, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Pupusas', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pupusas', qty: 1, unit: 'can', item: 'refried beans', note: '16 oz', aisle: 'pantry' },
      { group: 'Pupusas', qty: 8, unit: 'oz', item: 'Oaxaca cheese', note: 'shredded (or mozzarella)', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Make the curtido',
        text: 'Pour boiling water over the cabbage, let it sit for 1 minute, then drain well. Toss with the carrot, onion, jalapeño, oregano, vinegar, water, salt and sugar. Refrigerate for at least 1 hour; overnight is best.'
      },
      {
        title: 'Make the salsa',
        text: 'Blend the tomatoes, onion, garlic and salt until smooth. Simmer in the oil in a small saucepan for 10 minutes until slightly thickened.'
      },
      {
        title: 'Mix the dough',
        text: 'Stir the salt into the masa harina, then mix in the warm water and knead until smooth and soft like play dough, with no cracks at the edges. Cover and rest for 10 minutes.'
      },
      {
        title: 'Make the filling',
        text: 'Mash the refried beans and cheese together into a thick paste.'
      },
      {
        title: 'Shape',
        text: 'With oiled hands, take a ⅓-cup ball of dough and press it into a cup. Add 1½ tbsp filling, close the dough around it, and gently pat into a 4-inch disc about ¼ inch thick.',
        tip: 'Small cracks are fine. Pinch them closed so the filling doesn\'t leak.'
      },
      {
        title: 'Griddle',
        text: 'Cook on a dry cast-iron skillet or comal over medium-high heat for 4 minutes per side until spotted brown and the cheese starts to ooze.'
      },
      {
        title: 'Serve',
        text: 'Serve hot, with a big pile of curtido and spoonfuls of salsa. They\'re traditionally eaten by hand.'
      }
    ],
    notes: [
      'Pupusas revueltas add finely chopped chicharrón (or cooked ground pork) to the bean and cheese filling.'
    ]
  },
  // ────────────────────── Chesapeake & Mid-Atlantic ───────────────────────
  {
    id: 'maryland-crab-cakes',
    name: 'Maryland Crab Cakes',
    short: 'Crab cakes',
    continent: 'North America',
    region: 'Chesapeake & Mid-Atlantic',
    cuisine: 'Maryland',
    emoji: '🦀',
    description: 'All crab, barely any filler: sweet jumbo lump crab bound with a little mayo, mustard and Old Bay, then pan-fried in butter until deeply golden.',
    servings: 4,
    time: { prep: 20, cook: 15, inactive: 30, inactiveLabel: 'chill' },
    heat: 0,
    tags: ['seafood', 'crab', 'classic'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'jumbo lump crab meat', note: 'picked over for shell', aisle: 'seafood' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 3, unit: 'tbsp', item: 'mayonnaise', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 1.5, unit: 'tsp', item: 'Old Bay seasoning', aisle: 'spices' },
      { qty: 0.5, item: 'lemon', note: 'juiced, plus wedges to serve', shop: 'lemons', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'finely chopped', aisle: 'produce' },
      { qty: 10, item: 'saltine crackers', note: 'finely crushed', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { item: 'tartar sauce', note: 'to serve', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Mix the binder',
        text: 'Whisk the egg, mayonnaise, mustard, Worcestershire, Old Bay, lemon juice and parsley in a large bowl.'
      },
      {
        title: 'Fold in the crab',
        text: 'Stir in the cracker crumbs, then gently fold in the crab with a spatula, keeping the lumps as whole as possible.',
        tip: 'Fold, don\'t stir. Big lumps of crab are the whole point.'
      },
      {
        title: 'Shape & chill',
        text: 'Gently shape into 8 cakes about 1 inch thick. Chill on a plate for 30 minutes so they hold together in the pan.'
      },
      {
        title: 'Pan-fry',
        text: 'Heat the butter and oil in a large skillet over medium-high heat. Cook the crab cakes for 4 minutes per side until deep golden and hot through.'
      },
      {
        title: 'Serve',
        text: 'Serve right away with lemon wedges and tartar sauce.'
      }
    ],
    notes: [
      'To broil instead: set the cakes on a greased sheet pan and broil about 10 minutes, without flipping, until golden.'
    ]
  },
  {
    id: 'philly-cheesesteak',
    name: 'Philly Cheesesteak',
    short: 'Cheesesteak',
    continent: 'North America',
    region: 'Chesapeake & Mid-Atlantic',
    cuisine: 'Philadelphia',
    emoji: '🥪',
    description: 'Paper-thin ribeye seared on a hot griddle with sweet, soft onions, blanketed in melted provolone and scooped into a soft hoagie roll.',
    servings: 4,
    time: { prep: 15, cook: 20, inactive: 30, inactiveLabel: 'freeze beef' },
    heat: 0,
    tags: ['beef', 'sandwich', 'game day'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'beef ribeye', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', note: 'divided', aisle: 'pantry', staple: true },
      { qty: 1, item: 'large yellow onion', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'thinly sliced (not traditional)', shop: 'green bell peppers', aisle: 'produce', optional: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 8, unit: 'slice', item: 'provolone', note: 'or Cheez Whiz, warmed', aisle: 'dairy' },
      { qty: 4, item: 'hoagie rolls', note: 'soft, Amoroso-style if you can find them', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Slice the steak',
        text: 'Freeze the steak for 30 minutes, then slice it as thinly as you possibly can.'
      },
      {
        title: 'Cook the onions',
        text: 'Heat 1 tbsp oil on a griddle or large skillet over medium heat. Cook the onion (and pepper, if using) for 10 minutes until soft and golden. Push to one side.'
      },
      {
        title: 'Sear the steak',
        text: 'Turn the heat to high and add the remaining oil and the steak. Season and cook for 2 minutes, chopping it up with two spatulas, until just browned. Mix in the onions.'
      },
      {
        title: 'Melt the cheese',
        text: 'Divide into 4 long piles the size of your rolls. Lay 2 slices of provolone on each, cover with a lid or foil, and let melt for 1 minute.'
      },
      {
        title: 'Into the rolls',
        text: 'Lay an open roll face-down on each pile, slide a spatula underneath, and flip the whole thing into the roll. Eat immediately.'
      }
    ],
    notes: [
      '"Wit" means with onions; "wiz" means Cheez Whiz. Order a "wiz wit" in Philly.'
    ]
  },
  // ─────────────────────────────── Mexican ────────────────────────────────
  {
    id: 'birria-tacos',
    name: 'Birria Tacos',
    nativeName: 'Quesabirria',
    short: 'Birria',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Jalisco',
    emoji: '🌮',
    description: 'Beef braised for hours in a brick-red adobo of toasted chilies and warm spices, tucked into cheesy, griddle-crisped tortillas and dunked in the rich consommé.',
    servings: 6,
    time: { prep: 40, cook: 210 },
    heat: 2,
    tags: ['tacos', 'beef', 'braise', 'weekend project'],
    ingredients: [
      { group: 'Adobo', qty: 6, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Adobo', qty: 4, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Adobo', qty: 3, item: 'dried árbol chilies', note: 'for heat', aisle: 'international', optional: true },
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
  {
    id: 'enchiladas-verdes',
    name: 'Chicken Enchiladas Verdes',
    short: 'Enchiladas',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Central Mexico',
    emoji: '🫔',
    description: 'Corn tortillas rolled around shredded chicken and cheese, smothered in a bright, tangy charred-tomatillo salsa verde and baked until bubbling.',
    servings: 6,
    time: { prep: 25, cook: 50 },
    heat: 1,
    tags: ['chicken', 'casserole', 'make-ahead'],
    ingredients: [
      { group: 'Chicken', qty: 1.5, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { group: 'Salsa verde', qty: 1.5, unit: 'lb', item: 'tomatillos', note: 'husked and rinsed', aisle: 'produce' },
      { group: 'Salsa verde', qty: 2, item: 'serrano chilies', aisle: 'produce' },
      { group: 'Salsa verde', qty: 0.5, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Salsa verde', qty: 3, item: 'garlic cloves', note: 'unpeeled', aisle: 'produce' },
      { group: 'Salsa verde', qty: 1, unit: 'cup', item: 'cilantro', note: 'leaves and stems, plus more to serve', aisle: 'produce' },
      { group: 'Salsa verde', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Salsa verde', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Salsa verde', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Enchiladas', qty: 8, unit: 'oz', item: 'Monterey Jack', note: 'shredded, divided', aisle: 'dairy' },
      { group: 'Enchiladas', qty: 12, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Enchiladas', qty: 0.33, unit: 'cup', item: 'vegetable oil', note: 'for softening tortillas', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'Mexican crema', note: 'or sour cream', aisle: 'dairy' },
      { group: 'To serve', qty: 2, unit: 'oz', item: 'queso fresco', note: 'crumbled', aisle: 'dairy' },
      { group: 'To serve', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Cover the chicken with salted water, bring to a simmer, and cook gently for 15 minutes until cooked through. Cool slightly, then shred.'
      },
      {
        title: 'Char the salsa vegetables',
        text: 'Broil the tomatillos, serranos, onion and garlic on a sheet pan for 8 minutes, turning once, until blackened in spots and the tomatillos are soft. Peel the garlic.'
      },
      {
        title: 'Blend & fry the salsa',
        text: 'Blend the charred vegetables with the cilantro and salt until smooth. Heat 1 tbsp oil in a saucepan over medium-high, pour in the salsa (it will splatter), and simmer for 5 minutes. Add the stock and simmer for 5 minutes more.'
      },
      {
        title: 'Fill',
        text: 'Heat the oven to 375°F. Toss the chicken with 1 cup of salsa and half the cheese.'
      },
      {
        title: 'Roll',
        text: 'Dip each tortilla in hot oil for a few seconds per side to soften. Fill with the chicken, roll up, and lay seam side down in a 9x13 dish with a thin layer of salsa on the bottom.',
        tip: 'Softening the tortillas in oil keeps them from cracking or turning to mush.'
      },
      {
        title: 'Bake',
        text: 'Pour over the remaining salsa, top with the rest of the cheese, and bake for 20 minutes until bubbling.'
      },
      {
        title: 'Serve',
        text: 'Top with crema, queso fresco, onion, avocado and cilantro.'
      }
    ],
    notes: [
      'Rotisserie chicken works great. You need about 3 cups shredded.'
    ]
  },
  {
    id: 'carnitas',
    name: 'Pork Carnitas',
    short: 'Carnitas',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Michoacán',
    emoji: '🐷',
    description: 'Pork shoulder slowly braised with orange, garlic and oregano until meltingly tender, then crisped under the broiler in its own fat. Juicy inside, crackly outside.',
    servings: 6,
    time: { prep: 20, cook: 200 },
    heat: 0,
    tags: ['pork', 'tacos', 'braise', 'make-ahead'],
    ingredients: [
      { group: 'Carnitas', qty: 4, unit: 'lb', item: 'boneless pork shoulder', note: 'cut into 2-inch chunks', aisle: 'meat' },
      { group: 'Carnitas', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Carnitas', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Carnitas', qty: 2, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Carnitas', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Carnitas', qty: 1, item: 'orange', note: 'halved', shop: 'oranges', aisle: 'produce' },
      { group: 'Carnitas', qty: 1, item: 'white onion', note: 'halved', shop: 'white onions', aisle: 'produce' },
      { group: 'Carnitas', qty: 6, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { group: 'Carnitas', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Carnitas', qty: 0.25, unit: 'cup', item: 'lard', note: 'or vegetable oil', aisle: 'meat' },
      { group: 'Carnitas', qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Tacos', qty: 18, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Tacos', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Tacos', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Tacos', qty: 1, unit: 'cup', item: 'salsa verde', aisle: 'international' },
      { group: 'Tacos', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Tacos', qty: 1, unit: 'bunch', item: 'radishes', note: 'thinly sliced', aisle: 'produce', optional: true }
    ],
    steps: [
      {
        title: 'Season the pork',
        text: 'Heat the oven to 300°F. Toss the pork with the salt, cumin, oregano and pepper.'
      },
      {
        title: 'Load the pot',
        text: 'Pack the pork into a Dutch oven in a snug layer. Squeeze the orange halves over it and tuck in the squeezed halves, the onion, garlic and bay leaves. Add the lard and water.'
      },
      {
        title: 'Braise',
        text: 'Bring to a simmer on the stove, then cover and transfer to the oven. Braise for 3 hours, until the pork falls apart when prodded with a fork.'
      },
      {
        title: 'Shred & save the fat',
        text: 'Lift out the pork and discard the orange, onion and bay leaves. Skim the fat from the liquid into a cup. Pull the pork into large, chunky shreds.'
      },
      {
        title: 'Crisp',
        text: 'Heat the broiler. Spread the pork on a sheet pan, drizzle with 3 tbsp of the reserved fat and a splash of braising liquid, and broil for 5 minutes until the edges crisp. Toss and broil for 3 minutes more.',
        tip: 'For the crunchiest carnitas, crisp them in batches in a hot cast-iron skillet with a spoonful of the fat instead.'
      },
      {
        title: 'Serve',
        text: 'Warm the tortillas and fill them with carnitas, chopped onion, cilantro, salsa verde, radishes and a squeeze of lime.'
      }
    ],
    notes: [
      'Store the braised (uncrisped) pork in its liquid for up to 5 days, then crisp just before serving.',
      'Also great in burritos, nachos, or over rice with black beans.'
    ]
  },
  {
    id: 'pozole-rojo',
    name: 'Pozole Rojo',
    short: 'Pozole',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Guerrero · Jalisco',
    emoji: '🍲',
    description: 'A celebratory hominy and pork stew in a brick-red guajillo broth, served with a fresh, crunchy spread of cabbage, radish, onion, oregano and lime.',
    servings: 8,
    time: { prep: 30, cook: 180 },
    heat: 2,
    tags: ['pork', 'soup', 'party', 'make-ahead'],
    ingredients: [
      { group: 'Pork', qty: 3, unit: 'lb', item: 'boneless pork shoulder', note: 'cut into 2-inch chunks', aisle: 'meat' },
      { group: 'Pork', qty: 1, item: 'white onion', note: 'halved', shop: 'white onions', aisle: 'produce' },
      { group: 'Pork', qty: 6, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { group: 'Pork', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Pork', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 12, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Chile sauce', qty: 6, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chile sauce', qty: 3, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chile sauce', qty: 2, item: 'dried árbol chilies', note: 'for heat', aisle: 'international', optional: true },
      { group: 'Chile sauce', qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Chile sauce', qty: 0.25, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Chile sauce', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chile sauce', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', note: 'plus more for the table', aisle: 'spices' },
      { group: 'Chile sauce', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Pozole', qty: 2, unit: 'can', item: 'white hominy', note: '25 oz each, drained and rinsed', aisle: 'international' },
      { group: 'Garnishes', qty: 0.5, unit: 'head', item: 'green cabbage', note: 'finely shredded', aisle: 'produce' },
      { group: 'Garnishes', qty: 1, unit: 'bunch', item: 'radishes', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Garnishes', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Garnishes', qty: 3, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Garnishes', qty: 12, item: 'tostadas', aisle: 'bakery', optional: true }
    ],
    steps: [
      {
        title: 'Simmer the pork',
        text: 'Put the pork, halved onion, garlic, bay leaves, salt and water in a large pot. Bring to a boil and skim off the foam for 10 minutes, then simmer partly covered for 2 hours until the pork is tender.'
      },
      {
        title: 'Toast & soak the chilies',
        text: 'Meanwhile, toast the chilies in a dry skillet for 30 seconds per side, then soak in hot water for 20 minutes.'
      },
      {
        title: 'Blend the sauce',
        text: 'Drain the chilies and blend them with the garlic, onion, cumin, oregano and 1½ cups of the pork broth until very smooth. Strain through a sieve.'
      },
      {
        title: 'Fry the sauce',
        text: 'Heat the oil in a skillet over medium-high heat and fry the chile sauce for 5 minutes, stirring, until it darkens and thickens.'
      },
      {
        title: 'Finish the pozole',
        text: 'Remove the onion and bay leaves from the pot and break the pork into large shreds. Stir in the chile sauce and hominy and simmer for 30 minutes. Season with salt.'
      },
      {
        title: 'Serve',
        text: 'Ladle into deep bowls and let everyone add cabbage, radish, onion, a pinch of oregano and a squeeze of lime. Pass tostadas on the side.'
      }
    ],
    notes: [
      'The broth tastes better the next day. Make the garnishes fresh.'
    ]
  },
  // ───────────────────────────── Northeastern ─────────────────────────────
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    short: 'Wings',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'Buffalo, New York',
    emoji: '🍗',
    description: 'Shatteringly crisp oven-baked wings (the baking-powder trick) tossed in classic buttery hot sauce, with blue cheese dip and cold celery.',
    servings: 4,
    time: { prep: 15, cook: 75 },
    heat: 2,
    tags: ['chicken', 'game day', 'appetizer'],
    ingredients: [
      { group: 'Wings', qty: 3, unit: 'lb', item: 'chicken wings', note: 'split into flats and drums', aisle: 'meat' },
      { group: 'Wings', qty: 1, unit: 'tbsp', item: 'baking powder', note: 'aluminum-free', aisle: 'pantry' },
      { group: 'Wings', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Buffalo sauce', qty: 0.5, unit: 'cup', item: 'cayenne pepper hot sauce', note: 'Frank\'s RedHot', aisle: 'pantry' },
      { group: 'Buffalo sauce', qty: 4, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Buffalo sauce', qty: 0.5, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Blue cheese dip', qty: 0.5, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { group: 'Blue cheese dip', qty: 0.33, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Blue cheese dip', qty: 3, unit: 'oz', item: 'blue cheese', note: 'crumbled', aisle: 'dairy' },
      { group: 'Blue cheese dip', qty: 0.25, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Blue cheese dip', qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 4, unit: 'stalk', item: 'celery', note: 'cut into sticks', aisle: 'produce' },
      { group: 'To serve', qty: 2, item: 'carrots', note: 'cut into sticks', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Dry & season',
        text: 'Pat the wings very dry. Toss with the baking powder and salt, and arrange skin side up on a rack set over a foil-lined sheet pan.',
        tip: 'For extra crunch, refrigerate them uncovered on the rack overnight first.'
      },
      {
        title: 'Low bake',
        text: 'Bake on the lower-middle rack at 250°F for 30 minutes to render the fat.'
      },
      {
        title: 'High bake',
        text: 'Raise the oven to 425°F and bake for 45 minutes more, until deep golden and crackly.'
      },
      {
        title: 'Make the dip',
        text: 'While the wings bake, stir together the sour cream, mayo, blue cheese, lemon juice and pepper.'
      },
      {
        title: 'Make the sauce',
        text: 'Melt the butter with the hot sauce and garlic powder over low heat, whisking until smooth.'
      },
      {
        title: 'Toss & serve',
        text: 'Toss the hot wings in the sauce in a big bowl. Serve with celery, carrots and blue cheese dip.'
      }
    ],
    notes: [
      'Like them hotter? Add a few dashes of a habanero sauce to the butter.'
    ]
  },
  {
    id: 'lobster-rolls',
    name: 'Maine Lobster Rolls',
    short: 'Lobster rolls',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'Maine',
    emoji: '🦞',
    description: 'Big chunks of sweet lobster lightly dressed with mayo, lemon and chives, piled into butter-toasted split-top buns. Summer on the coast in a sandwich.',
    servings: 4,
    time: { prep: 20, cook: 5 },
    heat: 0,
    tags: ['seafood', 'sandwich', 'summer'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'cooked lobster meat', note: 'from about 4 (1¼-lb) lobsters', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'mayonnaise', aisle: 'pantry' },
      { qty: 1, unit: 'stalk', item: 'celery', note: 'very finely diced', aisle: 'produce' },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'fresh chives', note: 'snipped', aisle: 'produce' },
      { qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 4, item: 'New England split-top hot dog buns', aisle: 'bakery' },
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', note: 'softened', aisle: 'dairy' },
      { item: 'potato chips', note: 'to serve', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Prep the lobster',
        text: 'Cut the lobster into ¾-inch chunks, keeping the claws whole if you can.'
      },
      {
        title: 'Dress it lightly',
        text: 'Mix the mayonnaise, celery, lemon juice, chives, salt and pepper. Gently fold in the lobster. Chill while you toast the buns.',
        tip: 'Go easy on the mayo. The lobster should be dressed, not drowned.'
      },
      {
        title: 'Toast the buns',
        text: 'Spread butter on the flat outer sides of the buns. Toast in a skillet over medium heat for 2 minutes per side until golden.'
      },
      {
        title: 'Fill & serve',
        text: 'Pile the lobster into the warm buns and serve with chips.'
      }
    ],
    notes: [
      'Connecticut style: skip the mayo and toss warm lobster with 4 tbsp melted butter instead.'
    ]
  },
  {
    id: 'new-england-clam-chowder',
    name: 'New England Clam Chowder',
    short: 'Clam chowder',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'New England',
    emoji: '🥣',
    description: 'Creamy, briny chowder loaded with clams, tender potatoes and smoky bacon. Thick enough to coat a spoon without turning gluey.',
    servings: 6,
    time: { prep: 20, cook: 40 },
    heat: 0,
    tags: ['soup', 'seafood', 'winter'],
    ingredients: [
      { qty: 4, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 16, unit: 'oz', item: 'bottled clam juice', aisle: 'pantry' },
      { qty: 3, unit: 'can', item: 'chopped clams', note: '6.5 oz each, juice reserved', aisle: 'pantry' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'cut into ½-inch dice', aisle: 'produce' },
      { qty: 2, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'fresh chives', note: 'snipped', aisle: 'produce' },
      { item: 'oyster crackers', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Crisp the bacon',
        text: 'Cook the bacon in a Dutch oven over medium heat for 8 minutes until crisp. Scoop it out, leaving the fat.'
      },
      {
        title: 'Soften the vegetables',
        text: 'Add the butter, onion and celery and cook for 6 minutes until soft. Add the garlic and cook for 1 minute.'
      },
      {
        title: 'Make the base',
        text: 'Sprinkle in the flour and stir for 1 minute. Slowly whisk in the bottled clam juice and the juice from the canned clams until smooth.'
      },
      {
        title: 'Cook the potatoes',
        text: 'Add the potatoes, thyme and bay leaf and simmer for 15 minutes until the potatoes are tender.'
      },
      {
        title: 'Add clams & cream',
        text: 'Stir in the cream, milk and clams and heat gently for 5 minutes. Don\'t let it boil or the clams turn rubbery.'
      },
      {
        title: 'Serve',
        text: 'Remove the thyme and bay leaf, season with salt and pepper, and serve topped with bacon, chives and oyster crackers.'
      }
    ],
    notes: [
      'With fresh clams: steam 3 lb littlenecks in 2 cups water until they open, then chop the meat and use the strained broth in place of the bottled clam juice.'
    ]
  },
  // ───────────────────────── Southern & Soul Food ─────────────────────────
  {
    id: 'shrimp-and-grits',
    name: 'Shrimp & Grits',
    short: 'Shrimp & grits',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'Lowcountry',
    emoji: '🍤',
    description: 'Creamy, cheesy stone-ground grits topped with Cajun-spiced shrimp in a garlicky, lemony bacon pan sauce. Charleston brunch at its best.',
    servings: 4,
    time: { prep: 15, cook: 40 },
    heat: 1,
    tags: ['seafood', 'shrimp', 'brunch'],
    ingredients: [
      { group: 'Grits', qty: 2, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Grits', qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Grits', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Grits', qty: 1, unit: 'cup', item: 'stone-ground grits', note: 'not instant', aisle: 'pantry' },
      { group: 'Grits', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Grits', qty: 4, unit: 'oz', item: 'sharp cheddar', note: 'shredded', aisle: 'dairy' },
      { group: 'Shrimp', qty: 4, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { group: 'Shrimp', qty: 1, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { group: 'Shrimp', qty: 1, unit: 'tsp', item: 'Cajun seasoning', aisle: 'spices' },
      { group: 'Shrimp', qty: 0.5, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Shrimp', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Shrimp', qty: 0.5, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Shrimp', qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { group: 'Shrimp', qty: 1, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Shrimp', item: 'Louisiana hot sauce', note: 'a few dashes', aisle: 'pantry' },
      { group: 'Shrimp', qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Cook the grits',
        text: 'Bring the milk, water and salt to a simmer. Slowly whisk in the grits, then cook on low for 30 minutes, whisking often and adding a splash of water if they get too thick.'
      },
      {
        title: 'Crisp the bacon',
        text: 'Meanwhile, cook the bacon in a large skillet over medium heat for 8 minutes until crisp. Scoop it out, leaving the fat in the pan.'
      },
      {
        title: 'Sear the shrimp',
        text: 'Toss the shrimp with the Cajun seasoning and paprika. Cook in the bacon fat over medium-high heat for 1 minute per side until just pink. Add the garlic for 30 seconds.'
      },
      {
        title: 'Pan sauce',
        text: 'Add the stock and lemon juice, scrape up the browned bits, and simmer for 1 minute. Swirl in the butter and a few dashes of hot sauce.'
      },
      {
        title: 'Finish the grits',
        text: 'Stir the butter and cheddar into the grits until melted and creamy. Taste for salt.'
      },
      {
        title: 'Serve',
        text: 'Spoon the grits into bowls and top with the shrimp, pan sauce, bacon and scallions.'
      }
    ],
    notes: [
      'Leftover grits set firm. Slice, pan-fry and serve with eggs the next morning.'
    ]
  },
  {
    id: 'southern-fried-chicken',
    name: 'Southern Fried Chicken',
    short: 'Fried chicken',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'American South',
    emoji: '🍗',
    description: 'Buttermilk-brined chicken in a craggy, well-seasoned crust, fried low and slow until juicy inside and shatteringly crisp outside.',
    servings: 6,
    time: { prep: 20, cook: 40, inactive: 240, inactiveLabel: 'brine' },
    heat: 1,
    tags: ['chicken', 'fried', 'sunday supper'],
    ingredients: [
      { group: 'Brine', qty: 1, item: 'whole chicken', note: '3½–4 lb, cut into 10 pieces', aisle: 'meat' },
      { group: 'Brine', qty: 2, unit: 'cup', item: 'buttermilk', aisle: 'dairy' },
      { group: 'Brine', qty: 1, unit: 'tbsp', item: 'Louisiana hot sauce', aisle: 'pantry' },
      { group: 'Brine', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dredge', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 1, unit: 'tbsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Dredge', qty: 2, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Dredge', qty: 1, unit: 'tsp', item: 'onion powder', aisle: 'spices' },
      { group: 'Dredge', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 0.5, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Dredge', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Frying', qty: 6, unit: 'cup', item: 'vegetable oil', note: 'or peanut oil', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brine',
        text: 'Whisk the buttermilk, hot sauce and salt. Add the chicken, turn to coat, and refrigerate for at least 4 hours, or overnight.'
      },
      {
        title: 'Make the dredge',
        text: 'Whisk the flour, salt, spices and baking powder in a wide bowl. Drizzle in 3 tbsp of the buttermilk brine and rub it in with your fingers to make little craggy clumps.',
        tip: 'Those clumps become the extra-crunchy bits on the crust.'
      },
      {
        title: 'Coat',
        text: 'Lift each piece from the brine, let the excess drip off, and press firmly into the dredge on all sides. Rest on a rack for 10 minutes while the oil heats.'
      },
      {
        title: 'Heat the oil',
        text: 'Heat 1½ inches of oil in a large cast-iron skillet or Dutch oven to 350°F. It will drop to about 300°F when the chicken goes in; keep it there.'
      },
      {
        title: 'Fry',
        text: 'Fry in batches without crowding, turning every few minutes. Dark meat takes about 12 minutes and white meat about 10 minutes, until deep golden and 165°F inside for breasts or 175°F for thighs and legs.'
      },
      {
        title: 'Drain & serve',
        text: 'Drain on a rack set over a sheet pan, sprinkle with a pinch of salt, and keep warm in a 200°F oven while you fry the rest.'
      }
    ],
    notes: [
      'Serve with mac and cheese, collard greens, biscuits and hot honey.'
    ]
  },
  // ──────────────────────── Tex-Mex & Southwestern ────────────────────────
  {
    id: 'texas-chili',
    name: 'Texas Chili con Carne',
    short: 'Texas chili',
    continent: 'North America',
    region: 'Tex-Mex & Southwestern',
    cuisine: 'Texas',
    emoji: '🌶️',
    description: 'Bowl-of-red Texas chili, no beans: chunks of chuck braised in a deep, smoky purée of toasted dried chilies until spoon-tender.',
    servings: 6,
    time: { prep: 30, cook: 180 },
    heat: 2,
    tags: ['beef', 'stew', 'game day', 'make-ahead'],
    ingredients: [
      { group: 'Chili paste', qty: 4, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chili paste', qty: 4, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chili paste', qty: 2, item: 'chipotles in adobo', note: 'plus 1 tbsp sauce', aisle: 'international' },
      { group: 'Chili', qty: 3, unit: 'lb', item: 'beef chuck roast', note: 'cut into 1-inch cubes', aisle: 'meat' },
      { group: 'Chili', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chili', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Chili', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Chili', qty: 5, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Chili', qty: 1, unit: 'tbsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chili', qty: 2, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Chili', qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Chili', qty: 12, unit: 'oz', item: 'Mexican lager', note: '1 bottle, or more stock', aisle: 'other', optional: true },
      { group: 'Chili', qty: 1, unit: 'tsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Chili', qty: 2, unit: 'tbsp', item: 'masa harina', aisle: 'international' },
      { group: 'Chili', qty: 1, unit: 'tbsp', item: 'apple cider vinegar', aisle: 'pantry' },
      { group: 'Toppings', qty: 4, unit: 'oz', item: 'sharp cheddar', note: 'shredded', aisle: 'dairy' },
      { group: 'Toppings', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Toppings', qty: 0.5, unit: 'cup', item: 'sour cream', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Toast & soak the chilies',
        text: 'Toast the ancho and guajillo chilies in a dry skillet for 30 seconds per side until fragrant. Cover with 2 cups boiling water and soak for 20 minutes.'
      },
      {
        title: 'Blend',
        text: 'Blend the soaked chilies, the chipotles and adobo sauce, and 1 cup of the soaking liquid until completely smooth.'
      },
      {
        title: 'Brown the beef',
        text: 'Season the beef with the salt. Brown it in batches in the oil in a Dutch oven over medium-high heat, about 8 minutes per batch. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Lower the heat to medium. Cook the onion for 5 minutes, then add the garlic, cumin and oregano for 1 minute.'
      },
      {
        title: 'Braise',
        text: 'Stir in the chili purée, stock, beer and brown sugar, and return the beef. Cover and simmer on low for 2.5 hours, stirring occasionally, until the beef is very tender.'
      },
      {
        title: 'Thicken',
        text: 'Whisk the masa harina with ¼ cup water, stir it in, and simmer uncovered for 10 minutes until thick. Stir in the vinegar and adjust the salt.'
      },
      {
        title: 'Serve',
        text: 'Ladle into bowls and top with cheddar, onion and sour cream.'
      }
    ],
    notes: [
      'Want beans? Nobody in Texas has to know. Stir in 2 cans of drained pinto beans with the masa.'
    ]
  }
);
