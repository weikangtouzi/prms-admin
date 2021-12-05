import { request } from 'umi';
import type { HelpType } from './data';

export async function helpList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: HelpType[];
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
