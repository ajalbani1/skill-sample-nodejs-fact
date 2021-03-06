const highscores = require('./highscores');

class Util {
    static isTopTen = (score) => {
        let topten = highscores
            .sort((a, b) => b.point - a.point)
            .slice(0, highscores.length > 10 ? 10 : highscores.length);
        return (score > topten[topten.length - 1].point);
    }
    static isHighScore = (score) => {
        let topten = highscores
            .sort((a, b) => b.point - a.point)
            .slice(0, highscores.length > 10 ? 10 : highscores.length);
        return (score > topten[0].point);
    }
}

module.exports = Util;