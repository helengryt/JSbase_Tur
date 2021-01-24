
var btnGoTop = document.getElementsByClassName("buttonModBox")[0];
btnGoTop.addEventListener('click', () => {
    showModalBox();
});

showModalBox();

function showModalBox() {
	let modalBox = createModalBox();

    document.body.appendChild(modalBox);
}

function createModalBox() {
	var modalBox = document.createElement("div");
	modalBox.classList.add('form');

	var inpName = document.createElement("input");
	inpName.classList.add('in_name');
	inpName.type = "text";
	inpName.name = "name";
	inpName.id = "name";
	inpName.placeholder = "Enter your name";

	var inem = document.createElement("input");
	inem.classList.add('in_email');
	inem.type = "email";
	inem.name = "email";
	inem.id = "email";
	inem.placeholder = "Enter your e-mail";

	var btnSubmit = document.createElement("button");
	btnSubmit.classList.add('button_submit');
	btnSubmit.innerText = "Submit info";

	btnSubmit.addEventListener('click', () => {
		
 	if (inem.value.indexOf("@") == -1){

    alert("Enter correct e-mail address");}
    else {
    	alert("Dear " + inpName.value + ", thanks for submitting!");
    }
    document.body.removeChild(modalBox);
    })

	var btnCancel = document.createElement("button");
	btnCancel.classList.add('button_cancel');
	btnCancel.innerText = "Cancel";

	btnCancel.addEventListener('click', () => {
		alert('Sorry to see you go :(');
        document.body.removeChild(modalBox);
	})

	modalBox.appendChild(inpName);
    modalBox.appendChild(inem);
    modalBox.appendChild(btnSubmit);
    modalBox.appendChild(btnCancel);

    return modalBox;

}