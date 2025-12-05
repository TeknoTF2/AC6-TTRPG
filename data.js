// AC6 TTRPG Parts Database

const AC6_DATA = {
    generators: [
        { id: 'AG-E-013YABA', name: 'AG-E-013 YABA', tier: 'Starter', capacity: 2200, recharge: 769, supply: 800, weight: 3420, output: 2600, eSpec: 101, role: 'Training' },
        { id: 'AG-J-098JOSO', name: 'AG-J-098 JOSO', tier: 'Fast Recharge', capacity: 2890, recharge: 952, supply: 1100, weight: 4110, output: 2930, eSpec: 108, role: 'Hit-and-run' },
        { id: 'AG-T-005HOKUSHI', name: 'AG-T-005 HOKUSHI', tier: 'Lightweight', capacity: 3110, recharge: 845, supply: 950, weight: 3890, output: 2790, eSpec: 105, role: 'Speed builds' },
        { id: 'DF-GN-02LING-TAI', name: 'DF-GN-02 LING-TAI', tier: 'Balanced', capacity: 3450, recharge: 820, supply: 1020, weight: 5200, output: 3180, eSpec: 110, role: 'Standard' },
        { id: 'DF-GN-06MING-TANG', name: 'DF-GN-06 MING-TANG', tier: 'Sustained', capacity: 3000, recharge: 924, supply: 1980, weight: 6180, output: 3280, eSpec: 112, role: 'Never down' },
        { id: 'DF-GN-08SAN-TAI', name: 'DF-GN-08 SAN-TAI', tier: 'Heavy Combat', capacity: 3690, recharge: 555, supply: 780, weight: 10130, output: 4090, eSpec: 132, role: 'Heavyweight' },
        { id: 'IA-C01G:AORTA', name: 'IA-C01G: AORTA', tier: 'Coral Balanced', capacity: 4020, recharge: 734, supply: 1150, weight: 5690, output: 3370, eSpec: 118, role: 'Coral tech' },
        { id: 'VP-20C', name: 'VP-20C', tier: 'High Output', capacity: 5250, recharge: 720, supply: 680, weight: 6890, output: 3920, eSpec: 122, role: 'Power-hungry' },
        { id: 'VP-20D', name: 'VP-20D', tier: 'Max Output', capacity: 5640, recharge: 612, supply: 550, weight: 7920, output: 4500, eSpec: 128, role: 'MAX output' },
        { id: 'VP-20S', name: 'VP-20S ★', tier: 'BEST ALL-ROUNDER', capacity: 5780, recharge: 870, supply: 764, weight: 4680, output: 3290, eSpec: 115, role: 'Best balanced' },
        { id: 'VE-20A', name: 'VE-20A', tier: 'Energy Weapons', capacity: 4850, recharge: 690, supply: 720, weight: 7140, output: 3640, eSpec: 138, role: 'E-weapon spec' },
        { id: 'VE-20B', name: 'VE-20B', tier: 'Energy Balanced', capacity: 5120, recharge: 755, supply: 810, weight: 6350, output: 3480, eSpec: 125, role: 'E + recharge' },
        { id: 'VE-20C', name: 'VE-20C', tier: 'MAX CAPACITY', capacity: 8800, recharge: 500, supply: 624, weight: 8950, output: 4340, eSpec: 135, role: 'Massive battery' },
        { id: 'IB-C03G:NGI000', name: 'IB-C03G: NGI 000 ★', tier: 'GLASS CANNON', capacity: 6000, recharge: 476, supply: 666, weight: 4330, output: 3500, eSpec: 145, role: 'MAX E-dmg' }
    ],

    fcs: [
        { id: 'FCS-G1/P01', name: 'FCS-G1/P01', tier: 'STARTER', close: 0, medium: 0, long: 0, missile: -2, enLoad: 280, weight: 110, role: 'Basic' },
        { id: 'FC-006ABBOT', name: 'FC-006 ABBOT', tier: 'All-Rounder', close: 1, medium: 2, long: 1, missile: 0, enLoad: 310, weight: 125, role: 'First upgrade' },
        { id: 'FCS-G2/P05', name: 'FCS-G2/P05', tier: 'All-Rounder', close: 1, medium: 3, long: 0, missile: 1, enLoad: 325, weight: 130, role: 'MID-RANGE' },
        { id: 'FC-008TALBOT', name: 'FC-008 TALBOT', tier: 'All-Rounder', close: 3, medium: 2, long: -2, missile: 1, enLoad: 265, weight: 95, role: 'Lightweight' },
        { id: 'IB-C03F:WLT001', name: 'IB-C03F: WLT 001', tier: 'All-Rounder', close: 4, medium: 4, long: 3, missile: 3, enLoad: 388, weight: 160, role: 'ULTIMATE' },
        { id: 'IA-C01F:OCELLUS', name: 'IA-C01F: OCELLUS', tier: 'Close-Range', close: 8, medium: -4, long: -6, missile: 0, enLoad: 292, weight: 130, role: 'MELEE KING' },
        { id: 'VE-21B', name: 'VE-21B', tier: 'Close-Range', close: 4, medium: 1, long: -3, missile: 2, enLoad: 345, weight: 140, role: 'Brawler' },
        { id: 'FCS-G2/P10SLT', name: 'FCS-G2/P10SLT', tier: 'Missile', close: 0, medium: 1, long: 1, missile: 5, enLoad: 300, weight: 115, role: 'MISSILE MASTER' },
        { id: 'FCS-G2/P12SML', name: 'FCS-G2/P12SML', tier: 'Missile', close: 1, medium: 2, long: 1, missile: 4, enLoad: 315, weight: 120, role: 'Small missile' },
        { id: 'VE-21A', name: 'VE-21A', tier: 'Long-Range', close: -4, medium: -2, long: 6, missile: 1, enLoad: 364, weight: 85, role: 'SNIPER' }
    ],

    boosters: [
        { id: 'BC-0200GRIDWALKER', name: 'BC-0200 GRIDWALKER', tier: 'STARTER', movement: 380, qbDistance: 110, qbCost: 120, enLoad: 150, weight: 1150, special: 'Training' },
        { id: 'BC-0400MULE', name: 'BC-0400 MULE', tier: 'Early Heavy', movement: 420, qbDistance: 120, qbCost: 150, enLoad: 280, weight: 1850, special: 'Heavy duty' },
        { id: 'BST-G1/P10', name: 'BST-G1/P10', tier: 'Early Balanced', movement: 480, qbDistance: 140, qbCost: 110, enLoad: 195, weight: 1420, special: 'First upgrade' },
        { id: 'AB-J-137KIKAKU', name: 'AB-J-137 KIKAKU', tier: 'Melee', movement: 450, qbDistance: 155, qbCost: 100, enLoad: 210, weight: 1580, special: 'Melee +100%' },
        { id: 'BC-060012345', name: 'BC-0600 12345', tier: 'Mid Heavy', movement: 500, qbDistance: 180, qbCost: 95, enLoad: 180, weight: 1360, special: 'Best heavy QB' },
        { id: 'BUERZEL/21D', name: 'BUERZEL/21D', tier: 'Ultra-Heavy', movement: 580, qbDistance: 150, qbCost: 180, enLoad: 340, weight: 2200, special: 'Max thrust' },
        { id: 'BST-G2/P04', name: 'BST-G2/P04', tier: 'Mid Balanced', movement: 540, qbDistance: 185, qbCost: 85, enLoad: 205, weight: 1480, special: 'All-rounder' },
        { id: 'BST-G2/P06SPD', name: 'BST-G2/P06SPD', tier: 'Speed Kiter', movement: 680, qbDistance: 125, qbCost: 140, enLoad: 225, weight: 1620, special: 'FASTEST' },
        { id: 'ALULA/21E', name: 'ALULA/21E', tier: 'Lightweight', movement: 650, qbDistance: 210, qbCost: 75, enLoad: 170, weight: 1120, special: 'Best QB' },
        { id: 'FLUEGEL/21Z', name: 'FLUEGEL/21Z', tier: 'High-End', movement: 620, qbDistance: 195, qbCost: 80, enLoad: 215, weight: 1550, special: 'Premium' },
        { id: 'IA-C01B:GILLS', name: 'IA-C01B: GILLS', tier: 'Coral', movement: 600, qbDistance: 200, qbCost: 70, enLoad: 185, weight: 1380, special: 'Best efficiency' },
        { id: 'IB-C03B:NGI001', name: 'IB-C03B: NGI 001', tier: 'Coral Elite', movement: 640, qbDistance: 215, qbCost: 65, enLoad: 195, weight: 1450, special: 'Endgame' }
    ],

    legs: {
        bipedal: [
            { id: '2C-2000CRAWLER', name: '2C-2000 CRAWLER', hp: 2800, ac: 1, proneRes: 2, loadLimit: 52000, weight: 19500, enLoad: 280, moveSpeed: 400, special: 'Lightweight Bipedal, Starter' },
            { id: 'AL-J-121BASHO', name: 'AL-J-121 BASHO', hp: 3000, ac: 1, proneRes: 2, loadLimit: 62600, weight: 20500, enLoad: 300, moveSpeed: 420, special: 'Midweight Bipedal, Balanced' },
            { id: 'LG-011MELANDER', name: 'LG-011 MELANDER', hp: 3200, ac: 2, proneRes: 3, loadLimit: 67500, weight: 22400, enLoad: 340, moveSpeed: 410, special: 'Midweight Bipedal, Popular Workhorse' },
            { id: 'LG-012MELANDERC3', name: 'LG-012 MELANDER C3', hp: 3100, ac: 1, proneRes: 3, loadLimit: 65800, weight: 21800, enLoad: 320, moveSpeed: 430, special: 'Midweight Bipedal, Melander Variant' },
            { id: 'DF-LG-08TIAN-QIANG', name: 'DF-LG-08 TIAN-QIANG', hp: 3800, ac: 3, proneRes: 5, loadLimit: 82600, weight: 23600, enLoad: 400, moveSpeed: 380, special: 'Heavyweight Bipedal, Tank Destroyer' },
            { id: 'VP-422', name: 'VP-422', hp: 3300, ac: 2, proneRes: 3, loadLimit: 69200, weight: 23100, enLoad: 360, moveSpeed: 400, special: 'Midweight Bipedal, Arquebus Standard' },
            { id: 'NACHTREIHER/42E', name: 'NACHTREIHER/42E', hp: 2900, ac: 0, proneRes: 1, loadLimit: 58400, weight: 18900, enLoad: 270, moveSpeed: 480, special: 'Lightweight Bipedal, Speed Demon' },
            { id: 'VE-42A', name: 'VE-42A', hp: 3900, ac: 3, proneRes: 5, loadLimit: 79500, weight: 25300, enLoad: 420, moveSpeed: 370, special: 'Heavyweight Bipedal, Maximum Defense' },
            { id: '06-041MINDALPHA', name: '06-041 MIND ALPHA', hp: 3400, ac: 2, proneRes: 4, loadLimit: 71200, weight: 23800, enLoad: 380, moveSpeed: 410, special: 'Midweight Bipedal, ALLMIND Design' },
            { id: 'IB-C03L:HAL826', name: 'IB-C03L: HAL 826', hp: 3600, ac: 2, proneRes: 4, loadLimit: 74800, weight: 24200, enLoad: 400, moveSpeed: 430, special: 'Heavyweight Bipedal, Coral/NG++ Reward' },
            { id: 'IA-C01L:EPHEMERA', name: 'IA-C01L: EPHEMERA', hp: 3100, ac: 1, proneRes: 3, loadLimit: 66500, weight: 21200, enLoad: 330, moveSpeed: 440, special: 'Midweight Bipedal, Coral Specialist' }
        ],
        reverseJoint: [
            { id: 'EL-PL-00ALBA', name: 'EL-PL-00 ALBA', hp: 2500, ac: 0, proneRes: 1, loadLimit: 55800, weight: 19200, enLoad: 290, moveSpeed: 520, special: 'Lightweight Reverse Joint, High Jump' },
            { id: 'KASUAR/42Z', name: 'KASUAR/42Z', hp: 2400, ac: 0, proneRes: 0, loadLimit: 54600, weight: 18400, enLoad: 270, moveSpeed: 540, special: 'Lightweight Reverse Joint, Speed King' },
            { id: 'RC-2000SPRINGCHICKEN', name: 'RC-2000 SPRING CHICKEN', hp: 2900, ac: 1, proneRes: 2, loadLimit: 68400, weight: 25900, enLoad: 400, moveSpeed: 480, special: 'Midweight Reverse Joint, Best Balance' },
            { id: '06-042MINDBETA', name: '06-042 MIND BETA', hp: 3200, ac: 1, proneRes: 3, loadLimit: 72100, weight: 27600, enLoad: 440, moveSpeed: 450, special: 'Heavyweight Reverse Joint, ALLMIND' }
        ],
        tetrapod: [
            { id: 'VP-424', name: 'VP-424', hp: 3700, ac: 2, proneRes: 4, loadLimit: 69800, weight: 31600, enLoad: 760, moveSpeed: 380, special: 'Lightweight Tetrapod, Hover, Recoil Absorption' },
            { id: 'LG-033MVERRILL', name: 'LG-033M VERRILL', hp: 4200, ac: 3, proneRes: 5, loadLimit: 76200, weight: 36200, enLoad: 680, moveSpeed: 360, special: 'Heavyweight Tetrapod, Hover, Maximum Load' },
            { id: 'LAMMERGEIER/42F', name: 'LAMMERGEIER/42F', hp: 3900, ac: 2, proneRes: 4, loadLimit: 72500, weight: 33100, enLoad: 720, moveSpeed: 370, special: 'Midweight Tetrapod, Hover, Schneider/DLC' }
        ],
        tank: [
            { id: '2C-3000WRECKER', name: '2C-3000 WRECKER', hp: 4800, ac: 2, proneRes: 5, loadLimit: 78900, weight: 35200, enLoad: 620, moveSpeed: 420, special: 'Midweight Tank, Fire While Moving, Ram' },
            { id: '2S-5000DESSERT', name: '2S-5000 DESSERT', hp: 5200, ac: 3, proneRes: 6, loadLimit: 84600, weight: 41800, enLoad: 710, moveSpeed: 400, special: 'Heavyweight Tank, Fire While Moving, Ram' },
            { id: 'EL-TL-10FIRMEZA', name: 'EL-TL-10 FIRMEZA', hp: 5000, ac: 2, proneRes: 5, loadLimit: 81200, weight: 37900, enLoad: 650, moveSpeed: 410, special: 'Midweight Tank, Fire While Moving, Ram' },
            { id: 'LG-022TBORNEMISSZA', name: 'LG-022T BORNEMISSZA', hp: 6200, ac: 3, proneRes: 6, loadLimit: 87000, weight: 49500, enLoad: 840, moveSpeed: 380, special: 'Super Heavy Tank, Fire While Moving, Ram, ABSOLUTE UNIT' },
            { id: 'VE-42B', name: 'VE-42B', hp: 5800, ac: 3, proneRes: 6, loadLimit: 91000, weight: 46600, enLoad: 820, moveSpeed: 390, special: 'Heavy Tank, Hover Capability!, Fire While Moving' },
            { id: 'EL-TL-11FORTALEZA', name: 'EL-TL-11 FORTALEZA', hp: 5100, ac: 2, proneRes: 5, loadLimit: 69300, weight: 24700, enLoad: 620, moveSpeed: 460, special: 'Lightweight Tank, Fast, Fire While Moving, Ram' }
        ]
    },

    cores: [
        { id: 'CC-2000ORBITER', name: 'CC-2000 ORBITER', hp: 1800, ac: 3, proneRes: 2, assaultBoost: 1600, flightSpeed: 1200, expSlots: 1, weight: 16200, enLoad: 210, special: 'Lightweight Starter, RaD' },
        { id: 'BD-011MELANDER', name: 'BD-011 MELANDER', hp: 2400, ac: 4, proneRes: 3, assaultBoost: 1500, flightSpeed: 1100, expSlots: 2, weight: 20800, enLoad: 280, special: 'Midweight Workhorse, Balam' },
        { id: 'BD-012MELANDERC3', name: 'BD-012 MELANDER C3', hp: 2500, ac: 4, proneRes: 3, assaultBoost: 1550, flightSpeed: 1150, expSlots: 2, weight: 21600, enLoad: 290, special: 'Midweight Melander+, Balam' },
        { id: 'DF-BD-08TIAN-QIANG', name: 'DF-BD-08 TIAN-QIANG', hp: 3200, ac: 6, proneRes: 5, assaultBoost: 1200, flightSpeed: 850, expSlots: 2, weight: 24100, enLoad: 380, special: 'Heavyweight Tank, +30% Armor, Dafeng' },
        { id: 'VP-40S', name: 'VP-40S', hp: 2300, ac: 4, proneRes: 3, assaultBoost: 1450, flightSpeed: 1250, expSlots: 2, weight: 19400, enLoad: 270, special: 'Midweight Tetrapod Core, Arquebus' },
        { id: 'NACHTREIHER/40E', name: 'NACHTREIHER/40E', hp: 2100, ac: 3, proneRes: 2, assaultBoost: 2000, flightSpeed: 1500, expSlots: 1, weight: 17800, enLoad: 240, special: 'Lightweight Speed King, Schneider' },
        { id: 'VE-40A', name: 'VE-40A', hp: 3600, ac: 5, proneRes: 5, assaultBoost: 1300, flightSpeed: 900, expSlots: 2, weight: 23800, enLoad: 360, special: 'Heavyweight Defense Monster, Arquebus' },
        { id: 'CC-3000WRECKER', name: 'CC-3000 WRECKER', hp: 2200, ac: 4, proneRes: 3, assaultBoost: 1650, flightSpeed: 1150, expSlots: 1, weight: 18900, enLoad: 260, special: 'Midweight Efficient, RaD, Hidden' },
        { id: 'AC-J-120BASHO', name: 'AC-J-120 BASHO', hp: 2600, ac: 4, proneRes: 3, assaultBoost: 1550, flightSpeed: 1200, expSlots: 2, weight: 21200, enLoad: 310, special: 'Midweight Balanced, BAWS' },
        { id: 'AC-J-120/RCJAILBREAK', name: 'AC-J-120/RC JAILBREAK', hp: 2700, ac: 5, proneRes: 4, assaultBoost: 1500, flightSpeed: 1150, expSlots: 2, weight: 22400, enLoad: 330, special: 'Heavyweight BASHO+, BAWS' },
        { id: 'EL-TC-10FIRMEZA', name: 'EL-TC-10 FIRMEZA', hp: 3100, ac: 5, proneRes: 5, assaultBoost: 1350, flightSpeed: 950, expSlots: 2, weight: 23200, enLoad: 350, special: 'Heavyweight Tank Support, Elcano' },
        { id: 'EL-PC-00ALBA', name: 'EL-PC-00 ALBA', hp: 2000, ac: 3, proneRes: 2, assaultBoost: 1900, flightSpeed: 1500, expSlots: 1, weight: 16800, enLoad: 230, special: 'Lightweight Aerial Ace, Elcano' },
        { id: '07-061MINDALPHA', name: '07-061 MIND ALPHA', hp: 2800, ac: 5, proneRes: 4, assaultBoost: 1650, flightSpeed: 1300, expSlots: 2, weight: 22600, enLoad: 320, special: 'Heavyweight AI Design, ALLMIND' },
        { id: 'CS-5000MAINDISH', name: 'CS-5000 MAIN DISH', hp: 2900, ac: 5, proneRes: 4, assaultBoost: 1550, flightSpeed: 1250, expSlots: 2, weight: 23400, enLoad: 340, special: 'Heavyweight NG+, RaD' },
        { id: 'IA-C01C:EPHEMERA', name: 'IA-C01C: EPHEMERA', hp: 2200, ac: 4, proneRes: 3, assaultBoost: 1700, flightSpeed: 1250, expSlots: 2, weight: 19100, enLoad: 280, special: 'Midweight Coral, +15% EWpn, Hidden' },
        { id: 'IB-C03C:HAL826', name: 'IB-C03C: HAL 826', hp: 2800, ac: 5, proneRes: 4, assaultBoost: 1700, flightSpeed: 1300, expSlots: 2, weight: 22100, enLoad: 310, special: 'Heavyweight Coral Elite, +15% All, NG++' }
    ],

    arms: [
        { id: 'AC-2000TOOLARM', name: 'AC-2000 TOOL ARM', hp: 600, ac: 1, fireSpec: 2, meleeSpec: 1, recoilCtrl: 0, weight: 1600, enLoad: 90, special: 'Lightweight Starter, RaD' },
        { id: 'AR-011MELANDER', name: 'AR-011 MELANDER', hp: 750, ac: 2, fireSpec: 2, meleeSpec: 2, recoilCtrl: 1, weight: 2050, enLoad: 120, special: 'Midweight Balanced, Balam' },
        { id: 'AR-012MELANDERC3', name: 'AR-012 MELANDER C3', hp: 800, ac: 2, fireSpec: 3, meleeSpec: 2, recoilCtrl: 1, weight: 2150, enLoad: 130, special: 'Midweight Melander+, Balam' },
        { id: 'DF-AR-08TIAN-QIANG', name: 'DF-AR-08 TIAN-QIANG', hp: 1100, ac: 3, fireSpec: 2, meleeSpec: 3, recoilCtrl: 3, weight: 2950, enLoad: 180, special: 'Heavyweight Powerhouse, Dafeng' },
        { id: 'DF-AR-09TIAN-LAO', name: 'DF-AR-09 TIAN-LAO', hp: 1200, ac: 3, fireSpec: 2, meleeSpec: 4, recoilCtrl: 3, weight: 3100, enLoad: 190, special: 'Heavyweight Melee Monster, Dafeng' },
        { id: 'NACHTREIHER/46E', name: 'NACHTREIHER/46E', hp: 650, ac: 1, fireSpec: 3, meleeSpec: 1, recoilCtrl: 0, weight: 1800, enLoad: 100, special: 'Lightweight Speed, Schneider' },
        { id: 'VP-46S', name: 'VP-46S', hp: 720, ac: 2, fireSpec: 4, meleeSpec: 0, recoilCtrl: 1, weight: 1950, enLoad: 110, special: 'Midweight Sniper, Arquebus' },
        { id: 'VP-46D', name: 'VP-46D', hp: 850, ac: 2, fireSpec: 3, meleeSpec: 1, recoilCtrl: 2, weight: 2250, enLoad: 140, special: 'Midweight Versatile, Arquebus' },
        { id: 'VE-46A', name: 'VE-46A', hp: 1050, ac: 3, fireSpec: 3, meleeSpec: 2, recoilCtrl: 2, weight: 2700, enLoad: 170, special: 'Heavyweight Precision, Arquebus' },
        { id: '04-101MINDALPHA', name: '04-101 MIND ALPHA', hp: 900, ac: 2, fireSpec: 3, meleeSpec: 2, recoilCtrl: 2, weight: 2400, enLoad: 150, special: 'Midweight AI Balanced, ALLMIND' },
        { id: 'EL-TA-10FIRMEZA', name: 'EL-TA-10 FIRMEZA', hp: 1000, ac: 3, fireSpec: 2, meleeSpec: 2, recoilCtrl: 3, weight: 2800, enLoad: 180, special: 'Heavyweight Tank Support, Elcano' },
        { id: 'AA-J-123BASHO', name: 'AA-J-123 BASHO', hp: 820, ac: 2, fireSpec: 2, meleeSpec: 3, recoilCtrl: 1, weight: 2200, enLoad: 135, special: 'Midweight Versatile, BAWS' },
        { id: 'AA-J-123/RCJAILBREAK', name: 'AA-J-123/RC JAILBREAK', hp: 950, ac: 2, fireSpec: 3, meleeSpec: 3, recoilCtrl: 2, weight: 2550, enLoad: 160, special: 'Heavyweight BASHO+, BAWS' },
        { id: 'AC-3000WRECKER', name: 'AC-3000 WRECKER', hp: 880, ac: 2, fireSpec: 2, meleeSpec: 2, recoilCtrl: 2, weight: 2300, enLoad: 145, special: 'Midweight Efficient, RaD, Hidden' },
        { id: 'EL-PA-00ALBA', name: 'EL-PA-00 ALBA', hp: 700, ac: 1, fireSpec: 3, meleeSpec: 1, recoilCtrl: 1, weight: 1850, enLoad: 105, special: 'Lightweight Aerial, Elcano' },
        { id: 'AS-5000SALAD', name: 'AS-5000 SALAD', hp: 920, ac: 2, fireSpec: 2, meleeSpec: 3, recoilCtrl: 2, weight: 2450, enLoad: 155, special: 'Midweight NG+, RaD' },
        { id: 'IA-C01A:EPHEMERA', name: 'IA-C01A: EPHEMERA', hp: 780, ac: 2, fireSpec: 3, meleeSpec: 2, recoilCtrl: 1, weight: 2100, enLoad: 125, special: 'Midweight Coral, Hidden' },
        { id: 'IB-C03A:HAL826', name: 'IB-C03A: HAL 826', hp: 950, ac: 3, fireSpec: 4, meleeSpec: 3, recoilCtrl: 2, weight: 2600, enLoad: 165, special: 'Heavyweight Coral Elite, NG++' }
    ],

    heads: [
        { id: 'HC-2000FINDEREYE', name: 'HC-2000 FINDER EYE', hp: 400, ac: 1, scanRange: 1500, scanDuration: 6, sysRecovery: 1, weight: 1800, enLoad: 60, special: 'Lightweight Starter, RaD' },
        { id: 'HD-011MELANDER', name: 'HD-011 MELANDER', hp: 500, ac: 1, scanRange: 1600, scanDuration: 7, sysRecovery: 1, weight: 2100, enLoad: 70, special: 'Midweight Balanced, Balam' },
        { id: 'HD-012MELANDERC3', name: 'HD-012 MELANDER C3', hp: 550, ac: 2, scanRange: 1650, scanDuration: 7, sysRecovery: 2, weight: 2300, enLoad: 75, special: 'Midweight Melander+, Balam' },
        { id: 'DF-HD-08TIAN-QIANG', name: 'DF-HD-08 TIAN-QIANG', hp: 750, ac: 2, scanRange: 1200, scanDuration: 6, sysRecovery: 2, weight: 3200, enLoad: 95, special: 'Heavyweight Brawler, Dafeng' },
        { id: 'VP-44S', name: 'VP-44S', hp: 520, ac: 1, scanRange: 1900, scanDuration: 8, sysRecovery: 1, weight: 2400, enLoad: 80, special: 'Midweight Recon, Arquebus' },
        { id: 'VP-44D', name: 'VP-44D', hp: 620, ac: 2, scanRange: 2000, scanDuration: 8, sysRecovery: 2, weight: 2800, enLoad: 90, special: 'Midweight Advanced Recon, Arquebus' },
        { id: 'VE-44A', name: 'VE-44A', hp: 720, ac: 2, scanRange: 2100, scanDuration: 9, sysRecovery: 2, weight: 3100, enLoad: 100, special: 'Heavyweight Long-Range, Arquebus' },
        { id: 'VE-44B', name: 'VE-44B', hp: 780, ac: 2, scanRange: 2500, scanDuration: 8, sysRecovery: 3, weight: 3400, enLoad: 110, special: 'Elite Long-Range' },
        { id: 'NACHTREIHER/44E', name: 'NACHTREIHER/44E', hp: 420, ac: 1, scanRange: 1700, scanDuration: 7, sysRecovery: 1, weight: 1900, enLoad: 65, special: 'Lightweight Speed, Schneider' },
        { id: 'KASUAR/44Z', name: 'KASUAR/44Z', hp: 480, ac: 1, scanRange: 1800, scanDuration: 8, sysRecovery: 2, weight: 2200, enLoad: 75, special: 'Lightweight Recon, Schneider' },
        { id: 'HC-3000WRECKER', name: 'HC-3000 WRECKER', hp: 550, ac: 1, scanRange: 1550, scanDuration: 6, sysRecovery: 1, weight: 2400, enLoad: 80, special: 'Midweight Efficient, RaD, Hidden' },
        { id: 'AH-J-124BASHO', name: 'AH-J-124 BASHO', hp: 570, ac: 1, scanRange: 1650, scanDuration: 7, sysRecovery: 2, weight: 2500, enLoad: 85, special: 'Midweight Balanced, BAWS' },
        { id: 'AH-J-124/RCJAILBREAK', name: 'AH-J-124/RC JAILBREAK', hp: 680, ac: 2, scanRange: 1800, scanDuration: 8, sysRecovery: 2, weight: 2900, enLoad: 95, special: 'Heavyweight BASHO+, BAWS' },
        { id: 'HD-033MVERRILL', name: 'HD-033M VERRILL', hp: 650, ac: 2, scanRange: 1900, scanDuration: 9, sysRecovery: 2, weight: 2700, enLoad: 90, special: 'Midweight Heavy Recon, Balam' },
        { id: 'EL-TH-10FIRMEZA', name: 'EL-TH-10 FIRMEZA', hp: 700, ac: 2, scanRange: 1400, scanDuration: 6, sysRecovery: 2, weight: 3000, enLoad: 100, special: 'Heavyweight Tank Support, Elcano' },
        { id: 'EL-PH-00ALBA', name: 'EL-PH-00 ALBA', hp: 450, ac: 1, scanRange: 2000, scanDuration: 10, sysRecovery: 2, weight: 2100, enLoad: 70, special: 'Lightweight Aerial Recon, Elcano' },
        { id: '20-081MINDALPHA', name: '20-081 MIND ALPHA', hp: 600, ac: 2, scanRange: 1850, scanDuration: 8, sysRecovery: 2, weight: 2600, enLoad: 85, special: 'Midweight AI Recon, ALLMIND' },
        { id: '20-082MINDBETA', name: '20-082 MIND BETA', hp: 720, ac: 2, scanRange: 2100, scanDuration: 9, sysRecovery: 3, weight: 3000, enLoad: 95, special: 'Heavyweight AI Elite, ALLMIND' },
        { id: 'HS-5000APPETIZER', name: 'HS-5000 APPETIZER', hp: 650, ac: 2, scanRange: 1750, scanDuration: 7, sysRecovery: 2, weight: 2700, enLoad: 90, special: 'Midweight NG+, RaD' },
        { id: 'HC-2000/BCSHADEEYE', name: 'HC-2000/BC SHADE EYE', hp: 520, ac: 1, scanRange: 1900, scanDuration: 9, sysRecovery: 2, weight: 2300, enLoad: 75, special: 'Midweight Stealth Recon, RaD/NG+' },
        { id: 'IA-C01H:EPHEMERA', name: 'IA-C01H: EPHEMERA', hp: 600, ac: 2, scanRange: 2200, scanDuration: 12, sysRecovery: 3, weight: 2500, enLoad: 80, special: 'Midweight Coral, Hidden' },
        { id: 'IB-C03H:HAL826', name: 'IB-C03H: HAL 826', hp: 750, ac: 2, scanRange: 2400, scanDuration: 10, sysRecovery: 3, weight: 2900, enLoad: 95, special: 'Heavyweight Coral Elite, NG++' }
    ],

    expansions: [
        { id: 'ASSAULTARMOR', name: 'ASSAULT ARMOR', action: 'Bonus Action', effect: 'Pulse explosion: 250 dmg + stagger to all enemies within 200 ft. Cancels all incoming projectiles in blast.', duration: '1 round (instant)', charges: 3, special: 'Best offensive expansion.' },
        { id: 'PULSEARMOR', name: 'PULSE ARMOR', action: 'Bonus Action', effect: 'Mobile shield follows you. Absorbs 2000 damage.', duration: '10 rounds', charges: 3, special: 'Best for aggressive builds.' },
        { id: 'PULSEPROTECTION', name: 'PULSE PROTECTION', action: 'Bonus Action', effect: 'Stationary shield at target location. Absorbs 2400 damage. You can shoot out, enemies cannot shoot in.', duration: '25 rounds', charges: 3, special: 'Must stay in bubble.' },
        { id: 'TERMINALARMOR', name: 'TERMINAL ARMOR', action: 'Auto (Reaction)', effect: 'When reduced to 0 HP, survive at 1 HP. Deploy 12,000 damage shield for 2 rounds.', duration: '2 rounds', charges: 1, special: 'Last stand ability.' }
    ],

    weapons: {
        handguns: [
            { id: 'HG-003COQUILLETT', name: 'HG-003 COQUILLETT', damage: 45, range: 500, ammo: 120, fireRate: 'Standard', type: 'Kinetic', weight: 1800, enLoad: 50, special: 'Lightweight starter, high ammo, Balam', category: 'Handgun' },
            { id: 'HG-004DUCKETT', name: 'HG-004 DUCKETT', damage: 58, range: 550, ammo: 100, fireRate: 'Standard', type: 'Kinetic', weight: 2100, enLoad: 60, special: 'Balanced handgun, reliable, Balam', category: 'Handgun' },
            { id: 'MA-E-211SAMPU', name: 'MA-E-211 SAMPU', damage: 52, range: 480, ammo: 90, fireRate: '3-Round Burst', type: 'Kinetic', weight: 2400, enLoad: 70, special: 'Burst fire (3 shots), moderate stagger, BAWS', category: 'Handgun' },
            { id: 'VP-66LH', name: 'VP-66LH', damage: 62, range: 600, ammo: 0, fireRate: 'Charged Burst', type: 'Energy (Laser)', weight: 2200, enLoad: 95, enCost: 180, special: 'Charge: 6-shot laser burst (total 372 dmg), 180 EN/burst, Arquebus', category: 'Handgun' },
            { id: 'HI-16:GU-Q1', name: 'HI-16: GU-Q1', damage: 48, range: 450, ammo: 0, fireRate: 'Standard', type: 'Energy (Pulse)', weight: 1900, enLoad: 85, enCost: 65, special: 'Pulse rounds, breaks shields fast, 65 EN/shot, Takigawa', category: 'Handgun' },
            { id: 'HI-18:GU-A2', name: 'HI-18: GU-A2', damage: 56, range: 500, ammo: 0, fireRate: 'Standard', type: 'Energy (Pulse)', weight: 2100, enLoad: 90, enCost: 75, special: 'Upgraded pulse gun, better damage, 75 EN/shot, Takigawa', category: 'Handgun' }
        ],
        rifles: [
            { id: 'RF-024TURNER', name: 'RF-024 TURNER', damage: 72, range: 800, ammo: 80, fireRate: 'Standard', type: 'Kinetic', weight: 2800, enLoad: 80, special: 'Starter assault rifle, reliable, cheap', category: 'Rifle' },
            { id: 'RF-025SCUDDER', name: 'RF-025 SCUDDER', damage: 85, range: 850, ammo: 70, fireRate: 'Standard', type: 'Kinetic', weight: 3200, enLoad: 95, special: 'Upgraded assault rifle, higher damage', category: 'Rifle' },
            { id: 'MA-J-200RANSETSU-RF', name: 'MA-J-200 RANSETSU-RF', damage: 78, range: 750, ammo: 60, fireRate: '3-Round Burst', type: 'Kinetic', weight: 3400, enLoad: 100, special: 'Burst rifle, 3 shots (234 total), BAWS', category: 'Rifle' },
            { id: 'MA-J-201RANSETSU-AR', name: 'MA-J-201 RANSETSU-AR', damage: 82, range: 800, ammo: 65, fireRate: '3-Round Burst', type: 'Kinetic', weight: 3600, enLoad: 110, special: 'Burst assault, 3 shots (246 total), BAWS', category: 'Rifle' },
            { id: 'LR-036CURTIS', name: 'LR-036 CURTIS', damage: 145, range: 1200, ammo: 24, fireRate: 'Charged Shot', type: 'Kinetic (Railgun)', weight: 4200, enLoad: 140, special: 'Charge: 290 dmg railgun shot, massive stagger', category: 'Rifle' },
            { id: 'LR-037HARRIS', name: 'LR-037 HARRIS', damage: 158, range: 1300, ammo: 20, fireRate: 'Charged Shot', type: 'Kinetic (Railgun)', weight: 4600, enLoad: 150, special: 'Elite railgun, charge: 316 dmg', category: 'Rifle' },
            { id: 'VP-66LR', name: 'VP-66LR', damage: 92, range: 1000, ammo: 0, fireRate: 'Charged Shot', type: 'Energy (Laser)', weight: 3800, enLoad: 190, enCost: 240, special: 'Charge: 184 dmg laser beam, 240 EN/shot, Arquebus', category: 'Rifle' },
            { id: 'VE-66LRA', name: 'VE-66LRA', damage: 102, range: 1100, ammo: 0, fireRate: 'Charged Shot', type: 'Energy (Laser)', weight: 4100, enLoad: 205, enCost: 280, special: 'Heavy laser, charge: 204 dmg, 280 EN/shot', category: 'Rifle' },
            { id: 'VE-66LRB', name: 'VE-66LRB', damage: 108, range: 1150, ammo: 0, fireRate: 'Charged Shot', type: 'Energy (Laser)', weight: 4400, enLoad: 220, enCost: 300, special: 'Elite laser, charge: 216 dmg, 300 EN/shot', category: 'Rifle' },
            { id: 'Vvc-760PR', name: 'Vvc-760PR', damage: 98, range: 900, ammo: 0, fireRate: 'Charged (AoE)', type: 'Energy (Plasma)', weight: 4000, enLoad: 210, enCost: 260, special: 'Plasma explosions, charge: AoE blast, 260 EN/shot, VCPL', category: 'Rifle' },
            { id: 'IA-C01W1NEBULA', name: 'IA-C01W1: NEBULA', damage: 105, range: 950, ammo: 0, fireRate: 'Charged (AoE)', type: 'Energy (Plasma/Coral)', weight: 4200, enLoad: 225, enCost: 280, special: 'Coral plasma, charge: multi-explosion, 280 EN/shot, Hidden', category: 'Rifle' },
            { id: '44-142KRSV', name: '44-142 KRSV', damage: 88, range: 950, ammo: 0, fireRate: 'Dual Mode', type: 'Energy (Laser+Plasma)', weight: 4500, enLoad: 240, enCost: 240, special: 'Plasma shot OR charge laser, full charge: both (320 total), ALLMIND', category: 'Rifle' },
            { id: 'IA-C01W6NB-REDSHIFT', name: 'IA-C01W6: NB-REDSHIFT', damage: 118, range: 1100, ammo: 0, fireRate: 'Chain Explosion', type: 'Energy (Coral)', weight: 4800, enLoad: 280, enCost: 280, special: 'Plasma shot → chain explosions (236 total), NG++', category: 'Rifle' },
            { id: 'IB-C03W1WLT011', name: 'IB-C03W1: WLT 011', damage: 125, range: 1200, ammo: 0, fireRate: 'Sweep Beam', type: 'Energy (Coral)', weight: 5200, enLoad: 300, enCost: 300, special: 'Charge: massive Coral beam sweep (375 dmg), NG++', category: 'Rifle' }
        ],
        shotguns: [
            { id: 'SG-026HALDEMAN', name: 'SG-026 HALDEMAN', damage: 140, range: 250, ammo: 66, fireRate: 'Standard', type: 'Kinetic', weight: 3660, enLoad: 185, special: 'Wide spread, Balam', category: 'Shotgun' },
            { id: 'SG-027ZIMMERMAN', name: 'SG-027 ZIMMERMAN', damage: 165, range: 350, ammo: 53, fireRate: 'Standard', type: 'Kinetic', weight: 4400, enLoad: 242, special: 'Tight spread, long range, Balam', category: 'Shotgun' },
            { id: 'WR-0777SWEETSIXTEEN', name: 'WR-0777 SWEET SIXTEEN', damage: 230, range: 200, ammo: 42, fireRate: 'Volley', type: 'Kinetic', weight: 1640, enLoad: 268, special: 'All barrels fire, RaD', category: 'Shotgun' },
            { id: 'VP-66LS', name: 'VP-66LS', damage: 150, range: 400, ammo: 0, fireRate: 'Charged', type: 'Laser', weight: 2870, enLoad: 320, enCost: 300, special: 'Charge: 300 dmg + 30 ft AoE, Arquebus', category: 'Shotgun' },
            { id: 'WUERGER/66E', name: 'WUERGER/66E', damage: 160, range: 450, ammo: 0, fireRate: 'Charged', type: 'Laser', weight: 3030, enLoad: 340, enCost: 320, special: 'Charge: 320 dmg + 30 ft AoE, best range, Arquebus', category: 'Shotgun' }
        ],
        machineGuns: [
            { id: 'MG-014LUDLOW', name: 'MG-014 LUDLOW', damage: 85, range: 450, ammo: 720, fireRate: 'Full Auto', type: 'Kinetic', weight: 2450, enLoad: 82, special: 'Rapid fire, starter, Balam', category: 'Machine Gun' },
            { id: 'DF-MG-02CHANG-CHEN', name: 'DF-MG-02 CHANG-CHEN', damage: 95, range: 500, ammo: 990, fireRate: 'Full Auto', type: 'Kinetic', weight: 2680, enLoad: 95, special: 'Best ammo capacity, Dafeng', category: 'Machine Gun' },
            { id: 'MA-E-210ETSUJIN', name: 'MA-E-210 ETSUJIN', damage: 90, range: 480, ammo: 600, fireRate: 'Burst', type: 'Kinetic', weight: 2920, enLoad: 110, special: '3-round bursts (270 total), Dafeng', category: 'Machine Gun' },
            { id: 'DF-GA-08HU-BEN', name: 'DF-GA-08 HU-BEN', damage: 78, range: 420, ammo: 1200, fireRate: 'Gatling', type: 'Kinetic', weight: 4110, enLoad: 155, special: 'Max fire rate, suppression, Dafeng', category: 'Machine Gun' }
        ],
        bazookas: [
            { id: 'DF-BA-06XUAN-GE', name: 'DF-BA-06 XUAN-GE', damage: 425, range: 800, ammo: 15, fireRate: 'Single Shot', type: 'Explosive', weight: 5120, enLoad: 268, aoe: 50, special: 'Starter bazooka, most ammo, Dafeng', category: 'Bazooka' },
            { id: 'MAJESTIC', name: 'MAJESTIC', damage: 485, range: 900, ammo: 12, fireRate: 'Single Shot', type: 'Explosive', weight: 5480, enLoad: 295, aoe: 50, special: 'Mid-tier power, Arquebus', category: 'Bazooka' },
            { id: 'LITTLEGEM', name: 'LITTLE GEM', damage: 465, range: 850, ammo: 10, fireRate: 'Single Shot', type: 'Explosive', weight: 4690, enLoad: 310, aoe: 50, special: 'Lightest bazooka, Arquebus', category: 'Bazooka' },
            { id: '44-141JVLNALPHA', name: '44-141 JVLN ALPHA', damage: 520, range: 750, ammo: 8, fireRate: 'Single Shot', type: 'Explosive', weight: 5310, enLoad: 293, aoe: 50, special: 'Detonating bazooka, chain explosions (780 total), ALLMIND', category: 'Bazooka' }
        ],
        grenadeLaunchers: [
            { id: 'DF-GR-07GOU-CHEN', name: 'DF-GR-07 GOU-CHEN', damage: 340, range: 600, ammo: 40, fireRate: 'Single Shot', type: 'Explosive', weight: 4800, enLoad: 340, aoe: 40, special: 'Starter, most ammo, arc trajectory, Dafeng', category: 'Grenade Launcher' },
            { id: 'DIZZY', name: 'DIZZY', damage: 370, range: 550, ammo: 28, fireRate: 'Single Shot', type: 'Explosive', weight: 5600, enLoad: 380, aoe: 55, special: 'Largest blast radius, heavy, arc trajectory, Melinite', category: 'Grenade Launcher' },
            { id: 'IRIDIUM', name: 'IRIDIUM', damage: 350, range: 580, ammo: 24, fireRate: 'Single Shot', type: 'Explosive', weight: 3400, enLoad: 285, aoe: 40, special: 'Lightest grenade launcher, speed builds, Melinite', category: 'Grenade Launcher' },
            { id: 'MA-T-222KYORAI', name: 'MA-T-222 KYORAI', damage: 280, range: 550, ammo: 36, fireRate: 'Single Shot', type: 'Fire', weight: 4200, enLoad: 310, aoe: 35, special: 'Napalm bomber, leaves fire DOT, arc trajectory, BAWS', category: 'Grenade Launcher' },
            { id: 'MA-T-223KYORIKU', name: 'MA-T-223 KYORIKU', damage: 30, range: 520, ammo: 45, fireRate: 'Single Shot', type: 'Special', weight: 3800, enLoad: 295, aoe: 40, special: 'Jamming bomber, disrupts targeting, smoke cloud, BAWS', category: 'Grenade Launcher' },
            { id: 'WS-1200THERAPIST', name: 'WS-1200 THERAPIST', damage: 200, range: 540, ammo: 32, fireRate: 'Single Shot', type: 'Special', weight: 4400, enLoad: 320, aoe: 40, special: 'Stun bomber, disables enemies, arc trajectory, Schneider', category: 'Grenade Launcher' }
        ],
        missileLaunchers: [
            { id: 'HML-G2/P19MLT-04', name: 'HML-G2/P19 MLT-04', damage: 140, range: 800, ammo: 48, fireRate: '4-lock', type: 'Explosive', weight: 4200, enLoad: 380, special: 'Standard multi-lock, balanced, Furlong', category: 'Missile Launcher' },
            { id: 'PFAU/66D', name: 'PFAU/66D', damage: 130, range: 850, ammo: 54, fireRate: '6-lock', type: 'Energy', weight: 3800, enLoad: 420, aoe: 20, special: 'Plasma missiles, AoE splash, lightweight, Schneider', category: 'Missile Launcher' },
            { id: 'WS-5000APERITIF', name: 'WS-5000 APERITIF', damage: 180, range: 750, ammo: 36, fireRate: '4-lock', type: 'Explosive', weight: 5400, enLoad: 395, special: 'Siege missiles, high damage, slower tracking, RaD', category: 'Missile Launcher' },
            { id: 'HML-G3/P08SPL-06', name: 'HML-G3/P08 SPL-06', damage: 120, range: 820, ammo: 42, fireRate: '6-lock', type: 'Explosive', weight: 4600, enLoad: 405, special: 'Split missiles, each splits into 2 submunitions (240 total), Furlong', category: 'Missile Launcher' }
        ],
        melee: [
            { id: 'PB-033MASHMEAD', name: 'PB-033M ASHMEAD', damage: 850, range: 'Melee', ammo: 0, fireRate: 'Charge', type: 'Kinetic', weight: 3900, enLoad: 135, special: 'Pile bunker, highest single-hit damage, Balam', category: 'Melee' },
            { id: 'WB-0010DOUBLETROUBLE', name: 'WB-0010 DOUBLE TROUBLE', damage: 110, range: 'Melee', ammo: 0, fireRate: 'Sustained', type: 'Kinetic', weight: 5200, enLoad: 240, chargedDamage: 660, special: 'Chainsaw, sustained DPS vs staggered, RaD', category: 'Melee' },
            { id: 'VP-67EB', name: 'VP-67EB', damage: 380, range: 'Melee', ammo: 0, fireRate: 'Quick', type: 'Energy', weight: 2800, enLoad: 180, special: 'Stun baton, electric discharge, Arquebus', category: 'Melee' },
            { id: 'VP-67LD', name: 'VP-67LD', damage: 420, range: 'Melee', ammo: 0, fireRate: 'Fast', type: 'Energy', weight: 2400, enLoad: 160, special: 'Laser dagger, lightest melee, quick strikes, Arquebus', category: 'Melee' },
            { id: 'Vvc-770LB', name: 'Vvc-770LB', damage: 560, range: 'Melee', ammo: 0, fireRate: 'Combo', type: 'Energy', weight: 3600, enLoad: 220, chargedDamage: 750, special: 'Laser blade, standard sword, combo attacks, VCPL', category: 'Melee' },
            { id: 'Vvc-774LS', name: 'Vvc-774LS', damage: 480, range: 'Melee', ammo: 0, fireRate: 'Rapid', type: 'Energy', weight: 3200, enLoad: 195, special: 'Laser slicer, fast attacks, rapid strikes, VCPL', category: 'Melee' },
            { id: 'VE-67LLA', name: 'VE-67LLA', damage: 680, range: '20 ft', ammo: 0, fireRate: 'Charge', type: 'Energy', weight: 4100, enLoad: 250, special: 'Laser lance, charging thrust, reach, Arquebus', category: 'Melee' },
            { id: 'HI-32:BU-TT/A', name: 'HI-32: BU-TT/A', damage: 520, range: 'Melee', ammo: 0, fireRate: 'Standard', type: 'Energy', weight: 3100, enLoad: 205, chargedDamage: 640, special: 'Pulse blade, starter melee, reliable, Takigawa', category: 'Melee' },
            { id: 'IA-C01W2:MOONLIGHT', name: 'IA-C01W2: MOONLIGHT', damage: 620, range: '30 ft wave', ammo: 0, fireRate: 'Wave', type: 'Energy', weight: 4500, enLoad: 280, chargedDamage: 820, special: 'Iconic laser sword, ranged wave, Rubicon Research', category: 'Melee' }
        ],
        specialWeapons: [
            { id: 'WB-0000BADCOOK', name: 'WB-0000 BAD COOK', damage: 90, range: '60 ft cone', ammo: 180, fireRate: 'Stream', type: 'Fire', weight: 2600, enLoad: 155, special: 'Flamethrower, cone AOE, DOT vs staggered, BAWS', category: 'Special' },
            { id: 'DF-ET-09TAI-YANG-SHIO', name: 'DF-ET-09 TAI-YANG-SHIO', damage: 280, range: 150, ammo: 60, fireRate: 'Auto', type: 'Explosive', weight: 3400, enLoad: 220, aoe: 25, special: 'Explosive thrower, close range spray, Dafeng', category: 'Special' },
            { id: '44-143HMMR', name: '44-143 HMMR', damage: 240, range: 120, ammo: 0, fireRate: 'EN', type: 'Energy', weight: 3200, enLoad: 340, enCost: 340, aoe: 30, special: 'Plasma thrower, AoE blasts, EN powered, ALLMIND', category: 'Special' },
            { id: 'EL-PW-00VIENTO', name: 'EL-PW-00 VIENTO', damage: 105, range: 350, ammo: 90, fireRate: 'Full Auto', type: 'Kinetic', weight: 1800, enLoad: 95, special: 'Needle gun, rapid piercing, high stagger, Elcano', category: 'Special' },
            { id: 'VP-66EG', name: 'VP-66EG', damage: 75, range: 200, ammo: 0, fireRate: 'EN', type: 'Energy', weight: 1600, enLoad: 125, enCost: 125, special: 'Stun gun, electric discharge, utility weapon, Arquebus', category: 'Special' },
            { id: 'IA-C01W7:ML-REDSHIFT', name: 'IA-C01W7: ML-REDSHIFT', damage: 420, range: 250, ammo: 0, fireRate: 'Charge', type: 'Coral', weight: 4800, enLoad: 380, enCost: 380, special: 'Coral oscillator, energy burst, Rubicon Research', category: 'Special' },
            { id: 'IB-C03W2:WLT101', name: 'IB-C03W2: WLT 101', damage: 450, range: 'Melee', ammo: 0, fireRate: 'Melee', type: 'Coral', weight: 5200, enLoad: 420, enCost: 420, special: 'Coral oscillator, contact explosion, Rubicon Research', category: 'Special' }
        ],
        backWeapons: {
            heavyCannons: [
                { id: 'DF-GA-09SHAO-WEI', name: 'DF-GA-09 SHAO-WEI', damage: 95, range: 400, ammo: 800, fireRate: 'Full Auto', type: 'Kinetic', weight: 7800, enLoad: 420, special: 'Gatling cannon, sustained fire', category: 'Heavy Cannon' },
                { id: 'SB-033MMORLEY', name: 'SB-033M MORLEY', damage: 340, range: 300, ammo: 24, fireRate: 'Single', type: 'Explosive', weight: 8400, enLoad: 465, special: 'Spread bazooka, shotgun pattern', category: 'Heavy Cannon' },
                { id: 'EARSHOT', name: 'EARSHOT', damage: 520, range: 450, ammo: 16, fireRate: 'Slow', type: 'Explosive', weight: 7200, enLoad: 388, special: 'Grenade cannon, high impact', category: 'Heavy Cannon' },
                { id: 'SONGBIRDS', name: 'SONGBIRDS', damage: 380, range: 400, ammo: 42, fireRate: 'Burst', type: 'Explosive', weight: 5500, enLoad: 285, special: 'Dual grenade cannon', category: 'Heavy Cannon' },
                { id: 'VE-60SNA', name: 'VE-60SNA', damage: 270, range: 350, ammo: 30, fireRate: 'Single', type: 'Energy', weight: 6100, enLoad: 825, special: 'Stun needle, shield breaker', category: 'Heavy Cannon' },
                { id: 'VP-60LCS', name: 'VP-60LCS', damage: 230, range: 500, ammo: 32, fireRate: 'Charge', type: 'Energy', weight: 5200, enLoad: 680, enCost: 300, special: 'Laser cannon, chargeable', category: 'Heavy Cannon' },
                { id: 'VE-60LCA', name: 'VE-60LCA', damage: 280, range: 550, ammo: 28, fireRate: 'Charge', type: 'Energy', weight: 6800, enLoad: 890, enCost: 350, special: 'Heavy laser cannon', category: 'Heavy Cannon' },
                { id: 'VE-60LCB', name: 'VE-60LCB', damage: 310, range: 500, ammo: 24, fireRate: 'Charge', type: 'Energy', weight: 6500, enLoad: 850, enCost: 350, special: 'Burst laser cannon', category: 'Heavy Cannon' },
                { id: 'VP-60LCD', name: 'VP-60LCD', damage: 260, range: 400, ammo: 28, fireRate: 'Charge', type: 'Energy', weight: 7600, enLoad: 780, enCost: 300, special: 'Diffuse laser, wider spread', category: 'Heavy Cannon' },
                { id: 'FASAN/60E', name: 'FASAN/60E', damage: 390, range: 450, ammo: 39, fireRate: 'Charge', type: 'Energy', weight: 6300, enLoad: 880, enCost: 350, special: 'Plasma cannon, explosion on hit', category: 'Heavy Cannon' },
                { id: 'KRANICH/60Z', name: 'KRANICH/60Z', damage: 230, range: 400, ammo: 42, fireRate: 'Full Auto', type: 'Energy', weight: 5200, enLoad: 650, special: 'Pulse cannon', category: 'Heavy Cannon' },
                { id: 'EULE/60D', name: 'EULE/60D', damage: 0, range: 0, ammo: 0, fireRate: 'Deploy', type: 'Energy', weight: 4800, enLoad: 720, special: 'Pulse shield launcher, deployable barrier', category: 'Heavy Cannon' },
                { id: 'IA-C01W3:AURORA', name: 'IA-C01W3: AURORA', damage: 480, range: 600, ammo: 18, fireRate: 'Charge', type: 'Coral', weight: 8100, enLoad: 950, enCost: 380, special: 'Light wave cannon, coral damage', category: 'Heavy Cannon' }
            ],
            missiles: [
                { id: 'BML-G1/P20MLT-04', name: 'BML-G1/P20 MLT-04', damage: 85, range: 600, ammo: 80, fireRate: 'Multi', type: 'Explosive', weight: 4200, enLoad: 380, lockCount: 4, special: 'Standard missiles', category: 'Missile' },
                { id: 'BML-G2/P03MLT-06', name: 'BML-G2/P03 MLT-06', damage: 120, range: 650, ammo: 60, fireRate: 'Multi', type: 'Explosive', weight: 4800, enLoad: 420, lockCount: 3, special: 'Medium missiles', category: 'Missile' },
                { id: 'BML-G2/P05MLT-10', name: 'BML-G2/P05 MLT-10', damage: 95, range: 700, ammo: 100, fireRate: 'Multi', type: 'Explosive', weight: 5400, enLoad: 480, lockCount: 5, special: 'High capacity', category: 'Missile' },
                { id: 'BML-G2/P19SPL-12', name: 'BML-G2/P19 SPL-12', damage: 55, range: 500, ammo: 72, fireRate: 'Multi', type: 'Explosive', weight: 4600, enLoad: 350, lockCount: 12, special: 'Split missiles, scatter pattern', category: 'Missile' },
                { id: 'BML-G2/P16SPL-08', name: 'BML-G2/P16 SPL-08', damage: 70, range: 550, ammo: 64, fireRate: 'Multi', type: 'Explosive', weight: 4200, enLoad: 320, lockCount: 8, special: 'Split missiles', category: 'Missile' },
                { id: 'BML-G2/P17SPL-16', name: 'BML-G2/P17 SPL-16', damage: 50, range: 500, ammo: 96, fireRate: 'Multi', type: 'Explosive', weight: 5000, enLoad: 385, lockCount: 16, special: 'Maximum split count', category: 'Missile' },
                { id: 'BML-G1/P31DUO-02', name: 'BML-G1/P31 DUO-02', damage: 180, range: 600, ammo: 40, fireRate: 'Multi', type: 'Explosive', weight: 5800, enLoad: 450, lockCount: 2, special: 'Dual heavy missiles', category: 'Missile' },
                { id: 'BML-G1/P32DUO-03', name: 'BML-G1/P32 DUO-03', damage: 210, range: 650, ammo: 36, fireRate: 'Multi', type: 'Explosive', weight: 6200, enLoad: 490, lockCount: 2, special: 'Dual missiles, high damage', category: 'Missile' },
                { id: 'BML-G2/P08DUO-03', name: 'BML-G2/P08 DUO-03', damage: 190, range: 700, ammo: 48, fireRate: 'Multi', type: 'Explosive', weight: 6500, enLoad: 520, lockCount: 2, special: 'Dual missiles, long range', category: 'Missile' },
                { id: 'BML-G1/P01VTC-04', name: 'BML-G1/P01 VTC-04', damage: 110, range: 550, ammo: 60, fireRate: 'Multi', type: 'Explosive', weight: 4800, enLoad: 410, lockCount: 4, special: 'Vertical launch', category: 'Missile' },
                { id: 'BML-G1/P03VTC-08', name: 'BML-G1/P03 VTC-08', damage: 100, range: 550, ammo: 80, fireRate: 'Multi', type: 'Explosive', weight: 5400, enLoad: 460, lockCount: 8, special: 'Vertical swarm', category: 'Missile' },
                { id: 'BML-G1/P07VTC-12', name: 'BML-G1/P07 VTC-12', damage: 85, range: 550, ammo: 96, fireRate: 'Multi', type: 'Explosive', weight: 6000, enLoad: 525, lockCount: 12, special: 'Maximum vertical missiles', category: 'Missile' },
                { id: 'BML-G3/P04ACT-01', name: 'BML-G3/P04 ACT-01', damage: 140, range: 700, ammo: 40, fireRate: 'Active', type: 'Explosive', weight: 4500, enLoad: 380, special: 'Active homing, tracks target', category: 'Missile' },
                { id: 'BML-G3/P05ACT-02', name: 'BML-G3/P05 ACT-02', damage: 170, range: 750, ammo: 32, fireRate: 'Active', type: 'Explosive', weight: 5200, enLoad: 440, special: 'Heavy active homing', category: 'Missile' },
                { id: 'BML-G1/P29CNT', name: 'BML-G1/P29 CNT', damage: 90, range: 500, ammo: 12, fireRate: 'Multi', type: 'Explosive', weight: 6400, enLoad: 480, lockCount: 10, special: 'Container, releases micro-missiles', category: 'Missile' },
                { id: 'WR-0999DELIVERYBOY', name: 'WR-0999 DELIVERY BOY', damage: 75, range: 600, ammo: 60, fireRate: 'Multi', type: 'Explosive', weight: 6800, enLoad: 520, lockCount: 15, special: 'Cluster missiles', category: 'Missile' },
                { id: 'WS-5001SOUP', name: 'WS-5001 SOUP', damage: 65, range: 550, ammo: 72, fireRate: 'Multi', type: 'Explosive', weight: 7200, enLoad: 560, lockCount: 20, special: 'Scatter missiles, area saturation', category: 'Missile' },
                { id: '45-091JVLNBETA', name: '45-091 JVLN BETA', damage: 420, range: 400, ammo: 18, fireRate: 'Single', type: 'Explosive', weight: 5800, enLoad: 425, special: 'Detonating missile, proximity fuse', category: 'Missile' },
                { id: 'EL-PW-01TRUENO', name: 'EL-PW-01 TRUENO', damage: 95, range: 500, ammo: 48, fireRate: 'Multi', type: 'Kinetic', weight: 5600, enLoad: 490, lockCount: 8, special: 'Needle missiles, high stagger', category: 'Missile' },
                { id: 'Vvc-703PM', name: 'Vvc-703PM', damage: 140, range: 650, ammo: 45, fireRate: 'Multi', type: 'Energy', weight: 5800, enLoad: 620, lockCount: 3, special: 'Plasma missiles', category: 'Missile' },
                { id: 'Vvc-706PM', name: 'Vvc-706PM', damage: 180, range: 700, ammo: 36, fireRate: 'Multi', type: 'Energy', weight: 6600, enLoad: 720, lockCount: 3, special: 'Heavy plasma missiles', category: 'Missile' },
                { id: 'Vvc-70VPM', name: 'Vvc-70VPM', damage: 105, range: 600, ammo: 60, fireRate: 'Multi', type: 'Energy', weight: 4900, enLoad: 540, lockCount: 4, special: 'Vertical plasma missiles', category: 'Missile' },
                { id: 'IB-C03W3:NGI006', name: 'IB-C03W3: NGI 006', damage: 320, range: 700, ammo: 24, fireRate: 'Multi', type: 'Coral', weight: 7400, enLoad: 880, lockCount: 2, special: 'Coral missiles, massive AoE', category: 'Missile' },
                { id: 'BO-044HUXLEY', name: 'BO-044 HUXLEY', damage: 55, range: 400, ammo: 96, fireRate: 'Auto', type: 'Kinetic', weight: 6200, enLoad: 650, lockCount: 6, special: 'Bullet orbit, autonomous targeting', category: 'Missile' },
                { id: '45-091ORBT', name: '45-091 ORBT', damage: 85, range: 500, ammo: 64, fireRate: 'Auto', type: 'Energy', weight: 5800, enLoad: 710, lockCount: 4, special: 'Laser orbit, continuous fire', category: 'Missile' },
                { id: 'VP-60LT', name: 'VP-60LT', damage: 120, range: 550, ammo: 48, fireRate: 'Auto', type: 'Energy', weight: 5400, enLoad: 580, special: 'Laser turret, autonomous', category: 'Missile' },
                { id: 'Vvc-700LD', name: 'Vvc-700LD', damage: 95, range: 450, ammo: 16, fireRate: 'Multi', type: 'Energy', weight: 6400, enLoad: 690, lockCount: 6, special: 'Laser drones, swarm attack', category: 'Missile' }
            ],
            shields: [
                { id: 'SI-24:SU-Q5', name: 'SI-24: SU-Q5', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 3200, enLoad: 520, enCost: 60, special: 'Reduce dmg by 180, 2 round recharge', category: 'Shield' },
                { id: 'VP-61PS', name: 'VP-61PS', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 3600, enLoad: 580, enCost: 80, special: 'Reduce dmg by 250, 2 round recharge', category: 'Shield' },
                { id: 'SI-27:SU-R8', name: 'SI-27: SU-R8', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 4800, enLoad: 680, enCost: 140, special: 'Reduce dmg by 450, 3 round recharge', category: 'Shield' },
                { id: 'VP-61PB', name: 'VP-61PB', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 2800, enLoad: 480, enCost: 50, special: '+3 AC vs 1 attack, 1 round recharge', category: 'Shield' },
                { id: 'SI-29:SU-TT/C', name: 'SI-29: SU-TT/C', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 3100, enLoad: 520, enCost: 60, special: '+4 AC vs 1 attack, 1 round recharge', category: 'Shield' },
                { id: 'VE-61PSA', name: 'VE-61PSA', damage: 0, range: 0, ammo: 0, fireRate: 'Bonus Action', type: 'Shield', weight: 5600, enLoad: 780, enCost: 100, special: '+2 AC for 1 round, sustained barrier, 2 round recharge', category: 'Shield' },
                { id: 'IB-C03W4:NGI028', name: 'IB-C03W4: NGI 028', damage: 0, range: 0, ammo: 0, fireRate: 'Reaction', type: 'Shield', weight: 4900, enLoad: 820, enCost: 120, special: 'Reduce dmg by 350, blocks from ANY direction, 2 round recharge', category: 'Shield' }
            ]
        }
    }
};

