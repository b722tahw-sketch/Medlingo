// ============================================================
// MedLingo 生理學題庫 — physiology.js
// 放置路徑：data/physiology.js
// 結構：10 里程碑 × (3單元×5題 + 6魔王題) = 210 題
// ============================================================
const Q = (q, o, a, e) => ({ q, o, a, e });

const MS = [


// ════════════════════════════════════════════════════════════
// 里程碑 1：細胞生理與體液
// ════════════════════════════════════════════════════════════
{
  id: 1, title: '細胞生理與體液', em: '🔬', c: '#2EC4B6',
  u: [
    {
      id: 'a', t: '體液分布與細胞連結', em: '💧',
      qs: [
        Q('人體細胞內液（ICF）約佔體重多少百分比？',
          ['20%','30%','40%','60%'], 2,
          'ICF 佔總水量 2/3，約體重 40%；ECF 佔 1/3，約 20%（血漿 5% + 組織間液 15%）。口訣：40-20-15-5。'),
        Q('「緊密結合」（Tight junction）的主要生理功能為何？',
          ['作為微纖維附著處','形成離子滲透障壁並維持細胞極性','允許分子量 <1000 的溶質通過','負責細胞間快速電傳導'], 1,
          '緊密結合由嵴（ridge）構成，封閉細胞間隙，形成離子障壁並使細胞維持頂/底極性。'),
        Q('裂隙結合（Gap junction）的孔徑直徑，在胞內鈣濃度升高時如何改變？',
          ['增大','縮小','不變','先增大後縮小'], 1,
          '胞內 Ca²⁺↑ → Gap junction 孔徑縮小，可保護鄰近細胞免受受損細胞的「死亡訊號」擴散。'),
        Q('關於胞橋小體（Desmosome）的附著纖維，下列何者正確？',
          ['微纖維（Microfilament）','微管（Microtubule）','中間纖維（Intermediate filament）','粗肌絲'], 2,
          '胞橋小體是細胞膜增厚處，以中間纖維附著提供強大機械強度；帶狀黏連（Zonula adherens）才是微纖維附著處。'),
        Q('欲精確測定人體「細胞外液總量」，應使用何種示蹤物的稀釋法？',
          ['Evans blue（伊凡斯藍）','氧化氘（D₂O）','菊糖（Inulin）','放射性鈉⁂²⁴Na'], 2,
          'Inulin 稀釋法測 ECF；Evans blue 測血漿量；D₂O 測總體液量；⁂²⁴Na 亦可測 ECF 但略高估。'),
      ]
    },
    {
      id: 'b', t: '離子分布與靜止膜電位', em: '⚡',
      qs: [
        Q('正常生理狀態下，胞外（ECF）與胞內（ICF）的 Na⁺ 濃度各約為多少 mmol/L？',
          ['ECF 15 / ICF 150','ECF 150 / ICF 15','ECF 5.5 / ICF 150','ECF 150 / ICF 5.5'], 1,
          'Na⁺：ICF ≈ 15，ECF ≈ 150 mmol/L。K⁺ 相反（ICF ≈ 150，ECF ≈ 5.5）。口訣：Na 在外 150，K 在內 150。'),
        Q('依 Nernst 方程式，K⁺ 的平衡電位（Equilibrium potential）約為多少 mV？',
          ['+60 mV','-70 mV','-90 mV','+120 mV'], 2,
          'EK = -61.5 × log(150/5.5) ≈ -90 mV，比靜止膜電位（-70 mV）更負，所以靜止時 K⁺ 略有外流趨勢。'),
        Q('Cl⁻ 的平衡電位最接近哪個數值？',
          ['+60 mV','-90 mV','-70 mV','+30 mV'], 2,
          'ECl ≈ -70 mV，恰好等於神經細胞的靜止膜電位，因此靜止時 Cl⁻ 淨流量幾乎為零。'),
        Q('Na-K ATPase 每水解一個 ATP，轉運離子的正確比例為何？',
          ['2 Na⁺ 出、3 K⁺ 入','3 Na⁺ 出、2 K⁺ 入','3 Na⁺ 入、2 K⁺ 出','2 Na⁺ 入、3 K⁺ 出'], 1,
          '3 Na⁺ out / 2 K⁺ in per ATP，造成正電荷淨移向胞外，使靜止膜電位更負（電致性泵浦，約 -5 mV 貢獻）。'),
        Q('靜止膜電位（RMP）正比於下列何種濃度？',
          ['胞內 [Na⁺]','胞內 [K⁺]','胞外 [Na⁺] 與 [K⁺]','胞外 [Ca²⁺]'], 2,
          'RMP 正比於胞外 [Na⁺]、[K⁺]，反比於胞內 [Na⁺]、[K⁺]（Goldman 方程式）。臨床上高血鉀會使 RMP 正向移，造成自發去極化。'),
      ]
    },
    {
      id: 'c', t: '細胞膜運輸與訊號傳遞', em: '📡',
      qs: [
        Q('下列何種物質在小腸吸收時「完全」依賴促進性擴散（Facilitated diffusion）？',
          ['葡萄糖','胺基酸','果糖','Na⁺'], 2,
          '果糖藉 GLUT5 促進性擴散吸收；葡萄糖與胺基酸則為 Na⁺ 協同的次級主動運輸（SGLT1/SGLUT）。'),
        Q('胰島素受器結合配體後，主要活化哪種胞內酵素？',
          ['Adenylyl cyclase（增加 cAMP）','Guanylate cyclase（增加 cGMP）','Tyrosine kinase（磷酸化級聯）','Phospholipase C（產生 IP₃/DAG）'], 2,
          '胰島素受器屬受器酪胺酸激酶（RTK），自磷酸化後活化 IRS/PI3K/Akt 路徑，促進葡萄糖攝取（GLUT4 移位）。'),
        Q('Phospholipase C 活化後，PIP₂ 水解產生哪兩種第二傳訊者？',
          ['cAMP 與 cGMP','IP₃ 與 DAG','ATP 與 ADP','NO 與 ANP'], 1,
          'IP₃ → ER 釋放 Ca²⁺；DAG → 活化 Protein kinase C（PKC）。這條路徑常由 Gq 蛋白偶聯受器啟動。'),
        Q('一氧化氮（NO）造成血管平滑肌舒張的分子機轉為何？',
          ['活化 Adenylyl cyclase，增加 cAMP','活化 Guanylate cyclase，增加 cGMP','阻斷 L-型鈣通道','抑制 Phosphodiesterase'], 1,
          'NO（EDRF）由內皮細胞釋放，活化平滑肌的 soluble Guanylate cyclase → cGMP↑ → PKG → 肌球蛋白去磷酸化 → 舒張。'),
        Q('抑制 Na-K ATPase（如毛地黃 Digoxin）增強心肌收縮的關鍵鏈結為何？',
          ['直接活化 Ryanodine receptor','胞內 [Na⁺]↑ → Na⁺/Ca²⁺ 交換體（NCX）逆轉 → 胞內 [Ca²⁺]↑','直接開啟 L-型鈣通道','促進肌漿網 Ca²⁺ 釋放'], 1,
          '泵浦抑制 → Na⁺ 蓄積 → NCX 三鈉換一鈣比例改變 → Ca²⁺ 外排減少 → 胞內 Ca²⁺↑ → 收縮力↑。這是 Digoxin 正性心肌力的機轉。'),
      ]
    },
  ],
  boss: [
    Q('一位 25 歲健康男性接受靜脈輸液。注射 1 L 5% Glucose 後，預期液體最主要分布在哪個體液腔室？',
      ['血漿（Plasma）','組織間液（Interstitial fluid）','細胞內液（ICF）','腦脊髓液（CSF）'], 2,
      '5% Glucose 為等張液，但葡萄糖被代謝後留下純水，可自由穿越所有膜腔。純水依各腔室比例（ICF 2/3，ECF 1/3）分布，故 ICF 獲得最多（約 667 mL）。'),
    Q('患者因長期腹瀉引起低鉀血症（[K⁺] = 2.5 mEq/L）。此時心肌靜止膜電位將如何改變？',
      ['更正（更接近 0 mV），容易去極化','更負（超極化），難以去極化','不變','先超極化後去極化'], 1,
      '胞外 K⁺↓ → EK 更負（Nernst 方程式）→ RMP 更負（超極化）→ 興奮閾值距 RMP 更遠 → 心律不整風險（PR 延長、U 波出現）。'),
    Q('某藥物阻斷 Gq 蛋白偶聯受器下游的 Phospholipase C。下列哪個生理效應「最可能」受影響？',
      ['腎上腺素（β₂受器）引起的支氣管擴張','乙醯膽鹼（M₁受器）引起的胃酸分泌增加','胰島素引起的 GLUT4 移位','一氧化氮引起的血管舒張'], 1,
      'M₁ 受器偶聯 Gq → PLC → IP₃/DAG → 壁細胞 Ca²⁺↑ → H⁺ 分泌。β₂ 為 Gs（cAMP）；胰島素為 RTK；NO 為 sGC（cGMP）。'),
    Q('Donnan 效應（Gibbs-Donnan equilibrium）會對膜兩側滲透壓產生何種影響？',
      ['兩側滲透壓完全相等','含帶電蛋白質側的滲透壓較高','含帶電蛋白質側的滲透壓較低','與滲透壓無關'], 1,
      '帶負電的蛋白質（如白蛋白）留在血漿，吸引更多陽離子滯留同側，使血漿滲透粒子較多 → 血漿膠體滲透壓（oncotic pressure）較高，維持液體在血管內。'),
    Q('若細胞膜對 Na⁺ 通透性突然大幅增加（如神經毒素），靜止膜電位將往哪個方向移動？',
      ['更負（-90 mV）','更正（趨向 +60 mV）','保持不變','立刻達到 +60 mV 並永久停留'], 1,
      'ENa ≈ +60 mV；通透性↑ → Na⁺ 驅力大 → 膜電位向 +60 mV 靠攏（去極化）。這正是動作電位 Phase 0 的機制。'),
    Q('一位患者服用阻斷 Na-K ATPase 的藥物過量。以下哪種臨床表現「最直接」源於此機轉？',
      ['低血糖（細胞攝取葡萄糖↓）','高血鉀（K⁺ 無法被泵入細胞內）','低血壓（血管收縮喪失）','低血鈣（骨釋鈣受阻）'], 1,
      'Na-K ATPase 將 K⁺ 泵入細胞；抑制後胞外 K⁺↑（高血鉀）→ 心律不整。此為 Digoxin 毒性主要致死機轉之一。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 2：肌肉生理
// ════════════════════════════════════════════════════════════
{
  id: 2, title: '肌肉生理', em: '💪', c: '#FF6B6B',
  u: [
    {
      id: 'a', t: '肌節構造與滑動學說', em: '🔩',
      qs: [
        Q('一個「肌節」（Sarcomere）的正確定義為何？',
          ['兩條 M-line 之間','兩條 Z-line 之間','A band 全長','H band 全長'], 1,
          '肌節 = 兩 Z-line 之間，是肌肉收縮的基本單位。口訣：Z-Z 之間一個節。'),
        Q('骨骼肌等張收縮（長度縮短）時，下列哪個頻帶（band）長度「不變」？',
          ['I band','H band','A band','Z-line 間距'], 2,
          'A band（粗肌絲長度）不變；I band（只有細肌絲）與 H band（只有粗肌絲）縮短。口訣：A band 鐵打不動。'),
        Q('與鈣離子（Ca²⁺）直接結合而觸發肌肉收縮的蛋白質為何？',
          ['Tropomyosin','Actin','Troponin C','Troponin I'], 2,
          'Troponin C 結合 Ca²⁺ → Troponin I 解除對 Tropomyosin 的拉力 → Tropomyosin 移位 → 暴露 Actin 上的 Myosin 結合位。'),
        Q('T 小管（T-tubule）在骨骼肌興奮-收縮耦合中的主要功能為何？',
          ['儲存 Ca²⁺','快速傳導動作電位至肌纖維深處','合成 ATP','分解肌酸磷酸'], 1,
          'T 管使細胞膜去極化訊號迅速傳至整條肌纖維，激活相鄰的肌漿網（SR）釋放 Ca²⁺，確保同步收縮。'),
        Q('骨骼肌「強直收縮」（Tetanus）發生的機制為何？',
          ['單一刺激誘發最大收縮','連續高頻刺激導致 Ca²⁺ 累積，收縮疊加','Ca²⁺ 通道永久開啟','ATP 無限供應'], 1,
          '頻率夠高時，SR 來不及回收 Ca²⁺，胞內 Ca²⁺ 濃度維持高水位，肌肉持續處於收縮狀態，張力達最大值。'),
      ]
    },
    {
      id: 'b', t: '紅肌、白肌與神經肌接頭', em: '🧬',
      qs: [
        Q('下列何者是「慢肌（紅肌）」的典型特徵？',
          ['ATPase 活性高，適合爆發力','粒線體豐富，耐力佳，氧化代謝為主','肌漿網發達，Ca²⁺ 釋放快','糖解酶活性高'], 1,
          '紅肌（Type I）富含肌紅蛋白、粒線體，耐乳酸疲勞；白肌（Type II）ATPase 高、收縮快、易疲勞，屬糖解型。'),
        Q('神經肌接頭（NMJ）中，乙醯膽鹼（ACh）的受器類型為何？',
          ['毒蕈鹼型（M）受器','菸鹼型（N）受器','β₁ 腎上腺素受器','GABA 受器'], 1,
          'NMJ 的骨骼肌終板上為 N 型 AChR（離子型），Na⁺/K⁺ 通道，去極化 → 觸發動作電位。M 型受器在心臟/平滑肌。'),
        Q('神經末梢釋放 ACh 至 NMJ 後，何種酵素負責迅速降解 ACh 以終止訊號？',
          ['Monoamine oxidase（MAO）','Acetylcholinesterase（AChE）','Catechol-O-methyltransferase（COMT）','Adenylyl cyclase'], 1,
          'AChE 位於突觸後膜皺折，將 ACh 水解為 Choline + Acetate。AChE 抑制劑（如有機磷）導致 ACh 蓄積、持續痙攣。'),
        Q('肉毒桿菌毒素（Botulinum toxin）造成肌肉弛緩性麻痹的機轉為何？',
          ['阻斷 AChR','裂解 SNARE 蛋白，抑制 ACh 囊泡釋放','拮抗 Ca²⁺ 進入末梢','分解 ACh'], 1,
          'Botulinum toxin 為蛋白酶，裂解突觸前囊泡融合所需的 SNARE 複合體（SNAP-25、Synaptobrevin），使 ACh 無法釋放。'),
        Q('有機磷農藥（如 Parathion）中毒患者出現大量分泌、肌肉束顫、瞳孔縮小，最主要的生理機轉為何？',
          ['阻斷 AChR','不可逆抑制 AChE，使 ACh 蓄積','阻斷 Na⁺ 通道','促進 Norepinephrine 釋放'], 1,
          '有機磷不可逆磷酸化 AChE → ACh 蓄積 → N 型（肌肉束顫）+ M 型（SLUDGE：分泌↑、腸蠕動↑、尿失禁、瞳孔縮小）效應同時出現。'),
      ]
    },
    {
      id: 'c', t: '平滑肌與心肌生理', em: '❤️',
      qs: [
        Q('平滑肌收縮時，鈣離子（Ca²⁺）活化哪種激酶以磷酸化 Myosin light chain（MLC）？',
          ['PKA','PKC','Myosin light chain kinase（MLCK）','CaM kinase II'], 2,
          'Ca²⁺ → 結合 Calmodulin → Ca²⁺-CaM 複合體 → 活化 MLCK → 磷酸化 MLC → 平滑肌收縮。舒張時 MLCP（磷酸酶）去磷酸化 MLC。'),
        Q('心肌細胞與骨骼肌細胞的最主要結構差異為何？',
          ['心肌無橫紋','心肌有閏盤（Intercalated disc）並透過 Gap junction 電耦合','心肌無 T 小管','心肌收縮不需 Ca²⁺'], 1,
          '心肌閏盤含 Desmosome（機械連結）和 Gap junction（電傳導）→ 功能性合胞體（Functional syncytium），確保所有心肌同步收縮。'),
        Q('心肌動作電位 Phase 2（平原期）的形成主要依賴哪種離子通道？',
          ['快鈉通道（Fast Na⁺）','L 型鈣通道（L-type Ca²⁺ channel）','Ik₁ 通道','KATP 通道'], 1,
          'Phase 0：快 Na⁺ 進；Phase 1：早期 K⁺ 出；Phase 2：L 型 Ca²⁺ 緩慢流入平衡 K⁺ 外流 → 平原期；Phase 3：K⁺ 大量外流 → 再極化。'),
        Q('SA node 細胞（節律點細胞）動作電位的 Phase 0 去極化，主要由哪種離子負責？',
          ['Na⁺ 快速內流','Ca²⁺ 緩慢內流','K⁺ 外流','Cl⁻ 內流'], 1,
          'SA node 無快鈉通道，Phase 0 靠 L 型 Ca²⁺ 通道，故去極化速率慢（Calcium-dependent AP）。鈣通道拮抗劑（Verapamil）可抑制 SA/AV node。'),
        Q('「舒張期自動去極化」（Pacemaker potential/If current）的主要離子機制為何？',
          ['Na⁺ 通道完全關閉','Na⁺ 與 K⁺ 同時流入的 HCN 通道（If 電流）在再極化後緩慢開啟','K⁺ 大量外流','Ca²⁺ 泵入細胞'], 1,
          'If（Funny current）由 HCN（Hyperpolarization-activated cyclic nucleotide–gated）通道負責，超極化後開啟，Na⁺ 緩慢流入使膜電位漸升至閾值。β 受器刺激增加 cAMP → If 加快 → 心跳加速。'),
      ]
    },
  ],
  boss: [
    Q('一位 30 歲男性急性有機磷中毒，出現大量流涎、腹瀉、心跳每分鐘 42 次。應優先使用哪種解毒藥物？',
      ['Propranolol','Atropine（阿托品）+ Pralidoxime（2-PAM）','Neostigmine','Physostigmine'], 1,
      'Atropine：拮抗 M 受器 → 逆轉 SLUDGE 症狀（分泌↑、心跳慢）。Pralidoxime（2-PAM）：在 AChE 老化前使磷酸化 AChE 再活化。兩者合用為標準治療。'),
    Q('患者有低鈣血症（Hypocalcemia）。以下哪種肌肉表現「最有可能」出現？',
      ['骨骼肌弛緩性麻痹','骨骼肌與平滑肌張力增加、手足搐搦（Tetany）','心肌收縮力增強','平滑肌完全失張'], 1,
      '胞外 Ca²⁺↓ → 更多 Na⁺ 通道從失活狀態恢復 → 神經肌肉興奮性↑ → Tetany。Chvostek sign（敲擊面神經引發肌肉抽搐）是典型臨床徵象。'),
    Q('一位運動員長距離跑步後出現肌肉疲勞。導致「疲勞」的最主要代謝原因為何？',
      ['ATP 完全耗盡','Pi（無機磷酸根）及 H⁺（乳酸酸中毒）蓄積干擾肌球蛋白交叉橋循環','ACh 耗盡','肌凝蛋白變性'], 1,
      'ATP 本身不完全耗盡；Pi 干擾肌球蛋白脫離狀態，H⁺ 干擾 Troponin C 與 Ca²⁺ 結合 → 收縮效率↓。這是「代謝疲勞」主因。'),
    Q('手術中使用 Succinylcholine（去極化型肌肉鬆弛劑）後，患者出現持續性肌肉收縮（Fasciculations）隨後弛緩。原因為何？',
      ['阻斷 AChR 抑制去極化','先模擬 ACh 去極化（束顫）→ 使 Na⁺ 通道持續失活 → 弛緩','抑制 AChE','促進 Ca²⁺ 釋放'], 1,
      'Succinylcholine 結構類似 ACh，先去極化終板（Phase I：束顫） → 因不被 AChE 快速水解，持續佔據受器 → 持續去極化導致 Na⁺ 通道失活 → Phase II 弛緩。'),
    Q('心臟移植患者接受去神經支配（Denervated）的心臟，以下何種反應「仍保留」？',
      ['迷走刺激引起的心跳減慢','Atropine 注射後心跳加快','運動時透過兒茶酚胺提高心率','頸動脈竇按壓引起心率減慢'], 2,
      '移植心無自主神經，Atropine（抗 M 受器）無效，迷走刺激無效。但腎上腺髓質仍分泌 Adrenaline → 血液中 catecholamines 作用於心肌 β₁ 受器 → 心率↑，此反應保留。'),
    Q('一位患者使用 Verapamil（L 型鈣通道拮抗劑）後，下列哪種生理效應「最明顯」？',
      ['骨骼肌收縮力下降','SA node 自律性降低、AV 傳導延緩、血管平滑肌舒張','快速去極化的 Phase 0 被抑制（心室肌）','骨骼肌 ACh 釋放減少'], 1,
      'Verapamil 影響 Ca²⁺-dependent AP 結構（SA/AV node）→ 心跳慢、PR 延長。血管平滑肌 L 型 Ca²⁺ 受阻 → 舒張 → 降壓。骨骼肌 Phase 0 為快 Na⁺，不受影響。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 3：神經生理（一）：動作電位與突觸
// ════════════════════════════════════════════════════════════
{
  id: 3, title: '神經生理 — 動作電位與突觸', em: '🧠', c: '#7C69EF',
  u: [
    {
      id: 'a', t: '動作電位分期與傳導', em: '⚡',
      qs: [
        Q('神經細胞動作電位「Phase 0」（去極化）主要由何種離子流引起？',
          ['K⁺ 外流','Ca²⁺ 內流','Na⁺ 快速內流','Cl⁻ 外流'], 2,
          '閾值達到後，電壓閘控 Na⁺ 通道大量開啟 → Na⁺ 快速內流 → 膜電位由 -70 mV 急升至約 +30 mV（超射）。'),
        Q('動作電位「絕對不反應期（Absolute refractory period）」的主要原因為何？',
          ['Na⁺/K⁺ ATPase 尚未恢復','Na⁺ 通道處於快速失活（Inactivated）狀態，無法再開啟','K⁺ 通道全部關閉','膜電位過高'], 1,
          '去極化後 Na⁺ 通道的 inactivation gate 關閉，必須等待再極化完成（約 -60 mV）才能轉回靜止狀態。此期間任何刺激都無法引發新的 AP。'),
        Q('有髓鞘神經的傳導速度比無髓鞘神經快，主要機制為何？',
          ['離子通道密度更高','跳躍式傳導（Saltatory conduction），AP 僅在郎氏結跳躍','Na-K ATPase 活性更強','軸突直徑更小'], 1,
          '髓鞘為電絕緣體，離子電流只能在裸露的郎氏結（Nodes of Ranvier）進行，使 AP 跳躍式傳遞，速度達 70-120 m/s（無髓 0.5-2 m/s）。'),
        Q('神經纖維依「傳導速度」由快到慢排列，正確順序為何？',
          ['Aδ > Aβ > Aα > C','Aα > Aβ > Aδ > C','C > Aδ > Aβ > Aα','Aβ > Aα > C > Aδ'], 1,
          '直徑越大、有髓鞘速度越快：Aα（本體感覺、運動）> Aβ（觸壓）> Aδ（快痛、溫）> C（慢痛、後燒灼感，無髓）。'),
        Q('局部麻醉藥（如 Lidocaine）的作用機轉為何？',
          ['阻斷 K⁺ 通道，抑制再極化','阻斷電壓閘控 Na⁺ 通道（從胞內側），使 AP 無法發生','增加 Cl⁻ 通透性','抑制 AChE'], 1,
          'Lidocaine 為弱鹼，以中性形式穿過細胞膜後，在胞內解離為帶電形式，與電壓閘控 Na⁺ 通道的胞內位點結合 → 阻斷傳導。優先作用於頻率高的疼痛纖維（Use-dependent block）。'),
      ]
    },
    {
      id: 'b', t: '突觸傳遞與神經傳導物質', em: '🔗',
      qs: [
        Q('突觸前動作電位到達後，觸發神經傳導物質釋放的直接訊號為何？',
          ['Na⁺ 大量內流','突觸前膜 Ca²⁺ 通道開啟，Ca²⁺ 進入末梢','ATP 分解','K⁺ 外流'], 1,
          '去極化 → 電壓閘控 Ca²⁺ 通道開啟 → Ca²⁺ 內流 → 觸發突觸囊泡（Vesicle）融合（SNARE 蛋白參與）→ 胞吐釋放神經傳導物質。'),
        Q('GABA（γ-胺基丁酸）為中樞神經系統最主要的「抑制性」傳導物質。GABA-A 受器的離子機轉為何？',
          ['增加 Na⁺ 通透性，去極化','增加 Cl⁻ 通透性，使膜電位更負（超極化）','活化 Gs 蛋白，增加 cAMP','活化 Gq 蛋白，釋放 Ca²⁺'], 1,
          'GABA-A 為 Ligand-gated Cl⁻ 通道；Cl⁻ 內流 → 超極化 → 抑制。苯二氮平類（Benzodiazepine）增強 GABA-A 的 Cl⁻ 電導，產生鎮靜/抗癲癇效果。'),
        Q('Glutamate（谷胺酸）為中樞主要「興奮性」傳導物質，NMDA 受器有何特殊性質？',
          ['不具電壓依賴性','需要同時有配體結合與膜去極化（才能移除 Mg²⁺ 阻塞），並允許 Ca²⁺ 大量進入','對 AMPA 受器拮抗劑敏感','為 G 蛋白偶聯受器'], 1,
          'NMDA 受器的「Coincidence detector」特性使其成為長期增益（LTP）的關鍵：需突觸前 Glu 釋放且突觸後去極化同時發生 → Ca²⁺ 大量進入 → 學習記憶。'),
        Q('突觸後電位的空間總和（Spatial summation）與時間總和（Temporal summation）的差異為何？',
          ['空間總和來自同一突觸連續刺激；時間總和來自不同突觸同時刺激','空間總和：多個突觸同時輸入；時間總和：單一突觸高頻輸入','兩者完全相同','僅時間總和能產生動作電位'], 1,
          '空間總和（Spatial）= 多個突觸前神經元同時放電；時間總和（Temporal）= 同一突觸短時間連續放電。兩者均可使 EPSP 累積達閾值，引發 AP。'),
        Q('突觸前抑制（Presynaptic inhibition）的機轉為何？',
          ['突觸後膜超極化','突觸前末梢被另一神經元去極化，使進入末梢的 Ca²⁺ 減少 → 傳導物質釋放↓','AChE 活性增加','突觸間隙擴大'], 1,
          '軸突-軸突突觸：GABA 作用於突觸前 GABA-B 受器（Gi）→ K⁺ 通道開啟或 Ca²⁺ 通道關閉 → Ca²⁺ 進入減少 → 傳導物質釋放↓，精細調控感覺輸入（如背角的閘控理論）。'),
      ]
    },
    {
      id: 'c', t: '感覺傳導與受器', em: '👁️',
      qs: [
        Q('皮膚感覺受器中，負責偵測「輕觸覺與振動（低頻）」的受器為何？',
          ['Pacinian corpuscle（環層小體）','Meissner corpuscle（麥斯納小體）','Merkel disc（梅克爾氏盤）','Ruffini ending'], 1,
          'Meissner：輕觸、低頻振動（30-40 Hz），快速適應；Pacinian：深壓、高頻振動（200-300 Hz），快速適應；Merkel：持續觸壓，慢速適應；Ruffini：皮膚伸展，慢速適應。'),
        Q('脊髓側柱（Lateral spinothalamic tract）傳導的感覺訊息種類為何？',
          ['精細觸覺與本體感覺','痛覺與溫度覺','振動覺','兩點辨別覺'], 1,
          '前外側系統（Anterolateral system）= 側脊丘束：痛溫覺，在脊髓前連合交叉 → 對側上行。後柱-內側蹄系：精細觸覺、本體感覺、振動，在延腦交叉。'),
        Q('「閘門控制理論（Gate control theory）」解釋止痛的機轉，其「關閉閘門」主要依賴何種機制？',
          ['Aδ 與 C 纖維活化','大直徑 Aβ 纖維活化脊髓背角的抑制性中間神經元，抑制痛訊傳遞','降低 NMDA 受器活性','抑制腦內啡釋放'], 1,
          '粗纖維（Aβ：觸/壓感覺）活化 SG（Substantia gelatinosa）中間神經元 → 抑制 T-cell（傳遞細胞）→ 痛訊傳遞被「關閉」。針灸與 TENS 的理論基礎之一。'),
        Q('本體感覺（Proprioception）中，「肌梭（Muscle spindle）」主要偵測的訊號為何？',
          ['肌肉張力（Tension）','肌肉長度變化與拉伸速率','關節位置靜態角度','皮膚壓力'], 1,
          '肌梭（Ia 纖維：動態感測；II 纖維：靜態感測）偵測肌肉拉伸 → 反射性引發伸肌收縮（牽張反射）。高爾基腱器（Ib 纖維）偵測張力，保護過度收縮。'),
        Q('視網膜「桿細胞（Rod cells）」與「錐細胞（Cone cells）」的功能差異，下列何者正確？',
          ['桿細胞負責明視覺與色覺','錐細胞敏感度高、適合暗視覺','桿細胞含有 Rhodopsin，負責暗視覺；錐細胞含有 Photopsins，負責色覺','兩者功能完全相同'], 2,
          '桿細胞：視紫質（Rhodopsin）、暗視覺、周邊視網膜密集、黑白；錐細胞：三種 Photopsins（紅/綠/藍）、明視覺、中央窩（Fovea）集中、色彩辨識。'),
      ]
    },
  ],
  boss: [
    Q('一位患者脊髓左側 T10 節段被刺傷（Brown-Séquard syndrome）。下列何種感覺喪失出現在「右側身體」？',
      ['本體感覺與精細觸覺','痛覺與溫度覺','兩者均在右側喪失','兩者均在左側喪失'], 1,
      '痛溫覺在進入脊髓後 1-2 節立即交叉（前連合）到對側上行 → 損傷節段以下「對側（右側）」痛溫覺喪失；精細觸覺同側上行到延腦才交叉 → 「同側（左側）」喪失。'),
    Q('患者服用過量鴉片類藥物（Opioids），出現呼吸抑制、瞳孔縮小。鴉片受器的主要訊號路徑為何？',
      ['Gs → cAMP↑ → PKA 活化','Gi → cAMP↓ → K⁺ 通道開啟、Ca²⁺ 通道關閉 → 神經元抑制','Gq → PLC → IP₃/DAG','直接阻斷 Na⁺ 通道'], 1,
      'μ（MOR）/ δ / κ 受器均偶聯 Gi → cAMP↓；開啟 Kir → 超極化；關閉 Ca²⁺ 通道 → 突觸前傳導物質釋放↓ → 鎮痛、呼吸抑制、縮瞳、欣快感。Naloxone 拮抗可逆轉。'),
    Q('多發性硬化症（Multiple sclerosis）會破壞髓鞘，造成神經傳導異常。以下何種症狀最直接源於此機轉？',
      ['肌肉萎縮（Amyotrophy）','感覺和運動傳導速度減慢、視力模糊（視神經炎）、易疲勞','突觸傳導物質耗盡','NMJ 破壞導致弛緩性麻痹'], 1,
      '髓鞘損失 → 跳躍傳導失效 → AP 傳速↓甚至傳導阻滯 → 多樣化神經症狀（感覺異常、視力、運動協調）。溫度升高（Uhthoff 現象）會使症狀暫時惡化。'),
    Q('患者長期使用 Benzodiazepine，突然停藥後出現癲癇發作。最可能的機轉為何？',
      ['GABA-A 受器下調、NMDA 受器上調，導致 CNS 過度興奮','Na⁺ 通道永久開啟','多巴胺大量釋放','ACh 蓄積'], 0,
      'Benzodiazepine 增強 GABA-A → 長期使用 → GABA-A 受器下調（耐受性）；同時 Glutamate/NMDA 代償性上調。突然停藥 → 抑制↓、興奮↑ → 癲癇、焦慮、震顫（戒斷症候群）。'),
    Q('一位患者進行腰椎穿刺後，腦脊髓液（CSF）分析顯示蛋白質明顯升高但細胞數正常。此模式（Albumin-cytologic dissociation）最常見於哪種疾病？',
      ['細菌性腦膜炎','Guillain-Barré syndrome（吉巴二氏症候群）','病毒性腦炎','蜘蛛網膜下腔出血'], 1,
      'GBS：自體免疫攻擊周邊神經髓鞘（Anti-ganglioside Ab）→ 運動麻痹由下往上 → CSF 蛋白↑（神經根發炎）但白血球正常（無感染）。治療：IVIg 或血漿置換。'),
    Q('「閃光盲（Flash blindness）」後視力暫時喪失，主因為何？',
      ['視網膜錐細胞永久性損傷','桿細胞中 Rhodopsin 大量光漂白（Photobleaching）需數分鐘再合成','視神經受損','水晶體短暫混濁'], 1,
      '強光使桿細胞的 Rhodopsin（視紫質）大量分解 → 暗視覺暫失。明適應（Light adaptation）快（錐細胞接手）；暗適應（Dark adaptation）慢（等待 Rhodopsin 重合成，維生素 A 為原料）。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 4：神經生理（二）：自律神經與高位中樞
// ════════════════════════════════════════════════════════════
{
  id: 4, title: '自律神經與高位中樞', em: '🌐', c: '#F7B731',
  u: [
    {
      id: 'a', t: '自律神經系統', em: '⚙️',
      qs: [
        Q('交感神經節後纖維的主要神經傳導物質與受器類型為何？',
          ['ACh 作用於 N 受器','NE 作用於 α/β 腎上腺素受器（汗腺例外用 ACh-M 受器）','ACh 作用於 M 受器','Dopamine 作用於 D 受器'], 1,
          '交感節後：NE（α₁/α₂/β₁/β₂）；例外：汗腺為 ACh-M；腎上腺髓質為 ACh-N → 直接釋放 Epinephrine/NE 至血液。副交感節後：ACh-M（M1-M5）。'),
        Q('副交感神經刺激心臟後，心率減慢主要透過哪種機轉？',
          ['β₁ 受器活化，增加 cAMP','M₂ 受器活化，Gi → K⁺ 通道開啟（IKAch）→ 超極化，SA node 自律性降低','α₁ 受器活化，血管收縮反射性慢心率','直接關閉 Ca²⁺ 通道（非受器依賴）'], 1,
          'M₂（Gi）→ K⁺ 外流（IKAch 電流）→ SA node 超極化、閾值難達 → 心率↓。也减慢 AV 傳導（PR 延長）。Atropine 阻斷 M₂ → 心率↑。'),
        Q('「Baroreceptor reflex（壓力受器反射）」的反射弧，以下敘述何者正確？',
          ['受器位於腎臟；效應為腎素釋放','受器位於頸動脈竇與主動脈弓；血壓↑ → 迷走張力↑、交感抑制 → 心率↓、血管舒張','受器位於心房；效應為 ADH 增加','受器位於腦幹；血壓↑ → 心率↑'], 1,
          '壓力受器（Baroreceptors）：IX 顱神經（頸動脈竇）、X 顱神經（主動脈弓）→ 延腦 NTS → 調控心率與血管張力，為快速血壓調節的負回饋機制。'),
        Q('腎上腺素（Epinephrine）大劑量注射後血壓的變化模式為何？',
          ['收縮壓與舒張壓均下降','收縮壓上升（β₁/α₁）、舒張壓下降或不變（β₂ 舒張血管 > α₁）→ 脈壓差增大','收縮壓不變、舒張壓上升','兩者均無明顯變化'], 1,
          'Epi：β₁（心臟：HR↑、CO↑）+ α₁（皮膚/內臟血管收縮）+ β₂（骨骼肌/冠狀動脈舒張）→ 收縮壓↑，舒張壓視劑量而定（低劑量 β₂ 為主，舒張壓甚至可↓）。'),
        Q('脊髓休克（Spinal shock）急性期的特徵，下列何者正確？',
          ['損傷節段以下反射亢進、痙攣','損傷節段以下所有反射（包括牽張反射）暫時消失、弛緩','立即出現 Babinski 陽性','自律神經反射立即增強'], 1,
          '脊髓橫斷初期（數天至數週）：橫斷面以下脊髓失去上位中樞調控 → 反射暫時抑制（Spinal shock）。數週後轉為反射亢進（Hyperreflexia）、痙攣及 Babinski 陽性。'),
      ]
    },
    {
      id: 'b', t: '大腦高位中樞', em: '🧩',
      qs: [
        Q('下視丘（Hypothalamus）「腹內側核（VMH）」受損，最可能導致何種症狀？',
          ['厭食、體重下降','過食、肥胖（飽食中樞破壞）','體溫過高','強迫性飲水'], 1,
          'VMH = 飽食中樞；破壞 → 持續進食 → 肥胖。外側核（LH）= 飢餓中樞；破壞 → 厭食。口訣：VMH 毀掉一直吃，LH 毀掉不想吃。'),
        Q('小腦（Cerebellum）的主要功能為何？',
          ['產生運動命令（隨意運動）','協調運動、維持平衡與姿勢、調整運動精準度','感覺訊息的主要整合中樞','控制意識覺醒'], 1,
          '小腦不啟動運動，而是「微調」：接收大腦皮質運動計畫 + 本體感覺回饋 → 修正誤差 → 傳回皮質。損傷表現：共濟失調（Ataxia）、辨距不良（Dysmetria）、意向性顫抖。'),
        Q('基底核（Basal ganglia）的直接路徑（Direct pathway）活化後，對運動的效應為何？',
          ['抑制運動','促進（釋放）隨意運動','使肌張力增加（強直）','控制眼球運動'], 1,
          '直接路徑：皮質 → 紋狀體（Striatum）→ GPi/SNr（抑制）→ 丘腦（解除抑制）→ 皮質活化 → 促進運動。間接路徑相反（抑制運動）。Parkinson 病：SNc 退化 → 直接路徑↓、間接路徑↑ → 運動減少。'),
        Q('「Broca 失語症（運動性失語症）」的典型臨床表現為何？',
          ['能說流暢的話語，但不能理解別人說的話','說話費力、非流暢，但能理解語言（聽懂別人說的話）','完全無法說話也無法理解','理解和表達均正常，但書寫障礙'], 1,
          'Broca 區（額葉下迴）= 語言表達。受損 → 非流暢失語（說話吃力、電報式語言）但聽覺理解相對保留。Wernicke 失語（顳葉上迴）= 流暢但語無倫次、理解差。'),
        Q('Cushing 反射（Cushing reflex）的三聯徵為何，其生理意義是什麼？',
          ['低血壓、心跳加快、呼吸正常','高血壓、心跳減慢（反射性）、呼吸不規則；為顱內壓升高的晚期代償反應','低血壓、心跳減慢、過度換氣','高血壓、心跳加快、呼吸停止'], 1,
          'ICP↑ → 腦血管受壓 → 延腦缺血 → 全身性血壓急升（讓血液灌腦）→ Baroreceptor 感測 → 迷走反射使心率慢。Cushing 三聯：高血壓 + 心跳徐緩 + 呼吸不規則 = 腦疝臨床警示。'),
      ]
    },
    {
      id: 'c', t: '脊髓反射與運動控制', em: '🦵',
      qs: [
        Q('「牽張反射（Stretch reflex）」的反射弧，Ia 纖維的突觸後作用為何？',
          ['抑制同側伸肌','直接興奮同側同一肌肉的 α 運動神經元（單突觸反射）','經由中間神經元交叉刺激對側肌肉','抑制 γ 運動神經元'], 1,
          '肌梭被拉伸 → Ia 纖維直接（單突觸）興奮同肌 α 運動神經元 → 肌肉收縮抵抗拉伸（如膝跳反射）。同時經 Ia 抑制性中間神經元（Renshaw）抑制拮抗肌（交互抑制）。'),
        Q('「縮回反射（Withdrawal reflex）」受到傷害性刺激後，哪種反應最能描述其跨側效應？',
          ['兩側肢體均縮回','對側肢體伸展支撐（Crossed extensor reflex），同側肢體縮回','對側肢體也縮回','僅局部收縮，無跨節段效應'], 1,
          '傷害刺激（如踩到釘子）→ 同側縮回（屈肌收縮/伸肌抑制）+ 對側伸展（Crossed extensor：伸肌收縮/屈肌抑制）→ 維持平衡，防止跌倒。'),
        Q('上運動神經元（UMN）損傷（如腦中風）的典型表現為何？',
          ['弛緩性麻痺、肌萎縮、肌束顫動（Fasciculation）','痙攣性麻痺、反射亢進、Babinski sign 陽性','肌張力完全喪失、腱反射消失','感覺喪失為主，運動影響輕微'], 1,
          'UMN 損傷：上位中樞失去對脊髓的抑制 → 脊髓過度興奮 → 痙攣（Spasticity）、腱反射亢進、Babinski（蹠反射背屈）、Clonus。LMN 損傷：弛緩、萎縮、Fasciculation。'),
        Q('γ 運動神經元的功能為何？',
          ['直接控制骨骼肌外梭纖維（Extrafusal）收縮','維持肌梭的敏感性（調控梭內纖維張力），使牽張反射能在各種肌肉長度下正常運作','傳遞痛覺訊號','控制平滑肌收縮'], 1,
          'γ 運動神經元（Fusimotor neuron）支配梭內纖維（Intrafusal）→ 即使 α 運動神經元使外梭纖維收縮後，肌梭仍保持被拉伸狀態，持續提供本體感覺回饋。'),
        Q('「去大腦強直（Decerebrate rigidity）」發生的位置與表現為何？',
          ['脊髓橫斷 → 屈肌強直','橋腦上方橫切 → 四肢伸肌強直（去除紅核的屈肌調控）','小腦切除 → 共濟失調','延腦損傷 → 呼吸停止'], 1,
          '去大腦強直（Decerebrate）= 橋腦上切：解除紅核等屈肌中樞對脊髓伸肌的抑制 → 四肢伸直、頭後仰。去皮質強直（Decorticate）= 大腦皮質切除：屈曲上肢、伸直下肢（紅核完整，屈肌中樞殘存）。'),
      ]
    },
  ],
  boss: [
    Q('一位 60 歲患者突發右側肢體偏癱、失語，頭部 CT 顯示左側大腦中動脈（MCA）梗塞。以下哪種神經學表現「不符合」UMN 損傷？',
      ['右側 Babinski sign 陽性','右側腱反射亢進','右側肌肉萎縮與束顫（Fasciculation）','右側痙攣性偏癱'], 2,
      '肌萎縮與束顫（Fasciculation）為 LMN 損傷特徵（前角細胞或周邊神經損傷）。UMN：痙攣、亢反射、Babinski、無萎縮（或輕微廢用性萎縮）。'),
    Q('帕金森氏病（Parkinson disease）患者中，黑質（Substantia nigra pars compacta，SNc）多巴胺神經元退化主要影響哪條基底核路徑？',
      ['基底核直接路徑活化過強','直接路徑（D₁）活化減弱，間接路徑（D₂）抑制解除 → 整體效果為丘腦被過度抑制 → 運動啟動困難','直接與間接路徑同時增強','小腦回路被中斷'], 1,
      'SNc 分泌 DA：D₁（直接路徑，促進運動）增強；D₂（間接路徑，抑制運動）抑制。退化後 → D₁↓（運動啟動↓）+ D₂ 解除抑制（運動抑制↑）→ 少動（Bradykinesia）、強直（Rigidity）、靜止性顫抖。L-DOPA 補充治療。'),
    Q('一位患者因脊髓損傷出現「自律神經反射異常（Autonomic dysreflexia）」，表現為急性高血壓、頭痛、出汗。最常見的誘因為何？',
      ['低血糖','膀胱充盈（Bladder distension）或腸道刺激（Bowel impaction）引發脊髓以下失控的交感反射','低血壓','疼痛刺激正常感覺神經'], 1,
      '損傷位於 T6 以上時，膀胱充盈等刺激 → 脊髓以下大量交感放電 → 血壓急升，但腦部無法透過下行通路抑制 → 臉部潮紅出汗（上方副交感補償）、劇烈頭痛、腦出血風險。處置：立即移除刺激源。'),
    Q('患者長期使用 α-Methyldopa 降壓藥，其中樞性降壓的主要機轉為何？',
      ['直接阻斷腎上腺素 α₁ 受器','在 CNS 中轉化為 α-Methylnorepinephrine，活化延腦 α₂ 受器 → 抑制交感輸出','增加副交感神經活性','直接擴張外周血管'], 1,
      'α-Methyldopa → α-Methylnorepinephrine → 作用於延腦 NTS 的突觸前 α₂ 受器（Imidazoline receptor）→ 交感活性↓ → 心率慢、血管舒張 → 血壓↓。中樞作用型降壓藥。'),
    Q('一位患者因小腦半球（Cerebellar hemisphere）損傷就醫。以下哪種症狀組合最符合？',
      ['靜止性顫抖、強直、少動（類似 Parkinson）','同側肢體共濟失調（Ataxia）、辨距不良（Dysmetria）、意向性顫抖（Intention tremor）','對側肢體感覺喪失','痙攣性麻痺（UMN 型）'], 1,
      '小腦半球損傷 → 同側（ipsilateral）症狀（因小腦路徑兩次交叉抵消）：Ataxia、Dysmetria（Past-pointing test）、Intention tremor（動作快結束時顫抖）、Dysdiadochokinesia。'),
    Q('下視丘視前區（Preoptic area）受損，對體溫調節的影響為何？',
      ['體溫持續過低（低體溫症）','喪失對熱的散熱反應（如發汗、皮膚血管舒張），導致體溫升高（中暑易感）','增強寒顫與血管收縮','完全喪失體溫調節能力，體溫等於環境溫度'], 1,
      '視前區（POAH）= 體溫調節整合中心，含「熱敏感神經元」。受損 → 熱散失機制（出汗、皮膚血管舒張）喪失 → 遇熱環境易中暑。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 5：心臟生理
// ════════════════════════════════════════════════════════════
{
  id: 5, title: '心臟生理', em: '❤️', c: '#E84855',
  u: [
    {
      id: 'a', t: '心週期與心音', em: '🫀',
      qs: [
        Q('第一心音（S1）發生在心週期的哪個時期，由何種生理事件產生？',
          ['等長舒張期：主動脈瓣關閉','等長收縮期開始：僧帽瓣與三尖瓣關閉','射血期：主動脈瓣開啟','快速充血期：房室瓣開啟'], 1,
          'S1（「lub」）= 房室瓣（Mitral + Tricuspid）關閉，標誌心室收縮期開始（等長收縮期）。聽診位置：心尖（M₂）與胸骨左下緣（T₂）。'),
        Q('「等長收縮期（Isovolumetric contraction）」期間，心室內各瓣膜的狀態為何？',
          ['房室瓣開、半月瓣關','房室瓣關、半月瓣開','兩組瓣膜均開','兩組瓣膜均關，心室容積不變，壓力急升'], 3,
          '心室壓升高但尚未超過主動脈壓 → 半月瓣無法開啟；房室瓣已因心室壓 > 心房壓而關閉 → 密閉心室，容積恆定（Isovolumetric），壓力以最快速率上升。'),
        Q('心電圖（ECG）中 QRS 波代表哪種電生理事件？',
          ['心房去極化','心室去極化（啟動心室收縮）','心室再極化','房室結傳導延遲'], 1,
          'P 波：心房去極化；PR 間隔：AV node 傳導延遲；QRS：心室去極化；T 波：心室再極化（心房再極化隱藏在 QRS 中）。'),
        Q('Starling 定律（Frank-Starling Law of the Heart）的核心概念為何？',
          ['心跳愈快，每搏輸出量愈大','心室舒張末期容積（Preload）↑ → 肌纖維拉伸程度↑ → 收縮力↑ → 每搏輸出量↑','後負荷↑ → 每搏輸出量↑','Ca²⁺ 是唯一決定因素'], 1,
          '前負荷（Preload，即靜脈回流量）↑ → 心室舒張末容積↑ → 肌節最適拉伸（2.2 μm，肌球蛋白-肌動蛋白交叉橋最多）→ 收縮力最大 → SV↑。'),
        Q('心搏量（Stroke Volume, SV）計算公式為何？',
          ['SV = 心跳速率 × 心輸出量','SV = 舒張末容積（EDV）− 收縮末容積（ESV）','SV = 平均動脈壓 / 心搏量','SV = 射出分率（EF）× 心輸出量'], 1,
          'SV = EDV − ESV（每跳射出的血液量，正常約 70 mL）；EF = SV/EDV × 100%（正常 ≥ 55%）；CO = SV × HR（正常 ≈ 5 L/min）。'),
      ]
    },
    {
      id: 'b', t: '心臟傳導與節律', em: '📈',
      qs: [
        Q('心臟傳導系統中，傳導速度「最快」的構造為何？',
          ['SA node','AV node','Purkinje fiber','心室肌'], 2,
          '傳導速度：Purkinje（4 m/s）> 心室肌（1 m/s）> 心房肌（0.3 m/s）> AV node（0.05 m/s，最慢）。AV node 延遲使心室充血完全後再收縮。'),
        Q('交感神經刺激心臟的「正性時間效應（Chronotropic）」機轉為何？',
          ['M₂ 受器活化 → K⁺ 外流 → SA node 超極化','β₁ 受器活化 → cAMP↑ → HCN 通道磷酸化 → If 電流加快 → 舒張期去極化速率↑ → 心率↑','α₁ 受器活化 → Ca²⁺ 進入增加','直接延長 AV node 傳導'], 1,
          'β₁（Gs）→ cAMP↑ → PKA 磷酸化 HCN 通道 → If（Funny current）幅度↑、速率↑ → 閾值更快達到 → 心率↑；同時 Ca²⁺ 通道磷酸化 → 收縮力↑（正性肌力效應）。'),
        Q('「完全性房室傳導阻滯（Complete heart block，3° AVB）」的 ECG 特徵為何？',
          ['P 波消失','P 波與 QRS 波無固定關係（P 與 QRS 各自獨立），心室由交界區或 Purkinje 逸搏控制','PR 間隔固定延長','QRS 波寬大，PR 間隔進行性延長後 QRS 消失'], 1,
          '三度 AVB：心房由 SA node 控制（正常 P 波），心室由交界區（40-60 bpm）或 Purkinje 逸搏（< 40 bpm）控制 → P 波與 QRS 無關聯（Atrioventricular dissociation）。可能需心臟節律器（Pacemaker）。'),
        Q('「預激症候群（Wolff-Parkinson-White syndrome，WPW）」ECG 上的 Delta 波成因為何？',
          ['AV node 傳導加快','心室預激（Preexcitation）：存在旁道（Bundle of Kent）直接連結心房與心室，繞過 AV node 延遲，使心室部分提早去極化','心房顫動導致 QRS 異常','Na⁺ 通道突變使 QRS 變寬'], 1,
          'WPW：旁道（Kent束）無 AV node 的傳導延遲 → 心室提早被部分去極化（Delta 波：QRS 起始斜坡）→ PR 間隔縮短、QRS 寬。易發生折返性心搏過速（AVRT）。'),
        Q('Digitalis（毛地黃）治療心衰的主要機轉是增加心肌收縮力，其引起「心率減慢」的機轉為何？',
          ['直接阻斷 β₁ 受器','中樞性增加迷走張力（透過延腦作用）→ M₂ 活化 → SA/AV node 傳導慢','阻斷 L 型鈣通道','促進 K⁺ 內流使心室肌超極化'], 1,
          '毛地黃主要透過中樞和外周增強迷走活性（parasympathomimetic effect）→ SA node 放電慢（心率↓）、AV node 傳導延緩（PR↑）。臨床用途：心房顫動的心室速率控制。'),
      ]
    },
    {
      id: 'c', t: '心輸出量與血壓調節', em: '🩺',
      qs: [
        Q('下列何種因素能增加靜脈回流（Venous return），進而增加心輸出量？',
          ['心包膜填塞（Cardiac tamponade）','呼吸時胸腔負壓增加（吸氣）、下肢肌肉收縮（骨骼肌幫浦）','直立姿勢突然改變','外周血管阻力增加'], 1,
          '靜脈回流增加：吸氣（胸壓↓ → 大靜脈擴張 → 血液引流）、站立時肌肉收縮（骨骼肌幫浦）、靜脈收縮（交感刺激）、輸液。心包填塞（外在壓力↑）和直立突然（重力）均降低回流。'),
        Q('平均動脈壓（MAP）的計算公式及正常值約為？',
          ['MAP = 收縮壓 + 舒張壓（正常 ≈ 220 mmHg）','MAP = 舒張壓 + 1/3 脈壓（正常 ≈ 93 mmHg）','MAP = 心輸出量 × 血管阻力（無法直接計算）','MAP = 收縮壓 / 2（正常 ≈ 60 mmHg）'], 1,
          'MAP = DBP + 1/3(SBP-DBP) ≈ DBP + 1/3 PP；或 MAP ≈ (SBP + 2×DBP)/3。正常約 70-110 mmHg。MAP = CO × TPR（Ohm 定律的血流動力學版本）。'),
        Q('心衰竭（Heart failure）時，腎素-血管收縮素-醛固酮（RAAS）系統活化，最終導致何種長期代償效應？',
          ['利尿，減少前負荷','Na⁺ 與水分滯留 → 血容量↑（增加前負荷，透過 Starling 機制維持 CO）','血管舒張，降低後負荷','心率增加（正性時間效應）'], 1,
          'RAAS 活化（腎灌流↓ → Renin↑ → AngII↑ → 醛固酮↑）→ Na⁺/水滯留 → 血容量↑ → 靜脈回流↑ → 前負荷↑ → 透過 Starling 機制維持 CO。長期會導致肺水腫與周邊水腫。'),
        Q('肺循環（Pulmonary circulation）與體循環（Systemic circulation）的主要差異為何？',
          ['肺循環壓力高（25/8 mmHg），體循環壓力低（120/80 mmHg）','體循環壓力高（120/80 mmHg），肺循環壓力低（25/8 mmHg）；肺循環阻力低以容納全部心輸出量','兩者壓力相同','肺循環心輸出量為體循環的兩倍'], 1,
          '肺循環：低壓（25/8 mmHg）、低阻力（方便氣體交換）；體循環：高壓（120/80 mmHg）、高阻力（輸送全身）。兩者每分鐘流量相同（CO ≈ 5 L/min），右心 = 低壓泵浦，左心 = 高壓泵浦。'),
        Q('射出分率（Ejection fraction，EF）計算公式與正常值為何？',
          ['EF = EDV / ESV × 100%（正常 ≈ 30%）','EF = SV / EDV × 100%（正常 ≥ 55%）','EF = CO / HR × 100%','EF = SV / ESV × 100%（正常 ≈ 70%）'], 1,
          'EF = SV/EDV × 100%（SV = EDV − ESV）。正常 EF ≥ 55%；射出分率保留型心衰（HFpEF）EF ≥ 50%；射出分率下降型（HFrEF）EF < 40%，為心衰分型的重要指標。'),
      ]
    },
  ],
  boss: [
    Q('一位 70 歲男性，ECG 顯示 PR 間隔 0.28 秒（正常 ≤ 0.20 秒）、QRS 形態正常。診斷最可能為何？',
      ['完全性 AV block（3°）','一度 AV block（PR 延長，每個 P 波後有 QRS）','Wolff-Parkinson-White（WPW）','心室顫動（VF）'], 1,
      '一度 AVB：PR > 0.20 秒但每個 P 波後均有 QRS，傳導僅「延緩」而非「中斷」。通常無症狀，可為 Digoxin 副作用或迷走張力高。二度 Mobitz I（Wenckebach）：PR 漸長後 QRS 消失；Mobitz II：突然 QRS 消失。'),
    Q('一位 55 歲女性急性前壁心肌梗塞後，Echo 顯示 EF = 30%，肺部聽診有囉音（Crackles）。此患者的血流動力學狀態為何？',
      ['高 CO、低 SVR（敗血性休克型）','低 CO、高 PCWP（肺微血管楔壓升高）→ 心原性休克伴肺水腫','低 CO、低 PCWP（低血容量性休克）','高 CO、高 SVR（高血壓急症）'], 1,
      '心原性休克（Cardiogenic shock）：左心衰 → CO↓（EF 低）→ RAAS/交感活化 → SVR↑（代償）；左室舒張末壓↑ → 肺微血管楔壓（PCWP）↑ → 肺水腫（囉音）。治療：強心劑（Dobutamine）、利尿（減少前負荷）。'),
    Q('Valsalva maneuver（閉氣用力，如排便）的完整心血管反應，哪個相（Phase）結束後會出現代償性心跳加速？',
      ['Phase I（用力開始）','Phase II（持續用力）','Phase III（停止用力）','Phase IV（恢復）'], 1,
      'Phase II：胸壓↑ → 靜脈回流↓ → CO↓ → BP↓ → Baroreceptor 反射 → 心率加速（代償）。Phase IV：靜脈回流突然恢復 → CO↑ → BP↑ → 反射性心率緩慢（Overshoot）。心衰患者 Phase II BP 不下降（「Square wave response」）。'),
    Q('主動脈瓣狹窄（Aortic stenosis）的心雜音特徵與血流動力學改變為何？',
      ['舒張期，低沉，前負荷下降','收縮期粗糙的噴射性（Ejection systolic）雜音，向頸部傳導；後負荷增加 → 心室向心性肥大（Concentric hypertrophy）','舒張期，高調，後負荷下降','全收縮期，吹風樣，前負荷增加'], 1,
      '主動脈瓣狹窄：收縮期血流通過狹窄口 → 湍流 → 粗糙噴射性雜音（Harsh systolic ejection murmur，菱形）→ 後負荷持續增加 → 左室向心性肥大（壁厚腔小）→ 最終心衰。三聯：暈厥、心絞痛、心衰（SAD）。'),
    Q('運動時心輸出量可從靜止的 5 L/min 增加至 20-25 L/min，主要依賴哪些機轉？',
      ['僅靠心率增加（心搏量不變）','心率↑（β₁ 交感）+ 靜脈回流↑（骨骼肌幫浦，Starling 機制使 SV↑）+ 心肌收縮力↑（正性肌力效應）三者協同','靜脈回流增加是唯一機轉','肺血管阻力增加使血液回到左心更快'], 1,
      '運動時 CO↑ 三要素：HR↑（交感 β₁）+ SV↑（Starling：靜脈回流↑ + 交感正肌力效應）+ 外周血管阻力↓（骨骼肌代謝性舒張 > 皮膚交感收縮）→ 更多血液流向工作肌肉。'),
    Q('心臟壓塞（Cardiac tamponade）的 Beck 三聯徵（Beck triad）為何？',
      ['高血壓、心跳加快、肺水腫','低血壓、頸靜脈怒張（JVD）、心音遙遠（Muffled heart sounds）','胸痛、出汗、嘔吐','高燒、心跳加快、摩擦音'], 1,
      'Cardiac tamponade：心包積液 → 外在壓力↑ → 心室充血受限 → CO↓（低血壓）+ 靜脈回流受阻（JVD）+ 積液隔音（心音遙遠）。奇脈（Pulsus paradoxus）：吸氣時 SBP 下降 > 10 mmHg，為重要診斷線索。'),
  ]
},


// ════════════════════════════════════════════════════════════
// 里程碑 6：血液生理與免疫
// ════════════════════════════════════════════════════════════
{
  id: 6, title: '血液生理與免疫', em: '🩸', c: '#CC5DE8',
  u: [
    {
      id: 'a', t: '紅血球與血紅素', em: '🔴',
      qs: [
        Q('成熟紅血球的主要能量來源為何？',
          ['三羧酸循環（TCA cycle）','脂肪酸氧化','無氧糖解（Anaerobic glycolysis）→ 乳酸','氧化磷酸化（粒線體）'], 2,
          '成熟紅血球無核、無粒線體 → 只能行無氧糖解（Embden-Meyerhof pathway）產生 ATP，並以五碳糖磷酸路徑（HMP shunt）產生 NADPH 防止氧化壓力。'),
        Q('血紅素（Hemoglobin）的「協同結合（Cooperative binding）」現象意義為何？',
          ['第一個 O₂ 結合後，後續 O₂ 結合難度增加','第一個 O₂ 結合後，引發 Hb 構型從 T-state 轉為 R-state，使後續 O₂ 更容易結合（S 形解離曲線）','每個 O₂ 獨立結合，無相互影響','CO₂ 與 O₂ 競爭相同結合位'], 1,
          '合作效應（Cooperativity）：Hb 有四個亞基，第一個 O₂ 結合後，T（Tense，低親和力）→ R（Relaxed，高親和力）構型變化 → 剩餘次單位的 O₂ 親和力↑ → S 形（Sigmoidal）解離曲線，確保組織有效釋氧。'),
        Q('以下哪種情況會使 Hb-O₂ 解離曲線「右移（Right shift）」？',
          ['低 CO₂（Hypocapnia）','低溫','高溫、高 CO₂、低 pH、高 2,3-DPG','CO 中毒'], 2,
          '右移（Bohr effect）= O₂ 親和力↓ = 組織釋氧↑：高 CO₂、低 pH（酸中毒）、高溫、高 2,3-DPG。左移 = 高親和力、不易釋氧：低溫、低 CO₂、高 pH、低 2,3-DPG、CO 中毒、胎兒 Hb（HbF）。'),
        Q('鐵質（Fe²⁺）缺乏引起的貧血，血液抹片呈現什麼特徵？',
          ['大球性（Macrocytic）、高色素性','小球性（Microcytic）、低色素性（Hypochromic）','正球性（Normocytic）、正色素性','大球性、低色素性'], 1,
          '缺鐵性貧血：Fe²⁺↓ → Heme 合成↓ → 血紅素↓ → 小球低色素貧血（MCV↓、MCHC↓）。血清鐵↓、TIBC↑、Ferritin↓。與慢性病貧血（TIBC↓、Ferritin↑）鑑別。'),
        Q('溶血性貧血（Hemolytic anemia）的特徵性實驗室發現為何？',
          ['網狀紅血球（Reticulocyte）減少、直接膽紅素↑','直接膽紅素↓、網狀紅血球↑、LDH↑、結合珠蛋白（Haptoglobin）↓','鐵蛋白（Ferritin）↓，MCV↓','維生素 B12↓，MCV↑'], 1,
          '溶血：RBC 破壞↑ → 非結合（間接）膽紅素↑ → 骨髓代償性增生 → 網狀紅血球↑；Hb 釋放 → 與 Haptoglobin 結合 → Haptoglobin↓；LDH 從 RBC 釋出 → LDH↑。'),
      ]
    },
    {
      id: 'b', t: '凝血與血小板', em: '🩹',
      qs: [
        Q('「凝血瀑布（Coagulation cascade）」中，內源性（Intrinsic）路徑由何種因子起始？',
          ['組織因子（Tissue factor，FIII）','Factor XII（Hageman factor），接觸膠原蛋白後活化','Vitamin K','Thrombin（FIIa）'], 1,
          '內源性：XII → XI → IX → VIII → X（匯入共同路徑）；外源性：FVII + 組織因子（Tissue factor，暴露於損傷血管外）→ X（匯入共同路徑）→ X → V → Prothrombin → Thrombin → Fibrinogen → Fibrin。'),
        Q('PT（Prothrombin time）與 aPTT（Activated partial thromboplastin time）分別偵測哪條路徑？',
          ['PT：內源性；aPTT：外源性','PT：外源性路徑（含共同路徑）；aPTT：內源性路徑（含共同路徑）','兩者均偵測共同路徑','PT：血小板功能；aPTT：纖維蛋白原'], 1,
          'PT 延長：外源性（FVII）或共同路徑（FX、V、II、I）缺失，或 Warfarin 使用。aPTT 延長：內源性（FXII、XI、IX、VIII）缺失，如血友病 A（FVIII↓）或 Heparin 使用。兩者均延長：共同路徑缺失。'),
        Q('Warfarin（Coumadin）的抗凝機轉為何？',
          ['直接抑制 Thrombin（FIIa）','抑制 Vitamin K 環氧化物還原酶（VKOR），使維生素 K 依賴凝血因子（II、VII、IX、X、蛋白質 C/S）γ 羧化受阻','增加 Antithrombin III 活性','抑制 FXII 活化'], 1,
          'Vitamin K 為 FII、VII、IX、X 及 PC/PS 的 γ 羧化輔因子。Warfarin 阻斷 VKOR → 維生素 K 無法再生 → 這些因子無法活化。監測 PT/INR；拮抗劑：Vitamin K 或新鮮冷凍血漿（FFP）。'),
        Q('血小板活化後釋放哪些重要物質以促進止血？',
          ['Heparin 與 Prostacyclin（PGI₂）','ADP、Thromboxane A₂（TXA₂）、P-selectin','Antithrombin III 與 Protein C','tPA（組織纖維蛋白溶酶原活化劑）'], 1,
          'α 顆粒：vWF、Fibrinogen、P-selectin；Dense granules：ADP（招募更多血小板）、血清素（Serotonin）、Ca²⁺；花生四烯酸代謝：TXA₂（血小板聚集、血管收縮，Aspirin 抑制 COX → 阻斷 TXA₂）。'),
        Q('「Hemophilia A（血友病 A）」的凝血因子缺失為何，其主要臨床表現為？',
          ['FIX 缺失，皮膚容易瘀青','FVIII 缺失，深層組織（關節、肌肉）出血，aPTT 延長','Fibrinogen 缺失，PT 與 aPTT 均延長','von Willebrand factor 缺失，黏膜出血為主'], 1,
          'Hemophilia A：X-linked 隱性，FVIII 缺失 → aPTT 延長（內源性路徑）→ 深層出血（關節積血 Hemarthrosis 為典型）。Hemophilia B = FIX。治療：補充 FVIII 濃縮物。'),
      ]
    },
    {
      id: 'c', t: '免疫細胞與補體', em: '🛡️',
      qs: [
        Q('中性球（Neutrophil）的殺菌機制中，「氧化爆發（Oxidative burst）」依賴哪種酵素？',
          ['Myeloperoxidase（MPO）負責過氧化物產生','NADPH oxidase → 超氧陰離子（O₂⁻）→ H₂O₂ → 氯胺（HOCl，在 MPO 作用下）','Catalase 分解 H₂O₂','Lysozyme 水解細菌壁'], 1,
          'NADPH oxidase（Phox）：O₂ + NADPH → O₂⁻ + NADP⁺；Superoxide dismutase：O₂⁻ → H₂O₂；Myeloperoxidase（MPO）：H₂O₂ + Cl⁻ → HOCl（次氯酸，殺菌力最強）。Chronic granulomatous disease（CGD）：NADPH oxidase 缺失。'),
        Q('補體系統（Complement system）的三條活化途徑最終匯集的共同步驟為何？',
          ['C3 活化（產生 C3a 和 C3b）','C5 活化：C5a（趨化素/過敏毒素）+ C5b（啟動 MAC 形成）','C1q 結合 IgG/IgM','Mannose-binding lectin（MBL）活化'], 1,
          '三途徑（Classical/Lectin/Alternative）均活化 C3 convertase → C3a（過敏毒素）+ C3b（調理素）→ C5 convertase → C5a（趨化/過敏毒素）+ C5b → C5b-9 = MAC（Membrane attack complex）→ 細胞溶解。'),
        Q('「第四型過敏反應（Type IV，遲發型過敏，DTH）」的主要效應細胞為何？',
          ['IgE 與肥大細胞（Mast cell）','CD4⁺ T 細胞（Th1）與巨噬細胞','IgG 與 NK cell（ADCC）','IgM 與補體'), 1,
          'Type IV（Cell-mediated）：T 細胞介導，24-72 小時發生，無抗體參與。Th1 → IFN-γ → 活化巨噬細胞 → 肉芽腫形成（結核病、接觸性皮膚炎、移植排斥）。不能被 Antihistamine 抑制。'),
        Q('MHC class I（HLA class I）分子主要呈現哪類抗原給哪種 T 細胞？',
          ['外源性抗原（細胞外病原體）→ 給 CD4⁺ T 細胞','內源性抗原（細胞內合成的蛋白質，如病毒、腫瘤）→ 給 CD8⁺ 細胞毒 T 細胞（CTL）','在 B 細胞表面表達，直接活化 B 細胞','只在 NK cell 上表達'], 1,
          'MHC I（全身有核細胞）：呈現胞內抗原 → CD8⁺ CTL 殺死感染/腫瘤細胞。MHC II（APC：DC、B cell、Macrophage）：呈現胞外抗原（吞噬後處理）→ CD4⁺ Th 細胞。口訣：I=8、II=4。'),
        Q('免疫球蛋白 IgE 的主要功能為何？',
          ['跨越胎盤保護胎兒（主要母嬰免疫）','黏膜免疫（SIgA 的特性）','與肥大細胞/嗜鹼性球表面 FcεRI 結合，初次接觸抗原致敏後，再次暴露 → 交聯 → 脫顆粒 → 過敏反應（Type I）','補體活化（Classical pathway）'], 2,
          'IgE：過敏原-IgE 交聯肥大細胞的 FcεRI → 脫顆粒釋放 Histamine、Tryptase、Leukotrienes → 即刻型過敏（Type I）。IgG：胎盤穿越、補體活化、ADCC；IgA：黏膜（SIgA）；IgM：初次免疫應答、最強補體活化。'),
      ]
    },
  ],
  boss: [
    Q('一位患者接受心臟手術後，使用 Heparin 後血小板持續下降（< 100,000），且出現血栓。最可能的診斷與機轉為何？',
      ['Thrombocytopenic purpura（TTP），由 ADAMTS13 缺失引起','Heparin-induced thrombocytopenia（HIT）：IgG 抗體針對 Heparin-PF4 複合體 → 血小板活化 → 矛盾性血栓','Disseminated intravascular coagulation（DIC）','Von Willebrand disease'], 1,
      'HIT（尤以 HIT type II）：Heparin + PF4 抗原 → IgG 抗體 → Fc 受器活化血小板 → 矛盾性血栓（靜/動脈均可）伴血小板↓。治療：立即停 Heparin，改用 Argatroban 或 Fondaparinux（非 HIT 抗體交叉反應者）。'),
    Q('患者出現溶血性尿毒症候群（HUS）：溶血性貧血、血小板減少、急性腎衰竭。最常見的致病病原體為何？',
      ['Staphylococcus aureus（金黃葡萄球菌）','Shiga toxin 產生的 Escherichia coli（STEC，尤其 O157:H7）','Salmonella typhi','Helicobacter pylori'], 1,
      'STEC 產生 Shiga toxin → 腸黏膜進入血液 → 作用於 Gb3（腎小球內皮 Gb3 密集）→ 內皮細胞損傷 → 血小板凝集 → Microangiopathic hemolytic anemia（破碎紅血球）+ 血小板↓ + 腎衰竭。'),
    Q('缺乏 Glucose-6-phosphate dehydrogenase（G6PD）的患者服用 Primaquine（抗瘧藥）後發生急性溶血，機轉為何？',
      ['直接破壞紅血球膜','G6PD 缺失 → HMP shunt↓ → NADPH↓ → 無法再生 Glutathione（GSH）→ 氧化壓力↑ → Hb 氧化成 Heinz bodies → 紅血球被脾臟破壞','Heme 合成受阻','補體直接溶解紅血球'], 1,
      'G6PD 缺失（X-linked）→ NADPH↓ → GSH（還原型穀胱甘肽）↓ → 無抗氧化保護 → 氧化劑（Primaquine、Dapsone、豆類、感染）→ Hb 變性 → Heinz body → 咬核細胞（Bite cell）→ 血管外溶血（脾臟）。'),
    Q('深靜脈血栓（DVT）患者使用 Low-molecular-weight heparin（LMWH，如 Enoxaparin）的機轉為何？',
      ['直接抑制 Thrombin（FIIa）','增強 Antithrombin III（AT-III）對 Xa 因子的抑制活性為主（相對 UFH 對 FIIa/FXa 均等抑制）','抑制 Vitamin K 依賴因子','阻斷 Fibrinogen 受器'], 1,
      'LMWH 主要增強 AT-III 對 FXa 的抑制（抗 Xa/IIa 比例 ≈ 3:1），較 UFH 抗 FXa 選擇性更高；皮下注射、半衰期長、無需監測 aPTT、HIT 風險低。監測：Anti-Xa 活性（腎衰或孕婦）。'),
    Q('一位患者出現 Anaphylaxis（過敏性休克）：低血壓、喘鳴、蕁麻疹。第一線急救藥物及其機轉為何？',
      ['Diphenhydramine（H₁ 拮抗劑），抑制已釋出的 Histamine','Epinephrine（1:1000，肌肉注射）：α₁ 收縮血管（升壓）+ β₁ 強心 + β₂ 支氣管舒張 + 抑制肥大細胞繼續脫顆粒','Hydrocortisone（類固醇），立即抑制發炎','Salbutamol 吸入，緩解支氣管痙攣'], 1,
      'Epinephrine IM（大腿外側）為過敏性休克第一線：α₁（血管收縮 → 血壓回升）+ β₁（正性心力）+ β₂（支氣管舒張）+ 抑制肥大細胞脫顆粒。類固醇/Antihistamine 為輔助，起效慢，不能取代 Epi。'),
    Q('「遺傳性球形紅血球症（Hereditary spherocytosis）」的分子缺損與溶血機轉為何？',
      ['膜上 Spectrin 或 Ankyrin 蛋白缺失 → 紅血球膜不穩定 → 球形 → 脾臟破壞','缺乏 G6PD → 氧化壓力溶血','Hb 結構異常（如 HbS）→ 鐮刀型','缺鐵 → 小球低色素'], 0,
      '遺傳性球形紅血球症：Spectrin/Ankyrin/Band 3 基因突變（AD 或 AR）→ 膜骨架缺失 → 膜穩定性↓ → 球形（表面積↓）→ 無法通過脾竇 → 血管外溶血。特徵：直接 Coombs test（-），MCHC↑，滲透脆性試驗（+）。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 7：腎臟生理
// ════════════════════════════════════════════════════════════
{
  id: 7, title: '腎臟生理', em: '🫘', c: '#339AF0',
  u: [
    {
      id: 'a', t: '腎絲球濾過與清除率', em: '🔍',
      qs: [
        Q('測定腎絲球濾過率（GFR）的「金標準」示蹤物為何？其特性為？',
          ['肌酸酐（Creatinine），100% 由腎絲球濾過且不被分泌/重吸收','菊糖（Inulin），自由過濾、不被重吸收也不被分泌，清除率精確等於 GFR','PAH（Para-aminohippuric acid），測量 RPF','尿素（BUN），受飲食影響大'], 1,
          'Inulin 清除率（C = U×V/P）= GFR（正常 ≈ 125 mL/min）。Creatinine 清除率輕微高估（近曲小管少量分泌），但臨床常用。PAH 幾乎被完全分泌 → 用來估算 Renal plasma flow（RPF ≈ 600 mL/min）。'),
        Q('腎臟的「濾過分率（Filtration fraction，FF）」是什麼，正常值為何？',
          ['FF = GFR / RBF（腎血流量），正常約 20-25%','FF = GFR / RPF（腎血漿流量），正常約 20%（≈ 125/625）','FF = 重吸收量 / 濾過量，正常約 99%','FF = 排泄量 / 攝入量'], 1,
          'FF = GFR/RPF = 125/625 ≈ 0.20（20%）。約 20% 的血漿被濾過，其餘 80% 流入出球小動脈（Efferent arteriole）→ 形成膠體滲透壓偏高的血液 → 圍繞近曲小管，有助重吸收。'),
        Q('「管狀最大重吸收率（Tubular maximum，Tm）」的意義為何？以葡萄糖為例說明。',
          ['腎元對某物質的最大排泄能力','近曲小管對葡萄糖的重吸收載體飽和後，超過 Tm 的葡萄糖出現在尿液中（糖尿病尿糖閾值 ≈ 180 mg/dL）','GFR 達到上限的值','腎小管對水的最大重吸收量'], 1,
          'Tm（葡萄糖）≈ 375 mg/min；正常 GFR × 血糖 < Tm，無尿糖。血糖 > 180 mg/dL（「腎糖閾」）→ 濾過量超過 Tm → 尿糖出現（如 DM）。SGLT2 抑制劑（Empagliflozin）故意降低 Tm → 排糖降糖。'),
        Q('以下何種物質的清除率最接近腎血漿流量（RPF）？',
          ['菊糖（Inulin）','葡萄糖','PAH（Para-aminohippuric acid）','尿酸'], 2,
          'PAH 在腎臟被「完全」從腎血漿中提取（腎臟提取率 ≈ 90%），故清除率近似有效 RPF（ERPF ≈ 600 mL/min）；RPF = RBF × (1 − Hct)；RBF ≈ 1100 mL/min（RPF/0.55）。'),
        Q('腎臟「自動調節（Autoregulation）」能維持 GFR 在何種血壓範圍內穩定？',
          ['MAP 20-60 mmHg','MAP 70-170 mmHg（Bayliss myogenic response + TGF）','MAP 150-200 mmHg','對任何血壓均無法維持'], 1,
          '腎臟自動調節機制：肌源性反應（Myogenic）+ 腎小管球回饋（Tubuloglomerular feedback，TGF：緻密斑偵測 NaCl → 調控入球小動脈張力）→ MAP 70-170 mmHg 內 GFR 恆定。超出範圍則 GFR 隨血壓改變。'),
      ]
    },
    {
      id: 'b', t: '腎小管重吸收與分泌', em: '♻️',
      qs: [
        Q('近曲小管（PCT）重吸收的最主要驅動力為何？',
          ['血漿膠體滲透壓差','Na-K ATPase 於基側膜（Basolateral）主動將 Na⁺ 泵出 → 管腔 Na⁺ 濃度↓ → Na⁺ 順梯度進入（帶動葡萄糖、胺基酸、磷酸根等協同運輸）','腎小管液靜水壓','ADH 水通道'], 1,
          'PCT：Na⁺ 主動重吸收（SGLT2、NHE3 等）→ 滲透壓驅動水（等張重吸收，約佔濾液 65%）+ 葡萄糖、胺基酸（次級主動），Cl⁻、HCO₃⁻、K⁺ 跟隨。近曲小管不依賴醛固酮調控（恆比例重吸收）。'),
        Q('Henle 氏環「上行粗段（Thick ascending limb，TAL）」的重要特性為何？',
          ['對水具高通透性','Na-K-2Cl 協同轉運體（NKCC2）將 NaCl 重吸收但不透水 → 管腔液低張、髓質間質高張','ADH 受器主要在此','醛固酮主要作用於此'], 1,
          'TAL：不透水（缺 Aquaporin）但主動重吸收 NaCl（NKCC2，Furosemide 的作用位點）→ 逆流倍增（Countercurrent multiplier）建立髓質高滲梯度 → 尿液濃縮的基礎。'),
        Q('ADH（Antidiuretic hormone / Vasopressin）的作用位點與機轉為何？',
          ['近曲小管，增加 SGLT2 活性','集尿管（Collecting duct），V2 受器 → Gs → cAMP → PKA → AQP2 磷酸化 → 嵌入管腔膜 → 水通透性↑','Henle 氏環下行支，促進 NaCl 重吸收','出球小動脈，V1 受器 → 血管收縮'], 1,
          'ADH 作用：集尿管主細胞的 V2 受器（Gs-cAMP-PKA）→ AQP2 囊泡插入管腔膜 → 水通透性↑ → 水隨髓質滲透壓梯度被重吸收 → 尿液濃縮。Lithium 和長期低鉀可致 ADH 抵抗（Nephrogenic DI）。'),
        Q('醛固酮（Aldosterone）在遠端腎小管/集尿管的主要作用為何？',
          ['促進 Na⁺ 排泄、K⁺ 滯留','促進 Na⁺ 重吸收（留鈉）+ K⁺ 分泌（排鉀）+ H⁺ 分泌（酸化尿液）','抑制 Na-K ATPase','促進水重吸收（類似 ADH）'], 1,
          'Aldosterone（Mineralocorticoid）→ 主細胞：ENaC（Na⁺ 進入）+ Na-K ATPase（Na⁺ 出胞）→ 留鈉排鉀；插入細胞（Intercalated cell）：H⁺-ATPase → 排酸。過多 → 高血壓、低鉀、代謝性鹼中毒（Conn syndrome）。'),
        Q('鉀離子（K⁺）主要在腎臟哪個節段被分泌至尿液中？',
          ['近曲小管','Henle 氏環上行支','遠端腎小管/集尿管主細胞（受醛固酮調控）','腎絲球'], 2,
          '60-70% 濾過的 K⁺ 在 PCT 被重吸收；TAL 也重吸收部分。K⁺ 排泄主要靠「遠端小管/集尿管分泌」（ROMK 通道 + 管腔負電位驅動），受醛固酮（↑）、流量（↑）、血鉀濃度（↑）調控。'),
      ]
    },
    {
      id: 'c', t: '酸鹼平衡', em: '⚖️',
      qs: [
        Q('腎臟調節酸鹼的主要方式之一是再生 HCO₃⁻。近曲小管如何處理 HCO₃⁻？',
          ['直接重吸收 HCO₃⁻ 分子','HCO₃⁻ 在管腔與 H⁺（由 NHE3/H-ATPase 分泌）結合 → H₂CO₃ → CO₂ + H₂O（碳酸酐酶，CA）→ CO₂ 進入細胞 → 在胞內再生 HCO₃⁻ → 基側膜出胞','HCO₃⁻ 直接留在腎小管液中','醛固酮直接調控'], 1,
          'HCO₃⁻ 無法直接穿越管腔膜；改以間接再吸收：管腔 H⁺ + HCO₃⁻ → H₂CO₃（碳酸酐酶 IV，管腔面）→ CO₂ + H₂O → CO₂ 擴散進細胞 → 碳酸酐酶 II 逆向反應 → H⁺（再分泌）+ HCO₃⁻（基側膜出）。'),
        Q('以下哪種臨床情況最符合「代謝性酸中毒，陰離子間隙（AG）升高（High AG metabolic acidosis）」？',
          ['長期服用 Acetazolamide（碳酸酐酶抑制劑）引起的腎小管性酸中毒','嚴重腹瀉引起 HCO₃⁻ 喪失','糖尿病酮酸中毒（DKA）：酮酸蓄積','輸入大量生理鹽水引起的高氯性酸中毒'], 2,
          'AG = Na⁺ − (Cl⁻ + HCO₃⁻)，正常 8-12 mEq/L。High AG：有機酸蓄積（酮酸/乳酸/尿毒/甲醇/乙二醇/水楊酸），口訣 MUDPILES。Normal AG（高氯性）：HCO₃⁻ 喪失（腹瀉、RTA）或 Cl⁻ 過多（大量 NS 輸注）。'),
        Q('Henderson-Hasselbalch 方程式計算血液 pH 的關鍵變數為何？',
          ['pH = pKa + log([CO₂] / [HCO₃⁻])','pH = 6.1 + log([HCO₃⁻] / (0.03 × PaCO₂))','pH = pKa + log([Protein] / [Phosphate])','pH = 7.40（恆定值，無方程式需要）'], 1,
          'H-H 方程式：pH = 6.1 + log([HCO₃⁻] / (α × PaCO₂))，α = 0.03 mmol/L/mmHg。正常：HCO₃⁻ = 24 mEq/L，PaCO₂ = 40 mmHg，pH = 7.40。代謝/呼吸酸鹼失衡的判讀從此方程式出發。'),
        Q('「呼吸性鹼中毒（Respiratory alkalosis）」的代謝代償方式為何？',
          ['腎臟保留 HCO₃⁻','腎臟排除 HCO₃⁻（減少 H⁺ 分泌，HCO₃⁻ 再生↓）→ HCO₃⁻ 降低以配合低 PaCO₂','過度換氣加重','肝臟合成 HCO₃⁻'], 1,
          '呼吸性鹼中毒：PaCO₂↓（過度換氣）→ pH↑；代謝代償（數小時至數天）：腎臟 HCO₃⁻ 排泄↑（H⁺ 分泌↓）→ HCO₃⁻↓ → pH 趨正常。預期代償：ΔHCO₃⁻ ≈ 5 mEq/L per 10 mmHg PaCO₂↓（急性 2）。'),
        Q('腎小管性酸中毒（Renal tubular acidosis，RTA）Type 1（遠端型）的特徵為何？',
          ['近曲小管 HCO₃⁻ 重吸收缺損，尿液可酸化（pH < 5.5）','遠端集尿管 H⁺ 分泌缺損 → 尿液無法充分酸化（pH > 5.5）、低鉀血症、腎結石','高鉀血症、正常陰離子間隙酸中毒','葡萄糖、磷酸、尿酸均從尿液流失（Fanconi syndrome）'], 1,
          'RTA Type 1（Distal）：H⁺-ATPase 缺損 → 尿液 pH 無法低於 5.5 → HCO₃⁻ 無法再生 → 代謝性酸中毒；低 K⁺（酸中毒促進 K⁺ 排泄）；Ca²⁺ 從骨釋出 → 腎結石（磷酸鈣）。Sjögren syndrome、Amphotericin B 毒性等。'),
      ]
    },
  ],
  boss: [
    Q('一位糖尿病患者（血糖 600 mg/dL、pH 7.22、HCO₃⁻ 8 mEq/L、PaCO₂ 22 mmHg）。此患者的呼吸代償是否適當？',
      ['代償不足，仍有原發性呼吸性酸中毒','預期 PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2 = 20 mmHg（Winters 公式），實測 22 mmHg 在範圍內，為適當代償','代償過度，同時有呼吸性鹼中毒','無法判斷'], 1,
      '代謝性酸中毒的呼吸代償：PaCO₂（期望值）= 1.5 × [HCO₃⁻] + 8 ± 2（Winter 公式）= 1.5 × 8 + 8 = 20 ± 2 mmHg。實測 22 mmHg 在範圍（20-22）→ 純代謝性酸中毒伴適當代償。'),
    Q('患者服用 Furosemide（Loop diuretic）後出現低鉀血症與代謝性鹼中毒，此機轉為何？',
      ['Furosemide 直接排除 HCO₃⁻','Furosemide 抑制 TAL 的 NKCC2 → NaCl 排泄↑ → 遠端流量↑ → K⁺ 分泌↑（低鉀）；容積收縮 → 醛固酮↑ → H⁺ 分泌↑ → 代謝性鹼中毒（Contraction alkalosis）','直接抑制腎臟 K⁺ 重吸收並促進 HCO₃⁻ 合成','抑制碳酸酐酶（類似 Acetazolamide）'], 1,
      'Loop diuretic → TAL NKCC2 受阻 → 尿液 NaCl↑、遠端流量↑ → 遠端 K⁺ 分泌↑（低鉀）；容積耗竭 → RAAS 啟動 → 醛固酮↑ → 遠端 H⁺ 排泄↑、HCO₃⁻ 再生↑ → 代謝性鹼中毒。補 KCl + 適當補液為治療。'),
    Q('肾素（Renin）-血管收縮素（Angiotensin）-醛固酮（Aldosterone）系統（RAAS）啟動的主要觸發因子有哪些？',
      ['血鉀升高','腎灌流壓下降（J-G cells 感測）+ 交感活化（β₁ 受器）+ 緻密斑感測 NaCl 減少 → Renin 釋放 → Ang I → ACE → Ang II → 醛固酮','血鈉升高','ADH 直接活化 Renin'], 1,
      'Renin 由旁球體細胞（JG cells）分泌：①灌流壓↓（直接拉伸感測）②交感 β₁ 活化 ③緻密斑 NaCl↓（TGF）。Ang II：收縮血管、刺激醛固酮、ADH 釋放、口渴中樞。ACE 抑制劑（ACEI）、ARB 為主要高血壓/心衰治療。'),
    Q('一位 70 歲男性，血清 Creatinine = 3.0 mg/dL（正常 0.6-1.2），計算其估算 GFR（eGFR）顯著下降。使用 CKD-EPI 公式時，哪些變項被納入計算？',
      ['僅 Creatinine 濃度','血清 Creatinine、年齡、性別（CKD-EPI 2021 版已移除種族校正）','體重與 Creatinine','尿液 Creatinine 與血清 Creatinine'], 1,
      'CKD-EPI（Chronic Kidney Disease Epidemiology Collaboration）公式：eGFR 依血清 Creatinine、年齡、性別計算（2021 版移除 Race 校正）。比 MDRD 更準確（GFR > 60 時）。'),
    Q('急性腎損傷（AKI）的「腎前性（Pre-renal）」與「腎性（Intrinsic renal）」的鑑別指標為何？',
      ['兩者 BUN/Creatinine 比值均正常','FENa（鈉的排泄分率）：腎前性 < 1%（腎元功能完整，盡力保留 Na⁺）；腎性（ATN）> 2%（腎小管受損，無法保留 Na⁺）','尿量多寡','血清 K⁺ 濃度'], 1,
      'FENa = (UNa/PNa) / (UCr/PCr) × 100%。Pre-renal（低血容）：腎元完整 → FENa < 1%（腎保鈉）、BUN/Cr > 20：1、尿比重 > 1.020。ATN（腎小管壞死）：FENa > 2%、BUN/Cr 正常、顆粒管型（Muddy brown cast）。'),
    Q('一位患者被診斷為「原發性高醛固酮症（Conn syndrome）」。預期的實驗室結果為何？',
      ['低血壓、高鉀、代謝性酸中毒','高血壓、低鉀、代謝性鹼中毒、低 Renin','高血壓、高鉀、低 Renin','低血壓、低鉀、高 Renin'], 1,
      'Conn syndrome（腎上腺腺瘤分泌過多 Aldosterone）：ENaC↑ → Na⁺ 滯留 → 高血壓、水腫；K⁺ 分泌↑ → 低鉀 → 肌無力、心律不整；H⁺ 分泌↑ → 代謝性鹼中毒；RAAS 被抑制 → Renin 偏低（與腎血管性高血壓鑑別）。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 8：呼吸生理
// ════════════════════════════════════════════════════════════
{
  id: 8, title: '呼吸生理', em: '🫁', c: '#20C997',
  u: [
    {
      id: 'a', t: '肺容積與通氣', em: '📊',
      qs: [
        Q('「功能殘餘容積（Functional Residual Capacity，FRC）」的定義為何？',
          ['最大吸氣後肺內殘留的空氣量','平靜呼氣末肺內殘留的空氣量（ERV + RV），是肺回彈力與胸壁彈力達平衡點','最大呼氣後殘留的空氣量（RV）','最大用力吸氣後的肺容積（TLC）'], 1,
          'FRC = ERV + RV，在平靜呼氣末，肺向內回彈力 = 胸壁向外彈力，無需呼吸肌力。肺順應性（Compliance）↓（肺纖維化）→ FRC↓；Emphysema → 肺回彈↓ → FRC↑。'),
        Q('「肺泡通氣量（Alveolar ventilation，VA）」的計算公式為何？',
          ['VA = 潮氣量（TV）× 呼吸頻率','VA =（TV − 解剖死腔）× 呼吸頻率（正常 ≈（500-150）× 12 = 4200 mL/min）','VA = 用力呼氣量（FEV1）','VA = 殘餘容積（RV）'], 1,
          'VA（有效通氣）= (TV − VD) × f，VD = 解剖死腔（約 150 mL）。深慢呼吸（TV↑）比淺快呼吸更有效（後者 VA 較低）。CO₂ 分壓（PaCO₂）與 VA 成反比：VA↓ → PaCO₂↑（低通氣）。'),
        Q('阻塞性（Obstructive）與限制性（Restrictive）肺病在肺功能檢查（PFT）的主要差異為何？',
          ['阻塞性：FEV1/FVC 正常，FVC 下降；限制性：FEV1/FVC 下降','阻塞性：FEV1/FVC < 0.7（呼氣受阻），FRC↑；限制性：FEV1/FVC 正常或↑，TLC↓、FVC↓','兩者 FEV1/FVC 均下降','阻塞性 TLC↓；限制性 TLC↑'], 1,
          '阻塞性（COPD、氣喘）：FEV1↓，FVC 相對保留 → FEV1/FVC < 0.7，空氣滯留 → FRC、RV、TLC↑。限制性（肺纖維化、胸廓異常）：FVC↓、TLC↓，但 FEV1/FVC 正常（> 0.7，有時更高）。'),
        Q('胸膜腔壓力（Intrapleural pressure）在靜止呼吸中恆為何種狀態？',
          ['正壓（高於大氣壓）','負壓（低於大氣壓，約 -5 cmH₂O）維持肺部擴張','等於大氣壓（0 cmH₂O）','隨吸/呼氣在正負之間交替'], 1,
          '胸膜腔負壓（约 -5 cmH₂O 靜止，吸氣時更負）= 肺泡回彈力與胸壁彈力的差值 → 維持肺部擴張。氣胸（Pneumothorax）：空氣進入胸膜腔 → 負壓消失 → 肺塌陷。'),
        Q('表面活性物質（Surfactant）的主要成分與功能為何？',
          ['蛋白質為主，增加肺泡回彈力','Dipalmitoyl phosphatidylcholine（DPPC）為主，降低肺泡表面張力 → 防止小肺泡塌陷 → 提高肺順應性','主要由肺泡 I 型細胞合成','增加肺泡的黏稠度'], 1,
          'Surfactant 由肺泡 II 型細胞合成（孕 34-36 週成熟）。DPPC 降低液-氣界面表面張力 → Laplace 定律：P = 2T/r；表面張力↓ → 小肺泡不塌陷（不同大小肺泡壓力均等）。早產兒缺乏 → NRDS → 補充 Surfactant 治療。'),
      ]
    },
    {
      id: 'b', t: '氣體交換與血流分布', em: '🔄',
      qs: [
        Q('「V/Q 比值（Ventilation/Perfusion ratio）」在肺尖與肺底的差異為何？',
          ['肺尖：V/Q 低；肺底：V/Q 高','肺尖：V/Q 高（通氣相對多，血流少）；肺底：V/Q 低（血流多，通氣相對少）；正常整體 V/Q ≈ 0.8','兩者 V/Q 相同','取決於體位，無固定差異'], 1,
          '直立姿勢：重力影響血流 → 肺底血流 > 肺尖；通氣：肺底略多但差異小 → 肺尖 V/Q > 1（接近死腔），肺底 V/Q < 1（接近分流）。氣體交換效率以肺底最好（血流多）。'),
        Q('一氧化碳（CO）中毒導致「CO₂ 解離曲線左移」，此 Haldane effect 的意義為何？',
          ['CO 增加 O₂ 在組織的釋放','當 O₂ 分壓高時（如肺部），Hb 對 CO₂ 親和力↓ → CO₂ 釋放到肺泡；組織低氧 → Hb 對 CO₂ 親和力↑ → 更有效地攜帶 CO₂','CO 直接競爭 O₂ 結合位（Bohr effect 的一種）','Hb 對 CO₂ 親和力恆定不變'], 1,
          'Haldane effect（與 Bohr effect 互補）：氧合 Hb（OxyHb）攜帶 CO₂ 能力↓；脫氧 Hb（DeoxyHb）攜帶 CO₂ 能力↑。組織：O₂ 卸下 → DeoxyHb↑ → CO₂ 攜帶↑（carbaminohemoglobin 增加）。肺：O₂ 結合 → OxyHb → CO₂ 釋放。'),
        Q('「生理性死腔（Physiological dead space）」包含哪些組成？',
          ['僅解剖死腔（氣道）','解剖死腔 + 肺泡死腔（有通氣但無血流灌注的肺泡，V/Q = ∞）','僅肺泡死腔','血管外空間的氣體'], 1,
          'Physiological dead space（VD physio）= Anatomical VD（氣道，≈150 mL）+ Alveolar VD（V/Q = ∞ 的無效肺泡）。正常人 VD physio ≈ VD anatomic；肺栓塞 → 肺泡死腔↑ → VD physio↑，PaCO₂↑。Bohr equation 計算。'),
        Q('血液中 CO₂ 運輸的最主要形式為何？',
          ['溶解態（dissolved CO₂）約 70%','碳酸氫根（HCO₃⁻），約 70%（在紅血球中轉換後進入血漿）','碳醯胺血紅素（Carbaminohemoglobin）約 70%','CO₂ 與白蛋白結合'], 1,
          'CO₂ 運輸：①HCO₃⁻（約 70%，RBC 內 CA→ CO₂+H₂O→HCO₃⁻+H⁺，HCO₃⁻ 以 Cl⁻/HCO₃⁻ 交換進血漿）②Carbaminohemoglobin（約 23%，與 Hb 胺基結合）③溶解態（約 7%）。'),
        Q('「肺泡氣方程式（Alveolar gas equation）」：PAO₂ = PIO₂ − PaCO₂/RQ。在海平面正常人（PIO₂ ≈ 150 mmHg，PaCO₂ = 40 mmHg，RQ = 0.8），PAO₂ 約為多少？',
          ['90 mmHg','100 mmHg','140 mmHg','60 mmHg'], 1,
          'PAO₂ = 150 − (40/0.8) = 150 − 50 = 100 mmHg。正常 PaO₂ ≈ 95-100 mmHg，A-a 梯度（PAO₂ − PaO₂）≈ 5-15 mmHg（年輕人），隨年齡增加。A-a 梯度↑ → 提示肺部問題（V/Q mismatch、分流、彌散障礙）。'),
      ]
    },
    {
      id: 'c', t: '呼吸調控', em: '🎛️',
      qs: [
        Q('呼吸中樞中，「延腦（Medulla）」中央化學受器主要感測哪種訊號？',
          ['血液中 O₂ 分壓（PaO₂）','腦脊髓液（CSF）中的 H⁺（由 CO₂ 穿越血腦屏障後轉化而來）','血液中 HCO₃⁻ 濃度','血液中 K⁺ 濃度'], 1,
          '中樞化學受器（延腦腹側）：CO₂ 穿過血腦屏障 → CSF 中 CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻（CSF 緩衝力弱）→ H⁺ 刺激受器 → 通氣↑。直接感測 H⁺（非 CO₂ 本身）。'),
        Q('頸動脈體（Carotid body）周邊化學受器對何種刺激最敏感？',
          ['PaCO₂ 上升（高碳酸血症）','PaO₂ 下降（低氧血症，尤其 PaO₂ < 60 mmHg 時反應急劇增強）','HCO₃⁻ 下降','pH 上升（鹼中毒）'], 1,
          '頸動脈體（IX 顱神經）：對低 PaO₂ 最敏感（PaO₂ < 60 mmHg 時反應陡增）；也感測 pH↓ 和 PaCO₂↑（直接感測 H⁺）。是慢性 COPD 患者唯一的通氣驅動力（Hypoxic drive），給予高濃度 O₂ 可抑制。'),
        Q('橋腦「調節中樞（Pneumotaxic center）」的功能為何？',
          ['啟動吸氣','終止吸氣、增加呼吸頻率（「關閉」吸氣的開關）','啟動呼氣','調節呼吸節律與深度均無作用'], 1,
          '調節中樞（Pneumotaxic center，橋腦上部）：傳送抑制訊號至延腦吸氣中樞（DRG）→ 提前終止吸氣 → 呼吸頻率↑。若損傷 → 深慢呼吸（Apneusis）。長吸中樞（Apneustic center，橋腦下部）：延長吸氣（受調節中樞抑制）。'),
        Q('「過度換氣（Hyperventilation）」造成手腳麻木（Paresthesia）與手足搐搦（Tetany）的機轉為何？',
          ['O₂ 過多直接刺激神經','PaCO₂↓ → 呼吸性鹼中毒 → pH↑ → 游離 Ca²⁺↓（Ca²⁺ 更多與白蛋白結合）→ 神經肌肉興奮性↑ → 麻木、搐搦','CO₂ 排出引發 K⁺ 外流','O₂ 解離曲線左移，組織缺氧'], 1,
          '鹼中毒（pH↑）：Ca²⁺ 與白蛋白的結合依賴 pH（pH↑ → Ca²⁺-albumin 結合↑）→ 游離（ionized）Ca²⁺↓ → 低鈣效應 → Chvostek sign、手足搐搦、手腳麻木。Trousseau sign（束臂缺血試驗）也可誘發。'),
        Q('COPD 患者長期高碳酸血症（PaCO₂ 慢性升高），呼吸調控會出現何種適應？',
          ['中樞化學受器敏感性永久增加','腎臟代償性保留 HCO₃⁻ → CSF pH 正常化 → 中樞化學受器對 PaCO₂ 敏感性↓，呼吸驅動主要靠低氧（Hypoxic drive）','周邊化學受器退化','通氣量顯著增加'] ,1,
          '慢性高碳酸：腎臟 HCO₃⁻ ↑（代謝代償）→ CSF pH 正常（腦脊髓液 [HCO₃⁻]↑）→ 中樞受器感受到的 H⁺ ↓ → 對 CO₂ 的通氣反應↓。此時頸動脈體（低 O₂）成為主要呼吸驅動。給 COPD 患者高濃度 O₂ → 抑制低氧驅動 → CO₂ 滯留惡化（CO₂ narcosis）。'),
      ]
    },
  ],
  boss: [
    Q('一位 65 歲 COPD 患者，血氣：pH 7.32、PaCO₂ 58 mmHg、HCO₃⁻ 29 mEq/L、PaO₂ 55 mmHg。判斷其酸鹼失衡類型。',
      ['急性呼吸性酸中毒（無代謝代償）','慢性呼吸性酸中毒（代謝代償不完全）：PaCO₂↑（60 mmHg）、HCO₃⁻ 代償性↑（慢性每↑10 mmHg PaCO₂，HCO₃⁻↑3.5）→ 預期 HCO₃⁻ = 24+3.5×(18/10) ≈ 30 → 實測 29，代償適當','代謝性酸中毒','混合性酸中毒'], 1,
      '解讀步驟：①pH < 7.35 → 酸中毒 ②PaCO₂ 58↑ → 呼吸性 ③HCO₃⁻ 29↑ → 代謝代償（鹼化彌補）。慢性代償：HCO₃⁻ 期望 = 24 + 3.5 × (58-40)/10 = 24 + 6.3 ≈ 30，實測 29，代償適當 → 慢性呼吸性酸中毒。'),
    Q('肺栓塞（Pulmonary embolism）患者早期血氣常顯示：低 PaCO₂ 與低 PaO₂。原因為何？',
      ['呼吸肌疲勞導致低通氣','栓塞區域 V/Q = ∞（死腔增加）→ 代償性過度換氣 → PaCO₂↓；同時其他區域 V/Q 下降（分流效應）→ PaO₂↓','肺水腫造成氣體交換障礙','右心衰竭直接降低 PaO₂'], 1,
      'PE：栓塞肺段 → V/Q = ∞ → 死腔增加（CO₂ 無法交換）→ 疼痛/焦慮引發過度換氣 → PaCO₂↓；分流（其餘低 V/Q 區）→ PaO₂↓；A-a 梯度↑（有肺部病灶）。Wells score + D-dimer 篩查，CT 肺血管造影確診。'),
    Q('新生兒因早產（30 週）出生後出現呼吸窘迫、需高濃度 O₂ 維持 SpO₂。胸 X 光呈毛玻璃樣改變。最可能診斷與治療為何？',
      ['氣胸：胸管引流','新生兒呼吸窘迫症候群（NRDS）：因肺泡 II 型細胞未成熟、Surfactant 缺失；治療：氣管內給予外源性 Surfactant + 持續正壓通氣（CPAP）','先天性心臟病：手術修補','感染性肺炎：抗生素'], 1,
      'NRDS（Hyaline membrane disease）：Surfactant 缺失 → 表面張力↑ → 肺泡塌陷 → V/Q↓ → 低氧。預防：產前類固醇（Betamethasone，促進 Surfactant 成熟）；治療：Surfactant 替代療法（Beractant/Poractant）+ 通氣支持。'),
    Q('高原登山者爬升到 5000 公尺後出現頭痛、呼吸急促。血氣：pH 7.50、PaCO₂ 28 mmHg、HCO₃⁻ 22 mEq/L。描述其生理適應。',
      ['代謝性鹼中毒，呼吸代償','高度高山 → PIO₂↓ → PaO₂↓ → 頸動脈體 → 過度換氣（PaCO₂↓ → 呼吸性鹼中毒）→ 腎臟 HCO₃⁻ 排泄↑（適應性代償）→ 2,3-DPG↑（右移，利組織釋氧）','急性肺水腫（HAPE）','慢性山病（CMS）'], 1,
      '高海拔適應：①立即：過度換氣（呼吸性鹼中毒）②數天後：腎排 HCO₃⁻ 代償（Acetazolamide 加速此過程）③長期：EPO↑ → RBC/Hb↑；2,3-DPG↑ → O₂ 解離曲線右移 → 組織釋氧↑；HbF 在胎兒天生具備左移優勢（吸取母親 O₂）。'),
    Q('患者 SpO₂ = 98%，但因 CO 中毒，實際組織缺氧嚴重。原因為何？',
      ['SpO₂ 計只測量 RBC 數量','脈搏血氧計（Pulse oximetry）無法區分 Oxyhemoglobin 與 Carboxyhemoglobin（HbCO），兩者吸光度相近 → 顯示假性高 SpO₂','CO 增加 O₂ 輸送','CO 直接刺激脈搏感測器'], 1,
      'CO（親和力 = O₂ 的 250 倍）→ 與 Hb 結合形成 HbCO → 解離曲線左移（正常 O₂ 也不易釋放）+ 血液攜 O₂ 量↓。脈搏血氧計只看光吸收（660 vs 940 nm），HbCO 在 660 nm 吸光與 OxyHb 相似 → 假性正常。確診：Co-oximetry（直接測 HbCO%）。治療：100% O₂ 或高壓氧。'),
    Q('一位患者胸部外傷後出現縱隔左偏、左側呼吸音消失，懷疑「張力性氣胸（Tension pneumothorax）」。立即處置為何？',
      ['安排 CT 掃描確認診斷','緊急胸部 X 光後再處置','立即針頭減壓（Needle decompression，第 2 肋間鎖骨中線）→ 再行胸腔引流管（Chest tube）','立即氣管插管'], 1,
      '張力性氣胸：單向閥（One-way valve）→ 氣體持續進入胸膜腔 → 肺塌陷 + 縱隔偏移 → 靜脈回流受阻 → 心輸出量↓ → 休克。臨床診斷（氣管偏移 + 低血壓 + 呼吸音消失），勿等 X 光！立即針頭減壓 + 胸管。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 9：消化與內分泌生理
// ════════════════════════════════════════════════════════════
{
  id: 9, title: '消化與內分泌生理', em: '🍽️', c: '#F4A261',
  u: [
    {
      id: 'a', t: '胃腸道分泌與運動', em: '🔬',
      qs: [
        Q('胃壁細胞（Parietal cell）的功能與分泌物為何？',
          ['胃泌素（Gastrin）與黏液','胃酸（HCl）與內在因子（Intrinsic factor）','胃蛋白酶原（Pepsinogen）','生長抑素（Somatostatin）'], 1,
          '壁細胞（Parietal cell）：① H-K ATPase（質子泵）→ 分泌 H⁺（HCl，pH < 2）→ 活化 Pepsinogen 與殺菌；② 內在因子（IF）→ 與 Vitamin B12 結合 → 迴腸吸收。PPI（Omeprazole）阻斷 H-K ATPase。'),
        Q('胃酸分泌的三大促進因子為何？',
          ['Secretin、CCK、VIP','ACh（迷走神經）、Gastrin（G cell）、Histamine（ECL cell → H₂ 受器）','Somatostatin、Secretin、GIP','Leptin、Insulin、Glucagon'], 1,
          '三大促酸：① 迷走神經（ACh → M₃ 受器）② 胃泌素（Gastrin，G 細胞，蛋白質/胃擴張刺激）③ 組織胺（Histamine，ECL 細胞 → 壁細胞 H₂ 受器）。H₂ 受器拮抗劑（Ranitidine）/ PPI（Omeprazole）均可減酸。'),
        Q('胰泌素（Secretin）的主要功能為何？',
          ['促進胰臟分泌富含消化酶的胰液','由十二指腸 S 細胞分泌（酸性食糜刺激），促進胰臟導管細胞分泌富含 HCO₃⁻ 的胰液（中和酸性食糜）','促進膽汁排出（CCK 的功能）','抑制腸道蠕動'], 1,
          'Secretin（S 細胞）：十二指腸 pH↓ → 胰臟分泌 HCO₃⁻（中和）+ 抑制胃酸分泌。CCK（I 細胞）：脂肪/蛋白質刺激 → 膽囊收縮 + Oddi 括約肌舒張 + 胰臟酵素分泌。GIP：血糖 → 胰島素分泌（Incretin 效應）。'),
        Q('維生素 B12（Cobalamin）在消化道中的吸收路徑為何？',
          ['在胃被直接吸收','食物中 B12 → 胃酸/胃蛋白酶釋放 → 結合 Haptocorrin（R protein）→ 胰蛋白酶水解 → 結合 Intrinsic factor（壁細胞） → 迴腸末端（Ileum）的 Cubilin 受器吸收','在近端空腸被大量吸收','被腸道細菌合成後直接利用'], 1,
          'B12 吸收：口腔：R protein 結合 → 十二指腸：胰蛋白酶水解 R protein → B12 + IF（壁細胞合成）→ 迴腸末端：IF-B12 複合體 + Cubilin 受器 → 內化吸收。IF 缺乏（惡性貧血/胃切除）→ B12 缺乏 → 大球性/巨芽球貧血。'),
        Q('小腸「分節式收縮（Segmentation）」與「蠕動（Peristalsis）」的功能差異為何？',
          ['分節式：推進食糜；蠕動：混合食糜','分節式：混合食糜與消化液（局部環狀肌反覆收縮/舒張）；蠕動：推進食糜向遠端移動（縱向環形肌協調波）','兩者功能相同','分節式由外在神經控制；蠕動由腸神經叢自主控制'], 1,
          '進食後主要運動 → 分節（Segmentation）：最大化食糜與消化液接觸面積，促進吸收。蠕動（Peristalsis）：Ascending excitation/Descending inhibition（口側收縮、肛側舒張）→ 推進。MMC（Migrating motor complex）：空腹時清除腸道。'),
      ]
    },
    {
      id: 'b', t: '肝臟、膽汁與吸收', em: '🫒',
      qs: [
        Q('膽汁（Bile）的主要成分與功能為何？',
          ['富含消化酶（Lipase、Amylase），直接水解脂肪','膽鹽（Bile salts）使脂肪乳化為微脂粒（Micelles）→ 促進脂肪消化吸收；也含膽紅素（廢棄物排泄）','主要功能是中和胃酸','由胰臟分泌，直接進入十二指腸'], 1,
          '膽汁由肝細胞合成，膽囊儲存。膽鹽（Bile salts）= 膽酸（Cholic acid）+ 親水性胺基酸（Taurine/Glycine）→ 兩親性分子 → 乳化脂肪 → 形成 Micelles → 脂溶性維生素（A、D、E、K）和脂肪酸得以穿越水層被吸收。'),
        Q('膽紅素（Bilirubin）的代謝路徑，「直接膽紅素（Conjugated bilirubin）」與「間接膽紅素（Unconjugated bilirubin）」的主要差別為何？',
          ['間接：水溶性；直接：脂溶性','直接（Conjugated）：已在肝臟與葡萄糖醛酸結合，水溶性，由膽汁排出；間接（Unconjugated）：未結合，脂溶性，與白蛋白結合，可穿越血腦屏障（核黃疸風險）','兩者來源不同（RBC vs 肌肉）','直接膽紅素在腸道形成，間接在肝臟'], 1,
          '溶血性黃疸：間接↑（前肝前）；肝細胞性黃疸：兩者均可↑；膽道阻塞性黃疸：直接↑（進入血液）→ 茶色尿（Bilirubin 尿）、陶土色糞便（無尿膽素）。新生兒黃疸：非結合型↑（血腦屏障未成熟），藍光光療。'),
        Q('脂溶性維生素（A、D、E、K）的吸收依賴何種結構？',
          ['水溶性環境中直接吸收','膽鹽形成的微脂粒（Micelles）→ 攜帶脂溶性維生素穿越腸黏膜水層 → 融入乳糜微粒（Chylomicron）→ 經淋巴系統進入血液','透過 Na⁺ 協同轉運','被胰脂肪酶直接水解後吸收'], 1,
          '脂溶性 ADEK：需 Micelles（膽鹽乳化）→ 腸黏膜吸收 → 乳糜微粒（Chylomicron）→ 胸管（Thoracic duct）→ 血液。膽道阻塞或 Cystic fibrosis → Micelle 不足 → 脂溶性維生素缺乏（K 缺乏 → 凝血障礙；D 缺乏 → 骨軟化）。'),
        Q('「腸肝循環（Enterohepatic circulation）」的意義為何？',
          ['食物在腸道與肝臟之間循環消化','膽鹽在迴腸末端被重吸收（Bile salt transporter）→ 門靜脈 → 肝臟再分泌（節省膽鹽合成；每天循環約 6-10 次）','毒素被腸道吸收後在肝臟解毒','胰腺激素在腸肝間再利用'], 1,
          '腸肝循環：每天分泌膽鹽約 20-30 g，僅合成 0.2-0.5 g，其餘由迴腸主動重吸收 → 門靜脈 → 肝臟 → 再分泌入膽汁。切除迴腸 → 膽鹽大量流失 → 脂肪吸收障礙 + 膽固醇結石（膽鹽保護 Cholesterol 溶解）。'),
        Q('乳糜瀉（Celiac disease）的致病機轉與主要吸收障礙為何？',
          ['膽汁缺乏，無法消化脂肪','Gluten（麥麩蛋白）→ 免疫介導的小腸絨毛萎縮 → 吸收面積大幅減少 → 廣泛營養素吸收不良（鐵、葉酸、鈣、脂溶性維生素）','胰酶缺乏引起脂肪消化障礙','胃酸過多破壞腸黏膜'], 1,
          'Celiac disease：HLA-DQ2/DQ8 → 麩質（Gliadin）→ 自體免疫攻擊小腸黏膜 → 絨毛萎縮（Villous atrophy）、隱窩增生（Crypt hyperplasia）→ 廣泛吸收不良。血清抗 tTG IgA 抗體確診；治療：無麩質飲食。'),
      ]
    },
    {
      id: 'c', t: '內分泌腺生理', em: '🧪',
      qs: [
        Q('胰島素（Insulin）的主要代謝效應為何？',
          ['促進肝醣分解（Glycogenolysis）','促進葡萄糖攝取（GLUT4 移位）、肝醣合成、蛋白質合成、脂肪合成（合成代謝激素）','促進脂肪分解（Lipolysis）','促進醣質新生（Gluconeogenesis）'], 1,
          'Insulin（β 細胞）：Tyrosine kinase → 肌肉/脂肪 GLUT4 移位 → 葡萄糖攝取；肝：肝醣合成↑（Glycogen synthase）、醣質新生↓；整體：合成代謝。Glucagon（α 細胞）：cAMP → 肝醣分解 + 醣質新生（分解代謝）。'),
        Q('甲狀腺激素（T3/T4）的主要生理效應與合成所需元素為何？',
          ['需要碘（I⁻）；效應：基礎代謝率↑、心跳↑、胃腸蠕動↑、神經發育（胎兒）','需要鈣；效應：骨質合成','需要鐵；效應：紅血球生成','需要鋅；效應：免疫調節'], 0,
          'T3/T4 合成：I⁻ → 甲狀腺球蛋白酪胺酸 → MIT/DIT → T3/T4。效應（幾乎全身）：BMR↑（粒線體 Na-K ATPase↑）、心跳加快（β 受器↑）、腸蠕動↑、熱生成↑、骨/腦正常發育（幼兒缺乏 → 呆小症）。'),
        Q('糖皮質素（Glucocorticoids，如 Cortisol）的主要代謝效應為何？',
          ['促進蛋白質合成、肌肉生長','促進醣質新生、抑制免疫（抗發炎）、促進脂肪分解（周邊）+ 脂肪重新分布（中央型肥胖）、抑制 Phospholipase A₂','促進 Na⁺ 排泄（利尿）','促進骨質合成，增加鈣吸收'], 1,
          'Cortisol（由 ACTH 刺激肾上腺皮質束狀帶分泌）：① 醣質新生↑（升血糖）② 免疫抑制（NF-κB↓）③ 蛋白質分解（肌萎縮）④ 脂肪重分布（Moon face、Buffalo hump）⑤ 骨質流失（骨母細胞↓）。Cushing 症候群為其過量表現。'),
        Q('甲狀旁腺素（PTH）升高時，對骨骼、腎臟與腸道鈣磷代謝的效應為何？',
          ['骨：抑制破骨細胞；腎：促進 Ca²⁺ 排泄；腸：減少 Ca²⁺ 吸收','骨：破骨細胞活化 → Ca²⁺/P 釋放；腎：Ca²⁺ 重吸收↑、P 排泄↑、活化 1α-hydroxylase → Calcitriol↑；腸：Calcitriol → Ca²⁺/P 吸收↑','骨：骨母細胞活化，骨形成；腎：Ca²⁺ 排泄；腸：無影響','僅作用於腎臟'], 1,
          'PTH：①骨：RANKL → 破骨細胞 → Ca²⁺、P 釋放 ②腎：Ca²⁺ 重吸收↑（遠端小管）、磷（P）排泄↑、1α-hydroxylase → Calcitriol（1,25-OH D）③腸：Calcitriol → Ca²⁺ 與 P 吸收↑。整體：血 Ca²⁺↑、血 P↓（腎排除）。'),
        Q('胰島素分泌的主要觸發因素為何？',
          ['低血糖','血糖升高（葡萄糖進入 β 細胞 → Glucokinase → ATP/ADP↑ → KATP 關閉 → 去極化 → L 型 Ca²⁺ → 胰島素囊泡釋放）','肌肉運動','腎上腺素刺激'], 1,
          'Glucose-stimulated insulin secretion（GSIS）：葡萄糖進入 β 細胞 → 糖解 → ATP↑ → K_ATP 通道關閉 → 膜去極化 → L 型 Ca²⁺ 開啟 → Ca²⁺ → 囊泡融合 → 胰島素分泌。Sulfonylurea（SU）直接關閉 KATP → 促進胰島素分泌（降血糖藥）。'),
      ]
    },
  ],
  boss: [
    Q('一位 45 歲男性，胃潰瘍反覆治療無效，Serum Gastrin = 1500 pg/mL（正常 < 100），胃液酸度極高。最可能的診斷為何？',
      ['H. pylori 感染','Zollinger-Ellison syndrome（ZES）：胃泌素瘤（Gastrinoma，常位於胰十二指腸區域）→ 過量 Gastrin → 壁細胞高度刺激 → 難治性潰瘍、腹瀉','A 型胃炎（自體免疫）','慢性腎衰竭（Gastrin 清除率↓）'], 1,
      'ZES：非 β 細胞胰島腫瘤（Gastrinoma）→ Gastrin↑↑ → 酸分泌↑↑（>15 mEq/hr）→ 十二指腸/空腸潰瘍（多發、遠端）+ 腹瀉（脂肪痢，因酸滅活 Lipase）。Secretin stimulation test：Gastrinoma 患者 Gastrin 悖理性↑。60% 為惡性。'),
    Q('一位 55 歲女性接受胃全切除術（Total gastrectomy），數年後出現巨芽球性貧血（Megaloblastic anemia）。最可能的原因為何？',
      ['鐵質缺乏（胃酸缺失影響 Fe³⁺ 還原）','Intrinsic factor 缺失 → B12 無法在迴腸吸收 → B12 缺乏 → 大球性/巨芽球貧血','葉酸缺乏（術後飲食不均）','溶血性貧血（術後免疫異常）'], 1,
      '全胃切除 → 壁細胞全無 → IF 缺失 → B12-IF 複合體無法形成 → 迴腸吸收↓ → B12 缺乏（2-5 年出現，因肝臟儲存量大）→ DNA 合成障礙（Thymidylate synthase 需 B12）→ 巨芽球貧血、神經病變（亞急性脊髓退化）。治療：肌注 B12。'),
    Q('一位患者突發低血糖症狀（心悸、出汗、意識混亂），血糖 40 mg/dL，胰島素/血糖比值異常升高。懷疑胰島素瘤（Insulinoma）。何種藥物可暫時控制過量胰島素分泌？',
      ['Metformin（雙胍類）','Diazoxide（KATP 通道開啟劑）：直接開啟 β 細胞 KATP 通道 → 抑制去極化 → 胰島素分泌↓；或 Octreotide（體制素類似物，抑制 GH 和 Insulin）','Glipizide（Sulfonylurea，促胰島素分泌）','Insulin glargine'], 1,
      'Insulinoma 治療首選手術切除。藥物橋接：①Diazoxide（KATP 開啟 → β 細胞超極化 → 分泌抑制）②Octreotide（體抑素類似物，SST2/SST5 受器 → Gi → 抑制胰島素）。SU（Sulfonylurea）反而關閉 KATP → 促分泌，絕對禁忌！'),
    Q('一位患者因長期服用 PPI（Proton pump inhibitor），出現低鎂血症（Hypomagnesemia）與低鉀血症。機轉為何？',
      ['PPI 直接抑制腎臟 Mg²⁺ 重吸收','長期抑制胃酸（pH↑）→ 影響 TRPM6/TRPM7（Mg²⁺ 轉運體）功能 → 腸道 Mg²⁺ 吸收↓ → 低鎂；低鎂 → 繼發性低鉀（Mg²⁺ 為 ROMK 通道運作所必需，Mg²⁺↓ → 腎 K⁺ 排泄↑）','PPI 促進 Aldosterone 分泌','胃酸減少影響 K⁺ 吸收'], 1,
      'PPI 長期副作用：①低鎂血症（機轉未完全清楚，可能影響腸道 TRPM6/7 Mg²⁺ 轉運）②繼發低鉀（Mg²⁺ 缺乏時腎臟 ROMK 通道功能異常，K⁺ 排泄↑）③維生素 B12 吸收↓（胃酸幫助 B12 從食物中釋出）④感染風險↑（胃酸殺菌）。'),
    Q('Addison 病（原發性腎上腺皮質機能不全）患者的典型臨床與實驗室表現為何？',
      ['高血壓、高血鉀、低血鈉（Hyperaldosteronism 表現）','低血壓（低 Aldosterone + 低 Cortisol → Na⁺ 喪失）、低血鈉、高血鉀、低血糖（Cortisol↓ → 醣質新生↓）、皮膚色素沉積（ACTH↑ → 交叉刺激 MC1R）','Cushing 症候群（高 Cortisol）','低 ACTH 高 Cortisol（繼發性腎上腺機能不全）'], 1,
      'Addison（原發性）：腎上腺皮質破壞（自體免疫最常見）→ Cortisol↓ + Aldosterone↓。① 低血壓（Na⁺/水分喪失）② 低血鈉（ADH 代償上升 → 低滲）③ 高血鉀（醛固酮↓）④ 低血糖（醣質新生↓）⑤ ACTH↑ → 皮膚色素↑。腎上腺危象（Addisonian crisis）= 急症。'),
    Q('一位孕婦（第三孕期）血液中 hCG（Human chorionic gonadotropin）濃度很高。hCG 對甲狀腺功能有何影響？',
      ['hCG 直接抑制 TSH 分泌','hCG 與 TSH 受器有部分交叉反應 → 輕微刺激甲狀腺 → T3/T4↑ → 負回饋 TSH↓（妊娠期甲狀腺機能亢進，尤其第一孕期）','hCG 促進碘吸收，增加 T4 合成','hCG 對甲狀腺無影響'], 1,
      'hCG 與 TSH 受器（Gs 偶聯）有結構相似性 → 弱 TSH 活性 → 第一孕期 hCG 峰值 → TSH 可能輕微↓（生理性）。孕劇吐（Hyperemesis gravidarum）患者 hCG 極高 → 有時引起短暫甲亢症狀。妊娠期甲狀腺結合球蛋白（TBG）↑ → 總 T4↑ 但游離 T4 正常。'),
  ]
},

// ════════════════════════════════════════════════════════════
// 里程碑 10：綜合整合 — 體液調節與特殊感官
// ════════════════════════════════════════════════════════════
{
  id: 10, title: '綜合整合 — 體液調節與特殊感官', em: '🏆', c: '#845EF7',
  u: [
    {
      id: 'a', t: '體液平衡與血壓整合調節', em: '💧',
      qs: [
        Q('「心房利鈉肽（ANP，Atrial natriuretic peptide）」分泌的觸發因素與生理效應為何？',
          ['低血容量時分泌；效應：腎臟保鈉','心房牽拉（血容量↑/心房壓↑）→ ANP 分泌；效應：利鈉（ENaC 抑制）、利尿、血管舒張（GFR↑）、抑制 RAAS 與 ADH，整體降低血容量/血壓','腎臟灌流↓時分泌；效應：保鈉保水','腎上腺素刺激分泌；效應：升壓'], 1,
          'ANP（心房）+ BNP（心室）：由牽張感測 → 分泌。效應：腎臟入球動脈舒張、出球動脈收縮 → GFR↑；腎小管 ENaC 抑制 → Na⁺/水排泄↑；直接抑制 Renin、Aldosterone、ADH → 降血壓/降血容量。心衰時 BNP↑ → 診斷與預後指標。'),
        Q('「口渴中樞（Thirst center）」位於何處，何種刺激最能引發口渴？',
          ['延腦，由低血壓引發','下視丘（視上核旁、穹隆下器官），由血漿滲透壓升高（> 280 mOsm/kg）或血容量↓引發','前額葉皮質，由心理因素引發','小腦，由電解質失衡引發'], 1,
          '口渴中樞（下視丘）觸發：①血漿滲透壓↑（最重要，Osmoceptors 感測）②血容量↓（AngII 刺激穹隆下器官 / SFO）③低血壓（Baroreceptor 訊號）。ADH 分泌與口渴同步啟動（均依賴 Osmoceptors），共同維持水平衡。'),
        Q('「第三間隙液（Third space fluid）」喪失（如大面積燒傷、腹膜炎）的血流動力學後果為何？',
          ['血容量增加，靜脈回流↑','有效循環血量↓（液體進入「無功能」間隙）→ 低血壓、心跳加速、腎臟灌流↓（Prerenal AKI）；外觀可能水腫但循環衰竭','RAAS 被抑制，血壓穩定','高血鈉症為主要問題'], 1,
          '第三間隙：液體進入腹腔（腹水）、皮下組織（燒傷）等非功能性間隙 → 有效循環血量（Effective circulating volume，ECV）↓ → RAAS 活化 → 水腫加劇但循環仍不足。治療：積極靜脈補液以補充有效循環。'),
        Q('「等張性脫水（Isotonic dehydration）」（如大量出血）與「低張性脫水（Hypotonic dehydration）」（如大量出汗）對細胞體積的影響差異為何？',
          ['兩者均導致細胞膨脹','等張性：ECF 減少，細胞體積不變（滲透壓不變）；低張性：ECF 低張 → 水進入細胞 → 細胞膨脹（腦水腫風險）','等張性：細胞縮水；低張性：細胞膨脹','兩者均導致細胞縮水'], 1,
          '等張脫水（失血）：ECF 滲透壓不變 → 無水在 ICF/ECF 之間移動 → 細胞體積正常，只有 ECF 減少。低張脫水（大量出汗，汗液為低張）：ECF 滲透壓↓ → 水進入細胞（ICF）→ 細胞膨脹 → 腦水腫（頭痛、癲癇、意識喪失）。'),
        Q('「長期血壓調節」最重要的機制為何？',
          ['Baroreceptor reflex（短期調節，1-2 小時後適應）','腎臟的「壓力-鈉尿利（Pressure natriuresis）」機制：血壓↑ → 腎臟 Na⁺/水排泄↑ → 血容量↓ → 血壓↓，直到穩態','交感神經持續收縮血管','心臟肥大增加輸出'], 1,
          '短期（秒-分鐘）：Baroreceptor reflex（快速但適應）。中期（小時）：RAAS、ADH、Capillary fluid shift。長期（天-週）：腎臟壓力-鈉尿利機制（無可逃脫性），是最終血壓決定因素。腎功能受損 → 此機制失調 → 高血壓。'),
      ]
    },
    {
      id: 'b', t: '特殊感官生理', em: '👀',
      qs: [
        Q('視網膜「桿細胞」光傳導的分子機轉為何？',
          ['光直接活化 G 蛋白（Transducin）→ Phospholipase C → IP₃/DAG','光（光子）→ 11-cis retinal → all-trans retinal → Rhodopsin 活化 → Transducin（Gα）→ Phosphodiesterase（PDE）→ cGMP↓ → cGMP-gated Na⁺ 通道關閉 → 超極化 → 神經訊號',  '光直接刺激動作電位','光使 cGMP 增加 → 通道開啟 → 去極化'], 1,
          '暗處：高 cGMP → Na⁺（+ Ca²⁺）通道開放 → 去極化 → 持續釋放 Glutamate（抑制雙極細胞）。光照：Rhodopsin → Transducin → PDE → cGMP↓ → 通道關閉 → 超極化 → Glutamate 釋放↓ → 雙極細胞去抑制（ON 路徑）→ 節細胞發訊。'),
        Q('「老花眼（Presbyopia）」的機轉與矯正方式為何？',
          ['角膜曲率改變，用凹透鏡','水晶體隨年齡增加失去彈性 → 調節力（Accommodation）↓ → 近點變遠 → 無法聚焦近物；矯正：凸透鏡（老花眼鏡）','玻璃體混濁，無法矯正','視網膜退化，手術治療'], 1,
          '調節（Accommodation）：睫狀肌收縮 → 懸韌帶鬆弛 → 水晶體因本身彈性變厚（凸）→ 折射率↑ → 近物聚焦。老花：水晶體硬化 → 調節力喪失 → 近點距離↑ → 需凸透鏡（正度數）補足折射。近視：眼軸過長，用凹透鏡（負度數）。'),
        Q('耳蝸（Cochlea）的「毛細胞（Hair cells）」如何將聲音轉換為神經訊號？',
          ['聲壓直接刺激聽神經','聲波 → 外淋巴/內淋巴振動 → 基底膜振動（不同頻率在不同位置最大振動，Tonotopy）→ 毛細胞靜毛（Stereocilia）偏折 → Tip links 拉開 MET 通道 → K⁺/Ca²⁺ 內流（內淋巴高 K⁺）→ 去極化 → Glutamate 釋放 → 聽神經','聲波直接傳到大腦皮質','橢圓窗振動直接刺激神經'], 1,
          'Cochlea Tonotopy：高頻 → 基底（Basal turn）最大振動；低頻 → 頂端（Apical turn）。毛細胞電轉換（Mechanotransduction）：K⁺ 從高鉀的內淋巴流入（因靜毛彎曲開啟 MET 通道）→ 去極化 → Ca²⁺ 進入 → Neurotransmitter（Glutamate）釋放。'),
        Q('「前庭系統」中，橢圓囊（Utricle）與球囊（Saccule）主要偵測何種運動？',
          ['旋轉角加速度（Angular acceleration）','線性加速度與重力（靜態頭部傾斜）：耳石（Otolith）因慣性偏移毛細胞 → 線性加速度感測','聲波頻率','眼球運動'], 1,
          'Utricle（橢圓囊）：水平線性加速度；Saccule（球囊）：垂直線性加速度（重力）。機制：耳石膜（Otolith membrane）因重力/加速度慣性 → 相對毛細胞移動 → 靜毛偏折 → 去極化/超極化。半規管（Semicircular canals）：感測角加速度（旋轉）。'),
        Q('松果腺（Pineal gland）分泌「褪黑素（Melatonin）」的調節機制與功能為何？',
          ['日間分泌，調節血壓','光線（視網膜 → 視交叉上核 / SCN → 交感神經 → 松果腺）在黑暗時分泌↑、光照時抑制 → 調節晝夜節律（Circadian rhythm）與季節性繁殖、誘導睡眠','黑暗時分泌↑，與 ADH 協同作用','持續均勻分泌，不受光線影響'], 1,
          '松果腺：接受 SCN（下視丘視交叉上核，circadian pacemaker）→ 交感 → NE → β 受器 → cAMP → AANAT（限速酶）→ Melatonin 合成。功能：①時差調整 ②誘導睡意 ③季節性生殖（哺乳類）。光照 → 交感抑制 → Melatonin↓。'),
      ]
    },
    {
      id: 'c', t: '運動生理與整合應答', em: '🏃',
      qs: [
        Q('劇烈運動初期（前 10 秒），骨骼肌的主要能量來源為何？',
          ['有氧糖解（需氧）','肌酸磷酸（PCr = Phosphocreatine）系統：PCr + ADP → ATP + Cr（CK 催化，即時高功率輸出）','脂肪酸氧化','肝醣有氧氧化'], 1,
          '能量系統時序：①0-10 秒：PCr 系統（磷酸肌酸，無氧，最快最強）②10-120 秒：無氧糖解（乳酸積累）③2 分鐘以上：有氧代謝（糖 → 脂肪）。馬拉松以有氧脂肪氧化為主；短跑以 PCr + 無氧糖解為主。'),
        Q('長時間耐力運動後，身體利用「脂肪」為燃料的主要代謝路徑為何？',
          ['脂肪直接在血液中燃燒','脂肪組織 Lipolysis（HSL 催化）→ FFA + Glycerol；FFA → 活化（Acyl-CoA）→ CPT1 轉運入粒線體 → β-氧化 → Acetyl-CoA → TCA + 氧化磷酸化（ATP）；Glycerol → 肝臟 → 醣質新生','糖原分解後轉化為脂肪','蛋白質分解為主要燃料'], 1,
          '耐力運動（>30 分）：交感 + 糖皮質素 → HSL（Hormone-sensitive lipase）活化 → 脂肪分解 → FFA 進入血液 → 肌肉攝取 → β-氧化。CPT1（肉鹼棕酰轉移酶 1）= 長鏈脂肪酸進粒線體的限速步驟。訓練後 → CPT1 活性↑、更能燃脂。'),
        Q('運動時「皮膚血流」的調節方式為何？',
          ['皮膚血流隨運動強度持續↓（以確保肌肉供血）','運動初期：皮膚血流↓（交感 α₁ 收縮，血液轉至肌肉）→ 核心溫度↑後：皮膚血流大量↑（散熱 > 肌肉需求），若環境熱則散熱需求與肌肉灌流相競爭','皮膚血流不受運動影響','皮膚血流只由副交感調控'], 1,
          '運動調節皮膚血流：①開始：交感 α₁ → 皮膚血管收縮（血液轉至骨骼肌、心臟）②溫度上升：下視丘溫控中樞 → 交感膽鹼性纖維 → 皮膚血管舒張 + 出汗。熱環境運動：皮膚散熱與肌肉灌流競爭 → 若脫水 → 心率代償↑ → 早衰竭風險。'),
        Q('「最大氧攝取量（VO₂max）」的生理意義與訓練效應為何？',
          ['肺活量的最大值，與心血管無關','有氧運動能力的最高指標 = CO（心輸出量）× A-V O₂ 差（Fick 原理）；訓練後：心臟每搏輸出量↑（心室容積↑，Athlete heart）+ 骨骼肌粒線體密度↑ → VO₂max↑','隨年齡增加而升高','只能由遺傳決定，訓練無效'], 1,
          'VO₂max（Fick 原理）= HR × SV × (CaO₂ − CvO₂)。訓練 → ① 心肌肥大（離心性，SV↑）→ CO↑ ② 骨骼肌粒線體密度↑（細胞色素氧化酶↑）→ 提取 O₂ 能力↑ ③ 毛細管密度↑ → A-V O₂ 差↑。VO₂max 是有氧適能的最佳單一指標。'),
        Q('運動時「升壓反射（Pressor reflex / Exercise pressor reflex）」的感覺傳入為何？',
          ['Baroreceptor（壓力受器）接收高血壓訊號後抑制運動','骨骼肌中的代謝感受器（群 III Aδ 和 群 IV C 纖維，感測 H⁺、K⁺、Pi、前列腺素等代謝物）→ 傳入心血管中樞 → 交感↑（血壓升、心率升）以維持運動肌肉的氧供','皮膚感覺受器','腎臟 Renin 直接感測運動'], 1,
          '運動壓升反射（Exercise pressor reflex）= Metaboreflex + Mechanoreflex：骨骼肌代謝物（K⁺、H⁺、Pi、緩激肽、TXA₂）刺激群 III/IV 感覺纖維 → 延腦 → 交感激活 → 心率↑、血壓↑（重要性：確保活動肌肉在代謝壓力下仍獲足夠灌流）。'),
      ]
    },
  ],
  boss: [
    Q('一位 75 歲老人，夜間多次排尿，白天口渴感降低，補液後血鈉仍維持高值（147 mEq/L）。最可能的老化改變為何？',
      ['腎臟 ADH 受器增多，保水能力增強','下視丘渴覺閾值升高（對滲透壓不敏感）+ 腎臟 ADH 反應性降低（AQP2 下調）+ 前列腺肥大引起夜尿 → 脫水/高血鈉高風險（老年人常見危機）','ANP 分泌增加，利尿增強','RAAS 活性隨年齡增加'], 1,
      '老化腎臟功能：①渴覺中樞敏感性↓（不渴卻缺水）②腎濃縮能力↓（ADH 反應↓）③GFR↓（約每年 1 mL/min/1.73m² 下降）④鈉調節能力↓ ⑤前列腺肥大（男性）引起夜尿。老年人高鈉血症（Hypernatremia）和脫水為急診常見問題。'),
    Q('一位運動員在炎熱環境中長時間比賽後，出現意識混亂、皮膚乾燥發紅、體溫 41°C，無出汗。最可能的診斷與緊急處置為何？',
      ['熱衰竭（Heat exhaustion）：口服補液','熱中暑（Heat stroke）：散熱中樞失調 + 散熱機制（出汗）衰竭 → 高體溫 → 蛋白質變性、CNS 損傷。緊急：立即降溫（浸冷水、冰袋貼）+ IV 補液 + 監測凝血（DIC 風險）','運動性低鈉血症：限制液體攝取','橫紋肌溶解症：碳酸氫鈉補液'], 1,
      '熱中暑（Classic heat stroke）：體溫 > 40°C + 神經學症狀 + 無汗（汗腺功能衰竭）。核心溫度升高 → 粒線體解偶聯（代謝↑，熱生成更多）→ 惡性循環。DIC、ARDS、AKI（Rhabdomyolysis）為主要併發症。「快速降溫」是關鍵（每 10 分鐘體溫降至 39°C 以下）。'),
    Q('一位患者的 24 小時 Holter ECG 顯示：睡眠期間心率約 45 bpm（正常），深蹲運動時心率迅速升至 165 bpm。此心率反應正常嗎？其調控機轉為何？',
      ['心率 45 bpm 過低，可能需要心臟節律器','正常：靜止時迷走張力高（副交感 → SA node 超極化 → 心率↓）；運動時交感活化（β₁）→ If 電流↑ → 閾值更快達到 → 心率快速↑（心率儲備 = HRmax − HRrest，最大心率 ≈ 220 − 年齡）','心率 165 過高，心律不整','心率只受體溫影響'], 1,
      '心率調節：自律性（SA node 本身 If 電流）+ 自主神經調節（迷走 M₂：K⁺ 外流↑→超極化；交感 β₁：cAMP↑ → If↑ → 去極化加速）。運動反應：橫紋肌代謝受器 + 中樞指令 → 交感↑/迷走↓ → 心率快速（Chronotropy）+ 收縮力（Inotropy）↑。'),
    Q('某藥物同時具備「α₁ 受器阻斷（降低血管阻力）」和「β₁ 受器阻斷（降低心輸出量）」的特性。理論上此藥物對血壓的效應為何？',
      ['只降低收縮壓','降低血壓（MAP = CO × TPR；兩者均↓）但心跳速率可能不明顯加速（β₁ 阻斷抑制反射性心跳過速）','升高血壓（β₁ 阻斷使 α₂ 主導）','對血壓無影響（兩效應相消）'], 1,
      'Labetalol / Carvedilol：同時阻斷 α₁（TPR↓）+ β₁（CO↓）→ MAP↓（雙重降壓）。優點：α₁ 阻斷的血管舒張效應防止 β 阻斷後的反射性心跳加速。適合高血壓急症（Labetalol IV）、心衰（Carvedilol 改善預後）、嗜鉻細胞瘤（先 α 後 β 阻斷原則）。'),
    Q('「生理學整合」：描述出血（失血 1000 mL）後身體在「秒」、「分鐘」、「小時」、「天」四個時間尺度的代償反應。',
      ['只有血壓立即升高（僅一個代償機制）','秒：Baroreceptor↓ → 交感↑（心率↑、血管收縮、腎上腺素分泌）；分：RAAS 啟動（Renin → AngII → 醛固酮）、ADH 分泌；小時：毛細管再填充（組織液回補血管）、口渴感↑；天：EPO↑ → 網狀紅血球/RBC↑、白蛋白合成↑（oncotic pressure 恢復）','只有腎臟調節，無神經反應','腎臟立即關閉所有 GFR 以保留水分'], 1,
      '完整代償鏈：①<秒：Baroreceptor reflex（交感↑/迷走↓）→ HR↑、TPR↑ ②分鐘：Renin↑ → AngII（血管收縮 + 醛固酮）、ADH（水保留）③小時：Interstitial fluid → 血管（Capillary refill，稀釋 Hb）④天：EPO↑ → Reticulocyte↑ → RBC↑；肝臟 Albumin 合成↑ → oncotic pressure 恢復。'),
    Q('一位患者因腦瘤壓迫「視交叉（Optic chiasm）」的中央部分，視野缺損最可能的表現為何？',
      ['右側完全失明（Monocular blindness）','雙眼顳側視野喪失（Bitemporal hemianopsia）：視交叉中央纖維來自兩眼鼻側視網膜（感測顳側視野），受壓 → 顳側視野喪失','左側偏盲（Homonymous hemianopsia）','中央視力（黃斑）喪失'], 1,
      '視交叉中央：兩眼鼻側纖維（感測顳側視野）在此交叉 → 壓迫此處 → 雙眼顳側視野缺損（Bitemporal hemianopsia = 管狀視野）。此為垂體腺瘤（Pituitary adenoma）的典型壓迫症狀。外側壓迫（同側）→ 鼻側視野喪失（單眼）。後方視徑（Optic tract / Radiation）→ 對側同名偏盲（Contralateral homonymous hemianopsia）。'),
  ]
},

]; // end of MS array

// Export for MedLingo game engine
if (typeof window !== 'undefined') window.ML_PH = MS;
if (typeof module !== 'undefined') module.exports = MS;
