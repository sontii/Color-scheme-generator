const colorBtn = document.getElementById('btn')
const colorPicker = document.getElementById("input-color-picker")
const colorschema = document.getElementById("color-schema-select");

document.getElementById('wrapper').addEventListener('click', (e) => {
    if(e.target.id === 'btn') {
        e.preventDefault()
        getApiData(colorPicker.value.substring(1), colorschema.value);
    }
})

function getApiData(colorValue, mode) {
    
    fetch(
			`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode}`
		)
			.then((res) => res.json())
			.then((data) => console.log(data));
}