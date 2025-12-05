# AC6-TTRPG Mech Builder

An interactive mech builder and automated character sheet for the Armored Core 6 TTRPG conversion. Build your AC, track combat stats, and manage resources in real-time with a cyberpunk-themed interface.

![AC6 TTRPG Banner](https://img.shields.io/badge/ARMORED%20CORE%206-TTRPG-00ffff?style=for-the-badge)

## Features

### 🤖 Complete Mech Assembly
- **Generator**: Power plant selection with EN capacity, recharge, and output
- **FCS**: Fire control systems with range-based attack bonuses
- **Booster**: Movement and Quick Boost configuration
- **Legs**: 4 leg types (Bipedal, Reverse Joint, Tetrapod, Tank) with unique abilities
- **Core**: Torso with HP, expansion slots, and boost speeds
- **Arms**: Weapon handling bonuses (firearms, melee, recoil control)
- **Head**: Scanning systems and recovery bonuses
- **Weapons**: Full arsenal including handguns, rifles, shotguns, machine guns, bazookas, grenade launchers, missiles, and melee
- **Expansions**: Core expansions like Assault Armor, Terminal Armor, etc.

### 📊 Automated Character Sheet
- **Combat Statistics**: Real-time HP, AC (Armor Class), and Prone Resistance calculations
- **Energy System**: Live EN tracking with capacity, recharge rate, and consumption
- **Weight Management**: Total weight vs load limit validation
- **Mobility Stats**: Boost speed, Quick Boost distance/cost, Assault Boost, Flight speed
- **Targeting Systems**: Attack bonuses for close/medium/long range, missiles, firearms, and melee
- **Reconnaissance**: Scan range, duration, and system recovery stats

### ⚔️ Combat Tracking
- **Weapon Management**:
  - Ballistic weapons: Ammo tracking with fire/reload buttons
  - Energy weapons: EN cost tracking with E-Firearm Spec damage bonus
  - Melee weapons: Damage display with charge options
- **EN System**:
  - Recharge button (adds recharge value per turn)
  - Reset button (full refill)
  - Visual EN bar with percentage display
- **Expansion Abilities**: Track charges and activation for core expansions

### ✅ Build Validation
Real-time validation checks:
- **Weight Limit**: Ensures total weight doesn't exceed leg load limit
- **EN Output**: Verifies generator can power all equipped parts
- **Expansion Slots**: Checks you don't exceed core expansion capacity
- Color-coded status: ✓ Success (green), ⚡ Warning (yellow), ⚠ Error (red)

### 💾 Save/Load System
- **Export Builds**: Save AC builds as JSON files
- **Import Builds**: Load previously saved configurations
- **New Build**: Start fresh anytime

### 🎨 Cyberpunk/AC6 Aesthetic
- Neon cyan/magenta/yellow color scheme
- Grid background pattern
- Glowing text effects and borders
- Monospace military terminal font
- Hover animations and transitions

## How to Use

### Opening the Application
1. Open `index.html` in a web browser (Chrome, Firefox, Edge recommended)
2. No server required - runs entirely client-side

### Building Your AC
1. **Name Your AC**: Enter a designation in the "AC NAME" field
2. **Select Parts**: Use dropdown menus to choose parts for each slot
   - Parts show detailed stats when selected
   - Stats automatically update on the character sheet
3. **Equip Weapons**: Choose weapons for R-ARM, L-ARM, R-BACK, L-BACK slots
4. **Add Expansions**: Select up to 2 core expansions (based on core slots)
5. **Monitor Validation**: Check the status box for any errors or warnings

### Combat Usage
1. **Energy Management**:
   - Click "RECHARGE" to restore EN (adds recharge value)
   - Click "RESET" to fully refill EN
   - EN drains automatically when firing energy weapons

2. **Weapon Actions**:
   - **FIRE**: Reduces ammo or EN, displays damage dealt
   - **RELOAD**: Restores weapon to max ammo
   - **ATTACK**: For melee weapons, shows damage output

3. **Tracking**: All ammo and EN updates in real-time

### Saving & Loading
- **SAVE BUILD**: Downloads AC configuration as `.json` file
- **LOAD BUILD**: Upload a previously saved `.json` file
- **NEW BUILD**: Resets all selections to start over

## Data Source

All parts and stats are extracted from `AC6_PARTS_MASTER_FINAL.pdf`, including:
- 14 Generators
- 10 FCS Systems
- 12 Boosters
- 27 Leg variants (4 types)
- 16 Cores
- 18 Arm types
- 22 Heads
- 4 Expansion types
- 50+ Weapons across 10 categories

## Technical Details

### Files
- `index.html`: Main application structure
- `styles.css`: Cyberpunk-themed styling
- `data.js`: Complete parts database from PDF
- `app.js`: Application logic and calculations

### Browser Compatibility
- Modern browsers with ES6 support
- Tested on Chrome 90+, Firefox 88+, Edge 90+

### No Dependencies
- Pure vanilla JavaScript
- No frameworks or libraries required
- No build process needed

## Game Mechanics

### Energy System
- **EN Capacity**: Total battery (2200-8800)
- **EN Recharge**: Recovery per turn (476-952)
- **EN Output**: Must exceed total EN Load or build fails
- **E-Firearm Spec**: Damage multiplier for energy weapons (101%-145%)

### Weight System
- Total weight from all parts must be ≤ leg Load Limit
- Overweight builds cannot deploy

### Attack Bonuses
- FCS provides range bonuses (close: 0-300ft, medium: 300-800ft, long: 800-1500ft)
- Arms provide weapon type bonuses (firearms, melee, recoil control)
- Bonuses stack (FCS + Arms = total attack modifier)

### Movement
- **Boost Speed**: Standard movement per turn
- **Quick Boost**: Instant dodge (costs EN, can be used as reaction for +4 AC)
- **Assault Boost**: Ground rocket dash speed
- **Flight Speed**: Sustained aerial movement

## Credits

**AC6 TTRPG Conversion**: Based on Armored Core 6 mechanics adapted to 5e-style TTRPG rules

**Mech Builder**: Interactive web application for build planning and character sheet automation

## License

For tabletop gaming use. Armored Core 6 is property of FromSoftware/Bandai Namco.
