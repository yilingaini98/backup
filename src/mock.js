//引入mockjs
const Mock = require('mockjs');

//公司管理数据
Mock.mock('/api/Company', (req, res) => {
    return Mock.mock([
        {
            'data|10-31':[{
                C_FullName: '@natural',
                C_Nature: '@name',
                C_FoundedDate: '@date("yyyy-MM-dd")',
                C_Manager:'@name',
                C_BusinessScope:'@county(true)',
                C_Mark:'@zip'
            }]
        },
        {
            'pageparam':{
                records: '@natural(1, 500)',
            }
        }
    ])
});

//数据字典数据
Mock.mock('/api/DataDictionary', (req, res) => {
    return Mock.mock([
        {
            'data|10-31':[{
                ItemName: '@natural',
                ItemValue: '@name',
                Simplicity: '@date("yyyy-MM-dd")',
                Sortable:'@name',
                EnabledMark:'true',
                Mark:'@zip'
            }]
        },
        {
            'pageparam':{
                records: '@natural(1, 30)',
            }
        }
    ])
});
Mock.mock('/api/Tree', (req, res) => {
    return Mock.mock([
        {
            'data|2-15':[{
                'id|+1': 1,
                label: '@name',
                children: [{
                    'id|+1': 1000,
                    label: '@name',
                }]
            }],
        },
    ])
});

