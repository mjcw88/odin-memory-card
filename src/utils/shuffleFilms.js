export function shuffleFilms(films) {
    const shuffled = [...films];
    let currentIndex = shuffled.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex],
        ];
    }
    return shuffled;
}