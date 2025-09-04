import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const body: ContactFormData = await request.json();
  const { name, email, message } = body;

  // バリデーション
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: '必須項目が入力されていません。' },
      { status: 400 }
    );
  }

  // メールアドレスの簡易バリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: '有効なメールアドレスを入力してください。' },
      { status: 400 }
    );
  }

  // 外部URLにリクエスト送信
  console.log('リクエスト送信開始...');
  const webhookResponse = await sendToWebhook({
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  });

  console.log('Webhook結果:', webhookResponse);

  // Webhook送信の結果をチェック
  if (!webhookResponse.success) {
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました。しばらく後に再度お試しください。' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: 'お問い合わせを受け付けました。ありがとうございます！'
  });

}

async function sendToWebhook(data: ContactFormData & { timestamp: string }) {
  try {
    // GAS WebアプリのURLに送信
    const webhookUrl = 'https://script.google.com/macros/s/AKfycbwyqXZNWbvMWIuYg3iPyWTjP33cTlMSxXlu4VEAP2zqpYvtdEIlJ4nQGluesHR6NTuYmg/exec';

    console.log('送信するデータ:', data);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: 'A4-homepage-contact-form',
        timestamp: data.timestamp,
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    const responseData = await response.text();

    console.log('Webhook送信結果:', {
      status: response.status,
      statusText: response.statusText,
      url: webhookUrl,
      response: responseData.substring(0, 500) // 長すぎる場合は切り詰め
    });

    return { success: response.ok, status: response.status };
  } catch (error) {
    console.error('Webhook送信エラー:', error);
    return { success: false, error: error };
  }
}

