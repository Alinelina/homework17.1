const userDataInput = document.querySelector('#user');
let userDataInputs = document.querySelectorAll('input[type="text"]');
let dataset;

function validate() {
    let datasetString = userDataInput.value.trim();
    dataset = datasetString.replace(/[^a-zа-яё\s\-\']/gi, '');
    dataset = dataset.split(' ');
    dataset = dataset.filter(elem => elem);
    console.log(dataset);
}


userDataInput.addEventListener("change", validate);

userDataInput.addEventListener("change", function () {
    for (let i = 0; i < 3; i++) {
        let user = dataset[i];
        let firstLetter = user[0];
        user = ` ${firstLetter.toUpperCase()}${user.slice(1).toLowerCase()}`;
        userDataInputs[i+1].style.color = 'blue';
        userDataInputs[i+1].value = user;
    }
});