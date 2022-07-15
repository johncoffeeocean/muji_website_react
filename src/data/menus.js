export const menus = {
  categories: [
    {
      text: "衣料品",
      parent: [
        [
          {
            text: "婦人・レディース",
            children: [
              {
                text: "Tシャツ",
                sectionCode: "T10030",
              },
              {
                text: "シャツ・ブラウス",
                sectionCode: "S10005",
              },
              {
                text: "ワンピース・チュニック",
                sectionCode: "S10006",
              },
              {
                text: "カーディガン・セーター",
                sectionCode: "T10031",
              },
              {
                text: "パンツ・スカート",
                sectionCode: "T10032",
              },
              {
                text: "ONE-ALL（お家時間を快適に過ごす服）",
                sectionCode: "S1000013",
              },
              {
                text: "ジャケット・アウター",
                sectionCode: "S10007",
              },
              {
                text: "スウェット",
                sectionCode: "S10004",
              },
              {
                text: "マタニティ",
                sectionCode: "S1000024",
              },
            ],
            parent: "衣料品",
            column: "1",
            dcategory: "D00001",
          },
          {
            text: "紳士・メンズ",
            children: [
              {
                text: "Tシャツ ",
                sectionCode: "T10039",
              },
              {
                text: "シャツ",
                sectionCode: "S10205",
              },
              {
                text: "スウェット",
                sectionCode: "S10204",
              },
              {
                text: "ジャケット・アウター",
                sectionCode: "S10206",
              },
              {
                text: "パンツ",
                sectionCode: "S10207",
              },
              {
                text: "ビジネスウェア",
                sectionCode: "S10209",
              },
              {
                text: "ゆったりサイズ（海外規格）",
                sectionCode: "S10208",
              },
            ],
            parent: "衣料品",
            column: "1",
            dcategory: "D00022",
          },
        ],
        [
          {
            text: "インナー・ホームウエア",
            children: [
              {
                text: "婦人インナー・下着",
                sectionCode: "T10001",
              },
              {
                text: "婦人パジャマ・ホームウエア",
                sectionCode: "T10034",
              },
              {
                text: "紳士インナー・下着　",
                sectionCode: "T10003",
              },
              {
                text: "紳士パジャマ・ホームウエア",
                sectionCode: "T10035",
              },
            ],
            parent: "衣料品",
            column: "2",
            dcategory: "D00043",
          },
          {
            text: "こども",
            children: [
              {
                text: "ベビー・新生児（50-100㎝）",
                sectionCode: "T10007",
              },
              {
                text: "キッズ（110-150cm）",
                sectionCode: "T10008",
              },
              {
                text: "インナー・下着・パジャマ",
                sectionCode: "T10036",
              },
              {
                text: "バッグ・靴・服飾雑貨",
                sectionCode: "T10037",
              },
              {
                text: "靴下・タイツ",
                sectionCode: "T10038",
              },
              {
                text: "ベビーベッド・こども家具",
                sectionCode: "S10115",
              },
              {
                text: "こども用品・三輪車",
                sectionCode: "T10010",
              },
            ],
            parent: "衣料品",
            column: "2",
            dcategory: "D00002",
          },
        ],
        [
          {
            text: "靴下・ストッキング・レギンス",
            children: [
              {
                text: "婦人靴下・ソックス",
                sectionCode: "T10016",
              },
              {
                text: "紳士靴下・ソックス",
                sectionCode: "T10018",
              },
              {
                text: "婦人ストッキング・タイツ",
                sectionCode: "S1001801",
              },
              {
                text: "婦人レギンスパンツ・レギンス",
                sectionCode: "S10013001",
              },
            ],
            parent: "衣料品",
            column: "3",
            dcategory: "D00044",
          },
          {
            text: "靴・バッグ・服飾雑貨",
            children: [
              {
                text: "婦人靴",
                sectionCode: "T10004",
              },
              {
                text: "紳士靴",
                sectionCode: "T10019",
              },
              {
                text: "バッグ・エコバッグ",
                sectionCode: "T10005",
              },
              {
                text: "帽子・手袋・マフラー",
                sectionCode: "T10006",
              },
              {
                text: "傘・レインコート",
                sectionCode: "T10041",
              },
              {
                text: "ハンカチ・小物",
                sectionCode: "T10042",
              },
              {
                text: "財布・ベルト",
                sectionCode: "T10040",
              },
            ],
            parent: "衣料品",
            column: "3",
            dcategory: "D00025",
          },
        ],
        [
          {
            text: "MUJI Labo",
            children: [
              {
                text: "MUJI Labo | Tシャツ・スウェット",
                sectionCode: "S1001302",
              },
              {
                text: "MUJI Labo | シャツ",
                sectionCode: "S1001303",
              },
              {
                text: "MUJI Labo | パンツ",
                sectionCode: "S1001306",
              },
              {
                text: "MUJI Labo | コート",
                sectionCode: "S1001305",
              },
              {
                text: "MUJI Labo | セーター・カーディガン",
                sectionCode: "S1001301",
              },
              {
                text: "MUJI Labo | 雑貨",
                sectionCode: "S1001308",
              },
            ],
            parent: "衣料品",
            column: "4",
            dcategory: "D00023",
          },
          {
            text: "MUJI WALKER",
            children: [
              {
                text: "MUJI WALKER | 婦人",
                sectionCode: "S1000014",
              },
              {
                text: "MUJI WALKER | 紳士",
                sectionCode: "S1000211",
              },
              {
                text: "MUJI WALKER | その他",
                sectionCode: "S1000221",
              },
            ],
            parent: "衣料品",
            column: "4",
            dcategory: "D00035",
          },
          {
            text: "伝統・知恵から生まれた服",
            children: [
              {
                text: "アジアの知恵",
                sectionCode: "S1001322",
              },
              {
                text: "日本の文化・知恵",
                sectionCode: "S100132501",
              },
              {
                text: "中国の文化・知恵",
                sectionCode: "S100132503",
              },
              {
                text: "インドの文化・知恵",
                sectionCode: "S100132502",
              },
              {
                text: "タイの知恵",
                sectionCode: "S100132504",
              },
              {
                text: "ミャンマーの知恵",
                sectionCode: "S100132506",
              },
            ],
            parent: "衣料品",
            column: "4",
            dcategory: "D00024",
          },
          {
            text: "トラベル",
            children: [
              {
                text: "トラベル | キャリーバッグ",
                sectionCode: "T10020",
              },
              {
                text: "トラベル | パスポートケース・ウォレット・ポーチ",
                sectionCode: "S000380202",
              },
              {
                text: "トラベル | 吊して使えるケース",
                sectionCode: "S000380201",
              },
              {
                text: "トラベル | 仕分けケース",
                sectionCode: "S000380203",
              },
              {
                text: "トラベル | EVAケース・ポーチ",
                sectionCode: "S000380204",
              },
              {
                text: "トラベル | ネックピロー・スリッパ",
                sectionCode: "S0003804",
              },
              {
                text: "トラベル | 容器・ケース",
                sectionCode: "S0003803",
              },
              {
                text: "トラベル | 携帯用スキンケア・ヘルスケア",
                sectionCode: "S0003805",
              },
              {
                text: "トラベル | 家電・携帯小物",
                sectionCode: "S2001302",
              },
              {
                text: "トラベル | お出かけ菓子・飲料",
                sectionCode: "S202070103",
              },
            ],
            parent: "衣料品",
            column: "4",
            dcategory: "D00042",
          },
        ],
      ],
    },
    {
      text: "生活雑貨",
      parent: [
        [
          {
            text: "収納",
            children: [
              {
                text: "収納家具",
                sectionCode: "T20003",
              },
              {
                text: "収納棚",
                sectionCode: "S2000321",
              },
              {
                text: "収納用品",
                sectionCode: "T20004",
              },
            ],
            parent: "生活雑貨",
            column: "1",
            dcategory: "D00016",
          },
          {
            text: "家具",
            children: [
              {
                text: "ベッド・マットレス",
                sectionCode: "T20000",
              },
              {
                text: "リビング家具",
                sectionCode: "T20001",
              },
              {
                text: "テーブル・チェア",
                sectionCode: "T20006",
              },
              {
                text: "デスク",
                sectionCode: "T20007",
              },
            ],
            parent: "生活雑貨",
            column: "1",
            dcategory: "D00019",
          },
          {
            text: "寝具",
            children: [
              {
                text: "布団・布団カバー・敷パッド",
                sectionCode: "T20009",
              },
              {
                text: "ケット・薄掛ふとん・毛布",
                sectionCode: "S10502",
              },
              {
                text: "まくら・まくらカバー",
                sectionCode: "S10503",
              },
              {
                text: "ふとんセット・カバーセット",
                sectionCode: "S10509",
              },
            ],
            parent: "生活雑貨",
            column: "1",
            dcategory: "D00041",
          },
          {
            text: "インテリア",
            children: [
              {
                text: "アロマ・フレグランス",
                sectionCode: "T20205",
              },
              {
                text: "ラグ・クッション・スリッパ",
                sectionCode: "T20011",
              },
              {
                text: "カーテン・ブラインド",
                sectionCode: "T20010",
              },
              {
                text: "ミラー・コートハンガー・フレーム",
                sectionCode: "T20008",
              },
            ],
            parent: "生活雑貨",
            column: "1",
            dcategory: "D00020",
          },
        ],
        [
          {
            text: "家電・照明",
            children: [
              {
                text: "家電製品",
                sectionCode: "T20013",
              },
              {
                text: "照明",
                sectionCode: "T20033",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00021",
          },
          {
            text: "コスメ・ケア用品",
            children: [
              {
                text: "スキンケア用品",
                sectionCode: "T20201",
              },
              {
                text: "メイクアップ用品",
                sectionCode: "T20202",
              },
              {
                text: "マスク・衛生用品",
                sectionCode: "S1070210",
              },
              {
                text: "ヘアケア・ボディケア",
                sectionCode: "T20203",
              },
              {
                text: "ポーチ・小分け容器",
                sectionCode: "T20207",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00004",
          },
          {
            text: "キッチン用品・食器",
            children: [
              {
                text: "食器",
                sectionCode: "T20014",
              },
              {
                text: "キッチン用品",
                sectionCode: "T20015",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00005",
          },
          {
            text: "タオル・バス・トイレ用品",
            children: [
              {
                text: "タオル",
                sectionCode: "T20020",
              },
              {
                text: "バス・トイレ用品",
                sectionCode: "T20035",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00033",
          },
          {
            text: "掃除・洗濯用品",
            children: [
              {
                text: "掃除用品",
                sectionCode: "T20036",
              },
              {
                text: "洗濯用品・室内物干し",
                sectionCode: "T20021",
              },
              {
                text: "ハンガー",
                sectionCode: "S1070314",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00034",
          },
          {
            text: "文房具・本・アート",
            children: [
              {
                text: "ファイル・ホルダー",
                sectionCode: "T20016",
              },
              {
                text: "文房具・事務用品",
                sectionCode: "T20017",
              },
              {
                text: "アルバム・手帳・カレンダー",
                sectionCode: "T20041",
              },
              {
                text: "本・アート・BGM",
                sectionCode: "T20030",
              },
            ],
            parent: "生活雑貨",
            column: "2",
            dcategory: "D00026",
          },
        ],
        [
          {
            text: "防災用品・アウトドア・ペット用品",
            children: [
              {
                text: "防災用品",
                sectionCode: "T20039",
              },
              {
                text: "自転車・三輪車",
                sectionCode: "T20022",
              },
              {
                text: "ガーデンファニチャー・雑貨",
                sectionCode: "T40005",
              },
              {
                text: "花・インテリアグリーン",
                sectionCode: "T40002",
              },
              {
                text: "ペット用品",
                sectionCode: "T40008",
              },
            ],
            parent: "生活雑貨",
            column: "3",
            dcategory: "D00027",
          },
          {
            text: "IDÉE",
            children: [
              {
                text: "IDEE | ソファ",
                sectionCode: "T11001",
              },
              {
                text: "IDEE | テーブル・デスク",
                sectionCode: "T11005",
              },
              {
                text: "IDEE | チェア",
                sectionCode: "T11006",
              },
              {
                text: "IDEE | 収納家具",
                sectionCode: "T11008",
              },
              {
                text: "IDEE | 価格を見直しました",
                sectionCode: "T11009",
              },
              {
                text: "IDEE | ウェア",
                sectionCode: "T11007",
              },
            ],
            parent: "生活雑貨",
            column: "3",
            dcategory: "D00013",
          },
          {
            text: "Found MUJI",
            children: [
              {
                text: "Found MUJI",
                sectionCode: "T12001",
              },
            ],
            parent: "生活雑貨",
            column: "3",
            dcategory: "D00036",
          },
          {
            text: "産地直送",
            children: [
              {
                text: "諸国良品",
                sectionCode: "T50001",
              },
            ],
            parent: "生活雑貨",
            column: "3",
            dcategory: "D00008",
          },
        ],
      ],
    },
    {
      text: "食品",
      parent: [
        [
          {
            text: "レトルト・缶詰・調味料",
            children: [
              {
                text: "カレー",
                sectionCode: "T30009",
              },
              {
                text: "レトルト・フリーズドライ",
                sectionCode: "T30001",
              },
              {
                text: "発酵ぬかどこ・乾物・調味料",
                sectionCode: "T30006",
              },
            ],
            parent: "食品",
            column: "1",
            dcategory: "D00006",
          },
          {
            text: "冷凍食品",
            children: [
              {
                text: "パン・麺・ごはん",
                sectionCode: "T30016",
              },
              {
                text: "惣菜・煮込み",
                sectionCode: "T30012",
              },
              {
                text: "ミールキット・カット野菜",
                sectionCode: "T30018",
              },
              {
                text: "デザート・おやつ",
                sectionCode: "S3001804",
              },
              {
                text: "アイスクリーム・チルド（店舗取扱のみ）",
                sectionCode: "S3001806",
              },
            ],
            parent: "食品",
            column: "1",
            dcategory: "D00028",
          },
        ],
        [
          {
            text: "菓子・製菓材料",
            children: [
              {
                text: "菓子",
                sectionCode: "T30002",
              },
              {
                text: "製菓材料",
                sectionCode: "T30003",
              },
            ],
            parent: "食品",
            column: "2",
            dcategory: "D00029",
          },
          {
            text: "茶葉・飲料",
            children: [
              {
                text: "日本茶・中国茶・紅茶・ハーブティー",
                sectionCode: "T30004",
              },
              {
                text: "ボトル飲料",
                sectionCode: "T30010",
              },
              {
                text: "コーヒー・インスタント",
                sectionCode: "T30019",
              },
              {
                text: "自分で詰める水のボトル",
                sectionCode: "T30008",
              },
            ],
            parent: "食品",
            column: "2",
            dcategory: "D00030",
          },
        ],
        [
          {
            text: "産地直送",
            children: [
              {
                text: "諸国良品",
                sectionCode: "T50001",
              },
            ],
            parent: "食品",
            column: "3",
            dcategory: "D00008",
          },
        ],
      ],
    },
  ],
  topMenu: [
    {
      text: "おすすめ情報",
      children: [
        {
          text: "特集",
          to: "/stories/",
        },
        {
          text: "新商品",
          sectionCode: "T00020",
        },
        {
          text: "季節のおすすめ",
          to: "/stories/misc/8666",
        },
        {
          text: "読みもの",
          to: "/store/articles/",
        },
        {
          text: "インテリアの相談オンライン予約",
          to: "/support/service/?sid=10108&dispptn=date",
        },
      ],
    },
    {
      text: "お買い得",
      children: [
        {
          text: "セット商品",
          sectionCode: "S1100232",
        },
        {
          text: "まとめ買い",
          sectionCode: "T00035",
        },
        {
          text: "SALE",
          sectionCode: "X00001",
        },
        {
          text: "アウトレット",
          sectionCode: "X00002",
        },
      ],
    },
    {
      text: "月額定額サービス",
      children: [
        {
          text: "月額定額サービストップ",
          to: "/store/monthly-plan",
        },
      ],
    },
    {
      text: "カタログ",
      children: [
        {
          text: "収納・家具・家電・ファブリック",
          to: "/store/catalog/?area=footer",
        },
      ],
    },
  ],
  bottomMenu: [
    {
      text: "店舗を探す",
      to: "/shop/",
    },
    {
      text: "良品計画について",
      to: "https://ryohin-keikaku.jp/",
    },
    {
      text: "無印良品の募金券",
      to: "/store/donation",
    },
  ],
};