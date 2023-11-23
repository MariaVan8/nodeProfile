const express = require("express");
const indexRouter = express.Router();

//GET

indexRouter.get("/", (req, res) => res.render("index",{
    title:"Home"}));

indexRouter.get("/about", (req, res) => res.render("about",{
    title:"About us page!"
}));

indexRouter.get("/contact", (req, res) => 
    res.render("contact", {status: null, title: "Contact Us"}));

indexRouter.post("/contact", (req, res) => 
    res.render("contact", {status: 'received', formData: req.body, title: "Contact Us"}));

// indexRouter.get("/contact", (req, res) => {
    
//     res.render("contact",{
//         title:"Contact Page!",
//         messageSubmitted: null
//     });
// });


// //POST
// indexRouter.post("/contact", (req, res) =>{

//     res.render("contact",{
//         messageSubmitted: true
//     });
// });

module.exports = indexRouter;
