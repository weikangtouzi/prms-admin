import type { FC } from "react";
import {
  ModalForm,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-form";
import type { CallbackRecordType } from "./data";
import styles from "@/common/css/style.less";

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  actionType: string;
  current: Partial<CallbackRecordType> | undefined;
  onDone: () => void;
  onSubmit: (values: CallbackRecordType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children, actionType } =
    props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<CallbackRecordType>
      visible={visible}
      layout={"inline"}
      title={done
        ? null
        : `回访记录${
          current ? actionType === "info" ? "查看" : "编辑" : "添加"
        }`}
      className={styles.standardListForm}
      width={500}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done || actionType === "info" ? dom[0] : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: "72px 0" } : {},
      }}
    >
      {
        <>
          <ProFormText
            name="phoneNumber"
            label="电话号码"
            readonly={actionType === "info"}
            placeholder="请输入"
          />
          <ProFormText
            name="realName"
            label="真实姓名"
            readonly={actionType === "info"}
            placeholder="请输入"
          />
          <ProFormRadio.Group
            name="gender"
            label="性别"
            readonly={actionType === "info"}
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
            readonly={actionType === "info"}
            placeholder="请输入"
          />
          <ProFormText
            name="birthDate"
            label="出生日期"
            readonly={actionType === "info"}
            placeholder="请输入"
          />
          <ProFormRadio.Group
            name="atWork"
            label="是否就业"
            readonly={actionType === "info"}
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
            readonly={actionType === "info"}
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
            readonly={actionType === "info"}
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
                value: "success",
              },
              {
                label: "未接听",
                value: "noanswer",
              },
              {
                value: "numbernotexist",
                label: "号码不存在",
              },
              {
                value: "invalidnumber",
                label: "无效号码",
              },
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

export default OperationModal;
