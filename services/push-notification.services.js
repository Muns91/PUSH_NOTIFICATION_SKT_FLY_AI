const { ONE_SIGNAL_CONFIG } = require("../config/app.config");

async function SendNotification(data, callback){
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Basic " + ONE_SIGNAL_CONFIG.API_KEY, // 여기에 공백 추가
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications", // 경로 수정
        method: "POST", // 요청 방식 명시
        headers: headers, // 오타 수정
    };

    var https = require("https"); // 'https' 모듈을 사용
    var req = https.request(options, function(res){
        res.on("data", function(data) {
            console.log(JSON.parse(data));
            return callback(null,JSON.parse(data));
        });
    });

    req.on("error", function(e) {
        return callback({
            message:e
        }); // 에러 객체를 직접 전달
    });

    req.write(JSON.stringify(data)); // 'JSON.stringify' 오타 수정
    req.end();
}

module.exports = {
    SendNotification
}
