// filter array 
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        Title : "Harry Potter and the Philosopher’s Stone",
        src: "./1.jpg",
        Author : "J.K.Rowling",
        Subject: "Magician",
        date:"1997"
    },
    {
        id:2,
        Title : "Harry Potter and the Chamber of Secrets",
        src: "./2.jpg",
        Author : "J.K.Rowling",
        Subject: "funny",
        date:"2002"
    },
    {
        id:3,
        Title : "Harry Potter and the Prisoner of Azkaban",
        src: "./3.jpg",
        Author : "J.K.Rowling",
        Subject: "angry",
        date:"2004"
    },
    {
        id:4,
        Title : "Harry Potter and the Goblet of Fire",
        src: "./4.jpg",
        Author : "J.K.Rowling",
        Subject: "melody",
        date:"2000"
    },
    {
        id:5,
        Title : "Harry Potter and the Order of the Phoenix",
        src: "./5.jpg",
        Author : "J.K.Rowling",
        Subject: "multi",
        date:"2003"
    },
    {
        id:6,
        Title : "The India Story",
        src: "./6.jpg",
        Author : "Bimal Jalal",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "smart watch",
        src: "./book.jpg",
        Author : "fan",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "Lal Salam",
        src: "./7.jpg",
        Author : "Smriti Irani",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "A Place Called Home",
        src: "./8.jpg",
        Author : "Preeti Shenoy",
        Subject: "adventure",
        date:"2022"
    },
    {
        id:6,
        Title : "Listen to Your Heart: The London Adventure",
        src: "./9.jpg",
        Author : "Ruskin Bond",
        Subject: "adventure",
        date:"2022"
    }
   ];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center ">${curarra[i].Title}</h4>

          <img src="${curarra[i].src}" width="80%" height="150px"/>
          <h5 class="text-capitalize text-center mt-2">${curarra[i].Author}</h5>
          <h5 class="text-capitalize text-center mt-2"> ${curarra[i].Subject} ${curarra[i].date} </h5>
          <button class="btn btn-primary w-100 mx-auto">Click</button>
       
          </div>
          </div>
       `
   }

}


//pagination


/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 10, // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);



// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.Author.includes(text)){
            return a.Author;
           }
           if(a.Title.includes(text)){
            return a.Title;
           }
           if(a.date.includes(text)){
            return a.date;
           }
           if(a.Subject.includes(text)){
            return a.Subject;
           }
        

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});