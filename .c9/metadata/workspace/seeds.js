{"filter":false,"title":"seeds.js","tooltip":"/seeds.js","ace":{"folds":[],"scrolltop":584,"scrollleft":0,"selection":{"start":{"row":58,"column":0},"end":{"row":58,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"bb328fd4d11e1843d92999cedc979e3c2878c462","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"remove","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"blah blah blah\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"blah blah blah\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""]}],[{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"remove","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg\",","        description: \"blah blah blah\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"blah blah blah\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""],"id":3},{"start":{"row":0,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");"," ","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]"," ","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","        Comment.remove({}, function(err) {","            if(err){","                console.log(err);","            }","            console.log(\"removed comments!\");","             //add a few campgrounds","            data.forEach(function(seed){","                Campground.create(seed, function(err, campground){","                    if(err){","                        console.log(err)","                    } else {","                        console.log(\"added a campground\");","                        //create a comment","                        Comment.create(","                            {","                                text: \"This place is great, but I wish there was internet\",","                                author: \"Homer\"","                            }, function(err, comment){","                                if(err){","                                    console.log(err);","                                } else {","                                    campground.comments.push(comment);","                                    campground.save();","                                    console.log(\"Created new comment\");","                                }","                            });","                    }","                });","            });","        });","    }); ","    //add a few comments","}"," ","module.exports = seedDB;",""]}],[{"start":{"row":0,"column":0},"end":{"row":64,"column":0},"action":"remove","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");"," ","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]"," ","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","        Comment.remove({}, function(err) {","            if(err){","                console.log(err);","            }","            console.log(\"removed comments!\");","             //add a few campgrounds","            data.forEach(function(seed){","                Campground.create(seed, function(err, campground){","                    if(err){","                        console.log(err)","                    } else {","                        console.log(\"added a campground\");","                        //create a comment","                        Comment.create(","                            {","                                text: \"This place is great, but I wish there was internet\",","                                author: \"Homer\"","                            }, function(err, comment){","                                if(err){","                                    console.log(err);","                                } else {","                                    campground.comments.push(comment);","                                    campground.save();","                                    console.log(\"Created new comment\");","                                }","                            });","                    }","                });","            });","        });","    }); ","    //add a few comments","}"," ","module.exports = seedDB;",""],"id":4},{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""]}],[{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"remove","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""],"id":5},{"start":{"row":0,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");","var Comment   = require(\"./models/comment\");","","var data = [","    {","        name: \"Cloud's Rest\", ","        image: \"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Desert Mesa\", ","        image: \"https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    },","    {","        name: \"Canyon Floor\", ","        image: \"https://farm1.staticflickr.com/189/493046463_841a18169e.jpg\",","        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\"","    }","]","","function seedDB(){","   //Remove all campgrounds","   Campground.remove({}, function(err){","        if(err){","            console.log(err);","        }","        console.log(\"removed campgrounds!\");","         //add a few campgrounds","        data.forEach(function(seed){","            Campground.create(seed, function(err, campground){","                if(err){","                    console.log(err)","                } else {","                    console.log(\"added a campground\");","                    //create a comment","                    Comment.create(","                        {","                            text: \"This place is great, but I wish there was internet\",","                            author: \"Homer\"","                        }, function(err, comment){","                            if(err){","                                console.log(err);","                            } else {","                                campground.comments.push(comment);","                                campground.save();","                                console.log(\"Created new comment\");","                            }","                        });","                }","            });","        });","    }); ","    //add a few comments","}","","module.exports = seedDB;",""]}]]},"timestamp":1540381331186}