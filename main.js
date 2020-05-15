const button = document.querySelector('button')
const body = document.querySelector('body')
const heading = document.querySelector('#heading')
const colors = ['red', 'green', 'blue','yellow','pink','purple','gray','white','black','yellowgreen','hotpink','deeppink','lightsalmon','orange','gold','orangered','coral','tomato']
const colorheading = ['red', 'green', 'blue','yellow','pink','purple','gray','white','black','yellowgreen','hotpink','deeppink','lightsalmon','orange','gold','orangered','coral','tomato']
body.style.backgroundColor = 'violet'
heading.style.color = 'blue'
button.addEventListener('click',changebackground)

function changebackground(){
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    const headingColor = parseInt(Math.random()*colorheading.length)
    heading.style.color = colorheading[headingColor]
}