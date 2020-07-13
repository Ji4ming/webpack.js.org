(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{441:function(e,n,i){"use strict";i.r(n),n.default='<p>This is a list of plugins which are used by webpack internally.</p>\n<blockquote class="warning">\n<p>You should only care about them if you are building your own compiler based on webpack, or introspect the internals.</p>\n</blockquote>\n<p>Categories of internal plugins:</p>\n<ul>\n<li><a href="#environment">environment</a></li>\n<li><a href="#compiler">compiler</a></li>\n<li><a href="#entry">entry</a></li>\n<li><a href="#output">output</a></li>\n<li><a href="#source">source</a></li>\n<li><a href="#optimize">optimize</a></li>\n</ul>\n<h2 id="environment">environment<a href="#environment" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Plugins affecting the environment of the compiler.</p>\n<h3 id="nodeenvironmentplugin">NodeEnvironmentPlugin<a href="#nodeenvironmentplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>webpack.node.NodeEnvironmentPlugin()</code></p>\n<p>Applies Node.js style filesystem to the compiler.</p>\n<h2 id="compiler">compiler<a href="#compiler" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Plugins affecting the compiler</p>\n<h3 id="memorycacheplugin">MemoryCachePlugin<a href="#memorycacheplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>MemoryCachePlugin()</code></p>\n<p>Adds a cache to the compiler, where modules are cached in memory.</p>\n<h3 id="progressplugin">ProgressPlugin<a href="#progressplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>ProgressPlugin(handler)</code></p>\n<p>Hook into the compiler to extract progress information. The <code>handler</code> must have the signature <code>function(percentage, message)</code>. Percentage is called with a value between 0 and 1, where 0 indicates the start and 1 the end.</p>\n<h3 id="recordidsplugin">RecordIdsPlugin<a href="#recordidsplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>RecordIdsPlugin()</code></p>\n<p>Saves and restores module and chunk ids from records.</p>\n<h2 id="entry">entry<a href="#entry" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Plugins, which add entry chunks to the compilation.</p>\n<h3 id="singleentryplugin">SingleEntryPlugin<a href="#singleentryplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SingleEntryPlugin(context, request, chunkName)</code></p>\n<p>Adds an entry chunk on compilation. The chunk is named <code>chunkName</code> and contains only one module (plus dependencies). The module is resolved from <code>request</code> in <code>context</code> (absolute path).</p>\n<h3 id="prefetchplugin">PrefetchPlugin<a href="#prefetchplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>PrefetchPlugin(context, request)</code></p>\n<p>Prefetches <code>request</code> and dependencies to enable a more parallel compilation. It doesn\'t create any chunk. The module is resolved from <code>request</code> in <code>context</code> (absolute path).</p>\n<h2 id="output">output<a href="#output" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="jsonptemplateplugin">JsonpTemplatePlugin<a href="#jsonptemplateplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>JsonpTemplatePlugin(options)</code></p>\n<p>Chunks are wrapped into JSONP-calls. A loading algorithm is included in entry chunks. It loads chunks by adding a <code>&#x3C;script></code> tag.</p>\n<p><code>options</code> are the output options.</p>\n<p><code>options.jsonpFunction</code> is the JSONP function.</p>\n<p><code>options.publicPath</code> is used as path for loading the chunks.</p>\n<p><code>options.chunkFilename</code> is the filename under that chunks are expected.</p>\n<h3 id="nodetemplateplugin">NodeTemplatePlugin<a href="#nodetemplateplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>node/NodeTemplatePlugin(options)</code></p>\n<p>Chunks are wrapped into Node.js modules exporting the bundled modules. The entry chunks loads chunks by requiring them.</p>\n<p><code>options</code> are the output options.</p>\n<p><code>options.chunkFilename</code> is the filename under that chunks are expected.</p>\n<h3 id="librarytemplateplugin">LibraryTemplatePlugin<a href="#librarytemplateplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>LibraryTemplatePlugin(name, target)</code></p>\n<p>The entries chunks are decorated to form a library <code>name</code> of type <code>type</code>.</p>\n<h3 id="webworkertemplateplugin">WebWorkerTemplatePlugin<a href="#webworkertemplateplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>webworker/WebWorkerTemplatePlugin(options)</code></p>\n<p>Chunks are loaded by <code>importScripts</code>. Else it\'s similar to <a href="#jsonptemplateplugin"><code>JsonpTemplatePlugin</code></a>.</p>\n<p><code>options</code> are the output options.</p>\n<h3 id="evaldevtoolmoduleplugin">EvalDevToolModulePlugin<a href="#evaldevtoolmoduleplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Decorates the module template by wrapping each module in a <code>eval</code> annotated with <code>// @sourceURL</code>.</p>\n<h3 id="sourcemapdevtoolplugin">SourceMapDevToolPlugin<a href="#sourcemapdevtoolplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>SourceMapDevToolPlugin(sourceMapFilename, sourceMappingURLComment, moduleFilenameTemplate, fallbackModuleFilenameTemplate)</code></p>\n<p>Decorates the templates by generating a SourceMap for each chunk.</p>\n<p><code>sourceMapFilename</code> the filename template of the SourceMap. <code>[hash]</code>, <code>[name]</code>, <code>[id]</code>, <code>[file]</code> and <code>[filebase]</code> are replaced. If this argument is missing, the SourceMap will be inlined as DataUrl.</p>\n<h3 id="hotmodulereplacementplugin">HotModuleReplacementPlugin<a href="#hotmodulereplacementplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>HotModuleReplacementPlugin(options)</code></p>\n<p>Add support for hot module replacement. Decorates the templates to add runtime code. Adds <code>module.hot</code> API.</p>\n<p><code>options.hotUpdateChunkFilename</code> the filename for hot update chunks.</p>\n<p><code>options.hotUpdateMainFilename</code> the filename for the hot update manifest.</p>\n<p><code>options.hotUpdateFunction</code> JSON function name for the hot update.</p>\n<h2 id="source">source<a href="#source" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Plugins affecting the source code of modules.</p>\n<h3 id="apiplugin">APIPlugin<a href="#apiplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Make webpack_public_path, webpack_require, webpack_modules and webpack_chunk_load accessible. Ensures that <code>require.valueOf</code> and <code>require.onError</code> are not processed by other plugins.</p>\n<h3 id="compatibilityplugin">CompatibilityPlugin<a href="#compatibilityplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Currently useless. Ensures compatibility with other module loaders.</p>\n<h3 id="constplugin">ConstPlugin<a href="#constplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Tries to evaluate expressions in <code>if (...)</code> statements and ternaries to replace them with <code>true</code>/<code>false</code> for further possible dead branch elimination using hooks fired by the parser.</p>\n<p>There are multiple optimizations in production mode regarding dead branches:</p>\n<ul>\n<li>The ones performed by <a href="https://github.com/fabiosantoscode/terser">Terser</a></li>\n<li>The ones performed by webpack</li>\n</ul>\n<p>webpack will try to evaluate conditional statements. If it succeeds then the dead branch is removed. webpack can\'t do constant folding unless the compiler knows it. For example:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> calculateTax <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./tax\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">FOO</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">FOO</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// dead branch</span>\n  <span class="token function">calculateTax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>In the above example, webpack is unable to prune the branch, but Terser does. However, if <code>FOO</code> is defined using <a href="/plugins/define-plugin/">DefinePlugin</a>, webpack will succeed.</p>\n<p>It is important to mention that <code>import { calculateTax } from \'./tax\';</code> will also get pruned because <code>calculateTax()</code> call was in the dead branch and got eliminated.</p>\n<h3 id="provideplugin">ProvidePlugin<a href="#provideplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>ProvidePlugin(name, request)</code></p>\n<p>If <code>name</code> is used in a module it is filled by a module loaded by <code>require(&#x3C;request>)</code>.</p>\n<h3 id="nodestuffplugin">NodeStuffPlugin<a href="#nodestuffplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>NodeStuffPlugin(options, context)</code></p>\n<p>Provide stuff that is normally available in Node.js modules.</p>\n<p>It also ensures that <code>module</code> is filled with some Node.js stuff if you use it.</p>\n<h3 id="requirejsstuffplugin">RequireJsStuffPlugin<a href="#requirejsstuffplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Provide stuff that is normally available in require.js.</p>\n<p><code>require[js].config</code> is removed. <code>require.version</code> is <code>0.0.0</code>. <code>requirejs.onError</code> is mapped to <code>require.onError</code>.</p>\n<h3 id="nodesourceplugin">NodeSourcePlugin<a href="#nodesourceplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>node/NodeSourcePlugin(options)</code></p>\n<p>This module adds stuff from Node.js that is not available in non Node.js environments.</p>\n<p>It adds polyfills for <code>process</code>, <code>console</code>, <code>Buffer</code> and <code>global</code> if used. It also binds the built in Node.js replacement modules.</p>\n<h3 id="nodetargetplugin">NodeTargetPlugin<a href="#nodetargetplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>node/NodeTargetPlugin()</code></p>\n<p>The plugins should be used if you run the bundle in a Node.js environment.</p>\n<p>If ensures that native modules are loaded correctly even if bundled.</p>\n<h3 id="amdplugin">AMDPlugin<a href="#amdplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>dependencies/AMDPlugin(options)</code></p>\n<p>Provides AMD-style <code>define</code> and <code>require</code> to modules. Also bind <code>require.amd</code>, <code>define.amd</code> and webpack_amd_options##  to the <code>options</code> passed as parameter.</p>\n<h3 id="commonjsplugin">CommonJsPlugin<a href="#commonjsplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>dependencies/CommonJsPlugin</code></p>\n<p>Provides CommonJs-style <code>require</code> to modules.</p>\n<h3 id="requirecontextplugin">RequireContextPlugin<a href="#requirecontextplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>dependencies/RequireContextPlugin(modulesDirectories, extensions)</code></p>\n<p>Provides <code>require.context</code>. The parameter <code>modulesDirectories</code> and <code>extensions</code> are used to find alternative requests for files. It\'s useful to provide the same arrays as you provide to the resolver.</p>\n<h3 id="requireensureplugin">RequireEnsurePlugin<a href="#requireensureplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>dependencies/RequireEnsurePlugin()</code></p>\n<p>Provides <code>require.ensure</code>.</p>\n<h3 id="requireincludeplugin">RequireIncludePlugin<a href="#requireincludeplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>dependencies/RequireIncludePlugin()</code></p>\n<p>Provides <code>require.include</code>.</p>\n<h3 id="defineplugin">DefinePlugin<a href="#defineplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>DefinePlugin(definitions)</code></p>\n<p>Define constants for identifier.</p>\n<p><code>definitions</code> is an object.</p>\n<h2 id="optimize">optimize<a href="#optimize" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="limitchunkcountplugin">LimitChunkCountPlugin<a href="#limitchunkcountplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>optimize/LimitChunkCountPlugin(options)</code></p>\n<p>Merge chunks limit chunk count is lower than <code>options.maxChunks</code>.</p>\n<p>The overhead for each chunks is provided by <code>options.chunkOverhead</code> or defaults to 10000. Entry chunks sizes are multiplied by <code>options.entryChunkMultiplicator</code> (or 10).</p>\n<p>Chunks that reduce the total size the most are merged first. If multiple combinations are equal the minimal merged size wins.</p>\n<h3 id="mergeduplicatechunksplugin">MergeDuplicateChunksPlugin<a href="#mergeduplicatechunksplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>optimize/MergeDuplicateChunksPlugin()</code></p>\n<p>Chunks with the same modules are merged.</p>\n<h3 id="removeemptychunksplugin">RemoveEmptyChunksPlugin<a href="#removeemptychunksplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>optimize/RemoveEmptyChunksPlugin()</code></p>\n<p>Modules that are included in every parent chunk are removed from the chunk.</p>\n<h3 id="minchunksizeplugin">MinChunkSizePlugin<a href="#minchunksizeplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>optimize/MinChunkSizePlugin(minChunkSize)</code></p>\n<p>Merges chunks until each chunk has the minimum size of <code>minChunkSize</code>.</p>\n<h3 id="flagincludedchunksplugin">FlagIncludedChunksPlugin<a href="#flagincludedchunksplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>optimize/FlagIncludedChunksPlugin()</code></p>\n<p>Adds chunk ids of chunks which are included in the chunk. This eliminates unnecessary chunk loads.</p>\n'}}]);