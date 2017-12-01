var socket = io.connect(chatServer);

//when sb login
//当有用户登录时，会提示该用户上线
socket.on('loginInfo', function (msg) {
      soundHandle('online.mp3');
    //console.log('loginInfo', msg);
});

//when sb logout
//当有用户登出时，会提示该用户下线
socket.on('logoutInfo', function (msg) {
    //offlineSound();
    //console.log('logoutInfo', msg);
});

//add user in ui
//当有用户登录或者登出时，把该用户的信息渲染在用户在线列表里
socket.on('userList', function (userList) {
    addUser(userList);
    setBadge(userList);
    //console.log('userList', userList);
});

//get userinfo after login
//当有用户登录时，获取该用户的信息
socket.on('userInfo', function (userObj) {
    //addMe(userObj);
    userSelf = userObj;
    //console.log('userInfo', userObj);
});

//send text message to all
//发文本消息给所有人，除了发送者
socket.on('toAll', function (msgObj) {
    //receiveSound();
    //addMsg(msgObj, false);
    //console.log('toAll', msgObj);
});

//send message to one
//发消息给某个人，可以是发送者
socket.on('toOne', function (msgObj) {
    //receiveSound();
    //addMsg(msgObj, false);
    //console.log('toOne', msgObj);
});

//send other types message to all
//发图片或者其他消息类型给所有人，除了发送者
socket.on('sendImageToALL', function (msgObj) {
    //console.log('sendImageToALL', msgObj);
});