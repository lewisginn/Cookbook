// South America recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ────────────────────────────── Argentine ───────────────────────────────
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
  // ──────────────────────── Colombian & Venezuelan ────────────────────────
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
  // ─────────────────────────────── Peruvian ───────────────────────────────
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
  }
);
