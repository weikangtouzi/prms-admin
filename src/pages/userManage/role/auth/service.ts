import { request } from '@@/plugin-request/request';
import type { roleType } from './data';

export async function roleList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: roleType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/roleList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
