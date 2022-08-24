
const input = document.querySelector('#guess')
const button = document.querySelector('#btn')
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13)
        play()
    
})

button.addEventListener ( 'click', play);


function play(){

    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Must be a number between 1 and 20!',
          })
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Must be a number between 1 and 20!',
          })

    }

    else{
        if(userNumber < answer) {
           // alert ('Higher!')
            Swal.fire('Higher!')
        }

    else if (userNumber> answer) {
                
                Swal.fire('Lower!')
            }
    else {
        Swal.fire({
            title: 'Correct!',
            text: 'Congratulations!!!',
            imageUrl: 'https://www.cardmessages.com/files/impressive-but-not-surprising-congratulations.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        });
    }
    }


}