# Google Apps Script セットアップ手順

## 1. Googleスプレッドシートの作成
1. Google Drive で新しいスプレッドシートを作成
2. スプレッドシートのURLからIDをコピー
   - URL例: `https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789/edit`
   - ID部分: `1ABC123DEF456GHI789`

## 2. Google Apps Script の作成
1. [Google Apps Script](https://script.google.com/) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「A4お問い合わせWebhook」に変更
4. `gas-webhook-handler.gs` の内容をコピー＆ペースト
5. `SPREADSHEET_ID` を実際のスプレッドシートIDに変更

```javascript
const SPREADSHEET_ID = '1ABC123DEF456GHI789'; // ここを変更
```

## 3. Web アプリとして公開
1. GASエディタで「デプロイ」→「新しいデプロイ」をクリック
2. 種類を「ウェブアプリ」に設定
3. 設定：
   - **説明**: A4お問い合わせフォーム用webhook
   - **次のユーザーとして実行**: 自分
   - **アクセスできるユーザー**: すべてのユーザー
4. 「デプロイ」をクリック
5. **WebアプリのURL**をコピーして保存

## 4. Next.jsアプリの設定更新
`app/api/contact/route.ts` の webhookUrl を GAS の WebアプリURL に変更：

```javascript
const webhookUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## 5. テスト実行
1. GASエディタで `testSaveData` 関数を実行してテスト
2. スプレッドシートにテストデータが追加されることを確認
3. Next.jsアプリからフォーム送信をテスト

## 6. 初期化（必要に応じて）
スプレッドシートを初期化したい場合は、GASエディタで `initializeSpreadsheet` 関数を実行

## 注意事項
- GASのWebアプリURLは変更されることがあります
- 権限エラーが出た場合は、Googleアカウントの認証を完了してください
- スプレッドシートの共有設定で、GASを実行するアカウントに編集権限があることを確認してください