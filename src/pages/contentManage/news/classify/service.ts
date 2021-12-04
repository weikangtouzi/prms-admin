import { request } from '@@/plugin-request/request';
import type { classifyType } from '@/pages/contentManage/news/classify/data';

export async function classifyList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: classifyType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/classifyList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
