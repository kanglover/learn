## 微前端

微前端架构是一种将单体应用拆分成多个子应用的架构模式，每个子应用可以独立开发、测试、部署。

### 微前端优势

- 同步更新
- 增量升级
- 简单、解耦的代码库
- 独立开发、部署

### 微前端解决方案

- 基座模式：通过搭建基座、配置中心来管理子应用。如基于 single spa 的 qiankun方案。
- 自组织模式：通过约定进行互相调用，但会遇到处理第三方依赖的问题。
- 去中心模式：脱离基座模式，每个应用之间都可以批次分享资源。如基于 webpack5 module federation实现的 EMP 微前端方案，可以实现多个应用彼此共享资源。
