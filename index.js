function addingEventListener(input) {

    

    input.addEventListener('click', function(event) {
        alert('I was clicked!');
    });

}

const input1 = document.querySelectorAll('input')[0];
const input2 = document.querySelectorAll('input')[1];
addingEventListener(input1)
addingEventListener(input2)

