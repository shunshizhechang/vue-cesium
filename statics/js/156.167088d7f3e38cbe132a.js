(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{"7dMU":function(t,e,v){t.exports=v("cb6h")},cb6h:function(t,e,v){"use strict";v.r(e);var _={data:function(){return{url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{}}},methods:{ready:function(t){var e=t.Cesium,v=t.viewer;this.viewer=v,this.modelMatrix=e.Transforms.eastNorthUpToFixedFrame(e.Cartesian3.fromDegrees(105,38,1e4))},readyPromise:function(t){var e=Cesium.BoundingSphere.transform(t.boundingSphere,t.modelMatrix);this.viewer.scene.camera.flyToBoundingSphere(e)}}},r=v("JFUb"),s=Object(r.a)(_,(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("section",[v("h1",[t._v("Model")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("示例")]),t._v(" "),v("h3",[t._v("加载 glTF 模型")]),t._v(" "),v("h4",[t._v("预览")]),t._v(" "),v("doc-preview",[[v("div",{staticClass:"viewer"},[v("vc-viewer",{on:{ready:t.ready}},[v("vc-primitive-model",{attrs:{url:t.url,modelMatrix:t.modelMatrix,scale:1e4,minimumPixelSize:128,maximumScale:2e5},on:{readyPromise:t.readyPromise}})],1)],1)]],2),t._v(" "),v("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),v("hr"),t._v(" "),t._m(3),t._v(" "),v("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),v("hr")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",{pre:!0},[this._v("vc-primitive-model")]),this._v(" 组件用于加载基于 glTF 的三维模型。")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-model")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"model"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@readyPromise")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readyPromise"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":modelMatrix")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"modelMatrix"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":scale")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"10000"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":minimumPixelSize")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"128"')]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":maximumScale")]),t._v("="),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"200000"')]),t._v("\n      >")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-model")]),t._v(">")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),v("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),t._v(",\n        "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("modelMatrix")]),t._v(": {}\n      }\n    },\n    "),v("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer = viewer\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("105")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("38")]),t._v(", "),v("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10000")]),t._v("))\n      },\n      readyPromise(model) {\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)\n        "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      }\n    }\n  }\n")]),v("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("url")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("required")]),t._v(" 指定 gltf 文件的 url 地址。")])]),t._v(" "),v("tr",[v("td",[t._v("basePath")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 glTF JSON 中的路径相对于的基本路径。")])]),t._v(" "),v("tr",[v("td",[t._v("show")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 图元是否显示。")])]),t._v(" "),v("tr",[v("td",[t._v("modelMatrix")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 4x4 转换矩阵，用于将模型从模型坐标转换为世界坐标。")])]),t._v(" "),v("tr",[v("td",[t._v("scale")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("1.0")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 缩放比例。")])]),t._v(" "),v("tr",[v("td",[t._v("minimumPixelSize")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0.0")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 的最小像素。")])]),t._v(" "),v("tr",[v("td",[t._v("maximumScale")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 最大像素。")])]),t._v(" "),v("tr",[v("td",[t._v("id")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定与 model 关联的信息。")])]),t._v(" "),v("tr",[v("td",[t._v("allowPicking")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定与 model 是否可以被拾取。")])]),t._v(" "),v("tr",[v("td",[t._v("incrementallyLoadTextures")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定在加载模型后纹理是否可以继续流入。")])]),t._v(" "),v("tr",[v("td",[t._v("asynchronous")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成。")])]),t._v(" "),v("tr",[v("td",[t._v("clampAnimations")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定动画在没有帧动画的时候保持最后一个姿势。")])]),t._v(" "),v("tr",[v("td",[t._v("shadows")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("1")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 是否投射或接收每个光源的阴影。 "),v("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),t._v(" "),v("tr",[v("td",[t._v("debugShowBoundingVolume")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 可选的仅用于调试。 为模型中的每个DrawCommand绘制边界球。")])]),t._v(" "),v("tr",[v("td",[t._v("debugWireframe")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 可选的仅用于调试。 仅用于调试。 在线框中绘制模型。")])]),t._v(" "),v("tr",[v("td",[t._v("heightReference")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 的高度模式。 "),v("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),v("tr",[v("td",[t._v("scene")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("false")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 对于使用height reference属性的模型必须传递。")])]),t._v(" "),v("tr",[v("td",[t._v("distanceDisplayCondition")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 随相机改变的显示条件。 "),v("strong",[t._v("结构：{ near: number, far: number }")])])]),t._v(" "),v("tr",[v("td",[t._v("color")]),t._v(" "),v("td",[t._v("Object|String|Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("'WHITE'")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 渲染混合的颜色。")])]),t._v(" "),v("tr",[v("td",[t._v("colorBlendMode")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 与颜色混合模式。 "),v("strong",[t._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")])])]),t._v(" "),v("tr",[v("td",[t._v("colorBlendAmount")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0.5")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。")])]),t._v(" "),v("tr",[v("td",[t._v("silhouetteColor")]),t._v(" "),v("td",[t._v("Object|String|Array")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("'RED'")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 轮廓线颜色。")])]),t._v(" "),v("tr",[v("td",[t._v("silhouetteSize")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("0.0")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 轮廓线像素尺寸。")])]),t._v(" "),v("tr",[v("td",[t._v("clippingPlanes")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 屏幕裁剪参数。")])]),t._v(" "),v("tr",[v("td",[t._v("debugWireframe")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("true")])]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 确定是否在GPU上对Draco编码的模型进行了反量化。 这减少了编码模型的总内存使用量。")])]),t._v(" "),v("tr",[v("td",[t._v("credit")]),t._v(" "),v("td",[t._v("Object|String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 指定 model 的描述信息。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("参考官方文档："),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Model.html"}},[this._v("Model")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ready")]),t._v(" "),v("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),v("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),v("tr",[v("td",[t._v("readyPromise")]),t._v(" "),v("td",[t._v("model")]),t._v(" "),v("td",[t._v("模型可用时触发。 返回模型对象。")])])])])}],!1,null,null,null);e.default=s.exports}}]);
//# sourceMappingURL=156.167088d7f3e38cbe132a.js.map