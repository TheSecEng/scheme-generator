"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var fs=require("fs"),common=[{name:"Comment",scope:["comment, punctuation.definition.comment"],settings:{foreground:"var(comments)",font_style:"italic"}},{name:"Class",scope:["meta.export.default meta.class storage.type.class","meta.class storage.type.class","meta.interface storage.type.interface"],settings:{foreground:"var(purple)"}},{name:"Entity Name",scope:["meta.export meta.class entity.name.class","meta.class entity.name.class","meta.class entity.name.type.class"],settings:{foreground:"var(yellow)"}},{name:"Interface Name",scope:["meta.interface entity.name.type.interface"],settings:{foreground:"var(yellow)"}},{name:"Function Call",scope:["meta.function-call.constructor variable.type","meta.export meta.object-literal meta.function meta.block meta.function-call.constructor variable.type","meta.export meta.object-literal meta.object-literal meta.function meta.block meta.function-call.constructor variable.type","meta.catch meta.block meta.function-call.constructor variable.type","meta.function-call meta.group meta.function meta.block meta.function meta.block meta.function-call.constructor variable.type","meta.try meta.block meta.function-call.constructor variable.type","meta.class meta.block meta.function meta.block meta.function-call.constructor variable.type"],settings:{foreground:"var(yellow)"}},{name:"Declaration",scope:["meta.interface storage.modifier","meta.export.default meta.class meta.method.declaration storage.modifier","meta.class storage.modifier"],settings:{foreground:"var(purple)"}},{name:"Inherited",scope:["meta.interface entity.other.inherited-class","meta.class meta.path entity.other.inherited-class","meta.class entity.other.inherited-class"],settings:{foreground:"var(orange)"}},{name:"Number, Constant, Function Argument, Tag Attribute, Embedded",scope:["constant.numeric","constant.language","support.constant","constant.character","constant.escape","keyword.other.unit","keyword.other"],settings:{foreground:"var(pink)"}},{name:"Variable",scope:["variable.member"],settings:{foreground:"var(red)"}},{name:"Operator, Misc",scope:["keyword.control","constant.other.color","punctuation.definition.tag","punctuation","punctuation.separator.inheritance.php","punctuation.definition.tag.html","punctuation.definition.tag.begin.html","punctuation.definition.tag.end.html","punctuation.section.embedded","keyword.other.template"],settings:{foreground:"var(cyan)"}},{name:"Storage",scope:["storage, storage.type"],settings:{foreground:"var(purple)"}},{name:"String",scope:["string"],settings:{foreground:"var(green)"}},{name:"Invalid",scope:["invalid","invalid.illegal"],settings:{foreground:"var(invalid)"}},{name:"Console",scope:["support.function.console."],settings:{foreground:"var(blue)",font_style:"normal"}}],diff=[{name:"[Diff] Deleted",scope:["diff.deleted","diff.deleted.char"],settings:{background:"color(var(red) alpha(0.08))",foreground:"var(red)"}},{name:"[Diff] Insert",scope:["diff.inserted","diff.inserted.char"],settings:{background:"color(var(green) alpha(0.08))",foreground:"var(green)"}}];const defaultRules=[common,diff],globals={active_guide:"var(cyan)",background:"var(background)",block_caret:"var(cursor)",caret:"var(cursor)",find_highlight:"var(yellow)",find_highlight_foreground:"var(background)",fold_marker:"var(yellow)",foreground:"var(foreground)",gutter:"var(background)",gutter_foreground:"color(var(foreground) alpha(0.2))",highlight:"var(yellow)",inactive_selection:"color(var(cyan) alpha(0.1))",invisibles:"color(var(foreground) alpha(0.3))",line_diff_added:"var(diffAdded)",line_diff_deleted:"var(diffDeleted)",line_diff_modified:"var(diffModified)",line_diff_width:"2",rulers:"color(var(foreground) alpha(0.5))",line_highlight:"color(var(foreground) alpha(0.1))",misspelling:"var(red)",selection:"color(var(foreground) alpha(0.10))",selection_border:"var(cyan)",selection_corner_radius:"cut",selection_corner_style:"cut",shadow:"color(var(background) alpha(0.5))",stack_guide:"var(brown)",tags_options:"underline",tags_foreground:"var(cyan)",brackets_options:"underline",brackets_foreground:"var(cyan)",bracket_contents_options:"underline",bracket_contents_foreground:"var(yellow)"};var globals$1=Object.freeze({__proto__:null,globals:globals});function generateScheme(e,t,a,o,r,n="schemes"){const c=[],i=new Set;[...defaultRules,[...r]].forEach(e=>{e.forEach(e=>{e.scope.forEach(t=>{i.has(t)&&console.log(`duplicated scope: ${t} in ${e.name}`),i.add(t)}),c.push({name:e.name,scope:e.scope.toString()}),Object.assign(c[c.length-1],e.settings)})}),fs.mkdir(n,()=>{fs.writeFileSync(`${n}/${a}.sublime-color-scheme`,JSON.stringify({name:e,author:t,variables:o,globals:globals$1,rules:c},null,4))})}exports.generateScheme=generateScheme;
