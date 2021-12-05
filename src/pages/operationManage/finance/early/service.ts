import { request } from 'umi';
import type { EarlyTradeType } from './data';

export async function earlyTradeList(params: {
  current?: number;
  pageSize?: number;
}) {
  return request<{
    data: EarlyTradeType[];
    total?: number;
    success?: boolean;
  }>('/api/earlyTradeList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
