import { request } from '@@/plugin-request/request';
import type { SeekerTradeType } from './data';

export async function seekerTradeList(params: {
  current?: number;
  pageSize?: number;
}) {
  return request<{
    data: SeekerTradeType[];
    total?: number;
    success?: boolean;
  }>('/api/earlyTradeList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
