import { request } from '@@/plugin-request/request';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';

export async function companyList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  city?: string | number;
}) {
  return request<{
    data: CompanyType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/companyList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
