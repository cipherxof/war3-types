
const jassToTs = require('./node_modules/convertjasstots/dist/jassParser');
const parser = new jassToTs.JassParser();

async function genDefs() {
    await parser.main(['', '', "scripts/blizzard.j", "core/blizzard.d.ts"]);
    await parser.main(['', '', "scripts/common.j", "core/common.d.ts"]);
    await parser.main(['', '', "scripts/common.ai", "core/commonai.d.ts"]);
}

genDefs();