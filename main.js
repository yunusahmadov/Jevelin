  //  /* этот код помечает картинки, для удобства разработки */
  //  let i = 1;
  //  for(let li of carousel.querySelectorAll('li')) {
  //    li.style.position = 'relative';
  //    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  //    i++;
  //  }

  //  /* конфигурация */
  //  let width = 380; // ширина картинки
  //  let count = 3; // видимое количество изображений

  //  let list = carousel.querySelector('ul');
  //  let listElems = carousel.querySelectorAll('li');

  //  let position = 0; // положение ленты прокрутки

  //  carousel.querySelector('.prev').onclick = function() {
  //    // сдвиг влево
  //    position += width * count;
  //    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  //    position = Math.min(position, 0)
  //    list.style.marginLeft = position + 'px';
  //  };

  //  carousel.querySelector('.next').onclick = function() {
  //    // сдвиг вправо
  //    position -= width * count;
  //    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  //    position = Math.max(position, -width * (listElems.length - count));
  //    list.style.marginLeft = position + 'px';
  //  };
  //  //

// let dot=document.querySelector('#slick-slide-control00')


// dot.addEventListener('click',()=>{
//   dot.style.backgroundColor='red'
//   dot.style.color='red'
// })

// let dot1=document.querySelector('#slick-slide-control01')
// dot1.addEventListener('click',()=>{
//   dot1.style.backgroundColor='red'
//   dot1.style.color='red'
// })
// let bb=document.querySelector('.slick-active')

// bb.addEventListener()

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}