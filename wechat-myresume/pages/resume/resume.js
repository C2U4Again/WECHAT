Page({
    data: {
      resu1:{
        width:0,
        height:0,
        name:"xidada",
        age:23,
        englishName:"Lorena",
        jj:"",
        job:"Java 软件工程师",
        exp:"1年实习工作经历",
        tel:"18891578115",
        sex:"女",
        native:"陕西省三原",
        pro:"软件工程",
        record:"本科",
        skill:"CET4",
        email:"lorena_kang@foxmail.com",
        tech:[
          { name: "熟练掌握 Java 编程语言。",percent:90},
          { name: "掌握 mysql，oracle 数据库的使用，能熟练使用 SQL 语句进行编程。",percent: 80},
          { name:"熟悉面向对象的设计思想",percent:80},
          { name:"熟悉数据结构和算法，排序算法、树、图、DFS 等。",percent:75},
          { name: "熟悉Html5、Css3、JavaScript、JavaServerPages、Servlet、JQuery等JavaWeb常用开发技术。",percent: 85},    
          { name: "熟练应用SSM框架。",percent: 70},
          { name: "有良好的编程习惯，熟练操作office办公软件。",percent:80},
          { name: "掌握设计模式。",percent: 40},
          { name: "了解C、python 、汇编等编程语言",percent:35}
        ],
        edu:[
          {
            school:"宝鸡文理学院",
            major:"软件工程（本科）",
            year:"2017/09-2021/07",
            desc:"本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术、能够在计算机软件领域中从事软件设计、开发和管理的高级人才。主修课程Java、数据结构与算法、操作系统、数据库。"
          }
        ],
        honor:[
          {name:"2018年计算机学院“互联网+”大学生创新创业大赛优秀奖"},
          {name:"2017-2018年度“国家励志奖学金”"},
          {name:"2017-2018年度“三好学生”"},
          {name:"2018-2019年度“校级三等奖学金”"},
          {name:"2020年“第四届全国大学生环保知识竞赛优秀奖”"},
          {name:"CET4"}
        ],
        project:[
          {
            job:"程序员",
            name:"“晓晓”萌宠信息管理平台",
            date:"2020.6-2020.7",
            techenv:"jdk11、tomcat9.0、mysql5、eclipde、HBuilder、spring boot、mybatis、Maven、html、css",
            desc:"和小组成员一起设计一款萌宠信息管理系统，主要实现的功能包括对萌宠的添加、删除、修改、查询、交易。",
            duty:"1.完成需求分析。\n 2.完成后台对萌宠信息的管理（包括添加、删除、修改等功能）。\n3.负责代码编写。",
            summary:"1、通过此次项目，我掌握了开发软件撰写开发文档所需经历的全过程。\n2、本次项目设计，使我对Spring Boot框架更加的熟练。\n3.本次项目不仅使我对以前 的所学有了系统性的复习，更重要的是学会了小组合作的技巧和方式。"
          }
        ],
        introduce:"1.领悟能力、自学能力强，可以快速掌握新的技能；自学 python、Javaweb、算法等技术。\n2.有良好的沟通能力和团队协作能力，曾担任学校创业协会并担任部长，多次组织各类创业活动。\n3.多次组织各类创业活动 。"
      }
    },
    //事件处理函数
    bindViewTap: function () {
      wx.navigateTo({
        url: 'save'
      })
    }
  })
  