var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = (x - margin.right - margin.left),
    height = .8 * (y - margin.top - margin.bottom);

var root;
var names;
var rows;

var diameter = Math.max(Math.min(height, width), 100),
    format = d3.format("$,.0f");

var galaxy = d3.layout.galaxy()
    .size([width, height])
    .spread(4)
    //    .initialAngle(0) // radians from down
    .value(function (d) {
        return d.size;
    });


function main2(){
    // var jsonData = [{
    //     "code": "CHK01",
    //     "name": "组成与构成",
    //     "parentCode" : ""
    // },{
    //     "code": "CHK02",
    //     "name": "分类与性质",
    //     "parentCode" : ""
    // },{
    //     "code": "CHK0101",
    //     "name": "组成",
    //     "parentCode" : "CHK01"
    // },{
    //     "code": "CHK0102",
    //     "name": "构成",
    //     "parentCode" : "CHK01"
    // },{
    //     "code": "CHK0101",
    //     "name": "混合物",
    //     "parentCode" : "CHK02"
    // },{
    //     "code": "CHK0102",
    //     "name": "纯净物",
    //     "parentCode" : "CHK02"
    // },];

    var jsonData = {
        "id": "debea3c1-faa2-4a80-86d0-40e7b7f6f1f7",
        "tag_type": "knowledge",
        "name": "知识点",
        "course": "CH",
        "children": [
            {
                "code": "CHK01",
                "name": "组成与构成",
                "children": [
                    {
                        "code": "CHK0101",
                        "name": "组成",
                        "children": []
                    },
                    {
                        "code": "CHK0102",
                        "name": "构成",
                        "children": []
                    }
                ]
            },{
                "code": "CHK02",
                "name": "分类与性质",
                "children": [
                    {
                        "code": "CHK0201",
                        "name": "混合物",
                        "children": []
                    },
                    {
                        "code": "CHK0202",
                        "name": "纯净物",
                        "children": []
                    }
                ]
            }
        ]
    };

    jsonData = {"id":"debea3c1-faa2-4a80-86d0-40e7b7f6f1f7","tag_type":"knowledge","name":"知识点","course":"CH","curriculum_criteria":"2011","create_by":"2080068281","update_by":"2080068281","create_date":"2016-07-29T14:16:57.789+0800","update_date":"2016-08-05T09:13:12.335+0800","children":[{"code":"CHK01","name":"组成与构成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0101","name":"组成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK010101","name":"元素","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A1","code":"A1-3","description":"知道原子是由原子核和核外电子构成，原子核一般是由质子和中子构成"},{"ability":"A1","code":"A1-4","description":"辨识常见的分子和原子、离子符号"},{"ability":"A1","code":"A1-5","description":"辨识常见分子的微观图示"},{"ability":"A2","code":"A2-1","description":"建立物质与分子的对应关系"},{"ability":"A2","code":"A2-2","description":"建立原子与分子、离子的关系"},{"ability":"A2","code":"A2-3","description":"建立原子中质子数、核电荷数与核外电子数的对应关系"},{"ability":"A2","code":"A2-4","description":"建立最外层电子数与原子性质之间的关联"},{"ability":"A2","code":"A2-5","description":"能建立熟悉的宏观现象（三态变化、扩散等）与微粒性质的关联"},{"ability":"A3","code":"A3-2","description":"利用化学史论证分子的存在"}],"standards":[{"level":"up","quotas":["A1-3","A1-4","A1-5"]},{"level":"good","quotas":["A2-1","A2-2","A2-3","A2-4","A2-5"]},{"level":"outstanding","quotas":["A3-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0101","relation":null,"uts_status":"not_weak"}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK01","relation":null},{"code":"CHK0102","name":"构成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK010201","name":"分子","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A1","code":"A1-1","description":"认识物质的微粒性"},{"ability":"A1","code":"A1-2","description":"知道分子、原子、离子等都是构成物质的微粒"},{"ability":"A1","code":"A1-6","description":"辨识前18号元素的原子结构示意图"}],"standards":[{"level":"up","quotas":["A1-1","A1-2","A1-6"]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0102","relation":null,"uts_status":"weak"},{"code":"CHK010202","name":"原子","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0102","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK01","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK02","name":"分类与性质","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0201","name":"混合物","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK020101","name":"溶液","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0201","relation":null},{"code":"CHK020102","name":"空气","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0201","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK02","relation":null},{"code":"CHK0202","name":"纯净物","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK020201","name":"金属","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A3","code":"A3-3","description":"利用物理变化和化学变化论证分子是保持物质化学性质的最小微粒"},{"ability":"B1","code":"B1-1","description":"利用物质的微粒性分析解释宏观事实和现象"},{"ability":"B1","code":"B1-2","description":"从微观的角度分析物质的构成"},{"ability":"B1","code":"B1-3","description":"基于微观的角度分析解释物质性质"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["A3-3","B1-1","B1-2","B1-3"]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null,"uts_status":"not_weak"},{"code":"CHK020202","name":"非金属（O2）","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B3","code":"B3-1","description":"设计实验证温度对分子运动的影响"},{"ability":"B3","code":"B3-2","description":"设计实验证温度对分子间距的影响"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B3-1","B3-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null,"uts_status":"weak"},{"code":"CHK020203","name":"氧化物（CO2）","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null},{"code":"CHK020204","name":"酸和碱","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null},{"code":"CHK020205","name":"盐","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK02","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK03","name":"变化与反应","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0301","name":"物理变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK030101","name":"物理变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0301","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK03","relation":null},{"code":"CHK0302","name":"化学变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK030201","name":"反应规律","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A3","code":"A3-1","description":"利用实验或经验事实说明物质的微粒性"},{"ability":"A3","code":"A3-4","description":"利用原子结构化学史论证原子结构"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["A3-1"]},{"level":"outstanding","quotas":["A3-4"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null,"uts_status":"not_weak"},{"code":"CHK030202","name":"化学方程式","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null},{"code":"CHK030203","name":"基本反应类型","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK03","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK04","name":"转化与应用","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0401","name":"存在、保存与制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK040101","name":"存在、保存与制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0401","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK04","relation":null},{"code":"CHK0402","name":"化学与社会发展","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK040201","name":"能源与资源","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040202","name":"材料","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040203","name":"健康","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040204","name":"环境","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK04","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK05","name":"实验与探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0501","name":"实验","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK050101","name":"仪器使用","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0501","relation":null},{"code":"CHK050102","name":"基本操作","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0501","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK05","relation":null},{"code":"CHK0502","name":"探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK050202","name":"规律探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B1","code":"B1-4","description":"基于微观的角度认识物质变化"},{"ability":"B2","code":"B2-1","description":"根据化学变化中某些物质的构成推其他物质"},{"ability":"B2","code":"B2-2","description":"根据分子和原子知识推出陌生物质的化学式的含义"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["B1-4","B2-1"]},{"level":"outstanding","quotas":["B2-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null,"uts_status":"not_weak"},{"code":"CHK050203","name":"物质制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B2","code":"B2-3","description":"根据分子和原子知识推出化学变化中质量守恒"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B2-3"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null,"uts_status":"weak"},{"code":"CHK050204","name":"物质分离","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B3","code":"B3-3","description":"设计实验证压强对分子间距的影响"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B3-3"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050205","name":"物质鉴别与检验","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"C1","code":"C1-1","description":"系统分析转化体系中多物质的分子、原子（离子）关系"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["C1-1"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050206","name":"探究的一般过程","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"C1","code":"C1-2","description":"从微观角度系统分析压强变化"},{"ability":"C1","code":"C1-3","description":"根据实验或经验事实推陌生物质的构成"},{"ability":"C2","code":"C2-1","description":"系统探究物质的构成"},{"ability":"C2","code":"C2-2","description":"根据物质的构成预测产物并设计实验验证"},{"ability":"C3","code":"C3-1","description":"从微观角度分析物质密度差异"},{"ability":"C3","code":"C3-2","description":"设计反应实现物质转化"},{"ability":"C3","code":"C3-3","description":"根据事实体会分子间作用力或化学键的存在，且不同分子的相互作用会有所不同"},{"ability":"C3","code":"C3-4","description":"将物质结构、微粒性质与物质宏观功能用途建立远联系，如：将原子核、电子带有电荷与电流建立联系"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["C1-2","C1-3","C2-1"]},{"level":"excellence","quotas":["C2-2","C3-1","C3-2","C3-3","C3-4"]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050201","name":"性质探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK05","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null}],"store_id":"","source_file_name":"知识点导入模板v1.0.xlsx","tagId":"debea3c1-faa2-4a80-86d0-40e7b7f6f1f7","nodes":[{"code":"CHK01","name":"组成与构成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0101","name":"组成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK010101","name":"元素","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A1","code":"A1-3","description":"知道原子是由原子核和核外电子构成，原子核一般是由质子和中子构成"},{"ability":"A1","code":"A1-4","description":"辨识常见的分子和原子、离子符号"},{"ability":"A1","code":"A1-5","description":"辨识常见分子的微观图示"},{"ability":"A2","code":"A2-1","description":"建立物质与分子的对应关系"},{"ability":"A2","code":"A2-2","description":"建立原子与分子、离子的关系"},{"ability":"A2","code":"A2-3","description":"建立原子中质子数、核电荷数与核外电子数的对应关系"},{"ability":"A2","code":"A2-4","description":"建立最外层电子数与原子性质之间的关联"},{"ability":"A2","code":"A2-5","description":"能建立熟悉的宏观现象（三态变化、扩散等）与微粒性质的关联"},{"ability":"A3","code":"A3-2","description":"利用化学史论证分子的存在"}],"standards":[{"level":"up","quotas":["A1-3","A1-4","A1-5"]},{"level":"good","quotas":["A2-1","A2-2","A2-3","A2-4","A2-5"]},{"level":"outstanding","quotas":["A3-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0101","relation":null,"uts_status":"not_weak"}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK01","relation":null},{"code":"CHK0102","name":"构成","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK010201","name":"分子","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A1","code":"A1-1","description":"认识物质的微粒性"},{"ability":"A1","code":"A1-2","description":"知道分子、原子、离子等都是构成物质的微粒"},{"ability":"A1","code":"A1-6","description":"辨识前18号元素的原子结构示意图"}],"standards":[{"level":"up","quotas":["A1-1","A1-2","A1-6"]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0102","relation":null,"uts_status":"weak"},{"code":"CHK010202","name":"原子","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0102","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK01","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK02","name":"分类与性质","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0201","name":"混合物","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK020101","name":"溶液","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0201","relation":null},{"code":"CHK020102","name":"空气","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0201","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK02","relation":null},{"code":"CHK0202","name":"纯净物","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK020201","name":"金属","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A3","code":"A3-3","description":"利用物理变化和化学变化论证分子是保持物质化学性质的最小微粒"},{"ability":"B1","code":"B1-1","description":"利用物质的微粒性分析解释宏观事实和现象"},{"ability":"B1","code":"B1-2","description":"从微观的角度分析物质的构成"},{"ability":"B1","code":"B1-3","description":"基于微观的角度分析解释物质性质"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["A3-3","B1-1","B1-2","B1-3"]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null,"uts_status":"not_weak"},{"code":"CHK020202","name":"非金属（O2）","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B3","code":"B3-1","description":"设计实验证温度对分子运动的影响"},{"ability":"B3","code":"B3-2","description":"设计实验证温度对分子间距的影响"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B3-1","B3-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null,"uts_status":"weak"},{"code":"CHK020203","name":"氧化物（CO2）","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null},{"code":"CHK020204","name":"酸和碱","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null},{"code":"CHK020205","name":"盐","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0202","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK02","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK03","name":"变化与反应","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0301","name":"物理变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK030101","name":"物理变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0301","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK03","relation":null},{"code":"CHK0302","name":"化学变化","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK030201","name":"反应规律","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"A3","code":"A3-1","description":"利用实验或经验事实说明物质的微粒性"},{"ability":"A3","code":"A3-4","description":"利用原子结构化学史论证原子结构"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["A3-1"]},{"level":"outstanding","quotas":["A3-4"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null,"uts_status":"not_weak"},{"code":"CHK030202","name":"化学方程式","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null},{"code":"CHK030203","name":"基本反应类型","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0302","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK03","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK04","name":"转化与应用","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0401","name":"存在、保存与制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK040101","name":"存在、保存与制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0401","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK04","relation":null},{"code":"CHK0402","name":"化学与社会发展","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK040201","name":"能源与资源","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040202","name":"材料","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040203","name":"健康","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null},{"code":"CHK040204","name":"环境","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0402","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK04","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null},{"code":"CHK05","name":"实验与探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK0501","name":"实验","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK050101","name":"仪器使用","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0501","relation":null},{"code":"CHK050102","name":"基本操作","hidden":false,"uts_standards":null,"excellence_standards":null,"children":null,"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0501","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK05","relation":null},{"code":"CHK0502","name":"探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[{"code":"CHK050202","name":"规律探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B1","code":"B1-4","description":"基于微观的角度认识物质变化"},{"ability":"B2","code":"B2-1","description":"根据化学变化中某些物质的构成推其他物质"},{"ability":"B2","code":"B2-2","description":"根据分子和原子知识推出陌生物质的化学式的含义"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":["B1-4","B2-1"]},{"level":"outstanding","quotas":["B2-2"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null,"uts_status":"not_weak"},{"code":"CHK050203","name":"物质制备","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B2","code":"B2-3","description":"根据分子和原子知识推出化学变化中质量守恒"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B2-3"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null,"uts_status":"weak"},{"code":"CHK050204","name":"物质分离","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"B3","code":"B3-3","description":"设计实验证压强对分子间距的影响"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["B3-3"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050205","name":"物质鉴别与检验","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"C1","code":"C1-1","description":"系统分析转化体系中多物质的分子、原子（离子）关系"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["C1-1"]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050206","name":"探究的一般过程","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[{"ability":"C1","code":"C1-2","description":"从微观角度系统分析压强变化"},{"ability":"C1","code":"C1-3","description":"根据实验或经验事实推陌生物质的构成"},{"ability":"C2","code":"C2-1","description":"系统探究物质的构成"},{"ability":"C2","code":"C2-2","description":"根据物质的构成预测产物并设计实验验证"},{"ability":"C3","code":"C3-1","description":"从微观角度分析物质密度差异"},{"ability":"C3","code":"C3-2","description":"设计反应实现物质转化"},{"ability":"C3","code":"C3-3","description":"根据事实体会分子间作用力或化学键的存在，且不同分子的相互作用会有所不同"},{"ability":"C3","code":"C3-4","description":"将物质结构、微粒性质与物质宏观功能用途建立远联系，如：将原子核、电子带有电荷与电流建立联系"}],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":["C1-2","C1-3","C2-1"]},{"level":"excellence","quotas":["C2-2","C3-1","C3-2","C3-3","C3-4"]}],"parent_code":"CHK0502","relation":null},{"code":"CHK050201","name":"性质探究","hidden":false,"uts_standards":null,"excellence_standards":null,"children":[],"knowledge_core_id":null,"knowledge_type":"core_concept","related_teaching_materials":[{"publishing_company":"人教版","grade":"K9","term":"LAST_TERM"},{"publishing_company":"北京版","grade":"K9","term":"NEXT_TERM"}],"quotas":[],"standards":[{"level":"up","quotas":[]},{"level":"good","quotas":[]},{"level":"outstanding","quotas":[]},{"level":"excellence","quotas":[]}],"parent_code":"CHK0502","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"CHK05","relation":null}],"knowledge_core_id":null,"knowledge_type":"subject","related_teaching_materials":[],"quotas":[],"standards":[],"parent_code":"","relation":null}]};


    root = unflatten2(jsonData.children, "化学");

    var lines = d3.svg.line(); // unused !
    var nodes = galaxy.nodes(root);
    var links = galaxy.links(nodes);

    // var link = svg.selectAll(".link")
    //     .data(links)
    //     .enter().append("line")
    //     .attr("class", "link")
    //     .style("stroke-width", function (d) {
    //         return Math.sqrt(d.value);
    //     })
    //     .call(truncated_line)
    //     ;

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return 1 });
    function truncated_line(l) {
        function len(d) {
            return Math.sqrt(Math.pow((d.target.y - d.source.y), 2) +
                Math.pow((d.target.x - d.source.x), 2));
        }

        l.attr('x1', function (d) {
            return d.source.x +
                (d.target.x - d.source.x) * d.source.r / len(d);
        });
        l.attr('y1', function (d) {
            return d.source.y +
                (d.target.y - d.source.y) * d.source.r / len(d);
        });
        l.attr('x2', function (d) {
            return d.target.x +
                (d.source.x - d.target.x) * d.target.r / len(d);
        });
        l.attr('y2', function (d) {
            return d.target.y +
                (d.source.y - d.target.y) * d.target.r / len(d);
        });
    }

    var node = svg.datum(root).selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", function (d) {
            return d.children ? "node" : "leaf node";
        })
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
        ;
    node.append("title")
        .text(function (d) {
            return d.name;
        })
    ;
    node.append("circle")
        .attr("r", function (d) {
            return d.r;
        })
    ;
    node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d.name.substring(0, d.r / 3);
        })
    ;
    node.on('click',function(d){
        alert('adsf');
    })
}


function main(file) {
    main2()
    // d3.text(file,
    //     function (error, txtdata) {
    //         rows = d3.csv.parseRows(txtdata,
    //             function (d, i) {
    //                 if (i == 0) {
    //                     names = d;
    //                     return null;
    //                 }
    //                 else {
    //                     d[d.length - 1] = +d[d.length - 1];
    //                     return d;
    //                 }
    //             });
    //
    //         rows.forEach(function (r, i, a) {
    //             var rnames = {};
    //             for (var j = 0; j < r.length - 1; j++) {
    //                 if (rnames[r[j].toLowerCase()]) {
    //                     r[j] = '';
    //                 }
    //                 rnames[r[j].toLowerCase()] = true;
    //             }
    //         });
    //         root = unflatten(rows, "FY11 Federal Budget");
    //         debugger;
    //         var lines = d3.svg.line(); // unused !
    //         var nodes = galaxy.nodes(root);
    //         var links = galaxy.links(nodes);
    //
    //         var link = svg.selectAll(".link")
    //             .data(links)
    //             .enter().append("line")
    //             .attr("class", "link")
    //             .style("stroke-width", function (d) {
    //                 return Math.sqrt(d.value);
    //             })
    //             .call(truncated_line)
    //             ;
    //
    //         function truncated_line(l) {
    //             function len(d) {
    //                 return Math.sqrt(Math.pow((d.target.y - d.source.y), 2) +
    //                     Math.pow((d.target.x - d.source.x), 2));
    //             }
    //
    //             l.attr('x1', function (d) {
    //                 return d.source.x +
    //                     (d.target.x - d.source.x) * d.source.r / len(d);
    //             });
    //             l.attr('y1', function (d) {
    //                 return d.source.y +
    //                     (d.target.y - d.source.y) * d.source.r / len(d);
    //             });
    //             l.attr('x2', function (d) {
    //                 return d.target.x +
    //                     (d.source.x - d.target.x) * d.target.r / len(d);
    //             });
    //             l.attr('y2', function (d) {
    //                 return d.target.y +
    //                     (d.source.y - d.target.y) * d.target.r / len(d);
    //             });
    //         }
    //
    //         var node = svg.datum(root).selectAll(".node")
    //             .data(nodes)
    //             .enter().append("g")
    //             .attr("class", function (d) {
    //                 return d.children ? "node" : "leaf node";
    //             })
    //             .attr("transform", function (d) {
    //                 return "translate(" + d.x + "," + d.y + ")";
    //             })
    //             ;
    //         node.append("title")
    //             .text(function (d) {
    //                 return d.name + ": " + format(d.value) + "B";
    //             })
    //         ;
    //         node.append("circle")
    //             .attr("r", function (d) {
    //                 return d.r;
    //             })
    //         ;
    //         node.append("text")
    //             .attr("dy", ".3em")
    //             .style("text-anchor", "middle")
    //             .text(function (d) {
    //                 return d.name.substring(0, d.r / 3);
    //             })
    //         ;
    //         node.on('click',function(d){
    //             alert('adsf');
    //         })
    //
    //
    //     });
}//main

var svg = d3.select(".chart")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    ;





var allnodesTemp = [];

function unflatten2(datas, rootName) {
    var root = {name: rootName, children: [], childmap: {}, value: 0, depth: 0};
    recursion(datas,root);
    allnodesTemp.forEach(function (n, i, a) {
        if (n.children.length === 0) {
            n.size = n.value;
            delete n.children;
        }
    });
    return root;
}


function recursion(datas,parent) {
    var currentDepth = parent.depth+1;
    for (var i = 0; i < datas.length; i++) {
        var item = datas[i],
            node,
            label = item.name;
        if (!parent.childmap[label]) {
            node = {
                name: label,
                children: [],
                childmap: {},
                parent: parent,
                value: currentDepth,
                depth: currentDepth
            };
            allnodesTemp.push(node);
            if (!!label) {
                parent.childmap[label] = node;
                parent.children.push(node);
            }
        }
        if(item.children && item.children.length>0){
            recursion(item.children,node);
        }
    }
}




function unflatten(rows, rootName) {
//    console.log("foo:", rows);
    var root = {name: rootName, children: [], childmap: {}, value: 0, depth: 0};
    var allnodes = [];
    for (var i = 0; i < rows.length; i++) { // rows
        var row = rows[i];
        for (var c = 0, parent = root; c < names.length - 1; c++) { //cols
            var node, label = row[c];
            if (!parent.childmap[label]) {
                node = {
                    name: label, children: [],
                    childmap: {}, parent: parent,
                    value: 0, depth: parent.depth + 1
                };
                allnodes.push(node);
                if (!!label) {
                    parent.childmap[label] = node;
                    parent.children.push(node);
                }
            }
            if (c == names.length - 2) { // last column of names
                node.value = row[row.length - 1];
                // add value to all parents value;
                for (var p = parent; p; p = p.parent) {
                    p.value += node.value;
                }
            }
            if (!!label) {
                parent = parent.childmap[label];
            }
        }
    }
    // remove the children of leaf nodes
    allnodes.forEach(function (n, i, a) {
        if (n.children.length === 0) {
            n.size = n.value;
            delete n.children;
        }
    });
    return root;
};
