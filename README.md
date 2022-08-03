# Coffee-oma-react

コーヒーに関する器具や、豆などの評価や感想を投稿しシェアするwebアプリケーションです。
coffee-omaをReact x Rails APIでリプレースしたアプリケーションです

### [coffee-oma-react](https://coffee-oma-react.vercel.app/)
herokuでのデプロイのため初回のアクセス時表示まで時間がかかりますがご理解ください

![coffee-oma-logo](https://user-images.githubusercontent.com/48266893/112326442-deefcb80-8cf7-11eb-9432-cc83ade690de.png)


[![Rails Rspec](https://github.com/tomoron/coffee-oma-react/actions/workflows/ruby.yml/badge.svg)](https://github.com/tomoron/coffee-oma-react/actions/workflows/ruby.yml)[![Cypress](https://github.com/tomoron/coffee-oma-react/actions/workflows/cypress.yml/badge.svg)](https://github.com/tomoron/coffee-oma-react/actions/workflows/cypress.yml)


# 特に見ていただきたい点
- ### インフラ面
  - 開発環境ではdocker-composeを利用し、本番環境ではHerokuを利用している
  - GithubActionsを利用し、CIパイプラインを構築している
- ### バックエンド面
  - DRY,KISS,YAGNIの原則を意識したコード
  - RestfulなAPI設計を心がけているところ
- ### フロントエンド面
  - アニメーションを追加し、UI/UXがよくなるようにしているところ
  - Reactの最新技術(suspense)を使っているところ
- ### その他
  - チーム開発を意識し、Github flowに従った開発手法を取り入れている点。

# 機能一覧
  - ユーザ機能(devise,devise-token-auth)
  - 投稿機能(react-hook-form)
  - 画像投稿機能(carrierwave, fog-aws)
  - 無限スクロール機能(react-query,semantic-ui-react)
  - 投稿に対するレビュー機能
  - お気に入り機能
  - フォロー機能
  - レート星機能(react-rating)

# 使用している技術一覧
  - Ruby 2.7.2
  - Rails 6.1.3
  - devise-token-auth 1.2.0
  - React 17.0.2
  - typescript 4.2.3
  - cypress 8.7.0
  - storybook 6.2.9
  - recoil 0.2.0
  - react-query 3.32.1
  - react-cookie 4.1.1
  - react-helmet 6.1.0
  - react-hook-form 7.4.0
  - semantic-ui-react 2.0.3
  - styled-components 5.2.3
  - axios 0.21.1
  - jest 27.0.1
  - eslint-config-airbnb 18.2.1
  - framer-motion 4.1.17
  - mysql 8.0
  - AWS(S3)
  - Docker 20.10.5, docker-compose 1.28.5
  - Rspec, Capybara, rubocop



