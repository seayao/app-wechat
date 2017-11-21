function formatDate(pattern) {
	var returnValue = pattern || "yyyy-MM-dd HH:mm:ss";
	var format = {
		"y+": new Date().getFullYear(), //年份
		"M+": new Date().getMonth() + 1, //月份
		"d+": new Date().getDate(), //日
		"H+": new Date().getHours(), //24小时制
		"m+": new Date().getMinutes(), //分钟
		"s+": new Date().getSeconds(), //秒
		"S": new Date().getMilliseconds(), //毫秒
		"h+": (new Date().getHours() % 12), //12小时制
		"q+": Math.floor((new Date().getMonth() + 3) / 3), //季度
		"W": new Array('日', '一', '二', '三', '四', '五', '六')[new Date().getDay()], //星期几/周几
		"A": (new Date().getHours() / 12) <= 1 ? "AM" : "PM",
		"a": (new Date().getHours() / 12) <= 1 ? "am" : "pm"
	};
	/*遍历正则式pattern类型对象构建returnValue对象*/
	for(var key in format) {
		var regExp = new RegExp("(" + key + ")");
		if(regExp.test(returnValue)) {
			var zero = "";
			for(var i = 0; i < RegExp.$1.length; i++) {
				zero += "0";
			}
			var replacement = RegExp.$1.length == 1 ? format[key] : (zero + format[key]).substring((("" + format[key]).length));
			returnValue = returnValue.replace(RegExp.$1, replacement);
		}
	}
	return returnValue;
}

//计算天数差的函数 
function dateDiff(strDateStart, strDateEnd) {//日期格式是：2017-11-20
	var strSeparator = "-"; //日期分隔符
	var oDate1;
	var oDate2;
	var iDays;
	oDate1 = strDateStart.split(strSeparator);
	oDate2 = strDateEnd.split(strSeparator);
	var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
	var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
	iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数 
	return iDays;
}
