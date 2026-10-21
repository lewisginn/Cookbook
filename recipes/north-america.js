// North America recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ──────────────────────────── Cajun & Creole ────────────────────────────
  {
    id: 'beignets',
    name: 'Beignets',
    short: 'Beignets',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Creole · New Orleans',
    emoji: '🍩',
    description: 'Café du Monde-style pillows of fried yeast dough, buried under a snowdrift of powdered sugar. Best eaten hot with café au lait.',
    servings: 6,
    time: { prep: 30, cook: 20, inactive: 120, inactiveLabel: 'rise' },
    heat: 0,
    tags: ['dessert', 'breakfast', 'fried'],
    ingredients: [
      { qty: 2.25, unit: 'tsp', item: 'active dry yeast', note: '1 packet', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'warm water', note: 'about 110°F', shop: 'water', aisle: 'none' },
      { qty: 0.25, unit: 'cup', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'evaporated milk', aisle: 'pantry' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', note: 'softened', aisle: 'dairy' },
      { qty: 6, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { qty: 1.5, unit: 'cup', item: 'powdered sugar', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Proof the yeast',
        text: 'Stir the yeast and 1 tbsp of the sugar into the warm water and let it foam for 5 minutes.'
      },
      {
        title: 'Make the dough',
        text: 'Whisk in the rest of the sugar, the evaporated milk, egg and salt. Mix in 2 cups flour, then the butter, then the remaining flour to form a soft dough. Knead for 5 minutes until smooth.'
      },
      {
        title: 'Rise',
        text: 'Place in an oiled bowl, cover, and let rise until doubled, about 2 hours (or overnight in the fridge).'
      },
      {
        title: 'Cut',
        text: 'Roll the dough ¼ inch thick and cut into 2½-inch squares. Let rest for 10 minutes while the oil heats to 350°F.'
      },
      {
        title: 'Fry',
        text: 'Fry a few at a time for 1 minute per side until puffed and golden. Drain on a rack.',
        tip: 'They should puff up within seconds. If not, the oil isn\'t hot enough.'
      },
      {
        title: 'Sugar',
        text: 'Shower generously with powdered sugar while hot and serve immediately.'
      }
    ],
    notes: [
      'Wear dark clothes. You will be covered in powdered sugar.'
    ]
  },
  {
    id: 'blackened-catfish',
    name: 'Blackened Catfish',
    short: 'Blackened catfish',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Cajun',
    emoji: '🐟',
    description: 'Fillets dipped in butter, coated in a smoky, peppery spice blend and seared in a screaming-hot cast-iron pan until a dark, flavorful crust forms.',
    servings: 4,
    time: { prep: 10, cook: 10 },
    heat: 2,
    tags: ['seafood', 'fish', 'quick', 'weeknight'],
    ingredients: [
      { group: 'Blackening spice', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'onion powder', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Blackening spice', qty: 0.5, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { group: 'Blackening spice', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Blackening spice', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Fish', qty: 1.5, unit: 'lb', item: 'catfish fillets', note: '4 fillets, or redfish/tilapia', aisle: 'seafood' },
      { group: 'Fish', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' },
      { group: 'Fish', qty: 1, item: 'lemons', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Mix the spice',
        text: 'Stir all the blackening spice ingredients together on a plate.'
      },
      {
        title: 'Heat the pan',
        text: 'Heat a cast-iron skillet over high heat for 5 minutes until smoking hot. Turn on the vent fan or open a window.',
        tip: 'This makes a lot of smoke. A grill side burner outdoors is ideal.'
      },
      {
        title: 'Coat',
        text: 'Dip each fillet in melted butter, then press into the spice mix on both sides.'
      },
      {
        title: 'Blacken',
        text: 'Cook for 2 minutes per side until the crust is very dark and the fish flakes easily.'
      },
      {
        title: 'Serve',
        text: 'Drizzle with the remaining butter and serve with lemon wedges, rice, or coleslaw.'
      }
    ],
    notes: [
      'The spice blend keeps for months. Make a big jar for chicken and shrimp too.'
    ]
  },
  {
    id: 'cajun-shrimp-boil',
    name: 'Cajun Shrimp Boil',
    short: 'Shrimp boil',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Cajun · Louisiana',
    emoji: '🌽',
    description: 'A backyard feast: shrimp, andouille, corn and potatoes boiled in spicy, lemony crab-boil water, dumped on the table and drizzled with garlic Cajun butter.',
    servings: 6,
    time: { prep: 15, cook: 40 },
    heat: 2,
    tags: ['seafood', 'party', 'summer', 'one-pot'],
    ingredients: [
      { group: 'Boil', qty: 16, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Boil', qty: 0.5, unit: 'cup', item: 'crab boil seasoning', note: 'e.g. Zatarain\'s or Old Bay', aisle: 'spices' },
      { group: 'Boil', qty: 0.25, unit: 'cup', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Boil', qty: 2, item: 'lemons', note: 'halved', aisle: 'produce' },
      { group: 'Boil', qty: 1, item: 'yellow onions', note: 'halved', aisle: 'produce' },
      { group: 'Boil', qty: 1, item: 'head of garlic', note: 'halved crosswise', shop: 'heads of garlic', aisle: 'produce' },
      { group: 'Boil', qty: 2, unit: 'lb', item: 'baby red potatoes', aisle: 'produce' },
      { group: 'Boil', qty: 4, item: 'ears of corn', note: 'halved', aisle: 'produce' },
      { group: 'Boil', qty: 1, unit: 'lb', item: 'andouille sausage', note: 'in 2-inch pieces', aisle: 'meat' },
      { group: 'Boil', qty: 3, unit: 'lb', item: 'large shrimp', note: 'shell on', aisle: 'seafood' },
      { group: 'Cajun butter', qty: 6, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Cajun butter', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Cajun butter', qty: 1, unit: 'tsp', item: 'Cajun seasoning', aisle: 'spices' },
      { group: 'Cajun butter', qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Flavor the water',
        text: 'In a very large pot, bring the water, crab boil seasoning and salt to a boil. Squeeze in the lemons and drop them in with the onion and garlic. Boil for 5 minutes.'
      },
      {
        title: 'Potatoes',
        text: 'Add the potatoes and boil for 12 minutes.'
      },
      {
        title: 'Corn & sausage',
        text: 'Add the corn and sausage and boil for 8 minutes more.'
      },
      {
        title: 'Shrimp',
        text: 'Add the shrimp, turn off the heat, cover and let steep for 5 minutes until pink.',
        tip: 'Steeping off the heat keeps the shrimp tender and lets them soak up the spice.'
      },
      {
        title: 'Cajun butter',
        text: 'Melt the butter with the garlic and Cajun seasoning for 2 minutes and stir in the parsley.'
      },
      {
        title: 'Serve',
        text: 'Drain everything and pour it out onto a newspaper-lined table. Drizzle with the Cajun butter and dig in.'
      }
    ],
    notes: [
      'In season, swap the shrimp for 10 lb live crawfish and steep for 20 minutes.'
    ]
  },
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
    id: 'muffuletta',
    name: 'Muffuletta',
    short: 'Muffuletta',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Italian-Creole · New Orleans',
    emoji: '🥪',
    description: 'The giant New Orleans sandwich: a round sesame loaf piled with salami, mortadella, ham and provolone, soaked with a tangy chopped olive salad and pressed.',
    servings: 6,
    time: { prep: 30, cook: 0, inactive: 120, inactiveLabel: 'marinate & press' },
    heat: 0,
    tags: ['sandwich', 'no-cook', 'party', 'make-ahead'],
    ingredients: [
      { group: 'Olive salad', qty: 1, unit: 'cup', item: 'green olives', note: 'pimento-stuffed', aisle: 'pantry' },
      { group: 'Olive salad', qty: 0.5, unit: 'cup', item: 'Kalamata olives', note: 'pitted', aisle: 'pantry' },
      { group: 'Olive salad', qty: 0.5, unit: 'cup', item: 'giardiniera', note: 'drained', aisle: 'pantry' },
      { group: 'Olive salad', qty: 0.25, unit: 'cup', item: 'roasted red peppers', aisle: 'pantry' },
      { group: 'Olive salad', qty: 2, unit: 'tbsp', item: 'capers', aisle: 'pantry' },
      { group: 'Olive salad', qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Olive salad', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', aisle: 'produce' },
      { group: 'Olive salad', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Olive salad', qty: 2, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Olive salad', qty: 0.5, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Sandwich', qty: 1, item: 'round sesame Italian loaf', note: 'about 10 inches', aisle: 'bakery' },
      { group: 'Sandwich', qty: 4, unit: 'oz', item: 'Genoa salami', note: 'thinly sliced', aisle: 'meat' },
      { group: 'Sandwich', qty: 4, unit: 'oz', item: 'mortadella', note: 'thinly sliced', aisle: 'meat' },
      { group: 'Sandwich', qty: 4, unit: 'oz', item: 'deli ham', note: 'thinly sliced', aisle: 'meat' },
      { group: 'Sandwich', qty: 6, unit: 'slice', item: 'provolone', aisle: 'dairy' },
      { group: 'Sandwich', qty: 4, unit: 'slice', item: 'Swiss cheese', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Make the olive salad',
        text: 'Coarsely chop (or pulse) the olives, giardiniera, peppers, capers, garlic and parsley. Stir in the oregano, vinegar and oil. Marinate for at least 1 hour, or up to a week in the fridge.'
      },
      {
        title: 'Prep the bread',
        text: 'Split the loaf horizontally and pull out a little of the soft crumb from each half.'
      },
      {
        title: 'Build',
        text: 'Spoon olive salad and plenty of its oil over both cut sides. Layer the salami, mortadella, ham, provolone and Swiss on the bottom, then close.'
      },
      {
        title: 'Press',
        text: 'Wrap tightly in plastic and press under a heavy pan or some cans for 1 hour so the oil soaks in.',
        tip: 'The rest is what makes it a muffuletta. The bread should be soaked with olive oil.'
      },
      {
        title: 'Serve',
        text: 'Cut into wedges. Serve cold, or warm in a 350°F oven for 10 minutes.'
      }
    ],
    notes: [
      'Leftover olive salad is great on pizza, pasta salad and eggs.'
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
  {
    id: 'shrimp-creole',
    name: 'Shrimp Creole',
    short: 'Shrimp Creole',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Creole · New Orleans',
    emoji: '🦐',
    description: 'A New Orleans classic: plump shrimp simmered in a spicy, tomato-rich sauce with onion, celery and bell pepper, served over rice.',
    servings: 6,
    time: { prep: 20, cook: 45 },
    heat: 2,
    tags: ['seafood', 'shrimp', 'weeknight'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 28, unit: 'oz', item: 'canned crushed tomatoes', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'seafood stock', note: 'or chicken stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 2, unit: 'tsp', item: 'Cajun seasoning', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { item: 'Louisiana hot sauce', note: 'for the table', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soften the trinity',
        text: 'Melt the butter in a large pot over medium heat and cook the onion, pepper and celery for 10 minutes until soft.'
      },
      {
        title: 'Tomato base',
        text: 'Add the garlic and tomato paste for 2 minutes, then the tomatoes, stock, Worcestershire, Cajun seasoning, thyme, bay leaves, cayenne and sugar.'
      },
      {
        title: 'Simmer',
        text: 'Simmer for 25 minutes, stirring occasionally, until thickened. Cook the rice meanwhile.'
      },
      {
        title: 'Shrimp',
        text: 'Add the shrimp and simmer for 4 minutes until pink and curled.'
      },
      {
        title: 'Serve',
        text: 'Remove the bay leaves, stir in the scallions and parsley, and serve over rice with hot sauce.'
      }
    ],
    notes: [
      'The sauce can be made 2 days ahead. Reheat and add the shrimp just before serving.'
    ]
  },
  {
    id: 'shrimp-etouffee',
    name: 'Shrimp Étouffée',
    short: 'Étouffée',
    continent: 'North America',
    region: 'Cajun & Creole',
    cuisine: 'Cajun · Louisiana',
    emoji: '🍤',
    description: 'Shrimp "smothered" in a rich, buttery blond-roux gravy with the holy trinity and Cajun spice, spooned over a mound of white rice.',
    servings: 6,
    time: { prep: 20, cook: 45 },
    heat: 2,
    tags: ['seafood', 'shrimp', 'stew'],
    ingredients: [
      { qty: 6, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 0.33, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 1, item: 'large yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { qty: 1, item: 'green bell pepper', note: 'diced', shop: 'green bell peppers', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'seafood stock', note: 'or chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'tsp', item: 'Cajun seasoning', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'dried thyme', aisle: 'spices' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { qty: 2, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { item: 'Louisiana hot sauce', note: 'to taste', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Blond roux',
        text: 'Melt the butter in a heavy pot over medium heat. Whisk in the flour and cook, stirring constantly, for 10 minutes until it\'s the color of peanut butter.'
      },
      {
        title: 'Trinity',
        text: 'Add the onion, bell pepper and celery and cook for 8 minutes until soft. Add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Build the gravy',
        text: 'Gradually whisk in the stock, then add the Cajun seasoning, thyme, bay leaf and cayenne. Simmer for 15 minutes until thick and glossy. Start the rice.'
      },
      {
        title: 'Shrimp',
        text: 'Season the shrimp with salt, add them to the pot, and simmer for 4 minutes until just pink.'
      },
      {
        title: 'Finish & serve',
        text: 'Stir in the lemon juice, scallions, parsley and hot sauce to taste. Remove the bay leaf and serve over rice.'
      }
    ],
    notes: [
      'Swap in 2 lb crawfish tails for classic crawfish étouffée.'
    ]
  },
  // ─────────────────── Californian & Pacific Northwest ────────────────────
  {
    id: 'baja-fish-tacos',
    name: 'Baja Fish Tacos',
    short: 'Fish tacos',
    continent: 'North America',
    region: 'Californian & Pacific Northwest',
    cuisine: 'Baja · SoCal',
    emoji: '🐟',
    description: 'Crispy beer-battered white fish in warm corn tortillas with crunchy cabbage, a tangy lime crema and fresh salsa. Beach food at its best.',
    servings: 4,
    time: { prep: 25, cook: 20 },
    heat: 1,
    tags: ['seafood', 'tacos', 'fried', 'summer'],
    ingredients: [
      { group: 'Crema', qty: 0.5, unit: 'cup', item: 'Mexican crema', note: 'or sour cream', aisle: 'dairy' },
      { group: 'Crema', qty: 2, unit: 'tbsp', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Crema', qty: 1, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Crema', qty: 1, item: 'chipotles in adobo', note: 'minced, optional', aisle: 'international', optional: true },
      { group: 'Fish', qty: 1.5, unit: 'lb', item: 'firm white fish fillets', note: 'cod or mahi-mahi, in finger-size strips', aisle: 'seafood' },
      { group: 'Fish', qty: 1, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Fish', qty: 1, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Fish', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Fish', qty: 0.5, unit: 'tsp', item: 'chili powder', aisle: 'spices' },
      { group: 'Fish', qty: 12, unit: 'oz', item: 'Mexican lager', note: 'cold', aisle: 'other' },
      { group: 'Fish', qty: 4, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'Tacos', qty: 12, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Tacos', qty: 0.25, unit: 'head', item: 'green cabbage', note: 'finely shredded', aisle: 'produce' },
      { group: 'Tacos', qty: 1, unit: 'cup', item: 'pico de gallo', aisle: 'produce' },
      { group: 'Tacos', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Tacos', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Lime crema',
        text: 'Stir the crema, mayo, lime juice and chipotle together.'
      },
      {
        title: 'Batter',
        text: 'Whisk the flour, baking powder, salt and chili powder, then whisk in the cold beer until just smooth.'
      },
      {
        title: 'Fry',
        text: 'Heat 2 inches of oil to 375°F. Pat the fish dry, dip in batter, and fry in batches for 3 minutes until golden and crisp. Drain and salt.',
        tip: 'Ice-cold beer makes the lightest, crispiest batter.'
      },
      {
        title: 'Warm the tortillas',
        text: 'Warm the tortillas in a dry skillet.'
      },
      {
        title: 'Assemble',
        text: 'Fill each tortilla with fish, cabbage, pico de gallo, a drizzle of crema and cilantro. Serve with lime wedges.'
      }
    ],
    notes: [
      'Lighter option: season the fish with chili powder and grill it instead of frying.'
    ]
  },
  {
    id: 'cedar-plank-salmon',
    name: 'Cedar-Plank Salmon',
    short: 'Plank salmon',
    continent: 'North America',
    region: 'Californian & Pacific Northwest',
    cuisine: 'Pacific Northwest',
    emoji: '🍣',
    description: 'A Pacific Northwest tradition: salmon glazed with brown sugar, Dijon and soy, roasted on a smoldering cedar plank so it picks up gentle, woodsy smoke.',
    servings: 4,
    time: { prep: 10, cook: 20, inactive: 60, inactiveLabel: 'soak plank' },
    heat: 0,
    tags: ['seafood', 'salmon', 'grilled', 'summer'],
    ingredients: [
      { qty: 1, item: 'untreated cedar plank', note: 'about 15 inches', aisle: 'other' },
      { qty: 2, unit: 'lb', item: 'skin-on salmon fillet', note: 'one piece', aisle: 'seafood' },
      { qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 0.5, item: 'lemon', note: 'zested, plus wedges', shop: 'lemons', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'fresh dill', note: 'chopped', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soak the plank',
        text: 'Submerge the cedar plank in water for at least 1 hour, weighing it down so it stays under.'
      },
      {
        title: 'Glaze',
        text: 'Stir together the brown sugar, mustard, soy sauce, oil, garlic and lemon zest.'
      },
      {
        title: 'Heat the plank',
        text: 'Heat the grill to medium-high. Place the plank on the grates for 3 minutes until it starts to crackle and smoke.'
      },
      {
        title: 'Grill',
        text: 'Season the salmon with salt and pepper and lay it skin side down on the plank. Brush with the glaze, close the lid, and cook for 15 minutes until it flakes easily.',
        tip: 'Keep a spray bottle of water nearby in case the plank\'s edges catch fire.'
      },
      {
        title: 'Serve',
        text: 'Scatter with dill and serve right on the plank with lemon wedges.'
      }
    ],
    notes: [
      'Oven option: bake the soaked plank with the salmon at 400°F for 18 minutes.'
    ]
  },
  {
    id: 'cioppino',
    name: 'San Francisco Cioppino',
    short: 'Cioppino',
    continent: 'North America',
    region: 'Californian & Pacific Northwest',
    cuisine: 'San Francisco',
    emoji: '🦀',
    description: 'San Francisco\'s fisherman\'s stew: clams, mussels, shrimp, crab and white fish simmered in a garlicky tomato and white wine broth. Serve with sourdough.',
    servings: 6,
    time: { prep: 25, cook: 45 },
    heat: 1,
    tags: ['seafood', 'stew', 'dinner party'],
    ingredients: [
      { qty: 3, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'fennel bulb', note: 'diced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1.5, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 28, unit: 'oz', item: 'canned crushed tomatoes', aisle: 'pantry' },
      { qty: 3, unit: 'cup', item: 'seafood stock', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'littleneck clams', note: 'scrubbed', aisle: 'seafood' },
      { qty: 1, unit: 'lb', item: 'mussels', note: 'scrubbed and debearded', aisle: 'seafood' },
      { qty: 1, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 1, unit: 'lb', item: 'firm white fish fillets', note: 'halibut or cod, in chunks', aisle: 'seafood' },
      { qty: 1, unit: 'lb', item: 'crab legs', note: 'cooked Dungeness, cracked (optional)', aisle: 'seafood', optional: true },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'fresh basil', note: 'torn', aisle: 'produce' },
      { qty: 1, unit: 'loaf', item: 'sourdough bread', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Aromatics',
        text: 'Heat the oil in a large pot over medium heat and cook the onion and fennel for 8 minutes. Add the garlic and pepper flakes for 1 minute, then the tomato paste for 1 minute.'
      },
      {
        title: 'Broth',
        text: 'Add the wine and simmer for 3 minutes. Add the tomatoes, stock, oregano and bay leaves and simmer for 20 minutes.'
      },
      {
        title: 'Shellfish',
        text: 'Add the clams and mussels, cover, and cook for 5 minutes until they start to open.'
      },
      {
        title: 'Fish & shrimp',
        text: 'Add the shrimp, fish and crab, cover, and simmer for 4 minutes until the shrimp are pink and all the shells have opened. Discard any that stay closed.'
      },
      {
        title: 'Serve',
        text: 'Stir in the parsley and basil and ladle into big bowls with sourdough for dunking.'
      }
    ],
    notes: [
      'Set out a bowl for shells and plenty of napkins.'
    ]
  },
  // ─────────────────────────── Central American ───────────────────────────
  {
    id: 'baleadas',
    name: 'Baleadas',
    short: 'Baleadas',
    continent: 'North America',
    region: 'Central American',
    cuisine: 'Honduran',
    emoji: '🫓',
    description: 'Honduras\' favorite street food: thick, soft homemade flour tortillas folded around creamy refried beans, crumbled cheese and tangy crema.',
    servings: 4,
    time: { prep: 30, cook: 20, inactive: 30, inactiveLabel: 'rest dough' },
    heat: 0,
    tags: ['vegetarian', 'breakfast', 'street food'],
    ingredients: [
      { group: 'Tortillas', qty: 2.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Tortillas', qty: 1.5, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Tortillas', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tortillas', qty: 0.25, unit: 'cup', item: 'vegetable shortening', note: 'or lard', aisle: 'pantry' },
      { group: 'Tortillas', qty: 0.75, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Filling', qty: 1, unit: 'can', item: 'refried red beans', note: '16 oz, blended smooth', aisle: 'pantry' },
      { group: 'Filling', qty: 4, unit: 'oz', item: 'queso fresco', note: 'or queso duro, crumbled', aisle: 'dairy' },
      { group: 'Filling', qty: 0.5, unit: 'cup', item: 'Mexican crema', aisle: 'dairy' },
      { group: 'Filling', qty: 4, item: 'eggs', note: 'scrambled, optional', aisle: 'dairy', optional: true },
      { group: 'Filling', qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Make the dough',
        text: 'Mix the flour, baking powder and salt. Rub in the shortening, then add the warm water and knead for 5 minutes into a soft dough. Divide into 8 balls, cover and rest for 30 minutes.'
      },
      {
        title: 'Stretch',
        text: 'Stretch or roll each ball into a 9-inch round, about ⅛ inch thick.'
      },
      {
        title: 'Cook',
        text: 'Cook on a dry skillet over medium-high heat for 1 minute per side until puffed and spotted brown. Keep wrapped in a towel.'
      },
      {
        title: 'Fill',
        text: 'Warm the beans. Spread each tortilla with beans, sprinkle with cheese, drizzle with crema, and add egg and avocado if you like. Fold in half.'
      }
    ],
    notes: [
      'Add grilled steak or chorizo for a "baleada con todo."'
    ]
  },
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
    id: 'maryland-crab-soup',
    name: 'Maryland Crab Soup',
    short: 'Crab soup',
    continent: 'North America',
    region: 'Chesapeake & Mid-Atlantic',
    cuisine: 'Maryland',
    emoji: '🦀',
    description: 'A tomatoey, Old Bay-spiked vegetable soup loaded with sweet blue crab. The Chesapeake Bay\'s answer to chowder.',
    servings: 8,
    time: { prep: 20, cook: 50 },
    heat: 1,
    tags: ['soup', 'seafood', 'crab'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 28, unit: 'oz', item: 'canned diced tomatoes', aisle: 'pantry' },
      { qty: 6, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'Old Bay seasoning', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'frozen mixed vegetables', note: 'corn, peas, green beans, lima beans', aisle: 'frozen' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'lb', item: 'lump crab meat', note: 'picked over', aisle: 'seafood' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Soften the vegetables',
        text: 'Melt the butter in a large pot over medium heat and cook the onion, celery and carrots for 8 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the tomatoes, stock, Old Bay, potatoes and bay leaf. Simmer for 20 minutes.'
      },
      {
        title: 'Vegetables',
        text: 'Add the frozen vegetables and simmer for 10 minutes more.'
      },
      {
        title: 'Crab',
        text: 'Gently stir in the crab and heat for 5 minutes. Season with salt and more Old Bay to taste.',
        tip: 'Add the crab last and stir gently so the lumps stay whole.'
      },
      {
        title: 'Serve',
        text: 'Remove the bay leaf and serve with oyster crackers.'
      }
    ],
    notes: [
      'Traditionally made with whole blue crabs simmered in the broth. Add a couple of crab claws for extra flavor.'
    ]
  },
  {
    id: 'pa-dutch-pot-pie',
    name: 'Pennsylvania Dutch Chicken Pot Pie',
    nativeName: 'Bott Boi',
    short: 'PA pot pie',
    continent: 'North America',
    region: 'Chesapeake & Mid-Atlantic',
    cuisine: 'Pennsylvania Dutch',
    emoji: '🍲',
    description: 'Not a pie at all: a hearty chicken stew with potatoes and wide, slippery homemade square noodles, the way Pennsylvania Dutch grandmothers make it.',
    servings: 6,
    time: { prep: 30, cook: 75 },
    heat: 0,
    tags: ['chicken', 'noodles', 'comfort', 'winter'],
    ingredients: [
      { group: 'Stew', qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', aisle: 'meat' },
      { group: 'Stew', qty: 10, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'diced', aisle: 'produce' },
      { group: 'Stew', item: 'saffron threads', note: 'a pinch (traditional)', aisle: 'spices', optional: true },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'Noodles', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Noodles', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Noodles', qty: 2, item: 'eggs', aisle: 'dairy' },
      { group: 'Noodles', qty: 0.33, unit: 'cup', item: 'whole milk', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Simmer the chicken in the stock for 40 minutes until tender. Lift it out, shred the meat, and discard the skin and bones.'
      },
      {
        title: 'Make the noodle dough',
        text: 'Meanwhile, mix the flour and salt, then work in the eggs and milk to form a firm dough. Knead for 2 minutes and rest for 15 minutes.'
      },
      {
        title: 'Roll & cut',
        text: 'Roll the dough very thin (⅛ inch) on a floured counter and cut into 2-inch squares.'
      },
      {
        title: 'Vegetables',
        text: 'Add the onion, celery, carrots, potatoes and saffron to the broth and simmer for 10 minutes.'
      },
      {
        title: 'Cook the noodles',
        text: 'Drop the noodle squares in one at a time, stirring gently, and simmer for 15 minutes until tender. The starch thickens the broth.'
      },
      {
        title: 'Finish',
        text: 'Return the chicken, season with salt and pepper, and stir in the parsley.'
      }
    ],
    notes: [
      'Store-bought wide egg noodles (or bott boi noodles) work if you\'re short on time.'
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
  // ─────────────────────────────── Hawaiian ───────────────────────────────
  {
    id: 'ahi-poke-bowl',
    name: 'Ahi Poke Bowl',
    short: 'Poke',
    continent: 'North America',
    region: 'Hawaiian',
    emoji: '🍣',
    description: 'Hawaii\'s classic shoyu poke: cubes of sushi-grade ahi tuna tossed with soy, sesame, sweet onion and scallions over warm rice.',
    servings: 4,
    time: { prep: 20, cook: 20 },
    heat: 1,
    tags: ['seafood', 'raw', 'rice bowl', 'quick'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'sushi-grade ahi tuna', aisle: 'seafood' },
      { qty: 3, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { qty: 1, unit: 'tbsp', item: 'toasted sesame oil', aisle: 'international' },
      { qty: 0.5, item: 'sweet onion', note: 'thinly sliced', shop: 'sweet onions', aisle: 'produce' },
      { qty: 3, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'toasted sesame seeds', aisle: 'international' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 0.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' },
      { qty: 1, item: 'cucumber', note: 'sliced', shop: 'cucumbers', aisle: 'produce' },
      { item: 'furikake', note: 'to garnish', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Cook the rice',
        text: 'Rinse and cook the rice. Let it cool until just warm.'
      },
      {
        title: 'Cube the tuna',
        text: 'Cut the tuna into ¾-inch cubes and keep cold.',
        tip: 'Buy the freshest sushi-grade fish you can, and make poke the same day.'
      },
      {
        title: 'Dress',
        text: 'Gently toss the tuna with the soy sauce, sesame oil, onion, scallions, sesame seeds, pepper flakes and ginger. Chill for 10 minutes.'
      },
      {
        title: 'Serve',
        text: 'Spoon over bowls of rice with avocado and cucumber, and sprinkle with furikake.'
      }
    ],
    notes: [
      'Spicy mayo poke: toss the tuna with 3 tbsp mayo and 1 tbsp sriracha instead.'
    ]
  },
  {
    id: 'kalua-pork',
    name: 'Kalua Pork',
    short: 'Kalua pork',
    continent: 'North America',
    region: 'Hawaiian',
    emoji: '🐖',
    description: 'Luau-style smoky, salty shredded pork, traditionally cooked in an underground imu oven, made at home with sea salt, liquid smoke and a long, slow roast.',
    servings: 10,
    time: { prep: 10, cook: 480 },
    heat: 0,
    tags: ['pork', 'slow-cooked', 'party'],
    ingredients: [
      { qty: 5, unit: 'lb', item: 'bone-in pork shoulder', note: 'Boston butt', aisle: 'meat' },
      { qty: 1.5, unit: 'tbsp', item: 'Hawaiian red sea salt', note: 'or coarse sea salt', aisle: 'spices' },
      { qty: 1.5, unit: 'tbsp', item: 'liquid smoke', aisle: 'pantry' },
      { qty: 1, unit: 'package', item: 'banana leaves', note: 'optional', aisle: 'frozen', optional: true },
      { qty: 0.5, unit: 'head', item: 'green cabbage', note: 'in wedges, optional', aisle: 'produce', optional: true },
      { qty: 3, unit: 'cup', item: 'short-grain white rice', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Season',
        text: 'Heat the oven to 300°F. Pierce the pork all over with a knife, then rub with the salt and liquid smoke.'
      },
      {
        title: 'Wrap',
        text: 'Wrap the pork in banana leaves (if using), then tightly in heavy foil, and set it in a roasting pan.'
      },
      {
        title: 'Roast',
        text: 'Roast for 8 hours until the pork is falling apart.',
        tip: 'Slow cooker: 16 hours on low gives the most authentic texture.'
      },
      {
        title: 'Shred',
        text: 'Unwrap, shred the pork with forks, and toss with the juices. Taste for salt.'
      },
      {
        title: 'Cabbage (optional)',
        text: 'Sauté the cabbage wedges in a little of the pork fat and juices for 5 minutes until tender, and toss with the pork.'
      }
    ],
    notes: [
      'Serve plate-lunch style with two scoops of rice and mac salad.'
    ]
  },
  {
    id: 'loco-moco',
    name: 'Loco Moco',
    short: 'Loco moco',
    continent: 'North America',
    region: 'Hawaiian',
    emoji: '🍳',
    description: 'Hawaii\'s comfort plate: a juicy hamburger patty over white rice, smothered in rich brown mushroom gravy and crowned with a runny fried egg.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 0,
    tags: ['beef', 'eggs', 'rice bowl', 'comfort'],
    ingredients: [
      { group: 'Patties', qty: 1.5, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { group: 'Patties', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Patties', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Patties', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Gravy', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Gravy', qty: 8, unit: 'oz', item: 'cremini mushrooms', note: 'sliced', aisle: 'produce' },
      { group: 'Gravy', qty: 0.5, item: 'yellow onion', note: 'diced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Gravy', qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Gravy', qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { group: 'Gravy', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Gravy', qty: 1, unit: 'tsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'short-grain white rice', aisle: 'pantry' },
      { group: 'To serve', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'To serve', qty: 2, item: 'scallions', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Cook the rice',
        text: 'Rinse and cook the rice.'
      },
      {
        title: 'Patties',
        text: 'Form the beef into 4 patties, season with salt and pepper, and cook in the oil over medium-high heat for 4 minutes per side. Set aside.'
      },
      {
        title: 'Gravy',
        text: 'In the same pan, melt the butter and cook the mushrooms and onion for 6 minutes. Sprinkle in the flour for 1 minute, then whisk in the stock, soy sauce and Worcestershire. Simmer for 5 minutes until thick.'
      },
      {
        title: 'Fry the eggs',
        text: 'Fry the eggs sunny-side up.'
      },
      {
        title: 'Stack & serve',
        text: 'Scoop rice into bowls, top with a patty, smother with gravy, add a fried egg, and sprinkle with scallions.'
      }
    ],
    notes: [
      'Swap the beef patty for Spam slices or teriyaki chicken.'
    ]
  },
  // ─────────────────────────── Italian-American ───────────────────────────
  {
    id: 'baked-ziti',
    name: 'Baked Ziti',
    short: 'Baked ziti',
    continent: 'North America',
    region: 'Italian-American',
    emoji: '🍝',
    description: 'Ziti tossed with sausage tomato sauce and pockets of creamy ricotta, buried under mozzarella and baked until bubbly and browned at the edges.',
    servings: 8,
    time: { prep: 20, cook: 60 },
    heat: 0,
    tags: ['pasta', 'casserole', 'party', 'make-ahead'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'ziti', note: 'or penne', aisle: 'pantry' },
      { qty: 1, unit: 'lb', item: 'Italian sausage', note: 'casings removed', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 56, unit: 'oz', item: 'canned crushed tomatoes', note: '2 large cans', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 15, unit: 'oz', item: 'whole-milk ricotta', aisle: 'dairy' },
      { qty: 1, item: 'eggs', aisle: 'dairy' },
      { qty: 2, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated, divided', aisle: 'dairy' },
      { qty: 1, unit: 'lb', item: 'low-moisture mozzarella', note: 'shredded, divided', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'fresh basil', note: 'torn', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Sauce',
        text: 'Brown the sausage with the onion in a large pot for 8 minutes. Add the garlic for 1 minute, then the tomatoes, oregano and salt. Simmer for 15 minutes.'
      },
      {
        title: 'Par-cook the pasta',
        text: 'Heat the oven to 375°F. Cook the ziti 3 minutes short of al dente and drain.'
      },
      {
        title: 'Ricotta mix',
        text: 'Stir together the ricotta, egg, half the Parmigiano and the basil.'
      },
      {
        title: 'Assemble',
        text: 'Toss the pasta with most of the sauce and half the mozzarella. Spread half in a 9x13 dish, dollop over the ricotta, add the rest of the pasta, then top with the remaining sauce, mozzarella and Parmigiano.'
      },
      {
        title: 'Bake',
        text: 'Cover with foil and bake for 20 minutes, then uncover and bake for 15 minutes more until browned and bubbling. Rest for 10 minutes.'
      }
    ],
    notes: [
      'Freezes well before baking. Bake from frozen, covered, for about 1 hour 15 minutes.'
    ]
  },
  {
    id: 'chicken-parmesan',
    name: 'Chicken Parmesan',
    short: 'Chicken parm',
    continent: 'North America',
    region: 'Italian-American',
    emoji: '🍗',
    description: 'Crisp, golden breaded chicken cutlets topped with marinara and bubbling mozzarella, served with spaghetti. Red-sauce-joint perfection.',
    servings: 4,
    time: { prep: 25, cook: 40 },
    heat: 0,
    tags: ['chicken', 'pasta', 'family favorite'],
    ingredients: [
      { group: 'Marinara', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Marinara', qty: 3, item: 'garlic cloves', note: 'sliced', aisle: 'produce' },
      { group: 'Marinara', qty: 28, unit: 'oz', item: 'canned whole peeled tomatoes', note: 'San Marzano if possible, crushed by hand', aisle: 'pantry' },
      { group: 'Marinara', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Marinara', qty: 0.25, unit: 'cup', item: 'fresh basil', aisle: 'produce' },
      { group: 'Chicken', qty: 1.5, unit: 'lb', item: 'boneless skinless chicken breasts', note: '2 large, halved horizontally', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Chicken', qty: 2, item: 'eggs', aisle: 'dairy' },
      { group: 'Chicken', qty: 1, unit: 'cup', item: 'panko breadcrumbs', aisle: 'pantry' },
      { group: 'Chicken', qty: 0.5, unit: 'cup', item: 'plain dry breadcrumbs', note: 'Italian-seasoned', aisle: 'pantry' },
      { group: 'Chicken', qty: 1, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated, plus more to serve', aisle: 'dairy' },
      { group: 'Chicken', qty: 0.75, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 8, unit: 'oz', item: 'low-moisture mozzarella', note: 'sliced or shredded', aisle: 'dairy' },
      { group: 'To serve', qty: 0.75, unit: 'lb', item: 'spaghetti', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinara',
        text: 'Warm the oil and garlic in a saucepan over medium heat for 2 minutes until golden. Add the tomatoes and salt and simmer for 20 minutes. Tear in the basil.'
      },
      {
        title: 'Pound & bread',
        text: 'Pound the chicken to ½ inch thick and season with salt. Dredge in flour, dip in beaten egg, then press into the crumbs mixed with the Parmigiano.'
      },
      {
        title: 'Fry',
        text: 'Heat the oven to 425°F. Fry the cutlets in the oil over medium-high heat for 3 minutes per side until golden. Drain on a rack.'
      },
      {
        title: 'Top & bake',
        text: 'Arrange on a sheet pan, spoon marinara on each, top with mozzarella, and bake for 10 minutes until bubbling.',
        tip: 'Sauce only the center so the edges stay crunchy.'
      },
      {
        title: 'Serve',
        text: 'Cook the spaghetti, toss with the rest of the marinara, and serve with the chicken and extra Parmigiano.'
      }
    ],
    notes: [
      'Make it a sandwich on a hero roll the next day.'
    ]
  },
  {
    id: 'shrimp-scampi',
    name: 'Shrimp Scampi',
    short: 'Scampi',
    continent: 'North America',
    region: 'Italian-American',
    emoji: '🍤',
    description: 'Juicy shrimp in a buttery, garlicky white wine and lemon sauce, tossed with linguine and parsley. On the table in 20 minutes.',
    servings: 4,
    time: { prep: 10, cook: 15 },
    heat: 1,
    tags: ['seafood', 'shrimp', 'pasta', 'quick'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'linguine', aisle: 'pantry' },
      { qty: 1.5, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'divided', aisle: 'dairy' },
      { qty: 6, item: 'garlic cloves', note: 'thinly sliced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'dry white wine', aisle: 'other' },
      { qty: 1, item: 'lemons', note: 'zested and juiced', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Pasta',
        text: 'Cook the linguine in salted water until al dente. Save 1 cup of the pasta water.'
      },
      {
        title: 'Shrimp',
        text: 'Season the shrimp with salt. Heat the oil and 2 tbsp butter in a large skillet over medium-high heat and cook the shrimp for 1 minute per side. Set aside.'
      },
      {
        title: 'Garlic',
        text: 'Lower the heat, add 2 tbsp butter, the garlic and pepper flakes, and cook for 1 minute until fragrant.'
      },
      {
        title: 'Sauce',
        text: 'Add the wine and simmer for 2 minutes, then the lemon juice and zest.'
      },
      {
        title: 'Toss',
        text: 'Add the pasta, shrimp, remaining butter and a splash of pasta water and toss for 1 minute until glossy. Finish with parsley.',
        tip: 'The starchy pasta water helps the butter sauce cling instead of pooling.'
      }
    ],
    notes: [
      'Skip the pasta and serve with crusty bread for dunking.'
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
    id: 'carne-asada',
    name: 'Carne Asada Tacos',
    short: 'Carne asada',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Northern Mexico · Sonora',
    emoji: '🔥',
    description: 'Citrus-, garlic- and chile-marinated skirt steak grilled over high heat, chopped and piled into warm corn tortillas. The ultimate backyard taco.',
    servings: 6,
    time: { prep: 15, cook: 15, inactive: 120, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['beef', 'tacos', 'grilled', 'summer'],
    ingredients: [
      { group: 'Marinade', qty: 2, item: 'oranges', note: 'juiced', aisle: 'produce' },
      { group: 'Marinade', qty: 3, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Marinade', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Marinade', qty: 1, item: 'jalapeños', note: 'minced', aisle: 'produce' },
      { group: 'Marinade', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Marinade', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Marinade', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Tacos', qty: 2.5, unit: 'lb', item: 'skirt steak', note: 'or flank steak', aisle: 'meat' },
      { group: 'Tacos', qty: 18, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Tacos', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Tacos', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Tacos', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Tacos', qty: 1, unit: 'cup', item: 'salsa verde', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Mix all the marinade ingredients, add the steak, and marinate in the fridge for 2 hours (no more than 8, or the citrus turns it mushy).'
      },
      {
        title: 'Grill',
        text: 'Grill over high heat for 4 minutes per side until well charred and medium.'
      },
      {
        title: 'Rest & chop',
        text: 'Rest the steak for 5 minutes, then slice thinly against the grain and chop into small pieces.'
      },
      {
        title: 'Warm the tortillas',
        text: 'Warm the tortillas on the grill for 30 seconds per side.'
      },
      {
        title: 'Serve',
        text: 'Fill the tortillas with steak and top with onion, cilantro, salsa and a squeeze of lime.'
      }
    ],
    notes: [
      'Grill some scallions and jalapeños alongside for the classic taqueria garnish.'
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
    id: 'mole-poblano',
    name: 'Chicken Mole Poblano',
    short: 'Mole',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Puebla',
    emoji: '🍫',
    description: 'Puebla\'s legendary sauce: three kinds of dried chilies, nuts, seeds, spices, a little chocolate and fried bread ground into a dark, complex, velvety mole over tender chicken.',
    servings: 8,
    time: { prep: 45, cook: 150 },
    heat: 1,
    tags: ['chicken', 'celebration', 'weekend project', 'make-ahead'],
    ingredients: [
      { group: 'Chicken', qty: 4, unit: 'lb', item: 'bone-in skin-on chicken thighs', aisle: 'meat' },
      { group: 'Chicken', qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Chicken', qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Chilies', qty: 4, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chilies', qty: 4, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chilies', qty: 3, item: 'dried pasilla chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Chilies', qty: 1, item: 'chipotles in adobo', aisle: 'international' },
      { group: 'Mole', qty: 3, unit: 'tbsp', item: 'lard', note: 'or vegetable oil, divided', aisle: 'meat' },
      { group: 'Mole', qty: 0.5, item: 'white onion', note: 'sliced', shop: 'white onions', aisle: 'produce' },
      { group: 'Mole', qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Mole', qty: 2, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Mole', qty: 0.25, unit: 'cup', item: 'toasted sesame seeds', note: 'plus more to garnish', aisle: 'international' },
      { group: 'Mole', qty: 0.25, unit: 'cup', item: 'sliced almonds', aisle: 'pantry' },
      { group: 'Mole', qty: 0.25, unit: 'cup', item: 'roasted unsalted peanuts', aisle: 'pantry' },
      { group: 'Mole', qty: 0.25, unit: 'cup', item: 'golden raisins', aisle: 'pantry' },
      { group: 'Mole', qty: 1, item: 'corn tortillas', note: 'torn', aisle: 'bakery' },
      { group: 'Mole', qty: 1, unit: 'slice', item: 'white sandwich bread', aisle: 'bakery' },
      { group: 'Mole', qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Mole', qty: 0.25, unit: 'tsp', item: 'ground cloves', aisle: 'spices' },
      { group: 'Mole', qty: 0.25, unit: 'tsp', item: 'anise seeds', aisle: 'spices' },
      { group: 'Mole', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Mole', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Mole', qty: 2, unit: 'oz', item: 'Mexican chocolate', note: 'e.g. Ibarra', aisle: 'international' },
      { group: 'Mole', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Mole', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Simmer the chicken in the stock and water for 30 minutes until cooked through. Lift out the chicken and keep the broth.'
      },
      {
        title: 'Soak the chilies',
        text: 'Toast the dried chilies in a dry skillet for 30 seconds per side, then soak in hot water for 20 minutes. Drain.'
      },
      {
        title: 'Fry the aromatics',
        text: 'Heat 1 tbsp lard in a skillet and fry the onion, garlic and tomatoes for 8 minutes until charred in spots. Transfer to a blender.'
      },
      {
        title: 'Toast nuts & bread',
        text: 'Add 1 tbsp lard and fry the sesame seeds, almonds, peanuts, raisins, tortilla and bread for 3 minutes until toasty. Add to the blender with the spices.'
      },
      {
        title: 'Blend',
        text: 'Add the drained chilies, chipotle and 2 cups of the reserved broth and blend in batches until completely smooth.'
      },
      {
        title: 'Fry the mole',
        text: 'Heat the last 1 tbsp lard in a Dutch oven over medium heat. Pour in the purée (it will spatter) and cook for 10 minutes, stirring, until darker and thick.',
        tip: 'Frying the paste is what gives mole its deep, rounded flavor.'
      },
      {
        title: 'Simmer',
        text: 'Add the chocolate, sugar, salt and 2 more cups of broth. Simmer for 30 minutes, stirring often, until it coats a spoon.'
      },
      {
        title: 'Finish',
        text: 'Add the chicken and simmer for 15 minutes. Serve sprinkled with sesame seeds, with rice and warm tortillas.'
      }
    ],
    notes: [
      'Mole is better the next day and freezes beautifully. Leftovers make incredible enchiladas.'
    ]
  },
  {
    id: 'chilaquiles-rojos',
    name: 'Chilaquiles Rojos',
    short: 'Chilaquiles',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Central Mexico',
    emoji: '🍳',
    description: 'Mexico\'s favorite breakfast: crisp tortilla chips tossed in a smoky red chile salsa, topped with fried eggs, crema, queso fresco and avocado.',
    servings: 4,
    time: { prep: 15, cook: 30 },
    heat: 2,
    tags: ['breakfast', 'eggs', 'vegetarian'],
    ingredients: [
      { group: 'Salsa', qty: 4, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Salsa', qty: 3, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Salsa', qty: 1, item: 'chipotles in adobo', aisle: 'international' },
      { group: 'Salsa', qty: 0.25, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Salsa', qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Salsa', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Salsa', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Salsa', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Chips', qty: 12, item: 'corn tortillas', note: 'each cut into 6 wedges', aisle: 'bakery' },
      { group: 'Chips', qty: 1, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry', staple: true },
      { group: 'Toppings', qty: 4, item: 'eggs', aisle: 'dairy' },
      { group: 'Toppings', qty: 0.25, unit: 'cup', item: 'Mexican crema', aisle: 'dairy' },
      { group: 'Toppings', qty: 2, unit: 'oz', item: 'queso fresco', note: 'crumbled', aisle: 'dairy' },
      { group: 'Toppings', qty: 0.25, item: 'white onion', note: 'thinly sliced', shop: 'white onions', aisle: 'produce' },
      { group: 'Toppings', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Toppings', qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Make the salsa',
        text: 'Simmer the tomatoes and guajillos in water for 10 minutes. Drain and blend with the chipotle, onion, garlic, stock and salt until smooth.'
      },
      {
        title: 'Fry the salsa',
        text: 'Heat 1 tbsp oil in a large skillet and fry the salsa for 5 minutes until slightly darkened. Keep warm.'
      },
      {
        title: 'Fry the chips',
        text: 'Fry the tortilla wedges in the oil in batches for 2 minutes until crisp and golden. Drain and salt lightly.',
        tip: 'In a hurry? Use 8 oz of thick, store-bought tortilla chips.'
      },
      {
        title: 'Fry the eggs',
        text: 'Fry the eggs sunny-side up.'
      },
      {
        title: 'Toss & serve',
        text: 'Toss the chips in the simmering salsa for 1 minute, just until coated but still a little crunchy. Plate immediately and top with eggs, crema, queso fresco, onion, cilantro and avocado.'
      }
    ],
    notes: [
      'For chilaquiles verdes, use the salsa verde from the enchiladas verdes recipe.'
    ]
  },
  {
    id: 'chiles-rellenos',
    name: 'Chiles Rellenos',
    short: 'Chiles rellenos',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Puebla',
    emoji: '🫑',
    description: 'Roasted poblano peppers stuffed with melty Oaxaca cheese, dipped in a cloud-like egg batter, fried until golden and served in a light tomato broth.',
    servings: 4,
    time: { prep: 40, cook: 30 },
    heat: 1,
    tags: ['vegetarian', 'cheese', 'fried'],
    ingredients: [
      { group: 'Chiles', qty: 6, item: 'poblano peppers', aisle: 'produce' },
      { group: 'Chiles', qty: 12, unit: 'oz', item: 'Oaxaca cheese', note: 'or Monterey Jack, cut into sticks', aisle: 'dairy' },
      { group: 'Tomato sauce', qty: 4, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Tomato sauce', qty: 0.25, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Tomato sauce', qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Tomato sauce', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Tomato sauce', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tomato sauce', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Batter', qty: 4, item: 'eggs', note: 'separated', aisle: 'dairy' },
      { group: 'Batter', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Batter', qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Batter', qty: 2, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Roast the poblanos',
        text: 'Broil the poblanos for 10 minutes, turning, until blackened all over. Seal in a bowl for 10 minutes to steam, then peel.'
      },
      {
        title: 'Stuff',
        text: 'Make a slit down each chile, carefully pull out the seeds (keep the stem), and stuff with cheese. Close with a toothpick.'
      },
      {
        title: 'Tomato sauce',
        text: 'Blend the tomatoes, onion, garlic and stock. Simmer in the oil for 10 minutes and season with salt.'
      },
      {
        title: 'Make the batter',
        text: 'Beat the egg whites to stiff peaks, then beat in the yolks one at a time and the salt.',
        tip: 'This airy batter (capeado) is what makes rellenos puffy and light.'
      },
      {
        title: 'Fry',
        text: 'Heat 1 inch of oil to 350°F. Dust each chile in flour, coat in batter, and fry for 2 minutes per side until puffed and golden. Drain.'
      },
      {
        title: 'Serve',
        text: 'Remove the toothpicks and serve the chiles in a shallow pool of tomato sauce, with rice and beans.'
      }
    ],
    notes: [
      'Fill with picadillo (seasoned ground beef with raisins) for a heartier version.'
    ]
  },
  {
    id: 'cochinita-pibil',
    name: 'Cochinita Pibil',
    short: 'Cochinita pibil',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Yucatecan',
    emoji: '🐖',
    description: 'Yucatán\'s slow-roasted pork: marinated in achiote and citrus, wrapped in banana leaves and cooked until meltingly tender. Serve with fiery pickled onions.',
    servings: 8,
    time: { prep: 20, cook: 240, inactive: 240, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['pork', 'tacos', 'slow-cooked', 'make-ahead'],
    ingredients: [
      { group: 'Pork', qty: 3.5, unit: 'oz', item: 'achiote paste', note: '1 block', aisle: 'international' },
      { group: 'Pork', qty: 3, item: 'oranges', note: 'juiced', aisle: 'produce' },
      { group: 'Pork', qty: 3, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Pork', qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Pork', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Pork', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Pork', qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { group: 'Pork', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 4, unit: 'lb', item: 'boneless pork shoulder', note: 'in 3-inch chunks', aisle: 'meat' },
      { group: 'Pork', qty: 1, unit: 'package', item: 'banana leaves', note: 'thawed, optional', aisle: 'frozen', optional: true },
      { group: 'Pickled onions', qty: 1, item: 'red onion', note: 'thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'Pickled onions', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Pickled onions', qty: 1, item: 'habanero pepper', note: 'thinly sliced', shop: 'habanero peppers', aisle: 'produce' },
      { group: 'Pickled onions', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'To serve', qty: 18, item: 'corn tortillas', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Blend the achiote, orange juice, lime juice, garlic, cumin, oregano, allspice and salt until smooth. Coat the pork and marinate for at least 4 hours or overnight.'
      },
      {
        title: 'Wrap',
        text: 'Heat the oven to 325°F. Line a Dutch oven with banana leaves (or foil), add the pork and all the marinade, and fold the leaves over the top.'
      },
      {
        title: 'Slow roast',
        text: 'Cover and roast for 4 hours until the pork falls apart.'
      },
      {
        title: 'Pickle the onions',
        text: 'Toss the onion with the lime juice, habanero and salt. Let stand for at least 30 minutes, until bright pink.'
      },
      {
        title: 'Shred & serve',
        text: 'Shred the pork in its juices. Pile into warm tortillas and top with pickled onions.'
      }
    ],
    notes: [
      'Slow cooker: 8 hours on low.'
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
  {
    id: 'pork-tamales',
    name: 'Red Chile Pork Tamales',
    nativeName: 'Tamales Rojos de Puerco',
    short: 'Tamales',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Northern Mexico',
    emoji: '🫔',
    description: 'Fluffy, lard-whipped masa wrapped around tender pork in a brick-red guajillo sauce, folded into corn husks and steamed. A holiday tradition worth the effort.',
    servings: 8,
    time: { prep: 90, cook: 210 },
    heat: 1,
    tags: ['pork', 'holiday', 'weekend project', 'freezer-friendly'],
    ingredients: [
      { group: 'Pork', qty: 2.5, unit: 'lb', item: 'boneless pork shoulder', note: 'in 2-inch chunks', aisle: 'meat' },
      { group: 'Pork', qty: 1, item: 'white onion', note: 'halved', shop: 'white onions', aisle: 'produce' },
      { group: 'Pork', qty: 4, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Pork', qty: 2, item: 'bay leaves', aisle: 'spices' },
      { group: 'Pork', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Red chile', qty: 8, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Red chile', qty: 3, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Red chile', qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Red chile', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Red chile', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Red chile', qty: 2, unit: 'tbsp', item: 'lard', aisle: 'meat' },
      { group: 'Masa', qty: 4, unit: 'cup', item: 'masa harina', aisle: 'international' },
      { group: 'Masa', qty: 1, unit: 'cup', item: 'lard', note: 'room temperature', aisle: 'meat' },
      { group: 'Masa', qty: 2, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Masa', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Masa', qty: 30, item: 'dried corn husks', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Simmer the pork',
        text: 'Simmer the pork with the onion, garlic, bay leaves, salt and water for 2 hours until tender. Reserve the broth.'
      },
      {
        title: 'Soak the husks',
        text: 'Meanwhile, soak the corn husks in hot water for 1 hour until pliable.'
      },
      {
        title: 'Red chile sauce',
        text: 'Toast the chilies for 30 seconds per side and soak in hot water for 20 minutes. Blend with the garlic, cumin, oregano and 2 cups pork broth, then strain. Fry the sauce in the lard for 5 minutes.'
      },
      {
        title: 'Filling',
        text: 'Shred the pork and mix it with 1½ cups of the red chile sauce.'
      },
      {
        title: 'Whip the masa',
        text: 'Beat the lard with the baking powder and salt for 5 minutes until fluffy. Beat in the masa harina alternately with 3 cups warm broth and the remaining chile sauce until soft and spongy.',
        tip: 'A small ball of masa should float in a glass of water. If it sinks, beat it longer.'
      },
      {
        title: 'Assemble',
        text: 'Spread 3 tbsp masa thinly over the wide end of a husk, add 2 tbsp filling down the center, roll it up and fold the narrow end under.'
      },
      {
        title: 'Steam',
        text: 'Stand the tamales upright, open ends up, in a steamer over simmering water. Cover and steam for 75 minutes, until the masa pulls cleanly away from the husk. Rest for 15 minutes before serving.'
      }
    ],
    notes: [
      'Tamales freeze beautifully. Steam from frozen for about 30 minutes.'
    ]
  },
  {
    id: 'sopa-de-tortilla',
    name: 'Sopa de Tortilla',
    short: 'Tortilla soup',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Central Mexico',
    emoji: '🥣',
    description: 'A smoky, chile-tinged tomato broth with shredded chicken, poured over crisp tortilla strips and topped with avocado, cheese, crema and lime.',
    servings: 6,
    time: { prep: 15, cook: 45 },
    heat: 1,
    tags: ['soup', 'chicken', 'weeknight'],
    ingredients: [
      { group: 'Soup', qty: 4, item: 'Roma tomatoes', aisle: 'produce' },
      { group: 'Soup', qty: 0.5, item: 'white onion', shop: 'white onions', aisle: 'produce' },
      { group: 'Soup', qty: 3, item: 'garlic cloves', note: 'unpeeled', aisle: 'produce' },
      { group: 'Soup', qty: 2, item: 'dried pasilla chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Soup', qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Soup', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Soup', qty: 1, unit: 'sprig', item: 'epazote', aisle: 'produce', optional: true },
      { group: 'Soup', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Soup', qty: 1, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { group: 'Strips', qty: 8, item: 'corn tortillas', note: 'cut into thin strips', aisle: 'bakery' },
      { group: 'Strips', qty: 0.5, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Toppings', qty: 1, item: 'avocado', note: 'diced', shop: 'avocados', aisle: 'produce' },
      { group: 'Toppings', qty: 3, unit: 'oz', item: 'queso fresco', note: 'crumbled', aisle: 'dairy' },
      { group: 'Toppings', qty: 0.5, unit: 'cup', item: 'Mexican crema', aisle: 'dairy' },
      { group: 'Toppings', qty: 0.25, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Toppings', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Char the vegetables',
        text: 'Char the tomatoes, onion and garlic in a dry skillet over medium-high heat for 8 minutes, turning, until blackened in spots. Toast the chilies for 30 seconds per side.'
      },
      {
        title: 'Blend',
        text: 'Peel the garlic and blend everything with 1 cup of stock until smooth.'
      },
      {
        title: 'Fry the base',
        text: 'Heat 2 tbsp oil in a pot and fry the purée for 5 minutes until darker.'
      },
      {
        title: 'Simmer with chicken',
        text: 'Add the remaining stock, the epazote, salt and chicken. Simmer for 20 minutes, then lift out the chicken and shred it back into the pot.'
      },
      {
        title: 'Fry the strips',
        text: 'Fry the tortilla strips in hot oil for 2 minutes until crisp. Drain and salt.'
      },
      {
        title: 'Serve',
        text: 'Put a handful of strips in each bowl, ladle in the soup, and top with avocado, queso fresco, crema, cilantro and a squeeze of lime.'
      }
    ],
    notes: [
      'Add the strips right before eating so they stay crunchy.'
    ]
  },
  {
    id: 'tacos-al-pastor',
    name: 'Tacos al Pastor',
    short: 'Al pastor',
    continent: 'North America',
    region: 'Mexican',
    cuisine: 'Mexico City',
    emoji: '🌮',
    description: 'Mexico City\'s iconic taco: thin-sliced pork marinated in chilies, achiote and pineapple, seared until charred, tucked into tortillas with grilled pineapple.',
    servings: 6,
    time: { prep: 30, cook: 25, inactive: 240, inactiveLabel: 'marinate' },
    heat: 2,
    tags: ['pork', 'tacos', 'grilled'],
    ingredients: [
      { group: 'Marinade', qty: 4, item: 'dried guajillo chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Marinade', qty: 2, item: 'dried ancho chilies', note: 'stemmed and seeded', aisle: 'international' },
      { group: 'Marinade', qty: 0.5, unit: 'cup', item: 'pineapple juice', aisle: 'pantry' },
      { group: 'Marinade', qty: 0.25, unit: 'cup', item: 'distilled white vinegar', aisle: 'pantry' },
      { group: 'Marinade', qty: 3, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Marinade', qty: 2, unit: 'oz', item: 'achiote paste', aisle: 'international' },
      { group: 'Marinade', qty: 1, item: 'chipotles in adobo', aisle: 'international' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Marinade', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Marinade', qty: 0.25, unit: 'tsp', item: 'ground cloves', aisle: 'spices' },
      { group: 'Marinade', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tacos', qty: 2.5, unit: 'lb', item: 'boneless pork shoulder', note: 'sliced ¼ inch thick', aisle: 'meat' },
      { group: 'Tacos', qty: 0.5, item: 'pineapple', note: 'peeled and sliced into rounds', shop: 'pineapples', aisle: 'produce' },
      { group: 'Tacos', qty: 18, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Tacos', qty: 0.5, item: 'white onion', note: 'finely chopped', shop: 'white onions', aisle: 'produce' },
      { group: 'Tacos', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Tacos', qty: 2, item: 'limes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Tacos', qty: 1, unit: 'cup', item: 'salsa verde', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Soak the chilies',
        text: 'Toast the chilies in a dry skillet for 30 seconds per side, then soak in hot water for 20 minutes. Drain.'
      },
      {
        title: 'Blend & marinate',
        text: 'Blend the chilies with the pineapple juice, vinegar, garlic, achiote, chipotle, cumin, oregano, cloves and salt until smooth. Coat the pork and marinate for at least 4 hours or overnight.'
      },
      {
        title: 'Sear the pork',
        text: 'Heat a cast-iron skillet or grill over high heat. Cook the pork in batches for 3 minutes per side until charred at the edges.'
      },
      {
        title: 'Grill the pineapple',
        text: 'Sear the pineapple rounds for 2 minutes per side until caramelized.'
      },
      {
        title: 'Chop',
        text: 'Chop the pork and pineapple together into small pieces.',
        tip: 'Stack the cooked slices and chop them like a taquero does, so you get crispy and juicy bits together.'
      },
      {
        title: 'Serve',
        text: 'Warm the tortillas and fill with pork and pineapple. Top with onion, cilantro, salsa and a squeeze of lime.'
      }
    ],
    notes: [
      'For a mini trompo, stack the marinated slices on a skewer through half an onion and roast at 400°F for 1½ hours, then shave.'
    ]
  },
  // ────────────────────────────── Midwestern ──────────────────────────────
  {
    id: 'chicago-deep-dish',
    name: 'Chicago Deep-Dish Pizza',
    short: 'Deep dish',
    continent: 'North America',
    region: 'Midwestern',
    cuisine: 'Chicago',
    emoji: '🍕',
    description: 'A buttery, flaky, high-walled crust layered with mozzarella and Italian sausage, then topped with a chunky tomato sauce and baked into a towering pie.',
    servings: 6,
    time: { prep: 30, cook: 40, inactive: 90, inactiveLabel: 'rise' },
    heat: 0,
    tags: ['pizza', 'sausage', 'weekend project'],
    ingredients: [
      { group: 'Dough', qty: 3, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dough', qty: 0.5, unit: 'cup', item: 'yellow cornmeal', aisle: 'pantry' },
      { group: 'Dough', qty: 2.25, unit: 'tsp', item: 'instant yeast', aisle: 'pantry' },
      { group: 'Dough', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1.25, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Dough', qty: 6, unit: 'tbsp', item: 'unsalted butter', note: '3 melted, 3 softened', aisle: 'dairy' },
      { group: 'Sauce', qty: 28, unit: 'oz', item: 'canned crushed tomatoes', aisle: 'pantry' },
      { group: 'Sauce', qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Sauce', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'sliced mozzarella', note: 'low-moisture', aisle: 'dairy' },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'Italian sausage', note: 'casings removed', aisle: 'meat' },
      { group: 'Filling', qty: 1, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Make the dough',
        text: 'Mix the flour, cornmeal, yeast, salt and sugar. Add the water and 3 tbsp melted butter and knead for 5 minutes. Cover and let rise for 1 hour until doubled.'
      },
      {
        title: 'Laminate',
        text: 'Roll the dough into a 15x12-inch rectangle, spread with the softened butter, roll it up like a jelly roll, flatten, and fold in thirds. Chill for 30 minutes.',
        tip: 'This quick lamination gives the crust its signature flaky, biscuity layers.'
      },
      {
        title: 'Make the sauce',
        text: 'Stir together the tomatoes, garlic, oregano and salt.'
      },
      {
        title: 'Build',
        text: 'Heat the oven to 425°F. Press the dough into a buttered 12-inch cast-iron skillet or deep-dish pan, 1½ inches up the sides. Layer the mozzarella, then press the raw sausage in a single flat layer over the cheese. Spread the sauce on top and sprinkle with Parmigiano.'
      },
      {
        title: 'Bake',
        text: 'Bake for 35 minutes until the crust is golden. Rest for 10 minutes before slicing.'
      }
    ],
    notes: [
      'Yes, the cheese goes under the sauce. It keeps it from burning during the long bake.'
    ]
  },
  {
    id: 'cincinnati-chili',
    name: 'Cincinnati Chili',
    short: 'Cincinnati chili',
    continent: 'North America',
    region: 'Midwestern',
    cuisine: 'Cincinnati',
    emoji: '🍝',
    description: 'A thin, warmly spiced meat sauce with cinnamon, cocoa and allspice, ladled over spaghetti and buried under a mound of finely shredded cheddar.',
    servings: 6,
    time: { prep: 15, cook: 120 },
    heat: 1,
    tags: ['beef', 'pasta', 'make-ahead'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 4, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, item: 'yellow onions', note: 'finely diced, plus more to serve', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 8, unit: 'oz', item: 'canned tomato sauce', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'chili powder', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'unsweetened cocoa powder', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground allspice', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'ground cloves', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'cayenne pepper', aisle: 'spices' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, unit: 'tbsp', item: 'apple cider vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'lb', item: 'spaghetti', aisle: 'pantry' },
      { qty: 12, unit: 'oz', item: 'mild cheddar', note: 'very finely shredded', aisle: 'dairy' },
      { qty: 1, unit: 'can', item: 'red kidney beans', note: 'warmed, for a "5-way"', aisle: 'pantry', optional: true },
      { item: 'oyster crackers', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Break up the beef',
        text: 'Put the raw beef and cold stock in a pot and mash with a potato masher until the meat is in tiny pieces.',
        tip: 'Starting raw meat in cold liquid is what gives Cincinnati chili its fine, smooth texture. Don\'t brown it.'
      },
      {
        title: 'Simmer',
        text: 'Add the onion, garlic, tomato sauce, all the spices, bay leaf, vinegar, Worcestershire and salt. Bring to a boil, then simmer uncovered for 1.5 hours, stirring occasionally.'
      },
      {
        title: 'Skim',
        text: 'Skim off excess fat and remove the bay leaf. The chili should be thin and saucy.'
      },
      {
        title: 'Serve your way',
        text: 'Cook the spaghetti. Serve "3-way" (spaghetti, chili, cheese), "4-way" (add onions or beans) or "5-way" (both), with oyster crackers.'
      }
    ],
    notes: [
      'Even better after a night in the fridge. Lift off the solidified fat before reheating.'
    ]
  },
  {
    id: 'juicy-lucy',
    name: 'Juicy Lucy',
    short: 'Juicy Lucy',
    continent: 'North America',
    region: 'Midwestern',
    cuisine: 'Minneapolis',
    emoji: '🍔',
    description: 'Minneapolis\' famous cheese-stuffed burger: two thin patties sealed around American cheese that melts into a molten core. Let it cool a minute before biting.',
    servings: 4,
    time: { prep: 15, cook: 15 },
    heat: 0,
    tags: ['beef', 'burger', 'weeknight'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'ground beef', note: '80/20', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 8, unit: 'slice', item: 'American cheese', aisle: 'dairy' },
      { qty: 4, item: 'hamburger buns', note: 'toasted', aisle: 'bakery' },
      { qty: 1, item: 'yellow onions', note: 'thinly sliced (grilled, optional)', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'dill pickle chips', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Form thin patties',
        text: 'Mix the beef gently with the Worcestershire. Divide into 8 portions and press each into a thin 5-inch patty.'
      },
      {
        title: 'Stuff & seal',
        text: 'Fold 2 slices of cheese into a small square and place it in the center of 4 patties. Top with the remaining patties and pinch the edges very well to seal.',
        tip: 'Seal carefully. Any gap and the cheese leaks out.'
      },
      {
        title: 'Season & cook',
        text: 'Season both sides with salt and pepper. Cook in a cast-iron skillet over medium-high heat for 5 minutes per side, until well browned and cooked through.'
      },
      {
        title: 'Rest & serve',
        text: 'Rest for 2 minutes (the center is molten), then serve on toasted buns with onions and pickles.'
      }
    ],
    notes: [
      'Poke a small hole on top while cooking to stop it puffing up into a ball.'
    ]
  },
  {
    id: 'tater-tot-hotdish',
    name: 'Tater Tot Hotdish',
    short: 'Hotdish',
    continent: 'North America',
    region: 'Midwestern',
    cuisine: 'Minnesota',
    emoji: '🥔',
    description: 'The ultimate Minnesota church-supper casserole: seasoned ground beef and vegetables in a creamy sauce, topped with cheddar and rows of crispy tater tots.',
    servings: 8,
    time: { prep: 20, cook: 50 },
    heat: 0,
    tags: ['beef', 'casserole', 'comfort', 'family favorite'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'can', item: 'condensed cream of mushroom soup', note: '10.5 oz each', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 3, unit: 'cup', item: 'frozen mixed vegetables', aisle: 'frozen' },
      { qty: 8, unit: 'oz', item: 'sharp cheddar', note: 'shredded', aisle: 'dairy' },
      { qty: 32, unit: 'oz', item: 'frozen tater tots', aisle: 'frozen' }
    ],
    steps: [
      {
        title: 'Brown the beef',
        text: 'Heat the oven to 375°F. Brown the beef with the onion in a large skillet for 10 minutes. Add the garlic, salt and pepper for 1 minute and drain the fat.'
      },
      {
        title: 'Make the filling',
        text: 'Stir in the soup, milk, Worcestershire and frozen vegetables. Spread in a 9x13 baking dish.'
      },
      {
        title: 'Top',
        text: 'Scatter the cheddar over the top, then arrange the frozen tater tots in neat rows to cover.',
        tip: 'Neat rows are a Minnesota point of pride.'
      },
      {
        title: 'Bake',
        text: 'Bake for 40 minutes until the tots are golden and crisp and the filling bubbles.'
      }
    ],
    notes: [
      'Homemade sauce option: replace the canned soup with a béchamel made with sautéed mushrooms.'
    ]
  },
  {
    id: 'beer-brats',
    name: 'Wisconsin Beer Brats',
    short: 'Beer brats',
    continent: 'North America',
    region: 'Midwestern',
    cuisine: 'Wisconsin',
    emoji: '🌭',
    description: 'Bratwurst simmered in beer with sweet onions, then grilled until snappy and served on buns piled with the beer onions and spicy brown mustard.',
    servings: 5,
    time: { prep: 10, cook: 35 },
    heat: 0,
    tags: ['sausage', 'grilled', 'game day', 'summer'],
    ingredients: [
      { qty: 5, item: 'fresh bratwurst', aisle: 'meat' },
      { qty: 24, unit: 'oz', item: 'lager beer', note: '2 cans, e.g. a Wisconsin pilsner', aisle: 'other' },
      { qty: 2, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 5, item: 'brat buns', note: 'or hoagie rolls', aisle: 'bakery' },
      { qty: 0.25, unit: 'cup', item: 'spicy brown mustard', aisle: 'pantry' },
      { qty: 0.5, unit: 'lb', item: 'sauerkraut', aisle: 'pantry', optional: true }
    ],
    steps: [
      {
        title: 'Beer bath',
        text: 'Put the onions, butter and beer in a wide pot and bring to a simmer. Add the brats and simmer gently for 15 minutes.',
        tip: 'Never boil brats hard or prick them. They\'ll split and dry out.'
      },
      {
        title: 'Grill',
        text: 'Grill the brats over medium heat for 8 minutes, turning, until browned and snappy.'
      },
      {
        title: 'Reduce the onions',
        text: 'Meanwhile, keep simmering the onions until the beer reduces and they turn soft and jammy. Return the grilled brats to the pot to keep warm.'
      },
      {
        title: 'Serve',
        text: 'Serve the brats in toasted buns topped with beer onions, mustard and sauerkraut.'
      }
    ],
    notes: [
      'No grill? Brown them in a cast-iron skillet.'
    ]
  },
  // ───────────────────────────── Northeastern ─────────────────────────────
  {
    id: 'boston-baked-beans',
    name: 'Boston Baked Beans',
    short: 'Baked beans',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'New England',
    emoji: '🫘',
    description: 'Navy beans slow-baked for hours with salt pork, molasses and mustard until dark, glossy, sweet and smoky. The Saturday-night supper of old New England.',
    servings: 8,
    time: { prep: 15, cook: 360, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 0,
    tags: ['beans', 'side', 'make-ahead'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried navy beans', aisle: 'pantry' },
      { qty: 6, unit: 'oz', item: 'salt pork', note: 'or thick-cut bacon, diced', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'molasses', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'Dijon mustard', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'apple cider vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 4, unit: 'cup', item: 'water', aisle: 'none' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the beans overnight (12 hours) in plenty of water. Drain.'
      },
      {
        title: 'Par-cook',
        text: 'Cover with fresh water and simmer for 45 minutes until the skins split when you blow on a spoonful. Drain, saving 2 cups of the liquid.'
      },
      {
        title: 'Assemble',
        text: 'Heat the oven to 300°F. Brown the salt pork and onion in a Dutch oven for 8 minutes. Stir in the molasses, sugar, mustard, vinegar, salt, pepper, beans and 4 cups water.'
      },
      {
        title: 'Bake low & slow',
        text: 'Cover and bake for 5 hours, checking every hour and adding bean liquid if they look dry.'
      },
      {
        title: 'Thicken',
        text: 'Uncover for the last 30 minutes so the top darkens and the sauce thickens.',
        tip: 'They\'re done when the beans are creamy and the sauce is dark and syrupy.'
      }
    ],
    notes: [
      'Classic with hot dogs and brown bread. Even better reheated the next day.'
    ]
  },
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
  {
    id: 'ny-cheesecake',
    name: 'New York Cheesecake',
    short: 'Cheesecake',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'New York City',
    emoji: '🍰',
    description: 'Tall, dense and ultra-creamy with a tangy sour-cream richness and a buttery graham cracker crust. Baked gently in a water bath so it never cracks.',
    servings: 12,
    time: { prep: 30, cook: 90, inactive: 480, inactiveLabel: 'chill' },
    heat: 0,
    tags: ['dessert', 'make-ahead', 'holiday'],
    ingredients: [
      { group: 'Crust', qty: 1.75, unit: 'cup', item: 'graham cracker crumbs', aisle: 'pantry' },
      { group: 'Crust', qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' },
      { group: 'Crust', qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 32, unit: 'oz', item: 'cream cheese', note: '4 blocks, room temperature', aisle: 'dairy' },
      { group: 'Filling', qty: 1.25, unit: 'cup', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, unit: 'cup', item: 'sour cream', note: 'room temperature', aisle: 'dairy' },
      { group: 'Filling', qty: 2, unit: 'tsp', item: 'vanilla extract', aisle: 'pantry' },
      { group: 'Filling', qty: 0.5, item: 'lemon', note: 'zested', shop: 'lemons', aisle: 'produce' },
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Filling', qty: 4, item: 'eggs', note: 'room temperature', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Crust',
        text: 'Heat the oven to 350°F. Mix the crumbs, butter and sugar and press firmly into the bottom of a 9-inch springform pan. Bake for 10 minutes, then cool. Lower the oven to 325°F.'
      },
      {
        title: 'Filling',
        text: 'Beat the cream cheese and sugar on low speed until smooth. Beat in the sour cream, vanilla, lemon zest and flour. Add the eggs one at a time, mixing just until blended.',
        tip: 'Mix on low and don\'t overbeat. Air bubbles cause cracks.'
      },
      {
        title: 'Water bath',
        text: 'Wrap the outside of the pan in two layers of heavy foil. Pour in the filling, set it in a roasting pan, and add hot water halfway up the sides.'
      },
      {
        title: 'Bake',
        text: 'Bake for 75 minutes until the edges are set but the center still jiggles slightly.'
      },
      {
        title: 'Cool slowly',
        text: 'Turn off the oven, crack the door, and leave the cheesecake inside for 1 hour. Then chill for at least 8 hours before slicing.'
      }
    ],
    notes: [
      'Run a hot knife between slices for clean cuts. Top with cherries or strawberries if you like.'
    ]
  },
  {
    id: 'ny-pizza',
    name: 'New York-Style Cheese Pizza',
    short: 'NY pizza',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'New York City',
    emoji: '🍕',
    description: 'Big, thin, foldable slices: a chewy cold-fermented crust, a simple oregano-scented tomato sauce and plenty of low-moisture mozzarella, baked as hot as your oven goes.',
    servings: 4,
    time: { prep: 30, cook: 15, inactive: 1440, inactiveLabel: 'cold-ferment dough' },
    heat: 0,
    tags: ['pizza', 'vegetarian', 'weekend project'],
    ingredients: [
      { group: 'Dough', qty: 3, unit: 'cup', item: 'bread flour', aisle: 'pantry' },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'instant yeast', aisle: 'pantry' },
      { group: 'Dough', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Dough', qty: 1.25, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Dough', qty: 1, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 14, unit: 'oz', item: 'canned whole peeled tomatoes', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Sauce', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Sauce', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Topping', qty: 12, unit: 'oz', item: 'low-moisture mozzarella', note: 'shredded', aisle: 'dairy' },
      { group: 'Topping', qty: 1, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' },
      { group: 'Topping', item: 'red pepper flakes', note: 'for the table', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Make the dough',
        text: 'Mix the flour, yeast, salt, sugar, water and oil into a shaggy dough. Knead for 8 minutes until smooth and elastic. Divide into 2 balls, place in oiled containers and refrigerate for 24 hours.',
        tip: 'The long cold ferment gives the crust its flavor and blistered chew. 1–3 days all work.'
      },
      {
        title: 'Warm the dough',
        text: 'Take the dough out 2 hours before baking. Put a pizza stone or steel on the top rack and heat the oven to its highest setting (500–550°F) for 45 minutes.'
      },
      {
        title: 'Make the sauce',
        text: 'Crush the tomatoes by hand or blitz briefly with the garlic, oregano and salt. Don\'t cook it.'
      },
      {
        title: 'Stretch',
        text: 'Stretch one ball into a 14-inch round on a floured peel, keeping the edges slightly thicker.'
      },
      {
        title: 'Top',
        text: 'Spread a thin layer of sauce, then cover with mozzarella and a sprinkle of Parmigiano.'
      },
      {
        title: 'Bake',
        text: 'Slide onto the stone and bake for 8 minutes until the crust is spotted brown and the cheese is bubbling. Repeat with the second pizza.'
      }
    ],
    notes: [
      'No stone? Bake on an upside-down sheet pan heated in the oven.'
    ]
  },
  {
    id: 'yankee-pot-roast',
    name: 'Yankee Pot Roast',
    short: 'Pot roast',
    continent: 'North America',
    region: 'Northeastern',
    cuisine: 'New England',
    emoji: '🥘',
    description: 'A Sunday chuck roast braised for hours with onions, carrots and potatoes in red wine and stock until it falls apart, with a rich, glossy gravy.',
    servings: 6,
    time: { prep: 20, cook: 210 },
    heat: 0,
    tags: ['beef', 'braise', 'sunday supper', 'comfort'],
    ingredients: [
      { qty: 3.5, unit: 'lb', item: 'beef chuck roast', note: 'one piece', aisle: 'meat' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'in wedges', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'dry red wine', aisle: 'other' },
      { qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 4, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 2, unit: 'sprig', item: 'fresh rosemary', aisle: 'produce' },
      { qty: 2, item: 'bay leaves', aisle: 'spices' },
      { qty: 5, item: 'carrots', note: 'in large chunks', aisle: 'produce' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'halved', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'cornstarch', note: 'mixed with 2 tbsp water', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Sear',
        text: 'Heat the oven to 300°F. Season the roast all over and sear in the oil in a Dutch oven over medium-high heat for 5 minutes per side until deeply browned. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onions for 5 minutes, then add the garlic and tomato paste for 1 minute.'
      },
      {
        title: 'Deglaze',
        text: 'Pour in the wine and scrape up the browned bits. Simmer for 2 minutes, then add the stock, Worcestershire, herbs and bay leaves.'
      },
      {
        title: 'Braise',
        text: 'Return the roast, cover, and braise in the oven for 2 hours.'
      },
      {
        title: 'Add vegetables',
        text: 'Nestle the carrots and potatoes around the roast and braise for 1 hour more, until everything is fork-tender.'
      },
      {
        title: 'Gravy & serve',
        text: 'Move the meat and vegetables to a platter. Skim the fat, discard the herb stems, and simmer the liquid with the cornstarch slurry for 2 minutes until glossy. Serve with the gravy.'
      }
    ],
    notes: [
      'Leftovers make the best hot roast beef sandwiches.'
    ]
  },
  // ───────────────────────── Southern & Soul Food ─────────────────────────
  {
    id: 'biscuits-and-gravy',
    name: 'Biscuits & Sausage Gravy',
    short: 'Biscuits & gravy',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'American South',
    emoji: '🥯',
    description: 'Tall, flaky buttermilk biscuits split open and smothered in a peppery, creamy breakfast-sausage gravy. Sunday morning in the South.',
    servings: 6,
    time: { prep: 20, cook: 25 },
    heat: 0,
    tags: ['breakfast', 'pork', 'comfort'],
    ingredients: [
      { group: 'Biscuits', qty: 2.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Biscuits', qty: 1, unit: 'tbsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Biscuits', qty: 0.5, unit: 'tsp', item: 'baking soda', aisle: 'pantry' },
      { group: 'Biscuits', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Biscuits', qty: 1, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Biscuits', qty: 10, unit: 'tbsp', item: 'unsalted butter', note: 'very cold, cubed, plus 2 tbsp melted', aisle: 'dairy' },
      { group: 'Biscuits', qty: 1, unit: 'cup', item: 'buttermilk', note: 'cold', aisle: 'dairy' },
      { group: 'Gravy', qty: 1, unit: 'lb', item: 'breakfast sausage', note: 'bulk', aisle: 'meat' },
      { group: 'Gravy', qty: 0.25, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Gravy', qty: 3, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Gravy', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Gravy', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Make the dough',
        text: 'Heat the oven to 450°F. Whisk the flour, baking powder, baking soda, salt and sugar. Cut in the cold butter until pea-sized, then stir in the buttermilk just until a shaggy dough forms.'
      },
      {
        title: 'Fold for layers',
        text: 'Pat the dough into a rectangle, fold it in thirds like a letter, and repeat 3 times. Pat to 1 inch thick.',
        tip: 'The folds create the flaky layers. Keep everything cold.'
      },
      {
        title: 'Cut & bake',
        text: 'Cut straight down with a 2½-inch cutter (no twisting). Bake touching each other on a sheet pan for 15 minutes until tall and golden. Brush with melted butter.'
      },
      {
        title: 'Brown the sausage',
        text: 'Meanwhile, brown the sausage in a skillet over medium heat for 8 minutes, breaking it up. Don\'t drain the fat.'
      },
      {
        title: 'Make the gravy',
        text: 'Sprinkle in the flour and stir for 1 minute. Slowly pour in the milk, stirring, and simmer for 5 minutes until thick. Season with plenty of pepper and the salt.'
      },
      {
        title: 'Serve',
        text: 'Split the warm biscuits and smother with gravy.'
      }
    ],
    notes: [
      'Freeze cut, unbaked biscuits and bake from frozen, adding 3 minutes.'
    ]
  },
  {
    id: 'carolina-pulled-pork',
    name: 'Carolina Pulled Pork',
    short: 'Pulled pork',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'North Carolina',
    emoji: '🐷',
    description: 'Spice-rubbed pork shoulder slow-roasted until it falls apart, then tossed with a tangy, peppery Eastern Carolina vinegar sauce. Pile it on buns with slaw.',
    servings: 10,
    time: { prep: 20, cook: 360 },
    heat: 1,
    tags: ['pork', 'barbecue', 'party', 'make-ahead'],
    ingredients: [
      { group: 'Pork', qty: 6, unit: 'lb', item: 'bone-in pork shoulder', note: 'Boston butt', aisle: 'meat' },
      { group: 'Pork', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 2, unit: 'tbsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Pork', qty: 1, unit: 'tbsp', item: 'smoked paprika', aisle: 'spices' },
      { group: 'Pork', qty: 1, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 2, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Pork', qty: 2, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Vinegar sauce', qty: 1.5, unit: 'cup', item: 'apple cider vinegar', aisle: 'pantry' },
      { group: 'Vinegar sauce', qty: 2, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Vinegar sauce', qty: 1, unit: 'tbsp', item: 'red pepper flakes', aisle: 'spices' },
      { group: 'Vinegar sauce', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Vinegar sauce', qty: 1, unit: 'tbsp', item: 'Louisiana hot sauce', aisle: 'pantry' },
      { group: 'To serve', qty: 10, item: 'hamburger buns', aisle: 'bakery' },
      { group: 'To serve', qty: 4, unit: 'cup', item: 'coleslaw', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Rub',
        text: 'Mix the sugar, paprikas, salt, pepper and garlic powder and rub it all over the pork. Rest for 30 minutes (or overnight in the fridge).'
      },
      {
        title: 'Slow roast',
        text: 'Roast fat side up in a roasting pan at 300°F for 6 hours, until the bone wiggles free and the pork registers about 200°F.',
        tip: 'For smoke flavor without a smoker, add 1 tsp liquid smoke to the sauce.'
      },
      {
        title: 'Make the sauce',
        text: 'Shake the vinegar, sugar, pepper flakes, salt and hot sauce together in a jar.'
      },
      {
        title: 'Pull',
        text: 'Rest the pork for 20 minutes, then pull it into shreds with two forks, discarding the bone and fat.'
      },
      {
        title: 'Sauce & serve',
        text: 'Toss the pork with about half the vinegar sauce. Pile onto buns, top with coleslaw, and pass the extra sauce.'
      }
    ],
    notes: [
      'Slow cooker: 10 hours on low. Freezes well with a splash of sauce.'
    ]
  },
  {
    id: 'chicken-and-dumplings',
    name: 'Chicken & Dumplings',
    short: 'Chicken & dumplings',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'American South',
    emoji: '🥟',
    description: 'Tender chicken in a creamy, savory broth with carrots and celery, topped with fluffy drop dumplings that steam right on top of the stew.',
    servings: 6,
    time: { prep: 20, cook: 60 },
    heat: 0,
    tags: ['chicken', 'comfort', 'one-pot', 'winter'],
    ingredients: [
      { group: 'Stew', qty: 4, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Stew', qty: 3, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { group: 'Stew', qty: 3, unit: 'stalk', item: 'celery', note: 'sliced', aisle: 'produce' },
      { group: 'Stew', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stew', qty: 0.33, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Stew', qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Stew', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', aisle: 'meat' },
      { group: 'Stew', qty: 3, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { group: 'Stew', qty: 1, item: 'bay leaves', aisle: 'spices' },
      { group: 'Stew', qty: 0.5, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Dumplings', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dumplings', qty: 1, unit: 'tbsp', item: 'baking powder', aisle: 'pantry' },
      { group: 'Dumplings', qty: 0.75, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dumplings', qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Dumplings', qty: 4, unit: 'tbsp', item: 'unsalted butter', note: 'melted', aisle: 'dairy' },
      { group: 'Dumplings', qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Soften the vegetables',
        text: 'Melt the butter in a Dutch oven over medium heat. Cook the onion, carrots and celery for 8 minutes, then the garlic for 1 minute.'
      },
      {
        title: 'Thicken',
        text: 'Sprinkle in the flour and stir for 1 minute. Slowly whisk in the stock.'
      },
      {
        title: 'Poach the chicken',
        text: 'Add the chicken, thyme and bay leaf and simmer for 20 minutes. Lift out the chicken, shred it, and return it to the pot with the cream, salt and pepper.'
      },
      {
        title: 'Mix the dumplings',
        text: 'Whisk the flour, baking powder and salt. Stir in the milk, melted butter and parsley just until combined.'
      },
      {
        title: 'Steam the dumplings',
        text: 'Drop heaping spoonfuls onto the simmering stew. Cover and cook for 15 minutes without lifting the lid, until the dumplings are fluffy and cooked through.',
        tip: 'No peeking. The steam is what makes them light.'
      }
    ],
    notes: [
      'Rotisserie chicken shortcut: skip poaching and add 4 cups shredded chicken with the cream.'
    ]
  },
  {
    id: 'nashville-hot-chicken',
    name: 'Nashville Hot Chicken',
    short: 'Hot chicken',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'Nashville',
    emoji: '🔥',
    description: 'Crunchy buttermilk fried chicken brushed with a blazing cayenne-and-brown-sugar chili oil, served on white bread with pickles.',
    servings: 4,
    time: { prep: 20, cook: 30, inactive: 240, inactiveLabel: 'brine' },
    heat: 3,
    tags: ['chicken', 'fried', 'spicy'],
    ingredients: [
      { group: 'Chicken', qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', aisle: 'meat' },
      { group: 'Chicken', qty: 1.5, unit: 'cup', item: 'buttermilk', aisle: 'dairy' },
      { group: 'Chicken', qty: 2, unit: 'tbsp', item: 'Louisiana hot sauce', aisle: 'pantry' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 2, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Dredge', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 1, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Dredge', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Dredge', qty: 6, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry' },
      { group: 'Hot oil', qty: 3, unit: 'tbsp', item: 'cayenne pepper', note: 'use less for medium', aisle: 'spices' },
      { group: 'Hot oil', qty: 1, unit: 'tbsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { group: 'Hot oil', qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Hot oil', qty: 0.5, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'To serve', qty: 8, unit: 'slice', item: 'white sandwich bread', aisle: 'bakery' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'dill pickle chips', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Brine',
        text: 'Whisk the buttermilk, hot sauce and salt. Add the chicken and refrigerate for at least 4 hours.'
      },
      {
        title: 'Dredge',
        text: 'Whisk the flour, salt, garlic powder and pepper. Dredge the chicken, dip it back in the buttermilk, then dredge again, pressing to build a thick coat.'
      },
      {
        title: 'Fry',
        text: 'Heat 2 inches of oil to 350°F. Fry the chicken in batches for 6 minutes, turning once, until deep golden and 175°F inside. Drain on a rack.'
      },
      {
        title: 'Make the hot oil',
        text: 'Carefully ladle ½ cup of the hot frying oil into a heatproof bowl and whisk in the cayenne, brown sugar, paprika and garlic powder.',
        tip: 'This is seriously spicy. Start with 1 tbsp cayenne if you\'re unsure.'
      },
      {
        title: 'Paint & serve',
        text: 'Brush the spicy oil all over the hot chicken. Serve on slices of white bread with plenty of pickles.'
      }
    ],
    notes: [
      'Serve with coleslaw and a cold drink to put out the fire.'
    ]
  },
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
    id: 'skillet-cornbread',
    name: 'Skillet Cornbread',
    short: 'Cornbread',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'American South',
    emoji: '🌽',
    description: 'Golden, crisp-edged buttermilk cornbread baked in a sizzling-hot cast-iron skillet. Lightly sweet, tender, and perfect with chili, greens or beans.',
    servings: 8,
    time: { prep: 10, cook: 25 },
    heat: 0,
    tags: ['side', 'bread', 'vegetarian'],
    ingredients: [
      { qty: 6, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'yellow cornmeal', note: 'medium grind', aisle: 'pantry' },
      { qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tsp', item: 'baking powder', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'baking soda', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'cup', item: 'buttermilk', aisle: 'dairy' },
      { qty: 2, item: 'eggs', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Heat the skillet',
        text: 'Put the butter in a 10-inch cast-iron skillet and place it in the oven while it heats to 425°F.'
      },
      {
        title: 'Mix',
        text: 'Whisk the cornmeal, flour, sugar, baking powder, baking soda and salt. In another bowl whisk the buttermilk and eggs.'
      },
      {
        title: 'Combine',
        text: 'Pour most of the melted butter from the skillet into the buttermilk mixture (leave a coating in the pan), then stir it into the dry ingredients just until combined.'
      },
      {
        title: 'Bake',
        text: 'Pour the batter into the hot skillet. It should sizzle. Bake for 20 minutes until golden and a toothpick comes out clean.',
        tip: 'The sizzling skillet is what gives cornbread its crunchy edge.'
      },
      {
        title: 'Serve',
        text: 'Cool for 5 minutes, then cut into wedges and serve warm with butter and honey.'
      }
    ],
    notes: [
      'Add 1 cup cheddar and a diced jalapeño to the batter for jalapeño-cheddar cornbread.'
    ]
  },
  {
    id: 'smothered-pork-chops',
    name: 'Smothered Pork Chops',
    short: 'Smothered chops',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'Soul food',
    emoji: '🍖',
    description: 'Seasoned, seared bone-in pork chops braised low and slow in a rich onion gravy until fork-tender. Serve over rice to catch every drop.',
    servings: 4,
    time: { prep: 15, cook: 60 },
    heat: 0,
    tags: ['pork', 'comfort', 'one-pan'],
    ingredients: [
      { qty: 4, item: 'bone-in pork chops', note: '1 inch thick', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'onion powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 0.5, unit: 'cup', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'sprig', item: 'fresh thyme', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'heavy cream', aisle: 'dairy', optional: true },
      { qty: 1.5, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Season & dredge',
        text: 'Mix the salt, pepper, garlic powder, onion powder and paprika and season the chops. Dredge in flour, shaking off the excess, and keep 2 tbsp of the flour.'
      },
      {
        title: 'Sear',
        text: 'Brown the chops in the oil in a large skillet over medium-high heat for 4 minutes per side. Set aside.'
      },
      {
        title: 'Onions & roux',
        text: 'Lower the heat to medium and cook the onions for 10 minutes until golden. Add the garlic for 1 minute, then sprinkle in the reserved flour and stir for 1 minute.'
      },
      {
        title: 'Gravy',
        text: 'Whisk in the stock, scraping up the browned bits, and add the thyme.'
      },
      {
        title: 'Smother',
        text: 'Nestle the chops into the gravy, cover, and simmer on low for 35 minutes until fork-tender. Stir in the cream. Serve over rice.'
      }
    ],
    notes: [
      'Mashed potatoes work just as well as rice.'
    ]
  },
  {
    id: 'baked-mac-and-cheese',
    name: 'Soul Food Baked Mac & Cheese',
    short: 'Mac & cheese',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'Soul food',
    emoji: '🧀',
    description: 'The holiday-table kind: elbow macaroni baked in a rich, custardy blend of three cheeses with evaporated milk and eggs, under a golden, cheesy top.',
    servings: 10,
    time: { prep: 20, cook: 50 },
    heat: 0,
    tags: ['side', 'cheese', 'holiday', 'vegetarian'],
    ingredients: [
      { qty: 4, unit: 'cup', item: 'elbow macaroni', note: '1 lb', aisle: 'pantry' },
      { qty: 4, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, unit: 'lb', item: 'sharp cheddar', note: 'shredded, divided', aisle: 'dairy' },
      { qty: 8, unit: 'oz', item: 'Monterey Jack', note: 'shredded', aisle: 'dairy' },
      { qty: 4, unit: 'oz', item: 'Gruyère', note: 'shredded, or more cheddar', aisle: 'dairy' },
      { qty: 1.5, unit: 'cup', item: 'evaporated milk', note: '1 can', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'Dijon mustard', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Cook the pasta',
        text: 'Heat the oven to 350°F. Cook the macaroni 2 minutes less than the package says. Drain and toss with the butter.'
      },
      {
        title: 'Make the custard',
        text: 'Whisk the evaporated milk, milk, eggs, salt, pepper, half the paprika, garlic powder and mustard.'
      },
      {
        title: 'Layer',
        text: 'In a buttered 9x13 dish, layer half the macaroni, half the cheese, the rest of the macaroni, and most of the remaining cheese, saving a big handful for the top.'
      },
      {
        title: 'Pour & top',
        text: 'Pour the custard over everything, top with the reserved cheese, and dust with the rest of the paprika.'
      },
      {
        title: 'Bake',
        text: 'Bake for 35 minutes until set and golden. Rest for 10 minutes before cutting.',
        tip: 'The rest lets the custard set so it slices into neat, cheesy squares.'
      }
    ],
    notes: [
      'Assemble the day before and bake straight from the fridge, adding 10 minutes.'
    ]
  },
  {
    id: 'collard-greens',
    name: 'Southern Collard Greens',
    short: 'Collards',
    continent: 'North America',
    region: 'Southern & Soul Food',
    cuisine: 'Soul food',
    emoji: '🥬',
    description: 'Collards slowly braised with a smoked turkey wing, onion, garlic and a splash of vinegar until silky. Save the pot likker for dunking cornbread.',
    servings: 6,
    time: { prep: 20, cook: 90 },
    heat: 1,
    tags: ['side', 'greens', 'holiday'],
    ingredients: [
      { qty: 1, item: 'smoked turkey wing', note: 'or a smoked ham hock', aisle: 'meat' },
      { qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { qty: 2, unit: 'bunch', item: 'collard greens', note: 'stems removed, cut into ribbons', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'apple cider vinegar', aisle: 'pantry' },
      { qty: 1, unit: 'tsp', item: 'brown sugar', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { item: 'Louisiana hot sauce', note: 'for the table', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Make the broth',
        text: 'Simmer the smoked turkey wing in the stock for 30 minutes to flavor it.'
      },
      {
        title: 'Aromatics',
        text: 'In a large pot, heat the oil over medium heat. Cook the onion for 6 minutes, then the garlic and pepper flakes for 1 minute.'
      },
      {
        title: 'Wilt the greens',
        text: 'Add the greens a few handfuls at a time, letting each batch wilt.',
        tip: 'Wash collards in a sink full of water twice. They hold a lot of grit.'
      },
      {
        title: 'Braise',
        text: 'Add the turkey and broth, vinegar, sugar and salt. Cover and simmer for 1 hour until silky and tender.'
      },
      {
        title: 'Serve',
        text: 'Pull the meat off the turkey wing and stir it back in. Serve with hot sauce and cornbread for the pot likker.'
      }
    ],
    notes: [
      'Collards are even better the next day.'
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
    id: 'beef-fajitas',
    name: 'Beef Fajitas',
    short: 'Fajitas',
    continent: 'North America',
    region: 'Tex-Mex & Southwestern',
    cuisine: 'Texas',
    emoji: '🫑',
    description: 'Sizzling lime-and-cumin marinated skirt steak with charred peppers and onions, wrapped in warm flour tortillas with all the fixings.',
    servings: 4,
    time: { prep: 20, cook: 20, inactive: 60, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['beef', 'weeknight', 'crowd-pleaser'],
    ingredients: [
      { group: 'Steak', qty: 1.5, unit: 'lb', item: 'skirt steak', aisle: 'meat' },
      { group: 'Steak', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Steak', qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'divided', aisle: 'pantry', staple: true },
      { group: 'Steak', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Steak', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Steak', qty: 1.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Steak', qty: 1, unit: 'tsp', item: 'chili powder', aisle: 'spices' },
      { group: 'Steak', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Vegetables', qty: 1, item: 'red bell peppers', note: 'sliced', aisle: 'produce' },
      { group: 'Vegetables', qty: 1, item: 'green bell pepper', note: 'sliced', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Vegetables', qty: 1, item: 'yellow onions', note: 'sliced', aisle: 'produce' },
      { group: 'To serve', qty: 8, item: 'flour tortillas', aisle: 'bakery' },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'sour cream', aisle: 'dairy' },
      { group: 'To serve', qty: 1, unit: 'cup', item: 'pico de gallo', note: 'or salsa', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' },
      { group: 'To serve', qty: 4, unit: 'oz', item: 'sharp cheddar', note: 'shredded', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Marinate',
        text: 'Whisk the lime juice, 2 tbsp oil, garlic, soy sauce, cumin, chili powder and salt. Coat the steak and marinate for 1 hour.'
      },
      {
        title: 'Sear the steak',
        text: 'Heat a cast-iron skillet over high heat until smoking. Sear the steak for 3 minutes per side for medium. Rest for 5 minutes.'
      },
      {
        title: 'Char the vegetables',
        text: 'Add the remaining oil, peppers and onion to the hot pan and cook for 6 minutes, tossing, until charred but still crisp.'
      },
      {
        title: 'Slice',
        text: 'Slice the steak thinly against the grain and toss it back in with the vegetables and any juices.'
      },
      {
        title: 'Serve',
        text: 'Bring the skillet to the table sizzling, with warm tortillas, sour cream, pico de gallo, avocado and cheese.'
      }
    ],
    notes: [
      'Chicken fajitas: use boneless thighs and cook for 5 minutes per side.'
    ]
  },
  {
    id: 'green-chile-stew',
    name: 'New Mexico Green Chile Stew',
    short: 'Green chile stew',
    continent: 'North America',
    region: 'Tex-Mex & Southwestern',
    cuisine: 'New Mexico',
    emoji: '🌶️',
    description: 'A soulful Southwestern stew of tender pork, potatoes and plenty of roasted Hatch green chiles in a savory, gently spicy broth.',
    servings: 6,
    time: { prep: 20, cook: 120 },
    heat: 2,
    tags: ['pork', 'stew', 'winter'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'boneless pork shoulder', note: 'in 1-inch cubes', aisle: 'meat' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { qty: 6, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'roasted Hatch green chiles', note: 'peeled and chopped (frozen or jarred)', aisle: 'frozen' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'in 1-inch cubes', aisle: 'produce' },
      { qty: 6, item: 'flour tortillas', note: 'warm, to serve', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Brown the pork',
        text: 'Season the pork with salt and toss with the flour. Brown in batches in the oil in a Dutch oven over medium-high heat, about 8 minutes per batch.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onion for 5 minutes, then add the garlic, cumin and oregano for 1 minute.'
      },
      {
        title: 'Simmer',
        text: 'Add the stock, chiles and pork. Bring to a boil, then cover and simmer for 1 hour.'
      },
      {
        title: 'Potatoes',
        text: 'Add the potatoes and simmer uncovered for 30 minutes until tender and the stew has thickened slightly.'
      },
      {
        title: 'Serve',
        text: 'Season to taste and serve with warm flour tortillas.'
      }
    ],
    notes: [
      'Hatch chiles vary from mild to hot. Taste a piece before adding them all.'
    ]
  },
  {
    id: 'oven-texas-brisket',
    name: 'Oven Texas-Style Brisket',
    short: 'Brisket',
    continent: 'North America',
    region: 'Tex-Mex & Southwestern',
    cuisine: 'Central Texas',
    emoji: '🥩',
    description: 'Salt-and-pepper brisket with a dark, peppery bark and buttery tender slices, made in the oven with a touch of smoked paprika for barbecue flavor.',
    servings: 10,
    time: { prep: 20, cook: 420, inactive: 60, inactiveLabel: 'rest' },
    heat: 0,
    tags: ['beef', 'barbecue', 'weekend project', 'party'],
    ingredients: [
      { qty: 6, unit: 'lb', item: 'beef brisket', note: 'flat cut, fat trimmed to ¼ inch', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'black pepper', note: 'coarsely ground', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'tbsp', item: 'smoked paprika', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { qty: 1, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { qty: 10, unit: 'slice', item: 'white sandwich bread', note: 'to serve', aisle: 'bakery' },
      { item: 'pickles and sliced onion', note: 'to serve', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Season',
        text: 'Mix the salt, pepper, paprika and garlic powder and rub it all over the brisket. Let it sit at room temperature while the oven heats to 275°F.'
      },
      {
        title: 'Roast uncovered',
        text: 'Roast fat side up on a rack in a roasting pan for 3 hours, until a dark bark forms.'
      },
      {
        title: 'Wrap',
        text: 'Pour the stock and Worcestershire into the pan. Wrap the brisket tightly in foil (or butcher paper) and return it to the oven for 4 hours, until a probe slides in like butter (about 203°F).',
        tip: 'Go by tenderness, not time. Every brisket is different.'
      },
      {
        title: 'Rest',
        text: 'Rest the brisket, still wrapped, for at least 1 hour.'
      },
      {
        title: 'Slice & serve',
        text: 'Slice against the grain into pencil-thick slices. Serve Texas-style with white bread, pickles and onion, with the pan juices on the side.'
      }
    ],
    notes: [
      'Got a smoker? Same rub, smoke at 250°F until 165°F inside, then wrap and finish.'
    ]
  },
  {
    id: 'tex-mex-cheese-enchiladas',
    name: 'Tex-Mex Cheese Enchiladas',
    short: 'Cheese enchiladas',
    continent: 'North America',
    region: 'Tex-Mex & Southwestern',
    cuisine: 'Texas',
    emoji: '🧀',
    description: 'Old-school Texas diner enchiladas: corn tortillas rolled around cheddar and onion, smothered in a rich, cumin-heavy chili gravy and baked until bubbling.',
    servings: 6,
    time: { prep: 20, cook: 40 },
    heat: 1,
    tags: ['vegetarian-adaptable', 'cheese', 'casserole'],
    ingredients: [
      { group: 'Chili gravy', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Chili gravy', qty: 3, unit: 'tbsp', item: 'all-purpose flour', aisle: 'pantry' },
      { group: 'Chili gravy', qty: 3, unit: 'tbsp', item: 'chili powder', aisle: 'spices' },
      { group: 'Chili gravy', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chili gravy', qty: 1, unit: 'tsp', item: 'garlic powder', aisle: 'spices' },
      { group: 'Chili gravy', qty: 1, unit: 'tsp', item: 'dried Mexican oregano', aisle: 'spices' },
      { group: 'Chili gravy', qty: 2, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Chili gravy', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Enchiladas', qty: 12, item: 'corn tortillas', aisle: 'bakery' },
      { group: 'Enchiladas', qty: 0.25, unit: 'cup', item: 'vegetable oil', note: 'for softening', aisle: 'pantry', staple: true },
      { group: 'Enchiladas', qty: 1, unit: 'lb', item: 'sharp cheddar', note: 'shredded, divided', aisle: 'dairy' },
      { group: 'Enchiladas', qty: 1, item: 'white onion', note: 'finely chopped, divided', shop: 'white onions', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Make the chili gravy',
        text: 'Heat the oil in a saucepan over medium heat, whisk in the flour, and cook for 2 minutes. Whisk in the chili powder, cumin, garlic powder and oregano for 30 seconds, then slowly whisk in the stock. Add the salt and simmer for 10 minutes until thick.'
      },
      {
        title: 'Soften the tortillas',
        text: 'Heat the oven to 400°F. Dip each tortilla in hot oil for a few seconds per side to soften.'
      },
      {
        title: 'Roll',
        text: 'Fill each tortilla with a small handful of cheese and onion, roll up, and place seam side down in a 9x13 dish.'
      },
      {
        title: 'Smother & bake',
        text: 'Pour the gravy over the top, scatter with the remaining cheese, and bake for 20 minutes until bubbling.'
      },
      {
        title: 'Serve',
        text: 'Sprinkle with the rest of the onion and serve with rice and refried beans.'
      }
    ],
    notes: [
      'Add a layer of seasoned ground beef inside for beef enchiladas.'
    ]
  },
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
