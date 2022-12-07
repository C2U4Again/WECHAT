Page({

    /**
     * 页面的初始数据
     */
    data: {
        prefix: "cloud://cloud1-0g6ikz47c348f678.636c-cloud1-0g6ikz47c348f678-1313365453/fixed", //
      // 图片列表
      img: [ 
      ],
      
      ontop: "象数记忆\t\n\n",
      index: 0, //存储下标
      index1: 1, //存储下标
      time: 60,
      timer: "", //存储计时器
      timers: true, //防止连续点击 类似防抖
      countdown2: 0,
      countdown: 0, //判断文本
      title: "?",
      title2: "?"
    },
    
    onShow(){
        //...请求接口拿到了新数据的数组：newList，赋值
        this.setData({
            img: [{
                index: this.data.prefix + "/w (1).png"
              },
              {
                index: this.data.prefix + "/w (2).png"
              },
              {
                index: this.data.prefix + "/w (3).png"
              },
              {
                index: this.data.prefix + "/w (4).png"
              },
              {
                index: this.data.prefix + "/w (5).png"
              },
              {
                index: this.data.prefix + "/w (6).png"
              },
              {
                index: this.data.prefix + "/w (7).png"
              },
              {
                index: this.data.prefix + "/w (8).png"
              },]
        });
    },


    // 开始按钮
    btnYao() {
        this.data.index = Math.floor(Math.random() * 8)
        this.data.index1 = Math.floor(Math.random() * 8)
        this.data.index2 = Math.floor(Math.random() * 6)

// 乾坤屯（zhūn）蒙需讼师， 比小畜（xù）兮履泰否（pǐ），
// 同人大有谦豫随， 蛊临观兮噬嗑（shì hé）贲（bì ），
// 剥复无妄大畜（chù）颐， 大过坎离三十备。
// 咸恒遁兮及大壮， 晋与明夷家人睽（kuí ），
// 蹇解（jiě）损益夬（guài ）姤（gòu ）萃， 升困井革鼎震继，
// 艮渐归妹丰旅巽， 兑涣节兮中孚至，
// 小过既济兼未济， 是为下经三十四。

        switch ((this.data.index + 1)* 10 + (this.data.index1 + 1)) {
            case 11:
                this.data.countdown2 = "乾";
                break;
            case 12:
                this.data.countdown2 = "履";
                break;
            case 13:
                this.data.countdown2 = "同人";
                break;
            case 14:
                this.data.countdown2 = "无妄";
                break;
            case 15:
                this.data.countdown2 = "姤";
                break;
            case 16:
                this.data.countdown2 = "讼";
                break;
            case 17:
                this.data.countdown2 = "遁";
                break;
            case 18:
                this.data.countdown2 = "否";
                break;
            case 21:
                this.data.countdown2 = "夬";
                break;
            case 22:
                this.data.countdown2 = "兑";
                break;
            case 23:
                this.data.countdown2 = "革";
                break;
            case 24:
                this.data.countdown2 = "随";
                break;
            case 25:
                this.data.countdown2 = "大过";
                break;
            case 26:
                this.data.countdown2 = "困";
                break;
            case 27:
                this.data.countdown2 = "咸";
                break;
            case 28:
                this.data.countdown2 = "萃";
                break;
            case 31:
                this.data.countdown2 = "大有";
                break;
            case 32:
                this.data.countdown2 = "睽";
                break;
            case 33:
                this.data.countdown2 = "离";
                break;
            case 34:
                this.data.countdown2 = "噬嗑";
                break;
            case 35:
                this.data.countdown2 = "鼎";
                break;
            case 36:
                this.data.countdown2 = "未济";
                break;
            case 37:
                this.data.countdown2 = "旅";
                break;
            case 38:
                this.data.countdown2 = "晋";
                break;
            case 41:
                this.data.countdown2 = "大壮";
                break;
            case 42:
                this.data.countdown2 = "归妹";
                break;
            case 43:
                this.data.countdown2 = "丰";
                break;
            case 44:
                this.data.countdown2 = "震";
                break;
            case 45:
                this.data.countdown2 = "恒";
                break;
            case 46:
                this.data.countdown2 = "解";
                break;
            case 47:
                this.data.countdown2 = "小过";
                break;
            case 48:
                this.data.countdown2 = "豫";
                break;
            case 51:
                this.data.countdown2 = "小畜";
                break;
            case 52:
                this.data.countdown2 = "中孚";
                break;
            case 53:
                this.data.countdown2 = "家人";
                break;
            case 54:
                this.data.countdown2 = "益";
                break;
            case 55:
                this.data.countdown2 = "巽";
                break;
            case 56:
                this.data.countdown2 = "涣";
                break;
            case 57:
                this.data.countdown2 = "渐";
                break;
            case 58:
                this.data.countdown2 = "观";
                break;
            case 61:
                this.data.countdown2 = "需";
                break;
            case 62:
                this.data.countdown2 = "节";
                break;
            case 63:
                this.data.countdown2 = "既济";
                break;
            case 64:
                this.data.countdown2 = "屯";
                break;
            case 65:
                this.data.countdown2 = "井";
                break;
            case 66:
                this.data.countdown2 = "坎";
                break;
            case 67:
                this.data.countdown2 = "蹇";
                break;
            case 68:
                this.data.countdown2 = "比";
                break;
            case 71:
                this.data.countdown2 = "大畜";
                break;
            case 72:
                this.data.countdown2 = "损";
                break;
            case 73:
                this.data.countdown2 = "贲";
                break;
            case 74:
                this.data.countdown2 = "颐";
                break;
            case 75:
                this.data.countdown2 = "蛊";
                break;
            case 76:
                this.data.countdown2 = "蒙";
                break;
            case 77:
                this.data.countdown2 = "艮";
                break;
            case 78:
                this.data.countdown2 = "剥";
                break;
            case 81:
                this.data.countdown2 = "泰";
                break;
            case 82:
                this.data.countdown2 = "临";
                break;
            case 83:
                this.data.countdown2 = "明夷";
                break;
            case 84:
                this.data.countdown2 = "复";
                break;
            case 85:
                this.data.countdown2 = "升";
                break;
            case 86:
                this.data.countdown2 = "师";
                break;
            case 87:
                this.data.countdown2 = "谦";
                break;
            case 88:
                this.data.countdown2 = "坤";
                break;
            default:
                this.data.countdown2 = "卦";
                break;
        }

        
        switch (this.data.index2 + 1) {
            case 1:
                this.data.countdown = "初";
                break;
            case 2:
                this.data.countdown = "二";
              break;
            case 3:
                this.data.countdown = "三";
                break;
            case 4:
                this.data.countdown = "四";
                break;
            case 5:
                this.data.countdown = "五";   
                break;
            case 6:
                this.data.countdown = "上";
                break;
            default:
                this.data.countdown = "爻";
                break;
            
          }
        // 更新数据
        this.setData({
          index: this.data.index,
          index1: this.data.index1,
          index2: this.data.index2,
          title: this.data.countdown2 + this.data.countdown
          
        })
        
    },
    // 停止按钮
    btnJie() {
        switch (this.data.title) {
            case "乾初":
                this.data.title2 = "潜龙勿用，阳在下也。";
                break;
            case "乾二":
                this.data.title2 = "见龙在田，德施普也。";
                break;
            case "乾三":
                this.data.title2 = "终日乾乾，反复道也。";
                break;
            case "乾四":
                this.data.title2 = "或跃在渊，进无咎也。";
                break;
            case "乾五":
                this.data.title2 = "飞龙在天，大人造也。";
                break;
            case "乾上":
                this.data.title2 = "亢龙有悔，盈不可久也。";
                break;
            case "坤初":
                this.data.title2 = "履霜坚冰，阴始凝也。驯致其道，至坚冰也。";
                break;
            case "坤二":
                this.data.title2 = "六二之动，直以方也。不习无不利，地道光也。";
                break;
            case "坤三":
                this.data.title2 = "含章可贞，以时发也。或从王事，知光大也。";
                break;
            case "坤四":
                this.data.title2 = "括囊无咎，慎不害也。";
                break;
            case "坤五":
                this.data.title2 = "黄裳元吉，文在中也。";
                break;
            case "坤上":
                this.data.title2 = "龙战于野，其道穷也。";
                break;
            case "屯初":
                this.data.title2 = "虽盘桓，志行正也。以贵下贱，大得民也。";
                break;
            case "屯二":
                this.data.title2 = "六二之难，乘刚也。十年乃字，反常也。";
                break;
            case "屯三":
                this.data.title2 = "即鹿无虞，以纵禽也。君子舍之，往吝，穷也。";
                break;
            case "屯四":
                this.data.title2 = "求而往，明也。";
                break;
            case "屯五":
                this.data.title2 = "屯其膏，施未光也。";
                break;
            case "屯上":
                this.data.title2 = "泣血涟如，何可长也。";
                break;
            case "蒙初":
                this.data.title2 = "利用刑人，以正法也。";
                break;
            case "蒙二":
                this.data.title2 = "子克家，刚柔接也。";
                break;
            case "蒙三":
                this.data.title2 = "勿用娶女，行不顺也。";
                break;
            case "蒙四":
                this.data.title2 = "困蒙之吝，独远实也。";
                break;
            case "蒙五":
                this.data.title2 = "童蒙之吉，顺以巽也。";
                break;
            case "蒙上":
                this.data.title2 = "利用御寇，上下顺也。";
                break;
            case "需初":
                this.data.title2 = "需于郊，不犯难行也。利用恒，无咎，未失常也。";
                break;
            case "需二":
                this.data.title2 = "需于沙，衍在中也。虽小有言，以终吉也。";
                break;
            case "需三":
                this.data.title2 = "需于泥，灾在外也。自我致寇，敬慎不败也。";
                break;
            case "需四":
                this.data.title2 = "需于血，顺以听也。";
                break;
            case "需五":
                this.data.title2 = "酒食贞吉，以中正也。";
                break;
            case "需上":
                this.data.title2 = "不速之客，敬之终吉。虽不当位，未大失也。";
                break;
            case "讼初":
                this.data.title2 = "不永所事，讼不可长也。虽小有言，其辩明也。";
                break;
            case "讼二":
                this.data.title2 = "不克讼，归而逋也。自下讼上，患至掇也。";
                break;
            case "讼三":
                this.data.title2 = "食旧德，从上吉也。";
                break;
            case "讼四":
                this.data.title2 = "复即命，渝安贞，吉，不失也。";
                break;
            case "讼五":
                this.data.title2 = "讼，元吉，以中正也。";
                break;
            case "讼上":
                this.data.title2 = "以讼受服，亦不足敬也。";
                break;
            case "师初":
                this.data.title2 = "师出以律，失律凶也。";
                break;
            case "师二":
                this.data.title2 = "在师中吉，承天宠也，王三锡命，怀万邦也。";
                break;
            case "师三":
                this.data.title2 = "师或舆尸，大无功也。";
                break;
            case "师四":
                this.data.title2 = "左次无咎，未失常也。";
                break;
            case "师五":
                this.data.title2 = "长子帅师，以中行也。弟子舆尸，使不当也。";
                break;
            case "师上":
                this.data.title2 = "大君有命，以正功也。 小人勿用，必乱邦也。";
                break;
            case "比初":
                this.data.title2 = "比之初六，有他吉也。";
                break;
            case "比二":
                this.data.title2 = "比之自内，不自失也。";
                break;
            case "比三":
                this.data.title2 = "比之匪人，不亦伤乎！";
                break;
            case "比四":
                this.data.title2 = "外比於贤，以从上也。";
                break;
            case "比五":
                this.data.title2 = "显比之吉，位正中也。舍逆取顺，失前禽也。 邑人不诫，上使中也。";
                break;
            case "比上":
                this.data.title2 = "比之无首，无所终也。";
                break;
            case "小畜初":
                this.data.title2 = "复自道，其义吉也。";
                break;
            case "小畜二":
                this.data.title2 = "牵复在中，亦不自失也。";
                break;
            case "小畜三":
                this.data.title2 = "夫妻反目，不能正室也。";
                break;
            case "小畜四":
                this.data.title2 = "有孚惕出，上合志也。";
                break;
            case "小畜五":
                this.data.title2 = "有孚挛如，不独富也。";
                break;
            case "小畜上":
                this.data.title2 = "既雨既处，德积载也。 君子征凶，有所疑也。";
                break;
            case "履初":
                this.data.title2 = "素履之往，独行愿也。";
                break;
            case "履二":
                this.data.title2 = "幽人贞吉，中不自乱也。";
                break;
            case "履三":
                this.data.title2 = "眇能视。不足以有明也。跛能履。不足以与行也。咥人之凶。";
                break;
            case "履四":
                this.data.title2 = "愬愬终吉，志行也。";
                break;
            case "履五":
                this.data.title2 = "夬履贞厉，位正当也。";
                break;
            case "履上":
                this.data.title2 = "元吉在上，大有庆也。";
                break;
            case "泰初":
                this.data.title2 = "拔茅征吉，志在外也。";
                break;
            case "泰二":
                    this.data.title2 = "包荒，得尚于中行，以光大也。";
                    break;
            case "泰三":
                    this.data.title2 = "无往不复，天地际也。";
                    break;
            case "泰四":
                    this.data.title2 = "翩翩不富，皆失实也。 不戒以孚，中心愿也。";
                    break;
            case "泰五":
                    this.data.title2 = "以祉元吉，中以行愿也。";
                    break;
            case "泰上":
                    this.data.title2 = "城复于隍，其命乱也。";
                    break;
            case "否初":
                    this.data.title2 = "拔茅贞吉，志在君也。";
                    break;
            case "否二":
                    this.data.title2 = "大人否亨，不乱群也。";
                    break;
            case "否三":
                    this.data.title2 = "包羞，位不当也。";
                    break;
            case "否四":
                    this.data.title2 = "有命无咎，志行也。";
                    break;
            case "否五":
                    this.data.title2 = "大人之吉，位正当也。";
                    break;
            case "否上":
                    this.data.title2 = "否终则倾，何可长也。";
                    break;
            case "同人初":
                    this.data.title2 = "出门同人，又谁咎也。";
                    break;
            case "同人二":
                    this.data.title2 = "同人于宗，吝道也。";
                    break;
            case "同人三":
                    this.data.title2 = "伏戎于莽，敌刚也。 三岁不兴，安行也。";
                    break;
            case "同人四":
                    this.data.title2 = "乘其墉，义弗克也，其吉，则困而反则也。";
                    break;
            case "同人五":
                    this.data.title2 = "同人之先，以中直也。 大师相遇，言相克也。";
                    break;
            case "同人上":
                    this.data.title2 = "同人于郊，志未得也。";
                    break;
            case "大有初":
                    this.data.title2 = "大有初九，无交害也。";
                    break;
            case "大有二":
                    this.data.title2 = "大车以载，积中不败也。";
                    break;
            case "大有三":
                    this.data.title2 = "公用亨于天子，小人害也。";
                    break;
            case "大有四":
                    this.data.title2 = "匪其彭，无咎。明辨晰也。";
                    break;
            case "大有五":
                    this.data.title2 = "厥孚交如，信以发志也。 威如之吉，易而无备也。";
                    break;
            case "大有上":
                    this.data.title2 = "大有上吉，自天佑也。";
                    break;
            case "谦初":
                    this.data.title2 = "谦谦君子，卑以自牧也。";
                    break;
            case "谦二":
                    this.data.title2 = "鸣谦贞吉，中心得也。";
                    break;
            case "谦三":
                    this.data.title2 = "劳谦君子，万民服也。";
                    break;
            case "谦四":
                    this.data.title2 = "无不利，撝谦。不违则也。";
                    break;
            case "谦五":
                    this.data.title2 = "利用侵伐，征不服也。";
                    break;
            case "谦上":
                    this.data.title2 = "鸣谦，志未得也。 可用行师，征邑国也。";
                    break;
            case "豫初":
                    this.data.title2 = "初六鸣豫，志穷凶也。";
                    break;
            case "豫二":
                    this.data.title2 = "不终日，贞吉。以中正也。";
                    break;
            case "豫三":
                    this.data.title2 = "盱豫有悔，位不当也。";
                    break;
            case "豫四":
                    this.data.title2 = "由豫，大有得。志大行也。";
                    break;
            case "豫五":
                    this.data.title2 = "六五贞疾，乘刚也。 恒不死，中未亡也。";
                    break;
            case "豫上":
                    this.data.title2 = "冥豫在上，何可长也。";
                    break;
            case "随初":
                    this.data.title2 = "官有渝，从正吉也。 出门交有功，不失也。";
                    break;
            case "随二":
                    this.data.title2 = "系小子，弗兼与也。";
                    break;
            case "随三":
                    this.data.title2 = "系丈夫，志舍下也。";
                    break;
            case "随四":
                    this.data.title2 = "随有获，其义凶也。 有孚在道，明功也。";
                    break;
            case "随五":
                    this.data.title2 = "孚于嘉，吉。位正中也。";
                    break;
            case "随上":
                    this.data.title2 = "拘系之，上穷也。";
                    break;
            case "蛊初":
                    this.data.title2 = "干父之蛊，意承考也。";
                    break;
            case "蛊二":
                    this.data.title2 = "干母之蛊，得中道也。";
                    break;
            case "蛊三":
                    this.data.title2 = "干父之蛊，终无咎也。";
                    break;
            case "蛊四":
                    this.data.title2 = "裕父之蛊，往未得也。";
                    break;
            case "蛊五":
                    this.data.title2 = "干父之蛊。承以德也。";
                    break;
            case "蛊上":
                    this.data.title2 = "不事王侯，志可则也。";
                    break;
            case "临初":
                    this.data.title2 = "咸临贞吉，志行正也。";
                    break;
            case "临二":
                    this.data.title2 = "咸临，吉无不利。未顺命也。";
                    break;
            case "临三":
                    this.data.title2 = "甘临，位不当也。 既忧之，咎不长也。";
                    break;
            case "临四":
                    this.data.title2 = "至临无咎，位当也。";
                    break;
            case "临五":
                    this.data.title2 = "大君之宜，行中之谓也。";
                    break;
            case "临上":
                    this.data.title2 = "敦临之吉，志在内也。";
                    break;
            case "观初":
                    this.data.title2 = "初六童观，小人道也。";
                    break;
            case "观二":
                    this.data.title2 = "窥观女贞，亦可丑也。";
                    break;
            case "观三":
                    this.data.title2 = "观我生，进退。未失道也。";
                    break;
            case "观四":
                    this.data.title2 = "观国之光，尚宾也。";
                    break;
            case "观五":
                    this.data.title2 = "观我生，观民也。";
                    break;
            case "观上":
                    this.data.title2 = "观其生，志未平也。";
                    break;
            case "噬嗑初":
                    this.data.title2 = "履校灭趾，不行也。";
                    break;
            case "噬嗑二":
                    this.data.title2 = "噬肤灭鼻，乘刚也。";
                    break;
            case "噬嗑三":
                    this.data.title2 = "遇毒，位不当也。";
                    break;
            case "噬嗑四":
                    this.data.title2 = "利艰贞吉，未光也。";
                    break;
            case "噬嗑五":
                    this.data.title2 = "贞厉无咎，得当也。";
                    break;
            case "噬嗑上":
                    this.data.title2 = "何校灭耳，聪不明也。";
                    break;
            case "贲初":
                    this.data.title2 = "舍车而徒，义弗乘也。";
                    break;
            case "贲二":
                    this.data.title2 = "贲其须，与上兴也。";
                    break;
            case "贲三":
                    this.data.title2 = "永贞之吉，终莫之陵也。";
                    break;
            case "贲四":
                    this.data.title2 = "六四，当位疑也。 匪寇婚媾，终无尤也。";
                    break;
            case "贲五":
                    this.data.title2 = "六五之吉，有喜也。";
                    break;
            case "贲上":
                    this.data.title2 = "白贲无咎，上得志也。";
                    break;
            case "剥初":
                    this.data.title2 = "剥牀以足，以灭下也。";
                    break;
            case "剥二":
                    this.data.title2 = "剥牀以辨，未有与也。";
                    break;
            case "剥三":
                    this.data.title2 = "剥之无咎，失上下也。";
                    break;
            case "剥四":
                    this.data.title2 = "剥牀以肤，切近灾也。";
                    break;
            case "剥五":
                    this.data.title2 = "以宫人宠，终无尤也。";
                    break;
            case "剥上":
                    this.data.title2 = "君子得舆，民所载也。 小人剥庐，终不可用也。";
                    break;
            case "复初":
                    this.data.title2 = "不远之复，以修身也。";
                    break;
            case "复二":
                    this.data.title2 = "休复之吉，以下仁也。";
                    break;
            case "复三":
                    this.data.title2 = "频复之厉，义无咎也。";
                    break;
            case "复四":
                    this.data.title2 = "中行独复，以从道也。";
                    break;
            case "复五":
                    this.data.title2 = "敦复无悔，中以自考也。";
                    break;
            case "复上":
                    this.data.title2 = "迷复之凶，反君道也。";
                    break;
            case "无妄初":
                    this.data.title2 = "无妄之往，得志也。";
                    break;
            case "无妄二":
                    this.data.title2 = "不耕获，未富也。";
                    break;
            case "无妄三":
                    this.data.title2 = "行人得牛，邑人灾也。";
                    break;
            case "无妄四":
                    this.data.title2 = "可贞无咎，固有之也。";
                    break;
            case "无妄五":
                    this.data.title2 = "无妄之药，不可试也。";
                    break;
            case "无妄上":
                    this.data.title2 = "无妄之行，穷之灾也。";
                    break;
            case "大畜初":
                    this.data.title2 = "有厉利已，不犯灾也。";
                    break;
            case "大畜二":
                    this.data.title2 = "舆说辐，中无尤也。";
                    break;
            case "大畜三":
                    this.data.title2 = "利有攸往，上合志也。";
                    break;
            case "大畜四":
                    this.data.title2 = "六四元吉，有喜也。";
                    break;
            case "大畜五":
                    this.data.title2 = "六五之吉，有庆也。";
                    break;
            case "大畜上":
                    this.data.title2 = "何天之衢，道大行也。";
                    break;
            case "颐初":
                    this.data.title2 = "观我朵颐，亦不足贵也。";
                    break;
            case "颐二":
                    this.data.title2 = "六二征凶，行失类也。";
                    break;
            case "颐三":
                    this.data.title2 = "十年勿用，道大悖也。";
                    break;
            case "颐四":
                    this.data.title2 = "颠颐之吉，上施光也。";
                    break;
            case "颐五":
                    this.data.title2 = "居贞之吉，顺以从上也。";
                    break;
            case "颐上":
                    this.data.title2 = "由颐厉吉，大有庆也。";
                    break;
            case "大过初":
                    this.data.title2 = "藉用白茅，柔在下也。";
                    break;
            case "大过二":
                    this.data.title2 = "老夫女妻，过以相与也。";
                    break;
            case "大过三":
                    this.data.title2 = "栋桡之凶，不可以有辅也。";
                    break;
            case "大过四":
                    this.data.title2 = "栋隆之吉，不桡乎下也。";
                    break;
            case "大过五":
                    this.data.title2 = "枯杨生华，何可久也。 老妇士夫，亦可丑也。";
                    break;
            case "大过上":
                    this.data.title2 = "过涉之凶，不可咎也。";
                    break;
            case "坎初":
                    this.data.title2 = "习坎入坎，失道凶也。";
                    break;
            case "坎二":
                    this.data.title2 = "求小得，未出中也。";
                    break;
            case "坎三":
                    this.data.title2 = "来之坎坎，终无功也。";
                    break;
            case "坎四":
                    this.data.title2 = "樽酒簋贰，刚柔际也。";
                    break;
            case "坎五":
                    this.data.title2 = "坎不盈，中未大也。";
                    break;
            case "坎上":
                    this.data.title2 = "上六失道，凶三岁也。";
                    break;
            case "离初":
                    this.data.title2 = "履错之敬，以辟咎也。";
                    break;
            case "离二":
                    this.data.title2 = "黄离元吉，得中道也。";
                    break;
            case "离三":
                    this.data.title2 = "日昃之离，何可久也。";
                    break;
            case "离四":
                    this.data.title2 = "突如其来如，无所容也。";
                    break;
            case "离五":
                    this.data.title2 = "六五之吉，离王公也。";
                    break;
            case "离上":
                    this.data.title2 = "王用出征，以正邦也。";
                    break;
            case "咸初":
                    this.data.title2 = "咸其拇，志在外也。";
                    break;
            case "咸二":
                    this.data.title2 = "虽凶，居吉，顺不害也。";
                    break;
            case "咸三":
                    this.data.title2 = "咸其股，亦不处也。 志在随人，所执下也。";
                    break;
            case "咸四":
                    this.data.title2 = "贞吉悔亡，未感害也。 憧憧往来，未光大也。";
                    break;
            case "咸五":
                    this.data.title2 = "咸其脢，志末也。";
                    break;
            case "咸上":
                    this.data.title2 = "咸其辅，颊，舌，滕脢说也。";
                    break;
            case "恒初":
                    this.data.title2 = "浚恒之凶，始求深也。";
                    break;
            case "恒二":
                    this.data.title2 = "九二悔亡，能久中也。";
                    break;
            case "恒三":
                    this.data.title2 = "不恒其德，无所容也。";
                    break;
            case "恒四":
                    this.data.title2 = "久非其位，安得禽也。";
                    break;
            case "恒五":
                    this.data.title2 = "妇人贞吉，从一而终也。 夫子制义，从妇凶也。";
                    break;
            case "恒上":
                    this.data.title2 = "振恒在上，大无功也。";
                    break;
            case "遯初":
                    this.data.title2 = "遯尾之厉，不往何灾也。";
                    break;
            case "遯二":
                    this.data.title2 = "执用黄牛，固志也。";
                    break;
            case "遯三":
                    this.data.title2 = "系遯之厉，有疾惫也。 畜臣妾吉，不可大事也。";
                    break;
            case "遯四":
                    this.data.title2 = "君子好遯，小人否也。";
                    break;
            case "遯五":
                    this.data.title2 = "嘉遯贞吉，以正志也。";
                    break;
            case "遯上":
                    this.data.title2 = "肥遯，无不利。无所疑也。";
                    break;
            case "大壮初":
                    this.data.title2 = "壮于趾，其孚穷也。";
                    break;
            case "大壮二":
                    this.data.title2 = "九二贞吉，以中也。";
                    break;
            case "大壮三":
                    this.data.title2 = "小人用壮，君子罔也。";
                    break;
            case "大壮四":
                    this.data.title2 = "藩决不羸，尚往也。";
                    break;
            case "大壮五":
                    this.data.title2 = "丧羊于易，位不当也。";
                    break;
            case "大壮上":
                    this.data.title2 = "不能退，不能遂，不祥也。 艰则吉，咎不长也。";
                    break;
            case "晋初":
                    this.data.title2 = "晋如，摧如。独行正也。 裕无咎。未受命也。";
                    break;
            case "晋二":
                    this.data.title2 = "受之介福，以中正也。";
                    break;
            case "晋三":
                    this.data.title2 = "众允之，志上行也。";
                    break;
            case "晋四":
                    this.data.title2 = "硕鼠贞厉，位不当也。";
                    break;
            case "晋五":
                    this.data.title2 = "失得勿恤，往有庆也。";
                    break;
            case "晋上":
                    this.data.title2 = "维用伐邑，道未光也。";
                    break;
            case "明夷初":
                    this.data.title2 = "君子于行，义不食也。";
                    break;
            case "明夷二":
                    this.data.title2 = "六二之吉，顺以则也。";
                    break;
            case "明夷三":
                    this.data.title2 = "南狩之志，乃大得也。";
                    break;
            case "明夷四":
                    this.data.title2 = "入于左腹，获心意也。";
                    break;
            case "明夷五":
                    this.data.title2 = "箕子之贞，明不可息也。";
                    break;
            case "明夷上":
                    this.data.title2 = "初登于天，照四国也。 后入于地，失则也。";
                    break;
            case "家人初":
                    this.data.title2 = "闲有家，志未变也。";
                    break;
            case "家人二":
                    this.data.title2 = "六二之吉，顺以巽也。";
                    break;
            case "家人三":
                    this.data.title2 = "家人鎬鎬，未失也。妇子嘻嘻，失家节也。";
                    break;
            case "家人四":
                    this.data.title2 = "富家大吉，顺在位也。";
                    break;
            case "家人五":
                    this.data.title2 = "王假有家，交相爱也。";
                    break;
            case "家人上":
                    this.data.title2 = "威如之吉，反身之谓也。";
                    break;
            case "睽初":
                    this.data.title2 = "见恶人，以辟咎也。";
                    break;
            case "睽二":
                    this.data.title2 = "遇主于巷，未失道也。";
                    break;
            case "睽三":
                    this.data.title2 = "见舆曳，位不当也。 无初有终，遇刚也。";
                    break;
            case "睽四":
                    this.data.title2 = "交孚无咎，志行也。";
                    break;
            case "睽五":
                    this.data.title2 = "厥宗噬肤，往有庆也。";
                    break;
            case "睽上":
                    this.data.title2 = "遇雨之吉，群疑亡也。";
                    break;
            case "蹇初":
                    this.data.title2 = "往蹇来誉，宜待也。";
                    break;
            case "蹇二":
                    this.data.title2 = "王臣蹇蹇，终无尤也。";
                    break;
            case "蹇三":
                    this.data.title2 = "往蹇来反，内喜之也。";
                    break;
            case "蹇四":
                    this.data.title2 = "往蹇来连，当位实也。";
                    break;
            case "蹇五":
                    this.data.title2 = "大蹇朋来，以中节也。";
                    break;
            case "蹇上":
                    this.data.title2 = "往蹇来硕，志在内也。 利见大人，以从贵也。";
                    break;
            case "解初":
                    this.data.title2 = "刚柔之际，义无咎也。";
                    break;
            case "解二":
                    this.data.title2 = "九二贞吉，得中道也。";
                    break;
            case "解三":
                    this.data.title2 = "负且乘，亦可丑也，自我致戎，又谁咎也。";
                    break;
            case "解四":
                    this.data.title2 = "解而拇，未当位也。";
                    break;
            case "解五":
                    this.data.title2 = "君子有解，小人退也。";
                    break;
            case "解上":
                    this.data.title2 = "公用射隼，以解悖也。";
                    break;
            case "损初":
                    this.data.title2 = "已事遄往，尚合志也。";
                    break;
            case "损二":
                    this.data.title2 = "九二利贞，中以为志也。";
                    break;
            case "损三":
                    this.data.title2 = "一人行，三则疑也。";
                    break;
            case "损四":
                    this.data.title2 = "损其疾，亦可喜也。";
                    break;
            case "损五":
                    this.data.title2 = "六五元吉，自上佑也。";
                    break;
            case "损上":
                    this.data.title2 = "弗损益之，大得志也。";
                    break;
            case "益初":
                    this.data.title2 = "元吉无咎，下不厚事也。";
                    break;
            case "益二":
                    this.data.title2 = "或益之，自外来也。";
                    break;
            case "益三":
                    this.data.title2 = "益用凶事，固有之也。";
                    break;
            case "益四":
                    this.data.title2 = "告公从，以益志也。";
                    break;
            case "益五":
                    this.data.title2 = "有孚惠心，勿问之矣。 惠我德，大得志也。";
                    break;
            case "益上":
                    this.data.title2 = "莫益之，偏辞也。 或击之，自外来也。";
                    break;
            case "夬初":
                    this.data.title2 = "不胜而往，咎也。";
                    break;
            case "夬二":
                    this.data.title2 = "莫夜有戎，得中道也。";
                    break;
            case "夬三":
                    this.data.title2 = "君子夬夬，终无咎也。";
                    break;
            case "夬四":
                    this.data.title2 = "其行次且，位不当也。 闻言不信，聪不明也。";
                    break;
            case "夬五":
                    this.data.title2 = "中行无咎，中未光也。";
                    break;
            case "夬上":
                    this.data.title2 = "无号之凶，终不可长也。";
                    break;
            case "姤初":
                    this.data.title2 = "系于金柅，柔道牵也。";
                    break;
            case "姤二":
                    this.data.title2 = "包有鱼，义不及宾也。";
                    break;
            case "姤三":
                    this.data.title2 = "其行次且，行未牵也。";
                    break;
            case "姤四":
                    this.data.title2 = "无鱼之凶，远民也。";
                    break;
            case "姤五":
                    this.data.title2 = "九五含章，中正也。 有陨自天，志不舍命也。";
                    break;
            case "姤上":
                    this.data.title2 = "姤其角，上穷吝也。";
                    break;
            case "萃初":
                    this.data.title2 = "乃乱乃萃，其志乱也。";
                    break;
            case "萃二":
                    this.data.title2 = "引吉无咎，中未变也。";
                    break;
            case "萃三":
                    this.data.title2 = "往无咎，上巽也。";
                    break;
            case "萃四":
                    this.data.title2 = "大吉无咎，位不当也。";
                    break;
            case "萃五":
                    this.data.title2 = "萃有位，志未光也。";
                    break;
            case "萃上":
                    this.data.title2 = " 齑咨涕洟，未安上也。";
                    break;
            case "升初":
                    this.data.title2 = "允升大吉，上合志也。";
                    break;
            case "升二":
                    this.data.title2 = "九二之孚，有喜也。";
                    break;
            case "升三":
                    this.data.title2 = "升虚邑，无所疑也。";
                    break;
            case "升四":
                    this.data.title2 = "王用亨于岐山，顺事也。";
                    break;
            case "升五":
                    this.data.title2 = "贞吉升阶，大得志也。";
                    break;
            case "升上":
                    this.data.title2 = "冥升在上，消不富也。";
                    break;
            case "困初":
                    this.data.title2 = "入于幽谷，幽不明也。";
                    break;
            case "困二":
                    this.data.title2 = "困于酒食，中有庆也。";
                    break;
            case "困三":
                    this.data.title2 = "据于蒺藜，乘刚也。 入于其宫，不见其妻，不祥也。";
                    break;
            case "困四":
                    this.data.title2 = "来徐徐，志在下也。 虽不当位，有与也。";
                    break;
            case "困五":
                    this.data.title2 = "劓刖，志未得也。乃徐有说，以中直也。利用祭祀，受福也。";
                    break;
            case "困上":
                    this.data.title2 = "困于葛藟，未当也。 动悔，有悔吉，行也。";
                    break;
            case "井初":
                    this.data.title2 = "井泥不食，下也。 旧井无禽，时舍也。";
                    break;
            case "井二":
                    this.data.title2 = "井谷射鲋，无与也。";
                    break;
            case "井三":
                    this.data.title2 = "井渫不食，行恻也。 求王明，受福也。";
                    break;
            case "井四":
                    this.data.title2 = "井甃无咎，修井也。";
                    break;
            case "井五":
                    this.data.title2 = "寒泉之食，中正也。";
                    break;
            case "井上":
                    this.data.title2 = "元吉在上，大成也。";
                    break;
            case "革初":
                    this.data.title2 = "巩用黄牛，不可以有为也。";
                    break;
            case "革二":
                    this.data.title2 = "己日革之，行有嘉也。";
                    break;
            case "革三":
                    this.data.title2 = "革言三就，又何之矣。";
                    break;
            case "革四":
                    this.data.title2 = "改命之吉，信志也。";
                    break;
            case "革五":
                    this.data.title2 = "大人虎变，其文炳也。";
                    break;
            case "革上":
                    this.data.title2 = "君子豹变，其文蔚也。 小人革面，顺以从君也。";
                    break;
            case "鼎初":
                    this.data.title2 = "鼎颠趾，未悖也。 利出否，以从贵也。";
                    break;
            case "鼎二":
                    this.data.title2 = "鼎有实，慎所之也。 我仇有疾，终无尤也。";
                    break;
            case "鼎三":
                    this.data.title2 = "鼎耳革，失其义也。";
                    break;
            case "鼎四":
                    this.data.title2 = "覆公□，信如何也。";
                    break;
            case "鼎五":
                    this.data.title2 = "鼎黄耳，中以为实也。";
                    break;
            case "鼎上":
                    this.data.title2 = "玉铉在上，刚柔节也。";
                    break;
            case "震初":
                    this.data.title2 = "震来萀萀，恐致福也。 笑言哑哑，后有则也。";
                    break;
            case "震二":
                    this.data.title2 = "震来厉，乘刚也。";
                    break;
            case "震三":
                    this.data.title2 = "震苏苏，位不当也。";
                    break;
            case "震四":
                    this.data.title2 = "震遂泥，未光也。";
                    break;
            case "震五":
                    this.data.title2 = "震往来厉，危行也。 其事在中，大无丧也。";
                    break;
            case "震上":
                    this.data.title2 = "震索索，未得中也。 虽凶无咎，畏邻戒也。";
                    break;
            case "艮初":
                    this.data.title2 = "艮其趾，未失正也。";
                    break;
            case "艮二":
                    this.data.title2 = "不拯其随，未退听也。";
                    break;
            case "艮三":
                    this.data.title2 = "艮其限，危薰心也。";
                    break;
            case "艮四":
                    this.data.title2 = "艮其身，止诸躬也。";
                    break;
            case "艮五":
                    this.data.title2 = "艮其辅，以中正也。";
                    break;
            case "艮上":
                    this.data.title2 = "敦艮之吉，以厚终也。";
                    break;
            case "渐初":
                    this.data.title2 = "小子之厉，义无咎也。";
                    break;
            case "渐二":
                    this.data.title2 = "饮食衎衎，不素饱也。";
                    break;
            case "渐三":
                    this.data.title2 = "夫征不复，离群丑也。 妇孕不育，失其道也。利用御寇，顺相保也。";
                    break;
            case "渐四":
                    this.data.title2 = "或得其桷，顺以巽也。";
                    break;
            case "渐五":
                    this.data.title2 = "终莫之胜，吉。得所愿也。";
                    break;
            case "渐上":
                    this.data.title2 = "其羽可用为仪，吉。不可乱也。";
                    break;
            case "归妹初":
                    this.data.title2 = "归妹以娣，以恒也。 跛能履吉，相承也。";
                    break;
            case "归妹二":
                    this.data.title2 = "利幽人之贞，未变常也。";
                    break;
            case "归妹三":
                    this.data.title2 = "归妹以须，未当也。";
                    break;
            case "归妹四":
                    this.data.title2 = "愆期之志，有待而行也。";
                    break;
            case "归妹五":
                    this.data.title2 = "帝乙归妹，不如其娣之袂良也。 其位在中，以贵行也。";
                    break;
            case "归妹上":
                    this.data.title2 = "上六无实，承虚筐也。";
                    break;
            case "丰初":
                    this.data.title2 = "虽旬无咎，过旬灾也。";
                    break;
            case "丰二":
                    this.data.title2 = "有孚发若，信以发志也。";
                    break;
            case "丰三":
                    this.data.title2 = "丰其沛，不可大事也。 折其右肱，终不可用也。";
                    break;
            case "丰四":
                    this.data.title2 = "丰其蔀，位不当也。 日中见斗，幽不明也。 遇其夷主，吉。行也。";
                    break;
            case "丰五":
                    this.data.title2 = "六五之吉，有庆也。";
                    break;
            case "丰上":
                    this.data.title2 = "丰其屋，天际翔也。 窥其户，阒其无人，自藏也。";
                    break;
            case "旅初":
                    this.data.title2 = "旅琐琐，志穷灾也。";
                    break;
            case "旅二":
                    this.data.title2 = "得童仆贞，终无尤也。";
                    break;
            case "旅三":
                    this.data.title2 = "旅焚其次，亦以伤矣。 以旅与下，其义丧也。";
                    break;
            case "旅四":
                    this.data.title2 = "旅于处，未得位也。 得其资斧，心未快也。";
                    break;
            case "旅五":
                    this.data.title2 = "终以誉命，上逮也。";
                    break;
            case "旅上":
                    this.data.title2 = "以旅在上，其义焚也。 丧牛于易，终莫之闻也。";
                    break;
            case "巽初":
                    this.data.title2 = "进退，志疑也。 利武人之贞，志治也。";
                    break;
            case "巽二":
                    this.data.title2 = "纷若之吉，得中也。";
                    break;
            case "巽三":
                    this.data.title2 = "频巽之吝，志穷也。";
                    break;
            case "巽四":
                    this.data.title2 = "田获三品，有功也。";
                    break;
            case "巽五":
                    this.data.title2 = "九五之吉，位正中也。";
                    break;
            case "巽上":
                    this.data.title2 = "巽在□下，上穷也。 丧其资斧，正乎凶也。";
                    break;
            case "兑初":
                    this.data.title2 = "和兑之吉，行未疑也。";
                    break;
            case "兑二":
                    this.data.title2 = "孚兑之吉，信志也。";
                    break;
            case "兑三":
                    this.data.title2 = "来兑之凶，位不当也。";
                    break;
            case "兑四":
                    this.data.title2 = "九四之喜，有庆也。";
                    break;
            case "兑五":
                    this.data.title2 = "孚于剥，位正当也。";
                    break;
            case "兑上":
                    this.data.title2 = "上六引兑，未光也。";
                    break;
            case "涣初":
                    this.data.title2 = "初六之吉，顺也。";
                    break;
            case "涣二":
                    this.data.title2 = "涣奔其机，得愿也。";
                    break;
            case "涣三":
                    this.data.title2 = "涣其躬，志在外也。";
                    break;
            case "涣四":
                    this.data.title2 = "涣其群，元吉。光大也。";
                    break;
            case "涣五":
                    this.data.title2 = "王居无咎，正位也。";
                    break;
            case "涣上":
                    this.data.title2 = "涣其血，远害也。";
                    break;
            case "节初":
                    this.data.title2 = "不出户庭，知通塞也。";
                    break;
            case "节二":
                    this.data.title2 = "不出门庭，失时极也。";
                    break;
            case "节三":
                    this.data.title2 = "不节之嗟，又谁咎也。";
                    break;
            case "节四":
                    this.data.title2 = "安节之亨，承上道也。";
                    break;
            case "节五":
                    this.data.title2 = "甘节之吉，居位中也。";
                    break;
            case "节上":
                    this.data.title2 = "苦节贞凶，其道穷也。";
                    break;
            case "中孚初":
                    this.data.title2 = "初九虞吉，志未变也。";
                    break;
            case "中孚二":
                    this.data.title2 = "其子和之，中心愿也。";
                    break;
            case "中孚三":
                    this.data.title2 = "可鼓或罢，位不当也。";
                    break;
            case "中孚四":
                    this.data.title2 = "马匹亡，绝类上也。";
                    break;
            case "中孚五":
                    this.data.title2 = "有孚挛如，位正当也。";
                    break;
            case "中孚上":
                    this.data.title2 = "翰音登于天，何可长也。";
                    break;
            case "小过初":
                    this.data.title2 = "飞鸟以凶，不可如何也。";
                    break;
            case "小过二":
                    this.data.title2 = "不及其君，臣不可过也。";
                    break;
            case "小过三":
                    this.data.title2 = "从或戕之，凶如何也。";
                    break;
            case "小过四":
                    this.data.title2 = "弗过遇之，位不当也。 往厉必戒，终不可长也。";
                    break;
            case "小过五":
                    this.data.title2 = "密云不雨，已上也。";
                    break;
            case "小过上":
                    this.data.title2 = "弗遇过之，已亢也。";
                    break;
            case "既济初":
                    this.data.title2 = "曳其轮， 义无咎也。";
                    break;
            case "既济二":
                    this.data.title2 = "七日得，以中道也。";
                    break;
            case "既济三":
                    this.data.title2 = "三年克之，惫也。";
                    break;
            case "既济四":
                    this.data.title2 = "终日戒，有所疑也。";
                    break;
            case "既济五":
                    this.data.title2 = "东邻杀牛，不如西邻之时也。实受其福，吉大来也。";
                    break;
            case "既济上":
                    this.data.title2 = "濡其首厉，何可久也。";
                    break;
            case "未济初":
                    this.data.title2 = "濡其尾，亦不知极也。";
                    break;
            case "未济二":
                    this.data.title2 = "九二贞吉，中以行正也。";
                    break;
            case "未济三":
                    this.data.title2 = "未济征凶，位不当也。";
                    break;
            case "未济四":
                    this.data.title2 = "贞吉悔亡，志行也。";
                    break;
            case "未济五":
                    this.data.title2 = "君子之光，其晖吉也。";
                    break;
            case "未济上":
                    this.data.title2 = "饮酒濡首，亦不知节也。";
                    break;

            default:
                this.data.title2 = "???";
                break;

        }
      // 更新数据 
        this.setData({
            title2: this.data.title2
        })
  
    }

})
