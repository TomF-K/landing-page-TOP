// local reviews data
const reviews = [
  {
    id: 1,
    student: "Erik P",
    hometown: "(MA, USA)",
    text: "Despite having played for 15 years my lessons with Tom provided me with new ways of approaching the instrument.",
  },
  {
    id: 2,
    student: "Stew B",
    hometown: "(Somerset, UK)",
    text: "The transformation in my understanding of my instrument, my style of playing and my ability to read and write music is little short of miraculous. Tom understands what makes me tick as a person and communicates with such precision, humility and skill that he makes the learning fun and the progression seamless.",
  },
  {
    id: 3,
    student: "Jeff N",
    hometown: "(MA, USA)",
    text: "It's been a while and I've been meaning to email you to let me know how much I appreciate you... You gave me exactly what was needed! Particularly the left hand fingering thought process. You were very considerate of my situation and context, and told me how you go about various techniques, while explaining various options.",
  },
  {
    id: 4,
    student: "Jim D",
    hometown: "(Worcestshire, UK)",
    text: "Tom is a great guy and ultra-professional in his approach to his teaching, has a high quality video-audio setup which he uses to provide lessons, he is very disciplined about documenting our lessons, he always sends me a written plan and objectives following up on lessons and when I send him recordings he always comes to the lesson having listened to them and with comments. My initial reservations about learning over Zoom are gone completely, it works great!",
  },
  {
    id: 5,
    student: "Alex B",
    hometown: "(Oxfordshire, UK)",
    text: "It really is difficult to fault Toms teaching in any way -- he was extremely professional and friendly in our lessons, he had a great audio/video setup, he prepared and shared .pdf files for the lessons with personalised content on whatever I was working on at the time, and also made notes after the lesson so I would know what I should work on in between.",
  },
];

// target elements
const author = document.querySelector(".author");
const hometown = document.querySelector(".hometown");
const testimonial = document.querySelector(".testimonial-text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting value

let currentItem = 0;

// load starting item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  author.textContent = item.student;
  hometown.textContent = item.hometown;
  testimonial.textContent = item.text;
});

// show student based on currentItem value

function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.student;
  hometown.textContent = item.hometown;
  testimonial.textContent = item.text;
}

// add event listeners for button clicks

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem == 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
