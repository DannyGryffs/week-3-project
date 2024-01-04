
let noteForm = document.getElementById('note-form');

let noteNameInput = document.getElementById('noteName-input')

let forWhoInput = document.getElementById('forWho-input');

let emailInput = document.getElementById('email-input');

let fromInput = document.getElementById('from-input');

let messageinput = document.getElementById('message-input');

let deleteform = document.getElementById('delete-form')

let deleteById = document.getElementById('delete-by-id-input')

noteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let body = {
        name: noteNameInput.value,
        to: forWhoInput.value,
        email: emailInput.value,
        from: fromInput.value,
        message: messageinput.value
    };

    
    axios.post('/create-note', body)
         .then((response) => {
            loadNotesToDom(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
});


axios.get('/notes')
.then((result) => {
    loadNotesToDom(result);
})

.catch((error) => {
    console.log(error);
});

deleteform.addEventListener('submit', (event) => {
    event.preventDefault();
    let id = deleteById.value

    axios.delete('/delete-note?id=' + id)
    .then((response) => {
        loadNotesToDom(response.data)
        alert('Note removed')
    })
    .catch((error) => {
        console.log(error)
    })
});


function loadNotesToDom(notesArray){
    document.getElementById('notes-display').innerHTML = '';

    for (let i = 0; i < notesArray.length; i++){
        let containerDiv = document.createElement('div');
        let heading = document.createElement('h3');
        let toP = document.createElement('p');
        let emailP = document.createElement('p');
        let fromP = document.createElement('p');
        let messageP = document.createElement('p');

        containerDiv.appendChild(heading);
        containerDiv.appendChild(toP);
        containerDiv.appendChild(emailP);
        containerDiv.appendChild(fromP);
        containerDiv.appendChild(messageP);

        heading.innerHTML = 'Note ID: ' + notesArray[i].name;
        toP.innerHTML = 'To: ' + notesArray[i].to;
        emailP.innerHTML = 'Email: ' + notesArray[i].email;
        fromP.innerHTML = 'From: ' + notesArray[i].from;
        messageP.innerHTML = 'Message: ' + notesArray[i].message;
        
       document.getElementById('notes-display').appendChild(containerDiv);
    };
};
