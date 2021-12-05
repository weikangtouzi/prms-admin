import { request } from '@@/plugin-request/request';
import type { InvoiceType } from './data';

export async function invoiceApplyList(params: {
  current?: number;
  pageSize?: number;
}) {
  return request<{
    data: InvoiceType[];
    total?: number;
    success?: boolean;
  }>('/api/invoiceApplyList', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
