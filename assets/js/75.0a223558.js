(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{194:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"bang-bang-control"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bang-bang-control","aria-hidden":"true"}},[s._v("#")]),s._v(" Bang Bang Control")]),s._v(" "),n("div",{staticClass:"language-c line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pa0 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("0")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n"),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pa4 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("0")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n"),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" diff "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("512")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// The difference between white and black. Equal to about 512.  ")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("setup")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  \n"),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("loop")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    pa0 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("analog")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("0")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    pa4 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("analog")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("4")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    \n    "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pa4 "),n("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" diff "),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),n("span",{attrs:{class:"token comment"}},[s._v("// if the right sensor touch of black line.")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{attrs:{class:"token function"}},[s._v("sr")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("80")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),n("span",{attrs:{class:"token comment"}},[s._v("// spin right.  Power 80%")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pa0 "),n("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" diff "),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),n("span",{attrs:{class:"token comment"}},[s._v("// if the left sensor touch of black line.")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{attrs:{class:"token function"}},[s._v("sl")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("80")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),n("span",{attrs:{class:"token comment"}},[s._v("// spin left. Power 80%")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v("                    "),n("span",{attrs:{class:"token comment"}},[s._v("// if other. Straddling the line.")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{attrs:{class:"token function"}},[s._v("fd")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("100")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("            "),n("span",{attrs:{class:"token comment"}},[s._v("// move forward. Power 100%")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("           \n\n    "),n("span",{attrs:{class:"token function"}},[s._v("sleep")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("50")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),n("span",{attrs:{class:"token comment"}},[s._v("// wait 50 millisec.")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])])}],!1,null,null,null);e.options.__file="bang-bang-control.md";t.default=e.exports}}]);