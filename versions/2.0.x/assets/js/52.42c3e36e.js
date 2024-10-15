(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{499:function(e,a,t){"use strict";t.r(a);var r=t(26),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"load-balancing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing"}},[e._v("#")]),e._v(" Load balancing")]),e._v(" "),a("p",[e._v("This article describes how to use "),a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/tree/develop/sermant-plugins/sermant-loadbalancer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Load balancing plugin"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"function-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-introduction"}},[e._v("#")]),e._v(" Function introduction")]),e._v(" "),a("p",[e._v("The load balancing plug-in is mainly used to dynamically modify the load balancing policy of the host application without invasion.")]),e._v(" "),a("h2",{attrs:{id:"parameter-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-configuration"}},[e._v("#")]),e._v(" Parameter configuration")]),e._v(" "),a("h3",{attrs:{id:"plug-in-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-configuration"}},[e._v("#")]),e._v(" Plug-in configuration")]),e._v(" "),a("p",[e._v("The load balancing plug-in needs to configure the default load balancing policy, whether to force the use of plug-in load balancing and other information. The configuration file of the plug-in can be found in the "),a("code",[e._v("${path}/sermant-agent-x.x.x/agent/pluginPackage/loadbalancer/config/config.yaml")]),e._v(". The configuration is as follows:")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("loadbalancer.plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("defaultRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Default load balancing policy. When no load balancing policy is configured, the default load balancing policy is used.")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("forceUseSermantLb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to force the use of plug-in load balancing. The load balancing plug-in determines whether to force the modification of the user's load balancing policy through this configuration. The current configuration is only valid for Ribon. Ribon may have its own load balancing configuration. If you do not want to affect your own load balancing configuration, you can set it to false.")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("useCseRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Whether to use CSE rules. The load balancing plugin subscribes to different dynamic configuration paths based on whether to use CSE rules.")]),e._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter key")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default value")]),e._v(" "),a("th",[e._v("Required")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Loadbalancer.plugin.defaultRule")]),e._v(" "),a("td",[e._v("Default load balancing policy")]),e._v(" "),a("td",[e._v("Empty")]),e._v(" "),a("td",[e._v("No")])]),e._v(" "),a("tr",[a("td",[e._v("Loadbalancer.plugin.forceUseServantLb")]),e._v(" "),a("td",[e._v("Whether to force the use of plug-in load balancing")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("No")])]),e._v(" "),a("tr",[a("td",[e._v("Loadbalancer.plugin.useCseRule")]),e._v(" "),a("td",[e._v("Whether to use cse rule")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("No")])])])]),e._v(" "),a("h2",{attrs:{id:"detailed-governance-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-governance-rules"}},[e._v("#")]),e._v(" Detailed governance rules")]),e._v(" "),a("p",[e._v("The load balancing plug-in publishes the configuration based on the dynamic configuration center. For configuration publishing, please refer to the "),a("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#publish-configuration"}},[e._v("Dynamic Configuration Center User Manual")]),e._v(".")],1),e._v(" "),a("p",[e._v("The dynamic configuration information to be configured for the load balancing plug-in is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("servicecomb.matchGroup.xxx: traffic token (dynamically configured key value). It is used to mark the services for which the current business scenario is effective. Its corresponding content is")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("alias")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" loadbalancer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("-serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" zk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("provider  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Target service name")]),e._v("\n")])])]),a("p",[a("code",[e._v("serviceName")]),e._v("is the downstream service name. If the configuration item "),a("code",[e._v("serviceName")]),e._v(" is not configured, it will be applied to all microservices. It should be noted that only the "),a("code",[e._v("serviceName")]),e._v(" configuration item needs to be configured for this configuration, and other formats need to remain unchanged.")]),e._v(" "),a("ul",[a("li",[e._v("servicecomb.loadbalance. xxx: Load balancing rule (dynamically configured key value). It is used to configure the load balancing rules that take effect in specific business scenarios. Its corresponding content is")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Random\n")])])]),a("blockquote",[a("p",[e._v("Note: "),a("strong",[e._v("xxx is the name of the specific business scenario, and the load balancing policy takes effect when the traffic marking and load balancing policy scenarios are consistent")]),e._v(".")])]),e._v(" "),a("p",[e._v("For the range of configuration values, see "),a("strong",[e._v("Configuration Values")]),e._v(" in Table "),a("a",{attrs:{href:"#supported-versions-and-restrictions"}},[e._v("Supported Versions and Restrictions")]),e._v(".")]),e._v(" "),a("p",[e._v("The load balancing plug-in supports two levels of group configuration by default:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Microservice level: that is, the value of group is "),a("code",[e._v("app=default&environment=&service=${yourServiceName}")]),e._v(", where "),a("code",[e._v("${yourServiceName}")]),e._v(" is the microservice name obtained dynamically, and "),a("code",[e._v("environment")]),e._v(" is empty by default. You can refer to "),a("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-agent.html#parameter-configuration-options"}},[e._v("Parameter Configuration Method")]),e._v(" to change "),a("code",[e._v("app")]),e._v(" and "),a("code",[e._v("envrionment")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Application level: that is, the value of group is "),a("code",[e._v("app=default&environment=")]),e._v(", and "),a("code",[e._v("environment")]),e._v(" is empty by default. The environment variable configuration method is the same as "),a("strong",[e._v("microservice level")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"supported-versions-and-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions-and-restrictions"}},[e._v("#")]),e._v(" Supported versions and restrictions")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Framework type")]),e._v(" "),a("th",[e._v("policy name")]),e._v(" "),a("th",[e._v("configuration value/load balancing policy")]),e._v(" "),a("th",[e._v("version support")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dubbo")]),e._v(" "),a("td",[e._v("Random (dubbo default)")]),e._v(" "),a("td",[e._v("Random/RANDOM")]),e._v(" "),a("td",[e._v("2.6. x, 2.7. x")])]),e._v(" "),a("tr",[a("td",[e._v("Dubbo")]),e._v(" "),a("td",[e._v("Polling")]),e._v(" "),a("td",[e._v("RoundRobin/ROUNDROBIN")]),e._v(" "),a("td",[e._v("2.6. x, 2.7. x")])]),e._v(" "),a("tr",[a("td",[e._v("Dubbo")]),e._v(" "),a("td",[e._v("least active")]),e._v(" "),a("td",[e._v("leastActive/LEASTACTIVE")]),e._v(" "),a("td",[e._v("2.6. x, 2.7. x")])]),e._v(" "),a("tr",[a("td",[e._v("Dubbo")]),e._v(" "),a("td",[e._v("Consistency HASH")]),e._v(" "),a("td",[e._v("consistentHash/CONSISTENTHASH")]),e._v(" "),a("td",[e._v("2.6. x, 2.7. x")])]),e._v(" "),a("tr",[a("td",[e._v("Dubbo")]),e._v(" "),a("td",[e._v("shortest response time")]),e._v(" "),a("td",[e._v("shortestResponse/SHORTESTRESPONSE")]),e._v(" "),a("td",[e._v("2.7.7+")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("region weight (ribbon default)")]),e._v(" "),a("td",[e._v("zoneAvoidance/ZONE_ AVOIDANCE")]),e._v(" "),a("td",[e._v("ZONE_ AVOIDANCEspring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("Random")]),e._v(" "),a("td",[e._v("Random/RANDOM")]),e._v(" "),a("td",[e._v("spring cloud Edgware. x, spring cloud Finchley. x, spring cloud Greenwich. x, spring cloud Hoxton. x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("Polling")]),e._v(" "),a("td",[e._v("RoundRobin/ROUND_ ROBIN")]),e._v(" "),a("td",[e._v("spring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("Retry")]),e._v(" "),a("td",[e._v("retry/RETRY")]),e._v(" "),a("td",[e._v("spring cloud Edgware. x, spring cloud Finchley. x, spring cloud Greenwich. x, spring cloud Hoxton. x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("Minimum concurrency")]),e._v(" "),a("td",[e._v("bestAvailable/BEST_ AVAILABLE")]),e._v(" "),a("td",[e._v("spring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring cloud netflix rib")]),e._v(" "),a("td",[e._v("filter polling")]),e._v(" "),a("td",[e._v("availability filtering/AVAILABILITY_ FILTERING")]),e._v(" "),a("td",[e._v("spring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("Response time weighted")]),e._v(" "),a("td",[e._v("ResponseTimeWeighted/RESPONSE_ TIME_ WEIGHTED")]),e._v(" "),a("td",[e._v("spring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-netflix-ribbon")]),e._v(" "),a("td",[e._v("weighted response time")]),e._v(" "),a("td",[e._v("weightedResponseTime/WEIGHTED_ RESPONSE_ TIME")]),e._v(" "),a("td",[e._v("spring cloud Edgware.x, spring cloud Finchley.x, spring cloud Greenwich.x, spring cloud Hoxton.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring-cloud-loadbalancer")]),e._v(" "),a("td",[e._v("Polling (loadbalancer default)")]),e._v(" "),a("td",[e._v("RoundRobin/ROUND_ ROBIN")]),e._v(" "),a("td",[e._v("spring cloud Hoxton.SR10+, spring cloud 2020.0.x, spring cloud 2021.0.x")])]),e._v(" "),a("tr",[a("td",[e._v("Spring cloud loader")]),e._v(" "),a("td",[e._v("random")]),e._v(" "),a("td",[e._v("Random/RANDOM")]),e._v(" "),a("td",[e._v("spring cloud Hoxton. SR10+, spring cloud 2020.0. x, spring cloud 2021.0. x")])])])]),e._v(" "),a("h2",{attrs:{id:"operation-and-result-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation-and-result-verification"}},[e._v("#")]),e._v(" Operation and result verification")]),e._v(" "),a("p",[e._v("The following will demonstrate how to use the load balancing plug-in.")]),e._v(" "),a("h3",{attrs:{id:"preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[e._v("#")]),e._v(" Preparations")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant-examples/tree/main/sermant-template/demo-register",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),a("OutboundLink")],1),e._v(" demo source code")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/sermant-io/Sermant/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),a("OutboundLink")],1),e._v("/compile the sermant package")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://zookeeper.apache.org/releases.html#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),a("OutboundLink")],1),e._v(" And start zookeeper")])])]),e._v(" "),a("h3",{attrs:{id:"step-1-compile-and-package-the-demo-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-compile-and-package-the-demo-application"}},[e._v("#")]),e._v(" Step 1: Compile and package the demo application")]),e._v(" "),a("p",[e._v("Execute the following command in the "),a("code",[e._v("${path}/Sermant-examples/sermant-template/demo-register")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn clean package\n")])])]),a("p",[e._v("After successful packaging, you can get the "),a("code",[e._v("resttemplate-consumer.jar")]),e._v(" package in "),a("code",[e._v("${path}/Sermant-examples/sermant-template/demo-register/resttemplate-consumer/target")]),e._v(", in "),a("code",[e._v("${path}/Sermant-examples/ sermant-template/demo-register/resttemplate-provider/target")]),e._v(" gets "),a("code",[e._v("resttemplate-provider.jar")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: path is the path where the demo application is downloaded.")])]),e._v(" "),a("h3",{attrs:{id:"step-2-publish-traffic-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-publish-traffic-tags"}},[e._v("#")]),e._v(" Step 2: Publish traffic tags")]),e._v(" "),a("p",[e._v("Refer to the "),a("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#publish-configuration"}},[e._v("Dynamic Configuration Center User Manual")]),e._v(" for configuration publishing, and publish the following configuration")],1),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"alias: loadbalancer-rule\\n matches:\\n- serviceName: zk-rest-provider"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"group"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"app=default&environment=&service=zk-rest-consumer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"servicecomb.matchGroup.testLb"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Take Zookeeper as an example, and use the command line tools provided by Zookeeper for configuration publishing.")]),e._v(" "),a("ol",[a("li",[e._v("Execute the following command in the "),a("code",[e._v("${path}/bin/")]),e._v(" directory to create the node "),a("code",[e._v("/app=default&environment=&service=zk-rest-consumer")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# linux mac")]),e._v("\n./zkCli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk-rest-consumer\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nzkCli.cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk-rest-consumer\n")])])]),a("blockquote",[a("p",[e._v("Note: "),a("code",[e._v("${path}")]),e._v(" is the installation directory of zookeeper")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Execute the following command in the "),a("code",[e._v("${path}/bin/")]),e._v(" directory to create nodes "),a("code",[e._v("/app=default&environment=&service=zk-rest-consumer/servicecomb.matchGroup.testLb")]),e._v(" and data "),a("code",[e._v("alias: loadbalancer-rule\\n matches:\\n- serviceName: zk-rest-provider")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# linux mac")]),e._v("\n./zkCli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/servicecomb.routeRule.spring-cloud-router-provider "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"alias: loadbalancer-rule\nmatches:\n- serviceName: zk-rest-provider"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nzkCli.cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/servicecomb.routeRule.spring-cloud-router-provider "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"alias: loadbalancer-rule\nmatches:\n- serviceName: zk-rest-provider"')]),e._v("\n")])])]),a("h3",{attrs:{id:"step-3-publish-matching-load-balancing-rules-take-random-as-an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-publish-matching-load-balancing-rules-take-random-as-an-example"}},[e._v("#")]),e._v(" Step 3: Publish matching load balancing rules (take Random as an example)")]),e._v(" "),a("p",[e._v("Refer to the "),a("RouterLink",{attrs:{to:"/en/document/user-guide/configuration-center.html#publish-configuration"}},[e._v("Dynamic Configuration Center User Manual")]),e._v(" for configuration publishing, and publish the following configuration")],1),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rule: Random"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"group"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"app=default&environment=&service=zk-rest-consumer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"servicecomb.loadbalance.testLb"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Taking zookeeper as an example, use the PrettyZoo tool to publish the load balancing strategy:")]),e._v(" "),a("p",[e._v("Take Zookeeper as an example, and use the command line tools provided by Zookeeper for configuration publishing.")]),e._v(" "),a("ol",[a("li",[e._v("Execute the following command in the "),a("code",[e._v("${path}/bin/")]),e._v(" directory to create nodes "),a("code",[e._v("/app=default&environment=&service=zk-rest-consumer/servicecomb.loadbalance.testLb")]),e._v(" and data "),a("code",[e._v("rule: Random")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# linux mac")]),e._v("\n./zkCli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk-rest-consumer/servicecomb.loadbalance.testLb "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rule: Random"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# windows")]),e._v("\nzkCli.cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-server")]),e._v(" localhost:2181 create /app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("zk-rest-consumer/servicecomb.loadbalance.testLb "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rule: Random"')]),e._v("\n")])])]),a("h3",{attrs:{id:"step-4-start-the-demo-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-start-the-demo-application"}},[e._v("#")]),e._v(" Step 4: Start the demo application")]),e._v(" "),a("p",[e._v("Refer to the following command to start two producers")]),e._v(" "),a("ul",[a("li",[e._v("Refer to the following command to start the service provider, the port is 8006")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8006")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-provider.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8006")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-provider.jar\n")])])]),a("ul",[a("li",[e._v("Refer to the following command to start the service provider, the port is 8007")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8007")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-provider.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8007")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-provider.jar\n")])])]),a("ul",[a("li",[e._v("Refer to the following command to start the consumer (one instance is enough), the port is 8005")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Linux")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),e._v("/sermant-agent-x.x.x/agent/sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8005")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-consumer.jar\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run under Windows")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" -javaagent:"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${path}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent-x.x.x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("agent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("sermant-agent.jar"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("default "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-Dserver.port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8005")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" resttemplate-consumer.jar\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("illustrate")]),e._v(":\nWhere path needs to be replaced with the actual installation path of Sermant.\nx.x.x represents a Sermant version number.")])]),e._v(" "),a("h3",{attrs:{id:"verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),a("p",[e._v("After all the above steps are completed, access the interface "),a("a",{attrs:{href:"http://localhost:8005/hello",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8005/hello"),a("OutboundLink")],1),e._v(", multiple calls. If 8006 and 8007 are randomly displayed in the returned port information, it means that the random load balancing rule (polling by default) has taken effect.")]),e._v(" "),a("p",[e._v("The renderings are as follows:")]),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/loadbanlance1.png"}}),e._v(" "),a("MyImage",{attrs:{src:"/docs-img/loadbanlance2.png"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);