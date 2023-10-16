
let form1 = document.getElementById("form1");

document.addEventListener('keydown', function (event) {
    
    if (event.key === "Enter" 
        && event.target.nodeName === 'INPUT') {
     
        let indexNext = 1;

        if(event.shiftKey){
            indexNext = -1
        }
     
        //OPTION 1
        //var form = event.target.form;
        //var index = Array.prototype.indexOf.call(form, event.target);
        // form.elements[index + indexNext].focus();
        
        //OPTION 2
        var index = Array.prototype.indexOf.call(form1, event.target);
        form1.elements[index + indexNext].focus();
        
        event.preventDefault();

    }

  });