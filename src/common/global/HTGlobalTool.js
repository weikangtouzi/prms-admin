/*
	Request
*/

import HTAPI from '@/common/request/HTAPI'
global.HTAPI = HTAPI

/*
	业务
*/

global.TODO_TOAST = () => {
	global.Toast.show('正在开发中敬请期待...')
}

global.AVATAR_IMAGE = (uri, placeholder) => {
	if ((uri?.length ?? 0) > 0 && uri != 'default_hr_logo') {
		return { uri }
	}
	return placeholder ?? './mine_avatar.png'
}

global.translateGQLError = (error, dict) => {
	// 正则表达式匹配错误信息
    const pattern = /GraphQLError: Variable "\$([a-zA-Z_][a-zA-Z0-9_]*)" of required type "([^"]*)" was not provided\./;

    const match = error.match(pattern);
    if (match) {
        const variableName = match[1];  // 捕获变量名称
        const requiredType = match[2];   // 捕获所需类型
        
        // 构建中文错误信息
        return `${dict[variableName]}为必填项`;
    } else {
        return '未知的错误: ' + error.message;
    }
}