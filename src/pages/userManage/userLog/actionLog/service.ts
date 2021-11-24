import { request } from '@@/plugin-request/request';
import type { LogType } from './data';

export async function logList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: LogType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/logList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
