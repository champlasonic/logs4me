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
