import { request } from '@@/plugin-request/request';
import type {resumeType} from './data';

export async function resumeList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: resumeType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/resumeList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
