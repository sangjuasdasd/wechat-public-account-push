/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6d4392622303d6df',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'wx6d4392622303d6df',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [gh_e9380c05575c
    {
      // 想要发送的人的名字
      name: '早上好 考研人',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okGg-5q6U_-BVc3ruvsveMqUW890',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mzpg5DaRR9yL6G8Oo7lzXmz7AxL5ALM0z702PyZIbMg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '殷可欣', year: '2002', date: '09-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '考试', name: '笔试', year: '2021', date: '12-26',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我已经坚持xxxx天了的配置
      customizedDateList: [
        // 努力的日子
        { keyword: 'love_day', date: '2023-01-13' },
        // 我已经活了
        { keyword: 'marry_day', date: '2002-09-16' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mzpg5DaRR9yL6G8Oo7lzXmz7AxL5ALM0z702PyZIbMg',

  CALLBACK_USERS: [ gh_e9380c05575c
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okGg-5ukdWeEWPYXLdsdNeCqeDcg',
    }
  ],

}

module.exports = USER_CONFIG

