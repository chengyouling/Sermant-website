(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{496:function(e,t,a){"use strict";a.r(t);var r=a(26),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"graceful-startup-shutdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graceful-startup-shutdown"}},[e._v("#")]),e._v(" Graceful Startup/Shutdown")]),e._v(" "),t("p",[e._v("This article introduces how to use the graceful log-in and log-in plugin. Currently, the elegant log-in and log-out function is currently integrated in the "),t("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-service-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("registration plugin"),t("OutboundLink")],1),e._v(", Can be used independently.")]),e._v(" "),t("h2",{attrs:{id:"functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),t("p",[e._v("For any startup application, operations such as release, expansion, reduction, and restart are unavoidable, and the following problems are often encountered in the process:")]),e._v(" "),t("ul",[t("li",[e._v("For a newly launched instance, due to excessive traffic, the instance is accessed by a large amount of traffic when it is initialized, resulting in request blocking or even downtime, such as lazy loading scenarios.")]),e._v(" "),t("li",[e._v("When the instance goes shutdown, due to the delayed refresh problem found in the registration, the upstream cannot be notified in time, resulting in traffic loss or errors.")])]),e._v(" "),t("p",[e._v("In order to solve the above problems, graceful log-off came into being. For the above two problems, the plug-in provides "),t("strong",[e._v("preheating")]),e._v(" and "),t("strong",[e._v("graceful log-off")]),e._v(" capabilities to provide protection for the above-mentioned scenario problems.")]),e._v(" "),t("p",[t("strong",[e._v("Warm up")]),e._v(", as the name suggests, uses a small amount of traffic to access the instance first, and gradually increases the traffic based on time to ensure that the newly started instance can successfully transition.")]),e._v(" "),t("p",[t("strong",[e._v("Graceful shutdown")]),e._v(",  The plugin quickly updates the upstream cache based on the "),t("strong",[e._v("real-time notification")]),e._v(" + "),t("strong",[e._v("cache update mechanism")]),e._v(". In addition, traffic statistics are collected to ensure that the instances that are about to go shutdown can process traffic as much as possible, preventing traffic loss to the greatest extent.")]),e._v(" "),t("h2",{attrs:{id:"supported-versions-and-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-limitations"}},[e._v("#")]),e._v(" Supported Versions and Limitations")]),e._v(" "),t("p",[e._v("Currently, the graceful startup/shutdown capability "),t("strong",[e._v("supports only SpringCloud applications")]),e._v(". Ensure that the SpringCloud version is "),t("code",[e._v("Edgware.SR2")]),e._v(" or later.")]),e._v(" "),t("p",[e._v("Regitry Center Support：Zookeeper、Consul、Nacos、Eureka、Service Center")]),e._v(" "),t("p",[t("strong",[e._v("Notice")]),e._v("：The graceful startup/shutdown capability is developed based on the default load balancing capability of SpringCloud. If you have implemented the custom load balancing capability, this capability is no longer applicable.")]),e._v(" "),t("h2",{attrs:{id:"parameter-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[e._v("#")]),e._v(" Parameter configuration")]),e._v(" "),t("h3",{attrs:{id:"enabling-graceful-startup-shutdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-graceful-startup-shutdown"}},[e._v("#")]),e._v(" Enabling Graceful Startup/Shutdown")]),e._v(" "),t("p",[e._v("The graceful log-in plug-in needs to enable the graceful log-in switch ("),t("code",[e._v("grace.rule.enableSpring")]),e._v("), configure the startup delay time ("),t("code",[e._v("grace.rule.startDelayTime")]),e._v("), enable the warm-up ("),t("code",[e._v("grace.rule.enableWarmUp")]),e._v("), and other configurations. Find the configuration file of the plugin in "),t("code",[e._v("${path}/sermant-agent-x.x.x/agent/pluginPackge/service-registry/config/config.yaml")]),e._v(", the configuration is as follows:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("grace.rule")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableSpring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# SpringCloud graceful startup/shutdown switch")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("startDelayTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Graceful startup/shutdown start delay, unit is seconds")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to enable warm up")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("warmUpTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Warm up time unit is seconds")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to enable graceful shutdown")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("shutdownWaitTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The maximum waiting time before traffic detection is disabled. Unit: s. This parameter takes effect only after enabledGraceShutdown is enabled.")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to enable proactive shutdown notification.")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("httpServerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("16688")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Enable the http server port for proactive shutdown notification.")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("upstreamAddressMaxSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Default size of the cache upstream address")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("upstreamAddressExpiredTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Expiration time of the cached upstream address. Unit: s.")]),e._v("\n")])])]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Parameter key")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Description")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Default value")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Required")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.enableSpring")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("springCloud elegant startup/shutdown switch")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.startDelayTime")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Graceful startup/shutdown startup delay time, unit S")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("0")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.enableWarmUp")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Whether to enable preheating")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.enableGraceShutdown")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Whether to enable graceful shutdown")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.shutdownWaitTime")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("The maximum waiting time for related traffic detection before shutdown, unit S. EnabledGraceShutdown needs to be enabled to take effect")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("30")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.enableOfflineNotify")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Whether to open the active shutdown  notification")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.httpServerPort")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("The httpServer port for active shutdown notification is enabled")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("16688")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.upstreamAddressMaxSize")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("The default size of cached upstream addresses")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("5000")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("grace.rule.upstreamAddressExpiredTime")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Expiration time of cache upstream address, unit S")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("60")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("YES")])])])]),e._v(" "),t("h2",{attrs:{id:"supported-versions-and-limitations-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-limitations-2"}},[e._v("#")]),e._v(" Supported Versions and Limitations")]),e._v(" "),t("p",[e._v("Framework support:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Only supports SpringCloud applications")]),e._v(", you need to ensure that the SpringCloud version is "),t("code",[e._v("Edgware.SR2")]),e._v(" and above")]),e._v(" "),t("li",[e._v("Registry support: Zookeeper, Consul, Nacos, Eureka, ServiceCenter")])]),e._v(" "),t("p",[e._v("Limit:")]),e._v(" "),t("ul",[t("li",[e._v("The ability to go to start up and shutdown gracefully is developed based on SpringCloud's default load balancing capability. If you implement a custom load balancing capability, this capability will no longer apply")])]),e._v(" "),t("h2",{attrs:{id:"operation-and-result-validation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-validation"}},[e._v("#")]),e._v(" Operation and result validation")]),e._v(" "),t("p",[e._v("The following demonstrates how to use the graceful startup/shutdown plugin.")]),e._v(" "),t("h3",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v("/Compile the sermant package")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/tree/main/grace-demo/spring-grace-nacos-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" Demo source code")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" nacos, and start")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),t("OutboundLink")],1),e._v(" zookeeper, and start")])]),e._v(" "),t("h3",{attrs:{id:"step-1-compile-and-package-the-demo-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-demo-application"}},[e._v("#")]),e._v(" Step 1: Compile and package the demo application")]),e._v(" "),t("p",[e._v("Execute the following command in the "),t("code",[e._v("${path}/Sermant-examples/grace-demo/spring-grace-nacos-demo")]),e._v(" directory:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn clean package\n")])])]),t("p",[e._v("After successful packaging, you can get "),t("code",[e._v("nacos-rest-data-2.2.0.RELEASE.jar in")]),e._v("${path}/Sermant-examples/grace-demo/spring-grace-nacos-demo/nacos-rest-data/target"),t("code"),e._v("package, get "),t("code",[e._v("nacos-rest-consumer-2.2.0.RELEASE.jar")]),e._v(" at "),t("code",[e._v("${path}/Sermant-examples/grace-demo/spring-grace-nacos-demo/nacos-rest-consumer/target")]),e._v(" , get "),t("code",[e._v("nacos-rest-provider-2.2.0.RELEASE.jar")]),e._v(" in "),t("code",[e._v("${path}/Sermant-examples/grace-demo/spring-grace-nacos-demo/nacos-rest-provider/target")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: path is the path where the demo application is downloaded.")])]),e._v(" "),t("h3",{attrs:{id:"step-2-deploy-the-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-deploy-the-application"}},[e._v("#")]),e._v(" Step 2: Deploy the application")]),e._v(" "),t("p",[e._v("We will deploy a consumer instance, 2 provider instances, and a data instance. as follows:")]),e._v(" "),t("p",[t("code",[e._v("consumer -----------\x3e provider (two instances) -------------\x3e data")])]),e._v(" "),t("p",[e._v("Among them, the consumer enables the graceful log-off capability, one provider instance enables the warm-up and graceful log-off capabilities, and the other provider instance only enables the graceful log-off capability.")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: The parameters of the graceful log-in and log-out plug-in are configured below through the -D parameter when the application starts.")])]),e._v(" "),t("p",[e._v("(1) start data")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("   "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-data-2.2.0.RELEASE.jar\n")])])]),t("p",[e._v("(2) Start the first provider instance (port 8880, "),t("strong",[e._v("Turn off preheating function")]),e._v(")")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8880")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-provider-2.2.0.RELEASE.jar\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8880")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-provider-2.2.0.RELEASE.jar\n")])])]),t("p",[e._v("(3) Start the second provider instance (port 8890, "),t("strong",[e._v("enable preheating capability")]),e._v(")")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-provider-2.2.0.RELEASE.jar\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-provider-2.2.0.RELEASE.jar\n")])])]),t("p",[e._v("(4) start consumer")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8800")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-consumer-2.2.0.RELEASE.jar\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableSpring")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableWarmUp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableGraceShutdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dgrace.rule.enableOfflineNotify")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true -Dspring.cloud.nacos.discovery.server-addr"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:8848 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8800")]),e._v(" -javaagent:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" nacos-rest-consumer-2.2.0.RELEASE.jar\n")])])]),t("blockquote",[t("p",[t("strong",[e._v("Description")]),e._v(":\nwhere path needs to be replaced with the actual installation path of Sermant.\nx.x.x represents a Sermant version number.")])]),e._v(" "),t("h3",{attrs:{id:"verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),t("h4",{attrs:{id:"preheating-capability-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preheating-capability-verification"}},[e._v("#")]),e._v(" Preheating capability verification")]),e._v(" "),t("p",[e._v("Access the interface "),t("code",[e._v("localhost:8800/graceHot")]),e._v(", and judge whether the preheating is effective according to the ip and port returned by the interface. If during the warm-up period (default 120s) the access is biased towards the provider whose port is "),t("code",[e._v("8880")]),e._v(", and the traffic becomes "),t("strong",[e._v("average")]),e._v(" over time, it means that the pre-heating takes effect.")]),e._v(" "),t("h4",{attrs:{id:"graceful-shutdown-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graceful-shutdown-verification"}},[e._v("#")]),e._v(" Graceful shutdown verification")]),e._v(" "),t("p",[e._v("Continue to access the interface "),t("code",[e._v("localhost:8800/graceDownOpen")]),e._v(", and then log off one of the provider instances to observe whether there is an error in the request. If there is no error, the graceful shutdown capability verification is successful.")])])}),[],!1,null,null,null);t.default=s.exports}}]);