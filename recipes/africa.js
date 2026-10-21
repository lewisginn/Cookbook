// Africa recipes, grouped by region. See CLAUDE.md for the schema.
// Formatting is generated: after editing, run  node tools/format-recipes.js

(window.RECIPES = window.RECIPES || []).push(
  // ───────────────────────────── East African ─────────────────────────────
  {
    id: 'doro-wat',
    name: 'Doro Wat',
    nativeName: 'ዶሮ ወጥ',
    short: 'Doro wat',
    continent: 'Africa',
    region: 'East African',
    cuisine: 'Ethiopian',
    emoji: '🍲',
    description: 'Ethiopia\'s celebration stew: chicken and hard-boiled eggs simmered in a deep, slow-cooked red-onion sauce rich with berbere spice and spiced butter. Traditionally scooped up with injera.',
    servings: 6,
    time: { prep: 25, cook: 110 },
    heat: 2,
    tags: ['chicken', 'stew', 'spicy', 'eggs'],
    ingredients: [
      { group: 'Chicken', qty: 3, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed', aisle: 'meat' },
      { group: 'Chicken', qty: 1, item: 'lemons', note: 'juiced', aisle: 'produce' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Spiced butter', qty: 6, unit: 'tbsp', item: 'unsalted butter', note: 'or niter kibbeh', aisle: 'dairy' },
      { group: 'Spiced butter', qty: 0.25, unit: 'tsp', item: 'ground cardamom', aisle: 'spices' },
      { group: 'Spiced butter', qty: 0.25, unit: 'tsp', item: 'ground fenugreek', aisle: 'spices' },
      { group: 'Stew', qty: 3, item: 'large red onions', note: 'very finely chopped', shop: 'red onions', aisle: 'produce' },
      { group: 'Stew', qty: 6, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Stew', qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { group: 'Stew', qty: 3, unit: 'tbsp', item: 'berbere spice', aisle: 'spices' },
      { group: 'Stew', qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { group: 'Stew', qty: 1.5, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Stew', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Stew', qty: 6, item: 'eggs', aisle: 'dairy' },
      { group: 'To serve', qty: 6, item: 'injera', note: 'or rice', aisle: 'bakery' }
    ],
    steps: [
      {
        title: 'Prep the chicken',
        text: 'Make a few shallow cuts in each piece of chicken. Toss with the lemon juice and salt and set aside for 30 minutes.'
      },
      {
        title: 'Spice the butter',
        text: 'Melt the butter with the cardamom and fenugreek over low heat for 5 minutes until fragrant. Set aside.'
      },
      {
        title: 'Dry-cook the onions',
        text: 'Put the onions in a heavy, dry pot over medium-low heat with no fat. Cook for 20 minutes, stirring often, until they shrink, turn jammy and begin to color. Add a splash of water if they start to stick.',
        tip: 'Cooking the onions dry before adding fat is the traditional technique — it gives the sauce its body and sweetness.'
      },
      {
        title: 'Butter & aromatics',
        text: 'Stir in half the spiced butter, the garlic and ginger, and cook for 5 minutes.'
      },
      {
        title: 'Bloom the berbere',
        text: 'Add the berbere and tomato paste and cook for 5 minutes, stirring constantly and adding a splash of stock if it sticks, until it turns a deep brick red.'
      },
      {
        title: 'Simmer the chicken',
        text: 'Add the remaining butter, the stock and salt. Nestle in the chicken, bring to a simmer, then cover and cook on low for 45 minutes, turning the pieces now and then, until very tender.'
      },
      {
        title: 'Boil the eggs',
        text: 'Meanwhile, simmer the eggs for 10 minutes, cool them in ice water, and peel. Cut a few shallow slits in each so they soak up the sauce.'
      },
      {
        title: 'Finish',
        text: 'Add the eggs to the stew and simmer uncovered for 15 minutes, until the sauce is thick and the eggs are stained red. Serve with injera.'
      }
    ],
    notes: [
      'Berbere and injera are sold at Ethiopian and international markets, and berbere is easy to find online.',
      'Like most stews, doro wat is even better the next day.'
    ]
  },
  // ──────────────────────────── North African ─────────────────────────────
  {
    id: 'chicken-tagine',
    name: 'Chicken Tagine with Preserved Lemon & Olives',
    nativeName: 'Djej Mqualli',
    short: 'Tagine',
    continent: 'Africa',
    region: 'North African',
    cuisine: 'Moroccan',
    emoji: '🏺',
    description: 'Golden, saffron-tinged chicken braised with soft onions, warm spices, briny olives and fragrant preserved lemon. Serve it with fluffy couscous to soak up the sauce.',
    servings: 4,
    time: { prep: 20, cook: 75 },
    heat: 0,
    tags: ['chicken', 'braise', 'one-pot'],
    ingredients: [
      { group: 'Chicken', qty: 3, unit: 'lb', item: 'bone-in skin-on chicken thighs', note: 'about 8', aisle: 'meat' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground ginger', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'sweet paprika', aisle: 'spices' },
      { group: 'Chicken', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { group: 'Chicken', item: 'saffron threads', note: 'a generous pinch', aisle: 'spices', optional: true },
      { group: 'Chicken', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Chicken', qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Braise', qty: 2, item: 'yellow onions', note: 'thinly sliced', aisle: 'produce' },
      { group: 'Braise', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Braise', qty: 1, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { group: 'Braise', qty: 1, item: 'preserved lemon', note: 'flesh discarded, rind thinly sliced', aisle: 'international' },
      { group: 'Braise', qty: 0.75, unit: 'cup', item: 'green olives', note: 'such as picholine or Castelvetrano', aisle: 'pantry' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 0.25, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped', aisle: 'produce' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'couscous', aisle: 'pantry' },
      { group: 'To serve', qty: 1.5, unit: 'cup', item: 'boiling water', note: 'for the couscous', aisle: 'none' }
    ],
    steps: [
      {
        title: 'Spice the chicken',
        text: 'Mix the ginger, turmeric, paprika, cumin, cinnamon, salt and pepper, and crumble in the saffron. Rub it all over the chicken.',
        tip: 'If you have time, let the spiced chicken sit in the fridge for a few hours or overnight.'
      },
      {
        title: 'Brown the chicken',
        text: 'Heat the oil in a tagine or Dutch oven over medium-high heat. Brown the chicken skin side down for 6 minutes until golden, flip for 2 minutes, then set aside.'
      },
      {
        title: 'Cook the onions',
        text: 'Pour off all but about 2 tbsp of fat. Lower the heat to medium and cook the onions for 10 minutes, stirring, until soft and golden. Add the garlic and cook for 1 minute.'
      },
      {
        title: 'Braise',
        text: 'Pour in the stock and scrape up the browned bits. Nestle the chicken in skin side up, cover, and simmer on low for 40 minutes.'
      },
      {
        title: 'Add lemon & olives',
        text: 'Scatter in the preserved lemon and olives. Simmer uncovered for 10 minutes so the sauce reduces and thickens.'
      },
      {
        title: 'Make the couscous',
        text: 'Pour the boiling water over the couscous with a pinch of salt and a drizzle of oil. Cover and let stand for 5 minutes, then fluff with a fork.'
      },
      {
        title: 'Serve',
        text: 'Taste the sauce for salt, shower the tagine with cilantro and parsley, and serve over the couscous.'
      }
    ],
    notes: [
      'No preserved lemon? Use the zest of 1 lemon plus a squeeze of juice at the end.',
      'Tastes even better the next day.'
    ]
  },
  {
    id: 'harira',
    name: 'Harira',
    nativeName: 'الحريرة',
    short: 'Harira',
    continent: 'Africa',
    region: 'North African',
    cuisine: 'Moroccan',
    emoji: '🍲',
    description: 'Morocco\'s hearty tomato, lentil and chickpea soup with lamb, fresh herbs and warm spices, traditionally used to break the Ramadan fast with dates.',
    servings: 8,
    time: { prep: 25, cook: 80 },
    heat: 1,
    tags: ['soup', 'lamb', 'lentils', 'winter'],
    ingredients: [
      { qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { qty: 1, unit: 'lb', item: 'boneless lamb shoulder', note: 'or beef, in ½-inch pieces', aisle: 'meat' },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 2, unit: 'stalk', item: 'celery', note: 'diced', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'cilantro', note: 'chopped, divided', aisle: 'produce' },
      { qty: 0.5, unit: 'cup', item: 'flat-leaf parsley', note: 'chopped, divided', aisle: 'produce' },
      { qty: 1, unit: 'tsp', item: 'ground ginger', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 28, unit: 'oz', item: 'canned crushed tomatoes', note: '1 large can', aisle: 'pantry' },
      { qty: 8, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'brown or green lentils', aisle: 'pantry' },
      { qty: 1, unit: 'can', item: 'chickpeas', note: '15 oz, drained', aisle: 'pantry' },
      { qty: 2, unit: 'oz', item: 'broken vermicelli or angel hair', aisle: 'pantry' },
      { qty: 2, unit: 'tbsp', item: 'all-purpose flour', note: 'whisked with ½ cup water', aisle: 'pantry' },
      { qty: 2, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 2, item: 'lemons', note: 'cut into wedges', aisle: 'produce' },
      { qty: 8, item: 'Medjool dates', note: 'to serve', aisle: 'produce', optional: true }
    ],
    steps: [
      {
        title: 'Brown the lamb',
        text: 'Heat the oil in a large pot over medium-high heat. Brown the lamb with the onion and celery for 8 minutes.'
      },
      {
        title: 'Herbs & spices',
        text: 'Add half the cilantro and parsley with the ginger, turmeric, cinnamon and pepper and stir for 1 minute. Add the tomato paste for 1 minute.'
      },
      {
        title: 'Simmer',
        text: 'Add the tomatoes, stock and lentils. Bring to a boil, then cover and simmer for 45 minutes until the lamb and lentils are tender.'
      },
      {
        title: 'Chickpeas & noodles',
        text: 'Add the chickpeas and vermicelli and simmer for 10 minutes.'
      },
      {
        title: 'Thicken',
        text: 'Whisk the flour and water until smooth, then stream it into the soup while stirring. Simmer for 5 minutes until silky.',
        tip: 'This flour slurry (tadouira) gives harira its signature velvety body.'
      },
      {
        title: 'Serve',
        text: 'Stir in the remaining herbs and the salt. Serve with lemon wedges and dates.'
      }
    ],
    notes: [
      'Vegetarian: skip the lamb, use vegetable stock, and add an extra ½ cup lentils.'
    ]
  },
  {
    id: 'koshari',
    name: 'Koshari',
    nativeName: 'كشري',
    short: 'Koshari',
    continent: 'Africa',
    region: 'North African',
    cuisine: 'Egyptian',
    emoji: '🍛',
    description: 'Egypt\'s beloved street-food carb feast: spiced lentils and rice, macaroni and chickpeas, layered with tangy tomato sauce, garlic vinegar and crispy fried onions.',
    servings: 6,
    time: { prep: 25, cook: 60 },
    heat: 1,
    tags: ['vegan', 'vegetarian', 'street food', 'budget'],
    ingredients: [
      { group: 'Crispy onions', qty: 2, item: 'large yellow onions', note: 'thinly sliced', shop: 'yellow onions', aisle: 'produce' },
      { group: 'Crispy onions', qty: 0.5, unit: 'cup', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { group: 'Lentils & rice', qty: 1, unit: 'cup', item: 'brown or green lentils', aisle: 'pantry' },
      { group: 'Lentils & rice', qty: 1, unit: 'cup', item: 'medium-grain white rice', note: 'rinsed', aisle: 'pantry' },
      { group: 'Lentils & rice', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Lentils & rice', qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Lentils & rice', qty: 2, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Pasta & chickpeas', qty: 1, unit: 'cup', item: 'elbow macaroni', aisle: 'pantry' },
      { group: 'Pasta & chickpeas', qty: 1, unit: 'can', item: 'chickpeas', note: '15 oz, drained', aisle: 'pantry' },
      { group: 'Tomato sauce', qty: 2, unit: 'tbsp', item: 'olive oil', aisle: 'pantry', staple: true },
      { group: 'Tomato sauce', qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Tomato sauce', qty: 28, unit: 'oz', item: 'canned crushed tomatoes', note: '1 large can', aisle: 'pantry' },
      { group: 'Tomato sauce', qty: 1, unit: 'tsp', item: 'ground cumin', aisle: 'spices' },
      { group: 'Tomato sauce', qty: 0.5, unit: 'tsp', item: 'red pepper flakes', aisle: 'spices' },
      { group: 'Tomato sauce', qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { group: 'Tomato sauce', qty: 1, unit: 'tsp', item: 'granulated sugar', aisle: 'pantry', staple: true },
      { group: 'Tomato sauce', qty: 2, unit: 'tbsp', item: 'distilled white vinegar', aisle: 'pantry' },
      { group: 'Dakka (garlic vinegar)', qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { group: 'Dakka (garlic vinegar)', qty: 0.25, unit: 'cup', item: 'distilled white vinegar', aisle: 'pantry' },
      { group: 'Dakka (garlic vinegar)', qty: 0.25, unit: 'cup', item: 'water', aisle: 'none' },
      { group: 'Dakka (garlic vinegar)', qty: 0.5, unit: 'tsp', item: 'ground cumin', aisle: 'spices' }
    ],
    steps: [
      {
        title: 'Fry the onions',
        text: 'Fry the onions in the oil in a wide skillet over medium-high heat for 20 minutes, stirring often, until deep brown and crisp. Drain on paper towels, salt lightly, and save the oil.'
      },
      {
        title: 'Par-cook the lentils',
        text: 'Simmer the lentils in salted water for 15 minutes until just tender. Drain.'
      },
      {
        title: 'Cook the rice',
        text: 'Heat 2 tbsp of the onion oil in a pot, toast the rice for 2 minutes, then add the lentils, cumin, salt and 2 cups water. Bring to a boil, cover, and cook on low for 15 minutes. Rest off the heat.'
      },
      {
        title: 'Pasta & chickpeas',
        text: 'Cook the macaroni according to the package and toss with 1 tbsp onion oil. Warm the chickpeas.'
      },
      {
        title: 'Tomato sauce',
        text: 'Cook the garlic in the olive oil for 1 minute. Add the tomatoes, cumin, chili, salt and sugar and simmer for 15 minutes. Stir in the vinegar.'
      },
      {
        title: 'Dakka',
        text: 'Stir together the garlic, vinegar, water and cumin.'
      },
      {
        title: 'Layer & serve',
        text: 'Layer each bowl: lentil rice, macaroni, chickpeas, a ladle of tomato sauce, a splash of dakka, and a big handful of crispy onions.'
      }
    ],
    notes: [
      'Every component keeps separately for days. Reheat and assemble as you go.'
    ]
  },
  // ─────────────────────────── Southern African ───────────────────────────
  {
    id: 'bobotie',
    name: 'Bobotie',
    short: 'Bobotie',
    continent: 'Africa',
    region: 'Southern African',
    cuisine: 'South African · Cape Malay',
    emoji: '🥧',
    description: 'South Africa\'s national dish: curried minced beef sweetened with chutney and raisins, baked under a golden savory egg custard with bay leaves.',
    servings: 6,
    time: { prep: 20, cook: 60 },
    heat: 1,
    tags: ['beef', 'casserole', 'curry'],
    ingredients: [
      { qty: 2, unit: 'slice', item: 'white sandwich bread', aisle: 'bakery' },
      { qty: 1, unit: 'cup', item: 'whole milk', note: 'divided', aisle: 'dairy' },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 3, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 2, unit: 'tbsp', item: 'curry powder', note: 'mild', aisle: 'spices' },
      { qty: 1, unit: 'tsp', item: 'ground turmeric', aisle: 'spices' },
      { qty: 0.5, unit: 'tsp', item: 'ground cinnamon', aisle: 'spices' },
      { qty: 2, unit: 'lb', item: 'ground beef', aisle: 'meat' },
      { qty: 3, unit: 'tbsp', item: 'mango chutney', aisle: 'international' },
      { qty: 2, unit: 'tbsp', item: 'apricot jam', aisle: 'pantry' },
      { qty: 0.33, unit: 'cup', item: 'golden raisins', aisle: 'pantry' },
      { qty: 0.5, item: 'lemon', note: 'juiced', shop: 'lemons', aisle: 'produce' },
      { qty: 0.25, unit: 'cup', item: 'sliced almonds', aisle: 'pantry', optional: true },
      { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, item: 'eggs', aisle: 'dairy' },
      { qty: 4, item: 'bay leaves', aisle: 'spices' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'to serve', aisle: 'pantry' }
    ],
    steps: [
      {
        title: 'Soak the bread',
        text: 'Heat the oven to 350°F. Soak the bread in ½ cup of the milk.'
      },
      {
        title: 'Spice base',
        text: 'Heat the oil in a large skillet over medium heat. Cook the onion for 6 minutes, add the garlic and ginger for 1 minute, then the curry powder, turmeric and cinnamon for 1 minute.'
      },
      {
        title: 'Brown the beef',
        text: 'Add the beef and cook for 8 minutes, breaking it up, until browned.'
      },
      {
        title: 'Season the filling',
        text: 'Off the heat, squeeze the bread (keep the milk) and mash it into the beef with the chutney, jam, raisins, lemon juice, almonds, salt and pepper. Spread evenly in a greased 2-quart baking dish.'
      },
      {
        title: 'Custard',
        text: 'Whisk the eggs with the remaining milk plus the squeezed-out milk. Pour over the meat and tuck the bay leaves upright into the top.'
      },
      {
        title: 'Bake',
        text: 'Bake for 35 minutes until the custard is set and golden. Rest for 5 minutes.'
      },
      {
        title: 'Serve',
        text: 'Serve with yellow rice (cook it with a pinch of turmeric and a few raisins), extra chutney and sliced banana.'
      }
    ],
    notes: [
      'Leftovers are great cold in a sandwich.'
    ]
  },
  // ───────────────────────────── West African ─────────────────────────────
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    short: 'Jollof',
    continent: 'Africa',
    region: 'West African',
    cuisine: 'Nigerian',
    emoji: '🍚',
    description: 'West Africa\'s celebration rice: long-grain rice steamed in a deeply fried tomato and red pepper base with scotch bonnet, thyme and curry powder — smoky, savory and vivid orange.',
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
      { group: 'Rice', qty: 2, unit: 'tbsp', item: 'unsalted butter', aisle: 'dairy', optional: true }
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
  {
    id: 'maafe',
    name: 'West African Peanut Stew',
    nativeName: 'Maafe',
    short: 'Maafe',
    continent: 'Africa',
    region: 'West African',
    cuisine: 'Senegalese & Malian',
    emoji: '🥜',
    description: 'Chicken simmered in a rich, savory peanut and tomato sauce with sweet potatoes, carrots and a whole scotch bonnet. Deeply comforting and gently fiery.',
    servings: 6,
    time: { prep: 20, cook: 75 },
    heat: 2,
    tags: ['chicken', 'stew', 'peanut', 'one-pot'],
    ingredients: [
      { qty: 3, unit: 'lb', item: 'bone-in chicken drumsticks and thighs', note: 'skin removed', aisle: 'meat' },
      { qty: 1.5, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true },
      { qty: 0.5, unit: 'tsp', item: 'black pepper', aisle: 'pantry', staple: true },
      { qty: 2, unit: 'tbsp', item: 'vegetable oil', aisle: 'pantry', staple: true },
      { qty: 1, item: 'yellow onions', note: 'diced', aisle: 'produce' },
      { qty: 4, item: 'garlic cloves', note: 'minced', aisle: 'produce' },
      { qty: 1.5, unit: 'in', item: 'fresh ginger', note: 'grated', aisle: 'produce' },
      { qty: 3, unit: 'tbsp', item: 'tomato paste', aisle: 'pantry' },
      { qty: 14, unit: 'oz', item: 'canned crushed tomatoes', note: '1 can', aisle: 'pantry' },
      { qty: 4, unit: 'cup', item: 'chicken stock', aisle: 'pantry' },
      { qty: 1, item: 'chicken bouillon cubes', aisle: 'pantry' },
      { qty: 0.75, unit: 'cup', item: 'natural peanut butter', note: 'unsweetened, smooth', aisle: 'pantry' },
      { qty: 1, item: 'scotch bonnet peppers', note: 'left whole, pierced once', aisle: 'produce' },
      { qty: 1, item: 'bay leaves', aisle: 'spices' },
      { qty: 1, item: 'large sweet potato', note: 'peeled, in 1½-inch chunks', shop: 'sweet potatoes', aisle: 'produce' },
      { qty: 2, item: 'carrots', note: 'in thick rounds', aisle: 'produce' },
      { qty: 2, unit: 'cup', item: 'long-grain white rice', note: 'to serve', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'roasted unsalted peanuts', note: 'chopped', aisle: 'pantry' },
      { qty: 0.25, unit: 'cup', item: 'cilantro', note: 'chopped', aisle: 'produce' }
    ],
    steps: [
      {
        title: 'Brown the chicken',
        text: 'Season the chicken with the salt and pepper. Brown in the oil in a Dutch oven over medium-high heat for 8 minutes and set aside.'
      },
      {
        title: 'Aromatics',
        text: 'Cook the onion for 6 minutes, add the garlic and ginger for 1 minute, then stir in the tomato paste and cook for 3 minutes until darkened.'
      },
      {
        title: 'Peanut sauce',
        text: 'Add the tomatoes, stock and crumbled bouillon cube, then whisk in the peanut butter until smooth.'
      },
      {
        title: 'Simmer the chicken',
        text: 'Return the chicken and add the whole scotch bonnet and bay leaf. Simmer partly covered for 30 minutes, stirring often so the peanut sauce doesn\'t catch.',
        tip: 'Leaving the scotch bonnet whole gives fruity warmth without overwhelming heat. Burst it for more fire.'
      },
      {
        title: 'Vegetables',
        text: 'Add the sweet potato and carrots and simmer for 25 minutes until tender and the sauce is thick, with oil pooling on top.'
      },
      {
        title: 'Serve',
        text: 'Remove the pepper and bay leaf and season to taste. Serve over rice topped with peanuts and cilantro.'
      }
    ],
    notes: [
      'Also great with beef or lamb, or go vegetarian with chickpeas and extra vegetables.'
    ]
  }
);
