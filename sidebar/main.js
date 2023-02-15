const sidebar_container = document.getElementById('sidebar-container')
const item_home = document.getElementById('item-home');
const item_search = document.getElementById('item-search');
const item_user = document.getElementById('item-user');
const item_extras = document.getElementById('item-extras');
const toggle = document.querySelector('.toggle');
var selected = item_home;


const clicked = (item) => {
    selected.classList.remove('selected');
    item.classList.add('selected');
    selected = item;
};

item_home.onclick = () => clicked(item_home);
item_search.onclick = () => clicked(item_search);
item_user.onclick = () => clicked(item_user);
item_extras.onclick = () => clicked(item_extras);
toggle.onclick = () => {
    sidebar_container.classList.toggle('shrink');
    if (sidebar_container.classList.contains('shrink')){
    toggle.innerHTML = '<img  src="Assets/Burger Menu.svg"></img>'
    } else {
        toggle.innerHTML = '<img  src="Assets/Back arrow.svg">'

    }
}