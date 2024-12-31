import { request } from '@@/plugin-request/request';
import type { CompanyType } from '@/pages/callback/callbackRecord/data';

export async function AdminGetCallBackRecord_uncalledList(params) {
	return HTAPI.AdminGetCallBackRecord_uncalledList(params)
}
