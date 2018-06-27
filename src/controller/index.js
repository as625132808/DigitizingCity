export default class extends think.BaseSocket {
    async indexAction() {
        return this.display('index');
    }

    sendMsgAction() {
        const result = {name: 'jessi'};
        const body = this.getSocketMsgBody(result);
        this.sendMsgByUserAction(body, ['000000'], 'msg_box');
    }
};