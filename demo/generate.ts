/* eslint-disable no-undef */
import { generateScheme, ISchemeSetting } from '../dist/index';

const settings: ISchemeSetting = {
    colors: {
        cursor: '#ffcc00',
        foreground: '#dedfe4',
        background: '#011627',
        comments: '#637777',
        blue: '#82aaff',
        brown: '#c17e70',
        cyan: '#86e1fc',
        green: '#c3e88d',
        orange: '#ff966c',
        pink: '#ff5874',
        purple: '#c099ff',
        red: '#ff757f',
        yellow: '#ffc777',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
    },
    ui: {
        caret: 'var(orange)',
    },
    rules: [
        {
            name: '[SublimeLinter] Error',
            scope: ['sublimelinter.mark.error'],
            settings: {
                foreground: 'var(invalid)',
            },
        },
        {
            name: '[SublimeLinter] Gutter mark',
            scope: ['sublimelinter.gutter-mark'],
            settings: {
                foreground: 'var(blue)',
            },
        },
    ],
};

generateScheme(
    'My Scheme',
    'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    'My-Scheme',
    settings,
    'examples'
);
