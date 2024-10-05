const container = document.querySelector('.container');
const button = document.querySelector('.button');

function handleMutations(mutationsList) {
    mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
            console.log('мутация');
        }
    });
}

const observer = new MutationObserver(handleMutations);

// Начало наблюдения за целевым элементом
observer.observe(container, {
        childList: true, // наблюдать за непосредственными детьми
    },
);

button.addEventListener('click', () => {
    container.innerHTML = Math.random();
});
