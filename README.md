# guitarStyleEstimate

こちらは、エレキギターの入力の演奏スタイルを推定するモデルのプロトタイプです。

# Usage
1) Connect guitar to your computer.

2) Open command line
    "git clone https://github.com/Taito-Otani/guitarStyleEstimate.git"
    "cd guitarStyleEstimate"
    "python -m http.server"
    
3) Open any browser 
    "localhost:8000"

4) Fire the your guitar🔥


# モチベーション
こちらのプロジェクトでは、
信号処理的にギター演奏のスタイルを推定することで、
その情報から新たなエフェクターの開発やメディア技術との組み合わせによって、
新しいパフォーマンスを開発することを目指しています

# 分類

現時点では以下の奏法を分類できないか試してみています。

- pick　//ピックを使って弾く
- cutting　// カッティング奏法
- arp　//  アルペジオ
- chorkling　// チョーキング
- chord　// 複数弦を弾いたコード
- power　// 5度ずれで6弦5弦をピックで弾く
- tapp　//  タッピング奏法



Super Thanks
- ml5.js!
