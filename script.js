let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!!!';
                    alert('You kinda smell.... like a bakka!');
                    break;
                }
                break;
            default:
                display.innerText += e.target.innerText;
                console.log(display.innerText);
        }
    })
})