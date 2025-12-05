// AC6 TTRPG Mech Builder - Main Application Logic

class MechBuilder {
    constructor() {
        this.currentBuild = {
            name: '',
            generator: null,
            fcs: null,
            booster: null,
            legs: null,
            core: null,
            rightArms: null,
            leftArms: null,
            head: null,
            expansion1: null,
            expansion2: null,
            rightArm: null,
            leftArm: null,
            rightBack: null,
            leftBack: null,
            currentEN: 0,
            currentHP: 0,
            weaponAmmo: {}
        };

        this.init();
    }

    init() {
        this.populateDropdowns();
        this.attachEventListeners();
        this.updateDisplay();
    }

    populateDropdowns() {
        // Generators
        const generatorSelect = document.getElementById('generator');
        AC6_DATA.generators.forEach(gen => {
            const option = document.createElement('option');
            option.value = gen.id;
            option.textContent = gen.name;
            generatorSelect.appendChild(option);
        });

        // FCS
        const fcsSelect = document.getElementById('fcs');
        AC6_DATA.fcs.forEach(fcs => {
            const option = document.createElement('option');
            option.value = fcs.id;
            option.textContent = fcs.name;
            fcsSelect.appendChild(option);
        });

        // Boosters
        const boosterSelect = document.getElementById('booster');
        AC6_DATA.boosters.forEach(booster => {
            const option = document.createElement('option');
            option.value = booster.id;
            option.textContent = booster.name;
            boosterSelect.appendChild(option);
        });

        // Legs
        const legsSelect = document.getElementById('legs');
        const legTypes = ['bipedal', 'reverseJoint', 'tetrapod', 'tank'];
        legTypes.forEach(type => {
            const group = document.createElement('optgroup');
            group.label = type.toUpperCase();
            AC6_DATA.legs[type].forEach(leg => {
                const option = document.createElement('option');
                option.value = leg.id;
                option.textContent = leg.name;
                group.appendChild(option);
            });
            legsSelect.appendChild(group);
        });

        // Cores
        const coreSelect = document.getElementById('core');
        AC6_DATA.cores.forEach(core => {
            const option = document.createElement('option');
            option.value = core.id;
            option.textContent = core.name;
            coreSelect.appendChild(option);
        });

        // Arms
        const rightArmsSelect = document.getElementById('rightArms');
        const leftArmsSelect = document.getElementById('leftArms');
        [rightArmsSelect, leftArmsSelect].forEach(select => {
            AC6_DATA.arms.forEach(arms => {
                const option = document.createElement('option');
                option.value = arms.id;
                option.textContent = arms.name;
                select.appendChild(option);
            });
        });

        // Heads
        const headSelect = document.getElementById('head');
        AC6_DATA.heads.forEach(head => {
            const option = document.createElement('option');
            option.value = head.id;
            option.textContent = head.name;
            headSelect.appendChild(option);
        });

        // Expansions
        const exp1Select = document.getElementById('expansion1');
        const exp2Select = document.getElementById('expansion2');
        [exp1Select, exp2Select].forEach(select => {
            AC6_DATA.expansions.forEach(exp => {
                const option = document.createElement('option');
                option.value = exp.id;
                option.textContent = exp.name;
                select.appendChild(option);
            });
        });

        // Weapons
        this.populateWeaponDropdowns();
    }

    populateWeaponDropdowns() {
        const weaponSelects = ['rightArm', 'leftArm', 'rightBack', 'leftBack'];

        weaponSelects.forEach(selectId => {
            const select = document.getElementById(selectId);

            // Handguns
            const handgunGroup = document.createElement('optgroup');
            handgunGroup.label = 'HANDGUNS';
            AC6_DATA.weapons.handguns.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                handgunGroup.appendChild(option);
            });
            select.appendChild(handgunGroup);

            // Rifles
            const rifleGroup = document.createElement('optgroup');
            rifleGroup.label = 'RIFLES';
            AC6_DATA.weapons.rifles.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                rifleGroup.appendChild(option);
            });
            select.appendChild(rifleGroup);

            // Shotguns
            const shotgunGroup = document.createElement('optgroup');
            shotgunGroup.label = 'SHOTGUNS';
            AC6_DATA.weapons.shotguns.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                shotgunGroup.appendChild(option);
            });
            select.appendChild(shotgunGroup);

            // Machine Guns
            const mgGroup = document.createElement('optgroup');
            mgGroup.label = 'MACHINE GUNS';
            AC6_DATA.weapons.machineGuns.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                mgGroup.appendChild(option);
            });
            select.appendChild(mgGroup);

            // Bazookas
            const bazookaGroup = document.createElement('optgroup');
            bazookaGroup.label = 'BAZOOKAS';
            AC6_DATA.weapons.bazookas.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                bazookaGroup.appendChild(option);
            });
            select.appendChild(bazookaGroup);

            // Grenade Launchers
            const glGroup = document.createElement('optgroup');
            glGroup.label = 'GRENADE LAUNCHERS';
            AC6_DATA.weapons.grenadeLaunchers.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                glGroup.appendChild(option);
            });
            select.appendChild(glGroup);

            // Missile Launchers
            const mlGroup = document.createElement('optgroup');
            mlGroup.label = 'MISSILE LAUNCHERS';
            AC6_DATA.weapons.missileLaunchers.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                mlGroup.appendChild(option);
            });
            select.appendChild(mlGroup);

            // Melee
            const meleeGroup = document.createElement('optgroup');
            meleeGroup.label = 'MELEE';
            AC6_DATA.weapons.melee.forEach(w => {
                const option = document.createElement('option');
                option.value = w.id;
                option.textContent = w.name;
                meleeGroup.appendChild(option);
            });
            select.appendChild(meleeGroup);

            // Back weapons only for back slots
            if (selectId.includes('Back')) {
                const backGroup = document.createElement('optgroup');
                backGroup.label = 'BACK WEAPONS';
                AC6_DATA.weapons.backWeapons.forEach(w => {
                    const option = document.createElement('option');
                    option.value = w.id;
                    option.textContent = w.name;
                    backGroup.appendChild(option);
                });
                select.appendChild(backGroup);
            }
        });
    }

    attachEventListeners() {
        // Part selection listeners
        const partSelects = ['generator', 'fcs', 'booster', 'legs', 'core', 'rightArms', 'leftArms', 'head',
                             'expansion1', 'expansion2', 'rightArm', 'leftArm', 'rightBack', 'leftBack'];

        partSelects.forEach(id => {
            const element = document.getElementById(id);
            element.addEventListener('change', (e) => this.onPartChange(id, e.target.value));
        });

        // AC Name
        document.getElementById('acName').addEventListener('input', (e) => {
            this.currentBuild.name = e.target.value;
        });

        // EN buttons
        document.getElementById('enRechargeBtn').addEventListener('click', () => this.rechargeEN());
        document.getElementById('enResetBtn').addEventListener('click', () => this.resetEN());

        // Save/Load buttons
        document.getElementById('saveBtn').addEventListener('click', () => this.saveBuild());
        document.getElementById('loadBtn').addEventListener('click', () => this.loadBuild());
        document.getElementById('newBuildBtn').addEventListener('click', () => this.newBuild());
    }

    onPartChange(partType, partId) {
        if (!partId) {
            this.currentBuild[partType] = null;
            this.hidePartStats(partType);
            this.updateDisplay();
            return;
        }

        let part = null;

        switch(partType) {
            case 'generator':
                part = AC6_DATA.generators.find(p => p.id === partId);
                break;
            case 'fcs':
                part = AC6_DATA.fcs.find(p => p.id === partId);
                break;
            case 'booster':
                part = AC6_DATA.boosters.find(p => p.id === partId);
                break;
            case 'legs':
                part = this.findLegPart(partId);
                break;
            case 'core':
                part = AC6_DATA.cores.find(p => p.id === partId);
                break;
            case 'rightArms':
            case 'leftArms':
                part = AC6_DATA.arms.find(p => p.id === partId);
                break;
            case 'head':
                part = AC6_DATA.heads.find(p => p.id === partId);
                break;
            case 'expansion1':
            case 'expansion2':
                part = AC6_DATA.expansions.find(p => p.id === partId);
                break;
            case 'rightArm':
            case 'leftArm':
            case 'rightBack':
            case 'leftBack':
                part = this.findWeapon(partId);
                // Initialize ammo tracking
                if (part && part.ammo > 0) {
                    this.currentBuild.weaponAmmo[partType] = part.ammo;
                }
                break;
        }

        this.currentBuild[partType] = part;
        this.showPartStats(partType, part);
        this.updateDisplay();
    }

    findLegPart(id) {
        for (let type in AC6_DATA.legs) {
            const found = AC6_DATA.legs[type].find(p => p.id === id);
            if (found) return found;
        }
        return null;
    }

    findWeapon(id) {
        for (let category in AC6_DATA.weapons) {
            const found = AC6_DATA.weapons[category].find(w => w.id === id);
            if (found) return found;
        }
        return null;
    }

    showPartStats(partType, part) {
        if (!part) return;

        const statsDiv = document.getElementById(`${partType}-stats`);
        if (!statsDiv) return;

        statsDiv.innerHTML = '';
        statsDiv.classList.add('active');

        // Create stats display based on part type
        const stats = this.getPartStatsDisplay(part);
        stats.forEach(stat => {
            const statLine = document.createElement('div');
            const statName = document.createElement('span');
            statName.className = 'stat-name';
            statName.textContent = stat.name;
            const statValue = document.createElement('span');
            statValue.className = 'stat-value';
            statValue.textContent = stat.value;
            statLine.appendChild(statName);
            statLine.appendChild(statValue);
            statsDiv.appendChild(statLine);
        });
    }

    hidePartStats(partType) {
        const statsDiv = document.getElementById(`${partType}-stats`);
        if (statsDiv) {
            statsDiv.classList.remove('active');
            statsDiv.innerHTML = '';
        }
    }

    getPartStatsDisplay(part) {
        const stats = [];

        // Common stats
        if (part.weight !== undefined) stats.push({ name: 'Weight', value: part.weight });
        if (part.enLoad !== undefined) stats.push({ name: 'EN Load', value: part.enLoad });

        // Generator-specific
        if (part.capacity !== undefined) {
            stats.push({ name: 'Capacity', value: part.capacity });
            stats.push({ name: 'Recharge', value: part.recharge });
            stats.push({ name: 'Output', value: part.output });
            stats.push({ name: 'E-Spec', value: part.eSpec + '%' });
        }

        // Weapon-specific
        if (part.damage !== undefined) {
            stats.push({ name: 'Damage', value: part.damage });
            stats.push({ name: 'Range', value: part.range + ' ft' });
            if (part.ammo) stats.push({ name: 'Ammo', value: part.ammo });
            if (part.enCost) stats.push({ name: 'EN Cost', value: part.enCost });
        }

        return stats;
    }

    updateDisplay() {
        this.updateCombatStats();
        this.updateENSystem();
        this.updateWeight();
        this.updateMobility();
        this.updateTargeting();
        this.updateWeapons();
        this.updateExpansions();
        this.updateRecon();
        this.validateBuild();
    }

    updateCombatStats() {
        let totalHP = 0;
        let totalAC = 10; // Base AC
        let totalProneRes = 0;

        // Add HP from parts
        if (this.currentBuild.legs) totalHP += this.currentBuild.legs.hp;
        if (this.currentBuild.core) totalHP += this.currentBuild.core.hp;
        if (this.currentBuild.rightArms) totalHP += this.currentBuild.rightArms.hp;
        if (this.currentBuild.leftArms) totalHP += this.currentBuild.leftArms.hp;
        if (this.currentBuild.head) totalHP += this.currentBuild.head.hp;

        // Add AC from parts
        if (this.currentBuild.legs) totalAC += this.currentBuild.legs.ac;
        if (this.currentBuild.core) totalAC += this.currentBuild.core.ac;
        if (this.currentBuild.rightArms) totalAC += this.currentBuild.rightArms.ac;
        if (this.currentBuild.leftArms) totalAC += this.currentBuild.leftArms.ac;
        if (this.currentBuild.head) totalAC += this.currentBuild.head.ac;

        // Add Prone Resistance
        if (this.currentBuild.legs) totalProneRes += this.currentBuild.legs.proneRes;
        if (this.currentBuild.core) totalProneRes += this.currentBuild.core.proneRes;

        document.getElementById('totalHP').textContent = totalHP;
        document.getElementById('totalAC').textContent = totalAC;
        document.getElementById('totalProneRes').textContent = '+' + totalProneRes;

        // Initialize current HP if not set
        if (this.currentBuild.currentHP === 0) {
            this.currentBuild.currentHP = totalHP;
        }
    }

    updateENSystem() {
        const gen = this.currentBuild.generator;

        if (!gen) {
            document.getElementById('enCapacity').textContent = '0';
            document.getElementById('enRecharge').textContent = '0';
            document.getElementById('enSupply').textContent = '0';
            document.getElementById('enOutput').textContent = '0';
            document.getElementById('enLoad').textContent = '0';
            document.getElementById('eFirearmSpec').textContent = '100%';
            document.getElementById('enText').textContent = '0 / 0';
            document.getElementById('enBar').style.width = '0%';
            return;
        }

        // Calculate total EN Load
        let totalENLoad = 0;
        if (this.currentBuild.fcs) totalENLoad += this.currentBuild.fcs.enLoad;
        if (this.currentBuild.booster) totalENLoad += this.currentBuild.booster.enLoad;
        if (this.currentBuild.legs) totalENLoad += this.currentBuild.legs.enLoad;
        if (this.currentBuild.core) totalENLoad += this.currentBuild.core.enLoad;
        if (this.currentBuild.rightArms) totalENLoad += this.currentBuild.rightArms.enLoad;
        if (this.currentBuild.leftArms) totalENLoad += this.currentBuild.leftArms.enLoad;
        if (this.currentBuild.head) totalENLoad += this.currentBuild.head.enLoad;
        if (this.currentBuild.rightArm) totalENLoad += this.currentBuild.rightArm.enLoad;
        if (this.currentBuild.leftArm) totalENLoad += this.currentBuild.leftArm.enLoad;
        if (this.currentBuild.rightBack) totalENLoad += this.currentBuild.rightBack.enLoad;
        if (this.currentBuild.leftBack) totalENLoad += this.currentBuild.leftBack.enLoad;

        document.getElementById('enCapacity').textContent = gen.capacity;
        document.getElementById('enRecharge').textContent = gen.recharge;
        document.getElementById('enSupply').textContent = gen.supply;
        document.getElementById('enOutput').textContent = gen.output;
        document.getElementById('enLoad').textContent = totalENLoad;
        document.getElementById('eFirearmSpec').textContent = gen.eSpec + '%';

        // Initialize current EN
        if (this.currentBuild.currentEN === 0) {
            this.currentBuild.currentEN = gen.capacity;
        }

        // Update EN bar
        const enPercent = (this.currentBuild.currentEN / gen.capacity) * 100;
        document.getElementById('enBar').style.width = enPercent + '%';
        document.getElementById('enText').textContent = `${this.currentBuild.currentEN} / ${gen.capacity}`;
    }

    updateWeight() {
        let totalWeight = 0;
        let loadLimit = 0;

        // Calculate total weight (excluding legs - they carry the weight, not add to it)
        if (this.currentBuild.generator) totalWeight += this.currentBuild.generator.weight;
        if (this.currentBuild.fcs) totalWeight += this.currentBuild.fcs.weight;
        if (this.currentBuild.booster) totalWeight += this.currentBuild.booster.weight;
        if (this.currentBuild.core) totalWeight += this.currentBuild.core.weight;
        if (this.currentBuild.rightArms) totalWeight += this.currentBuild.rightArms.weight;
        if (this.currentBuild.leftArms) totalWeight += this.currentBuild.leftArms.weight;
        if (this.currentBuild.head) totalWeight += this.currentBuild.head.weight;
        if (this.currentBuild.rightArm) totalWeight += this.currentBuild.rightArm.weight;
        if (this.currentBuild.leftArm) totalWeight += this.currentBuild.leftArm.weight;
        if (this.currentBuild.rightBack) totalWeight += this.currentBuild.rightBack.weight;
        if (this.currentBuild.leftBack) totalWeight += this.currentBuild.leftBack.weight;

        // Get load limit from legs
        if (this.currentBuild.legs) loadLimit = this.currentBuild.legs.loadLimit;

        document.getElementById('totalWeight').textContent = totalWeight.toLocaleString();
        document.getElementById('loadLimit').textContent = loadLimit.toLocaleString();
    }

    updateMobility() {
        const booster = this.currentBuild.booster;
        const core = this.currentBuild.core;
        const legs = this.currentBuild.legs;

        if (booster) {
            document.getElementById('boostSpeed').textContent = booster.movement + ' ft/turn';
            document.getElementById('qbDistance').textContent = booster.qbDistance + ' ft';
            document.getElementById('qbCost').textContent = booster.qbCost + ' EN';
        } else {
            document.getElementById('boostSpeed').textContent = '0 ft/turn';
            document.getElementById('qbDistance').textContent = '0 ft';
            document.getElementById('qbCost').textContent = '0 EN';
        }

        if (core) {
            document.getElementById('assaultBoost').textContent = core.assaultBoost + ' ft/turn';
            document.getElementById('flightSpeed').textContent = core.flightSpeed + ' ft/turn';
        } else {
            document.getElementById('assaultBoost').textContent = '0 ft/turn';
            document.getElementById('flightSpeed').textContent = '0 ft/turn';
        }
    }

    updateTargeting() {
        const fcs = this.currentBuild.fcs;
        const rightArms = this.currentBuild.rightArms;
        const leftArms = this.currentBuild.leftArms;

        // FCS bonuses (range-based)
        if (fcs) {
            document.getElementById('closeBonus').textContent = this.formatBonus(fcs.close);
            document.getElementById('mediumBonus').textContent = this.formatBonus(fcs.medium);
            document.getElementById('longBonus').textContent = this.formatBonus(fcs.long);
            document.getElementById('missileBonus').textContent = this.formatBonus(fcs.missile);
        } else {
            document.getElementById('closeBonus').textContent = '+0';
            document.getElementById('mediumBonus').textContent = '+0';
            document.getElementById('longBonus').textContent = '+0';
            document.getElementById('missileBonus').textContent = '+0';
        }

        // Arms bonuses (use maximum from either arm for each weapon type)
        let firearmsBonus = 0;
        let meleeBonus = 0;
        let heavyBonus = 0; // Recoil control for heavy weapons (machine guns, bazookas, grenade launchers)

        if (rightArms) {
            firearmsBonus = Math.max(firearmsBonus, rightArms.fireSpec || 0);
            meleeBonus = Math.max(meleeBonus, rightArms.meleeSpec || 0);
            heavyBonus = Math.max(heavyBonus, rightArms.recoilCtrl || 0);
        }

        if (leftArms) {
            firearmsBonus = Math.max(firearmsBonus, leftArms.fireSpec || 0);
            meleeBonus = Math.max(meleeBonus, leftArms.meleeSpec || 0);
            heavyBonus = Math.max(heavyBonus, leftArms.recoilCtrl || 0);
        }

        document.getElementById('firearmsBonus').textContent = this.formatBonus(firearmsBonus);
        document.getElementById('meleeBonus').textContent = this.formatBonus(meleeBonus);
        document.getElementById('heavyBonus').textContent = this.formatBonus(heavyBonus);
    }

    updateWeapons() {
        const weaponsList = document.getElementById('weaponsList');
        weaponsList.innerHTML = '';

        const weapons = [
            { slot: 'rightArm', name: 'R-ARM' },
            { slot: 'leftArm', name: 'L-ARM' },
            { slot: 'rightBack', name: 'R-BACK' },
            { slot: 'leftBack', name: 'L-BACK' }
        ];

        weapons.forEach(({ slot, name }) => {
            const weapon = this.currentBuild[slot];
            if (!weapon) return;

            const weaponDiv = this.createWeaponDisplay(weapon, slot, name);
            weaponsList.appendChild(weaponDiv);
        });

        if (weaponsList.children.length === 0) {
            weaponsList.innerHTML = '<div class="empty-state">No weapons equipped</div>';
        }
    }

    createWeaponDisplay(weapon, slot, slotName) {
        const div = document.createElement('div');
        div.className = 'weapon-item';

        // Header
        const header = document.createElement('div');
        header.className = 'weapon-header';
        const weaponName = document.createElement('span');
        weaponName.className = 'weapon-name';
        weaponName.textContent = weapon.name;
        const weaponSlot = document.createElement('span');
        weaponSlot.className = 'weapon-slot';
        weaponSlot.textContent = slotName;
        header.appendChild(weaponName);
        header.appendChild(weaponSlot);
        div.appendChild(header);

        // Stats
        const stats = document.createElement('div');
        stats.className = 'weapon-stats';
        stats.innerHTML = `
            <div class="weapon-stat"><span>Damage</span><span>${weapon.damage}</span></div>
            <div class="weapon-stat"><span>Range</span><span>${weapon.range} ft</span></div>
            <div class="weapon-stat"><span>Type</span><span>${weapon.type}</span></div>
            <div class="weapon-stat"><span>Fire Rate</span><span>${weapon.fireRate}</span></div>
        `;
        div.appendChild(stats);

        // Actions
        const actions = document.createElement('div');
        actions.className = 'weapon-actions';

        if (weapon.ammo > 0) {
            // Ammo tracking
            const ammoDiv = document.createElement('div');
            ammoDiv.className = 'weapon-ammo';
            const currentAmmo = this.currentBuild.weaponAmmo[slot] || weapon.ammo;
            ammoDiv.innerHTML = `<span class="ammo-display">AMMO: ${currentAmmo} / ${weapon.ammo}</span>`;

            const fireBtn = document.createElement('button');
            fireBtn.className = 'btn-small';
            fireBtn.textContent = 'FIRE';
            fireBtn.onclick = () => this.fireWeapon(slot);

            const reloadBtn = document.createElement('button');
            reloadBtn.className = 'btn-small';
            reloadBtn.textContent = 'RELOAD';
            reloadBtn.onclick = () => this.reloadWeapon(slot);

            ammoDiv.appendChild(fireBtn);
            ammoDiv.appendChild(reloadBtn);
            actions.appendChild(ammoDiv);
        } else if (weapon.enCost) {
            // Energy weapon
            const enDiv = document.createElement('div');
            enDiv.className = 'weapon-ammo';
            enDiv.innerHTML = `<span class="ammo-display">EN COST: ${weapon.enCost}</span>`;

            const fireBtn = document.createElement('button');
            fireBtn.className = 'btn-small';
            fireBtn.textContent = 'FIRE';
            fireBtn.onclick = () => this.fireEnergyWeapon(slot, weapon.enCost);

            enDiv.appendChild(fireBtn);
            actions.appendChild(enDiv);
        } else {
            // Melee weapon
            const meleeDiv = document.createElement('div');
            meleeDiv.className = 'weapon-ammo';
            const attackBtn = document.createElement('button');
            attackBtn.className = 'btn-small';
            attackBtn.textContent = 'ATTACK';
            attackBtn.onclick = () => this.useMelee(slot);
            meleeDiv.appendChild(attackBtn);
            actions.appendChild(meleeDiv);
        }

        div.appendChild(actions);
        return div;
    }

    updateExpansions() {
        const expList = document.getElementById('expansionsList');
        expList.innerHTML = '';

        const expansions = [
            { slot: 'expansion1', num: 1 },
            { slot: 'expansion2', num: 2 }
        ];

        let hasExpansions = false;
        expansions.forEach(({ slot, num }) => {
            const exp = this.currentBuild[slot];
            if (!exp) return;

            hasExpansions = true;
            const expDiv = this.createExpansionDisplay(exp, num);
            expList.appendChild(expDiv);
        });

        if (!hasExpansions) {
            expList.innerHTML = '<div class="empty-state">No expansions equipped</div>';
        }
    }

    createExpansionDisplay(exp, num) {
        const div = document.createElement('div');
        div.className = 'expansion-item';

        const name = document.createElement('div');
        name.className = 'expansion-name';
        name.textContent = exp.name;
        div.appendChild(name);

        const desc = document.createElement('div');
        desc.className = 'expansion-desc';
        desc.textContent = exp.effect;
        div.appendChild(desc);

        const actions = document.createElement('div');
        actions.className = 'expansion-actions';

        const charges = document.createElement('span');
        charges.className = 'expansion-charges';
        charges.textContent = `CHARGES: ${exp.charges} / ${exp.charges}`;

        const useBtn = document.createElement('button');
        useBtn.className = 'btn-small';
        useBtn.textContent = 'USE';
        useBtn.onclick = () => alert(`Used ${exp.name}! Implement charge tracking if needed.`);

        actions.appendChild(charges);
        actions.appendChild(useBtn);
        div.appendChild(actions);

        return div;
    }

    updateRecon() {
        const head = this.currentBuild.head;

        if (head) {
            document.getElementById('scanRange').textContent = head.scanRange + ' ft';
            document.getElementById('scanDuration').textContent = head.scanDuration + ' sec';
            document.getElementById('sysRecovery').textContent = this.formatBonus(head.sysRecovery);
        } else {
            document.getElementById('scanRange').textContent = '0 ft';
            document.getElementById('scanDuration').textContent = '0 sec';
            document.getElementById('sysRecovery').textContent = '+0';
        }
    }

    validateBuild() {
        const status = document.getElementById('validationStatus');
        const errors = [];
        const warnings = [];

        // Check if all required parts are equipped
        const requiredParts = ['generator', 'fcs', 'booster', 'legs', 'core', 'rightArms', 'leftArms', 'head'];
        const missingParts = requiredParts.filter(part => !this.currentBuild[part]);

        if (missingParts.length > 0) {
            errors.push(`MISSING PARTS: ${missingParts.join(', ').toUpperCase()}`);
        }

        if (errors.length === 0 && this.currentBuild.generator && this.currentBuild.legs) {
            // Check weight limit
            const totalWeight = parseInt(document.getElementById('totalWeight').textContent.replace(/,/g, ''));
            const loadLimit = this.currentBuild.legs.loadLimit;

            if (totalWeight > loadLimit) {
                errors.push(`OVERWEIGHT: ${totalWeight} / ${loadLimit} - BUILD CANNOT DEPLOY`);
            } else if (totalWeight > loadLimit * 0.9) {
                warnings.push(`NEAR WEIGHT LIMIT: ${totalWeight} / ${loadLimit}`);
            }

            // Check EN Output
            const enLoad = parseInt(document.getElementById('enLoad').textContent);
            const enOutput = this.currentBuild.generator.output;

            if (enLoad > enOutput) {
                errors.push(`INSUFFICIENT EN OUTPUT: ${enLoad} / ${enOutput} - POWER FAILURE`);
            } else if (enLoad > enOutput * 0.9) {
                warnings.push(`NEAR EN OUTPUT LIMIT: ${enLoad} / ${enOutput}`);
            }

            // Check expansion slots
            const core = this.currentBuild.core;
            if (core) {
                let equippedExpansions = 0;
                if (this.currentBuild.expansion1) equippedExpansions++;
                if (this.currentBuild.expansion2) equippedExpansions++;

                if (equippedExpansions > core.expSlots) {
                    errors.push(`TOO MANY EXPANSIONS: ${equippedExpansions} / ${core.expSlots} SLOTS`);
                }
            }
        }

        // Display validation status
        if (errors.length > 0) {
            status.className = 'validation-status validation-error';
            status.innerHTML = '<strong>⚠ BUILD ERRORS:</strong><br>' + errors.join('<br>');
        } else if (warnings.length > 0) {
            status.className = 'validation-status validation-warning';
            status.innerHTML = '<strong>⚡ WARNINGS:</strong><br>' + warnings.join('<br>');
        } else if (missingParts.length === 0) {
            status.className = 'validation-status validation-success';
            status.innerHTML = '<strong>✓ BUILD VALID - READY FOR DEPLOYMENT</strong>';
        } else {
            status.className = 'validation-status';
            status.innerHTML = '<strong>→ CONFIGURE YOUR AC</strong>';
        }
    }

    // Combat actions
    fireWeapon(slot) {
        const weapon = this.currentBuild[slot];
        if (!weapon || !weapon.ammo) return;

        const currentAmmo = this.currentBuild.weaponAmmo[slot] || weapon.ammo;
        if (currentAmmo <= 0) {
            alert('OUT OF AMMO! Reload required.');
            return;
        }

        this.currentBuild.weaponAmmo[slot] = currentAmmo - 1;
        this.updateWeapons();
        alert(`${weapon.name} fired! Dealing ${weapon.damage} damage.`);
    }

    reloadWeapon(slot) {
        const weapon = this.currentBuild[slot];
        if (!weapon || !weapon.ammo) return;

        this.currentBuild.weaponAmmo[slot] = weapon.ammo;
        this.updateWeapons();
        alert(`${weapon.name} reloaded!`);
    }

    fireEnergyWeapon(slot, enCost) {
        const weapon = this.currentBuild[slot];
        const gen = this.currentBuild.generator;
        if (!weapon || !gen) return;

        // Apply energy firearm spec bonus
        const bonusDamage = Math.floor(weapon.damage * (gen.eSpec / 100));
        const totalDamage = bonusDamage;

        if (this.currentBuild.currentEN < enCost) {
            alert('INSUFFICIENT ENERGY! Recharge required.');
            return;
        }

        this.currentBuild.currentEN -= enCost;
        this.updateENSystem();
        alert(`${weapon.name} fired! Dealing ${totalDamage} damage. EN consumed: ${enCost}`);
    }

    useMelee(slot) {
        const weapon = this.currentBuild[slot];
        if (!weapon) return;

        alert(`${weapon.name} attack! Dealing ${weapon.damage} damage.${weapon.chargedDamage ? ` (Charged: ${weapon.chargedDamage} damage)` : ''}`);
    }

    rechargeEN() {
        const gen = this.currentBuild.generator;
        if (!gen) return;

        this.currentBuild.currentEN = Math.min(this.currentBuild.currentEN + gen.recharge, gen.capacity);
        this.updateENSystem();
    }

    resetEN() {
        const gen = this.currentBuild.generator;
        if (!gen) return;

        this.currentBuild.currentEN = gen.capacity;
        this.updateENSystem();
    }

    // Save/Load
    saveBuild() {
        const buildData = {
            ...this.currentBuild,
            generator: this.currentBuild.generator?.id,
            fcs: this.currentBuild.fcs?.id,
            booster: this.currentBuild.booster?.id,
            legs: this.currentBuild.legs?.id,
            core: this.currentBuild.core?.id,
            rightArms: this.currentBuild.rightArms?.id,
            leftArms: this.currentBuild.leftArms?.id,
            head: this.currentBuild.head?.id,
            expansion1: this.currentBuild.expansion1?.id,
            expansion2: this.currentBuild.expansion2?.id,
            rightArm: this.currentBuild.rightArm?.id,
            leftArm: this.currentBuild.leftArm?.id,
            rightBack: this.currentBuild.rightBack?.id,
            leftBack: this.currentBuild.leftBack?.id
        };

        const json = JSON.stringify(buildData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentBuild.name || 'ac-build'}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    loadBuild() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const buildData = JSON.parse(event.target.result);
                    this.applyLoadedBuild(buildData);
                } catch (err) {
                    alert('Error loading build: ' + err.message);
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    applyLoadedBuild(buildData) {
        // Set AC name
        document.getElementById('acName').value = buildData.name || '';

        // Set all parts
        const parts = ['generator', 'fcs', 'booster', 'legs', 'core', 'rightArms', 'leftArms', 'head',
                       'expansion1', 'expansion2', 'rightArm', 'leftArm', 'rightBack', 'leftBack'];

        parts.forEach(part => {
            const select = document.getElementById(part);
            if (select && buildData[part]) {
                select.value = buildData[part];
                this.onPartChange(part, buildData[part]);
            }
        });

        // Restore combat state
        this.currentBuild.currentEN = buildData.currentEN || 0;
        this.currentBuild.currentHP = buildData.currentHP || 0;
        this.currentBuild.weaponAmmo = buildData.weaponAmmo || {};

        this.updateDisplay();
        alert('Build loaded successfully!');
    }

    newBuild() {
        if (confirm('Start a new build? Current progress will be lost.')) {
            location.reload();
        }
    }

    formatBonus(value) {
        return value >= 0 ? `+${value}` : `${value}`;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new MechBuilder();
});
