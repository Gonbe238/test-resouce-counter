# 🎲 ボードゲーム リソースカウンター (v1.5.0)

iPad等の親機（マザーモニター）と、各プレイヤーのスマホ（子機）をリアルタイム接続し、ボードゲームのリソース（コイン・勝利点など）を集計・表示するWebアプリケーションです。

iPad 11インチ等のタブレットを卓上モニターとして配置し、離れた席からでも全員の数値を一目で把握できるように視認性を追求しています。

---

## 🌟 主な特徴

- **卓上モニター表示（マザー画面）**
  - **ゲーム開始モード:** 「▶️ ゲーム開始」ボタンで全画面化し、数値やタイルを特大表示。設定UIやQRコードを自動非表示にして画面を最大限活用。
  - **レスポンシブ・タイリング:** iPad 11インチ等の解像度に最適化。参加人数に応じてタイルレイアウトと文字サイズが自動調整。
- **プレイヤー操作画面（スマホ画面）**
  - **両サイド配置UI:** 中央に特大数値、左側にマイナス操作（`-5`, `-1`）、右側にプラス操作（`+1`, `+5`）を配置。
  - **プレイヤーカスタマイズ:** プレイヤー名と「マイカラー（見やすい8色パレット）」を自由に設定可能。
- **リアルタイム双方向同期**
  - Firebase Realtime Database を利用した低遅延同期。
  - 初期値を基準とした正確な加減算処理および誤動作・負数防止ロジック。
- **DB自動クリーンアップ**
  - 親機の離脱・ゲーム終了時に `onDisconnect` で不要データをデータベースから自動破棄。

---

## 📁 ディレクトリ構成

```text
.
├── index.html          # メインプログラム (親機/子機 共通UI・制御)
└── firebase-config.js  # Firebase接続設定 (API Keyなど)

```

---

## 🚀 導入手順

### 1. Firebase プロジェクトの準備

1. [Firebase Console](https://console.firebase.google.com/) にアクセスし、プロジェクトを作成します。
2. データベースで **Realtime Database** を作成します。
3. Web アプリを追加し、表示される `firebaseConfig` の値を取得します。

### 2. 設定ファイルの作成

`index.html` と同じフォルダに `firebase-config.js` を作成し、取得した設定値を記述します。

```javascript
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

```

### 3. 公開 (ホスティング)

GitHub Pages や Vercel、Netlify などにアップロードして公開します（※ローカル環境で試す場合は Live Server 等のローカルWebサーバー経由でアクセスしてください）。

---

## 🎮 使い方

1. **親機（iPad / PC）**
* URLにそのままアクセスすると部屋IDと参加用QRコードが自動生成されます。
* 8色パレットからカラーを選び、プレイするゲームのリソース名・初期値を設定・追加します。
* 全員が参加したら「**▶️ ゲーム開始（画面表示を最大化）**」を押して卓上中央に設置します。


2. **子機（スマホ）**
* QRコードを読み取って参加します。
* 名前とマイカラーを設定・保存します。
* 左右の `-5 / -1 / +1 / +5` ボタンで数値を調整します。
