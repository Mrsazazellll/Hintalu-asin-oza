//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// // modal1
// const itemDetailModal1 = document.querySelector('#item-detail-modal1');
// const item1 = document.querySelector('.item-1');

// item1.onclick = (e) =>{
//   itemDetailModal1.style.display = 'flex';
//   e.preventDefault();
// }

// // klik tombol close
// document.querySelector('.modal1 .close-icon').onclick=(e) =>{
//   itemDetailModal1.style.display = 'none';
//   e.preventDefault();
// }
// //klik diluar modal
// const modal1 = document.querySelector('#item-detail-modal1');
// window.onclick=(e) =>{
//   if(e.target === modal1){
//     modal1.style.display='none';
//   }
// }

// // modal2
// const itemDetailModal2 = document.querySelector('#item-detail-modal2');
// const item2 = document.querySelector('.item-2');

// item2.onclick = (e) =>{
//   itemDetailModal2.style.display = 'flex';
//   e.preventDefault();
// }

// // klik tombol close
// document.querySelector('.modal2 .close-icon').onclick=(e) =>{
//   itemDetailModal2.style.display = 'none';
//   e.preventDefault();
// }

// //klik diluar modal
// const modal2 = document.querySelector('#item-detail-modal2');
// window.onclick=(e) =>{
//   if(e.target === modal2){
//     modal2.style.display='none';
//   }
// }

// // modal3
// const itemDetailModal3 = document.querySelector('#item-detail-modal3');
// const item3 = document.querySelector('.item-3');

// item3.onclick = (e) =>{
//   itemDetailModal3.style.display = 'flex';
//   e.preventDefault();
// }

// // klik tombol close
// document.querySelector('.modal3 .close-icon').onclick=(e) =>{
//   itemDetailModal3.style.display = 'none';
//   e.preventDefault();
// }

// // klik diluar modal
//   const modal3 = document.querySelector('#item-detail-modal3');
//   window.onclick=(e) =>{
//     if(e.target === modal3){
//       modal3.style.display='none';
//     }
//   }
  // modal1
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const item1 = document.querySelector('.item-1');

item1.onclick = (e) =>{
  itemDetailModal1.style.display = 'flex';
  e.preventDefault();
}

// klik tombol close
document.querySelector('#item-detail-modal1 .close-icon').onclick=(e) =>{
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
}

//klik diluar modal
const modal1 = document.querySelector('#item-detail-modal1');
modal1.onclick=(e) =>{
  if(e.target === modal1){
    modal1.style.display='none';
  }
}

// modal2
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const item2 = document.querySelector('.item-2');

item2.onclick = (e) =>{
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();
}

// klik tombol close
document.querySelector('#item-detail-modal2 .close-icon').onclick=(e) =>{
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
}

//klik diluar modal
const modal2 = document.querySelector('#item-detail-modal2');
modal2.onclick=(e) =>{
  if(e.target === modal2){
    modal2.style.display='none';
  }
}

// modal3
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const item3 = document.querySelector('.item-3');

item3.onclick = (e) =>{
  itemDetailModal3.style.display = 'flex';
  e.preventDefault();
}

// klik tombol close
document.querySelector('#item-detail-modal3 .close-icon').onclick=(e) =>{
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
}

// klik diluar modal
const modal3 = document.querySelector('#item-detail-modal3');
modal3.onclick=(e) =>{
  if(e.target === modal3){
    modal3.style.display='none';
  }
}