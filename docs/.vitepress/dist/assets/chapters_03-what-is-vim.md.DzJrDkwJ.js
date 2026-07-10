import{_ as s,o as n,c as e,a2 as i}from"./chunks/framework.DeNJmwJc.js";const m=JSON.parse('{"title":"Chapter 3 — What Is Vim?","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/03-what-is-vim.md","filePath":"chapters/03-what-is-vim.md"}'),p={name:"chapters/03-what-is-vim.md"};function l(t,a,o,r,c,d){return n(),e("div",null,[...a[0]||(a[0]=[i(`<h1 id="chapter-3-—-what-is-vim" tabindex="-1">Chapter 3 — What Is Vim? <a class="header-anchor" href="#chapter-3-—-what-is-vim" aria-label="Permalink to &quot;Chapter 3 — What Is Vim?&quot;">​</a></h1><blockquote><p><em>&quot;Vim isn&#39;t just a text editor—it&#39;s a language for editing text.&quot;</em></p></blockquote><hr><p><strong>Difficulty:</strong> ⭐ Beginner <strong>Estimated Reading Time:</strong> 20–25 minutes</p><hr><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Most people first encounter Vim in one of these situations:</p><ul><li>Editing a configuration file on a Linux server</li><li>Using Git and accidentally opening Vim</li><li>SSHing into a remote machine</li><li>Hearing experienced developers praise it</li></ul><p>At first glance, Vim looks old, confusing, and intimidating.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+----------------------------------+</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>|                                  |</span></span>
<span class="line"><span>+----------------------------------+</span></span></code></pre></div><p>No buttons.</p><p>No menus.</p><p>No toolbar.</p><p>No mouse.</p><p>Just a blinking cursor.</p><p>It doesn&#39;t look impressive—but appearances are deceptive.</p><hr><h2 id="vim-is-a-text-editor" tabindex="-1">Vim Is a Text Editor <a class="header-anchor" href="#vim-is-a-text-editor" aria-label="Permalink to &quot;Vim Is a Text Editor&quot;">​</a></h2><p>A <strong>text editor</strong> is software used to edit plain text.</p><p>Examples include:</p><ul><li>Notepad</li><li>Nano</li><li>VS Code</li><li>Sublime Text</li><li>Helix</li><li>Emacs</li><li>Vim</li><li>Neovim</li></ul><p>The difference is <strong>how</strong> they edit text.</p><hr><h2 id="traditional-editors" tabindex="-1">Traditional Editors <a class="header-anchor" href="#traditional-editors" aria-label="Permalink to &quot;Traditional Editors&quot;">​</a></h2><p>Traditional editors assume:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Keyboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mouse</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Select</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Edit</span></span></code></pre></div><p>Everything revolves around inserting text.</p><hr><h2 id="vim" tabindex="-1">Vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;Vim&quot;">​</a></h2><p>Vim assumes something completely different.</p><p>Instead of asking:</p><blockquote><p>&quot;What character are you typing?&quot;</p></blockquote><p>Vim asks:</p><blockquote><p>&quot;What action do you want to perform?&quot;</p></blockquote><p>For example:</p><p>Instead of</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Select</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete key</span></span></code></pre></div><p>Vim thinks</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Word</span></span></code></pre></div><p>or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sentence</span></span></code></pre></div><p>or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Everything inside quotes</span></span></code></pre></div><p>This is a completely different editing model.</p><hr><h2 id="vim-is-modal" tabindex="-1">Vim Is Modal <a class="header-anchor" href="#vim-is-modal" aria-label="Permalink to &quot;Vim Is Modal&quot;">​</a></h2><p>The biggest difference between Vim and almost every modern editor is:</p><h3 id="modal-editing" tabindex="-1">Modal Editing <a class="header-anchor" href="#modal-editing" aria-label="Permalink to &quot;Modal Editing&quot;">​</a></h3><p>Instead of always typing text, Vim has different modes.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>               +-------------+</span></span>
<span class="line"><span>               |  Normal     |</span></span>
<span class="line"><span>               +-------------+</span></span>
<span class="line"><span>                ↑          ↓</span></span>
<span class="line"><span>          Esc   │          │ i,a,o...</span></span>
<span class="line"><span>                │</span></span>
<span class="line"><span>+-------------+ |</span></span>
<span class="line"><span>| Insert      |─+</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| Visual      |</span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-------------+</span></span>
<span class="line"><span>| Command     |</span></span>
<span class="line"><span>+-------------+</span></span></code></pre></div><p>Each mode has a specific purpose.</p><table tabindex="0"><thead><tr><th>Mode</th><th>Purpose</th></tr></thead><tbody><tr><td>Normal</td><td>Navigation &amp; commands</td></tr><tr><td>Insert</td><td>Typing text</td></tr><tr><td>Visual</td><td>Selecting text</td></tr><tr><td>Command</td><td>Execute Vim commands</td></tr></tbody></table><p>We&#39;ll study each mode thoroughly in later chapters.</p><hr><h2 id="vim-is-a-language" tabindex="-1">Vim Is a Language <a class="header-anchor" href="#vim-is-a-language" aria-label="Permalink to &quot;Vim Is a Language&quot;">​</a></h2><p>Perhaps the most elegant idea in Vim is that commands behave like a language.</p><p>Consider English.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Verb + Object</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Open door</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Close window</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete file</span></span></code></pre></div><p>Vim uses the same philosophy.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Operator + Motion</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete word</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete sentence</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete paragraph</span></span></code></pre></div><p>Instead of memorizing hundreds of shortcuts:</p><p>You learn a grammar.</p><hr><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Suppose you&#39;re here:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Cursor:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ^</span></span></code></pre></div><p>You could say</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Inside quotes</span></span></code></pre></div><p>Instead of</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Select</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Insert</span></span></code></pre></div><p>One command expresses the entire idea.</p><hr><h2 id="vim-thinks-in-objects" tabindex="-1">Vim Thinks in Objects <a class="header-anchor" href="#vim-thinks-in-objects" aria-label="Permalink to &quot;Vim Thinks in Objects&quot;">​</a></h2><p>Most editors think in characters.</p><p>Vim thinks in objects.</p><p>Examples:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Word</span></span>
<span class="line"><span>Sentence</span></span>
<span class="line"><span>Paragraph</span></span>
<span class="line"><span>Line</span></span>
<span class="line"><span>Function</span></span>
<span class="line"><span>Block</span></span>
<span class="line"><span>Quotes</span></span>
<span class="line"><span>Parentheses</span></span>
<span class="line"><span>Brackets</span></span></code></pre></div><p>Instead of saying</p><blockquote><p>&quot;Delete 17 characters&quot;</p></blockquote><p>you say</p><blockquote><p>&quot;Delete this word.&quot;</p></blockquote><p>or</p><blockquote><p>&quot;Change everything inside these parentheses.&quot;</p></blockquote><p>Much closer to how humans think.</p><hr><h2 id="editing-grammar" tabindex="-1">Editing Grammar <a class="header-anchor" href="#editing-grammar" aria-label="Permalink to &quot;Editing Grammar&quot;">​</a></h2><p>Nearly every editing command follows this structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Operator</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Motion</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Result</span></span></code></pre></div><p>Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Word</span></span>
<span class="line"><span></span></span>
<span class="line"><span>=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete Word</span></span></code></pre></div><p>Another:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Change</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Inside</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Parentheses</span></span>
<span class="line"><span></span></span>
<span class="line"><span>=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Replace contents of (...)</span></span></code></pre></div><p>Later you&#39;ll discover that almost every Vim command follows this same grammar.</p><p>That&#39;s why experienced Vim users rarely memorize shortcuts individually—they understand the language.</p><hr><h2 id="why-vim-feels-difficult" tabindex="-1">Why Vim Feels Difficult <a class="header-anchor" href="#why-vim-feels-difficult" aria-label="Permalink to &quot;Why Vim Feels Difficult&quot;">​</a></h2><p>Imagine learning spoken English by memorizing every sentence.</p><p>Impossible.</p><p>Instead you learn:</p><ul><li>nouns</li><li>verbs</li><li>grammar</li></ul><p>Vim works the same way.</p><p>Beginners often try to memorize commands like:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ciw</span></span></code></pre></div><p>without understanding:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>change</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inside</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>w</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>word</span></span></code></pre></div><p>Once you understand the grammar,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ci&quot;</span></span>
<span class="line"><span>ci(</span></span>
<span class="line"><span>ci[</span></span>
<span class="line"><span>ci{</span></span></code></pre></div><p>all become obvious.</p><hr><h2 id="a-brief-history" tabindex="-1">A Brief History <a class="header-anchor" href="#a-brief-history" aria-label="Permalink to &quot;A Brief History&quot;">​</a></h2><h3 id="_1976" tabindex="-1">1976 <a class="header-anchor" href="#_1976" aria-label="Permalink to &quot;1976&quot;">​</a></h3><p>The editor <strong>Ex</strong> becomes popular.</p><hr><h3 id="_1979" tabindex="-1">1979 <a class="header-anchor" href="#_1979" aria-label="Permalink to &quot;1979&quot;">​</a></h3><p><strong>Vi</strong> is created by <strong>Bill Joy</strong>.</p><p>Vi becomes the standard Unix editor.</p><hr><h3 id="_1991" tabindex="-1">1991 <a class="header-anchor" href="#_1991" aria-label="Permalink to &quot;1991&quot;">​</a></h3><p><strong>Bram Moolenaar</strong> releases</p><p><strong>Vim</strong></p><p>which means</p><blockquote><p><strong>Vi Improved</strong></p></blockquote><p>It adds:</p><ul><li>undo history</li><li>syntax highlighting</li><li>scripting</li><li>plugins</li><li>split windows</li><li>many usability improvements</li></ul><p>Vim quickly becomes one of the world&#39;s most popular editors.</p><hr><h3 id="_2014" tabindex="-1">2014 <a class="header-anchor" href="#_2014" aria-label="Permalink to &quot;2014&quot;">​</a></h3><p>The community creates <strong>Neovim</strong>.</p><p>Neovim modernizes Vim&#39;s architecture while remaining largely compatible.</p><hr><h2 id="vi-vs-vim-vs-neovim" tabindex="-1">Vi vs Vim vs Neovim <a class="header-anchor" href="#vi-vs-vim-vs-neovim" aria-label="Permalink to &quot;Vi vs Vim vs Neovim&quot;">​</a></h2><p>This confuses almost every beginner.</p><p>Let&#39;s simplify.</p><hr><h3 id="vi" tabindex="-1">Vi <a class="header-anchor" href="#vi" aria-label="Permalink to &quot;Vi&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1979</span></span></code></pre></div><p>Original Unix editor.</p><p>Features:</p><ul><li>lightweight</li><li>minimal</li><li>extremely portable</li></ul><p>Still available on many Unix systems.</p><hr><h3 id="vim-1" tabindex="-1">Vim <a class="header-anchor" href="#vim-1" aria-label="Permalink to &quot;Vim&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1991</span></span></code></pre></div><p>Adds:</p><ul><li>plugins</li><li>syntax highlighting</li><li>multiple undo</li><li>scripting</li><li>better usability</li></ul><p>Most Linux systems ship Vim instead of classic Vi.</p><hr><h3 id="neovim" tabindex="-1">Neovim <a class="header-anchor" href="#neovim" aria-label="Permalink to &quot;Neovim&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2014</span></span></code></pre></div><p>Fork of Vim.</p><p>Goals:</p><ul><li>modern architecture</li><li>Lua configuration</li><li>better plugin API</li><li>asynchronous execution</li><li>LSP integration</li><li>easier maintenance</li></ul><p>Most modern Vim tutorials now recommend Neovim.</p><hr><h2 id="should-you-learn-vim-or-neovim" tabindex="-1">Should You Learn Vim or Neovim? <a class="header-anchor" href="#should-you-learn-vim-or-neovim" aria-label="Permalink to &quot;Should You Learn Vim or Neovim?&quot;">​</a></h2><p>For beginners:</p><p>Learn <strong>Vim concepts</strong>.</p><p>Use <strong>Neovim</strong>.</p><p>Why?</p><p>Because nearly everything you learn in Vim works in Neovim.</p><p>Think of it like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Editing language</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Neovim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Modern implementation</span></span></code></pre></div><p>The commands are almost identical.</p><hr><h2 id="vim-is-not-an-ide" tabindex="-1">Vim Is Not an IDE <a class="header-anchor" href="#vim-is-not-an-ide" aria-label="Permalink to &quot;Vim Is Not an IDE&quot;">​</a></h2><p>An IDE includes things like:</p><ul><li>debugger</li><li>autocomplete</li><li>Git UI</li><li>project explorer</li><li>build system</li></ul><p>Vim itself is only an editor.</p><p>However,</p><p>Neovim can become an IDE by installing plugins.</p><p>For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Neovim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plugins</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IDE</span></span></code></pre></div><p>This is why modern Neovim screenshots often resemble VS Code.</p><hr><h2 id="how-vim-sees-a-file" tabindex="-1">How Vim Sees a File <a class="header-anchor" href="#how-vim-sees-a-file" aria-label="Permalink to &quot;How Vim Sees a File&quot;">​</a></h2><p>Most editors simply display text.</p><p>Vim thinks of a file as a sequence of editable objects.</p><p>Example:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Vim recognizes:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Word</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Line</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function</span></span></code></pre></div><p>Different commands operate on different objects.</p><hr><h2 id="vim-philosophy" tabindex="-1">Vim Philosophy <a class="header-anchor" href="#vim-philosophy" aria-label="Permalink to &quot;Vim Philosophy&quot;">​</a></h2><p>Vim follows several core principles.</p><h3 id="_1-keep-hands-on-the-keyboard" tabindex="-1">1. Keep Hands on the Keyboard <a class="header-anchor" href="#_1-keep-hands-on-the-keyboard" aria-label="Permalink to &quot;1. Keep Hands on the Keyboard&quot;">​</a></h3><p>Avoid unnecessary mouse movement.</p><hr><h3 id="_2-small-commands-combine" tabindex="-1">2. Small Commands Combine <a class="header-anchor" href="#_2-small-commands-combine" aria-label="Permalink to &quot;2. Small Commands Combine&quot;">​</a></h3><p>Instead of giant shortcuts,</p><p>combine small commands.</p><hr><h3 id="_3-repeat-often" tabindex="-1">3. Repeat Often <a class="header-anchor" href="#_3-repeat-often" aria-label="Permalink to &quot;3. Repeat Often&quot;">​</a></h3><p>One command should be repeatable.</p><p>Example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Delete word</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Repeat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Repeat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Repeat</span></span></code></pre></div><p>We&#39;ll later learn the famous</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span></code></pre></div><p>(dot command)</p><p>which repeats the last edit.</p><hr><h3 id="_4-optimize-editing" tabindex="-1">4. Optimize Editing <a class="header-anchor" href="#_4-optimize-editing" aria-label="Permalink to &quot;4. Optimize Editing&quot;">​</a></h3><p>Typing is only part of programming.</p><p>Editing existing code is usually more common.</p><p>Vim optimizes:</p><ul><li>moving</li><li>deleting</li><li>changing</li><li>copying</li><li>searching</li><li>replacing</li></ul><hr><h2 id="common-misunderstandings" tabindex="-1">Common Misunderstandings <a class="header-anchor" href="#common-misunderstandings" aria-label="Permalink to &quot;Common Misunderstandings&quot;">​</a></h2><h3 id="vim-is-only-for-terminal-users" tabindex="-1">&quot;Vim is only for terminal users.&quot; <a class="header-anchor" href="#vim-is-only-for-terminal-users" aria-label="Permalink to &quot;&quot;Vim is only for terminal users.&quot;&quot;">​</a></h3><p>False.</p><p>Many developers use:</p><ul><li>VS Code + Vim</li><li>IntelliJ + IdeaVim</li><li>Cursor + Vim</li><li>Obsidian + Vim</li></ul><p>without ever opening terminal Vim.</p><hr><h3 id="vim-has-too-many-commands" tabindex="-1">&quot;Vim has too many commands.&quot; <a class="header-anchor" href="#vim-has-too-many-commands" aria-label="Permalink to &quot;&quot;Vim has too many commands.&quot;&quot;">​</a></h3><p>Technically true.</p><p>Practically false.</p><p>Most users rely on a relatively small set of commands every day.</p><hr><h3 id="vim-is-obsolete" tabindex="-1">&quot;Vim is obsolete.&quot; <a class="header-anchor" href="#vim-is-obsolete" aria-label="Permalink to &quot;&quot;Vim is obsolete.&quot;&quot;">​</a></h3><p>Despite being decades old, Vim and Neovim remain actively maintained and widely used. Neovim, in particular, has a vibrant ecosystem of modern plugins and development tools.</p><hr><h2 id="mental-model" tabindex="-1">Mental Model <a class="header-anchor" href="#mental-model" aria-label="Permalink to &quot;Mental Model&quot;">​</a></h2><p>Don&#39;t think:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Shortcut</span></span></code></pre></div><p>Think:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Language</span></span></code></pre></div><p>Don&#39;t think:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Hotkeys</span></span></code></pre></div><p>Think:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Grammar</span></span></code></pre></div><p>This single change in mindset makes Vim much easier to learn.</p><hr><h2 id="chapter-summary" tabindex="-1">Chapter Summary <a class="header-anchor" href="#chapter-summary" aria-label="Permalink to &quot;Chapter Summary&quot;">​</a></h2><p>In this chapter, you&#39;ve learned that:</p><ul><li>Vim is a <strong>modal text editor</strong> designed for efficient editing.</li><li>It uses a <strong>language-like grammar</strong> instead of isolated shortcuts.</li><li>Vim evolved from <strong>Vi</strong>, while <strong>Neovim</strong> is a modern fork with improved architecture and tooling.</li><li>You should focus on learning Vim&#39;s editing concepts because they transfer directly to Neovim and many other editors.</li><li>Vim excels at editing existing text through composable commands rather than relying on mouse interactions.</li></ul><hr><h2 id="key-takeaways" tabindex="-1">Key Takeaways <a class="header-anchor" href="#key-takeaways" aria-label="Permalink to &quot;Key Takeaways&quot;">​</a></h2><ul><li><strong>Vi</strong> = Original Unix editor (1979)</li><li><strong>Vim</strong> = Vi Improved (1991)</li><li><strong>Neovim</strong> = Modern fork of Vim (2014)</li><li>Vim is a language for editing, not just a collection of shortcuts.</li><li>Learn the grammar, not individual commands.</li><li>Neovim is generally the recommended choice for new users, while Vim concepts remain the foundation.</li></ul><hr><h2 id="exercises" tabindex="-1">Exercises <a class="header-anchor" href="#exercises" aria-label="Permalink to &quot;Exercises&quot;">​</a></h2><ol><li>Research whether your current editor supports Vim keybindings.</li><li>Install either <strong>Vim</strong> or <strong>Neovim</strong> (don&#39;t worry about plugins yet).</li><li>Open a simple text file and just observe the interface—don&#39;t try to master commands yet.</li><li>Read the next chapter before practicing, so you understand the installation process and available options.</li></ol><hr><h2 id="next-chapter" tabindex="-1">Next Chapter <a class="header-anchor" href="#next-chapter" aria-label="Permalink to &quot;Next Chapter&quot;">​</a></h2><p><strong><a href="./04-vim-vs-vi-vs-neovim.html">Chapter 4 — Installing Vim &amp; Neovim</a></strong></p><p>You&#39;ll learn how to install Vim and Neovim on <strong>Linux</strong>, <strong>Windows</strong>, and <strong>macOS</strong>, verify your installation, understand the difference between terminal and GUI versions, and create your first configuration file.</p>`,250)])])}const u=s(p,[["render",l]]);export{m as __pageData,u as default};
