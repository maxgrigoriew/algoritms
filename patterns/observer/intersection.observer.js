const footer = document.querySelector('.footer');

function handleIntersections(intersectionList) {
    intersectionList.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('пересечено');
        }
    });
}

const observer = new IntersectionObserver(handleIntersections);

// Начало наблюдения за целевым элементом
// observer.observe(footer);
