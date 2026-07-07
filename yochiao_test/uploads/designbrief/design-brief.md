# yochiao_app UI Design Brief

> **Purpose**: This document is a structured design brief auto-generated from
> `haPDL` (page intent specs) + `schema.dbml` (data model) + `haARM` (access control).
> Feed this entire document to **Claude Design** or any AI design tool to generate
> Hi-Fi mockups, HTML, or React component code.
>
> **System**: 友喬作業環境監測業務 E 化系統：涵蓋監測計畫書、報價、採樣、檢測明細、機台校正與報告產出流程
> **Language**: Traditional Chinese (zh-TW)
> **Target framework**: React + Ant Design (or shadcn/ui)

---


## Design System

> Use this as the global design language for all pages.

### Color Palette

| Token | Value | Usage |
|:---|:---|:---|
| `--primary` | `#2563eb` (Blue 600) | Primary buttons, links, active states |
| `--primary-hover` | `#1d4ed8` (Blue 700) | Hover state |
| `--success` | `#16a34a` (Green 600) | Approve actions, success states |
| `--danger` | `#dc2626` (Red 600) | Delete, reject actions |
| `--warning` | `#d97706` (Amber 600) | Warnings, adjust actions |
| `--bg-page` | `#f8fafc` (Slate 50) | Page background |
| `--bg-card` | `#ffffff` | Card/panel backgrounds |
| `--bg-header` | `#1e293b` (Slate 800) | Top navigation / sidebar |
| `--border` | `#e2e8f0` (Slate 200) | Borders, dividers |
| `--text-primary` | `#0f172a` (Slate 900) | Headings, labels |
| `--text-secondary` | `#64748b` (Slate 500) | Descriptions, hints |
| `--badge-blue` | `#dbeafe` bg / `#1e40af` text | Status badges (info) |
| `--badge-green` | `#dcfce7` bg / `#166534` text | Status badges (success) |
| `--badge-amber` | `#fef3c7` bg / `#92400e` text | Status badges (warning) |
| `--badge-red` | `#fee2e2` bg / `#991b1b` text | Status badges (danger) |
| `--badge-gray` | `#f1f5f9` bg / `#475569` text | Status badges (neutral) |

### Typography

| Element | Font | Size | Weight |
|:---|:---|:---|:---|
| Page title | Noto Sans TC | 20px | 700 |
| Section heading | Noto Sans TC | 16px | 600 |
| Table header | Noto Sans TC | 13px | 600 |
| Body text | Noto Sans TC | 14px | 400 |
| Label | Noto Sans TC | 13px | 600 |
| Badge | JetBrains Mono | 12px | 500 |
| Button | Noto Sans TC | 14px | 500 |
| Hint/caption | Noto Sans TC | 12px | 400 |

### Spacing

| Token | Value |
|:---|:---|
| Page padding | 24px |
| Card padding | 20px |
| Form field gap | 16px |
| Table cell padding | 12px 16px |
| Button padding | 8px 20px |
| Border radius (card) | 8px |
| Border radius (button) | 6px |
| Border radius (input) | 6px |
| Border radius (badge) | 4px |

### Component Library (reference)

Use **Ant Design** or **shadcn/ui** component patterns:
- Table: sortable headers, row hover, row actions menu
- Form: label-left layout (label 120px, input flex-1), validation messages
- Select: searchable dropdown with Chinese labels
- DatePicker: range selector for date fields
- Badge: colored status badge with icon
- Button: primary / secondary / ghost / danger variants
- Modal: confirmation dialogs for destructive actions
- Breadcrumb: for navigation context
- Sidebar: collapsible left navigation

### Layout Structure

```
+------------------------------------------+
| Top Nav (dark bg, logo, user menu)       |
+--------+---------------------------------+
| Side   | Breadcrumb                      |
| Nav    +---+-----------------------------+
|        |   | Page Title        [Actions]  |
|        |   +-+---------------------------+
|        |   | | Filter Bar                 |
|        |   | +---------------------------+
|        |   | | Content (Table/Form/Detail)|
|        |   | +---------------------------+
|        |   | | Pagination / Footer        |
+--------+---+-----------------------------+
```

## Page Navigation Map

```
Sidebar Navigation:

  [analysis-method-group]
    ✏ 分析方法群組維護
    ☰ 分析方法群組主檔
  [monitoring-case]
    · 案件進度儀表板
    ✏ 案件建立與維護
    ☰ 案件列表
  [client]
    ✏ 客戶資料維護
    ☰ 客戶列表
  [equipment]
    ✏ 儀器設備維護
    ☰ 儀器設備主檔
  [flow-calibration-record]
    ✏ 流速校正記錄填寫
    ☰ 流速校正紀錄列表
  [monitoring-record-sheet]
    ✏ 產出監測記錄表
    ☰ 監測記錄表列表
  [noise-calibration-record]
    ✏ 噪音校正記錄填寫
    ☰ 噪音校正紀錄列表
  [pre-sampling-sheet]
    ✏ 採前表前製作業填寫
    ☰ 採前表列表
  [price-item]
    ✏ 價目維護
    ☰ 價目主檔
  [quotation]
    ✏ 報價單建立
    ☰ 報價單列表
  [sample]
    ✏ 樣品維護
    ☰ 樣品清單
  [sampling-plan-item]
    ✏ 採樣點規劃逐筆輸入
    ☰ 採樣點規劃（附件四）
  [sampling-record]
    ✏ 現場採樣記錄填寫
    ☰ 現場採樣記錄列表
  [substance]
    ✏ 監測物質維護
    ☰ 監測物質主檔
  [test-result]
    ✏ 檢測結果回填
    ☰ 檢測結果列表
  [user-account]
    ✏ 使用者帳號維護
    ☰ 使用者帳號列表
```

### Page Flow

```
分析方法群組主檔 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

客戶列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

儀器設備主檔 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

流速校正紀錄列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

案件列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

監測記錄表列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

噪音校正紀錄列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

採前表列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

價目主檔 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

報價單列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

樣品清單 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

採樣點規劃（附件四） (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

現場採樣記錄列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

監測物質主檔 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

檢測結果列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

使用者帳號列表 (list)
  ├── [+ 新增] → (form)
  ├── [檢視]   → (detail)
  └── [編輯]   → (form, edit mode)

分析方法群組維護 (form)
  └── [送出/核准] → back to list

客戶資料維護 (form)
  └── [送出/核准] → back to list

儀器設備維護 (form)
  └── [送出/核准] → back to list

流速校正記錄填寫 (form)
  └── [送出/核准] → back to list

案件建立與維護 (form)
  └── [送出/核准] → back to list

產出監測記錄表 (form)
  └── [送出/核准] → back to list

噪音校正記錄填寫 (form)
  └── [送出/核准] → back to list

採前表前製作業填寫 (form)
  └── [送出/核准] → back to list

價目維護 (form)
  └── [送出/核准] → back to list

報價單建立 (form)
  └── [送出/核准] → back to list

樣品維護 (form)
  └── [送出/核准] → back to list

採樣點規劃逐筆輸入 (form)
  └── [送出/核准] → back to list

現場採樣記錄填寫 (form)
  └── [送出/核准] → back to list

監測物質維護 (form)
  └── [送出/核准] → back to list

檢測結果回填 (form)
  └── [送出/核准] → back to list

使用者帳號維護 (form)
  └── [送出/核准] → back to list

```

## Page Specifications

### Page 1: 分析方法群組維護

| Property | Value |
|:---|:---|
| Page ID | `analysis-method-group-form` |
| Type | **FORM** |
| Entity | `AnalysisMethodGroup` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `analysis-method-group-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 2: 分析方法群組主檔

| Property | Value |
|:---|:---|
| Page ID | `analysis-method-group-list` |
| Type | **LIST** |
| Entity | `AnalysisMethodGroup` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `analysis-method-group-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `methodGroupId` | 分析方法群組代號 | Text input | Free text |
| `active` | 啟用 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `methodGroupId` | 分析方法群組代號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `desorbent` | 脫附劑 | text | - | `脫附劑-1`, `脫附劑-2`, `脫附劑-3` |
| 3 | `revisionDate` | 修訂日期 | text | - | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |
| 4 | `methodVersion` | 方法版次 | text | - | `方法版次-1`, `方法版次-2`, `方法版次-3` |
| 5 | `active` | 啟用 | badge | - | `啟用-1`, `啟用-2`, `啟用-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "methodGroupId": "ID-0001",
    "desorbent": "脫附劑-1",
    "revisionDate": "2026-06-01 09:00",
    "methodVersion": "方法版次-1",
    "active": "啟用-1"
  },
  {
    "methodGroupId": "ID-0002",
    "desorbent": "脫附劑-2",
    "revisionDate": "2026-06-02 09:00",
    "methodVersion": "方法版次-2",
    "active": "啟用-2"
  },
  {
    "methodGroupId": "ID-0003",
    "desorbent": "脫附劑-3",
    "revisionDate": "2026-06-03 09:00",
    "methodVersion": "方法版次-3",
    "active": "啟用-3"
  }
]
```


---

### Page 3: 案件進度儀表板

| Property | Value |
|:---|:---|
| Page ID | `case-dashboard` |
| Type | **DASHBOARD** |
| Entity | `MonitoringCase` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `case-dashboard.hapdl.yaml` |


---

### Page 4: 客戶資料維護

| Property | Value |
|:---|:---|
| Page ID | `client-form` |
| Type | **FORM** |
| Entity | `Client` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `client-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 5: 客戶列表

| Property | Value |
|:---|:---|
| Page ID | `client-list` |
| Type | **LIST** |
| Entity | `Client` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `client-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `clientName` | 客戶名稱 | Text input | Free text |
| `status` | 狀態 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `clientId` | 客戶編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `clientName` | 客戶名稱 | text | - | `客戶名稱-1`, `客戶名稱-2`, `客戶名稱-3` |
| 3 | `industry` | 行業別 | text | - | `行業別-1`, `行業別-2`, `行業別-3` |
| 4 | `contactName` | 聯絡人 | text | - | `聯絡人-1`, `聯絡人-2`, `聯絡人-3` |
| 5 | `status` | 狀態 | badge | - | `狀態-1`, `狀態-2`, `狀態-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "clientId": "ID-0001",
    "clientName": "客戶名稱-1",
    "industry": "行業別-1",
    "contactName": "聯絡人-1",
    "status": "狀態-1"
  },
  {
    "clientId": "ID-0002",
    "clientName": "客戶名稱-2",
    "industry": "行業別-2",
    "contactName": "聯絡人-2",
    "status": "狀態-2"
  },
  {
    "clientId": "ID-0003",
    "clientName": "客戶名稱-3",
    "industry": "行業別-3",
    "contactName": "聯絡人-3",
    "status": "狀態-3"
  }
]
```


---

### Page 6: 儀器設備維護

| Property | Value |
|:---|:---|
| Page ID | `equipment-form` |
| Type | **FORM** |
| Entity | `Equipment` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `equipment-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 7: 儀器設備主檔

| Property | Value |
|:---|:---|
| Page ID | `equipment-list` |
| Type | **LIST** |
| Entity | `Equipment` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `equipment-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `equipmentType` | 儀器類型 | Text input | Free text |
| `active` | 啟用 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `equipmentId` | 儀器編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `equipmentType` | 儀器類型 | badge | - | `儀器類型-1`, `儀器類型-2`, `儀器類型-3` |
| 3 | `modelName` | 型號 | text | - | `型號-1`, `型號-2`, `型號-3` |
| 4 | `active` | 啟用 | badge | - | `啟用-1`, `啟用-2`, `啟用-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "equipmentId": "ID-0001",
    "equipmentType": "儀器類型-1",
    "modelName": "型號-1",
    "active": "啟用-1"
  },
  {
    "equipmentId": "ID-0002",
    "equipmentType": "儀器類型-2",
    "modelName": "型號-2",
    "active": "啟用-2"
  },
  {
    "equipmentId": "ID-0003",
    "equipmentType": "儀器類型-3",
    "modelName": "型號-3",
    "active": "啟用-3"
  }
]
```


---

### Page 8: 流速校正記錄填寫

| Property | Value |
|:---|:---|
| Page ID | `flow-calibration-record-form` |
| Type | **FORM** |
| Entity | `FlowCalibrationRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `flow-calibration-record-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 9: 流速校正紀錄列表

| Property | Value |
|:---|:---|
| Page ID | `flow-calibration-record-list` |
| Type | **LIST** |
| Entity | `FlowCalibrationRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `flow-calibration-record-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `equipmentId` | 幫浦 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `calibrationId` | 校正紀錄編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `equipmentId` | 幫浦 | text | - | `幫浦-1`, `幫浦-2`, `幫浦-3` |
| 3 | `preFlowRate` | 採樣前流率(ml/min) | text | - | `採樣前流率(ml/min)-1`, `採樣前流率(ml/min)-2`, `採樣前流率(ml/min)-3` |
| 4 | `postFlowRate` | 採樣後流率(ml/min) | text | - | `採樣後流率(ml/min)-1`, `採樣後流率(ml/min)-2`, `採樣後流率(ml/min)-3` |
| 5 | `avgFlowRate` | 平均流率(ml/min) | text | - | `平均流率(ml/min)-1`, `平均流率(ml/min)-2`, `平均流率(ml/min)-3` |
| 6 | `errorOver5Pct` | 誤差逾5% | badge | - | `誤差逾5%-1`, `誤差逾5%-2`, `誤差逾5%-3` |
| 7 | `postGreaterThanPre` | 後流率大於前流率 | badge | - | `後流率大於前流率-1`, `後流率大於前流率-2`, `後流率大於前流率-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "calibrationId": "ID-0001",
    "equipmentId": "幫浦-1",
    "preFlowRate": "採樣前流率(ml/min)-1",
    "postFlowRate": "採樣後流率(ml/min)-1",
    "avgFlowRate": "平均流率(ml/min)-1",
    "errorOver5Pct": "誤差逾5%-1",
    "postGreaterThanPre": "後流率大於前流率-1"
  },
  {
    "calibrationId": "ID-0002",
    "equipmentId": "幫浦-2",
    "preFlowRate": "採樣前流率(ml/min)-2",
    "postFlowRate": "採樣後流率(ml/min)-2",
    "avgFlowRate": "平均流率(ml/min)-2",
    "errorOver5Pct": "誤差逾5%-2",
    "postGreaterThanPre": "後流率大於前流率-2"
  },
  {
    "calibrationId": "ID-0003",
    "equipmentId": "幫浦-3",
    "preFlowRate": "採樣前流率(ml/min)-3",
    "postFlowRate": "採樣後流率(ml/min)-3",
    "avgFlowRate": "平均流率(ml/min)-3",
    "errorOver5Pct": "誤差逾5%-3",
    "postGreaterThanPre": "後流率大於前流率-3"
  }
]
```


---

### Page 10: 案件建立與維護

| Property | Value |
|:---|:---|
| Page ID | `monitoring-case-form` |
| Type | **FORM** |
| Entity | `MonitoringCase` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `monitoring-case-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 11: 案件列表

| Property | Value |
|:---|:---|
| Page ID | `monitoring-case-list` |
| Type | **LIST** |
| Entity | `MonitoringCase` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `monitoring-case-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `clientId` | 客戶 | Text input | Free text |
| `status` | 案件狀態 | Text input | Free text |
| `monitoringDate` | 監測日期 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `caseId` | 案件編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `caseName` | 案件名稱 | text | - | `案件名稱-1`, `案件名稱-2`, `案件名稱-3` |
| 3 | `clientId` | 客戶 | text | - | `客戶-1`, `客戶-2`, `客戶-3` |
| 4 | `monitoringDate` | 監測日期 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |
| 5 | `status` | 案件狀態 | badge | - | `案件狀態-1`, `案件狀態-2`, `案件狀態-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "caseId": "ID-0001",
    "caseName": "案件名稱-1",
    "clientId": "客戶-1",
    "monitoringDate": "2026-06-01 09:00",
    "status": "案件狀態-1"
  },
  {
    "caseId": "ID-0002",
    "caseName": "案件名稱-2",
    "clientId": "客戶-2",
    "monitoringDate": "2026-06-02 09:00",
    "status": "案件狀態-2"
  },
  {
    "caseId": "ID-0003",
    "caseName": "案件名稱-3",
    "clientId": "客戶-3",
    "monitoringDate": "2026-06-03 09:00",
    "status": "案件狀態-3"
  }
]
```


---

### Page 12: 產出監測記錄表

| Property | Value |
|:---|:---|
| Page ID | `monitoring-record-sheet-form` |
| Type | **FORM** |
| Entity | `MonitoringRecordSheet` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `monitoring-record-sheet-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 13: 監測記錄表列表

| Property | Value |
|:---|:---|
| Page ID | `monitoring-record-sheet-list` |
| Type | **LIST** |
| Entity | `MonitoringRecordSheet` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `monitoring-record-sheet-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `recordSheetId` | 記錄表編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `caseId` | 案件 | text | - | `案件-1`, `案件-2`, `案件-3` |
| 3 | `generatedAt` | 產出時間 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |
| 4 | `generatedBy` | 產出人員 | text | - | `產出人員-1`, `產出人員-2`, `產出人員-3` |
| 5 | `exportedAt` | 匯出時間 | text | - | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "recordSheetId": "ID-0001",
    "caseId": "案件-1",
    "generatedAt": "2026-06-01 09:00",
    "generatedBy": "產出人員-1",
    "exportedAt": "2026-06-01 09:00"
  },
  {
    "recordSheetId": "ID-0002",
    "caseId": "案件-2",
    "generatedAt": "2026-06-02 09:00",
    "generatedBy": "產出人員-2",
    "exportedAt": "2026-06-02 09:00"
  },
  {
    "recordSheetId": "ID-0003",
    "caseId": "案件-3",
    "generatedAt": "2026-06-03 09:00",
    "generatedBy": "產出人員-3",
    "exportedAt": "2026-06-03 09:00"
  }
]
```


---

### Page 14: 噪音校正記錄填寫

| Property | Value |
|:---|:---|
| Page ID | `noise-calibration-record-form` |
| Type | **FORM** |
| Entity | `NoiseCalibrationRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `noise-calibration-record-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 15: 噪音校正紀錄列表

| Property | Value |
|:---|:---|
| Page ID | `noise-calibration-record-list` |
| Type | **LIST** |
| Entity | `NoiseCalibrationRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `noise-calibration-record-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `equipmentId` | 噪音計 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `calibrationId` | 校正紀錄編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `equipmentId` | 噪音計 | text | - | `噪音計-1`, `噪音計-2`, `噪音計-3` |
| 3 | `calibratedTo114` | 校正為114dBA | badge | - | `校正為114dBA-1`, `校正為114dBA-2`, `校正為114dBA-3` |
| 4 | `measuredBy` | 量測人員 | text | - | `量測人員-1`, `量測人員-2`, `量測人員-3` |
| 5 | `calibrationDate` | 校正日期 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "calibrationId": "ID-0001",
    "equipmentId": "噪音計-1",
    "calibratedTo114": "校正為114dBA-1",
    "measuredBy": "量測人員-1",
    "calibrationDate": "2026-06-01 09:00"
  },
  {
    "calibrationId": "ID-0002",
    "equipmentId": "噪音計-2",
    "calibratedTo114": "校正為114dBA-2",
    "measuredBy": "量測人員-2",
    "calibrationDate": "2026-06-02 09:00"
  },
  {
    "calibrationId": "ID-0003",
    "equipmentId": "噪音計-3",
    "calibratedTo114": "校正為114dBA-3",
    "measuredBy": "量測人員-3",
    "calibrationDate": "2026-06-03 09:00"
  }
]
```


---

### Page 16: 採前表前製作業填寫

| Property | Value |
|:---|:---|
| Page ID | `pre-sampling-sheet-form` |
| Type | **FORM** |
| Entity | `PreSamplingSheet` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `pre-sampling-sheet-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 17: 採前表列表

| Property | Value |
|:---|:---|
| Page ID | `pre-sampling-sheet-list` |
| Type | **LIST** |
| Entity | `PreSamplingSheet` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `pre-sampling-sheet-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `status` | 採前表狀態 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `sheetId` | 採前表編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `caseId` | 案件 | text | - | `案件-1`, `案件-2`, `案件-3` |
| 3 | `status` | 採前表狀態 | badge | - | `採前表狀態-1`, `採前表狀態-2`, `採前表狀態-3` |
| 4 | `generatedAt` | 產出時間 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |
| 5 | `generatedBy` | 產出人員 | text | - | `產出人員-1`, `產出人員-2`, `產出人員-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "sheetId": "ID-0001",
    "caseId": "案件-1",
    "status": "採前表狀態-1",
    "generatedAt": "2026-06-01 09:00",
    "generatedBy": "產出人員-1"
  },
  {
    "sheetId": "ID-0002",
    "caseId": "案件-2",
    "status": "採前表狀態-2",
    "generatedAt": "2026-06-02 09:00",
    "generatedBy": "產出人員-2"
  },
  {
    "sheetId": "ID-0003",
    "caseId": "案件-3",
    "status": "採前表狀態-3",
    "generatedAt": "2026-06-03 09:00",
    "generatedBy": "產出人員-3"
  }
]
```


---

### Page 18: 價目維護

| Property | Value |
|:---|:---|
| Page ID | `price-item-form` |
| Type | **FORM** |
| Entity | `PriceItem` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `price-item-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 19: 價目主檔

| Property | Value |
|:---|:---|
| Page ID | `price-item-list` |
| Type | **LIST** |
| Entity | `PriceItem` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `price-item-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `itemName` | 項目名稱 | Text input | Free text |
| `active` | 啟用 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `priceItemId` | 價目編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `itemName` | 項目名稱 | text | - | `項目名稱-1`, `項目名稱-2`, `項目名稱-3` |
| 3 | `unit` | 單位 | text | - | `單位-1`, `單位-2`, `單位-3` |
| 4 | `normalPrice` | 正常單價 | text | - | `正常單價-1`, `正常單價-2`, `正常單價-3` |
| 5 | `laborOldPrice` | 勞檢單價(舊) | text | - | `勞檢單價(舊)-1`, `勞檢單價(舊)-2`, `勞檢單價(舊)-3` |
| 6 | `laborNewPrice` | 勞檢單價(新) | text | - | `勞檢單價(新)-1`, `勞檢單價(新)-2`, `勞檢單價(新)-3` |

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "priceItemId": "ID-0001",
    "itemName": "項目名稱-1",
    "unit": "單位-1",
    "normalPrice": "正常單價-1",
    "laborOldPrice": "勞檢單價(舊)-1",
    "laborNewPrice": "勞檢單價(新)-1"
  },
  {
    "priceItemId": "ID-0002",
    "itemName": "項目名稱-2",
    "unit": "單位-2",
    "normalPrice": "正常單價-2",
    "laborOldPrice": "勞檢單價(舊)-2",
    "laborNewPrice": "勞檢單價(新)-2"
  },
  {
    "priceItemId": "ID-0003",
    "itemName": "項目名稱-3",
    "unit": "單位-3",
    "normalPrice": "正常單價-3",
    "laborOldPrice": "勞檢單價(舊)-3",
    "laborNewPrice": "勞檢單價(新)-3"
  }
]
```


---

### Page 20: 報價單建立

| Property | Value |
|:---|:---|
| Page ID | `quotation-form` |
| Type | **FORM** |
| Entity | `Quotation` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `quotation-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 21: 報價單列表

| Property | Value |
|:---|:---|
| Page ID | `quotation-list` |
| Type | **LIST** |
| Entity | `Quotation` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `quotation-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `clientId` | 客戶 | Text input | Free text |
| `status` | 報價狀態 | Text input | Free text |
| `priceTypeCode` | 價格類型 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `quotationId` | 報價單編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `clientId` | 客戶 | text | - | `客戶-1`, `客戶-2`, `客戶-3` |
| 3 | `quoteDate` | 報價日期 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |
| 4 | `priceTypeCode` | 價格類型 | badge | - | `價格類型-1`, `價格類型-2`, `價格類型-3` |
| 5 | `totalAmount` | 總計 | text | - | `總計-1`, `總計-2`, `總計-3` |
| 6 | `status` | 報價狀態 | badge | - | `報價狀態-1`, `報價狀態-2`, `報價狀態-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "quotationId": "ID-0001",
    "clientId": "客戶-1",
    "quoteDate": "2026-06-01 09:00",
    "priceTypeCode": "價格類型-1",
    "totalAmount": "總計-1",
    "status": "報價狀態-1"
  },
  {
    "quotationId": "ID-0002",
    "clientId": "客戶-2",
    "quoteDate": "2026-06-02 09:00",
    "priceTypeCode": "價格類型-2",
    "totalAmount": "總計-2",
    "status": "報價狀態-2"
  },
  {
    "quotationId": "ID-0003",
    "clientId": "客戶-3",
    "quoteDate": "2026-06-03 09:00",
    "priceTypeCode": "價格類型-3",
    "totalAmount": "總計-3",
    "status": "報價狀態-3"
  }
]
```


---

### Page 22: 樣品維護

| Property | Value |
|:---|:---|
| Page ID | `sample-form` |
| Type | **FORM** |
| Entity | `Sample` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sample-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 23: 樣品清單

| Property | Value |
|:---|:---|
| Page ID | `sample-list` |
| Type | **LIST** |
| Entity | `Sample` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sample-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `isBlank` | 空白樣(BK) | Text input | Free text |
| `status` | 樣品狀態 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `sampleId` | 樣品編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `caseId` | 案件 | text | - | `案件-1`, `案件-2`, `案件-3` |
| 3 | `substanceId` | 監測物質 | text | - | `監測物質-1`, `監測物質-2`, `監測物質-3` |
| 4 | `mediumTypeCode` | 採樣介質 | text | - | `採樣介質-1`, `採樣介質-2`, `採樣介質-3` |
| 5 | `isBlank` | 空白樣(BK) | badge | - | `空白樣(BK)-1`, `空白樣(BK)-2`, `空白樣(BK)-3` |
| 6 | `status` | 樣品狀態 | badge | - | `樣品狀態-1`, `樣品狀態-2`, `樣品狀態-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "sampleId": "ID-0001",
    "caseId": "案件-1",
    "substanceId": "監測物質-1",
    "mediumTypeCode": "採樣介質-1",
    "isBlank": "空白樣(BK)-1",
    "status": "樣品狀態-1"
  },
  {
    "sampleId": "ID-0002",
    "caseId": "案件-2",
    "substanceId": "監測物質-2",
    "mediumTypeCode": "採樣介質-2",
    "isBlank": "空白樣(BK)-2",
    "status": "樣品狀態-2"
  },
  {
    "sampleId": "ID-0003",
    "caseId": "案件-3",
    "substanceId": "監測物質-3",
    "mediumTypeCode": "採樣介質-3",
    "isBlank": "空白樣(BK)-3",
    "status": "樣品狀態-3"
  }
]
```


---

### Page 24: 採樣點規劃逐筆輸入

| Property | Value |
|:---|:---|
| Page ID | `sampling-plan-item-form` |
| Type | **FORM** |
| Entity | `SamplingPlanItem` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sampling-plan-item-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 25: 採樣點規劃（附件四）

| Property | Value |
|:---|:---|
| Page ID | `sampling-plan-item-list` |
| Type | **LIST** |
| Entity | `SamplingPlanItem` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sampling-plan-item-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `segCode` | SEG代號 | Text input | Free text |
| `substanceId` | 暴露危害項目 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `seq` | 順序 | text | Yes | `順序-1`, `順序-2`, `順序-3` |
| 2 | `segCode` | SEG代號 | text | - | `SEG代號-1`, `SEG代號-2`, `SEG代號-3` |
| 3 | `deptName` | 部門名稱 | text | - | `部門名稱-1`, `部門名稱-2`, `部門名稱-3` |
| 4 | `workArea` | 作業區域 | text | - | `作業區域-1`, `作業區域-2`, `作業區域-3` |
| 5 | `substanceId` | 暴露危害項目 | text | - | `暴露危害項目-1`, `暴露危害項目-2`, `暴露危害項目-3` |
| 6 | `samplingTypeCode` | 採樣方式 | badge | - | `採樣方式-1`, `採樣方式-2`, `採樣方式-3` |
| 7 | `pointCount` | 採樣點數 | text | - | `採樣點數-1`, `採樣點數-2`, `採樣點數-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "seq": "順序-1",
    "segCode": "SEG代號-1",
    "deptName": "部門名稱-1",
    "workArea": "作業區域-1",
    "substanceId": "暴露危害項目-1",
    "samplingTypeCode": "採樣方式-1",
    "pointCount": "採樣點數-1"
  },
  {
    "seq": "順序-2",
    "segCode": "SEG代號-2",
    "deptName": "部門名稱-2",
    "workArea": "作業區域-2",
    "substanceId": "暴露危害項目-2",
    "samplingTypeCode": "採樣方式-2",
    "pointCount": "採樣點數-2"
  },
  {
    "seq": "順序-3",
    "segCode": "SEG代號-3",
    "deptName": "部門名稱-3",
    "workArea": "作業區域-3",
    "substanceId": "暴露危害項目-3",
    "samplingTypeCode": "採樣方式-3",
    "pointCount": "採樣點數-3"
  }
]
```


---

### Page 26: 現場採樣記錄填寫

| Property | Value |
|:---|:---|
| Page ID | `sampling-record-form` |
| Type | **FORM** |
| Entity | `SamplingRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sampling-record-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 27: 現場採樣記錄列表

| Property | Value |
|:---|:---|
| Page ID | `sampling-record-list` |
| Type | **LIST** |
| Entity | `SamplingRecord` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `sampling-record-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `caseId` | 案件 | Text input | Free text |
| `monitorNo` | 監測編號 | Text input | Free text |
| `recordedBy` | 記錄人員 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `recordId` | 採樣記錄編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `monitorNo` | 監測編號 | text | - | `監測編號-1`, `監測編號-2`, `監測編號-3` |
| 3 | `locationDesc` | 監測處所 | text | - | `監測處所-1`, `監測處所-2`, `監測處所-3` |
| 4 | `avgFlowRate` | 平均流速(ml/min) | text | - | `平均流速(ml/min)-1`, `平均流速(ml/min)-2`, `平均流速(ml/min)-3` |
| 5 | `startTime` | 監測開始時間 | text | Yes | `監測開始時間-1`, `監測開始時間-2`, `監測開始時間-3` |
| 6 | `entryMode` | 登錄方式 | badge | - | `登錄方式-1`, `登錄方式-2`, `登錄方式-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "recordId": "ID-0001",
    "monitorNo": "監測編號-1",
    "locationDesc": "監測處所-1",
    "avgFlowRate": "平均流速(ml/min)-1",
    "startTime": "監測開始時間-1",
    "entryMode": "登錄方式-1"
  },
  {
    "recordId": "ID-0002",
    "monitorNo": "監測編號-2",
    "locationDesc": "監測處所-2",
    "avgFlowRate": "平均流速(ml/min)-2",
    "startTime": "監測開始時間-2",
    "entryMode": "登錄方式-2"
  },
  {
    "recordId": "ID-0003",
    "monitorNo": "監測編號-3",
    "locationDesc": "監測處所-3",
    "avgFlowRate": "平均流速(ml/min)-3",
    "startTime": "監測開始時間-3",
    "entryMode": "登錄方式-3"
  }
]
```


---

### Page 28: 監測物質維護

| Property | Value |
|:---|:---|
| Page ID | `substance-form` |
| Type | **FORM** |
| Entity | `Substance` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `substance-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 29: 監測物質主檔

| Property | Value |
|:---|:---|
| Page ID | `substance-list` |
| Type | **LIST** |
| Entity | `Substance` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `substance-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `substanceName` | 物質名稱 | Text input | Free text |
| `methodGroupId` | 分析方法群組 | Text input | Free text |
| `categoryCode` | 物質類別 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `substanceId` | 物質編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `substanceName` | 物質名稱 | text | - | `物質名稱-1`, `物質名稱-2`, `物質名稱-3` |
| 3 | `casNo` | CAS No. | text | - | `CAS No.-1`, `CAS No.-2`, `CAS No.-3` |
| 4 | `categoryCode` | 物質類別 | badge | - | `物質類別-1`, `物質類別-2`, `物質類別-3` |
| 5 | `methodGroupId` | 分析方法群組 | text | - | `分析方法群組-1`, `分析方法群組-2`, `分析方法群組-3` |
| 6 | `mediumTypeCode` | 採樣介質 | text | - | `採樣介質-1`, `採樣介質-2`, `採樣介質-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "substanceId": "ID-0001",
    "substanceName": "物質名稱-1",
    "casNo": "CAS No.-1",
    "categoryCode": "物質類別-1",
    "methodGroupId": "分析方法群組-1",
    "mediumTypeCode": "採樣介質-1"
  },
  {
    "substanceId": "ID-0002",
    "substanceName": "物質名稱-2",
    "casNo": "CAS No.-2",
    "categoryCode": "物質類別-2",
    "methodGroupId": "分析方法群組-2",
    "mediumTypeCode": "採樣介質-2"
  },
  {
    "substanceId": "ID-0003",
    "substanceName": "物質名稱-3",
    "casNo": "CAS No.-3",
    "categoryCode": "物質類別-3",
    "methodGroupId": "分析方法群組-3",
    "mediumTypeCode": "採樣介質-3"
  }
]
```


---

### Page 30: 檢測結果回填

| Property | Value |
|:---|:---|
| Page ID | `test-result-form` |
| Type | **FORM** |
| Entity | `TestResult` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `test-result-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 31: 檢測結果列表

| Property | Value |
|:---|:---|
| Page ID | `test-result-list` |
| Type | **LIST** |
| Entity | `TestResult` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `test-result-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `sampleId` | 樣品 | Text input | Free text |
| `substanceId` | 監測物質 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `resultId` | 檢測結果編號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `sampleId` | 樣品 | text | - | `樣品-1`, `樣品-2`, `樣品-3` |
| 3 | `substanceId` | 監測物質 | text | - | `監測物質-1`, `監測物質-2`, `監測物質-3` |
| 4 | `resultValue` | 檢測結果值 | text | - | `檢測結果值-1`, `檢測結果值-2`, `檢測結果值-3` |
| 5 | `resultUnit` | 結果單位 | text | - | `結果單位-1`, `結果單位-2`, `結果單位-3` |
| 6 | `enteredAt` | 回填時間 | text | Yes | `2026-06-01 09:00`, `2026-06-02 09:00`, `2026-06-03 09:00` |

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "resultId": "ID-0001",
    "sampleId": "樣品-1",
    "substanceId": "監測物質-1",
    "resultValue": "檢測結果值-1",
    "resultUnit": "結果單位-1",
    "enteredAt": "2026-06-01 09:00"
  },
  {
    "resultId": "ID-0002",
    "sampleId": "樣品-2",
    "substanceId": "監測物質-2",
    "resultValue": "檢測結果值-2",
    "resultUnit": "結果單位-2",
    "enteredAt": "2026-06-02 09:00"
  },
  {
    "resultId": "ID-0003",
    "sampleId": "樣品-3",
    "substanceId": "監測物質-3",
    "resultValue": "檢測結果值-3",
    "resultUnit": "結果單位-3",
    "enteredAt": "2026-06-03 09:00"
  }
]
```


---

### Page 32: 使用者帳號維護

| Property | Value |
|:---|:---|
| Page ID | `user-account-form` |
| Type | **FORM** |
| Entity | `UserAccount` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `user-account-form.hapdl.yaml` |

#### Form Fields

| # | Field | Label | Widget | Required | Sensitive | Options / Constraints | Sample Value |
|:---|:---|:---|:---|:---|:---|:---|:---|

#### Form Layout

- **Layout**: Label-left, 2-column for short fields (text, select, date), full-width for textarea
- **Grouping**: Group by DBML `group` attribute if available
- **Validation**: Show inline error messages below each field
- **Sensitive fields**: Show a lock icon and mask input by default, with a toggle to reveal

#### Footer Actions


#### Interaction Notes



---

### Page 33: 使用者帳號列表

| Property | Value |
|:---|:---|
| Page ID | `user-account-list` |
| Type | **LIST** |
| Entity | `UserAccount` |
| Primary Actor |  |
| Allowed Roles |  |
| Source | `user-account-list.hapdl.yaml` |

#### Filter Bar

| Field | Label | Widget | Options |
|:---|:---|:---|:---|
| `userName` | 姓名 | Text input | Free text |
| `status` | 帳號狀態 | Text input | Free text |

#### Table Columns

| # | Field | Label | Display | Sortable | Sample Values |
|:---|:---|:---|:---|:---|:---|
| 1 | `userId` | 使用者帳號 | link | - | `ID-0001`, `ID-0002`, `ID-0003` |
| 2 | `userName` | 姓名 | text | - | `姓名-1`, `姓名-2`, `姓名-3` |
| 3 | `qualificationNo` | 監測人員資格文號 | text | - | `監測人員資格文號-1`, `監測人員資格文號-2`, `監測人員資格文號-3` |
| 4 | `status` | 帳號狀態 | badge | - | `帳號狀態-1`, `帳號狀態-2`, `帳號狀態-3` |

#### Status Badge Color Mapping

#### Actions

#### Pagination

- Style: `offset` (page numbers + prev/next)
- Default page size: 20
- Show: `1-20 / 128 筆` format

#### Sample Data (JSON)

```json
[
  {
    "userId": "ID-0001",
    "userName": "姓名-1",
    "qualificationNo": "監測人員資格文號-1",
    "status": "帳號狀態-1"
  },
  {
    "userId": "ID-0002",
    "userName": "姓名-2",
    "qualificationNo": "監測人員資格文號-2",
    "status": "帳號狀態-2"
  },
  {
    "userId": "ID-0003",
    "userName": "姓名-3",
    "qualificationNo": "監測人員資格文號-3",
    "status": "帳號狀態-3"
  }
]
```


---


## Generation Instructions

When generating UI from this brief:

1. **Use the Design System** above for all colors, typography, and spacing
2. **Render all text in Traditional Chinese (zh-TW)** as specified in each page
3. **Include the sidebar navigation** as shown in the Navigation Map
4. **Use the sample data** provided for each page to populate the preview
5. **Apply badge colors** as specified in the Status Badge Color Mapping
6. **Include responsive layout** that works on 1280px+ screens
7. **For forms**: show validation states, required field markers (*), and sensitive field masks
8. **For tables**: include sortable column headers, hover states, and row action buttons
9. **For detail pages**: use a clean key-value layout with grouped sections
10. Generate as **React + TypeScript** with **Ant Design** components, or as standalone **HTML + CSS**
