import { request } from '@@/plugin-request/request';
import type {administratorType} from '@/pages/userManage/role/admin/data';

export async function administratorList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: administratorType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/administratorList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
