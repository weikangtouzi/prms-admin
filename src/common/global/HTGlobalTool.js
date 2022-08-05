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