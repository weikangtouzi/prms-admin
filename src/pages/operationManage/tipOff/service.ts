import { request } from 'umi';
import type { ReportType } from './data';

export async function reportList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: ReportType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/reportList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
