const items = [
  {
    itemID: 76,
    itemName: 'Afghan Kebabs',
    itemDescription: 'Grilled kebabs made with marinated lamb, served with naan.',
    itemPrice: 450,
    restaurantName: 'Peacock Rooftop Restaurant',
    restaurantID: 28,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTcbji5ls_5qNQLMVJdMt6P278KPwnvfjyQ&s'
  },
  {
    itemID: 11,
    itemName: 'Bagara Baingan',
    itemDescription: 'Fried brinjal cooked in a rich, flavorful curry.',
    itemPrice: 250,
    restaurantName: 'Mumtaz Restaurant',
    restaurantID: 6,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/bagara%20baigan.webp'
  },
  {
    itemID: 78,
    itemName: 'Baklava',
    itemDescription: 'Sweet pastry made with layers of filo dough, honey, and nuts.',
    itemPrice: 200,
    restaurantName: 'Peacock Rooftop Restaurant',
    restaurantID: 28,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/baklava.jpg'
  },
  {
    itemID: 67,
    itemName: 'Bengali Thali',
    itemDescription: 'A complete Bengali meal served with rice, dal, vegetables, and fish curry.',
    itemPrice: 500,
    restaurantName: '6 Ballygunge Place',
    restaurantID: 25,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/bengali%20thali.jpg'
  },
  {
    itemID: 40,
    itemName: 'Berry Pulav',
    itemDescription: 'A unique Parsi dish made with rice and fresh berries.',
    itemPrice: 400,
    restaurantName: 'Britannia & Co.',
    restaurantID: 16,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/berry%20pulav.jpeg'
  },
  {
    itemID: 82,
    itemName: 'Bombil Fry',
    itemDescription: 'Bombay-style fried Bombay duck served with chutney.',
    itemPrice: 400,
    restaurantName: 'Rajwadu',
    restaurantID: 30,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/bombli%20fry.jpg'
  },
  {
    itemID: 27,
    itemName: 'Bukhara Murg',
    itemDescription: 'Tender chicken cooked with a special Bukhara marinade.',
    itemPrice: 450,
    restaurantName: 'Bukhara',
    restaurantID: 11,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/bukhara%20murg.jpg'
  },
  {
    itemID: 28,
    itemName: 'Butter Chicken',
    itemDescription: 'Creamy chicken cooked in a tomato-based sauce.',
    itemPrice: 500,
    restaurantName: 'Indian Accent',
    restaurantID: 12,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/butter%20chicken.jpg'
  },
  {
    itemID: 23,
    itemName: 'Butter Chicken',
    itemDescription: 'Tender chicken cooked in a rich tomato-based gravy with butter and cream.',
    itemPrice: 420,
    restaurantName: 'Grand Hotel',
    restaurantID: 10,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/butter%20chicken.jpg'
  },
  {
    itemID: 52,
    itemName: 'Chettinad Chicken',
    itemDescription: 'Spicy chicken curry made with Chettinad spices.',
    itemPrice: 450,
    restaurantName: 'Dakshin',
    restaurantID: 20,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/chettinad%20chicken.jpg'
  },
  {
    itemID: 88,
    itemName: 'Chicken Biryani',
    itemDescription: 'Aromatic basmati rice cooked with tender chicken and spices.',
    itemPrice: 280,
    restaurantName: 'Bawarchi',
    restaurantID: 4,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/chickenn%20biryani.webp'
  },
  {
    itemID: 79,
    itemName: 'Chole Bhature',
    itemDescription: 'Deep-fried bread served with spicy chickpea curry.',
    itemPrice: 250,
    restaurantName: 'Agashiye',
    restaurantID: 29,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/chole%20batura.jpg'
  },
  {
    itemID: 48,
    itemName: 'Coffee',
    itemDescription: 'Freshly brewed coffee served hot.',
    itemPrice: 60,
    restaurantName: 'Koshy’s',
    restaurantID: 18,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/coffee.jpg'
  },
  {
    itemID: 71,
    itemName: 'Dal Baati Churma',
    itemDescription: 'Traditional Rajasthani dish with wheat dumplings, dal, and sweet churma.',
    itemPrice: 350,
    restaurantName: '1135 AD',
    restaurantID: 26,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/dal%20bati%20churma.jpg'
  },
  {
    itemID: 25,
    itemName: 'Dal Bukhara',
    itemDescription: 'Slow-cooked black lentils in a rich, creamy sauce.',
    itemPrice: 250,
    restaurantName: 'Bukhara',
    restaurantID: 11,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/dal%20bhukara.jpg'
  },
  {
    itemID: 29,
    itemName: 'Dal Makhani',
    itemDescription: 'Black lentils cooked with butter and cream.',
    itemPrice: 300,
    restaurantName: 'Indian Accent',
    restaurantID: 12,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Dal-Makhani.webp'
  },
  {
    itemID: 44,
    itemName: 'Dosa',
    itemDescription: 'Crispy rice crepes served with sambar and chutneys.',
    itemPrice: 180,
    restaurantName: 'Mavalli Tiffin Room (MTR)',
    restaurantID: 17,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Dosa.jpg'
  },
  {
    itemID: 9,
    itemName: 'Double Ka Meetha',
    itemDescription: 'Sweet dessert made with fried bread soaked in milk and flavored with saffron.',
    itemPrice: 180,
    restaurantName: 'Shah Ghouse',
    restaurantID: 3,
    imageUrl: 'https://biryanihouse.zimris.in/wp-content/uploads/2023/09/double-ka-meetha.jpg'
  },
  {
    itemID: 54,
    itemName: 'Filter Coffee',
    itemDescription: 'Traditional South Indian coffee brewed with a drip filter.',
    itemPrice: 100,
    restaurantName: 'Dakshin',
    restaurantID: 20,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/filter-coffee.jpg'
  },
  {
    itemID: 21,
    itemName: 'Firni',
    itemDescription: 'Sweet pudding made with milk and rice flour.',
    itemPrice: 120,
    restaurantName: 'Alhamdulillah Hotel',
    restaurantID: 9,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/firni.jpg'
  },
  {
    itemID: 14,
    itemName: 'Fish Amritsari',
    itemDescription: 'Deep-fried fish marinated with spices, served with chutney.',
    itemPrice: 350,
    restaurantName: 'The Fisherman’s Wharf',
    restaurantID: 7,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Amritsari-fish.webp'
  },
  {
    itemID: 47,
    itemName: 'Fish Curry',
    itemDescription: 'Spicy fish curry cooked with traditional South Indian spices.',
    itemPrice: 350,
    restaurantName: 'Koshy’s',
    restaurantID: 18,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/fish%20curry.jpg'
  },
  {
    itemID: 74,
    itemName: 'Fish Moilee',
    itemDescription: 'Fish cooked in coconut milk with mild spices.',
    itemPrice: 400,
    restaurantName: 'Rawat Mishtan Bhandar',
    restaurantID: 27,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Fish-Molee.jpg'
  },
  {
    itemID: 72,
    itemName: 'Ghevar',
    itemDescription: 'Sweet Rajasthani dessert made with flour, ghee, and sugar syrup.',
    itemPrice: 180,
    restaurantName: '1135 AD',
    restaurantID: 26,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/ghevar.jpg'
  },
  {
    itemID: 58,
    itemName: 'Green Curry',
    itemDescription: 'Spicy Thai green curry made with coconut milk and vegetables.',
    itemPrice: 400,
    restaurantName: 'Benjarong',
    restaurantID: 22,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/green%20curry.jpg'
  },
  {
    itemID: 34,
    itemName: 'Grilled Salmon',
    itemDescription: 'Fresh salmon grilled to perfection, served with lemon butter sauce.',
    itemPrice: 700,
    restaurantName: 'The Table',
    restaurantID: 14,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/grilled%20salmon.jpg'
  },
  {
    itemID: 30,
    itemName: 'Gulab Jamun',
    itemDescription: 'Deep-fried dough balls soaked in sugary syrup.',
    itemPrice: 150,
    restaurantName: 'Indian Accent',
    restaurantID: 12,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Gulab-Jamun.jpg'
  },
  {
    itemID: 81,
    itemName: 'Gulab Jamun',
    itemDescription: 'Soft dough balls soaked in sweet syrup.',
    itemPrice: 120,
    restaurantName: 'Agashiye',
    restaurantID: 29,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Gulab-Jamun.jpg'
  },
  {
    itemID: 91,
    itemName: 'Haleem',
    itemDescription: 'Rich and creamy stew made with lentils, wheat, and slow-cooked meat.',
    itemPrice: 220,
    restaurantName: 'Pista House',
    restaurantID: 5,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/haleem.jpg'
  },
  {
    itemID: 8,
    itemName: 'Haleem',
    itemDescription: 'A slow-cooked stew made with meat, lentils, and spices, a Hyderabadi specialty.',
    itemPrice: 250,
    restaurantName: 'Shah Ghouse',
    restaurantID: 3,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/haleem.jpg'
  },
  {
    itemID: 10,
    itemName: 'Hyderabadi Biryani',
    itemDescription: 'Fragrant rice with tender mutton, cooked with spices and herbs.',
    itemPrice: 420,
    restaurantName: 'Mumtaz Restaurant',
    restaurantID: 6,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/hyderabad%20biryani.jpg'
  },
  {
    itemID: 7,
    itemName: 'Hyderabadi Biryani',
    itemDescription: 'Fragrant basmati rice cooked with mutton and aromatic spices.',
    itemPrice: 350,
    restaurantName: 'Shah Ghouse',
    restaurantID: 3,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/hyderabad%20biryani.jpg'
  },
  {
    itemID: 1,
    itemName: 'Hyderabadi Biryani',
    itemDescription: 'Fragrant basmati rice cooked with marinated meat and spices, served with raita.',
    itemPrice: 350,
    restaurantName: 'Paradise Biryani',
    restaurantID: 1,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/hyderabad%20biryani.jpg'
  },
  {
    itemID: 4,
    itemName: 'Hyderabadi Biryani',
    itemDescription: 'Traditional Hyderabadi biryani made with tender mutton and fragrant rice.',
    itemPrice: 400,
    restaurantName: 'Jewel of Nizam',
    restaurantID: 2,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/hyderabad%20biryani.jpg'
  },
  {
    itemID: 19,
    itemName: 'Hyderabadi Biryani',
    itemDescription: 'Aromatic rice and tender mutton cooked with traditional spices.',
    itemPrice: 360,
    restaurantName: 'Alhamdulillah Hotel',
    restaurantID: 9,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/hyderabad%20biryani.jpg'
  },
  {
    itemID: 53,
    itemName: 'Idli Sambar',
    itemDescription: 'Steamed rice cakes served with spicy lentil soup and chutneys.',
    itemPrice: 150,
    restaurantName: 'Dakshin',
    restaurantID: 20,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/idli%20sambar.jpg'
  },
  {
    itemID: 31,
    itemName: 'Karim’s Biryani',
    itemDescription: 'Traditional Mughlai biryani made with fragrant rice and marinated meat.',
    itemPrice: 350,
    restaurantName: 'Karim’s',
    restaurantID: 13,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/karim\'s%20biryani.jpg'
  },
  {
    itemID: 32,
    itemName: 'Kebabs',
    itemDescription: 'Grilled chicken and mutton skewers marinated with spices.',
    itemPrice: 280,
    restaurantName: 'Karim’s',
    restaurantID: 13,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/kebabs.jpg'
  },
  {
    itemID: 64,
    itemName: 'Kebabs',
    itemDescription: 'Tender chicken and mutton marinated in spices and grilled to perfection.',
    itemPrice: 350,
    restaurantName: 'Peter Cat',
    restaurantID: 24,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/kebabs.jpg'
  },
  {
    itemID: 73,
    itemName: 'Kerala Sadya',
    itemDescription: 'A traditional Kerala feast with rice, sambar, and a variety of curries.',
    itemPrice: 600,
    restaurantName: 'Rawat Mishtan Bhandar',
    restaurantID: 27,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/kerala%20sadya.jpeg'
  },
  {
    itemID: 5,
    itemName: 'Kofta Curry',
    itemDescription: 'Spicy curry made with tender meatballs cooked in a flavorful gravy.',
    itemPrice: 300,
    restaurantName: 'Jewel of Nizam',
    restaurantID: 2,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton-korma.jpg'
  },
  {
    itemID: 17,
    itemName: 'Kofta Curry',
    itemDescription: 'Meatballs in a spicy gravy made with yogurt and spices.',
    itemPrice: 290,
    restaurantName: 'Sarvi Restaurant',
    restaurantID: 8,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/koftacurry.jpg'
  },
  {
    itemID: 68,
    itemName: 'Kosha Mangsho',
    itemDescription: 'Slow-cooked mutton curry with a rich, spicy gravy.',
    itemPrice: 450,
    restaurantName: '6 Ballygunge Place',
    restaurantID: 25,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/kosha%20mangsho.jpg'
  },
  {
    itemID: 70,
    itemName: 'Laal Maas',
    itemDescription: 'Spicy Rajasthani mutton curry made with red chilies.',
    itemPrice: 500,
    restaurantName: '1135 AD',
    restaurantID: 26,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/laal-maas.jpeg'
  },
  {
    itemID: 24,
    itemName: 'Lassi',
    itemDescription: 'Traditional yogurt-based drink, served sweet or salted.',
    itemPrice: 120,
    restaurantName: 'Grand Hotel',
    restaurantID: 10,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/lasi.webp'
  },
  {
    itemID: 61,
    itemName: 'Macher Jhol',
    itemDescription: 'Traditional Bengali fish curry made with mustard oil and spices.',
    itemPrice: 400,
    restaurantName: 'Oh! Calcutta',
    restaurantID: 23,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/macher%20jhol.jpg'
  },
  {
    itemID: 39,
    itemName: 'Mango Kulfi',
    itemDescription: 'Frozen mango dessert flavored with saffron and cardamom.',
    itemPrice: 200,
    restaurantName: 'Masala Library',
    restaurantID: 15,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Prawn-Masala.jpg'
  },
  {
    itemID: 57,
    itemName: 'Mango Lassi',
    itemDescription: 'Sweet yogurt-based drink with fresh mango.',
    itemPrice: 150,
    restaurantName: 'Murugan Idli Shop',
    restaurantID: 21,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Mango-Lassi.jpg'
  },
  {
    itemID: 60,
    itemName: 'Mango Sticky Rice',
    itemDescription: 'Sticky rice topped with fresh mango slices and coconut milk.',
    itemPrice: 180,
    restaurantName: 'Benjarong',
    restaurantID: 22,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mago%20sticky%20rice.jpg'
  },
  {
    itemID: 38,
    itemName: 'Masala Prawns',
    itemDescription: 'Prawns cooked in a spicy and flavorful masala.',
    itemPrice: 550,
    restaurantName: 'Masala Library',
    restaurantID: 15,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Prawn-Masala.jpg'
  },
  {
    itemID: 3,
    itemName: 'Mirchi ka Salan',
    itemDescription: 'Spicy and tangy curry made with green chilies and peanuts.',
    itemPrice: 200,
    restaurantName: 'Paradise Biryani',
    restaurantID: 1,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mirch%20ka%20salan.jpg'
  },
  {
    itemID: 66,
    itemName: 'Misti Doi',
    itemDescription: 'Traditional Bengali sweet yogurt served chilled.',
    itemPrice: 150,
    restaurantName: 'Peter Cat',
    restaurantID: 24,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mishti%20doi.jpg'
  },
  {
    itemID: 37,
    itemName: 'Molecular Biryani',
    itemDescription: 'Innovative biryani with molecular gastronomy techniques.',
    itemPrice: 650,
    restaurantName: 'Masala Library',
    restaurantID: 15,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/molecular%20biryani.png'
  },
  {
    itemID: 86,
    itemName: 'Murg Malai Tikka',
    itemDescription: 'Chicken marinated in cream and spices, grilled to perfection.',
    itemPrice: 350,
    restaurantName: 'Gopi Dining Hall',
    restaurantID: 31,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/murgh%20malai%20tikka.jpg'
  },
  {
    itemID: 89,
    itemName: 'Mutton Biryani',
    itemDescription: 'Traditional Hyderabadi biryani made with flavorful mutton.',
    itemPrice: 350,
    restaurantName: 'Bawarchi',
    restaurantID: 4,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton%20biryani.jpg'
  },
  {
    itemID: 92,
    itemName: 'Mutton Biryani',
    itemDescription: 'Signature biryani with perfectly cooked mutton.',
    itemPrice: 350,
    restaurantName: 'Pista House',
    restaurantID: 5,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton%20biryani.jpg'
  },
  {
    itemID: 16,
    itemName: 'Mutton Biryani',
    itemDescription: 'Aromatic rice with mutton cooked with spices.',
    itemPrice: 380,
    restaurantName: 'Sarvi Restaurant',
    restaurantID: 8,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton%20biryani.jpg'
  },
  {
    itemID: 46,
    itemName: 'Mutton Keema',
    itemDescription: 'Minced mutton cooked with spices and served with soft bread.',
    itemPrice: 280,
    restaurantName: 'Koshy’s',
    restaurantID: 18,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton-keema.jpg'
  },
  {
    itemID: 20,
    itemName: 'Mutton Korma',
    itemDescription: 'Slow-cooked mutton in a rich, spiced curry.',
    itemPrice: 430,
    restaurantName: 'Alhamdulillah Hotel',
    restaurantID: 9,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton-korma.jpg'
  },
  {
    itemID: 2,
    itemName: 'Mutton Korma',
    itemDescription: 'Tender mutton cooked in a rich, spiced gravy with yogurt and nuts.',
    itemPrice: 450,
    restaurantName: 'Paradise Biryani',
    restaurantID: 1,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton-korma.jpg'
  },
  {
    itemID: 65,
    itemName: 'Mutton Rezala',
    itemDescription: 'Mutton cooked in a rich, aromatic gravy with Bengali spices.',
    itemPrice: 450,
    restaurantName: 'Peter Cat',
    restaurantID: 24,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/mutton%20rezela.webp'
  },
  {
    itemID: 45,
    itemName: 'Mysore Pak',
    itemDescription: 'Famous South Indian sweet made with ghee and gram flour.',
    itemPrice: 120,
    restaurantName: 'Mavalli Tiffin Room (MTR)',
    restaurantID: 17,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/MysorePak.jpg'
  },
  {
    itemID: 90,
    itemName: 'Paneer Butter Masala',
    itemDescription: 'Soft paneer cubes in a creamy tomato-based gravy.',
    itemPrice: 250,
    restaurantName: 'Bawarchi',
    restaurantID: 4,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/paneer%20butter%20masala.jpg'
  },
  {
    itemID: 50,
    itemName: 'Pasta Primavera',
    itemDescription: 'Pasta with fresh vegetables in a light olive oil sauce.',
    itemPrice: 350,
    restaurantName: 'Toit Brewery',
    restaurantID: 19,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Pasta-Primavera.jpg'
  },
  {
    itemID: 75,
    itemName: 'Payasam',
    itemDescription: 'Traditional Kerala dessert made with rice and coconut milk.',
    itemPrice: 150,
    restaurantName: 'Rawat Mishtan Bhandar',
    restaurantID: 27,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/payaam.jpg'
  },
  {
    itemID: 85,
    itemName: 'Peshawari Naan',
    itemDescription: 'Soft and fluffy naan stuffed with dry fruits and nuts.',
    itemPrice: 150,
    restaurantName: 'Gopi Dining Hall',
    restaurantID: 31,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Peshwari-naan.webp'
  },
  {
    itemID: 84,
    itemName: 'Pineapple and Coconut Cake',
    itemDescription: 'Moist cake made with pineapple and coconut, topped with cream.',
    itemPrice: 180,
    restaurantName: 'Rajwadu',
    restaurantID: 30,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Pineapple-Coconut-cake.jpg'
  },
  {
    itemID: 51,
    itemName: 'Pizza Margherita',
    itemDescription: 'Classic pizza topped with mozzarella, tomatoes, and fresh basil.',
    itemPrice: 400,
    restaurantName: 'Toit Brewery',
    restaurantID: 19,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/pizza%20margaritta.webp'
  },
  {
    itemID: 55,
    itemName: 'Plain Idli',
    itemDescription: 'Steamed rice cakes served with chutney and sambar.',
    itemPrice: 120,
    restaurantName: 'Murugan Idli Shop',
    restaurantID: 21,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/plain%20idli.webp'
  },
  {
    itemID: 13,
    itemName: 'Prawn Malai Curry',
    itemDescription: 'Prawns cooked in coconut milk with aromatic spices.',
    itemPrice: 550,
    restaurantName: 'The Fisherman’s Wharf',
    restaurantID: 7,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Chingri-Malai-Curry.jpg'
  },
  {
    itemID: 18,
    itemName: 'Qubani ka Meetha',
    itemDescription: 'A traditional Hyderabadi dessert made with apricots and sugar.',
    itemPrice: 150,
    restaurantName: 'Sarvi Restaurant',
    restaurantID: 8,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/qubani%20ka%20meetha.jpg'
  },
  {
    itemID: 42,
    itemName: 'Raspberry Sorbet',
    itemDescription: 'Tangy sorbet made with fresh raspberries.',
    itemPrice: 150,
    restaurantName: 'Britannia & Co.',
    restaurantID: 16,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/raspberry-sorbet.webp'
  },
  {
    itemID: 43,
    itemName: 'Rava Idli',
    itemDescription: 'Soft and fluffy semolina idli served with coconut chutney and sambar.',
    itemPrice: 150,
    restaurantName: 'Mavalli Tiffin Room (MTR)',
    restaurantID: 17,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/RavaIdli.jpg'
  },
  {
    itemID: 63,
    itemName: 'Roshogolla',
    itemDescription: 'Soft and spongy Bengali sweet soaked in sugar syrup.',
    itemPrice: 120,
    restaurantName: 'Oh! Calcutta',
    restaurantID: 23,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/roshogolla.webp'
  },
  {
    itemID: 41,
    itemName: 'Sali Boti',
    itemDescription: 'Parsi-style meat cooked with gravy and served with crisp fries.',
    itemPrice: 500,
    restaurantName: 'Britannia & Co.',
    restaurantID: 16,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/sali%20boti.jpg'
  },
  {
    itemID: 80,
    itemName: 'Samosa',
    itemDescription: 'Fried pastry filled with spiced potatoes and peas.',
    itemPrice: 60,
    restaurantName: 'Agashiye',
    restaurantID: 29,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/samosa.webp'
  },
  {
    itemID: 69,
    itemName: 'Sandesh',
    itemDescription: 'Traditional Bengali sweet made with fresh paneer and flavored with cardamom.',
    itemPrice: 120,
    restaurantName: '6 Ballygunge Place',
    restaurantID: 25,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/sandesh.jpg'
  },
  {
    itemID: 15,
    itemName: 'Seafood Platter',
    itemDescription: 'A selection of fresh seafood served with dipping sauce.',
    itemPrice: 600,
    restaurantName: 'The Fisherman’s Wharf',
    restaurantID: 7,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/seafood-platter.jpg'
  },
  {
    itemID: 12,
    itemName: 'Shahi Tukda',
    itemDescription: 'Dessert made with fried bread, milk, sugar, and nuts.',
    itemPrice: 180,
    restaurantName: 'Mumtaz Restaurant',
    restaurantID: 6,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/shahi-tukda.jpg'
  },
  {
    itemID: 87,
    itemName: 'Shahi Tukda',
    itemDescription: 'Deep-fried bread soaked in milk and sugar syrup, garnished with nuts.',
    itemPrice: 180,
    restaurantName: 'Gopi Dining Hall',
    restaurantID: 31,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/shahi-tukda.jpg'
  },
  {
    itemID: 93,
    itemName: 'Shahi Tukda',
    itemDescription: 'Bread pudding topped with rabri and nuts.',
    itemPrice: 150,
    restaurantName: 'Pista House',
    restaurantID: 5,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/shahi-tukda.jpg'
  },
  {
    itemID: 77,
    itemName: 'Shawarma',
    itemDescription: 'Chicken or lamb wrapped in pita bread with garlic sauce and vegetables.',
    itemPrice: 350,
    restaurantName: 'Peacock Rooftop Restaurant',
    restaurantID: 28,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Chicken-Shawarma.jpg'
  },
  {
    itemID: 6,
    itemName: 'Sheer Korma',
    itemDescription: 'Sweet dessert made with milk, dry fruits, and vermicelli.',
    itemPrice: 150,
    restaurantName: 'Jewel of Nizam',
    restaurantID: 2,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Sheer-Khurma.jpg'
  },
  {
    itemID: 33,
    itemName: 'Sheer Korma',
    itemDescription: 'Sweet dessert made with milk, dry fruits, and vermicelli.',
    itemPrice: 180,
    restaurantName: 'Karim’s',
    restaurantID: 13,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/Sheer-Khurma.jpg'
  },
  {
    itemID: 62,
    itemName: 'Shorshe Ilish',
    itemDescription: 'Hilsa fish cooked in mustard paste, a Bengali delicacy.',
    itemPrice: 500,
    restaurantName: 'Oh! Calcutta',
    restaurantID: 23,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/shorshe%20ilish.jpg'
  },
  {
    itemID: 26,
    itemName: 'Tandoori Roti',
    itemDescription: 'Soft Indian flatbread baked in a tandoor.',
    itemPrice: 40,
    restaurantName: 'Bukhara',
    restaurantID: 11,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/tandoori%20roti.jpg'
  },
  {
    itemID: 36,
    itemName: 'Tiramisu',
    itemDescription: 'Classic Italian dessert made with layers of coffee-soaked cake and mascarpone.',
    itemPrice: 350,
    restaurantName: 'The Table',
    restaurantID: 14,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/tiramisu.jpg'
  },
  {
    itemID: 49,
    itemName: 'Toit Brew',
    itemDescription: 'Signature beer brewed in-house, served fresh on tap.',
    itemPrice: 250,
    restaurantName: 'Toit Brewery',
    restaurantID: 19,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/toit.png'
  },
  {
    itemID: 59,
    itemName: 'Tom Yum Soup',
    itemDescription: 'Hot and sour Thai soup with shrimp and mushrooms.',
    itemPrice: 250,
    restaurantName: 'Benjarong',
    restaurantID: 22,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/tom%20yum%20soup.jpg'
  },
  {
    itemID: 35,
    itemName: 'Truffle Mac & Cheese',
    itemDescription: 'Macaroni in a creamy cheese sauce with truffle oil.',
    itemPrice: 500,
    restaurantName: 'The Table',
    restaurantID: 14,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/truffled-mac-cheese.webp'
  },
  {
    itemID: 56,
    itemName: 'Vada',
    itemDescription: 'Crispy fried lentil doughnuts served with chutneys.',
    itemPrice: 90,
    restaurantName: 'Murugan Idli Shop',
    restaurantID: 21,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/vada.jpg'
  },
  {
    itemID: 83,
    itemName: 'Vada Pav',
    itemDescription: 'Spicy potato fritter in a bun, served with chutney.',
    itemPrice: 100,
    restaurantName: 'Rajwadu',
    restaurantID: 30,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/vada-pav.jpg'
  },
  {
    itemID: 22,
    itemName: 'Vegetable Biryani',
    itemDescription: 'Aromatic rice cooked with fresh vegetables and spices.',
    itemPrice: 300,
    restaurantName: 'Grand Hotel',
    restaurantID: 10,
    imageUrl: 'https://fakerestaurantapi.runasp.net/images/vegetable%20biryani.jpg'
  }
];
module.exports=items