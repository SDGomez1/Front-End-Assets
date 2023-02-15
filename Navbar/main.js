const item_home = document.getElementById('item-home');
const item_about = document.getElementById('item-about');
const item_shop = document.getElementById('item-shop');
const item_contact = document.getElementById('item-contact');
const item_more = document.getElementById('item-more');
var selected;

const clicked = (item) => {
    if (selected == undefined){
        item.classList.add('selected');
        selected = item;

    }
    else if (selected == item){
        selected.classList.remove('selected');
        selected = undefined;
    }
    else {

        selected.classList.remove('selected');
        item.classList.add('selected')
        selected = item
    }
    
};

item_home.onclick = () => clicked(item_home)
item_about.onclick = () => clicked(item_about)
item_shop.onclick = () => clicked(item_shop)
item_contact.onclick = () => clicked(item_contact)
item_more.onclick = () => clicked(item_more)
