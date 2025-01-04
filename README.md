## Jap Mobile

### react-native@0.73.9

从`0.74`开始，启用新的架构，很多库的兼容性有问题。`0.73`的最新版本是`0.73.11`，但是有`release log`的是`0.73.9`。

从这个版本开始，`Java`变为`kt`，而且兼容`Flipper`，目前来看`0.73.9`是最佳选择。

### Git commit rules

```java
feat：新功能
fix：修复 Bug
docs：文档更新
style：代码风格调整（不影响代码运行）
refactor：代码重构（不影响功能）
perf：性能优化
test：添加或修改测试
chore：构建工具或依赖的修改
ci：CI 配置或脚本修改
revert：回滚提交
```

### 环境

- 开发阶段：.env.development、.env.local
- 测试阶段：.env.test、.env.qa
- 预生产阶段：.env.staging
- 生产阶段：.env.production
