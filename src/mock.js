//引入mockjs
const Mock = require('mockjs');

//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    return Mock.mock({
        'data|10-32':[{
            date: '@natural',
            name: '@name',
            address: '@county(true)',
            tel:'@zip',
            ext:'@zip'
        }]
    })
});
