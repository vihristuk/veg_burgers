const left = document.querySelector(".slider__arrow-left");
const right = document.querySelector(".slider__arrow-right");
const items = document.querySelector(".slider__items");

const minRight = 0;
const maxRight = 1880;
const step = 940;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  } else {
    currentRight = 0;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  } else {
    currentRight = 1880;
    items.style.right = currentRight + "px";
  }
});


let consistToggle = document.querySelector('.slider__picture__consist-toggle');
let consist = document.querySelector('.slider__picture__consist');
consistToggle.addEventListener('click', function() {
    if (consist.style.display !== 'none') {
    consist.style.display = 'none';
    consistToggle.style.backgroundColor =  '#f08c33';
  } else {
    consist.style.display="unset";
    consistToggle.style.backgroundColor = '#e35028';
  }
});





// let teamAcco = document.getElementById('accordion');
// let teamTrigger = document.getElementById('team_trigger');

// teamTrigger.addEventListener('click', function() {
//   let currentHeight = parseInt(getComputedStyle(teamAcco).height);

//   if(!currentHeight) {
//     currentHeight = 0;
//   }

//   if (currentHeight == 0) {
//     teamAcco.style.height = 100 + '%';
//   }
// });

let teamTriggers = document.querySelectorAll('.accordion-item__trigger');
let teamItems = document.querySelectorAll('.accordion__item');

    [].forEach.call(teamItems, function(item) {
      item.addEventListener('click', function() {
        item.classList.toggle('accordion__item--active');
});
})



// let teamTriggers = document.querySelectorAll('.accordion-item__trigger');
// console.log(teamTriggers);
// let teamItems = document.querySelectorAll('.accordion__item');
// console.log(teamItems);

//     [].forEach.call(teamItems, function(item) {
//       item.addEventListener('click', function() {
//         if (item.classList.contains('accordion__item--active')) {
//         item.classList.remove('accordion__item--active');
//       } else {
//         item.classList.add('accordion__item--active');
//       }
//       });
//     });



let menuTriggers = document.querySelectorAll('.menu__accordion-item__trigger');
let menuItems = document.querySelectorAll('.menu__accordion-item');

    [].forEach.call(menuItems, function(item) {
      item.addEventListener('click', function() {
        item.classList.toggle('menu__accordion-item--active');
});
});

let menuTitles = document.querySelectorAll('.menu__accordion-item__trigger-title');

    [].forEach.call(menuTitles, function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
});
});

const openButton = document.querySelector('#review-1');

function openReview(content) {
  const overlayReview = document.createElement('div');
  overlayReview.classList.add('overlay_review');

  const containerReview = document.createElement('div');
  containerReview.classList.add('container_review');

  const contentReview = document.createElement('div');
  contentReview.classList.add('content_review');
  contentReview.innerHTML = content;

  const closeReview = document.createElement('a');
  closeReview.classList.add('close_review');
  closeReview.textContent = 'x';
  closeReview.href = '#';
  closeReview.addEventListener('click', function() {
    overlayReview.remove();
    event.preventDefault();
  });

  overlayReview.append(containerReview);
  containerReview.append(closeReview);
  containerReview.append(contentReview);

  return overlayReview;
}

openButton.addEventListener('click', function() {
  const overlay = openReview('<h3 style="text-decoration: uppercase; font-family: Gagalin; font-size: rem(14px); margin-top: 0">Имя</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam nulla fugiat itaque unde eveniet deserunt nostrum culpa officia earum repellat suscipit sed, autem odio aliquid placeat? Odio, saepe ipsam.');
  document.body.append(overlay);
});


$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};

