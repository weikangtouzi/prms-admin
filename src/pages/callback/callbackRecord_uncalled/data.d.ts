export enum CallBackResult {
    SUCCESS = "success",
    NOANSWER = "noanswer",
    NUMBERNOTEXIST = "numbernotexist",
    INVALIDNUMBER = "invalidnumber",
}

export enum Education {
    Doctor = "Doctor",
    High = "High",
    Junior = "Junior",
    Primary = "Primary",
    JuniorCollege = "JuniorCollege",
    Postgraduate = "Postgraduate",
    LessThanPrime = "LessThanPrime"
}


export type CallbackRecordType = {
    phone_number: string;
    real_name: string;
    gender: boolean;
    education: Education;
    current_city: string;
    birth_date: string;
    at_work: boolean;
    is_local: boolean;
    is_out_work: boolean;
    last_time_call: string;
    result_of_last_call: CallBackResult;
    detail_of_last_call: string;
};

export type CallbackRecordFilter = {
    phone_number?: string;
    real_name?: string;
};
  