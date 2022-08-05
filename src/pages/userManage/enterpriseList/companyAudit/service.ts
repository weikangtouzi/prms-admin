import { request } from '@@/plugin-request/request';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';

export async function companyAuditList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: string | number;
}) {
	return new Promise((resolve, reject) => {
		HTAPI.AdminGetCensorList({
			page: (params?.current ?? 1) - 1,
			pageSize: (params?.pageSize ?? 15),
		}).then(response => {
			resolve({
				data: response?.rows,
				success: true,
				total: response?.total
			})
		}).catch(reject)
	})
}
