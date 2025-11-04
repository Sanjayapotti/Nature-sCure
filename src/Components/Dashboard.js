import React, { useState } from "react";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false); // ✅ Wishlist toggler state

  const categories = [
   
    {
  title: "Home Remedies",
  image:
    "https://tse1.mm.bing.net/th/id/OIP.zUKD2bpw7dN4nNjrTSQYYAHaEK?pid=Api&P=0&h=180",
  description: "Simple remedies for everyday ailments using household ingredients.",
  remedies: [
    {
      title: "Honey for Cough",
      ingredients: ["1 Spoon Honey"],
      details: "Take a spoonful of honey to soothe sore throats and reduce coughing."
    },
    {
      title: "Jeera Water",
      ingredients: ["1 tsp Cumin Seeds (Jeera)", "1 glass Water"],
      details: "Boil cumin seeds and drink daily for better digestion and metabolism."
    },
    {
      title: "Ginger Tea",
      ingredients: ["1 inch Fresh Ginger", "1 cup Water", "Optional: Honey or Lemon"],
      details: "Drink ginger tea twice a day to improve digestion and help burn fat."
    },
    {
      title: "Salt Water Gargle",
      ingredients: ["1/2 tsp Salt", "1 cup Warm Water"],
      details: "Gargle with warm salt water to relieve throat irritation."
    },
    {
      title: "Aloe Vera Juice",
      ingredients: ["2 tbsp Aloe Vera Gel", "1 glass Water", "Optional: Lemon Juice"],
      details: "Drink aloe vera juice daily to improve metabolism and detoxify your body."
    },
    {
      title: "Black Coffee (No Sugar)",
      ingredients: ["1 tsp Coffee Powder", "1 cup Hot Water"],
      details: "Drink a cup of black coffee before workouts to improve fat burning naturally."
    },
        ],
      },
    
    {
      title: "Weight Gain ",
      image:
        "https://media.istockphoto.com/id/2206775146/photo/sattu-drinks-are-nutritious-protein-rich-beverages-made-from-roasted-gram-flour-offering.jpg?s=612x612&w=0&k=20&c=P1QJE_EhFKjM4es8Lz0-tIeyO06ji1Fyk6UhhwRAyQc=",
      description: "Boost your weight naturally and gain healthy with these remedies.",
      remedies: [
        {
          title: "Banana Milkshake",
          details:
            "Blend 2 bananas with a glass of milk and drink daily to increase calorie intake and energy.",
        },
        {
          title: "Dry Fruits & Nuts Mix",
          details:
            "Eat almonds, cashews, walnuts, and raisins daily to gain healthy fats and protein.",
        },
        {
          title: "Peanut Butter Toast",
          details:
            "Spread peanut butter on whole grain bread for a calorie-rich, protein-packed snack.",
        },
        {
          title: "Ghee & Sugar Mix",
          details:
            "Mix 1 tablespoon of ghee with sugar and consume before lunch or dinner to support weight gain.",
        },
        {
          title: "Mango & Milk Smoothie",
          details:
            "Drink a mango milkshake daily during summer for a natural calorie boost.",
        },
        {
          title: "Soaked Almonds & Figs",
          details:
            "Soak 5 almonds and 2 figs overnight, eat in the morning for strength and stamina.",
        },
        {
          title: "Potato & Sweet Potato",
          details:
            "Include boiled or roasted potatoes and sweet potatoes for healthy carbohydrates.",
        },
        {
          title: "Protein-Rich Diet",
          details:
            "Eat paneer, lentils, eggs, and milk to support muscle growth and healthy fat gain.",
        },
        {
          title: "Ashwagandha Milk",
          details:
            "Mix ashwagandha powder with warm milk before bedtime to improve strength and support weight gain.",
        },
        {
          title: "Frequent Meals",
          details:
            "Eat 5–6 small meals a day to maintain a calorie surplus and increase body mass gradually.",
        },
      ],
    },
       {
      title: "Beauty Care",
      image:
        "https://images.unsplash.com/photo-1636499287985-85871c3406fc?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      description: "Enhance your beauty with herbal and organic care tips.",
      remedies: [
        { title: "Rose Water Toner", details: "Use rose water as a natural toner to tighten pores and refresh your skin." },
        { title: "Honey & Lemon Pack", details: "Brighten your skin naturally by mixing honey and lemon juice." },
        {
          title: "Honey & Lemon Face Pack",
          details:
            "Brighten your skin naturally by mixing honey and lemon juice.",
        },
        {
          title: "Coconut Oil Hair Mask",
          details:
            "Massage warm coconut oil into your scalp to nourish hair and promote growth.",
        },
        {
          title: "Cucumber Eye Pads",
          details:
            "Place chilled cucumber slices over your eyes to reduce puffiness and dark circles.",
        },
        {
          title: "Turmeric Face Pack",
          details:
            "Mix turmeric powder with yogurt for glowing, even-toned skin.",
        },
        {
          title: "Green Tea Rinse",
          details:
            "Use cooled green tea as a face rinse to fight acne and rejuvenate dull skin.",
        },
        {
          title: "Oatmeal Scrub",
          details:
            "Mix oatmeal with honey for a gentle exfoliating scrub that removes dead skin cells.",
        },
        {
          title: "Banana Hair Mask",
          details:
            "Mash a ripe banana and mix with olive oil for smooth, shiny hair.",
        },
        {
          title: "Milk & Besan Cleanser",
          details:
            "Combine gram flour (besan) with milk to cleanse and brighten your skin naturally.",
        },


        { title: "Aloe Vera Moisturizer", details: "Apply fresh aloe vera gel to hydrate your skin and reduce acne marks." },
      ],
    },
     {
      title: "weight Loss ",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.yo6pqD54F7u8KqcQMs9FGwHaE8?pid=Api&P=0&h=180",
      description: "Natural and effective home remedies to burn fat and stay fit.",
      remedies: [
        {
          title: "Lemon & Honey Water",
          details:
            "Mix half a lemon and one teaspoon of honey in warm water and drink every morning to detoxify and burn fat.",
        },
        {
          title: "Green Tea",
          details:
            "Drink 2–3 cups of green tea daily to boost metabolism and promote fat burning.",
        },
        {
          title: "Apple Cider Vinegar Drink",
          details:
            "Mix 1 tablespoon of apple cider vinegar in warm water and drink before meals to control appetite and reduce belly fat.",
        },
        {
          title: "Cinnamon & Honey Water",
          details:
            "Soak cinnamon overnight, boil it in the morning, and mix with honey to improve metabolism.",
        },
        {
          title: "Jeera (Cumin) Water",
          details:
            "Boil 1 teaspoon of cumin seeds in water, let it cool, and drink on an empty stomach for better digestion and fat loss.",
        },
        {
          title: "Ginger Tea",
          details:
            "Drink ginger tea twice a day to improve digestion and help burn excess body fat.",
        },
        {
          title: "Black Coffee (No Sugar)",
          details:
            "A cup of black coffee before workouts helps increase energy and fat burning.",
        },
        {
          title: "Aloe Vera Juice",
          details:
            "Consume aloe vera juice daily to boost metabolism and reduce water retention.",
        },
        {
          title: "High-Protein Breakfast",
          details:
            "Include eggs, oats, or sprouts in your morning meal to stay full longer and burn calories efficiently.",
        },
        {
          title: "Stay Hydrated",
          details:
            "Drink 3–4 liters of water daily; hydration improves metabolism and flushes out fat toxins.",
        },
      ],
    },
    {
      title: "Body, Joint ",
       image:
        "https://images.unsplash.com/photo-1631837197166-aebd5caa9b35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fEJvZHklMjBQYWluJTIwJTI2JTIwSm9pbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      description: " home remedies that relax, strengthen, and restore body balance.",
      remedies: [
         {
      title: "Turmeric & Milk",
      details:
        "Turmeric contains curcumin, a natural anti-inflammatory compound that reduces joint pain and stiffness. Mix half a teaspoon of turmeric powder in warm milk and drink before bedtime for pain relief and better sleep.",
    },
    {
      title: "Epsom Salt Bath",
      details:
        "Epsom salt is rich in magnesium, which helps relax muscles and relieve body aches. Add two cups of Epsom salt to warm bath water and soak for 15–20 minutes to soothe sore muscles and joints.",
    },
    {
      title: "Ginger Tea",
      details:
        "Ginger contains gingerol, a compound with anti-inflammatory and analgesic properties. Boil fresh ginger slices in water, strain, and drink twice daily to reduce swelling and muscle soreness.",
    },
    {
      title: "Mustard Oil Massage",
      details:
        "Warm mustard oil improves blood circulation and reduces inflammation. Massage the affected areas gently with warm mustard oil for 10–15 minutes daily for natural pain relief.",
    },
    {
      title: "Hot & Cold Compress",
      details:
        "Alternating between hot and cold compresses helps ease muscle tension and inflammation. Apply a warm towel followed by a cold one on painful areas to promote relaxation and healing.",
    },
    {
      title: "Garlic Cloves",
      details:
        "Garlic has strong anti-inflammatory and antioxidant properties that help reduce joint stiffness and pain. Eat 2–3 raw cloves daily or mix crushed garlic with warm sesame oil and apply topically.",
    },
    {
      title: "Cinnamon & Honey Mix",
      details:
        "Cinnamon and honey together improve blood circulation and reduce stiffness in joints. Mix one teaspoon of cinnamon powder with two teaspoons of honey and consume daily on an empty stomach.",
    },
    {
      title: "Castor Oil Massage",
      details:
        "Castor oil helps lubricate joints and reduce inflammation. Warm a small amount and massage gently into painful joints or muscles before sleeping.",
    },
    {
      title: "Apple Cider Vinegar Drink",
      details:
        "Apple cider vinegar helps remove toxins from joints and connective tissues. Mix one tablespoon in a glass of warm water with honey and drink before meals twice daily.",
    },
    {
      title: "Fenugreek (Methi) Seeds",
      details:
        "Fenugreek seeds contain anti-inflammatory properties that help relieve arthritis pain. Soak a teaspoon of seeds overnight, chew them in the morning, or drink fenugreek tea.",
    },
    {
      title: "Eucalyptus Oil Steam",
      details:
        "Eucalyptus oil has natural analgesic effects that help reduce swelling and joint stiffness. Add a few drops to hot water, inhale the steam, or apply diluted oil directly on affected areas.",
    },
    {
      title: "Clove Oil Rub",
      details:
        "Clove oil contains eugenol, a natural pain reliever. Mix a few drops with coconut oil and massage gently onto painful joints or sore muscles for quick relief.",
    },
    {
      title: "Stretching & Light Exercise",
      details:
        "Gentle yoga and stretching increase flexibility and blood flow, reducing stiffness in joints. Regular low-impact exercises like walking or swimming also strengthen muscles and relieve pain.",
    },
    {
      title: "Hydration & Rest",
      details:
        "Staying hydrated helps flush out toxins and maintain joint lubrication. Pair this with proper rest to allow your body to recover naturally from pain and inflammation.",
    },
  ]
    },
{
      title: "Skin Care",
      image:
        "https://images.unsplash.com/photo-1506003094589-53954a26283f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
      description: "Natural ways to keep your skin glowing and healthy.",
      remedies: [
        { title: "Aloe Vera Gel", details: "Apply fresh aloe vera gel daily to soothe and hydrate your skin." },
        { title: "Turmeric Mask", details: "Mix turmeric with honey and yogurt for glowing, blemish-free skin." },

        {
          title: "Cucumber Toner",
          details:
            "Blend cucumber, strain, and use the juice as a toner to cool and refresh your skin naturally.",
        },

        {
          title: "Multani Mitti (Fuller’s Earth) Mask",
          details:
            "Mix Multani Mitti with rose water and apply as a face pack to remove excess oil and reduce acne.",
        },
        {
          title: "Rose Water Mist",
          details:
            "Spray pure rose water on your face throughout the day to hydrate and maintain a fresh glow.",
        },
        {
          title: "Papaya Enzyme Cleanser",
          details:
            "Apply mashed ripe papaya for 10 minutes to gently remove dead skin cells and brighten complexion.",
        },
        {
          title: "Potato Juice for Pigmentation",
          details:
            "Apply potato juice to dark spots daily to help lighten pigmentation naturally.",
        },
        {
          title: "Milk & Besan Cleanser",
          details:
            "Mix gram flour (besan) and milk for a natural cleanser that removes tan and improves skin tone.",
        },
        {
          title: "Lemon & Sugar Scrub",
          details:
            "Mix lemon juice with sugar and gently rub on your face to remove blackheads and brighten skin (avoid if sensitive).",
        },
        {
          title: "Green Tea Rinse",
          details:
            "Use cooled green tea to rinse your face; it reduces oil, tightens pores, and adds freshness.",
        },
        {
          title: "Honey & Cinnamon Spot Treatment",
          details:
            "Mix honey with a pinch of cinnamon and apply on pimples overnight to reduce inflammation.",
        },
        {
          title: "Tomato Pulp Face Pack",
          details:
            "Apply tomato pulp to reduce oiliness and shrink pores for clear, smooth skin.",
        },
        {
          title: "Olive Oil Night Serum",
          details:
            "Apply a few drops of olive oil at night to lock in moisture and keep your skin soft and supple.",
        },
        {
          title: "Banana & Yogurt Pack",
          details:
            "Mash a banana and mix with yogurt for a hydrating and cooling face pack.",
        },
        {
          title: "Aloe Vera & Cucumber Gel",
          details:
            "Mix aloe vera gel with cucumber juice for a cooling and soothing remedy for sunburns.",
        },
        {
          title: "Neem & Tulsi Face Pack",
          details:
            "Grind neem and tulsi leaves together to fight acne and bacteria on your skin.",
        },
        {
          title: "Sandalwood Paste",
          details:
            "Apply sandalwood powder mixed with rose water to calm skin and reduce acne scars.",
        },
        {
          title: "Rice Flour & Honey Scrub",
          details:
            "Mix rice flour and honey for gentle exfoliation and instant brightness.",
        },
        { title: "Coconut Oil Massage", details: "Massage with virgin coconut oil to maintain moisture and softness." },
      ],
    },
    {
      title: "Stomach cure's",
      image:
      "https://images.unsplash.com/photo-1605655293594-92e21b3409bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fERpZ2VzdGlvbiUyMCUyNiUyMFN0b21hY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
description: "Soothe your stomach and improve digestion naturally with time-tested herbal and home remedies .",
remedies: [
   {
      title: "Ginger Tea",
      details:
        "Ginger helps stimulate digestive enzymes and reduces nausea, bloating, and indigestion. Boil fresh ginger slices in water for 5–7 minutes, strain, and sip slowly after meals.",
    },
    {
      title: "Fennel Seeds (Saunf)",
      details:
        "Fennel seeds relieve gas, acidity, and bloating naturally. Chew a teaspoon of fennel seeds after meals or drink fennel tea to aid digestion and freshen your breath.",
    },
    {
      title: "Jeera Water (Cumin Water)",
      details:
        "Cumin seeds boost enzyme secretion and improve gut health. Boil one teaspoon of cumin seeds in water, let it cool, and drink in the morning for better digestion.",
    },
    {
      title: "Aloe Vera Juice",
      details:
        "Aloe vera soothes the digestive tract and helps reduce acidity and constipation. Drink a small glass of aloe vera juice on an empty stomach daily.",
    },
    {
      title: "Lemon & Honey Water",
      details:
        "Warm water with lemon and honey balances stomach acids and supports detoxification. Drink every morning to improve digestion and metabolism naturally.",
    },
    {
      title: "Mint (Pudina) Infusion",
      details:
        "Mint cools the stomach, relieves cramps, and improves bile flow for digestion. Steep fresh mint leaves in hot water and drink after meals to reduce gas and discomfort.",
    },
    {
      title: "Triphala Powder",
      details:
        "A traditional Ayurvedic blend of amla, haritaki, and bibhitaki, Triphala supports bowel movements, detoxification, and overall gut balance. Take half a teaspoon with warm water before bedtime.",
    },
    {
      title: "Buttermilk with Cumin",
      details:
        "Buttermilk contains probiotics that support gut flora. Add roasted cumin powder, black salt, and mint leaves to buttermilk and drink after meals for light, soothing digestion.",
    },
    {
      title: "Bananas",
      details:
        "Bananas are rich in potassium and fiber, helping restore electrolyte balance and smooth bowel movement. Eat a ripe banana if you experience acidity or an upset stomach.",
    },
    {
      title: "Clove Infusion",
      details:
        "Clove improves digestive enzyme secretion and helps relieve nausea and bloating. Add 2–3 cloves to hot water, let it steep, and drink warm.",
    },
    {
      title: "Peppermint Oil or Tea",
      details:
        "Peppermint relaxes the digestive muscles and reduces symptoms of IBS. Drink peppermint tea or take diluted peppermint oil capsules for smooth digestion.",
    },
    {
      title: "Carom Seeds (Ajwain)",
      details:
        "Ajwain is a powerful remedy for acidity and gas. Boil one teaspoon in water or chew raw with a pinch of salt for quick relief from indigestion.",
    },
    {
      title: "Papaya",
      details:
        "Papaya contains papain, an enzyme that aids protein digestion and prevents bloating. Eat a few slices of ripe papaya after meals for improved gut health.",
    },
    {
      title: "Hydration & Fiber",
      details:
        "Drink enough water and include fiber-rich foods like fruits, vegetables, and oats. Staying hydrated helps flush toxins and prevent constipation naturally.",
    },
  ],
    },
    {
      title: "Immunity Boost",
      image:
      "https://images.unsplash.com/photo-1706204077650-ed21418f97d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGltbXVuaXR5JTIwYm9vc3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      description: "Natural defenses with powerful herbal,home remedies that boost immunity against infections.",
remedies: [
   {
      title: "Turmeric Milk (Haldi Doodh)",
      details:
        "Known as the 'Golden Milk', this ancient Ayurvedic drink combines turmeric with warm milk and a pinch of black pepper to boost absorption. Curcumin, the active compound in turmeric, has strong anti-inflammatory and antioxidant effects that enhance the body’s natural defense system and help prevent infections.",
    },
    {
      title: "Tulsi (Holy Basil) Tea",
      details:
        "Tulsi, often called the ‘Queen of Herbs’, is revered for its immunity-boosting and detoxifying properties. Boil fresh tulsi leaves in water and sip the tea daily to fight bacterial and viral infections, relieve stress, and purify the respiratory system.",
    },
    {
      title: "Amla (Indian Gooseberry) Juice",
      details:
        "Amla is one of the richest sources of Vitamin C, which strengthens white blood cells and enhances the body’s ability to fight infections. Regular consumption of amla juice rejuvenates the skin, improves digestion, and keeps the immune system strong year-round.",
    },
    {
      title: "Ginger & Honey Shot",
      details:
        "This powerful natural shot blends the warming spice of ginger with the soothing sweetness of honey. It not only relieves sore throats and nasal congestion but also improves digestion, reduces inflammation, and boosts energy naturally.",
    },
    {
      title: "Lemon Water Detox",
      details:
        "A glass of warm lemon water every morning kickstarts digestion, hydrates the body, and provides a healthy dose of Vitamin C. This simple routine helps flush out toxins, balances pH levels, and strengthens the immune system to fight seasonal illnesses.",
    },
    {
      title: "Cinnamon Tea",
      details:
        "Cinnamon is packed with antioxidants and antimicrobial properties that help fight bacteria and fungi. Drinking cinnamon tea regularly can regulate blood sugar levels, reduce inflammation, and provide warmth and comfort during colder months.",
    },
    {
      title: "Garlic Boost",
      details:
        "Garlic is nature’s natural antibiotic. Eating one or two raw cloves on an empty stomach each morning strengthens the immune system, improves circulation, and helps the body resist colds and infections naturally.",
    },
    {
      title: "Ashwagandha Tonic",
      details:
        "Ashwagandha is an adaptogenic herb that helps the body adapt to stress while improving energy, stamina, and immune function. Regular intake helps balance hormones, reduce anxiety, and build resilience against fatigue and illness.",
    },
    {
      title: "Peppermint Tea",
      details:
        "Peppermint tea provides cooling relief for sore throats and headaches. It contains menthol, which clears congestion and supports the respiratory system. A warm cup after meals also aids digestion and soothes the body.",
    },
    {
      title: "Sleep & Hydration",
      details:
        "A strong immune system thrives on proper rest and hydration. Aim for at least 7–8 hours of quality sleep and drink 2–3 liters of water daily. Rest allows your body to repair itself and fight off infections more effectively.",
    },
  ],
    },
    {
  title: "Hair Care",
  image:
    "https://images.unsplash.com/photo-1497433550656-7fb185be365e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhaXJjYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  description: "Nourish your hair naturally for stronger, shinier, and healthier growth.",
  remedies: [
    {
      title: "Coconut Oil Massage",
      details:
        "Warm coconut oil deeply moisturizes the scalp, strengthens roots, and prevents hair breakage. Massage into your scalp twice a week and leave overnight for best results.",
    },
    {
      title: "Amla (Indian Gooseberry)",
      details:
        "Amla is rich in Vitamin C and antioxidants. Apply fresh amla juice or amla hair oil to promote growth, prevent dandruff, and delay greying.",
    },
    {
      title: "Fenugreek (Methi) Hair Mask",
      details:
        "Soak fenugreek seeds overnight, grind into a paste, and apply on your scalp for 30 minutes. Rinse with cool water to reduce dandruff and hair fall.",
    },
    {
      title: "Onion Juice",
      details:
        "Onion juice stimulates hair follicles and improves blood circulation. Apply for 15–20 minutes before shampooing twice a week for faster regrowth.",
    },
    {
      title: "Aloe Vera Gel",
      details:
        "Apply fresh aloe vera gel to your scalp and hair to soothe irritation, balance pH levels, and add natural shine.",
    },
    {
      title: "Hibiscus Flower Oil",
      details:
        "Boil hibiscus petals in coconut oil until the petals darken. Cool and apply as a nourishing oil to reduce hair fall and boost volume.",
    },
    {
      title: "Castor Oil Treatment",
      details:
        "Castor oil is rich in ricinoleic acid that promotes hair growth. Mix with coconut oil for easy application and massage once a week.",
    },
    {
      title: "Green Tea Rinse",
      details:
        "Use cooled green tea as a final hair rinse to control dandruff and stimulate new hair follicles naturally.",
    },
    {
      title: "Egg & Olive Oil Mask",
      details:
        "Whisk one egg with a tablespoon of olive oil. Apply the mixture to your hair for 20 minutes and rinse for silky, nourished strands.",
    },
    {
      title: "Curry Leaves Oil",
      details:
        "Boil curry leaves in coconut oil until they turn black. Strain and apply to prevent premature greying and improve hair strength.",
    },
    {
      title: "Banana Hair Pack",
      details:
        "Mash one ripe banana with honey and yogurt. Apply to your hair for 30 minutes and rinse for smooth, frizz-free hair.",
    },
    {
      title: "Rosemary Essential Oil",
      details:
        "Mix a few drops of rosemary essential oil with a carrier oil like jojoba or coconut oil. Massage to enhance growth and reduce hair thinning.",
    },
    {
      title: "Lemon Rinse",
      details:
        "Add lemon juice to a cup of water and use it as a post-shampoo rinse to remove excess oil and add shine.",
    },
    {
      title: "Bhringraj (Eclipta Alba)",
      details:
        "Use bhringraj oil or powder to rejuvenate hair roots, strengthen strands, and prevent premature greying.",
    },
    {
      title: "Aloe Vera & Castor Oil Mask",
      details:
        "Mix equal parts aloe vera gel and castor oil. Apply this nourishing mask once a week to strengthen roots and reduce split ends.",
    },
  ],

    },


{
      title: "Health Care",
      image:
        "https://media.istockphoto.com/id/812997516/photo/selection-of-healthy-rich-fiber-sources-vegan-food-for-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=0oekyfvRbQTbpHoomcyqGTbyA-ps4zrMzyVX6cvLz2U=",
      description: "Improve your overall health through naturals using home remedies.",
      remedies: [
        { title: "Turmeric Milk", details: "Drink warm milk with turmeric to boost your immunity." },
        { title: "Tulsi Leaves", details: "Chew a few tulsi leaves daily to strengthen your immune system." },
        {
          title: "Honey & Warm Water",
          details:
            "Start your day with honey and warm water to aid digestion and detoxify your body.",
        },
        {
          title: "Lemon Water",
          details:
            "Drink lemon water every morning to improve metabolism and flush out toxins.",
        },
        {
          title: "Garlic Cloves",
          details:
            "Eat 1–2 raw garlic cloves on an empty stomach to control cholesterol and blood pressure.",
        },
        {
          title: "Cinnamon Tea",
          details:
            "Brew cinnamon sticks in hot water to regulate blood sugar and improve digestion.",
        },
        {
          title: "Amla Juice",
          details:
            "Drink amla (Indian gooseberry) juice daily for glowing skin, stronger hair, and better immunity.",
        },
        {
          title: "Fenugreek Water (Methi)",
          details:
            "Soak fenugreek seeds overnight and drink the water in the morning to control sugar levels and aid weight loss.",
        },
        {
          title: "Cumin Water (Jeera Water)",
          details:
            "Boil cumin seeds in water, let it cool, and drink daily to improve digestion and metabolism.",
        },
        {
          title: "Peppermint Tea",
          details:
            "Sip peppermint tea to relieve bloating, headaches, and improve concentration.",
        },
        {
          title: "Apple Cider Vinegar Tonic",
          details:
            "Mix a tablespoon of apple cider vinegar in warm water to improve digestion and detoxify your body.",
        },
        {
          title: "Sleep Herbal Drink",
          details:
            "Mix warm milk with nutmeg or ashwagandha powder before bed to improve sleep quality.",
        },
        {
          title: "Neem Water Rinse",
          details:
            "Boil neem leaves in water and use as a rinse to heal skin infections and acne naturally.",
        },
        {
          title: "Carrot Juice",
          details:
            "Drink fresh carrot juice to improve eyesight and boost vitamin A levels.",
        },

        { title: "Ginger Tea", details: "Drink ginger tea daily to aid digestion and fight infections." },
      ],
    },
  ];

  const openModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const toggleWishlist = (remedy) => {
    if (wishlist.some((item) => item.title === remedy.title)) {
      setWishlist(wishlist.filter((item) => item.title !== remedy.title));
    } else {
      setWishlist([...wishlist, remedy]);
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>🌿 Nature’s Cure</h1>
        <p>Discover natural remedies for beauty and health.</p>

        <button className="wishlist-toggler" onClick={() => setShowWishlist(!showWishlist)}>
          💖 Wishlist ({wishlist.length})
        </button>
      </header>

      {showWishlist && (
        <div className="wishlist-panel">
          <h2>💖 Wishlist</h2>

          {wishlist.length === 0 ? (
            <p>No items added yet!</p>
          ) : (
            wishlist.map((item, index) => (
              <div key={index} className="wishlist-item">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
                <button
                  className="remove-btn"
                  onClick={() => toggleWishlist(item)}
                >
                  ❌ Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* ✅ Main Category Cards */}
      <div className="card-grid">
        {categories.map((cat, i) => (
          <div key={i} className="card">
            <img src={cat.image} alt={cat.title} className="card-image" />
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            <button className="explore-btn" onClick={() => openModal(cat)}>
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Modal for Remedies */}
      {showModal && selectedCategory && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedCategory.title}</h2>
            <p>{selectedCategory.description}</p>

            {selectedCategory.remedies.map((rem, i) => (
              <div key={i} className="modal-remedy-card">
                <h3>{rem.title}</h3>
                <p>{rem.details}</p>

                <button
                  className={`wishlist-btn ${
                    wishlist.some((w) => w.title === rem.title) ? "added" : ""
                  }`}
                  onClick={() => toggleWishlist(rem)}
                >
                  {wishlist.some((w) => w.title === rem.title)
                    ? "💖 Added"
                    : "🤍 Wishlist"}
                </button>
              </div>
            ))}

            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>

          
        </div>
      )}

      {/* ✅ CSS */}
      <style>{`
        .dashboard {
          padding: 90px;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          position: relative;
        }
          

        .header {
          position: relative;
          margin-bottom: 0px;
        }

        ./* ✅ Wishlist Button on the LEFT */
.wishlist-toggler {
  position: absolute;
  top: 1;
  left: 0; 
  margin: 5px 10px;
  padding: 8px 16px;
  background: #2fd923;
  color: #f9f2f7ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.wishlist-toggler:hover {
  background: #27c21f;
}

/* ✅ New animation for left slide-in */
@keyframes slideInLeft {
  from {
    left: -320px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}



        /* ✅ Wishlist Sidebar */
.wishlist-panel {
  position:fixed;
  padding:20px;
  top: 60px;
  right: 0;
  width: 320px;
  height: 100vh;
  background:url('https://images.unsplash.com/photo-1602536643790-98b54146fea1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTgwfDg3MDYwMTh8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600');
  background-size: cover;        
  background-position: center;   
  background-repeat: no-repeat;  
  border-left: 2px solid #e68d8dff;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  padding: 50px;
  overflow-y: auto;
  z-index: 20;
  animation: slideIn 0.3s ease-in-out;
  
}


        @keyframes slideIn {
          from { right: -320px; opacity: 0; }
          to { right: 0; opacity: 1; }
        }

        .wishlist-item {
          border-bottom: 1px solid #ea9191ff;
          margin-bottom: 12px;
          padding-bottom: 8px;
          text-align: left;
          margin-top: 30px;
        }

        .remove-btn {
          background: #e63946;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 4px 10px;
          cursor: pointer;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .card {
          background: #f1dedeff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 16px;
        }

        .card-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 10px;
        }

        .explore-btn {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 8px 12px;
          margin-top: 8px;
          border-radius: 6px;
          cursor: pointer;
        }

        /* ✅ Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 70px; left: 0;
          width: 100%; height: 100%;
          background: rgba(237, 207, 195, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(6px);
          z-index: 50;
        }

        .modal-content {
  background: #e9dedeff url('https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NzN8ODcwNjAxOHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500');
background-repeat: no-repeat;
background-size:cover;
          padding: 60px;
          border-radius: 25px;
          width: 90%;
          max-width: 700px;
          max-height: 68vh;
          overflow-y: auto;
          box-shadow: 0 4px 18px rgba(11, 11, 11, 0.1);
        }

        .wishlist-btn {
          border: 1px solid #aaa;
          border-radius: 6px;
          padding: 6px 12px;
          cursor: pointer;
          margin-top: 4px;
        }

        .wishlist-btn.added {
          background: #d859b6ff;
          border-color: #ff4081;
        }

        .close-btn {
          background: #ce3030ff;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          margin-top: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}