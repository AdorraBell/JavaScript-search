	window.onload = function(){
		let search_input_val;   //input value
		let search_input   = document.getElementById("search-line-input");     //input tag
		let search_btn     = document.getElementById("search-btn");            //search button 
		let clear_btn      = document.getElementById("clear-btn");             //clear button
        let list_items     = document.getElementsByClassName("product-block"); //element containing the elements to be searched for
        let element_of_search;  //here will be element which is checking at the moment
        let search_res;         //the result of search
        let search_warning = document.getElementById("search-warning");        //error message
        let hidden_elements;    //items which don't match the search query

        search_btn.addEventListener('click', search_element);  //tracking click on search button
        clear_btn.addEventListener('click', clear_search);     //tracking click on clear button
        search_input.addEventListener('keypress', function(e){ 
        	if(e.which === 13){                                //tracking key "Enter"
        		e.preventDefault();
			  	search_input_val = document.getElementById("search-line-input").value;
	        	if(search_input_val == ""){
	        		clear_search();
	        		return true;
	        	}else{
	        		search_element();
	        		return true;
	        	}
			}
        });

        /*element search function*/

        function search_element(){
			search_input_val = document.getElementById("search-line-input").value;
        	if(search_warning.style.display == "block") search_warning.style.display = "none";
        	for(let i = 0; i < list_items.length; i++){
	        	list_items[i].classList.remove('hidden-element');
	        }
        	for(let i = 0; i < list_items.length; i++){
	        	element_of_search = list_items[i].innerHTML.toLowerCase();
	        	search_res = element_of_search.replace(/\<.*\>/gi," ");                  //delete tags
	        	search_res = element_of_search.match(`.*${ search_input_val}.*`,'gi');   //search for matches
	        	if(search_res == null){
	        		list_items[i].classList.add("hidden-element");
	        	}
	        }
	        hidden_elements = document.getElementsByClassName("hidden-element");
	        if(list_items.length == hidden_elements.length){
	        	search_warning.style.display = "block";
	        }
	        return true;
        }

        /*input clear function*/

        function clear_search(){
        	for(let i = 0; i < list_items.length; i++){
	        	list_items[i].classList.remove('hidden-element');
	        }
	        search_warning.style.display = "none";
	        search_input_val = document.getElementById("search-line-input"); 
        	search_input_val.value = "";
        	return true;
        } 

	}