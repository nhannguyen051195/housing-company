{"filter":false,"title":"campgrounds.js","tooltip":"/routes/campgrounds.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":55,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","module.exports = router;","",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":55,"column":0},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","module.exports = router;","",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":55,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","module.exports = router;","",""]}],[{"start":{"row":0,"column":0},"end":{"row":55,"column":0},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","module.exports = router;","",""],"id":3},{"start":{"row":0,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;","",""]}],[{"start":{"row":0,"column":0},"end":{"row":69,"column":0},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;","",""],"id":4},{"start":{"row":0,"column":0},"end":{"row":54,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               //add username and id to comment","               comment.author.id = req.user._id;","               comment.author.username = req.user.username;","               //save comment","               comment.save();","               campground.comments.push(comment);","               campground.save();","               console.log(comment);","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"]}],[{"start":{"row":0,"column":0},"end":{"row":54,"column":24},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", isLoggedIn, function(req, res){","    // find campground by id","    console.log(req.params.id);","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","        } else {","             res.render(\"comments/new\", {campground: campground});","        }","    })","});","","//Comments Create","router.post(\"/\",isLoggedIn,function(req, res){","   //lookup campground using ID","   Campground.findById(req.params.id, function(err, campground){","       if(err){","           console.log(err);","           res.redirect(\"/campgrounds\");","       } else {","        Comment.create(req.body.comment, function(err, comment){","           if(err){","               console.log(err);","           } else {","               //add username and id to comment","               comment.author.id = req.user._id;","               comment.author.username = req.user.username;","               //save comment","               comment.save();","               campground.comments.push(comment);","               campground.save();","               console.log(comment);","               res.redirect('/campgrounds/' + campground._id);","           }","        });","       }","   });","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","","module.exports = router;"],"id":5},{"start":{"row":0,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;","",""]}],[{"start":{"row":0,"column":0},"end":{"row":69,"column":0},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;","",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":94,"column":0},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","var middleware = require(\"../middleware\");","","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", middleware.isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", middleware.isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","// EDIT CAMPGROUND ROUTE","router.get(\"/:id/edit\", middleware.checkCampgroundOwnership, function(req, res){","    Campground.findById(req.params.id, function(err, foundCampground){","        res.render(\"campgrounds/edit\", {campground: foundCampground});","    });","});","","// UPDATE CAMPGROUND ROUTE","router.put(\"/:id\",middleware.checkCampgroundOwnership, function(req, res){","    // find and update the correct campground","    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){","       if(err){","           res.redirect(\"/campgrounds\");","       } else {","           //redirect somewhere(show page)","           res.redirect(\"/campgrounds/\" + req.params.id);","       }","    });","});","","// DESTROY CAMPGROUND ROUTE","router.delete(\"/:id\",middleware.checkCampgroundOwnership, function(req, res){","   Campground.findByIdAndRemove(req.params.id, function(err){","      if(err){","          res.redirect(\"/campgrounds\");","      } else {","          res.redirect(\"/campgrounds\");","      }","   });","});","","","module.exports = router;","",""]}]]},"ace":{"folds":[],"scrolltop":830.5,"scrollleft":0,"selection":{"start":{"row":79,"column":0},"end":{"row":79,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":50,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1540384089545,"hash":"0c16c488539fc138237d6a7636ed78eadd1a1a19"}