
const card = document.querySelectorAll('.show');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate__pulse', entry.isIntersecting);
        })
    },
    { 
        threshold: 0.5,
    }
)

card.forEach(card => {
    observer.observe(card);
})
