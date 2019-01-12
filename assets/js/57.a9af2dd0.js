(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{212:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("A file must be opened before any I/O operation can be performed on that file .")]),t._v(" "),a("p",[t._v("The process of establishing a connection between the program and the file is called opening the file")]),t._v(" "),a("p",[t._v("A structure named FILE Is defined in the file stdio.h that contains all information about the file like name , status , buffer size , current position , end of file status etc .")]),t._v(" "),a("InPageAds"),t._v(" "),a("p",[t._v("All these details are hidden from the programmer and the operating system takes care of all these things.")]),t._v(" "),t._m(1),a("p",[t._v("A file pointer is a pointer to a structure of type FILE . Whenever a file is opened , a structure of type FILE is associated with it , and a file pointer that points to this structure identifies this file .")]),t._v(" "),a("p",[t._v("The function fopen() is used to open a file\nDeclaration")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("On success , fopen() returns a pointer of type FILE and on error it returns NULL .")]),t._v(" "),a("p",[t._v("The return value of fopen() is assigned to the pointer declared previously .")]),t._v(" "),a("p",[t._v("For example")]),t._v(" "),t._m(4),a("p",[t._v("The name of the file is limited to FILENAME_MAX characters .")]),t._v(" "),a("p",[t._v("After opening the file with fopen() , the name of file is not used in the program for any operation on it .")]),t._v(" "),a("p",[t._v("whenever we have to performed any operation on the file we will use pointer returned by fopen() function .")]),t._v(" "),a("p",[t._v("so the original name is called external name but the file pointer associated with it is called internal name.")]),t._v(" "),a("p",[t._v("The second argument represent the mode in which file is opened .")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("If the file does not exit then this mode create a new file and if the file is already exist then previous data is erased and new data entered is written to the file")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("If the file does not exit then this mode create a new file and if the file is already exist then new data is appended at the end of file . In this mode , the data existing in the file is not erased as in previous mode.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("This mode is used to read existing data in the file . File must exist for this operation and data is not erased")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("This mode is similar to the write mode but here we can also read and modify the data . If the file does not exit then this mode create a new file and if the file is already exist then previous data is erased and new data entered is written to the file")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("This mode is similar to the read mode but here we can also write and modify the data .File must exist for this operation and data is not erased . Since we can add new data and modify existing data so this mode is also called update mode.")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("This mode is similar to the append mode but here we can also read the data stored in the file . If the file does not exit then this mode create a new file and if the file is already exist then new data is appended at the end of file . In this mode , the data existing in the file is not erased as in previous mode.")]),t._v(" "),a("InPageAds"),t._v(" "),a("p",[t._v("To open a file in binary mode we can append ‘b’ to the mode , and to open the file in text mode ‘t’ can be appended to the mode .")]),t._v(" "),a("p",[t._v("But since text mode is the default mode , ‘t’ is generally omitted while opening files in text mode . For example-")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("If an error occurs in opening the file , than fopen() return null . So we can check for any errors in opening by checking the return value of fopen() .")]),t._v(" "),t._m(14),a("p",[t._v("Errors in opening a file may occur due to various reasons , for example-")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("We can give full pathname to open a file . Suppose we want to open a file DOS whose path is ”f:\\file\\myfile.dat” , then we have to write as –")]),t._v(" "),t._m(16),a("p",[t._v("Here we have used double backslash inside string is considered as an escape character , ‘\\f’ and ‘\\m’ are regarded as escape sequence if we use single backslash . In Unix , a single forward slash can be used")]),t._v(" "),a("p",[t._v("Never give the mode single quotes , since it is string not a character constant")]),t._v(" "),t._m(17)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"opening-a-file-in-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-file-in-c","aria-hidden":"true"}},[this._v("#")]),this._v(" Opening a file in c")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("typedef")]),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n…………"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n……………\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" FILE"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FILE "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("fopen "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("filename "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("fopen() function takes two string as arguments , the first one is the name of the file to be opened and the second one is the mode that describes which operations ( read , write , append etc) are to be performed on the file .")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FILE "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("fp1 "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("fp2 "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFp1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“myfile"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt”"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("”w”"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nFp2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“myfile"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dat”"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("”r”"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"modes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modes","aria-hidden":"true"}},[this._v("#")]),this._v(" Modes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“w”-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“w”-write","aria-hidden":"true"}},[this._v("#")]),this._v(" “w”(write)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“a”-append"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“a”-append","aria-hidden":"true"}},[this._v("#")]),this._v(" “a”(append)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“r”-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“r”-read","aria-hidden":"true"}},[this._v("#")]),this._v(" “r”(read)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“w-”-write-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“w-”-write-read","aria-hidden":"true"}},[this._v("#")]),this._v(" “w+”(write+read)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“r-”-read-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“r-”-read-write","aria-hidden":"true"}},[this._v("#")]),this._v(" “r+”(read+write)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"“a-”-append-read"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#“a-”-append-read","aria-hidden":"true"}},[this._v("#")]),this._v(" “a+”(append+read)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("“wb” "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Binary file opened in write mode\n\n“ab"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("” or “a"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("b” "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Binary file opened in append mode\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"errors-in-opening-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errors-in-opening-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Errors in Opening Files")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FILE "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("fp "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“myfile"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dat”"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("”w”"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“error in opening file”"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("If we try to open a file in a read or update mode , and the file does not exist or we do not have read permission on that file")])]),this._v(" "),e("li",[e("p",[this._v("If we try to create a file and there is no space on the disk , then we do not have write permission")])]),this._v(" "),e("li",[e("p",[this._v("Operating system limit the number of file that can be opened at a time and we are trying to open more file than that limit\nAlert")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("fp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("”f"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\file\\\\myfile"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dat”"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" “r”"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("fopen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("”f"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\\\file\\\\myfile"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dat”"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ‘r’"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//ERROR")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])}],!1,null,null,null);n.options.__file="openingfileinc.md";e.default=n.exports}}]);