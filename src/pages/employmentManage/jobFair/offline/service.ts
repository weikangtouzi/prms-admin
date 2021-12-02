import { request } from '@@/plugin-request/request';
import type { JobFairType } from './data';

export async function offlineJobFairList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: JobFairType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/jobFairList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
