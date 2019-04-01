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

//部门管理数据
Mock.mock('/api/Department', (req, res) => {
    return Mock.mock([
        {
            'data|10-31':[{
                'D_EnCode|+1': 1,
                D_FullName: '@name',
                D_ShortName: '@last',
                D_Nature: '@name',
                D_Manager:'@name',
                D_OuterPhone:'@zip',
                D_InnerPhone:'@zip',
                D_Description:'@zip'
            }]
        },
        {
            'pageparam':{
                records: '@natural(1, 2)',
            }
        }
    ])
});

//角色管理数据
Mock.mock('/api/RoleManager', (req, res) => {
    return Mock.mock([
        {
            'data|1-10':[{
                'R_EnCode|+1': 1,
                R_FullName: '@name',
                R_CreateDate: '@date("yyyy-MM-dd")',
                R_CreateUserName:'@name',
                R_EnabledMark:'有',
                R_Description:'@zip'
            }]
        },
        {
            'pageparam':{
                records: '@natural(1, 2)',
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
                'Sortable|+1': 1,
                EnabledMark: '@name',
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
                name:'@last()',
                label: '@county',
                children: [{
                    'fields|+1': 1000,
                    name:'@last()',
                    label: '@county',
                }]
            }],
        },
    ])
});

