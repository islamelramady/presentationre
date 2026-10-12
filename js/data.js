/* ===== Peachtree Presentation Guide — V2 (Bilingual, one turn per speaker) ===== */

const DATA = {
  titleEn: "Computerized Accounting Software",
  titleAr: "برامج المحاسبة الآلية",
  subtitleEn: "Benefits and Core Tasks in Peachtree",
  subtitleAr: "مميزات ومهام Peachtree الأساسية",
  tagsEn: ["Selling", "Purchasing", "Payroll", "Inventory", "Reports"],
  tagsAr: ["البيع", "الشراء", "المرتبات", "المخزون", "التقارير"],

  presenters: [
    {
      id: "ashraf",
      nameAr: "إسلام أشرف", nameEn: "Islam Ashraf",
      initials: "IA",
      roleAr: "المقدمة والأجندة", roleEn: "Introduction & Roadmap",
      slides: [1, 4],
      minutes: 2,
      color: "#E8B84B",
      tipAr: "افتح بثقة: عرّف نفسك، عرّف بالموضوع، وبعدين قدّم خريطة المهام الخمس قبل التسليم.",
      tipEn: "Open with confidence: introduce yourself, introduce the topic, then give the five-task roadmap before handing over.",
      handoffTo: "reda",
      handoffEn: "Now that you know our plan, let me hand it over to Islam Reda to explain the benefits.",
      handoffAr: "دلوقتي وبعد ما عرفتم الترتيب، هسلّم لإسلام رضا يشرح المميزات."
    },
    {
      id: "reda",
      nameAr: "إسلام رضا", nameEn: "Islam Reda",
      initials: "IR",
      roleAr: "المميزات", roleEn: "Advantages",
      slides: [2, 3],
      minutes: 3.5,
      color: "#4FC3F7",
      tipAr: "كل ميزة شرحها لوحدها، واختتم بقاعدة: المميزات لازم تتفوق على التكلفة.",
      tipEn: "Explain each benefit separately, and close with the rule: benefits must exceed the cost.",
      handoffTo: "hana",
      handoffEn: "Now that we know the benefits, let's move from why to how — Hana will start the first core task: selling.",
      handoffAr: "بما إننا عارفين المميزات، يلا ننتقل من «ليه» لـ«إزاي» — هنا هتبدأ المهمة الأولى: البيع."
    },
    {
      id: "hana",
      nameAr: "هنا عادل", nameEn: "Hana Adel",
      initials: "HA",
      roleAr: "البيع", roleEn: "Task 1 — Selling",
      slides: [5, 6],
      minutes: 3,
      color: "#81C784",
      tipAr: "اشرح الخطوات الأربعة بالترتيب واذكر مسار المنيو بالظبط (Tasks › ...).",
      tipEn: "Walk through the four steps in order and mention the menu path exactly (Tasks › ...).",
      handoffTo: "jana",
      handoffEn: "This is how selling works — from the sales order to the deposit ticket. Jana will now explain the second core task: purchasing and payments.",
      handoffAr: "وده البيع — من أمر البيع لإيصال الإيداع. جنا هتشرح المهمة التانية: الشراء والمدفوعات."
    },
    {
      id: "jana",
      nameAr: "جنا وائل", nameEn: "Jana Wael",
      initials: "JW",
      roleAr: "الشراء", roleEn: "Task 2 — Purchasing",
      slides: [7, 8],
      minutes: 3,
      color: "#BA68C8",
      tipAr: "وضّح الفرق بين أوامر الشراء واستلام المخزون والدفع للموردين.",
      tipEn: "Make clear the difference between purchase orders, receiving inventory, and paying vendors.",
      handoffTo: "mohamed",
      handoffEn: "Purchasing is complete — order, receive, and pay. Mohamed will now cover two tasks together: payroll and inventory.",
      handoffAr: "الشراء خلص — اطلب، استلم، وادفع. محمد هيشرح مهمتين مع بعض: المرتبات والمخزون."
    },
    {
      id: "mohamed",
      nameAr: "محمد عبد الوهاب", nameEn: "Mohamed Abdelwahab",
      initials: "MA",
      roleAr: "المرتبات والمخزون", roleEn: "Tasks 3 & 4 — Payroll & Inventory",
      slides: [9, 10],
      minutes: 4,
      color: "#FF8A65",
      tipAr: "أطول جزء: قسمه نصين — Payroll الأول (الموظف والاقتطاعات والصافي) وبعدين Inventory (نقطة إعادة الطلب و FIFO).",
      tipEn: "Longest part: split it in two — Payroll first (employee, deductions, net pay), then Inventory (reorder point and FIFO).",
      handoffTo: "ghadeer",
      handoffEn: "So payroll and inventory are handled automatically. The last task turns all this data into decisions — Ghadeer will present the reports and close.",
      handoffAr: "المرتبات والمخزون البرنامج بيتعامل معاهم أوتوماتيك. المهمة الأخيرة بتحول البيانات لقرارات — غدير هتشرح التقارير وتقفل."
    },
    {
      id: "ghadeer",
      nameAr: "غدير محمد", nameEn: "Ghadeer Mohamed",
      initials: "GM",
      roleAr: "التقارير والخاتمة", roleEn: "Task 5 — Reports & Conclusion",
      slides: [11, 12, 13],
      minutes: 4.5,
      color: "#F06292",
      tipAr: "مثال Aged Receivables هو الأهم: وضّح إزاي التقرير بيحوّل لقرار — تحصيل أو تقييد ائتمان أو إيقاف تعامل.",
      tipEn: "The Aged Receivables example is key: show how the report becomes a decision — collect, cut credit, or stop dealing.",
      handoffTo: null,
      handoffEn: "Thank you all for listening — any questions?",
      handoffAr: "شكراً للجميع — فيه أسئلة؟"
    }
  ],

  slides: [
    {
      n: 1, owner: "ashraf",
      kicker: "Title",
      titleEn: "COMPUTERIZED ACCOUNTING SOFTWARE",
      subtitleEn: "Benefits and Core Tasks in Peachtree",
      gistAr: "شريحة العنوان: البرنامج وهنتكلم عن مميزاته ومهامه الخمس.",
      pointsEn: ["Selling • Purchasing • Payroll • Inventory • Reports"],
      say: [
        { en: "Good morning everyone. Today we'll talk about computerized accounting software, and specifically Peachtree.", ar: "صباح الخير للجميع. النهاردة هنتكلم عن برامج المحاسبة الآلية (Computerized Accounting)، وبالأخص برنامج Peachtree." },
        { en: "My name is Islam Ashraf, and we'll cover two things: the benefits of the software, and the five core tasks inside it — selling, purchasing, payroll, inventory and reports.", ar: "اسمي إسلام أشرف، وهنغطي حاجتين: مميزات البرنامج، والمهام الخمس الأساسية اللي بتتعمل جواه — البيع، الشراء، المرتبات، المخزون، والتقارير." },
        { en: "First, let me hand it over to Islam Reda to explain the benefits — we'll start with why.", ar: "الأول، هسلّم لإسلام رضا يشرح المميزات — هنبدأ بـ«ليه»." }
      ],
      noteAr: "قدّم نفسك في أول سطر.",
      noteEn: "Introduce yourself in the first line."
    },
    {
      n: 4, owner: "ashraf",
      kicker: "CORE TASKS",
      titleEn: "Five core accounting tasks in the software",
      subtitleEn: "Every task starts from a menu: Tasks, Maintain, or Reports & Forms.",
      gistAr: "خريطة البرزنتيشن: خمس مهام أساسية، وكلها بتبدأ من المنيو.",
      pointsEn: [
        "1. Selling — Goods & services",
        "2. Purchasing — Orders & payments",
        "3. Payroll — Wages & deductions",
        "4. Inventory — Track stock levels",
        "5. Reports — Decision making",
        "Every task starts from a menu: Tasks, Maintain, or Reports & Forms."
      ],
      say: [
        { en: "Here is our roadmap for today.", ar: "ده ترتيب كلامنا النهاردة." },
        { en: "In Peachtree, every task starts from the same menu: Tasks, Maintain, or Reports & Forms.", ar: "في Peachtree، كل مهمة بتبدأ من نفس المنيو: Tasks أو Maintain أو Reports & Forms." },
        { en: "The software handles five core accounting tasks: selling goods and services, purchasing and payments, payroll, inventory tracking, and reports for decision making.", ar: "البرنامج بيتعامل مع خمس مهام محاسبية أساسية: بيع السلع والخدمات، الشراء والمدفوعات، المرتبات، متابعة المخزون، والتقارير اللي تساعد في اتخاذ القرار." },
        { en: "Now, why do companies use this software at all? Let me hand it over to Islam Reda to explain the benefits.", ar: "طب ليه الشركات بتستخدم البرنامج ده أساساً؟ هسلّم لإسلام رضا يشرح المميزات." }
      ],
      noteAr: "دي شريحة الأجندة — خلي الجمهور يعرف الترتيب من دلوقتي.",
      noteEn: "This is the agenda slide — let the audience know the order now."
    },
    {
      n: 2, owner: "reda",
      kicker: "BENEFITS",
      titleEn: "Why use computerized accounting software?",
      subtitleEn: "",
      gistAr: "أربع مميزات: معلومات في وقتها، متابعة النقد، إدارة المخزون، والمرتبات.",
      pointsEn: [
        "Timely & Accurate Information — accurate reports arrive on time, so managers can analyze data, judge performance and decide with confidence.",
        "Cash In & Cash Out — track money earned from sales and services, and money spent on goods and vendors.",
        "Inventory Management — know quantities and prices of goods on hand to avoid sudden shortages or needless overstock.",
        "Payroll Made Easy — calculate hours, deductions, taxes and benefits, and produce related tax documents."
      ],
      say: [
        { en: "So why use computerized accounting software? The first benefit is timely and accurate information.", ar: "طيب ليه نستخدم برنامج محاسبة آلي؟ أول ميزة: المعلومات بتوصل في وقتها وبشكل دقيق." },
        { en: "Accurate financial reports arrive on time, so managers can analyze data, judge performance and decide with confidence.", ar: "التقارير المالية الدقيقة بتتوفر في وقتها، فالمدير يقدر يحلل البيانات ويقيّم الأداء وياخد قرارات بثقة." },
        { en: "The second benefit is tracking cash in and cash out — the money earned from sales and services, and the money spent on goods and vendors.", ar: "تاني ميزة: متابعة النقد الداخل والخارج — الفلوس اللي داخلة من البيع والخدمات، واللي خارجية في السلع والموردين." },
        { en: "The third benefit is inventory management: you always know quantities and prices of goods on hand, so you avoid sudden shortages or needless overstock.", ar: "تالت ميزة: إدارة المخزون — عارف فيه إيه وبكام دايمًا، فتتجنب النقص المفاجئ أو التخزين الزايد." },
        { en: "And the fourth is payroll made easy — the software calculates hours, deductions, taxes and benefits, and produces the related tax documents.", ar: "ورابعة ميزة: تسهيل المرتبات — البرنامج بيحسب الساعات والاقتطاعات والضرائب والمزايا، ويطلع المستندات الضريبية." }
      ],
      noteAr: "كل ميزة لوحدها — متزحمش.",
      noteEn: "One benefit at a time — don't rush."
    },
    {
      n: 3, owner: "reda",
      kicker: "BENEFITS",
      titleEn: "Stronger control, trust and funding",
      subtitleEn: "BENEFIT / COST RULE: Benefits > Costs",
      gistAr: "تحكم أقوى وقوائم موثوقة وتمويل أسهل — مع القاعدة الذهبية.",
      pointsEn: [
        "Efficiency & internal control — daily activities run more effectively, clear procedures protect assets and reduce errors or misappropriation.",
        "Reliable financial statements — better-controlled data raises confidence in the business.",
        "Easier external dealings — trustworthy statements make it easier to obtain bank loans and financing.",
        "The benefits of the software must exceed the cost of acquiring and implementing it."
      ],
      say: [
        { en: "On top of that, the software gives stronger control and trust.", ar: "وفوق كده، البرنامج بيدي تحكم وثقة أكبر." },
        { en: "Daily activities run more effectively, and clear procedures protect assets and reduce errors or misappropriation.", ar: "الأنشطة اليومية بتمشي بكفاءة أعلى، والإجراءات الواضحة بتحمي الأصول وتقلل الأخطاء أو اختلاس الأموال." },
        { en: "As a result, the financial statements become reliable, which raises confidence in the business.", ar: "ونتيجة لكده، القوائم المالية بقت موثوقة، والثقة في البيزنس بتزيد." },
        { en: "And when your statements are trustworthy, it becomes easier to get bank loans and financing.", ar: "ولما القوائم تبقى موثوقة، بيبقى الحصول على قروض بنكية وتمويل أسهل." },
        { en: "But remember the golden rule: the benefits of the software must exceed the cost of buying and implementing it — only then does it add real value.", ar: "بس افتكر القاعدة الذهبية: مميزات البرنامج لازم تتفوق على تكلفة شرائه وتطبيقه — وقتها بس يبقى ضايف قيمة حقيقية." },
        { en: "Now that we know the benefits, let's see the tasks in action. Hana will start with the first core task: selling.", ar: "دلوقتي وإحنا عارفين المميزات، يلا نشوف المهام عملي. هنا هتبدأ بأول مهمة أساسية: البيع." }
      ],
      noteAr: "القاعدة (المميزات > التكلفة) غالبًا هتتسأل عنها.",
      noteEn: "The rule (benefits > cost) is likely to be asked."
    },
    {
      n: 5, owner: "hana",
      kicker: "CORE TASK 1 | 4 STEPS",
      titleEn: "Task 1: Selling goods and services",
      subtitleEn: "",
      gistAr: "البيع في 4 خطوات: أمر بيع ← فاتورة ← استلام نقد ← إيداع بنكي.",
      pointsEn: [
        "1. Sales Orders — Tasks › Quotes & Sales Orders › Sales Orders: enter customer ID, address, date, quantity, description, unit price, tax and shipping.",
        "2. Sales Invoicing — Tasks › Sales Invoices: invoice from an earlier sales order (Apply to Sales Order) or record a direct sale (Apply to Sales).",
        "3. Receive Money — Tasks › Receive Money: record cash or check receipts, applied to invoices or directly to revenue.",
        "4. Create Deposit Tickets — Tasks › Select for Deposit: group the money received and deposit it into the bank account."
      ],
      say: [
        { en: "Our first core task is selling goods and services, and it happens in four steps.", ar: "أول مهمة أساسية هي بيع السلع والخدمات، وبتتم في أربع خطوات." },
        { en: "Step one: sales orders. From Tasks, Quotes and Sales Orders, Sales Orders — you enter the customer ID, address, date, quantity, item description, unit price, tax and shipping charges.", ar: "الخطوة الأولى: أوامر البيع — من Tasks ثم Quotes & Sales Orders ثم Sales Orders، وتدخل رقم العميل والعنوان والتاريخ والكمية ووصف الصنف وسعر الوحدة والضريبة والشحن." },
        { en: "Step two: sales invoicing, from Tasks, Sales Invoices. You can invoice from an earlier sales order, or record a direct sale.", ar: "الخطوة الثانية: فواتير البيع من Tasks ثم Sales Invoices — تعمل فاتورة من أمر بيع قديم، أو تسجل بيع مباشر." },
        { en: "Step three: receive money. You record cash or check receipts, applied to accumulated invoices or directly to revenue.", ar: "الخطوة الثالثة: استلام النقد — تسجل المقبوضات كاش أو شيكات، مرتبطة بالفواتير أو بالإيرادات مباشرة." },
        { en: "And step four: create deposit tickets — from Tasks, Select for Deposit — to group the money received and deposit it into the bank account.", ar: "والخطوة الرابعة: إيصالات الإيداع من Tasks ثم Select for Deposit — بتجمّع النقد المستلم وتودعه في الحساب البنكي." }
      ],
      noteAr: "اذكري مسار المنيو بالظبط لكل خطوة.",
      noteEn: "State the exact menu path for each step."
    },
    {
      n: 6, owner: "hana",
      kicker: "TASK 1 IN ACTION",
      titleEn: "Inside the software: Sales Invoices",
      subtitleEn: "Screenshot from the program",
      gistAr: "جوه البرنامج: تختار العميل، تحدد نوع التطبيق، والإجماليات تحسب لوحدها.",
      pointsEn: [
        "1. Customer details — pick the Customer ID and the program fills in the name and address.",
        "2. Apply to — Apply to Sales Order for an earlier order, or Apply to Sales for a direct sale.",
        "3. Automatic totals — subtotal, sales tax and freight roll up into the invoice total."
      ],
      say: [
        { en: "Now let me show you how this looks inside the software.", ar: "دلوقتي هوريكم الشكل ده جوه البرنامج." },
        { en: "First, you pick the Customer ID and the program fills in the name and address automatically.", ar: "الأول بتختار رقم العميل (Customer ID) والبرنامج بيملا الاسم والعنوان أوتوماتيك." },
        { en: "Second, you choose Apply to — Sales Order if the customer ordered before, or Sales for a direct sale.", ar: "تاني حاجة بتختار «Apply to»: أمر بيع لو العميل كان طلب قبل كده، أو Sales لو البيع مباشر." },
        { en: "And third, the program calculates the subtotal, sales tax and freight automatically to give you the invoice total.", ar: "وتالت حاجة، البرنامج بيحسب الإجمالي الجزئي والضريبة والشحن أوتوماتيك ويعطيك إجمالي الفاتورة." },
        { en: "So this is selling — from the sales order to the deposit ticket. Jana will now explain the second core task: purchasing and payments.", ar: "فده البيع — من أمر البيع لإيصال الإيداع. جنا هتشرح المهمة التانية: الشراء والمدفوعات." }
      ],
      noteAr: "لو السكرين مش واضح، استخدمي المؤشر.",
      noteEn: "Use the pointer if the screen isn't clear."
    },
    {
      n: 7, owner: "jana",
      kicker: "CORE TASK 2 | 3 STEPS",
      titleEn: "Task 2: Purchasing and payments",
      subtitleEn: "",
      gistAr: "الشراء في 3 خطوات: أمر شراء ← استلام وفاتورة ← دفع للموردين.",
      pointsEn: [
        "1. Purchase Orders — Tasks › Purchase Orders: identify the vendor and the goods you need to order.",
        "2. Receive Inventory / Enter Bills — Tasks › Purchases / Receive Inventory: record the goods received with the vendor invoice.",
        "3. Pay Vendors — Tasks › Payments: pay one specific invoice or several at once, applied to invoices or expenses."
      ],
      say: [
        { en: "The second core task is purchasing and payments, in three steps.", ar: "المهمة التانية هي الشراء والمدفوعات، في ثلاث خطوات." },
        { en: "Step one: purchase orders. From Tasks, Purchase Orders — you identify the vendor and the goods you need to order.", ar: "الأولى: أوامر الشراء من Tasks ثم Purchase Orders — تحدد المورد والسلع المطلوبة." },
        { en: "Step two: receive inventory and enter bills. From Tasks, Purchases, Receive Inventory — you record the goods received together with the vendor invoice.", ar: "التانية: استلام المخزون وتسجيل الفواتير من Tasks ثم Purchases ثم Receive Inventory — تسجل السلع المستلمة مع فاتورة المورد." },
        { en: "Step three: pay vendors, from Tasks, Payments. You can pay one specific invoice or several at once.", ar: "التالتة: الدفع للموردين من Tasks ثم Payments — تقدر تدفع فاتورة واحدة أو أكتر في نفس الوقت." }
      ],
      noteAr: "أمر الشراء بيجي قبل الاستلام.",
      noteEn: "The purchase order comes before receiving."
    },
    {
      n: 8, owner: "jana",
      kicker: "TASK 2 IN ACTION",
      titleEn: "Inside the software: Receiving a Bill",
      subtitleEn: "Screenshot from the program",
      gistAr: "استلام الفاتورة: تختار المورد، تسجل الأصناف، والصافي يتحسب لوحده.",
      pointsEn: [
        "1. Vendor details — select the Vendor ID to load the supplier and shipping information.",
        "2. Items received — list each item with its quantity and unit cost; amounts are calculated for you.",
        "3. Net due — the invoice total less payments gives the amount owed to the vendor."
      ],
      say: [
        { en: "Inside the software, receiving a bill works like this.", ar: "جوه البرنامج، استلام الفاتورة بيتم كالتالي." },
        { en: "First, you select the Vendor ID and the supplier and shipping information loads automatically.", ar: "الأول بتختار رقم المورد (Vendor ID) ومعلومات المورد والشحن بتيجي أوتوماتيك." },
        { en: "Then you list each item with its quantity and unit cost, and the program calculates the amounts for you.", ar: "وبعدين بتسجل كل صنف بالكمية وسعر الوحدة، والبرنامج بيحسب لك المبالغ." },
        { en: "Finally, the invoice total minus payments gives you the net amount owed to the vendor.", ar: "وأخيراً، إجمالي الفاتورة ناقص المدفوعات = المبلغ المستحق للمورد." },
        { en: "So that's purchasing — order, receive, and pay. Mohamed will now cover two tasks together: payroll and inventory.", ar: "فده الشراء — اطلب، استلم، وادفع. محمد هيشرح مهمتين مع بعض: المرتبات والمخزون." }
      ],
      noteAr: "الشاشة دي شبه فاتورة البيع — اربطيهم.",
      noteEn: "This screen is similar to sales invoicing — link them."
    },
    {
      n: 9, owner: "mohamed",
      kicker: "CORE TASKS 3 & 4",
      titleEn: "Tasks 3 and 4: Payroll and inventory",
      subtitleEn: "",
      gistAr: "المرتبات: اختر الموظف وحسب الاقتطاعات. المخزون: تابع الكميات وحدد نقطة إعادة الطلب.",
      pointsEn: [
        "Payroll management — Tasks › Payroll Entry: select the Employee ID; hours and base pay appear automatically; deductions, taxes and withholdings are calculated; net pay with flexibility.",
        "Inventory tracking — Maintain › Inventory Items: monitor quantities on hand, set the reorder point, choose a costing method (e.g. FIFO), avoid stock-outs and overstock."
      ],
      say: [
        { en: "Tasks three and four are payroll and inventory.", ar: "المهمة تلاتة وأربعة: المرتبات والمخزون." },
        { en: "In payroll, from Tasks, Payroll Entry, you select the Employee ID. The hours worked and base pay appear automatically, and the software calculates deductions, taxes and withholdings to give you the net pay.", ar: "في المرتبات: من Tasks ثم Payroll Entry تختار رقم الموظف — ساعات العمل والأجر الأساسي بيظهروا أوتوماتيك، والبرنامج بيحسب الاقتطاعات والضرائب ويوصلك للصافي." },
        { en: "For inventory, from Maintain, Inventory Items, you monitor the quantities on hand, set the reorder point, and choose a costing method — for example FIFO. This way you avoid both stock-outs and overstock.", ar: "أما المخزون: من Maintain ثم Inventory Items — بتتابع الكميات المتاحة، وتحدد نقطة إعادة الطلب، وتختار طريقة تقييم زي FIFO — فبتتجنب النقص والتخزين الزايد." }
      ],
      noteAr: "FIFO بمعنى: اللي يدخل الأول يخرج الأول.",
      noteEn: "FIFO means: first in, first out."
    },
    {
      n: 10, owner: "mohamed",
      kicker: "TASKS 3 & 4 IN ACTION",
      titleEn: "Inside the software: Payroll and Inventory",
      subtitleEn: "Screenshot from the program",
      gistAr: "شاشة المرتبات وشاشة المخزون: كل البيانات في مكان واحد.",
      pointsEn: [
        "Payroll Entry — hours, pay, deductions and net pay appear once you pick the employee.",
        "Inventory Items — quantity on hand, reorder point and costing method (FIFO) in one place."
      ],
      say: [
        { en: "Here's how both look inside the program.", ar: "وده شكلهم جوه البرنامج." },
        { en: "In Payroll Entry, the hours, pay, deductions and net pay all appear as soon as you pick the employee.", ar: "في Payroll Entry، الساعات والأجر والاقتطاعات والصافي بيظهروا أول ما تختار الموظف." },
        { en: "And in Inventory Items, the quantity on hand, the reorder point and the costing method — FIFO — are all in one place.", ar: "وفي Inventory Items، الكمية المتاحة ونقطة إعادة الطلب وطريقة التقييم FIFO — كلهم في مكان واحد." },
        { en: "So tasks one to four are covered. The last task turns all this data into decisions — Ghadeer will present the reports and close.", ar: "فكده خلصنا المهام من الأولى للرابعة. المهمة الأخيرة بتحول البيانات دي لقرارات — غدير هتشرح التقارير وتقفل." }
      ],
      noteAr: "أطول جزء — تحكم في السرعة.",
      noteEn: "Longest part — control your speed."
    },
    {
      n: 11, owner: "ghadeer",
      kicker: "CORE TASK 5",
      titleEn: "Task 5: Reports for decision making",
      subtitleEn: "Aged Receivables report",
      gistAr: "التقارير: تقرير المتأخرات بيوريك مين مأخر وبيحوّل لقرار.",
      pointsEn: [
        "Reports & Forms › Accounts Receivable › Aged Receivables",
        "Shows overdue invoices, days late and customers who have not paid.",
        "Decisions it supports: collect outstanding debts, reduce a customer's credit limit, stop dealing with late payers."
      ],
      say: [
        { en: "The fifth and last core task is reports for decision making.", ar: "المهمة الخامسة والأخيرة: التقارير اللي بتساعد في اتخاذ القرار." },
        { en: "Let's take the Aged Receivables report. From Reports and Forms, Accounts Receivable, Aged Receivables.", ar: "خدوا تقرير أعمار الذمم (Aged Receivables) كمثال: من Reports & Forms ثم Accounts Receivable ثم Aged Receivables." },
        { en: "It shows overdue invoices, how many days late each one is, and which customers have not paid.", ar: "بيوريك الفواتير المتأخرة، كل واحدة متأخرة كام يوم، ومين العملاء اللي مدفعوش." },
        { en: "This report supports real decisions: collect outstanding debts, reduce a customer's credit limit, or even stop dealing with late payers.", ar: "التقرير ده بيدعم قرارات حقيقية: تحصيل المتأخرات، تقليل حد ائتمان عميل، أو حتى إيقاف التعامل مع المتأخرين." }
      ],
      noteAr: "اكتبي على السبورة: العمليات → البيانات → التقارير → القرارات.",
      noteEn: "On the board: Transactions → Data → Reports → Decisions."
    },
    {
      n: 12, owner: "ghadeer",
      kicker: "KEY TAKEAWAYS",
      titleEn: "From transaction to decision",
      subtitleEn: "Thank you",
      gistAr: "الخاتمة: معلومات دقيقة، خمس مهام، تحكم أفضل، والمميزات أكبر من التكلفة.",
      pointsEn: [
        "01. Accurate & timely — reliable information drives sound decisions.",
        "02. Five core tasks — selling, purchasing, payroll, inventory and reports.",
        "03. Controlled & trusted — better control, fewer errors, easier financing.",
        "04. Benefits > Costs — adopt the software only when value exceeds cost."
      ],
      say: [
        { en: "To sum up our presentation: first, information is accurate and timely, and reliable information drives sound decisions.", ar: "نلخّص البرزنتيشن: أولاً، المعلومة دقيقة وفي وقتها، والمعلومة الموثوقة بتخلي القرارات سليمة." },
        { en: "Second, the five core tasks — selling, purchasing, payroll, inventory and reports — cover the whole cycle from transaction to decision.", ar: "ثانياً، المهام الخمس — البيع والشراء والمرتبات والمخزون والتقارير — بتغطي الدورة كاملة من العملية للقرار." },
        { en: "Third, the software gives better control, fewer errors, and easier financing.", ar: "ثالثاً، البرنامج بيدي تحكم أفضل وأخطاء أقل وتمويل أسهل." },
        { en: "And finally, remember the rule: adopt the software only when the benefits exceed the costs.", ar: "وأخيراً، افتكر القاعدة: استخدم البرنامج لما المميزات تتفوق على التكاليف بس." },
        { en: "Thank you all for listening. This is our team, and we're happy to answer any questions.", ar: "شكراً لحسن استماعكم. وده فريقنا، ومستعدين نجاوب على أي أسئلة." }
      ],
      noteAr: "استنى لحظة بعد كل نقطة.",
      noteEn: "Pause briefly after each point."
    },
    {
      n: 13, owner: "ghadeer",
      kicker: "PRESENTED BY",
      titleEn: "Our Team",
      subtitleEn: "",
      gistAr: "شريحة الفريق والتقديم على الانتباه.",
      pointsEn: [
        "Islam Ashraf", "Islam Reda", "Mohamed Abdelwahab",
        "Jana Wael", "Hana Adel", "Ghadeer Mohamed"
      ],
      say: [
        { en: "This is our team: Islam Ashraf, Islam Reda, Mohamed Abdelwahab, Jana Wael, Hana Adel, and Ghadeer Mohamed.", ar: "وده فريقنا: إسلام أشرف، وإسلام رضا، ومحمد عبد الوهاب، وجنا وائل، وهنا عادل، وغدير محمد." },
        { en: "Thank you for your attention — any questions?", ar: "شكراً لكم — فيه أسئلة؟" }
      ],
      noteAr: "لو مفيش أسئلة: Thank you for listening.",
      noteEn: "If no questions: Thank you for listening."
    }
  ]
};
