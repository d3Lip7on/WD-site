window.addEventListener('load', function() {
    baguetteBox.run('.gallery__inner');
  });
  

let gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (e)=>{
    
    if(e.target.tagName != "IMG") return;

    let items = gallery.querySelectorAll('.gallery__item');
    for (let item of items){
        if (item.classList.contains('gallery__item_viewed')){
            item.classList.remove('gallery__item_viewed')
        }
    }
    let img = e.target;
    let galleryItem = img.closest('.gallery__item');
    galleryItem.classList.add('gallery__item_viewed');
})