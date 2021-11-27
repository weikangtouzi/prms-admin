import { request } from '@@/plugin-request/request';
import type { resumeRecordType, resumeType } from './data';

export async function resumeList(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: number
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


export async function resumeRecord(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: number
}) {
  return request<{
    data: resumeRecordType[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/resumeRecord', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
