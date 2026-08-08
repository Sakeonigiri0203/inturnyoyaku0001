/* =========================================================
インターンシップ情報
========================================================= */

const data = {

```
"北海道": {

    "北海道": {

        "XX 株式会社": {

            category: "製造系企業",

            description:
                "北海道にある製造系企業です。",

            internship: {

                type: "fixed",

                startDate: "2026-08-20",

                endDate: "2026-08-24"
            }
        }
    }
},


"東北": {

    "青森県": {

        "AA 株式会社": {

            category: "情報系の会社",

            description:
                "情報・通信系の企業です。",

            /*
               企業が受入期間を
               あらかじめ決めている場合
            */

            internship: {

                type: "fixed",

                startDate: "2026-08-20",

                endDate: "2026-08-24"
            }
        },


        "AB 株式会社": {

            category: "商社",

            description:
                "商社系の企業です。",

            internship: {

                type: "fixed",

                startDate: "2026-09-01",

                endDate: "2026-09-05"
            }
        }
    },


    "岩手県": {

        "AC 株式会社": {

            category: "金融系会社",

            description:
                "金融系の企業です。",

            internship: {

                type: "fixed",

                startDate: "2026-08-25",

                endDate: "2026-08-29"
            }
        }
    },


    "山形県": {

        "AD 株式会社": {

            category: "証券会社",

            description:
                "証券系の企業です。",

            internship: {

                type: "fixed",

                startDate: "2026-09-07",

                endDate: "2026-09-11"
            }
        }
    },


    "宮城県": {},

    "福島県": {}
},


"関東": {

    "茨城県": {},

    "群馬県": {},

    "栃木県": {},

    "埼玉県": {},

    "東京都": {}
},


"中部": {},

"近畿": {},

"中国・四国": {},


"九州・沖縄": {

    "福岡県": {},

    "沖縄県": {}
}
```

};

/* =========================================================
現在の状態
========================================================= */

let selectedRegion = "";

let selectedPrefecture = "";

let selectedCompany = "";

let startDate = null;

let endDate = null;

/* =========================================================
HTML
========================================================= */

const app =
document.getElementById("app");

const breadcrumb =
document.getElementById("breadcrumb");

/* =========================================================
パンくず表示
========================================================= */

function updateBreadcrumb() {

```
let html = "";

html += `<span>地域</span>`;


if (selectedRegion) {

    html += `　›　<span>
                ${selectedRegion}
            </span>`;
}


if (selectedPrefecture) {

    html += `　›　<span>
                ${selectedPrefecture}
            </span>`;
}


if (selectedCompany) {

    html += `　›　<span>
                ${selectedCompany}
            </span>`;
}


breadcrumb.innerHTML = html;
```

}

/* =========================================================
地方を表示
========================================================= */

function renderRegions() {

```
selectedPrefecture = "";

selectedCompany = "";

startDate = null;

endDate = null;

updateBreadcrumb();


let html = `

    <h2 class="step-title">
        地域を選択
    </h2>

    <div class="card-list">
`;


Object.keys(data).forEach(region => {

    html += `

        <div
            class="card"
            onclick="selectRegion('${region}')">

            <div class="card-title">
                ${region}
            </div>

            <div class="arrow">
                ›
            </div>

        </div>

    `;
});


html += `</div>`;


app.innerHTML = html;
```

}

/* =========================================================
地方選択
========================================================= */

function selectRegion(region) {

```
selectedRegion = region;

selectedPrefecture = "";

selectedCompany = "";

updateBreadcrumb();

renderPrefectures();
```

}

/* =========================================================
都道府県を表示
========================================================= */

function renderPrefectures() {

```
const prefectures =
    data[selectedRegion];


let html = `

    <h2 class="step-title">
        都道府県を選択
    </h2>

    <div class="card-list">
`;


Object.keys(prefectures)
    .forEach(prefecture => {

        html += `

            <div
                class="card"
                onclick="selectPrefecture('${prefecture}')">

                <div class="card-title">
                    ${prefecture}
                </div>

                <div class="arrow">
                    ›
                </div>

            </div>

        `;
    });


html += `

    </div>

    <button
        class="button back-button"
        onclick="renderRegions()">

        ← 地域選択に戻る

    </button>

`;


app.innerHTML = html;
```

}

/* =========================================================
都道府県選択
========================================================= */

function selectPrefecture(prefecture) {

```
selectedPrefecture = prefecture;

selectedCompany = "";

updateBreadcrumb();

renderCompanies();
```

}

/* =========================================================
企業を表示
========================================================= */

function renderCompanies() {

```
const companies =
    data[selectedRegion]
        [selectedPrefecture];


const companyNames =
    Object.keys(companies);


let html = `

    <h2 class="step-title">
        企業を選択
    </h2>

    <div class="card-list">
`;


if (companyNames.length === 0) {

    html += `

        <div class="detail-box">

            <p>
                現在登録されている企業はありません。
            </p>

        </div>

    `;

} else {

    companyNames.forEach(company => {

        const companyInfo =
            companies[company];


        html += `

            <div
                class="card"
                onclick="selectCompany('${company}')">

                <div>

                    <div class="card-title">
                        ${company}
                    </div>

                    <div class="card-sub">
                        ${companyInfo.category}
                    </div>

                </div>

                <div class="arrow">
                    ›
                </div>

            </div>

        `;
    });
}


html += `

    </div>


    <button
        class="button back-button"
        onclick="renderPrefectures()">

        ← 都道府県選択に戻る

    </button>

`;


app.innerHTML = html;
```

}

/* =========================================================
企業選択
========================================================= */

function selectCompany(company) {

```
selectedCompany = company;

startDate = null;

endDate = null;

updateBreadcrumb();

renderCompanyDetail();
```

}

/* =========================================================
企業詳細
========================================================= */

function renderCompanyDetail() {

```
const companyInfo =
    data[selectedRegion]
        [selectedPrefecture]
        [selectedCompany];


let html = `

    <h2 class="step-title">
        企業詳細
    </h2>


    <div class="detail-box">

        <h2>
            ${selectedCompany}
        </h2>


        <div class="detail-row">

            <div class="detail-label">
                所在地
            </div>

            <div>
                ${selectedPrefecture}
            </div>

        </div>


        <div class="detail-row">

            <div class="detail-label">
                業種
            </div>

            <div>
                ${companyInfo.category}
            </div>

        </div>


        <div class="detail-row">

            <div class="detail-label">
                内容
            </div>

            <div>
                ${companyInfo.description}
            </div>

        </div>


        <button
            class="button"
            onclick="startDateSelection()">

            インターン受入日程を見る

        </button>


        <button
            class="button back-button"
            onclick="renderCompanies()">

            ← 企業選択に戻る

        </button>

    </div>

`;


app.innerHTML = html;
```

}

/* =========================================================
インターン受入日程
========================================================= */

function startDateSelection() {

```
const companyInfo =
    data[selectedRegion]
        [selectedPrefecture]
        [selectedCompany];


/*
   企業側が受入期間を
   あらかじめ指定している場合
*/

if (
    companyInfo.internship &&
    companyInfo.internship.type === "fixed"
) {

    startDate =
        companyInfo.internship.startDate;

    endDate =
        companyInfo.internship.endDate;


    /*
       カレンダーを表示せず、
       直接確認画面へ
    */

    renderConfirm();

    return;
}


/*
   受入日程が登録されていない場合
*/

app.innerHTML = `

    <div class="detail-box">

        <h2>
            受入日程
        </h2>

        <p>
            現在、この企業のインターン
            受入日程は登録されていません。
        </p>


        <button
            class="button back-button"
            onclick="renderCompanyDetail()">

            ← 企業詳細に戻る

        </button>

    </div>

`;
```

}

/* =========================================================
予約内容確認
========================================================= */

function renderConfirm() {

```
updateBreadcrumb();


/*
   日数を計算
*/

const start =
    new Date(
        startDate + "T00:00:00"
    );


const end =
    new Date(
        endDate + "T00:00:00"
    );


const diff =
    end - start;


const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    ) + 1;


let html = `

    <h2 class="step-title">
        インターン受入日程の確認
    </h2>


    <div class="confirm-box">


        <div class="confirm-row">

            <div class="confirm-label">
                企業
            </div>

            <div class="confirm-value">
                ${selectedCompany}
            </div>

        </div>


        <div class="confirm-row">

            <div class="confirm-label">
                地域
            </div>

            <div class="confirm-value">
                ${selectedRegion}
            </div>

        </div>


        <div class="confirm-row">

            <div class="confirm-label">
                都道府県
            </div>

            <div class="confirm-value">
                ${selectedPrefecture}
            </div>

        </div>


        <div class="confirm-row">

            <div class="confirm-label">
                開始日
            </div>

            <div class="confirm-value">
                ${formatDate(startDate)}
            </div>

        </div>


        <div class="confirm-row">

            <div class="confirm-label">
                終了日
            </div>

            <div class="confirm-value">
                ${formatDate(endDate)}
            </div>

        </div>


        <div class="confirm-row">

            <div class="confirm-label">
                インターン期間
            </div>

            <div class="confirm-value">
                ${days}日間
            </div>

        </div>


        <button
            class="button"
            onclick="reservationComplete()">

            この日程で申し込む

        </button>


        <button
            class="button back-button"
            onclick="renderCompanyDetail()">

            ← 企業詳細に戻る

        </button>


    </div>

`;


app.innerHTML = html;
```

}

/* =========================================================
日付表示を日本語にする
========================================================= */

function formatDate(dateString) {

```
const date =
    new Date(
        dateString + "T00:00:00"
    );


const week = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
];


return `
    ${date.getFullYear()}年
    ${date.getMonth() + 1}月
    ${date.getDate()}日
    (${week[date.getDay()]})
`;
```

}

/* =========================================================
申込完了
========================================================= */

function reservationComplete() {

```
updateBreadcrumb();


app.innerHTML = `

    <div class="complete-box">

        <div class="complete-icon">
            ✓
        </div>


        <h2>
            申し込みを受け付けました
        </h2>


        <p>
            インターンシップのお申し込み
            ありがとうございます。
        </p>


        <p>

            <strong>
                ${selectedCompany}
            </strong>

            <br>

            ${formatDate(startDate)}

            ～

            ${formatDate(endDate)}

        </p>


        <button
            class="button"
            onclick="resetAll()">

            最初の画面に戻る

        </button>

    </div>

`;
```

}

/* =========================================================
最初に戻る
========================================================= */

function resetAll() {

```
selectedRegion = "";

selectedPrefecture = "";

selectedCompany = "";

startDate = null;

endDate = null;

renderRegions();
```

}

/* =========================================================
最初の画面
========================================================= */

renderRegions();
