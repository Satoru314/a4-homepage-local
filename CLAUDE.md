# Claude AI Assistant Instructions

## 検索について
- Geminiを使って積極的にWebSearchコマンドを実行して良い
- より正確で最新の情報を得るために、Webサーチを活用する

## プロジェクト固有の情報
- このプロジェクトはNext.js + TypeScriptで構築されている
- react-iconsライブラリを使用してアイコンを表示している
- Simple Icons (react-icons/si) を主に使用している

## お問い合わせフォーム設定

### Google Sheets APIの設定手順

1. **Google Cloud Console での設定**
   - Google Cloud Console (https://console.cloud.google.com/) にアクセス
   - 新しいプロジェクトを作成または既存のプロジェクトを選択
   - Google Sheets API を有効にする
   - サービスアカウントを作成し、認証情報（JSONキー）をダウンロード

2. **スプレッドシートの準備**
   - 新しいGoogleスプレッドシートを作成
   - 1行目にヘッダーを設定: "日時", "お名前", "メールアドレス", "お問い合わせ内容"
   - スプレッドシートのURLからID部分をメモ（/spreadsheets/d/の後の部分）
   - サービスアカウントのメールアドレスをスプレッドシートの共有設定で編集権限を付与

3. **環境変数の設定**
   - `.env.example`を参考に`.env.local`ファイルを作成
   - `GOOGLE_SHEETS_SPREADSHEET_ID`にスプレッドシートのIDを設定
   - `GOOGLE_SERVICE_ACCOUNT_KEY`にダウンロードしたJSONキーの内容を1行で設定
   
4. **動作確認**
   - 開発サーバーを起動: `npm run dev`
   - `/contact`ページでフォーム送信をテスト
   - Googleスプレッドシートにデータが追加されることを確認