import { request } from '@@/plugin-request/request';
import type { SensitiveWordType } from './data';

export async function sensitiveWordList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: SensitiveWordType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/newsList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
