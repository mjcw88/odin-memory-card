import "../styles/score.css";

function Score({ score, best }) {
    return (
        <>
        <div className="score-container">
            <div className="score">
                Current Score: {score}
            </div>
            <div className="best">
                Best Score: {best}
            </div>
        </div>
        </>
    )
}

export default Score