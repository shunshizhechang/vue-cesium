(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{Av0V:function(s,e,t){s.exports=t("S0/l")},"S0/l":function(s,e,t){"use strict";t.r(e);var r=t("eVuF"),a=t.n(r),n={data:function(){return{appearance:null,geometry:null,attributes:null,modelMatrix:null,vertexFormat:null,radius:2e5,modelMatrixOutline:null}},mounted:function(){a.a.all([this.$refs.sphere.createPromise,this.$refs.sphereOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var e=s.reduce((function(s,e){var t=e.cesiumObject.constructor.createGeometry(e.cesiumObject),r=e.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(t.boundingSphere,e.vm.$parent.modelMatrix):t.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(e)}))},methods:{ready:function(s){var e=s.Cesium,t=s.viewer;this.viewer=t;var r=e.Matrix4,a=e.PerInstanceColorAppearance,n=e.Transforms,v=e.Cartesian3,l=e.ColorGeometryInstanceAttribute;this.appearance=new a({flat:!0}),this.vertexFormat=a.VERTEX_FORMAT,this.attributes={color:new l(Math.random(),Math.random(),Math.random(),.5)},this.modelMatrix=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(v.fromDegrees(105,35)),new v(0,0,1e5),new r),this.modelMatrixOutline=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(v.fromDegrees(110,35)),new v(0,0,2e5),new r)},LEFT_CLICK:function(s){var e=this.viewer.scene.pick(s.position);console.log(e)}}},v=t("JFUb"),l=Object(v.a)(n,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("h1",[s._v("SphereGeometry, SphereOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load SphereGeometry")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{ref:"viewer",on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK}},[t("vc-primitive",{ref:"primitive",attrs:{appearance:s.appearance}},[t("vc-instance-geometry",{ref:"geometry",attrs:{geometry:s.geometry,attributes:s.attributes,modelMatrix:s.modelMatrix},on:{"update:geometry":function(e){s.geometry=e}}},[t("vc-geometry-sphere",{ref:"sphere",attrs:{radius:s.radius,vertexFormat:s.vertexFormat}})],1)],1),s._v(" "),t("vc-primitive",{attrs:{appearance:s.appearance}},[t("vc-instance-geometry",{attrs:{attributes:s.attributes,modelMatrix:s.modelMatrixOutline}},[t("vc-geometry-outline-sphere",{ref:"sphereOutline",attrs:{radius:s.radius}})],1)],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(7),s._v(" "),t("hr")],1)}),[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ul",[t("li",[s._v("The "),t("code",{pre:!0},[s._v("vc-geometry-sphere")]),s._v(" component is used to load a geometry that describes a sphere centered at the origin.")]),s._v(" "),t("li",[s._v("The "),t("code",{pre:!0},[s._v("vc-geometry-outline-sphere")]),s._v(" component is used to load a geometry that describes the outline of a sphere.")]),s._v(" "),t("li",[s._v("It needs to be used as a sub-component of "),t("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(", can be mounted on "),t("code",{pre:!0},[s._v("vc-primitive")]),s._v(".")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primitive"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-sphere")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sphere"')]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radius"')]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n            >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipsoid")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrixOutline"')]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-sphere")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sphereOutline"')]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radius"')]),s._v("\n            >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-sphere")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      data() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrixOutline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n        }\n      },\n      mounted () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all([\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.sphere.createPromise,\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.sphereOutline.createPromise,\n        ]).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n          }, "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n          instances["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n        })\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        ready({ Cesium, viewer }) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" : "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n          })\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n          }\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Matrix4.multiplyByTranslation(\n            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n          )\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrixOutline = Matrix4.multiplyByTranslation(\n            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n          )\n        },\n        LEFT_CLICK(movement) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer.scene.pick(movement.position)\n          "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(feature)\n        }\n      }\n    }\n  ")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",[e("code",{pre:!0},[this._v("vc-geometry-sphere")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("radius")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1.0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The radius of the sphere.")])]),s._v(" "),t("tr",[t("td",[s._v("stackPartitions")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("0.0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The number of times to partition the ellipsoid into stacks.")])]),s._v(" "),t("tr",[t("td",[s._v("slicePartitions")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("10")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The number of times to partition the ellipsoid into radial slices.")])]),s._v(" "),t("tr",[t("td",[s._v("vertexFormat")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The vertex attributes to be computed.")])])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",[e("code",{pre:!0},[this._v("vc-geometry-outline-sphere")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("radius")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1.0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The radius of the sphere.")])]),s._v(" "),t("tr",[t("td",[s._v("stackPartitions")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("0.0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The number of times to partition the ellipsoid into stacks.")])]),s._v(" "),t("tr",[t("td",[s._v("slicePartitions")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("10")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The number of times to partition the ellipsoid into radial slices.")])]),s._v(" "),t("tr",[t("td",[s._v("subdivisions")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("200")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The number of points per line, determining the granularity of the curvature .")])])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("Refer to the official document: "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html"}},[this._v("SphereGeometry")])]),this._v(", "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html"}},[this._v("SphereOutlineGeometry")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=46.41bebe84dd7b60944a9d.js.map