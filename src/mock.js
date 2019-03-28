//引入mockjs
const Mock = require('mockjs');

//使用mockjs模拟数据
Mock.mock('/api/company', (req, res) => {
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
                // currentPage: 1,
                records: '@natural(1, 500)',
            }
        }
    ])
});

