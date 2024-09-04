function experiments(){
    let count = 0
    document.getElementById('CLICK').addEventListener('click', ()=>{
        console.log('husnain', ++count);
    })
}

let abc;
abc = experiments();
console.log(abc)