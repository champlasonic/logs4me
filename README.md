# logs4me

Jekyllで作成されたシンプルな個人ブログです。

## セットアップ

### 必要な環境

- Ruby (2.7以上)
- Bundler

### ローカルでの実行

1. 依存関係をインストール:
```bash
bundle install
```

2. ローカルサーバーを起動:
```bash
bundle exec jekyll serve
```

3. ブラウザで `http://localhost:4000` にアクセス

## GitHub Pagesへのデプロイ

1. GitHubに新しいリポジトリを作成
2. このプロジェクトをpush:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

3. GitHubリポジトリの Settings → Pages で以下を設定:
   - Source: Deploy from a branch
   - Branch: main / (root)

4. `_config.yml` を編集してサイト設定を変更:
```yaml
title: あなたのブログタイトル
description: ブログの説明
author: あなたの名前
email: your-email@example.com
baseurl: "/REPOSITORY-NAME"  # リポジトリ名
url: "https://USERNAME.github.io"  # あなたのGitHub Pages URL
```

## 新しい投稿の作成方法

### GitHubのWeb UIで作成（推奨）

1. GitHubリポジトリの `_posts/` フォルダに移動
2. 「Add file」→「Create new file」をクリック
3. ファイル名を `YYYY-MM-DD-title.md` 形式で入力
   - 例: `2026-01-25-my-first-post.md`
4. 以下のテンプレートを使って記事を作成:

```markdown
---
layout: post
title: "投稿のタイトル"
date: 2026-01-25
categories: blog
---

ここに本文を書きます。マークダウン形式で書けます。

## 見出し2

段落のテキスト...

- リスト項目1
- リスト項目2

**太字** や *イタリック* も使えます。
```

5. 「Commit changes」をクリックして保存
6. 数分後にGitHub Pagesで自動的に公開されます

### ローカルで作成

1. `_posts/` ディレクトリに `YYYY-MM-DD-title.md` 形式でファイルを作成
2. 上記のテンプレートを使って記事を作成
3. `bundle exec jekyll serve` でプレビュー
4. GitHubにpush

## ディレクトリ構造

```
.
├── _config.yml          # サイト設定
├── Gemfile             # Ruby依存関係
├── index.md            # トップページ
├── about.md            # Aboutページ
├── _layouts/           # レイアウトファイル
│   ├── default.html
│   └── post.html
├── _posts/             # ブログ投稿（ここに.mdファイルを追加）
│   └── 2026-01-25-welcome.md
└── assets/
    └── css/
        └── main.css    # スタイルシート
```

## カスタマイズ

### サイトのタイトルと説明を変更

[_config.yml](_config.yml) を編集してください。

### スタイルを変更

[assets/css/main.css](assets/css/main.css) を編集してください。

### レイアウトを変更

`_layouts/` ディレクトリ内のHTMLファイルを編集してください。

## ライセンス

MIT License

## サポート

問題や質問がある場合は、GitHubのIssuesを使用してください。
