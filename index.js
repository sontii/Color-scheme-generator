const colorBtn = document.getElementById('btn')
const colorPicker = document.getElementById('input-color-picker')
const colorschema = document.getElementById('color-schema-select');
const colorContainer = document.getElementById("color-container");
const namedColorContainer = document.getElementById("named-color-container");

let colors = []

document.getElementById('wrapper').addEventListener('click', (e) => {
    if(e.target.id === 'btn') {
        e.preventDefault()
        const colorValue = colorPicker.value.substring(1);
        getApiData(colorValue, colorschema.value);
    } else if (e.target.className === "color" || e.target.className === "named-color") {
			navigator.clipboard.writeText(e.target.innerText);
		}
})

function getApiData(colorValue, mode) { 
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            data.colors.map(hexValue => {
                colors.push(hexValue.hex.value)
            })
        render();
        });
    
}

function render() {
    let colorHtml = ""
	let namedColorHtml = ""
	colors.map((color) => {
		colorHtml += `<div 
                        class="color"
                        style="background-color:${color};color:${color}"
                        >${color}
                        </div>`
		namedColorHtml += `<div 
                        class="named-color"
                        >${color}
                        </div>`
	});
	colorContainer.innerHTML = colorHtml
	namedColorContainer.innerHTML = namedColorHtml
    colors = []
}