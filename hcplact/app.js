(function () {
  var today = "2026-06-05";
  var branches = ["文化局圖書館", "竹北市圖書館", "竹東鎮圖書館", "新埔鎮圖書館", "關西鎮圖書館", "湖口鄉圖書館", "新豐鄉圖書館", "芎林鄉圖書館", "橫山鄉圖書館", "北埔鄉圖書館", "寶山鄉圖書館", "峨眉鄉圖書館", "尖石鄉圖書館", "五峰鄉圖書館"];
  var branchPolicy = {
    "文化局圖書館": {
      allow_online_payment: true
    }
  };
  branches.slice(1).forEach(b => {
    branchPolicy[b] = {
      allow_online_payment: false
    };
  });
  var categories = ["一般活動", "閱讀推廣", "親子活動", "研習課程", "藝文展覽"];
  var violationTypes = [{
    id: "vt-1",
    name: "放鳥",
    point: 1,
    auto: true,
    desc: "報名後未到場且未取消",
    active: true
  }, {
    id: "vt-2",
    name: "遲到",
    point: 1,
    auto: true,
    desc: "逾遲到判定時間才到場",
    active: true
  }, {
    id: "vt-3",
    name: "違規",
    point: 2,
    auto: false,
    desc: "現場行為不當，經館員判定",
    active: true
  }];
  var activities = [{
    id: "act-001",
    name: "親子採果體驗",
    type: "單場次",
    category: "親子活動",
    branch: "文化局圖書館",
    status: "報名中",
    fee: 300,
    reg_start: "2026-06-01",
    reg_end: "2026-06-10",
    cancel_deadline_hours: 24,
    published: true,
    target: "親子家庭",
    age_min: 4,
    age_max: null,
    desc: "帶著孩子走進果園，認識當季水果，親手採摘並品嚐，體驗食農教育的樂趣。",
    notice: "1. 請穿著輕便服裝與布鞋。\n2. 現場備有遮陽棚，仍建議自備帽子。\n3. 雨天照常舉行，請攜帶雨具。",
    pay_methods: ["信用卡", "Apple Pay", "Google Pay", "TWQR", "現場繳費"],
    cover_image: "親子採果_主視覺.jpg",
    attachments: [{
      name: "活動同意書.pdf",
      size: "182 KB"
    }],
    doc_required: true,
    doc_note: "請上傳家長簽名的活動同意書（附件下載後簽名拍照或掃描）。",
    doc_deadline_days: 14,
    sessions: [{
      id: "s1",
      label: "單一場次",
      date: "2026-06-21",
      time: "10:00",
      end_time: "12:00",
      place: "視聽室集合",
      cap_main: 12,
      cap_wait: 5,
      cap_per_reg: 4,
      cap_groups: 10
    }],
    custom_fields: [{
      seq: 1,
      name: "素食需求",
      type: "單選",
      required: false,
      options: ["否", "全素", "蛋奶素"]
    }, {
      seq: 2,
      name: "孩童年齡",
      type: "簡答",
      required: true,
      options: []
    }]
  }, {
    id: "act-002",
    name: "城市生態講座：都市裡的野鳥",
    type: "單場次",
    category: "研習課程",
    branch: "竹北市圖書館",
    status: "即將開始",
    fee: 0,
    reg_start: "2026-05-20",
    reg_end: "2026-06-08",
    cancel_deadline_hours: 24,
    published: true,
    target: "一般大眾",
    age_min: null,
    age_max: null,
    desc: "由資深生態講師帶您認識生活周遭常見的野鳥，學習簡易觀察與辨識技巧。",
    notice: "講座全程約 90 分鐘，中場不休息。",
    pay_methods: [],
    sessions: [{
      id: "s1",
      label: "單一場次",
      date: "2026-06-14",
      time: "14:00",
      end_time: "15:30",
      place: "2F 多功能教室",
      cap_main: 40,
      cap_wait: 10
    }],
    custom_fields: []
  }, {
    id: "act-003",
    name: "手作皮革零錢包工作坊",
    type: "多場次",
    category: "研習課程",
    branch: "竹東鎮圖書館",
    status: "報名中",
    fee: 650,
    reg_start: "2026-06-02",
    reg_end: "2026-06-18",
    cancel_deadline_hours: 48,
    published: true,
    target: "16 歲以上",
    age_min: 16,
    age_max: null,
    desc: "從裁切、打孔到縫線，完整體驗皮件製作流程，完成屬於自己的手縫零錢包。",
    notice: "材料費已含於報名費中，工具現場提供。",
    pay_methods: ["現場繳費"],
    sessions: [{
      id: "s1",
      label: "週六上午班",
      date: "2026-06-27",
      time: "10:00",
      end_time: "12:30",
      place: "創客空間",
      cap_main: 10,
      cap_wait: 4
    }, {
      id: "s2",
      label: "週日下午班",
      date: "2026-06-28",
      time: "14:00",
      end_time: "16:30",
      place: "創客空間",
      cap_main: 10,
      cap_wait: 4
    }],
    custom_fields: [{
      seq: 1,
      name: "慣用手",
      type: "單選",
      required: true,
      options: ["右手", "左手"]
    }]
  }, {
    id: "act-004",
    name: "繪本說故事時間（六月場）",
    type: "不需報名",
    category: "閱讀推廣",
    branch: "文化局圖書館",
    status: "進行中",
    fee: 0,
    reg_start: null,
    reg_end: null,
    cancel_deadline_hours: 0,
    published: true,
    target: "學齡前兒童",
    age_min: 3,
    age_max: 6,
    desc: "每週六上午的固定說故事活動，無需報名，歡迎自由參加。",
    notice: "",
    pay_methods: [],
    sessions: [],
    custom_fields: []
  }, {
    id: "act-005",
    name: "AI 入門：用生成式工具提升工作效率",
    type: "單場次",
    category: "研習課程",
    branch: "文化局圖書館",
    status: "草稿",
    fee: 0,
    reg_start: "2026-06-15",
    reg_end: "2026-07-01",
    cancel_deadline_hours: 24,
    published: false,
    target: "成人",
    age_min: 18,
    age_max: null,
    desc: "認識常見生成式 AI 工具，並動手實作於文件、簡報與資料整理。",
    notice: "請自備筆記型電腦。",
    pay_methods: [],
    sessions: [{
      id: "s1",
      label: "單一場次",
      date: "2026-07-05",
      time: "09:30",
      end_time: "12:00",
      place: "數位學習中心",
      cap_main: 24,
      cap_wait: 6
    }],
    custom_fields: []
  }, {
    id: "act-006",
    name: "古典音樂賞析系列：巴洛克之聲",
    type: "多場次",
    category: "研習課程",
    branch: "湖口鄉圖書館",
    status: "已結束",
    fee: 200,
    reg_start: "2026-05-01",
    reg_end: "2026-05-20",
    cancel_deadline_hours: 24,
    published: true,
    target: "一般大眾",
    age_min: null,
    age_max: null,
    desc: "兩週系列講座，由音樂學者導聆巴洛克時期重要作曲家與作品。",
    notice: "",
    pay_methods: ["現場繳費"],
    sessions: [{
      id: "s1",
      label: "第一週",
      date: "2026-05-24",
      time: "14:00",
      end_time: "16:00",
      place: "演講廳",
      cap_main: 30,
      cap_wait: 0
    }, {
      id: "s2",
      label: "第二週",
      date: "2026-05-31",
      time: "14:00",
      end_time: "16:00",
      place: "演講廳",
      cap_main: 30,
      cap_wait: 0
    }],
    custom_fields: []
  }, {
    id: "act-007",
    name: "兒童程式積木體驗營",
    type: "單場次",
    category: "研習課程",
    branch: "竹北市圖書館",
    status: "報名中",
    fee: 0,
    reg_start: "2026-06-03",
    reg_end: "2026-06-20",
    cancel_deadline_hours: 24,
    published: true,
    target: "國小中高年級",
    age_min: 9,
    age_max: 12,
    desc: "以圖形化積木程式引導孩子認識邏輯與運算思維，動手做出小遊戲。",
    notice: "電腦由館方提供，無需自備。",
    pay_methods: [],
    sessions: [{
      id: "s1",
      label: "單一場次",
      date: "2026-06-29",
      time: "13:30",
      end_time: "16:00",
      place: "數位學習中心",
      cap_main: 20,
      cap_wait: 8
    }],
    custom_fields: [{
      seq: 1,
      name: "是否曾學過程式",
      type: "單選",
      required: false,
      options: ["否", "有一點", "有經驗"]
    }]
  }, {
    id: "act-008",
    name: "在地文史走讀：老城區的記憶",
    type: "單場次",
    category: "藝文展覽",
    branch: "竹東鎮圖書館",
    status: "已下架",
    fee: 150,
    reg_start: "2026-04-20",
    reg_end: "2026-05-05",
    cancel_deadline_hours: 24,
    published: false,
    target: "一般大眾",
    age_min: 12,
    age_max: null,
    desc: "由文史工作者帶領，走訪老城區的歷史街廓與建築。",
    notice: "全程步行約 2 小時，請評估體能。",
    pay_methods: ["現場繳費"],
    sessions: [{
      id: "s1",
      label: "單一場次",
      date: "2026-05-10",
      time: "09:00",
      end_time: "11:00",
      place: "竹東火車站前集合",
      cap_main: 25,
      cap_wait: 5
    }],
    custom_fields: []
  }];
  activities.forEach(a => {
    a.cover_image = a.cover_image || null;
    a.attachments = a.attachments || [];
    a.doc_required = !!a.doc_required;
    a.doc_note = a.doc_note || "";
    a.doc_deadline_days = a.doc_deadline_days || 14;
    a.sessions.forEach(s => {
      if (s.cap_per_reg === undefined) s.cap_per_reg = null;
      if (s.cap_groups === undefined) s.cap_groups = null;
    });
  });
  var firstNames = ["林淑芬", "陳建宏", "王怡君", "張志明", "李美玲", "黃國華", "吳雅婷", "劉俊傑", "蔡欣怡", "鄭文彬", "許家瑋", "謝佳蓉", "洪志偉", "周淑貞", "曾冠廷", "賴慧君", "邱建良", "羅淑娟", "高志強", "簡淑芬"];
  var SUR = ["林", "陳", "王", "張", "李", "黃", "吳", "劉", "蔡", "鄭", "許", "謝", "洪", "周", "曾", "賴", "邱", "羅", "高", "簡"];
  var GIV = ["宜蓁", "柏翰", "詩涵", "承恩", "品妍", "宥廷", "語彤", "冠宇", "子晴", "家豪", "雅雯", "哲瑋", "佩珊", "彥廷", "思妤", "政勳", "婉婷", "志豪", "心怡", "睿恩"];
  function genName(n) {
    return SUR[n * 7 % 20] + GIV[(n * 3 + Math.floor(n / 20)) % 20];
  }
  function maskId(seed) {
    var a = "ABCDEFHJ"[seed % 8];
    var n1 = seed * 7 % 10;
    var n2 = (seed * 3 + 1) % 10;
    return `${a}${n1}${n2}****${String(seed * 13 % 100).padStart(2, "0")}`;
  }
  function addDays(dateStr, n) {
    var d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function makeRegistrants(idx, hasChild, name) {
    var main = {
      is_primary: true,
      kind: "成人",
      name: name || firstNames[idx % firstNames.length],
      id_no_mask: maskId(idx + 3),
      gender: idx % 2 === 0 ? "女" : "男",
      birth_date: `19${70 + idx % 25}-0${1 + idx % 9}-1${idx % 9}`,
      phone: `09${10 + idx % 89}-${100 + idx % 899}-${100 + idx % 800}`.slice(0, 12),
      email: `user${idx + 1}@example.com`
    };
    var list = [main];
    if (hasChild) {
      list.push({
        is_primary: false,
        kind: "兒童",
        name: main.name.slice(0, 1) + "小" + "明亮華安寧"[idx % 5],
        id_no_mask: maskId(idx + 140),
        gender: idx % 3 === 0 ? "男" : "女",
        birth_date: `20${18 + idx % 5}-0${1 + idx % 8}-${10 + idx % 18}`
      });
    }
    return list;
  }
  var regStatuses = [["正取", "已繳", "通過", "未簽到"], ["正取", "已繳", "通過", "未簽到"], ["正取", "已繳", "缺件", "未簽到"], ["正取", "待繳", "通過", "未簽到"], ["正取", "已繳", "待審", "未簽到"], ["正取", "逾期", "缺件", "未簽到"], ["正取", "已繳", "通過", "未簽到"], ["正取", "已繳", "退回", "未簽到"], ["正取", "已繳", "待審", "未簽到"], ["正取", "待繳", "缺件", "未簽到"], ["正取", "已繳", "通過", "未簽到"], ["正取", "已繳", "通過", "未簽到"], ["備取", "無需", "無需", "未簽到"], ["備取", "無需", "無需", "未簽到"], ["備取", "無需", "無需", "未簽到"], ["待回覆", "無需", "無需", "未簽到"], ["取消", "無需", "無需", "未簽到"]];
  var serial = 0;
  var registrations = regStatuses.map((st, i) => {
    serial += 1;
    var hasChild = i % 2 === 0;
    var composition = hasChild ? "1大1小" : i % 3 === 0 ? "2大" : "1大";
    var waitSeq = st[0] === "備取" ? i - 11 : st[0] === "待回覆" ? 1 : null;
    var method = ["信用卡", "TWQR", "現場繳費"][i % 3];
    return {
      id: `reg-${serial}`,
      activity_id: "act-001",
      session_id: "s1",
      reg_no: `R${String(serial).padStart(4, "0")}`,
      status: st[0],
      wait_seq: waitSeq,
      composition,
      registered_at: `2026-06-0${1 + i % 9}T0${8 + i % 2}:${10 + i}:00`,
      registrants: makeRegistrants(i, hasChild),
      payment: {
        status: st[1],
        method: st[1] === "無需" ? null : method,
        amount: hasChild ? 600 : 300,
        received_by: null,
        received_at: null
      },
      document: {
        status: st[2],
        uploaded_at: st[2] === "無需" || st[2] === "缺件" ? null : `2026-06-0${2 + i % 7} 1${i % 9}:30`
      },
      check_in: {
        status: st[3],
        checked_in_at: null,
        checked_out_at: null
      },
      custom_answers: [{
        name: "素食需求",
        value: ["否", "全素", "蛋奶素"][i % 3]
      }, {
        name: "孩童年齡",
        value: hasChild ? `${4 + i % 6} 歲` : "—"
      }],
      history: [{
        at: `2026-06-0${1 + i % 9} 0${8 + i % 2}:${10 + i}`,
        text: "完成線上報名",
        who: "讀者"
      }, st[1] === "已繳" ? {
        at: `2026-06-0${2 + i % 7} 1${i % 9}:05`,
        text: `完成繳費（${method}）`,
        who: "系統"
      } : null, st[0] === "取消" ? {
        at: "2026-06-04 09:12",
        text: "讀者自行取消報名",
        who: "讀者"
      } : null, st[0] === "待回覆" ? {
        at: "2026-06-04 09:12",
        text: "名額釋出，已寄遞補通知，等待讀者回覆",
        who: "陳館員"
      } : null].filter(Boolean)
    };
  });
  function genRegs(actId, sessionId, spec) {
    var act = activities.find(a => a.id === actId);
    var ses = act.sessions.find(s => s.id === sessionId);
    var out = [];
    var total = spec.main + (spec.wait || 0);
    var span = Math.max(1, spec.span || 7);
    var _loop = function (i) {
      serial += 1;
      var n = serial + 20;
      var isWait = i >= spec.main;
      var day = spec.todayCount && i < spec.todayCount ? today : addDays(act.reg_start, i % span);
      var hh = String(8 + i % 10).padStart(2, "0");
      var mm = String(i * 7 % 60).padStart(2, "0");
      var pay = {
        status: "無需",
        method: null,
        amount: 0,
        received_by: null,
        received_at: null
      };
      if (act.fee > 0 && !isWait) {
        var st = spec.payOf && spec.payOf(i) || "已繳";
        var method = act.pay_methods[i % act.pay_methods.length];
        pay = {
          status: st,
          method,
          amount: act.fee,
          received_by: st === "已繳" && method === "現場繳費" ? "張館員" : null,
          received_at: st === "已繳" && method === "現場繳費" ? `${addDays(day, 1)} 10:${mm}` : null
        };
      }
      var came = spec.cameOf ? spec.cameOf(i) : false;
      var inAt = came ? `${ses.date} ${ses.time.slice(0, 2)}:${String(Math.max(0, i % 12 - 2)).padStart(2, "0")}`.replace(/:(\d)$/, ":0$1") : null;
      var reg = {
        id: `reg-${serial}`,
        activity_id: actId,
        session_id: sessionId,
        reg_no: `R${String(serial).padStart(4, "0")}`,
        status: isWait ? "備取" : "正取",
        wait_seq: isWait ? i - spec.main + 1 : null,
        composition: "1大",
        registered_at: `${day}T${hh}:${mm}:00`,
        registrants: makeRegistrants(n, false, genName(n)),
        payment: pay,
        document: {
          status: "無需",
          uploaded_at: null
        },
        check_in: {
          status: came ? "已簽到" : "未簽到",
          checked_in_at: inAt,
          checked_out_at: came ? `${ses.date} ${ses.end_time}` : null
        },
        custom_answers: (act.custom_fields || []).map((c, k) => ({
          name: c.name,
          value: c.options && c.options.length ? c.options[(i + k) % c.options.length] : "—"
        })),
        history: [{
          at: `${day} ${hh}:${mm}`,
          text: isWait ? "完成線上報名（列入備取）" : "完成線上報名",
          who: "讀者"
        }, pay.status === "已繳" ? {
          at: `${addDays(day, 1)} 10:${mm}`,
          text: `完成繳費（${pay.method}）`,
          who: pay.method === "現場繳費" ? "張館員" : "系統"
        } : null, came ? {
          at: inAt,
          text: "現場簽到完成",
          who: "現場館員"
        } : null].filter(Boolean)
      };
      out.push(reg);
    };
    for (var i = 0; i < total; i++) {
      _loop(i);
    }
    return out;
  }
  registrations.push(...genRegs("act-002", "s1", {
    main: 38,
    wait: 2,
    span: 16,
    todayCount: 4
  }), ...genRegs("act-003", "s1", {
    main: 10,
    wait: 2,
    span: 3,
    payOf: i => i === 3 ? "待繳" : i === 7 ? "逾期" : "已繳"
  }), ...genRegs("act-003", "s2", {
    main: 7,
    wait: 0,
    span: 3,
    payOf: i => i === 1 || i === 5 ? "待繳" : "已繳"
  }), ...genRegs("act-006", "s1", {
    main: 30,
    wait: 0,
    span: 18,
    cameOf: i => i % 10 !== 9
  }), ...genRegs("act-006", "s2", {
    main: 28,
    wait: 0,
    span: 18,
    cameOf: i => i % 14 !== 13
  }), ...genRegs("act-007", "s1", {
    main: 16,
    wait: 0,
    span: 2,
    todayCount: 3
  }), ...genRegs("act-008", "s1", {
    main: 20,
    wait: 0,
    span: 12,
    payOf: () => "待繳"
  }));
  var blacklist = [{
    id: "bl-1",
    id_no_mask: "A12****90",
    name_mask: "吳○明",
    total_points: 3,
    is_suspended: true,
    suspended_until: "2026-06-30",
    violation_records: [{
      type: "放鳥",
      point: 1,
      recorded_at: "2026-04-15",
      trigger: "系統自動",
      activity_name: "親子採果體驗",
      reason: "報名後未到場且未取消"
    }, {
      type: "放鳥",
      point: 1,
      recorded_at: "2026-05-02",
      trigger: "系統自動",
      activity_name: "城市生態講座",
      reason: "報名後未到場且未取消"
    }, {
      type: "遲到",
      point: 1,
      recorded_at: "2026-05-20",
      trigger: "系統自動",
      activity_name: "手作皮革工作坊",
      reason: "逾遲到判定時間才到場"
    }]
  }, {
    id: "bl-2",
    id_no_mask: "B23****14",
    name_mask: "陳○華",
    total_points: 2,
    is_suspended: false,
    suspended_until: null,
    violation_records: [{
      type: "放鳥",
      point: 1,
      recorded_at: "2026-05-10",
      trigger: "系統自動",
      activity_name: "兒童程式積木體驗營",
      reason: "報名後未到場且未取消"
    }, {
      type: "遲到",
      point: 1,
      recorded_at: "2026-05-25",
      trigger: "系統自動",
      activity_name: "古典音樂賞析系列",
      reason: "逾遲到判定時間才到場"
    }]
  }, {
    id: "bl-3",
    id_no_mask: "A19****07",
    name_mask: "林○芳",
    total_points: 4,
    is_suspended: true,
    suspended_until: "2026-07-12",
    violation_records: [{
      type: "放鳥",
      point: 1,
      recorded_at: "2026-03-20",
      trigger: "系統自動",
      activity_name: "繪本說故事時間",
      reason: "報名後未到場"
    }, {
      type: "放鳥",
      point: 1,
      recorded_at: "2026-04-05",
      trigger: "系統自動",
      activity_name: "親子採果體驗",
      reason: "報名後未到場"
    }, {
      type: "違規",
      point: 2,
      recorded_at: "2026-04-28",
      trigger: "陳館員",
      activity_name: "手作皮革工作坊",
      reason: "現場行為不當，經勸導無效"
    }]
  }, {
    id: "bl-4",
    id_no_mask: "H08****56",
    name_mask: "黃○強",
    total_points: 1,
    is_suspended: false,
    suspended_until: null,
    violation_records: [{
      type: "遲到",
      point: 1,
      recorded_at: "2026-05-30",
      trigger: "系統自動",
      activity_name: "城市生態講座",
      reason: "逾遲到判定時間才到場"
    }]
  }, {
    id: "bl-5",
    id_no_mask: "F21****33",
    name_mask: "張○婷",
    total_points: 3,
    is_suspended: true,
    suspended_until: "2026-06-18",
    violation_records: [{
      type: "放鳥",
      point: 1,
      recorded_at: "2026-04-10",
      trigger: "系統自動",
      activity_name: "古典音樂賞析系列",
      reason: "報名後未到場"
    }, {
      type: "放鳥",
      point: 1,
      recorded_at: "2026-04-22",
      trigger: "系統自動",
      activity_name: "兒童程式積木體驗營",
      reason: "報名後未到場"
    }, {
      type: "遲到",
      point: 1,
      recorded_at: "2026-05-15",
      trigger: "系統自動",
      activity_name: "親子採果體驗",
      reason: "逾遲到判定時間才到場"
    }]
  }];
  blacklist.forEach(b => {
    b.violation_records.forEach((v, i) => {
      v.id = `${b.id}-v${i + 1}`;
    });
    b.adjust_log = [];
  });
  blacklist[2].adjust_log = [{
    at: "2026-05-02 11:20",
    who: "王主任",
    text: "撤銷 1 筆記點（放鳥・繪本說故事時間，-1 點）：讀者事後提出就醫證明"
  }];
  blacklist[2].violation_records.shift();
  blacklist[2].total_points = 3;
  var notifTemplates = [{
    id: "nt-1",
    name: "報名成功通知",
    event: "報名成功",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】您已成功報名 {{activity_name}}",
    body: "親愛的 {{name}} 您好，\n\n您已成功報名「{{activity_name}}」，場次時間為 {{session_time}}，地點 {{place}}。\n報名編號：{{reg_no}}\n\n敬請準時出席。"
  }, {
    id: "nt-2",
    name: "候補通知",
    event: "候補通知",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】您已進入 {{activity_name}} 候補名單",
    body: "親愛的 {{name}} 您好，\n\n您報名的「{{activity_name}}」目前名額已滿，您已進入候補名單。\n若有名額釋出，我們將另行通知。"
  }, {
    id: "nt-3",
    name: "遞補轉正通知",
    event: "遞補轉正",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】恭喜！您已遞補為 {{activity_name}} 正取",
    body: "親愛的 {{name}} 您好，\n\n您報名的「{{activity_name}}」已有名額釋出，您已遞補為正取。\n請於 {{reply_deadline}} 前回覆是否參加。"
  }, {
    id: "nt-4",
    name: "繳費提醒",
    event: "繳費提醒",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】{{activity_name}} 繳費提醒",
    body: "親愛的 {{name}} 您好，\n\n提醒您「{{activity_name}}」應繳費用 NT${{amount}}，請於 {{payment_deadline}} 前完成繳費，逾期名額將自動釋出。"
  }, {
    id: "nt-5",
    name: "行前通知",
    event: "行前通知",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】明日活動提醒：{{activity_name}}",
    body: "親愛的 {{name}} 您好，\n\n提醒您報名的「{{activity_name}}」即將於 {{session_time}} 舉行，地點 {{place}}，敬請準時出席。"
  }, {
    id: "nt-6",
    name: "取消通知",
    event: "取消通知",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】{{activity_name}} 報名已取消",
    body: "親愛的 {{name}} 您好，\n\n您報名的「{{activity_name}}」（報名編號 {{reg_no}}）已取消。如有疑問請洽承辦館別。"
  }, {
    id: "nt-8",
    name: "取消通知（簡訊）",
    event: "取消通知",
    channel: "簡訊",
    enabled: false,
    subject: "",
    body: "【圖書館】您報名的 {{activity_name}} 已取消，造成不便敬請見諒。"
  }, {
    id: "nt-7",
    name: "補件提醒",
    event: "補件提醒",
    channel: "Email",
    enabled: true,
    subject: "【圖書館】{{activity_name}} 補件提醒",
    body: "親愛的 {{name}} 您好，\n\n您報名的「{{activity_name}}」尚有文件未上傳，請於 {{document_deadline}} 前至報名紀錄完成上傳。"
  }];
  notifTemplates.forEach(t => {
    t.apply_scope = "全部活動";
    t.apply_activities = [];
  });
  var tplPay = notifTemplates.find(t => t.id === "nt-4");
  if (tplPay) {
    tplPay.apply_scope = "指定活動";
    tplPay.apply_activities = ["act-001", "act-003"];
  }
  var tplDoc = notifTemplates.find(t => t.id === "nt-7");
  if (tplDoc) {
    tplDoc.apply_scope = "指定活動";
    tplDoc.apply_activities = ["act-001"];
  }
  var notifLog = [{
    id: "nl-1",
    activity_id: "act-001",
    at: "2026-06-01 08:15",
    template: "報名成功通知",
    channel: "Email",
    target: "正取",
    count: 12,
    by: "系統自動",
    subject: "【圖書館】您已成功報名 親子採果體驗"
  }, {
    id: "nl-2",
    activity_id: "act-001",
    at: "2026-06-03 09:00",
    template: "繳費提醒",
    channel: "Email",
    target: "指定讀者",
    count: 3,
    by: "陳館員",
    subject: "【圖書館】親子採果體驗 繳費提醒"
  }, {
    id: "nl-3",
    activity_id: "act-001",
    at: "2026-06-04 09:12",
    template: "遞補轉正通知",
    channel: "Email",
    target: "指定讀者",
    count: 1,
    by: "陳館員",
    subject: "【圖書館】恭喜！您已遞補為 親子採果體驗 正取"
  }, {
    id: "nl-4",
    activity_id: "act-002",
    at: "2026-05-20 09:30",
    template: "報名成功通知",
    channel: "Email",
    target: "正取",
    count: 38,
    by: "系統自動",
    subject: "【圖書館】您已成功報名 城市生態講座：都市裡的野鳥"
  }];
  var settings = {
    violation: {
      suspend_threshold: 3,
      suspend_days: 30,
      late_minutes: 30,
      auto_point_timing: "補登期限屆滿後",
      point_window: "一年",
      release_action: "歸零"
    },
    quota: {
      reply_deadline_hours: 48,
      require_promotion_confirm: true,
      payment_deadline_days: 3,
      payment_auto_release: true,
      payment_release_buffer_days: 0,
      promotion_mode: "人工遞補",
      supplement_deadline_days: 7
    },
    notify: {
      advance_notice_hours: 24,
      sms_enabled: false,
      document_remind_days: 3,
      per_branch_sender: false,
      senders: [{
        branch: "文化局圖書館",
        email: "library@example.com",
        sms_account: "（未申請）"
      }],
      events: [{
        event: "報名成功",
        email: true,
        sms: false
      }, {
        event: "候補通知",
        email: true,
        sms: false
      }, {
        event: "遞補轉正",
        email: true,
        sms: false
      }, {
        event: "繳費提醒",
        email: true,
        sms: false
      }, {
        event: "行前通知",
        email: true,
        sms: false
      }, {
        event: "取消通知",
        email: true,
        sms: false
      }, {
        event: "補件提醒",
        email: true,
        sms: false
      }]
    },
    staff: [{
      id: "u1",
      name: "王主任",
      email: "admin@example.com",
      role: "系統管理員",
      branch: "文化局圖書館",
      branches: [],
      group: "系統管理群組",
      active: true
    }, {
      id: "u2",
      name: "陳館員",
      email: "chen@example.com",
      role: "總館館員",
      branch: "文化局圖書館",
      branches: [],
      group: "活動承辦群組",
      active: true
    }, {
      id: "u3",
      name: "李館員",
      email: "lee@example.com",
      role: "分館館員",
      branch: "竹北市圖書館",
      branches: ["竹北市圖書館", "新豐鄉圖書館"],
      group: "活動承辦群組",
      active: true
    }, {
      id: "u4",
      name: "張館員",
      email: "chang@example.com",
      role: "現場館員",
      branch: "竹東鎮圖書館",
      branches: ["竹東鎮圖書館"],
      group: "現場簽到群組",
      active: true
    }, {
      id: "u5",
      name: "林助理",
      email: "lin@example.com",
      role: "現場館員",
      branch: "湖口鄉圖書館",
      branches: ["湖口鄉圖書館"],
      group: "現場簽到群組",
      active: false
    }],
    roleGroups: [{
      role: "系統管理員",
      group: "系統管理群組",
      scope: "全部館別",
      can_paid: true,
      can_suspend: true,
      can_edit_checkin: true
    }, {
      role: "總館館員",
      group: "活動承辦群組",
      scope: "全部館別",
      can_paid: true,
      can_suspend: false,
      can_edit_checkin: false
    }, {
      role: "分館館員",
      group: "活動承辦群組",
      scope: "僅授權館別",
      can_paid: false,
      can_suspend: false,
      can_edit_checkin: false
    }, {
      role: "現場館員",
      group: "現場簽到群組",
      scope: "僅授權館別",
      can_paid: false,
      can_suspend: false,
      can_edit_checkin: false
    }],
    password: {
      min_length: 8,
      require_mix: true,
      expire_days: 90,
      lock_after_fails: 5
    },
    violationTypes
  };
  var auditLog = [{
    at: "2026-06-05 09:12",
    who: "王主任",
    action: "新增帳號",
    target: "林助理（湖口鄉圖書館）"
  }, {
    at: "2026-06-04 16:40",
    who: "王主任",
    action: "停用帳號",
    target: "林助理（湖口鄉圖書館）"
  }, {
    at: "2026-06-03 11:05",
    who: "王主任",
    action: "變更角色",
    target: "李館員：承辦館員 → 分館館員"
  }, {
    at: "2026-06-02 14:22",
    who: "王主任",
    action: "新增授權館別",
    target: "李館員 ＋ 新豐鄉圖書館"
  }];
  window.DB = {
    today,
    branches,
    branchPolicy,
    categories,
    violationTypes,
    activities,
    registrations,
    blacklist,
    notifTemplates,
    notifLog,
    settings,
    auditLog,
    addDays
  };
})();
var {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback
} = React;
var ICONS = {
  dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  calendar: "M8 2v3M16 2v3M3.5 9h17M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5z",
  alert: "M12 3 2.5 20h19L12 3zM12 9v5M12 17.5v.5",
  bell: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0",
  settings: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-4.3-4.3",
  plus: "M12 5v14M5 12h14",
  chevronRight: "M9 6l6 6-6 6",
  chevronDown: "M6 9l6 6 6-6",
  chevronLeft: "M15 6l-6 6 6 6",
  close: "M6 6l12 12M18 6 6 18",
  check: "M5 12l5 5 9-11",
  copy: "M9 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1",
  edit: "M4 20h4L18.5 9.5a2 2 0 0 0-2.8-2.8L5 17.2V20zM14.5 7.5l2.8 2.8",
  eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  download: "M12 3v12M7 11l5 5 5-5M4 20h16",
  upload: "M12 21V9M7 13l5-5 5 5M4 4h16",
  users: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8",
  scan: "M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18",
  doc: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  trash: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13",
  mail: "M3 6.5h18v11H3v-11zM3 7l9 6 9-6",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  filter: "M3 5h18l-7 8v6l-4 2v-8L3 5z",
  pin: "M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  dollar: "M12 2v20M16.5 6.5c0-1.7-2-3-4.5-3S7.5 4.8 7.5 6.5 9.5 9.5 12 9.5s4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  menu: "M4 6h16M4 12h16M4 18h16",
  undo: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3"
};
function Icon({
  name,
  size = 18,
  className = "",
  style = {},
  strokeWidth = 1.8
}) {
  var d = ICONS[name];
  if (!d) return null;
  var fill = name === "dashboard" ? "currentColor" : "none";
  if (name === "dashboard") {
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: className,
      style: style,
      "aria-hidden": "true"
    }, React.createElement("path", {
      d: d
    }));
  }
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: d
  }));
}
var BADGE_MAP = {
  正取: "green",
  通過: "green",
  已繳: "green",
  已簽到: "green",
  已簽退: "green",
  啟用: "green",
  正常: "green",
  報名中: "green",
  備取: "blue",
  即將開始: "blue",
  待回覆: "blue",
  候補: "blue",
  進行中: "blue",
  待繳: "amber",
  待審: "amber",
  警示: "amber",
  遲到: "amber",
  逾期: "red",
  停權: "red",
  停權中: "red",
  退回: "red",
  放鳥: "red",
  違規: "red",
  缺件: "red",
  草稿: "gray",
  取消: "gray",
  無需: "gray",
  已結束: "gray",
  已下架: "gray",
  停用: "gray",
  未簽到: "gray"
};
var BADGE_COLORS = {
  green: {
    bg: "#DCFCE7",
    fg: "#15803D"
  },
  blue: {
    bg: "#DBEAFE",
    fg: "#1E40AF"
  },
  amber: {
    bg: "#FEF3C7",
    fg: "#92400E"
  },
  red: {
    bg: "#FEE2E2",
    fg: "#B91C1C"
  },
  gray: {
    bg: "#F3F4F6",
    fg: "#6B7280"
  }
};
function Badge({
  children,
  tone,
  dot
}) {
  var key = tone || BADGE_MAP[children] || "gray";
  var c = BADGE_COLORS[key] || BADGE_COLORS.gray;
  return React.createElement("span", {
    className: "badge",
    style: {
      background: c.bg,
      color: c.fg
    }
  }, dot && React.createElement("span", {
    className: "badge-dot",
    style: {
      background: c.fg
    }
  }), children);
}
function Button({
  variant = "ghost",
  size,
  children,
  icon,
  iconRight,
  onClick,
  disabled,
  type = "button",
  style = {},
  full
}) {
  var cls = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", full ? "btn-full" : ""].filter(Boolean).join(" ");
  return React.createElement("button", {
    type: type,
    className: cls,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, icon && React.createElement(Icon, {
    name: icon,
    size: size === "sm" ? 13 : 15
  }), children, iconRight && React.createElement(Icon, {
    name: iconRight,
    size: size === "sm" ? 13 : 15
  }));
}
function Field({
  label,
  required,
  children,
  hint,
  error,
  style
}) {
  return React.createElement("div", {
    className: "field",
    style: style
  }, label && React.createElement("label", {
    className: "field-label"
  }, label, required && React.createElement("span", {
    className: "req"
  }, "*")), children, hint && !error && React.createElement("div", {
    className: "field-hint"
  }, hint), error && React.createElement("div", {
    className: "field-error"
  }, error));
}
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  invalid,
  ...rest
}) {
  return React.createElement("input", {
    className: "input" + (invalid ? " invalid" : ""),
    type: type,
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    ...rest
  });
}
function Select({
  value,
  onChange,
  options,
  placeholder,
  ...rest
}) {
  return React.createElement("div", {
    className: "select-wrap"
  }, React.createElement("select", {
    className: "input select",
    value: value ?? "",
    onChange: e => onChange && onChange(e.target.value),
    ...rest
  }, placeholder && React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    var val = typeof o === "string" ? o : o.value;
    var lab = typeof o === "string" ? o : o.label;
    return React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), React.createElement(Icon, {
    name: "chevronDown",
    size: 15,
    className: "select-chevron"
  }));
}
function Textarea({
  value,
  onChange,
  placeholder,
  rows = 3,
  ...rest
}) {
  return React.createElement("textarea", {
    className: "input textarea",
    rows: rows,
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    ...rest
  });
}
function Toggle({
  checked,
  onChange,
  disabled
}) {
  return React.createElement("button", {
    type: "button",
    className: "toggle" + (checked ? " on" : "") + (disabled ? " disabled" : ""),
    onClick: () => !disabled && onChange && onChange(!checked),
    "aria-pressed": checked
  }, React.createElement("span", {
    className: "toggle-knob"
  }));
}
function Radio({
  checked,
  onChange,
  label,
  sub
}) {
  return React.createElement("button", {
    type: "button",
    className: "radio-card" + (checked ? " checked" : ""),
    onClick: onChange
  }, React.createElement("span", {
    className: "radio-dot"
  }, checked && React.createElement("span", {
    className: "radio-inner"
  })), React.createElement("span", {
    className: "radio-text"
  }, React.createElement("span", {
    className: "radio-label"
  }, label), sub && React.createElement("span", {
    className: "radio-sub"
  }, sub)));
}
function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  hint
}) {
  return React.createElement("label", {
    className: "checkbox" + (disabled ? " disabled" : "")
  }, React.createElement("span", {
    className: "checkbox-box" + (checked ? " checked" : "") + (disabled ? " disabled" : ""),
    onClick: e => {
      e.preventDefault();
      if (!disabled) onChange && onChange(!checked);
    }
  }, checked && React.createElement(Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.6
  })), React.createElement("span", null, label, hint && React.createElement("span", {
    className: "checkbox-hint"
  }, hint)));
}
function Card({
  children,
  className = "",
  style,
  pad = true
}) {
  return React.createElement("div", {
    className: "card " + className,
    style: {
      padding: pad ? undefined : 0,
      ...style
    }
  }, children);
}
function ProgressBar({
  value,
  max,
  tone = "primary",
  height = 8
}) {
  var pct = max > 0 ? Math.min(100, Math.round(value / max * 100)) : 0;
  var color = tone === "green" ? "#16A34A" : tone === "amber" ? "#D97706" : "#2563EB";
  return React.createElement("div", {
    className: "progress",
    style: {
      height
    }
  }, React.createElement("div", {
    className: "progress-fill",
    style: {
      width: pct + "%",
      background: color
    }
  }));
}
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement("div", {
    className: "tabs",
    role: "tablist"
  }, tabs.map(t => {
    var id = typeof t === "string" ? t : t.id;
    var label = typeof t === "string" ? t : t.label;
    var count = typeof t === "object" ? t.count : undefined;
    return React.createElement("button", {
      key: id,
      role: "tab",
      className: "tab" + (active === id ? " active" : ""),
      onClick: () => onChange(id)
    }, label, count != null && React.createElement("span", {
      className: "tab-count"
    }, count));
  }));
}
function StepIndicator({
  steps,
  current,
  onStepClick,
  free
}) {
  return React.createElement("div", {
    className: "steps"
  }, steps.map((s, i) => {
    var state = i < current ? "done" : i === current ? "active" : "todo";
    return React.createElement(React.Fragment, {
      key: s
    }, React.createElement("button", {
      type: "button",
      className: "step step-" + state + (free ? " step-free" : ""),
      onClick: () => onStepClick && (free || i <= current) && onStepClick(i)
    }, React.createElement("span", {
      className: "step-num"
    }, state === "done" ? React.createElement(Icon, {
      name: "check",
      size: 14,
      strokeWidth: 2.6
    }) : i + 1), React.createElement("span", {
      className: "step-label"
    }, s)), i < steps.length - 1 && React.createElement("span", {
      className: "step-line" + (i < current ? " filled" : "")
    }));
  }));
}
function Drawer({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 460
}) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  return React.createElement("div", {
    className: "drawer-root" + (open ? " open" : ""),
    "aria-hidden": !open
  }, React.createElement("div", {
    className: "drawer-backdrop",
    onClick: onClose
  }), React.createElement("div", {
    className: "drawer-panel",
    style: {
      width
    }
  }, React.createElement("div", {
    className: "drawer-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "drawer-title"
  }, title), subtitle && React.createElement("div", {
    className: "drawer-sub"
  }, subtitle)), React.createElement("button", {
    className: "icon-btn",
    onClick: onClose,
    "aria-label": "關閉"
  }, React.createElement(Icon, {
    name: "close",
    size: 18
  }))), React.createElement("div", {
    className: "drawer-body"
  }, open && children), footer && React.createElement("div", {
    className: "drawer-foot"
  }, footer)));
}
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 460
}) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return React.createElement("div", {
    className: "modal-root"
  }, React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }), React.createElement("div", {
    className: "modal-panel",
    style: {
      width
    }
  }, React.createElement("div", {
    className: "modal-head"
  }, React.createElement("div", {
    className: "modal-title"
  }, title), React.createElement("button", {
    className: "icon-btn",
    onClick: onClose,
    "aria-label": "關閉"
  }, React.createElement(Icon, {
    name: "close",
    size: 18
  }))), React.createElement("div", {
    className: "modal-body"
  }, children), footer && React.createElement("div", {
    className: "modal-foot"
  }, footer)));
}
var ToastCtx = createContext(() => {});
function useToast() {
  return useContext(ToastCtx);
}
function ToastProvider({
  children
}) {
  var [toasts, setToasts] = useState([]);
  var push = useCallback((msg, tone = "default") => {
    var id = Math.random().toString(36).slice(2);
    setToasts(t => [...t, {
      id,
      msg,
      tone
    }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 2800);
  }, []);
  return React.createElement(ToastCtx.Provider, {
    value: push
  }, children, React.createElement("div", {
    className: "toast-host"
  }, toasts.map(t => React.createElement("div", {
    key: t.id,
    className: "toast toast-" + t.tone
  }, t.tone === "success" && React.createElement(Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.4
  }), t.tone === "danger" && React.createElement(Icon, {
    name: "alert",
    size: 16
  }), React.createElement("span", null, t.msg)))));
}
function PageHeader({
  title,
  subtitle,
  actions,
  breadcrumb
}) {
  return React.createElement("div", {
    className: "page-header"
  }, React.createElement("div", null, breadcrumb && React.createElement("div", {
    className: "breadcrumb"
  }, breadcrumb), React.createElement("h1", {
    className: "page-title"
  }, title), subtitle && React.createElement("div", {
    className: "page-subtitle"
  }, subtitle)), actions && React.createElement("div", {
    className: "page-actions"
  }, actions));
}
function Empty({
  icon = "search",
  title,
  sub
}) {
  return React.createElement("div", {
    className: "empty"
  }, React.createElement("div", {
    className: "empty-icon"
  }, React.createElement(Icon, {
    name: icon,
    size: 26
  })), React.createElement("div", {
    className: "empty-title"
  }, title), sub && React.createElement("div", {
    className: "empty-sub"
  }, sub));
}
function StatCard({
  label,
  value,
  tone,
  hint,
  icon,
  alert,
  onClick,
  children
}) {
  var cls = "stat-card" + (alert ? " stat-alert-" + alert : "") + (onClick ? " stat-clickable" : "");
  var inner = React.createElement(React.Fragment, null, React.createElement("div", {
    className: "stat-top"
  }, React.createElement("span", {
    className: "stat-label"
  }, label), icon && React.createElement("span", {
    className: "stat-icon"
  }, React.createElement(Icon, {
    name: onClick ? "arrowRight" : icon,
    size: 16
  }))), React.createElement("div", {
    className: "stat-value"
  }, value), hint && React.createElement("div", {
    className: "stat-hint"
  }, hint));
  if (!onClick) return React.createElement("div", {
    className: cls
  }, inner, children);
  return React.createElement("div", {
    className: "stat-wrap"
  }, React.createElement("button", {
    type: "button",
    className: cls,
    onClick: onClick
  }, inner), children);
}
function useOutsideClose(open, onClose) {
  var ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    function onDown(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  return ref;
}
function Menu({
  label = "更多",
  items,
  align = "right"
}) {
  var [open, setOpen] = useState(false);
  var close = useCallback(() => setOpen(false), []);
  var ref = useOutsideClose(open, close);
  return React.createElement("div", {
    className: "menu-wrap",
    ref: ref
  }, React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    iconRight: "chevronDown",
    onClick: () => setOpen(o => !o)
  }, label), open && React.createElement("div", {
    className: "menu-panel menu-" + align,
    role: "menu"
  }, items.filter(Boolean).map((it, i) => React.createElement("button", {
    key: i,
    type: "button",
    role: "menuitem",
    className: "menu-item" + (it.danger ? " danger" : "") + (it.disabled ? " disabled" : ""),
    onClick: () => {
      if (it.disabled) return;
      setOpen(false);
      it.onClick && it.onClick();
    }
  }, it.icon && React.createElement(Icon, {
    name: it.icon,
    size: 14
  }), React.createElement("span", {
    className: "menu-text"
  }, React.createElement("span", null, it.label), it.hint && React.createElement("span", {
    className: "menu-hint"
  }, it.hint))))));
}
Object.assign(window, {
  Icon,
  Badge,
  Button,
  Field,
  Input,
  Select,
  Textarea,
  Toggle,
  Radio,
  Checkbox,
  Card,
  ProgressBar,
  Tabs,
  StepIndicator,
  Drawer,
  Modal,
  ToastProvider,
  useToast,
  PageHeader,
  Empty,
  StatCard,
  BADGE_MAP,
  Menu,
  useOutsideClose
});
var {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  createContext
} = React;
function pad2(n) {
  return String(n).padStart(2, "0");
}
function nowHM() {
  var d = new Date();
  return pad2(d.getHours()) + ":" + pad2(d.getMinutes());
}
function nowStamp() {
  return window.DB.today + " " + nowHM();
}
function maskName(name) {
  if (!name) return "";
  return name.length <= 2 ? name[0] + "○" : name[0] + "○" + name.slice(-1);
}
var NAV_BY_ROLE = {
  系統管理員: ["dashboard", "activities", "blacklist", "notifications", "settings"],
  總館館員: ["dashboard", "activities"],
  分館館員: ["dashboard", "activities"],
  現場館員: ["activities"]
};
var StoreCtx = React.createContext(null);
function useStore() {
  return React.useContext(StoreCtx);
}
function StoreProvider({
  children
}) {
  var clone = x => JSON.parse(JSON.stringify(x));
  var [activities, setActivities] = useState(() => clone(window.DB.activities));
  var [registrations, setRegistrations] = useState(() => clone(window.DB.registrations));
  var [blacklist, setBlacklist] = useState(() => clone(window.DB.blacklist));
  var [notifTemplates, setNotifTemplates] = useState(() => clone(window.DB.notifTemplates));
  var [notifLog, setNotifLog] = useState(() => clone(window.DB.notifLog));
  var [settings, setSettings] = useState(() => clone(window.DB.settings));
  var [currentUser, setCurrentUser] = useState(() => clone(window.DB.settings.staff[0]));
  var roleGroup = (settings.roleGroups || []).find(r => r.role === currentUser.role) || {};
  var scopeBranches = roleGroup.scope === "全部館別" ? window.DB.branches : currentUser.branches && currentUser.branches.length ? currentUser.branches : [currentUser.branch];
  var isAdmin = currentUser.role === "系統管理員";
  var isField = currentUser.role === "現場館員";
  function updateReg(id, patch, historyText) {
    setRegistrations(prev => prev.map(r => {
      if (r.id !== id) return r;
      var p = typeof patch === "function" ? patch(r) : patch;
      var history = historyText ? [...r.history, {
        at: nowStamp(),
        text: historyText,
        who: currentUser.name
      }] : r.history;
      return {
        ...r,
        ...p,
        history
      };
    }));
  }
  function withSuspend(entry, points) {
    var th = settings.violation.suspend_threshold;
    if (points >= th && !entry.is_suspended) {
      return {
        total_points: points,
        is_suspended: true,
        suspended_until: window.DB.addDays(window.DB.today, settings.violation.suspend_days)
      };
    }
    if (points < th && entry.is_suspended) return {
      total_points: points,
      is_suspended: false,
      suspended_until: null
    };
    return {
      total_points: points
    };
  }
  function addViolation({
    id_no_mask,
    name,
    type,
    point,
    activity_name,
    reason
  }) {
    var rec = {
      id: "v-" + Math.random().toString(36).slice(2, 7),
      type,
      point,
      recorded_at: window.DB.today,
      trigger: currentUser.name,
      activity_name,
      reason: reason || "館員判定"
    };
    var suspendedNow = false;
    setBlacklist(prev => {
      var hit = prev.find(b => b.id_no_mask === id_no_mask);
      if (hit) {
        return prev.map(b => {
          if (b.id !== hit.id) return b;
          var next = withSuspend(b, b.total_points + point);
          if (next.is_suspended && !b.is_suspended) suspendedNow = true;
          return {
            ...b,
            ...next,
            violation_records: [...b.violation_records, rec]
          };
        });
      }
      var base = {
        id: "bl-" + Math.random().toString(36).slice(2, 6),
        id_no_mask,
        name_mask: maskName(name),
        total_points: 0,
        is_suspended: false,
        suspended_until: null,
        violation_records: [rec],
        adjust_log: []
      };
      var next = withSuspend(base, point);
      if (next.is_suspended) suspendedNow = true;
      return [{
        ...base,
        ...next
      }, ...prev];
    });
    return suspendedNow;
  }
  var store = {
    today: window.DB.today,
    activities,
    setActivities,
    registrations,
    setRegistrations,
    blacklist,
    setBlacklist,
    notifTemplates,
    setNotifTemplates,
    notifLog,
    setNotifLog,
    settings,
    setSettings,
    currentUser,
    setCurrentUser,
    roleGroup,
    scopeBranches,
    isAdmin,
    isField,
    allowedNav: NAV_BY_ROLE[currentUser.role] || ["activities"],
    canOnlinePayment: !!roleGroup.can_paid,
    inScope: branch => scopeBranches.includes(branch),
    getActivity: id => activities.find(a => a.id === id),
    regsFor: actId => registrations.filter(r => r.activity_id === actId),
    updateReg,
    withSuspend,
    addViolation
  };
  return React.createElement(StoreCtx.Provider, {
    value: store
  }, children);
}
function computeTodos(store) {
  var out = [];
  var OPEN = ["報名中", "即將開始", "進行中"];
  store.activities.filter(a => store.inScope(a.branch) && a.type !== "不需報名").forEach(a => {
    var regs = store.regsFor(a.id);
    var overdue = regs.filter(r => r.status === "正取" && r.payment.status === "逾期").length;
    var reply = regs.filter(r => r.status === "待回覆").length;
    var doc = regs.filter(r => r.document.status === "待審").length;
    var promote = 0;
    if (OPEN.includes(a.status)) {
      a.sessions.forEach(s => {
        var held = regs.filter(r => r.session_id === s.id && (r.status === "正取" || r.status === "待回覆")).length;
        var waiting = regs.filter(r => r.session_id === s.id && r.status === "備取").length;
        promote += Math.max(0, Math.min(s.cap_main - held, waiting));
      });
    }
    if (overdue) out.push({
      kind: "overdue",
      tone: "danger",
      actId: a.id,
      count: overdue,
      text: `「${a.name}」有 ${overdue} 筆逾期未繳費`,
      action: "處理",
      params: {
        tab: "registrations",
        regFilter: "逾期未繳"
      }
    });
    if (promote) out.push({
      kind: "promote",
      tone: "warning",
      actId: a.id,
      count: promote,
      text: `「${a.name}」有 ${promote} 個名額可遞補`,
      action: "遞補",
      params: {
        tab: "registrations",
        regFilter: "備取"
      }
    });
    if (reply) out.push({
      kind: "reply",
      tone: "warning",
      actId: a.id,
      count: reply,
      text: `「${a.name}」有 ${reply} 位備取待回覆遞補`,
      action: "查看",
      params: {
        tab: "registrations",
        regFilter: "待回覆"
      }
    });
    if (doc) out.push({
      kind: "doc",
      tone: "warning",
      actId: a.id,
      count: doc,
      text: `「${a.name}」有 ${doc} 筆補件待審核`,
      action: "審核",
      params: {
        tab: "documents",
        docFilter: "待審"
      }
    });
  });
  var order = {
    overdue: 0,
    promote: 1,
    reply: 2,
    doc: 3
  };
  return out.sort((x, y) => order[x.kind] - order[y.kind]);
}
var NAV = [{
  id: "dashboard",
  label: "儀表板",
  icon: "dashboard"
}, {
  id: "activities",
  label: "活動管理",
  icon: "calendar"
}, {
  id: "blacklist",
  label: "違規與黑名單",
  icon: "alert"
}, {
  id: "notifications",
  label: "通知範本",
  icon: "bell"
}, {
  id: "settings",
  label: "系統設定",
  icon: "settings"
}];
var PAGE_LABEL = {
  dashboard: "儀表板",
  activities: "活動管理",
  "activity-new": "新增活動",
  "activity-edit": "編輯活動",
  "activity-detail": "活動詳情",
  blacklist: "違規與黑名單",
  notifications: "通知範本",
  settings: "系統設定"
};
function Sidebar({
  route,
  navigate,
  onClose
}) {
  var store = useStore();
  var u = store.currentUser;
  var topPage = route.page.startsWith("activit") ? "activities" : route.page;
  var items = NAV.filter(n => store.allowedNav.includes(n.id));
  return React.createElement("aside", {
    className: "sidebar"
  }, React.createElement("div", {
    className: "sidebar-brand"
  }, React.createElement("div", {
    className: "brand-mark"
  }, React.createElement(Icon, {
    name: "calendar",
    size: 18
  })), React.createElement("div", {
    className: "brand-text"
  }, React.createElement("span", {
    className: "brand-name"
  }, "活動後台"), React.createElement("span", {
    className: "brand-sub"
  }, "圖書館報名管理"))), React.createElement("div", {
    className: "nav-group-label"
  }, "後台"), React.createElement("nav", {
    className: "nav"
  }, items.map(n => React.createElement("button", {
    key: n.id,
    className: "nav-item" + (topPage === n.id ? " active" : ""),
    onClick: () => {
      navigate(n.id);
      onClose && onClose();
    }
  }, React.createElement(Icon, {
    name: n.icon,
    size: 17,
    className: "nav-ic"
  }), React.createElement("span", null, n.label)))), React.createElement("div", {
    className: "sidebar-foot"
  }, React.createElement("div", {
    className: "role-switch"
  }, React.createElement("div", {
    className: "role-switch-label"
  }, "切換登入身分（檢視權限差異）"), React.createElement("select", {
    className: "input select role-switch-select",
    value: u.id,
    onChange: e => {
      var next = store.settings.staff.find(s => s.id === e.target.value);
      if (!next) return;
      store.setCurrentUser(JSON.parse(JSON.stringify(next)));
      navigate((NAV_BY_ROLE[next.role] || ["activities"])[0]);
      onClose && onClose();
    }
  }, store.settings.staff.filter(s => s.active).map(s => React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.name, "（", s.role, "）")))), React.createElement("div", {
    className: "user-chip"
  }, React.createElement("div", {
    className: "user-avatar"
  }, u.name.slice(0, 1)), React.createElement("div", {
    className: "user-meta"
  }, React.createElement("div", {
    className: "user-name"
  }, u.name), React.createElement("div", {
    className: "user-role"
  }, u.role, " · ", store.roleGroup.scope === "全部館別" ? "全部館別" : store.scopeBranches.join("、")))), store.isField ? React.createElement("div", {
    className: "role-note"
  }, "此身分只負責活動現場的簽到與簽退") : !store.canOnlinePayment && React.createElement("div", {
    className: "role-note"
  }, "此身分只能辦理免費或現場繳費活動")));
}
function TopSearch({
  navigate
}) {
  var store = useStore();
  var [q, setQ] = useState("");
  var [open, setOpen] = useState(false);
  var close = useCallback(() => setOpen(false), []);
  var ref = useOutsideClose(open, close);
  var kw = q.trim();
  var acts = kw ? store.activities.filter(a => store.inScope(a.branch) && a.name.includes(kw)).slice(0, 5) : [];
  var scopeIds = store.activities.filter(a => store.inScope(a.branch)).map(a => a.id);
  var regs = kw && !store.isField ? store.registrations.filter(r => scopeIds.includes(r.activity_id) && (r.registrants[0].name.includes(kw) || r.reg_no.toLowerCase().includes(kw.toLowerCase()))).slice(0, 6) : [];
  function go(page, params) {
    setOpen(false);
    setQ("");
    navigate(page, params);
  }
  return React.createElement("div", {
    className: "topbar-search",
    ref: ref
  }, React.createElement(Icon, {
    name: "search",
    size: 15,
    className: "ic"
  }), React.createElement("input", {
    className: "input",
    value: q,
    placeholder: store.isField ? "搜尋活動…" : "搜尋活動、報名者或報名編號…",
    onChange: e => {
      setQ(e.target.value);
      setOpen(true);
    },
    onFocus: () => setOpen(true),
    onKeyDown: e => {
      if (e.key === "Enter" && kw) go("activities", {
        q: kw
      });
    }
  }), open && kw && React.createElement("div", {
    className: "search-panel"
  }, acts.length === 0 && regs.length === 0 && React.createElement("div", {
    className: "search-empty"
  }, "找不到符合「", kw, "」的活動或報名者"), acts.length > 0 && React.createElement("div", {
    className: "search-group"
  }, "活動"), acts.map(a => React.createElement("button", {
    key: a.id,
    type: "button",
    className: "search-row",
    onClick: () => go("activity-detail", {
      id: a.id
    })
  }, React.createElement("span", {
    className: "search-main"
  }, a.name), React.createElement("span", {
    className: "search-sub"
  }, a.branch, " · ", a.status))), regs.length > 0 && React.createElement("div", {
    className: "search-group"
  }, "報名者"), regs.map(r => {
    var a = store.getActivity(r.activity_id);
    return React.createElement("button", {
      key: r.id,
      type: "button",
      className: "search-row",
      onClick: () => go("activity-detail", {
        id: r.activity_id,
        tab: "registrations",
        q: r.reg_no,
        openReg: r.id
      })
    }, React.createElement("span", {
      className: "search-main"
    }, r.registrants[0].name, " ", React.createElement("span", {
      className: "mono search-no"
    }, r.reg_no)), React.createElement("span", {
      className: "search-sub"
    }, a ? a.name : "", " · ", r.status));
  }), acts.length > 0 && React.createElement("button", {
    type: "button",
    className: "search-more",
    onClick: () => go("activities", {
      q: kw
    })
  }, "在活動管理查看全部結果")));
}
function TopBell({
  navigate
}) {
  var store = useStore();
  var [open, setOpen] = useState(false);
  var close = useCallback(() => setOpen(false), []);
  var ref = useOutsideClose(open, close);
  var todos = computeTodos(store);
  return React.createElement("div", {
    className: "bell-wrap",
    ref: ref
  }, React.createElement("button", {
    className: "topbar-icon-btn",
    title: "待處理事項",
    "aria-label": "待處理事項",
    onClick: () => setOpen(o => !o)
  }, React.createElement(Icon, {
    name: "bell",
    size: 17
  }), todos.length > 0 && React.createElement("span", {
    className: "dot"
  })), open && React.createElement("div", {
    className: "bell-panel"
  }, React.createElement("div", {
    className: "bell-head"
  }, "待處理事項", todos.length > 0 && React.createElement("span", {
    className: "muted"
  }, "\u3000", todos.length, " 項")), todos.length === 0 && React.createElement("div", {
    className: "search-empty"
  }, "目前沒有待處理事項"), todos.map((t, i) => React.createElement("button", {
    key: i,
    type: "button",
    className: "bell-row",
    onClick: () => {
      setOpen(false);
      navigate("activity-detail", {
        id: t.actId,
        ...t.params
      });
    }
  }, React.createElement("span", {
    className: "bell-dot",
    style: {
      background: t.tone === "danger" ? "var(--danger)" : "var(--warning)"
    }
  }), React.createElement("span", {
    className: "bell-text"
  }, t.text), React.createElement(Icon, {
    name: "chevronRight",
    size: 13
  })))));
}
function Topbar({
  route,
  navigate,
  onMenu
}) {
  var store = useStore();
  var crumbs = [{
    label: PAGE_LABEL[route.page] || ""
  }];
  if (route.page === "activity-detail" || route.page === "activity-edit") {
    var a = store.getActivity(route.params.id);
    crumbs = [{
      label: "活動管理",
      page: "activities"
    }, {
      label: a ? a.name : "活動",
      cur: route.page === "activity-detail"
    }];
    if (route.page === "activity-edit") crumbs.push({
      label: "編輯",
      cur: true
    });
  } else if (route.page === "activity-new") {
    crumbs = [{
      label: "活動管理",
      page: "activities"
    }, {
      label: "新增活動",
      cur: true
    }];
  } else {
    crumbs[0].cur = true;
  }
  return React.createElement("header", {
    className: "topbar"
  }, React.createElement("button", {
    className: "topbar-icon-btn topbar-menu-btn",
    "aria-label": "開啟選單",
    onClick: onMenu
  }, React.createElement(Icon, {
    name: "menu",
    size: 18
  })), React.createElement("div", {
    className: "topbar-crumb"
  }, crumbs.map((c, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement(Icon, {
    name: "chevronRight",
    size: 13,
    style: {
      color: "var(--text-tertiary)"
    }
  }), c.page ? React.createElement("a", {
    onClick: () => navigate(c.page)
  }, c.label) : React.createElement("span", {
    className: c.cur ? "cur" : ""
  }, c.label)))), React.createElement(TopSearch, {
    navigate: navigate
  }), !store.isField && React.createElement(TopBell, {
    navigate: navigate
  }));
}
function App() {
  var store = useStore();
  var [route, setRoute] = useState({
    page: "dashboard",
    params: {},
    ts: 0
  });
  var [navOpen, setNavOpen] = useState(false);
  var navigate = useCallback((page, params = {}) => {
    setRoute({
      page,
      params,
      ts: Date.now()
    });
    var el = document.querySelector(".main");
    if (el) el.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);
  var top = route.page.startsWith("activit") ? "activities" : route.page;
  var blocked = !store.allowedNav.includes(top) || store.isField && (route.page === "activity-new" || route.page === "activity-edit");
  var page = blocked ? store.allowedNav[0] : route.page;
  var p = blocked ? {} : route.params;
  function render() {
    switch (page) {
      case "dashboard":
        return React.createElement(DashboardPage, {
          navigate: navigate
        });
      case "activities":
        return React.createElement(ActivityListPage, {
          navigate: navigate,
          initial: p
        });
      case "activity-new":
        return React.createElement(ActivityFormPage, {
          navigate: navigate
        });
      case "activity-edit":
        return React.createElement(ActivityFormPage, {
          navigate: navigate,
          editId: p.id,
          initialStep: p.step
        });
      case "activity-detail":
        return React.createElement(ActivityDetailPage, {
          navigate: navigate,
          id: p.id,
          params: p
        });
      case "blacklist":
        return React.createElement(BlacklistPage, {
          navigate: navigate
        });
      case "notifications":
        return React.createElement(NotificationsPage, {
          navigate: navigate
        });
      case "settings":
        return React.createElement(SettingsPage, {
          navigate: navigate,
          initialTab: p.tab
        });
      default:
        return React.createElement(DashboardPage, {
          navigate: navigate
        });
    }
  }
  return React.createElement("div", {
    className: "app" + (navOpen ? " nav-open" : "")
  }, React.createElement(Sidebar, {
    route: {
      ...route,
      page
    },
    navigate: navigate,
    onClose: () => setNavOpen(false)
  }), React.createElement("div", {
    className: "nav-backdrop",
    onClick: () => setNavOpen(false)
  }), React.createElement("div", {
    className: "main"
  }, React.createElement(Topbar, {
    route: {
      ...route,
      page,
      params: p
    },
    navigate: navigate,
    onMenu: () => setNavOpen(true)
  }), React.createElement("div", {
    className: "content",
    key: page + ":" + route.ts
  }, render())));
}
Object.assign(window, {
  useStore,
  StoreProvider,
  App,
  computeTodos,
  nowHM,
  nowStamp,
  maskName,
  pad2
});
var {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
function fmtRange(a, b) {
  if (!a) return "—";
  return `${a} – ${b}`;
}
function firstDate(act) {
  var ds = act.sessions.map(s => s.date).filter(Boolean).sort();
  return ds[0] || "";
}
function sessionSummary(act) {
  if (act.type === "不需報名") return "—";
  var s = act.sessions[0];
  if (!s) return "—";
  return act.sessions.length > 1 ? `${firstDate(act)} 等 ${act.sessions.length} 場` : `${s.date} ${s.time}`;
}
function sessionCounts(regs, sid) {
  var mine = regs.filter(r => r.session_id === sid);
  return {
    main: mine.filter(r => r.status === "正取").length,
    wait: mine.filter(r => r.status === "備取").length,
    reply: mine.filter(r => r.status === "待回覆").length
  };
}
function capTotals(act, regs) {
  var mine = regs.filter(r => r.activity_id === act.id);
  return {
    main: mine.filter(r => r.status === "正取").length,
    wait: mine.filter(r => r.status === "備取").length,
    reply: mine.filter(r => r.status === "待回覆").length,
    cap: act.sessions.reduce((s, x) => s + x.cap_main, 0)
  };
}
var OPEN_STATUS = ["報名中", "即將開始", "進行中"];
var KPI_KIND_LABEL = {
  doc: "待審補件",
  overdue: "逾期未繳費",
  reply: "待確認遞補"
};
function DashboardPage({
  navigate
}) {
  var store = useStore();
  var today = store.today;
  var scopeActs = store.activities.filter(a => store.inScope(a.branch));
  var scopeIds = scopeActs.map(a => a.id);
  var scopeRegs = store.registrations.filter(r => scopeIds.includes(r.activity_id));
  var yesterday = window.DB.addDays(today, -1);
  var kpi = {
    active_activities: scopeActs.filter(a => OPEN_STATUS.includes(a.status)).length,
    today_registrations: scopeRegs.filter(r => r.status !== "取消" && (r.registered_at || "").startsWith(today)).length,
    yesterday_registrations: scopeRegs.filter(r => r.status !== "取消" && (r.registered_at || "").startsWith(yesterday)).length,
    pending_documents: scopeRegs.filter(r => r.document.status === "待審").length,
    overdue_payments: scopeRegs.filter(r => r.status === "正取" && r.payment.status === "逾期").length,
    pending_waitlist: scopeRegs.filter(r => r.status === "待回覆").length
  };
  var todos = computeTodos(store);
  var [todoAll, setTodoAll] = useState(false);
  var [openKpi, setOpenKpi] = useState(null);
  var closeKpi = useCallback(() => setOpenKpi(null), []);
  var popRef = useOutsideClose(!!openKpi, closeKpi);
  function kpiClick(kind) {
    var targets = todos.filter(t => t.kind === kind);
    if (targets.length === 0) return null;
    return () => {
      if (targets.length === 1) navigate("activity-detail", {
        id: targets[0].actId,
        ...targets[0].params
      });else setOpenKpi(openKpi === kind ? null : kind);
    };
  }
  function KpiPop({
    kind
  }) {
    if (openKpi !== kind) return null;
    var targets = todos.filter(t => t.kind === kind);
    return React.createElement("div", {
      className: "kpi-pop",
      ref: popRef
    }, React.createElement("div", {
      className: "kpi-pop-head"
    }, KPI_KIND_LABEL[kind], "・依活動"), targets.map(t => React.createElement("button", {
      key: t.actId,
      type: "button",
      className: "kpi-pop-row",
      onClick: () => {
        setOpenKpi(null);
        navigate("activity-detail", {
          id: t.actId,
          ...t.params
        });
      }
    }, React.createElement("span", {
      className: "kpi-pop-name"
    }, store.getActivity(t.actId)?.name), React.createElement("span", {
      className: "kpi-pop-count"
    }, t.count))));
  }
  var nearTerm = scopeActs.filter(a => OPEN_STATUS.includes(a.status) && a.sessions.length).sort((a, b) => firstDate(a).localeCompare(firstDate(b))).slice(0, 6);
  var month = today.slice(0, 7);
  var monthActs = scopeActs.filter(a => a.sessions.some(s => (s.date || "").startsWith(month)) && a.type !== "不需報名");
  return React.createElement("div", null, React.createElement(PageHeader, {
    title: "儀表板",
    subtitle: `${today.replace(/-/g, "/")}（週${"日一二三四五六"[new Date(today + "T00:00:00").getDay()]}）· ${store.roleGroup.scope === "全部館別" ? "全部館別" : store.scopeBranches.join("、")}`
  }), React.createElement("div", {
    className: "kpi-grid"
  }, React.createElement(StatCard, {
    label: "進行中活動",
    value: kpi.active_activities,
    icon: "calendar",
    hint: "開放報名或進行中；點擊查看",
    onClick: kpi.active_activities ? () => navigate("activities", {
      status: "開放中"
    }) : undefined
  }), React.createElement(StatCard, {
    label: "今日報名數",
    value: kpi.today_registrations,
    icon: "users",
    hint: `昨日 ${kpi.yesterday_registrations} 筆`
  }), React.createElement(StatCard, {
    label: "待審補件",
    value: kpi.pending_documents,
    icon: "doc",
    alert: kpi.pending_documents > 0 ? "warning" : null,
    hint: kpi.pending_documents ? "點擊前往審核" : "目前沒有待審",
    onClick: kpiClick("doc")
  }, React.createElement(KpiPop, {
    kind: "doc"
  })), React.createElement(StatCard, {
    label: "逾期未繳費",
    value: kpi.overdue_payments,
    icon: "dollar",
    alert: kpi.overdue_payments > 0 ? "danger" : null,
    hint: kpi.overdue_payments ? "點擊前往處理" : "目前沒有逾期",
    onClick: kpiClick("overdue")
  }, React.createElement(KpiPop, {
    kind: "overdue"
  })), React.createElement(StatCard, {
    label: "待確認遞補",
    value: kpi.pending_waitlist,
    icon: "clock",
    alert: kpi.pending_waitlist > 0 ? "warning" : null,
    hint: kpi.pending_waitlist ? "備取待回覆；點擊查看" : "目前沒有待回覆",
    onClick: kpiClick("reply")
  }, React.createElement(KpiPop, {
    kind: "reply"
  }))), React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 12
    }
  }, React.createElement("h2", {
    className: "section-title",
    style: {
      margin: 0,
      fontSize: 15
    }
  }, "近期活動"), React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    iconRight: "arrowRight",
    onClick: () => navigate("activities")
  }, "查看全部活動")), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: "30%"
    }
  }, "活動名稱"), React.createElement("th", null, "場次日期"), React.createElement("th", null, "館別"), React.createElement("th", {
    style: {
      width: 160
    }
  }, "正取 / 名額"), React.createElement("th", null, "備取"), React.createElement("th", null, "狀態"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, nearTerm.length === 0 && React.createElement("tr", null, React.createElement("td", {
    colSpan: 7
  }, React.createElement("div", {
    className: "muted",
    style: {
      padding: "12px 0",
      textAlign: "center"
    }
  }, "目前沒有開放中的活動"))), nearTerm.map(a => {
    var t = capTotals(a, scopeRegs);
    return React.createElement("tr", {
      key: a.id,
      className: "clickable",
      onClick: () => navigate("activity-detail", {
        id: a.id
      })
    }, React.createElement("td", null, React.createElement("span", {
      className: "cell-link"
    }, a.name)), React.createElement("td", {
      className: "cell-muted num"
    }, sessionSummary(a)), React.createElement("td", {
      className: "cell-muted"
    }, a.branch), React.createElement("td", null, React.createElement("div", {
      className: "cap-cell"
    }, React.createElement("div", {
      className: "cap-top"
    }, React.createElement("span", {
      className: "num"
    }, t.main, " / ", t.cap), React.createElement("span", {
      className: "muted"
    }, t.cap ? Math.round(t.main / t.cap * 100) : 0, "%")), React.createElement(ProgressBar, {
      value: t.main,
      max: t.cap,
      tone: t.main >= t.cap ? "amber" : "primary",
      height: 6
    }))), React.createElement("td", {
      className: "num"
    }, t.wait || "—"), React.createElement("td", null, React.createElement(Badge, null, a.status)), React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "row-actions"
    }, React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: "registrations"
      })
    }, "報名名單"), React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      icon: "scan",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: "checkin"
      })
    }, "現場簽到"))));
  })))), React.createElement("div", {
    className: "row-2",
    style: {
      marginTop: 18
    }
  }, React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15,
    style: {
      color: "var(--warning)"
    }
  }), "待辦提醒"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 10
    }
  }, todos.length === 0 && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13,
      padding: "6px 0"
    }
  }, "目前沒有待處理事項。"), (todoAll ? todos : todos.slice(0, 6)).map((t, i) => React.createElement(TodoRow, {
    key: i,
    tone: t.tone,
    text: t.text,
    action: t.action,
    onClick: () => navigate("activity-detail", {
      id: t.actId,
      ...t.params
    })
  })), todos.length > 6 && React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => setTodoAll(v => !v)
  }, todoAll ? "只看前 6 項" : `查看全部 ${todos.length} 項`))), React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, React.createElement(Icon, {
    name: "users",
    size: 15,
    style: {
      color: "var(--primary)"
    }
  }), "本月報名概況"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 14
    }
  }, monthActs.length === 0 && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "本月沒有場次。"), monthActs.map(a => {
    var t = capTotals(a, scopeRegs);
    return React.createElement(MiniBar, {
      key: a.id,
      label: a.name,
      value: t.main,
      max: t.cap,
      onClick: () => navigate("activity-detail", {
        id: a.id
      })
    });
  })))));
}
function TodoRow({
  tone,
  text,
  action,
  onClick
}) {
  var color = tone === "danger" ? "var(--danger)" : "var(--warning)";
  return React.createElement("div", {
    className: "between",
    style: {
      padding: "10px 12px",
      border: "1px solid var(--border)",
      borderRadius: 7
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 13
    }
  }, React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 99,
      background: color,
      flexShrink: 0
    }
  }), text), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: onClick
  }, action));
}
function MiniBar({
  label,
  value,
  max,
  onClick
}) {
  return React.createElement("div", {
    className: onClick ? "minibar clickable" : "minibar",
    onClick: onClick
  }, React.createElement("div", {
    className: "between",
    style: {
      fontSize: 12.5,
      marginBottom: 5
    }
  }, React.createElement("span", null, label), React.createElement("span", {
    className: "muted num"
  }, value, "/", max)), React.createElement(ProgressBar, {
    value: value,
    max: max,
    height: 7
  }));
}
function ActivityListPage({
  navigate,
  initial = {}
}) {
  var store = useStore();
  var toast = useToast();
  var locked = store.scopeBranches.length === 1;
  var [f, setF] = useState({
    status: initial.status || "",
    type: "",
    branch: locked ? store.scopeBranches[0] : "",
    q: initial.q || ""
  });
  var [confirm, setConfirm] = useState(null);
  var [del, setDel] = useState(null);
  var [preview, setPreview] = useState(null);
  var [sort, setSort] = useState({
    key: "reg_start",
    dir: "desc"
  });
  var [page, setPage] = useState(1);
  var [perPage, setPerPage] = useState(20);
  var [checked, setChecked] = useState([]);
  var [batch, setBatch] = useState(null);
  var visible = store.activities.filter(a => store.inScope(a.branch));
  var list = visible.filter(a => {
    if (f.status === "開放中" ? !OPEN_STATUS.includes(a.status) : f.status && a.status !== f.status) return false;
    if (f.type && a.type !== f.type) return false;
    if (f.branch && a.branch !== f.branch) return false;
    if (f.q && !a.name.includes(f.q)) return false;
    return true;
  });
  var sorted = [...list].sort((a, b) => {
    var k = sort.key;
    var pick = x => (k === "name" ? x.name : k === "branch" ? x.branch : k === "first_date" ? firstDate(x) : x[k]) || "";
    var r = String(pick(a)).localeCompare(String(pick(b)), "zh-Hant");
    return sort.dir === "asc" ? r : -r;
  });
  var totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  var curPage = Math.min(page, totalPages);
  var pageList = sorted.slice((curPage - 1) * perPage, curPage * perPage);
  var allChecked = pageList.length > 0 && pageList.every(a => checked.includes(a.id));
  var regCount = a => store.regsFor(a.id).length;
  function toggleSort(key) {
    setSort(s => s.key === key ? {
      key,
      dir: s.dir === "asc" ? "desc" : "asc"
    } : {
      key,
      dir: "asc"
    });
  }
  function toggleCheck(id) {
    setChecked(c => c.includes(id) ? c.filter(x => x !== id) : [...c, id]);
  }
  function toggleCheckAll() {
    setChecked(c => allChecked ? c.filter(id => !pageList.some(a => a.id === id)) : [...new Set([...c, ...pageList.map(a => a.id)])]);
  }
  function doBatch() {
    var publish = batch === "publish";
    store.setActivities(prev => prev.map(a => checked.includes(a.id) ? {
      ...a,
      status: publish ? "報名中" : "已下架",
      published: publish
    } : a));
    toast(`已批次${publish ? "發佈" : "下架"} ${checked.length} 個活動`, "success");
    setChecked([]);
    setBatch(null);
  }
  function doConfirm() {
    var {
      act,
      mode
    } = confirm;
    store.setActivities(prev => prev.map(a => {
      if (a.id !== act.id) return a;
      if (mode === "publish") return {
        ...a,
        status: "報名中",
        published: true
      };
      if (mode === "unpublish") return {
        ...a,
        status: "已下架",
        published: false
      };
      return a;
    }));
    toast(mode === "publish" ? "活動已發佈" : "活動已下架", "success");
    setConfirm(null);
  }
  function duplicate(act) {
    var copy = {
      ...JSON.parse(JSON.stringify(act)),
      id: "act-" + Math.random().toString(36).slice(2, 7),
      name: act.name + "（複製）",
      status: "草稿",
      published: false
    };
    store.setActivities(prev => [copy, ...prev]);
    toast("已複製為草稿", "success");
  }
  function doDelete() {
    store.setActivities(prev => prev.filter(a => a.id !== del.id));
    toast(`已刪除「${del.name}」`, "success");
    setDel(null);
  }
  var subtitle = store.roleGroup.scope === "全部館別" ? `共 ${visible.length} 個活動（全部館別）` : `共 ${visible.length} 個活動（${store.scopeBranches.join("、")}）`;
  var chips = [];
  if (f.status === "開放中") chips.push({
    k: "status",
    label: "只看開放中的活動"
  });
  if (f.q) chips.push({
    k: "q",
    label: `關鍵字「${f.q}」`
  });
  return React.createElement("div", null, React.createElement(PageHeader, {
    title: "活動管理",
    subtitle: subtitle,
    actions: !store.isField && React.createElement(Button, {
      variant: "primary",
      icon: "plus",
      onClick: () => navigate("activity-new")
    }, "新增活動")
  }), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("div", {
    className: "table-toolbar"
  }, React.createElement("div", {
    className: "filter-item"
  }, React.createElement("span", {
    className: "field-label"
  }, "狀態"), React.createElement(Select, {
    value: f.status,
    onChange: v => {
      setF({
        ...f,
        status: v
      });
      setPage(1);
    },
    placeholder: "全部狀態",
    options: [{
      value: "開放中",
      label: "開放中（報名中、即將開始、進行中）"
    }, "草稿", "報名中", "即將開始", "進行中", "已結束", "已下架"]
  })), React.createElement("div", {
    className: "filter-item"
  }, React.createElement("span", {
    className: "field-label"
  }, "類型"), React.createElement(Select, {
    value: f.type,
    onChange: v => {
      setF({
        ...f,
        type: v
      });
      setPage(1);
    },
    placeholder: "全部類型",
    options: ["單場次", "多場次", "不需報名"]
  })), React.createElement("div", {
    className: "filter-item"
  }, React.createElement("span", {
    className: "field-label"
  }, "館別", locked && React.createElement("span", {
    className: "muted",
    style: {
      fontWeight: 400
    }
  }, "（固定為本館）")), React.createElement(Select, {
    value: f.branch,
    onChange: v => {
      setF({
        ...f,
        branch: v
      });
      setPage(1);
    },
    placeholder: locked ? undefined : "全部館別",
    options: store.scopeBranches,
    disabled: locked
  })), React.createElement("div", {
    className: "filter-item filter-grow"
  }, React.createElement("span", {
    className: "field-label"
  }, "關鍵字"), React.createElement(Input, {
    value: f.q,
    onChange: v => {
      setF({
        ...f,
        q: v
      });
      setPage(1);
    },
    placeholder: "搜尋活動名稱…"
  }))), chips.length > 0 && React.createElement("div", {
    className: "chip-bar"
  }, chips.map(c => React.createElement("button", {
    key: c.k,
    type: "button",
    className: "chip",
    onClick: () => setF({
      ...f,
      [c.k]: ""
    })
  }, c.label, React.createElement(Icon, {
    name: "close",
    size: 12
  })))), checked.length > 0 && React.createElement("div", {
    className: "batch-bar"
  }, React.createElement("span", null, "已選取 ", React.createElement("b", null, checked.length), " 個活動"), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => setBatch("publish")
  }, "批次發佈"), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => setBatch("unpublish")
  }, "批次下架"), React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => setChecked([])
  }, "取消選取"))), React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, !store.isField && React.createElement("th", {
    style: {
      width: 38
    }
  }, React.createElement(Checkbox, {
    checked: allChecked,
    onChange: toggleCheckAll
  })), React.createElement("th", {
    style: {
      width: "26%"
    }
  }, React.createElement(SortTh, {
    label: "活動名稱",
    k: "name",
    sort: sort,
    onSort: toggleSort
  })), React.createElement("th", null, React.createElement(SortTh, {
    label: "館別",
    k: "branch",
    sort: sort,
    onSort: toggleSort
  })), React.createElement("th", null, React.createElement(SortTh, {
    label: "活動日期",
    k: "first_date",
    sort: sort,
    onSort: toggleSort
  })), React.createElement("th", null, React.createElement(SortTh, {
    label: "報名期間",
    k: "reg_start",
    sort: sort,
    onSort: toggleSort
  })), React.createElement("th", null, "正取 / 名額"), React.createElement("th", null, React.createElement(SortTh, {
    label: "狀態",
    k: "status",
    sort: sort,
    onSort: toggleSort
  })), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, pageList.map(a => {
    var noReg = a.type === "不需報名";
    var t = capTotals(a, store.registrations);
    var n = regCount(a);
    return React.createElement("tr", {
      key: a.id,
      className: "clickable",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: store.isField ? "checkin" : undefined
      })
    }, !store.isField && React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement(Checkbox, {
      checked: checked.includes(a.id),
      onChange: () => toggleCheck(a.id)
    })), React.createElement("td", null, React.createElement("span", {
      className: "cell-link"
    }, a.name), React.createElement("div", {
      className: "cell-muted",
      style: {
        fontSize: 11.5,
        marginTop: 2
      }
    }, a.type, " · ", a.category)), React.createElement("td", {
      className: "cell-muted"
    }, a.branch), React.createElement("td", {
      className: "cell-muted num"
    }, sessionSummary(a)), React.createElement("td", {
      className: "cell-muted num"
    }, noReg ? "—" : fmtRange(a.reg_start, a.reg_end)), React.createElement("td", {
      className: "num"
    }, noReg ? React.createElement("span", {
      className: "muted"
    }, "—") : React.createElement(React.Fragment, null, React.createElement("span", {
      style: {
        fontWeight: 600,
        color: t.main >= t.cap && t.cap ? "var(--warning)" : "inherit"
      }
    }, t.main), " / ", t.cap, t.wait ? React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 11.5
      }
    }, "\u3000備 ", t.wait) : null)), React.createElement("td", null, React.createElement(Badge, null, a.status)), React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "row-actions"
    }, store.isField ? !noReg && React.createElement(Button, {
      variant: "soft",
      size: "sm",
      icon: "scan",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: "checkin"
      })
    }, "現場簽到") : React.createElement(React.Fragment, null, !a.published && React.createElement(Button, {
      variant: "soft",
      size: "sm",
      icon: "check",
      onClick: () => setConfirm({
        act: a,
        mode: "publish"
      })
    }, "發佈"), !noReg && n > 0 && React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: "registrations"
      })
    }, "名單"), !noReg && a.published && React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => navigate("activity-detail", {
        id: a.id,
        tab: "checkin"
      })
    }, "簽到"), React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      icon: "edit",
      onClick: () => navigate("activity-edit", {
        id: a.id
      })
    }, "編輯"), React.createElement(Menu, {
      items: [{
        label: "前台預覽",
        icon: "eye",
        onClick: () => setPreview(a)
      }, {
        label: "複製為草稿",
        icon: "copy",
        onClick: () => duplicate(a)
      }, a.published ? {
        label: "下架",
        icon: "close",
        onClick: () => setConfirm({
          act: a,
          mode: "unpublish"
        })
      } : null, {
        label: "刪除活動",
        icon: "trash",
        danger: true,
        disabled: n > 0,
        hint: n > 0 ? `已有 ${n} 筆報名，只能下架` : undefined,
        onClick: () => setDel(a)
      }]
    })))));
  }))), list.length === 0 && React.createElement(Empty, {
    title: "找不到符合條件的活動",
    sub: "試著調整篩選條件或關鍵字"
  }), React.createElement("div", {
    className: "table-footer"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      alignItems: "center"
    }
  }, React.createElement("span", null, "共 ", list.length, " 筆"), React.createElement("span", {
    className: "pager-perpage"
  }, "每頁", React.createElement("select", {
    className: "input select pager-select",
    value: perPage,
    onChange: e => {
      setPerPage(Number(e.target.value));
      setPage(1);
    }
  }, [10, 20, 50].map(n => React.createElement("option", {
    key: n,
    value: n
  }, n))), "筆")), React.createElement("div", {
    className: "pager"
  }, React.createElement("button", {
    className: "pager-btn",
    disabled: curPage <= 1,
    onClick: () => setPage(curPage - 1),
    "aria-label": "上一頁"
  }, React.createElement(Icon, {
    name: "chevronLeft",
    size: 14
  })), Array.from({
    length: totalPages
  }, (_, i) => i + 1).map(n => React.createElement("button", {
    key: n,
    className: "pager-btn" + (n === curPage ? " active" : ""),
    onClick: () => setPage(n)
  }, n)), React.createElement("button", {
    className: "pager-btn",
    disabled: curPage >= totalPages,
    onClick: () => setPage(curPage + 1),
    "aria-label": "下一頁"
  }, React.createElement(Icon, {
    name: "chevronRight",
    size: 14
  }))))), React.createElement(Modal, {
    open: !!confirm,
    onClose: () => setConfirm(null),
    title: confirm?.mode === "publish" ? "發佈活動" : "下架活動",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(null)
    }, "取消"), React.createElement(Button, {
      variant: confirm?.mode === "publish" ? "primary" : "danger",
      onClick: doConfirm
    }, confirm?.mode === "publish" ? "確認發佈" : "確認下架"))
  }, confirm && React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "確定要", confirm.mode === "publish" ? "發佈" : "下架", "「", React.createElement("b", null, confirm.act.name), "」嗎？", confirm.mode === "publish" ? "發佈後讀者即可於前台瀏覽並報名。" : "下架後前台將不再顯示，已報名者不受影響。")), React.createElement(Modal, {
    open: !!del,
    onClose: () => setDel(null),
    title: "刪除活動",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDel(null)
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      icon: "trash",
      onClick: doDelete
    }, "確認刪除"))
  }, del && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "確定要刪除「", React.createElement("b", null, del.name), "」嗎？刪除後無法復原。"), React.createElement("div", {
    className: "info-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "只有還沒有任何報名紀錄的活動才能刪除；已有報名的活動請改用「下架」，讓報名資料與操作歷程保留下來。")))), React.createElement(Modal, {
    open: !!batch,
    onClose: () => setBatch(null),
    title: batch === "publish" ? "批次發佈活動" : "批次下架活動",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setBatch(null)
    }, "取消"), React.createElement(Button, {
      variant: batch === "publish" ? "primary" : "danger",
      onClick: doBatch
    }, "確認", batch === "publish" ? "發佈" : "下架", " ", checked.length, " 個"))
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "將對已選取的 ", React.createElement("b", null, checked.length), " 個活動執行", batch === "publish" ? "發佈" : "下架", "。", batch === "publish" ? "發佈後讀者即可於前台瀏覽並報名。" : "下架後前台將不再顯示，已報名者不受影響。")), preview && React.createElement(FrontPreviewModal, {
    act: preview,
    onClose: () => setPreview(null)
  }));
}
function SortTh({
  label,
  k,
  sort,
  onSort
}) {
  var on = sort.key === k;
  return React.createElement("button", {
    type: "button",
    className: "sort-th" + (on ? " active" : ""),
    onClick: () => onSort(k)
  }, label, React.createElement(Icon, {
    name: "chevronDown",
    size: 12,
    style: {
      transform: on && sort.dir === "asc" ? "rotate(180deg)" : "none",
      opacity: on ? 1 : 0.3
    }
  }));
}
Object.assign(window, {
  DashboardPage,
  ActivityListPage,
  fmtRange,
  capTotals,
  sessionCounts,
  sessionSummary,
  firstDate,
  OPEN_STATUS
});
var {
  useState,
  useEffect,
  useRef
} = React;
function emptyActivity(branch) {
  return {
    id: null,
    name: "",
    type: "單場次",
    category: "",
    branch: branch || "",
    status: "草稿",
    fee: 0,
    reg_start: "",
    reg_end: "",
    cancel_deadline_hours: 24,
    published: false,
    target: "",
    age_min: "",
    age_max: "",
    desc: "",
    notice: "",
    feeKind: "免費",
    pay_methods: [],
    cover_image: null,
    attachments: [],
    doc_required: false,
    doc_note: "",
    doc_deadline_days: 14,
    sessions: [{
      id: "s" + Date.now(),
      label: "單一場次",
      date: "",
      time: "",
      end_time: "",
      place: "",
      cap_main: 20,
      cap_wait: 5,
      cap_per_reg: null,
      cap_groups: null
    }],
    custom_fields: []
  };
}
function ImagePicker({
  value,
  onPick,
  onClear
}) {
  var toast = useToast();
  var SAMPLES = ["活動主視覺_A.jpg", "活動主視覺_B.jpg", "親子採果_主視覺.jpg"];
  var [i, setI] = useState(0);
  if (value) {
    return React.createElement("div", {
      className: "file-chip"
    }, React.createElement("span", {
      className: "file-thumb"
    }, React.createElement(Icon, {
      name: "eye",
      size: 14
    })), React.createElement("span", {
      className: "file-name"
    }, value), React.createElement("button", {
      type: "button",
      className: "icon-btn",
      onClick: onClear,
      "aria-label": "移除"
    }, React.createElement(Icon, {
      name: "close",
      size: 14
    })));
  }
  return React.createElement("button", {
    type: "button",
    className: "dropzone",
    onClick: () => {
      var n = SAMPLES[i % SAMPLES.length];
      setI(i + 1);
      onPick(n);
      toast("已選擇圖片：" + n, "success");
    }
  }, React.createElement(Icon, {
    name: "upload",
    size: 20
  }), React.createElement("span", null, "點擊選擇圖片"), React.createElement("span", {
    className: "dropzone-hint"
  }, "建議 1200 × 630，JPG／PNG，2MB 以內"));
}
function AttachmentPicker({
  items,
  onChange
}) {
  var toast = useToast();
  var SAMPLES = [{
    name: "活動同意書.pdf",
    size: "182 KB"
  }, {
    name: "課程大綱.pdf",
    size: "96 KB"
  }, {
    name: "交通位置圖.jpg",
    size: "340 KB"
  }];
  return React.createElement("div", null, React.createElement("div", {
    className: "stack",
    style: {
      gap: 6,
      marginBottom: items.length ? 8 : 0
    }
  }, items.map((f, i) => React.createElement("div", {
    key: i,
    className: "file-chip"
  }, React.createElement("span", {
    className: "file-thumb"
  }, React.createElement(Icon, {
    name: "doc",
    size: 14
  })), React.createElement("span", {
    className: "file-name"
  }, f.name), React.createElement("span", {
    className: "file-size"
  }, f.size), React.createElement("button", {
    type: "button",
    className: "icon-btn",
    onClick: () => onChange(items.filter((_, idx) => idx !== i)),
    "aria-label": "移除"
  }, React.createElement(Icon, {
    name: "close",
    size: 14
  }))))), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "upload",
    onClick: () => {
      var f = SAMPLES[items.length % SAMPLES.length];
      onChange([...items, f]);
      toast("已加入附件：" + f.name, "success");
    }
  }, "加入附件"), React.createElement("div", {
    className: "field-hint",
    style: {
      marginTop: 6
    }
  }, "PDF、JPG、PNG，單檔 10MB 以內；前台顯示檔名供讀者下載"));
}
function RichText({
  value,
  onChange,
  rows = 4,
  placeholder
}) {
  var toast = useToast();
  var TOOLS = [{
    k: "b",
    label: "B",
    title: "粗體",
    style: {
      fontWeight: 800
    }
  }, {
    k: "i",
    label: "I",
    title: "斜體",
    style: {
      fontStyle: "italic"
    }
  }, {
    k: "u",
    label: "U",
    title: "底線",
    style: {
      textDecoration: "underline"
    }
  }, {
    k: "h",
    label: "H2",
    title: "標題"
  }, {
    k: "ul",
    label: "•",
    title: "項目符號"
  }, {
    k: "ol",
    label: "1.",
    title: "編號清單"
  }, {
    k: "link",
    label: "🔗",
    title: "超連結"
  }, {
    k: "img",
    label: "🖼",
    title: "插入圖片"
  }, {
    k: "table",
    label: "▦",
    title: "插入表格"
  }];
  return React.createElement("div", {
    className: "editor"
  }, React.createElement("div", {
    className: "editor-toolbar"
  }, TOOLS.map(t => React.createElement("button", {
    key: t.k,
    type: "button",
    className: "editor-btn",
    title: t.title,
    style: t.style,
    onClick: () => toast(`編輯器：${t.title}（示意）`, "default")
  }, t.label))), React.createElement(Textarea, {
    value: value,
    onChange: onChange,
    rows: rows,
    placeholder: placeholder
  }));
}
var STEPS = ["基本設定", "報名設定", "場次設定", "自訂欄位"];
function ActivityFormPage({
  navigate,
  editId,
  initialStep
}) {
  var store = useStore();
  var toast = useToast();
  var isEdit = !!editId;
  var initialForm = React.useMemo(() => {
    if (editId) {
      var a = store.getActivity(editId);
      return {
        ...JSON.parse(JSON.stringify(a)),
        feeKind: a.fee > 0 ? "付費" : "免費",
        age_min: a.age_min ?? "",
        age_max: a.age_max ?? ""
      };
    }
    return emptyActivity(store.scopeBranches.length === 1 ? store.scopeBranches[0] : "");
  }, []);
  var [form, setForm] = useState(initialForm);
  var [step, setStep] = useState(() => Math.max(0, Math.min(3, Number(initialStep) || 0)));
  var [errors, setErrors] = useState({});
  var [leaveOpen, setLeaveOpen] = useState(false);
  var noReg = form.type === "不需報名";
  var steps = noReg ? ["基本設定", "自訂欄位"] : STEPS;
  var set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  var dirty = JSON.stringify(form) !== JSON.stringify(initialForm);
  var basicOk = !!(form.name.trim() && form.category && form.branch);
  var [tried, setTried] = useState(false);
  var dateBad = !!(form.reg_start && form.reg_end && form.reg_end < form.reg_start);
  var regErr = {};
  if (dateBad) regErr.reg_end = "截止日不能早於開始日";
  if (tried && form.feeKind === "付費") {
    if (!(Number(form.fee) > 0)) regErr.fee = "請輸入費用金額";
    if (form.pay_methods.length === 0) regErr.pay = "請至少勾選一種繳費方式";
  }
  var sesErr = tried ? form.sessions.map(s => ({
    date: s.date ? "" : "發佈前請填日期",
    time: s.time ? "" : "發佈前請填開始時間"
  })) : [];
  function validateBasic() {
    var e = {};
    if (!form.name.trim()) e.name = "請輸入活動名稱";
    if (!form.category) e.category = "請選擇活動類別";
    if (!form.branch) e.branch = "請選擇館別";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function gotoStep(i) {
    if (i > 0 && step === 0 && !validateBasic()) {
      toast("請先完成基本設定的必填欄位", "danger");
      return;
    }
    setStep(i);
  }
  function next() {
    gotoStep(Math.min(steps.length - 1, step + 1));
  }
  function leave() {
    if (dirty) setLeaveOpen(true);else navigate(isEdit ? "activity-detail" : "activities", isEdit ? {
      id: editId
    } : {});
  }
  function save(publish) {
    if (!validateBasic()) {
      setStep(0);
      toast("請完成必填欄位", "danger");
      return;
    }
    if (!noReg) {
      if (dateBad) {
        setStep(1);
        toast("報名截止日不能早於開始日", "danger");
        return;
      }
      if (publish) {
        setTried(true);
        if (form.feeKind === "付費" && (!(Number(form.fee) > 0) || form.pay_methods.length === 0)) {
          setStep(1);
          toast("付費活動請填金額並至少勾選一種繳費方式", "danger");
          return;
        }
        if (form.sessions.some(s => !s.date || !s.time)) {
          setStep(2);
          toast("發佈前請填好每個場次的日期與開始時間", "danger");
          return;
        }
      }
    }
    var payload = {
      ...form,
      fee: form.feeKind === "付費" ? Number(form.fee) || 0 : 0,
      pay_methods: form.feeKind === "付費" ? form.pay_methods : [],
      age_min: form.age_min === "" ? null : Number(form.age_min),
      age_max: form.age_max === "" ? null : Number(form.age_max),
      doc_deadline_days: Number(form.doc_deadline_days) || 14,
      status: publish ? "報名中" : "草稿",
      published: publish
    };
    if (isEdit) {
      var cur = store.getActivity(editId);
      var keep = !publish && cur.published ? {
        status: cur.status,
        published: true
      } : {};
      store.setActivities(prev => prev.map(a => a.id === editId ? {
        ...a,
        ...payload,
        ...keep
      } : a));
      toast(publish ? "已更新並發佈" : "已儲存變更", "success");
      navigate("activity-detail", {
        id: editId
      });
    } else {
      var id = "act-" + Math.random().toString(36).slice(2, 7);
      store.setActivities(prev => [{
        ...payload,
        id
      }, ...prev]);
      toast(publish ? "活動已建立並發佈" : "已儲存為草稿", "success");
      navigate("activity-detail", {
        id
      });
    }
  }
  function renderStep() {
    var logical = noReg ? step === 0 ? "basic" : "fields" : ["basic", "reg", "sessions", "fields"][step];
    if (logical === "basic") return React.createElement(StepBasic, {
      form: form,
      set: set,
      errors: errors
    });
    if (logical === "reg") return React.createElement(StepReg, {
      form: form,
      set: set,
      setForm: setForm,
      err: regErr
    });
    if (logical === "sessions") return React.createElement(StepSessions, {
      form: form,
      setForm: setForm,
      err: sesErr
    });
    if (logical === "fields") return React.createElement(StepFields, {
      form: form,
      setForm: setForm
    });
  }
  var curPublished = isEdit && store.getActivity(editId)?.published;
  return React.createElement("div", null, React.createElement(PageHeader, {
    breadcrumb: React.createElement("a", {
      onClick: leave
    }, "← ", isEdit ? "返回活動詳情" : "返回活動管理"),
    title: isEdit ? "編輯活動" : "新增活動",
    subtitle: form.name || "尚未命名的活動"
  }), React.createElement(Card, {
    style: {
      padding: 24
    }
  }, React.createElement(StepIndicator, {
    steps: steps,
    current: step,
    onStepClick: gotoStep,
    free: isEdit || basicOk
  }), React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, renderStep())), React.createElement("div", {
    className: "between",
    style: {
      marginTop: 16
    }
  }, React.createElement("div", null, step > 0 && React.createElement(Button, {
    variant: "ghost",
    icon: "chevronLeft",
    onClick: () => setStep(s => s - 1)
  }, "上一步")), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "ghost",
    onClick: () => save(false)
  }, curPublished ? "儲存變更" : "儲存草稿"), step < steps.length - 1 ? React.createElement(Button, {
    variant: "primary",
    iconRight: "arrowRight",
    onClick: next
  }, "下一步") : React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: () => save(true)
  }, curPublished ? "儲存並發佈" : isEdit ? "更新並發佈" : "發佈活動"))), React.createElement(Modal, {
    open: leaveOpen,
    onClose: () => setLeaveOpen(false),
    title: "尚未儲存的變更",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setLeaveOpen(false)
    }, "留在這頁"), React.createElement(Button, {
      variant: "danger",
      onClick: () => navigate(isEdit ? "activity-detail" : "activities", isEdit ? {
        id: editId
      } : {})
    }, "放棄變更並離開"))
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "這份表單有還沒儲存的內容，離開後會遺失。要先按「", curPublished ? "儲存變更" : "儲存草稿", "」再離開嗎？")));
}
function StepBasic({
  form,
  set,
  errors
}) {
  var store = useStore();
  var locked = store.scopeBranches.length === 1;
  return React.createElement("div", null, React.createElement("h3", {
    className: "section-title"
  }, "基本設定"), React.createElement(Field, {
    label: "活動名稱",
    required: true,
    error: errors.name
  }, React.createElement(Input, {
    value: form.name,
    onChange: v => set("name", v.slice(0, 128)),
    placeholder: "例如：親子採果體驗",
    invalid: !!errors.name
  })), React.createElement("div", {
    className: "row-3"
  }, React.createElement(Field, {
    label: "活動類型",
    required: true
  }, React.createElement(Select, {
    value: form.type,
    onChange: v => set("type", v),
    options: ["單場次", "多場次", "不需報名"]
  })), React.createElement(Field, {
    label: "活動類別",
    required: true,
    error: errors.category
  }, React.createElement(Select, {
    value: form.category,
    onChange: v => set("category", v),
    placeholder: "請選擇",
    options: window.DB.categories
  })), React.createElement(Field, {
    label: "館別",
    required: true,
    error: errors.branch,
    hint: locked ? "此帳號只管理本館，館別固定" : undefined
  }, React.createElement(Select, {
    value: form.branch,
    onChange: v => set("branch", v),
    placeholder: locked ? undefined : "請選擇",
    options: store.scopeBranches,
    disabled: locked
  }))), React.createElement("div", {
    className: "row-3"
  }, React.createElement(Field, {
    label: "目標對象"
  }, React.createElement(Input, {
    value: form.target,
    onChange: v => set("target", v),
    placeholder: "例如：親子家庭"
  })), React.createElement(Field, {
    label: "年齡下限",
    hint: "留空表示不限"
  }, React.createElement(Input, {
    type: "number",
    value: form.age_min,
    onChange: v => set("age_min", v),
    placeholder: "歲"
  })), React.createElement(Field, {
    label: "年齡上限",
    hint: "留空表示不限"
  }, React.createElement(Input, {
    type: "number",
    value: form.age_max,
    onChange: v => set("age_max", v),
    placeholder: "歲"
  }))), React.createElement(Field, {
    label: "活動描述",
    hint: "支援文字樣式、清單、圖片與表格"
  }, React.createElement(RichText, {
    value: form.desc,
    onChange: v => set("desc", v),
    rows: 4,
    placeholder: "介紹活動內容、流程與特色…"
  })), React.createElement(Field, {
    label: "注意事項",
    hint: "前台將以可收合區塊呈現"
  }, React.createElement(RichText, {
    value: form.notice,
    onChange: v => set("notice", v),
    rows: 3,
    placeholder: "參加須知、攜帶物品、退費規定…"
  })), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "活動主視覺"
  }, React.createElement(ImagePicker, {
    value: form.cover_image,
    onPick: n => set("cover_image", n),
    onClear: () => set("cover_image", null)
  })), React.createElement(Field, {
    label: "附件"
  }, React.createElement(AttachmentPicker, {
    items: form.attachments || [],
    onChange: v => set("attachments", v)
  }))));
}
function StepReg({
  form,
  set,
  setForm,
  err = {}
}) {
  var store = useStore();
  var canOnline = store.canOnlinePayment;
  var ONLINE_PM = ["信用卡", "Apple Pay", "Google Pay", "TWQR", "LINE Pay"];
  function togglePM(m) {
    set("pay_methods", form.pay_methods.includes(m) ? form.pay_methods.filter(x => x !== m) : [...form.pay_methods, m]);
  }
  function setFeeKind(kind) {
    setForm(f => ({
      ...f,
      feeKind: kind,
      pay_methods: kind === "付費" && !canOnline && !f.pay_methods.includes("現場繳費") ? ["現場繳費"] : f.pay_methods
    }));
  }
  return React.createElement("div", null, React.createElement("h3", {
    className: "section-title"
  }, "報名設定"), !canOnline && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "您的身分（", store.currentUser.role, "）不開放線上收費活動，費用僅能設為免費，或以現場繳費方式收取。線上金流由總館統一收款。")), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "報名開始日"
  }, React.createElement(Input, {
    type: "date",
    value: form.reg_start,
    onChange: v => set("reg_start", v)
  })), React.createElement(Field, {
    label: "報名截止日",
    error: err.reg_end
  }, React.createElement(Input, {
    type: "date",
    value: form.reg_end,
    onChange: v => set("reg_end", v),
    invalid: !!err.reg_end
  }))), React.createElement(Field, {
    label: "取消截止（活動前小時數）",
    hint: "讀者最晚可於活動前幾小時取消報名"
  }, React.createElement(Input, {
    type: "number",
    value: form.cancel_deadline_hours,
    onChange: v => set("cancel_deadline_hours", v),
    style: {
      maxWidth: 160
    }
  })), React.createElement("div", {
    className: "divider"
  }), React.createElement(Field, {
    label: "費用"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      maxWidth: 320
    }
  }, React.createElement(Radio, {
    label: "免費",
    checked: form.feeKind === "免費",
    onChange: () => setFeeKind("免費")
  }), React.createElement(Radio, {
    label: "付費",
    checked: form.feeKind === "付費",
    onChange: () => setFeeKind("付費")
  }))), form.feeKind === "付費" && React.createElement(Field, {
    label: "費用金額（NT$）",
    error: err.fee
  }, React.createElement(Input, {
    type: "number",
    value: form.fee,
    onChange: v => set("fee", v),
    style: {
      maxWidth: 200
    },
    placeholder: "300",
    invalid: !!err.fee
  })), form.feeKind === "付費" && React.createElement(Field, {
    label: "繳費方式",
    error: err.pay
  }, React.createElement("div", {
    className: "pay-group"
  }, React.createElement("div", {
    className: "pay-group-title"
  }, "線上繳費", !canOnline && React.createElement("span", {
    className: "pay-group-lock"
  }, React.createElement(Icon, {
    name: "alert",
    size: 12
  }), "本館別未開放")), React.createElement("div", {
    className: "row",
    style: {
      gap: 16,
      flexWrap: "wrap",
      paddingTop: 4
    }
  }, ONLINE_PM.map(m => React.createElement(Checkbox, {
    key: m,
    label: m,
    disabled: !canOnline,
    checked: canOnline && form.pay_methods.includes(m),
    onChange: () => togglePM(m)
  })))), React.createElement("div", {
    className: "pay-group"
  }, React.createElement("div", {
    className: "pay-group-title"
  }, "現場繳費"), React.createElement("div", {
    className: "row",
    style: {
      gap: 16,
      flexWrap: "wrap",
      paddingTop: 4
    }
  }, React.createElement(Checkbox, {
    label: "現場向承辦館別繳費",
    checked: form.pay_methods.includes("現場繳費"),
    onChange: () => togglePM("現場繳費")
  })))), React.createElement("div", {
    className: "divider"
  }), React.createElement(Field, {
    label: "證明文件（補件）"
  }, React.createElement("div", {
    className: "between",
    style: {
      padding: "8px 0"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "報名後需要上傳證明文件"), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5
    }
  }, "例如學生證、身心障礙證明、家長同意書；開啟後報名成功通知信會附上說明，館員在活動的「補件」頁籤審核")), React.createElement(Toggle, {
    checked: !!form.doc_required,
    onChange: v => set("doc_required", v)
  }))), form.doc_required && React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "要上傳什麼文件",
    hint: "這段文字會出現在報名成功通知信與前台的上傳入口",
    required: true
  }, React.createElement(Textarea, {
    value: form.doc_note,
    onChange: v => set("doc_note", v),
    rows: 3,
    placeholder: "例如：請上傳學生證正反面照片"
  })), React.createElement(Field, {
    label: "繳交期限（報名後幾天內）",
    hint: "彈性期限，逾期不會自動取消報名；系統會在期限前依通知設定寄提醒"
  }, React.createElement(Input, {
    type: "number",
    value: form.doc_deadline_days,
    onChange: v => set("doc_deadline_days", v),
    style: {
      maxWidth: 160
    }
  }))));
}
function StepSessions({
  form,
  setForm,
  err = []
}) {
  function update(i, k, v) {
    setForm(f => ({
      ...f,
      sessions: f.sessions.map((s, idx) => idx === i ? {
        ...s,
        [k]: v
      } : s)
    }));
  }
  function add() {
    setForm(f => ({
      ...f,
      sessions: [...f.sessions, {
        id: "s" + Date.now(),
        label: `場次 ${f.sessions.length + 1}`,
        date: "",
        time: "",
        end_time: "",
        place: "",
        cap_main: 20,
        cap_wait: 5,
        cap_per_reg: null,
        cap_groups: null
      }]
    }));
  }
  function remove(i) {
    setForm(f => ({
      ...f,
      sessions: f.sessions.filter((_, idx) => idx !== i)
    }));
  }
  return React.createElement("div", null, React.createElement("h3", {
    className: "section-title"
  }, "場次設定"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 12
    }
  }, form.sessions.map((s, i) => React.createElement("div", {
    key: s.id,
    style: {
      border: "1px solid var(--border)",
      borderRadius: 8,
      padding: 14,
      background: "#FaFafb"
    }
  }, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 10
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-secondary)"
    }
  }, "場次 ", i + 1), form.sessions.length > 1 && React.createElement("button", {
    className: "icon-btn",
    onClick: () => remove(i)
  }, React.createElement(Icon, {
    name: "trash",
    size: 15
  }))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "場次標籤",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    value: s.label,
    onChange: v => update(i, "label", v),
    placeholder: "例如：週六上午班"
  })), React.createElement(Field, {
    label: "地點",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    value: s.place,
    onChange: v => update(i, "place", v),
    placeholder: "例如：視聽室"
  }))), React.createElement("div", {
    className: "row-3"
  }, React.createElement(Field, {
    label: "日期",
    style: {
      marginBottom: 10
    },
    error: err[i] && err[i].date
  }, React.createElement(Input, {
    type: "date",
    value: s.date,
    onChange: v => update(i, "date", v),
    invalid: !!(err[i] && err[i].date)
  })), React.createElement(Field, {
    label: "開始時間",
    style: {
      marginBottom: 10
    },
    error: err[i] && err[i].time
  }, React.createElement(Input, {
    type: "time",
    value: s.time,
    onChange: v => update(i, "time", v),
    invalid: !!(err[i] && err[i].time)
  })), React.createElement(Field, {
    label: "結束時間",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    type: "time",
    value: s.end_time || "",
    onChange: v => update(i, "end_time", v)
  }))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "正取名額",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    type: "number",
    value: s.cap_main,
    onChange: v => update(i, "cap_main", Number(v))
  })), React.createElement(Field, {
    label: "備取名額",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    type: "number",
    value: s.cap_wait,
    onChange: v => update(i, "cap_wait", Number(v))
  }))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "每筆報名人數上限",
    hint: "留空表示以剩餘名額為上限",
    style: {
      marginBottom: 0
    }
  }, React.createElement(Input, {
    type: "number",
    value: s.cap_per_reg ?? "",
    onChange: v => update(i, "cap_per_reg", v === "" ? null : Number(v)),
    placeholder: "不限"
  })), React.createElement(Field, {
    label: "報名組數上限",
    hint: "材料以組計算的活動使用，達上限即停止報名",
    style: {
      marginBottom: 0
    }
  }, React.createElement(Input, {
    type: "number",
    value: s.cap_groups ?? "",
    onChange: v => update(i, "cap_groups", v === "" ? null : Number(v)),
    placeholder: "不限"
  })))))), React.createElement(Button, {
    variant: "ghost",
    icon: "plus",
    style: {
      marginTop: 12
    },
    onClick: add
  }, "新增場次"));
}
function StepFields({
  form,
  setForm
}) {
  var max = 5;
  function update(i, k, v) {
    setForm(f => ({
      ...f,
      custom_fields: f.custom_fields.map((c, idx) => idx === i ? {
        ...c,
        [k]: v
      } : c)
    }));
  }
  function add() {
    if (form.custom_fields.length >= max) return;
    setForm(f => ({
      ...f,
      custom_fields: [...f.custom_fields, {
        seq: f.custom_fields.length + 1,
        name: "",
        type: "單選",
        required: false,
        options: ["選項一", "選項二"]
      }]
    }));
  }
  function remove(i) {
    setForm(f => ({
      ...f,
      custom_fields: f.custom_fields.filter((_, idx) => idx !== i)
    }));
  }
  function setOpts(i, str) {
    update(i, "options", str.split("\n").map(x => x.trim()).filter(Boolean));
  }
  function move(i, dir) {
    setForm(f => {
      var arr = [...f.custom_fields];
      var j = i + dir;
      if (j < 0 || j >= arr.length) return f;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return {
        ...f,
        custom_fields: arr.map((c, idx) => ({
          ...c,
          seq: idx + 1
        }))
      };
    });
  }
  return React.createElement("div", null, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 12
    }
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "自訂欄位"), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, form.custom_fields.length, " / ", max)), form.custom_fields.length === 0 && React.createElement("div", {
    className: "info-note",
    style: {
      marginBottom: 12
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "尚未新增自訂欄位。報名時讀者僅需填寫基本資料。")), React.createElement("div", {
    className: "stack",
    style: {
      gap: 12
    }
  }, form.custom_fields.map((c, i) => React.createElement("div", {
    key: i,
    style: {
      border: "1px solid var(--border)",
      borderRadius: 8,
      padding: 14,
      background: "#FaFafb"
    }
  }, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 10
    }
  }, React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-secondary)"
    }
  }, "欄位 ", i + 1), React.createElement("div", {
    className: "row",
    style: {
      gap: 2
    }
  }, React.createElement("button", {
    className: "icon-btn",
    title: "上移",
    disabled: i === 0,
    onClick: () => move(i, -1)
  }, React.createElement(Icon, {
    name: "chevronDown",
    size: 15,
    style: {
      transform: "rotate(180deg)"
    }
  })), React.createElement("button", {
    className: "icon-btn",
    title: "下移",
    disabled: i === form.custom_fields.length - 1,
    onClick: () => move(i, 1)
  }, React.createElement(Icon, {
    name: "chevronDown",
    size: 15
  })), React.createElement("button", {
    className: "icon-btn",
    title: "刪除",
    onClick: () => remove(i)
  }, React.createElement(Icon, {
    name: "trash",
    size: 15
  })))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "欄位名稱",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    value: c.name,
    onChange: v => update(i, "name", v),
    placeholder: "例如：素食需求"
  })), React.createElement(Field, {
    label: "類型",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Select, {
    value: c.type,
    onChange: v => update(i, "type", v),
    options: ["單選", "多選", "簡答"]
  }))), (c.type === "單選" || c.type === "多選") && React.createElement(Field, {
    label: "選項（每行一個）",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Textarea, {
    value: c.options.join("\n"),
    onChange: v => setOpts(i, v),
    rows: 3
  })), c.type === "簡答" && React.createElement(Field, {
    label: "字元上限",
    hint: "讀者填答的最多字數",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    type: "number",
    value: c.max_length ?? 200,
    onChange: v => update(i, "max_length", Number(v)),
    style: {
      maxWidth: 140
    }
  })), React.createElement(Checkbox, {
    label: "必填欄位",
    checked: c.required,
    onChange: v => update(i, "required", v)
  })))), React.createElement(Button, {
    variant: "ghost",
    icon: "plus",
    style: {
      marginTop: 12
    },
    disabled: form.custom_fields.length >= max,
    onClick: add
  }, "新增欄位"));
}
window.ActivityFormPage = ActivityFormPage;
var {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
function supplementInfo(act, settings, today) {
  var lastDate = act.sessions.map(s => s.date).filter(Boolean).sort().pop() || "";
  var days = settings.quota.supplement_deadline_days;
  var deadline = lastDate ? window.DB.addDays(lastDate, days) : "";
  return {
    deadline,
    days,
    overdue: !!deadline && deadline < today,
    lastDate
  };
}
function ActivityDetailPage({
  navigate,
  id,
  params = {}
}) {
  var store = useStore();
  var act = store.getActivity(id);
  var noReg = act ? act.type === "不需報名" : false;
  var toast = useToast();
  var firstTab = store.isField ? "checkin" : params.tab || "overview";
  var [tab, setTab] = useState(firstTab);
  var [preview, setPreview] = useState(false);
  var [publishOpen, setPublishOpen] = useState(false);
  var [notifyPreset, setNotifyPreset] = useState(params.pick || null);
  if (!act) return React.createElement(Empty, {
    title: "找不到活動"
  });
  var regs = store.regsFor(id);
  var counts = {
    main: regs.filter(r => r.status === "正取").length,
    wait: regs.filter(r => r.status === "備取").length,
    reply: regs.filter(r => r.status === "待回覆").length,
    docPending: regs.filter(r => r.document.status === "待審").length
  };
  var tabs = store.isField ? [{
    id: "checkin",
    label: "現場簽到"
  }] : noReg ? [{
    id: "overview",
    label: "總覽"
  }] : [{
    id: "overview",
    label: "總覽"
  }, {
    id: "registrations",
    label: "報名名單",
    count: counts.main + counts.wait + counts.reply
  }, {
    id: "checkin",
    label: "現場簽到"
  }, {
    id: "documents",
    label: "補件",
    count: counts.docPending || undefined
  }, {
    id: "notify",
    label: "通知"
  }];
  function goNotify(ids) {
    setNotifyPreset(ids && ids.length ? ids : null);
    setTab("notify");
  }
  return React.createElement("div", null, React.createElement(PageHeader, {
    breadcrumb: React.createElement("a", {
      onClick: () => navigate("activities")
    }, "← 返回活動管理"),
    title: act.name,
    subtitle: React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, React.createElement(Badge, null, act.status), React.createElement("span", {
      className: "muted"
    }, act.type, " · ", act.category, " · ", act.branch)),
    actions: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      icon: "eye",
      onClick: () => setPreview(true)
    }, "前台預覽"), !store.isField && React.createElement(Button, {
      variant: "ghost",
      icon: "edit",
      onClick: () => navigate("activity-edit", {
        id
      })
    }, "編輯"), !store.isField && !act.published && React.createElement(Button, {
      variant: "primary",
      icon: "check",
      onClick: () => setPublishOpen(true)
    }, "發佈"), !noReg && !store.isField && act.published && React.createElement(Button, {
      variant: "primary",
      icon: "scan",
      onClick: () => setTab("checkin")
    }, "現場簽到"))
  }), !act.published && !store.isField && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "這個活動目前是「", act.status, "」，讀者在前台看不到。確認內容無誤後按右上角「發佈」。")), React.createElement(Modal, {
    open: publishOpen,
    onClose: () => setPublishOpen(false),
    title: "發佈活動",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setPublishOpen(false)
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        store.setActivities(prev => prev.map(a => a.id === id ? {
          ...a,
          status: "報名中",
          published: true
        } : a));
        toast("活動已發佈", "success");
        setPublishOpen(false);
      }
    }, "確認發佈"))
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "確定要發佈「", React.createElement("b", null, act.name), "」嗎？發佈後讀者即可於前台瀏覽並報名。建議先按「前台預覽」看過一次。")), React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab
  })), tab === "overview" && React.createElement(OverviewTab, {
    act: act,
    counts: counts,
    navigate: navigate,
    setTab: setTab
  }), tab === "registrations" && React.createElement(RegistrationsTab, {
    act: act,
    initial: params,
    onNotify: goNotify
  }), tab === "checkin" && React.createElement(CheckinTab, {
    act: act
  }), tab === "documents" && React.createElement(DocumentsTab, {
    act: act,
    initialTab: params.docFilter,
    navigate: navigate
  }), tab === "notify" && React.createElement(NotifyTab, {
    act: act,
    preset: notifyPreset,
    navigate: navigate
  }), preview && React.createElement(FrontPreviewModal, {
    act: act,
    onClose: () => setPreview(false)
  }));
}
function OverviewTab({
  act,
  counts,
  navigate,
  setTab
}) {
  var store = useStore();
  var regs = store.regsFor(act.id);
  var t = capTotals(act, store.registrations);
  var noReg = act.type === "不需報名";
  var valid = regs.filter(r => ["正取", "備取", "待回覆"].includes(r.status));
  var groupCount = valid.length;
  var headCount = valid.reduce((s, r) => s + r.registrants.length, 0);
  var capGroups = act.sessions.reduce((s, x) => s + (x.cap_groups || 0), 0);
  return React.createElement("div", {
    className: "row detail-cols",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, !noReg && React.createElement("div", {
    className: "row-4"
  }, React.createElement(StatCard, {
    label: "正取 / 名額",
    value: `${t.main}/${t.cap}`,
    icon: "users",
    onClick: () => setTab("registrations")
  }), React.createElement(StatCard, {
    label: "備取",
    value: t.wait,
    icon: "clock",
    hint: t.reply ? `另有 ${t.reply} 位待回覆遞補` : undefined,
    onClick: () => setTab("registrations")
  }), React.createElement(StatCard, {
    label: "報名組數 / 人數",
    value: `${groupCount} 組 / ${headCount} 人`,
    icon: "users",
    hint: capGroups ? `組數上限 ${capGroups} 組` : "未設組數上限"
  }), React.createElement(StatCard, {
    label: "待審補件",
    value: counts.docPending,
    icon: "doc",
    alert: counts.docPending > 0 ? "warning" : null,
    onClick: () => setTab("documents")
  })), React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "活動描述"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.7,
      color: "var(--text-primary)"
    }
  }, act.desc || "（尚無描述）"), act.notice && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "divider"
  }), React.createElement("h3", {
    className: "section-title"
  }, React.createElement(Icon, {
    name: "alert",
    size: 14,
    style: {
      color: "var(--warning)"
    }
  }), "注意事項"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      whiteSpace: "pre-line"
    }
  }, act.notice))), !noReg && React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "場次與名額"), React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "場次"), React.createElement("th", null, "日期時間"), React.createElement("th", null, "地點"), React.createElement("th", {
    style: {
      width: 150
    }
  }, "正取"), React.createElement("th", null, "備取"))), React.createElement("tbody", null, act.sessions.map(s => {
    var c = sessionCounts(regs, s.id);
    return React.createElement("tr", {
      key: s.id
    }, React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, s.label), React.createElement("td", {
      className: "cell-muted num"
    }, s.date, " ", s.time, s.end_time ? `–${s.end_time}` : ""), React.createElement("td", {
      className: "cell-muted"
    }, s.place), React.createElement("td", null, React.createElement("div", {
      className: "cap-cell"
    }, React.createElement("div", {
      className: "cap-top"
    }, React.createElement("span", {
      className: "num"
    }, c.main, "/", s.cap_main), c.reply ? React.createElement("span", {
      className: "muted"
    }, "待回覆 ", c.reply) : null), React.createElement(ProgressBar, {
      value: c.main,
      max: s.cap_main,
      tone: c.main >= s.cap_main ? "amber" : "primary",
      height: 6
    }))), React.createElement("td", {
      className: "num"
    }, c.wait, "/", s.cap_wait));
  })))))), React.createElement("div", {
    className: "detail-side",
    style: {
      width: 320,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "活動資訊"), React.createElement("dl", {
    className: "kv",
    style: {
      gridTemplateColumns: "84px 1fr",
      rowGap: 10
    }
  }, React.createElement("dt", null, "類型"), React.createElement("dd", null, act.type), React.createElement("dt", null, "類別"), React.createElement("dd", null, act.category), React.createElement("dt", null, "館別"), React.createElement("dd", null, act.branch), React.createElement("dt", null, "對象"), React.createElement("dd", null, act.target || "不限"), React.createElement("dt", null, "年齡"), React.createElement("dd", null, act.age_min || act.age_max ? `${act.age_min ?? "不限"} – ${act.age_max ?? "不限"} 歲` : "不限"), React.createElement("dt", null, "費用"), React.createElement("dd", null, act.fee > 0 ? `NT$ ${act.fee}` : "免費"), !noReg && React.createElement(React.Fragment, null, React.createElement("dt", null, "報名期間"), React.createElement("dd", {
    className: "num"
  }, fmtRange(act.reg_start, act.reg_end))), !noReg && React.createElement(React.Fragment, null, React.createElement("dt", null, "取消截止"), React.createElement("dd", null, "活動前 ", act.cancel_deadline_hours, " 小時")), !noReg && React.createElement(React.Fragment, null, React.createElement("dt", null, "證明文件"), React.createElement("dd", null, act.doc_required ? `需要，報名後 ${act.doc_deadline_days} 天內上傳` : "不需要"))), act.pay_methods.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "divider",
    style: {
      margin: "14px 0"
    }
  }), React.createElement("div", {
    className: "field-label",
    style: {
      marginBottom: 6
    }
  }, "繳費方式"), React.createElement("div", {
    className: "tag-list"
  }, act.pay_methods.map(m => React.createElement(Badge, {
    key: m,
    tone: "gray"
  }, m)))), (act.attachments || []).length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "divider",
    style: {
      margin: "14px 0"
    }
  }), React.createElement("div", {
    className: "field-label",
    style: {
      marginBottom: 6
    }
  }, "附件"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 4,
      fontSize: 12.5
    }
  }, act.attachments.map((f, i) => React.createElement("span", {
    key: i
  }, React.createElement(Icon, {
    name: "doc",
    size: 12
  }), " ", f.name))))), !noReg && React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "快速操作"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "ghost",
    full: true,
    icon: "users",
    onClick: () => setTab("registrations"),
    style: {
      justifyContent: "flex-start"
    }
  }, "查看報名名單"), React.createElement(Button, {
    variant: "ghost",
    full: true,
    icon: "scan",
    onClick: () => setTab("checkin"),
    style: {
      justifyContent: "flex-start"
    }
  }, "現場簽到"), React.createElement(Button, {
    variant: "ghost",
    full: true,
    icon: "doc",
    onClick: () => setTab("documents"),
    style: {
      justifyContent: "flex-start"
    }
  }, "補件審核"), React.createElement(Button, {
    variant: "ghost",
    full: true,
    icon: "bell",
    onClick: () => setTab("notify"),
    style: {
      justifyContent: "flex-start"
    }
  }, "群發通知")))));
}
var REG_TABS = ["全部", "正取", "備取", "待回覆", "逾期未繳", "取消"];
function RegistrationsTab({
  act,
  initial = {},
  onNotify
}) {
  var store = useStore();
  var toast = useToast();
  var multi = act.sessions.length > 1;
  var [statusTab, setStatusTab] = useState(REG_TABS.includes(initial.regFilter) ? initial.regFilter : "全部");
  var [q, setQ] = useState(initial.q || "");
  var [session, setSession] = useState("");
  var [checked, setChecked] = useState([]);
  var [drawer, setDrawer] = useState(initial.openReg || null);
  var [promote, setPromote] = useState(null);
  var [batchPromote, setBatchPromote] = useState(false);
  var [cancel, setCancel] = useState(null);
  var [exportOpen, setExportOpen] = useState(false);
  var regs = store.regsFor(act.id);
  var inSession = regs.filter(r => !session || r.session_id === session);
  var matchTab = (r, tabName) => tabName === "全部" ? true : tabName === "逾期未繳" ? r.status === "正取" && r.payment.status === "逾期" : r.status === tabName;
  var counts = {};
  REG_TABS.forEach(t => {
    counts[t] = inSession.filter(r => matchTab(r, t)).length;
  });
  var filtered = inSession.filter(r => {
    if (!matchTab(r, statusTab)) return false;
    if (q && !r.registrants.some(p => p.name.includes(q)) && !r.reg_no.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  if (statusTab === "備取") filtered.sort((a, b) => (a.wait_seq || 99) - (b.wait_seq || 99));
  var cap = act.sessions.filter(s => !session || s.id === session).reduce((s, x) => s + x.cap_main, 0);
  var waitlist = inSession.filter(r => r.status === "備取" || r.status === "待回覆").sort((a, b) => (a.wait_seq || 99) - (b.wait_seq || 99));
  var drawerReg = regs.find(r => r.id === drawer);
  var paid = inSession.filter(r => r.status !== "取消" && r.payment.status === "已繳");
  var unpaid = inSession.filter(r => r.status === "正取" && r.payment.status === "待繳");
  var overdueList = inSession.filter(r => r.status === "正取" && r.payment.status === "逾期");
  var income = paid.reduce((s, r) => s + (r.payment.amount || 0), 0);
  var unpaidAmt = unpaid.reduce((s, r) => s + (r.payment.amount || 0), 0);
  var allChecked = filtered.length > 0 && filtered.every(r => checked.includes(r.id));
  function toggleCheck(id) {
    setChecked(c => c.includes(id) ? c.filter(x => x !== id) : [...c, id]);
  }
  function toggleAll() {
    setChecked(c => allChecked ? c.filter(id => !filtered.some(r => r.id === id)) : [...new Set([...c, ...filtered.map(r => r.id)])]);
  }
  var checkedWait = checked.map(id => regs.find(r => r.id === id)).filter(r => r && r.status === "備取");
  var needConfirm = store.settings.quota.require_promotion_confirm;
  function promoteOne(r) {
    if (needConfirm) {
      store.updateReg(r.id, {
        status: "待回覆",
        wait_seq: null
      }, "名額釋出，已寄遞補通知，等待讀者回覆");
    } else {
      store.updateReg(r.id, {
        status: "正取",
        wait_seq: null,
        payment: {
          ...r.payment,
          status: act.fee > 0 ? "待繳" : "無需",
          amount: act.fee > 0 ? act.fee * Math.max(1, r.registrants.length) : 0
        }
      }, "由備取遞補為正取，已寄遞補轉正通知");
    }
  }
  function logSend(template, target, count) {
    store.setNotifLog(prev => [{
      id: "nl-" + Math.random().toString(36).slice(2, 7),
      activity_id: act.id,
      at: nowStamp(),
      template,
      channel: "Email",
      target,
      count,
      by: store.currentUser.name,
      subject: (store.notifTemplates.find(t => t.name === template) || {}).subject || ""
    }, ...prev]);
  }
  function doPromote() {
    promoteOne(promote);
    logSend("遞補轉正通知", "指定讀者", 1);
    toast(needConfirm ? `已寄遞補通知給 ${promote.registrants[0].name}，等待讀者回覆` : `${promote.registrants[0].name} 已遞補為正取，並發送通知`, "success");
    setPromote(null);
  }
  function doBatchPromote() {
    checkedWait.forEach(promoteOne);
    logSend("遞補轉正通知", "指定讀者", checkedWait.length);
    toast(needConfirm ? `已寄遞補通知給 ${checkedWait.length} 位備取，等待讀者回覆` : `已將 ${checkedWait.length} 位備取遞補為正取並通知`, "success");
    setChecked([]);
    setBatchPromote(false);
  }
  function doCancel({
    reason,
    notify
  }) {
    var r = cancel.reg;
    var text = cancel.release ? "逾期未繳，館員釋出名額" : "館員取消報名";
    store.updateReg(r.id, {
      status: "取消",
      wait_seq: null
    }, text + (reason ? `：${reason}` : ""));
    if (notify) logSend("取消通知", "指定讀者", 1);
    toast(cancel.release ? `已釋出 ${r.reg_no} 的名額` : `已取消 ${r.reg_no} 的報名`, "success");
    setCancel(null);
    if (drawer === r.id) setDrawer(null);
  }
  var exportCount = checked.length || filtered.length;
  return React.createElement("div", null, React.createElement("div", {
    className: "banner-row"
  }, React.createElement(BannerStat, {
    label: "正取",
    value: `${counts.正取} / ${cap}`,
    tone: "green"
  }), React.createElement(BannerStat, {
    label: "備取",
    value: counts.備取,
    tone: "blue"
  }), React.createElement(BannerStat, {
    label: "待回覆遞補",
    value: counts.待回覆,
    tone: "amber"
  }), React.createElement(BannerStat, {
    label: "逾期未繳",
    value: overdueList.length,
    tone: overdueList.length > 0 ? "red" : "gray"
  }), act.fee > 0 && React.createElement(BannerStat, {
    label: "已收款",
    value: `NT$ ${income.toLocaleString()}`,
    tone: "green",
    sub: `待繳 ${unpaid.length} 筆（NT$ ${unpaidAmt.toLocaleString()}）`
  })), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("div", {
    className: "table-toolbar"
  }, multi && React.createElement("div", {
    className: "filter-item",
    style: {
      minWidth: 180
    }
  }, React.createElement(Select, {
    value: session,
    onChange: v => {
      setSession(v);
      setChecked([]);
    },
    placeholder: "全部場次",
    options: act.sessions.map(s => ({
      value: s.id,
      label: s.label
    }))
  })), React.createElement("div", {
    className: "filter-item filter-grow",
    style: {
      position: "relative"
    }
  }, React.createElement(Input, {
    value: q,
    onChange: setQ,
    placeholder: "搜尋姓名或報名編號…"
  })), React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "download",
    onClick: () => setExportOpen(true)
  }, checked.length ? `匯出已選 ${checked.length} 筆` : "匯出名單"), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    icon: "bell",
    onClick: () => onNotify(checked)
  }, checked.length ? `通知已選 ${checked.length} 位` : "群發通知"))), checked.length > 0 && React.createElement("div", {
    className: "batch-bar"
  }, React.createElement("span", null, "已選取 ", React.createElement("b", null, checked.length), " 筆", checkedWait.length > 0 && React.createElement("span", {
    className: "muted"
  }, "（其中備取 ", checkedWait.length, " 筆）")), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "soft",
    size: "sm",
    disabled: checkedWait.length === 0,
    onClick: () => setBatchPromote(true)
  }, "批次遞補轉正", checkedWait.length ? ` ${checkedWait.length} 筆` : ""), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    icon: "bell",
    onClick: () => onNotify(checked)
  }, "通知已選"), React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => setChecked([])
  }, "取消選取"))), React.createElement("div", {
    style: {
      padding: "0 14px",
      borderBottom: "1px solid var(--border)",
      overflowX: "auto"
    }
  }, React.createElement(Tabs, {
    tabs: REG_TABS.map(s => ({
      id: s,
      label: s,
      count: counts[s]
    })),
    active: statusTab,
    onChange: t => {
      setStatusTab(t);
      setChecked([]);
    }
  })), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: 38
    }
  }, React.createElement(Checkbox, {
    checked: allChecked,
    onChange: toggleAll
  })), React.createElement("th", null, "報名編號"), React.createElement("th", null, "姓名"), multi && React.createElement("th", null, "場次"), React.createElement("th", null, "人數組成"), React.createElement("th", null, "狀態"), React.createElement("th", null, "繳費"), React.createElement("th", null, "補件"), React.createElement("th", null, "簽到"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, filtered.map(r => {
    var overdue = r.status === "正取" && r.payment.status === "逾期";
    return React.createElement("tr", {
      key: r.id,
      className: "clickable",
      onClick: () => setDrawer(r.id)
    }, React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement(Checkbox, {
      checked: checked.includes(r.id),
      onChange: () => toggleCheck(r.id)
    })), React.createElement("td", {
      className: "mono",
      style: {
        fontWeight: 600
      }
    }, r.reg_no), React.createElement("td", null, r.registrants[0].name, r.status === "備取" && r.wait_seq ? React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 11,
        marginLeft: 6
      }
    }, "備取 #", r.wait_seq) : null), multi && React.createElement("td", {
      className: "cell-muted"
    }, act.sessions.find(s => s.id === r.session_id)?.label), React.createElement("td", {
      className: "cell-muted"
    }, r.composition), React.createElement("td", null, React.createElement(Badge, null, r.status)), React.createElement("td", null, r.payment.status === "無需" ? React.createElement("span", {
      className: "muted"
    }, "—") : React.createElement(Badge, null, r.payment.status)), React.createElement("td", null, r.document.status === "無需" ? React.createElement("span", {
      className: "muted"
    }, "—") : React.createElement(Badge, null, r.document.status)), React.createElement("td", null, React.createElement(Badge, null, r.check_in.checked_out_at ? "已簽退" : r.check_in.status)), React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "row-actions"
    }, React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => setDrawer(r.id)
    }, "查看"), r.status === "備取" && React.createElement(Button, {
      variant: "soft",
      size: "sm",
      onClick: () => setPromote(r)
    }, "遞補"), overdue && React.createElement(Button, {
      variant: "soft",
      size: "sm",
      onClick: () => setCancel({
        reg: r,
        release: true
      })
    }, "釋出名額"), !overdue && (r.status === "正取" || r.status === "備取" || r.status === "待回覆") && React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => setCancel({
        reg: r,
        release: false
      })
    }, "取消"))));
  })))), filtered.length === 0 && React.createElement(Empty, {
    title: "沒有符合條件的報名"
  })), waitlist.length > 0 && (statusTab === "全部" || statusTab === "正取") && React.createElement(Card, {
    style: {
      marginTop: 18,
      padding: 0
    }
  }, React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderBottom: "1px solid var(--border)"
    }
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, React.createElement(Icon, {
    name: "clock",
    size: 15,
    style: {
      color: "var(--info)"
    }
  }), "備取名單（依序遞補）")), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: 90
    }
  }, "備取序號"), React.createElement("th", null, "姓名"), multi && React.createElement("th", null, "場次"), React.createElement("th", null, "報名時間"), React.createElement("th", null, "狀態"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, waitlist.map(r => React.createElement("tr", {
    key: r.id
  }, React.createElement("td", null, r.wait_seq ? React.createElement("span", {
    className: "seq-dot"
  }, r.wait_seq) : React.createElement("span", {
    className: "muted"
  }, "—")), React.createElement("td", null, r.registrants[0].name), multi && React.createElement("td", {
    className: "cell-muted"
  }, act.sessions.find(s => s.id === r.session_id)?.label), React.createElement("td", {
    className: "cell-muted num"
  }, r.registered_at.replace("T", " ").slice(0, 16)), React.createElement("td", null, React.createElement(Badge, null, r.status)), React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, r.status === "備取" ? React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => setPromote(r)
  }, "遞補轉正") : React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "等待讀者回覆")))))))), React.createElement(RegDrawer, {
    reg: drawerReg,
    open: !!drawer,
    onClose: () => setDrawer(null),
    act: act,
    onPromote: r => setPromote(r),
    onCancel: (r, release) => setCancel({
      reg: r,
      release
    })
  }), React.createElement(ExportModal, {
    open: exportOpen,
    onClose: () => setExportOpen(false),
    count: exportCount,
    selected: checked.length > 0
  }), React.createElement(Modal, {
    open: !!promote,
    onClose: () => setPromote(null),
    title: "遞補轉正",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setPromote(null)
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: doPromote
    }, needConfirm ? "寄遞補通知" : "確認遞補並通知"))
  }, promote && React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "確定將備取 #", promote.wait_seq, "「", React.createElement("b", null, promote.registrants[0].name), "」遞補為正取嗎？", needConfirm ? `系統會寄送遞補通知，讀者須於 ${store.settings.quota.reply_deadline_hours} 小時內回覆確認參加，逾時自動釋出並往下遞補。` : `系統將寄送遞補轉正通知，${act.fee > 0 ? "並要求於期限內完成繳費。" : "讀者即完成報名。"}`)), React.createElement(Modal, {
    open: batchPromote,
    onClose: () => setBatchPromote(false),
    title: "批次遞補轉正",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setBatchPromote(false)
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: doBatchPromote
    }, "確認遞補 ", checkedWait.length, " 筆"))
  }, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "將對已勾選的 ", React.createElement("b", null, checkedWait.length), " 位備取執行遞補", needConfirm ? "，並寄送遞補通知等待讀者回覆" : "轉正並寄送通知", "。勾選中非備取狀態的 ", checked.length - checkedWait.length, " 筆會略過。"), React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 13,
      lineHeight: 1.9,
      color: "var(--text-secondary)"
    }
  }, checkedWait.slice(0, 8).map(r => React.createElement("li", {
    key: r.id
  }, "備取 #", r.wait_seq, "\u3000", r.registrants[0].name, "（", r.reg_no, "）")), checkedWait.length > 8 && React.createElement("li", null, "…等 ", checkedWait.length, " 筆"))), cancel && React.createElement(CancelModal, {
    act: act,
    reg: cancel.reg,
    release: cancel.release,
    onClose: () => setCancel(null),
    onConfirm: doCancel
  }));
}
function CancelModal({
  act,
  reg,
  release,
  onClose,
  onConfirm
}) {
  var [reason, setReason] = useState("");
  var [notify, setNotify] = useState(true);
  var paid = reg.payment.status === "已繳";
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: release ? "釋出名額" : "取消報名",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      onClick: () => onConfirm({
        reason: reason.trim(),
        notify
      })
    }, release ? "確認釋出名額" : "確認取消報名"))
  }, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, release ? React.createElement(React.Fragment, null, "「", React.createElement("b", null, reg.registrants[0].name), "」（", reg.reg_no, "）逾期未繳費，釋出名額後這筆報名會轉為取消，名額可供備取遞補。") : React.createElement(React.Fragment, null, "確定取消「", React.createElement("b", null, reg.registrants[0].name), "」（", reg.reg_no, "）的報名嗎？取消後名額釋出，可供備取遞補。")), paid && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 12
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "這筆已繳費 NT$ ", reg.payment.amount, "。系統不處理線上退費，請依館方流程人工辦理退費。")), React.createElement(Field, {
    label: "原因（選填）",
    hint: "會記在這筆報名的操作歷程，方便日後查證；不填也可以"
  }, React.createElement(Textarea, {
    value: reason,
    onChange: setReason,
    rows: 2,
    placeholder: release ? "例如：已電話聯繫，讀者表示不參加" : "例如：讀者來電要求取消"
  })), React.createElement(Checkbox, {
    label: "同時寄送取消通知給讀者",
    checked: notify,
    onChange: setNotify
  }));
}
function BannerStat({
  label,
  value,
  tone,
  sub
}) {
  var c = {
    green: "#15803D",
    blue: "#1E40AF",
    amber: "#92400E",
    red: "#B91C1C",
    gray: "#6B7280"
  }[tone];
  return React.createElement("div", {
    className: "banner-stat"
  }, React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, label), React.createElement("div", {
    className: "num",
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: c,
      marginTop: 3
    }
  }, value), sub && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 2
    }
  }, sub));
}
var EXPORT_FIELDS = [{
  k: "reg_no",
  label: "報名編號",
  fixed: true
}, {
  k: "status",
  label: "報名狀態",
  fixed: true
}, {
  k: "session",
  label: "場次"
}, {
  k: "wait_seq",
  label: "備取序號"
}, {
  k: "names",
  label: "各報名者姓名"
}, {
  k: "id_no",
  label: "各報名者身分證字號"
}, {
  k: "gender",
  label: "各報名者性別"
}, {
  k: "birth",
  label: "各報名者出生年月日"
}, {
  k: "phone",
  label: "主要聯絡人手機"
}, {
  k: "email",
  label: "主要聯絡人 Email"
}, {
  k: "composition",
  label: "人數組成"
}, {
  k: "custom",
  label: "自訂欄位答案"
}, {
  k: "payment",
  label: "繳費狀態與方式"
}, {
  k: "document",
  label: "補件狀態"
}, {
  k: "checkin",
  label: "簽到狀態"
}, {
  k: "registered_at",
  label: "報名時間"
}];
function ExportModal({
  open,
  onClose,
  count,
  selected
}) {
  var toast = useToast();
  var [sel, setSel] = useState(() => EXPORT_FIELDS.map(f => f.k));
  var [format, setFormat] = useState("Excel");
  function toggle(k) {
    var f = EXPORT_FIELDS.find(x => x.k === k);
    if (f.fixed) return;
    setSel(s => s.includes(k) ? s.filter(x => x !== k) : [...s, k]);
  }
  return React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "匯出報名名單",
    width: 520,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      icon: "download",
      disabled: sel.length === 0,
      onClick: () => {
        toast(`已匯出 ${count} 筆報名名單（${format}，${sel.length} 個欄位）`, "success");
        onClose();
      }
    }, "匯出 ", count, " 筆"))
  }, React.createElement("div", {
    className: "info-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, selected ? `只匯出已勾選的 ${count} 筆。` : `匯出目前篩選結果共 ${count} 筆；若只要其中幾筆，先在名單勾選再按匯出。`)), React.createElement(Field, {
    label: "檔案格式"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      maxWidth: 320
    }
  }, React.createElement(Radio, {
    label: "Excel",
    checked: format === "Excel",
    onChange: () => setFormat("Excel")
  }), React.createElement(Radio, {
    label: "CSV",
    checked: format === "CSV",
    onChange: () => setFormat("CSV")
  }))), React.createElement(Field, {
    label: "匯出欄位",
    hint: "報名編號與報名狀態為必要欄位"
  }, React.createElement("div", {
    className: "export-grid"
  }, EXPORT_FIELDS.map(f => React.createElement(Checkbox, {
    key: f.k,
    label: f.label,
    disabled: f.fixed,
    checked: sel.includes(f.k),
    onChange: () => toggle(f.k)
  })))), React.createElement("div", {
    className: "info-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "匯出檔含個人資料，請依個人資料保護法妥善保管，不得外流。")));
}
function ViolationModal({
  act,
  reg,
  onClose
}) {
  var store = useStore();
  var toast = useToast();
  var types = (store.settings.violationTypes || []).filter(t => t.active);
  var manual = types.filter(t => !t.auto);
  var [typeId, setTypeId] = useState((manual[0] || types[0] || {}).id || "");
  var [who, setWho] = useState(0);
  var [reason, setReason] = useState("");
  var t = types.find(x => x.id === typeId);
  var person = reg.registrants[who] || reg.registrants[0];
  function submit() {
    if (!t) return;
    var suspended = store.addViolation({
      id_no_mask: person.id_no_mask,
      name: person.name,
      type: t.name,
      point: t.point,
      activity_name: act.name,
      reason
    });
    store.updateReg(reg.id, {}, `記違規點：${t.name} +${t.point}（${person.name}）${reason ? "：" + reason : ""}`);
    toast(suspended ? `已記點；${person.name} 累計達停權門檻，已自動停權` : `已對 ${person.name} 記 ${t.name} ${t.point} 點`, suspended ? "danger" : "success");
    onClose();
  }
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: "記違規點",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      disabled: !t,
      onClick: submit
    }, "確認記點"))
  }, reg.registrants.length > 1 && React.createElement(Field, {
    label: "對象",
    hint: "記點以個別身分證字號為單位，同一筆報名的家人分開計算"
  }, React.createElement(Select, {
    value: String(who),
    onChange: v => setWho(Number(v)),
    options: reg.registrants.map((p, i) => ({
      value: String(i),
      label: `${p.name}（${p.kind}）`
    }))
  })), React.createElement(Field, {
    label: "違規類型",
    hint: t ? `${t.desc}；記 ${t.point} 點` : ""
  }, React.createElement(Select, {
    value: typeId,
    onChange: setTypeId,
    options: types.map(x => ({
      value: x.id,
      label: `${x.name}（${x.point} 點${x.auto ? "，通常由系統自動記" : ""}）`
    }))
  })), React.createElement(Field, {
    label: "原因（選填）",
    hint: "只有後台看得到，讀者在前台只看到點數與帳號狀態"
  }, React.createElement(Textarea, {
    value: reason,
    onChange: setReason,
    rows: 2,
    placeholder: "例如：現場行為不當，經勸導無效"
  })), React.createElement("div", {
    className: "info-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "累計達 ", store.settings.violation.suspend_threshold, " 點會自動停權 ", store.settings.violation.suspend_days, " 天。要撤銷或調整點數請到「違規與黑名單」。")));
}
function RegDrawer({
  reg,
  open,
  onClose,
  act,
  onPromote,
  onCancel
}) {
  var store = useStore();
  var toast = useToast();
  var [cashOpen, setCashOpen] = useState(false);
  var [cash, setCash] = useState({
    amount: "",
    by: "",
    at: ""
  });
  var [violOpen, setViolOpen] = useState(false);
  if (!reg) return React.createElement(Drawer, {
    open: open,
    onClose: onClose,
    title: "報名詳情",
    width: 480
  }, React.createElement("div", null));
  var p = reg.registrants[0];
  var ses = act.sessions.find(s => s.id === reg.session_id);
  var sup = supplementInfo(act, store.settings, store.today);
  var onSiteOnly = act.pay_methods.length > 0 && act.pay_methods.every(m => m === "現場繳費");
  var canCollect = act.fee > 0 && reg.status === "正取" && reg.payment.status !== "已繳" && act.pay_methods.includes("現場繳費");
  var overdue = reg.status === "正取" && reg.payment.status === "逾期";
  var canSupplement = reg.status === "正取" && reg.check_in.status !== "已簽到" && !!ses && ses.date < store.today;
  function saveCash() {
    store.updateReg(reg.id, r => ({
      payment: {
        ...r.payment,
        status: "已繳",
        method: "現場繳費",
        amount: Number(cash.amount) || r.payment.amount,
        received_by: cash.by,
        received_at: cash.at
      }
    }), `登錄現場收款 NT$ ${Number(cash.amount) || reg.payment.amount}（收款人 ${cash.by}）`);
    toast(`已登錄 ${reg.registrants[0].name} 的現場收款`, "success");
    setCashOpen(false);
  }
  function supplement() {
    var time = `${ses ? ses.date : store.today} ${nowHM()}`;
    store.updateReg(reg.id, r => ({
      check_in: {
        ...r.check_in,
        status: "已簽到",
        checked_in_at: time
      }
    }), "補登簽到");
    toast(`已補登 ${p.name} 的簽到`, "success");
  }
  return React.createElement(Drawer, {
    open: open,
    onClose: onClose,
    width: 480,
    title: React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, React.createElement("span", {
      className: "mono"
    }, reg.reg_no), React.createElement(Badge, null, reg.status)),
    subtitle: `${act.name} · ${ses ? ses.label : ""}`,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      full: true,
      onClick: onClose
    }, "關閉"))
  }, !store.isField && React.createElement(Section, {
    title: "操作"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      flexWrap: "wrap"
    }
  }, reg.status === "備取" && React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => onPromote(reg)
  }, "遞補轉正"), overdue && React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => onCancel(reg, true)
  }, "釋出名額"), canCollect && !cashOpen && React.createElement(Button, {
    variant: "soft",
    size: "sm",
    icon: "dollar",
    onClick: () => {
      setCash({
        amount: String(reg.payment.amount || act.fee),
        by: store.currentUser.name,
        at: nowStamp()
      });
      setCashOpen(true);
    }
  }, "登錄已收款"), canSupplement && React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "check",
    disabled: sup.overdue,
    title: sup.overdue ? `補登期限 ${sup.deadline} 已過` : "",
    onClick: supplement
  }, "補登簽到"), reg.status !== "取消" && React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "alert",
    onClick: () => setViolOpen(true)
  }, "記違規點"), (reg.status === "正取" || reg.status === "備取" || reg.status === "待回覆") && !overdue && React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onCancel(reg, false)
  }, "取消報名")), canSupplement && sup.overdue && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 6
    }
  }, "補登期限（", sup.deadline, "）已過，如需補登請洽系統管理員。")), React.createElement(Section, {
    title: "報名者資料"
  }, React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "姓名"), React.createElement("th", null, "身分證"), React.createElement("th", null, "性別"), React.createElement("th", null, "出生年月日"))), React.createElement("tbody", null, reg.registrants.map((r, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, r.name, r.is_primary && React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11,
      marginLeft: 5
    }
  }, "主"), React.createElement("div", {
    className: "cell-muted",
    style: {
      fontSize: 11
    }
  }, r.kind)), React.createElement("td", {
    className: "mono cell-muted"
  }, r.id_no_mask || "—"), React.createElement("td", {
    className: "cell-muted"
  }, r.gender || "—"), React.createElement("td", {
    className: "cell-muted num"
  }, r.birth_date)))))), React.createElement("dl", {
    className: "kv",
    style: {
      marginTop: 12
    }
  }, React.createElement("dt", null, "手機"), React.createElement("dd", {
    className: "num"
  }, p.phone), React.createElement("dt", null, "Email"), React.createElement("dd", null, p.email), React.createElement("dt", null, "報名時間"), React.createElement("dd", {
    className: "num"
  }, reg.registered_at.replace("T", " ").slice(0, 16)))), reg.custom_answers.length > 0 && React.createElement(Section, {
    title: "自訂欄位"
  }, React.createElement("dl", {
    className: "kv"
  }, reg.custom_answers.map((a, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("dt", null, a.name), React.createElement("dd", null, a.value))))), React.createElement(Section, {
    title: "繳費紀錄"
  }, reg.payment.status === "無需" ? React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, act.fee > 0 ? "尚未產生應繳金額（遞補為正取後才需繳費）" : "免費活動，無需繳費") : React.createElement(React.Fragment, null, React.createElement("dl", {
    className: "kv"
  }, React.createElement("dt", null, "狀態"), React.createElement("dd", null, React.createElement(Badge, null, reg.payment.status)), React.createElement("dt", null, "金額"), React.createElement("dd", {
    className: "num"
  }, "NT$ ", reg.payment.amount), React.createElement("dt", null, "方式"), React.createElement("dd", null, reg.payment.method || "—"), reg.payment.received_by && React.createElement(React.Fragment, null, React.createElement("dt", null, "收款人"), React.createElement("dd", null, reg.payment.received_by)), reg.payment.received_at && React.createElement(React.Fragment, null, React.createElement("dt", null, "收款時間"), React.createElement("dd", {
    className: "num"
  }, reg.payment.received_at))), cashOpen && React.createElement("div", {
    className: "inline-form"
  }, React.createElement("div", {
    className: "inline-form-title"
  }, "登錄現場收款"), React.createElement(Field, {
    label: "收款金額（NT$）",
    style: {
      marginBottom: 10
    }
  }, React.createElement(Input, {
    type: "number",
    value: cash.amount,
    onChange: v => setCash({
      ...cash,
      amount: v
    })
  })), React.createElement(Field, {
    label: "收款人",
    style: {
      marginBottom: 10
    },
    hint: "預設帶入目前登入的館員"
  }, React.createElement(Input, {
    value: cash.by,
    onChange: v => setCash({
      ...cash,
      by: v
    }),
    placeholder: "經手館員姓名"
  })), React.createElement(Field, {
    label: "收款時間",
    style: {
      marginBottom: 12
    }
  }, React.createElement(Input, {
    value: cash.at,
    onChange: v => setCash({
      ...cash,
      at: v
    }),
    placeholder: "2026-06-21 09:30"
  })), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "primary",
    size: "sm",
    disabled: !cash.by.trim(),
    onClick: saveCash
  }, "確認登錄"), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setCashOpen(false)
  }, "取消"))), onSiteOnly && reg.payment.status !== "已繳" && !cashOpen && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12,
      marginTop: 8
    }
  }, "本活動僅現場繳費，讀者到場繳費後請按「登錄已收款」。"))), React.createElement(Section, {
    title: "補件狀態"
  }, reg.document.status === "無需" ? React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "此活動無需補件") : React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement(Badge, null, reg.document.status), reg.document.uploaded_at && React.createElement("span", {
    className: "muted num",
    style: {
      fontSize: 12
    }
  }, "上傳於 ", reg.document.uploaded_at))), React.createElement(Section, {
    title: "簽到"
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 12.5
    }
  }, React.createElement(Badge, null, reg.check_in.checked_out_at ? "已簽退" : reg.check_in.status), reg.check_in.checked_in_at && React.createElement("span", {
    className: "muted num"
  }, "簽到 ", reg.check_in.checked_in_at), reg.check_in.checked_out_at && React.createElement("span", {
    className: "muted num"
  }, "簽退 ", reg.check_in.checked_out_at))), React.createElement(Section, {
    title: "操作歷程"
  }, React.createElement("div", {
    className: "timeline"
  }, [...reg.history].reverse().map((h, i) => React.createElement("div", {
    key: i,
    className: "tl-item"
  }, React.createElement("div", {
    className: "tl-dot"
  }), React.createElement("div", {
    className: "tl-body"
  }, React.createElement("div", {
    className: "tl-text"
  }, h.text), React.createElement("div", {
    className: "tl-meta num"
  }, h.at, " · ", h.who)))))), violOpen && React.createElement(ViolationModal, {
    act: act,
    reg: reg,
    onClose: () => setViolOpen(false)
  }));
}
function Section({
  title,
  children
}) {
  return React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, React.createElement("div", {
    className: "field-label",
    style: {
      marginBottom: 10,
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, title), children);
}
function FrontPreviewModal({
  act,
  onClose
}) {
  var store = useStore();
  var regs = store.regsFor(act.id);
  var noReg = act.type === "不需報名";
  var t = capTotals(act, store.registrations);
  var [noticeOpen, setNoticeOpen] = useState(false);
  var [sessOpen, setSessOpen] = useState(false);
  var status = noReg ? null : t.main >= t.cap ? t.wait >= act.sessions.reduce((s, x) => s + x.cap_wait, 0) ? "已額滿" : "候補中" : "尚有名額";
  var btn = noReg ? null : act.fee > 0 ? "確定報名並進行繳費" : "立即報名";
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: "前台預覽",
    width: 720,
    footer: React.createElement(React.Fragment, null, React.createElement("span", {
      className: "muted",
      style: {
        marginRight: "auto",
        fontSize: 12
      }
    }, act.published ? "讀者現在就看得到這一頁" : "草稿／已下架：只有後台看得到這個預覽，讀者看不到"), React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "關閉"))
  }, React.createElement("div", {
    className: "fp"
  }, React.createElement("div", {
    className: "fp-cover"
  }, act.cover_image ? React.createElement("span", null, React.createElement(Icon, {
    name: "eye",
    size: 16
  }), " ", act.cover_image) : React.createElement("span", {
    className: "muted"
  }, "尚未上傳活動主視覺（建議 1200 × 630）")), React.createElement("div", {
    className: "fp-tags"
  }, React.createElement(Badge, {
    tone: "blue"
  }, act.category), React.createElement(Badge, {
    tone: "gray"
  }, act.type), React.createElement(Badge, {
    tone: "gray"
  }, act.branch), status && React.createElement(Badge, {
    tone: status === "尚有名額" ? "green" : status === "候補中" ? "amber" : "red"
  }, status)), React.createElement("h2", {
    className: "fp-title"
  }, act.name || "（未命名活動）"), React.createElement("div", {
    className: "fp-info"
  }, React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "活動時間"), act.sessions.length ? `${act.sessions[0].date} ${act.sessions[0].time}${act.sessions[0].end_time ? "–" + act.sessions[0].end_time : ""}${act.sessions.length > 1 ? `　等 ${act.sessions.length} 場` : ""}` : "—"), React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "地點"), act.sessions[0]?.place || "—"), React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "費用"), act.fee > 0 ? `NT$ ${act.fee}（${act.pay_methods.join("／") || "未設繳費方式"}）` : "免費"), React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "參加對象"), act.target || "不限", act.age_min || act.age_max ? `（${act.age_min ?? ""}${act.age_min && act.age_max ? "–" : act.age_min ? " 歲以上" : ""}${act.age_max ? `${act.age_max} 歲${act.age_min ? "" : "以下"}` : ""}）` : ""), !noReg && React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "報名期間"), fmtRange(act.reg_start, act.reg_end)), !noReg && React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "報名狀態"), "正取 ", t.main, "／", t.cap, "・備取 ", t.wait, act.sessions.length > 1 && React.createElement("button", {
    type: "button",
    className: "fp-link",
    onClick: () => setSessOpen(o => !o)
  }, sessOpen ? "收合場次" : "查看各場次名額")), !noReg && React.createElement("div", null, React.createElement("span", {
    className: "fp-k"
  }, "取消期限"), "活動開始前 ", act.cancel_deadline_hours, " 小時")), sessOpen && React.createElement("div", {
    className: "fp-sessions"
  }, act.sessions.map(s => {
    var c = sessionCounts(regs, s.id);
    return React.createElement("div", {
      key: s.id,
      className: "fp-sess"
    }, React.createElement("b", null, s.label), React.createElement("span", null, s.date, " ", s.time, "・", s.place), React.createElement("span", {
      className: c.main >= s.cap_main ? "fp-full" : "fp-ok"
    }, c.main >= s.cap_main ? c.wait >= s.cap_wait ? "已額滿" : `候補中（${c.wait}）` : `剩 ${s.cap_main - c.main} 位`));
  })), React.createElement("div", {
    className: "fp-body"
  }, React.createElement("div", {
    className: "fp-h"
  }, "活動內容"), React.createElement("p", {
    style: {
      whiteSpace: "pre-line",
      margin: 0
    }
  }, act.desc || "（尚無活動描述）")), act.notice && React.createElement("div", {
    className: "fp-body"
  }, React.createElement("button", {
    type: "button",
    className: "fp-acc",
    onClick: () => setNoticeOpen(o => !o)
  }, React.createElement("span", {
    className: "fp-h",
    style: {
      margin: 0
    }
  }, "注意事項"), React.createElement(Icon, {
    name: "chevronDown",
    size: 14,
    style: {
      transform: noticeOpen ? "rotate(180deg)" : "none"
    }
  })), noticeOpen && React.createElement("p", {
    style: {
      whiteSpace: "pre-line",
      margin: "8px 0 0"
    }
  }, act.notice)), (act.attachments || []).length > 0 && React.createElement("div", {
    className: "fp-body"
  }, React.createElement("div", {
    className: "fp-h"
  }, "附件下載"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 4
    }
  }, act.attachments.map((f, i) => React.createElement("span", {
    key: i,
    className: "fp-att"
  }, React.createElement(Icon, {
    name: "download",
    size: 13
  }), " ", f.name, " ", React.createElement("span", {
    className: "muted"
  }, f.size))))), act.doc_required && React.createElement("div", {
    className: "info-note",
    style: {
      marginTop: 10
    }
  }, React.createElement(Icon, {
    name: "doc",
    size: 15
  }), React.createElement("span", null, "報名後需上傳證明文件：", act.doc_note || "（尚未填寫說明）", "（報名後 ", act.doc_deadline_days, " 天內）")), React.createElement("div", {
    className: "fp-cta"
  }, noReg ? React.createElement("span", {
    className: "muted"
  }, "不需報名，歡迎直接到場參加") : React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    style: {
      padding: "10px 26px",
      fontSize: 14
    },
    disabled: true
  }, btn), !noReg && React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "（讀者須先登入；未登入會先看到登入提示）"))));
}
Object.assign(window, {
  ActivityDetailPage,
  FrontPreviewModal,
  supplementInfo,
  REG_TABS
});
var {
  useState,
  useEffect,
  useRef
} = React;
var CHECKIN_MODES = ["桌機・條碼機", "手機・手動輸入", "現場 QR・參加者自掃", "紙本・事後補登"];
function CheckinTab({
  act
}) {
  var store = useStore();
  var toast = useToast();
  var [session, setSession] = useState(act.sessions[0]?.id || "");
  var [mode, setMode] = useState("桌機・條碼機");
  var [action, setAction] = useState("簽到");
  var [query, setQuery] = useState("");
  var [result, setResult] = useState(null);
  var [focus, setFocus] = useState(false);
  var [listFilter, setListFilter] = useState("全部");
  var [picked, setPicked] = useState([]);
  var inputRef = useRef(null);
  var ses = act.sessions.find(s => s.id === session) || act.sessions[0];
  var regsAll = store.regsFor(act.id).filter(r => !ses || r.session_id === ses.id);
  var expectMain = regsAll.filter(r => r.status === "正取");
  var checkedRegs = expectMain.filter(r => r.check_in.status === "已簽到");
  var doneCount = checkedRegs.length;
  var unpaidCount = act.fee > 0 ? expectMain.filter(r => r.payment.status !== "已繳" && r.payment.status !== "無需").length : 0;
  var sup = supplementInfo(act, store.settings, store.today);
  var isPast = !!ses && ses.date < store.today;
  var supOverdue = sup.overdue;
  var paper = mode === "紙本・事後補登";
  useEffect(() => {
    setPicked([]);
    setResult(null);
  }, [session, mode, action]);
  function find(key) {
    return regsAll.find(r => r.reg_no.toLowerCase() === key.toLowerCase() || r.registrants[0].name === key || r.registrants[0].id_no_mask.toLowerCase() === key.toLowerCase());
  }
  function stamp() {
    return `${ses ? ses.date : store.today} ${nowHM()}`;
  }
  function markIn(r, isSupplement) {
    var time = stamp();
    store.updateReg(r.id, x => ({
      check_in: {
        ...x.check_in,
        status: "已簽到",
        checked_in_at: time
      }
    }), isSupplement ? "補登簽到" : "現場簽到完成");
    return time;
  }
  function collect(r) {
    store.updateReg(r.id, x => ({
      payment: {
        ...x.payment,
        status: "已繳",
        method: "現場繳費",
        received_by: store.currentUser.name,
        received_at: nowStamp()
      }
    }), `登錄現場收款 NT$ ${r.payment.amount}（收款人 ${store.currentUser.name}）`);
    toast(`已登錄 ${r.registrants[0].name} 的現場收款 NT$ ${r.payment.amount}`, "success");
    setResult(res => res && res.reg && res.reg.id === r.id ? {
      ...res,
      kind: "success",
      msg: res.msg.replace("，但尚未繳費", ""),
      unpaid: null
    } : res);
  }
  function doCheckin(isSupplement) {
    var key = query.trim();
    if (!key) {
      inputRef.current?.focus();
      return;
    }
    if (isSupplement && supOverdue) {
      setResult({
        kind: "danger",
        msg: "已超過補登期限，無法補登",
        detail: `補登開放至 ${sup.deadline}（活動後 ${sup.days} 天），逾期請洽系統管理員。`
      });
      return;
    }
    var found = find(key);
    if (!found) {
      setResult({
        kind: "danger",
        msg: "查無此報名資料",
        detail: `輸入內容：${key}，請確認借閱證或身分證字號，或到報名名單查詢。`
      });
      setQuery("");
      return;
    }
    if (found.status === "取消") {
      setResult({
        kind: "danger",
        reg: found,
        msg: "此報名已取消，無法簽到"
      });
      setQuery("");
      return;
    }
    if (found.status === "備取" || found.status === "待回覆") {
      setResult({
        kind: "warning",
        reg: found,
        msg: "此讀者為備取狀態，尚未遞補為正取",
        detail: "如現場有空位要讓他參加，請先到報名名單按「遞補」。"
      });
      setQuery("");
      return;
    }
    if (found.check_in.status === "已簽到") {
      setResult({
        kind: "warning",
        reg: found,
        msg: "此讀者已完成簽到",
        detail: `簽到時間 ${found.check_in.checked_in_at}`
      });
      setQuery("");
      return;
    }
    var time = markIn(found, isSupplement);
    var unpaid = act.fee > 0 && found.payment.status !== "已繳" && found.payment.status !== "無需";
    setResult({
      kind: unpaid ? "warning" : "success",
      reg: {
        ...found,
        check_in: {
          ...found.check_in,
          status: "已簽到",
          checked_in_at: time
        }
      },
      msg: (isSupplement ? "補登簽到成功" : "簽到成功") + (unpaid ? "，但尚未繳費" : ""),
      detail: unpaid ? `應繳 NT$ ${found.payment.amount}（${found.payment.status}）${act.pay_methods.includes("現場繳費") ? "，可現場收款後按右側按鈕登錄" : "，請提醒讀者完成線上繳費"}` : undefined,
      unpaid: unpaid ? found : null
    });
    toast(`${found.registrants[0].name} 簽到成功`, "success");
    setQuery("");
    inputRef.current?.focus();
  }
  function doCheckout() {
    var key = query.trim();
    if (!key) {
      inputRef.current?.focus();
      return;
    }
    var found = find(key);
    if (!found) {
      setResult({
        kind: "danger",
        msg: "查無此報名資料",
        detail: `輸入內容：${key}`
      });
      setQuery("");
      return;
    }
    if (found.check_in.status !== "已簽到") {
      setResult({
        kind: "warning",
        reg: found,
        msg: "此讀者尚未簽到，無法簽退"
      });
      setQuery("");
      return;
    }
    if (found.check_in.checked_out_at) {
      setResult({
        kind: "warning",
        reg: found,
        msg: "此讀者已完成簽退",
        detail: `簽退時間 ${found.check_in.checked_out_at}`
      });
      setQuery("");
      return;
    }
    var time = stamp();
    store.updateReg(found.id, x => ({
      check_in: {
        ...x.check_in,
        checked_out_at: time
      }
    }), "現場簽退完成");
    setResult({
      kind: "success",
      reg: {
        ...found,
        check_in: {
          ...found.check_in,
          checked_out_at: time
        }
      },
      msg: "簽退成功"
    });
    toast(`${found.registrants[0].name} 簽退成功`, "success");
    setQuery("");
    inputRef.current?.focus();
  }
  function rowIn(r) {
    if (isPast && supOverdue) {
      toast(`補登期限 ${sup.deadline} 已過`, "danger");
      return;
    }
    markIn(r, isPast);
    toast(`${r.registrants[0].name} ${isPast ? "補登" : "簽到"}成功`, "success");
  }
  function rowOut(r) {
    store.updateReg(r.id, x => ({
      check_in: {
        ...x.check_in,
        checked_out_at: stamp()
      }
    }), "現場簽退完成");
    toast(`${r.registrants[0].name} 簽退成功`, "success");
  }
  function batchIn() {
    if (isPast && supOverdue) {
      toast(`補登期限 ${sup.deadline} 已過`, "danger");
      return;
    }
    var targets = expectMain.filter(r => picked.includes(r.id) && r.check_in.status !== "已簽到");
    targets.forEach(r => markIn(r, isPast));
    toast(`已${isPast ? "補登" : "簽到"} ${targets.length} 筆`, "success");
    setPicked([]);
  }
  var roster = expectMain.filter(r => listFilter === "全部" ? true : listFilter === "未到" ? r.check_in.status !== "已簽到" : r.check_in.status === "已簽到");
  var notYet = roster.filter(r => r.check_in.status !== "已簽到");
  var allPicked = notYet.length > 0 && notYet.every(r => picked.includes(r.id));
  return React.createElement("div", {
    className: "row detail-cols",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, React.createElement(Card, null, React.createElement("div", {
    className: "row",
    style: {
      gap: 12,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, React.createElement(Field, {
    label: "場次",
    style: {
      flex: 1,
      marginBottom: 0,
      minWidth: 200
    }
  }, React.createElement(Select, {
    value: session,
    onChange: setSession,
    options: act.sessions.map(s => ({
      value: s.id,
      label: `${s.label}（${s.date} ${s.time}）`
    }))
  })), React.createElement(Field, {
    label: "簽到模式",
    style: {
      flex: 1,
      marginBottom: 0,
      minWidth: 200
    }
  }, React.createElement(Select, {
    value: mode,
    onChange: setMode,
    options: CHECKIN_MODES
  }))), !paper && React.createElement("div", {
    className: "seg-switch"
  }, React.createElement("button", {
    type: "button",
    className: "seg" + (action === "簽到" ? " active" : ""),
    onClick: () => setAction("簽到")
  }, "簽到"), React.createElement("button", {
    type: "button",
    className: "seg" + (action === "簽退" ? " active" : ""),
    onClick: () => setAction("簽退")
  }, "簽退")), mode === "現場 QR・參加者自掃" ? React.createElement("div", {
    className: "qr-zone"
  }, React.createElement("div", {
    className: "qr-code",
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: "0 0 21 21",
    width: "150",
    height: "150",
    shapeRendering: "crispEdges"
  }, React.createElement("rect", {
    width: "21",
    height: "21",
    fill: "#fff"
  }), Array.from({
    length: 21 * 21
  }, (_, i) => {
    var x = i % 21,
      y = Math.floor(i / 21);
    var finder = (cx, cy) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7 && !(x > cx && x < cx + 6 && y > cy && y < cy + 6 && !(x > cx + 1 && x < cx + 5 && y > cy + 1 && y < cy + 5));
    var on = finder(0, 0) || finder(14, 0) || finder(0, 14) || (x * 7 + y * 13 + x * y) % 5 < 2 && x > 7 && y > 7;
    return on ? React.createElement("rect", {
      key: i,
      x: x,
      y: y,
      width: "1",
      height: "1",
      fill: "#111"
    }) : null;
  }))), React.createElement("div", {
    className: "qr-meta"
  }, React.createElement("div", {
    className: "qr-title"
  }, act.name), React.createElement("div", {
    className: "qr-sub"
  }, ses?.label, " · ", ses?.date), React.createElement("div", {
    className: "qr-note"
  }, "此行動條碼只含場次代碼，不含個人資料。請於現場電腦顯示或列印張貼，參加者以手機掃描後完成", action, "。條碼於場次結束後失效。"), React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 10
    }
  }, React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "doc",
    onClick: () => toast("已送出列印（示意）", "default")
  }, "列印張貼"), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => toast("已重新產生行動條碼", "success")
  }, "重新產生")))) : paper ? React.createElement("div", {
    className: "info-note",
    style: {
      alignItems: "center"
    }
  }, React.createElement(Icon, {
    name: "doc",
    size: 15
  }), React.createElement("span", {
    style: {
      flex: 1
    }
  }, "紙本簽到：先列印本場次的簽到表給參加者簽名，活動後在下方名單勾選到場的人，一次補登。補登開放至 ", React.createElement("b", null, sup.deadline || "—"), "（活動結束後 ", sup.days, " 天）。"), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "doc",
    onClick: () => toast(`已送出列印：${act.name}・${ses?.label} 簽到表（${expectMain.length} 人）`, "success")
  }, "列印簽到表")) : React.createElement(React.Fragment, null, React.createElement("div", {
    className: "scan-zone" + (focus ? " focus" : "")
  }, React.createElement(Icon, {
    name: "scan",
    size: 30,
    style: {
      color: focus ? "var(--primary)" : "var(--text-tertiary)",
      marginBottom: 10
    }
  }), React.createElement("input", {
    ref: inputRef,
    className: "scan-input",
    value: query,
    placeholder: mode === "桌機・條碼機" ? "刷借閱證或輸入身分證字號…" : "輸入姓名 / 報名編號 / 身分證…",
    onChange: e => setQuery(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") action === "簽到" ? doCheckin(isPast) : doCheckout();
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  })), React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, action === "簽退" ? React.createElement(Button, {
    variant: "primary",
    icon: "logout",
    onClick: doCheckout
  }, "確認簽退") : isPast ? React.createElement(Button, {
    variant: "primary",
    icon: "check",
    disabled: supOverdue,
    onClick: () => doCheckin(true)
  }, "補登簽到") : React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: () => doCheckin(false)
  }, "確認簽到")), React.createElement("div", {
    className: "muted",
    style: {
      textAlign: "center",
      fontSize: 11.5,
      marginTop: 10
    }
  }, "提示：可輸入報名編號（如 R0003）、姓名或身分證字號；也可以直接在下方名單點「", isPast ? "補登" : "簽到", "」"), isPast ? React.createElement("div", {
    className: supOverdue ? "warn-note" : "info-note",
    style: {
      marginTop: 12
    }
  }, React.createElement(Icon, {
    name: "clock",
    size: 15
  }), React.createElement("span", null, supOverdue ? `這個場次已結束，補登期限（${sup.deadline}）也過了，無法再補登；如有特殊情形請洽系統管理員。` : `這個場次已結束，現在輸入的都算補登。補登開放至 ${sup.deadline}（活動結束後 ${sup.days} 天）。`)) : React.createElement("div", {
    className: "muted",
    style: {
      textAlign: "center",
      fontSize: 11.5,
      marginTop: 6
    }
  }, "活動結束後 ", sup.days, " 天內（至 ", sup.deadline || "—", "）仍可回來補登。"))), result && React.createElement("div", {
    className: "result-card result-" + result.kind
  }, React.createElement("div", {
    className: "result-ic",
    style: {
      background: result.kind === "success" ? "#16A34A" : result.kind === "warning" ? "#D97706" : "#DC2626"
    }
  }, React.createElement(Icon, {
    name: result.kind === "success" ? "check" : result.kind === "warning" ? "alert" : "close",
    size: 22,
    strokeWidth: 2.4
  })), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: result.kind === "success" ? "#15803D" : result.kind === "warning" ? "#92400E" : "#B91C1C"
    }
  }, result.msg), result.reg && React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 4,
      color: "var(--text-primary)"
    }
  }, React.createElement("b", null, result.reg.registrants[0].name), " · ", React.createElement("span", {
    className: "mono"
  }, result.reg.reg_no), " · ", result.reg.composition, result.reg.check_in.checked_in_at && result.msg.includes("簽到") && React.createElement("span", {
    className: "num"
  }, " · 簽到 ", result.reg.check_in.checked_in_at.slice(11))), result.detail && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12,
      marginTop: 3
    }
  }, result.detail)), result.unpaid && act.pay_methods.includes("現場繳費") && React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "dollar",
    onClick: () => collect(result.unpaid)
  }, "登錄已收款 NT$ ", result.unpaid.payment.amount)), React.createElement(Card, {
    style: {
      padding: 0
    }
  }, React.createElement("div", {
    style: {
      padding: "12px 18px",
      borderBottom: "1px solid var(--border)"
    },
    className: "between"
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "應到名單", React.createElement("span", {
    className: "muted",
    style: {
      fontWeight: 400,
      marginLeft: 8,
      fontSize: 12
    }
  }, "正取 ", expectMain.length, " 人")), React.createElement("div", {
    className: "seg-switch",
    style: {
      marginBottom: 0
    }
  }, ["全部", "未到", "已簽到"].map(f => React.createElement("button", {
    key: f,
    type: "button",
    className: "seg seg-sm" + (listFilter === f ? " active" : ""),
    onClick: () => setListFilter(f)
  }, f, f === "未到" ? ` ${expectMain.length - doneCount}` : f === "已簽到" ? ` ${doneCount}` : "")))), picked.length > 0 && React.createElement("div", {
    className: "batch-bar"
  }, React.createElement("span", null, "已勾選 ", React.createElement("b", null, picked.length), " 人"), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Button, {
    variant: "soft",
    size: "sm",
    icon: "check",
    disabled: isPast && supOverdue,
    onClick: batchIn
  }, isPast ? "一次補登" : "一次簽到", " ", picked.length, " 人"), React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => setPicked([])
  }, "取消勾選"))), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: 38
    }
  }, React.createElement(Checkbox, {
    checked: allPicked,
    onChange: () => setPicked(allPicked ? [] : notYet.map(r => r.id))
  })), React.createElement("th", null, "姓名"), React.createElement("th", null, "報名編號"), React.createElement("th", null, "人數"), act.fee > 0 && React.createElement("th", null, "繳費"), React.createElement("th", {
    className: "num"
  }, "簽到時間"), React.createElement("th", {
    className: "num"
  }, "簽退時間"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, roster.length === 0 && React.createElement("tr", null, React.createElement("td", {
    colSpan: 8
  }, React.createElement("div", {
    className: "muted",
    style: {
      padding: "12px 0",
      textAlign: "center"
    }
  }, listFilter === "已簽到" ? "尚無簽到紀錄" : "沒有符合的名單"))), roster.map(r => {
    var done = r.check_in.status === "已簽到";
    return React.createElement("tr", {
      key: r.id
    }, React.createElement("td", null, !done && React.createElement(Checkbox, {
      checked: picked.includes(r.id),
      onChange: () => setPicked(p => p.includes(r.id) ? p.filter(x => x !== r.id) : [...p, r.id])
    })), React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, r.registrants[0].name), React.createElement("td", {
      className: "mono cell-muted"
    }, r.reg_no), React.createElement("td", {
      className: "cell-muted"
    }, r.composition), act.fee > 0 && React.createElement("td", null, r.payment.status === "無需" ? React.createElement("span", {
      className: "muted"
    }, "—") : React.createElement(Badge, null, r.payment.status)), React.createElement("td", {
      className: "num cell-muted"
    }, r.check_in.checked_in_at ? r.check_in.checked_in_at.slice(11) : "—"), React.createElement("td", {
      className: "num cell-muted"
    }, r.check_in.checked_out_at ? r.check_in.checked_out_at.slice(11) : "—"), React.createElement("td", null, React.createElement("div", {
      className: "row-actions"
    }, !done && React.createElement(Button, {
      variant: "soft",
      size: "sm",
      disabled: isPast && supOverdue,
      onClick: () => rowIn(r)
    }, isPast ? "補登" : "簽到"), done && !r.check_in.checked_out_at && React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      onClick: () => rowOut(r)
    }, "簽退"), done && r.check_in.checked_out_at && React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 12
      }
    }, "已簽退"))));
  })))))), React.createElement("div", {
    className: "detail-side",
    style: {
      width: 280,
      flexShrink: 0
    }
  }, React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "簽到進度"), React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 0 14px"
    }
  }, React.createElement("div", {
    className: "num",
    style: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1
    }
  }, doneCount, React.createElement("span", {
    style: {
      fontSize: 20,
      color: "var(--text-tertiary)"
    }
  }, " / ", expectMain.length)), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12,
      marginTop: 6
    }
  }, "正取應到 ", expectMain.length, " 人", ses ? `・${ses.label}` : "")), React.createElement(ProgressBar, {
    value: doneCount,
    max: expectMain.length,
    tone: "green",
    height: 10
  }), React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      marginTop: 16
    }
  }, React.createElement(MiniStat, {
    label: "已簽到",
    value: doneCount,
    color: "#16A34A"
  }), React.createElement(MiniStat, {
    label: "未到",
    value: expectMain.length - doneCount,
    color: "#9CA3AF"
  })), act.fee > 0 && React.createElement("div", {
    className: unpaidCount ? "warn-note" : "info-note",
    style: {
      marginTop: 14
    }
  }, React.createElement(Icon, {
    name: "dollar",
    size: 15
  }), React.createElement("span", null, unpaidCount ? `本場次有 ${unpaidCount} 位正取尚未繳費；簽到時會提示，${act.pay_methods.includes("現場繳費") ? "可當場收款登錄" : "請提醒完成線上繳費"}。` : "本場次正取都已完成繳費。")), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "活動結束後，系統會在", store.settings.violation.auto_point_timing === "活動結束後立即" ? "活動結束後" : `補登期限（${sup.deadline || "—"}）過後`, "對仍未簽到的正取者自動記「放鳥」點數，不需館員操作。"))));
}
function MiniStat({
  label,
  value,
  color
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      background: "var(--bg)",
      borderRadius: 8,
      padding: "10px 0"
    }
  }, React.createElement("div", {
    className: "num",
    style: {
      fontSize: 20,
      fontWeight: 700,
      color
    }
  }, value), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5
    }
  }, label));
}
function DocumentsTab({
  act,
  initialTab,
  navigate
}) {
  var store = useStore();
  var toast = useToast();
  var [tab, setTab] = useState(initialTab || "全部");
  var [reject, setReject] = useState(null);
  var [reason, setReason] = useState("");
  var [preview, setPreview] = useState(null);
  var [deadlineOpen, setDeadlineOpen] = useState(false);
  var [dl, setDl] = useState(() => ({
    days: act.doc_deadline_days,
    note: act.doc_note
  }));
  var remindDays = store.settings.notify.document_remind_days;
  function saveDeadline() {
    store.setActivities(prev => prev.map(a => a.id === act.id ? {
      ...a,
      doc_deadline_days: Number(dl.days) || 14,
      doc_note: dl.note
    } : a));
    toast("已更新本活動的補件設定", "success");
    setDeadlineOpen(false);
  }
  function logSend(template, target, count) {
    store.setNotifLog(prev => [{
      id: "nl-" + Math.random().toString(36).slice(2, 7),
      activity_id: act.id,
      at: nowStamp(),
      template,
      channel: "Email",
      target,
      count,
      by: store.currentUser.name,
      subject: (store.notifTemplates.find(t => t.name === template) || {}).subject || ""
    }, ...prev]);
  }
  var regs = store.regsFor(act.id).filter(r => r.document.status !== "無需" && r.status !== "取消");
  var counts = {
    全部: regs.length,
    待審: regs.filter(r => r.document.status === "待審").length,
    缺件: regs.filter(r => r.document.status === "缺件").length,
    通過: regs.filter(r => r.document.status === "通過").length,
    退回: regs.filter(r => r.document.status === "退回").length
  };
  var filtered = regs.filter(r => tab === "全部" || r.document.status === tab);
  function setDoc(r, status, text, extra = {}) {
    store.updateReg(r.id, x => ({
      document: {
        ...x.document,
        status,
        ...extra
      }
    }), text);
  }
  function approve(r) {
    setDoc(r, "通過", "補件審核通過");
    toast(`${r.registrants[0].name} 補件已通過`, "success");
  }
  function doReject() {
    setDoc(reject, "退回", `補件退回：${reason}`, {
      reject_reason: reason
    });
    logSend("補件提醒", "指定讀者", 1);
    toast(`已退回 ${reject.registrants[0].name} 的補件並通知`, "default");
    setReject(null);
    setReason("");
  }
  function remindOne(r) {
    logSend("補件提醒", "指定讀者", 1);
    store.updateReg(r.id, {}, "寄送補件提醒");
    toast(`已提醒 ${r.registrants[0].name} 上傳`, "success");
  }
  function remindAll() {
    var targets = regs.filter(r => r.document.status === "缺件");
    if (!targets.length) {
      toast("目前沒有缺件的讀者", "default");
      return;
    }
    targets.forEach(r => store.updateReg(r.id, {}, "寄送補件提醒"));
    logSend("補件提醒", "缺件讀者", targets.length);
    toast(`已通知 ${targets.length} 位缺件讀者`, "success");
  }
  if (!act.doc_required) {
    return React.createElement(Card, null, React.createElement(Empty, {
      icon: "doc",
      title: "這個活動沒有要求上傳證明文件",
      sub: "需要讀者報名後上傳學生證、同意書等文件時，到「編輯活動 › 報名設定」開啟「報名後需要上傳證明文件」"
    }), !store.isField && React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: -30,
        paddingBottom: 20
      }
    }, React.createElement(Button, {
      variant: "ghost",
      icon: "edit",
      onClick: () => navigate("activity-edit", {
        id: act.id,
        step: 1
      })
    }, "到報名設定開啟")));
  }
  return React.createElement("div", null, React.createElement("div", {
    className: "info-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "doc",
    size: 15
  }), React.createElement("span", {
    style: {
      flex: 1
    }
  }, React.createElement("b", null, "要上傳的文件："), act.doc_note || "（尚未填寫說明）", "\u3000", React.createElement("span", {
    className: "muted"
  }, "報名後 ", act.doc_deadline_days, " 天內；系統於期限前 ", remindDays, " 天自動寄一次提醒")), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "clock",
    onClick: () => {
      setDl({
        days: act.doc_deadline_days,
        note: act.doc_note
      });
      setDeadlineOpen(true);
    }
  }, "補件設定")), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("div", {
    className: "table-toolbar",
    style: {
      justifyContent: "space-between"
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      overflowX: "auto"
    }
  }, React.createElement(Tabs, {
    tabs: ["全部", "待審", "缺件", "通過", "退回"].map(s => ({
      id: s,
      label: s,
      count: counts[s]
    })),
    active: tab,
    onChange: setTab
  })), React.createElement(Button, {
    variant: "soft",
    size: "sm",
    icon: "mail",
    disabled: !counts.缺件,
    onClick: remindAll
  }, "通知全部缺件讀者", counts.缺件 ? `（${counts.缺件}）` : "")), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "報名編號"), React.createElement("th", null, "姓名"), React.createElement("th", null, "場次"), React.createElement("th", null, "補件狀態"), React.createElement("th", null, "上傳時間"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, filtered.map(r => React.createElement("tr", {
    key: r.id
  }, React.createElement("td", {
    className: "mono",
    style: {
      fontWeight: 600
    }
  }, r.reg_no), React.createElement("td", null, r.registrants[0].name), React.createElement("td", {
    className: "cell-muted"
  }, act.sessions.find(s => s.id === r.session_id)?.label), React.createElement("td", null, React.createElement(Badge, null, r.document.status)), React.createElement("td", {
    className: "cell-muted num"
  }, r.document.uploaded_at || "—"), React.createElement("td", null, React.createElement("div", {
    className: "row-actions"
  }, r.document.uploaded_at && React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    icon: "eye",
    onClick: () => setPreview(r)
  }, "查看"), (r.document.status === "待審" || r.document.status === "退回") && React.createElement(Button, {
    variant: "soft",
    size: "sm",
    onClick: () => approve(r)
  }, "通過"), r.document.status === "待審" && React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => setReject(r)
  }, "退回"), r.document.status === "缺件" && React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    icon: "mail",
    onClick: () => remindOne(r)
  }, "提醒")))))))), filtered.length === 0 && React.createElement(Empty, {
    icon: "doc",
    title: "沒有符合條件的補件"
  })), React.createElement(Modal, {
    open: !!reject,
    onClose: () => {
      setReject(null);
      setReason("");
    },
    title: "退回補件",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setReject(null);
        setReason("");
      }
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      disabled: !reason.trim(),
      onClick: doReject
    }, "確認退回"))
  }, reject && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5
    }
  }, "退回「", React.createElement("b", null, reject.registrants[0].name), "」（", reject.reg_no, "）的補件，並通知讀者重新上傳。"), React.createElement(Field, {
    label: "退件說明",
    required: true,
    hint: "讀者會在通知信裡看到這段說明，才知道要重傳什麼；點下方常用原因可直接帶入，再視需要補充"
  }, React.createElement("div", {
    className: "quick-reasons"
  }, ["文件模糊不清，請重新拍攝或掃描", "文件不完整或缺頁", "文件已過期，請提供有效期限內的證明", "上傳的不是本活動要求的文件"].map(t => React.createElement("button", {
    key: t,
    type: "button",
    className: "chip",
    onClick: () => setReason(r => r ? r + "\n" + t : t)
  }, t))), React.createElement(Textarea, {
    value: reason,
    onChange: setReason,
    rows: 3,
    placeholder: "請說明退件原因，例如：證明文件模糊不清、缺少日期…"
  })))), React.createElement(Modal, {
    open: !!preview,
    onClose: () => setPreview(null),
    width: 620,
    title: preview ? `補件預覽 — ${preview.registrants[0].name}` : "補件預覽",
    footer: preview && React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setPreview(null)
    }, "關閉"), React.createElement(Button, {
      variant: "ghost",
      icon: "download",
      onClick: () => toast("已下載附件", "success")
    }, "下載"), preview.document.status === "待審" && React.createElement(Button, {
      variant: "danger",
      onClick: () => {
        setReject(preview);
        setPreview(null);
      }
    }, "退回"), (preview.document.status === "待審" || preview.document.status === "退回") && React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        approve(preview);
        setPreview(null);
      }
    }, "審核通過"))
  }, preview && React.createElement(React.Fragment, null, React.createElement("dl", {
    className: "kv",
    style: {
      marginBottom: 14
    }
  }, React.createElement("dt", null, "報名編號"), React.createElement("dd", {
    className: "mono"
  }, preview.reg_no), React.createElement("dt", null, "檔案"), React.createElement("dd", null, "證明文件_", preview.reg_no, ".pdf", React.createElement("span", {
    className: "muted",
    style: {
      marginLeft: 8,
      fontSize: 12
    }
  }, "PDF · 1.2 MB")), React.createElement("dt", null, "上傳時間"), React.createElement("dd", {
    className: "num"
  }, preview.document.uploaded_at), React.createElement("dt", null, "目前狀態"), React.createElement("dd", null, React.createElement(Badge, null, preview.document.status))), React.createElement("div", {
    className: "preview-frame"
  }, React.createElement(Icon, {
    name: "doc",
    size: 34
  }), React.createElement("div", {
    className: "preview-frame-title"
  }, "證明文件_", preview.reg_no, ".pdf"), React.createElement("div", {
    className: "preview-frame-sub"
  }, "此處顯示上傳檔案內容（圖片直接顯示，PDF 以內嵌檢視器開啟）")))), React.createElement(Modal, {
    open: deadlineOpen,
    onClose: () => setDeadlineOpen(false),
    title: "本活動的補件設定",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDeadlineOpen(false)
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: saveDeadline
    }, "儲存"))
  }, React.createElement(Field, {
    label: "要上傳什麼文件",
    hint: "會出現在報名成功通知信與前台的上傳入口"
  }, React.createElement(Textarea, {
    value: dl.note,
    onChange: v => setDl({
      ...dl,
      note: v
    }),
    rows: 3
  })), React.createElement(Field, {
    label: "繳交期限（報名後幾天內）",
    hint: "彈性期限：逾期不會自動取消報名，由館方通知提醒後決定怎麼處理"
  }, React.createElement(Input, {
    type: "number",
    value: dl.days,
    onChange: v => setDl({
      ...dl,
      days: v
    }),
    style: {
      maxWidth: 140
    }
  })), React.createElement("div", {
    className: "info-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "提醒信在期限前 ", remindDays, " 天由系統自動寄出，天數是全站設定", store.isAdmin ? React.createElement(React.Fragment, null, "，可到 ", React.createElement("a", {
    onClick: () => {
      setDeadlineOpen(false);
      navigate("settings", {
        tab: "notify"
      });
    }
  }, "系統設定 › 通知設定"), " 調整") : "，由系統管理員調整", "。"))));
}
function NotifyTab({
  act,
  preset,
  navigate
}) {
  var store = useStore();
  var toast = useToast();
  var [target, setTarget] = useState(preset && preset.length ? "指定讀者" : "正取");
  var [picked, setPicked] = useState(preset && preset.length ? preset : []);
  var [channel, setChannel] = useState("Email");
  var [subject, setSubject] = useState("");
  var [body, setBody] = useState("");
  var regs = store.regsFor(act.id);
  var applicable = store.notifTemplates.filter(t => t.enabled && (t.apply_scope !== "指定活動" || (t.apply_activities || []).includes(act.id)));
  var [tpl, setTpl] = useState(applicable[0]?.id || "");
  var pickable = regs.filter(r => r.status !== "取消");
  var targetCount = target === "指定讀者" ? picked.length : target === "全部報名者" ? pickable.length : regs.filter(r => r.status === target).length;
  React.useEffect(() => {
    var t = store.notifTemplates.find(x => x.id === tpl);
    if (t) {
      setSubject(t.subject);
      setBody(t.body);
      setChannel(t.channel);
    }
  }, [tpl]);
  var smsBlocked = channel === "簡訊" && !store.settings.notify.sms_enabled;
  var log = store.notifLog.filter(l => l.activity_id === act.id);
  var tplName = (store.notifTemplates.find(x => x.id === tpl) || {}).name || "自訂內容";
  function togglePick(id) {
    setPicked(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  }
  function addLog(entry) {
    store.setNotifLog(prev => [{
      id: "nl-" + Math.random().toString(36).slice(2, 7),
      activity_id: act.id,
      at: nowStamp(),
      by: store.currentUser.name,
      ...entry
    }, ...prev]);
  }
  var [sendOpen, setSendOpen] = useState(false);
  function trySend() {
    if (smsBlocked) {
      toast("簡訊功能未啟用，無法發送", "danger");
      return;
    }
    if (targetCount === 0) {
      toast("尚未選擇收件者", "danger");
      return;
    }
    if (targetCount > 1) setSendOpen(true);else send();
  }
  function send() {
    setSendOpen(false);
    addLog({
      template: tplName,
      channel,
      target,
      count: targetCount,
      subject: channel === "Email" ? subject : ""
    });
    if (target === "指定讀者") picked.forEach(id => store.updateReg(id, {}, `收到館員群發通知：${tplName}`));
    toast(target === "指定讀者" ? `已向指定的 ${targetCount} 位讀者發送通知` : `已向 ${targetCount} 位${target}讀者發送通知`, "success");
  }
  function resend(l) {
    addLog({
      template: l.template,
      channel: l.channel,
      target: l.target,
      count: l.count,
      subject: l.subject,
      resend: true
    });
    toast(`已重發「${l.template}」給 ${l.count} 位讀者`, "success");
  }
  var autoList = (store.settings.notify.events || []).map(ev => {
    var tpls = store.notifTemplates.filter(t => t.event === ev.event && t.enabled && (t.apply_scope !== "指定活動" || (t.apply_activities || []).includes(act.id)));
    var email = ev.email && tpls.some(t => t.channel === "Email");
    var sms = ev.sms && store.settings.notify.sms_enabled && tpls.some(t => t.channel === "簡訊");
    if (ev.event === "繳費提醒" && act.fee === 0) return null;
    if (ev.event === "補件提醒" && !act.doc_required) return null;
    return {
      event: ev.event,
      email,
      sms,
      on: email || sms
    };
  }).filter(Boolean);
  return React.createElement("div", null, React.createElement("div", {
    className: "row detail-cols",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement(Card, {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("h3", {
    className: "section-title"
  }, "群發通知"), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "收件對象"
  }, React.createElement(Select, {
    value: target,
    onChange: v => {
      setTarget(v);
      if (v !== "指定讀者") setPicked([]);
    },
    options: ["正取", "備取", "待回覆", "全部報名者", "指定讀者"]
  })), React.createElement(Field, {
    label: "套用範本",
    hint: "只列出啟用中且適用本活動的範本"
  }, React.createElement(Select, {
    value: tpl,
    onChange: setTpl,
    options: applicable.map(t => ({
      value: t.id,
      label: t.name
    }))
  }))), target === "指定讀者" && React.createElement(Field, {
    label: "選擇要發送的讀者",
    hint: "可只勾選其中幾位單獨發送；從報名名單勾選後按「通知已選」也會直接帶到這裡"
  }, React.createElement("div", {
    className: "picker-toolbar"
  }, React.createElement(Checkbox, {
    label: "全選",
    checked: picked.length === pickable.length && pickable.length > 0,
    onChange: () => setPicked(picked.length === pickable.length ? [] : pickable.map(r => r.id))
  }), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "已選 ", picked.length, " / ", pickable.length)), React.createElement("div", {
    className: "picker-list"
  }, pickable.map(r => React.createElement("label", {
    key: r.id,
    className: "picker-row" + (picked.includes(r.id) ? " on" : "")
  }, React.createElement(Checkbox, {
    checked: picked.includes(r.id),
    onChange: () => togglePick(r.id),
    label: ""
  }), React.createElement("span", {
    className: "picker-name"
  }, r.registrants[0].name), React.createElement("span", {
    className: "mono picker-no"
  }, r.reg_no), React.createElement(Badge, null, r.status), React.createElement("span", {
    className: "picker-mail"
  }, r.registrants[0].email))))), React.createElement(Field, {
    label: "通道"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      maxWidth: 320
    }
  }, React.createElement(Radio, {
    label: "Email",
    checked: channel === "Email",
    onChange: () => setChannel("Email")
  }), React.createElement(Radio, {
    label: "簡訊",
    checked: channel === "簡訊",
    onChange: () => setChannel("簡訊")
  }))), smsBlocked && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "簡訊通知尚未啟用，實際不會發送。", store.isAdmin ? React.createElement(React.Fragment, null, "請至 ", React.createElement("a", {
    onClick: () => navigate("settings", {
      tab: "notify"
    })
  }, "系統設定 › 通知設定"), " 開啟。") : "請洽系統管理員到「系統設定 › 通知設定」開啟。")), channel === "Email" && React.createElement(Field, {
    label: "主旨"
  }, React.createElement(Input, {
    value: subject,
    onChange: setSubject
  })), React.createElement(Field, {
    label: "內容",
    hint: "可使用變數：{{name}} {{activity_name}} {{session_time}} {{place}} {{reg_no}} {{amount}}；在這裡改的內容只影響這一次發送，不會改到通用範本"
  }, React.createElement(Textarea, {
    value: body,
    onChange: setBody,
    rows: 7
  })), React.createElement("div", {
    className: "between"
  }, React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12.5
    }
  }, "將發送給 ", React.createElement("b", {
    style: {
      color: "var(--text-primary)"
    }
  }, targetCount), " 位讀者"), React.createElement(Button, {
    variant: "primary",
    icon: "mail",
    onClick: trySend,
    disabled: smsBlocked
  }, "發送通知")), React.createElement(Modal, {
    open: sendOpen,
    onClose: () => setSendOpen(false),
    title: "確認發送",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setSendOpen(false)
    }, "再檢查一下"), React.createElement(Button, {
      variant: "primary",
      icon: "mail",
      onClick: send
    }, "確認發送給 ", targetCount, " 位"))
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "將以", channel, "寄出「", React.createElement("b", null, tplName), "」給 ", React.createElement("b", null, targetCount), " 位", target === "指定讀者" ? "指定的讀者" : target === "全部報名者" ? "報名者" : target + "讀者", "。寄出後無法收回，請先確認右側預覽的內容。"))), React.createElement("div", {
    className: "detail-side",
    style: {
      width: 300,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "預覽"), React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      background: "var(--bg)",
      padding: "10px 12px",
      fontSize: 12,
      borderBottom: "1px solid var(--border)"
    }
  }, React.createElement("div", {
    className: "muted"
  }, "寄件者：圖書館活動通知"), channel === "Email" && React.createElement("div", {
    style: {
      fontWeight: 600,
      marginTop: 2
    }
  }, (subject || "（無主旨）").replace(/{{activity_name}}/g, act.name))), React.createElement("div", {
    style: {
      padding: 12,
      fontSize: 12.5,
      lineHeight: 1.7,
      whiteSpace: "pre-line",
      color: "var(--text-secondary)"
    }
  }, (body || "（無內容）").replace(/{{activity_name}}/g, act.name).replace(/{{name}}/g, "王小明").replace(/{{reg_no}}/g, "R0001").replace(/{{session_time}}/g, `${act.sessions[0]?.date || ""} ${act.sessions[0]?.time || ""}`).replace(/{{place}}/g, act.sessions[0]?.place || "").replace(/{{amount}}/g, act.fee).replace(/{{[^}]+}}/g, "—")))), React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "這個活動會自動寄的通知"), React.createElement("div", {
    className: "stack",
    style: {
      gap: 6
    }
  }, autoList.map(a => React.createElement("div", {
    key: a.event,
    className: "between",
    style: {
      fontSize: 12.5
    }
  }, React.createElement("span", {
    style: {
      color: a.on ? "var(--text-primary)" : "var(--text-tertiary)"
    }
  }, a.event), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11.5
    }
  }, a.on ? [a.email && "Email", a.sms && "簡訊"].filter(Boolean).join("＋") : "關閉")))), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "由系統依事件自動寄出，不需館員操作；", store.isAdmin ? React.createElement(React.Fragment, null, "開關在 ", React.createElement("a", {
    onClick: () => navigate("settings", {
      tab: "notify"
    })
  }, "系統設定 › 通知設定"), "，文案在通知範本") : "開關與文案由系統管理員維護", "。")))), React.createElement(Card, {
    style: {
      marginTop: 18,
      padding: 0
    }
  }, React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderBottom: "1px solid var(--border)"
    },
    className: "between"
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "發送紀錄"), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, log.length, " 筆")), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    className: "num"
  }, "時間"), React.createElement("th", null, "範本"), React.createElement("th", null, "對象"), React.createElement("th", null, "人數"), React.createElement("th", null, "通道"), React.createElement("th", null, "發送者"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, log.length === 0 && React.createElement("tr", null, React.createElement("td", {
    colSpan: 7
  }, React.createElement("div", {
    className: "muted",
    style: {
      padding: "12px 0",
      textAlign: "center"
    }
  }, "尚無發送紀錄"))), log.map(l => React.createElement("tr", {
    key: l.id
  }, React.createElement("td", {
    className: "num cell-muted"
  }, l.at), React.createElement("td", null, l.template, l.resend && React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11,
      marginLeft: 6
    }
  }, "重發")), React.createElement("td", {
    className: "cell-muted"
  }, l.target), React.createElement("td", {
    className: "num"
  }, l.count), React.createElement("td", null, React.createElement(Badge, {
    tone: l.channel === "Email" ? "blue" : "amber"
  }, l.channel)), React.createElement("td", {
    className: "cell-muted"
  }, l.by), React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    icon: "mail",
    onClick: () => resend(l)
  }, "重發")))))))));
}
Object.assign(window, {
  CheckinTab,
  DocumentsTab,
  NotifyTab,
  CHECKIN_MODES
});
var {
  useState,
  useEffect,
  useRef
} = React;
function BlacklistPage({
  navigate
}) {
  var store = useStore();
  var toast = useToast();
  var [q, setQ] = useState("");
  var [statusF, setStatusF] = useState("");
  var [drawer, setDrawer] = useState(null);
  var [edit, setEdit] = useState(null);
  var [addOpen, setAddOpen] = useState(false);
  var [revoke, setRevoke] = useState(null);
  var V = store.settings.violation;
  var list = store.blacklist.filter(b => {
    if (q && !b.name_mask.includes(q) && !b.id_no_mask.toLowerCase().includes(q.toLowerCase())) return false;
    if (statusF === "停權中" && !b.is_suspended) return false;
    if (statusF === "正常" && b.is_suspended) return false;
    return true;
  });
  var drawerEntry = store.blacklist.find(b => b.id === drawer);
  var lastOf = b => [...b.violation_records].sort((x, y) => (y.recorded_at || "").localeCompare(x.recorded_at || ""))[0];
  function saveEdit(updated, note) {
    var before = store.blacklist.find(b => b.id === updated.id);
    var parts = [];
    if (before.total_points !== updated.total_points) parts.push(`點數 ${before.total_points} → ${updated.total_points}`);
    if (before.is_suspended !== updated.is_suspended) parts.push(updated.is_suspended ? `設為停權至 ${updated.suspended_until}` : "解除停權");else if (updated.is_suspended && before.suspended_until !== updated.suspended_until) parts.push(`停權到期日 ${before.suspended_until} → ${updated.suspended_until}`);
    if (parts.length === 0) {
      setEdit(null);
      return;
    }
    var logLine = {
      at: nowStamp(),
      who: store.currentUser.name,
      text: parts.join("；") + (note ? `：${note}` : "")
    };
    store.setBlacklist(prev => prev.map(b => b.id === updated.id ? {
      ...updated,
      adjust_log: [logLine, ...(b.adjust_log || [])]
    } : b));
    toast("已更新，並留下調整紀錄", "success");
    setEdit(null);
  }
  function doRevoke(reason) {
    var {
      entry,
      rec
    } = revoke;
    store.setBlacklist(prev => prev.map(b => {
      if (b.id !== entry.id) return b;
      var points = Math.max(0, b.total_points - rec.point);
      var next = store.withSuspend(b, points);
      var logLine = {
        at: nowStamp(),
        who: store.currentUser.name,
        text: `撤銷 1 筆記點（${rec.type}・${rec.activity_name}，-${rec.point} 點）${next.is_suspended === false && b.is_suspended ? "，點數低於門檻已自動解除停權" : ""}${reason ? `：${reason}` : ""}`
      };
      return {
        ...b,
        ...next,
        violation_records: b.violation_records.filter(v => v.id !== rec.id),
        adjust_log: [logLine, ...(b.adjust_log || [])]
      };
    }));
    toast("已撤銷這筆記點", "success");
    setRevoke(null);
  }
  function addEntry(entry) {
    var base = {
      id: "bl-" + Math.random().toString(36).slice(2, 6),
      id_no_mask: entry.id_no_mask,
      name_mask: entry.name_mask,
      total_points: 0,
      is_suspended: false,
      suspended_until: null,
      adjust_log: []
    };
    var rec = {
      id: "v-" + Math.random().toString(36).slice(2, 7),
      type: entry.type,
      point: entry.points,
      recorded_at: store.today,
      trigger: store.currentUser.name,
      activity_name: "（手動新增）",
      reason: entry.note || "館員手動加入"
    };
    store.setBlacklist(prev => [{
      ...base,
      ...store.withSuspend(base, entry.points),
      violation_records: [rec]
    }, ...prev]);
    toast("已加入黑名單", "success");
    setAddOpen(false);
  }
  return React.createElement("div", null, React.createElement(PageHeader, {
    title: "違規與黑名單",
    subtitle: `共 ${store.blacklist.length} 筆紀錄，其中 ${store.blacklist.filter(b => b.is_suspended).length} 人停權中`,
    actions: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      icon: "settings",
      onClick: () => navigate("settings", {
        tab: "violation"
      })
    }, "違規類型與規則"), React.createElement(Button, {
      variant: "danger",
      icon: "plus",
      onClick: () => setAddOpen(true)
    }, "手動加黑名單"))
  }), React.createElement("div", {
    className: "info-note",
    style: {
      marginBottom: 16
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "點數以", React.createElement("b", null, "個別身分證字號"), "為單位累計，同一家庭的成員分開計算；累計達 ", V.suspend_threshold, " 點自動停權 ", V.suspend_days, " 天（累計期間：", V.point_window, "）。詳細違規原因僅後台可見，前台不公開。")), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("div", {
    className: "table-toolbar"
  }, React.createElement("div", {
    className: "filter-item filter-grow"
  }, React.createElement(Input, {
    value: q,
    onChange: setQ,
    placeholder: "搜尋姓名或身分證字號…"
  })), React.createElement("div", {
    className: "filter-item"
  }, React.createElement(Select, {
    value: statusF,
    onChange: setStatusF,
    placeholder: "全部狀態",
    options: ["正常", "停權中"]
  }))), React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "身分證（遮罩）"), React.createElement("th", null, "姓名（遮罩）"), React.createElement("th", null, "違規點數"), React.createElement("th", null, "停權狀態"), React.createElement("th", null, "停權到期日"), React.createElement("th", null, "最近違規"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, list.map(b => {
    var last = lastOf(b);
    return React.createElement("tr", {
      key: b.id,
      className: "clickable",
      onClick: () => setDrawer(b.id)
    }, React.createElement("td", {
      className: "mono cell-muted"
    }, b.id_no_mask), React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, b.name_mask), React.createElement("td", null, React.createElement("span", {
      className: "num",
      style: {
        fontWeight: 700,
        color: b.total_points >= V.suspend_threshold ? "var(--danger)" : "var(--text-primary)"
      }
    }, b.total_points), " ", React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 11
      }
    }, "/ ", V.suspend_threshold, " 點")), React.createElement("td", null, b.is_suspended ? React.createElement(Badge, null, "停權中") : React.createElement(Badge, {
      tone: "green"
    }, "正常")), React.createElement("td", {
      className: "cell-muted num"
    }, b.suspended_until || "—"), React.createElement("td", {
      className: "cell-muted",
      style: {
        fontSize: 12
      }
    }, last ? React.createElement(React.Fragment, null, last.recorded_at, "\u3000", last.type, "・", last.activity_name) : "—"), React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "row-actions"
    }, React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      icon: "eye",
      onClick: () => setDrawer(b.id)
    }, "詳情"), React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      icon: "edit",
      onClick: () => setEdit(JSON.parse(JSON.stringify(b)))
    }, "調整"))));
  })))), list.length === 0 && React.createElement(Empty, {
    icon: "alert",
    title: "沒有符合條件的紀錄"
  })), React.createElement(Drawer, {
    open: !!drawer,
    onClose: () => setDrawer(null),
    width: 520,
    title: drawerEntry ? React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, drawerEntry.name_mask, drawerEntry.is_suspended ? React.createElement(Badge, null, "停權中") : React.createElement(Badge, {
      tone: "green"
    }, "正常")) : "違規詳情",
    subtitle: drawerEntry ? `身分證 ${drawerEntry.id_no_mask}` : "",
    footer: drawerEntry && React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDrawer(null)
    }, "關閉"), React.createElement(Button, {
      variant: "primary",
      icon: "edit",
      onClick: () => {
        setEdit(JSON.parse(JSON.stringify(drawerEntry)));
      }
    }, "調整點數／停權"))
  }, drawerEntry && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "row",
    style: {
      gap: 12,
      marginBottom: 18
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--bg)",
      borderRadius: 8,
      padding: "12px 14px"
    }
  }, React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "累計違規點數（門檻 ", V.suspend_threshold, "）"), React.createElement("div", {
    className: "num",
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: drawerEntry.total_points >= V.suspend_threshold ? "var(--danger)" : "var(--text-primary)"
    }
  }, drawerEntry.total_points)), React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--bg)",
      borderRadius: 8,
      padding: "12px 14px"
    }
  }, React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "停權到期"), React.createElement("div", {
    className: "num",
    style: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 6
    }
  }, drawerEntry.suspended_until || "—"))), React.createElement(Section, {
    title: "違規記錄"
  }, React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "日期"), React.createElement("th", null, "活動"), React.createElement("th", null, "類型"), React.createElement("th", null, "點數"), React.createElement("th", null, "記錄"), React.createElement("th", null))), React.createElement("tbody", null, drawerEntry.violation_records.length === 0 && React.createElement("tr", null, React.createElement("td", {
    colSpan: 6
  }, React.createElement("div", {
    className: "muted",
    style: {
      textAlign: "center",
      padding: "8px 0"
    }
  }, "目前沒有記點"))), drawerEntry.violation_records.map(v => React.createElement("tr", {
    key: v.id
  }, React.createElement("td", {
    className: "cell-muted num"
  }, v.recorded_at), React.createElement("td", {
    style: {
      fontSize: 12
    }
  }, v.activity_name, React.createElement("div", {
    className: "cell-muted",
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, v.reason)), React.createElement("td", null, React.createElement(Badge, null, v.type)), React.createElement("td", {
    className: "num"
  }, "+", v.point), React.createElement("td", null, React.createElement(Badge, {
    tone: v.trigger === "系統自動" ? "blue" : "gray"
  }, v.trigger)), React.createElement("td", null, React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    icon: "undo",
    onClick: () => setRevoke({
      entry: drawerEntry,
      rec: v
    })
  }, "撤銷"))))))), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 8
    }
  }, "讀者事後提出正當理由（例如就醫證明）時，按「撤銷」把那一筆拿掉，點數會自動扣回並重新判斷停權。")), React.createElement(Section, {
    title: "調整紀錄"
  }, (drawerEntry.adjust_log || []).length === 0 ? React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "沒有人工調整過") : React.createElement("div", {
    className: "timeline"
  }, drawerEntry.adjust_log.map((h, i) => React.createElement("div", {
    key: i,
    className: "tl-item"
  }, React.createElement("div", {
    className: "tl-dot"
  }), React.createElement("div", {
    className: "tl-body"
  }, React.createElement("div", {
    className: "tl-text"
  }, h.text), React.createElement("div", {
    className: "tl-meta num"
  }, h.at, " · ", h.who)))))), React.createElement("div", {
    className: "warn-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "詳細違規原因後台可見，前台不公開。讀者僅能於「我的報名」看到違規點數與帳號狀態。")))), edit && React.createElement(BlacklistEditModal, {
    entry: edit,
    onClose: () => setEdit(null),
    onSave: saveEdit
  }), addOpen && React.createElement(BlacklistAddModal, {
    onClose: () => setAddOpen(false),
    onAdd: addEntry
  }), revoke && React.createElement(RevokeModal, {
    data: revoke,
    onClose: () => setRevoke(null),
    onConfirm: doRevoke
  }));
}
function RevokeModal({
  data,
  onClose,
  onConfirm
}) {
  var [reason, setReason] = useState("");
  var {
    entry,
    rec
  } = data;
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: "撤銷這筆記點",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      onClick: () => onConfirm(reason.trim())
    }, "確認撤銷"))
  }, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "撤銷「", React.createElement("b", null, entry.name_mask), "」在 ", rec.recorded_at, "「", rec.activity_name, "」的 ", React.createElement("b", null, rec.type, " +", rec.point), "。點數會由 ", entry.total_points, " 扣回為 ", Math.max(0, entry.total_points - rec.point), "，並依門檻重新判斷是否停權。"), React.createElement(Field, {
    label: "原因（選填）",
    hint: "會寫進調整紀錄；不填也可以，系統仍會記下誰在什麼時候撤銷了哪一筆"
  }, React.createElement(Textarea, {
    value: reason,
    onChange: setReason,
    rows: 2,
    placeholder: "例如：讀者事後提出就醫證明"
  })));
}
function BlacklistEditModal({
  entry,
  onClose,
  onSave
}) {
  var store = useStore();
  var V = store.settings.violation;
  var [points, setPoints] = useState(entry.total_points);
  var [suspended, setSuspended] = useState(entry.is_suspended);
  var [until, setUntil] = useState(entry.suspended_until || window.DB.addDays(store.today, V.suspend_days));
  var [note, setNote] = useState("");
  function changePoints(n) {
    var v = Math.max(0, n);
    setPoints(v);
    if (v >= V.suspend_threshold && !suspended) setSuspended(true);
    if (v < V.suspend_threshold && suspended) setSuspended(false);
  }
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: `調整違規 — ${entry.name_mask}`,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: () => onSave({
        ...entry,
        total_points: Number(points),
        is_suspended: suspended,
        suspended_until: suspended ? until : null
      }, note.trim())
    }, "儲存"))
  }, React.createElement(Field, {
    label: "違規點數",
    hint: `累計達 ${V.suspend_threshold} 點自動停權；要拿掉某一筆記點，到詳情裡按該筆的「撤銷」比較清楚`
  }, React.createElement("div", {
    className: "stepper"
  }, React.createElement("button", {
    type: "button",
    className: "stepper-btn",
    onClick: () => changePoints(Number(points) - 1),
    "aria-label": "減 1 點"
  }, "−"), React.createElement(Input, {
    type: "number",
    value: points,
    onChange: v => changePoints(Number(v)),
    style: {
      width: 80,
      textAlign: "center"
    }
  }), React.createElement("button", {
    type: "button",
    className: "stepper-btn",
    onClick: () => changePoints(Number(points) + 1),
    "aria-label": "加 1 點"
  }, "＋"))), React.createElement("div", {
    className: "between",
    style: {
      padding: "8px 0",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      margin: "6px 0 14px"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "停權中"), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5
    }
  }, "停權期間無法報名任何活動；關閉即解除停權")), React.createElement(Toggle, {
    checked: suspended,
    onChange: setSuspended
  })), suspended && React.createElement(Field, {
    label: "停權到期日",
    hint: `系統預設停權 ${V.suspend_days} 天`
  }, React.createElement(Input, {
    type: "date",
    value: until,
    onChange: setUntil,
    style: {
      maxWidth: 200
    }
  })), React.createElement(Field, {
    label: "備註（選填）",
    hint: "儲存時系統會自動記下誰在什麼時候改了什麼，備註只是補充說明"
  }, React.createElement(Textarea, {
    value: note,
    onChange: setNote,
    rows: 2,
    placeholder: "例如：讀者來電說明，主管同意免記"
  })));
}
function BlacklistAddModal({
  onClose,
  onAdd
}) {
  var store = useStore();
  var V = store.settings.violation;
  var types = (store.settings.violationTypes || []).filter(t => t.active);
  var manual = types.filter(t => !t.auto);
  var [idMask, setIdMask] = useState("");
  var [name, setName] = useState("");
  var [typeId, setTypeId] = useState((manual[0] || types[0] || {}).id || "");
  var t = types.find(x => x.id === typeId);
  var [points, setPoints] = useState(t ? t.point : 1);
  var [note, setNote] = useState("");
  var willSuspend = Number(points) >= V.suspend_threshold;
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: "手動加入黑名單",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "danger",
      disabled: !idMask || !name,
      onClick: () => onAdd({
        id_no_mask: idMask,
        name_mask: maskName(name),
        type: t ? t.name : "違規",
        points: Number(points),
        note
      })
    }, "加入黑名單"))
  }, React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "身分證字號",
    required: true
  }, React.createElement(Input, {
    value: idMask,
    onChange: setIdMask,
    placeholder: "A123456789"
  })), React.createElement(Field, {
    label: "姓名",
    required: true
  }, React.createElement(Input, {
    value: name,
    onChange: setName,
    placeholder: "王小明"
  }))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "違規類型"
  }, React.createElement(Select, {
    value: typeId,
    onChange: v => {
      setTypeId(v);
      var x = types.find(y => y.id === v);
      if (x) setPoints(x.point);
    },
    options: types.map(x => ({
      value: x.id,
      label: `${x.name}（${x.point} 點）`
    }))
  })), React.createElement(Field, {
    label: "記點數"
  }, React.createElement(Input, {
    type: "number",
    value: points,
    onChange: setPoints,
    style: {
      maxWidth: 140
    }
  }))), React.createElement(Field, {
    label: "違規說明（選填）"
  }, React.createElement(Textarea, {
    value: note,
    onChange: setNote,
    rows: 2,
    placeholder: "記錄違規事由，只有後台看得到"
  })), React.createElement("div", {
    className: willSuspend ? "danger-note" : "info-note"
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, willSuspend ? `點數已達停權門檻 ${V.suspend_threshold} 點，加入後立即停權 ${V.suspend_days} 天。` : `加入後立即生效；累計達 ${V.suspend_threshold} 點才會停權。`)));
}
function NotificationsPage() {
  var store = useStore();
  var toast = useToast();
  var [drawer, setDrawer] = useState(null);
  var editing = store.notifTemplates.find(t => t.id === drawer);
  function toggleEnabled(id, val) {
    store.setNotifTemplates(prev => prev.map(t => t.id === id ? {
      ...t,
      enabled: val
    } : t));
  }
  function save(updated) {
    store.setNotifTemplates(prev => prev.map(t => t.id === updated.id ? updated : t));
    toast("範本已儲存", "success");
    setDrawer(null);
  }
  return React.createElement("div", null, React.createElement(PageHeader, {
    title: "通知範本",
    subtitle: "管理各觸發事件的 Email／簡訊通知內容"
  }), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "範本名稱"), React.createElement("th", null, "觸發事件"), React.createElement("th", null, "適用活動"), React.createElement("th", null, "通道"), React.createElement("th", null, "狀態"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, store.notifTemplates.map(t => {
    var smsOff = t.channel === "簡訊" && !store.settings.notify.sms_enabled;
    var names = (t.apply_activities || []).map(id => store.getActivity(id)?.name).filter(Boolean);
    return React.createElement("tr", {
      key: t.id,
      className: "clickable",
      onClick: () => setDrawer(t.id)
    }, React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, t.name), React.createElement("td", {
      className: "cell-muted"
    }, t.event), React.createElement("td", {
      className: "cell-muted"
    }, t.apply_scope === "全部活動" ? React.createElement(Badge, {
      tone: "gray"
    }, "全部活動") : React.createElement("span", {
      title: names.join("、")
    }, names.length ? `${names.length} 個指定活動` : "未指定")), React.createElement("td", null, React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center"
      }
    }, React.createElement(Badge, {
      tone: t.channel === "Email" ? "blue" : "amber"
    }, t.channel), smsOff && React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 11
      }
    }, "未啟用"))), React.createElement("td", {
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, React.createElement(Toggle, {
      checked: t.enabled,
      onChange: v => toggleEnabled(t.id, v)
    }), React.createElement("span", {
      className: "muted",
      style: {
        fontSize: 12
      }
    }, t.enabled ? "啟用" : "停用"))), React.createElement("td", {
      onClick: e => e.stopPropagation(),
      style: {
        textAlign: "right"
      }
    }, React.createElement(Button, {
      variant: "subtle",
      size: "sm",
      icon: "edit",
      onClick: () => setDrawer(t.id)
    }, "編輯")));
  }))))), editing && React.createElement(NotifTemplateDrawer, {
    tpl: JSON.parse(JSON.stringify(editing)),
    onClose: () => setDrawer(null),
    onSave: save,
    smsEnabled: store.settings.notify.sms_enabled,
    activities: store.activities
  }));
}
function NotifTemplateDrawer({
  tpl,
  onClose,
  onSave,
  smsEnabled,
  activities
}) {
  var [t, setT] = useState(tpl);
  var set = (k, v) => setT(x => ({
    ...x,
    [k]: v
  }));
  var smsOff = t.channel === "簡訊" && !smsEnabled;
  var applyList = t.apply_activities || [];
  function toggleAct(id) {
    set("apply_activities", applyList.includes(id) ? applyList.filter(x => x !== id) : [...applyList, id]);
  }
  return React.createElement(Drawer, {
    open: true,
    onClose: onClose,
    title: "編輯通知範本",
    subtitle: t.name,
    width: 520,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      onClick: () => onSave(t)
    }, "儲存範本"))
  }, React.createElement(Field, {
    label: "範本名稱"
  }, React.createElement(Input, {
    value: t.name,
    onChange: v => set("name", v)
  })), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "觸發事件"
  }, React.createElement(Select, {
    value: t.event,
    onChange: v => set("event", v),
    options: ["報名成功", "候補通知", "遞補轉正", "繳費提醒", "行前通知", "取消通知", "補件提醒"]
  })), React.createElement(Field, {
    label: "通道"
  }, React.createElement(Select, {
    value: t.channel,
    onChange: v => set("channel", v),
    options: ["Email", "簡訊"]
  }))), React.createElement(Field, {
    label: "適用活動",
    hint: "套用到個別活動後，可在該活動內單獨修改，不影響這份通用範本"
  }, React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      maxWidth: 360,
      marginBottom: 8
    }
  }, React.createElement(Radio, {
    label: "全部活動",
    checked: t.apply_scope === "全部活動",
    onChange: () => set("apply_scope", "全部活動")
  }), React.createElement(Radio, {
    label: "指定活動",
    checked: t.apply_scope === "指定活動",
    onChange: () => set("apply_scope", "指定活動")
  })), t.apply_scope === "指定活動" && React.createElement("div", {
    className: "picker-list",
    style: {
      maxHeight: 180
    }
  }, activities.map(a => React.createElement("label", {
    key: a.id,
    className: "picker-row" + (applyList.includes(a.id) ? " on" : "")
  }, React.createElement(Checkbox, {
    checked: applyList.includes(a.id),
    onChange: () => toggleAct(a.id),
    label: ""
  }), React.createElement("span", {
    className: "picker-name"
  }, a.name), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11.5
    }
  }, a.branch))))), smsOff && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "簡訊通知尚未啟用時不會實際發送，僅儲存範本內容。")), t.channel === "Email" && React.createElement(Field, {
    label: "主旨"
  }, React.createElement(Input, {
    value: t.subject,
    onChange: v => set("subject", v)
  })), React.createElement(Field, {
    label: "內容",
    hint: "可用變數：{{name}} {{activity_name}} {{session_time}} {{place}} {{reg_no}} {{amount}} {{reply_deadline}} {{payment_deadline}} {{document_deadline}}"
  }, React.createElement(Textarea, {
    value: t.body,
    onChange: v => set("body", v),
    rows: 8
  })), React.createElement("div", {
    className: "between",
    style: {
      padding: "10px 0",
      borderTop: "1px solid var(--border)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "啟用此範本"), React.createElement(Toggle, {
    checked: t.enabled,
    onChange: v => set("enabled", v)
  })));
}
window.BlacklistPage = BlacklistPage;
window.NotificationsPage = NotificationsPage;
var {
  useState,
  useEffect,
  useRef
} = React;
function SettingsPage({
  initialTab
}) {
  var store = useStore();
  var toast = useToast();
  var [tab, setTab] = useState(initialTab || "violation");
  var [s, setS] = useState(() => JSON.parse(JSON.stringify(store.settings)));
  var [staffModal, setStaffModal] = useState(null);
  var tabs = [{
    id: "violation",
    label: "違規與停權"
  }, {
    id: "quota",
    label: "報名名額"
  }, {
    id: "notify",
    label: "通知設定"
  }, {
    id: "meta",
    label: "館別與類別"
  }, {
    id: "staff",
    label: "帳號管理"
  }, {
    id: "security",
    label: "角色權限與安全"
  }];
  function save() {
    if ((s.violationTypes || []).some(t => !t.name.trim())) {
      setTab("violation");
      toast("違規類型名稱不能空白", "danger");
      return;
    }
    store.setSettings(cur => ({
      ...s,
      staff: cur.staff
    }));
    toast("設定已儲存", "success");
  }
  var setNum = (group, key, v) => setS(x => ({
    ...x,
    [group]: {
      ...x[group],
      [key]: v
    }
  }));
  var dirty = JSON.stringify({
    ...s,
    staff: null
  }) !== JSON.stringify({
    ...store.settings,
    staff: null
  });
  return React.createElement("div", null, React.createElement(PageHeader, {
    title: "系統設定",
    subtitle: "活動報名管理系統參數設定",
    actions: tab !== "staff" && tab !== "meta" && React.createElement(React.Fragment, null, dirty && React.createElement("span", {
      className: "unsaved-hint"
    }, React.createElement(Icon, {
      name: "alert",
      size: 13
    }), "有尚未儲存的變更"), React.createElement(Button, {
      variant: "primary",
      icon: "check",
      disabled: !dirty,
      onClick: save
    }, "儲存設定"))
  }), React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab
  })), tab === "violation" && React.createElement("div", {
    className: "row detail-cols",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement(Card, {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 12
    }
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "違規類型與點數"), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus",
    onClick: () => setS(x => ({
      ...x,
      violationTypes: [...(x.violationTypes || []), {
        id: "vt-" + Math.random().toString(36).slice(2, 6),
        name: "",
        point: 1,
        auto: false,
        desc: "",
        active: true
      }]
    }))
  }, "新增違規類型")), React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("div", {
    className: "table-scroll"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    style: {
      width: "22%"
    }
  }, "類型名稱"), React.createElement("th", {
    style: {
      width: 76
    }
  }, "點數"), React.createElement("th", {
    style: {
      width: 120
    }
  }, "記點方式"), React.createElement("th", null, "說明"), React.createElement("th", {
    style: {
      width: 70
    }
  }, "啟用"), React.createElement("th", {
    style: {
      width: 44
    }
  }))), React.createElement("tbody", null, (s.violationTypes || []).map((t, i) => {
    var upd = (k, v) => setS(x => ({
      ...x,
      violationTypes: x.violationTypes.map((o, idx) => idx === i ? {
        ...o,
        [k]: v
      } : o)
    }));
    return React.createElement("tr", {
      key: t.id
    }, React.createElement("td", null, React.createElement(Input, {
      value: t.name,
      onChange: v => upd("name", v),
      placeholder: "例如：放鳥"
    })), React.createElement("td", null, React.createElement(Input, {
      type: "number",
      value: t.point,
      onChange: v => upd("point", Number(v))
    })), React.createElement("td", null, React.createElement(Select, {
      value: t.auto ? "系統自動" : "館員判定",
      onChange: v => upd("auto", v === "系統自動"),
      options: ["系統自動", "館員判定"]
    })), React.createElement("td", null, React.createElement(Input, {
      value: t.desc,
      onChange: v => upd("desc", v),
      placeholder: "何種情形記此點數"
    })), React.createElement("td", null, React.createElement(Toggle, {
      checked: t.active,
      onChange: v => upd("active", v)
    })), React.createElement("td", null, React.createElement("button", {
      className: "icon-btn",
      onClick: () => setS(x => ({
        ...x,
        violationTypes: x.violationTypes.filter((_, idx) => idx !== i)
      })),
      "aria-label": "刪除"
    }, React.createElement(Icon, {
      name: "trash",
      size: 15
    }))));
  }))))), React.createElement("div", {
    className: "info-note",
    style: {
      marginTop: 12
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "各類違規記幾點只在這裡設定。「系統自動」的類型由系統依簽到紀錄記點；「館員判定」的類型由館員在報名詳情按「記違規點」。停用的類型不再出現在記點選單，既有紀錄保留；點數變更不追溯既有紀錄。"))), React.createElement(Card, {
    style: {
      width: 420,
      flexShrink: 0
    },
    className: "detail-side"
  }, React.createElement("h3", {
    className: "section-title"
  }, "停權與自動記點規則"), React.createElement(SettingRow, {
    label: "停權門檻點數",
    hint: "累計達此點數即自動停權"
  }, React.createElement(Input, {
    type: "number",
    value: s.violation.suspend_threshold,
    onChange: v => setNum("violation", "suspend_threshold", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "停權天數",
    hint: "自動停權的天數"
  }, React.createElement(Input, {
    type: "number",
    value: s.violation.suspend_days,
    onChange: v => setNum("violation", "suspend_days", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "點數累計計算期間",
    hint: "超過此期間的舊點數不再計入停權門檻"
  }, React.createElement(Select, {
    value: s.violation.point_window,
    onChange: v => setNum("violation", "point_window", v),
    options: ["不歸零（永久累計）", "一年", "半年", "每年 1 月 1 日歸零"]
  })), React.createElement(SettingRow, {
    label: "停權期滿後點數處理",
    hint: "停權結束時，既有點數如何計算"
  }, React.createElement(Select, {
    value: s.violation.release_action,
    onChange: v => setNum("violation", "release_action", v),
    options: ["歸零", "保留", "扣除停權門檻點數"]
  })), React.createElement(SettingRow, {
    label: "遲到判定（分鐘）",
    hint: "簽到時間晚於場次開始幾分鐘，系統自動記「遲到」"
  }, React.createElement(Input, {
    type: "number",
    value: s.violation.late_minutes,
    onChange: v => setNum("violation", "late_minutes", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "未簽到自動記點的時機",
    hint: "紙本簽到的活動要等補登完才知道誰沒到，建議等補登期限過後再記",
    last: true
  }, React.createElement(Select, {
    value: s.violation.auto_point_timing,
    onChange: v => setNum("violation", "auto_point_timing", v),
    options: ["補登期限屆滿後", "活動結束後立即"]
  })))), tab === "quota" && React.createElement(Card, {
    style: {
      maxWidth: 620
    }
  }, React.createElement("h3", {
    className: "section-title"
  }, "報名名額與遞補"), React.createElement(SettingRow, {
    label: "備取回覆期限（小時）",
    hint: "遞補通知後讀者須於此時數內回覆"
  }, React.createElement(Input, {
    type: "number",
    value: s.quota.reply_deadline_hours,
    onChange: v => setNum("quota", "reply_deadline_hours", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "遞補方式",
    hint: "人工＝館員在報名名單逐筆按「遞補轉正」；自動＝名額釋出時系統依備取序號立即轉正並通知"
  }, React.createElement(Select, {
    value: s.quota.promotion_mode,
    onChange: v => setNum("quota", "promotion_mode", v),
    options: ["人工遞補", "自動遞補"]
  })), React.createElement(SettingRow, {
    label: "遞補需讀者確認",
    hint: "關閉則直接遞補轉正，不需讀者回覆"
  }, React.createElement(Toggle, {
    checked: s.quota.require_promotion_confirm,
    onChange: v => setNum("quota", "require_promotion_confirm", v)
  })), React.createElement(SettingRow, {
    label: "繳費期限（天）",
    hint: "正取後須於此天數內完成繳費"
  }, React.createElement(Input, {
    type: "number",
    value: s.quota.payment_deadline_days,
    onChange: v => setNum("quota", "payment_deadline_days", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "逾期自動釋出名額",
    hint: "繳費逾期後自動取消並遞補"
  }, React.createElement(Toggle, {
    checked: s.quota.payment_auto_release,
    onChange: v => setNum("quota", "payment_auto_release", v)
  })), React.createElement(SettingRow, {
    label: "逾期後緩衝天數",
    hint: "繳費期限過後再加計幾天才釋出名額；0 表示期限一到即釋出"
  }, React.createElement(Input, {
    type: "number",
    value: s.quota.payment_release_buffer_days,
    onChange: v => setNum("quota", "payment_release_buffer_days", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "補登期限（天）",
    hint: "現場簽到補登的開放天數",
    last: true
  }, React.createElement(Input, {
    type: "number",
    value: s.quota.supplement_deadline_days,
    onChange: v => setNum("quota", "supplement_deadline_days", Number(v)),
    style: {
      width: 90
    }
  }))), tab === "notify" && React.createElement("div", {
    className: "row",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement(Card, {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, React.createElement("h3", {
    className: "section-title"
  }, "通知參數"), React.createElement(SettingRow, {
    label: "行前通知提前時數",
    hint: "活動開始前幾小時寄送提醒"
  }, React.createElement(Input, {
    type: "number",
    value: s.notify.advance_notice_hours,
    onChange: v => setNum("notify", "advance_notice_hours", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "補件提醒提前天數",
    hint: "需要上傳證明文件的活動，在繳交期限前幾天自動寄一次提醒"
  }, React.createElement(Input, {
    type: "number",
    value: s.notify.document_remind_days,
    onChange: v => setNum("notify", "document_remind_days", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "啟用簡訊通知",
    hint: "需先完成政府短碼簡訊平台申請"
  }, React.createElement(Toggle, {
    checked: s.notify.sms_enabled,
    onChange: v => setNum("notify", "sms_enabled", v)
  })), React.createElement(SettingRow, {
    label: "依館別分開設定寄件者",
    hint: "開啟後各館以自己的信箱與簡訊帳號發送；關閉則全部由總館名義發送",
    last: true
  }, React.createElement(Toggle, {
    checked: s.notify.per_branch_sender,
    onChange: v => setNum("notify", "per_branch_sender", v)
  })), !s.notify.sms_enabled && React.createElement("div", {
    className: "warn-note",
    style: {
      marginTop: 12
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "簡訊通知目前為停用狀態，所有簡訊類通知將不會發送。")), s.notify.per_branch_sender && React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, React.createElement("div", {
    className: "field-label",
    style: {
      marginBottom: 8
    }
  }, "各館寄件設定"), React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "館別"), React.createElement("th", null, "發送信箱"), React.createElement("th", null, "簡訊帳號"), React.createElement("th", {
    style: {
      width: 40
    }
  }))), React.createElement("tbody", null, (s.notify.senders || []).map((sd, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", null, React.createElement(Select, {
    value: sd.branch,
    onChange: v => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        senders: x.notify.senders.map((o, idx) => idx === i ? {
          ...o,
          branch: v
        } : o)
      }
    })),
    options: window.DB.branches
  })), React.createElement("td", null, React.createElement(Input, {
    value: sd.email,
    onChange: v => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        senders: x.notify.senders.map((o, idx) => idx === i ? {
          ...o,
          email: v
        } : o)
      }
    })),
    placeholder: "xxx@example.com"
  })), React.createElement("td", null, React.createElement(Input, {
    value: sd.sms_account,
    onChange: v => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        senders: x.notify.senders.map((o, idx) => idx === i ? {
          ...o,
          sms_account: v
        } : o)
      }
    })),
    placeholder: "（未申請）"
  })), React.createElement("td", null, React.createElement("button", {
    className: "icon-btn",
    "aria-label": "刪除",
    onClick: () => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        senders: x.notify.senders.filter((_, idx) => idx !== i)
      }
    }))
  }, React.createElement(Icon, {
    name: "trash",
    size: 15
  })))))))), React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus",
    style: {
      marginTop: 10
    },
    onClick: () => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        senders: [...(x.notify.senders || []), {
          branch: "",
          email: "",
          sms_account: ""
        }]
      }
    }))
  }, "新增館別寄件設定"), React.createElement("div", {
    className: "info-note",
    style: {
      marginTop: 10
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "簡訊帳號須由各館自行向政府短碼簡訊平台申請；未申請的館別仍可使用信箱發送。")))), React.createElement(Card, {
    style: {
      flex: 1
    }
  }, React.createElement("h3", {
    className: "section-title"
  }, "各類通知開關"), React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "事件"), React.createElement("th", {
    style: {
      width: 90,
      textAlign: "center"
    }
  }, "Email"), React.createElement("th", {
    style: {
      width: 90,
      textAlign: "center"
    }
  }, "簡訊"))), React.createElement("tbody", null, s.notify.events.map((ev, i) => React.createElement("tr", {
    key: ev.event
  }, React.createElement("td", null, ev.event), React.createElement("td", {
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, React.createElement(Toggle, {
    checked: ev.email,
    onChange: v => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        events: x.notify.events.map((e, idx) => idx === i ? {
          ...e,
          email: v
        } : e)
      }
    }))
  }))), React.createElement("td", {
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, React.createElement(Toggle, {
    checked: ev.sms,
    disabled: !s.notify.sms_enabled,
    onChange: v => setS(x => ({
      ...x,
      notify: {
        ...x.notify,
        events: x.notify.events.map((e, idx) => idx === i ? {
          ...e,
          sms: v
        } : e)
      }
    }))
  })))))))))), tab === "meta" && React.createElement("div", {
    className: "row",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement(MetaCard, {
    title: "館別",
    kind: "branch",
    items: window.DB.branches
  }), React.createElement(MetaCard, {
    title: "活動類別",
    kind: "category",
    items: window.DB.categories
  })), tab === "staff" && React.createElement("div", null, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 12
    }
  }, React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, "共 ", store.settings.staff.length, " 個帳號"), React.createElement(Button, {
    variant: "primary",
    icon: "plus",
    onClick: () => setStaffModal("new")
  }, "新增帳號")), React.createElement("div", {
    className: "table-wrap"
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "姓名"), React.createElement("th", null, "Email"), React.createElement("th", null, "角色"), React.createElement("th", null, "所屬館別"), React.createElement("th", null, "授權館別"), React.createElement("th", null, "狀態"), React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "操作"))), React.createElement("tbody", null, store.settings.staff.map(u => React.createElement("tr", {
    key: u.id
  }, React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, u.name), React.createElement("td", {
    className: "cell-muted"
  }, u.email), React.createElement("td", null, React.createElement(Badge, {
    tone: u.role === "系統管理員" ? "blue" : u.role === "總館館員" ? "green" : "gray"
  }, u.role)), React.createElement("td", {
    className: "cell-muted"
  }, u.branch), React.createElement("td", {
    className: "cell-muted"
  }, (store.settings.roleGroups || []).find(r => r.role === u.role)?.scope === "全部館別" ? React.createElement(Badge, {
    tone: "blue"
  }, "全部館別") : u.branches && u.branches.length ? u.branches.join("、") : u.branch), React.createElement("td", null, u.active ? React.createElement(Badge, {
    tone: "green"
  }, "啟用") : React.createElement(Badge, {
    tone: "gray"
  }, "停用")), React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, React.createElement("div", {
    className: "row-actions"
  }, React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    icon: "edit",
    onClick: () => setStaffModal(u)
  }, "編輯"), React.createElement(Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => {
      store.setSettings(x => ({
        ...x,
        staff: x.staff.map(st => st.id === u.id ? {
          ...st,
          active: !st.active
        } : st)
      }));
      toast(u.active ? "已停用帳號" : "已啟用帳號", "success");
    }
  }, u.active ? "停用" : "啟用")))))))), React.createElement("div", {
    className: "info-note",
    style: {
      marginTop: 14
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "分館館員只看得到授權館別的活動與報名資料，且不能辦理線上收費活動；可於左側側欄切換身分檢視差異。")), staffModal && React.createElement(StaffModal, {
    staff: staffModal === "new" ? null : staffModal,
    onClose: () => setStaffModal(null),
    onSave: u => {
      if (staffModal === "new") {
        store.setSettings(x => ({
          ...x,
          staff: [...x.staff, {
            ...u,
            id: "u" + Math.random().toString(36).slice(2, 6)
          }]
        }));
        toast("已新增帳號", "success");
      } else {
        store.setSettings(x => ({
          ...x,
          staff: x.staff.map(st => st.id === u.id ? u : st)
        }));
        toast("已更新帳號", "success");
      }
      setStaffModal(null);
    }
  })), tab === "security" && React.createElement("div", {
    className: "stack",
    style: {
      gap: 18
    }
  }, React.createElement(Card, null, React.createElement("h3", {
    className: "section-title"
  }, "角色與權限群組對應"), React.createElement("div", {
    className: "table-wrap",
    style: {
      boxShadow: "none"
    }
  }, React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "角色"), React.createElement("th", null, "內容管理系統權限群組"), React.createElement("th", null, "資料範圍"), React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "可辦線上收費"), React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "可停權讀者"), React.createElement("th", {
    style: {
      textAlign: "center"
    }
  }, "可改簽到退時間"))), React.createElement("tbody", null, (s.roleGroups || []).map((r, i) => React.createElement("tr", {
    key: r.role
  }, React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, r.role), React.createElement("td", null, React.createElement(Select, {
    value: r.group,
    onChange: v => setS(x => ({
      ...x,
      roleGroups: x.roleGroups.map((o, idx) => idx === i ? {
        ...o,
        group: v
      } : o)
    })),
    options: ["系統管理群組", "活動承辦群組", "現場簽到群組", "唯讀群組"]
  })), React.createElement("td", {
    className: "cell-muted"
  }, r.scope), React.createElement("td", {
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, React.createElement(Toggle, {
    checked: r.can_paid,
    onChange: v => setS(x => ({
      ...x,
      roleGroups: x.roleGroups.map((o, idx) => idx === i ? {
        ...o,
        can_paid: v
      } : o)
    }))
  }))), React.createElement("td", {
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, React.createElement(Toggle, {
    checked: r.can_suspend,
    onChange: v => setS(x => ({
      ...x,
      roleGroups: x.roleGroups.map((o, idx) => idx === i ? {
        ...o,
        can_suspend: v
      } : o)
    }))
  }))), React.createElement("td", {
    style: {
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "inline-flex"
    }
  }, React.createElement(Toggle, {
    checked: r.can_edit_checkin,
    onChange: v => setS(x => ({
      ...x,
      roleGroups: x.roleGroups.map((o, idx) => idx === i ? {
        ...o,
        can_edit_checkin: v
      } : o)
    }))
  })))))))), React.createElement("div", {
    className: "field-hint",
    style: {
      marginTop: 10
    }
  }, "角色沿用內容管理系統既有的權限群組與組織架構，本表只設定活動報名模組的額外權限。")), React.createElement("div", {
    className: "row",
    style: {
      alignItems: "flex-start",
      gap: 18
    }
  }, React.createElement(Card, {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, React.createElement("h3", {
    className: "section-title"
  }, "密碼原則"), React.createElement(SettingRow, {
    label: "最短長度",
    hint: "密碼至少幾個字元"
  }, React.createElement(Input, {
    type: "number",
    value: s.password.min_length,
    onChange: v => setNum("password", "min_length", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "須含英數混合",
    hint: "必須同時包含英文字母與數字"
  }, React.createElement(Toggle, {
    checked: s.password.require_mix,
    onChange: v => setNum("password", "require_mix", v)
  })), React.createElement(SettingRow, {
    label: "密碼有效天數",
    hint: "逾期強制更換；0 表示不限"
  }, React.createElement(Input, {
    type: "number",
    value: s.password.expire_days,
    onChange: v => setNum("password", "expire_days", Number(v)),
    style: {
      width: 90
    }
  })), React.createElement(SettingRow, {
    label: "登入失敗鎖定次數",
    hint: "連續失敗達此次數即鎖定帳號",
    last: true
  }, React.createElement(Input, {
    type: "number",
    value: s.password.lock_after_fails,
    onChange: v => setNum("password", "lock_after_fails", Number(v)),
    style: {
      width: 90
    }
  }))), React.createElement(Card, {
    style: {
      flex: 1,
      padding: 0
    }
  }, React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderBottom: "1px solid var(--border)"
    }
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, "帳號異動軌跡")), React.createElement("table", {
    className: "table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "時間"), React.createElement("th", null, "操作者"), React.createElement("th", null, "動作"), React.createElement("th", null, "對象"))), React.createElement("tbody", null, window.DB.auditLog.map((l, i) => React.createElement("tr", {
    key: i
  }, React.createElement("td", {
    className: "cell-muted num"
  }, l.at), React.createElement("td", null, l.who), React.createElement("td", null, React.createElement(Badge, {
    tone: l.action.includes("停用") ? "red" : l.action.includes("新增") ? "green" : "blue"
  }, l.action)), React.createElement("td", {
    className: "cell-muted"
  }, l.target)))))))));
}
function SettingRow({
  label,
  hint,
  children,
  last
}) {
  return React.createElement("div", {
    className: "between",
    style: {
      padding: "14px 0",
      borderBottom: last ? "none" : "1px solid var(--border)"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, label), hint && React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11.5,
      marginTop: 2
    }
  }, hint)), React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, children));
}
function MetaCard({
  title,
  kind,
  items
}) {
  var store = useStore();
  var toast = useToast();
  var [list, setList] = useState(() => items.map(n => ({
    name: n,
    active: true
  })));
  var [val, setVal] = useState("");
  var [blocked, setBlocked] = useState(null);
  function usedBy(name) {
    return store.activities.filter(a => (kind === "branch" ? a.branch : a.category) === name);
  }
  function tryRemove(i) {
    var it = list[i];
    var used = usedBy(it.name);
    if (used.length > 0) {
      setBlocked({
        name: it.name,
        used
      });
      return;
    }
    setList(list.filter((_, idx) => idx !== i));
    toast(`已刪除${title}「${it.name}」`, "success");
  }
  function move(i, dir) {
    var j = i + dir;
    if (j < 0 || j >= list.length) return;
    var arr = [...list];
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setList(arr);
  }
  return React.createElement(Card, {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    className: "between",
    style: {
      marginBottom: 10
    }
  }, React.createElement("h3", {
    className: "section-title",
    style: {
      margin: 0
    }
  }, title), React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "共 ", list.length, " 項")), React.createElement("div", {
    className: "stack",
    style: {
      gap: 6,
      marginBottom: 14
    }
  }, list.map((it, i) => {
    var used = usedBy(it.name).length;
    return React.createElement("div", {
      key: it.name + i,
      className: "meta-row"
    }, React.createElement("div", {
      className: "meta-sort"
    }, React.createElement("button", {
      className: "icon-btn",
      title: "上移",
      disabled: i === 0,
      onClick: () => move(i, -1)
    }, React.createElement(Icon, {
      name: "chevronDown",
      size: 13,
      style: {
        transform: "rotate(180deg)"
      }
    })), React.createElement("button", {
      className: "icon-btn",
      title: "下移",
      disabled: i === list.length - 1,
      onClick: () => move(i, 1)
    }, React.createElement(Icon, {
      name: "chevronDown",
      size: 13
    }))), React.createElement("span", {
      className: "meta-name" + (it.active ? "" : " off")
    }, it.name), used > 0 && React.createElement("span", {
      className: "meta-used"
    }, used, " 個活動使用中"), React.createElement("div", {
      className: "meta-actions"
    }, React.createElement(Toggle, {
      checked: it.active,
      onChange: v => setList(list.map((x, idx) => idx === i ? {
        ...x,
        active: v
      } : x))
    }), React.createElement("button", {
      className: "icon-btn",
      title: "刪除",
      onClick: () => tryRemove(i)
    }, React.createElement(Icon, {
      name: "trash",
      size: 15
    }))));
  })), React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, React.createElement(Input, {
    value: val,
    onChange: setVal,
    placeholder: `新增${title}…`
  }), React.createElement(Button, {
    variant: "ghost",
    icon: "plus",
    onClick: () => {
      if (!val.trim()) return;
      if (list.some(x => x.name === val.trim())) {
        toast(`${title}「${val.trim()}」已存在`, "danger");
        return;
      }
      setList([...list, {
        name: val.trim(),
        active: true
      }]);
      setVal("");
      toast(`已新增${title}`, "success");
    }
  }, "新增")), React.createElement("div", {
    className: "field-hint",
    style: {
      marginTop: 8
    }
  }, "停用後不再出現於新增活動的選單，既有活動不受影響。"), React.createElement(Modal, {
    open: !!blocked,
    onClose: () => setBlocked(null),
    title: `無法刪除${title}`,
    footer: React.createElement(Button, {
      variant: "primary",
      onClick: () => setBlocked(null)
    }, "我知道了")
  }, blocked && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      marginTop: 0,
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "「", React.createElement("b", null, blocked.name), "」目前有 ", blocked.used.length, " 個活動使用中，無法刪除。若不再使用，請改為", React.createElement("b", null, "停用"), "。"), React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 13,
      lineHeight: 1.9,
      color: "var(--text-secondary)"
    }
  }, blocked.used.slice(0, 6).map(a => React.createElement("li", {
    key: a.id
  }, a.name)), blocked.used.length > 6 && React.createElement("li", null, "…等 ", blocked.used.length, " 個活動")))));
}
function StaffModal({
  staff,
  onClose,
  onSave
}) {
  var store = useStore();
  var [u, setU] = useState(staff || {
    name: "",
    email: "",
    role: "分館館員",
    branch: "文化局圖書館",
    branches: [],
    group: "活動承辦群組",
    active: true
  });
  var set = (k, v) => setU(x => ({
    ...x,
    [k]: v
  }));
  var rg = (store.settings.roleGroups || []).find(r => r.role === u.role) || {};
  var allBranches = rg.scope === "全部館別";
  function toggleBranch(b) {
    var cur = u.branches || [];
    set("branches", cur.includes(b) ? cur.filter(x => x !== b) : [...cur, b]);
  }
  return React.createElement(Modal, {
    open: true,
    onClose: onClose,
    title: staff ? "編輯帳號" : "新增帳號",
    width: 560,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "取消"), React.createElement(Button, {
      variant: "primary",
      disabled: !u.name || !u.email,
      onClick: () => onSave(u)
    }, "儲存"))
  }, React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "姓名",
    required: true
  }, React.createElement(Input, {
    value: u.name,
    onChange: v => set("name", v)
  })), React.createElement(Field, {
    label: "Email",
    required: true
  }, React.createElement(Input, {
    type: "email",
    value: u.email,
    onChange: v => set("email", v)
  }))), React.createElement("div", {
    className: "row-2"
  }, React.createElement(Field, {
    label: "角色",
    hint: rg.group ? `對應權限群組：${rg.group}` : ""
  }, React.createElement(Select, {
    value: u.role,
    onChange: v => set("role", v),
    options: ["系統管理員", "總館館員", "分館館員", "現場館員"]
  })), React.createElement(Field, {
    label: "所屬館別"
  }, React.createElement(Select, {
    value: u.branch,
    onChange: v => set("branch", v),
    options: window.DB.branches
  }))), React.createElement(Field, {
    label: "授權館別",
    hint: allBranches ? "此角色可管理全部館別，不需個別授權" : "可複選；此帳號只看得到被授權館別的活動與報名資料"
  }, allBranches ? React.createElement("div", {
    className: "info-note"
  }, React.createElement(Icon, {
    name: "check",
    size: 15
  }), React.createElement("span", null, "全部 ", window.DB.branches.length, " 個館別")) : React.createElement("div", {
    className: "branch-grid"
  }, window.DB.branches.map(b => React.createElement(Checkbox, {
    key: b,
    label: b,
    checked: (u.branches || []).includes(b),
    onChange: () => toggleBranch(b)
  })))), !allBranches && !rg.can_paid && React.createElement("div", {
    className: "warn-note",
    style: {
      marginBottom: 12
    }
  }, React.createElement(Icon, {
    name: "alert",
    size: 15
  }), React.createElement("span", null, "此角色不得辦理線上收費活動，只能建立免費或現場繳費的活動。")), React.createElement("div", {
    className: "between",
    style: {
      padding: "10px 0",
      borderTop: "1px solid var(--border)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "啟用帳號"), React.createElement(Toggle, {
    checked: u.active,
    onChange: v => set("active", v)
  })));
}
window.SettingsPage = SettingsPage;
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(StoreProvider, null, React.createElement(ToastProvider, null, React.createElement(App, null))));
