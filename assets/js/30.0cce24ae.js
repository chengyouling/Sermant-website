(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{476:function(t,e,a){"use strict";a.r(e);var n=a(26),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"heartbeat-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat-function"}},[t._v("#")]),t._v(" Heartbeat Function")]),t._v(" "),e("p",[t._v("This article shows you how to use the heartbeat feature provided by Sermant in your development.")]),t._v(" "),e("h2",{attrs:{id:"function-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-introduction"}},[t._v("#")]),t._v(" Function Introduction")]),t._v(" "),e("p",[t._v("The heartbeat function plays a key role in the field of microservice governance. The heartbeat mechanism is used to monitor the status of each service instance, and the heartbeat is periodically reported to inform other services of its own survival status to avoid exceptions caused by instance downtime.")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("Sermant")]),t._v(" reports the metadata of the service instance to "),e("strong",[t._v("Backend")]),t._v(" through the heartbeat. It also reports information about the loaded service governance plug-ins to inform "),e("strong",[t._v("Backend")]),t._v(" which service governance plug-ins are carried by the "),e("strong",[t._v("Sermant Agent")]),t._v(". The "),e("strong",[t._v("Backend")]),t._v(" monitoring panel displays service instances that carry "),e("strong",[t._v("Sermant Agents")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("Attention: The heartbeat function must be used with the Backend monitoring panel. For details, see the "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-backend.html"}},[t._v("Sermant Backend User Manual")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"development-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-example"}},[t._v("#")]),t._v(" Development Example")]),t._v(" "),e("p",[t._v("The development based on heartbeat capability is mainly used to allow plug-in developers to report a small amount of very important information of plug-ins through heartbeat, and can be observed in the monitoring panel. This development example is based on the project created in the documentation for "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/"}},[t._v("Create your first plugin")]),t._v(".")],1),t._v(" "),e("p",[t._v("In engineering "),e("code",[t._v("template\\template-plugin")]),t._v(" module under "),e("code",[t._v("com.huaweicloud.sermant.template.TemplateDeclarer")]),t._v(" class add variable "),e("code",[t._v("heartbeatService")]),t._v(" framework for the heart service, This parameter is used to set additional heartbeat information：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),t._v(" heartbeatService "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("In the "),e("code",[t._v("before")]),t._v(" method of "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/bytecode-enhancement.html#Interceptor"}},[t._v("Interceptor")]),t._v(" for the"),e("code",[t._v("main")]),t._v(" method, set the heartbeat extra information via the "),e("code",[t._v("setExtInfo")]),t._v(" interface:")],1),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecuteContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  heartbeatService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExtInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("singletonMap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"started"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Good morning!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",[e("li",[t._v("After the development is complete, you can follow the "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/#Packaged-build"}},[t._v("Packaged build")]),t._v(" process when\ncreating the first plug-in, execute the "),e("code",[t._v("mvn package")]),t._v(" under the project root directory")],1),t._v(" "),e("li",[t._v("refer to "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-backend.html"}},[t._v("Sermant Backend User Manual")]),t._v(" Starts backend.")],1),t._v(" "),e("li",[t._v("Set the heartbeat switch "),e("code",[t._v("agent.service.heartbeat.enable")]),t._v(" to "),e("code",[t._v("true")]),t._v(" in file "),e("code",[t._v("agent/config/config.properties")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Heartbeat service switch")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("agent.service.heartbeat.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Finally, access "),e("code",[t._v("http://localhost:8900")]),t._v(" to view Backend.")])]),t._v(" "),e("MyImage",{attrs:{src:"/docs-img/backend/en/backend-instance.png"}}),t._v(" "),e("p",[t._v("As you can see from the figure, there is currently one instance carrying "),e("strong",[t._v("Sermant Agent")]),t._v(", and it is running\nproperly, and it carries Sermant Agent and plugins of version "),e("code",[t._v("1.0.0")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Sermant Agent")]),t._v(" sends heartbeats to "),e("strong",[t._v("Backend")]),t._v(" on a regular basis. "),e("strong",[t._v("Backend")]),t._v(" will renew the heartbeats received from each "),e("strong",[t._v("Sermant Agent")]),t._v(", and if they exceed the valid time (can be modified by "),e("RouterLink",{attrs:{to:"/en/document/user-guide/sermant-backend.html"}},[t._v("Instance status parameters")]),t._v("). If a heartbeat has not been reported from a node, the node is set to be lost.")],1)]),t._v(" "),e("h2",{attrs:{id:"api-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-configuration"}},[t._v("#")]),t._v(" API & Configuration")]),t._v(" "),e("h3",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("p",[e("strong",[t._v("Get The Heartbeat Service")])]),t._v(" "),e("p",[t._v("Get the heartbeat service object, which is used to add additional information to the plug-in heartbeat data. This service is initialized by the framework and can be directly accessed by the plug-in.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),t._v(" heartbeatService "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeartbeatService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("Add Additional Information About Heartbeat")])]),t._v(" "),e("p",[t._v("Developers can add additional information about the heartbeat to the plugin as follows:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("heartbeatService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExtInfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("singletonMap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Based on the "),e("RouterLink",{attrs:{to:"/en/document/developer-guide/#Project-structure"}},[t._v("Project structure")]),t._v(" created in the first plugin, the heartbeat configuration is set by modifying the "),e("code",[t._v("config/config.properties")]),t._v(" file.")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Configuration Items")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Example Configuration")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("heartbeat.interval")]),t._v(" "),e("td",[t._v("Heartbeat sending interval time in ms")]),t._v(" "),e("td",[t._v("heartbeat.interval=30000")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);