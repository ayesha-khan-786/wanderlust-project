const sampleListings = [
  {
    title: "Cozy Beach Villa",
    description: "A tranquil villa with sea views.",
    image: { url: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-Cover-Final.png",
         filename: "image1" },
    price: 1500,
    location: "Goa",
    country: "India",
    reviews: ["648cf102bd1e8c00122f1a1d"],
    owner: "648ce742bf9e7a001b2c0a91",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
    {
      title: "Cozy Beach Villa",
      description: "A tranquil villa with sea views.",
      image: { "url": "https://th.bing.com/th/id/OIP.bfYX7jtmazQn9AeawiABSgHaFj?rs=1&pid=ImgDetMain", filename: "imgage2" },
      price: 1500,
      location: "Goa",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a1d"],
      owner: "648ce742bf9e7a001b2c0a91",
      geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
    },
    {
      title: "Mountain Cabin Retreat",
      description: "Escape into the serene mountains.",
      image: { url: "https://th.bing.com/th/id/OIP.x4Y73HqteD5wq03_ob2vEAHaE7?rs=1&pid=ImgDetMain", filename: "cabin.jpg" },
      price: 120,
      location: "Manali",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a2e"],
      owner: "648ce742bf9e7a001b2c0a82",
      geometry: { type: "Point", coordinates: [77.1720, 32.2396] }
    },
    {
      title: "City Loft Apartment",
      description: "Modern apartment in the heart of the city.",
      image: { url: "https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg", filename: "apartment.jpg" },
      price: 200,
      location: "Mumbai",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a3f"],
      owner: "648ce742bf9e7a001b2c0a93",
      geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
    },
    {
      title: "Historic Country House",
      description: "Experience rural charm in this classic home.",
      image: { url: "https://www.tripsavvy.com/thmb/zyqX35L3rgFRuVrbGioDKoqPezc=/2121x1414/filters:fill(auto,1)/GettyImages-930881934-5ae56fe48023b90036464e72.jpg", filename: "countryhouse.jpg" },
      price: 180,
      location: "Jaipur",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a4a"],
      owner: "648ce742bf9e7a001b2c0a94",
      geometry: { type: "Point", coordinates: [75.7872, 26.9124] }
    },
    {
      title: "Lakeside Cottage",
      description: "Perfect for a quiet lakeside getaway.",
      image: { url: "https://tourismteacher.com/wp-content/uploads/2020/09/pexels-photo-753626.jpeg", filename: "cottage.jpg" },
      price: 140,
      location: "Nainital",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a6b"],
      owner: "648ce742bf9e7a001b2c0a85",
      geometry: { type: "Point", coordinates: [79.4562, 29.3932] }
    },
    {
      title: "Luxury Penthouse",
      description: "Exclusive penthouse with stunning views.",
      image: { url: "https://www.wideworldtrips.com/wp-content/uploads/2021/05/delhi-tourist-attractions.jpg", "filename": "penthouse.jpg" },
      price: 500,
      location: "Delhi",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1a8e"],
      owner: "648ce742bf9e7a001b2c0a90",
      geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
    },
    {
      title: "Desert Camp Tent",
      description: "A unique desert experience under the stars.",
      image: { url: "https://th.bing.com/th/id/R.56ab5704680b6574c1b3c0a52643d8b5?rik=P8OAzrJEZS%2biuw&riu=http%3a%2f%2fjourneyz.co%2fwp-content%2fuploads%2f2019%2f09%2fGolden-Gate-Bridge.jpg&ehk=WX9eb2rUUjWBLLrsG2MQZLOMk2wtreV%2bT1Qq1tARk4s%3d&risl=&pid=ImgRaw&r=0", filename: "deserttent.jpg" },
      price: 75,
      location: "Jaisalmer",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1b3f"],
      owner: "648ce742bf9e7a001b2c0a89",
      geometry: { type: "Point", coordinates: [70.9229, 26.9157] }
    },
    {
      title: "Countryside Farmhouse",
      description: "Spacious farmhouse with lush surroundings.",
      image: { url: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/Gateway-of-India.jpg", filename: "farmhouse.jpg" },
      price: 300,
      location: "Pune",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1c3f"],
      owner: "648ce742bf9e7a001b2c0a92",
      geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
    },
    {
      title: "Hillside Lodge",
      description: "Cozy lodge in the rolling hills.",
      image: { url: "https://www.revv.co.in/blogs/wp-content/uploads/2020/05/Mysore-Fort.jpg", filename: "lodge.jpg" },
      price: 130,
      location: "Darjeeling",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1d3f"],
      owner: "648ce742bf9e7a001b2c0a84",
      geometry: { type: "Point", coordinates: [88.2636, 27.0410] }
    },
    {
      title: "Eco-Friendly Treehouse",
      description: "A sustainable stay amidst nature.",
      image: { url: "https://th.bing.com/th/id/OIP.j7VfQVXAxzEJIjgbwifPDAAAAA?rs=1&pid=ImgDetMain", filename: "treehouse.jpg" },
      price: 100,
      location: "Munnar",
      country: "India",
      reviews: ["648cf102bd1e8c00122f1e3f"],
      owner: "648ce742bf9e7a001b2c0a87",
      geometry: { type: "Point", coordinates: [77.0595, 10.0892] }
    }
  ];
        
  
  module.exports = { data: sampleListings };
  