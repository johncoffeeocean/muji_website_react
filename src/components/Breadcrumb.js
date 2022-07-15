import { Breadcrumb as AntBreadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbsWrapper = styled.div`
  width: 100%;
  margin: 5px auto 0px !important;

  .ant-breadbumb {
    margin-bottom: 5px;
  }
  .ant-breadcrumb-link {
    font-size: 12px;
    font-weight: 400;
  }
  .ant-breadcrumb-link a {
    color: rgb(60, 60, 67);
  }
  .ant-breadcrumb-separator svg {
    transform: translateY(2px);
  }
`;

const ArrowSeparator = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='7'
    height='14'
    viewBox='0 0 7 14'
  >
    <g transform='translate(-293.516, -585.328)'>
      <path
        d='M-4502.61-19143.564l-8.409-1.455-.048-.273-1.408-8.137.783-.135,1.36,7.857,7.857,1.359Z'
        transform='translate(10647.815 -16134.946) rotate(-135)'
        fill='#d8d8d9'
      />
    </g>
  </svg>
);

export const Breadcrumb = ({ links }) => {
  return (
    <BreadcrumbsWrapper>
      <AntBreadcrumb separator={<ArrowSeparator />}>
        {links.map(
          (link, index) =>
            link.path !== "ROOT" && (
              <AntBreadcrumb.Item key={`breadcrumbs-${index}`}>
                <Link to={`/section/${link.path}`}>{link.name}</Link>
              </AntBreadcrumb.Item>
            ),
        )}
      </AntBreadcrumb>
    </BreadcrumbsWrapper>
  );
};
