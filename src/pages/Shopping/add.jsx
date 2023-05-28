import React from 'react';
import {
  FormItem,
  Input,
  ArrayTable,
  Editable,
  Select,
  Checkbox,
  Switch,
  FormLayout,
  FormGrid,
  FormButtonGroup,
  Submit,
} from "@formily/antd";
import { createForm, onFieldReact } from "@formily/core";
import { FormProvider, createSchemaField, Field } from "@formily/react";
import { onFieldValueChange, FormPath } from "@formily/core";
import { Button, message } from "antd";

function Add(props) {

  const SchemaField = createSchemaField({
    components: {
      FormItem,
      Editable,
      Input,
      ArrayTable,
      Select,
      Checkbox,
      Switch,
      FormLayout,
      FormGrid,
    },
  });
  
  const form = createForm({
    effects(form) {
      onFieldValueChange("name", (field) => {
        form.setFieldState("price", (state) => {
          // state.display = true
        });
      });
      onFieldReact("", (field) => {
       
      });
    },
  });
  
  const handleSubmit = (values) => {
    console.log("values", values);
    message.success('添加成功')
    props?.onOk()
  };

  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          x-component="FormGrid"
          x-component-props={{ maxColumns: 4, minColumns: 2 }}
        >
          <SchemaField.String
            name="name"
            title="名称"
            x-decorator="FormItem"
            required
            x-component="Input"
            enum={[
              { label: "显示", value: "visible" },
              { label: "隐藏", value: "none" },
              { label: "隐藏-保留值", value: "hidden" },
            ]}
          />
        </SchemaField.Void>
        <SchemaField.Void
          x-component="FormGrid"
          x-component-props={{ maxColumns: 4, minColumns: 2 }}
        >
          <SchemaField.String
            name="price"
            title="价格"
            x-decorator="FormItem"
            required
            x-component="Input"
            x-reactions={(field) => {
              
            }}
          />
        </SchemaField.Void>
        <SchemaField.Array
          name="fields"
          x-decorator="FormItem"
          x-component="ArrayTable"
        >
          <SchemaField.Object>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                width: 50,
                title: "排序",
                align: "center",
              }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                required
                x-component="ArrayTable.SortHandle"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                width: 80,
                title: "产地",
                align: "center",
              }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                width: 80,
                title: "规格",
                align: "center",
              }}
            >
              <SchemaField.Void
                x-decorator="FormItem"
                required
                x-component="Input"
              />
            </SchemaField.Void>
            <SchemaField.Void
              x-component="ArrayTable.Column"
              x-component-props={{
                title: "操作",
                dataIndex: "operations",
                width: 50,
                fixed: "right",
              }}
            >
              <SchemaField.Void x-component="FormItem">
                <SchemaField.Void x-component="ArrayTable.Remove" />
              </SchemaField.Void>
            </SchemaField.Void>
          </SchemaField.Object>
          <SchemaField.Void
            x-component="ArrayTable.Addition"
            title="添加字段"
          />
        </SchemaField.Array>
      </SchemaField>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'right'}}>
        <FormButtonGroup>
          <Button onClick={() => { props?.onOk() }}>取消</Button>
          <Submit onSubmit={handleSubmit}>提交</Submit>
        </FormButtonGroup>
      </div>
    </FormProvider>
  );
}

export default Add;
