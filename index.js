const colorBtn = document.getElementById('btn')
const colorPicker = document.getElementById('input-color-picker')
const colorschema = document.getElementById('color-schema-select');
const colorContainer = document.getElementById("color-container");
const namedColorContainer = document.getElementById("named-color-container");

const colors = []

document.getElementById('wrapper').addEventListener('click', (e) => {
    if(e.target.id === 'btn') {
        e.preventDefault()
        getApiData(colorPicker.value.substring(1), colorschema.value);
    }
})

function getApiData(colorValue, mode) {   
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
                data.colors.map(hexValue => {
                    colors.push(hexValue.hex.value)
                })
        });

    render()
}

function render() {
    let colorHtml = ''
    let namedColorHtml = ''
    colors.map(color => {
        colorHtml += `<div class"color"style="background-color:˘${color};"></div>`;
        namedColorHtml += `<div class"named-color">${color};" </div>`;
    })
    colorContainer = colorHtml
    namedColorContainer = namedColorHtml
}