(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{539:function(t,e,r){"use strict";r.r(e);var i=r(26),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"插件介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件介绍"}},[t._v("#")]),t._v(" 插件介绍")]),t._v(" "),e("p",[t._v("本文主要介绍目前Sermant支持的插件。")]),t._v(" "),e("h2",{attrs:{id:"基本服务注册发现和实时配置类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本服务注册发现和实时配置类"}},[t._v("#")]),t._v(" 基本服务注册发现和实时配置类")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/dynamic-config.html"}},[t._v("动态配置插件")]),t._v("：基于Sermant配置中心能力实现动态配置，可在运行时将配置刷新到宿主应用，其优先级将高于环境变量配置。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/springboot-registry.html"}},[t._v("SpringBoot注册插件")]),t._v("：纯SpringBoot应用提供服务注册发现能力，方便用户在不修改代码的前提下快速接入注册中心（目前只支持"),e("strong",[t._v("Zookeeper")]),t._v("），同时提供超时重试的能力，实现服务调用的高可用。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/register-migration.html"}},[t._v("注册迁移插件")]),t._v("：提供代码非侵入方式，可让原本注册于Eureka，Nacos，Zookeeper、Consul等主流注册中心的微服务， 非侵入地注册到"),e("a",{attrs:{href:"https://github.com/apache/servicecomb-service-center",target:"_blank",rel:"noopener noreferrer"}},[t._v("ServiceComb"),e("OutboundLink")],1),t._v("，或"),e("a",{attrs:{href:"https://nacos.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos"),e("OutboundLink")],1),t._v("上, 同时支持Dubbo与SpringCloud框架。")],1),t._v(" "),e("h2",{attrs:{id:"限流降级和可服务性类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#限流降级和可服务性类"}},[t._v("#")]),t._v(" 限流降级和可服务性类")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/flowcontrol.html"}},[t._v("流控插件")]),t._v(': 基于resilience4j框架，以"流量"切入点，实现"非侵入式"流量控制；当前支持限流、熔断、隔离仓、错误注入与重试能力，并且支持配置中心动态配置规则，实时生效。')],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/graceful.html"}},[t._v("无损上下线插件")]),t._v("：针对应用上下线发布过程中的问题，插件提供预热和延迟下线机制，为服务提供无损上下线的能力。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/removal.html"}},[t._v("离群实例摘除")]),t._v("：离群实例摘除插件通过无侵入的方式检测应用实例的可用性，并对异常的应用实例进行摘除操作，以保证服务的稳定性。")],1),t._v(" "),e("h2",{attrs:{id:"应用流量路由类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用流量路由类"}},[t._v("#")]),t._v(" 应用流量路由类")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/loadbalancer.html"}},[t._v("负载均衡插件")]),t._v("：基于配置中心进行动态配置，采用"),e("strong",[t._v("流量标记+负载均衡规则")]),t._v("的方式规则，即配置一条规则需"),e("strong",[t._v("同时配置两者")]),t._v("，因此使用该能力需在配置中心配置对应负载均衡策略。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由插件")]),t._v("：在微服务存在多个版本、多个实例的情况下，通过配置路由规则管理服务之间的路由，达到无损升级、应用拨测等业务目的。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/tag-transmission.html"}},[t._v("流量标签透传")]),t._v(": 为流量标签提供全链路透传的能力，以满足流量治理的需求。")],1),t._v(" "),e("h2",{attrs:{id:"应用可观测类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用可观测类"}},[t._v("#")]),t._v(" 应用可观测类")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/monitor.html"}},[t._v("监控插件")]),t._v("：用于监控宿主应用所在服务器的CPU、内存、磁盘IO和网络IO等硬件资源的使用情况，以及宿主应用Java虚拟机和微服务公共指标情况。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/visibility.html"}},[t._v("服务可见性插件")]),t._v("：为Spring Cloud和Dubbo应用提供契约信息和血缘关系采集展示的功能，方便用户在不修改代码的前提下可以通过backend查看所有服务对外提供的接口信息以及服务之间的调用关系信息。")],1),t._v(" "),e("h2",{attrs:{id:"异地多活和容灾类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异地多活和容灾类"}},[t._v("#")]),t._v(" 异地多活和容灾类")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/mq-consume-prohibition.html"}},[t._v("消息队列禁止消费")]),t._v(": 用于在运行时实现消息队列消费者的禁止以及重新开启消费能力，可以在系统升级或故障、数据同步或迁移等场景时保证消息队列暂时停止被消费。")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/document/plugin/database-write-prohibition.html"}},[t._v("数据库禁写插件")]),t._v(": 用于在服务运行时实现对指定数据库的禁止写入能力，在多云多活场景下保证数据库数据的一致性。")],1),t._v(" "),e("h2",{attrs:{id:"兼容性列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容性列表"}},[t._v("#")]),t._v(" 兼容性列表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("插件名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("微服务框架组件支持列表")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("动态配置中心支持列表")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("注册中心支持列表")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/dynamic-config.html"}},[t._v("动态配置插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.x - 2.6.2"),e("br"),t._v("spring-cloud-starter-alibaba-nacos-config 1.5.0.RELEASE+"),e("br"),t._v("spring-cloud-starter-zookeeper-config 1.2.0.RELEASE+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/springboot-registry.html"}},[t._v("SpringBoot注册插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.10.Release+")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Zookeeper 3.4.x+")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/register-migration.html"}},[t._v("注册迁移插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb-Service-Center"),e("br"),t._v("Nacos")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/flowcontrol.html"}},[t._v("流控插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.2.x - 2.6.x "),e("br"),t._v(" SpringWebMvc 4.1.3.RELEASE - 5.3.x"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/graceful.html"}},[t._v("优雅上下线插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/visibility.html"}},[t._v("离群实例摘除")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.10.Release+"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/loadbalancer.html"}},[t._v("负载均衡插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v(" SpringCloud Edgware.SR2 - 2021.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.x - 2.6.2 "),e("br"),t._v("SpringCloud Edgware.SR2 - 2021.0.0"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb-Service-Center")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/tag-transmission.html"}},[t._v("流量标签透传插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Servlet 3.0+"),e("br"),t._v("Jetty 8.x+"),e("br"),t._v("Tomcat 7.x+"),e("br"),t._v("Spring Framework 4.x+"),e("br"),t._v("Apache HttpClient 3.x, 4.x"),e("br"),t._v("OKHttp2 2.x"),e("br"),t._v("HttpURLConnection 1.7.x+"),e("br"),t._v("Dubbo 2.6.x, 2.7.x, 3.x"),e("br"),t._v("Grpc 1.13+"),e("br"),t._v("SofaRpc 5.x"),e("br"),t._v("ServiceComb Java Chassis 2.x"),e("br"),t._v("RocketMQ 4.8.x+, 5.x"),e("br"),t._v("Kafka 1.x, 2.x, 3.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/monitor.html"}},[t._v("监控插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ALL")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/visibility.html"}},[t._v("服务可见性插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("SpringBoot 1.5.10.Release+"),e("br"),t._v("Dubbo 2.6.x-2.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/mq-consume-prohibition.html"}},[t._v("消息队列禁止消费插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Kafka 1.x, 2.x"),e("br"),t._v("RocketMQ 4.8.x-5.1.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/zh/document/plugin/database-write-prohibition.html"}},[t._v("数据库禁写插件")])],1),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("mongodb-driver-sync 2.6.2-2.7.x, 3.0.x-3.3.x"),e("br"),t._v("mariadb-java-client 3.7.x-3.11.x, 4.0.x-4.11.x"),e("br"),t._v("opengauss-jdbc 3.0.x, 3.1.x"),e("br"),t._v("postgresql 9.4.x, 42.0.x-42.7.x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ServiceComb Kie"),e("br"),t._v("ZooKeeper"),e("br"),t._v("Nacos")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("N/A")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);