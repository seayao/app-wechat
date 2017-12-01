//var userSelf = {};
//var toOneId = null;
//
//var dataObj = {
//	name: '姚海洋',
//	img: 'avatar',
//	time: formatDate()
//};
//socket.emit('login', dataObj);

//发送消息给除了发送者的其他人
//document.getElementById('sendAll').addEventListener('click', function() {
//	var msg = document.getElementById('text').value;
//	var msgObj = {
//		from: userSelf,
//		msg: msg,
//		sendTime: formatDate()
//	};
//	socket.emit('toAll', msgObj);
//	addMsg(msgObj, true);
//});

//发送消息给某一个人，可以是发送者本人
document.getElementById('sendOne').addEventListener('click', function() {
	if(!toOneId) {
		alert('请点击接收者');
		return;
	}
	var msg = document.getElementById('text').value;
	var msgObj = {
		from: userSelf,
		to: toOneId,
		msg: msg,
		sendTime: formatDate()
	};
	socket.emit('toOne', msgObj);
	addMsg(msgObj, true);
});

//把在线用户渲染到界面上
//function addUser(userList) {
//	console.log('在线用户列表：',JSON.stringify(userList));
//	var dataList = document.body.querySelector('#dataList');
//	dataList.innerHTML = '';
//	userList.forEach(function(v, i, a) {
//		var li = document.createElement('li');
//		li.className = 'mui-table-view-cell';
//		var newStr = '';
//		newStr = '<div class="mui-slider-right mui-disabled">';
//		newStr += '<a class="mui-btn mui-btn-grey">标为未读</a>';
//		newStr += '<a class="delete-btn mui-btn mui-btn-red">删除</a>';
//		newStr += '</div>';
//		newStr += '<div class="mui-slider-handle mui-clearfix">';
//		newStr += '<a href="javascript:;">';
//		newStr += '	<img class="mui-media-object mui-pull-left" src="../../images/ronger.jpg" />';
//		newStr += '<div class="mui-media-body">';
//		newStr += '<div class="mui-clearfix">';
//		newStr += '<h4 class="oa-contact-name mui-pull-left">' + v.name + i + '</h4>';
//		newStr += '<span class="oa-contact-time mui-pull-right">' + v.time + '</span>';
//		newStr += '</div>';
//		newStr += '<p class="mui-ellipsis">遇见你很高兴</p>';
//		newStr += '</div>';
//		newStr += '</a>';
//		newStr += '</div>';
//		li.innerHTML = newStr;
//		dataList.appendChild(li);
//	});
//}

//事件代理（选择信息接收对象）
//var dataList = document.getElementById("dataList");
//dataList.addEventListener('tap', function(e) {
//	//userList.children.classList.remove('receive');
//	if(e.target && e.target.className == "item") {
//		e.target.classList.add('receive');
//		toOneId = e.target.innerHTML;
//	}
//}, false);

//接收到信息后渲染
function addMsg(msgObj, isSelf) {
	var userType = isSelf ? 'sender' : 'receiver';
	var p = document.createElement('p');
	p.className = userType;
	p.innerHTML = JSON.stringify(msgObj);
	document.body.appendChild(p);
}