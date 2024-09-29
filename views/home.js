const link=document.querySelector(".myinput-link");

function validateURL(link){
    
    const url=link.value;

    const urlRegex1 = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?(\?[^\s]*)?$/;
    const urlRegex2 = /^(http?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?(\?[^\s]*)?$/;

    if(!urlRegex1.test(url)){
        if(!urlRegex2.test(url)){
            alert("Please enter a valid URL starting with http:// or https:// and without spaces (e.g., https://example.com).");
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }

}

async function handleSubmit(e) {
    e.preventDefault();
    if(validateURL(link)){
        console.log("URL is valid. Proceeding with form submission...");
        try {
            const response = await fetch('/qr-generate', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  url: link.value,
                  check: true
                })
              });
            
        } catch (error) {
            console.log("Error when url is valid.. "+err );
            const warn=document.querySelector("form p");
            warn
        }
    }else{
        console.log("URL is invalid. Form submission halted.");
        try {
            const response = await fetch('/qr-generate', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  url: link.value,
                  check: false
                })
              });
            
        } catch (error) {
            console.log("Error when url is not valid.. "+err );
        }
    }
}