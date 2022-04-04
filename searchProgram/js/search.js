function search(){

    var searchItem = document.getElementById("txtlookfor").value;
    var site = 'douglascollege.ca';
    
    if(searchItem!=""){
        var engine = document.getElementById("dropdown").value;

        if(engine == "1"){
            var query = "http://www.bing.com/search?q="+ encodeURIComponent(searchItem) + " site:"+ site;
        }
        else{
            var query = "http://www.google.com/search?q="+ encodeURIComponent(searchItem) + " site:"+ site;
        }
        
        location.href = query;

    }
    else{
        alert("Please type the word or words for which you want to search.");
    }


}