// South America recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ────────────────────────────── Argentine ───────────────────────────────
  {
    id: 'argentine-empanadas',
    name: 'Beef Empanadas',
    nativeName: 'Empanadas de Carne',
    short: 'Empanadas',
    continent: 'South America',
    region: 'Argentine',
    cuisine: 'Tucumán',
    emoji: '🥟',
    description: 'Golden baked pastries filled with juicy hand-cut beef, onion, cumin, paprika, olives and egg, crimped into the classic repulgue braid.',
    servings: 6,
    time: { prep: 60, cook: 45, inactive: 60, inactiveLabel: 'chill filling' },
    heat: 1,
    tags: ['beef', 'pastry', 'party', 'freezer-friendly'],
    ingredients: [
      { group: 'Filling', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 2, item: 'yellow onions', note: 'finely diced', aisle: 'produce' },
      { group: 'Filling', qty: 1, item: 'red bell peppers', note: 'finely diced', aisle: 'produce' },
      { group: 'Filling', qty: 1.5, unit: 'lb', item: 'beef chuck roast', note: 'finely diced (or ground beef)', aisle: 'meat' },
      { group: 'Filling', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Filling', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { group: 'Filling', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'Filling', qty: 2, item: 'eggs', note: 'hard-boiled and chopped', aisle: 'dairy' },
      { group: 'Filling', qty: 0.33, unit: 'cup', item: 'green olives', note: 'chopped', aisle: 'pantry' },
      { group: 'Pastry', qty: 12, item: 'empanada discs', note: 'frozen, thawed (e.g. Goya or La Salteña)', aisle: 'frozen' },
      { group: 'Pastry', qty: 1, item: 'eggs', note: 'beaten, for egg wash', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Cook the filling',
        text: 'Heat the oil and cook the onions and pepper for 10 minutes until soft. Add the beef and cook for 8 minutes until browned. Stir in the cumin, paprika, pepper flakes and salt.'
      },
      {
        title: 'Chill',
        text: 'Off the heat, stir in the scallions. Spread on a tray and chill for 1 hour until cold.',
        tip: 'Cold filling is easier to work with and keeps the pastry flaky.'
      },
      {
        title: 'Fill',
        text: 'Heat the oven to 400°F. Place 2 tbsp filling on each disc, add a little chopped egg and olive, fold, and seal by crimping or folding the edge into a braid.'
      },
      {
        title: 'Bake',
        text: 'Brush with egg wash and bake for 20 minutes until golden.'
      },
      {
        title: 'Serve',
        text: 'Serve hot, with chimichurri for dipping.'
      }
    ],
    notes: [
      'Freeze unbaked empanadas and bake from frozen, adding about 10 minutes.'
    ]
  },
  {
    id: 'argentine-locro',
    name: 'Locro',
    short: 'Locro',
    continent: 'South America',
    region: 'Argentine',
    cuisine: 'Andean · national holiday',
    emoji: '🍲',
    description: 'Argentina\'s patriotic stew for May 25th: hominy, white beans, squash, pork and chorizo simmered into a thick, hearty pot, topped with a spicy red oil.',
    servings: 8,
    time: { prep: 30, cook: 180, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 1,
    tags: ['stew', 'pork', 'holiday', 'winter'],
    ingredients: [
      { group: 'Locro', qty: 0.5, unit: 'lb', item: 'dried white beans', aisle: 'pantry' },
      { group: 'Locro', qty: 2, unit: 'can', item: 'white hominy', note: '25 oz each, drained', aisle: 'international' },
      { group: 'Locro', qty: 1, unit: 'lb', item: 'boneless pork shoulder', note: 'in 1-inch cubes', aisle: 'meat' },
      { group: 'Locro', qty: 1, unit: 'lb', item: 'beef chuck roast', note: 'in 1-inch cubes', aisle: 'meat' },
      { group: 'Locro', qty: 8, unit: 'oz', item: 'Spanish chorizo', note: 'sliced', aisle: 'meat' },
      { group: 'Locro', qty: 4, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { group: 'Locro', qty: 2, unit: 'lb', item: 'calabaza or butternut squash', note: 'cubed', aisle: 'produce' },
      { group: 'Locro', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Locro', qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Locro', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Locro', qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Red oil', qty: 0.25, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Red oil', qty: 4, item: 'scallions', note: 'sliced', aisle: 'produce' },
      { group: 'Red oil', qty: 1, unit: 'tbsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Red oil', qty: 1, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the beans overnight (12 hours). Drain.'
      },
      {
        title: 'Brown',
        text: 'In a large pot, cook the bacon and chorizo for 6 minutes. Add the pork and beef and brown for 8 minutes. Add the onion for 5 minutes.'
      },
      {
        title: 'Simmer',
        text: 'Add the beans, hominy, half the squash, the water, cumin and salt. Simmer for 2 hours, stirring often.'
      },
      {
        title: 'Thicken',
        text: 'Add the remaining squash and simmer for 45 minutes more until the first batch of squash dissolves and the stew is thick.',
        tip: 'Stir frequently near the end. Locro thickens a lot and can catch on the bottom.'
      },
      {
        title: 'Red oil',
        text: 'Warm the oil with the scallions for 2 minutes, then stir in the paprika and pepper flakes off the heat.'
      },
      {
        title: 'Serve',
        text: 'Ladle into bowls and spoon the red oil (quiquirimichi) over the top.'
      }
    ],
    notes: [
      'Locro is even better the next day.'
    ]
  },
  {
    id: 'milanesa-napolitana',
    name: 'Milanesa a la Napolitana',
    short: 'Milanesa',
    continent: 'South America',
    region: 'Argentine',
    cuisine: 'Buenos Aires',
    emoji: '🥩',
    description: 'Argentina\'s comfort classic: a thin, crisp breaded beef cutlet topped with tomato sauce, ham and melted mozzarella. Served with fries.',
    servings: 4,
    time: { prep: 25, cook: 25 },
    heat: 0,
    tags: ['beef', 'fried', 'family favorite'],
    ingredients: [
      { qty: 1.5, unit: 'lb', item: 'beef top round', note: 'sliced into ¼-inch cutlets', aisle: 'meat' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 2, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'cup', item: 'plain dry breadcrumbs', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry', staple: true },
      { qty: 0.75, unit: 'cup', item: 'marinara sauce', aisle: 'pantry' },
      { qty: 4, unit: 'oz', item: 'deli ham', note: '4 slices', aisle: 'meat' },
      { qty: 6, unit: 'oz', item: 'low-moisture mozzarella', note: 'sliced', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Pound',
        text: 'Pound the cutlets thin between plastic wrap.'
      },
      {
        title: 'Egg wash',
        text: 'Whisk the eggs with the garlic, parsley and salt. Soak the cutlets in it for 10 minutes.'
      },
      {
        title: 'Bread',
        text: 'Press each cutlet firmly into the breadcrumbs on both sides.'
      },
      {
        title: 'Fry',
        text: 'Fry in the oil over medium-high heat for 2 minutes per side until golden. Drain.'
      },
      {
        title: 'Top & broil',
        text: 'Lay on a sheet pan, spread with marinara, top with ham and mozzarella, sprinkle with oregano, and broil for 3 minutes until the cheese bubbles.'
      }
    ],
    notes: [
      'Plain milanesas (without the topping) make the best sandwiches.'
    ]
  },
  {
    id: 'chimichurri-steak',
    name: 'Steak with Chimichurri',
    nativeName: 'Entraña con Chimichurri',
    short: 'Chimichurri steak',
    continent: 'South America',
    region: 'Argentine',
    emoji: '🥩',
    description: 'Argentine grill-house simplicity: salt-crusted skirt steak seared hard and fast, sliced thin and spooned with a punchy parsley, garlic and vinegar chimichurri.',
    servings: 4,
    time: { prep: 15, cook: 15, inactive: 30, inactiveLabel: 'rest sauce' },
    heat: 1,
    tags: ['beef', 'grilled', 'quick'],
    ingredients: [
      { group: 'Chimichurri', qty: 1, unit: 'cup', item: 'flat-leaf parsley', note: 'finely chopped', aisle: 'produce' },
      { group: 'Chimichurri', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Chimichurri', qty: 2, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Chimichurri', qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { group: 'Chimichurri', qty: 0.25, unit: 'cup', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Chimichurri', qty: 0.5, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Chimichurri', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chimichurri', qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Steak', qty: 2, unit: 'lb', item: 'skirt steak', note: 'or flank steak', aisle: 'meat' },
      { group: 'Steak', qty: 2, unit: 'tsp', item: 'kosher salt', note: 'coarse', aisle: 'pantry', staple: true },
      { group: 'Steak', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Make the chimichurri',
        text: 'Stir together the parsley, garlic, oregano, pepper flakes, vinegar, oil, salt and pepper. Let it sit for 30 minutes so the flavors meld.',
        tip: 'Chop by hand rather than blending. Chimichurri should be loose and oily, not a purée.'
      },
      {
        title: 'Salt the steak',
        text: 'Pat the steak dry and season all over with the coarse salt while the chimichurri rests.'
      },
      {
        title: 'Sear hard',
        text: 'Heat a grill or cast-iron pan until ripping hot and add the oil. Sear the steak for 3 minutes per side for medium-rare. Skirt steak is thin and cooks fast.'
      },
      {
        title: 'Rest & slice',
        text: 'Rest the steak for 5 minutes, then slice thinly against the grain.'
      },
      {
        title: 'Serve',
        text: 'Spoon chimichurri generously over the steak and pass the rest at the table.'
      }
    ],
    notes: [
      'Leftover chimichurri keeps a week in the fridge and is great on chicken, shrimp, eggs and potatoes.'
    ]
  },
  // ────────────────────────────── Brazilian ───────────────────────────────
  {
    id: 'brigadeiros',
    name: 'Brigadeiros',
    short: 'Brigadeiros',
    continent: 'South America',
    region: 'Brazilian',
    emoji: '🍫',
    description: 'Brazil\'s party sweet: fudgy chocolate truffles made from sweetened condensed milk, cocoa and butter, rolled in chocolate sprinkles.',
    servings: 8,
    time: { prep: 20, cook: 15, inactive: 60, inactiveLabel: 'cool' },
    heat: 0,
    tags: ['dessert', 'chocolate', 'party'],
    ingredients: [
      { qty: 14, unit: 'oz', item: 'sweetened condensed milk', note: '1 can', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'unsweetened cocoa powder', aisle: 'pantry' },
      { qty: 1, unit: 'tbsp', item: 'unsalted butter', note: 'plus more for your hands', aisle: 'dairy' },
      { item: 'kosher salt', note: 'a pinch', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'chocolate sprinkles', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Cook',
        text: 'Stir the condensed milk, cocoa, butter and salt in a nonstick pan over medium-low heat for 12 minutes, constantly, until thick and it pulls away from the bottom of the pan.',
        tip: 'Drag a spatula across the pan. If the mixture takes a few seconds to close the gap, it\'s ready.'
      },
      {
        title: 'Cool',
        text: 'Transfer to a buttered plate and cool for 1 hour.'
      },
      {
        title: 'Roll',
        text: 'With buttered hands, roll into 1-inch balls and coat in sprinkles. Place in mini paper cups.'
      }
    ],
    notes: [
      'Beijinhos variation: skip the cocoa, add shredded coconut, and roll in more coconut.'
    ]
  },
  {
    id: 'feijoada',
    name: 'Feijoada',
    short: 'Feijoada',
    continent: 'South America',
    region: 'Brazilian',
    emoji: '🫘',
    description: 'Brazil\'s national dish: black beans slow-cooked with smoked sausage, pork ribs and bacon into a rich, smoky stew, served with rice, greens, farofa and orange.',
    servings: 8,
    time: { prep: 30, cook: 180, inactive: 720, inactiveLabel: 'soak beans' },
    heat: 0,
    tags: ['pork', 'beans', 'stew', 'weekend project'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'dried black beans', aisle: 'pantry' },
      { qty: 8, unit: 'oz', item: 'thick-cut bacon', note: 'diced', aisle: 'meat' },
      { qty: 1.5, unit: 'lb', item: 'pork ribs', note: 'cut into pieces', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'linguiça or chouriço', note: 'sliced', aisle: 'meat' },
      { qty: 1, unit: 'lb', item: 'boneless pork shoulder', note: 'in 1-inch cubes', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 3, item: 'bay leaves', aisle: 'spices' },
      { qty: 10, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { qty: 2, item: 'oranges', note: 'sliced, to serve', aisle: 'produce' },
      { qty: 1, unit: 'bunch', item: 'collard greens', note: 'thinly sliced and sautéed', aisle: 'produce' },
      { qty: 1, unit: 'cup', item: 'farofa (toasted cassava flour)', aisle: 'international' }
    ],
    steps: [
      {
        title: 'Soak',
        text: 'Soak the beans overnight (12 hours). Drain.'
      },
      {
        title: 'Brown the meats',
        text: 'In a large pot, cook the bacon for 6 minutes. Add the ribs, sausage and pork shoulder in batches and brown for 10 minutes. Set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onion in the fat for 6 minutes, then the garlic for 1 minute.'
      },
      {
        title: 'Simmer',
        text: 'Add the beans, meats, bay leaves and water. Bring to a boil, then simmer partly covered for 2.5 hours, stirring occasionally, until the beans are creamy and the meat is tender.'
      },
      {
        title: 'Thicken',
        text: 'Mash a ladle of beans and stir back in. Season with salt.',
        tip: 'Feijoada should be thick and glossy, not soupy.'
      },
      {
        title: 'Serve',
        text: 'Serve with white rice, sautéed collards, orange slices and farofa.'
      }
    ],
    notes: [
      'Traditionally eaten on Wednesdays and Saturdays in Brazil, with a caipirinha.'
    ]
  },
  {
    id: 'picanha',
    name: 'Grilled Picanha',
    short: 'Picanha',
    continent: 'South America',
    region: 'Brazilian',
    cuisine: 'Churrasco',
    emoji: '🥩',
    description: 'The star of Brazilian churrasco: top sirloin cap with its thick fat cap, salted with coarse salt and grilled until crusty and juicy. Served with a bright vinaigrette salsa.',
    servings: 6,
    time: { prep: 15, cook: 25 },
    heat: 0,
    tags: ['beef', 'grilled', 'summer'],
    ingredients: [
      { group: 'Steak', qty: 3, unit: 'lb', item: 'picanha (top sirloin cap)', note: 'fat cap on', aisle: 'meat' },
      { group: 'Steak', qty: 1, unit: 'tbsp', item: 'coarse sea salt', aisle: 'spices' },
      { group: 'Molho à campanha', qty: 2, item: 'Roma tomatoes', note: 'finely diced', aisle: 'produce' },
      { group: 'Molho à campanha', qty: 0.5, item: 'red onion', note: 'finely diced', shop: 'red onions', aisle: 'produce' },
      { group: 'Molho à campanha', qty: 0.5, item: 'green bell pepper', note: 'finely diced', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Molho à campanha', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'Molho à campanha', qty: 3, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Molho à campanha', qty: 0.25, unit: 'cup', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Molho à campanha', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Salsa',
        text: 'Stir together the tomatoes, onion, pepper, parsley, vinegar, oil and salt. Let it sit while you grill.'
      },
      {
        title: 'Cut & salt',
        text: 'Cut the picanha with the grain into 2-inch-wide steaks. Score the fat in a crosshatch and rub everything generously with coarse salt.'
      },
      {
        title: 'Render',
        text: 'Grill fat side down over medium heat for 5 minutes to render and crisp the fat.',
        tip: 'Watch for flare-ups. Move to a cooler spot if the fat catches fire.'
      },
      {
        title: 'Sear',
        text: 'Move to high heat and grill for 4 minutes per side for medium-rare.'
      },
      {
        title: 'Rest & slice',
        text: 'Rest for 5 minutes, then slice thinly against the grain. Serve with the salsa, rice and farofa.'
      }
    ],
    notes: [
      'Ask a butcher for "coulotte" or "rump cap" if picanha isn\'t on the sign.'
    ]
  },
  {
    id: 'moqueca',
    name: 'Moqueca Baiana',
    short: 'Moqueca',
    continent: 'South America',
    region: 'Brazilian',
    cuisine: 'Bahian',
    emoji: '🐟',
    description: 'A vibrant Bahian fish stew: lime-marinated fish and shrimp gently simmered with peppers, tomato, coconut milk and red palm oil. Bright, rich and fragrant.',
    servings: 4,
    time: { prep: 20, cook: 30, inactive: 30, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['seafood', 'stew', 'coconut'],
    ingredients: [
      { group: 'Seafood', qty: 1.5, unit: 'lb', item: 'firm white fish fillets', note: 'cod, halibut or snapper, in 2-inch pieces', aisle: 'seafood' },
      { group: 'Seafood', qty: 0.5, unit: 'lb', item: 'large shrimp', note: 'peeled and deveined', aisle: 'seafood' },
      { group: 'Seafood', qty: 2, item: 'limes', note: 'juiced, plus wedges to serve', aisle: 'produce' },
      { group: 'Seafood', qty: 4, item: 'garlic cloves', note: 'minced, divided', aisle: 'produce' },
      { group: 'Seafood', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Seafood', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 1, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Stew', qty: 1, item: 'red bell peppers', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Stew', qty: 1, item: 'green bell pepper', note: 'thinly sliced', shop: 'green bell peppers', aisle: 'produce' },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Stew', qty: 0.25, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { group: 'Stew', qty: 2, item: 'Roma tomatoes', note: 'sliced into rounds', aisle: 'produce' },
      { group: 'Stew', qty: 13.5, unit: 'oz', item: 'coconut milk', note: '1 can, full-fat', aisle: 'international' },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'red palm oil (dendê)', note: 'or more olive oil', aisle: 'international', optional: true },
      { group: 'Stew', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Marinate the seafood',
        text: 'Toss the fish and shrimp with the lime juice, half the garlic, the salt and pepper. Marinate in the fridge for 30 minutes. Start the rice.'
      },
      {
        title: 'Soften the vegetables',
        text: 'Heat the olive oil in a wide, heavy pot over medium heat. Cook the onion and peppers for 6 minutes until soft. Add the remaining garlic, paprika and pepper flakes for 1 minute.'
      },
      {
        title: 'Build the sauce',
        text: 'Lay the tomato slices over the vegetables, pour in the coconut milk and palm oil, and simmer for 5 minutes.'
      },
      {
        title: 'Poach the fish',
        text: 'Nestle the fish and its marinade into the sauce. Cover and simmer gently for 8 minutes without stirring.'
      },
      {
        title: 'Add the shrimp',
        text: 'Tuck in the shrimp and simmer for 3 minutes until pink and the fish flakes easily.',
        tip: 'Shake the pot instead of stirring, so the fish stays in nice chunks.'
      },
      {
        title: 'Serve',
        text: 'Scatter with cilantro and serve with rice and lime wedges.'
      }
    ],
    notes: [
      'Dendê gives moqueca its signature color and flavor; look for it at Brazilian or African markets.'
    ]
  },
  {
    id: 'pao-de-queijo',
    name: 'Pão de Queijo',
    short: 'Pão de queijo',
    continent: 'South America',
    region: 'Brazilian',
    cuisine: 'Minas Gerais',
    emoji: '🧀',
    description: 'Brazilian cheese bread: crisp-shelled, chewy, gluten-free puffs made with tapioca flour and Parmesan. Impossible to eat just one.',
    servings: 6,
    time: { prep: 15, cook: 25 },
    heat: 0,
    tags: ['bread', 'gluten-free', 'vegetarian', 'snack'],
    ingredients: [
      { qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'cup', item: 'tapioca flour', note: 'sour (polvilho azedo) or regular', aisle: 'international' },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 4, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'finely grated', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Scald',
        text: 'Heat the oven to 400°F. Bring the milk, oil, water and salt to a boil, then pour it over the tapioca flour and stir until a sticky dough forms.'
      },
      {
        title: 'Eggs & cheese',
        text: 'Let it cool for 5 minutes, then beat in the eggs one at a time and the cheese until smooth and stretchy.'
      },
      {
        title: 'Shape',
        text: 'With oiled hands, roll into 1½-inch balls and place on a parchment-lined sheet pan.'
      },
      {
        title: 'Bake',
        text: 'Bake for 20 minutes until puffed and lightly golden. Serve warm.',
        tip: 'Freeze the shaped balls and bake straight from the freezer for fresh cheese bread anytime.'
      }
    ],
    notes: [
      'Mix in some Gruyère or cheddar along with the Parmesan for extra flavor.'
    ]
  },
  // ─────────────────────────────── Chilean ────────────────────────────────
  {
    id: 'cazuela-de-pollo',
    name: 'Cazuela de Pollo',
    short: 'Cazuela',
    continent: 'South America',
    region: 'Chilean',
    emoji: '🍲',
    description: 'Chile\'s comforting chicken soup-stew: each bowl gets a piece of chicken, a wedge of squash, a potato and a piece of corn in a clear, herby broth with rice.',
    servings: 6,
    time: { prep: 20, cook: 60 },
    heat: 0,
    tags: ['soup', 'chicken', 'comfort'],
    ingredients: [
      { qty: 2.5, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'about 6 pieces, skin removed', aisle: 'meat' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'sliced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 8, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: '6 small, peeled', aisle: 'produce' },
      { qty: 1.5, unit: 'lb', item: 'calabaza or butternut squash', note: 'in 6 wedges', aisle: 'produce' },
      { qty: 2, item: 'ears of corn', note: 'in thirds', aisle: 'produce' },
      { qty: 0.33, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { qty: 4, unit: 'oz', item: 'green beans', note: 'trimmed', aisle: 'produce' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Brown',
        text: 'Brown the chicken in the oil in a large pot for 6 minutes. Add the onion, carrots and garlic for 5 minutes, then the paprika and oregano.'
      },
      {
        title: 'Simmer',
        text: 'Add the stock and simmer for 15 minutes.'
      },
      {
        title: 'Vegetables',
        text: 'Add the potatoes and squash and simmer for 15 minutes. Add the corn, rice and green beans and simmer for 15 minutes more until everything is tender.'
      },
      {
        title: 'Serve',
        text: 'Season with salt. Serve each bowl with one piece of everything and plenty of broth, topped with cilantro.'
      }
    ],
    notes: [
      'Beef cazuela uses short ribs in place of chicken.'
    ]
  },
  {
    id: 'charquican',
    name: 'Charquicán',
    short: 'Charquicán',
    continent: 'South America',
    region: 'Chilean',
    emoji: '🥘',
    description: 'A thrifty, hearty Chilean stew of beef, potatoes, squash, corn and peas, mashed together into a chunky, comforting hash and topped with a fried egg.',
    servings: 6,
    time: { prep: 20, cook: 45 },
    heat: 0,
    tags: ['beef', 'stew', 'budget'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'cubed', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'calabaza or butternut squash', note: 'cubed', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'frozen corn kernels', aisle: 'frozen' },
      { qty: 1, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 6, item: 'eggs', note: 'fried, to serve', aisle: 'dairy' }
    ],
    steps: [
      {
        title: 'Brown the beef',
        text: 'Heat the oil and cook the onion for 6 minutes. Add the garlic and beef and brown for 8 minutes, then stir in the cumin, paprika and oregano.'
      },
      {
        title: 'Simmer',
        text: 'Add the potatoes, squash and stock. Cover and simmer for 20 minutes until the potatoes are tender.'
      },
      {
        title: 'Mash',
        text: 'Add the corn, peas and salt and simmer for 5 minutes, then roughly mash everything so it\'s chunky and thick.'
      },
      {
        title: 'Serve',
        text: 'Serve with a fried egg on top and pebre (Chilean salsa) on the side.'
      }
    ],
    notes: [
      'Traditionally made with charqui (dried beef), which gives the dish its name.'
    ]
  },
  {
    id: 'pastel-de-choclo',
    name: 'Pastel de Choclo',
    short: 'Pastel de choclo',
    continent: 'South America',
    region: 'Chilean',
    emoji: '🌽',
    description: 'Chile\'s summer casserole: a savory beef and onion pino with chicken, olives and egg, topped with a sweet, creamy corn and basil crust and caramelized under sugar.',
    servings: 8,
    time: { prep: 30, cook: 70 },
    heat: 0,
    tags: ['beef', 'corn', 'casserole', 'summer'],
    ingredients: [
      { group: 'Pino', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Pino', qty: 3, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Pino', qty: 1.5, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { group: 'Pino', qty: 2, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Pino', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Pino', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Pino', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Pino', qty: 1, unit: 'lb', item: 'boneless skinless chicken breasts', note: 'poached and shredded', aisle: 'meat' },
      { group: 'Pino', qty: 3, item: 'eggs', note: 'hard-boiled and sliced', aisle: 'dairy' },
      { group: 'Pino', qty: 0.5, unit: 'cup', item: 'Kalamata olives', aisle: 'pantry' },
      { group: 'Pino', qty: 0.33, unit: 'cup', item: 'golden raisins', aisle: 'pantry' },
      { group: 'Corn topping', qty: 6, unit: 'cup', item: 'frozen corn kernels', note: 'thawed', aisle: 'frozen' },
      { group: 'Corn topping', qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Corn topping', qty: 0.5, unit: 'cup', item: 'fresh basil', aisle: 'produce' },
      { group: 'Corn topping', qty: 3, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Corn topping', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Corn topping', qty: 2, unit: 'tbsp', item: 'granulated sugar', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Pino',
        text: 'Heat the oil and cook the onions for 12 minutes until soft and sweet. Add the beef and cook for 8 minutes. Season with the cumin, paprika, oregano and salt.'
      },
      {
        title: 'Corn topping',
        text: 'Blend the corn with the milk and basil until fairly smooth. Cook in a saucepan with the butter and salt for 10 minutes, stirring constantly, until thick like polenta.'
      },
      {
        title: 'Layer',
        text: 'Heat the oven to 375°F. Spread the pino in a baking dish and scatter over the chicken, eggs, olives and raisins.'
      },
      {
        title: 'Top',
        text: 'Spread the corn mixture evenly over the top and sprinkle with the sugar.'
      },
      {
        title: 'Bake',
        text: 'Bake for 30 minutes, then broil for 3 minutes until the top is golden and caramelized.',
        tip: 'The sugar crust and salty filling contrast is the whole point.'
      }
    ],
    notes: [
      'Traditionally baked in individual clay bowls (greda).'
    ]
  },
  // ──────────────────────── Colombian & Venezuelan ────────────────────────
  {
    id: 'ajiaco',
    name: 'Ajiaco Bogotano',
    short: 'Ajiaco',
    continent: 'South America',
    region: 'Colombian & Venezuelan',
    cuisine: 'Colombian · Bogotá',
    emoji: '🥣',
    description: 'Bogotá\'s beloved chicken and potato soup, thickened by melting potatoes and scented with guascas, served with corn, cream, capers and avocado.',
    servings: 6,
    time: { prep: 20, cook: 75 },
    heat: 0,
    tags: ['soup', 'chicken', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', aisle: 'meat' },
      { qty: 10, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 4, item: 'scallions', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'smashed', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'russet potatoes', note: 'thinly sliced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'Yukon Gold potatoes', note: 'sliced', aisle: 'produce' },
      { qty: 1, unit: 'lb', item: 'baby red potatoes', note: 'halved (or papas criollas)', aisle: 'produce' },
      { qty: 3, item: 'ears of corn', note: 'cut into thirds', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'dried guascas', note: 'optional but traditional', aisle: 'international', optional: true },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'cup', item: 'heavy cream', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'capers', aisle: 'pantry' },
      { qty: 2, item: 'avocados', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Simmer the chicken in the stock with the scallions, garlic and cilantro for 30 minutes. Remove the chicken and shred it; discard the aromatics.'
      },
      {
        title: 'Potatoes',
        text: 'Add the russets and simmer for 15 minutes, then add the Yukon and red potatoes and corn.'
      },
      {
        title: 'Simmer',
        text: 'Simmer for 25 minutes, stirring often, until the russets dissolve and thicken the soup. Stir in the guascas and salt.',
        tip: 'The russets melt away completely and make the soup creamy, with no flour needed.'
      },
      {
        title: 'Serve',
        text: 'Return the chicken and serve with cream, capers and avocado on the side for everyone to add.'
      }
    ],
    notes: [
      'Guascas (gallant soldier) has a unique herbal flavor. Find it in Latin markets or online.'
    ]
  },
  {
    id: 'arepas-reina-pepiada',
    name: 'Arepas Reina Pepiada',
    short: 'Arepas',
    continent: 'South America',
    region: 'Colombian & Venezuelan',
    cuisine: 'Venezuelan',
    emoji: '🫓',
    description: 'Crisp-shelled, fluffy-centered corn cakes split open and stuffed with "reina pepiada": a creamy chicken and avocado salad with lime and cilantro.',
    servings: 4,
    time: { prep: 25, cook: 30 },
    heat: 0,
    tags: ['chicken', 'gluten-free', 'lunch'],
    ingredients: [
      { group: 'Filling', qty: 1, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { group: 'Filling', qty: 2, item: 'ripe avocados', shop: 'avocados', aisle: 'produce' },
      { group: 'Filling', qty: 0.25, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Filling', qty: 0.5, item: 'lime', note: 'juiced', shop: 'limes', aisle: 'produce' },
      { group: 'Filling', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Filling', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'Filling', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 0.25, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Arepas', qty: 2, unit: 'cup', item: 'pre-cooked white cornmeal (masarepa)', note: 'such as P.A.N.', aisle: 'international' },
      { group: 'Arepas', qty: 2.5, unit: 'cup', item: 'warm water', shop: 'water', aisle: 'none' },
      { group: 'Arepas', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Arepas', qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Simmer the chicken in salted water for 15 minutes until cooked through. Cool slightly and shred finely.'
      },
      {
        title: 'Make the reina pepiada',
        text: 'Mash the avocados with the mayo, lime juice, garlic, salt and pepper. Fold in the chicken and cilantro.'
      },
      {
        title: 'Mix the dough',
        text: 'Stir the salt into the warm water, then gradually add the masarepa, mixing with your hand. Knead for 2 minutes into a soft dough, then rest for 5 minutes.'
      },
      {
        title: 'Shape',
        text: 'Divide into 8 balls and flatten each into a ½-inch-thick disc. Smooth any cracked edges with wet fingers.'
      },
      {
        title: 'Cook',
        text: 'Cook on a lightly oiled cast-iron skillet over medium heat for 6 minutes per side, until crusted with golden spots. They\'re ready when they sound hollow when tapped.',
        tip: 'For extra-fluffy centers, finish them in a 375°F oven for 10 minutes.'
      },
      {
        title: 'Stuff & serve',
        text: 'Split each hot arepa with a knife, leaving a hinge, and stuff with the filling.'
      }
    ],
    notes: [
      'Masarepa is not the same as masa harina or cornmeal. Look for P.A.N. in the Latin aisle.'
    ]
  },
  {
    id: 'colombian-arroz-con-pollo',
    name: 'Colombian Arroz con Pollo',
    short: 'Arroz con pollo',
    continent: 'South America',
    region: 'Colombian & Venezuelan',
    cuisine: 'Colombian',
    emoji: '🍚',
    description: 'A golden one-pot of chicken and rice with peas, carrots, peppers and achiote, savory with a little beer and cilantro. A family-party staple.',
    servings: 6,
    time: { prep: 20, cook: 60 },
    heat: 0,
    tags: ['chicken', 'rice', 'one-pot'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'boneless skinless chicken thighs', aisle: 'meat' },
      { qty: 1, item: 'sazón packet', note: 'with achiote', aisle: 'international' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 1, item: 'red bell peppers', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { qty: 3, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 12, unit: 'oz', item: 'Mexican lager', note: '1 bottle, or more stock', aisle: 'other', optional: true },
      { qty: 1, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Season & brown',
        text: 'Toss the chicken with the sazón, cumin and salt. Brown in the oil in a Dutch oven for 8 minutes, then cut into bite-size pieces.'
      },
      {
        title: 'Sofrito',
        text: 'Cook the onion, pepper, garlic and carrots for 6 minutes.'
      },
      {
        title: 'Rice',
        text: 'Stir in the rice for 2 minutes, then add the stock, beer and chicken. Bring to a boil.'
      },
      {
        title: 'Cook',
        text: 'Cover and simmer on low for 20 minutes. Scatter the peas on top, cover, and cook for 5 minutes more.'
      },
      {
        title: 'Serve',
        text: 'Fluff with the cilantro and serve with avocado and fried plantains.'
      }
    ],
    notes: [
      'Many Colombian cooks stir in a spoonful of mayonnaise at the end for extra richness.'
    ]
  },
  {
    id: 'pabellon-criollo',
    name: 'Pabellón Criollo',
    short: 'Pabellón',
    continent: 'South America',
    region: 'Colombian & Venezuelan',
    cuisine: 'Venezuelan',
    emoji: '🍛',
    description: 'Venezuela\'s national plate: shredded beef in a tomato sofrito, black beans, white rice and sweet fried plantains, side by side like a flag.',
    servings: 6,
    time: { prep: 25, cook: 150 },
    heat: 0,
    tags: ['beef', 'beans', 'rice', 'plantains'],
    ingredients: [
      { group: 'Carne mechada', qty: 2, unit: 'lb', item: 'flank steak', aisle: 'meat' },
      { group: 'Carne mechada', qty: 6, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Carne mechada', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Carne mechada', qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { group: 'Carne mechada', qty: 1, item: 'red bell peppers', note: 'diced', aisle: 'produce' },
      { group: 'Carne mechada', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Carne mechada', qty: 2, item: 'Roma tomatoes', note: 'diced', aisle: 'produce' },
      { group: 'Carne mechada', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Carne mechada', qty: 1, unit: 'tbsp', item: 'Worcestershire sauce', aisle: 'pantry' },
      { group: 'Carne mechada', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Sides', qty: 2, unit: 'can', item: 'black beans', note: '15 oz each', aisle: 'pantry' },
      { group: 'Sides', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Sides', qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' },
      { group: 'Sides', qty: 3, item: 'very ripe plantains', shop: 'ripe plantains', aisle: 'produce' },
      { group: 'Sides', qty: 0.5, unit: 'cup', item: 'vegetable oil', note: 'for frying', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Simmer the beef',
        text: 'Simmer the flank steak in the water for 1.5 hours until very tender. Cool slightly and shred finely, saving 1 cup of broth.'
      },
      {
        title: 'Sofrito',
        text: 'Heat the oil and cook the onion, pepper and garlic for 8 minutes. Add the tomatoes and cumin for 5 minutes.'
      },
      {
        title: 'Carne mechada',
        text: 'Add the beef, Worcestershire, salt and reserved broth and simmer for 15 minutes until saucy.'
      },
      {
        title: 'Sides',
        text: 'Cook the rice. Warm the black beans with the sugar and a pinch of salt (Venezuelans like them slightly sweet). Slice the plantains on the diagonal and fry for 3 minutes per side until caramelized.'
      },
      {
        title: 'Serve',
        text: 'Arrange the beef, beans, rice and plantains side by side on each plate.'
      }
    ],
    notes: [
      'Top with a fried egg to make it "a caballo" (on horseback).'
    ]
  },
  // ──────────────────────── Ecuadorian & Bolivian ─────────────────────────
  {
    id: 'llapingachos',
    name: 'Llapingachos',
    short: 'Llapingachos',
    continent: 'South America',
    region: 'Ecuadorian & Bolivian',
    cuisine: 'Ecuadorian',
    emoji: '🥞',
    description: 'Golden, cheese-stuffed potato patties tinted with achiote and griddled until crisp. Ecuador\'s favorite with peanut sauce, a fried egg and avocado.',
    servings: 4,
    time: { prep: 30, cook: 30, inactive: 30, inactiveLabel: 'chill' },
    heat: 0,
    tags: ['potatoes', 'vegetarian', 'breakfast'],
    ingredients: [
      { group: 'Patties', qty: 2, unit: 'lb', item: 'russet potatoes', note: 'peeled', aisle: 'produce' },
      { group: 'Patties', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { group: 'Patties', qty: 0.5, item: 'yellow onion', note: 'finely diced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Patties', qty: 1, unit: 'tsp', item: 'ground annatto (achiote)', aisle: 'spices' },
      { group: 'Patties', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Patties', qty: 6, unit: 'oz', item: 'Monterey Jack', note: 'shredded (or queso fresco)', aisle: 'dairy' },
      { group: 'Patties', qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Peanut sauce', qty: 0.5, unit: 'cup', item: 'natural peanut butter', aisle: 'pantry' },
      { group: 'Peanut sauce', qty: 0.5, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { group: 'Peanut sauce', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Peanut sauce', qty: 0.25, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'To serve', qty: 4, item: 'eggs', note: 'fried', aisle: 'dairy' },
      { group: 'To serve', qty: 1, item: 'avocado', note: 'sliced', shop: 'avocados', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Mash',
        text: 'Boil the potatoes for 20 minutes until tender, drain and mash well.'
      },
      {
        title: 'Season',
        text: 'Cook the onion in the butter with the achiote for 5 minutes, then mix into the potatoes with the salt.'
      },
      {
        title: 'Stuff',
        text: 'Shape the potato into 8 balls, press a spoonful of cheese into each, seal, and flatten into thick patties. Chill for 30 minutes.'
      },
      {
        title: 'Peanut sauce',
        text: 'Warm the peanut butter, milk, garlic and cumin, whisking until smooth.'
      },
      {
        title: 'Griddle',
        text: 'Cook the patties in the oil over medium heat for 4 minutes per side until golden and crisp. Serve with peanut sauce, a fried egg and avocado.'
      }
    ],
    notes: [
      'Often served alongside chorizo and a simple tomato-onion salad.'
    ]
  },
  {
    id: 'locro-de-papa',
    name: 'Locro de Papa',
    short: 'Locro de papa',
    continent: 'South America',
    region: 'Ecuadorian & Bolivian',
    cuisine: 'Ecuadorian',
    emoji: '🥔',
    description: 'Ecuador\'s creamy potato and cheese soup, tinted gold with achiote and finished with avocado. Simple, cozy Andean comfort.',
    servings: 6,
    time: { prep: 15, cook: 40 },
    heat: 0,
    tags: ['soup', 'vegetarian', 'potatoes', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground annatto (achiote)', note: 'or sweet paprika', aisle: 'spices' },
      { qty: 3, unit: 'lb', item: 'russet potatoes', note: 'peeled and cubed', aisle: 'produce' },
      { qty: 6, unit: 'cup', item: 'vegetable stock', note: 'or chicken stock', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'whole milk', aisle: 'dairy' },
      { qty: 6, unit: 'oz', item: 'queso fresco', note: 'crumbled', aisle: 'dairy' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { qty: 2, item: 'avocados', note: 'sliced', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Sofrito',
        text: 'Melt the butter in a pot and cook the onion for 6 minutes. Add the garlic, cumin and achiote for 1 minute.'
      },
      {
        title: 'Potatoes',
        text: 'Add the potatoes and stock and simmer for 25 minutes until very soft.'
      },
      {
        title: 'Mash',
        text: 'Mash about half the potatoes right in the pot to thicken the soup, leaving some chunks.'
      },
      {
        title: 'Finish',
        text: 'Stir in the milk and cheese and heat gently for 3 minutes until the cheese softens. Season with salt.'
      },
      {
        title: 'Serve',
        text: 'Ladle into bowls and top with cilantro and avocado.'
      }
    ],
    notes: [
      'Ecuadorians often add a dash of hot sauce (ají) at the table.'
    ]
  },
  {
    id: 'sopa-de-mani',
    name: 'Sopa de Maní',
    short: 'Peanut soup',
    continent: 'South America',
    region: 'Ecuadorian & Bolivian',
    cuisine: 'Bolivian',
    emoji: '🥜',
    description: 'Bolivia\'s creamy peanut soup with beef, vegetables and macaroni, finished with a crown of crispy shoestring fries and fresh parsley.',
    servings: 6,
    time: { prep: 20, cook: 75 },
    heat: 0,
    tags: ['soup', 'beef', 'peanut'],
    ingredients: [
      { qty: 1, unit: 'lb', item: 'beef chuck roast', note: 'in small cubes (or bone-in short ribs)', aisle: 'meat' },
      { qty: 8, unit: 'cup', item: 'beef stock', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'raw unsalted peanuts', aisle: 'pantry' },
      { qty: 1, unit: 'cup', item: 'water', aisle: 'none' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'diced', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { qty: 1, unit: 'cup', item: 'frozen peas', aisle: 'frozen' },
      { qty: 0.5, unit: 'cup', item: 'elbow macaroni', aisle: 'pantry' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'cup', item: 'shoestring potato sticks', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Simmer the beef',
        text: 'Simmer the beef in the stock for 40 minutes.'
      },
      {
        title: 'Peanut milk',
        text: 'Blend the peanuts with the water until completely smooth.'
      },
      {
        title: 'Sofrito',
        text: 'Heat the oil and cook the onion, carrots and garlic for 8 minutes. Add the cumin and oregano and stir everything into the beef pot.'
      },
      {
        title: 'Add peanuts',
        text: 'Strain the peanut milk into the soup and simmer for 15 minutes, stirring often so it doesn\'t stick.'
      },
      {
        title: 'Macaroni & peas',
        text: 'Add the macaroni and peas and cook for 10 minutes. Season with salt.'
      },
      {
        title: 'Serve',
        text: 'Top each bowl with a handful of potato sticks and parsley.'
      }
    ],
    notes: [
      'Raw peanuts give the creamiest, most traditional flavor. Avoid roasted ones.'
    ]
  },
  // ─────────────────────────────── Peruvian ───────────────────────────────
  {
    id: 'aji-de-gallina',
    name: 'Ají de Gallina',
    short: 'Ají de gallina',
    continent: 'South America',
    region: 'Peruvian',
    cuisine: 'Lima',
    emoji: '🍗',
    description: 'Shredded chicken in a creamy, golden sauce of ají amarillo, bread, milk, walnuts and Parmesan. Peruvian comfort food, served over rice with potatoes and egg.',
    servings: 6,
    time: { prep: 25, cook: 50 },
    heat: 1,
    tags: ['chicken', 'creamy', 'comfort'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 4, unit: 'slice', item: 'white sandwich bread', note: 'crusts removed', aisle: 'bakery' },
      { qty: 1, unit: 'cup', item: 'evaporated milk', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'red onion', note: 'diced', shop: 'red onions', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 4, unit: 'tbsp', item: 'ají amarillo paste', aisle: 'international' },
      { qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { qty: 0.25, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 0.33, unit: 'cup', item: 'walnuts', note: 'or pecans', aisle: 'pantry' },
      { qty: 1, unit: 'oz', item: 'Parmigiano-Reggiano', note: 'grated', aisle: 'dairy' },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 1.5, unit: 'lb', item: 'Yukon Gold potatoes', note: 'boiled and sliced', aisle: 'produce' },
      { qty: 3, item: 'eggs', note: 'hard-boiled and quartered', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'Kalamata olives', note: 'or Peruvian botija olives', aisle: 'pantry' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Poach the chicken',
        text: 'Simmer the chicken in the stock for 20 minutes until cooked. Shred it and keep the broth.'
      },
      {
        title: 'Soak the bread',
        text: 'Soak the bread in the evaporated milk, then blend with the walnuts into a smooth paste.'
      },
      {
        title: 'Sofrito',
        text: 'Heat the oil and cook the onion for 8 minutes until soft. Add the garlic, ají amarillo, cumin and turmeric for 3 minutes.'
      },
      {
        title: 'Sauce',
        text: 'Add the bread paste and 1 cup of the broth and cook for 8 minutes, stirring, until thick and creamy. Add more broth if needed.'
      },
      {
        title: 'Finish',
        text: 'Stir in the chicken and Parmesan and season with salt. Simmer for 5 minutes.'
      },
      {
        title: 'Serve',
        text: 'Serve over rice with sliced potatoes, egg and olives.'
      }
    ],
    notes: [
      'Ají amarillo paste is the key flavor. Find it in the Latin aisle or online.'
    ]
  },
  {
    id: 'causa-limena',
    name: 'Causa Limeña',
    short: 'Causa',
    continent: 'South America',
    region: 'Peruvian',
    cuisine: 'Lima',
    emoji: '🥔',
    description: 'A cold, layered terrine of lime- and ají-seasoned mashed yellow potato with a creamy chicken and avocado filling. Bright, tangy and beautiful.',
    servings: 6,
    time: { prep: 40, cook: 25, inactive: 60, inactiveLabel: 'chill' },
    heat: 1,
    tags: ['potatoes', 'chicken', 'no-bake', 'starter'],
    ingredients: [
      { group: 'Potato', qty: 2, unit: 'lb', item: 'Yukon Gold potatoes', aisle: 'produce' },
      { group: 'Potato', qty: 3, unit: 'tbsp', item: 'ají amarillo paste', aisle: 'international' },
      { group: 'Potato', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Potato', qty: 3, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Potato', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Filling', qty: 1, unit: 'lb', item: 'boneless skinless chicken breasts', aisle: 'meat' },
      { group: 'Filling', qty: 0.33, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Filling', qty: 0.25, item: 'red onion', note: 'finely diced', shop: 'red onions', aisle: 'produce' },
      { group: 'Filling', qty: 2, item: 'avocados', note: 'sliced', aisle: 'produce' },
      { group: 'Garnish', qty: 2, item: 'eggs', note: 'hard-boiled', aisle: 'dairy' },
      { group: 'Garnish', qty: 0.25, unit: 'cup', item: 'Kalamata olives', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Potatoes',
        text: 'Boil the potatoes for 20 minutes until tender. Peel and press through a ricer while warm.'
      },
      {
        title: 'Season the mash',
        text: 'Knead in the ají amarillo, lime juice, oil and salt until smooth, bright yellow and tangy.'
      },
      {
        title: 'Filling',
        text: 'Poach the chicken in salted water for 15 minutes, shred, and mix with the mayo and onion.'
      },
      {
        title: 'Layer',
        text: 'In a plastic-lined loaf pan, layer one-third of the potato, then the chicken, then the avocado, then another potato layer, the remaining filling and a final potato layer.'
      },
      {
        title: 'Chill & serve',
        text: 'Chill for 1 hour, unmold, and slice. Garnish with egg and olives.'
      }
    ],
    notes: [
      'Tuna or crab salad are classic alternatives to chicken.'
    ]
  },
  {
    id: 'lomo-saltado',
    name: 'Lomo Saltado',
    short: 'Lomo saltado',
    continent: 'South America',
    region: 'Peruvian',
    cuisine: 'Chifa',
    emoji: '🍟',
    description: 'Peru\'s beloved Chinese-Peruvian stir-fry: smoky wok-seared beef, red onion and tomato in a tangy soy-vinegar sauce with ají amarillo, tossed with crisp fries and served with rice.',
    servings: 4,
    time: { prep: 20, cook: 25 },
    heat: 1,
    tags: ['beef', 'stir-fry', 'weeknight'],
    ingredients: [
      { group: 'Beef', qty: 1.5, unit: 'lb', item: 'beef sirloin', note: 'cut into ½-inch-thick strips', aisle: 'meat' },
      { group: 'Beef', qty: 1, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Beef', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Beef', qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Beef', qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Beef', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'soy sauce', aisle: 'international' },
      { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'red wine vinegar', aisle: 'pantry' },
      { group: 'Sauce', qty: 1, unit: 'tbsp', item: 'ají amarillo paste', note: 'or 1 seeded, minced jalapeño', aisle: 'international' },
      { group: 'Stir-fry', qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'divided', aisle: 'pantry', staple: true },
      { group: 'Stir-fry', qty: 1, item: 'red onion', note: 'cut into thick wedges', shop: 'red onions', aisle: 'produce' },
      { group: 'Stir-fry', qty: 3, item: 'Roma tomatoes', note: 'cut into wedges', aisle: 'produce' },
      { group: 'Stir-fry', qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1, unit: 'lb', item: 'frozen french fries', note: 'or homemade', aisle: 'frozen' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'long-grain white rice', note: 'uncooked', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Start the fries & rice',
        text: 'Bake the fries according to the package and cook the rice, so both are ready when the stir-fry is. The stir-fry itself goes very fast.'
      },
      {
        title: 'Season the beef',
        text: 'Toss the beef with 1 tbsp soy sauce, the garlic, cumin, salt and pepper. Let it sit for 15 minutes.'
      },
      {
        title: 'Mix the sauce',
        text: 'Whisk together the remaining 2 tbsp soy sauce, the vinegar and the ají amarillo paste.'
      },
      {
        title: 'Sear the beef',
        text: 'Heat a wok or your largest skillet over the highest heat until smoking. Add 1 tbsp oil and half the beef in a single layer; sear for 2 minutes, tossing once, until browned outside and pink inside. Remove and repeat with another 1 tbsp oil and the rest of the beef.',
        tip: 'Real smoking heat and small batches are what give lomo saltado its smoky "wok hei".'
      },
      {
        title: 'Onion & tomato',
        text: 'Add the last 1 tbsp oil and the onion; stir-fry for 1 minute until charred at the edges but still crisp. Add the tomatoes and toss for 1 minute, just until they start to soften.'
      },
      {
        title: 'Bring it together',
        text: 'Return the beef and its juices, pour in the sauce, and toss for 30 seconds. Take the pan off the heat, fold in the hot fries and cilantro, and serve immediately with rice.'
      }
    ],
    notes: [
      'Add the fries at the very last second so they soak up sauce without going soggy.',
      'Ají amarillo paste is in the Latin aisle or online — it adds fruity heat that\'s hard to substitute.'
    ]
  },
  {
    id: 'papa-a-la-huancaina',
    name: 'Papa a la Huancaína',
    short: 'Huancaína',
    continent: 'South America',
    region: 'Peruvian',
    emoji: '🥔',
    description: 'Boiled potatoes draped in a velvety, spicy-cheesy ají amarillo sauce, served cold with egg and olives. A classic Peruvian starter.',
    servings: 6,
    time: { prep: 15, cook: 25 },
    heat: 1,
    tags: ['vegetarian', 'potatoes', 'starter'],
    ingredients: [
      { qty: 2, unit: 'lb', item: 'Yukon Gold potatoes', aisle: 'produce' },
      { qty: 1, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 0.5, item: 'yellow onion', note: 'chopped', shop: 'yellow onions', aisle: 'produce' },
      { qty: 2, item: 'garlic cloves', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'ají amarillo paste', aisle: 'international' },
      { qty: 6, unit: 'oz', item: 'queso fresco', aisle: 'dairy' },
      { qty: 0.5, unit: 'cup', item: 'evaporated milk', aisle: 'pantry' },
      { qty: 6, item: 'saltine crackers', aisle: 'pantry' },
      { qty: 0.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 3, item: 'eggs', note: 'hard-boiled', aisle: 'dairy' },
      { qty: 0.25, unit: 'cup', item: 'Kalamata olives', aisle: 'pantry' },
      { qty: 1, unit: 'head', item: 'butter lettuce', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Boil the potatoes',
        text: 'Boil the potatoes in salted water for 20 minutes until tender. Cool, peel and slice thickly.'
      },
      {
        title: 'Sauté',
        text: 'Cook the onion and garlic in the oil for 5 minutes until soft. Add the ají amarillo for 1 minute.'
      },
      {
        title: 'Blend the sauce',
        text: 'Blend the onion mixture with the queso fresco, evaporated milk, crackers and salt until thick and silky.'
      },
      {
        title: 'Serve',
        text: 'Lay the potatoes on lettuce leaves, pour over the sauce, and garnish with egg and olives.'
      }
    ],
    notes: [
      'The sauce is also a great dip for fries or grilled meats.'
    ]
  },
  {
    id: 'peruvian-ceviche',
    name: 'Peruvian Ceviche',
    nativeName: 'Cebiche',
    short: 'Ceviche',
    continent: 'South America',
    region: 'Peruvian',
    cuisine: 'Lima',
    emoji: '🍋',
    description: 'Lima-style ceviche: very fresh fish "cooked" for just a few minutes in lime with chili, garlic and red onion, served with sweet potato and corn. Drink the leche de tigre.',
    servings: 4,
    time: { prep: 25, cook: 30 },
    heat: 2,
    tags: ['seafood', 'no-cook', 'summer'],
    ingredients: [
      { group: 'Ceviche', qty: 1, unit: 'lb', item: 'sushi-grade white fish', note: 'sea bass, halibut or flounder, skinless', aisle: 'seafood' },
      { group: 'Ceviche', qty: 0.5, item: 'red onion', note: 'very thinly sliced', shop: 'red onions', aisle: 'produce' },
      { group: 'Ceviche', qty: 0.5, item: 'habanero pepper', note: 'or ají limo, seeded and minced', shop: 'habanero peppers', aisle: 'produce' },
      { group: 'Ceviche', qty: 1, item: 'garlic cloves', note: 'grated', aisle: 'produce' },
      { group: 'Ceviche', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Ceviche', qty: 12, item: 'limes', note: 'juiced (about 1 cup)', aisle: 'produce' },
      { group: 'Ceviche', qty: 1, unit: 'tsp', item: 'ají amarillo paste', aisle: 'international', optional: true },
      { group: 'Ceviche', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'finely chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'large sweet potato', shop: 'sweet potatoes', aisle: 'produce' },
      { group: 'To serve', qty: 1, item: 'ear of corn', shop: 'ears of corn', aisle: 'produce' },
      { group: 'To serve', qty: 0.5, unit: 'cup', item: 'cancha (toasted Peruvian corn)', aisle: 'international', optional: true }
    ],
    steps: [
      {
        title: 'Cook the sides',
        text: 'Boil the whole sweet potato for 25 minutes until tender, then peel and slice into rounds. Boil the corn for 8 minutes and cut into thick wheels. Let both cool.'
      },
      {
        title: 'Mellow the onion',
        text: 'Soak the sliced onion in ice water for 10 minutes, then drain well.'
      },
      {
        title: 'Prep the fish',
        text: 'Cut the fish into ¾-inch cubes and keep it very cold. Toss with the salt, garlic and chili.'
      },
      {
        title: 'Squeeze the limes',
        text: 'Squeeze the limes by hand, gently and without pressing hard. Strain the juice.',
        tip: 'Over-squeezing or using a press releases bitter oils from the peel.'
      },
      {
        title: '"Cook" the fish',
        text: 'Pour just enough lime juice over the fish to cover it, stir in the ají amarillo and an ice cube, and let it sit for 3 minutes. The outside turns opaque while the center stays silky.'
      },
      {
        title: 'Serve immediately',
        text: 'Fold in the onion and cilantro, taste for salt, and serve right away with sweet potato, corn and cancha. Sip the leftover juice (leche de tigre) from a small glass.'
      }
    ],
    notes: [
      'Use only the freshest fish from a trusted fishmonger, and tell them it will be eaten raw.'
    ]
  },
  {
    id: 'pollo-a-la-brasa',
    name: 'Pollo a la Brasa',
    short: 'Pollo a la brasa',
    continent: 'South America',
    region: 'Peruvian',
    emoji: '🐔',
    description: 'Peru\'s famous rotisserie-style chicken, marinated in soy, lime, cumin and garlic and roasted until burnished, with a spicy, creamy green ají sauce.',
    servings: 4,
    time: { prep: 20, cook: 60, inactive: 240, inactiveLabel: 'marinate' },
    heat: 1,
    tags: ['chicken', 'roast'],
    ingredients: [
      { group: 'Chicken', qty: 1, item: 'whole chicken', note: '4 lb', aisle: 'meat' },
      { group: 'Chicken', qty: 0.25, unit: 'cup', item: 'soy sauce', aisle: 'international' },
      { group: 'Chicken', qty: 2, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 6, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Chicken', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chicken', qty: 2, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'dried oregano', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 1, unit: 'tbsp', item: 'ají panca paste', note: 'optional', aisle: 'international', optional: true },
      { group: 'Green sauce', qty: 1, unit: 'cup', item: 'cilantro', aisle: 'produce' },
      { group: 'Green sauce', qty: 2, item: 'jalapeños', note: 'seeded', aisle: 'produce' },
      { group: 'Green sauce', qty: 0.5, unit: 'cup', item: 'mayonnaise', aisle: 'pantry' },
      { group: 'Green sauce', qty: 1, unit: 'oz', item: 'queso fresco', aisle: 'dairy' },
      { group: 'Green sauce', qty: 1, item: 'garlic cloves', aisle: 'produce' },
      { group: 'Green sauce', qty: 1, item: 'limes', note: 'juiced', aisle: 'produce' },
      { group: 'Green sauce', qty: 0.25, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }
    ],
    steps: [
      {
        title: 'Marinade',
        text: 'Blend the soy sauce, lime juice, garlic, oil, cumin, paprika, oregano, pepper and ají panca.'
      },
      {
        title: 'Marinate',
        text: 'Loosen the skin and rub the marinade under and over it. Marinate for at least 4 hours or overnight.'
      },
      {
        title: 'Roast',
        text: 'Roast on a rack at 425°F for 60 minutes, until the skin is deep mahogany and the thigh reads 175°F.',
        tip: 'Spatchcock the chicken for faster, more even cooking. It takes about 45 minutes.'
      },
      {
        title: 'Green sauce',
        text: 'Blend the cilantro, jalapeños, mayo, queso fresco, garlic, lime juice and salt until smooth.'
      },
      {
        title: 'Serve',
        text: 'Rest the chicken for 10 minutes, carve, and serve with fries, salad and plenty of green sauce.'
      }
    ],
    notes: [
      'The green sauce (ají verde) is addictive on everything.'
    ]
  }
);
