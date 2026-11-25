/* 志工服務管理平臺原型：前台（index.html）與後台（admin.html）共用的示範資料與暫存機制。
   兩頁都以 <script src="data.js"></script> 載入，之後用 window.HCV 取用。
   所有人名、電話、信箱都是虛構的。原型的「今天」固定為 HCV.TODAY。 */
(function () {
  'use strict';

  var TODAY = '2026-10-14'; // 星期三

  var SEED = {
    today: TODAY,
    currentVolunteerId: 'V001',

    /* 大組：簽核與代班的範圍（代班範圍為系統參數，預設限該班服務地點所屬的大組）。
       志工的大組由所屬組別推得（HCV.unitIdsOf），可同時屬於兩個大組 */
    units: [
      { id: 'U1', name: '總圖' },
      { id: 'U2', name: '文化局' }
    ],

    /* 服務地點：排班、簽到、報表統計的單位。以下每個欄位都是「地點層級」可自行調整的設定（在後台「館別與系統參數」逐列編輯）。
       管理者不存在這裡：由「帳號與權限」裡地點管理者的授權服務地點推得（HCV.managersOf），兩邊改一邊另一邊跟著變；可以先建地點、之後再補管理者。
       scheduleMode＝新增場次時預設帶入的排班方式（自由報名｜管理者指派），各場次可再改；monthlyMaxSlots＝每位志工在這個地點單月最多排幾個時段。
       ipRanges＝館內網路 IP 範圍（館內電腦帳密簽到依此判定地點；示範值用文件專用的保留位址）；
       qrLanOnly＝現場 QR 簽到是否也限館內網路（預設不限）；wifiName＝館內 Wi-Fi 名稱、wifiNote＝連線補充（都選填，限館內網路時印在 QR 下方、顯示在志工的提示上）。地點不能刪除（志工、班表、出勤都參照它），只能停用（disabled） */
    locations: [
      { id: 'L1', unitId: 'U1', name: '總圖書館', reportColumn: '圖書館', scheduleMode: '自由報名', needApproval: false, checkinCap: true, monthlyDeadlineDay: 25, monthlyMaxSlots: 12, ipRanges: ['203.0.113.0/24'], qrLanOnly: false, wifiName: 'HCPL-Free', wifiNote: '密碼請洽一樓服務台' },
      { id: 'L2', unitId: 'U2', name: '演藝廳', reportColumn: '演藝廳', scheduleMode: '管理者指派', needApproval: false, checkinCap: true, monthlyDeadlineDay: 20, monthlyMaxSlots: 8, ipRanges: [], qrLanOnly: false },
      { id: 'L3', unitId: 'U2', name: '縣史館', reportColumn: '縣史館', scheduleMode: '自由報名', needApproval: true, checkinCap: false, monthlyDeadlineDay: 25, monthlyMaxSlots: 10, ipRanges: [], qrLanOnly: false },
      { id: 'L4', unitId: 'U2', name: '美術館', reportColumn: '美術館', scheduleMode: '自由報名', needApproval: false, checkinCap: true, monthlyDeadlineDay: 25, monthlyMaxSlots: 10, ipRanges: ['198.51.100.16/28'], qrLanOnly: false },
      { id: 'L5', unitId: 'U2', name: '文化局總服務台', reportColumn: '服務台', scheduleMode: '管理者指派', needApproval: false, checkinCap: true, monthlyDeadlineDay: 20, monthlyMaxSlots: 10, ipRanges: [], qrLanOnly: false },
      { id: 'L6', unitId: 'U2', name: '兒少館', reportColumn: '', scheduleMode: '自由報名', needApproval: false, checkinCap: true, monthlyDeadlineDay: 25, monthlyMaxSlots: 10, ipRanges: [], qrLanOnly: false }
    ],
    /* 文化局月報、年報「日常值勤」的七個欄位；每個服務地點要對應到其中一欄 */
    reportColumns: ['月例／會議', '服務台', '美術館', '推廣課', '圖書館', '演藝廳', '縣史館'],

    /* 志工組別：一名志工可同時屬於多個組別；組別可由管理者自訂新增。
       annualRequiredHours＝該組別的年度服務時數門檻（館方 2026-09-24 決議依組別設定；只影響達標顯示，沒有任何強制） */
    groups: [
      { id: 'G1', unitId: 'U1', name: '導覽組', leader: '許文龍', leaderPhone: '0912-000-101', annualRequiredHours: 144 },
      { id: 'G2', unitId: 'U1', name: '典藏組', leader: '蔡美玲', leaderPhone: '0912-000-102', annualRequiredHours: 144 },
      { id: 'G3', unitId: 'U1', name: '閱覽組', leader: '鄭國華', leaderPhone: '0912-000-103', annualRequiredHours: 144 },
      { id: 'G4', unitId: 'U1', name: '故事志工', leader: '劉曉君', leaderPhone: '0912-000-104', annualRequiredHours: 144 },
      { id: 'G5', unitId: 'U2', name: '演藝廳', leader: '謝宗翰', leaderPhone: '0912-000-105', annualRequiredHours: 120 },
      { id: 'G6', unitId: 'U2', name: '縣史館', leader: '何秀蘭', leaderPhone: '0912-000-106', annualRequiredHours: 144 },
      { id: 'G7', unitId: 'U2', name: '美術館', leader: '羅文欽', leaderPhone: '0912-000-107', annualRequiredHours: 120 },
      { id: 'G8', unitId: 'U2', name: '總服務台', leader: '高玉芳', leaderPhone: '0912-000-108', annualRequiredHours: 144 },
      { id: 'G9', unitId: 'U2', name: '兒少館', leader: '潘俊傑', leaderPhone: '0912-000-109', annualRequiredHours: 96 }
    ],

    /* 志工主檔。志工狀態只有在職｜停權｜離職；停權只能由文化局總管理者手動設定，系統不會自動停權。
       status 為「審查中」的幾筆是還沒通過的申請（階段見 applyStage），不算志工、不出現在志工名冊，只在後台「新進志工審查」看得到。
       cardNo＝借閱證號：志工名冊的唯一鍵（新竹的借閱證號就是身分證字號，館方 2026-11-10），資料庫加密、只做完整比對。
       no＝志工編號：館方管理用的選填欄位，可以空白（V011 示範沒有編號）。
       idLast4＝申請時填的身分證字號末四碼（前台查申請進度要用）。unitId 只是示範資料的主要大組，畫面上的大組一律由組別推得 */
    volunteers: [
      { id: 'V001', no: 'HC-0107', name: '王淑芬', unitId: 'U1', groupIds: ['G3', 'G4'], locationIds: ['L1'], status: '在職', joinYear: 2019, phone: '0933-100-001', email: 'shufen@example.com', cardNo: 'A00010701' },
      { id: 'V002', no: 'HC-0112', name: '陳志明', unitId: 'U1', groupIds: ['G3'], locationIds: ['L1'], status: '在職', joinYear: 2021, phone: '0933-100-002', email: 'chiming@example.com', cardNo: 'A00011202' },
      { id: 'V003', no: 'HC-0125', name: '林美惠', unitId: 'U1', groupIds: ['G1', 'G3'], locationIds: ['L1'], status: '在職', joinYear: 2017, phone: '0933-100-003', email: 'meihui@example.com', cardNo: 'A00012503' },
      { id: 'V004', no: 'HC-0131', name: '張秀英', unitId: 'U1', groupIds: ['G3', 'G4'], locationIds: ['L1'], status: '在職', joinYear: 2022, phone: '0933-100-004', email: '', cardNo: 'A00013104' },
      { id: 'V005', no: 'HC-0138', name: '李建國', unitId: 'U1', groupIds: ['G2', 'G6'], locationIds: ['L1', 'L3'], status: '在職', joinYear: 2015, phone: '0933-100-005', email: 'jianguo@example.com', cardNo: 'A00013805' },
      { id: 'V006', no: 'HC-0144', name: '黃子軒', unitId: 'U1', groupIds: ['G3'], locationIds: ['L1'], status: '在職', joinYear: 2025, phone: '0933-100-006', email: 'zixuan@example.com', cardNo: 'A00014406', fixedEarlyLeave: true },
      { id: 'V007', no: 'HC-0203', name: '吳麗華', unitId: 'U2', groupIds: ['G7'], locationIds: ['L4'], status: '在職', joinYear: 2018, phone: '0933-100-007', email: 'lihua@example.com', cardNo: 'A00020307' },
      { id: 'V008', no: 'HC-0209', name: '趙大偉', unitId: 'U2', groupIds: ['G7', 'G6'], locationIds: ['L4', 'L3'], status: '在職', joinYear: 2020, phone: '0933-100-008', email: 'dawei@example.com', cardNo: 'A00020908' },
      { id: 'V009', no: 'HC-0215', name: '周玉梅', unitId: 'U2', groupIds: ['G5'], locationIds: ['L2'], status: '在職', joinYear: 2016, phone: '0933-100-009', email: 'yumei@example.com', cardNo: 'A00021509' },
      { id: 'V010', no: 'HC-0221', name: '徐文雄', unitId: 'U2', groupIds: ['G8'], locationIds: ['L5'], status: '停權', joinYear: 2014, phone: '0933-100-010', email: 'wenxiong@example.com', cardNo: 'A00022110', suspendFrom: '2026-09-01', suspendTo: '2026-12-31', suspendNote: '2026-09-01～2026-12-31　連續缺勤經聯繫未改善', suspendBy: '陳怡安' },
      { id: 'V011', no: '', name: '曾雅琪', unitId: 'U2', groupIds: ['G9'], locationIds: ['L6'], status: '在職', joinYear: 2023, phone: '0933-100-011', email: 'yaqi@example.com', cardNo: 'A00023011' },
      /* consentAt＝申請時勾選同意「個人資料蒐集告知事項」的時間（志工申請表必勾，申請紀錄保存這個時間） */
      { id: 'V012', no: '', name: '蘇柏翰', unitId: 'U1', groupIds: ['G1'], locationIds: ['L1'], status: '審查中', joinYear: 2026, phone: '0933-100-012', email: 'bohan@example.com', cardNo: 'A00030112', idLast4: '0112', applyDate: '2026-10-08', applyStage: '待面試', consentAt: '2026-10-08 10:15' },
      { id: 'V013', no: '', name: '葉佳穎', unitId: 'U2', groupIds: ['G7'], locationIds: ['L4'], status: '審查中', joinYear: 2026, phone: '0933-100-013', email: 'jiaying@example.com', cardNo: 'A00030213', idLast4: '0213', applyDate: '2026-10-11', applyStage: '資料審核中', consentAt: '2026-10-11 20:42' },
      { id: 'V014', no: 'HC-0098', name: '郭金水', unitId: 'U1', groupIds: ['G2'], locationIds: ['L1'], status: '離職', joinYear: 2012, phone: '0933-100-014', email: '', cardNo: 'A00009814' },
      /* 曾離職的人重新申請：通過後恢復原本那筆志工資料（HC-0098），不另建新的一筆 */
      { id: 'V015', no: '', name: '郭金水', unitId: 'U1', groupIds: ['G2'], locationIds: ['L1'], status: '審查中', joinYear: 2026, phone: '0933-100-014', email: 'jinshui@example.com', cardNo: 'A00009814', idLast4: '9814', applyDate: '2026-10-12', applyStage: '待面試', consentAt: '2026-10-12 09:30' }
    ],

    /* 服務時段（程式裡的鍵名沿用 slotTemplates／templateId）：跟著服務地點走（locationId），在後台「排班與時段管理」的「服務時段」分頁維護。
       hours＝計算時數（預設依起訖時間算，館方可改；全程到班就發這個時數）；graceMinutes＝簽到緩衝（緩衝內簽到算準時，從班表開始算）；
       unitMinutes＝時數計算單位（30＝半小時、60＝一小時，預設半小時）；latestCheckin＝最晚可簽到時間（過了這個時間不能簽到，剛好這個時間可以；空白＝不設）；
       openMinutes＝簽到開放（班表開始前幾分鐘起可以簽到）；closeMinutes＝簽退截止（班表結束後幾分鐘內可以簽退）；
       openGroupIds＝開放組別（空的＝這個地點的志工都可報名；各館每個時段開放的組別原本就固定，館方 2026-11-06）。
       五個出勤規則與開放組別在新增場次時帶入場次，每一場可再改；改服務時段的這些值只影響之後新建的場次（館方 2026-10-21）。
       改起訖或計算時數時，由管理者選要不要一併套用到今天以後還沒開始的場次。
       disabled＝已停用：不能再用它新增場次，已排的場次照常；有場次用過的服務時段不能刪，只能停用。
       固定要提早離開的志工（例如學生趕校車）就另開一個服務時段，用名稱區別（例：「下午早退」13:00–16:30），在那個服務時段的結束時間簽退就是正常簽退、不記點。
       現場 QR 以「服務地點＋服務時段」為單位、固定不變，印一次每天都能用 */
    slotTemplates: [
      { id: 'T1', locationId: 'L1', name: '上午', start: '09:00', end: '12:00', hours: 3, graceMinutes: 15, unitMinutes: 60, latestCheckin: '10:00', openMinutes: 30, closeMinutes: 30, openGroupIds: [] },
      { id: 'T2', locationId: 'L1', name: '下午', start: '13:00', end: '17:00', hours: 4, graceMinutes: 0, unitMinutes: 60, latestCheckin: '', openMinutes: 30, closeMinutes: 30, openGroupIds: [] },
      { id: 'T3', locationId: 'L1', name: '下午早退', start: '13:00', end: '16:30', hours: 3.5, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30, openGroupIds: [] },
      { id: 'T4', locationId: 'L1', name: '晚上', start: '18:00', end: '21:00', hours: 3, graceMinutes: 0, unitMinutes: 60, latestCheckin: '', openMinutes: 30, closeMinutes: 30, openGroupIds: ['G1'] },
      { id: 'T21', locationId: 'L2', name: '晚上', start: '18:00', end: '21:00', hours: 3, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T31', locationId: 'L3', name: '上午', start: '09:00', end: '12:00', hours: 3, graceMinutes: 10, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T32', locationId: 'L3', name: '下午', start: '13:00', end: '17:00', hours: 4, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T41', locationId: 'L4', name: '上午', start: '09:00', end: '12:00', hours: 3, graceMinutes: 10, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T42', locationId: 'L4', name: '下午', start: '13:00', end: '17:00', hours: 4, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T51', locationId: 'L5', name: '上午', start: '09:00', end: '12:00', hours: 3, graceMinutes: 10, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T52', locationId: 'L5', name: '下午', start: '13:00', end: '17:00', hours: 4, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T61', locationId: 'L6', name: '上午', start: '09:00', end: '12:00', hours: 3, graceMinutes: 10, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 },
      { id: 'T62', locationId: 'L6', name: '下午', start: '13:00', end: '17:00', hours: 4, graceMinutes: 0, unitMinutes: 30, latestCheckin: '', openMinutes: 30, closeMinutes: 30 }
    ],

    /* 班表場次。type＝排班方式：自由報名｜管理者指派（新增時帶入地點的預設，可改）。固定班不是第三種方式，是長期的管理者指派
       （後台「批次匯入固定班」一次指派一整段期間）。booked＝已排入的志工；pending＝已報名、等管理者核可（只有 needApproval 的地點會有，待核可也佔名額）。
       openGroupIds＝開放組別（新增時帶入服務時段的值，可改；空的＝該服務地點的志工都可報名）。同一服務地點同一天同一個服務時段只能有一個場次。
       published:false＝草稿（志工看不到）；assignedPending＝草稿期間指派的志工，等發布時才寄排班完成通知信。
       場次上沒寫的出勤規則（緩衝、計算單位、最晚可簽到、簽到開放、簽退截止）與起訖、計算時數沿用服務時段，見 HCV.rule */
    slots: [
      { id: 'S101', date: '2026-10-14', locationId: 'L1', templateId: 'T1', capacity: 3, type: '管理者指派', booked: ['V001', 'V002'], pending: [] },
      { id: 'S102', date: '2026-10-14', locationId: 'L1', templateId: 'T2', capacity: 3, type: '自由報名', booked: ['V003', 'V005'], pending: [] },
      { id: 'S103', date: '2026-10-14', locationId: 'L1', templateId: 'T3', capacity: 1, type: '管理者指派', booked: ['V006'], pending: [] },
      { id: 'S104', date: '2026-10-14', locationId: 'L4', templateId: 'T41', capacity: 2, type: '自由報名', booked: ['V007'], pending: [] },
      { id: 'S105', date: '2026-10-15', locationId: 'L1', templateId: 'T1', capacity: 3, type: '自由報名', booked: ['V003'], pending: [] },
      { id: 'S106', date: '2026-10-15', locationId: 'L1', templateId: 'T4', capacity: 2, type: '自由報名', booked: [], pending: [], openGroupIds: ['G1'] },
      { id: 'S107', date: '2026-10-17', locationId: 'L1', templateId: 'T1', capacity: 3, type: '管理者指派', booked: ['V001', 'V002', 'V004'], pending: [] },
      { id: 'S108', date: '2026-10-17', locationId: 'L1', templateId: 'T2', capacity: 3, type: '自由報名', booked: ['V005'], pending: [] },
      { id: 'S109', date: '2026-10-18', locationId: 'L1', templateId: 'T1', capacity: 3, type: '自由報名', booked: ['V003', 'V005', 'V002'], pending: [] },
      { id: 'S110', date: '2026-10-21', locationId: 'L1', templateId: 'T1', capacity: 3, type: '管理者指派', booked: ['V001', 'V002'], pending: [] },
      { id: 'S111', date: '2026-10-22', locationId: 'L1', templateId: 'T2', capacity: 3, type: '自由報名', booked: [], pending: [] },
      { id: 'S112', date: '2026-10-24', locationId: 'L1', templateId: 'T1', capacity: 3, type: '管理者指派', booked: ['V001', 'V004'], pending: [] },
      { id: 'S113', date: '2026-10-24', locationId: 'L3', templateId: 'T32', capacity: 2, type: '自由報名', booked: [], pending: ['V008'] },
      { id: 'S114', date: '2026-10-25', locationId: 'L4', templateId: 'T42', capacity: 2, type: '自由報名', booked: ['V007'], pending: [] },
      { id: 'S115', date: '2026-10-28', locationId: 'L1', templateId: 'T1', capacity: 3, type: '管理者指派', booked: ['V001', 'V002'], pending: [] },
      { id: 'S116', date: '2026-10-29', locationId: 'L2', templateId: 'T21', capacity: 4, type: '管理者指派', booked: ['V009'], pending: [] },
      { id: 'S117', date: '2026-10-31', locationId: 'L1', templateId: 'T2', capacity: 3, type: '自由報名', booked: ['V003'], pending: [] },
      /* 周玉梅長假（LV03，11/1～2/28）期間的班：代理人曾雅琪 11/12 晚上本來就排在同一班（S119），接不了，所以 S119 送出時就列為核准後轉空缺（長假釋出） */
      { id: 'S118', date: '2026-11-05', locationId: 'L2', templateId: 'T21', capacity: 4, type: '管理者指派', booked: ['V009'], pending: [] },
      { id: 'S119', date: '2026-11-12', locationId: 'L2', templateId: 'T21', capacity: 4, type: '管理者指派', booked: ['V009', 'V011'], pending: [] }
    ],

    /* 出勤紀錄。status：正常｜緩衝內到班｜遲到｜早退｜缺勤｜未報名簽到｜補登。
       同一場次第一筆打卡是簽到、最後一筆是簽退（之後再打卡會更新簽退時間）。
       時數：提早到與緩衝內到班從班表開始算；超過緩衝從簽到後第一個計算單位整點起算；最多算到班表結束；每一筆依時數計算單位無條件捨去（HCV.calc）。
       source：現場QR｜借閱證條碼（館內簽到站或館員代刷）｜館內電腦帳密｜管理者代登｜管理者補登 */
    attendance: [
      { id: 'A001', volunteerId: 'V001', slotId: null, date: '2026-10-10', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '08:52', checkOut: '12:03', countedFrom: '09:00', countedTo: '12:00', hours: 3, status: '正常', source: '現場QR' },
      { id: 'A002', volunteerId: 'V001', slotId: null, date: '2026-10-07', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '09:07', checkOut: '12:00', countedFrom: '09:00', countedTo: '12:00', hours: 3, status: '緩衝內到班', source: '現場QR' },
      { id: 'A003', volunteerId: 'V001', slotId: null, date: '2026-10-03', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '09:26', checkOut: '12:01', countedFrom: '10:00', countedTo: '12:00', hours: 2, status: '遲到', source: '借閱證條碼' },
      { id: 'A004', volunteerId: 'V001', slotId: null, date: '2026-09-30', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '08:58', checkOut: '', countedFrom: '09:00', countedTo: '', hours: 0, status: '正常', source: '現場QR' },
      { id: 'A005', volunteerId: 'V006', slotId: null, date: '2026-10-10', locationId: 'L1', slotName: '下午早退 13:00–16:30', checkIn: '12:55', checkOut: '16:30', countedFrom: '13:00', countedTo: '16:30', hours: 3.5, status: '正常', source: '現場QR' },
      { id: 'A006', volunteerId: 'V002', slotId: null, date: '2026-10-10', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '', checkOut: '', countedFrom: '', countedTo: '', hours: 0, status: '缺勤', source: '' },
      { id: 'A007', volunteerId: 'V004', slotId: null, date: '2026-10-10', locationId: 'L1', slotName: '上午 09:00–12:00', checkIn: '09:02', checkOut: '12:00', countedFrom: '09:00', countedTo: '12:00', hours: 3, status: '未報名簽到', source: '現場QR', decision: '待決定', note: '當日未排班但到場簽到，由管理者決定是否發給時數' },
      { id: 'A008', volunteerId: 'V007', slotId: null, date: '2026-10-11', locationId: 'L4', slotName: '下午 13:00–17:00', checkIn: '13:00', checkOut: '16:20', countedFrom: '13:00', countedTo: '16:00', hours: 3, status: '早退', source: '現場QR' },
      { id: 'A009', volunteerId: 'V003', slotId: null, date: '2026-10-11', locationId: 'L1', slotName: '下午 13:00–17:00', checkIn: '12:50', checkOut: '17:02', countedFrom: '13:00', countedTo: '17:00', hours: 4, status: '正常', source: '管理者代登', note: '志工未帶手機，由館員於公用電腦代為登記' }
    ],
    /* 今天（HCV.TODAY）登入志工 V001 的班別還沒簽到，前台「現場簽到退」就是走這一班（S101） */

    /* 志工端送出的補登申請。status：處理中｜已補登｜已駁回。
       補登一律掛在既有的那一班：志工有排班、而且出勤異常（缺勤、有簽到沒簽退、遲到、早退）的那一筆出勤紀錄（attendanceId，必有）。
       那天沒有場次就不能補登，系統不會自動建場次（2026-11-10）。志工端從自己的異常紀錄挑一筆，不自填日期、地點、時段。
       管理者在後台「出勤查詢與異常」的「補登申請」分頁補登或駁回，結果寄信通知志工 */
    makeupRequests: [
      { id: 'MR01', volunteerId: 'V001', attendanceId: 'A004', date: '2026-09-30', locationId: 'L1', templateId: 'T1', checkIn: '', checkOut: '12:00', reason: '當日 12:00 服務結束，因故未完成簽退', status: '處理中', createdAt: '2026-10-01 08:30' },
      { id: 'MR02', volunteerId: 'V002', attendanceId: 'A006', date: '2026-10-10', locationId: 'L1', templateId: 'T1', checkIn: '09:00', checkOut: '12:00', reason: '手機沒電，簽到與簽退都沒有完成，當天有跟組長說', status: '處理中', createdAt: '2026-10-11 13:10' }
    ],

    /* 年度累計（登入志工 V001 的儀表板用）：排班服務 84.5 小時＋活動服務 12 小時＝96.5；受訓時數另計、不併入 */
    hourSummary: {
      V001: { year: 115, shiftHours: 84.5, activityHours: 12, trainingHours: 6 },
      V002: { year: 115, shiftHours: 61, activityHours: 3, trainingHours: 6 },
      V003: { year: 115, shiftHours: 132.5, activityHours: 9, trainingHours: 9 },
      V004: { year: 115, shiftHours: 40, activityHours: 0, trainingHours: 3 },
      V005: { year: 115, shiftHours: 150, activityHours: 6, trainingHours: 6 },
      V006: { year: 115, shiftHours: 28, activityHours: 0, trainingHours: 3 },
      V007: { year: 115, shiftHours: 98, activityHours: 12, trainingHours: 6 },
      V008: { year: 115, shiftHours: 76.5, activityHours: 0, trainingHours: 6 },
      V009: { year: 115, shiftHours: 110, activityHours: 8, trainingHours: 6 },
      V010: { year: 115, shiftHours: 22, activityHours: 0, trainingHours: 0 },
      V011: { year: 115, shiftHours: 55, activityHours: 4, trainingHours: 6 }
    },

    /* 請假。status 依序：待代理人回覆 → 待管理者審核 →（請假一個月以上再加一關：待文化局簽核）→ 已核准｜已駁回｜代理人婉拒｜已撤回。
       已撤回＝志工在待代理人回覆、待管理者審核、待文化局簽核三種狀態自己按「撤回」（withdrawnAt），原排班不變（2026-11-10）。
       長假選「指定一位代理人」時，代理人接不了的班（不在代班範圍、不在職、同時段已有班）送出時自動轉為空缺班、標「長假釋出」：
       releasedSlotIds＝轉為空缺的場次，其餘的班改給代理人。
       事由與代理人都是必填；代理人範圍依系統參數（預設限該班服務地點所屬的大組）；代理人同意後才會送到管理者。
       長假（isLong）以起訖日申請，proxyMode：指定一位代理人（承接期間全部的班）｜轉為空缺班（期間的班由管理者安排，代理人免填） */
    leaves: [
      { id: 'LV01', volunteerId: 'V002', slotIds: ['S107'], from: '2026-10-17', to: '2026-10-17', reason: '家中長輩回診', proxyId: 'V003', status: '待管理者審核', proxyRepliedAt: '2026-10-12 20:14', createdAt: '2026-10-12 18:30', isLong: false, late: false },
      { id: 'LV02', volunteerId: 'V005', slotIds: ['S108'], from: '2026-10-17', to: '2026-10-17', reason: '出國', proxyId: 'V002', status: '待代理人回覆', createdAt: '2026-10-13 09:05', isLong: false, late: false },
      { id: 'LV03', volunteerId: 'V009', slotIds: [], from: '2026-11-01', to: '2027-02-28', reason: '術後休養', proxyId: 'V011', proxyMode: '指定一位代理人', releasedSlotIds: ['S119'], status: '待文化局簽核', proxyRepliedAt: '2026-10-05 11:20', managerApprovedAt: '2026-10-06 15:00', createdAt: '2026-10-05 10:00', isLong: true, late: false },
      { id: 'LV04', volunteerId: 'V001', slotIds: [], from: '2026-09-23', to: '2026-09-23', reason: '感冒發燒', proxyId: 'V002', status: '已核准', proxyRepliedAt: '2026-09-22 21:00', managerApprovedAt: '2026-09-22 22:10', createdAt: '2026-09-22 20:40', isLong: false, late: true },
      /* 登入志工 V001 被指定為代理人、還沒回覆：志工端「代班」分頁的「別人邀請我的代班」看得到（標「請假代理」） */
      { id: 'LV05', volunteerId: 'V003', slotIds: ['S105'], from: '2026-10-15', to: '2026-10-15', reason: '眼科回診', proxyId: 'V001', status: '待代理人回覆', createdAt: '2026-10-13 21:05', isLong: false, late: true },
      /* 志工自己撤回的請假單：原排班不變，後台請假審核的「已撤回」分頁看得到 */
      { id: 'LV06', volunteerId: 'V007', slotIds: ['S114'], from: '2026-10-25', to: '2026-10-25', reason: '家庭聚會（已改期）', proxyId: 'V008', status: '已撤回', createdAt: '2026-10-12 10:20', withdrawnAt: '2026-10-12 19:05', isLong: false, late: false }
    ],

    /* 代班。mode：公開徵求｜指定人選。status：徵求中｜待對方回覆｜已成立｜已取消｜找不到人。
       找不到人時，系統通知代班範圍內（預設同大組）當天沒有排班的志工（notifiedIds），同一對象同一時段最多通知 3 次 */
    substitutions: [
      { id: 'SB01', fromVolunteerId: 'V004', slotId: 'S112', mode: '公開徵求', toVolunteerId: null, status: '徵求中', notifiedIds: ['V002', 'V003', 'V005'], notifyCount: 1, createdAt: '2026-10-13 14:00' },
      { id: 'SB02', fromVolunteerId: 'V003', slotId: 'S117', mode: '指定人選', toVolunteerId: 'V001', status: '待對方回覆', notifiedIds: [], notifyCount: 0, createdAt: '2026-10-13 16:20' },
      { id: 'SB03', fromVolunteerId: 'V002', slotId: null, slotLabel: '2026-10-03 上午 總圖書館', mode: '指定人選', toVolunteerId: 'V005', status: '已成立', notifiedIds: [], notifyCount: 0, createdAt: '2026-09-29 10:00' }
    ],

    /* 違規記點：只做紀錄與提醒，系統不自動停權。source：出勤異常轉入｜管理者開立。status：有效｜已撤銷。
       每一筆從記點當天起算，滿「違規記點保存期限」（系統參數，預設 3 個月）自動失效，不再顯示於累計（HCV.pointExpiry、HCV.pointExpired） */
    /* builtin＝系統內建的三種（遲到、早退、缺勤）：一對一對應出勤異常的自動帶入，可以改點數、不能刪。
       館方新增的類型一律由管理者開立（auto:false），新增表單沒有「由出勤異常自動帶入」的選項（2026-11-10） */
    violationTypes: [
      { id: 'VT1', name: '遲到（超過緩衝時間）', points: 1, auto: true, builtin: true },
      { id: 'VT2', name: '早退', points: 1, auto: true, builtin: true },
      { id: 'VT3', name: '缺勤（未請假也未到）', points: 2, auto: true, builtin: true },
      { id: 'VT4', name: '其他（由管理者說明）', points: 1, auto: false }
    ],
    violations: [
      { id: 'VR01', volunteerId: 'V001', date: '2026-10-03', typeId: 'VT1', points: 1, source: '出勤異常轉入', status: '有效', note: '上午場 09:26 簽到', by: '系統' },
      { id: 'VR02', volunteerId: 'V002', date: '2026-10-10', typeId: 'VT3', points: 2, source: '出勤異常轉入', status: '有效', note: '', by: '系統' },
      { id: 'VR03', volunteerId: 'V007', date: '2026-10-11', typeId: 'VT2', points: 1, source: '出勤異常轉入', status: '已撤銷', note: '事後補請假核准，由地點管理者撤銷', by: '吳佩珊' },
      { id: 'VR04', volunteerId: 'V010', date: '2026-08-20', typeId: 'VT3', points: 2, source: '出勤異常轉入', status: '有效', note: '', by: '系統' },
      { id: 'VR05', volunteerId: 'V010', date: '2026-08-27', typeId: 'VT3', points: 2, source: '出勤異常轉入', status: '有效', note: '', by: '系統' },
      { id: 'VR06', volunteerId: 'V001', date: '2026-06-20', typeId: 'VT2', points: 1, source: '出勤異常轉入', status: '有效', note: '下午場 16:10 簽退', by: '系統' }
    ],

    /* 活動。kind：教育訓練｜計時數活動。教育訓練的受訓時數不併入服務時數、另外統計；計時數活動（會議、導覽、支援）計入服務時數。
       time＝'HH:MM–HH:MM'。報名與取消報名都到活動開始時間為止，開始後按鈕變「已開始」不能按；管理者在報名名單手動加入到活動結束前都可以；
       活動 QR 從活動當天 00:00 起受理、到活動結束時間失效（2026-11-10）。原型的「現在」＝HCV.nowStamp()。
       cancelled＝已取消（管理者按「取消活動」、填 cancelReason，通知已報名者；留在清單標「已取消」、不能再報名；已結算的不能取消；不做實體刪除）。
       AC05 示範今天已開始的活動、AC06 示範已取消的活動 */
    activities: [
      { id: 'AC01', title: '新書整理與典藏實務工作坊', kind: '教育訓練', date: '2026-10-28', time: '09:00–12:00', hours: 3, locationId: 'L1', capacity: 15, enrolled: ['V002', 'V003', 'V004', 'V005', 'V006', 'V007', 'V008', 'V009', 'V011', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6'], targetGroupIds: [] },
      { id: 'AC02', title: '文化局志工月例會（十一月）', kind: '計時數活動', date: '2026-11-04', time: '14:00–16:00', hours: 2, locationId: 'L5', capacity: 80, enrolled: ['V003', 'V007'], targetGroupIds: [] },
      { id: 'AC03', title: '說故事技巧進階研習', kind: '教育訓練', date: '2026-11-12', time: '13:30–16:30', hours: 3, locationId: 'L1', capacity: 30, enrolled: ['V004'], targetGroupIds: ['G4'] },
      { id: 'AC04', title: '竹塹藝術節展場支援', kind: '計時數活動', date: '2026-11-21', time: '09:00–17:00', hours: 8, locationId: 'L4', capacity: 12, enrolled: ['V001', 'V007', 'V008'], targetGroupIds: [] },
      { id: 'AC05', title: '新進志工職前訓練（十月梯次）', kind: '教育訓練', date: '2026-10-14', time: '08:30–11:30', hours: 3, locationId: 'L1', capacity: 20, enrolled: ['V006', 'V011'], targetGroupIds: [] },
      { id: 'AC06', title: '志工聯誼茶會', kind: '計時數活動', date: '2026-11-07', time: '14:00–16:00', hours: 2, locationId: 'L5', capacity: 40, enrolled: ['V001', 'V003'], targetGroupIds: [], cancelled: true, cancelReason: '場地整修，改期另行公告', cancelledAt: '2026-10-13 10:00' }
    ],

    /* 公告。tag：公告｜活動｜提醒。scope：全體或指定組別。
       image＝這則公告的圖片（選填，{ name, src }；沒上傳的是 null，首頁輪播與公告內頁改用系統預設圖）。首頁最上方的主視覺橫幅是固定圖檔，與公告無關（2026-11-10） */
    announcements: [
      { id: 'N01', date: '2026-10-12', tag: '公告', title: '115 年度各組別服務時數門檻已公告', body: '本年度服務時數門檻依組別設定（一般組別為 144 小時），統計期間為 115 年 1 月 1 日至 12 月 31 日；您適用的門檻請至「服務時數」查看。受訓時數另行統計，不併入服務時數。', scope: '全體', pinned: true,
        attachments: [{ name: '115年度各組別服務時數門檻.pdf', size: '182 KB' }] },
      { id: 'N02', date: '2026-10-08', tag: '活動', title: '竹塹藝術節展場支援開始招募志工', body: '11 月 21 日於美術館辦理，需展場引導志工 12 名，歡迎至「活動報名」登記。', scope: '全體', pinned: false,
        image: { name: '美術館展場.svg', src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'><rect width='640' height='360' fill='%23f3e6e1'/><rect x='60' y='70' width='160' height='200' rx='6' fill='%23fff' stroke='%23c9a99c' stroke-width='6'/><rect x='250' y='50' width='180' height='240' rx='6' fill='%23fff' stroke='%23c9a99c' stroke-width='6'/><rect x='460' y='90' width='120' height='160' rx='6' fill='%23fff' stroke='%23c9a99c' stroke-width='6'/><circle cx='140' cy='150' r='34' fill='%23e8b4a6'/><path d='M270 270 L330 170 L380 240 L410 210 L410 270Z' fill='%2397b8a8'/><rect x='480' y='120' width='80' height='100' fill='%23d9c27a'/><rect y='315' width='640' height='45' fill='%23e5d3cb'/></svg>" },
        attachments: [{ name: '展場引導志工招募說明.pdf', size: '246 KB' }, { name: '美術館展場平面圖.jpg', size: '1.2 MB' }] },
      { id: 'N03', date: '2026-10-01', tag: '提醒', title: '到班請記得簽到與簽退；忘記時請洽服務地點管理者補登', body: '簽到退可使用手機掃描現場張貼的 QR Code（每個時段一張），或在館內簽到站刷志工證（借閱證）條碼。忘記簽到或簽退，請到「我的出勤紀錄」按「申請補登」。', scope: '全體', pinned: false },
      { id: 'N04', date: '2026-09-25', tag: '公告', title: '閱覽組十一月排班開放登記', body: '請閱覽組志工於 10 月 25 日前完成十一月排班登記。', scope: '閱覽組', pinned: false }
    ],

    /* 通知發送紀錄。通道一律 Email。kind：自動｜人工。target：全體｜分組｜個人 */
    notifications: [
      { id: 'M01', time: '2026-10-13 16:20', kind: '自動', event: '代班邀請', target: '個人', to: '王淑芬', subject: '林美惠 邀請您代班：10/31 下午 總圖書館', status: '成功' },
      { id: 'M02', time: '2026-10-13 14:00', kind: '自動', event: '空缺班徵求', target: '分組', to: '總圖 當日未排班志工 3 人', subject: '10/24 上午 總圖書館 徵求代班', status: '成功' },
      { id: 'M03', time: '2026-10-12 18:30', kind: '自動', event: '請假申請', target: '個人', to: '林美惠', subject: '陳志明 請您擔任 10/17 上午的代理人', status: '成功' },
      { id: 'M04', time: '2026-10-09 10:00', kind: '人工', event: '公告通知', target: '分組', to: '閱覽組 共 5 人', subject: '十一月排班開放登記', status: '部分失敗', failed: ['張秀英（未留 Email）'] },
      { id: 'M05', time: '2026-10-01 09:00', kind: '自動', event: '排班完成', target: '個人', to: '王淑芬', subject: '您的十月班表已確認', status: '成功' }
    ],

    /* 休館日：各服務地點的管理者自行設定；scope 為「全部」的是文化局總管理者設的全館預設 */
    holidays: [
      { id: 'H01', date: '2026-10-09', name: '國慶日補假', scope: '全部' },
      { id: 'H02', date: '2026-10-10', name: '國慶日', scope: '全部' },
      { id: 'H03', date: '2026-10-19', name: '每週一休館', scope: 'L1', weekly: '週一' },
      { id: 'H04', date: '2026-10-26', name: '館舍消毒', scope: 'L4' }
    ],

    /* 系統參數（文化局總管理者維護）。全系統一致，不做各地點各自設定；都是可以調整的選項，不寫死；沒有「自動停權門檻」這一項。
       年度服務時數門檻改為各組別自訂（groups.annualRequiredHours），這裡只留新增組別時帶入的預設值；
       跟打卡時間與時數計算有關的（簽到開放、簽退截止、時數計算單位、最晚可簽到時間、簽到緩衝）都在服務時段，各館不同（館方 2026-10-21）；
       QR Code 以「服務地點＋服務時段」為單位、固定不變，沒有有效時間。
       longLeaveMonths＝長假認定（月），照日曆算：結束日在「起始日加 N 個月的前一天」當天或之後就是長假（HCV.isLongLeave） */
    params: {
      annualHoursDefault: 144,
      longLeaveMonths: 1,
      leaveAdvanceDays: 3,
      cancelDeadlineDays: 3,
      substituteSameUnitOnly: true,            // 代班範圍：true＝限該班服務地點所屬的大組｜false＝不限大組
      vacancyNotifyMax: 3,
      noCheckoutRule: '標記異常、待管理者補登',  // 有簽到沒簽退：標記異常、待管理者補登｜以班表結束時間計｜時數不計
      autoPointFromAttendance: true,           // 出勤異常是否自動轉成記點（關掉就只標記、由管理者自行開立）
      violationRetentionMonths: 3,             // 違規記點保存期限（月）：每一筆從發生日期起算，到期自動失效（館方 2026-10-21）
      pointReminderText: '您目前累計 {N} 點違規記點，請準時出勤，避免影響志工資格。',
      loginReaderTypes: ['P'],                 // 可登入的讀者類型（館藏查詢系統的讀者類型代碼）：預設只開一般讀者，館方日後可調（2026-11-10）

      /* 個資遮罩（2026-11-11 改成參數）：五個欄位各一組。on＝清單上遮罩（志工名冊、志工總覽；關掉時那一欄清單上不遮、也沒有眼睛按鈕）；
         head＝前面顯示幾碼、tail＝後面顯示幾碼，中間遮住的字一律用「*」（跟館藏查詢系統一致）。電子郵件只算 @ 前面那一段，@ 之後照顯示；
         電話的連字號這類分隔符號照留、不算碼數。操作紀錄不管 on 開或關，一律照碼數遮過才寫入（HCV.mask）。
         改了只影響之後的顯示與之後寫入的紀錄 */
      piiMask: {
        name:   { on: true, head: 1, tail: 1 },   // 王*芬；兩個字的名字遮第二個字：陳*
        cardNo: { on: true, head: 2, tail: 3 },   // A0****701
        idNo:   { on: true, head: 2, tail: 3 },   // A1*****789
        phone:  { on: true, head: 4, tail: 3 },   // 0933-***-001
        email:  { on: true, head: 1, tail: 0 }    // s*****@example.com
      },

      /* 帳號安全（資安防護等級普級，2026-11-11）：預設值館方可依資安規範調整 */
      adminPwMinLength: 8,                     // 後台密碼最短長度（碼）
      adminPwNeedMix: true,                    // 後台密碼須同時含英文與數字
      adminLockFails: 3,                       // 後台連續登入失敗幾次鎖定
      adminLockMinutes: 15,                    // 後台鎖定幾分鐘
      volunteerLockFails: 3,                   // 志工端連續登入失敗幾次鎖定
      volunteerLockMinutes: 30,                // 志工端鎖定幾分鐘
      logRetentionYears: 1,                    // 操作紀錄保留期限（年），滿期自動刪除
      mohReportKeepMonths: 1,                  // 衛福部報表保存期限（月）：衛福部兩份含完整身分證字號，每一版產生後滿期自動刪除（2026-11-25）

      /* 上傳檔案：類型寫成 HCV.FILE_TYPES 的鍵；上限單位 MB */
      attachTypes: ['PDF', 'Word', 'JPG', 'PNG'],   // 公告附件可上傳的類型
      attachMaxMB: 10,                              // 公告附件單檔上限
      imageTypes: ['JPG', 'PNG', 'GIF', 'SVG'],     // 公告圖片可上傳的類型
      imageMaxMB: 1,                                // 公告圖片上限

      /* 個資告知事項：志工申請表送出前必勾同意，按〈個人資料蒐集告知事項〉開視窗顯示這段全文；文化局總管理者在系統參數維護 */
      privacyNotice: '新竹縣政府文化局依個人資料保護法第 8 條，於蒐集您的個人資料前告知下列事項：\n' +
        '一、蒐集機關：新竹縣政府文化局。\n' +
        '二、蒐集目的：志願服務管理。\n' +
        '三、個人資料類別：姓名、借閱證號、身分證字號、聯絡電話、電子郵件。\n' +
        '四、利用期間、地區、對象與方式：志工服務期間及服務結束後，依志願服務法規定保存；僅於本平臺與新竹縣政府文化局志願服務業務範圍內使用；' +
        '志工服務時數依志願服務法規定提報衛生福利部（由文化局承辦人員上傳衛生福利部系統）。\n' +
        '五、您的權利：依個人資料保護法第 3 條，您可以向新竹縣政府文化局請求查詢或閱覽、製給複製本、補充或更正、停止蒐集處理或利用、刪除您的個人資料。\n' +
        '六、不提供的影響：您可以自由選擇是否提供個人資料；不提供或提供不完整時，將無法受理您的志工申請。'
    },

    /* 館藏查詢系統的讀者類型（代碼與名稱由館藏查詢系統提供，2026-11-10）。登入第一關：讀者類型要在系統參數「可登入的讀者類型」裡 */
    readerTypes: [
      { code: 'P', name: '一般讀者' },
      { code: 'G', name: '團體讀者' },
      { code: 'G1', name: '團體讀者B' },
      { code: 'C', name: '企業單位' },
      { code: 'LIBRARIANS', name: '館員' },
      { code: 'RRC', name: '區域資源中心讀者' },
      { code: 'school', name: '閱進校園共讀書箱' },
      { code: 'Class', name: '班級辦證' },
      { code: 'Hchcc', name: '公務人員組別' },
      { code: 'V', name: '視障讀者' }
    ],

    /* 後台帳號。role：總管理者｜地點管理者｜報表檢視。三種角色的 Email 都必填（設定密碼信與待處理通知寄到這裡）。
       密碼不由管理者設定：新增帳號後系統寄「設定密碼」信，本人自己設定；passwordSet:false＝還沒設定密碼（帳號清單標示並可重寄）。
       地點管理者的 locationIds 就是服務地點的「管理者」（雙向同步），一人可管多個地點、一個地點可有多位管理者；兒少館示範「先建地點、還沒指定管理者」。
       帳號就是 Email。unit＝單位：手打文字（單行 20 字，可細到地點或小組，跟大組不同），新增帳號時預設帶「文化局」、可改；不做單位維護畫面（2026-11-10） */
    admins: [
      { id: 'AD1', name: '陳怡安', role: '總管理者', unit: '文化局', locationIds: [], email: 'yian@example.com' },
      { id: 'AD2', name: '林雅雯', role: '地點管理者', unit: '總圖', locationIds: ['L1'], email: 'yawen@example.com' },
      { id: 'AD3', name: '吳佩珊', role: '地點管理者', unit: '文化局', locationIds: ['L4'], email: 'peishan@example.com' },
      { id: 'AD4', name: '蕭宏仁', role: '報表檢視', unit: '文化局', locationIds: [], email: 'hongren@example.com' },
      { id: 'AD5', name: '張家豪', role: '地點管理者', unit: '文化局', locationIds: ['L2'], email: 'jiahao@example.com', passwordSet: false },
      { id: 'AD6', name: '黃淑惠', role: '地點管理者', unit: '文化局', locationIds: ['L3', 'L5'], email: 'shuhui@example.com' }
    ],

    /* 歷史報表（保存供下載）。一筆＝一版：每一版都保存產生當下的內容，之後補登或編修不會改到已存的那一版。
       同一份＝報表種類（kind）＋期間（period）＋格式（format）＋篩選條件（filters：loc 服務地點、group 組別、slot 時段、leave 請假／代班情形；空白＝全部）都相同；
       再匯出一次就多存一版（ver 加 1），清單只列最新一版，較早的版本收在那一列展開（2026-11-11）。
       period 一律民國年月（115-09）或民國年（114）；name 照報表種類命名（HCV.reportName）。
       RP01、RP04 示範同一份報表有兩版。
       衛福部兩份（衛福部服勤、衛福部受訓）含完整身分證字號，每一版存一個 keepUntil＝產生日加系統參數「衛福部報表保存期限」個月，
       到那天自動刪除；改參數只影響之後產生的版本（2026-11-25） */
    reports: [
      { id: 'RP01', kind: '文化局月報', ver: 2, name: '115 年 9 月　志工服務時數月報（文化局格式）', period: '115-09', format: 'Excel', filters: {}, createdAt: '2026-10-02 10:12', by: '陳怡安' },
      { id: 'RP02', kind: '衛福部服勤', ver: 1, name: '115 年 9 月　衛福部志工服勤時數月報表', period: '115-09', format: 'Excel', filters: {}, createdAt: '2026-10-02 10:15', by: '陳怡安', keepUntil: '2026-11-02' },
      { id: 'RP04', kind: '文化局月報', ver: 1, name: '115 年 9 月　志工服務時數月報（文化局格式）', period: '115-09', format: 'Excel', filters: {}, createdAt: '2026-10-01 16:40', by: '蕭宏仁' },
      { id: 'RP03', kind: '文化局年報', ver: 1, name: '114 年度　志工服務時數年度報表（文化局格式）', period: '114', format: 'PDF', filters: {}, createdAt: '2026-01-08 10:00', by: '陳怡安' }
    ]
  };

  var KEY = 'hcpl-volunteer-demo-v8';

  /* 個資遮罩的五個欄位（系統參數 piiMask 的鍵）；sample＝系統參數頁「套用後的例子」用的示範值 */
  var PII_FIELDS = [
    { key: 'name', label: '姓名', sample: '王淑芬' },
    { key: 'cardNo', label: '借閱證號', sample: 'A00010701' },
    { key: 'idNo', label: '身分證字號', sample: 'A123456789' },
    { key: 'phone', label: '聯絡電話', sample: '0933-100-001' },
    { key: 'email', label: '電子郵件', sample: 'shufen@example.com' }
  ];
  /* 上傳檔案可選的類型：鍵＝畫面上的名稱，值＝認得的副檔名 */
  var FILE_TYPES = {
    PDF: ['pdf'], Word: ['doc', 'docx'], Excel: ['xls', 'xlsx'], ODF: ['odt', 'ods', 'odp'],
    JPG: ['jpg', 'jpeg'], PNG: ['png'], GIF: ['gif'], SVG: ['svg']
  };
  /* 留前 head 碼與後 tail 碼，中間換成「*」。只有 isKey(字) 為真的字算碼數、會被遮；其餘（連字號、空白）照留。
     碼數加起來不少於資料長度時，先減後面、再減前面，至少遮一個字（兩個字的名字 1、1 → 陳*） */
  function maskKeep(s, head, tail, isKey) {
    var chars = String(s).split(''), pos = [];
    chars.forEach(function (c, i) { if (isKey(c)) { pos.push(i); } });
    var n = pos.length, a = Math.max(0, Number(head) || 0), b = Math.max(0, Number(tail) || 0);
    if (!n) { return String(s); }
    while (a + b >= n && b > 0) { b--; }
    while (a + b >= n && a > 0) { a--; }
    pos.forEach(function (p, k) { if (k >= a && k < n - b) { chars[p] = '*'; } });
    return chars.join('');
  }
  function maskWith(field, value, head, tail) {
    var s = value == null ? '' : String(value);
    if (!s) { return s; }
    if (field === 'name') { return maskKeep(s, head, tail, function (c) { return !/[\s·・]/.test(c); }); }
    if (field === 'email') {
      var at = s.lastIndexOf('@');
      if (at < 0) { return maskKeep(s, head, tail, function () { return true; }); }
      return maskKeep(s.slice(0, at), head, tail, function () { return true; }) + s.slice(at);
    }
    return maskKeep(s, head, tail, function (c) { return /[0-9A-Za-z]/.test(c); });
  }

  function toMin(t) { if (!t) { return 0; } var p = t.split(':'); return Number(p[0]) * 60 + Number(p[1]); }
  function toHM(m) { m = Math.max(0, Math.round(m)); var h = Math.floor(m / 60), i = m % 60; return (h < 10 ? '0' : '') + h + ':' + (i < 10 ? '0' : '') + i; }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  var HCV = {
    TODAY: TODAY,
    /* 讀出目前狀態（瀏覽器有存就用存的，沒有就用示範資料）。回傳的是可以直接改的物件，改完呼叫 HCV.save(state) */
    load: function () {
      var st = null;
      try {
        var raw = window.localStorage.getItem(KEY);
        if (raw) { var s = JSON.parse(raw); if (s && s.today === TODAY && s.volunteers) { st = s; } }
      } catch (e) { /* 私密視窗或 file:// 被擋時，直接用示範資料 */ }
      st = st || clone(SEED);
      /* 系統參數缺的項目補預設值（之後新增參數時，舊的暫存也能用） */
      st.params = st.params || {};
      Object.keys(SEED.params).forEach(function (k) { if (st.params[k] === undefined) { st.params[k] = clone(SEED.params[k]); } });
      /* 示範資料的記點補上失效日（依開立當時的保存期限），之後改保存期限才不會回頭改到它們 */
      st.violations.forEach(function (r) { if (!r.expires) { r.expires = HCV.pointExpiry(st, r); } });
      return st;
    },
    save: function (state) {
      try { window.localStorage.setItem(KEY, JSON.stringify(state)); return true; } catch (e) { return false; }
    },
    reset: function () {
      try { window.localStorage.removeItem(KEY); } catch (e) { /* 略 */ }
      return clone(SEED);
    },
    /* 小工具 */
    weekday: function (dateStr) {
      var p = dateStr.split('-'); var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      return ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    },
    dateLabel: function (dateStr) { return dateStr + '（' + HCV.weekday(dateStr) + '）'; },
    diffDays: function (a, b) {
      function t(s) { var p = s.split('-'); return Date.UTC(Number(p[0]), Number(p[1]) - 1, Number(p[2])); }
      return Math.round((t(b) - t(a)) / 86400000);
    },
    byId: function (list, id) { for (var i = 0; i < list.length; i++) { if (list[i].id === id) { return list[i]; } } return null; },
    slotLabel: function (state, slot) {
      var t = HCV.byId(state.slotTemplates, slot.templateId); var l = HCV.byId(state.locations, slot.locationId);
      return t.name + ' ' + t.start + '–' + t.end + '　' + l.name;
    },
    groupNames: function (state, v) {
      return v.groupIds.map(function (g) { var x = HCV.byId(state.groups, g); return x ? x.name : g; }).join('、');
    },
    /* 志工的大組由所屬組別推得：組別都在總圖就是總圖，同時有總圖與文化局的組別就兩個都是 */
    unitIdsOf: function (state, v) {
      var out = [];
      (v.groupIds || []).forEach(function (gid) {
        var g = HCV.byId(state.groups, gid);
        if (g && out.indexOf(g.unitId) < 0) { out.push(g.unitId); }
      });
      if (!out.length && v.unitId) { out.push(v.unitId); }
      return out;
    },
    unitNames: function (state, v) {
      return HCV.unitIdsOf(state, v).map(function (u) { var x = HCV.byId(state.units, u); return x ? x.name : u; }).join('、');
    },
    /* 代班範圍：參數開著時只列「這一班服務地點所屬大組」的志工；關掉就不限大組 */
    inSubstituteScope: function (state, v, locationId) {
      if (!state.params.substituteSameUnitOnly) { return true; }
      var l = HCV.byId(state.locations, locationId);
      return !l || HCV.unitIdsOf(state, v).indexOf(l.unitId) >= 0;
    },
    /* 某一天是否落在這位志工已核准的長假期間 */
    onLongLeave: function (state, volunteerId, date) {
      return (state.leaves || []).some(function (lv) {
        return lv.volunteerId === volunteerId && lv.isLong && lv.status === '已核准' && lv.from <= date && date <= lv.to;
      });
    },
    /* 停權起訖：設定停權時存 suspendFrom、suspendTo；沒有這兩欄的舊資料從 suspendNote 開頭的兩個日期讀 */
    suspendRange: function (v) {
      if (!v) { return null; }
      if (v.suspendFrom && v.suspendTo) { return { from: v.suspendFrom, to: v.suspendTo }; }
      var m = String(v.suspendNote || '').match(/^\s*(\d{4}-\d{2}-\d{2})\D+?(\d{4}-\d{2}-\d{2})/);
      return m ? { from: m[1], to: m[2] } : null;
    },
    /* 某一天是否落在這位志工的停權期間，含還沒開始的預定停權。
       指派、核可、徵求、固定班匯入、代理人與代班候選都看場次日期，不只看狀態：預定停權的人在起日之前狀態仍是在職（2026-11-24） */
    suspendedOn: function (v, date) {
      var r = HCV.suspendRange(v);
      return !!(r && r.from <= date && date <= r.to);
    },
    /* 這位志工在某段日期內、今天以後的班（from、to 是含頭含尾的日期；to 為空＝不限）。設定停權、除名後列給管理者自己移除 */
    bookedSlotsBetween: function (state, volunteerId, from, to) {
      var start = from > state.today ? from : state.today;
      return state.slots.filter(function (s) {
        return s.booked.indexOf(volunteerId) >= 0 && s.date >= start && (!to || s.date <= to);
      }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    },
    /* 場次有設開放組別時，這位志工是否屬於其中一個組別 */
    groupAllowed: function (slot, v) {
      var g = slot.openGroupIds || [];
      return !g.length || g.some(function (x) { return v.groupIds.indexOf(x) >= 0; });
    },
    /* 某個服務地點的管理者＝授權服務地點含這個地點的地點管理者帳號（與帳號頁雙向同步） */
    managersOf: function (state, locationId) {
      return state.admins.filter(function (a) { return a.role === '地點管理者' && !a.disabled && a.locationIds.indexOf(locationId) >= 0; });
    },
    /* 某個服務地點的服務時段；activeOnly＝只要啟用中的（新增場次、批次匯入只列啟用中的） */
    templatesOf: function (state, locationId, activeOnly) {
      return state.slotTemplates.filter(function (t) { return t.locationId === locationId && (!activeOnly || !t.disabled); });
    },
    /* 日期加 N 個月；那個月沒有同一天時取月底（1 月 31 日加 1 個月＝2 月 28 日） */
    addMonths: function (dateStr, n) {
      var p = dateStr.split('-'); var y = Number(p[0]), m = Number(p[1]) - 1 + n, d = Number(p[2]);
      y += Math.floor(m / 12); m = ((m % 12) + 12) % 12;
      var last = new Date(y, m + 1, 0).getDate();
      var dd = Math.min(d, last);
      return y + '-' + (m < 9 ? '0' : '') + (m + 1) + '-' + (dd < 10 ? '0' : '') + dd;
    },
    addDays: function (dateStr, n) {
      var p = dateStr.split('-'); var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]) + n);
      return d.getFullYear() + '-' + (d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' : '') + d.getDate();
    },
    /* 長假照日曆算：結束日在「起始日加 N 個月的前一天」當天或之後就是長假（N＝系統參數長假認定；3 月 5 日起請到 4 月 4 日＝一個月） */
    longLeaveFrom: function (state, from) {
      return HCV.addDays(HCV.addMonths(from, (state.params && state.params.longLeaveMonths) || 1), -1);
    },
    isLongLeave: function (state, from, to) {
      return !!(from && to && to >= HCV.longLeaveFrom(state, from));
    },
    /* 這一場的出勤規則：場次自己有值就用場次的（新增場次時從服務時段帶入、可再改），沒有就用服務時段的 */
    rule: function (state, slot) {
      var t = HCV.byId(state.slotTemplates, slot.templateId) || {};
      function pick(k, d) { return slot[k] != null ? slot[k] : (t[k] != null ? t[k] : d); }
      return {
        name: t.name, start: pick('start', '09:00'), end: pick('end', '12:00'), hours: pick('hours', 0),
        graceMinutes: pick('graceMinutes', 0), unitMinutes: pick('unitMinutes', 30), latestCheckin: pick('latestCheckin', ''),
        openMinutes: pick('openMinutes', 30), closeMinutes: pick('closeMinutes', 30)
      };
    },
    unitText: function (u) { return Number(u) === 60 ? '一小時' : '半小時'; },
    /* 打卡時間是否受理：還沒到簽到開放、過了簽退截止都不受理；簽到另外不能晚於最晚可簽到時間（剛好那個時間可以） */
    scanCheck: function (r, time, isCheckIn) {
      var t = toMin(time);
      if (t < toMin(r.start) - r.openMinutes) { return '還沒開放'; }
      if (t > toMin(r.end) + r.closeMinutes) { return '已過簽退截止'; }
      if (isCheckIn && r.latestCheckin && t > toMin(r.latestCheckin)) { return '超過最晚可簽到時間'; }
      return '';
    },
    /* 時數（館方 2026-10-21）：緩衝內到班從班表開始算；超過緩衝是遲到，從簽到後第一個計算單位的整點起算
       （一小時制＝整點、半小時制＝整點或半點；剛好整點或半點就從那時算）；最多算到班表結束；
       每一筆依時數計算單位無條件捨去，報表直接加總、不再捨去。全程到班就發這一場的計算時數。
       回傳 { from, to, hours, status }，status：正常｜緩衝內到班｜遲到｜早退 */
    calc: function (r, checkIn, checkOut) {
      var st = toMin(r.start), en = toMin(r.end), u = Number(r.unitMinutes) || 30;
      var cin = toMin(checkIn);
      var late = cin > st + (r.graceMinutes || 0);
      var from = late ? Math.ceil(cin / u) * u : st;
      var status = late ? '遲到' : (cin > st ? '緩衝內到班' : '正常');
      if (!checkOut) { return { from: toHM(from), to: '', hours: 0, status: status }; }
      var co = toMin(checkOut);
      var early = co < en;
      if (early && !late) { status = '早退'; }
      var to = Math.min(co, en);
      var counted = Math.max(0, Math.floor((to - from) / u) * u);
      var hours = (!late && !early) ? Number(r.hours) : Math.min(counted / 60, Number(r.hours));
      return { from: toHM(from), to: toHM(from + counted), hours: hours, status: status, early: early };
    },
    /* 違規記點的失效日：從發生日期起算，加上保存期限（月），用全系統同一支加月份函式（月底取該月最後一天：1/31 加 1 個月＝2/28）。
       開立當下就定好、存在 expires；之後改保存期限只影響新開的記點，已開的不回頭重算（B-14） */
    pointExpiry: function (state, r) {
      if (r.expires) { return r.expires; }
      var n = (state.params && state.params.violationRetentionMonths) || 3;
      return HCV.addMonths(r.date, n);
    },
    pointExpired: function (state, r) { return HCV.pointExpiry(state, r) <= state.today; },
    activePoints: function (state, volunteerId) {
      return state.violations.filter(function (r) { return r.volunteerId === volunteerId && r.status === '有效' && !HCV.pointExpired(state, r); })
        .reduce(function (n, r) { return n + r.points; }, 0);
    },
    /* 某位志工適用的年度服務時數門檻：依組別設定；同時屬於多個組別時取較高者，沒有組別時用預設值 */
    requiredHours: function (state, v) {
      var d = (state.params && state.params.annualHoursDefault) || 144;
      if (!v || !v.groupIds || !v.groupIds.length) { return d; }
      var best = 0;
      v.groupIds.forEach(function (gid) {
        var g = HCV.byId(state.groups, gid);
        var h = g && g.annualRequiredHours != null ? Number(g.annualRequiredHours) : d;
        if (h > best) { best = h; }
      });
      return best || d;
    },
    hoursText: function (h) { return (Math.round(h * 100) / 100).toString(); },
    nowStamp: function () { return TODAY + ' ' + '09:00'; },

    /* ---------- 個資遮罩（系統參數 piiMask）---------- */
    PII_FIELDS: PII_FIELDS,
    /* 不看參數、直接照給的碼數遮（系統參數頁即時顯示例子用） */
    maskWith: maskWith,
    /* 某欄位的遮罩設定 { on, head, tail } */
    maskRule: function (state, field) {
      var m = (state && state.params && state.params.piiMask) || SEED.params.piiMask;
      return m[field] || SEED.params.piiMask[field] || { on: true, head: 1, tail: 0 };
    },
    /* 照系統參數的碼數遮（不管清單上遮罩開或關）：操作紀錄、前台申請進度查詢一律用這支。
       field＝name｜cardNo｜idNo｜phone｜email。例：HCV.mask(S, 'name', '王淑芬') → '王*芬' */
    mask: function (state, field, value) {
      var r = HCV.maskRule(state, field);
      return maskWith(field, value, r.head, r.tail);
    },
    /* 這一欄在清單上要不要遮（系統參數「清單上遮罩」） */
    maskOn: function (state, field) { return !!HCV.maskRule(state, field).on; },
    /* 清單上顯示用：清單上遮罩開著才遮，關掉就顯示完整資料 */
    listMask: function (state, field, value) {
      return HCV.maskOn(state, field) ? HCV.mask(state, field, value) : (value == null ? '' : String(value));
    },
    /* 把一段文字裡出現的志工與後台帳號的個資（姓名、借閱證號、聯絡電話、電子郵件）換成遮罩後的寫法。
       操作紀錄寫入前最後再過一次，避免主旨、原因這類自由文字夾帶明碼 */
    maskKnown: function (state, text) {
      var s = text == null ? '' : String(text), pairs = [];
      function add(field, v) { v = v == null ? '' : String(v); if (v.length >= 2) { pairs.push([v, HCV.mask(state, field, v)]); } }
      (state.volunteers || []).forEach(function (v) { add('name', v.name); add('cardNo', v.cardNo); add('phone', v.phone); add('email', v.email); });
      (state.admins || []).forEach(function (a) { add('name', a.name); add('email', a.email); });
      pairs.sort(function (x, y) { return y[0].length - x[0].length; });
      pairs.forEach(function (p) { if (p[0] !== p[1] && s.indexOf(p[0]) >= 0) { s = s.split(p[0]).join(p[1]); } });
      return s;
    },

    /* ---------- 上傳檔案（系統參數 attachTypes、attachMaxMB、imageTypes、imageMaxMB）---------- */
    FILE_TYPES: FILE_TYPES,
    fileTypesText: function (types) { return (types || []).join('、'); },
    fileAccept: function (types) {
      var out = [];
      (types || []).forEach(function (t) { (FILE_TYPES[t] || []).forEach(function (x) { out.push('.' + x); }); });
      return out.join(',');
    },
    fileTypeOk: function (types, fileName) {
      var m = /\.([^.]+)$/.exec(String(fileName || '')), ext = m ? m[1].toLowerCase() : '';
      return !!ext && (types || []).some(function (t) { return (FILE_TYPES[t] || []).indexOf(ext) >= 0; });
    },

    /* ---------- 歷史報表的命名（2026-11-11）---------- */
    /* 期間代碼：民國年月「115-10」、民國年「115」 */
    rocPeriod: function (p) {
      p = String(p || '');
      var y = Number(p.slice(0, 4)) - 1911;
      return p.length > 4 ? y + '-' + p.slice(5, 7) : String(y);
    },
    periodLabel: function (code) {
      var x = String(code || '').split('-');
      return x.length > 1 ? x[0] + ' 年 ' + Number(x[1]) + ' 月' : x[0] + ' 年度';
    },
    REPORT_NAMES: {
      '文化局月報': '志工服務時數月報（文化局格式）', '文化局年報': '志工服務時數年度報表（文化局格式）',
      '衛福部服勤': '衛福部志工服勤時數月報表', '衛福部受訓': '衛福部志工教育訓練時數月報表',
      '年度名冊': '志工服務時數名冊',
      '跨地點時數彙整': '跨服務地點時數彙整', '跨地點出勤統計': '跨服務地點出勤統計', '跨地點違規統計': '跨服務地點違規統計'
    },
    reportName: function (kind, code) { return HCV.periodLabel(code) + '　' + (HCV.REPORT_NAMES[kind] || kind); }
  };

  window.HCV = HCV;
})();
