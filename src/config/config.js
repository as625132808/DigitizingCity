// default config
module.exports = {
    port: 8888,
    proxyPort: 8888,
    host: '192.168.12.126',
    staticIp: '192.168.12.126',
    sequelConfig: {
        dialect: 'mysql',
        // username: 'remote',
        // password: 'Kmlc3302133',
        // host: '120.77.65.31',
        host: 'localhost',
        username: 'root',
        password: 'admin',
        // host: '39.129.35.72',
        //  username: 'remote',
        //  password: 'Kmlc3302133',
        database: 'digitizing_city_db',
        timezone: '+08:00',
        logging: true,
        operatorsAliases: false,
        additional: {
            timestamps: false,
            freezeTableName: true
        },
        directory: '../../../model',
    },
    // sequelConfig: {
    //     dialect: 'mysql',
    //     username: 'root',
    //     password: 'j123456s',
    //     database: 'digitizing_city_db',
    //     host: '127.0.0.1',
    //     timezone: '+08:00',
    //     logging: true,
    //     operatorsAliases: false,
    //     additional: {
    //         timestamps: false,
    //         freezeTableName: true
    //     },
    //     directory: '../../../model',
    // },
    token: {
        privateKey: 'kmlc-private-3302133', // 秘钥
        // expiresIn: 60 * 60 * 24,//1天, token过期时间,单位秒,
        expiresIn: 60 * 60 * 3, //3小时 web端过期时间
        expiresInApp: 60 * 60 * 24 * 365 //365天，移动端过期时间
        // expiresIn: 10, //1天, token过期时间,单位秒,

    },
<<<<<<< .mine
    redis: {
        port: 6379,
        host: 'localhost',

    },
||||||| .r1401
    redis: {
        port: 6379,
        host: 'http://172.16.187.83',

    },
=======
>>>>>>> .r1404
    redisConfig: {
<<<<<<< .mine
        port: 6379,
        host: 'localhost',
        password: 'kmlc3302133',
        db: 4
||||||| .r1401
=======
        port: 6378,
        host: '120.77.65.31',
        password: 'Kmlc3302133',
        // auth_pass:'Kmlc3302133',
        db: 4
>>>>>>> .r1404
        // port: 6378,
<<<<<<< .mine
        // host: '192.168.12.114',
||||||| .r1401
        // host: '120.77.65.31',
        // password: 'Kmlc3302133',
        // // auth_pass:'Kmlc3302133',
        // db: 4
        // port: 6378,
        // host: '192.168.12.114',
=======
        // host: '192.168.12.114',
        // password: 'Kmlc3302133',
        // db: 4
        // port: 6379,
        // host: '127.0.0.1',
>>>>>>> .r1404
        // password: 'Kmlc3302133',
<<<<<<< .mine
        // db: 4
        // port: 6379,
        // host: '172.16.187.83',
        // password: 'kmlc3302133',
        // db: 4
||||||| .r1401
        // db: 4
        port: 6379,
        host: '127.0.0.1',
        password: 'Kmlc3302133',
        db: 4,
=======
        // db: 4,
>>>>>>> .r1404
    },
    nameSpace: {
        JDSL_QUEUE: 'jdsl:queue',//监督受理中心人员队列
        LOGIN_USER: 'login:user',
        socketRooms: 'socket:rooms',//socket房间频道，在用户登录以后加入。
        userInfo: 'userInfo', //用户的详细信息
        callExtenBind: 'call:extenBind'//分机号绑定信息
    },
    stickyCluster: true,
    imagePath: '/static/upload/images', //图片默认路径,
    administrator: ['000000'],//管理员id,可以设置多个
    pushServerUrl: 'http://139.129.35.72:4000/push/Msg/sendSystemMsg',
    video: {
        port: 2558,
        host: '192.168.12.84',
        username: 'admin',
        password: '123',
        beatTimer: 30000,
    }
};