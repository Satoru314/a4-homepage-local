/**
 * A4ホームページのお問い合わせフォームからのWebhookを処理
 * Google Apps Scriptに配置して、Web アプリとして公開する
 */

function doPost(e) {
  try {
    // リクエストボディからJSONデータを取得
    const data = JSON.parse(e.postData.contents);
    
    // ログに記録（デバッグ用）
    console.log('受信データ:', data);
    
    // スプレッドシートにデータを保存
    const result = saveToSpreadsheet(data);
    
    if (result.success) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          status: 'success',
          message: 'データが正常に保存されました'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          status: 'error',
          message: result.error
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    console.error('エラー:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: 'データの処理中にエラーが発生しました'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function saveToSpreadsheet(data) {
  try {
    // スプレッドシートのIDを設定（実際のIDに変更してください）
    const SPREADSHEET_ID = 'your_spreadsheet_id_here';
    
    // スプレッドシートを開く
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // ヘッダー行が存在しない場合は追加
    if (sheet.getLastRow() === 0) {
      const headers = ['日時', '送信元', 'お名前', 'メールアドレス', 'お問い合わせ内容'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // ヘッダー行のスタイルを設定
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285F4');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
    }
    
    // データを新しい行に追加
    const newRow = [
      data.timestamp || new Date().toISOString(),
      data.source || 'unknown',
      data.name || '',
      data.email || '',
      data.message || ''
    ];
    
    sheet.appendRow(newRow);
    
    // 列幅を自動調整（見やすくするため）
    sheet.autoResizeColumns(1, 5);
    
    console.log('データ保存完了:', newRow);
    
    return { success: true };
    
  } catch (error) {
    console.error('スプレッドシート保存エラー:', error);
    return { success: false, error: error.toString() };
  }
}

/**
 * テスト用関数
 * GASエディタから直接実行してテストできます
 */
function testSaveData() {
  const testData = {
    source: 'A4-homepage-contact-form',
    timestamp: new Date().toISOString(),
    name: 'テスト 太郎',
    email: 'test@example.com',
    message: 'これはテストメッセージです。'
  };
  
  const result = saveToSpreadsheet(testData);
  console.log('テスト結果:', result);
}

/**
 * スプレッドシートの初期化
 * 必要に応じて実行
 */
function initializeSpreadsheet() {
  const SPREADSHEET_ID = 'your_spreadsheet_id_here';
  
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // シートをクリア
    sheet.clear();
    
    // ヘッダー行を設定
    const headers = ['日時', '送信元', 'お名前', 'メールアドレス', 'お問い合わせ内容'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // ヘッダー行のスタイルを設定
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#4285F4');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    
    // 列幅を設定
    sheet.setColumnWidth(1, 200); // 日時
    sheet.setColumnWidth(2, 150); // 送信元
    sheet.setColumnWidth(3, 120); // お名前
    sheet.setColumnWidth(4, 200); // メールアドレス
    sheet.setColumnWidth(5, 300); // お問い合わせ内容
    
    console.log('スプレッドシート初期化完了');
    
  } catch (error) {
    console.error('初期化エラー:', error);
  }
}