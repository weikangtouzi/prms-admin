import { request } from '@@/plugin-request/request';
import type { CompanyTradeType } from './data';

export async function companyTradeList(params: {
  current?: number;
  pageSize?: number;
}) {
  return request<{
    data: CompanyTradeType[];
    total?: number;
    success?: boolean;
  }>('/api/earlyTradeList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
