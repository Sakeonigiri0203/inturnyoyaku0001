/* =========================================================
   インターンシップ情報
========================================================= */

const data = {

    "北海道": {

        "北海道": {

            "株式会社オホーツクブルー": {

                category: "酒造会社",

                description:
                    "北海道の地酒を開発・醸造する企業です。",
               
                problem:
                    "会社の後継者不足→若者へのアプローチは何か？",
                image: 
                    "playground08081613.png",
            
                internshipContent: [
                    {
                        day: "1日目",
                        content: "企業職員からの今の会社の現状を聴き、チームごとに課題を決定する"
                    },
                    {
                        day: "2日目",
                        content: "課題の解決案の洗い出し、企業へインタビューして生の声を聴く、課題に対する解決策の作成"
                    },
                    {
                        day: "3日目",
                        content: "中間発表、アドバイスをもとに最終発表のための準備"
                    },
                    {
                        day: "4日目",
                        content: "最終発表と講評をもらう"
                    },
                    {
                        day: "5日目",
                        content: "地酒の試飲会(20歳未満の学生は別の企画あり)、1日自由観光デー"
                    },
                    {
                        day: "6日目",
                        content: "まとめ、総括"
                    }
                ],

                periods: [

                    {
                        start: "2026-08-20",
                        end: "2026-08-25"
                    },
            
                    {
                        start: "2026-09-01",
                        end: "2026-09-06"
                    },
            
                    {
                        start: "2026-09-10",
                        end: "2026-09-15"
                    }
            
                ]
    },

             "うまいしょ農業組合": {

                category: "農業協同組合",

                description:
                    "北海道の野菜・果物の管理企業です。",
                periods: [

                    {
                        start: "2026-08-22",
                        end: "2026-08-27"
                    },
            
                    {
                        start: "2026-09-04",
                        end: "2026-09-09"
                    },
            
                    {
                        start: "2026-09-12",
                        end: "2026-09-17"
                    }
            
                ]
    },
           "株式会社北国観光": {

                category: "観光業界企業",

                description:
                    "北海道のお土産を企画・開発する企業です。",
                periods: [

                    {
                        start: "2026-08-27",
                        end: "2026-08-31"
                    },
            
                    {
                        start: "2026-09-06",
                        end: "2026-09-11"
                    },
            
                    {
                        start: "2026-09-13",
                        end: "2026-09-19"
                    }
            
                ]
           }
        }
    },


    "東北": {

        "青森県": {

            "AA 株式会社": {

                category: "情報系の会社",

                description:
                    "情報・通信系の企業です。"
            },

            "AB 株式会社": {

                category: "商社",

                description:
                    "商社系の企業です。"
            }
        },


        "岩手県": {

            "AC 株式会社": {

                category: "金融系会社",

                description:
                    "金融系の企業です。"
            }
        },


        "山形県": {

            "AD 株式会社": {

                category: "証券会社",

                description:
                    "証券系の企業です。"
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

        "沖縄県": {

            "株式会社シーサーイド": {

                category: "水産業企業",

                description:
                    "沖縄の海ぶどうの加工品を企画・開発する企業です。",
                periods: [

                    {
                        start: "2026-08-20",
                        end: "2026-08-25"
                    },
            
                    {
                        start: "2026-09-01",
                        end: "2026-09-05"
                    },
            
                    {
                        start: "2026-09-10",
                        end: "2026-09-15"
                    }
            
                ]
    },

             "沖縄マリンブルー水族館": {

                category: "水族館・観光場所",

                description:
                    "水族館でのイベント・動物の管理を担う企業です。",
                periods: [

                    {
                        start: "2026-08-22",
                        end: "2026-08-27"
                    },
            
                    {
                        start: "2026-09-04",
                        end: "2026-09-09"
                    },
            
                    {
                        start: "2026-09-12",
                        end: "2026-09-17"
                    }
            
                ]
    },
           "株式会社琉球交通": {

                category: "交通機関",

                description:
                    "沖縄のモノレールを管理・新事業の考案や企画をする企業です。",
                periods: [

                    {
                        start: "2026-08-27",
                        end: "2026-08-31"
                    },
            
                    {
                        start: "2026-09-06",
                        end: "2026-09-11"
                    },
            
                    {
                        start: "2026-09-13",
                        end: "2026-09-19"
                    }
            
                ]
        }
    }

    },

};


/* =========================================================
   現在の状態
========================================================= */

let selectedRegion = "";

let selectedPrefecture = "";

let selectedCompany = "";

let startDate = null;

let endDate = null;


/*
   カレンダーに表示している月

   JavaScriptでは
   0 = 1月
   1 = 2月
   ...
   7 = 8月
*/

let calendarYear = 2026;

let calendarMonth = 7;


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
}


/* =========================================================
   地方を表示
========================================================= */

function renderRegions() {

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
}


/* =========================================================
   地方選択
========================================================= */

function selectRegion(region) {

    selectedRegion = region;

    selectedPrefecture = "";

    selectedCompany = "";

    updateBreadcrumb();

    renderPrefectures();
}


/* =========================================================
   都道府県を表示
========================================================= */

function renderPrefectures() {

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
}


/* =========================================================
   都道府県選択
========================================================= */

function selectPrefecture(prefecture) {

    selectedPrefecture = prefecture;

    selectedCompany = "";

    updateBreadcrumb();

    renderCompanies();
}


/* =========================================================
   企業を表示
========================================================= */

function renderCompanies() {

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
}


/* =========================================================
   企業選択
========================================================= */

function selectCompany(company) {

    selectedCompany = company;

    startDate = null;

    endDate = null;

    updateBreadcrumb();

    renderCompanyDetail();
}


/* =========================================================
   企業詳細
========================================================= */

function renderCompanyDetail() {

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

            <img
              src="${companyInfo.image}"
              alt="${selectedCompany}"
              class="company-image"
            >
      
          <div class="detail-row">


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

            <div class="detail-row">

    <div class="detail-label">
        課題
    </div>

    <div>
        ${companyInfo.problem}
    </div>

</div>


<div class="detail-row">

    <div class="detail-label">
        インターンシップ内容
    </div>

    <div>

        ${companyInfo.internshipContent.map(item => `

            <div class="internship-day">

                <strong>
                    ${item.day}
                </strong>

                <p>
                    ${item.content}
                </p>

               </div>
      
              `).join("")}
      
          </div>
      
      </div>


            <button
                class="button"
                onclick="startDateSelection()">

                インターン期間を選択する

            </button>


            <button
                class="button back-button"
                onclick="renderCompanies()">

                ← 企業選択に戻る

            </button>

        </div>

    `;


    app.innerHTML = html;
}


/* =========================================================
   開始日の選択
========================================================= */

function startDateSelection() {

    renderAvailablePeriods();
}

function renderAvailablePeriods() {

    const companyInfo =
        data[selectedRegion]
            [selectedPrefecture]
            [selectedCompany];

    const periods =
        companyInfo.periods;

    let html = `

        <h2 class="step-title">
            インターン受入期間を選択
        </h2>

        <p>
            ${selectedCompany}が提示している
            受入期間から選択してください。
        </p>

        <div class="card-list">
    `;


    periods.forEach((period, index) => {

        const start =
            new Date(
                period.start + "T00:00:00"
            );

        const end =
            new Date(
                period.end + "T00:00:00"
            );


        const diff =
            end - start;


        const days =
            Math.floor(
                diff /
                (1000 * 60 * 60 * 24)
            ) + 1;


        html += `

            <div
                class="card"
                onclick="selectPeriod(${index})">

                <div>

                    <div class="card-title">

                        ${formatDate(period.start)}

                        ～

                        ${formatDate(period.end)}

                    </div>

                    <div class="card-sub">

                        ${days}日間

                    </div>

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
            onclick="renderCompanyDetail()">

            ← 企業詳細に戻る

        </button>

    `;


    app.innerHTML = html;
}

function selectPeriod(index) {

    const companyInfo =
        data[selectedRegion]
            [selectedPrefecture]
            [selectedCompany];


    const period =
        companyInfo.periods[index];


    startDate =
        period.start;

    endDate =
        period.end;


    renderConfirm();
}


/* =========================================================
   カレンダー表示
========================================================= */

function renderCalendar(mode) {

    updateBreadcrumb();


    let message = "";


    if (mode === "start") {

        message = `
            インターンの
            <strong>開始日</strong>
            を選択してください。
        `;

    } else {

        message = `
            インターンの
            <strong>終了日</strong>
            を選択してください。
        `;
    }


    const firstDay =
        new Date(
            calendarYear,
            calendarMonth,
            1
        ).getDay();


    const lastDate =
        new Date(
            calendarYear,
            calendarMonth + 1,
            0
        ).getDate();


    const monthText =
        `${calendarYear}年${calendarMonth + 1}月`;


    let html = `

        <h2 class="step-title">
            インターン期間を選択
        </h2>


        <div class="date-box">

            <div class="date-message">
                ${message}
            </div>


            <div class="calendar-header">

                <button
                    class="month-button"
                    onclick="changeMonth(-1, '${mode}')">

                    ‹

                </button>


                <div class="month-title">
                    ${monthText}
                </div>


                <button
                    class="month-button"
                    onclick="changeMonth(1, '${mode}')">

                    ›

                </button>

            </div>


            <div class="weekdays">

                <div>日</div>
                <div>月</div>
                <div>火</div>
                <div>水</div>
                <div>木</div>
                <div>金</div>
                <div>土</div>

            </div>


            <div class="calendar-grid">
    `;


    /* 月初までの空白 */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        html += `
            <div class="calendar-empty"></div>
        `;
    }


    /* 日付 */

    for (
        let day = 1;
        day <= lastDate;
        day++
    ) {

        const date =
            createDateString(
                calendarYear,
                calendarMonth,
                day
            );


        let classes =
            "calendar-day";


        /*
           開始日
        */

        if (
            startDate === date
        ) {

            classes +=
                " selected-start";
        }


        /*
           終了日
        */

        if (
            endDate === date
        ) {

            classes +=
                " selected-end";
        }


        /*
           開始日～終了日の間
        */

        if (
            startDate &&
            endDate &&
            date > startDate &&
            date < endDate
        ) {

            classes +=
                " in-range";
        }


        /*
           終了日を選ぶとき、

           開始日より前の日は
           選択できない
        */

        let disabled = false;


        if (
            mode === "end" &&
            startDate &&
            date < startDate
        ) {

            disabled = true;

            classes +=
                " disabled";
        }


        html += `

            <button
                class="${classes}"
                ${disabled ? "disabled" : ""}
                onclick="selectCalendarDate('${date}', '${mode}')">

                ${day}

            </button>

        `;
    }


    html += `

            </div>


            <div class="selected-period">

                <div class="period-card">

                    <span class="period-label">
                        開始日
                    </span>

                    <span class="period-date">

                        ${
                            startDate
                            ? formatDate(startDate)
                            : "未選択"
                        }

                    </span>

                </div>


                <div class="period-card">

                    <span class="period-label">
                        終了日
                    </span>

                    <span class="period-date">

                        ${
                            endDate
                            ? formatDate(endDate)
                            : "未選択"
                        }

                    </span>

                </div>

            </div>


            <button
                class="button back-button"
                onclick="renderCompanyDetail()">

                ← 企業詳細に戻る

            </button>

        </div>

    `;


    app.innerHTML = html;
}


/* =========================================================
   カレンダーの日付選択
========================================================= */

function selectCalendarDate(date, mode) {


    /*
       開始日を選択
    */

    if (mode === "start") {

        startDate = date;

        endDate = null;


        /*
           開始日を選択したら、
           自動的に終了日選択へ
        */

        renderCalendar("end");

        return;
    }


    /*
       終了日を選択
    */

    if (mode === "end") {

        /*
           開始日より前は選択不可
        */

        if (
            startDate &&
            date < startDate
        ) {

            return;
        }


        endDate = date;


        /*
           両方選択できたら
           確認画面へ
        */

        renderConfirm();

        return;
    }
}


/* =========================================================
   月を変更
========================================================= */

function changeMonth(direction, mode) {

    calendarMonth += direction;


    if (calendarMonth < 0) {

        calendarMonth = 11;

        calendarYear--;
    }


    if (calendarMonth > 11) {

        calendarMonth = 0;

        calendarYear++;
    }


    renderCalendar(mode);
}


/* =========================================================
   日付文字列を作成
========================================================= */

function createDateString(
    year,
    month,
    day
) {

    const m =
        String(month + 1)
            .padStart(2, "0");

    const d =
        String(day)
            .padStart(2, "0");


    return `${year}-${m}-${d}`;
}


/* =========================================================
   日付表示を日本語にする
========================================================= */

function formatDate(dateString) {

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
}


/* =========================================================
   予約内容確認
========================================================= */

function renderConfirm() {

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
            インターン内容の確認
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
                    期間
                </div>

                <div class="confirm-value">
                    ${days}日間
                </div>

            </div>


            <button
                class="button"
                onclick="reservationComplete()">

                この内容で申し込む

            </button>


           <button
                class="button back-button"
                onclick="renderAvailablePeriods()">
            
                ← 期間を変更する
            
            </button>


        </div>

    `;


    app.innerHTML = html;
}


/* =========================================================
   申込完了
========================================================= */

function reservationComplete() {

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
}


/* =========================================================
   最初に戻る
========================================================= */

function resetAll() {

    selectedRegion = "";

    selectedPrefecture = "";

    selectedCompany = "";

    startDate = null;

    endDate = null;

    calendarYear = 2026;

    calendarMonth = 7;

    renderRegions();
}


/* =========================================================
   最初の画面
========================================================= */

renderRegions();
