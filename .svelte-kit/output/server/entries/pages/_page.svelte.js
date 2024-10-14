import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$3 = {
  code: ".title.svelte-nbhlj1,.balls.svelte-nbhlj1{font-family:'Times New Roman', Times, serif;font-style:bold;font-style:italic;color:#A8FF07;margin:0px}.title.svelte-nbhlj1{font-size:100px;margin-bottom:-15px}.balls.svelte-nbhlj1{font-size:30px}",
  map: `{"version":3,"file":"Name.svelte","sources":["Name.svelte"],"sourcesContent":["<script>\\n    const name = \\"nareshkarthigeyan\\"\\n    let caption = \\"official personal web\\";\\n<\/script>\\n\\n<div class=\\"title\\">\\n    {name}\\n</div>\\n<div class=\\"balls\\">\\n    {caption}\\n</div>\\n\\n<style>\\n    .title, .balls {\\n        font-family: 'Times New Roman', Times, serif;\\n        font-style: bold;\\n        font-style: italic;\\n        color: #A8FF07;\\n        margin: 0px;\\n    }\\n    \\n    .title {\\n        font-size: 100px;\\n        margin-bottom: -15px;\\n    }\\n\\n    .balls {\\n        font-size: 30px;\\n    }\\n\\n</style>"],"names":[],"mappings":"AAaI,oBAAM,CAAE,oBAAO,CACX,WAAW,CAAE,iBAAiB,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAC5C,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GACZ,CAEA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,KACnB,CAEA,oBAAO,CACH,SAAS,CAAE,IACf"}`
};
const name = "nareshkarthigeyan";
let caption = "official personal web";
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="title svelte-nbhlj1">${escape(name)}</div> <div class="balls svelte-nbhlj1">${escape(caption)} </div>`;
});
const css$2 = {
  code: "img.svelte-1xu7v7k{height:600px}",
  map: `{"version":3,"file":"Photo.svelte","sources":["Photo.svelte"],"sourcesContent":["<script>\\n    let alt = 'my image';\\n<\/script>\\n\\n<img src=\\"/naresh.png\\" alt={alt} />\\n\\n<style>\\n    img {\\n        height: 600px;\\n    }\\n</style>"],"names":[],"mappings":"AAOI,kBAAI,CACA,MAAM,CAAE,KACZ"}`
};
let alt = "my image";
const Photo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<img src="/naresh.png"${add_attribute("alt", alt, 0)} class="svelte-1xu7v7k">`;
});
const css$1 = {
  code: ".main.svelte-1swt382{font-family:'Times New Roman', Times, serif;color:#A8FF07;font-style:bold;font-style:italic}.ttle.svelte-1swt382{font-size:50px}a.svelte-1swt382:link,a.svelte-1swt382:visited{color:#A8FF07;font-style:italic;text-decoration:none}a.svelte-1swt382:hover{text-decoration:underline;color:#84cb00\n    }.links.svelte-1swt382{display:flex;flex-direction:column;font-size:30px;text-align:right;padding-right:10px}",
  map: `{"version":3,"file":"Links.svelte","sources":["Links.svelte"],"sourcesContent":["<script>\\n    let title = \\"Check me out on: \\";\\n    let instagram = \\"https://www.instagram.com/nareshkarthigeyan/\\";\\n    let github = \\"https://github.com/nareshkarthigeyan\\";\\n    let linkedin = \\"\\";\\n    let x = \\"\\";\\n<\/script>\\n\\n<div class=\\"main\\">\\n    <div class=\\"ttle\\">\\n        {title}\\n    </div>\\n    <div class=\\"links\\">\\n        <a href=\\"{instagram}\\">instagram</a>\\n        <a href=\\"{github}\\">github</a>\\n        <a href=\\"{linkedin}\\">linkedin</a>\\n        <a href=\\"{x}\\">x</a>\\n    </div>\\n</div>\\n\\n<style>\\n    .main{\\n        font-family: 'Times New Roman', Times, serif;\\n        color: #A8FF07;\\n        font-style: bold;\\n        font-style: italic;\\n    }\\n    .ttle {\\n        font-size: 50px;\\n    }\\n\\n    a:link, a:visited {\\n        color: #A8FF07;\\n        font-style: italic;\\n        text-decoration: none;\\n    }\\n\\n    a:hover {\\n        text-decoration: underline;\\n        color: #84cb00\\n    }\\n\\n    .links {\\n        display: flex;\\n        flex-direction: column;\\n        font-size: 30px;\\n        text-align: right;\\n        padding-right: 10px;\\n    }\\n</style>"],"names":[],"mappings":"AAqBI,oBAAK,CACD,WAAW,CAAE,iBAAiB,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAC5C,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAChB,CACA,oBAAM,CACF,SAAS,CAAE,IACf,CAEA,gBAAC,KAAK,CAAE,gBAAC,QAAS,CACd,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IACrB,CAEA,gBAAC,MAAO,CACJ,eAAe,CAAE,SAAS,CAC1B,KAAK,CAAE;AACf,IAAI,CAEA,qBAAO,CACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IACnB"}`
};
let title = "Check me out on: ";
let instagram = "https://www.instagram.com/nareshkarthigeyan/";
let github = "https://github.com/nareshkarthigeyan";
let linkedin = "";
let x = "";
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="main svelte-1swt382"><div class="ttle svelte-1swt382">${escape(title)}</div> <div class="links svelte-1swt382"><a${add_attribute("href", instagram, 0)} class="svelte-1swt382">instagram</a> <a${add_attribute("href", github, 0)} class="svelte-1swt382">github</a> <a${add_attribute("href", linkedin, 0)} class="svelte-1swt382">linkedin</a> <a${add_attribute("href", x, 0)} class="svelte-1swt382">x</a></div> </div>`;
});
const css = {
  code: ".main.svelte-1gs3ymk{display:flex}.title.svelte-1gs3ymk{padding-left:20px;margin-top:10px}.secondhalf.svelte-1gs3ymk{padding-left:20px;padding-top:20px;display:flex;justify-content:space-between}.lnks.svelte-1gs3ymk{padding-left:15px;margin-top:-30px;margin-left:auto}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Name from \\"./Name.svelte\\";\\n  import Photo from \\"./Photo.svelte\\";\\n  import Links from \\"./Links.svelte\\";\\n<\/script>\\n\\n<div class=\\"main\\">\\n    <div class=\\"title\\">\\n        <Name />\\n    </div>\\n</div>\\n<div class=\\"secondhalf\\">\\n    <div>\\n        <Photo />\\n    </div>\\n    <div class=\\"lnks\\">\\n        <Links />\\n    </div>\\n</div>\\n\\n<style>\\n.main {\\n    display: flex;\\n}\\n.title {\\n    padding-left: 20px;\\n    margin-top: 10px;\\n}\\n\\n.secondhalf {\\n    padding-left: 20px;\\n    padding-top: 20px;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.lnks {\\n    padding-left: 15px;\\n    margin-top: -30px;\\n    margin-left: auto;\\n}\\n</style>"],"names":[],"mappings":"AAqBA,oBAAM,CACF,OAAO,CAAE,IACb,CACA,qBAAO,CACH,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,IAChB,CAEA,0BAAY,CACR,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aACrB,CAEA,oBAAM,CACF,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,IACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main svelte-1gs3ymk"><div class="title svelte-1gs3ymk">${validate_component(Name, "Name").$$render($$result, {}, {}, {})}</div></div> <div class="secondhalf svelte-1gs3ymk"><div>${validate_component(Photo, "Photo").$$render($$result, {}, {}, {})}</div> <div class="lnks svelte-1gs3ymk">${validate_component(Links, "Links").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Page as default
};
