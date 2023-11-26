import { changePageContent } from "../model/model.js";
import { loadGalleryPage } from "../model/model.js";
import { loadBlogPage } from "../model/model.js";

function blogListeners(){
    $(".blogBtn").on("click", function(e){
        let blogID = e.currentTarget.id;
        loadBlogPage(blogID);
    });

}

function galListeners(){
    $(".galBtn").on("click", function(e){
        let galID = e.currentTarget.id;
        loadGalleryPage(galID);
    });
}

function initListeners(){
    $("nav .nav-links a").on("click", function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
        galListeners();
        blogListeners();
    });
    
}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
    galListeners();
    blogListeners();
});