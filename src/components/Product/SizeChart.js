import React from "react";
import styled from "styled-components";
import { Table } from "antd";

const SizeChartWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px 0px;
  h2 {
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  a {
    color: rgb(96, 179, 250);
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    margin-left: 10px;
  }
`;

const SizeTable = styled(Table)`
  margin: 0px 5px;
  overflow: auto visible;
  .ant-table-body {
    width: 0px;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 10px;
  }

  th {
    padding: 5px 10px;
    background: rgb(245, 245, 245);
    text-align: center;
    font-weight: bold;
    /* border-style: solid;
    border-color: rgb(221, 221, 221); */
    /* border-image: initial; */
    font-size: 11px;
    /* border-width: 1px 1px 0px; */
    white-space: nowrap;
  }

  td {
    padding: 10px;
    font-size: 11px;
    /* border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
    border-width: 0px 1px 1px; */
  }
`;

export const SizeChart = ({ chartData }) => {
  const columns = [
    { key: "サイズ", dataIndex: "サイズ", title: <div>サイズ</div> },
    ...chartData[0].itemSpecs.map((data) => ({
      key: data.name,
      dataIndex: data.name,
      title: <div>{data.name}</div>,
    })),
  ];
  const sizeCharData = chartData.map((data, index) => ({
    key: index,
    サイズ: data.sizeName,
    着丈: data.itemSpecs[0].value,
    肩巾: data.itemSpecs[1].value,
    胸囲: data.itemSpecs[2].value,
    袖丈: data.itemSpecs[3].value,
    裄丈: data.itemSpecs[4].value,
    裾回り: data.itemSpecs[5].value,
  }));

  return (
    <SizeChartWrapper>
      <h2>
        <span>商品サイズ（仕上がり寸法）</span>
      </h2>
      <a
        href='https://www.muji.net/mt/contact/choose/032979.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>サイズガイドはこちら</span>
      </a>
      <SizeTable
        columns={columns}
        dataSource={sizeCharData}
        pagination={false}
        showHeader={true}
        size='default'
        bordered
      />
    </SizeChartWrapper>
  );
};
