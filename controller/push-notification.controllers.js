const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotificationService = require("../services/push-notification.services");

exports.SendNotification = (req, res, next) => {
    const message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { en: "Test Push Notification" }, // 메세지 들어갈 내용
        included_segments: ['ALL'],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        },
    };

    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(200).send({
            message: "Success",
            data: results,
        });
    });
};

exports.SendNotificationToDevice = (req, res, next) => {
    const message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { en: "Test Push Notification" }, // 메세지 들어갈 내용
        include_player_ids: req.body.devices, // 대상 디바이스 ID 배열 사용
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        },
    };

    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        res.status(200).send({
            message: "Success",
            data: results,
        });
    });
};
