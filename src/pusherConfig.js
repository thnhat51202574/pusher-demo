import Pusher from 'pusher-js';

const pusherConfig = {
    key:"800066c84fc9218c89d2",
    cluster:"ap1",
    encrypted: true,
};

const pusher = new Pusher(pusherConfig.key, {
    ...pusherConfig,
    channelAuthorization: { endpoint: "http://localhost:3005/api/v1/pubsub/auth"}
});
export default pusher;
