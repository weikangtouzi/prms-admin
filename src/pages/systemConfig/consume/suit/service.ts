import { request } from 'umi';
import type { SuitType } from './data';

export async function suitList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: SuitType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/helpList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
