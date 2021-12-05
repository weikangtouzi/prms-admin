import { request } from 'umi';
import type { FeedBackType } from './data';

export async function feedbackList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
}) {
  return request<{
    data: FeedBackType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/feedbackList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
