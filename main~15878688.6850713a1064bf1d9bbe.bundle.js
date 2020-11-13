(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1508:function(module,exports,__webpack_require__){"use strict";__webpack_require__(1),Object.defineProperty(exports,"__esModule",{value:!0}),exports.autoAdjusting=exports.noGap=exports.offset=exports.nesting=exports.responsiveness=exports.differentSizeColumns=exports.default=void 0;exports.default={title:"Layouts/Layout Grid",parameters:{description:"The layout grid is made to seperate data into both columns and rows. If there is not enough space on the current line of the same row, the item will go to the next line without the margin at the top.\nTo use the grid, the user must use all of the `fd-container`, `fd-row`, and `fd-col` tags.\n\n- Use the `fd-container` class to wrap the whole grid and help apply the proper row margin.\n- Use the `fd-container--no-gap` modifier to remove the gutter spacing between all columns.\n- Use the `fd-row` to seperate rows and have an automatic gutter in between columns when they column wraps to the next line.\n- Use the `fd-col` to create a column of a certain width. The default value will create a column the full width, being 12 columns of the parent at size small and above unless specified another size.\n- Use the `fd-col--x` modifier will make the column spread x-rows/12 (e.g. `fd-col--4` which will take 4 columns out of 12).\n\n<h2>Breakpoints</h2>\n\n- Default until next specified breakpoint<br>\n`fd-col--x` will be used until the next specified minimum breakpoint, column takes x/12 space of the row.\n- Medium 600px<br>\n`fd-col-md--x` will be used from 600px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Large 1024px<br>\n`fd-col-lg--x` will be used from 1024px to the next specified minimum breakpoint, column takes x/12 space of the row.\n- Extra-large 1440px<br>\n`fd-col-xl--x` will be used from 1440px and larger, column takes x/12 space of the row.",components:["layout-grid"]}};var differentSizeColumns=function differentSizeColumns(){return'<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">12 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--11">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">11 columns element</div>\n      </div>\n      <div class="fd-col fd-col--1">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">1 column element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--10">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">10 columns element</div>\n      </div>\n      <div class="fd-col fd-col--2">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">2 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--9">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">9 columns element</div>\n      </div>\n      <div class="fd-col fd-col--3">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">3 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--8">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">8 columns element</div>\n      </div>\n      <div class="fd-col fd-col--4">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">4 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--7">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">7 columns element</div>\n      </div>\n      <div class="fd-col fd-col--5">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">5 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--6">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">6 columns element</div>\n      </div>\n      <div class="fd-col fd-col--6">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">6 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--5">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">5 columns element</div>\n      </div>\n      <div class="fd-col fd-col--7">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">7 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--4">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">4 columns element</div>\n      </div>\n      <div class="fd-col fd-col--8">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">8 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--3">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">3 columns element</div>\n      </div>\n      <div class="fd-col fd-col--9">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">9 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--2">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">2 columns element</div>\n      </div>\n      <div class="fd-col fd-col--10">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">10 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--1">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">1 column element</div>\n      </div>\n      <div class="fd-col fd-col--11">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">11 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">12 columns element</div>\n      </div>\n  </div>\n</div>\n'};exports.differentSizeColumns=differentSizeColumns,differentSizeColumns.parameters={docs:{iframeHeight:1150,storyDescription:"To define the size of that column use the `fd-col--x` modifier, where `x` can go from 1-12"}};var responsiveness=function responsiveness(){return'<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">(1 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">(2 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">(3 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">(4 cell)</div>\n    </div>\n  </div>\n</div>\n'};exports.responsiveness=responsiveness,responsiveness.parameters={docs:{iframeHeight:320,storyDescription:"You can define different column sizes for each inflection point. In this example for extra large the cells are taking 4 columns out of 12 `fd-col-xl--4`; 4 columns out of 12 in large `fd-col-lg--4`; 6 columns out of 12 in medium `fd-col-md--6`, and 12 out of 12 in small `fd-col--12`"}};var nesting=function nesting(){return'<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--2">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            6 col (1/2 = 50%)\n        </div>\n    </div>\n    <div class="fd-col fd-col--10">\n        <div class="fd-row"">\n            <div class="fd-col fd-col--2">\n                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2"> \n                    2 col inner row 1 (1/12 ~8%)\n                </div> \n            </div>\n            <div class="fd-col fd-col--10">\n                <div class="fd-row">\n                    <div class="fd-col fd-col--6">\n                        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n                            6 coll inner row 2 (5/24 ~21%)\n                        </div>\n                    </div>      \n                    <div class="fd-col fd-col--6">\n                        <div class="fd-row">\n                            <div class="fd-col fd-col--4">\n                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">\n                                4 coll inner row 3 (5/72 ~7%)\n                                </div>\n                            </div>\n                            <div class="fd-col fd-col--8">\n                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">\n                                8 coll inner row 3 (10/72 ~14%)\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n'};exports.nesting=nesting,nesting.parameters={docs:{iframeHeight:150,storyDescription:'Add an extra <code class="docs-code">fd-row</code> class in between inner rows when using nesting. It will add a gutter in between rows.'}};var offset=function offset(){return'<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            12 columns\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n            6 columns\n        </div>\n    </div>\n    <div class="fd-col fd-col--8 fd-col--offset-4 fd-col-md--6 fd-col-md--offset-2 fd-col-lg--4 fd-col-lg--offset-4 fd-col-lx--3 fd-col-lx--offset-6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5"> \n            Different column-width and offset in different inflection points \n        </div>\n    </div>\n    <div class="fd-col fd-col--6 fd-col--offset-6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7"> \n            6 columns with 6-column offset \n        </div>\n    </div>\n    <div class="fd-col fd-col--3 fd-col--offset-after-1 fd-col-md--offset-after-2 fd-col-lg--offset-after-2 fd-col-xl--offset-after-1">\n      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8"> \n          2 column-width and offset after in different inflection points \n      </div>\n    </div>\n    <div class="fd-col fd-col--4 fd-col--offset-after-1">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9"> \n            4 columns with 2-column offset after\n        </div>\n    </div>\n    <div class="fd-col fd-col--2">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">2 column element</div>\n    </div>\n  </div>\n</div>\n'};exports.offset=offset,offset.parameters={docs:{iframeHeight:450,storyDescription:'To add an offset to the left of the column for all sizes use the <code class="docs-code">--offset-x</code> modifier. X will be the size of your choice. If the column after the offset col no longer fits in parent container it will switch to the next line. To add an offset to the left of the column for certain sizes and above use the <code class="docs-code">--offset-x--size</code> modifier, where size is either s,m,l,xl. To make the offset after and not before use the <code class="docs-code">--offset-after-x--size</code> modifier.'}};var noGap=function noGap(){return'<div class="fd-container fd-container--no-gap">\n  <div class="fd-row">\n    <div class="fd-col fd-col--8">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            8 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--4">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">\n            4 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n            6 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">\n            6 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--4">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">\n            4 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--8">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">\n            8 col no gap\n        </div>\n    </div>\n  </div>\n</div>\n'};exports.noGap=noGap,noGap.parameters={docs:{iframeHeight:300,storyDescription:'To remove gutters between columns apply the <code class="docs-code">fd-container--no-gap</code> modifier for the container and the <code class="docs-code">fd-col--no-gap</code> modifier with the column.'}};var autoAdjusting=function autoAdjusting(){return'<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--full">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            Auto adjusting col before 7 col\n        </div>\n    </div>\n    <div class="fd-col fd-col--7">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">\n            7 col\n        </div>\n    </div>\n    <div class="fd-col fd-col--full">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            Auto adjusting col after 7 col\n        </div>\n    </div>\n  </div>\n</div>\n'};exports.autoAdjusting=autoAdjusting,autoAdjusting.parameters={docs:{iframeHeight:300,storyDescription:'To make the column auto adjust and occupy the remaining space of the row use the <code class="docs-code">--full</code> modifier. There is a minimum width of 1/12 columns'}},differentSizeColumns.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">12 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--11">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">11 columns element</div>\n      </div>\n      <div class="fd-col fd-col--1">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">1 column element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--10">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">10 columns element</div>\n      </div>\n      <div class="fd-col fd-col--2">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">2 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--9">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">9 columns element</div>\n      </div>\n      <div class="fd-col fd-col--3">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">3 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--8">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">8 columns element</div>\n      </div>\n      <div class="fd-col fd-col--4">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">4 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--7">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">7 columns element</div>\n      </div>\n      <div class="fd-col fd-col--5">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">5 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--6">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">6 columns element</div>\n      </div>\n      <div class="fd-col fd-col--6">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">6 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--5">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">5 columns element</div>\n      </div>\n      <div class="fd-col fd-col--7">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">7 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--4">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">4 columns element</div>\n      </div>\n      <div class="fd-col fd-col--8">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">8 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--3">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">3 columns element</div>\n      </div>\n      <div class="fd-col fd-col--9">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7">9 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--2">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8">2 columns element</div>\n      </div>\n      <div class="fd-col fd-col--10">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9">10 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col fd-col--1">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-10">1 column element</div>\n      </div>\n      <div class="fd-col fd-col--11">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-11">11 columns element</div>\n      </div>\n  </div>\n</div>\n<br />\n<div class="fd-container">\n  <div class="fd-row">\n      <div class="fd-col">\n          <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">12 columns element</div>\n      </div>\n  </div>\n</div>\n`'}},differentSizeColumns.parameters),responsiveness.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">(1 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">(2 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">(3 cell)</div>\n    </div>\n    <div class="fd-col fd-col--12 fd-col-md--6 fd-col-lg--4 fd-col-xl--4 ">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">(4 cell)</div>\n    </div>\n  </div>\n</div>\n`'}},responsiveness.parameters),nesting.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--2">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            6 col (1/2 = 50%)\n        </div>\n    </div>\n    <div class="fd-col fd-col--10">\n        <div class="fd-row"">\n            <div class="fd-col fd-col--2">\n                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2"> \n                    2 col inner row 1 (1/12 ~8%)\n                </div> \n            </div>\n            <div class="fd-col fd-col--10">\n                <div class="fd-row">\n                    <div class="fd-col fd-col--6">\n                        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n                            6 coll inner row 2 (5/24 ~21%)\n                        </div>\n                    </div>      \n                    <div class="fd-col fd-col--6">\n                        <div class="fd-row">\n                            <div class="fd-col fd-col--4">\n                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">\n                                4 coll inner row 3 (5/72 ~7%)\n                                </div>\n                            </div>\n                            <div class="fd-col fd-col--8">\n                                <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">\n                                8 coll inner row 3 (10/72 ~14%)\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n`'}},nesting.parameters),offset.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            12 columns\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n            6 columns\n        </div>\n    </div>\n    <div class="fd-col fd-col--8 fd-col--offset-4 fd-col-md--6 fd-col-md--offset-2 fd-col-lg--4 fd-col-lg--offset-4 fd-col-lx--3 fd-col-lx--offset-6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5"> \n            Different column-width and offset in different inflection points \n        </div>\n    </div>\n    <div class="fd-col fd-col--6 fd-col--offset-6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-7"> \n            6 columns with 6-column offset \n        </div>\n    </div>\n    <div class="fd-col fd-col--3 fd-col--offset-after-1 fd-col-md--offset-after-2 fd-col-lg--offset-after-2 fd-col-xl--offset-after-1">\n      <div class="docs-layout-grid-bg docs-layout-grid-bg--color-8"> \n          2 column-width and offset after in different inflection points \n      </div>\n    </div>\n    <div class="fd-col fd-col--4 fd-col--offset-after-1">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-9"> \n            4 columns with 2-column offset after\n        </div>\n    </div>\n    <div class="fd-col fd-col--2">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-12">2 column element</div>\n    </div>\n  </div>\n</div>\n`'}},offset.parameters),noGap.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container fd-container--no-gap">\n  <div class="fd-row">\n    <div class="fd-col fd-col--8">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            8 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--4">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">\n            4 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-3">\n            6 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--6">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-4">\n            6 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--4">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-5">\n            4 col no gap\n        </div>\n    </div>\n    <div class="fd-col fd-col--8">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-6">\n            8 col no gap\n        </div>\n    </div>\n  </div>\n</div>\n`'}},noGap.parameters),autoAdjusting.parameters=Object.assign({storySource:{source:'() => `<div class="fd-container">\n  <div class="fd-row">\n    <div class="fd-col fd-col--full">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            Auto adjusting col before 7 col\n        </div>\n    </div>\n    <div class="fd-col fd-col--7">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-2">\n            7 col\n        </div>\n    </div>\n    <div class="fd-col fd-col--full">\n        <div class="docs-layout-grid-bg docs-layout-grid-bg--color-1">\n            Auto adjusting col after 7 col\n        </div>\n    </div>\n  </div>\n</div>\n`'}},autoAdjusting.parameters)},1509:function(module,exports,__webpack_require__){"use strict";__webpack_require__(1),Object.defineProperty(exports,"__esModule",{value:!0}),exports.primary=exports.default=void 0;exports.default={title:"Layouts/Layout Panel",parameters:{description:"\n  Layout Panels are used to encapsulate part of the content, form elements, lists, collections, etc., on a page.\n\n  Place patterns and interactions within panels on your pages to achieve focus and separation for the tasks at-hand with the information displayed inside the panel.\n\n  ## Elements\n  - <code>.fd-layout-panel__header</code>: Layout Panel header.\n  - <code>.fd-layout-panel__head</code>: Container for title and description.\n  - <code>.fd-layout-panel__title</code>: Title of the Layout Panel.\n  - <code>.fd-layout-panel__description</code>: Title of the description.\n  - <code>.fd-layout-panel__actions</code>: Layout Panel level actions such as add, remove, delete, sort, etc.\n  - <code>.fd-layout-panel__filters</code>: Layout Panel level filters that is specific to the data being displayed within the panel.\n  - <code>.fd-layout-panel__body</code>: Main content of the Layout Panel can that hold lists, table, tree, text, form or any other infomation.\n  - <code>.fd-layout-panel__footer</code>: Layout Panel footer can be utilized for pagination, secondary actions, add more data, etc.\n      ",components:["layout-panel","title"]}};var primary=function primary(){return'<div class="fd-layout-panel">\n  <div class="fd-layout-panel__header">\n    <div class="fd-layout-panel__head">\n      <div class="fd-layout-panel__title">\n        <h3 class="fd-title fd-title--h5">\n          .fd-layout-panel__title\n        </h3>\n      </div>\n      <p class="fd-layout-panel__description">\n        .fd-layout-panel__description\n      </p>\n    </div>\n    <div class="fd-layout-panel__actions">\n      .fd-layout-panel__actions\n    </div>\n  </div>\n  <div class="fd-layout-panel__filters" id="">\n    .fd-layout-panel__filters\n  </div>\n  <div class="fd-layout-panel__body">\n    .fd-layout-panel__body\n  </div>\n  <div class="fd-layout-panel__footer">\n    .fd-layout-panel__footer\n  </div>\n</div>\n'};exports.primary=primary,primary.parameters=Object.assign({storySource:{source:'() => `<div class="fd-layout-panel">\n  <div class="fd-layout-panel__header">\n    <div class="fd-layout-panel__head">\n      <div class="fd-layout-panel__title">\n        <h3 class="fd-title fd-title--h5">\n          .fd-layout-panel__title\n        </h3>\n      </div>\n      <p class="fd-layout-panel__description">\n        .fd-layout-panel__description\n      </p>\n    </div>\n    <div class="fd-layout-panel__actions">\n      .fd-layout-panel__actions\n    </div>\n  </div>\n  <div class="fd-layout-panel__filters" id="">\n    .fd-layout-panel__filters\n  </div>\n  <div class="fd-layout-panel__body">\n    .fd-layout-panel__body\n  </div>\n  <div class="fd-layout-panel__footer">\n    .fd-layout-panel__footer\n  </div>\n</div>\n`'}},primary.parameters)}}]);
//# sourceMappingURL=main~15878688.6850713a1064bf1d9bbe.bundle.js.map