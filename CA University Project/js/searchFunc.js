let btnSearch = document.getElementById('btnSearch');
let body = document.getElementsByTagName("BODY")[0];

btnSearch.addEventListener('click', function(){
    let searchForm = document.getElementById('search');
    if(searchForm.style.display === "none"){
        searchForm.style.display="block";
        body.style.overflow = "hidden";
    }else{
        searchForm.style.display="none";
        body.style.overflow = "visible";
    }
})


function searchDiv() {
    var input = document.getElementById("inputSearch");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('target');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
      }
    }
  }