// facts
$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});

// import $ from "https://cdn.skypack.dev/jquery@3.6.0";

// $(function () {
$(".image").on("click", function () {
  if ($(this).hasClass("a")) {
    $(".b").removeClass("activeB");
    $(".c").removeClass("activeC");
    $(this).toggleClass("activeA");
  } else if ($(this).hasClass("b")) {
    $(".a").removeClass("activeA");
    $(".c").removeClass("activeC");
    $(this).toggleClass("activeB");
  } else if ($(this).hasClass("c")) {
    $(".a").removeClass("activeA");
    $(".b").removeClass("activeB");
    $(this).toggleClass("activeC");
  }
});
// });


// testimonials

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [{
    name: "Miyah Myles",
    position: "Undergraduate",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Helped me out thoroughly to help take better career decisions with the roadmaps, Also I could assess how well I could answer for the interviews and never missed any updates for any job - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Undergraduate",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I totally recommend this site for all your future endeavors one wishes to take in the IT Industry. It is not only an overall hub for so many services but it's ser experience is also so good.",
  },
  {
    name: "Iida Niskanen",
    position: "Undergraduate",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Helped me out thoroughly to help take better career decisions with the roadmaps, Also I could assess how well I could answer for the interviews and never missed any updates for any job - without a glitch, every time.",
  },
  {
    name: "Renee Sims",
    position: "Instructor",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I totally recommend this site for all your future endeavors one wishes to take in the IT Industry. It is not only an overall hub for so many services but it's ser experience is also so good.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Instructor",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Helped me out thoroughly to help take better career decisions with the roadmaps, Also I could assess how well I could answer for the interviews and never missed any updates for any job - without a glitch, every time.",
  },
  {
    name: "Sasha Ho",
    position: "Designer",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I totally recommend this site for all your future endeavors one wishes to take in the IT Industry. It is not only an overall hub for so many services but it's ser experience is also so good.",
  },
  {
    name: "Veeti Seppanen",
    position: "Developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Helped me out thoroughly to help take better career decisions with the roadmaps, Also I could assess how well I could answer for the interviews and never missed any updates for any job - without a glitch, every time.",
  },
];

let index = 1;

const updateTestimonial = () => {
  const {
    name,
    position,
    photo,
    text
  } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);
//testimonial end

//faq

// const gradient = document.querySelector("#faq");

// function onMouseMove(event) {
//   gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(159,0,191,.9) 0, #4D4FA7 70%)';
// }
// document.addEventListener("mousemove", onMouseMove);

document.querySelectorAll(".item_header").forEach(
  function (header) {

    header.addEventListener("click", () => {
      if (header.parentNode.classList.contains("active")) {
        header.parentNode.classList.remove("active");
        header.parentNode.style.height = "54px";

      } else {
        document.querySelectorAll(".item_header").forEach(
          function (header) {
            header.parentNode.classList.remove("active");
            header.parentNode.style.height = "54px"
          }
        )
        header.parentNode.classList.add("active");




        let altPar = header.nextElementSibling.scrollHeight;
        let altura = altPar + 54;
        header.parentNode.style.height = altura + "px";




      }

    })
  }
);