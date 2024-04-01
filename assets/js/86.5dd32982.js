(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{532:function(t,e,a){"use strict";a.r(e);var n=a(26),v=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"版本升级兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本升级兼容性"}},[t._v("#")]),t._v(" 版本升级兼容性")]),t._v(" "),e("p",[t._v("本文档主要介绍Sermant各版本之间的兼容性（API）、JAVA版本兼容性、低版本向高版本升级中可能会影响正常运行的差异点及影响，并标明变更方式。")]),t._v(" "),e("h2",{attrs:{id:"字节码增强api兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字节码增强api兼容性"}},[t._v("#")]),t._v(" 字节码增强API兼容性")]),t._v(" "),e("p",[t._v("基于Sermant进行服务治理能力开发所涉及的字节码增强 API 包括类匹配(ClassMatcher)、方法匹配(MethodMatcher)、拦截器(Interceptor)、拦截声明(InterceptDeclarer)、字节码增强(ExecuteContext)等，上述 API保持"),e("strong",[t._v("向前兼容（在升级 Sermant 框架时无需修改原有插件代码）")]),t._v("，当前最新版本对以往版本开发插件兼容情况：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("LATEST版本（1.4.0）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类匹配")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方法匹配")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("拦截器")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("拦截声明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节码增强")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅ "),e("strong",[t._v("部分 API 标注废弃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.3.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅ "),e("strong",[t._v("部分 API 标注废弃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.2.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅ "),e("strong",[t._v("部分 API 标注废弃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.2.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅ "),e("strong",[t._v("部分 API 标注废弃")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.1.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.1.0-beta")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])])])]),t._v(" "),e("h2",{attrs:{id:"核心服务及其他api兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心服务及其他api兼容性"}},[t._v("#")]),t._v(" 核心服务及其他API兼容性")]),t._v(" "),e("p",[t._v("基于Sermant进行服务治理能力开发所涉及的关键 API 包括配置管理、核心服务管理、动态配置服务、心跳服务、日志等，上述 API保持"),e("strong",[t._v("向前兼容（在升级 Sermant 框架时无需修改原有插件代码）")]),t._v("，当前最新版本对以往版本开发插件兼容情况：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("LATEST版本（1.4.0）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("配置管理")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("服务管理")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("动态配置")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("心跳服务")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("日志")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.3.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.2.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.2.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.1.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.1.0-beta")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.0")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("0.0.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])])])]),t._v(" "),e("h2",{attrs:{id:"java版本兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java版本兼容性"}},[t._v("#")]),t._v(" JAVA版本兼容性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("JAVA版本（LTS）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("框架兼容性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("插件兼容性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JAVA8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JAVA11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JAVA17")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JAVA19")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("（未验证）")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("（未验证）")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JAVA21")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("（未验证）")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("（未验证）")])])])])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("在JAVA17版本启动Sermant时需附加额外JVM命令：")])])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("--add-opens java.base/java.lang"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ALL-UNNAMED\n--add-opens java.base/java.net"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ALL-UNNAMED\n--add-opens java.base/java.math"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ALL-UNNAMED\n--add-opens java.base/sun.net.www"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ALL-UNNAMED\n--add-opens java.base/sun.net.www.protocol.http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ALL-UNNAMED\n")])])]),e("h2",{attrs:{id:"_1-3-x版本-向-1-4-x版本升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-x版本-向-1-4-x版本升级"}},[t._v("#")]),t._v(" 1.3.x版本 向 1.4.x版本升级")]),t._v(" "),e("p",[t._v("1.4.x版本相对1.3.x版本使用方式无变化，无需做任何配置的修改。建议您使用最新版本的Sermant Agent以及Sermant Backend、Sermant Injector以获得更好的体验。")]),t._v(" "),e("h2",{attrs:{id:"_1-2-x版本-向-1-3-x版本升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-x版本-向-1-3-x版本升级"}},[t._v("#")]),t._v(" 1.2.x版本 向 1.3.x版本升级")]),t._v(" "),e("p",[t._v("1.3.x版本相对1.2.x版本使用方式无变化，无需做任何配置的修改。建议您使用最新版本的Sermant Agent以及Sermant Backend、Sermant Injector以获得更好的体验。")]),t._v(" "),e("h2",{attrs:{id:"_1-1-x版本-向-1-2-x版本升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-x版本-向-1-2-x版本升级"}},[t._v("#")]),t._v(" 1.1.x版本 向 1.2.x版本升级")]),t._v(" "),e("h3",{attrs:{id:"一、backend使用变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、backend使用变化"}},[t._v("#")]),t._v(" 一、Backend使用变化")]),t._v(" "),e("h4",{attrs:{id:"差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("p",[e("strong",[t._v("1.2.x")]),t._v("不再维护Backend-Lite，相关能力已在Backend中完全支持并且有效果更佳的UI。")]),t._v(" "),e("h4",{attrs:{id:"影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("使用新版的Sermant Agent时，继续使用Sermant Backend-Lite可能会导致无法上报心跳以及事件数据。")]),t._v(" "),e("h4",{attrs:{id:"变更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("p",[t._v("使用"),e("strong",[t._v("1.2.x")]),t._v("版本时需要使用对应的Sermant Backend。")]),t._v(" "),e("h3",{attrs:{id:"二、构建产物新增目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、构建产物新增目录"}},[t._v("#")]),t._v(" 二、构建产物新增目录")]),t._v(" "),e("h4",{attrs:{id:"差异-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异-2"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("1.1.x")]),t._v("版本目录如下")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── agent\n│   ├── common\n│   ├── config\n│   ├── core\n│   ├── implement\n│   ├── pluginPackage\n│   └── sermant-agent.jar\n")])])]),e("ul",[e("li",[e("strong",[t._v("1.2.x")]),t._v("版本目录如下，其中god包中为Sermant的核心接口所在目录，提取到god包中用于通过BootstrapClassloader加载，从而具有全局视角")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── agent\n│   ├── common\n│   ├── config\n│   ├── core\n│   ├── god "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新增目录")]),t._v("\n│   ├── implement\n│   ├── pluginPackage\n│   └── sermant-agent.jar\n")])])]),e("h4",{attrs:{id:"影响-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响-2"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("通过Sermant Release产物获取完整产物则无影响，升级新版本时在如自行拷贝，会导致无法运行，出现如下错误：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"God directory is not exist or is not directory."')]),t._v("\n")])])]),e("h4",{attrs:{id:"变更-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更-2"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("blockquote",[e("p",[t._v("注：升级新版本时在目录拷贝过程，避免丢失god目录！")])]),t._v(" "),e("p",[t._v("如出现上述问题，检查运行目录中是否缺少 "),e("code",[t._v("agent/god")]),t._v("，并确认目录是否为空，如果缺失目录或目录为空，则需要从源码构建产物或Release产物中获取。")]),t._v(" "),e("h2",{attrs:{id:"_1-0-x版本-向-1-1-x版本升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-x版本-向-1-1-x版本升级"}},[t._v("#")]),t._v(" 1.0.x版本 向 1.1.x版本升级")]),t._v(" "),e("h3",{attrs:{id:"一、核心服务开关控制配置变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、核心服务开关控制配置变化"}},[t._v("#")]),t._v(" 一、核心服务开关控制配置变化")]),t._v(" "),e("h4",{attrs:{id:"差异-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异-3"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("1.0.x")]),t._v("版本核心服务控制配置，通过黑名单机制控制核心服务加载，来达到开启和关闭核心服务的目的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("1.1.x")]),t._v("版本核心服务控制配置，针对各核心服务新增开关（默认为关），更易于控制。")])])]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.heartbeat.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.gateway.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.tracing.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.visibility.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.inject.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.dynamic.config.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n")])])]),e("h4",{attrs:{id:"影响-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响-3"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("版本升级后，不进行配置更新，会导致核心服务无法正常开启，例如默认关闭的动态配置服务，心跳服务等。")]),t._v(" "),e("h4",{attrs:{id:"变更-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更-3"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("p",[t._v("需要将 "),e("code",[t._v("agent.config.serviceBlackList")]),t._v("配置替换为针对各核心服务的独立配置，按照 "),e("code",[t._v("差异")]),t._v(" 中"),e("strong",[t._v("1.1.x")]),t._v("版本进行配置，如需开启某一核心服务，则配置为"),e("code",[t._v("true")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"二、bytebuddy日志-字节码输出配置变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、bytebuddy日志-字节码输出配置变化"}},[t._v("#")]),t._v(" 二、Bytebuddy日志&字节码输出配置变化")]),t._v(" "),e("h4",{attrs:{id:"差异-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异-4"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("1.0.x")]),t._v("版本中的Bytebuddy日志输出控制配置 "),e("code",[t._v("agent.config.isShowEnhanceLogEnable")]),t._v(" ，字节码输出配置 "),e("code",[t._v("agent.config.enhancedClassOutputPath")]),t._v("，此配置为空则关闭字节码输出，如果配置路径则开启字节码输出到指定路径。")]),t._v(" "),e("li",[e("strong",[t._v("1.1.x")]),t._v("版本中的Bytebuddy日志输出控制配置"),e("code",[t._v("agent.config.isShowEnhanceLog")]),t._v("，通过"),e("code",[t._v("agent.config.isOutputEnhancedClasses")]),t._v("控制字节码输出配置开启和关闭，默认输出到"),e("code",[t._v("agent/enhancedClasses")]),t._v("目录下，以时间戳区分不同批次的字节码增强结果，如果需要指定自定义输出路径，则通过"),e("code",[t._v("agent.config.enhancedClassesOutputPath")]),t._v("来配置。")])]),t._v(" "),e("h4",{attrs:{id:"影响-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响-4"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("版本升级后，不进行配置更新，会导致Bytebuddy日志无法正常输出，增强后的字节码无法正常输出。")]),t._v(" "),e("h4",{attrs:{id:"变更-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更-4"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("ul",[e("li",[t._v("需要将 "),e("code",[t._v("agent.config.isShowEnhanceLogEnable")]),t._v(" 配置修改为"),e("code",[t._v("agent.config.isShowEnhanceLog")]),t._v("，并且配置其值为"),e("code",[t._v("true")]),t._v("来正常开启Bytebuddy日志输出。")]),t._v(" "),e("li",[t._v("需要将 "),e("code",[t._v("agent.config.enhancedClassOutputPath")]),t._v("配置修改为"),e("code",[t._v("agent.config.isOutputEnhancedClasses")]),t._v("，并且配置其值为"),e("code",[t._v("true")]),t._v("来正常开启增强后的字节码输出。如需指定自定义目录，还需添加配置"),e("code",[t._v("agent.config.enhancedClassesOutputPath")]),t._v("，其值为自定义路径。")])]),t._v(" "),e("h3",{attrs:{id:"三、连接backend配置变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、连接backend配置变化"}},[t._v("#")]),t._v(" 三、连接Backend配置变化")]),t._v(" "),e("h4",{attrs:{id:"差异-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异-5"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("1.0.x")]),t._v("版本中针对连接Backend时的配置")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# backend config")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("backend.nettyIp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("backend.nettyPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("6888")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("1.1.x")]),t._v("版本中针对连接"),e("strong",[t._v("Backend")]),t._v("时的配置，变更配置前缀为 "),e("code",[t._v("gateway")]),t._v("，更贴合实现逻辑，避免被理解为通过该配置项来控制Backend组件，并且针对该能力提供了更多的可配置项")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gateway config")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.nettyIp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.nettyPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("6888")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.nettyConnectTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("5000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.nettyWriteAndReadWaitTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("60000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.sendInternalTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.initReconnectInternalTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("gateway.maxReconnectInternalTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("180")]),t._v("\n")])])])])]),t._v(" "),e("h4",{attrs:{id:"影响-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响-5"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[t._v("版本升级后，不进行配置更新，会导致无法连接Backend。")]),t._v(" "),e("h4",{attrs:{id:"变更-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更-5"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("p",[t._v("需要将"),e("strong",[t._v("1.0.x")]),t._v("版本中的Backend配置修改为"),e("strong",[t._v("1.1.x")]),t._v("版本中的Gateway配置")]),t._v(" "),e("h3",{attrs:{id:"四、标签路由配置模型变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、标签路由配置模型变化"}},[t._v("#")]),t._v(" 四、标签路由配置模型变化")]),t._v(" "),e("h4",{attrs:{id:"差异-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#差异-6"}},[t._v("#")]),t._v(" 差异")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("1.0.x")]),t._v("版本仅支持基于流量的路由规则配置")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("1.1.x")]),t._v("版本中新增了路由规则的类型标识（"),e("strong",[t._v("flow")]),t._v("、"),e("strong",[t._v("tag")]),t._v("、"),e("strong",[t._v("lane")]),t._v("），可单独配置也可同时配置，其中"),e("strong",[t._v("flow")]),t._v("类型为"),e("strong",[t._v("1.0.x")]),t._v("版本中的机遇流量的路由规则配置模型")])])]),t._v(" "),e("h4",{attrs:{id:"影响-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#影响-6"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),e("p",[e("strong",[t._v("1.1.x")]),t._v("版本中，针对标签路由进行了配置模型的重构，提升了配置的灵活性和丰富度，版本升级后将，无法解析低版本的配置")]),t._v(" "),e("h4",{attrs:{id:"变更-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变更-6"}},[t._v("#")]),t._v(" 变更")]),t._v(" "),e("p",[t._v("参照"),e("RouterLink",{attrs:{to:"/zh/document/plugin/router.html"}},[t._v("标签路由")]),t._v("使用手册进行变更，本文不再赘述。")],1)])}),[],!1,null,null,null);e.default=v.exports}}]);