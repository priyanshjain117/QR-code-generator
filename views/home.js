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
    validateURL(link);
}