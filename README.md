# 🎲 ボードゲーム リソースカウンター (v1.2.0)

iPad等の親機（マザーモニター）と、各プレイヤーのスマホ（子機）をリアルタイム接続し、ボードゲームのリソース（コイン・勝利点など）を集計・表示するWebアプリケーションです。

---

## 🌟 主な特徴

- **リアルタイム双方向同期**: Firebase Realtime Database を利用した低遅延な同期処理
- **動的リソースカスタマイズ**: 親機からリソース名・テーマカラー・初期値を自由に設定可能
- **DB自動クリーンアップ**: 親機離脱・終了時に `onDisconnect` で不要データを自動破棄
- **スマホ操作の最適化**: ボタン連打時のズーム防止、アトミック更新による数値ズレの防止、振動フィードバック対応
- **省スペースUI**: メンバー参加後にQRコードエリアを折りたたみ可能

---

## 📁 ディレクトリ構成

```text
.
├── index.html          # メインプログラム (親機/子機 共通UI・制御)
└── firebase-config.js  # Firebase接続設定 (API Keyなど)

🚀 導入手順
1. Firebase プロジェクトの準備
 * Firebase Console にアクセスし、プロジェクトを作成します。
 * データベースで Realtime Database を作成します。
 * Web アプリを追加し、表示される firebaseConfig の値を取得します。
2. 設定ファイルの作成
index.html と同じフォルダに firebase-config.js を作成し、取得した設定値を記述します。
// firebase-config.js
import { initializeApp } from "[https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js](https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js)";
import { getDatabase } from "[https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js](https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js)";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

3. 公開 (ホスティング)
GitHub Pages や Vercel、Netlify などにファイルをアップロードして公開します。
🎮 使い方
 * 親機（iPad / PC）
   * パラメータなしのURLにアクセスすると部屋IDとQRコードが自動発行されます。
   * 「リソース設定」からプレイするゲームに合わせた項目（名前・色・初期値）を追加します。
   * 全員が参加したらQRコードを折りたたんで卓の中央に設置します。
 * 子機（スマホ）
   * 親機のQRコードを読み取って参加します。
   * 親機で設定されたリソースが表示されるので、+1 / -1 ボタンで操作します。

