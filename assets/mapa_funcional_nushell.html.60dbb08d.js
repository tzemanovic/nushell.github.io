import{_ as t,z as d,A as r,a6 as e}from"./framework.3d018c9f.js";const o={},a=e('<h1 id="mapa-nushell-de-lenguajes-funcionales" tabindex="-1"><a class="header-anchor" href="#mapa-nushell-de-lenguajes-funcionales" aria-hidden="true">#</a> Mapa nushell de lenguajes funcionales</h1><p>La idea detrás de esta tabla is ayudarte a entender como los comandos internos y plugins en Nu se relacionan con lenguajes funcionales. Hemos intentado producir un mapa de los comandos internos y sus equivalentes en otros lenguajes. Contribuciones son bienvenidas.</p><p>Nota: Esta tabla asume Nu 0.14.1 o posterior.</p><table><thead><tr><th>Nushell</th><th>Clojure</th><th>Tablecloth (Ocaml / Elm)</th><th>Haskell</th><th></th></tr></thead><tbody><tr><td>alias</td><td></td><td></td><td></td><td></td></tr><tr><td>append</td><td>conj</td><td></td><td>(++)</td><td></td></tr><tr><td>args</td><td></td><td></td><td></td><td></td></tr><tr><td>autoview</td><td></td><td></td><td></td><td></td></tr><tr><td>average(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>binaryview(<code>*</code>)</td><td>Integer/toHexString</td><td></td><td>showHex</td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td></td><td></td><td></td></tr><tr><td>cd</td><td></td><td></td><td></td><td></td></tr><tr><td>clear</td><td></td><td></td><td></td><td></td></tr><tr><td>clip</td><td></td><td></td><td></td><td></td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td></td><td></td><td></td><td></td></tr><tr><td>count</td><td>count</td><td>length</td><td>length</td><td></td></tr><tr><td>cp</td><td></td><td></td><td></td><td></td></tr><tr><td>date</td><td>java.time.LocalDate/now</td><td></td><td>Get-Date</td><td></td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td></td><td></td><td></td><td></td></tr><tr><td>each</td><td>map</td><td>map</td><td>map</td><td></td></tr><tr><td>echo</td><td>println</td><td></td><td>putStrLn, print</td><td></td></tr><tr><td>enter</td><td></td><td></td><td></td><td></td></tr><tr><td>evaluate_by</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>System/exit</td><td></td><td></td><td></td></tr><tr><td>first</td><td>first</td><td></td><td>head</td><td></td></tr><tr><td>format</td><td>format</td><td></td><td>Text.Printf.printf</td><td></td></tr><tr><td>from bson</td><td></td><td></td><td></td><td></td></tr><tr><td>from csv</td><td></td><td></td><td></td><td></td></tr><tr><td>from eml</td><td></td><td></td><td></td><td></td></tr><tr><td>from ics</td><td></td><td></td><td></td><td></td></tr><tr><td>from ini</td><td></td><td></td><td></td><td></td></tr><tr><td>from json</td><td></td><td></td><td></td><td></td></tr><tr><td>from ods</td><td></td><td></td><td></td><td></td></tr><tr><td>from sqlite</td><td></td><td></td><td></td><td></td></tr><tr><td>from ssv</td><td></td><td></td><td></td><td></td></tr><tr><td>from toml</td><td></td><td></td><td></td><td></td></tr><tr><td>from tsv</td><td></td><td></td><td></td><td></td></tr><tr><td>from url</td><td></td><td></td><td></td><td></td></tr><tr><td>from vcf</td><td></td><td></td><td></td><td></td></tr><tr><td>from xlsx</td><td></td><td></td><td></td><td></td></tr><tr><td>from xml</td><td></td><td></td><td></td><td></td></tr><tr><td>from yaml</td><td></td><td></td><td></td><td></td></tr><tr><td>get</td><td></td><td></td><td></td><td></td></tr><tr><td>group_by</td><td>group-by</td><td></td><td></td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>doc</td><td></td><td></td><td></td></tr><tr><td>histogram</td><td></td><td></td><td></td><td></td></tr><tr><td>history</td><td></td><td></td><td></td><td></td></tr><tr><td>http(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>inc(<code>*</code>)</td><td>inc</td><td></td><td>succ</td><td></td></tr><tr><td>insert</td><td></td><td></td><td></td><td></td></tr><tr><td>is-empty</td><td>empty?</td><td></td><td></td><td></td></tr><tr><td>keep</td><td>take, drop-last, pop</td><td></td><td>init, take</td><td></td></tr><tr><td>keep_until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep_while</td><td></td><td></td><td></td><td></td></tr><tr><td>kill</td><td></td><td></td><td></td><td></td></tr><tr><td>last</td><td>last, peek</td><td></td><td>last</td><td></td></tr><tr><td>lines</td><td></td><td></td><td>lines, words, split-with</td><td></td></tr><tr><td>ls</td><td></td><td></td><td></td><td></td></tr><tr><td>map_max_by</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td></td><td></td><td></td><td></td></tr><tr><td>mv</td><td></td><td></td><td></td><td></td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>nth</td><td></td><td></td><td></td></tr><tr><td>open</td><td></td><td></td><td></td><td></td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>pivot</td><td>(apply mapv vector matrix)</td><td></td><td>transpose</td><td></td></tr><tr><td>post(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>prepend</td><td>cons</td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>pwd</td><td></td><td></td><td></td><td></td></tr><tr><td>range</td><td></td><td></td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce_by</td><td></td><td></td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td></td><td></td><td></td><td></td></tr><tr><td>reverse</td><td></td><td></td><td></td><td></td></tr><tr><td>rm</td><td></td><td></td><td></td><td></td></tr><tr><td>save</td><td></td><td></td><td></td><td></td></tr><tr><td>select(<code>***</code>)</td><td>select-keys</td><td></td><td></td><td></td></tr><tr><td>shells</td><td></td><td></td><td></td><td></td></tr><tr><td>shuffle</td><td>shuffle</td><td></td><td></td><td></td></tr><tr><td>size</td><td>count</td><td></td><td></td><td></td></tr><tr><td>skip</td><td>rest</td><td></td><td>tail</td><td></td></tr><tr><td>skip_until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip_while</td><td></td><td></td><td></td><td></td></tr><tr><td>sort-by</td><td>sort-by</td><td></td><td></td><td></td></tr><tr><td>split_by</td><td></td><td></td><td></td><td></td></tr><tr><td>split_column</td><td></td><td></td><td></td><td></td></tr><tr><td>split_row</td><td></td><td></td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>clojure.string functions</td><td></td><td></td><td></td></tr><tr><td>sum</td><td></td><td></td><td></td><td></td></tr><tr><td>sys(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>table</td><td></td><td></td><td></td><td></td></tr><tr><td>tags</td><td></td><td></td><td></td><td></td></tr><tr><td>textview(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>tree(<code>*</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>to bson</td><td></td><td></td><td></td><td></td></tr><tr><td>to csv</td><td></td><td></td><td></td><td></td></tr><tr><td>to html</td><td></td><td></td><td></td><td></td></tr><tr><td>to json</td><td></td><td></td><td></td><td></td></tr><tr><td>to md</td><td></td><td></td><td></td><td></td></tr><tr><td>to sqlite</td><td></td><td></td><td></td><td></td></tr><tr><td>to toml</td><td></td><td></td><td></td><td></td></tr><tr><td>to tsv</td><td></td><td></td><td></td><td></td></tr><tr><td>to url</td><td></td><td></td><td></td><td></td></tr><tr><td>to yaml</td><td></td><td></td><td></td><td></td></tr><tr><td>touch</td><td></td><td></td><td></td><td></td></tr><tr><td>trim</td><td></td><td></td><td></td><td></td></tr><tr><td>uniq</td><td></td><td></td><td></td><td></td></tr><tr><td>update(<code>**</code>)</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td></td><td></td><td></td><td></td></tr><tr><td>with_env</td><td></td><td></td><td></td><td></td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>filter</td><td></td><td>filter</td><td></td></tr><tr><td>which</td><td></td><td></td><td></td><td></td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - Pertenecen de los plugins standard</li><li><code>**</code> - renombrada de <code>edit</code> a <code>update</code> en 0.13.1</li><li><code>***</code> - renombrada de <code>pick</code> a <code>select</code> en 0.13.1</li></ul>',5),s=[a];function n(c,l){return d(),r("div",null,s)}const m=t(o,[["render",n],["__file","mapa_funcional_nushell.html.vue"]]);export{m as default};
