import { request } from '@@/plugin-request/request';
import type { titleRecordType, titleType } from './data';

export async function resumeList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: number
}) {
  return request<{
    data: titleType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/titleList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

export async function titleRecord(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: number
}) {
  return request<{
    data: titleRecordType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/titleRecord', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
