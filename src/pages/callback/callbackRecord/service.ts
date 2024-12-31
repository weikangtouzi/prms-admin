import { request } from '@@/plugin-request/request';
import type { CompanyType } from '@/pages/callback/callbackRecord/data';

export async function companyList(params) {
	return HTAPI.AdminGetEntList(params)
}
