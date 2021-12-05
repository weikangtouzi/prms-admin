import { request } from 'umi';
import type { AdType } from './data';

export async function adList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: AdType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/ggList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
