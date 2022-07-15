import React from "react";
import { Link } from "react-router-dom";
import { Col, Layout, List, Row } from "antd";
import "./Footer.css";

const { Footer: AntFooter } = Layout;

const socialMediaLinkData = [
  {
    href: "https://twitter.com/muji_net",
    icon: "https://img.muji.net/img/common/twitter-with-circle.svg",
  },
  {
    href: "https://www.facebook.com/muji.jp",
    icon: "https://img.muji.net/img/common/facebook-with-circle.svg",
  },
  {
    href: "https://www.youtube.com/user/MUJIglobal",
    icon: "https://img.muji.net/img/common/youtube-with-circle.svg",
  },
  {
    href: "https://instagram.com/muji_global/",
    icon: "https://img.muji.net/img/common/instagram-with-circle.svg",
  },
];

const siteMapData = [
  [
    {
      href: "https://www.muji.com/jp/ja/shop/",
      text: "店舗情報",
    },
    {
      href: "https://www.muji.com/jp/ja/event/event_top/",
      text: "イベント",
    },
    {
      href: "https://www.muji.net/lab/",
      text: "くらしの良品研究所",
    },
    {
      href: "https://www.muji.com/jp/site/mujisupport/",
      text: "MUJI SUPPORT",
    },
    {
      href: "https://www.muji.com/jp/housevision/",
      text: "MUJI HOUSE VISION",
    },
    {
      href: "https://www.muji.net/contact/",
      text: "お問い合わせ",
    },
  ],
  [
    {
      href: "https://www.muji.net/ie/",
      text: "無印良品の家",
    },
    {
      href: "https://cafemeal.muji.com/jp/",
      text: "Café&Meal MUJI",
    },
    {
      href: "https://www.muji.net/camp/",
      text: "キャンプ場",
    },
    {
      href: "https://www.muji.net/foundmuji/",
      text: "Found MUJI",
    },
    {
      href: "https://www.muji.com/jp/mujibooks/",
      text: "MUJI BOOKS",
    },
    {
      href: "https://hotel.muji.com/ja/",
      text: "MUJI HOTEL",
    },
  ],
  [
    {
      href: "https://www.muji.com/jp/passport/",
      text: "MUJI passport",
    },
    {
      href: "https://www.muji.com/jp/ja/store/catalog/",
      text: "カタログ",
    },
    {
      href: "https://www.muji.net/mujicard/",
      text: "MUJI Card",
    },
    {
      href: "https://www.muji.net/mujigiftcard/",
      text: "MUJI GIFT CARD",
    },
    {
      href: "https://www.muji.com/jp/business/",
      text: "法人のお客様へ",
    },
    {
      href: "https://www.muji.com/jp/feature/welcome/",
      text: "Tax-free Services",
    },
  ],
  [
    {
      href: "https://ryohin-keikaku.jp/news/",
      text: "ニュースリリース",
    },
    {
      href: "https://careers.muji.com/jp/",
      text: "採用情報",
    },
    {
      href: "https://www.muji.net/camp/",
      text: "無印良品メッセージ",
    },
    {
      href: "https://www.muji.com/jp/about/",
      text: "無印良品について",
    },
    {
      href: "https://ryohin-keikaku.jp/",
      text: "株式会社　良品計画",
    },
  ],
];

export const Footer = () => {
  return (
    <AntFooter>
      <Row className='footer-main'>
        <Col span={8} xl={8} lg={24} md={24} sm={24} xs={24}>
          <Link className='logo' to='/'>
            <img src='https://img.muji.net/img/common/logo-muji.svg' alt='' />
          </Link>
          <ul className='socialMedia'>
            {socialMediaLinkData.map((link, index) => (
              <li key={`social-${index}`}>
                <a href={link.href}>
                  <img src={link.icon} alt='' />
                </a>
              </li>
            ))}
          </ul>
        </Col>
        {siteMapData.map((colData, index) => (
          <Col
            key={`sitemap-${index}`}
            className='siteMapList'
            span={4}
            xl={4}
            lg={6}
            md={24}
            sm={24}
            xs={24}
          >
            <List
              dataSource={colData}
              renderItem={(item) => (
                <List.Item>
                  <a href={item.href}>
                    <span>{item.text}</span>
                  </a>
                </List.Item>
              )}
            />
          </Col>
        ))}
      </Row>

      <Row justify='space-between' align='middle'>
        <Row>
          <div className='navigation__wrapper'>
            <a
              className='navigation__link country'
              href='https://www.muji.com/?area=footer'
            >
              <span>日本</span>
            </a>
            <a
              className='navigation__link'
              href='https://www.muji.net/mt/contact/others/014425.html?area=footer'
            >
              <span>個人情報の取り扱い</span>
            </a>
            <a
              className='navigation__link'
              href='https://www.muji.net/mt/contact/guide/netstore_info/014427.html?area=footer'
            >
              <span>特定商取引法</span>
            </a>
            <a
              className='navigation__link'
              href='https://www.muji.net/sitemap/?area=footer'
            >
              <span>サイトマップ</span>
            </a>
          </div>
        </Row>
        <Row className='copy-right'>
          <p>
            <span>Copyright ©Ryohin Keikaku Co., Ltd.</span>
          </p>
        </Row>
      </Row>
    </AntFooter>
  );
};
