export default [
    {
        name: '[CSS] String',
        scope: ['source.css string'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        name: '[CSS] Classes',
        scope: ['entity.other.attribute-name.class'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: '[CSS] Tag',
        scope: [
            'entity.name.tag.css',
            'source.stylus meta.selector.stylus entity.name.tag.stylus',
        ],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: '[CSS] ID',
        scope: [
            'entity.other.attribute-name.id.css',
            'source.stylus meta.selector.stylus entity.other.attribute-name.id.stylus',
        ],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: '[CSS] Properties',
        scope: [
            'source.css support.type',
            'source.sass support.type',
            'source.scss support.type',
            'source.less support.type',
            'source.stylus',
        ],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: '[CSS] Variable',
        scope: [
            'source.scss variable.declaration.sass',
            'support.type.custom-property.css',
            'support.type.custom-property.scss',
            'variable.other.sass',
            'variable.other.scss',
            'variable.other.stylus',
            'source.stylus variable.other.property.stylus',
        ],
        settings: {
            foreground: 'var(brown)',
        },
    },
    {
        name: '[CSS] Properties Value',
        scope: [
            'support.constant.property-value.css',
            'source.stylus constant.property-value.stylus',
            'source.stylus keyword.language.function.misc.stylus',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: '[CSS] Constant Numeric',
        scope: [
            'constant.numeric.css',
            'source.stylus constant.numeric.stylus',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: '[CSS] Prefix',
        scope: ['support.type.vendor-prefix.css'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: '[CSS] Property Name',
        scope: [
            'meta.property-name.css',
            'source.stylus meta.property-name.stylus support.type.property-name.stylus',
        ],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: '[CSS] Tag',
        scope: ['source.css entity.name.tag.custom.css'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: '[CSS] Pseudo Class',
        scope: [
            'entity.other.pseudo-class.css',
            'source.stylus meta.selector.stylus entity.other.attribute-name.pseudo-class.stylus',
            'source.stylus meta.selector.stylus entity.other.attribute-name.pseudo-element.stylus',
        ],
        settings: {
            foreground: 'var(red)',
            font_style: 'italic',
        },
    },
    {
        name: '[CSS] Pseudo Element',
        scope: ['entity.other.pseudo-element.css'],
        settings: {
            foreground: 'var(red)',
            font_style: 'italic',
        },
    },
    {
        name: '[CSS] Unit',
        scope: [
            'keyword.other.unit.css',
            'source.stylus constant.numeric.stylus keyword.other.unit.stylus',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: '[CSS] Font Name',
        scope: ['support.constant.font-name.css'],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name: '[CSS] Color Values',
        scope: [
            'support.constant.color.w3c-standard-color-name.css',
            'constant.other.color.rgb-value.css',
            'support.constant.color.w3c-extended-color-keywords.css',
        ],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name: '[STYLUS] Color Values',
        scope: [
            'source.stylus constant.other.color.rgb-value.stylus punctuation.definition.constant.stylus',
            'source.stylus constant.color.w3c-standard-color-name.stylus',
            'source.stylus constant.other.color.rgb-value.stylus constant.other.color.rgb-value.red.stylus',
            'source.stylus constant.other.color.rgb-value.stylus constant.other.color.rgb-value.green.stylus',
            'source.stylus constant.other.color.rgb-value.stylus constant.other.color.rgb-value.blue.stylus',
        ],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name: '[CSS] Function',
        scope: [
            'source.css meta.property-list.css meta.property-value.css meta.function-call.css support.function.color.css',
            'support.function.var.css',
            'support.function.filter.css',
            'support.function.calc.css',
            'support.function.gradient.css',
            'source.css meta.property-list.css meta.property-value.css meta.function-call.css support.function.var.css',
        ],
        settings: {
            foreground: 'var(blue)',
            font_style: 'normal',
        },
    },
    {
        name: '[STYLUS] Function',
        scope: [
            'source.stylus meta.function-call.stylus entity.function-name.stylus',
            'source.stylus meta.function-call.stylus entity.other.attribute-name.mixin.stylus',
        ],
        settings: {
            foreground: 'var(blue)',
            font_style: 'normal',
        },
    },
    {
        name: '[SCSS] Prefix',
        scope: [
            'source.scss meta.property-name.css support.type.vendor-prefix.css',
        ],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: '[STYLUS] Prefix',
        scope: ['source.stylus meta.selector.stylus variable.language.stylus'],
        settings: {
            font_style: 'normal',
            foreground: 'var(foreground)',
        },
    },
    {
        name: '[SCSS | STYLUS] Function Call',
        scope: [
            'source.scss meta.function.declaration.sass keyword.control.at-rule.sass',
            'source.scss meta.function.declaration.sass meta.function.parameters.sass constant.language.sass',
            'source.css meta.at-rule.import.css keyword.control.at-rule.import.css',
            'source.scss meta.function-call.sass variable.function.sass keyword.control.at-rule.sass',
            'source.stylus meta.selector.stylus entity.other.attribute-name.pseudo-element.stylus puncutation.definition.entity.stylus',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: '[SCSS] Property Value',
        scope: [
            'source.scss meta.property-value.css meta.function-call.css support.function.custom.sass',
            'source.scss meta.property-value.css meta.function-call.sass support.function.sass',
        ],
        settings: {
            foreground: 'var(blue)',
            font_style: 'normal',
        },
    },
];
