module.exports = {
  // 自定义types
  types: [
    {
      value: 'feat',
      name: '新功能',
    },
    {
      value: 'fix',
      name: 'bug修复',
    },
    {
      value: 'docs',
      name: '文档更新',
    },
    {
      value: 'style',
      name: '不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)',
    },
    {
      value: 'refactor',
      name: '重构代码(既没有新增功能，也没有修复bug)',
    },
    {
      value: 'perf',
      name: '改进性能、体验优化的代码更改',
    },
    {
      value: 'test',
      name: '新增测试或更新现有测试用例',
    },
    {
      value: 'build',
      name: '修改项目构建系统(例如 glup， webpack， rollup，npm的配置等.xxx) 的提交',
    },
    {
      value: 'ci',
      name: '修改项目继续集成流程(例如 Travis， Jenkins， GitLab CI， Circle等) 的提交',
    },
    {
      value: 'chore',
      name: '构建过程或辅助工具以及库（如文档生成）的更改',
    },
    {
      value: 'revert',
      name: '回滚某个更早之前的提交',
    },
    {
      value: 'merge',
      name: '分支合并 Merge branch',
    },
    {
      value: 'config',
      name: '修改或添加配置文件',
    },
    {
      value: 'WIP',
      name: '开发中',
    },
  ],
  // 自定义scopes
  //   scopes: [
  //     { name: 'controllers' },
  //     { name: 'core' },
  //     { name: 'core/config' },
  //     { name: 'core/constants' },
  //     { name: 'core/decorators' },
  //     { name: 'core/enums' },
  //     { name: 'core/filters' },
  //     { name: 'core/middlewares' },
  //     { name: 'core/pipes' },
  //     { name: 'core/setup' },
  //     { name: 'core' },`
  //     { name: 'models' },
  //     { name: 'shared' },
  //     { name: '账号模块' },
  //   ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种提交类型:',
    scope: '选择修改涉及的范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:',
    body: '详细说明，使用"|"分隔开可以换行(可选)：',
    breaking: '非兼容性破坏性变化说明(可选):',
    footer: '关联关闭的issue(可选)。例如:#31 #34。对应“package.json”文件里“bugs.url”',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 仅在feat、fix时填写破坏性更改
  skipQuestions: ['body'], // 跳过任何你想问的问题
  subjectLimit: 100, // 简短说明长度限制
  breaklineChar: '|', // 设置body和footer中的换行符
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
