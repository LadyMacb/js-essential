function submitFeedback(){
    const userName = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('experience').value;

    document.getElementById('userName').innerHTML = userName;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = userExperience;
    
    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback');
}

const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter') {
        submitFeedback();
    }
})