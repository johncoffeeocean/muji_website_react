import { Table } from "antd";
import React from "react";
import styled from "styled-components";

const SpecsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px 0px;
  word-break: break-word;

  h2 {
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const SpecsTable = styled(Table)`
  margin: 0px 5px;

  .ant-table-tbody > tr > td:first-child {
    min-width: 81px;
    font-size: 12px;
    /* border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    border-width: 1px 0px 1px 1px; */
    background: rgb(245, 245, 245);
    font-weight: normal;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 10px;
  }

  td {
    padding: 10px;
    /* border-style: solid; */
    font-size: 12px;
    /* border-color: rgb(221, 221, 221);
    border-image: initial;
    border-width: 1px 1px 1px 0px; */
  }
`;

export const Specification = ({ specs }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Specification",
      dataIndex: "value",
      key: "specs",
    },
  ];

  return (
    <SpecsWrapper>
      <h2>
        <span>商品仕様</span>
      </h2>

      <SpecsTable
        columns={columns}
        dataSource={specs}
        size='default'
        showHeader={false}
        pagination={false}
        bordered
      />
    </SpecsWrapper>
  );
};
