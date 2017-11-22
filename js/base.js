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
function dateDiff(strDateStart, strDateEnd) { //日期格式是：2017-11-20
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

//获取当前日期多n天,val可以为负数
function calcDate(strDateStart, val) { //strDateStart 格式：2017-08-17
	if(!strDateStart || !val) {
		return;
	}
	var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var strSeparator = "-"; //日期分隔符	
	var p_y = parseInt(strDateStart.split(strSeparator)[0]);
	var p_m = parseInt(strDateStart.split(strSeparator)[1]) - 1;
	var p_d = parseInt(strDateStart.split(strSeparator)[2]) + parseInt(val);
	var p_date = new Date(p_y, p_m, p_d);
	var m_y = p_date.getFullYear();
	var m_m = p_date.getMonth() + 1;
	var m_d = p_date.getDate();
	console.log(p_date)
	var week = weekArray[p_date.getDay()];
	return m_y + "-" + m_m + "-" + m_d + " " + week;
}