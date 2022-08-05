import { request } from '@@/plugin-request/request';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';

export async function companyList(params) {
	return HTAPI.AdminGetEntList(params)
}
