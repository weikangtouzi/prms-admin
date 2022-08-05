import { request } from '@@/plugin-request/request';
import type { titleRecordType, titleType } from './data';

export async function resumeList(params) {
	return HTAPI.AdminGetJobList(params)
}

export async function titleRecord(params: {
  // query
  /** 当前的页码 */
  current?: number;
  /** 页面的容量 */
  pageSize?: number;
  type?: number
}) {
	return HTAPI.AdminShowJobInfo({
		job_id: 697
	})
}
