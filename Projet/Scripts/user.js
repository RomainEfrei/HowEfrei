function changeImg (event) {
	var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]))
};