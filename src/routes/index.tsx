import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import holoCity from "@/assets/holo-city.jpg";

const tlgLogoUrl = "/tlg-logo.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TLG – Building Egypt's Future | Tong Long Group Construction" },
      {
        name: "description",
        content:
          "Tong Long Group (TLG) — leading construction & engineering firm in Egypt. Civil infrastructure, commercial towers, residential & industrial projects delivered on time.",
      },
      { property: "og:title", content: "TLG – Building Egypt's Future" },
      {
        property: "og:description",
        content:
          "Over a decade of engineering excellence — delivering large-scale projects across Egypt.",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
    ],
    //  

    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&family=Noto+Sans+Arabic:wght@400;600;800&family=Noto+Sans+SC:wght@400;600;800&display=swap",
      },
    ],
  }),
  component: Index,
});

/* ─────── i18n ─────── */

type Lang = "en" | "ar" | "zh";

const dict = {
  en: {
    nav: { about: "About", services: "Services", projects: "Projects", why: "Why TLG", contact: "Contact Us" },
    hero: {
      tag: "Tong Long Group — Construction Engineering · Egypt",
      l1: "Building", l2: "Egypt's", l3: "Future",
      desc: "Over two decades of engineering excellence — delivering large-scale infrastructure, commercial, and residential projects across Egypt with precision and integrity.",
      cta1: "View Our Projects →", cta2: "Get a Quote",
      badge: "Active across Egypt", scroll: "Scroll",
    },
    stats: [
      { label: "Years in Egypt" }, { label: "Projects Completed" },
      { label: "Manpower" }, { label: "Cash Flow (EGP)" },
    ],
    about: {
      kicker: "Who We Are", title: ["Engineering", "Excellence", "Since Day One"],
      p1: "Tong Long Group for Construction Engineering (TLG) is one of Egypt's leading construction and engineering firms, headquartered in Cairo. We deliver complex infrastructure, commercial towers, industrial facilities, and residential developments — on time and within budget.",
      p2: "From initial concept to final handover, our multidisciplinary teams bring together structural engineers, project managers, and skilled tradespeople to execute every project to the highest international standards.",
      cta: "Work With Us →",
      quote: '"We don\'t just build structures — we build the backbone of communities."',
      bullets: [
        "ISO 9001:2015 certified quality management across all project phases.",
        "Full in-house design, engineering, procurement & construction capability.",
        "Trusted by government bodies, private developers, and international clients.",
        "Zero-compromise safety record — every site, every shift, every day.",
      ],
    },
    services: { kicker: "What We Do", title: "Our Core Services" },
    projectsSec: { kicker: "Our Work", title: "Selected Projects", viewMore: "View Details →", close: "Close" },
    why: { kicker: "Our Difference", title: "Why Choose TLG" },
    contact: {
      kicker: "Get In Touch", title: "Start Your Project",
      intro: "Ready to discuss your next project? Our team of engineers and project specialists is available to provide expert advice, feasibility assessments, and competitive quotations.",
      labels: ["Head Office", "Phone", "Email", "Office Hours"],
      address: "38 – 1st Neighborhood, 3rd District, Badr City, Cairo, Egypt",
      hours: "Saturday – Thursday, 09:00 – 17:00",
      form: { name: "Full Name *", company: "Company Name", email: "Email Address *", phone: "Phone Number", type: "Project Type", msg: "Tell us about your project — location, scope, timeline, and budget...", send: "Send Enquiry →", thanks: "Thank you — we'll be in touch shortly." },
    },
    footer: "© 2019 Tong Long Group for Construction Engineering · All Rights Reserved · Cairo, Egypt",
    sponsors: { kicker: "Our Partners", title: "Trusted By Industry Leaders" },
  },
  ar: {
    nav: { about: "من نحن", services: "خدماتنا", projects: "مشاريعنا", why: "لماذا TLG", contact: "تواصل معنا" },
    hero: {
      tag: "مجموعة تونغ لونغ — هندسة الإنشاءات · مصر",
      l1: "نبني", l2: "مستقبل", l3: "مصر",
      desc: "أكثر من عقدين من التميز الهندسي — ننفذ مشاريع البنية التحتية والتجارية والسكنية الكبرى في جميع أنحاء مصر بدقة ونزاهة.",
      cta1: "شاهد مشاريعنا ←", cta2: "اطلب عرض سعر",
      badge: "نعمل في جميع أنحاء مصر", scroll: "مرر",
    },
    stats: [
      { label: "سنوات في مصر" }, { label: "مشروع منجز" },
      { label: "القوى العاملة" }, { label: "التدفق النقدي (ج.م)" },
    ],
    about: {
      kicker: "من نحن", title: ["تميز", "هندسي", "منذ اليوم الأول"],
      p1: "مجموعة تونغ لونغ لهندسة الإنشاءات (TLG) من أبرز شركات الإنشاءات والهندسة في مصر، ومقرها القاهرة. ننفذ مشاريع البنية التحتية المعقدة والأبراج التجارية والمنشآت الصناعية والتطويرات السكنية — في الموعد وفي حدود الميزانية.",
      p2: "من الفكرة الأولى إلى التسليم النهائي، تجمع فرقنا المتعددة التخصصات بين المهندسين الإنشائيين ومديري المشاريع والحرفيين المهرة لتنفيذ كل مشروع بأعلى المعايير الدولية.",
      cta: "تعاون معنا ←",
      quote: '"نحن لا نبني هياكل فحسب — بل نبني العمود الفقري للمجتمعات."',
      bullets: [
        "إدارة جودة معتمدة ISO 9001:2015 في جميع مراحل المشروع.",
        "قدرات داخلية متكاملة في التصميم والهندسة والتوريد والإنشاء.",
        "موثوقون من قبل الجهات الحكومية والمطورين الخواص والعملاء الدوليين.",
        "سجل سلامة بلا تنازلات — كل موقع، كل وردية، كل يوم.",
      ],
    },
    services: { kicker: "ماذا نفعل", title: "خدماتنا الأساسية" },
    projectsSec: { kicker: "أعمالنا", title: "مشاريع مختارة", viewMore: "عرض التفاصيل ←", close: "إغلاق" },
    why: { kicker: "ما يميزنا", title: "لماذا تختار TLG" },
    contact: {
      kicker: "تواصل معنا", title: "ابدأ مشروعك",
      intro: "هل أنت مستعد لمناقشة مشروعك القادم؟ فريقنا من المهندسين والمتخصصين متاح لتقديم المشورة ودراسات الجدوى وعروض الأسعار التنافسية.",
      labels: ["المقر الرئيسي", "الهاتف", "البريد الإلكتروني", "ساعات العمل"],
      address: "38 – الحي الأول، المنطقة الثالثة، مدينة بدر، القاهرة، مصر",
      hours: "السبت – الخميس، 09:00 – 17:00",
      form: { name: "الاسم الكامل *", company: "اسم الشركة", email: "البريد الإلكتروني *", phone: "رقم الهاتف", type: "نوع المشروع", msg: "أخبرنا عن مشروعك — الموقع، النطاق، الجدول الزمني، والميزانية...", send: "إرسال الاستفسار ←", thanks: "شكراً — سنتواصل معك قريباً." },
    },
    footer: "© 2019 مجموعة تونغ لونغ لهندسة الإنشاءات · جميع الحقوق محفوظة · القاهرة، مصر",
    sponsors: { kicker: "شركاؤنا", title: "شركاء النجاح والجهات الداعمة" },
  },
  zh: {
    nav: { about: "关于我们", services: "服务", projects: "项目", why: "为何选 TLG", contact: "联系我们" },
    hero: {
      tag: "通隆集团 — 建筑工程 · 埃及",
      l1: "建设", l2: "埃及的", l3: "未来",
      desc: "二十多年工程卓越成就 — 以精准与诚信在埃及交付大型基础设施、商业及住宅项目。",
      cta1: "查看项目 →", cta2: "获取报价",
      badge: "业务遍及埃及", scroll: "滚动",
    },
    stats: [
      { label: "扎根埃及年数" }, { label: "完成项目" },
      { label: "员工人数" }, { label: "现金流 (EGP)" },
    ],
    about: {
      kicker: "我们是谁", title: ["工程", "卓越", "始终如一"],
      p1: "通隆建筑工程集团 (TLG) 是埃及领先的建筑与工程公司之一，总部位于开罗。我们按时按预算交付复杂的基础设施、商业塔楼、工业设施和住宅开发项目。",
      p2: "从初始概念到最终交付，我们的多学科团队汇集结构工程师、项目经理和熟练技工，以最高的国际标准执行每一个项目。",
      cta: "与我们合作 →",
      quote: '"我们不仅建造结构 — 我们建造社区的脊梁。"',
      bullets: [
        "ISO 9001:2015 认证的全阶段质量管理体系。",
        "全方位内部设计、工程、采购与施工能力。",
        "受到政府机构、私人开发商及国际客户的信赖。",
        "零妥协的安全记录 — 每个工地、每个班次、每一天。",
      ],
    },
    services: { kicker: "我们的业务", title: "核心服务" },
    projectsSec: { kicker: "我们的作品", title: "精选项目", viewMore: "查看详情 →", close: "关闭" },
    why: { kicker: "我们的不同", title: "为何选择 TLG" },
    contact: {
      kicker: "联系我们", title: "开启您的项目",
      intro: "准备好讨论您的下一个项目了吗？我们的工程师和项目专家团队随时为您提供专家建议、可行性评估和具竞争力的报价。",
      labels: ["总部", "电话", "邮箱", "办公时间"],
      address: "埃及开罗 Badr City 第三区 第一邻里 38 号",
      hours: "周六至周四，09:00 – 17:00",
      form: { name: "姓名 *", company: "公司名称", email: "电子邮箱 *", phone: "电话号码", type: "项目类型", msg: "请告诉我们您的项目 — 地点、范围、时间表和预算……", send: "发送询问 →", thanks: "谢谢 — 我们会尽快与您联系。" },
    },
    footer: "© 2019 通隆建筑工程集团 · 版权所有 · 埃及开罗",
    sponsors: { kicker: "合作伙伴", title: "值得信赖的行业先锋" },
  },
} as const;

/* ─────── Services + Projects + Why (translatable) ─────── */
const servicesByLang = {
  en: [
    { icon: "🏗️", title: "Civil Infrastructure", text: "Water supply, drainage networks, and public utilities. Large-scale civil works from tender to commissioning across all Egyptian governorates." },
    { icon: "🏢", title: "Commercial Construction", text: "High-rise offices, shopping centres, hotels, and mixed-use developments. Landmark commercial buildings that define skylines." },
    { icon: "🏘️", title: "Residential Development", text: "Affordable housing, luxury compounds, and social housing projects — delivered with rigour and attention to detail." },
    { icon: "🏭", title: "Industrial Facilities", text: "Factories, warehouses, power plants, and processing facilities built to handle demanding operations." },
    { icon: "⚙️", title: "MEP Engineering", text: "Mechanical, Electrical & Plumbing services integrated into every project — from design coordination to commissioning." },
    { icon: "📐", title: "Design & Consultancy", text: "Structural design, feasibility studies, project management, and technical consultancy at every stage." },
  ],
  ar: [
    { icon: "🏗️", title: "البنية التحتية المدنية", text: "إمدادات المياه وشبكات الصرف والمرافق العامة. أعمال مدنية واسعة النطاق من المناقصة حتى التشغيل في جميع محافظات مصر." },
    { icon: "🏢", title: "الإنشاءات التجارية", text: "أبراج مكاتب ومراكز تسوق وفنادق وتطويرات متعددة الاستخدامات — مبانٍ تشكّل خط الأفق." },
    { icon: "🏘️", title: "التطوير السكني", text: "إسكان اقتصادي ومجمعات فاخرة ومشاريع إسكان اجتماعي — مع الالتزام الكامل بالتفاصيل." },
    { icon: "🏭", title: "المنشآت الصناعية", text: "مصانع ومستودعات ومحطات طاقة ومنشآت تصنيع مبنية لتحمّل عمليات صعبة." },
    { icon: "⚙️", title: "الأعمال الكهروميكانيكية", text: "خدمات ميكانيكية وكهربائية وصحية متكاملة في كل مشروع — من التنسيق التصميمي حتى التشغيل." },
    { icon: "📐", title: "التصميم والاستشارات", text: "تصميم إنشائي ودراسات جدوى وإدارة مشاريع واستشارات فنية في كل مرحلة." },
  ],
  zh: [
    { icon: "🏗️", title: "市政基础设施", text: "供水、排水网络和公共设施。从招标到调试的大型市政工程，覆盖埃及各省份。" },
    { icon: "🏢", title: "商业建筑", text: "高层办公楼、购物中心、酒店及综合开发项目 — 重塑城市天际线。" },
    { icon: "🏘️", title: "住宅开发", text: "经济适用房、高档社区及社会住房项目 — 严谨与细致兼备。" },
    { icon: "🏭", title: "工业设施", text: "建造可承受高强度作业的工厂、仓库、电厂和加工设施。" },
    { icon: "⚙️", title: "机电工程", text: "机电与给排水服务贯穿每个项目 — 从设计协调到调试。" },
    { icon: "📐", title: "设计与咨询", text: "结构设计、可行性研究、项目管理及各阶段技术咨询。" },
  ],
} as const;

/**
 * ── Project Images ──────────────────────────────────────────────────────────
 * كل مشروع له 3 صور. الصور اتحطت في:
 *   public/projects/p1/1.jpg  public/projects/p1/2.jpg  public/projects/p1/3.jpg
 *   public/projects/p2/1.jpg  ... وهكذا لكل المشاريع (p1 → p8)
 *
 * لو مش عندك صور حقيقية لسه، الكود هيعرض صور Unsplash كـ fallback تلقائياً.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const projectImages: string[][] = [
  // p1 – Chinese Accommodation – CBD
  ["/projects/p1/1.jpg", "/projects/p1/2.jpg", "/projects/p1/3.jpg"],
  // p2 – C05 Tower
  ["/projects/p2/1.jpg", "/projects/p2/2.jpg", "/projects/p2/3.jpg"],
  // p3 – C07 & C08 Towers Facades
  ["/projects/p3/1.jpg", "/projects/p3/2.jpg", "/projects/p3/3.jpg"],
  // p4 – D02 Tower
  ["/projects/p4/1.jpg", "/projects/p4/2.jpg", "/projects/p4/3.jpg"],
  // p5 – Regenco Glass Factory
  ["/projects/p5/1.jpg", "/projects/p5/2.jpg", "/projects/p5/3.jpg"],
  // p6 – EUP Factory
  ["/projects/p6/1.jpg", "/projects/p6/2.jpg", "/projects/p6/3.jpg"],
  // p7 – TEDA VIP Hall
  ["/projects/p7/1.jpg", "/projects/p7/2.jpg", "/projects/p7/3.jpg"],
  // p8 – TEDA Conference Hall
  ["/projects/p8/1.jpg", "/projects/p8/2.jpg", "/projects/p8/3.jpg"],
];

/** Unsplash fallbacks per project (shown if local images don't exist yet) */
const fallbackImages: string[][] = [
  ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80", "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"],
  ["https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=900&q=80", "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80", "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80"],
  ["https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&q=80", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80"],
  ["https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80", "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=900&q=80"],
  ["https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80", "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"],
  ["https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&q=80", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80", "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"],
  ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80", "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=900&q=80", "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80"],
  ["https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=80", "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=900&q=80"],
];

const projectsByLang = {
  en: [
    { tag: "Residential", title: "Chinese Accommodation – CBD", text: "Main Contractor: China State Construction Engineering Corp.\nArea: 4,000 m² · 3 buildings + landscape · 150 labor.", meta: "New Capital · 2018 · EGP 5M", details: "A comprehensive residential complex of 3 buildings with full landscape works, executed for the workforce of CSCEC across 4,000 m² in Egypt's New Administrative Capital." },
    { tag: "Residential & Commercial", title: "C05 Tower – Concrete Work", text: "Main Contractor: CSCEC. Area: 16,000 m². 18 floors + 2 basement + podium · 36 months · 450 labor.", meta: "New Capital · 2019 · EGP 80M", details: "Full concrete works package for an 18-storey mixed-use tower including 2 basement levels and a podium. Delivered over 36 months with up to 450 workers on site." },
    { tag: "Finishing", title: "Facades of C07 & C08 Towers", text: "Main Contractor: CSCEC. Area: 4,000 m² · 36 floors + 2 basement + podium · 24 months · 75 labor.", meta: "New Capital · 2021 · EGP 60M", details: "External façade finishing of two 36-storey towers including curtain wall, cladding, and high-rise envelope works." },
    { tag: "Residential & Commercial", title: "D02 Tower – Concrete Work", text: "Main Contractor: CSCEC. Area: 3,000 m² · 56 floors · 30 months · 450 labor.", meta: "New Alamin · 2022 · EGP 120M", details: "56-storey concrete superstructure on the Mediterranean coast — one of the tallest residential towers in New Alamin." },
    { tag: "Industrial", title: "Regenco Glass Factory", text: "Area: 16,000 m² · 3 steel structures + admin building · 5 months · 45 labor.", meta: "Beni Sweif · 2022 · EGP 9M", details: "Industrial steel-structure factory complex with administration building, delivered in a fast-track 5-month programme." },
    { tag: "Industrial", title: "Construction of EUP Factory", text: "Area: 35,000 m² · 2 warehouses + tanks + offices + scale · 12 months · 60 labor.", meta: "Sadat City · 2023 · EGP 70M", details: "Large industrial campus including 2 warehouses, storage tanks, offices and a weighbridge across 35,000 m² in Sadat City." },
    { tag: "Finishing", title: "Finishing of TEDA VIP Hall", text: "Area: 110 m² · 30 days · 12 labor.", meta: "Ain Sokhna · 2025 · EGP 1M", details: "High-end finishing of a 110 m² VIP reception hall completed within a 30-day window." },
    { tag: "Finishing", title: "Finishing of TEDA Conference Hall", text: "Area: 350 m² · 60 days · 18 labor.", meta: "Ain Sokhna · 2026 · EGP 3M", details: "Premium finishing of a 350 m² conference hall, including acoustics, lighting and AV-ready surfaces." },
  ],
  ar: [
    { tag: "سكني", title: "إسكان العمالة الصينية – CBD", text: "المقاول الرئيسي: شركة الدولة الصينية للإنشاءات.\nالمساحة: 4,000 م² · 3 مبانٍ + لاندسكيب · 150 عاملاً.", meta: "العاصمة الإدارية · 2018 · 5 م ج.م", details: "مجمع سكني متكامل من 3 مبانٍ مع أعمال لاندسكيب كاملة، نُفّذ لقوى عمل CSCEC على مساحة 4,000 م² بالعاصمة الإدارية الجديدة." },
    { tag: "سكني وتجاري", title: "برج C05 – الأعمال الخرسانية", text: "المقاول الرئيسي: CSCEC. المساحة: 16,000 م². 18 دور + 2 بدروم + بوديوم · 36 شهراً · 450 عاملاً.", meta: "العاصمة الإدارية · 2019 · 80 م ج.م", details: "حزمة الأعمال الخرسانية الكاملة لبرج متعدد الاستخدامات بارتفاع 18 دوراً مع بدرومين وبوديوم. نُفّذ خلال 36 شهراً بطاقم يصل إلى 450 عاملاً." },
    { tag: "تشطيبات", title: "واجهات أبراج C07 و C08", text: "المقاول الرئيسي: CSCEC. المساحة: 4,000 م² · 36 دور + 2 بدروم + بوديوم · 24 شهراً · 75 عاملاً.", meta: "العاصمة الإدارية · 2021 · 60 م ج.م", details: "تشطيب الواجهات الخارجية لبرجين بارتفاع 36 دوراً، شامل الحوائط الستائرية والكلادينج." },
    { tag: "سكني وتجاري", title: "برج D02 – الأعمال الخرسانية", text: "المقاول الرئيسي: CSCEC. المساحة: 3,000 م² · 56 دور · 30 شهراً · 450 عاملاً.", meta: "العلمين الجديدة · 2022 · 120 م ج.م", details: "هيكل خرساني بارتفاع 56 دوراً على ساحل البحر المتوسط — من أعلى الأبراج السكنية في العلمين الجديدة." },
    { tag: "صناعي", title: "مصنع زجاج ريجينكو", text: "المساحة: 16,000 م² · 3 هياكل معدنية + مبنى إداري · 5 أشهر · 45 عاملاً.", meta: "بني سويف · 2022 · 9 م ج.م", details: "مجمع مصنع بهياكل معدنية صناعية مع مبنى إداري، تم تسليمه في برنامج سريع لمدة 5 أشهر." },
    { tag: "صناعي", title: "إنشاء مصنع EUP", text: "المساحة: 35,000 م² · 2 مستودع + خزانات + مكاتب + ميزان · 12 شهراً · 60 عاملاً.", meta: "مدينة السادات · 2023 · 70 م ج.م", details: "حرم صناعي كبير يشمل مستودعين وخزانات تخزين ومكاتب وميزان شاحنات على مساحة 35,000 م²." },
    { tag: "تشطيبات", title: "تشطيب قاعة VIP - تيدا", text: "المساحة: 110 م² · 30 يوم · 12 عاملاً.", meta: "العين السخنة · 2025 · 1 م ج.م", details: "تشطيب راقٍ لقاعة استقبال VIP بمساحة 110 م² خلال 30 يوماً." },
    { tag: "تشطيبات", title: "تشطيب قاعة المؤتمرات - تيدا", text: "المساحة: 350 م² · 60 يوم · 18 عاملاً.", meta: "العين السخنة · 2026 · 3 م ج.م", details: "تشطيب فاخر لقاعة مؤتمرات بمساحة 350 م²، يشمل الصوتيات والإضاءة وأسطح جاهزة للأجهزة السمعية والبصرية." },
  ],
  zh: [
    { tag: "住宅", title: "中国员工宿舍 – CBD", text: "总承包：中国建筑工程总公司。\n面积：4,000 m² · 3栋楼+景观 · 150名工人。", meta: "新行政首都 · 2018 · 500万埃镑", details: "为CSCEC员工建造的3栋住宅综合体，含完整景观工程，位于埃及新行政首都，总面积4,000 m²。" },
    { tag: "住宅与商业", title: "C05 塔楼 – 混凝土工程", text: "总承包：CSCEC。面积：16,000 m²。18层+2地下+裙楼 · 36个月 · 450名工人。", meta: "新行政首都 · 2019 · 8,000万埃镑", details: "18层综合用途塔楼的全部混凝土工程，包括2层地下及裙楼，工期36个月，现场最多450名工人。" },
    { tag: "外装", title: "C07 与 C08 塔楼外立面", text: "总承包：CSCEC。面积：4,000 m² · 36层+2地下+裙楼 · 24个月 · 75名工人。", meta: "新行政首都 · 2021 · 6,000万埃镑", details: "两座36层塔楼的外立面工程，包括幕墙、外饰和高层包络工程。" },
    { tag: "住宅与商业", title: "D02 塔楼 – 混凝土工程", text: "总承包：CSCEC。面积：3,000 m² · 56层 · 30个月 · 450名工人。", meta: "新阿拉曼 · 2022 · 1.2亿埃镑", details: "地中海沿岸的56层混凝土主体结构，是新阿拉曼最高的住宅塔楼之一。" },
    { tag: "工业", title: "Regenco 玻璃厂", text: "面积：16,000 m² · 3座钢结构+办公楼 · 5个月 · 45名工人。", meta: "贝尼苏韦夫 · 2022 · 900万埃镑", details: "工业钢结构厂房综合体含办公楼，5个月快速交付。" },
    { tag: "工业", title: "EUP 工厂建设", text: "面积：35,000 m² · 2仓库+储罐+办公+地磅 · 12个月 · 60名工人。", meta: "萨达特城 · 2023 · 7,000万埃镑", details: "大型工业园区，含2座仓库、储罐、办公区和地磅，总面积35,000 m²。" },
    { tag: "外装", title: "TEDA VIP 大厅装修", text: "面积：110 m² · 30天 · 12名工人。", meta: "艾因苏赫纳 · 2025 · 100万埃镑", details: "110 m² VIP接待大厅高端装修，30天内完成。" },
    { tag: "外装", title: "TEDA 会议厅装修", text: "面积：350 m² · 60天 · 18名工人。", meta: "艾因苏赫纳 · 2026 · 300万埃镑", details: "350 m² 会议厅的高端装修，含声学、灯光和音视频面层。" },
  ],
} as const;

const whyByLang = {
  en: [
    { n: "01", title: "Proven Track Record", text: "More than 25 completed projects across Egypt — from desert highways to high-rise towers. Our portfolio speaks louder than any promise." },
    { n: "02", title: "Integrated EPC Delivery", text: "Engineering, Procurement, and Construction under one roof — removing fragmented supply chains and miscommunication." },
    { n: "03", title: "On-Time, On-Budget", text: "Industry-leading project management systems ensure delivery when promised, at the agreed cost." },
    { n: "04", title: "Safety First Culture", text: "Comprehensive HSE management embedded into every project phase. Zero harm is the standard." },
  ],
  ar: [
    { n: "01", title: "سجل حافل", text: "أكثر من 25 مشروعاً منجزاً في مصر — من الطرق الصحراوية إلى الأبراج الشاهقة. أعمالنا أبلغ من أي وعد." },
    { n: "02", title: "تسليم EPC متكامل", text: "الهندسة والتوريد والإنشاء تحت سقف واحد — لإلغاء تجزئة سلاسل الإمداد وسوء التواصل." },
    { n: "03", title: "في الموعد وفي الميزانية", text: "أنظمة إدارة مشاريع رائدة تضمن التسليم في الموعد وبالتكلفة المتفق عليها." },
    { n: "04", title: "ثقافة السلامة أولاً", text: "إدارة شاملة للصحة والسلامة والبيئة في كل مرحلة. لا أذى على الإطلاق." },
  ],
  zh: [
    { n: "01", title: "卓著业绩", text: "在埃及完成超过25个项目 — 从沙漠高速到高层塔楼。作品集胜过任何承诺。" },
    { n: "02", title: "一体化 EPC 交付", text: "工程、采购、施工一体化 — 消除供应链碎片化与沟通断层。" },
    { n: "03", title: "按时按预算", text: "行业领先的项目管理体系，确保按承诺交付、按约定成本交付。" },
    { n: "04", title: "安全至上文化", text: "全过程嵌入的HSE管理体系，零伤害是底线。" },
  ],
} as const;

/* ─────── ProjectSlider component ─────── */

function ProjectSlider({
  images,
  fallbacks,
  title,
  autoPlay = false,
  height = "h-48",
}: {
  images: string[];
  fallbacks: string[];
  title: string;
  autoPlay?: boolean;
  height?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState<boolean[]>(() => new Array(images.length).fill(false));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getSrc = (idx: number) =>
    failed[idx] ? fallbacks[idx] ?? fallbacks[0] : images[idx];

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoPlay, images.length]);

  return (
    <div className={`project-slider relative ${height} overflow-hidden bg-light-grey`}>
      {/* Slides */}
      {images.map((_, idx) => (
        <img
          key={idx}
          src={getSrc(idx)}
          alt={idx === 0 ? title : ""}
          aria-hidden={idx !== current}
          loading="lazy"
          onError={() =>
            setFailed((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            })
          }
          className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-in-out ${idx === current
            ? "opacity-100 scale-[1.03] z-[1]"
            : "opacity-0 scale-100 z-0"
            }`}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent z-[2] pointer-events-none" />

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="slider-arrow slider-arrow-left"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="slider-arrow slider-arrow-right"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-[3]">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goTo(idx); }}
              aria-label={`Go to image ${idx + 1}`}
              className={`slider-dot ${idx === current ? "slider-dot-active" : "slider-dot-inactive"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────── hooks/components ─────── */

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const duration = 1600;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function HoloConstellation() {
  const nodes = [
    [80, 120], [180, 70], [260, 150], [340, 90], [420, 180],
    [500, 100], [580, 200], [660, 80], [740, 170], [820, 110],
    [900, 220], [980, 130], [1060, 90], [1140, 180],
    [120, 260], [300, 320], [480, 280], [700, 340], [880, 300], [1080, 260],
    [220, 420], [440, 460], [620, 440], [820, 480], [1020, 420],
  ] as const;
  const edges: Array<[number, number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => [j, Math.hypot(n[0] - nodes[i][0], n[1] - nodes[i][1])] as [number, number])
      .filter(([j]) => j !== i)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 3);
    for (const [j, d] of dists) {
      if (j > i && d < 260) edges.push([i, j, d]);
    }
  }
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <filter id="cglow"><feGaussianBlur stdDeviation="1.8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g stroke="#7df9ff" strokeWidth="1" filter="url(#cglow)" opacity="0.9">
        {edges.map(([a, b], i) => {
          const [x1, y1] = nodes[a]; const [x2, y2] = nodes[b];
          const len = Math.hypot(x2 - x1, y2 - y1);
          return (<line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray={len} strokeDashoffset={len} className="holo-edge" style={{ animationDelay: `${(i % 18) * 0.18}s`, ['--len' as string]: len } as React.CSSProperties} />);
        })}
      </g>
      <g filter="url(#cglow)">
        {nodes.map(([x, y], i) => (
          <g key={`n-${i}`} className="holo-node" style={{ animationDelay: `${(i % 10) * 0.25}s` }}>
            <circle cx={x} cy={y} r="6" fill="#7df9ff" opacity="0.25" />
            <circle cx={x} cy={y} r="2.5" fill="#ffffff" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/* ─────── ContactForm ─────── */
const WHATSAPP_NUMBER = "201553654326"; // Egypt country code 20 + number without leading 0

type FormDict = {
  form: { name: string; company: string; email: string; phone: string; type: string; msg: string; send: string; thanks: string };
};

function ContactForm({ t, services }: { t: FormDict; services: ReadonlyArray<{ title: string }> }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `👤 ${t.form.name.replace(" *", "")}: ${name}`,
      company ? `🏢 ${t.form.company}: ${company}` : null,
      `✉️ ${t.form.email.replace(" *", "")}: ${email}`,
      phone ? `📞 ${t.form.phone}: ${phone}` : null,
      projectType ? `🏗️ ${t.form.type}: ${projectType}` : null,
      message ? `📝 ${message}` : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.location.href = url;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[280px] fade-up">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl">✓</div>
        <p className="font-display font-bold text-navy text-xl uppercase tracking-wide">{t.form.thanks}</p>
        <button
          onClick={() => setSent(false)}
          className="text-orange underline text-sm font-display tracking-wide"
        >
          ←
        </button>
      </div>
    );
  }

  return (
    <form className="reveal reveal-delay-2 bg-white p-8 space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.form.name}
          className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors"
        />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t.form.company}
          className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.form.email}
          className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.form.phone}
          className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors"
        />
      </div>
      <select
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors text-mid-grey"
      >
        <option value="" disabled>{t.form.type}</option>
        {services.map((s) => (<option key={s.title} value={s.title}>{s.title}</option>))}
      </select>
      <textarea
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.form.msg}
        className="w-full border border-light-grey px-4 py-3 focus:outline-none focus:border-orange transition-colors resize-none"
      />
      <button type="submit" className="btn-primary w-full justify-center">{t.form.send}</button>
    </form>
  );
}

const sponsorLogos = [
  "/projects/Sponsors/1.jpg",
  "/projects/Sponsors/1577699349749.jpeg",
  "/projects/Sponsors/16iu6pgY_400x400.jpg",
  "/projects/Sponsors/Alamal-Alsharif-Final-Logo-v1.png",
  "/projects/Sponsors/BR@4x-300x181.jpg",
  "/projects/Sponsors/Sinoma-cdi-Egypt-46057-1569154362.jpg",
  "/projects/Sponsors/Untitled.png",
  "/projects/Sponsors/WhatsApp%20Image%202023-05-09%20at%207.37.05%20PM.jpeg",
  "/projects/Sponsors/clogo_2025-05-21-10-15-07_W3pX7nl84KgtygAkTJbucQXX.jpg",
  "/projects/Sponsors/images.png",
  "/projects/Sponsors/imagess.png",
  "/projects/Sponsors/kessel-ag-vector-logo.png",
  "/projects/Sponsors/pne.png",
  "/projects/Sponsors/regenco-glass-mirror-manufacturer-v1.jpg",
  "/projects/Sponsors/screenshot-20251110-130842.png",
  "/projects/Sponsors/screenshot-20251110-133040.png",
  "/projects/Sponsors/.jpg"
];

function SponsorsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per millisecond

    const scroll = (time: number) => {
      if (!isDown) {
        const delta = time - lastTime;
        container.scrollLeft += speed * delta;

        // Loop back seamlessly using one third of the scroll width (since we have 3 copies)
        const oneThirdWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= oneThirdWidth) {
          container.scrollLeft -= oneThirdWidth;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDown]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDown(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftState(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;

    let newScrollLeft = scrollLeftState - walk;
    const oneThirdWidth = container.scrollWidth / 3;
    if (newScrollLeft >= oneThirdWidth) {
      newScrollLeft -= oneThirdWidth;
    } else if (newScrollLeft < 0) {
      newScrollLeft += oneThirdWidth;
    }
    container.scrollLeft = newScrollLeft;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-x-auto scrollbar-none py-4 select-none cursor-grab active:cursor-grabbing flex gap-12"
      dir="ltr"
    >
      {Array.from({ length: 3 }).map((_, listIdx) => (
        <div key={listIdx} className="flex gap-12 shrink-0 items-center">
          {sponsorLogos.map((logo, idx) => (
            <div
              key={`${listIdx}-${idx}`}
              className="h-20 w-40 flex items-center justify-center bg-white p-3 rounded-lg shadow-sm border border-navy/5 hover:border-orange/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 shrink-0 pointer-events-none"
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─────── Page ─────── */
function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const t = dict[lang];
  const services = servicesByLang[lang];
  const projects = projectsByLang[lang];
  const whyItems = whyByLang[lang];
  const isRTL = lang === "ar";

  // Re-run reveal observer whenever language changes (new DOM nodes rendered)
  const pageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    // Reset all reveal elements so they can animate in again
    el.querySelectorAll(".reveal").forEach((n) => n.classList.remove("in"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    // Small delay to let React re-render the new language content first
    const timer = setTimeout(() => {
      el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    }, 50);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIdx(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [openIdx]);


  const langFontClass = useMemo(() => lang === "ar" ? "font-arabic" : lang === "zh" ? "font-cjk" : "", [lang]);

  const langSwitcher = (
    <div className="flex items-center gap-1 border border-navy/20 rounded-sm overflow-hidden">
      {(["en", "ar", "zh"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-display font-bold uppercase tracking-wider transition-colors ${lang === l ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/5"}`}
          aria-pressed={lang === l}
        >
          {l === "en" ? "EN" : l === "ar" ? "ع" : "中"}
        </button>
      ))}
    </div>
  );

  const selected = openIdx !== null ? projects[openIdx] : null;

  return (
    <div ref={pageRef} className={langFontClass}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-[5%] h-[70px] shadow-[0_2px_12px_rgba(0,0,0,0.15)] border-b-[3px] border-orange">
        <a href="#home" className="flex items-center gap-3">
          <img src={tlgLogoUrl} alt="TLG logo" className="h-10 w-auto" />
        </a>
        <ul className="hidden md:flex gap-6 list-none items-center">
          {[
            ["about", t.nav.about],
            ["services", t.nav.services],
            ["projects", t.nav.projects],
            ["why", t.nav.why],
          ].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="text-navy font-display font-semibold text-[15px] tracking-wider uppercase hover:text-orange transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-orange text-white px-5 py-2 font-display font-bold text-[15px] tracking-wider uppercase hover:bg-orange-dark transition-colors">
              {t.nav.contact}
            </a>
          </li>
          <li>{langSwitcher}</li>
        </ul>
        <div className="md:hidden">{langSwitcher}</div>
      </nav>
      {/* HERO */}
      <section id="home" className="relative mt-[70px] min-h-[400px] md:min-h-[440px] py-4 md:py-8 flex items-center overflow-hidden bg-navy-dark">
        <img src={holoCity} alt="" aria-hidden="true" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-70 holo-bg-zoom" />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-navy-dark/90 via-navy-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-navy-dark/40" />
        <HoloConstellation />
        <div className="holo-scan" />
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="holo-particle" style={{ left: `${(i * 53) % 100}%`, bottom: `${(i * 37) % 60}%`, animationDelay: `${(i % 6) * 0.7}s`, animationDuration: `${6 + (i % 5)}s` }} />
          ))}
        </div>
        <div className="absolute -right-32 top-0 bottom-0 w-[280px] bg-orange/90 pointer-events-none z-0" style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }} />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          {/* Header Row: Slogan Tag + Active Badge */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 fade-up" style={{ animationDelay: "0.05s" }}>
            <p className="text-orange font-display font-bold tracking-[2px] uppercase text-2xl md:text-3xl">
              {t.hero.tag}
            </p>
            <div className={`flex items-center gap-3 text-white/90 font-display tracking-widest text-xs shrink-0 ${isRTL ? "flex-row-reverse" : ""}`} dir="ltr">
              <span className="w-3 h-3 rounded-full bg-orange pulse-dot" />
              <span>{t.hero.badge}</span>
            </div>
          </div>
          <h1 className={`font-display font-extrabold text-white text-[54px] sm:text-[76px] md:text-[100px] uppercase tracking-tight ${isRTL ? "leading-[1.3] rtl-hero" : "leading-[0.95]"}`}>
            <span className={`hero-line l1${isRTL ? " hero-line-rtl" : ""}`}>{t.hero.l1}</span>
            <span className={`hero-line l2 egypt-underline${isRTL ? " hero-line-rtl" : ""}`}>{t.hero.l2}</span>
            <span className={`hero-line l3${isRTL ? " hero-line-rtl" : ""}`}>{t.hero.l3}</span>
          </h1>
          <p className="fade-up mt-8 max-w-xl text-white/80 text-lg leading-relaxed" style={{ animationDelay: "0.85s" }}>{t.hero.desc}</p>
          <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "1.05s" }}>
            <a href="#projects" className="btn-primary">{t.hero.cta1}</a>
            <a href="#contact" className="btn-outline">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-navy-dark grid grid-cols-2 md:grid-cols-4 text-white">
        {[
          { num: 8, suffix: "+", label: t.stats[0].label },
          { num: 25, suffix: "+", label: t.stats[1].label },
          { num: 400, suffix: "+", label: t.stats[2].label },
          { num: 600, suffix: "M+", label: t.stats[3].label },
        ].map((s, i) => (
          <div key={i} className={`py-10 px-6 text-center ${i < 3 ? "md:border-r border-white/10" : ""} ${i < 2 ? "border-r md:border-r border-white/10" : ""}`}>
            <div className="font-display font-extrabold text-5xl md:text-6xl text-orange">
              <CountUp to={s.num} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-display tracking-wider uppercase text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-[8%] bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <div className="reveal">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.about.kicker}
            </p>
            {/* Title: Small Navy */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-navy tracking-normal leading-tight mt-2">
              {t.about.title.join(" ")}
            </h2>
            <div className="section-rule" />
            <p className="text-mid-grey leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-mid-grey leading-relaxed mb-6">{t.about.p2}</p>
            <a href="#contact" className="btn-primary">{t.about.cta}</a>
          </div>
          <div className="reveal reveal-delay-2 bg-navy text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="font-display text-2xl italic leading-snug mb-8 relative">{t.about.quote}</p>
            {t.about.bullets.map((b) => (
              <div key={b} className="flex gap-4 mb-4 relative">
                <div className="w-7 h-7 shrink-0 bg-orange text-white grid place-items-center font-bold">✓</div>
                <div className="text-white/85 leading-relaxed">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="py-16 px-6 md:px-[8%] bg-white overflow-hidden border-y border-light-grey">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center flex flex-col items-center mb-10">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.sponsors.kicker}
            </p>
            {/* Title: Small Navy */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-navy tracking-normal leading-tight mt-2">
              {t.sponsors.title}
            </h2>
            <div className="section-rule mx-auto" />
          </div>

          <SponsorsMarquee />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-[8%] bg-light-grey">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.services.kicker}
            </p>
            {/* Title: Small Navy */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-navy tracking-normal leading-tight mt-2">
              {t.services.title}
            </h2>
            <div className="section-rule" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1} lift-card bg-white p-8 border-l-4 border-orange`}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-navy text-xl uppercase tracking-wide mb-3">{s.title}</h3>
                <p className="text-mid-grey leading-relaxed text-[15px]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-[8%] bg-navy-dark">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.projectsSec.kicker}
            </p>
            {/* Title: Small White */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-white tracking-normal leading-tight mt-2">
              {t.projectsSec.title}
            </h2>
            <div className="section-rule" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setOpenIdx(i)}
                className={`reveal reveal-delay-${(i % 3) + 1} lift-card bg-white text-left relative overflow-hidden flex flex-col group cursor-pointer`}
              >
                <div className="relative overflow-hidden">
                  <ProjectSlider
                    images={projectImages[i]}
                    fallbacks={fallbackImages[i]}
                    title={p.title}
                    height="h-52"
                    autoPlay
                  />
                  <span className="absolute top-3 left-3 inline-block bg-orange text-white text-[13px] font-display font-bold tracking-wider uppercase px-3 py-1 z-[4]">{p.tag}</span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-navy text-lg uppercase tracking-wide mb-3 leading-tight">{p.title}</h3>
                  <p className="text-mid-grey text-sm leading-relaxed whitespace-pre-line mb-4 flex-1">{p.text}</p>
                  <div className="text-xs font-display tracking-wider uppercase text-orange border-t pt-3 border-light-grey flex justify-between items-center">
                    <span>{p.meta}</span>
                    <span className="text-navy group-hover:text-orange transition-colors cursor-pointer text-sm">{t.projectsSec.viewMore}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selected && openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_.2s_ease-out]"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className={`bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative ${langFontClass}`}
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 grid place-items-center bg-navy text-white hover:bg-orange transition-colors font-bold text-lg"
              aria-label={t.projectsSec.close}
            >✕</button>
            <div className="relative overflow-hidden">
              <ProjectSlider
                images={projectImages[openIdx]}
                fallbacks={fallbackImages[openIdx]}
                title={selected.title}
                autoPlay
                height="h-80"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-[4] pointer-events-none">
                <span className="inline-block bg-orange text-white text-[11px] font-display font-bold tracking-wider uppercase px-3 py-1 mb-3">{selected.tag}</span>
                <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl uppercase">{selected.title}</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="text-xs font-display tracking-wider uppercase text-orange mb-4">{selected.meta}</div>
              <p className="text-mid-grey leading-relaxed whitespace-pre-line mb-4">{selected.text}</p>
              <p className="text-navy leading-relaxed">{selected.details}</p>
            </div>
          </div>
        </div>
      )}

      {/* WHY */}
      <section id="why" className="py-24 px-6 md:px-[8%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.why.kicker}
            </p>
            {/* Title: Small Navy */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-navy tracking-normal leading-tight mt-2">
              {t.why.title}
            </h2>
            <div className="section-rule" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {whyItems.map((w, i) => (
              <div key={w.n} className={`reveal reveal-delay-${(i % 2) + 1} flex gap-6 group`}>
                <div className="font-display font-extrabold text-6xl text-light-grey group-hover:text-orange transition-colors shrink-0">{w.n}</div>
                <div>
                  <h3 className="font-display font-bold text-navy text-2xl uppercase mb-2">{w.title}</h3>
                  <p className="text-mid-grey leading-relaxed">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-[8%] relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1b3a5c 0%, #0d2340 100%)" }}>
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="max-w-6xl mx-auto relative">
          <div className="reveal">
            {/* Kicker: Large Orange */}
            <p className="text-orange mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-none">
              {t.contact.kicker}
            </p>
            {/* Title: Small White */}
            <h2 className="font-display font-normal uppercase text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] text-white tracking-normal leading-tight mt-2">
              {t.contact.title}
            </h2>
            <div className="section-rule" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div className="reveal text-white/85 space-y-5">
              <p className="leading-relaxed">{t.contact.intro}</p>
              {[
                ["📍", t.contact.labels[0], t.contact.address],
                ["📞", t.contact.labels[1], "+20 015 53654326"],
                ["✉️", t.contact.labels[2], "Tonglong2018@gmail.com"],
                ["🕐", t.contact.labels[3], t.contact.hours],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-orange grid place-items-center text-xl shrink-0">{icon}</div>
                  <div>
                    <div className="font-display font-bold uppercase tracking-wider text-sm text-white">{label}</div>
                    <div className="text-white/75 text-sm">{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm t={t.contact} services={services} />
          </div>
        </div>
      </section>

      <footer className="bg-navy-dark text-white/70 py-8 px-6 text-center text-sm font-display tracking-wider">
        {t.footer}
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}