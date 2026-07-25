// ============================================================================
// 友喬作業環境監測 E化系統 — Mock data & shared config
// Plain ES module. Imported by DC logic classes via dynamic import().
// ============================================================================

// ---- Badge color tokens (from design brief) --------------------------------
export const BADGE_COLORS = {
  blue:  { bg: '#E7F3FF', text: '#00529B' },
  green: { bg: '#EEF8E4', text: '#00754B' },
  amber: { bg: '#FAECE6', text: '#C23E00' },
  red:   { bg: '#FFEDF1', text: '#C40000' },
  gray:  { bg: '#F1F1F1', text: '#69707D' },
};

// Maps a *value string* to a semantic color. Shared across all status-ish badges
// since the vocabulary doesn't collide across entities.
export const STATUS_COLOR = {
  '啟用': 'green', '停用': 'gray',
  '草稿': 'gray', '已排程': 'blue', '採樣中': 'amber', '檢測中': 'amber',
  '已完成': 'green', '已結案': 'gray',
  '已送出': 'blue', '已核准': 'green', '已拒絕': 'red',
  '已產出': 'green',
  '待採樣': 'gray', '已採樣': 'blue',
  '採樣幫浦': 'blue', '噪音計': 'amber', '流量校正器': 'gray', '風速計': 'gray',
  '有機溶劑': 'blue', '粉塵': 'amber', '重金屬': 'red', '物理性': 'gray',
  '個人採樣': 'blue', '範圍採樣': 'gray',
  '現場登錄': 'green', '事後補登': 'amber',
  '正常': 'blue', '勞檢舊': 'gray', '勞檢新': 'amber',
};
export function getBadgeColor(value) {
  return STATUS_COLOR[value] || 'gray';
}

// ---- Formatting helpers -----------------------------------------------------
export function fmtCurrency(n) {
  if (n === null || n === undefined) return '—';
  return 'NT$ ' + Number(n).toLocaleString('en-US');
}
export function byId(arr, id) {
  return (arr || []).find(r => r.id === id) || null;
}

// ============================================================================
// Master data
// ============================================================================

export const clients = [
  { id: 'CL-01', name: '台灣化學工業股份有限公司', industry: '化工業', contact: '陳志明', phone: '02-2712-3456', address: '台北市內湖區工業路68號', status: '啟用' },
  { id: 'CL-02', name: '中華電子科技股份有限公司', industry: '電子業', contact: '黃淑芬', phone: '03-578-9012', address: '新竹科學園區力行路20號', status: '啟用' },
  { id: 'CL-03', name: '大立精密機械股份有限公司', industry: '機械業', contact: '林俊傑', phone: '04-2359-8877', address: '台中市西屯區工業區42路8號', status: '啟用' },
  { id: 'CL-04', name: '福懋興業股份有限公司', industry: '紡織業', contact: '蔡美玲', phone: '06-253-4411', address: '台南市安南區安中路三段55號', status: '啟用' },
  { id: 'CL-05', name: '台朔重工股份有限公司', industry: '重工業', contact: '許文龍', phone: '07-871-2200', address: '高雄市小港區大業北路76號', status: '啟用' },
  { id: 'CL-06', name: '群翊塑膠工業股份有限公司', industry: '塑膠業', contact: '鄭宗翰', phone: '037-987-6543', address: '苗栗縣頭份市工業路12號', status: '啟用' },
  { id: 'CL-07', name: '永信製藥股份有限公司', industry: '製藥業', contact: '周佩珊', phone: '04-2463-1155', address: '台中市大甲區工業路5號', status: '啟用' },
  { id: 'CL-08', name: '中鋼機械股份有限公司', industry: '機械業', contact: '謝明宏', phone: '07-621-9988', address: '高雄市前鎮區中鋼路1號', status: '啟用' },
  { id: 'CL-09', name: '統一實業股份有限公司', industry: '食品業', contact: '王秀英', phone: '06-266-0912', address: '台南市永康區中山路335號', status: '啟用' },
  { id: 'CL-10', name: '台灣特殊化學股份有限公司', industry: '化工業', contact: '李建成', phone: '03-386-5500', address: '桃園市觀音區工業區16路3號', status: '停用' },
];

export const userAccounts = [
  { id: 'U-01', name: '陳建宏', qualificationNo: '甲級勞工作業環境監測人員-第00123號', status: '啟用' },
  { id: 'U-02', name: '林雅婷', qualificationNo: '乙級勞工作業環境監測人員-第00456號', status: '啟用' },
  { id: 'U-03', name: '王志成', qualificationNo: '甲級勞工作業環境監測人員-第00789號', status: '啟用' },
  { id: 'U-04', name: '李佳玲', qualificationNo: '乙級勞工作業環境監測人員-第01011號', status: '啟用' },
  { id: 'U-05', name: '張家豪', qualificationNo: '乙級勞工作業環境監測人員-第01234號', status: '啟用' },
  { id: 'U-06', name: '吳明道', qualificationNo: '甲級勞工作業環境監測人員-第00234號', status: '停用' },
];

export const methodGroups = [
  { id: 'MG-01', desorbent: 'CS2（二硫化碳）', revisionDate: '2026-01-10 09:00', methodVersion: 'Rev.3', active: '啟用' },
  { id: 'MG-02', desorbent: '—', revisionDate: '2026-02-01 09:00', methodVersion: 'Rev.2', active: '啟用' },
  { id: 'MG-03', desorbent: '—', revisionDate: '2026-01-15 09:00', methodVersion: 'Rev.4', active: '啟用' },
  { id: 'MG-04', desorbent: '硝酸溶液', revisionDate: '2026-03-01 09:00', methodVersion: 'Rev.2', active: '啟用' },
];
// MG-01 GC/FID揮發性有機物分析法, MG-02 直讀式物理性監測法, MG-03 重量分析法(粉塵), MG-04 AAS原子吸收光譜法
export const methodGroupNames = { 'MG-01': 'GC/FID揮發性有機物分析法', 'MG-02': '直讀式物理性監測法', 'MG-03': '重量分析法（粉塵）', 'MG-04': 'AAS原子吸收光譜法' };

export const equipment = [
  { id: 'EQ-01', equipmentType: '採樣幫浦', modelName: 'SKC AirChek TOUCH', active: '啟用' },
  { id: 'EQ-02', equipmentType: '採樣幫浦', modelName: 'GilAir Plus', active: '啟用' },
  { id: 'EQ-03', equipmentType: '採樣幫浦', modelName: 'Casella Apex2', active: '啟用' },
  { id: 'EQ-04', equipmentType: '噪音計', modelName: 'B&K Type 2245', active: '啟用' },
  { id: 'EQ-05', equipmentType: '噪音計', modelName: 'Quest NoisePro DLX', active: '啟用' },
  { id: 'EQ-06', equipmentType: '流量校正器', modelName: 'Gilibrator-2', active: '啟用' },
  { id: 'EQ-07', equipmentType: '流量校正器', modelName: 'Defender 520', active: '啟用' },
  { id: 'EQ-08', equipmentType: '風速計', modelName: 'TSI VelociCalc', active: '停用' },
];

export const substances = [
  { id: 'SB-01', name: '甲苯', nameEn: 'Toluene', casNo: '108-88-3', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
  { id: 'SB-02', name: '二甲苯', nameEn: 'Xylene', casNo: '1330-20-7', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
  { id: 'SB-03', name: '正己烷', nameEn: 'n-Hexane', casNo: '110-54-3', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
  { id: 'SB-04', name: '丙酮', nameEn: 'Acetone', casNo: '67-64-1', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
  { id: 'SB-05', name: '結晶型游離二氧化矽', nameEn: 'Crystalline Silica', casNo: '14808-60-7', categoryCode: '粉塵', methodGroupId: 'MG-03', mediumTypeCode: '濾紙' },
  { id: 'SB-06', name: '總粉塵', nameEn: 'Total Dust', casNo: '—', categoryCode: '粉塵', methodGroupId: 'MG-03', mediumTypeCode: '濾紙' },
  { id: 'SB-07', name: '鉛及其化合物', nameEn: 'Lead', casNo: '7439-92-1', categoryCode: '重金屬', methodGroupId: 'MG-04', mediumTypeCode: '濾紙' },
  { id: 'SB-08', name: '噪音', nameEn: 'Noise', casNo: '—', categoryCode: '物理性', methodGroupId: 'MG-02', mediumTypeCode: '直讀式' },
  { id: 'SB-09', name: '三氯乙烯', nameEn: 'Trichloroethylene', casNo: '79-01-6', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
  { id: 'SB-10', name: '苯', nameEn: 'Benzene', casNo: '71-43-2', categoryCode: '有機溶劑', methodGroupId: 'MG-01', mediumTypeCode: '活性碳管' },
];

export const priceItems = [
  { id: 'PI-01', itemName: '甲苯（Toluene）分析', unit: '單點', normalPrice: 1200, laborOldPrice: 1000, laborNewPrice: 1100 },
  { id: 'PI-02', itemName: '二甲苯（Xylene）分析', unit: '單點', normalPrice: 1200, laborOldPrice: 1000, laborNewPrice: 1100 },
  { id: 'PI-03', itemName: '正己烷（n-Hexane）分析', unit: '單點', normalPrice: 1300, laborOldPrice: 1100, laborNewPrice: 1200 },
  { id: 'PI-04', itemName: '丙酮（Acetone）分析', unit: '單點', normalPrice: 1100, laborOldPrice: 950, laborNewPrice: 1000 },
  { id: 'PI-05', itemName: '結晶型游離二氧化矽分析', unit: '單點', normalPrice: 2200, laborOldPrice: 1900, laborNewPrice: 2000 },
  { id: 'PI-06', itemName: '總粉塵重量分析', unit: '單點', normalPrice: 1600, laborOldPrice: 1350, laborNewPrice: 1450 },
  { id: 'PI-07', itemName: '鉛及其化合物分析', unit: '單點', normalPrice: 2500, laborOldPrice: 2200, laborNewPrice: 2300 },
  { id: 'PI-08', itemName: '噪音監測（8小時TWA）', unit: '點', normalPrice: 1800, laborOldPrice: 1500, laborNewPrice: 1650 },
  { id: 'PI-09', itemName: '苯（Benzene）分析', unit: '單點', normalPrice: 1300, laborOldPrice: 1100, laborNewPrice: 1200 },
  { id: 'PI-10', itemName: '三氯乙烯分析', unit: '單點', normalPrice: 1400, laborOldPrice: 1200, laborNewPrice: 1300 },
  { id: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', normalPrice: 3000, laborOldPrice: 3000, laborNewPrice: 3000 },
  { id: 'PI-12', itemName: '監測報告書製作費', unit: '式', normalPrice: 5000, laborOldPrice: 5000, laborNewPrice: 5000 },
];

// ============================================================================
// Core flow: Case → Quotation → PreSampling/Plan → SamplingRecord → Sample/TestResult → RecordSheet
// ============================================================================

export const cases = [
  { id: 'CS-2601', name: '2026年上半年作業環境監測', clientId: 'CL-01', monitoringDate: '2026-03-15 08:30', address: '台北市內湖區工業路68號', contactPerson: '陳志明', status: '已結案', createdBy: '陳建宏', notes: '半年度例行監測，含甲苯／二甲苯／正己烷。' },
  { id: 'CS-2602', name: '潔淨室噪音監測', clientId: 'CL-02', monitoringDate: '2026-04-20 09:00', address: '新竹科學園區力行路20號', contactPerson: '黃淑芬', status: '已完成', createdBy: '林雅婷', notes: '無塵室及機台區噪音監測。' },
  { id: 'CS-2603', name: '機械加工區粉塵監測', clientId: 'CL-03', monitoringDate: '2026-06-10 09:00', address: '台中市西屯區工業區42路8號', contactPerson: '林俊傑', status: '檢測中', createdBy: '王志成', notes: 'CNC加工區總粉塵及結晶型二氧化矽。' },
  { id: 'CS-2604', name: '紡織廠有機溶劑監測', clientId: 'CL-04', monitoringDate: '2026-06-25 09:00', address: '台南市安南區安中路三段55號', contactPerson: '蔡美玲', status: '採樣中', createdBy: '李佳玲', notes: '染整部有機溶劑暴露監測。' },
  { id: 'CS-2605', name: '焊接作業噪音監測', clientId: 'CL-05', monitoringDate: '2026-07-15 09:00', address: '高雄市小港區大業北路76號', contactPerson: '許文龍', status: '已排程', createdBy: '張家豪', notes: '船體焊接區噪音監測，需2部噪音計。' },
  { id: 'CS-2606', name: '射出成型區VOCs監測', clientId: 'CL-06', monitoringDate: '2026-07-20 09:00', address: '苗栗縣頭份市工業路12號', contactPerson: '鄭宗翰', status: '草稿', createdBy: '陳建宏', notes: '新案件，待報價確認。' },
  { id: 'CS-2607', name: '製劑室化學品監測', clientId: 'CL-07', monitoringDate: '2026-07-18 09:00', address: '台中市大甲區工業路5號', contactPerson: '周佩珊', status: '已排程', createdBy: '林雅婷', notes: '製劑室丙酮及正己烷暴露監測，報價審核中。' },
  { id: 'CS-2608', name: '重金屬暴露監測', clientId: 'CL-08', monitoringDate: '2026-06-28 09:00', address: '高雄市前鎮區中鋼路1號', contactPerson: '謝明宏', status: '檢測中', createdBy: '王志成', notes: '鑄造區鉛暴露監測。' },
  { id: 'CS-2609', name: '食品加工噪音監測', clientId: 'CL-09', monitoringDate: '2026-05-30 09:00', address: '台南市永康區中山路335號', contactPerson: '王秀英', status: '已完成', createdBy: '李佳玲', notes: '包裝產線噪音監測。' },
  { id: 'CS-2610', name: '化學品儲槽區監測', clientId: 'CL-10', monitoringDate: '2026-07-02 09:00', address: '桃園市觀音區工業區16路3號', contactPerson: '李建成', status: '採樣中', createdBy: '張家豪', notes: '儲槽區苯及三氯乙烯監測。' },
];

export const CASE_STAGES = ['草稿', '已排程', '採樣中', '檢測中', '已完成', '已結案'];

export const quotations = [
  { id: 'QT-2601', caseId: 'CS-2601', clientId: 'CL-01', quoteDate: '2026-02-20 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-01', itemName: '甲苯（Toluene）分析', unit: '單點', qty: 8, unitPrice: 1200, subtotal: 9600 },
      { priceItemId: 'PI-02', itemName: '二甲苯（Xylene）分析', unit: '單點', qty: 6, unitPrice: 1200, subtotal: 7200 },
      { priceItemId: 'PI-03', itemName: '正己烷（n-Hexane）分析', unit: '單點', qty: 5, unitPrice: 1300, subtotal: 6500 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 31300 },
  { id: 'QT-2602', caseId: 'CS-2602', clientId: 'CL-02', quoteDate: '2026-03-25 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-08', itemName: '噪音監測（8小時TWA）', unit: '點', qty: 8, unitPrice: 1800, subtotal: 14400 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 22400 },
  { id: 'QT-2603', caseId: 'CS-2603', clientId: 'CL-03', quoteDate: '2026-05-10 09:00', priceTypeCode: '勞檢新', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-06', itemName: '總粉塵重量分析', unit: '單點', qty: 6, unitPrice: 1450, subtotal: 8700 },
      { priceItemId: 'PI-05', itemName: '結晶型游離二氧化矽分析', unit: '單點', qty: 4, unitPrice: 2000, subtotal: 8000 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 24700 },
  { id: 'QT-2604', caseId: 'CS-2604', clientId: 'CL-04', quoteDate: '2026-05-28 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-01', itemName: '甲苯（Toluene）分析', unit: '單點', qty: 5, unitPrice: 1200, subtotal: 6000 },
      { priceItemId: 'PI-02', itemName: '二甲苯（Xylene）分析', unit: '單點', qty: 4, unitPrice: 1200, subtotal: 4800 },
      { priceItemId: 'PI-03', itemName: '正己烷（n-Hexane）分析', unit: '單點', qty: 3, unitPrice: 1300, subtotal: 3900 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 22700 },
  { id: 'QT-2605', caseId: 'CS-2605', clientId: 'CL-05', quoteDate: '2026-06-20 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-08', itemName: '噪音監測（8小時TWA）', unit: '點', qty: 10, unitPrice: 1800, subtotal: 18000 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 26000 },
  { id: 'QT-2606', caseId: 'CS-2606', clientId: 'CL-06', quoteDate: '2026-06-30 09:00', priceTypeCode: '正常', status: '草稿',
    lineItems: [
      { priceItemId: 'PI-01', itemName: '甲苯（Toluene）分析', unit: '單點', qty: 4, unitPrice: 1200, subtotal: 4800 },
      { priceItemId: 'PI-04', itemName: '丙酮（Acetone）分析', unit: '單點', qty: 4, unitPrice: 1100, subtotal: 4400 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 17200 },
  { id: 'QT-2607', caseId: 'CS-2607', clientId: 'CL-07', quoteDate: '2026-06-25 09:00', priceTypeCode: '勞檢舊', status: '已送出',
    lineItems: [
      { priceItemId: 'PI-04', itemName: '丙酮（Acetone）分析', unit: '單點', qty: 5, unitPrice: 950, subtotal: 4750 },
      { priceItemId: 'PI-03', itemName: '正己烷（n-Hexane）分析', unit: '單點', qty: 4, unitPrice: 1100, subtotal: 4400 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 17150 },
  { id: 'QT-2608', caseId: 'CS-2608', clientId: 'CL-08', quoteDate: '2026-05-20 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-07', itemName: '鉛及其化合物分析', unit: '單點', qty: 10, unitPrice: 2500, subtotal: 25000 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 33000 },
  { id: 'QT-2609', caseId: 'CS-2609', clientId: 'CL-09', quoteDate: '2026-04-25 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-08', itemName: '噪音監測（8小時TWA）', unit: '點', qty: 5, unitPrice: 1800, subtotal: 9000 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 17000 },
  { id: 'QT-2610', caseId: 'CS-2610', clientId: 'CL-10', quoteDate: '2026-06-15 09:00', priceTypeCode: '正常', status: '已核准',
    lineItems: [
      { priceItemId: 'PI-09', itemName: '苯（Benzene）分析', unit: '單點', qty: 6, unitPrice: 1200, subtotal: 7200 },
      { priceItemId: 'PI-10', itemName: '三氯乙烯分析', unit: '單點', qty: 3, unitPrice: 1200, subtotal: 3600 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 18800 },
  { id: 'QT-2611', caseId: null, clientId: 'CL-10', quoteDate: '2026-05-01 09:00', priceTypeCode: '正常', status: '已拒絕',
    lineItems: [
      { priceItemId: 'PI-09', itemName: '苯（Benzene）分析', unit: '單點', qty: 3, unitPrice: 1200, subtotal: 3600 },
      { priceItemId: 'PI-11', itemName: '採樣人員到場服務費', unit: '式', qty: 1, unitPrice: 3000, subtotal: 3000 },
      { priceItemId: 'PI-12', itemName: '監測報告書製作費', unit: '式', qty: 1, unitPrice: 5000, subtotal: 5000 },
    ], totalAmount: 11600, note: '客戶最終選擇其他廠商。' },
];

export const flowCalibrations = [
  { id: 'FC-01', caseId: 'CS-2601', equipmentId: 'EQ-01', preFlowRate: 201.2, postFlowRate: 198.5, avgFlowRate: 199.85, errorOver5Pct: false, postGreaterThanPre: false, calibratedBy: '陳建宏', calibrationDate: '2026-03-15 08:00' },
  { id: 'FC-02', caseId: 'CS-2603', equipmentId: 'EQ-02', preFlowRate: 195.0, postFlowRate: 203.4, avgFlowRate: 199.2, errorOver5Pct: false, postGreaterThanPre: true, calibratedBy: '王志成', calibrationDate: '2026-06-10 08:15' },
  { id: 'FC-03', caseId: 'CS-2604', equipmentId: 'EQ-01', preFlowRate: 190.0, postFlowRate: 218.6, avgFlowRate: 204.3, errorOver5Pct: true, postGreaterThanPre: true, calibratedBy: '李佳玲', calibrationDate: '2026-06-25 08:00' },
  { id: 'FC-04', caseId: 'CS-2608', equipmentId: 'EQ-03', preFlowRate: 200.5, postFlowRate: 197.8, avgFlowRate: 199.15, errorOver5Pct: false, postGreaterThanPre: false, calibratedBy: '王志成', calibrationDate: '2026-06-28 08:10' },
  { id: 'FC-05', caseId: 'CS-2610', equipmentId: 'EQ-02', preFlowRate: 205.0, postFlowRate: 209.1, avgFlowRate: 207.05, errorOver5Pct: false, postGreaterThanPre: true, calibratedBy: '張家豪', calibrationDate: '2026-07-02 08:00' },
  { id: 'FC-06', caseId: 'CS-2602', equipmentId: 'EQ-01', preFlowRate: 198.0, postFlowRate: 196.5, avgFlowRate: 197.25, errorOver5Pct: false, postGreaterThanPre: false, calibratedBy: '林雅婷', calibrationDate: '2026-04-20 08:00' },
];

export const noiseCalibrations = [
  { id: 'NC-01', caseId: 'CS-2602', equipmentId: 'EQ-04', calibratedTo114: true, measuredBy: '林雅婷', calibrationDate: '2026-04-20 08:20' },
  { id: 'NC-02', caseId: 'CS-2605', equipmentId: 'EQ-04', calibratedTo114: false, measuredBy: '張家豪', calibrationDate: '2026-07-14 14:00' },
  { id: 'NC-03', caseId: 'CS-2605', equipmentId: 'EQ-05', calibratedTo114: true, measuredBy: '張家豪', calibrationDate: '2026-07-14 14:10' },
  { id: 'NC-04', caseId: 'CS-2609', equipmentId: 'EQ-05', calibratedTo114: true, measuredBy: '李佳玲', calibrationDate: '2026-05-30 08:00' },
];

export const preSamplingSheets = [
  { id: 'PS-2601', caseId: 'CS-2601', status: '已產出', generatedAt: '2026-03-10 10:00', generatedBy: '陳建宏' },
  { id: 'PS-2602', caseId: 'CS-2602', status: '已產出', generatedAt: '2026-04-15 10:00', generatedBy: '林雅婷' },
  { id: 'PS-2603', caseId: 'CS-2603', status: '已產出', generatedAt: '2026-06-05 10:00', generatedBy: '王志成' },
  { id: 'PS-2604', caseId: 'CS-2604', status: '已產出', generatedAt: '2026-06-20 10:00', generatedBy: '李佳玲' },
  { id: 'PS-2605', caseId: 'CS-2605', status: '已產出', generatedAt: '2026-07-10 10:00', generatedBy: '張家豪' },
  { id: 'PS-2606', caseId: 'CS-2606', status: '草稿', generatedAt: null, generatedBy: '—' },
  { id: 'PS-2607', caseId: 'CS-2607', status: '已產出', generatedAt: '2026-07-12 10:00', generatedBy: '林雅婷' },
  { id: 'PS-2608', caseId: 'CS-2608', status: '已產出', generatedAt: '2026-06-23 10:00', generatedBy: '王志成' },
  { id: 'PS-2609', caseId: 'CS-2609', status: '已產出', generatedAt: '2026-05-25 10:00', generatedBy: '李佳玲' },
  { id: 'PS-2610', caseId: 'CS-2610', status: '已產出', generatedAt: '2026-06-28 10:00', generatedBy: '張家豪' },
];

export const samplingPlanItems = [
  { id: 'SPI-01', caseId: 'CS-2601', seq: 1, segCode: 'SEG-A', deptName: '製程一部', workArea: '反應槽區', substanceId: 'SB-01', samplingTypeCode: '個人採樣', pointCount: 8 },
  { id: 'SPI-02', caseId: 'CS-2601', seq: 2, segCode: 'SEG-B', deptName: '製程二部', workArea: '調配區', substanceId: 'SB-02', samplingTypeCode: '個人採樣', pointCount: 6 },
  { id: 'SPI-03', caseId: 'CS-2601', seq: 3, segCode: 'SEG-C', deptName: '倉儲部', workArea: '溶劑倉儲區', substanceId: 'SB-03', samplingTypeCode: '範圍採樣', pointCount: 5 },
  { id: 'SPI-04', caseId: 'CS-2603', seq: 1, segCode: 'SEG-A', deptName: 'CNC加工部', workArea: '車床區', substanceId: 'SB-06', samplingTypeCode: '個人採樣', pointCount: 6 },
  { id: 'SPI-05', caseId: 'CS-2603', seq: 2, segCode: 'SEG-B', deptName: 'CNC加工部', workArea: '研磨區', substanceId: 'SB-05', samplingTypeCode: '個人採樣', pointCount: 4 },
  { id: 'SPI-06', caseId: 'CS-2604', seq: 1, segCode: 'SEG-A', deptName: '紡紗部', workArea: '紡紗機台區', substanceId: 'SB-01', samplingTypeCode: '個人採樣', pointCount: 5 },
  { id: 'SPI-07', caseId: 'CS-2604', seq: 2, segCode: 'SEG-B', deptName: '織布部', workArea: '織布機台區', substanceId: 'SB-02', samplingTypeCode: '個人採樣', pointCount: 4 },
  { id: 'SPI-08', caseId: 'CS-2604', seq: 3, segCode: 'SEG-C', deptName: '染整部', workArea: '染整作業區', substanceId: 'SB-03', samplingTypeCode: '範圍採樣', pointCount: 3 },
  { id: 'SPI-09', caseId: 'CS-2608', seq: 1, segCode: 'SEG-A', deptName: '鑄造部', workArea: '熔爐區', substanceId: 'SB-07', samplingTypeCode: '個人採樣', pointCount: 7 },
  { id: 'SPI-10', caseId: 'CS-2608', seq: 2, segCode: 'SEG-B', deptName: '鑄造部', workArea: '澆鑄區', substanceId: 'SB-07', samplingTypeCode: '範圍採樣', pointCount: 3 },
  { id: 'SPI-11', caseId: 'CS-2610', seq: 1, segCode: 'SEG-A', deptName: '儲運部', workArea: '儲槽區A', substanceId: 'SB-10', samplingTypeCode: '個人採樣', pointCount: 4 },
  { id: 'SPI-12', caseId: 'CS-2610', seq: 2, segCode: 'SEG-B', deptName: '儲運部', workArea: '儲槽區B', substanceId: 'SB-09', samplingTypeCode: '個人採樣', pointCount: 3 },
  { id: 'SPI-13', caseId: 'CS-2610', seq: 3, segCode: 'SEG-C', deptName: '管線部', workArea: '輸送管線區', substanceId: 'SB-10', samplingTypeCode: '範圍採樣', pointCount: 2 },
];

// 現場採樣記錄 — mobile-first entity (only pump-based air sampling cases)
export const samplingRecords = [
  { id: 'SR-260101', caseId: 'CS-2601', monitorNo: 'M01', locationDesc: '反應槽區個人採樣點#1', avgFlowRate: 199.8, startTime: '2026-03-15 08:30', endTime: '2026-03-15 16:30', entryMode: '現場登錄', recordedBy: '陳建宏' },
  { id: 'SR-260102', caseId: 'CS-2601', monitorNo: 'M02', locationDesc: '調配區個人採樣點#1', avgFlowRate: 200.1, startTime: '2026-03-15 08:35', endTime: '2026-03-15 16:35', entryMode: '現場登錄', recordedBy: '陳建宏' },
  { id: 'SR-260301', caseId: 'CS-2603', monitorNo: 'M01', locationDesc: '車床區個人採樣點#1', avgFlowRate: 2050, startTime: '2026-06-10 08:30', endTime: '2026-06-10 16:30', entryMode: '現場登錄', recordedBy: '王志成' },
  { id: 'SR-260302', caseId: 'CS-2603', monitorNo: 'M02', locationDesc: '研磨區個人採樣點#1', avgFlowRate: 1980, startTime: '2026-06-10 08:35', endTime: '2026-06-10 16:35', entryMode: '現場登錄', recordedBy: '王志成' },
  { id: 'SR-260401', caseId: 'CS-2604', monitorNo: 'M01', locationDesc: '紡紗機台區採樣點#1', avgFlowRate: 205, startTime: '2026-06-25 08:20', endTime: '2026-06-25 16:20', entryMode: '現場登錄', recordedBy: '李佳玲' },
  { id: 'SR-260402', caseId: 'CS-2604', monitorNo: 'M02', locationDesc: '織布機台區採樣點#1', avgFlowRate: 198, startTime: '2026-06-25 08:25', endTime: '2026-06-25 16:25', entryMode: '事後補登', recordedBy: '李佳玲' },
  { id: 'SR-260403', caseId: 'CS-2604', monitorNo: 'M03', locationDesc: '染整作業區（範圍）', avgFlowRate: 210, startTime: '2026-06-26 08:30', endTime: '2026-06-26 16:30', entryMode: '現場登錄', recordedBy: '李佳玲' },
  { id: 'SR-260801', caseId: 'CS-2608', monitorNo: 'M01', locationDesc: '熔爐區個人採樣點#1', avgFlowRate: 1850, startTime: '2026-06-28 08:15', endTime: '2026-06-28 16:15', entryMode: '現場登錄', recordedBy: '王志成' },
  { id: 'SR-260802', caseId: 'CS-2608', monitorNo: 'M02', locationDesc: '澆鑄區（範圍）', avgFlowRate: 1920, startTime: '2026-06-28 08:20', endTime: '2026-06-28 16:20', entryMode: '現場登錄', recordedBy: '王志成' },
  { id: 'SR-261001', caseId: 'CS-2610', monitorNo: 'M01', locationDesc: '儲槽區A採樣點#1', avgFlowRate: 195, startTime: '2026-07-02 08:10', endTime: '2026-07-02 16:10', entryMode: '現場登錄', recordedBy: '張家豪' },
  { id: 'SR-261002', caseId: 'CS-2610', monitorNo: 'M02', locationDesc: '儲槽區B採樣點#1', avgFlowRate: 188, startTime: '2026-07-02 08:15', endTime: '2026-07-02 16:15', entryMode: '現場登錄', recordedBy: '張家豪' },
  { id: 'SR-261003', caseId: 'CS-2610', monitorNo: 'M03', locationDesc: '輸送管線區（範圍）', avgFlowRate: 200, startTime: '2026-07-03 08:20', endTime: '2026-07-03 16:20', entryMode: '事後補登', recordedBy: '張家豪' },
];

export const samples = [
  { id: 'SM-260101', caseId: 'CS-2601', substanceId: 'SB-01', mediumTypeCode: '活性碳管', isBlank: false, status: '已完成' },
  { id: 'SM-260102', caseId: 'CS-2601', substanceId: 'SB-02', mediumTypeCode: '活性碳管', isBlank: false, status: '已完成' },
  { id: 'SM-260103', caseId: 'CS-2601', substanceId: 'SB-03', mediumTypeCode: '活性碳管', isBlank: false, status: '已完成' },
  { id: 'SM-260104', caseId: 'CS-2601', substanceId: 'SB-01', mediumTypeCode: '活性碳管', isBlank: true, status: '已完成' },
  { id: 'SM-260301', caseId: 'CS-2603', substanceId: 'SB-06', mediumTypeCode: '濾紙', isBlank: false, status: '已完成' },
  { id: 'SM-260302', caseId: 'CS-2603', substanceId: 'SB-05', mediumTypeCode: '濾紙', isBlank: false, status: '檢測中' },
  { id: 'SM-260303', caseId: 'CS-2603', substanceId: 'SB-06', mediumTypeCode: '濾紙', isBlank: true, status: '檢測中' },
  { id: 'SM-260401', caseId: 'CS-2604', substanceId: 'SB-01', mediumTypeCode: '活性碳管', isBlank: false, status: '已採樣' },
  { id: 'SM-260402', caseId: 'CS-2604', substanceId: 'SB-02', mediumTypeCode: '活性碳管', isBlank: false, status: '已採樣' },
  { id: 'SM-260403', caseId: 'CS-2604', substanceId: 'SB-03', mediumTypeCode: '活性碳管', isBlank: false, status: '待採樣' },
  { id: 'SM-260801', caseId: 'CS-2608', substanceId: 'SB-07', mediumTypeCode: '濾紙', isBlank: false, status: '已完成' },
  { id: 'SM-260802', caseId: 'CS-2608', substanceId: 'SB-07', mediumTypeCode: '濾紙', isBlank: false, status: '檢測中' },
  { id: 'SM-260803', caseId: 'CS-2608', substanceId: 'SB-07', mediumTypeCode: '濾紙', isBlank: true, status: '檢測中' },
  { id: 'SM-261001', caseId: 'CS-2610', substanceId: 'SB-10', mediumTypeCode: '活性碳管', isBlank: false, status: '已採樣' },
  { id: 'SM-261002', caseId: 'CS-2610', substanceId: 'SB-09', mediumTypeCode: '活性碳管', isBlank: false, status: '已採樣' },
  { id: 'SM-261003', caseId: 'CS-2610', substanceId: 'SB-10', mediumTypeCode: '活性碳管', isBlank: false, status: '待採樣' },
];

export const testResults = [
  { id: 'TR-0001', sampleId: 'SM-260101', substanceId: 'SB-01', resultValue: '12.4', resultUnit: 'ppm', enteredAt: '2026-03-22 14:00' },
  { id: 'TR-0002', sampleId: 'SM-260102', substanceId: 'SB-02', resultValue: '8.7', resultUnit: 'ppm', enteredAt: '2026-03-22 14:05' },
  { id: 'TR-0003', sampleId: 'SM-260103', substanceId: 'SB-03', resultValue: '15.2', resultUnit: 'ppm', enteredAt: '2026-03-22 14:10' },
  { id: 'TR-0004', sampleId: 'SM-260104', substanceId: 'SB-01', resultValue: 'ND（未檢出）', resultUnit: 'ppm', enteredAt: '2026-03-22 14:12' },
  { id: 'TR-0005', sampleId: 'SM-260301', substanceId: 'SB-06', resultValue: '0.82', resultUnit: 'mg/m³', enteredAt: '2026-06-18 10:00' },
  { id: 'TR-0006', sampleId: 'SM-260801', substanceId: 'SB-07', resultValue: '0.018', resultUnit: 'mg/m³', enteredAt: '2026-07-05 11:00' },
];

export const recordSheets = [
  { id: 'RS-2601', caseId: 'CS-2601', generatedAt: '2026-03-25 09:00', generatedBy: '陳建宏', exportedAt: '2026-03-25 09:30' },
  { id: 'RS-2602', caseId: 'CS-2602', generatedAt: '2026-04-28 09:00', generatedBy: '林雅婷', exportedAt: '2026-04-28 09:15' },
  { id: 'RS-2609', caseId: 'CS-2609', generatedAt: '2026-06-03 09:00', generatedBy: '李佳玲', exportedAt: '2026-06-03 09:20' },
];

// ---- Case-hub aggregation ---------------------------------------------------
export function getCaseBundle(caseId) {
  return {
    client: byId(clients, (byId(cases, caseId) || {}).clientId),
    quotation: quotations.find(q => q.caseId === caseId) || null,
    preSamplingSheet: preSamplingSheets.find(p => p.caseId === caseId) || null,
    planItems: samplingPlanItems.filter(p => p.caseId === caseId),
    samplingRecords: samplingRecords.filter(r => r.caseId === caseId),
    flowCalibrations: flowCalibrations.filter(f => f.caseId === caseId),
    noiseCalibrations: noiseCalibrations.filter(n => n.caseId === caseId),
    samples: samples.filter(s => s.caseId === caseId),
    recordSheet: recordSheets.find(r => r.caseId === caseId) || null,
  };
}
export function getSampleResult(sampleId) {
  return testResults.find(t => t.sampleId === sampleId) || null;
}

// ============================================================================
// Navigation map
// ============================================================================
export const NAV_SECTIONS = [
  { section: '總覽', items: [
    { key: 'dashboard', label: '案件進度儀表板', kind: 'dashboard' },
  ]},
  { section: '業務流程', items: [
    { key: 'case', label: '案件列表', kind: 'case' },
    { key: 'quotation', label: '報價單列表', kind: 'quotation' },
  ]},
  { section: '採樣作業', items: [
    { key: 'preSamplingSheet', label: '採前表列表', kind: 'simple', moduleKey: 'preSamplingSheet' },
    { key: 'samplingPlanItem', label: '採樣點規劃（附件四）', kind: 'simple', moduleKey: 'samplingPlanItem' },
    { key: 'samplingRecord', label: '現場採樣記錄列表', kind: 'samplingRecord', mobileTag: true },
    { key: 'flowCalibrationRecord', label: '流速校正紀錄列表', kind: 'simple', moduleKey: 'flowCalibrationRecord' },
    { key: 'noiseCalibrationRecord', label: '噪音校正紀錄列表', kind: 'simple', moduleKey: 'noiseCalibrationRecord' },
  ]},
  { section: '樣品與檢測', items: [
    { key: 'sample', label: '樣品清單／檢測結果', kind: 'sample' },
  ]},
  { section: '記錄產出', items: [
    { key: 'monitoringRecordSheet', label: '監測記錄表列表', kind: 'simple', moduleKey: 'monitoringRecordSheet' },
  ]},
  { section: '基礎資料', items: [
    { key: 'client', label: '客戶列表', kind: 'simple', moduleKey: 'client' },
    { key: 'priceItem', label: '價目主檔', kind: 'simple', moduleKey: 'priceItem' },
    { key: 'substance', label: '監測物質主檔', kind: 'simple', moduleKey: 'substance' },
    { key: 'analysisMethodGroup', label: '分析方法群組主檔', kind: 'simple', moduleKey: 'analysisMethodGroup' },
    { key: 'equipment', label: '儀器設備主檔', kind: 'simple', moduleKey: 'equipment' },
    { key: 'userAccount', label: '使用者帳號列表', kind: 'simple', moduleKey: 'userAccount' },
  ]},
];

// ============================================================================
// Generic "simple module" config — list + basic form for the 11 non-core entities
// ============================================================================
export const SIMPLE_MODULES = {
  analysisMethodGroup: {
    label: '分析方法群組主檔', singular: '分析方法群組', data: methodGroups, idField: 'id', idPrefix: 'MG',
    columns: [
      { field: 'id', label: '分析方法群組代號', type: 'link' },
      { field: 'desorbent', label: '脫附劑', type: 'text' },
      { field: 'revisionDate', label: '修訂日期', type: 'text' },
      { field: 'methodVersion', label: '方法版次', type: 'text' },
      { field: 'active', label: '啟用', type: 'badge' },
    ],
    filters: [ { field: 'id', label: '分析方法群組代號' }, { field: 'active', label: '啟用' } ],
    formFields: [
      { field: 'desorbent', label: '脫附劑', widget: 'text', required: true },
      { field: 'methodVersion', label: '方法版次', widget: 'text', required: true },
      { field: 'revisionDate', label: '修訂日期', widget: 'date', required: true },
      { field: 'active', label: '啟用', widget: 'select', options: ['啟用', '停用'], required: true },
    ],
  },
  client: {
    label: '客戶列表', singular: '客戶', data: clients, idField: 'id', idPrefix: 'CL',
    columns: [
      { field: 'id', label: '客戶編號', type: 'link' },
      { field: 'name', label: '客戶名稱', type: 'text' },
      { field: 'industry', label: '行業別', type: 'text' },
      { field: 'contact', label: '聯絡人', type: 'text' },
      { field: 'status', label: '狀態', type: 'badge' },
    ],
    filters: [ { field: 'name', label: '客戶名稱' }, { field: 'status', label: '狀態' } ],
    formFields: [
      { field: 'name', label: '客戶名稱', widget: 'text', required: true },
      { field: 'industry', label: '行業別', widget: 'select', options: ['化工業','電子業','機械業','紡織業','重工業','塑膠業','製藥業','食品業'], required: true },
      { field: 'contact', label: '聯絡人', widget: 'text', required: true },
      { field: 'phone', label: '聯絡電話', widget: 'text' },
      { field: 'address', label: '地址', widget: 'text' },
      { field: 'status', label: '狀態', widget: 'select', options: ['啟用', '停用'], required: true },
    ],
  },
  equipment: {
    label: '儀器設備主檔', singular: '儀器設備', data: equipment, idField: 'id', idPrefix: 'EQ',
    columns: [
      { field: 'id', label: '儀器編號', type: 'link' },
      { field: 'equipmentType', label: '儀器類型', type: 'badge' },
      { field: 'modelName', label: '型號', type: 'text' },
      { field: 'active', label: '啟用', type: 'badge' },
    ],
    filters: [ { field: 'equipmentType', label: '儀器類型' }, { field: 'active', label: '啟用' } ],
    formFields: [
      { field: 'equipmentType', label: '儀器類型', widget: 'select', options: ['採樣幫浦','噪音計','流量校正器','風速計'], required: true },
      { field: 'modelName', label: '型號', widget: 'text', required: true },
      { field: 'active', label: '啟用', widget: 'select', options: ['啟用', '停用'], required: true },
    ],
  },
  flowCalibrationRecord: {
    label: '流速校正紀錄列表', singular: '流速校正記錄', data: flowCalibrations, idField: 'id', idPrefix: 'FC',
    columns: [
      { field: 'id', label: '校正紀錄編號', type: 'link' },
      { field: 'equipmentId', label: '幫浦', type: 'ref', refData: 'equipment', refDisplay: 'modelName' },
      { field: 'preFlowRate', label: '採樣前流率(ml/min)', type: 'text' },
      { field: 'postFlowRate', label: '採樣後流率(ml/min)', type: 'text' },
      { field: 'avgFlowRate', label: '平均流率(ml/min)', type: 'text' },
      { field: 'errorOver5Pct', label: '誤差逾5%', type: 'bool', trueLabel: '是', falseLabel: '否', trueColor: 'red', falseColor: 'green' },
      { field: 'postGreaterThanPre', label: '後流率大於前流率', type: 'bool', trueLabel: '是', falseLabel: '否', trueColor: 'amber', falseColor: 'gray' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'equipmentId', label: '幫浦' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'equipmentId', label: '幫浦', widget: 'select-equipment', filterType: '採樣幫浦', required: true },
      { field: 'preFlowRate', label: '採樣前流率(ml/min)', widget: 'number', required: true },
      { field: 'postFlowRate', label: '採樣後流率(ml/min)', widget: 'number', required: true },
      { field: 'calibratedBy', label: '校正人員', widget: 'text' },
      { field: 'calibrationDate', label: '校正日期', widget: 'date' },
    ],
  },
  monitoringRecordSheet: {
    label: '監測記錄表列表', singular: '監測記錄表', data: recordSheets, idField: 'id', readOnly: true,
    columns: [
      { field: 'id', label: '記錄表編號', type: 'link' },
      { field: 'caseId', label: '案件', type: 'ref', refData: 'cases', refDisplay: 'name' },
      { field: 'generatedAt', label: '產出時間', type: 'text' },
      { field: 'generatedBy', label: '產出人員', type: 'text' },
      { field: 'exportedAt', label: '匯出時間', type: 'text' },
    ],
    filters: [ { field: 'caseId', label: '案件' } ],
    formFields: [],
  },
  noiseCalibrationRecord: {
    label: '噪音校正紀錄列表', singular: '噪音校正記錄', data: noiseCalibrations, idField: 'id', idPrefix: 'NC',
    columns: [
      { field: 'id', label: '校正紀錄編號', type: 'link' },
      { field: 'equipmentId', label: '噪音計', type: 'ref', refData: 'equipment', refDisplay: 'modelName' },
      { field: 'calibratedTo114', label: '校正為114dBA', type: 'bool', trueLabel: '是', falseLabel: '否', trueColor: 'green', falseColor: 'red' },
      { field: 'measuredBy', label: '量測人員', type: 'text' },
      { field: 'calibrationDate', label: '校正日期', type: 'text' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'equipmentId', label: '噪音計' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'equipmentId', label: '噪音計', widget: 'select-equipment', filterType: '噪音計', required: true },
      { field: 'calibratedTo114', label: '校正為114dBA', widget: 'select', options: ['是', '否'], required: true },
      { field: 'measuredBy', label: '量測人員', widget: 'text' },
      { field: 'calibrationDate', label: '校正日期', widget: 'date' },
    ],
  },
  preSamplingSheet: {
    label: '採前表列表', singular: '採前表', data: preSamplingSheets, idField: 'id', idPrefix: 'PS',
    columns: [
      { field: 'id', label: '採前表編號', type: 'link' },
      { field: 'caseId', label: '案件', type: 'ref', refData: 'cases', refDisplay: 'name' },
      { field: 'status', label: '採前表狀態', type: 'badge' },
      { field: 'generatedAt', label: '產出時間', type: 'text' },
      { field: 'generatedBy', label: '產出人員', type: 'text' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'status', label: '採前表狀態' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'status', label: '採前表狀態', widget: 'select', options: ['草稿', '已產出'], required: true },
      { field: 'generatedBy', label: '產出人員', widget: 'text' },
    ],
  },
  priceItem: {
    label: '價目主檔', singular: '價目', data: priceItems, idField: 'id', idPrefix: 'PI',
    columns: [
      { field: 'id', label: '價目編號', type: 'link' },
      { field: 'itemName', label: '項目名稱', type: 'text' },
      { field: 'unit', label: '單位', type: 'text' },
      { field: 'normalPrice', label: '正常單價', type: 'currency' },
      { field: 'laborOldPrice', label: '勞檢單價(舊)', type: 'currency' },
      { field: 'laborNewPrice', label: '勞檢單價(新)', type: 'currency' },
    ],
    filters: [ { field: 'itemName', label: '項目名稱' } ],
    formFields: [
      { field: 'itemName', label: '項目名稱', widget: 'text', required: true },
      { field: 'unit', label: '單位', widget: 'select', options: ['單點', '點', '式'], required: true },
      { field: 'normalPrice', label: '正常單價', widget: 'number', required: true },
      { field: 'laborOldPrice', label: '勞檢單價(舊)', widget: 'number', required: true },
      { field: 'laborNewPrice', label: '勞檢單價(新)', widget: 'number', required: true },
    ],
  },
  samplingPlanItem: {
    label: '採樣點規劃（附件四）', singular: '採樣點規劃', data: samplingPlanItems, idField: 'id', idPrefix: 'SPI',
    columns: [
      { field: 'seq', label: '順序', type: 'link' },
      { field: 'segCode', label: 'SEG代號', type: 'text' },
      { field: 'deptName', label: '部門名稱', type: 'text' },
      { field: 'workArea', label: '作業區域', type: 'text' },
      { field: 'substanceId', label: '暴露危害項目', type: 'ref', refData: 'substances', refDisplay: 'name' },
      { field: 'samplingTypeCode', label: '採樣方式', type: 'badge' },
      { field: 'pointCount', label: '採樣點數', type: 'text' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'segCode', label: 'SEG代號' }, { field: 'substanceId', label: '暴露危害項目' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'segCode', label: 'SEG代號', widget: 'text', required: true },
      { field: 'deptName', label: '部門名稱', widget: 'text', required: true },
      { field: 'workArea', label: '作業區域', widget: 'text', required: true },
      { field: 'substanceId', label: '暴露危害項目', widget: 'select-substance', required: true },
      { field: 'samplingTypeCode', label: '採樣方式', widget: 'select', options: ['個人採樣', '範圍採樣'], required: true },
      { field: 'pointCount', label: '採樣點數', widget: 'number', required: true },
    ],
  },
  substance: {
    label: '監測物質主檔', singular: '監測物質', data: substances, idField: 'id', idPrefix: 'SB',
    columns: [
      { field: 'id', label: '物質編號', type: 'link' },
      { field: 'name', label: '物質名稱', type: 'text' },
      { field: 'casNo', label: 'CAS No.', type: 'text' },
      { field: 'categoryCode', label: '物質類別', type: 'badge' },
      { field: 'methodGroupId', label: '分析方法群組', type: 'ref', refData: 'methodGroups', refDisplay: 'methodVersion' },
      { field: 'mediumTypeCode', label: '採樣介質', type: 'text' },
    ],
    filters: [ { field: 'name', label: '物質名稱' }, { field: 'methodGroupId', label: '分析方法群組' }, { field: 'categoryCode', label: '物質類別' } ],
    formFields: [
      { field: 'name', label: '物質名稱', widget: 'text', required: true },
      { field: 'nameEn', label: '英文名稱', widget: 'text' },
      { field: 'casNo', label: 'CAS No.', widget: 'text' },
      { field: 'categoryCode', label: '物質類別', widget: 'select', options: ['有機溶劑','粉塵','重金屬','物理性'], required: true },
      { field: 'methodGroupId', label: '分析方法群組', widget: 'select-methodgroup', required: true },
      { field: 'mediumTypeCode', label: '採樣介質', widget: 'select', options: ['活性碳管', '濾紙', '直讀式'], required: true },
    ],
  },
  userAccount: {
    label: '使用者帳號列表', singular: '使用者帳號', data: userAccounts, idField: 'id', idPrefix: 'U',
    columns: [
      { field: 'id', label: '使用者帳號', type: 'link' },
      { field: 'name', label: '姓名', type: 'text' },
      { field: 'qualificationNo', label: '監測人員資格文號', type: 'text' },
      { field: 'status', label: '帳號狀態', type: 'badge' },
    ],
    filters: [ { field: 'name', label: '姓名' }, { field: 'status', label: '帳號狀態' } ],
    formFields: [
      { field: 'name', label: '姓名', widget: 'text', required: true },
      { field: 'qualificationNo', label: '監測人員資格文號', widget: 'text', required: true },
      { field: 'status', label: '帳號狀態', widget: 'select', options: ['啟用', '停用'], required: true },
    ],
  },
  quotation: {
    label: '報價單列表', singular: '報價單', data: quotations, idField: 'id', idPrefix: 'QT',
    columns: [
      { field: 'id', label: '報價單編號', type: 'link' },
      { field: 'caseId', label: '案件', type: 'ref', refData: 'cases', refDisplay: 'name' },
      { field: 'quoteDate', label: '報價日期', type: 'text' },
      { field: 'priceTypeCode', label: '價格類型', type: 'badge' },
      { field: 'status', label: '狀態', type: 'badge' },
      { field: 'totalAmount', label: '總金額', type: 'currency' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'status', label: '狀態' } ],
    readOnly: true,
    formFields: [],
  },
  samplingRecord: {
    label: '現場採樣記錄列表', singular: '採樣記錄', data: samplingRecords, idField: 'id', idPrefix: 'SR',
    columns: [
      { field: 'id', label: '記錄編號', type: 'link' },
      { field: 'caseId', label: '案件', type: 'ref', refData: 'cases', refDisplay: 'name' },
      { field: 'monitorNo', label: '監測編號', type: 'text' },
      { field: 'locationDesc', label: '採樣位置', type: 'text' },
      { field: 'avgFlowRate', label: '平均流率', type: 'text' },
      { field: 'entryMode', label: '登錄方式', type: 'badge' },
      { field: 'recordedBy', label: '記錄人員', type: 'text' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'entryMode', label: '登錄方式' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'monitorNo', label: '監測編號', widget: 'text', required: true },
      { field: 'locationDesc', label: '採樣位置', widget: 'text', required: true },
      { field: 'avgFlowRate', label: '平均流率', widget: 'number' },
      { field: 'startTime', label: '開始時間', widget: 'date' },
      { field: 'endTime', label: '結束時間', widget: 'date' },
      { field: 'entryMode', label: '登錄方式', widget: 'select', options: ['現場登錄', '事後補登'], required: true },
      { field: 'recordedBy', label: '記錄人員', widget: 'text' },
    ],
  },
  sample: {
    label: '樣品清單／檢測結果', singular: '樣品', data: samples, idField: 'id', idPrefix: 'SM',
    columns: [
      { field: 'id', label: '樣品編號', type: 'link' },
      { field: 'caseId', label: '案件', type: 'ref', refData: 'cases', refDisplay: 'name' },
      { field: 'substanceId', label: '監測物質', type: 'ref', refData: 'substances', refDisplay: 'name' },
      { field: 'mediumTypeCode', label: '採樣介質', type: 'text' },
      { field: 'isBlank', label: '空白樣品', type: 'bool', trueLabel: '是', falseLabel: '否', trueColor: 'amber', falseColor: 'gray' },
      { field: 'status', label: '樣品狀態', type: 'badge' },
    ],
    filters: [ { field: 'caseId', label: '案件' }, { field: 'substanceId', label: '監測物質' }, { field: 'status', label: '樣品狀態' } ],
    formFields: [
      { field: 'caseId', label: '案件', widget: 'select-case', required: true },
      { field: 'substanceId', label: '監測物質', widget: 'select-substance', required: true },
      { field: 'mediumTypeCode', label: '採樣介質', widget: 'select', options: ['活性碳管', '濾紙', '直讀式'], required: true },
      { field: 'isBlank', label: '空白樣品', widget: 'select', options: ['是', '否'] },
      { field: 'status', label: '樣品狀態', widget: 'select', options: ['待採樣', '已採樣', '檢測中', '已完成'], required: true },
    ],
  },
};

export const REF_TABLES = { equipment, cases, substances, methodGroups, clients };
export const FK_MAP = {
  caseId: { table: 'cases', display: 'name' },
  clientId: { table: 'clients', display: 'name' },
  equipmentId: { table: 'equipment', display: 'modelName' },
  substanceId: { table: 'substances', display: 'name' },
  methodGroupId: { table: 'methodGroups', display: 'methodVersion' },
};
export function resolveRef(field, value) {
  const map = FK_MAP[field];
  if (!map) return value;
  const rec = byId(REF_TABLES[map.table], value);
  return rec ? rec[map.display] : (value || '—');
}
export function nextId(prefix, arr) {
  let n = arr.length + 1;
  let id;
  do { id = prefix + '-' + String(n).padStart(2, '0'); n++; } while (arr.some(r => r.id === id));
  return id;
}
