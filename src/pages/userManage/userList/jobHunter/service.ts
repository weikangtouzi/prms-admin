import { request } from '@@/plugin-request/request';
import type { UserType } from '@/pages/userManage/userList/jobHunter/data';

export async function userList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    city?: string | number
  },
) {
  return request<{
    data: UserType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/userList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
