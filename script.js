// =============================
// インターンシップデータ
// =============================

const data = {
    "北海道": {
        "北海道": {
            "XX 株式会社": {
                category: "製造系企業",
                description: "北海道にある製造系企業です。"
            }
        }
    },

    "東北": {
        "青森県": {
            "AA 株式会社": {
                category: "情報系の会社",
                description: "情報・通信系の企業です。"
            },

            "AB 株式会社": {
                category: "商社",
                description: "商社系の企業です。"
            }
        },

        "岩手県": {
            "AC 株式会社": {
                category: "金融系会社",
                description: "金融系の企業です。"
            }
        },

        "山形県": {
            "AD 株式会社": {
                category: "証券会社",
                description: "証券系の企業です。"
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
};


// =============================
// 現在の状態
// =============================

let step = 1;

let selectedRegion = "";
let selectedPrefecture = "";
let selectedCompany = "";

let selectedDate = "";
let selectedTime = "";


// =============================
// HTMLを表示
// =============================

const app = document.getElementById("app");


// =============================
// 地方選択
// =============================

function renderRegions() {

    step = 1;

    let html = `
        <h2 class="step-title">地域を選択</h2>

        <div class="card-list">
    `;

    Object.keys(data).forEach(region => {

        html += `
            <div class="card"
                 onclick="selectRegion('${region}')">

                <div class="card-title">
                    ${region}
                </div>

                <div>›</div>

            </div>
        `;
    });

    html += `</div>`;

    app.innerHTML = html;
}


// =============================
// 地方を選択
// =============================

function selectRegion(region) {

    selectedRegion = region;

    renderPrefectures();
}


// =============================
// 都道府県選択
// =============================

function renderPrefectures() {

    step = 2;

    const prefectures = data[selectedRegion];

    let html = `
        <h2 class="step-title">
            都道府県を選択（${selectedRegion}）
        </h2>

        <div class="card-list">
    `;

    Object.keys(prefectures).forEach(prefecture => {

        html += `
            <div class="card"
                 onclick="selectPrefecture('${prefecture}')">

                <div class="card-title">
                    ${prefecture}
                </div>

                <div>›</div>

            </div>
        `;
    });

    html += `

        </div>

        <button class="button back-button"
                onclick="renderRegions()">
            戻る
        </button>
    `;

    app.innerHTML = html;
}


// =============================
// 都道府県を選択
// =============================

function selectPrefecture(prefecture) {

    selectedPrefecture = prefecture;

    renderCompanies();
}


// =============================
// 企業選択
// =============================

function renderCompanies() {

    step = 3;

    const companies =
        data[selectedRegion][selectedPrefecture];

    const companyNames = Object.keys(companies);

    let html = `
        <h2 class="step-title">
            企業を選択（${selectedPrefecture}）
        </h2>

        <div class="card-list">
    `;

    if (companyNames.length === 0) {

        html += `
            <p>
                現在登録されている企業はありません。
            </p>
        `;

    } else {

        companyNames.forEach(company => {

            const info = companies[company];

            html += `
                <div class="card"
                     onclick="selectCompany('${company}')">

                    <div class="card-title">
                        ${company}
                    </div>

                    <div class="card-sub">
                        ${info.category}
                    </div>

                </div>
            `;
        });
    }

    html += `

        </div>

        <button class="button back-button"
                onclick="renderPrefectures()">
            戻る
        </button>
    `;

    app.innerHTML = html;
}


// =============================
// 企業を選択
// =============================

function selectCompany(company) {

    selectedCompany = company;

    renderCompanyDetail();
}


// =============================
// 企業詳細
// =============================

function renderCompanyDetail() {

    step = 4;

    const company =
        data[selectedRegion]
            [selectedPrefecture]
            [selectedCompany];

    app.innerHTML = `

        <h2 class="step-title">
            企業詳細
        </h2>

        <div class="detail-box">

            <h2>
                ${selectedCompany}
            </h2>

            <p>
                <strong>所在地：</strong>
                ${selectedPrefecture}
            </p>

            <p>
                <strong>業種：</strong>
                ${company.category}
            </p>

            <p>
                ${company.description}
            </p>

            <button class="button"
                    onclick="renderCalendar()">
                日程を選択する
            </button>

            <button class="button back-button"
                    onclick="renderCompanies()">
                戻る
            </button>

        </div>
    `;
}


// =============================
// カレンダー
// =============================

function renderCalendar() {

    step = 5;

    const year = 2026;
    const month = 7; // 8月。JavaScriptでは0始まり

    const firstDay =
        new Date(year, month, 1).getDay();

    const lastDate =
        new Date(year, month + 1, 0).getDate();

    let html = `

        <h2 class="step-title">
            日付を選択
        </h2>

        <div class="calendar">

            <div class="calendar-header">

                <button onclick="changeMonth(-1)">
                    ‹
                </button>

                <strong>
                    ${year}年${month + 1}月
                </strong>

                <button onclick="changeMonth(1)">
                    ›
                </button>

            </div>

            <div class="calendar-grid">

                <div>日</div>
                <div>月</div>
                <div>火</div>
                <div>水</div>
                <div>木</div>
                <div>金</div>
                <div>土</div>
    `;

    // 月初までの空白
    for (let i = 0; i < firstDay; i++) {

        html += `
            <div></div>
        `;
    }

    // 日付
    for (let day = 1; day <= lastDate; day++) {

        html += `
            <div class="calendar-day"
                 onclick="selectDate('${year}-${month + 1}-${day}')">

                ${day}

            </div>
        `;
    }

    html += `
            </div>

        </div>

        <button class="button back-button"
                onclick="renderCompanyDetail()">
            戻る
        </button>
    `;

    app.innerHTML = html;
}


// =============================
// 日付選択
// =============================

function selectDate(date) {

    selectedDate = date;

    renderTimes();
}


// =============================
// 時間選択
// =============================

function renderTimes() {

    step = 6;

    const times = [
        "09:00 ～ 10:00",
        "10:00 ～ 11:00",
        "11:00 ～ 12:00",
        "13:00 ～ 14:00",
        "14:00 ～ 15:00",
        "15:00 ～ 16:00",
        "16:00 ～ 17:00",
        "17:00 ～ 18:00"
    ];

    let html = `

        <h2 class="step-title">
            時間を選択
        </h2>

        <p>
            ${selectedDate}
        </p>

        <div class="time-list">
    `;

    times.forEach(time => {

        html += `
            <button
                class="time-button"
                onclick="selectTime('${time}')">

                ${time}

            </button>
        `;
    });

    html += `
        </div>

        <button class="button back-button"
                onclick="renderCalendar()">
            戻る
        </button>
    `;

    app.innerHTML = html;
}


// =============================
// 時間選択
// =============================

function selectTime(time) {

    selectedTime = time;

    renderConfirm();
}


// =============================
// 予約確認
// =============================

function renderConfirm() {

    step = 7;

    app.innerHTML = `

        <h2 class="step-title">
            予約内容の確認
        </h2>

        <div class="confirm-box">

            <div class="confirm-row">
                <span>企業</span>
                <strong>
                    ${selectedCompany}
                </strong>
            </div>

            <div class="confirm-row">
                <span>地域</span>
                <strong>
                    ${selectedRegion}
                </strong>
            </div>

            <div class="confirm-row">
                <span>都道府県</span>
                <strong>
                    ${selectedPrefecture}
                </strong>
            </div>

            <div class="confirm-row">
                <span>日付</span>
                <strong>
                    ${selectedDate}
                </strong>
            </div>

            <div class="confirm-row">
                <span>時間</span>
                <strong>
                    ${selectedTime}
                </strong>
            </div>

            <button class="button"
                    onclick="reservationComplete()">
                この内容で予約する
            </button>

            <button class="button back-button"
                    onclick="renderTimes()">
                戻る
            </button>

        </div>
    `;
}


// =============================
// 予約完了
// =============================

function reservationComplete() {

    app.innerHTML = `

        <div class="detail-box">

            <h2>
                予約を受け付けました
            </h2>

            <p>
                ご予約ありがとうございます。
            </p>

            <p>
                ${selectedCompany}<br>
                ${selectedDate}<br>
                ${selectedTime}
            </p>

            <button class="button"
                    onclick="renderRegions()">
                最初に戻る
            </button>

        </div>
    `;
}


// =============================
// 月変更（後で本格実装）
// =============================

function changeMonth(direction) {

    alert(
        "ここにカレンダーの月変更処理を追加できます。"
    );
}


// =============================
// 最初の画面
// =============================

renderRegions();
