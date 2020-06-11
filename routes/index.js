const { Router } = require("express"),
      router = Router();

// Vista principal
router.get('/', (req, res)=>{
   res.render("index.html", {
      title : "Home"
   })
})

// Component Accordion
router.get('/accordion', (req, res)=>{
   res.render("./components/accordion.html", {
      title : "Accordion"
   })
})

// Component Button
router.get('/button', (req, res)=>{
   res.render("./components/button.html", {
      title : "Button"
   })
})

// Component Card
router.get('/card', (req, res)=>{
   res.render("./components/card.html", {
      title : "Card"
   })
})

// Component Carousel
router.get('/carousel', (req, res)=>{
   res.render("./components/carousel.html", {
      title : "Carousel"
   })
})

// Component Dropdown
router.get('/dropdown', (req, res)=>{
   res.render("./components/dropdown.html", {
      title : "Dropdown"
   })
})

// Component Form
router.get('/form', (req, res)=>{
   res.render("./components/form.html", {
      title : "Form"
   })
})

// Component Modal
router.get('/modal', (req, res)=>{
   res.render("./components/modal.html", {
      title : "Modal"
   })
})

// Component Preloader
router.get('/preloader', (req, res)=>{
   res.render("./components/preloader.html", {
      title : "Preloader"
   })
})

module.exports = router;