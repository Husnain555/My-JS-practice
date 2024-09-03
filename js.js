
function bcb() {
    count = 0
    let a = document.getElementById('click')
    a.addEventListener('click', function abc() {
        console.log('clicked', ++count);
    })

}
bcb();