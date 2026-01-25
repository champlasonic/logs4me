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
categories: blog
permalink: /custom-url/
---
```

- `layout`: 通常は `post` を指定
- `title`: 記事のタイトル（必須）
- `date`: 公開日（YYYY-MM-DD形式）
- `categories`: カテゴリー（blog, tech, design, lifeなど）
- `permalink`: カスタムURL（オプション）

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
