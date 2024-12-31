import HTRequest from './HTRequest'

const ITEM_LIST = [

// 刷新 token
` 
mutation UserRefreshToken {
	UserRefreshToken
}
`,

/* 

AdminGetCensorList

{
	pageSize: Int, 
	lastIndex: String
}

*/ 
`
query AdminGetCensorList($pageSize: Int, $page: Int) {
	AdminGetCensorList(pageSize: $pageSize, page: $page) {
		total
		rows {
			_id 
			enterpriseName 
			charter 
		}
	}
}
`,


/* 

AdminLogIn

{
	account: String!, 
	password: String!
}

*/ 
`
query AdminLogIn($account: String!, $password: String!) {
	AdminLogIn(account: $account, password: $password) {
		token 
		rights 
	}
}
`,


/* 

AdminGetUserList

{
	info: {
		id Int
		keyword String
		phoneNumber String
		currentCity String
		registerTime [String]
		isAvaliable Boolean
	}, 
	pageSize: Int, 
	page: Int
}

*/ 
`
query AdminGetUserList($info: UserListFilter, $pageSize: Int, $page: Int) {
	AdminGetUserList(info: $info, pageSize: $pageSize, page: $page) {
		total
		rows {
			id
			username 
			image_url 
			gender 
			birth_date 
			current_city 
			first_time_working 
			education 
			phone_number 
			email 
			disabled
		}
	}
}
`,

/* 

AdminGetHomePageDataCollection

*/ 
`
query AdminGetHomePageDataCollection {
	AdminGetHomePageDataCollection {
		userCounter {
			sum 
			enterpriseUserCount 
		}
		jobCounter {
			sum 
		}
		newUserCounter {
			monthly 
			weekly 
			graphData {
				monthly 
				weekly 
			}
		}
		censors 
	}
}
`,


/* 

AdminGetEntList

{
	info: {
		id Int
		full_name String
		phoneNumber String
		identifyTime [String]
		isAvaliable Boolean
	}, 
	page: Int, 
	pageSize: Int
}

*/ 
`
query AdminGetEntList($info: EntFilterForAdmin, $page: Int, $pageSize: Int) {
	AdminGetEntList(info: $info, page: $page, pageSize: $pageSize) 
}
`,



/* 

AdminGetJobList

{
	id: Int, 
	title: String, 
	isAvaliable: Boolean, 
	page: Int, 
	pageSize: Int
}

*/ 
`
query AdminGetJobList($id: Int, $title: String, $isAvaliable: Boolean, $page: Int, $pageSize: Int) {
	AdminGetJobList(id: $id, title: $title, isAvaliable: $isAvaliable, page: $page, pageSize: $pageSize) 
}
`,

/* 

AdminShowJobInfo

{
	job_id: Int!
}

*/ 
`
query AdminShowJobInfo($job_id: Int!) {
	AdminShowJobInfo(job_id: $job_id) {
		id 
		full_name 
		phoneNumber 
		identifyTime 
		title 
		category 
		city 
		detail 
		address_coordinate 
		address_description 
		min_salary 
		max_salary 
		min_experience 
		min_education 
		required_num 
		isAvaliable 
	}
}
`,

/* 

AdminSetCensoredForAnItem

{
	_id: String!, 
	isPassed: Boolean, 
	description: String
}

*/ 
`
mutation AdminSetCensoredForAnItem($_id: String!, $isPassed: Boolean, $description: String) {
	AdminSetCensoredForAnItem(_id: $_id, isPassed: $isPassed, description: $description) 
}
`,

/* 

the file uploaded in this api goes to preludeDatas folder

{
	file: Upload!
}

*/ 
`
mutation AdminUploadPreludeData($file: Upload!) {
	AdminUploadPreludeData(file: $file) 
}
`,


/* 

AdminDisableUserAccount

{
	user_id: Int!
}

*/ 
`
mutation AdminDisableUserAccount($user_id: Int!) {
	AdminDisableUserAccount(user_id: $user_id) 
}
`,

/* 

AdminEnableUserAccount

{
	user_id: Int!
}

*/ 
`
mutation AdminEnableUserAccount($user_id: Int!) {
	AdminEnableUserAccount(user_id: $user_id) 
}
`,

/* 

AdminDisableEnterpriseUserAccount

{
	worker_id: Int!
}

*/ 
`
mutation AdminDisableEnterpriseUserAccount($worker_id: Int!) {
	AdminDisableEnterpriseUserAccount(worker_id: $worker_id) 
}
`,

/* 

AdminEnableEnterpriseUserAccount

{
	worker_id: Int!
}

*/ 
`
mutation AdminEnableEnterpriseUserAccount($worker_id: Int!) {
	AdminEnableEnterpriseUserAccount(worker_id: $worker_id) 
}
`,

/* 

AdminDisableEnterpriseMainAccount

{
	ent_id: Int!
}

*/ 
`
mutation AdminDisableEnterpriseMainAccount($ent_id: Int!) {
	AdminDisableEnterpriseMainAccount(ent_id: $ent_id) 
}
`,

/* 

AdminEnableEnterpriseMainAccount

{
	ent_id: Int!
}

*/ 
`
mutation AdminEnableEnterpriseMainAccount($ent_id: Int!) {
	AdminEnableEnterpriseMainAccount(ent_id: $ent_id) 
}
`,

/* 

AdminDisableJob

{
	job_id: Int!
}

*/ 
`
mutation AdminDisableJob($job_id: Int!) {
	AdminDisableJob(job_id: $job_id) 
}
`,

/* 

AdminEnableJob

{
	job_id: Int!
}

*/ 
`
mutation AdminEnableJob($job_id: Int!) {
	AdminEnableJob(job_id: $job_id) 
}
`,

/* 

AdminResetPassword

{
	oldOne: String, 
	newOne: String
}

*/ 
`
mutation AdminResetPassword($oldOne: String, $newOne: String) {
	AdminResetPassword(oldOne: $oldOne, newOne: $newOne) 
}
`,

/*
AdminAddCallbackRecord
{
	phone_number: String!,
	real_name: String!,
	birth_date: String!,
	gender: Boolean!,
	education: String!,
	at_work: Boolean!,
	is_local: Boolean!,
	is_out_work: Boolean!,
	result_of_last_call: String!,
	detail_of_last_call: String!,
}
*/
`
mutation AdminAddCallbackRecord($phone_number: String!, $real_name: String!, $birth_date: String, $gender: Boolean!, $education: String, $at_work: Boolean, $is_local: Boolean, $is_out_work: Boolean, $result_of_last_call: String!, $detail_of_last_call: String!) {
	AdminAddCallbackRecord(phone_number: $phone_number, real_name: $real_name, birth_date: $birth_date, gender: $gender, education: $education, at_work: $at_work, is_local: $is_local, is_out_work: $is_out_work, result_of_last_call: $result_of_last_call, detail_of_last_call: $detail_of_last_call)
}
`,
/*
AdminGetCallbackRecordList
{
	page: Int,
	pageSize: Int,
	real_name: String,
	phone_number: String,
}
*/
`
query AdminGetCallBackRecordList($page: Int, $pageSize: Int, $info: CallbackRecordSearch) {
	AdminGetCallBackRecordList(page: $page, pageSize: $pageSize, info: $info) {
		total
		rows {
			_id
			phone_number
			real_name
			birth_date
			gender
			education
			at_work
			is_local
			is_out_work
			last_time_call
			result_of_last_call
			detail_of_last_call
		}
	}
}
`,
/*
AdminGetCallbackRecord_uncalledList
{
	page: Int,
	pageSize: Int,
	real_name: String,
	phone_number: String,
}
*/
`
query AdminGetCallBackRecord_uncalledList($page: Int, $pageSize: Int, $info: CallbackRecordSearch) {
	AdminGetCallBackRecord_uncalledList(page: $page, pageSize: $pageSize, info: $info) {
		total
		rows {
			_id
			phone_number
			real_name
			birth_date
			gender
			education
			at_work
			is_local
			is_out_work
		}
	}
}
`
]

let RELOAD_ITEM_LIST = {}
ITEM_LIST.map(item => {
	let matchList = item.match(/(\S)* (\S)*(?=(\(|( \{)))/)[0].split(' ')
	let operationName = matchList[1]
	RELOAD_ITEM_LIST[operationName] = (paramList = {}, optionList = {}) => {
		return HTRequest.gqlRequest(
			item, 
			operationName, 
			paramList, 
			{ showLoading: matchList[0] != 'query', ...optionList}
		)
	}
})

// 上传文件
RELOAD_ITEM_LIST.CommonSingleUpload = HTRequest.gqlUpload

// 普通 http 请求
RELOAD_ITEM_LIST.request = HTRequest.request

export default RELOAD_ITEM_LIST
