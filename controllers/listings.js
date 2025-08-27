const Listing = require("../models/listing") 
const mapToken = process.env.MAP_TOKEN;

module.exports.index = async (req, res) => {
    const { category, country } = req.query;
  
    let allListings;
    
      if (category) {
        allListings = await Listing.find({
          category: { $regex: new RegExp(category, "i") }
        });
      } else if (country) {
        allListings = await Listing.find({
          country: { $regex: new RegExp(country, "i") }
        });
      } else {
        allListings = await Listing.find({});
      }
      res.render("listings/index.ejs", { allListings, selectedCategory: category || "", searchedCountry: country || ""});
   
  };
  

module.exports.renderNewForm = (req, res) => {                    
          res.render("listings/new.ejs");
    }


module.exports.showListing = async (req, res) => {                
    let { id } = req.params;
  
    const listing = await Listing.findById(id)
   .populate({                
          path: "reviews",
       populate: {
         path: "author",
   },
    })     
    .populate("owner");    
  
   if(!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
   }

   console.log(listing);
    res.render("listings/show.ejs", {listing});
};


module.exports.createListing = async (req, res, next) => {
  try {
    const { listing } = req.body;

    // Step 1: Call Geoapify to get coordinates using location string
    const geoRes = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${listing.location}&apiKey=${process.env.MAP_TOKEN}`
    );
    const feature = geoRes.data.features[0];

    if (!feature) {
      return res.status(400).send("Could not geocode the location.");
    }

    const [lon, lat] = feature.geometry.coordinates;

    // Step 2: Create new listing with geometry
    const newListing = new Listing({
      ...listing,
      geometry: {
        type: "Point",
        coordinates: [lon, lat], // GeoJSON requires [lon, lat]
      },
    });

    // Step 3: Handle image upload
    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // Step 4: Set owner and save
    newListing.owner = req.user._id;
    await newListing.save();

    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  } catch (err) {
    console.error("Listing create error:", err.message);
    next(err);
  }
};

module.exports.renderEditForm = async (req, res) => {                
    let { id } = req.params;
    const listing = await Listing.findById(id);
   
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
     }

    let originalImageUrl = listing.image.url;                      
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_250");
   
     res.render("listings/edit.ejs", { listing , originalImageUrl});
};


module.exports.updateListing = async(req, res) => {                       
    
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
   
    if(typeof req.file !== "undefined") {           
        let url = req.file.path;                       
        let filename = req.file.filename;
        listing.image = {url, filename};
    await listing.save();
    }
    
     req.flash("success", "Listing Updated!");
     res.redirect(`/listings/${id}`);   

};

module.exports.destroyListing = async (req, res) => {                      
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
   
    req.flash("success", "Listing Deleted!");

    res.redirect("/listings");
}


module.exports.categoryListings = async(req, res) => {
    const { category } = req.query;
    const listing = await Listing.find({ category });

    res.render("listings/index", {allListings: listing, selectedCategory: category});
};