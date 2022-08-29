# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
12.times do |n|
  name = Faker::Internet.unique.username
  email = Faker::Internet.unique.email
  password = Faker::Internet.password
  User.create!(email: email,
              password: password,
              name: name,
              confirmed_at: Time.zone.now,
              icon: File.open("./public/seed/icon-#{n+1}.png")
  )
end
Product.create!(
  image:File.open("./public/seed/product-01.jpg"),
  caption:"大きな穴からペーパーの先端が出ることで、
  注がれたお湯がドリッパーからの制限を受けることなく、
  よりネルドリップに近い抽出ができる
  また、お湯を注ぐ速度により珈琲の味を変えることができるため、
  お好みの珈琲が楽しめる
  珈琲粉の膨らみを妨げない、スパイラルリブ採用
  ドリッパー内部のリブ（凸部）を高く上部まで付けることにより、
  ペーパーとドリッパーの密着をふせぎ、空気の抜ける空間ができる
  蒸らしの際に、この空間から空気が抜け珈琲粉がしっかりと膨らむ",
  name: "ハリオV60コーヒードリッパー01",
  price: 1027,
  url: "https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%97-VDG-01B/dp/B002VUP2M8/ref=sr_1_20?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC&qid=1615521096&sr=8-20",
  shopname: "HARIO",
)

Product.create!(
  image:File.open("./public/seed/product-02.jpg"),
  caption:"カリタ三つ穴ドリッパー
  雑味がでる前に美味しさだけをドリップする
  軽くて扱い易いプラスチック製
  1~2人用",
  name: "カリタ コーヒードリッパー 101-D ",
  price: 417,
  url: "https://www.amazon.co.jp/Kalita-%E3%82%AB%E3%83%AA%E3%82%BF-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%A1%E3%82%B8%E3%83%A3%E3%83%BC-1-2%E4%BA%BA%E7%94%A8-04001/dp/B001TM6FF2/ref=psdc_251688011_t4_B002VUP2M8",
  shopname: "Kalita",
)
Product.create!(
  image:File.open("./public/seed/product-03.jpg"),
  caption:"長時間フィルターとウェーブゾーンにコーヒー液がとどまらないので、
  雑美成分の抽出が少なく美味しさだけをドリップするドリッパー【
  特長】・味ブレの少ないドリップコーヒーを、ご家庭で手軽にお楽しみいただけるドリッパー。
  ・このフィルターは底が平らになっており、注ぐお湯が多少ブレてもしっかりと粉全体に馴染んでくれる特長があります。
  ・また、カリタの特長である3つの穴があいており、長時間お湯が溜まりにくいため雑味が少なく、美味しいドリップを可能にしてくれます。
  ・1～2人用です。",
  name: "カリタ ウェーブドリッパー 155",
  price: 1650,
  url: "https://www.amazon.co.jp/%E3%82%AB%E3%83%AA%E3%82%BF-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%91%E3%83%BC-%E3%82%B9%E3%83%86%E3%83%B3%E3%83%AC%E3%82%B9%E8%A3%BD-%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%96%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-04021/dp/B004W5L1XY/ref=rtpb_17?pd_rd_w=j47TD&pf_rd_p=c221ae92-96f8-424c-884c-196b2fc439b0&pf_rd_r=DVH847KYHQYS2NKNT365&pd_rd_r=e086efea-4a5b-4832-bbfa-e860a0963f39&pd_rd_wg=VUQ1u&pd_rd_i=B004W5L1XY&psc=1",
  shopname: "Kalita",
)
Product.create!(
  image:File.open("./public/seed/product-04.jpg"),
  caption: "おいしいコーヒーを淹れるためには、抽出量と抽出時間の計測が不可欠。
  V60ドリップスケールは両方を同時に計測することができるハンドドリップのためのスケール
  ※V60メタルドリップスケールは充電式バッテリー/バックライト仕様",
  name: "V60メタルドリップスケール ヘアラインシルバー  VSTM-2000HSV",
  price: 6682,
  url: "https://www.amazon.co.jp/dp/B00TF7AJ64/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B00TF7AJ64p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOVFMVUpEQTJYQ1FVJmVuY3J5cHRlZElkPUEwODUzNjE5RjUyRkg3VVRKMEwzJmVuY3J5cHRlZEFkSWQ9QTNMQlIyU1pXWUtKS1gmd2lkZ2V0TmFtZT1zcF9kZXRhaWwyJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  shopname: "HARIO",
)
Product.create!(
  image:File.open("./public/seed/product-05.jpg"),
  caption:"●セラミック製の臼は摩擦熱が発生しにくく、熱によるコーヒー粉へのダメージを防ぐ。
  ●透明な目盛り付きボトルなので、挽いた量が一目でわかり、計量カップいらず。
  ●粉の粗さは、つまみを回すだけで簡単に調節可能。
  ●使用しない時は、ハンドルを本体に引っ掛けて収納できるので、置き場をとらず便利。",
  name: "ハリオ　コーヒーミル 手挽き セラミック スリム MSS-1TB",
  price: "2118",
  url: "https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%9F%E3%83%AB-%E3%82%BB%E3%83%A9%E3%83%9F%E3%83%83%E3%82%AF-MSS-1TB/dp/B001804CLY/ref=rtpb_1?pd_rd_w=zKV8Y&pf_rd_p=c221ae92-96f8-424c-884c-196b2fc439b0&pf_rd_r=GQEG37KEA87W4MKJRSVQ&pd_rd_r=1fc8179a-32ef-42f5-8b88-ec4c4161355f&pd_rd_wg=sPx9o&pd_rd_i=B001804CLY&psc=1",
  shopname: "HARIO",
)
Product.create!(
  image:File.open("./public/seed/product-06.jpg"),
  caption:"初心者からプロのバリスタまで、誰もが手軽に、ベストな味わいをお楽しみいただけるKalitaオリジナルのプロダクトシリーズ
  ウェーブフィルター185(155)は、ドリッパーとの接触面が少ないから、長時間フィルター内のかたよったところにお湯がたまらず、すみやかにドリップされる
  かたよってお湯を注いでも、ウェーブゾーンは底が平らなので粉に均一になじみやすい",
  name: "カリタ コーヒーフィルター ウェーブシリーズ ホワイト 1~2人用 50枚入り ",
  price: 265,
  url: "https://www.amazon.co.jp/%E3%82%AB%E3%83%AA%E3%82%BF-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC-%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%96%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-KWF-155-22211/dp/B077GNRRM7/ref=pd_rhf_dp_s_pd_crcd_3?pd_rd_w=OZm3y&pf_rd_p=c64ec15c-e5a8-4bbe-8e01-8e7767b5ef59&pf_rd_r=0ZBWYR3CA0FXXX78R49Y&pd_rd_r=7423904f-a731-4f7f-a4b7-7f7205329884&pd_rd_wg=lk4fH&pd_rd_i=B077GNRRM7&psc=1",
  shopname: "Kalita",
)
Product.create!(
  image:File.open("./public/seed/product-07.jpg"),
  caption:"●抽出温度が一目で分かる温度計が蓋の中央に付いている便利なドリップケトル
  ●コーヒーの味を決める大事な要素となるお湯の温度。
  ●一般的に最適な抽出温度と言われている84度~92度の部分が一目でが分かりやすい目盛り
  ●湯量の微調整ができる注ぎやすい細口タイプ
  ●お湯を一定の量で静かに落とすことができ、微妙な調整も自在
  ●少しづつ丁寧に注ぐことで、じっくりと蒸らしながら美味しいコーヒーを抽出することができます
  ●ドリップしやすい細口形状・握りやすいグリップ形状",
  name: "シービージャパン ドリップケトル ブラック QAHWA",
  price: 5335,
  url: "https://www.amazon.co.jp/dp/B076H5SW81/ref=sspa_dk_detail_6?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTEUzOEg1VTI3V1FWJmVuY3J5cHRlZElkPUEwMTkxOTk0Mk5ONDdLM0k2TVdZVSZlbmNyeXB0ZWRBZElkPUFKOTNSVkpSUDRQR0wmd2lkZ2V0TmFtZT1zcF9kZXRhaWwyJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  shopname: "シービージャパン",
)
Product.create!(
  image:File.open("./public/seed/product-08.jpg"),
  caption:"源がついていない時はまっさらな黒いボックスのように見えるほどシンプルなデザインでかっこいいです。
  type-CのUSBで充電できるタイプです。
  サイズは、15.2cm × 13cm × 2.6cmで、大きすぎず、小さいすぎず、ちょうどいいサイズ。
  計量は、0.5ｇ – 2000ｇまで可能。
  カラーはホワイトとブラックの2色展開。",
  name: "TIMEMORE コーヒー用スケール LED TES005 (ブラック)",
  price: 5700,
  url: "https://www.amazon.co.jp/dp/B07YCSF8VP/ref=sspa_dk_detail_4?psc=1&pd_rd_i=B07YCSF8VP&pd_rd_w=nBFKI&pf_rd_p=cc3bc4d9-2af6-4e19-b3b8-31051adadc9e&pd_rd_wg=0x2Pi&pf_rd_r=CWXRTAF3WZK32SYCA541&pd_rd_r=a5fcede2-5176-42a4-8530-6a85ca96866f&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzM1laOFNPWFUxOTlPJmVuY3J5cHRlZElkPUEwMDMxMDYzMzBXRUVPNjA1TDdYTSZlbmNyeXB0ZWRBZElkPUExWUpCSkNYQjY0SjZUJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
  shopname: "TIMEMORE",
)
Product.create!(
  image:File.open("./public/seed/product-09.jpg"),
  caption:"オール耐熱ガラス製のサーバー
  ●ポット・フタとともに耐熱ガラス製のサーバーです。
  ●フタにはシリコンパッキン付きの安心設計です。
  ●V60シリーズのサーバーとして、フタの上にV60ドリッパー(VD-01、02、03)がのせられるデザイン。
  ●フタをしたまま電子レンジOK。
  ※V60シリーズ「02」サイズ対応のサーバーです。",
  name: "HARIO (ハリオ) V60 レンジサーバー コーヒードリップ 600ml クリア XGS-60TB",
  price: 1545,
  url: "https://www.amazon.co.jp/HARIO-%E3%83%8F%E3%83%AA%E3%82%AA-%E3%83%AC%E3%83%B3%E3%82%B8%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%89%E3%83%AA%E3%83%83%E3%83%97-XGS-60TB/dp/B000P4931S/ref=rtpb_1?pd_rd_w=e6U7t&pf_rd_p=c221ae92-96f8-424c-884c-196b2fc439b0&pf_rd_r=N9DBW7BD51BFJ7KCQEN0&pd_rd_r=f70fbe62-9f5e-4815-bf9c-d3deb8687589&pd_rd_wg=0k4zY&pd_rd_i=B000P4931S&psc=1",
  shopname: "HARIO",

)
Product.create!(
  image:File.open("./public/seed/product-10.jpg"),
  caption:"いつでもどこでも使いやすい、簡単、コンパクトな「AEROPRESS (R) GO」
  空気の力を利用したコーヒー抽出器具エアロプレスコーヒーメーカーの持ち運び便利なコンパクトタイプ
  すべての部品を一つにまとめて、持ち運びできる",
  name: "エアロプレスゴー",
  price: 5940,
  url: "https://www.amazon.co.jp/%E3%82%A8%E3%82%A2%E3%83%AD%E3%83%97%E3%83%AC%E3%82%B9-AEROPRESS-%E3%82%A8%E3%82%A2%E3%83%AD%E3%83%97%E3%83%AC%E3%82%B9%E3%82%B4%E3%83%BC/dp/B086LFKT6T/ref=sr_1_8?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC+%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0&qid=1615528194&sr=8-8",
  shopname: "エアロプレス",
)


Review.create!(
  user: User.find(1),
  product: Product.find(1),
  title: "最高のドリッパーです",
  content: "簡単においしいコーヒーを淹れることができるドリッパーです",
  rate: 5
)

Review.create!(
  user: User.find(2),
  product: Product.find(1),
  title: "すぐに壊れてしまいました",
  content: "２回使っただけなのに壊れてしまいました。",
  rate: 1
)

Review.create!(
  user: User.find(10),
  product: Product.find(1),
  title: "初心者用のドリッパーです",
  content: "初心者用のドリッパーです。
  上級者から初心者でも使える万能なドリッパーです",
  rate: 4
)
Review.create!(
  user: User.find(9),
  product: Product.find(2),
  title: "退屈なドリッパー",
  content: "粉をいれて湯をいれたらコーヒーの完成です
  簡単で悪く言えば、退屈なドリッパーです",
  rate: 2
)

Review.create!(
  user: User.find(3),
  product: Product.find(2),
  title: "簡単にコーヒーが淹れれます",
  content: "粉とお湯をいれるだけで、いつでも同じ味のコーヒーを淹れることができます。",
  rate: 4
)

Review.create!(
  user: User.find(11),
  product: Product.find(10),
  title: "美味しく作れお掃除簡単",
  content: "すぐ作れるのと掃除が簡単で美味しい！
  キャンプにも持って行く予定です。",
  rate: 5
)
Review.create!(
  user: User.find(1),
  product: Product.find(5),
  title: "コンパクトでお買い得",
  content: "コーヒーを挽くのも力も要らず、ゴリゴリどころかジョリジョリスリスリ挽けます。
  コンパクトだし持ち歩きにハンドルもバンドに収納できます。
  １人分位なら家でも毎日挽いても苦ではないです。",
  rate: 4
)
Review.create!(
  user: User.find(12),
  product: Product.find(6),
  title: "取りにくい",
  content: "一度に2，3枚出たときに、フィルターが元にキチンと収まらない（形が少し崩れて）。",
  rate: 3
)
Review.create!(
  user: User.find(8),
  product: Product.find(3),
  title: "ドリップが安定する",
  content: "ウェーブドリッパーは、他のレビューにあるように、確かにドリップのブレが無いように感じます。
  常に安定したドリップになります。
  デメリットは、メリットの逆でドリップに変化をつけづらいことと、ペーパーコストが少し高いことでしょうか。",
  rate: 5
)
Review.create!(
  user: User.find(4),
  product: Product.find(9),
  title: "取り扱い要注意です",
  content: "残念ながら数回使ってサーバーが割れてしまいました。
  耐熱ガラスにしては薄手の為、使い始めの時に割れそうだなーと少し不安に思っていましたが、
  現実となりました。 取り扱い要注意です！",
  rate: 1
)

Review.create!(
  user: User.find(1),
  product: Product.find(7),
  title: "快適な使用感",
  content: "豆を挽いてる間にこちらに湯を移し、温度を下げて、毎日コーヒーを淹れています。
  細口で自分の加減で入れれるので、悩んで購入した甲斐がありました！",
  rate: 5
)
Review.create!(
  user: User.find(12),
  product: Product.find(8),
  title: "これこそもとめていたスケール",
  content: "物凄く使いやすい。今まで安いスケールを20個近く試してきましたが、精度や拭きやすさ、強度で満足いくものはありませんでした。
  こちらの商品は見た目、拭きやすさ、精度に満足している上に、充電式で乾電池不要なのも◎。
  一台購入後、追加で2台購入しました。",
  rate: 5
)
Review.create!(
  user: User.find(4),
  product: Product.find(4),
  title: "LED表示が思ったほど明るくない",
  content: "液晶がLEDで視認性がよく見やすいと思い少し割高ですが購入しました。
  ですが視認性はあまりよくないです。少し本体との取付に個体差によるズレがあるみたいで気になる方には気になると思います。",
  rate: 2
)

10.times do |n|
  Relationship.create!(
    user_id: n + 1,
    follow_id: n + 2
  )
  Relationship.create!(
    user_id: n + 2,
    follow_id: n + 1
  )
  if n != 0 && n % 2 == 0
    Relationship.create!(
      user_id: n+1,
      follow_id: 1
    )
    Like.create!(
      user_id: n+1,
      product_id: 1
    )
  end
  Like.create!(
    user: User.find(n +1),
    product_id: n +1
  )
  Like.create!(
    user: User.find(n +2),
    product_id: n +1
  )

end
