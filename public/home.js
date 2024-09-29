
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
        console.log("hiii4");

        if (!isValidURL(url)) {
            e.preventDefault();
            console.log("url wrongg");
            document.querySelector('.hide').style.display = 'block';
        }
    });
    
    function isValidURL(str) {
        console.log("hiii");
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }
});
