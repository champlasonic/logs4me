# Claude Code メモ

## 言語設定
- ユーザーからの入力: 英語
- Claudeの応答: 日本語

## プロジェクト概要
Jekyllベースの個人ブログシステム
- 静的サイトジェネレーター: Jekyll
- ホスティング: GitHub Pages
- 投稿方法: GitHubのWeb UIで直接.mdファイルを編集

## 記事の管理

### 記事の投稿方法

#### GitHub Web UIで投稿する場合:
1. GitHubリポジトリの `_posts/` フォルダにアクセス
2. "Add file" → "Create new file" をクリック
3. ファイル名を `YYYY-MM-DD-title.md` 形式で入力（例: `2026-01-25-my-first-post.md`）
4. YAMLフロントマター（メタデータ）と本文を記述
5. "Commit changes" で変更をコミット
6. 数分後、GitHub Pagesが自動的に再ビルドされ、記事が公開される

#### YAMLフロントマターの基本形式:
```yaml
---
layout: post
title: "記事のタイトル"
date: 2026-01-25
model: モデル名
permalink: /custom-url/
image: /assets/images/YYYYMMDD.jpg
---
```

- `layout`: 通常は `post` を指定
- `title`: 記事のタイトル（必須）**タイトルにモデル名を含めないこと**
- `date`: 公開日（YYYY-MM-DD形式）
- `model`: 文体モデルの名前（例: 村上春樹、太宰治、中原中也）
- `permalink`: カスタムURL（オプション）
- `image`: 記事の画像パス（オプション）

### 🚨 重要：新しい記事作成時のワークフロー

新しい記事を作成する際は、**必ず以下の手順を守ること**：

#### ステップ1: モデルページの確認
```bash
# 使用するモデルのページが既に存在するか確認
ls model/*.md
grep -h "^model:" _posts/*.md | sort -u
```

#### ステップ2: モデルページが存在しない場合は作成
```bash
# 例：柿本人麻呂のモデルページを作成
# ファイル名: model/[英語名].md
# 内容:
---
layout: model
title: モデル名
model: モデル名
permalink: /model/[英語名]/
---
```

**モデルページの命名規則：**
- 村上春樹 → `model/haruki-murakami.md`
- 太宰治 → `model/osamu-dazai.md`
- 中原中也 → `model/chuya-nakahara.md`
- 柿本人麻呂 → `model/kakinomoto-no-hitomaro.md`
- 司馬遼太郎 → `model/ryotaro-shiba.md`

#### ステップ3: 記事とモデルページを同時にコミット
```bash
# 記事とモデルページを同時に追加
git add _posts/YYYY-MM-DD-title.md model/model-name.md

# コミット
git commit -m "Add new post: タイトル (モデル名) and model page

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# プッシュ
git push
```

#### ステップ4: 画像がある場合は追加
```bash
# 画像を記事に追加後
git add _posts/YYYY-MM-DD-title.md assets/images/YYYYMMDD.jpg
git commit -m "Add image to タイトル post

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push
```

**⚠️ 絶対に守ること：**
1. タイトルにモデル名を含めない（例：❌「記事タイトル（村上春樹モデル）」→ ✅「記事タイトル」）
2. YAMLフロントマターに `model:` フィールドを必ず追加
3. 新しいモデルを使用する場合、記事作成と同時にモデルページも作成
4. 記事とモデルページを同じコミットでプッシュ

### Markdownの書き方

#### テキスト装飾
```markdown
**太字**
_斜体_
~~取り消し線~~
```

#### 見出し
```markdown
# 見出し1
## 見出し2
### 見出し3
```

#### リスト
```markdown
# 順序付きリスト
1. 項目1
2. 項目2
3. 項目3

# 順序なしリスト
- 項目A
- 項目B
- 項目C
```

#### リンク
```markdown
[リンクテキスト](https://example.com)
```

#### 画像
```markdown
![代替テキスト](画像のURL)
```

#### コード

インラインコード: `` `console.log('Hello')` ``

コードブロック:
````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

#### 引用
```markdown
> これは引用文です
```

### 記事の削除方法

#### GitHub Web UIで削除する場合:
1. GitHubリポジトリの `_posts/` フォルダにアクセス
2. 削除したい記事ファイルをクリック
3. 右上のゴミ箱アイコン（Delete file）をクリック
4. "Commit changes" で変更をコミット
5. 数分後、GitHub Pagesが自動的に再ビルドされ、記事が削除される

#### ローカルで削除する場合:
```bash
# 記事ファイルを削除
rm _posts/YYYY-MM-DD-title.md

# 変更をコミット
git add .
git commit -m "Delete post: title"

# GitHubにプッシュ
git push
```

**注意**: GitHubで削除した記事がローカルに残っている場合、マージコンフリクトが発生する可能性があります。その場合は、`git pull`でリモートの変更を取り込むか、ローカルファイルも削除してください。

## Google Analytics設定

### 測定ID
- Google Analytics 4測定ID: `G-XZR725C84L`
- 設定場所: `_layouts/default.html`の`<head>`セクション

### 測定IDを変更する場合
1. `_layouts/default.html`を開く
2. `<head>`セクション内のGoogle Analyticsタグを探す
3. `G-XZR725C84L`を新しい測定IDに置き換える
4. 変更をコミット＆プッシュ

## カスタムドメイン設定

### 現在の設定
- ドメイン: `briscape.com`
- DNS管理: Cloudflare
- CNAMEファイル: リポジトリルートに配置済み

### Cloudflare DNS設定

#### Apexドメイン（briscape.com）
```
タイプ: A
名前: @
IPv4アドレス:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
Proxy status: DNSのみ（グレーの雲アイコン）
```

#### wwwサブドメイン（www.briscape.com）
```
タイプ: CNAME
名前: www
ターゲット: briscape.com
Proxy status: DNSのみ（グレーの雲アイコン）
```

⚠️ **重要**: Proxy statusは「DNSのみ」に設定してください。GitHubが自動的に`www.briscape.com`を`briscape.com`にリダイレクトします。

### GitHub Pages設定手順
1. GitHubリポジトリの Settings → Pages
2. Custom domain欄に `briscape.com` を入力
3. Save をクリック
4. DNS設定が反映されるまで待つ（数分〜数時間）
5. Enforce HTTPS にチェックを入れる

### _config.yml設定
- `baseurl: ""` （空）
- `url: "https://briscape.com"`
