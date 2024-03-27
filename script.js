let datesButt = document.querySelector('#butt_dates')
let footerButt = document.querySelector('#butt_footer')
datesButt.addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({
        top: 760,
        behavior:'smooth'
    })
})
footerButt.addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        top:3000,
        behavior:'smooth'
    })
})