var towers = [
    {        
        name : 'Galata Tower/Day',
        image : 'img/1.jpg',
        link : 'https://tr.wikipedia.org/wiki/Galata_Kulesi'
    },
    {
        name : 'Galata Tower/Night',
        image : 'img/2.jpg',
        link : 'https://tr.wikipedia.org/wiki/Galata_Kulesi'    
    },
    {
        name : 'Galata Tower/Day',
        image : 'img/3.jpg',
        link : 'https://tr.wikipedia.org/wiki/Galata_Kulesi'
    },
    {
        name : 'Galata Tower/Night',
        image : 'img/4.jpg',
        link : 'https://tr.wikipedia.org/wiki/Galata_Kulesi'
    }
];


var index = 0;
var slideCount = towers.length;
var int;

var settings = {
    duration : '1000',
    random : true //or false(consecutive)
}

init(settings);


document.querySelector('.fa-arrow-left').addEventListener('click',function(){

    index--;
    showSlide(index);
    console.log(index);

});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){

    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.arr').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(int);
    })
});

document.querySelectorAll('.arr').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init (set){

    var pre;    
    int = setInterval(function(){
        if(settings.random){
            do{
                index =Math.floor(Math.random() * slideCount);
            }while(index == pre)
            pre == index;
        }else{

            if(slideCount == index+1){    // for false -- consecutive 
                index = -1;
            }
            showSlide(index);
            index++;                      // for false -- consecutive

        }
        showSlide(index);

    },settings.duration);

}

function showSlide(i){

    index = i;

    if(i<0) {
        index = slideCount - 1;
    }
    if(i>=slideCount){
        index =0;
    }

    document.querySelector('.slider-img').setAttribute('src',towers[index].image);
    document.querySelector('.slider-title').textContent = towers[index].name;
    document.querySelector('.slider-link').setAttribute('href',towers[index].link);
}





