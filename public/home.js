
document.addEventListener('DOMContentLoaded', () => {
    const linkIcon = document.querySelector('.link-icon');
    const tooltip = document.querySelector('.tooltip');
    const inputField = document.querySelector('.myinput-link');
    
    linkIcon.addEventListener('click', () => {
        inputField.select();
        document.execCommand('copy');
        tooltip.textContent = 'Copied!';
    });

    linkIcon.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
    });

    linkIcon.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.textContent = 'COPY';
    });
    
   
    document.addEventListener('mousemove', (e) => {
        const follower = document.querySelector('.follower');
        const { clientX: x, clientY: y } = e;
        follower.style.transform = `translate(${x - 745}px, ${y -320}px)`;
    });
    
   
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const url = inputField.value;
        console.log("Validating URL:", url);
    
        if (!isValidURL(url)) {
            e.preventDefault(); // Prevent form submission if the URL is invalid
            console.log("Invalid URL");
            document.querySelector('.hide').style.display = 'block';
        } else {
            console.log("Input value:", inputField.value);
            document.querySelector('.hide').style.display = 'none';
        }
    });
    
    
    function isValidURL(str) {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol (optional)
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path (optional)
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string (optional)
            '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator (optional)
        );
        return !!pattern.test(str);
    }
});
