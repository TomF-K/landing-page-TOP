// local reviews data
const reviews = [
  {
    id: 1,
    student: "Erik P",
    location: "MA, USA",
    text: "Despite having played for 15 years my lessons with Tom provided me with new ways of approaching the instrument.",
  },
  {
    id: 2,
    student: "Stew B",
    location: "Somerset, UK",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    student: "Jeff N",
    location: "MA, USA",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    student: "Jim D",
    location: "Worcestshire, UK",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// declare variables
const student = document.querySelector(".author");
const location = document.querySelector(".location");
const testimonial = document.querySelector(".testimonial-text");

// add event listeners for button clicks
