(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{GLXJ:function(s,t,r){"use strict";r.r(t);var a=r("eVuF"),e=r.n(a),n={data:function(){return{description:"Hello Vue Cesium",corridor1:{},name1:"Red corridor on surface with rounded corners",positions1:[{lng:100,lat:40},{lng:105,lat:40},{lng:105,lat:35}],material1:{},corridor2:{},name2:"Green corridor at height with mitered corners and outline",positions2:[{lng:90,lat:40},{lng:95,lat:40},{lng:95,lat:35}],cornerType2:0,corridor3:{},name3:"Blue extruded corridor with beveled corners and outline",positions3:[{lng:80,lat:40},{lng:85,lat:40},{lng:85,lat:35}],cornerType3:0,material3:{}}},mounted:function(){e.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise,this.$refs.entity3.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material1=t.Color.RED.withAlpha(.5),this.cornerType2=t.CornerType.MITERED,this.cornerType3=t.CornerType.BEVELED,this.material3=t.Color.BLUE.withAlpha(.5)}}},v=r("JFUb"),_=Object(v.a)(n,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h1",[s._v("CorridorGraphics")]),s._v(" "),s._m(0),s._v(" "),r("h2",[s._v("示例")]),s._v(" "),r("h3",[s._v("加载走廊")]),s._v(" "),r("h4",[s._v("预览")]),s._v(" "),r("doc-preview",[[r("div",{staticClass:"viewer"},[r("vc-viewer",{on:{ready:s.ready}},[r("vc-entity",{ref:"entity1",attrs:{name:s.name1,description:s.description,corridor:s.corridor1},on:{"update:corridor":function(t){s.corridor1=t}}},[r("vc-graphics-corridor",{attrs:{positions:s.positions1,material:s.material1,width:2e5}})],1),s._v(" "),r("vc-entity",{ref:"entity2",attrs:{name:s.name2,description:s.description,corridor:s.corridor2},on:{"update:corridor":function(t){s.corridor2=t}}},[r("vc-graphics-corridor",{attrs:{positions:s.positions2,height:1e5,width:2e5,cornerType:0,material:"GREEN",outline:!0}})],1),s._v(" "),r("vc-entity",{ref:"entity3",attrs:{name:s.name3,description:s.description,corridor:s.corridor3},on:{"update:corridor":function(t){s.corridor3=t}}},[r("vc-graphics-corridor",{attrs:{positions:s.positions3,material:s.material3,outlineColor:"WHITE",outline:!0,height:2e5,extrudedHeight:1e5,width:2e5,cornerType:s.cornerType3}})],1)],1)],1)]],2),s._v(" "),r("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),r("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),r("hr"),s._v(" "),s._m(3),s._v(" "),r("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),r("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-graphics-corridor")]),this._v(" 组件用于加载走廊对象，由一个中心线和宽度定义的形状，与地球的曲率一致。 它可以放置在地面上或高空放置，也可以选择挤压成一个体积。需要作为 "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(" 的子组件使用。")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"corridor1"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity2"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name2"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"corridor2"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions2"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"GREEN"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n        >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity3"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"name3"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":corridor.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"corridor3"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions3"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"WHITE"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cornerType")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cornerType3"')]),s._v("\n        >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-corridor")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("corridor1")]),s._v(": {},\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name1")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Red corridor on surface with rounded corners'")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions1")]),s._v(": [\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ],\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("corridor2")]),s._v(": {},\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name2")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Green corridor at height with mitered corners and outline'")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions2")]),s._v(": [\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("90.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ],\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cornerType2")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("corridor3")]),s._v(": {},\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name3")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Blue extruded corridor with beveled corners and outline'")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions3")]),s._v(": [\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n          { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ],\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cornerType3")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {}\n      }\n    },\n    mounted() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity1.createPromise, "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity2.createPromise, "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity3.createPromise]).then(\n        "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n          instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n        }\n      )\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED.withAlpha("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType2 = Cesium.CornerType.MITERED\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cornerType3 = Cesium.CornerType.BEVELED\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = Cesium.Color.BLUE.withAlpha("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      }\n    }\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("属性名")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("默认值")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("show")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("true")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 是否显示。")])]),s._v(" "),r("tr",[r("td",[s._v("positions")]),s._v(" "),r("td",[s._v("Array")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定描述 corridor 位置的经纬度(高度)数组。 "),r("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),r("tr",[r("td",[s._v("width")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 边之间的距离。")])]),s._v(" "),r("tr",[r("td",[s._v("height")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 高度。")])]),s._v(" "),r("tr",[r("td",[s._v("heightReference")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 高度模式。 "),r("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),r("tr",[r("td",[s._v("extrudedHeight")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 拉伸高度。")])]),s._v(" "),r("tr",[r("td",[s._v("extrudedHeightReference")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 拉伸高度模式。 "),r("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),r("tr",[r("td",[s._v("cornerType")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 转角样式。"),r("strong",[s._v("ROUNDED: 0, MITERED: 1, BEVELED: 2")])])]),s._v(" "),r("tr",[r("td",[s._v("granularity")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),r("tr",[r("td",[s._v("fill")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("true")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 是否填充材质。")])]),s._v(" "),r("tr",[r("td",[s._v("material")]),s._v(" "),r("td",[s._v("Object|String|Array")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("'white'")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 的材质。")])]),s._v(" "),r("tr",[r("td",[s._v("outline")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("false")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 是否绘制轮廓线。")])]),s._v(" "),r("tr",[r("td",[s._v("outlineColor")]),s._v(" "),r("td",[s._v("Object|String|Array")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("'black'")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 轮廓线颜色。")])]),s._v(" "),r("tr",[r("td",[s._v("outlineWidth")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("1.0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 轮廓线宽度。")])]),s._v(" "),r("tr",[r("td",[s._v("shadows")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 是否接收或者发射每个点光源的阴影。 "),r("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),r("tr",[r("td",[s._v("distanceDisplayCondition")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 随相机距离改变是否显示参数。"),r("strong",[s._v("结构：{ near: number, far: number }")])])]),s._v(" "),r("tr",[r("td",[s._v("classificationType")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("2")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 的贴对象模式。 "),r("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),s._v(" "),r("tr",[r("td",[s._v("zIndex")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定 corridor 顺序，没有高度和拉伸高度才有效。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html"}},[this._v("CorridorGraphics")])])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("事件名")]),s._v(" "),r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("ready")]),s._v(" "),r("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),r("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),r("tr",[r("td",[s._v("definitionChanged")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);t.default=_.exports},w6Qn:function(s,t,r){s.exports=r("GLXJ")}}]);
//# sourceMappingURL=100.da0ec75e5fee608843bf.js.map