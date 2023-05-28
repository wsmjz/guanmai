import React, { useRef, useState } from 'react';
import { shoppingLists } from '@/services/api';
import { ProTable } from '@ant-design/pro-components';
import { Button, Modal, message } from 'antd';
import Add from "./add";
import { history, useModel } from '@umijs/max';

function Shopping() {

  const [isAdd, setIsAdd] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const listRef = useRef(null)
  const { user } = useModel('user');

  const columns = [{
    title: '名称',
    dataIndex: 'name'
  }, {
    title: '价格',
    dataIndex: 'price'
  }]

  const reLoad = () => {
    listRef?.current?.reloadAndRest?.();
    message.success('数据已更新')
    setIsAdd(false)
  }

  return (
    <div>
      <h1>你好：{user?.name}</h1>
      <ProTable
        headerTitle={'商品列表'}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        actionRef={listRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => { setIsAdd(true) }}
          >
            添加
          </Button>,
        ]}
        columns={columns}
        request={shoppingLists}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      { isAdd && <Modal
        title="使用formily表单"
        open={isAdd}
        onCancel={() => {
          setIsAdd(false)
        }}
        footer={false}
      >
        <Add onOk={reLoad} />
      </Modal> }
    </div>
  );
}

export default Shopping;
