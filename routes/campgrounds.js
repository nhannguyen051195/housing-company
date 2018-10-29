var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
var Contact= require('../models/contact')


//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/index",{campgrounds:allCampgrounds});
       }
    });
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image1 = req.body.image1;
    var image2 = req.body.image2;

    var description = req.body.description;
    var location= req.body.location;
    var room= req.body.room;
    var area= req.body.area;
    var price= req.body.price;
    var date= new Date();
    var bedroom=req.body.bedroom;
    var bedroomFurnished= req.body.bedroomFurnished;
    var kitchen= req.body.kitchen;
    var water= req.body.water;
    var electricity= req.body.electricity;
    var internet= req.body.internet;
    var bathroom= req.body.bathroom;
    var toilet= req.body.toilet;
    var bed= req.body.bed;
    var desk= req.body.desk;
    var wifi= req.body.wifi;
    var washing= req.body.washing;
    var heating= req.body.heating;



    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {bedroomFurnished,bed, wifi,desk,washing,heating, bedroom, name, image1, image2, description, author, location, room, area, price, date, kitchen, water, electricity, internet, bathroom, toilet}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds");
      }
   });
});
router.get("/:id/contact", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/contact", {campground: foundCampground});
    });
});
router.post("/:id", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    //var id =Campground.findById(req.params.id, (err, foundCampground)=>foundCampground);
    var homeName=req.body.homeName;

    var newContact = {name, phone, email, homeName}
    // Create a new contact and save to DB
    Contact.create(newContact, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;

