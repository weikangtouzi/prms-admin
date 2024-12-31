import type { FC } from "react";
import {
    ModalForm,
    ProFormDatePicker,
    ProFormRadio,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
} from "@ant-design/pro-form";
import type { CallbackRecordType } from "./data";
import styles from "@/common/css/style.less";

interface CreateCallbackRecordModalProps {
    visible: boolean;
    onSubmit: (values: CallbackRecordType) => void;
    onDone: () => void;
}

const CreateCallbackRecordModal: FC<CreateCallbackRecordModalProps> = (
    props,
) => {
    const { visible, onSubmit, onDone } = props;

    return (
        <ModalForm<CallbackRecordType>
            title="新建回访记录"
            visible={visible}
            layout={"inline"}
            className={styles.standardListForm}
            width={500}
            onFinish={async (values) => {
                onSubmit(values);
            }}
            modalProps={{
                maskClosable: false,
                onCancel: () => onDone(),
                destroyOnClose: true,
            }}
        >
            {
                <>
                    <ProFormText
                        name="phoneNumber"
                        label="电话号码"
                        placeholder="请输入"
                    />
                    <ProFormText
                        name="realName"
                        label="真实姓名"
                        placeholder="请输入"
                    />
                    <ProFormRadio.Group
                        name="gender"
                        label="性别"
                        options={[
                            {
                                label: "男",
                                value: true,
                            },
                            {
                                label: "女",
                                value: false,
                            },
                        ]}
                    />
                    <ProFormSelect
                        name="education"
                        label="学历"
                        options={[
                            { value: "Primary", label: "小学" },
                            { value: "Junior", label: "初中" },
                            {
                                value: "High",
                                label: "高中",
                            },
                            { value: "JuniorCollege", label: "本科" },
                            { value: "Postgraduate", label: "硕士" },
                            {
                                value: "Doctor",
                                label: "博士",
                            },
                            { value: "LessThanPrime", label: "文盲" },
                        ]}
                    />

                    <ProFormText
                        name="currentCity"
                        label="所在城市"
                        placeholder="请输入"
                    />
                    <ProFormDatePicker
                        name="birthDate"
                        label="出生日期"
                        placeholder="请输入"
                    />
                    <ProFormRadio.Group
                        name="atWork"
                        label="是否就业"
                        options={[
                            {
                                label: "是",
                                value: true,
                            },
                            {
                                label: "否",
                                value: false,
                            },
                        ]}
                    />
                    <ProFormRadio.Group
                        name="isLocal"
                        label="是否本地就业"
                        options={[
                            {
                                label: "是",
                                value: true,
                            },
                            {
                                label: "否",
                                value: false,
                            },
                        ]}
                    />
                    <ProFormRadio.Group
                        name="isOutWork"
                        label="是否愿意外出就业"
                        options={[
                            {
                                label: "是",
                                value: true,
                            },
                            {
                                label: "否",
                                value: false,
                            },
                        ]}
                    />
                    <ProFormRadio.Group
                        name="resultOfLastCall"
                        label="上次拨打结果"
                        options={[
                            {
                                label: "已完成",
                                value: "success"
                            },
                            {
                                label: "未接听",
                                value: "noanswer"
                            },
                            {
                                value: "numbernotexist",
                                label: "号码不存在",
                            },
                            {
                                value: "invalidnumber",
                                label: "无效号码",
                            }
                        ]}
                    />
                    <ProFormTextArea
                        name="detailOfLastCall"
                        label="上次拨打详情"
                        placeholder="请输入"
                    />
                </>
            }
        </ModalForm>
    );
};

export default CreateCallbackRecordModal;
