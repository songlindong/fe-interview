var Score;
(function (Score) {
    Score[Score["BAD"] = 0] = "BAD";
    Score[Score["NG"] = 1] = "NG";
    Score[Score["GOOD"] = 2] = "GOOD";
    Score[Score["PERFECT"] = 3] = "PERFECT";
})(Score || (Score = {}));
var sco = Score.BAD;
console.log(sco);
