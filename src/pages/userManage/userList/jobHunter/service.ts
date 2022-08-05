import { request } from '@@/plugin-request/request';
import type { UserType } from '@/pages/userManage/userList/jobHunter/data';

export async function userList(params) {
	return HTAPI.AdminGetUserList({
		page: params?.page,
		pageSize: params?.pageSize,
		info: params?.info,
	})
}
