# Kakeibo Front

Kakeibo のフロントエンドアプリです。React + TypeScript + Vite で構成しています。

## 技術スタック

- React
- TypeScript
- Vite
- TanStack Query
- Axios
- Zod
- lucide-react

## 前提

- Node.js と npm がインストールされていること
- バックエンド API が `http://localhost:18080/api` で起動していること

API の接続先は `src/api/client.ts` で定義しています。

## セットアップ

```bash
npm install
```

## 起動

```bash
npm run dev
```

Vite の開発サーバーが起動します。通常は `http://localhost:5173` で確認できます。

## ビルド

```bash
npm run build
```

TypeScript のビルドチェック後、Vite で本番用ビルドを作成します。

## コードチェック

```bash
npm run lint
```

ESLint でコードをチェックします。

```bash
npm run lint:fix
```

ESLint で自動修正できる内容を修正します。

```bash
npm run format
```

Prettier で `src` 配下の対象ファイルをフォーマットします。

```bash
npm run check
```

ESLint と Prettier をまとめて実行します。

## 主なディレクトリ

- `src/api`: API クライアント、API 呼び出し
- `src/components`: 画面部品
- `src/hooks`: React Hooks
- `src/pages`: ページ単位のコンポーネント
- `src/schemas`: Zod スキーマ
- `src/types`: 型定義
- `src/utils`: 汎用処理
- `src/styles`: CSS

## バックエンドとの接続

バックエンドは `Kakeibo-backend` 側の Docker 環境で起動します。

フロントエンドからは以下の API を利用します。

- `GET /api/expenses`
- `POST /api/expenses`
- `GET /api/payment-methods`
- `GET /api/categories`
