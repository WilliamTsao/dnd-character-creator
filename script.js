const raceCnToEn = {
  '人类': 'human',
  '精灵': 'elf',
  '矮人': 'dwarf',
  '侏儒': 'gnome',
  '兽人': 'orc',
  '赫利凡': 'archdevil'
};

const occupationCnToEn = {
  '战士': 'fighter',
  '游侠': 'ranger',
  '盗贼': 'rogue',
  '牧师': 'cleric',
  '圣骑士': 'paladin',
  '法师': 'wizard',
  '术士': 'sorcerer',
  '德鲁伊': 'druid',
  '武僧': 'monk',
  '野蛮人': 'barbarian',
  '吟游诗人': 'bard',
}

const occupationEnToCn = {};
Object.keys(occupationCnToEn).forEach((key) => {
  occupationEnToCn[occupationCnToEn[key]] = key;
});

const deityMetadata = {
  aurora: {
    title: '黎明与光明之神',
    name: '欧若拉',
    race: '瑟拉菲（天使）',
    authority: '黎明与曙光',
    team: ['守序', '善良'],
    weapon: ['权杖', '圣徽']
  },
  freya: {
    title: '生命与繁育之神',
    name: '芙蕾雅',
    race: '人类',
    authority: '生命与繁育',
    team: ['守序', '善良'],
    weapon: ['权杖', '圣杯']
  },
  aelius: {
    title: '荣耀与牺牲之神',
    name: '雅琉斯',
    race: '矮人',
    authority: '荣耀与牺牲',
    team: ['守序', '善良'],
    weapon: ['单手锤', '单手盾']
  },
  visnut: {
    title: '保护与坚韧之神',
    name: '维斯努特',
    race: '矮人',
    authority: '保护与坚韧',
    team: ['中立', '善良'],
    weapon: ['塔盾'],
  },
  adoko: {
    title: '动物与植物之神',
    name: '阿多柯',
    race: '树',
    authority: '动物与植物',
    team: ['中立', '善良'],
    weapon: ['无'],
  },
  rodari: {
    title: '勇敢与善良之神',
    name: '洛达里',
    race: '矮人',
    authority: '勇敢与善良',
    team: ['混乱', '善良'],
    weapon: ['双手剑'],
  },
  nisedomi: {
    title: '人类之神',
    name: '尼塞多米',
    race: '人类',
    authority: '人类物种本身',
    team: ['守序', '中立'],
    weapon: ['无'],
  },
  asuysis: {
    title: '精灵之神',
    name: '阿苏伊丙斯',
    race: '精灵',
    authority: '精灵物种本身',
    team: ['守序', '中立'],
    weapon: ['手链'],
  },
  hephaestus: {
    title: '工匠与技艺之神',
    name: '赫怀托姆',
    race: '矮人',
    authority: '工匠与技艺',
    team: ['守序', '中立'],
    weapon: ['单手锤'],
  },
  cornell: {
    title: '公正与律法之神',
    name: '康奈尔',
    race: '人类',
    authority: '公正与律法',
    team: ['守序', '中立'],
    weapon: ['无'],
  },
  uffi: {
    title: '火神',
    name: '乌菲',
    race: '巨人',
    authority: '火焰元素',
    team: ['绝对', '中立'],
    weapon: ['无'],
  },
  hale: {
    title: '山丘与岩石之神',
    name: '希尔',
    race: '矮人',
    authority: '山丘与岩石',
    team: ['绝对', '中立'],
    weapon: ['双手锤'],
  },
  terros: {
    title: '潮汐与河流之神',
    name: '忒柔丝',
    race: '涅瑞斯（人鱼）',
    authority: '潮汐与河流',
    team: ['绝对', '中立'],
    weapon: ['三叉戟'],
  },
  cole: {
    title: '知识之神',
    name: '科尔',
    race: '人类',
    authority: '知识',
    team: ['绝对', '中立'],
    weapon: ['法典'],
  },
  tudis: {
    title: '荒野之神',
    name: '犹图迪斯',
    race: '狼',
    authority: '荒野',
    team: ['绝对', '中立'],
    weapon: ['无'],
  },
  yashli: {
    title: '幸运女神',
    name: '雅诗丽',
    race: '人类',
    authority: '幸运',
    team: ['绝对', '中立'],
    weapon: ['硬币'],
  },
  leo: {
    title: '风暴与雷霆之神',
    name: '列奥尼特',
    race: '风暴巨人',
    authority: '风暴与雷霆',
    team: ['混乱', '中立'],
    weapon: ['一道缠绕着狂风的闪电'],
  },
  rofi: {
    title: '音律与颂歌之神',
    name: '罗菲',
    race: '精灵',
    authority: '音律与颂歌',
    team: ['混乱', '中立'],
    weapon: ['鲁特琴'],
  },
  panchu: {
    title: '旅行与逸闻之神',
    name: '潘丘',
    race: '半人马',
    authority: '音律与颂歌',
    team: ['混乱', '中立'],
    weapon: ['无'],
  },
  demo: {
    title: '力量与破坏之神',
    name: '德墨',
    race: '兽人',
    authority: '力量与破坏',
    team: ['混乱', '中立'],
    weapon: ['无'],
  }
}

const occupationsMetadata = {
  fighter: {
    description: ['战士往往水平参差不齐，也担任着各种各样的工作。身经百战严阵以待的军人是战士。运筹帷幄决胜千里的指挥官也是战士。阴险狡诈的雇佣兵赏金猎人也可能是一名战士。总之，拿着最趁手的武器，全副武装的盔甲是战士们吃饭的家伙。', '因为他们没有魔法，在战斗中不断的训练身体素质和汲取经验和战斗技巧让他们成为了武器大师或者防具专家以及身怀绝技的职业。'],
    branches: [
      {
        name: '盾战士',
        value: '盾',
        description: '身穿板甲，手持塔盾，如钢铁壁垒股为队友承受伤害。虽行动迟缓，却能为后方提供无与伦比的安全保障。',
        attributes: `
          <b>身经百战：</b>战士分别在 1/4/8/12/16/20级时获得 3/6/9/12/15/18点额外生命值<br/>
          <b>武器训练：</b>战士选择1项武器，该武器获得命中+1、伤害+1效果
        `
      },
      {
        name: '剑战士',
        value: '剑',
        description: '身着中型盔甲，挥舞双手大剑或双刃，以凌厉攻势给予敌人致命打击，追求极致的杀伤力。',
        attributes: `
          <b>身经百战：</b>战士分别在 1/4/8/12/16/20级时获得 3/6/9/12/15/18点额外生命值<br/>
          <b>武器训练：</b>战士选择1项武器，该武器获得命中+1、伤害+1效果
        `
      },
      {
        name: '盾剑战士',
        value: '盾剑',
        description: '平衡攻守，单手盾牌与武器并用，防御不逊于纯盾战士，同时保留灵活的战斗能力。',
        attributes: `
          <b>身经百战：</b>战士分别在 1/4/8/12/16/20级时获得 3/6/9/12/15/18点额外生命值<br/>
          <b>武器训练：</b>战士选择1项武器，该武器获得命中+1、伤害+1效果
        `
      }
    ],
    basics: [
      {key: "主属性", value: "力量、敏捷/体质"},
      {key: "阵营", value: "任何阵营"},
      {key: "初始生命", value: "10+自身体质调整值"},
      {key: "生命成长", value: "5+自身体质调整值", intValue: 5},
      {key: "擅长武器", value: "所有武器除特武器（巨武器、异形武器）"},
      {key: "擅长装备", value: "所有装备"},
      {key: "初始金币", value: "3d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "自选三项", selectableCount: 3},
      {key: "交涉类", value: "自选两项", selectableCount: 2},
      {key: "隐匿类", value: "自选一项", selectableCount: 1},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "自选三项", selectableCount: 3},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "自选三项", selectableCount: 3},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "1+智力调整值"},
    ]
  },
  ranger: {
    description: ['游侠是灵活的身躯，敏捷的身手，使用百发百中的弓箭……也可以是致命的攻击、定点的炮台，令人闻风丧胆的弩箭。人们总是很难分清猎人、斥候、追踪者或是刺客的差别。但众所周知游侠们都擅长使用弓箭瞄准敌人的眉心，或者装填好弩箭蓄势待发准备给对手残暴的一击。', '总之他们会用精湛的身法和行云如水的动作给予敌人一场噩梦般的重创。'],
    branches: [
      {
        name: '弓箭手',
        value: '弓',
        description: '穿梭于战场中的灵动射手，凭借移动攻击和多重射击的特性，兼具卓越的机动性与稳定的输出能力。',
        attributes: `
          <b>迅捷步伐：</b>游侠移动速度+1.5m<br/>
          <b>精通弓箭：</b>持弓时攻击命中+2、伤害+2<br/>
          <b>特殊箭矢：</b>游侠可以在特殊箭矢中选择一种获得其制作方法，每小时可以制作一支，最多6h/天
        `
      },
      {
        name: '弩手',
        value: '弩',
        description: '高爆发的定点炮台，对同一目标攻击时可叠加伤害，但受限于弩机装填机制，输出稳定性较差。',
        attributes: `
          <b>迅捷步伐：</b>游侠移动速度+1.5m<br/>
          <b>精通弩箭：</b>持弩时攻击命中+2、伤害+2<br/>
          <b>特殊箭矢：</b>游侠可以在特殊箭矢中选择一种获得其制作方法，每小时可以制作一支，最多6h/天
        `
      },
    ],
    basics: [
      {key: "主属性", value: "敏捷"},
      {key: "阵营", value: "任何阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "弓/弩/匕首/单手剑/单手刀"},
      {key: "擅长装备", value: "皮甲"},
      {key: "初始金币", value: "4d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "自选三项", selectableCount: 3},
      {key: "交涉类", value: "自选两项", selectableCount: 2},
      {key: "隐匿类", value: "自选两项", selectableCount: 2},
      {key: "一般类", value: "自选三项", selectableCount: 3},
      {key: "生存类", value: "自选三项", selectableCount: 3},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "自然、地理、自选两项", selectableCount: 2, selected: ['自然', '地理']},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "3+智力调整值"},
    ]
  },
  rogue: {
    description: ['盗贼凭借着狡猾的头脑、精湛的手艺和蛊惑人心的话术，不安分的盗贼总会竭尽所能搞个“大新闻”，他们隐匿在文明发达、人口密集的城镇中，常常化身小偷、赌徒、骗子、中间人、调查员或杂耍艺人”，待获取到有价值的情报后，盗贼们才会展示出自己隐秘的真本事。', '也许盗贼不擅正面接战，但谁能保证在被废弃的遗迹中冒险时，你不会遇到找不到钥匙的门、打不开的宝箱和危机重重的机关呢？'],
    branches: [
      {
        name: '流血刺杀',
        value: '流血',
        description: '精于致命要害打击的艺术大师，武器精准命中敌人体内脆弱之处，使目标陷入持续失血的痛苦状态。',
        restrictions: {
          team: ["中立善良", "绝对中立", "混乱善良", "混乱中立"]
        },
        attributes: `
          <b>战术背帶：</b>身上带有一个常用的战术背带具有两个装备空槽，可以放置两个灵巧类武器。战斗中可以使用次要动作切换该武器<br/>
          <b>刺杀：</b>进行优势攻击时（背击、隐身攻击等），额外造成1d4物理伤害<br/>
          <b>灵巧：</b>获得额外3m移动速度和闪避+1
        `
      },
      {
        name: '剧毒刺杀',
        value: '剧毒',
        description: '精通各类致命毒素的调配专家，将毒药完美涂抹于武器之上，享受猎物在毒素侵蚀下面容扭曲的瞬间。',
        restrictions: {
          team: ["中立善良", "绝对中立", "混乱善良", "混乱中立"]
        },
        attributes: `
          <b>战术背帶：</b>身上带有一个常用的战术背带具有两个装备空槽，可以放置两个灵巧类武器。战斗中可以使用次要动作切换该武器<br/>
          <b>刺杀：</b>进行优势攻击时（背击、隐身攻击等），额外造成1d4物理伤害<br/>
          <b>灵巧：</b>获得额外3m移动速度和闪避+1
        `
      },
    ],
    basics: [
      {key: "主属性", value: "敏捷"},
      {key: "阵营", value: "非守序阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "轻弩/匕首/刺剑"},
      {key: "擅长装备", value: "皮甲/僧袍"},
      {key: "初始金币", value: "6d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "自选三项", selectableCount: 3},
      {key: "交涉类", value: "哄骗", selectableCount: 0, selected: ['哄骗']},
      {key: "隐匿类", value: "所有隐匿类", selectableCount: 0, selected: ['*']},
      {key: "一般类", value: "所有一般类", selectableCount: 0, selected: ['*']},
      {key: "生存类", value: "所有生存类", selectableCount: 0, selected: ['*']},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "地理、地下城、自选一项", selectableCount: 1, selected: ['地理', '地下城']},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "5+智力调整值"},
    ]
  },
  cleric: {
    description: ['牧师是神灵虔诚的侍从，他们宣讲神迹和教义，为迷茫者洗涤心灵寻找方向，为信众提供精神慰藉。这些献身于信仰的圣职者将他们神祇的尊名传遍八方。牧师的能力源于自己对神祇虔诚的信仰，有的牧师是刚猛的战士擅长正面作战，有的牧师是经验丰富的指挥官擅长提振盟友士气，有的牧师是睿智的施法者擅长释放神术打击敌人，有的牧师则是怜悯的医者擅长通过神术治疗它人……', '总的来说，由于神灵的权柄和领域不同，牧师的战斗方式和释放的神术也千差万别，但是他们在信仰与神迹的引领下，都背负着伟大的使命。'],
    branches: [
      {
        name: '生命领域',
        value: '生命',
        description: '信仰生命之神芙蕾雅',
        restrictions: {
          faith: 'freya',
          team: ["守序善良", "中立善良", "混乱善良"]
        },
        attributes: [`
          <b>生命祷言：</b>触摸目标恢复1/2等级d4+感知的生命值，每天可以使用感知调整值次数<br/>
          <b>阴影驱散：</b>每三个模组可以消除一个死亡阴影<br/>
          <b>引导生命：</b>对6m内的亡灵生物造成1/2等级d4+感知的生命系神术伤害<br/>
        `,`
          <b>治疗：</b>使用一个主要动作，6米范围内1个目标治疗1/2等级d8+感知调整值+生命系神术加值
        `
        ]
      },
      {
        name: '黎明领域',
        value: '黎明',
        description: '信仰黎明之神欧若拉',
        restrictions: {
          faith: 'aurora',
          team: ["守序善良", "守序中立", "中立善良", "混乱善良"]
        },
        attributes: [`
          <b>黎明打击：</b>次要动作将黎明和曙光的力量照耀在自己的武器上，并额外造成1/2等级d4点光明神术伤害，每天可以使用感知调整值次数<br/>
          <b>光明洗礼：</b>每个模组则增加一个成功死亡阴影<br/>
          <b>引导光明能量：</b>对6m内的黑暗生物造成1/2等级d6的光明伤害
        `,`
          <b>拂晓之光：</b>次要动作向天空引导一道黎明光辉，4回合后照耀到6m内的一个目标回复1/2等级d6+光明治疗加值的生命
        `]
      },
      {
        name: '风暴领域',
        value: '风暴',
        description: '信仰风暴与雷霆之神列奥尼特',
        restrictions: {
          faith: 'leo',
          team: ["中立善良", "绝对中立", "混乱中立", "守序中立"]
        },
        attributes: [`
          <b>雷电火花：</b>跟随动作开启后每攻击命中的第三次会对自身周围3m内的一个目标劈下一道雷电，造成感知调整值的雷霆伤害，每天最多触发感知调整值次数<br/>
          <b>引导雷霆：</b>主要动作将雷霆之力引导至6米范围内的目标身上，使目标身上带电荷，带电荷的目标受到雷霆伤害会承受额外1/2等级d4的雷霆伤害。每天3次<br/>
          <b>雷霆回复：</b>自身收到雷电伤害后将1/2的伤害转化为回复
        `,`
          <b>狂风之怒：</b>12m内的单体目标造成1/2等级d4+感知调整值的暴风神术伤害
        `]
      },
      {
        name: '山丘领域',
        value: '山丘',
        description: '信仰山丘与岩石之神希尔',
        restrictions: {
          faith: 'hale',
          team: ["中立善良", "绝对中立", "混乱中立", "守序中立"]
        },
        attributes: [`
          <b>大地祷言：</b>次要动作释放，或攻击地面。使6m内1格地面生长出0.2m×等级的石柱，每天可以使用感知调整值的次数<br/>
          <b>碎岩能量：</b>对6m内的岩石制品释放，使石制物品碎裂，每天感知调整值次数<br/>
          <b>屹立大地：</b>面对冲撞、摔绊时获得等级的豁免加值
        `,`
          <b>碎岩弹射：</b>主要动作，弹射一颗岩石，对6m内的目标造成1/2等级d6+感知的岩石神术伤害。并使目标下一回合移动速度-3m
        `]
      },
      {
        name: '潮汐领域',
        value: '潮汐',
        description: '信仰潮汐与河流之神忒柔丝',
        restrictions: {
          faith: 'terros',
          team: ["中立善良", "绝对中立", "混乱中立", "守序中立"]
        },
        attributes: [`
          <b>甘露赐福：</b>次要动作，将潮汐之神的赐福锁定在6m内的一名有方目标身上，每天可以切换感知调整值次数。5级成长为3名目标、9级成长为6名目标<br/>
          <b>引导潮汐：</b>次要动作，对6m内目标引导潮汐能量，便其受到的潮汐领域神术持续回合+1，叠加回合数最多不超过自身等级<br/>
          <b>波澜起伏：</b>潮汐牧师对同一目标释放的每第三神术或对同一目标释放的单一神术每第三个回合额外增加等级的效果增强
        `,`
          <b>极速水流：</b>引导潮汐神术对6米内的目标造成1/2等级d6+感知调整值的神术伤害。如果目标为锁定的赐福目标，则回复目标1/2等级d6+感知调整值的生命
        `]
      },
      {
        name: '烈火领域',
        value: '烈火',
        description: '信仰火焰之神乌菲',
        restrictions: {
          faith: 'uffi',
          team: ["中立善良", "绝对中立", "混乱中立", "守序中立"]
        },
        attributes: [`
          <b>炎热侵蚀：</b>烈火牧师可以消耗1个次要动作，对目标施加炎热印记，每个炎热印记额外造成烈火牧师感知调整值火焰伤害，每日可使用感知调整值次数<br/>
          <b>神术火焰：</b>烈火牧师在释放某些神术时会创造一种火焰，被称为神术火焰，神术火焰会对接触的目标造成感知调整值的伤害，同一位置的神术火焰在持续时间内的伤害可以叠加为单次伤害<br/>
          <b>烈火凝聚：</b>烈火牧师的双手被烘焰缠绕，使其擅长徒手攻击，在徒手攻击时附带感知调整值火焰神术伤害，并且获得3×等级火焰抗性
        `,`
          <b>烈焰抱摔：</b>主要动作，烈火牧师将面对目标抱摔至身后，并对其造成2d6摔落伤害，目标进行平衡豁免，失败则倒地
        `]
      },
      {
        name: '工匠领域',
        value: '工匠',
        description: '信仰工匠之神赫怀托姆',
        restrictions: {
          faith: 'hephaestus',
          team: ["守序善良", "中立善良", "绝对中立", "混乱中立", "守序中立"]
        },
        attributes: [`
          <b>战争工艺：</b>锻造一个自由打造的神赐武器或防具，此装备会根据等级而成长，初始锻造加减值不超过4，每三个等级，武器加值+1，每跨越一个阶级，上限增加一倍，锻造骰不变<br/>
          <b>工匠基础：</b>获得入门工匠知识。在锻造、石塑、木艺中选择一个作为初始的职业能力<br/>
          <b>拆除能量：</b>对6m内的一个不高于自己位阶的人造物引导能量，有概率将目标直接拆除
        `,`
          <b>武器开锋：</b>主要动作使一把武器增加1/3感知调整值的伤害加值。神赐武器次要动作增加为1/2感知调整值的伤害加值。持续1d4回合
        `]
      },
      {
        name: '知识领域',
        value: '知识',
        description: '信仰知识与写作之神科尔',
        restrictions: {
          faith: 'cole',
          team: ["中立善良", "混乱善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: [`
          <b>知识祷言：</b>次要动作可以读取目标的智力，当知识牧师对该目标施放神术/法术时额外造成智力差值的伤害，每天可以使用感知调整值次数<br/>
          <b>学识积累：</b>在进行知识判定时+2加值，对每个目标可以连续鉴定两次知识鉴定<br/>
          <b>知识能量：</b>引导知识能量对6m内智力调整值为负的目标造成1/2等级d6的精神伤害
        `,`
          <b>知识贯通：</b>可以模仿释放12m内任意目标前一回合的法术/神术，但伤害只能模仿弱化版，并增加感知调整值
        `]
      },
      {
        name: '力量领域',
        value: '力量',
        description: '信仰力量与破坏之神德墨',
        restrictions: {
          faith: 'demo',
          team: ["混乱善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: [`
          <b>力量献祭：</b>次要动作/主要动作，将任意一项其他六维属性基本值10以上的额外部分短暂的增加到力量基本值上，此力量临时值可以突破位阶的限制，持续1d4回合。每天可以使用感知调整值的次数<br/>
          <b>体力兼备：</b>力量牧师的生命成长修订为1/2力量调整值（最低值为4，低于4时取4）＋体质调整值<br/>
          <b>负重训练：</b>自身负重极限为力量基本值＋体质基本值kg
        `,`
          <b>沉痛之拳：</b>力量牧师主要动作蓄力1回合，在第二回合将重拳击打至目标，造成3×力量调整值的物理伤害
        `]
      },
      {
        name: '保护领域',
        value: '保护',
        description: '信仰保护与牺牲之神雅琉斯',
        restrictions: {
          faith: 'aelius',
          team: ["守序善良", "中立善良", "混乱善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: [`
          <b>保护能量：</b>每天拥有等级*感知调整值的可施放护看量，该护盾可以抵挡物理伤害或魔法伤害。主要动作对3m内的目标施放，可以自由分配每次施放的护盾量，也可以使用主要动作收回保护能量。每天可以使用感知调整值的次数。（保护能量可以对负血目标施放，释放后可以吸收生命流逝的伤害）<br/>
          <b>护盾裂解：</b>对6m内的护盾造成等级d8的神术伤害<br/>
          <b>护盾共鸣：</b>对拥有护盾的目标施放神术时，施法速度+1
        `,`
          <b>守护之光：</b>主要动作，对9m内的目标释放获得1/2等级d6+感知调整值的护盾。1d4回合后如果护盾依然存在，则为目标恢复现有护盾量的生命（当守护之光与其他护盾同时作用一个目标时，该目标受到伤害时最后结算守护之光的护盾）
        `]
      },
    ],
    basics: [
      {key: "主属性", value: "感知"},
      {key: "阵营", value: "牧师所选领域决定阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "神明所擅长武器/盾牌/圣徽"},
      {key: "擅长装备", value: "布甲/皮甲/鳞甲/锁子甲"},
      {key: "初始金币", value: "3d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "无", selectableCount: 0},
      {key: "交涉类", value: "自选一项", selectableCount: 1},
      {key: "隐匿类", value: "无", selectableCount: 0},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "急救", selectableCount: 0, selected: ['急救']},
      {key: "学习类", value: "自选一项", selectableCount: 1},
      {key: "知识类", value: "宗教、神秘、历史、位面自选两项", selectableCount: 2, selected: ['宗教', '神秘', '历史', '位面']},
      {key: "表演类", value: "演唱", selectableCount: 0, selected: ['演唱']},
      {key: "升级熟练点", value: "2+智力调整值"},
    ]
  },
  paladin: {
    description: ['圣骑士是秩序和善良的守护者、是混乱和邪恶的制裁者、是伤痛和诅咒的净化者。', '他们有着高贵的灵魂和伟大的理想，他们遵守、践行和守护自己的神圣誓言，用利剑和生命与邪恶进行着不懈的斗争。在残酷和混乱的世界中，圣骑士就像一座灯塔，为迷途的盟友们照亮前程。', '圣骑士需要遵守、践行和守护自己的神圣誓言，誓言会赋予圣骑士强大的力量，但也会约束立誓者的一言一行。一旦违背誓言和承诺，圣骑士将丧失一切联业能力和职业天賦'],
    branches: [
      {
        name: '守护圣骑士',
        value: '守护',
        description: '守护圣骑士是六边形前排职业中被圣光所庇护的坚固堡垒',
        restrictions: {
          team: ["守序善良"]
        },
        attributes: `
          <b>格挡：</b>在装备盾牌时，获得5%的盾牌格挡机率<br/>
          <b>挑衅：</b>使用次要动作，对6m内一个敌人进行喇讽勇气光环：圣骑士获得自身等级的神圣护盾
        `
      },
      {
        name: '裁决圣骑士',
        value: '裁决',
        description: '裁决圣骑士是拥有强大的圣光打击裁决能力，邪恶生物痛恨而又恐惧的制裁者',
        restrictions: {
          team: ["守序善良"]
        },
        attributes: `
          <b>双手武器精通：</b>圣骑士使用双手剑/锤时，命中+2、伤害+2<br/>
          <b>正义光环：</b>圣骑士每次攻击额外造成自身等级的神圣伤害
        `
      },
      {
        name: '圣光圣骑士',
        value: '圣光',
        description: '圣光圣骑士既拥有一定的战斗面板又能通过圣光治愈受伤的友方单位',
        restrictions: {
          team: ["守序善良"]
        },
        attributes: `
          <b>战斗施法：</b>施法打断豁免+4<br/>
          <b>圣愈光环：</b>圣骑士在战斗中每回合不占用任何动作对6m内的一个其他目标施法，默认为施法中。法术效果为目标恢复自身等级+感知调整的生命。（该施法可以被施法中打断）<br/>
          <b>圣疗：</b>触碰目标，恢复1/2等级d6+感知调整值的生命，可恢复负向生命。在1/5/9/13/17级时可以使用3/4/5/6次
        `
      },
    ],
    basics: [
      {key: "主属性", value: "魅力、力量、感知"},
      {key: "阵营", value: "守序善良"},
      {key: "初始生命", value: "12+自身体质调整值"},
      {key: "生命成长", value: "6+自身体质调整值", intValue: 6},
      {key: "擅长武器", value: "所有常见武器/军备武器"},
      {key: "擅长装备", value: "布甲/皮甲/轻甲/中甲/重甲 擅长所有正常渠道、非邪恶获得武器装备（武器限定常见武器和军备武器）"},
      {key: "初始金币", value: "6d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "自选三项", selectableCount: 3},
      {key: "交涉类", value: "除哄骗外自选两项", selectableCount: 2, exclude: ['哄骗']},
      {key: "隐匿类", value: "无", selectableCount: 0},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "自选两项", selectableCount: 2},
      {key: "学习类", value: "自选一项", selectableCount: 1},
      {key: "知识类", value: "贵族、宗教、自选三项", selectableCount: 3, selected: ['贵族', '宗教']},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "4+智力调整值"},
    ]
  },
  wizard: {
    description: ['法师对平凡世界背后隐藏的秘密和古老神秘的典籍充满了兴趣，他们是手不释卷的学者、醉心研究的发明名家、实力强大的施法者。大多数法师会在取得成就后回归混沌塔进修或者加入一方势力成为贵族身边睿智的顾问，但也有一些渴望力量的野心家为了达成目的会组建属于自己的势力。', '当然，大部分精明的法师都会像守财奴般探索、搜刮、囤积一切神秘的知识，以创造凡人根本无法企及的奇迹。法师不仅能用法术给予敌人重创，还可以通过魔法来增强盟友的实力，甚至能够随心所欲地改造世界。'],
    branches: [{
        name: '塑能学派',
        value: '塑能',
        description: '擅长造成元素魔法伤害',
        attributes: `
          <b>巩固学习：</b>当法师进行一次天赋选择时可以放弃选择，从而在上一个职业天赋中再次选择一个<br/>
          <b>魔法飞弹：</b>主要动作，对6m内目标造成智力调整值伤害，每日智力调整值使用次数
        `
      },
      {
        name: '防护学派',
        value: '防护',
        description: '擅长防护魔法',
        attributes: `
          <b>巩固学习：</b>当法师进行一次天赋选择时可以放弃选择，从而在上一个职业天赋中再次选择一个<br/>
          <b>魔法护甲：</b>次要动作，对1.5m内目标增加智力调整值双抗，被攻击后消失，持续1回合，每日智力调整值使用次数
        `
      },
      {
        name: '变化学派',
        value: '变化',
        description: '擅长千变万化八面玲珑',
        attributes: `
          <b>巩固学习：</b>当法师进行一次天赋选择时可以放弃选择，从而在上一个职业天赋中再次选择一个<br/>
          <b>魔法易形：</b>主要动作，可以幻化成常见的生物/物品样貌，但容易被识破，每日智力调整值使用次数
        `
      },
      {
        name: '咒法学派',
        value: '咒法',
        description: '擅长召唤魔法物尽其用',
        attributes: `
          <b>巩固学习：</b>当法师进行一次天赋选择时可以放弃选择，从而在上一个职业天赋中再次选择一个<br/>
          <b>魔法灌注：</b>次要动作，对1.5m内武器附魔，该武器下一次命中时额外造成智力调整值伤害，每日智力调整值使用次数
        `
      },
    ],
    basics: [
      {key: "主属性", value: "智力"},
      {key: "阵营", value: "任何阵营"},
      {key: "初始生命", value: "6+自身体质调整值"},
      {key: "生命成长", value: "3+自身体质调整值", intValue: 3},
      {key: "擅长武器", value: "魔杖/法杖/法珠/匕首"},
      {key: "擅长装备", value: "布甲"},
      {key: "初始金币", value: "4d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "无", selectableCount: 0},
      {key: "交涉类", value: "自选一项", selectableCount: 1},
      {key: "隐匿类", value: "无", selectableCount: 0},
      {key: "一般类", value: "自选一项", selectableCount: 1},
      {key: "生存类", value: "无", selectableCount: 0},
      {key: "学习类", value: "自选两项", selectableCount: 2},
      {key: "知识类", value: "已知所有知识", selectableCount: 0, selected: ['*']},
      {key: "表演类", value: "无", selectableCount: 0},
      {key: "升级熟练点", value: "5+智力调整值"},
    ]
  },
  sorcerer: {
    description: ['与法师不同，术士是天生的施法者，法师们渴求探索魔法以及宇宙万物的真谛，而术士则视魔法为艺术，而非科学。', '据说他们强大的魔法能量源自自身体内古老的血脉，一名合格的术士需要经得住时间的考验，岁月的打磨，才能激发出自身那股即狂野又纯粹的能量。术士是擅长频繁施法的战斗施法者，不同的血脉会带给术士不同的力量。'],
    branches: [
      {
        name: '巨龙术士',
        value: '巨龙',
        description: '血液中的巨龙血脉播下了一颗智慧的种子。当种子发芽时，术士体内便会形成特殊的魔法油囊，喷吐出滔天烈焰。随后，龙足、龙爪与双翼相继显现……他们既是睿智的施法者，又是可毁灭一切的主宰。',
        restrictions: {
          team: ["守序善良", "中立善良", "混乱善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: `
          <b>升环施法：</b>术士的法术不分环位，术士可以用任意一个法术环位释放法术，根据施放的法术环位增强法术效果</br>
          <b>巨龙龙焰：</b>对3m内直线造成1/2等级d8龙焰伤害，需要经过3回合的调整才可以再次使用
        `
      },
      {
        name: '比蒙术士',
        value: '比蒙',
        description: '源自远古陆地强者的比蒙血脉，赋予了比蒙术士锋利的尖牙与利爪。对他们而言，最致命的武器便是自己的双手。他们是追求一击毙命的死亡缔造者。',
        restrictions: {
          team: ["混乱善良", "混乱中立"]
        },
        attributes: `
          <b>升环施法：</b>术士的法术不分环位，术士可以用任意一个法术环位释放法术，根据施放的法术环位增强法术效果</br>
          <b>比蒙利爪：</b>单手化身为利爪，可以造成1/2等级d6的物理伤害
        `
      },
      {
        name: '泰坦术士',
        value: '泰坦',
        description: '坚毅如山的泰坦血脉被唤醒后，他们便如先祖一般，拥有顶天立地的巨大体型与钢筋铁骨。他们是巨而有力的移动堡垒，是坚不可摧的战斗要塞。',
        restrictions: {
          team: ["中立善良", "混乱善良", "绝对中立", "混乱中立"]
        },
        attributes: `
          <b>升环施法：</b>术士的法术不分环位，术士可以用任意一个法术环位释放法术，根据施放的法术环位增强法术效果</br>
          <b>泰坦身躯：</b>每次升级可以额外增加1d6生命值
        `
      },
      {
        name: '天界术士',
        value: '天界',
        description: '他们像天使一样是人类的守护者，只因为他们身体中流淌着来自天界的血脉。与牧师不同的是，他们并非信仰某一位神明，而是来自天界的圣洁与善良。',
        restrictions: {
          team: ["守序善良", "中立善良"]
        },
        attributes: `
          <b>升环施法：</b>术士的法术不分环位，术士可以用任意一个法术环位释放法术，根据施放的法术环位增强法术效果</br>
          <b>天界疗愈：</b>为4.5m内的目标恢复1/2等级d8的生命，可回复负向生命，1/5/9级，每天1/2/3次</br>
          <b>天界审判：</b>为4.5m内目标额外增加1/2等级d8的天界伤害，每天一次
        `
      },
    ],
    basics: [
      {key: "主属性", value: "力量/智力/感知/魅力"},
      {key: "阵营", value: "比蒙（混乱）巨龙（所有）泰坦（非守序）天界（非混乱、善良）"},
      {key: "初始生命", value: "6+自身体质调整值"},
      {key: "生命成长", value: "3+自身体质调整值", intValue: 3},
      {key: "擅长武器", value: "魔杖/法杖/法珠/部分自身变化武器"},
      {key: "擅长装备", value: "法袍/皮甲"},
      {key: "初始金币", value: "3d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "无", selectableCount: 0},
      {key: "交涉类", value: "自选一项", selectableCount: 1},
      {key: "隐匿类", value: "无", selectableCount: 0},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "自选一项", selectableCount: 1},
      {key: "学习类", value: "自选一项", selectableCount: 1},
      {key: "知识类", value: "神秘、魔法、自选一项", selectableCount: 1, selected: ['神秘', '魔法']},
      {key: "表演类", value: "无", selectableCount: 0},
      {key: "升级熟练点", value: "3+智力调整值"},
    ]
  },
  druid: {
    description: ['在远离城市的文明与喧嚣的自然中有着一股强大的原始力量。他们称之自己为德鲁伊。作为狂野魔法的施法者，当狂野魔法在这片大陆肆意生长时，他们选择了回归淳朴的自然中，默默地守护自然，维持着自然与生态的平衡。因为他们深知自己诞生的那一刻无论是拥有的元素魔法还是与野兽作伴能力亦或是化身为野兽保护家园的能力无一不来源于他们热爱、敬畏而又世代守护的自然。', '随着人类文明逐渐的发展，或许许多人早已经忘却了与自然相处的方式，但他们肆意开拓时总会有些忠诚于自然的德鲁伊们狂热的守护这片土地的一山一河，一草一木。'],
    branches: [
      {
        name: '自然之子',
        value: '自然',
        description: '自然之子德鲁伊在风、火、水、土、植物当中获得一种自然元素强化，从而获得该系法术的元素增强效果。通过施法强大的自然法术在战斗中对敌人造成伤害或是治愈队友。',
        select: {
          label: '元素',
          options: ["风", "火", "水", "土", "植物"]
        },
        restrictions: {
          team: ["中立善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: ({selectValue}) => {
          switch (selectValue) {
            case '水':
              return `<b>水：</b>在非于燥环境下，水系狂野魔法施法速度+I，治疗和受治疗效果+1`;
            case '火':
              return `<b>火：</b>在自身范围1.5m内有燃烧的火焰时获得火系狂野魔法施法速度+1，自身释放的狂野魔法伤害+1`;
            case '风':
              return `<b>风：</b>在微风环境时获得风系狂野魔法施法速度+1，自身移动速度+3m`;
            case '土':
              return `<b>土：</b>在山地，自然士壤等环境时获得土系狂野魔法施法速度+1，自身双抗+2`;
            case '植物':
              return `<b>植物：</b>在丛林，雨林等植物环境时获得，植物系施法速度+1，自身持续累计法术回合+1`;
          }
        }
      },
      {
        name: '动物之友',
        value: '动物',
        description: '动物之友德鲁伊会拥有一个与自己朝夕相伴的灵魂链接动物伙伴，在战斗中可以为自己的动物伙伴施放野兽魔法增强战力，也可以与自己的伙伴并肩作战。',
        restrictions: {
          team: ["中立善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: `
          <b>动物伙伴：</b>德鲁伊可以选择一个以自己灵魂链接的伙伴，与伙伴之间可以进行心灵沟通。伙伴可以自由释放或收回至荒野位面，召唤动作为主要动作动物亲和：德鲁伊驯养动物骰值+2
        `
      },
      {
        name: '兽神之嗣',
        value: '兽神',
        description: '兽神之嗣德鲁伊可以变化成各种各样的动物形态进行战斗。变身的每一种动物都有独特的战斗属性，例如：坚韧的熊、翱翔的鹰、狠毒的蛇等。',
        restrictions: {
          team: ["中立善良", "守序中立", "绝对中立", "混乱中立"]
        },
        attributes: `
          <b>野兽变身：</b>德鲁伊可以变成常见的小型野兽，每日3次。野兽变身时只能释放野兽系法术，变身动作为主要动作
        `
      },
    ],
    basics: [
      {key: "主属性", value: "力量、敏捷、感知/魅力"},
      {key: "阵营", value: "任何中立阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "单手钝器/投掷类武器/法杖/棍/镰刀"},
      {key: "擅长装备", value: "布甲/皮甲/鳞甲（德鲁伊不能使用任何金属类武器防具）"},
      {key: "初始金币", value: "1d4+2"},
    ],
    abilities: [
      {key: "运动类", value: "自选两项", selectableCount: 2},
      {key: "交涉类", value: "无", selectableCount: 0},
      {key: "隐匿类", value: "潜行", selectableCount: 0, selected: ['潜行']},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "自选三项", selectableCount: 3},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "自然、医疗、自选三项", selectableCount: 3, selected: ['自然', '医疗']},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "4+智力调整值"},
    ]
  },
  monk: {
    description: ['作为大陆上最晚被发现而又自成体系一个职业，武僧往往高深莫测。他们代表了肉体的磨练于精神的苦修。曾经被人划为了极度危险的异教徒收到了一众神明信徒的打压。致使他们不得不隐退至人烟稀少的地方。', '但是对于他们来说，外界的世俗只是精神与肉体磨练也是修成正果的阶梯。这些外放于拳腿，举戈而舞。内敛于丹田，凝神自安的武僧们也为遥远的东方大陆披上了一层神秘的面纱。'],
    branches: [
      {
        name: '拳腿宗',
        value: '拳腿宗',
        description: '专修拳脚肉搏，以硬碰硬，追求极致的近战爆发力。',
        restrictions: {
          team: ["守序善良", "守序中立"]
        },
        attributes: `
          <b>疾風連打（拳腿宗）：</b>武僧可以使用主要動作進行兩次攻擊（兩次命中閃避對抗）<br/>
          <b>疾行：</b>武僧移動速度增加3m
        `
      },
      {
        name: '外器宗',
        value: '外器宗',
        description: '以器械延伸拳脚，刚柔并济，将外物化为身体的一部分。',
        restrictions: {
          team: ["守序善良", "守序中立"]
        },
        attributes: `
          <b>外器棍法-横扫（外器宗）：</b>武僧可以使用一个主要动作，针对敌人下盘攻击，命中-2。命中后，造成伤害的同时与目标力量对抗敏捷/体质，豁兔失败，则被击倒<br/>
          <b>疾行：</b>武僧移動速度增加3m
        `
      },
      {
        name: '苦行宗',
        value: '苦行宗',
        description: '以痛悟道，淬炼筋骨皮肉，在极限磨砺中铸就不灭之躯。',
        restrictions: {
          team: ["守序善良", "守序中立"]
        },
        attributes: `
          <b>痛苦修行（苦行宗）：</b>当武僧不装备任何盔甲时，受到伤害后会获得已损失血量的双抗。最高不超过等级＋体质调整值（精英前），等级加体质基础值（精英后）<br/>
          <b>疾行：</b>武僧移動速度增加3m
        `
      },
    ],
    basics: [
      {key: "主属性", value: "力量、体质、敏捷、感知"},
      {key: "阵营", value: "任何守序阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "拳套/棍/刀/剑/枪/斧/法器"},
      {key: "擅长装备", value: "皮甲/僧袍"},
      {key: "初始金币", value: "1d4+2"},
    ],
    abilities: [
      {key: "运动类", value: "自选三项", selectableCount: 3},
      {key: "交涉类", value: "无", selectableCount: 0},
      {key: "隐匿类", value: "潜行", selectableCount: 0, selected: ['潜行']},
      {key: "一般类", value: "自选两项", selectableCount: 2},
      {key: "生存类", value: "所有生存类", selectableCount: 0, selected: ['*']},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "宗教、历史、自选两项", selectableCount: 2, selected: ['宗教', '历史']},
      {key: "表演类", value: "自选一项", selectableCount: 1},
      {key: "升级熟练点", value: "3+智力调整值"},
    ]
  },
  barbarian: {
    description: ['野蛮人往往远离人群，是荒野和森林中流浪的部族一员，大部分还保留着传统原始的部落习性，他们的胸中翻卷着原始的战斗本能和满腔的怒火，这些杀戮机器伴随着狂野的咆哮冲向战场，依靠敏锐的直觉和巨大的蛮力战斗，他们不在意训练、计划和作战方式，对于野蛮人来说，眼前站着敌人的这一刻，以及自己可能命丧黄泉的下一刻，就是世界的全部。'],
    branches: [
      {
        name: '狂暴野蛮人',
        value: '狂暴',
        description: '陷入战斗狂怒的无差别破坏者，狂暴状态下敌我不分地疯狂攻击，结束后将陷入力竭。敌人眼中的移动灾难，队友心中的定时炸弹。',
        team: ["中立善良", "绝对中立", "混乱善良", "混乱中立"],
        attributes: `
          <b>狂暴：</b>狂暴状态下，目标与自己均为必定命中状态；每回合攻击两次，只攻击最近的目标，持续体质调整值回合；结束狂暴后力竭，需要8h休息恢复<br/>
          <b>文盲：</b>野蛮人无法读写任何文字<br/>
          <b>野蛮解放：</b>上身装备防具或衣物时，失去所有职业天赋<br/>
          <b>迫不及待：</b>每场战斗第一次移动速度+4.5m
        `
      },
      {
        name: '血咒野蛮人',
        value: '血咒',
        description: '以鲜血为祭的冷静战士，通过自损生命换取超额伤害，攻击命中时可能汲取敌人生命恢复自身。',
        team: ["中立善良", "绝对中立", "混乱善良", "混乱中立"],
        attributes: `
          <b>血咒：</b>可以使用次要动作开启，每次攻击消耗等级d6的生命值，伤害增加等同；攻击命中后血咒鉴定，DC≥15恢复1d8生命，暴击必定回血；可以使用次要动作关闭，未命中仍需要扣除血咒消耗生命值<br/>
          <b>文盲：</b>野蛮人无法读写任何文字<br/>
          <b>野蛮解放：</b>上身装备防具或衣物时，失去所有职业天赋<br/>
          <b>迫不及待：</b>每场战斗第一次移动速度+4.5m
        `
      },
    ],
    basics: [
      {key: "主属性", value: "力量"},
      {key: "阵营", value: "任何非守序阵营"},
      {key: "初始生命", value: "12+自身体质调整值"},
      {key: "生命成长", value: "6+自身体质调整值", intValue: 6},
      {key: "擅长武器", value: "重武器"},
      {key: "擅长装备", value: "皮甲（不能穿戴头部/上身/肩部/披风"},
      {key: "初始金币", value: "3d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "所有运动类", selectableCount: 0, selected: ['*']},
      {key: "交涉类", value: "威吓", selectableCount: 0, selected: ['威吓']},
      {key: "隐匿类", value: "无", selectableCount: 0},
      {key: "一般类", value: "自选一项", selectableCount: 1},
      {key: "生存类", value: "求生", selectableCount: 0, selected: ['求生']},
      {key: "学习类", value: "无", selectableCount: 0},
      {key: "知识类", value: "除神秘、魔法外自选一项", selectableCount: 1, exclude: ['神秘', '魔法']},
      {key: "表演类", value: "无", selectableCount: 0},
      {key: "升级熟练点", value: "智力调整值"},
    ]
  },
  bard: {
    description: ['吟游诗人往往是出色的艺术家、博学的旅行家、风趣的领袖或卑鄙的无赖，不管怎样，在漫长的游历中，他们利用自己的聪慧头脑和过人天赋，再加上一点点巧妙的音律魔法，掌握了说服、操纵与激励人心的技艺。', '在战斗中，吟游诗人擅长迷惑和扰乱敌人，或鼓舞盟友的士气，让他们越战越勇，当然，若要发挥他们的全部实力，最好找一个满是观众的舞台。据说目前的大陆地图，就出自一位云游大陆各处的吟游诗人。'],
    attributes: ({race}) => {
      let score;
      switch (race) {
        case 'human':
          score = '《团结之光》';
          break;
        case 'elf':
          score = '《密林时光》';
          break;
        case 'dwarf':
          score = '《磐石般的意志》';
          break;
        case 'orc':
          score = '《狂斧之殇》';
          break;
        case 'gnome':
          score = '《全世界最快乐的侏儒》';
          break;
        case 'archdevil':
          score = '《炼狱之声》';
          break;
      }
      return `
        <b>元素C和弦：</b>使用此和弦演奏乐谱可为目标增加额外等级的元素魔法伤害<br/>
        <b>生命F和弦：</b>使用此和弦演奏乐谱可为目标1/2等级回复生命<br/>
        <b>种族乐谱：</b>${score}
      `;
    },
    basics: [
      {key: "主属性", value: "魅力、智力"},
      {key: "阵营", value: "任何阵营"},
      {key: "初始生命", value: "8+自身体质调整值"},
      {key: "生命成长", value: "4+自身体质调整值", intValue: 4},
      {key: "擅长武器", value: "乐器/短弓/长鞭/匕首"},
      {key: "擅长装备", value: "布甲"},
      {key: "初始金币", value: "6d4+4"},
    ],
    abilities: [
      {key: "运动类", value: "自选两项", selectableCount: 2},
      {key: "交涉类", value: "所有交涉类", selectableCount: 0, selected: ['*']},
      {key: "隐匿类", value: "所有隐匿类", selectableCount: 0, selected: ['*']},
      {key: "一般类", value: "所有一般类", selectableCount: 0, selected: ['*']},
      {key: "生存类", value: "自选两项", selectableCount: 2},
      {key: "学习类", value: "自选一项", selectableCount: 1},
      {key: "知识类", value: "已知所有知识", selectableCount: 0, selected: ['*']},
      {key: "表演类", value: "已知所有表演", selectableCount: 0, selected: ['*']},
      {key: "升级熟练点", value: "6+智力调整值"},
    ]
  },
};

const statsByRace = {
  human: {
    age: {min: 16, max: 26},
    height: {min: 150, max: 190},
    weight: {min: 40, max: 90},
    speed: 6,
    occupations: [
      'fighter', 'ranger', 'rogue', 'cleric', 'paladin', 'wizard', 'sorcerer', 'druid', 'monk', 'barbarian', 'bard'
    ]
  },
  elf: {
    age: {min: 100, max: 140},
    height: {min: 180, max: 220},
    weight: {min: 45, max: 80},
    speed: 9,
    occupations: [
      'fighter', 'ranger', 'cleric', 'paladin', 'wizard', 'druid', 'bard'
    ]
  },
  dwarf: {
    age: {min: 40, max: 50},
    height: {min: 135, max: 160},
    weight: {min: 60, max: 100},
    speed: 6,
    occupations: [
      'fighter', 'cleric', 'paladin', 'sorcerer', 'barbarian', 'bard'
    ]
  },
  gnome: {
    age: {min: 30, max: 40},
    height: {min: 60, max: 110},
    weight: {min: 15, max: 40},
    speed: 6,
    occupations: [
      'fighter', 'rogue', 'cleric', 'wizard', 'sorcerer', 'druid', 'bard'
    ]
  },
  orc: {
    age: {min: 12, max: 16},
    height: {min: 175, max: 220},
    weight: {min: 80, max: 180},
    speed: 9,
    occupations: [
      'fighter', 'sorcerer', 'monk', 'barbarian', 'bard'
    ]
  },
  archdevil: {
    age: {min: 12, max: 26},
    height: {min: 150, max: 190},
    weight: {min: 40, max: 90},
    speed: 9,
    occupations: [
      'fighter', 'ranger', 'rogue', 'cleric', 'wizard', 'sorcerer', 'barbarian', 'bard'
    ]
  }
};

const spells = [
  {
    name: "秘法印记（变化）",
    effect: "在物体上标记自己的个人印记/符号（可见/不可见）",
    action: {
      isPrimary: true,
      meta: "单手，咒语"
    },
    durration: "每等级半小时",
    distance: "9米",
    material: "秘法粉尘25g"
  },
  {
    name: "响指点燃（塑能）",
    effect: "打一个响指点燃目标，造成1d4点火系魔法伤害",
    action: {
      isPrimary: true,
      meta: "单手，咒语"
    },
    durration: "1D4回合",
    distance: "6米",
    material: "木炭1根"
  },
  {
    name: "冰球（塑能）",
    effect: "对9m内的单体目标发射冰球，造成1d6+智力调整值的冰系魔法伤害",
    action: {
      isPrimary: true,
      meta: "双手"
    },
    durration: "立即",
    distance: "9米",
    material: "水100ml"
  },
  {
    name: "电爪（塑能）",
    effect: "在手中凝聚一个电击能最束，对1.5m的一个目标造成1d8点雷系廣法伤害",
    action: {
      isPrimary: true,
      meta: "单手，咒语"
    },
    durration: "立即",
    distance: "1.5米",
    material: "雷击木1根"
  },
  {
    name: "法师之手（咒法）",
    effect: "可远距离移动每等级2公斤的非魔法无主物品",
    action: {
      isPrimary: true,
      meta: "单手"
    },
    durration: "1d4+1/2等级分钟",
    distance: "9米",
    material: "秘法粉尘25g"
  },
  {
    name: "剑刃爆发（咒法）",
    effect: "制造一个咒法半透明剑刃对周围1.5m内横扫。1.5m内目标进行敏捷豁免失败则受到1d6点伤害",
    action: {
      isPrimary: true,
      meta: "双手"
    },
    distance: "1.5米",
    material: "金属粉尘25g"
  },
  {
    name: "毒气喷溅（咒法）",
    effect: "对一个目标喷射霉气，目标需要进行一个体质豁免，失败则受到1d10点毒素伤害。",
    action: {
      isPrimary: true,
      meta: "双手"
    },
    distance: "3米",
    material: "任何具备 素的物品25g以上。"
  },
  {
    name: "侦测毒性（防护）",
    effect: "侦測一个生物或物体上是否有落性",
    action: {
      isPrimary: true,
      meta: "咒语"
    },
    distance: "3米",
    material: "无"
  },
  {
    name: "禁光术（防护）",
    effect: "产生1x1格黑暗区域，普通光源无法照亮。",
    action: {
      isPrimary: true,
      meta: "双手，咒语"
    },
    distance: "6米",
    material: "夜娥翅1个"
  },
  {
    name: "静寂术（防护）",
    effect: "抵消微小的声音",
    action: {
      isPrimary: true,
      meta: "双手"
    },
    distance: "触摸",
    material: "秘法粉尘25g"
  },
  {
    name: "闪光术（防护）",
    effect: "在一单个生物前爆发出光亮.使他目眩，命中-1、闪避-1",
    action: {
      isPrimary: true,
      meta: "单手"
    },
    durration: "1d4-1回合",
    distance: "6米",
    material: "萤火虫1只"
  },
  {
    name: "传讯术（变化）",
    effect: "对一个目标远距离传声，对方可拒绝",
    action: {
      isPrimary: true,
      meta: "咒语"
    },
    distance: "20米",
    material: "无"
  },
  {
    name: "光亮术（变化）",
    effect: "使一个物体如火炬般发光，照亮周围6米环境。",
    action: {
      isPrimary: true,
      meta: "双手，咒语"
    },
    distance: "触摸",
    material: "闪光粉10g"
  },
  {
    name: "修复术（变化）",
    effect: "修理一个轻微破损的物件",
    action: {
      isPrimary: true,
      meta: "单手"
    },
    distance: "接触",
    material: "磁石*1"
  },
];

const fileInput = document.getElementById('file-upload');
const previewImage = document.getElementById('image-preview');
const uploadLabel = document.getElementById('upload-label');

fileInput.addEventListener('change', function() {
  const file = this.files[0];

  if (file) {
    const objectURL = URL.createObjectURL(file);
    previewImage.src = objectURL;
    uploadLabel.style.display = 'none';
    previewImage.style.display = 'block';
    previewImage.onload = () => {
      URL.revokeObjectURL(objectURL);
    };
  }
});

previewImage.addEventListener('click', function() {
  fileInput.click();
});

const dialog = document.getElementById('dialog');
const dialogContents = dialog.querySelectorAll('.dialog-content');
const dialogSelectInputs = document.querySelectorAll('.dialog-select');
dialogSelectInputs.forEach((dialogSelectInput) => {
  dialogSelectInput.addEventListener('click', function(e) {
    openDialogWithContent(e);
  });
  dialogSelectInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      openDialogWithContent(e);
    }
  });
});

dialogContents.forEach((dialogContent) => {
  const category = dialogContent.id.split('-dialog')[0];
  dialogContent.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      closeDialog();
      const input = document.querySelector(`input#${category}`);
      if (input.value === e.target.dataset.value) return;

      input.value = e.target.dataset.value;
      if (category === 'race') {
        setRace(e.target.dataset.value);
      }

      if (category === 'team') {
        setTeam(e.target.dataset.value);
      }
    });
  });

  const cards = dialogContent.querySelectorAll('.card');
  cards.forEach((card) => {
    const accordions = card.querySelectorAll('.accordion');
    toggleAccordionSet(accordions);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDialog();
  }
});

document.querySelector('#dialog-close').addEventListener('click', () => {
  closeDialog();
});

document.querySelector('#dialog-backdrop').addEventListener('click', () => {
  closeDialog();
});

document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('change', e => {
    const el = e.target;
    if (!(el.min && el.max) || el.value === '') {
      return;
    }
    // Clamp the value between min and max
    el.value = Math.min(Math.max(el.value, el.min), el.max);
  });
});

// Sync simple inputs → state
['character_name', 'age', 'height', 'weight', 'skin_color', 'eye_color', 'hair_color', 'player_name'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => updateState(id, e.target.value));
});

function closeDialog() {
  dialog.scrollTop = 0;
  dialog.style.display = 'none';
  document.body.classList.remove('dialog-opened');
}

function openDialogWithContent(e) {
  dialog.style.display = e.target.id === 'team' ? 'flex' : 'block';
    document.body.classList.add('dialog-opened');
    let contentToShow;
    dialogContents.forEach((c) => {
      if (c.id === `${e.target.id}-dialog`) {
        contentToShow = c;
        if (e.target.id === 'spell-name') {
          const {spellIndex, spellTier} = e.target.dataset;
          contentToShow.setAttribute('data-spell-tier', spellTier);
          contentToShow.setAttribute('data-spell-index', spellIndex);
        }
      } else {
        c.style.display = 'none';
      }
    });
    contentToShow.style.display = 'block';
}

function createOccupationOptions(availableOccupations, occupationInput) {
  const occupationOptions = document.querySelector(`#occupation-dialog #occupation-options-container`);
  occupationOptions.innerHTML = availableOccupations.map((occupation) => {
    return `
      <div class="card" id=${occupation}>
        <img src="./assets/occupations/${occupation}.jpg">
        <div>
          <span class="accordion closed">
            <h4 class="accordion-header">职业概述 <span>&#10095;</span></h4>
            <div class="accordion-content">
              ${occupationsMetadata[occupation].description.map((section) => {
                return `
                  <p>
                    ${section}
                  </p>
                `;
              }).join('')}
            </div>
          </span>
          <span class="accordion open">
            <h4 class="accordion-header">基础属性 <span>&#10095;</span></h4>
            <div class="accordion-content">
              ${occupationsMetadata[occupation].basics.map((basic) => {
                return `
                  <b>${basic.key}：</b>${basic.value}
                `;
              }).join('<br/>')}
            </div>
          </span>
          <span class="accordion closed">
            <h4 class="accordion-header">本职能力 <span>&#10095;</span></h4>
            <div class="accordion-content">
              ${occupationsMetadata[occupation].abilities.map((ability) => {
                return `
                  <b>${ability.key}：</b>${ability.value}
                `;
              }).join('<br/>')}
            </div>
          </span>
          ${
            occupationsMetadata[occupation].branches ? 
            `<button class="open-occupation-branch" data-value="${occupationEnToCn[occupation]}">选择分支</button>` :
            `<button class="select-occupation" data-value="${occupationEnToCn[occupation]}">选择</button>`
          }
          
        </div>
      </div>
    `;
  }).join('');

  occupationOptions.querySelectorAll('button.open-occupation-branch').forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      openBranchSelection(evt.target.dataset.value, occupationInput);
    });
  });

  occupationOptions.querySelectorAll('button.select-occupation').forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      closeDialog();
      if (evt.target.dataset.value === occupationInput.value) return;
      setOccupation(evt.target.dataset.value);
    });
  });

  occupationOptions.querySelectorAll('.card').forEach((card) => {
    toggleAccordionSet(card.querySelectorAll('.accordion'));
  });
}

function openBranchSelection(occupationCN, occupationInput) {
  let cachedScrollPosition;
  const occupationEN = occupationCnToEn[occupationCN];
  const occupation = occupationsMetadata[occupationEN];
  let branches = occupation.branches;
  if (occupationEN === 'cleric' && document.querySelector('input#race').value === '赫利凡') {
    branches = branches.filter((branch) => ["烈火", "山丘", "风暴", "保护", "知识", "工匠"].includes(branch.value));
  }

  const occupationOptions = document.querySelector('#occupation-dialog #occupation-options-container');
  const branchOptionsContainer = document.querySelector('#occupation-dialog #branch-options-container');
  const returnBtn = document.createElement('button');
  returnBtn.textContent = '< 返回';
  returnBtn.style.marginLeft = '10px';
  returnBtn.onclick = () => returnToOccupationOptions(cachedScrollPosition);
  branchOptionsContainer.appendChild(returnBtn);
  const tileContainer = document.createElement('div');
  tileContainer.id = "branch-options-tile-container";
  tileContainer.innerHTML = branches.map((branch, index) => {
    let select = '';
    if (branch.select) {
      select = `
        <p>
          <label for="branch-subselect">${branch.select.label}：</label>
          <select id="branch-subselect" style="height: 23px">
            ${branch.select.options.map((option) => {
              return `<option value=${option}>${option}</option>`
            }).join('')}
          </select>
        </p>
      `;
    }
    return `
      <div class="tile">
        <h4>${branch.name}</h4>
        <p>
          ${branch.description}
        </p>
        ${select}
        <button
          class="select-occupation-branch"
          data-value="${branch.value}"
          data-index=${index}
        >选择</button>
      </div>
    `;
  }).join('');

  tileContainer.querySelectorAll('button.select-occupation-branch').forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      closeDialog();
      const selectValue = evt.target.parentElement.querySelector('#branch-subselect')?.value;
      const branchValue = evt.target.dataset.value;
      const newDisplay = `${occupationCN}(${selectValue || branchValue})`;
      if (newDisplay === occupationInput.value) return;
      setBranch(branchValue, selectValue || undefined);
    });
  });
  branchOptionsContainer.appendChild(tileContainer);

  occupationOptions.classList.add('slide-left');
  branchOptionsContainer.classList.add('slide-left');
  setTimeout(() => {
    cachedScrollPosition = dialog.scrollTop;
    dialog.scrollTop = 0;
    occupationOptions.style.display = 'none';
  }, 500);
}

function resetOccupationSideEffects() {
  document.querySelectorAll('.team-dialog-tile-container .tile').forEach((teamTile) => {
    teamTile.style.display = 'flex';
  });
  const faithInput = document.querySelector('input#faith');
  faithInput.classList.remove('locked');
  faithInput.value = '';
  faithInput.disabled = false;
  faithInput.parentElement.classList.add('disabled');

  const teamInput = document.querySelector('input#team');
  teamInput.value = '';
}

function createFaithOptions(availableDeities, onSelect) {
  const container = document.getElementById('faith-options-container');
  container.innerHTML = availableDeities.map(deity => `
    <div class="card">
      <img src="./assets/faith/${deity}.png">
      <div>
        <h4>${deityMetadata[deity].title}一一${deityMetadata[deity].name}</h4>
        <div>
          <b>种族：</b>${deityMetadata[deity].race}<br/>
          <b>权柄：</b>${deityMetadata[deity].authority}<br/>
          <b>阵营：</b>${deityMetadata[deity].team.join('')}<br/>
          <b>武器：</b>${deityMetadata[deity].weapon.join('，')}
        </div>
        <button data-value="${deityMetadata[deity].name}">选择</button>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', evt => {
      closeDialog();
      onSelect(evt.target.dataset.value);
    });
  });
}

function returnToOccupationOptions(cachedScrollPosition = 0) {
  const occupationOptions = document.querySelector('#occupation-dialog #occupation-options-container');
  const branchOptionsContainer = document.querySelector('#occupation-dialog #branch-options-container');
  branchOptionsContainer.innerHTML = "";
  occupationOptions.style.display = 'block';
  dialog.scrollTop = cachedScrollPosition;
  occupationOptions.classList.remove('slide-left');
  branchOptionsContainer.classList.remove('slide-left');
}

function toggleAccordionSet(accordions) {
  accordions.forEach((accordion) => {
    accordion.querySelector('.accordion-header').addEventListener('click', function() {
      if (accordion.classList.contains('open')) {
        accordion.classList.remove('open');
        accordion.classList.add('closed');
      } else {
        accordions.forEach((a) => {
          if (a === accordion) {
            a.classList.remove('closed');
            a.classList.add('open');
          } else {
            // close others
            a.classList.remove('open');
            a.classList.add('closed');
          }
        });
      }
    });
  });
}

function setOccupationAttributes(attributes, selectValue) {
  document.querySelector('.page3 #occupation-attributes').innerHTML = '';
  document.querySelector('.page3 #occupation-attributes-2').innerHTML = '';
  if (attributes) {
    if (Array.isArray(attributes)) {
      document.querySelector('.page3 #occupation-attributes').innerHTML = '<div id="block"></div>' + attributes[0];
      document.querySelector('.page3 #occupation-attributes-2').innerHTML = attributes[1];
    } else if (typeof attributes === 'function') {
      const race = raceCnToEn[document.querySelector('input#race').value];
      document.querySelector('.page3 #occupation-attributes').innerHTML = '<div id="block"></div>' + attributes({race, selectValue});
    } else {
      document.querySelector('.page3 #occupation-attributes').innerHTML = '<div id="block"></div>' + attributes;
    }
  }
}

function setAbilities(abilities) {
  abilities.forEach((ability) => {
    let section;
    switch(ability.key) {
      case "运动类":
        section = document.querySelector('.page4 .athletic');
        break;
      case "交涉类":
        section = document.querySelector('.page4 .personal');
        break;
      case "隐匿类":
        section = document.querySelector('.page4 .stealth');
        break;
      case "一般类":
        section = document.querySelector('.page4 .regular');
        break;
      case "生存类":
        section = document.querySelector('.page4 .survival');
        break;
      case "学习类":
        section = document.querySelector('.page4 .learning');
        break;
      case "知识类":
        section = document.querySelector('.page4 .knowledge');
        break;
      case "表演类":
        section = document.querySelector('.page4 .performance');
        break;
      default:
        return;
    }
    const checkboxes = section.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.disabled = false;
    });

    ability.exclude?.forEach((excluded) => {
      if (excluded === '*') {
        checkboxes.forEach((checkbox) => {
          checkbox.disabled = true;
        });
      } else {
        section.querySelector(`input[type=checkbox]#${excluded}`).disabled = true;
      }
    });

    ability.selected?.forEach((selected) => {
      if (selected === '*') {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = true;
          checkbox.disabled = true;
        });
      } else {
        section.querySelector(`input[type=checkbox]#${selected}`).checked = true;
        section.querySelector(`input[type=checkbox]#${selected}`).disabled = true;
      }
    });

    const limit = ability.selectableCount;
    const remainingBoxes = section.querySelectorAll('input[type=checkbox]:not(:disabled)');
    remainingBoxes.forEach(box => {
      box.addEventListener('change', updateState);
    });

    function updateState() {
      let checkedCount = 0;
      remainingBoxes.forEach((b) => {
        if (b.checked) {
          checkedCount++;
        }
      });
      remainingBoxes.forEach(b => {
        if (!b.checked) {
          b.disabled = checkedCount >= limit;
        }
      });
    }

    updateState();
  });
}

function createSpellDialog(spells) {
  const container = document.querySelector('#spell-name-dialog .spell-options-tile-container');
  container.innerHTML = spells.map((spell, index) => {
    return `
      <div class="tile">
        <h4>${spell.name}</h4>
        <p>
          <b>效果：</b>${spell.effect}<br/>
          <b>动作：</b>${spell.action.isPrimary ? '主要动作': '次要动作'}，${spell.action.meta}<br/>
          ${spell.durration ? `<b>持续时间：</b>${spell.durration}<br/>` : ''}
          <b>距离：</b>${spell.distance}<br/>
          <b>施法材料：</b>${spell.material}
        </p>
        <button data-value="${index}">选择</button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('button').forEach((button) => {
    button.onclick = (e) => {
      const index = parseInt(e.target.dataset.value);
      const spell = spells[index];
      const {spellIndex, spellTier} = document.querySelector('#spell-name-dialog').dataset;
      const spellSlot = document.querySelector(`.page5 .spell-tier[data-index="${spellTier}"] .spell[data-index="${spellIndex}"]`);
      spellSlot.querySelector('#spell-name').value = spell.name;
      spellSlot.querySelector('.effect-text').innerText = spell.durration ? `${spell.effect}。持续时间：${spell.durration}` : spell.effect;
      spellSlot.querySelector('#spell-ingrediants').value = spell.material;
      spellSlot.querySelector('#spell-distance').value = spell.distance;
      if (spell.action.isPrimary) {
        spellSlot.querySelector('#primary').checked = true;
      } else {
        spellSlot.querySelector('#secondary').checked = true;
      }
      closeDialog();
    }
  });
}