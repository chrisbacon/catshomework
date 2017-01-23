var createCatUl = function() {
    var catUl = document.createElement('ul');
    catUl.classList.add('cat');

    return catUl;
}

var createNameLi = function(name) {
    var nameLi = document.createElement('li');
    nameLi.innerText = 'Name: ' + name;
    return nameLi;
}

var createFoodLi = function(food) {
    var foodLi = document.createElement('li');
    foodLi.innerText = 'Favourite Food: ' + food;
    return foodLi;
}

var createIMG = function(source) {
    var img = document.createElement('img');
    img.src = source;
    img.width = 500;
    return img;
}


var appendElements = function(catsSection, catUl, nameLi, foodLi, img) {
    catUl.appendChild(nameLi);
    catUl.appendChild(foodLi);
    catUl.appendChild(img);

    catsSection.appendChild(catUl);
}

var addCat = function(name, food, source) {

    var catUL = createCatUl();
    var nameLi = createNameLi(name);
    var foodLi = createFoodLi(food);
    var img = createIMG(source)

    var catsSection = document.getElementById('cats');

    appendElements(catsSection, catUL, nameLi, foodLi, img);
};


window.onload = function() {

    var cats = [
    {name: 'Boba', food: 'Sock Fluff', source: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'}, 
    {name: 'Barnaby', food: 'Tuna', source: 'http://68.media.tumblr.com/15756ae1c8323d643a3d275683aa85ec/tumblr_nzpgojRHAY1uhevdso1_1280.jpg'}, 
    {name: 'Max', food: 'Whiskas Temptations', source: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}, 
    {name: 'Muffin', food: 'Eggs', source: 'muf.jpg'}];


    for (cat of cats) {
        addCat(cat.name, cat.food, cat.source);
    }

};
