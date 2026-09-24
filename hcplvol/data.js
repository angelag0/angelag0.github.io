(function () {
  'use strict';

  var TODAY = '2026-10-14';
  var SEED = {
    today: TODAY,
    currentVolunteerId: 'V001',
    units: [{
      id: 'U1',
      name: '總圖'
    }, {
      id: 'U2',
      name: '文化局'
    }],
    locations: [{
      id: 'L1',
      unitId: 'U1',
      name: '總圖書館',
      reportColumn: '圖書館',
      scheduleMode: '自由報名',
      needApproval: false,
      checkinCap: true,
      monthlyDeadlineDay: 25,
      monthlyMaxSlots: 12,
      manager: '林雅雯',
      wifi: true
    }, {
      id: 'L2',
      unitId: 'U2',
      name: '演藝廳',
      reportColumn: '演藝廳',
      scheduleMode: '管理者指派',
      needApproval: false,
      checkinCap: true,
      monthlyDeadlineDay: 20,
      monthlyMaxSlots: 8,
      manager: '張家豪'
    }, {
      id: 'L3',
      unitId: 'U2',
      name: '縣史館',
      reportColumn: '縣史館',
      scheduleMode: '自由報名',
      needApproval: true,
      checkinCap: false,
      monthlyDeadlineDay: 25,
      monthlyMaxSlots: 10,
      manager: '黃淑惠'
    }, {
      id: 'L4',
      unitId: 'U2',
      name: '美術館',
      reportColumn: '美術館',
      scheduleMode: '自由報名',
      needApproval: false,
      checkinCap: true,
      monthlyDeadlineDay: 25,
      monthlyMaxSlots: 10,
      manager: '吳佩珊'
    }, {
      id: 'L5',
      unitId: 'U2',
      name: '文化局總服務台',
      reportColumn: '服務台',
      scheduleMode: '管理者指派',
      needApproval: false,
      checkinCap: true,
      monthlyDeadlineDay: 20,
      monthlyMaxSlots: 10,
      manager: '李明哲'
    }, {
      id: 'L6',
      unitId: 'U2',
      name: '兒少館',
      reportColumn: '',
      scheduleMode: '自由報名',
      needApproval: false,
      checkinCap: true,
      monthlyDeadlineDay: 25,
      monthlyMaxSlots: 10,
      manager: '周怡君'
    }],
    reportColumns: ['月例／會議', '服務台', '美術館', '推廣課', '圖書館', '演藝廳', '縣史館'],
    groups: [{
      id: 'G1',
      unitId: 'U1',
      name: '導覽組',
      leader: '許文龍',
      leaderPhone: '0912-000-101',
      annualRequiredHours: 144
    }, {
      id: 'G2',
      unitId: 'U1',
      name: '典藏組',
      leader: '蔡美玲',
      leaderPhone: '0912-000-102',
      annualRequiredHours: 144
    }, {
      id: 'G3',
      unitId: 'U1',
      name: '閱覽組',
      leader: '鄭國華',
      leaderPhone: '0912-000-103',
      annualRequiredHours: 144
    }, {
      id: 'G4',
      unitId: 'U1',
      name: '故事志工',
      leader: '劉曉君',
      leaderPhone: '0912-000-104',
      annualRequiredHours: 144
    }, {
      id: 'G5',
      unitId: 'U2',
      name: '演藝廳',
      leader: '謝宗翰',
      leaderPhone: '0912-000-105',
      annualRequiredHours: 120
    }, {
      id: 'G6',
      unitId: 'U2',
      name: '縣史館',
      leader: '何秀蘭',
      leaderPhone: '0912-000-106',
      annualRequiredHours: 144
    }, {
      id: 'G7',
      unitId: 'U2',
      name: '美術館',
      leader: '羅文欽',
      leaderPhone: '0912-000-107',
      annualRequiredHours: 120
    }, {
      id: 'G8',
      unitId: 'U2',
      name: '總服務台',
      leader: '高玉芳',
      leaderPhone: '0912-000-108',
      annualRequiredHours: 144
    }, {
      id: 'G9',
      unitId: 'U2',
      name: '兒少館',
      leader: '潘俊傑',
      leaderPhone: '0912-000-109',
      annualRequiredHours: 96
    }],
    volunteers: [{
      id: 'V001',
      no: 'HC-0107',
      name: '王淑芬',
      unitId: 'U1',
      groupIds: ['G3', 'G4'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2019,
      phone: '0933-100-001',
      email: 'shufen@example.com',
      cardNo: 'A00010701'
    }, {
      id: 'V002',
      no: 'HC-0112',
      name: '陳志明',
      unitId: 'U1',
      groupIds: ['G3'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2021,
      phone: '0933-100-002',
      email: 'chiming@example.com',
      cardNo: 'A00011202'
    }, {
      id: 'V003',
      no: 'HC-0125',
      name: '林美惠',
      unitId: 'U1',
      groupIds: ['G1', 'G3'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2017,
      phone: '0933-100-003',
      email: 'meihui@example.com',
      cardNo: 'A00012503'
    }, {
      id: 'V004',
      no: 'HC-0131',
      name: '張秀英',
      unitId: 'U1',
      groupIds: ['G4'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2022,
      phone: '0933-100-004',
      email: '',
      cardNo: 'A00013104'
    }, {
      id: 'V005',
      no: 'HC-0138',
      name: '李建國',
      unitId: 'U1',
      groupIds: ['G2'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2015,
      phone: '0933-100-005',
      email: 'jianguo@example.com',
      cardNo: 'A00013805'
    }, {
      id: 'V006',
      no: 'HC-0144',
      name: '黃子軒',
      unitId: 'U1',
      groupIds: ['G3'],
      locationIds: ['L1'],
      status: '在職',
      joinYear: 2025,
      phone: '0933-100-006',
      email: 'zixuan@example.com',
      cardNo: 'A00014406',
      fixedEarlyLeave: true
    }, {
      id: 'V007',
      no: 'HC-0203',
      name: '吳麗華',
      unitId: 'U2',
      groupIds: ['G7'],
      locationIds: ['L4'],
      status: '在職',
      joinYear: 2018,
      phone: '0933-100-007',
      email: 'lihua@example.com',
      cardNo: 'A00020307'
    }, {
      id: 'V008',
      no: 'HC-0209',
      name: '趙大偉',
      unitId: 'U2',
      groupIds: ['G7', 'G6'],
      locationIds: ['L4', 'L3'],
      status: '在職',
      joinYear: 2020,
      phone: '0933-100-008',
      email: 'dawei@example.com',
      cardNo: 'A00020908'
    }, {
      id: 'V009',
      no: 'HC-0215',
      name: '周玉梅',
      unitId: 'U2',
      groupIds: ['G5'],
      locationIds: ['L2'],
      status: '在職',
      joinYear: 2016,
      phone: '0933-100-009',
      email: 'yumei@example.com',
      cardNo: 'A00021509'
    }, {
      id: 'V010',
      no: 'HC-0221',
      name: '徐文雄',
      unitId: 'U2',
      groupIds: ['G8'],
      locationIds: ['L5'],
      status: '停權',
      joinYear: 2014,
      phone: '0933-100-010',
      email: 'wenxiong@example.com',
      cardNo: 'A00022110',
      suspendNote: '2026-09-01 由文化局總管理者設定：連續缺勤經聯繫未改善',
      suspendBy: '陳怡安'
    }, {
      id: 'V011',
      no: 'HC-0230',
      name: '曾雅琪',
      unitId: 'U2',
      groupIds: ['G9'],
      locationIds: ['L6'],
      status: '在職',
      joinYear: 2023,
      phone: '0933-100-011',
      email: 'yaqi@example.com',
      cardNo: 'A00023011'
    }, {
      id: 'V012',
      no: '',
      name: '蘇柏翰',
      unitId: 'U1',
      groupIds: ['G1'],
      locationIds: ['L1'],
      status: '審查中',
      joinYear: 2026,
      phone: '0933-100-012',
      email: 'bohan@example.com',
      cardNo: 'A00030112',
      applyDate: '2026-10-08',
      applyStage: '待面試'
    }, {
      id: 'V013',
      no: '',
      name: '葉佳穎',
      unitId: 'U2',
      groupIds: ['G7'],
      locationIds: ['L4'],
      status: '審查中',
      joinYear: 2026,
      phone: '0933-100-013',
      email: 'jiaying@example.com',
      cardNo: 'A00030213',
      applyDate: '2026-10-11',
      applyStage: '資料審核中'
    }, {
      id: 'V014',
      no: 'HC-0098',
      name: '郭金水',
      unitId: 'U1',
      groupIds: ['G2'],
      locationIds: ['L1'],
      status: '離職',
      joinYear: 2012,
      phone: '0933-100-014',
      email: '',
      cardNo: 'A00009814'
    }],
    slotTemplates: [{
      id: 'T1',
      name: '上午',
      start: '09:00',
      end: '12:00',
      hours: 3,
      graceMinutes: 10
    }, {
      id: 'T2',
      name: '下午',
      start: '13:00',
      end: '17:00',
      hours: 4,
      graceMinutes: 0
    }, {
      id: 'T3',
      name: '下午（3.5 小時）',
      start: '13:00',
      end: '16:30',
      hours: 3.5,
      graceMinutes: 0,
      earlyLeave: true
    }, {
      id: 'T4',
      name: '晚上',
      start: '18:00',
      end: '21:00',
      hours: 3,
      graceMinutes: 0
    }],
    slots: [{
      id: 'S101',
      date: '2026-10-14',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '固定班',
      booked: ['V001', 'V002'],
      pending: []
    }, {
      id: 'S102',
      date: '2026-10-14',
      locationId: 'L1',
      templateId: 'T2',
      capacity: 3,
      type: '自由報名',
      booked: ['V003', 'V005'],
      pending: []
    }, {
      id: 'S103',
      date: '2026-10-14',
      locationId: 'L1',
      templateId: 'T3',
      capacity: 1,
      type: '固定班',
      booked: ['V006'],
      pending: []
    }, {
      id: 'S104',
      date: '2026-10-14',
      locationId: 'L4',
      templateId: 'T1',
      capacity: 2,
      type: '自由報名',
      booked: ['V007'],
      pending: []
    }, {
      id: 'S105',
      date: '2026-10-15',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '自由報名',
      booked: ['V003'],
      pending: []
    }, {
      id: 'S106',
      date: '2026-10-15',
      locationId: 'L1',
      templateId: 'T4',
      capacity: 2,
      type: '自由報名',
      booked: [],
      pending: []
    }, {
      id: 'S107',
      date: '2026-10-17',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '固定班',
      booked: ['V001', 'V002', 'V004'],
      pending: []
    }, {
      id: 'S108',
      date: '2026-10-17',
      locationId: 'L1',
      templateId: 'T2',
      capacity: 3,
      type: '自由報名',
      booked: ['V005'],
      pending: []
    }, {
      id: 'S109',
      date: '2026-10-18',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '自由報名',
      booked: ['V003', 'V005', 'V002'],
      pending: []
    }, {
      id: 'S110',
      date: '2026-10-21',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '固定班',
      booked: ['V001', 'V002'],
      pending: []
    }, {
      id: 'S111',
      date: '2026-10-22',
      locationId: 'L1',
      templateId: 'T2',
      capacity: 3,
      type: '自由報名',
      booked: [],
      pending: []
    }, {
      id: 'S112',
      date: '2026-10-24',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '固定班',
      booked: ['V001', 'V004'],
      pending: []
    }, {
      id: 'S113',
      date: '2026-10-24',
      locationId: 'L3',
      templateId: 'T2',
      capacity: 2,
      type: '自由報名',
      booked: [],
      pending: ['V008']
    }, {
      id: 'S114',
      date: '2026-10-25',
      locationId: 'L4',
      templateId: 'T2',
      capacity: 2,
      type: '自由報名',
      booked: ['V007'],
      pending: []
    }, {
      id: 'S115',
      date: '2026-10-28',
      locationId: 'L1',
      templateId: 'T1',
      capacity: 3,
      type: '固定班',
      booked: ['V001', 'V002'],
      pending: []
    }, {
      id: 'S116',
      date: '2026-10-29',
      locationId: 'L2',
      templateId: 'T4',
      capacity: 4,
      type: '管理者指派',
      booked: ['V009'],
      pending: []
    }, {
      id: 'S117',
      date: '2026-10-31',
      locationId: 'L1',
      templateId: 'T2',
      capacity: 3,
      type: '自由報名',
      booked: ['V003'],
      pending: []
    }],
    attendance: [{
      id: 'A001',
      volunteerId: 'V001',
      slotId: null,
      date: '2026-10-10',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '08:52',
      checkOut: '12:03',
      countedFrom: '09:00',
      countedTo: '12:00',
      hours: 3,
      status: '正常',
      source: '現場QR'
    }, {
      id: 'A002',
      volunteerId: 'V001',
      slotId: null,
      date: '2026-10-07',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '09:07',
      checkOut: '12:00',
      countedFrom: '09:00',
      countedTo: '12:00',
      hours: 3,
      status: '緩衝內到班',
      source: '現場QR'
    }, {
      id: 'A003',
      volunteerId: 'V001',
      slotId: null,
      date: '2026-10-03',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '09:26',
      checkOut: '12:01',
      countedFrom: '09:26',
      countedTo: '12:00',
      hours: 2.57,
      status: '遲到',
      source: '借閱證條碼'
    }, {
      id: 'A004',
      volunteerId: 'V001',
      slotId: null,
      date: '2026-09-30',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '08:58',
      checkOut: '',
      countedFrom: '09:00',
      countedTo: '',
      hours: 0,
      status: '補登',
      source: '管理者補登',
      note: '忘記簽退，已向管理者申請補登，待文化局總管理者確認時間'
    }, {
      id: 'A005',
      volunteerId: 'V006',
      slotId: null,
      date: '2026-10-10',
      locationId: 'L1',
      slotName: '下午（3.5 小時）13:00–16:30',
      checkIn: '12:55',
      checkOut: '16:30',
      countedFrom: '13:00',
      countedTo: '16:30',
      hours: 3.5,
      status: '固定早退',
      source: '現場QR',
      note: '固定早退時段，不記點，時數照發 3.5 小時'
    }, {
      id: 'A006',
      volunteerId: 'V002',
      slotId: null,
      date: '2026-10-10',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '',
      checkOut: '',
      countedFrom: '',
      countedTo: '',
      hours: 0,
      status: '缺勤',
      source: ''
    }, {
      id: 'A007',
      volunteerId: 'V004',
      slotId: null,
      date: '2026-10-10',
      locationId: 'L1',
      slotName: '上午 09:00–12:00',
      checkIn: '09:02',
      checkOut: '12:00',
      countedFrom: '09:00',
      countedTo: '12:00',
      hours: 3,
      status: '未報名簽到',
      source: '現場QR',
      decision: '待決定',
      note: '當日未排班但到場簽到，由管理者決定是否發給時數'
    }, {
      id: 'A008',
      volunteerId: 'V007',
      slotId: null,
      date: '2026-10-11',
      locationId: 'L4',
      slotName: '下午 13:00–17:00',
      checkIn: '13:00',
      checkOut: '16:20',
      countedFrom: '13:00',
      countedTo: '16:20',
      hours: 3.33,
      status: '早退',
      source: '現場QR'
    }, {
      id: 'A009',
      volunteerId: 'V003',
      slotId: null,
      date: '2026-10-11',
      locationId: 'L1',
      slotName: '下午 13:00–17:00',
      checkIn: '12:50',
      checkOut: '17:02',
      countedFrom: '13:00',
      countedTo: '17:00',
      hours: 4,
      status: '正常',
      source: '管理者代登',
      note: '志工未帶手機，由館員於公用電腦代為登記'
    }],
    hourSummary: {
      V001: {
        year: 115,
        shiftHours: 84.5,
        activityHours: 12,
        trainingHours: 6
      },
      V002: {
        year: 115,
        shiftHours: 61,
        activityHours: 3,
        trainingHours: 6
      },
      V003: {
        year: 115,
        shiftHours: 132.5,
        activityHours: 9,
        trainingHours: 9
      },
      V004: {
        year: 115,
        shiftHours: 40,
        activityHours: 0,
        trainingHours: 3
      },
      V005: {
        year: 115,
        shiftHours: 150,
        activityHours: 6,
        trainingHours: 6
      },
      V006: {
        year: 115,
        shiftHours: 28,
        activityHours: 0,
        trainingHours: 3
      },
      V007: {
        year: 115,
        shiftHours: 98,
        activityHours: 12,
        trainingHours: 6
      },
      V008: {
        year: 115,
        shiftHours: 76.5,
        activityHours: 0,
        trainingHours: 6
      },
      V009: {
        year: 115,
        shiftHours: 110,
        activityHours: 8,
        trainingHours: 6
      },
      V010: {
        year: 115,
        shiftHours: 22,
        activityHours: 0,
        trainingHours: 0
      },
      V011: {
        year: 115,
        shiftHours: 55,
        activityHours: 4,
        trainingHours: 6
      }
    },
    leaves: [{
      id: 'LV01',
      volunteerId: 'V002',
      slotIds: ['S107'],
      from: '2026-10-17',
      to: '2026-10-17',
      reason: '家中長輩回診',
      proxyId: 'V003',
      status: '待管理者審核',
      proxyRepliedAt: '2026-10-12 20:14',
      createdAt: '2026-10-12 18:30',
      isLong: false,
      late: false
    }, {
      id: 'LV02',
      volunteerId: 'V005',
      slotIds: ['S108'],
      from: '2026-10-17',
      to: '2026-10-17',
      reason: '出國',
      proxyId: 'V002',
      status: '待代理人回覆',
      createdAt: '2026-10-13 09:05',
      isLong: false,
      late: false
    }, {
      id: 'LV03',
      volunteerId: 'V009',
      slotIds: [],
      from: '2026-11-01',
      to: '2027-02-28',
      reason: '術後休養',
      proxyId: 'V011',
      status: '待文化局簽核',
      proxyRepliedAt: '2026-10-05 11:20',
      managerApprovedAt: '2026-10-06 15:00',
      createdAt: '2026-10-05 10:00',
      isLong: true,
      late: false
    }, {
      id: 'LV04',
      volunteerId: 'V001',
      slotIds: [],
      from: '2026-09-23',
      to: '2026-09-23',
      reason: '感冒發燒',
      proxyId: 'V002',
      status: '已核准',
      proxyRepliedAt: '2026-09-22 21:00',
      managerApprovedAt: '2026-09-22 22:10',
      createdAt: '2026-09-22 20:40',
      isLong: false,
      late: true
    }],
    substitutions: [{
      id: 'SB01',
      fromVolunteerId: 'V004',
      slotId: 'S112',
      mode: '公開徵求',
      toVolunteerId: null,
      status: '徵求中',
      notifiedIds: ['V002', 'V003', 'V005'],
      notifyCount: 1,
      createdAt: '2026-10-13 14:00'
    }, {
      id: 'SB02',
      fromVolunteerId: 'V003',
      slotId: 'S117',
      mode: '指定人選',
      toVolunteerId: 'V001',
      status: '待對方回覆',
      notifiedIds: [],
      notifyCount: 0,
      createdAt: '2026-10-13 16:20'
    }, {
      id: 'SB03',
      fromVolunteerId: 'V002',
      slotId: null,
      slotLabel: '2026-10-03 上午 總圖書館',
      mode: '指定人選',
      toVolunteerId: 'V005',
      status: '已成立',
      notifiedIds: [],
      notifyCount: 0,
      createdAt: '2026-09-29 10:00'
    }],
    violationTypes: [{
      id: 'VT1',
      name: '遲到（超過緩衝時間）',
      points: 1,
      auto: true
    }, {
      id: 'VT2',
      name: '早退',
      points: 1,
      auto: true
    }, {
      id: 'VT3',
      name: '缺勤（未請假也未到）',
      points: 2,
      auto: true
    }, {
      id: 'VT4',
      name: '其他（由管理者說明）',
      points: 1,
      auto: false
    }],
    violations: [{
      id: 'VR01',
      volunteerId: 'V001',
      date: '2026-10-03',
      typeId: 'VT1',
      points: 1,
      source: '出勤異常轉入',
      status: '有效',
      note: '上午場 09:26 簽到',
      by: '系統'
    }, {
      id: 'VR02',
      volunteerId: 'V002',
      date: '2026-10-10',
      typeId: 'VT3',
      points: 2,
      source: '出勤異常轉入',
      status: '有效',
      note: '',
      by: '系統'
    }, {
      id: 'VR03',
      volunteerId: 'V007',
      date: '2026-10-11',
      typeId: 'VT2',
      points: 1,
      source: '出勤異常轉入',
      status: '已撤銷',
      note: '事後補請假核准，由地點管理者撤銷',
      by: '吳佩珊'
    }, {
      id: 'VR04',
      volunteerId: 'V010',
      date: '2026-08-20',
      typeId: 'VT3',
      points: 2,
      source: '出勤異常轉入',
      status: '有效',
      note: '',
      by: '系統'
    }, {
      id: 'VR05',
      volunteerId: 'V010',
      date: '2026-08-27',
      typeId: 'VT3',
      points: 2,
      source: '出勤異常轉入',
      status: '有效',
      note: '',
      by: '系統'
    }],
    activities: [{
      id: 'AC01',
      title: '新書整理與典藏實務工作坊',
      kind: '教育訓練',
      date: '2026-10-28',
      time: '09:00–12:00',
      hours: 3,
      locationId: 'L1',
      capacity: 15,
      enrolled: ['V002', 'V003', 'V004', 'V005', 'V006', 'V007', 'V008', 'V009', 'V011', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6'],
      targetGroupIds: []
    }, {
      id: 'AC02',
      title: '文化局志工月例會（十一月）',
      kind: '計時數活動',
      date: '2026-11-04',
      time: '14:00–16:00',
      hours: 2,
      locationId: 'L5',
      capacity: 80,
      enrolled: ['V003', 'V007'],
      targetGroupIds: []
    }, {
      id: 'AC03',
      title: '說故事技巧進階研習',
      kind: '教育訓練',
      date: '2026-11-12',
      time: '13:30–16:30',
      hours: 3,
      locationId: 'L1',
      capacity: 30,
      enrolled: ['V004'],
      targetGroupIds: ['G4']
    }, {
      id: 'AC04',
      title: '竹塹藝術節展場支援',
      kind: '計時數活動',
      date: '2026-11-21',
      time: '09:00–17:00',
      hours: 8,
      locationId: 'L4',
      capacity: 12,
      enrolled: ['V001', 'V007', 'V008'],
      targetGroupIds: []
    }],
    announcements: [{
      id: 'N01',
      date: '2026-10-12',
      tag: '公告',
      title: '115 年度各組別服務時數門檻已公告',
      body: '本年度服務時數門檻依組別設定（一般組別為 144 小時），統計期間為 115 年 1 月 1 日至 12 月 31 日；您適用的門檻請至「服務時數」查看。受訓時數另行統計，不併入服務時數。',
      scope: '全體',
      pinned: true
    }, {
      id: 'N02',
      date: '2026-10-08',
      tag: '活動',
      title: '竹塹藝術節展場支援開始招募志工',
      body: '11 月 21 日於美術館辦理，需展場引導志工 12 名，歡迎至「活動報名」登記。',
      scope: '全體',
      pinned: false
    }, {
      id: 'N03',
      date: '2026-10-01',
      tag: '提醒',
      title: '到班請記得簽到與簽退；忘記時請洽服務地點管理者補登',
      body: '簽到退可使用手機掃描現場張貼的場次 QR Code，或在館內簽到站刷志工證（借閱證）條碼。忘記簽到或簽退，請於三日內向服務地點管理者提出補登。',
      scope: '全體',
      pinned: false
    }, {
      id: 'N04',
      date: '2026-09-25',
      tag: '公告',
      title: '故事志工十一月排班開放登記',
      body: '請故事志工於 10 月 25 日前完成十一月排班登記。',
      scope: '故事志工',
      pinned: false
    }],
    notifications: [{
      id: 'M01',
      time: '2026-10-13 16:20',
      kind: '自動',
      event: '代班邀請',
      target: '個人',
      to: '王淑芬',
      subject: '林美惠 邀請您代班：10/31 下午 總圖書館',
      status: '成功'
    }, {
      id: 'M02',
      time: '2026-10-13 14:00',
      kind: '自動',
      event: '空缺班徵求',
      target: '分組',
      to: '總圖 當日未排班志工 3 人',
      subject: '10/24 上午 總圖書館 徵求代班',
      status: '成功'
    }, {
      id: 'M03',
      time: '2026-10-12 18:30',
      kind: '自動',
      event: '請假申請',
      target: '個人',
      to: '林美惠',
      subject: '陳志明 請您擔任 10/17 上午的代理人',
      status: '成功'
    }, {
      id: 'M04',
      time: '2026-10-09 10:00',
      kind: '人工',
      event: '公告通知',
      target: '分組',
      to: '故事志工 共 18 人',
      subject: '十一月排班開放登記',
      status: '部分失敗',
      failed: ['張秀英（未留 Email）']
    }, {
      id: 'M05',
      time: '2026-10-01 09:00',
      kind: '自動',
      event: '排班完成',
      target: '個人',
      to: '王淑芬',
      subject: '您的十月班表已確認',
      status: '成功'
    }],
    holidays: [{
      id: 'H01',
      date: '2026-10-09',
      name: '國慶日補假',
      scope: '全部'
    }, {
      id: 'H02',
      date: '2026-10-10',
      name: '國慶日',
      scope: '全部'
    }, {
      id: 'H03',
      date: '2026-10-19',
      name: '每週一休館',
      scope: 'L1',
      weekly: '週一'
    }, {
      id: 'H04',
      date: '2026-10-26',
      name: '館舍消毒',
      scope: 'L4'
    }],
    params: {
      annualHoursDefault: 144,
      longLeaveMonths: 1,
      leaveAdvanceDays: 3,
      cancelDeadlineDays: 3,
      substituteSameUnitOnly: true,
      vacancyNotifyMax: 3,
      hoursUnit: '分鐘',
      lateHoursRule: '依實際簽到時間起算',
      earlyLeaveHoursRule: '依實際簽退時間計算',
      noCheckoutRule: '標記異常、待管理者補登',
      autoPointFromAttendance: true,
      pointReminderText: '您目前累計 {N} 點違規記點，請準時出勤，避免影響志工資格。'
    },
    admins: [{
      id: 'AD1',
      name: '陳怡安',
      role: '總管理者',
      unit: '文化局',
      locationIds: []
    }, {
      id: 'AD2',
      name: '林雅雯',
      role: '地點管理者',
      unit: '總圖',
      locationIds: ['L1']
    }, {
      id: 'AD3',
      name: '吳佩珊',
      role: '地點管理者',
      unit: '文化局',
      locationIds: ['L4']
    }, {
      id: 'AD4',
      name: '蕭宏仁',
      role: '報表檢視',
      unit: '文化局',
      locationIds: []
    }],
    reports: [{
      id: 'RP01',
      name: '115 年 9 月　志工服務時數月報（文化局格式）',
      period: '115-09',
      format: 'Excel',
      createdAt: '2026-10-02 10:12',
      by: '陳怡安'
    }, {
      id: 'RP02',
      name: '115 年 9 月　衛福部志工服勤時數月報表',
      period: '115-09',
      format: 'Excel',
      createdAt: '2026-10-02 10:15',
      by: '陳怡安'
    }, {
      id: 'RP03',
      name: '114 年度　志工服務時數年度報表（文化局格式）',
      period: '114',
      format: 'PDF',
      createdAt: '2026-01-08 10:00',
      by: '陳怡安'
    }]
  };
  var KEY = 'hcpl-volunteer-demo-v3';
  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }
  var HCV = {
    TODAY: TODAY,
    load: function () {
      try {
        var raw = window.localStorage.getItem(KEY);
        if (raw) {
          var s = JSON.parse(raw);
          if (s && s.today === TODAY && s.volunteers) {
            return s;
          }
        }
      } catch (e) {}
      return clone(SEED);
    },
    save: function (state) {
      try {
        window.localStorage.setItem(KEY, JSON.stringify(state));
        return true;
      } catch (e) {
        return false;
      }
    },
    reset: function () {
      try {
        window.localStorage.removeItem(KEY);
      } catch (e) {}
      return clone(SEED);
    },
    weekday: function (dateStr) {
      var p = dateStr.split('-');
      var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      return ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    },
    dateLabel: function (dateStr) {
      return dateStr + '（' + HCV.weekday(dateStr) + '）';
    },
    diffDays: function (a, b) {
      function t(s) {
        var p = s.split('-');
        return Date.UTC(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
      }
      return Math.round((t(b) - t(a)) / 86400000);
    },
    byId: function (list, id) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          return list[i];
        }
      }
      return null;
    },
    slotLabel: function (state, slot) {
      var t = HCV.byId(state.slotTemplates, slot.templateId);
      var l = HCV.byId(state.locations, slot.locationId);
      return t.name + ' ' + t.start + '–' + t.end + '　' + l.name;
    },
    groupNames: function (state, v) {
      return v.groupIds.map(function (g) {
        var x = HCV.byId(state.groups, g);
        return x ? x.name : g;
      }).join('、');
    },
    activePoints: function (state, volunteerId) {
      return state.violations.filter(function (r) {
        return r.volunteerId === volunteerId && r.status === '有效';
      }).reduce(function (n, r) {
        return n + r.points;
      }, 0);
    },
    requiredHours: function (state, v) {
      var d = state.params && state.params.annualHoursDefault || 144;
      if (!v || !v.groupIds || !v.groupIds.length) {
        return d;
      }
      var best = 0;
      v.groupIds.forEach(function (gid) {
        var g = HCV.byId(state.groups, gid);
        var h = g && g.annualRequiredHours != null ? Number(g.annualRequiredHours) : d;
        if (h > best) {
          best = h;
        }
      });
      return best || d;
    },
    hoursText: function (h) {
      return (Math.round(h * 100) / 100).toString();
    },
    nowStamp: function () {
      return TODAY + ' ' + '09:00';
    }
  };
  window.HCV = HCV;
})();