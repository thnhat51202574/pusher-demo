import Pusher from 'pusher-js';

const pusherConfig = {
    appId:"1617387",
    key:"800066c84fc9218c89d2",
    secret:"cf5fc8a71e024d2abeb8",
    cluster:"ap1",
    encrypted: true, // Enable encryption if needed
};

const pusher = new Pusher(pusherConfig.key, pusherConfig);

export default pusher;
