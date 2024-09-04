// ..........................Add event Lisner with function clouser method...............

// function experiments() {
//     let count = 0
//     document.getElementById('CLICK').addEventListener('click', function abc() {
//         window.console.log('Husnain', ++count)
//
//     })
// }
// experiments();
// ...............blocking the main threed...........................
console.log('husnain')

setTimeout(()=>{
    console.log('babar')
},5000)

let newDate = new Date().getTime()
let oldDate = newDate
while (oldDate < newDate + 10000) {
    oldDate = new Date().getTime()
}
console.log(`zman`)
console.log('awais')