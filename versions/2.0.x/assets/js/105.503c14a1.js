(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{551:function(t,e,a){"use strict";a.r(e);var s=a(26),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"springboot-注册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot-注册"}},[t._v("#")]),t._v(" SpringBoot 注册")]),t._v(" "),e("p",[t._v("本文介绍如何使用"),e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-springboot-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot注册插件"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" 功能介绍")]),t._v(" "),e("p",[t._v("该插件为纯SpringBoot应用提供服务注册发现能力，方便用户在不修改代码的前提下快速接入注册中心（目前只支持"),e("strong",[t._v("ZooKeeper")]),t._v("），同时提供超时重试的能力，实现服务调用的高可用。")]),t._v(" "),e("p",[t._v("插件会根据发起客户端调用Url解析下游服务，并根据负载均衡策略选择优选实例，动态替换Url，完成服务调用。")]),t._v(" "),e("p",[t._v("目前Url支持的格式：http://${domainName}/${serviceName}/${apiPath}，其中"),e("code",[t._v("domainName")]),t._v("为实际调用的域名，"),e("code",[t._v("serviceName")]),t._v("为下游的服务名，"),e("code",[t._v("apiPath")]),t._v("则为下游请求接口路径。")]),t._v(" "),e("h2",{attrs:{id:"参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),e("h3",{attrs:{id:"插件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件配置"}},[t._v("#")]),t._v(" 插件配置")]),t._v(" "),e("p",[t._v("SpringBoot注册插件需要按需修改插件配置文件，可在"),e("code",[t._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/springboot-registry/config/config.yaml")]),t._v("找到该插件的配置文件，配置文件如下所示")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sermant.springboot.registry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableRegistry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启springboot注册能力")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("realmName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www.domain.com             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配域名, 当前版本仅针对url为http://${realmName}/serviceName/api/xx场景生效")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableRequestCount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否开启流量统计, 开启后每次进入插件的流量将都会统计")]),t._v("\n     \n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sermant.springboot.registry.lb")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     \n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lbType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RoundRobin                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 负载均衡策略, 当前支持轮询(RoundRobin)、随机(Random)、响应时间权重(WeightedResponseTime)、最低并发数(BestAvailable)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registryAddress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注册中心地址")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceCacheExpireTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实例过期时间, 单位秒, 若<=0则永不过期")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceRefreshInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实例刷新时间, 单位秒, 必须小于instanceCacheExpireTime")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("refreshTimerInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实例定时检查间隔, 判断实例是否过期, 若其大于instanceRefreshInterval, 则值设置为instanceRefreshInterval")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSocketReadTimeoutRetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 针对{@link java.net.SocketTimeoutException}: read timed out是否需要重试, 默认开启")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSocketConnectTimeoutRetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上, 主要针对connect timed out, 通常在连接不上下游抛出")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableTimeoutExRetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重试场景, 针对{@link java.util.concurrent.TimeoutException}, 是否需要重试, 默认开启, 该超时多用于异步场景, 例如Future, MinimalHttpAsyncClient")]),t._v("\n")])])]),e("p",[t._v("配置项说明如下:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数键")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("是否必须")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("sermant.springboot.registry.enableRegistry")]),t._v(" "),e("td",[t._v("是否开启springboot注册能力（true/false）")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.realmName")]),t._v(" "),e("td",[t._v("匹配域名, 当前版本仅针对url为"),e("strong",[t._v("http://${realmName}/serviceName/api/xx")]),t._v("场景生效")]),t._v(" "),e("td",[t._v("www.domain.com")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.enableRequestCount")]),t._v(" "),e("td",[t._v("是否开启流量统计, 开启后每次进入插件的流量将都会统计（true/false）")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.lbType")]),t._v(" "),e("td",[t._v("负载均衡类型, 当前支持轮询(RoundRobin)、随机(Random)、响应时间权重(WeightedResponseTime)、最低并发数(BestAvailable)")]),t._v(" "),e("td",[t._v("RoundRobin")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.registryAddress")]),t._v(" "),e("td",[t._v("注册中心地址")]),t._v(" "),e("td",[t._v("127.0.0.1:2181")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.instanceCacheExpireTime")]),t._v(" "),e("td",[t._v("实例过期时间, 单位秒, 若<=0则永不过期")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.instanceRefreshInterval")]),t._v(" "),e("td",[t._v("实例刷新时间, 单位秒, 必须小于instanceCacheExpireTime")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.refreshTimerInterval")]),t._v(" "),e("td",[t._v("实例定时检查间隔, 判断实例是否过期, 若其大于instanceRefreshInterval, 则值设置为instanceRefreshInterval")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.enableSocketReadTimeoutRetry")]),t._v(" "),e("td",[t._v("针对"),e("strong",[t._v("java.net.SocketTimeoutException: read timed out")]),t._v("是否需要重试（true/false）")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.enableSocketConnectTimeoutRetry")]),t._v(" "),e("td",[t._v("针对"),e("strong",[t._v("java.net.SocketTimeoutException: connect timed out")]),t._v("是否需要重试（true/false）")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是")])]),t._v(" "),e("tr",[e("td",[t._v("sermant.springboot.registry.lb.enableTimeoutExRetry")]),t._v(" "),e("td",[t._v("针对"),e("strong",[t._v("java.util.concurrent.TimeoutException")]),t._v("是否需要重试（true/false）")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是")])])])]),t._v(" "),e("h2",{attrs:{id:"详细治理规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详细治理规则"}},[t._v("#")]),t._v(" 详细治理规则")]),t._v(" "),e("p",[t._v("SpringBoot注册插件需根据指定服务名判断是否需要为请求进行代理，替换url地址。生效服务需基于动态配置中心进行白名单发布，配置发布可以参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/configuration-center.html#sermant动态配置中心模型"}},[t._v("动态配置中心使用手册")]),t._v("。")],1),t._v(" "),e("p",[t._v("其中key值为"),e("strong",[t._v("sermant.plugin.registry")]),t._v("。")]),t._v(" "),e("p",[t._v("group为 "),e("strong",[t._v("app=${service.meta.application}&environment=${service.meta.environment}&service={spring.application.name}")]),t._v(" 即服务配置，其中service.meta.application、service.meta.environment的配置请参考"),e("RouterLink",{attrs:{to:"/zh/document/user-guide/sermant-agent.html#sermant-agent使用参数配置"}},[t._v("Sermant-agent使用手册")]),t._v(", spring.application.name为微服务名（即spring应用中配置的服务名）。")],1),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" 服务配置说明参考"),e("a",{attrs:{href:"https://support.huaweicloud.com/devg-cse/cse_devg_0020.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSE配置中心概述"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("p",[t._v("content为白名单的具体配置内容，详细说明如下：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 白名单类型，all（全部生效）/none（全不生效）/white（value值中配置的才生效）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 白名单服务集合，仅当strategy配置为white时生效，多个服务名用英文逗号分隔")]),t._v("\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 新增配置时，请去掉注释，否则会导致新增失败。")])]),t._v(" "),e("h2",{attrs:{id:"支持版本和限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持版本和限制"}},[t._v("#")]),t._v(" 支持版本和限制")]),t._v(" "),e("p",[t._v("框架支持：")]),t._v(" "),e("ul",[e("li",[t._v("SpringBoot 1.5.10.Release及以上")])]),t._v(" "),e("p",[t._v("注册中心支持：")]),t._v(" "),e("ul",[e("li",[t._v("ZooKeeper 3.6.x及以上")])]),t._v(" "),e("p",[t._v("客户端支持：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HttpClient: 4.x")])]),t._v(" "),e("li",[e("p",[t._v("HttpAsyncClient: 4.1.4")])]),t._v(" "),e("li",[e("p",[t._v("OkhttpClient: 2.x, 3.x, 4.x")])]),t._v(" "),e("li",[e("p",[t._v("Feign(springcloud-openfeign-core): 2.1.x, 3.0.x")])]),t._v(" "),e("li",[e("p",[t._v("RestTemplate(Spring-web): 5.1.x, 5.3.x")])])]),t._v(" "),e("h2",{attrs:{id:"操作和结果验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作和结果验证"}},[t._v("#")]),t._v(" 操作和结果验证")]),t._v(" "),e("p",[t._v("下面将演示如何使用SpringBoot注册插件，验证纯SpringBoot应用快速接入注册中心（ZooKeeper）场景。")]),t._v(" "),e("h3",{attrs:{id:"_1-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作"}},[t._v("#")]),t._v(" 1 准备工作")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases/download/v2.0.0/sermant-2.0.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" Sermant Release包（当前版本推荐2.0.0版本）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/releases/download/v2.0.0/sermant-examples-springboot-registry-demo-2.0.0.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v(" Demo二进制产物压缩包")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("ZooKeeper（动态配置中心&注册中心），并启动")])]),t._v(" "),e("h3",{attrs:{id:"_2-获取demo二进制产物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取demo二进制产物"}},[t._v("#")]),t._v(" 2 获取Demo二进制产物")]),t._v(" "),e("p",[t._v("解压Demo二进制产物压缩包，即可得到"),e("code",[t._v("service-a.jar")]),t._v("和"),e("code",[t._v("service-b.jar")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_3-部署应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署应用"}},[t._v("#")]),t._v(" 3 部署应用")]),t._v(" "),e("p",[t._v("（1）启动service-a")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8989")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dsermant.springboot.registry.enableRegistry")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" service-a.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8989")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dsermant.springboot.registry.enableRegistry")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" service-a.jar\n")])])]),e("p",[t._v("（2）启动service-b")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dsermant.springboot.registry.enableRegistry")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent-x.x.x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("agent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" service-b.jar\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mac, linux")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dserver.port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dsermant.springboot.registry.enableRegistry")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -javaagent:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${path}")]),t._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("appName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-jar")]),t._v(" service-b.jar\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" ${path}为sermant实际安装路径，x.x.x代表sermant某个版本号。")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意：")]),t._v(" 此时配置的域名(www.domain.com)不是真实域名，配置白名单之后才能正常调用。")])]),t._v(" "),e("h3",{attrs:{id:"_4-配置白名单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置白名单"}},[t._v("#")]),t._v(" 4 配置白名单")]),t._v(" "),e("p",[t._v("配置白名单，请参考"),e("a",{attrs:{href:"#%E8%AF%A6%E7%BB%86%E6%B2%BB%E7%90%86%E8%A7%84%E5%88%99"}},[t._v("详细治理规则")]),t._v("。")]),t._v(" "),e("p",[t._v("其中key值为"),e("strong",[t._v("sermant.plugin.registry")]),t._v("，group为"),e("strong",[t._v("app=default&environment=&service=service-a")]),t._v("，content为"),e("strong",[t._v("strategy: all")]),t._v("。")]),t._v(" "),e("p",[t._v("利用ZooKeeper提供的命令行工具进行配置发布。")]),t._v(" "),e("p",[t._v("1、在"),e("code",[t._v("${path}/bin/")]),t._v("目录执行以下命令创建节点"),e("code",[t._v("/app=default&environment=")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linux mac")]),t._v("\n./zkCli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service-a\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\nzkCli.cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service-a\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("说明：")]),t._v(" "),e("code",[t._v("${path}")]),t._v("为ZooKeeper的安装目录")])]),t._v(" "),e("p",[t._v("2、在"),e("code",[t._v("${path}/bin/")]),t._v("目录执行以下命令创建节点"),e("code",[t._v("/app=default&environment=&service=service-a/sermant.plugin.registry")]),t._v("和数据"),e("code",[t._v("strategy: all")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linux mac")]),t._v("\n./zkCli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service-a/sermant.plugin.registry "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strategy: all"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# windows")]),t._v("\nzkCli.cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-server")]),t._v(" localhost:2181 create /app"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service-a/sermant.plugin.registry "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strategy: all"')]),t._v("\n")])])]),e("h3",{attrs:{id:"_5-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[t._v("#")]),t._v(" 5 验证")]),t._v(" "),e("p",[t._v("调用接口"),e("code",[t._v("localhost:8989/httpClientGet")]),t._v("，判断接口是否成功返回，若成功返回则说明插件已成功生效。")]),t._v(" "),e("p",[e("strong",[t._v("效果图如下图所示：")])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/springboot-registry.png"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);