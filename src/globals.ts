import { IUi } from './interfaces';

export const defaultGlobals: IUi = {
    active_guide: 'var(cyan)',
    background: 'var(background)',
    block_caret: 'var(cursor)',
    caret: 'var(cursor)',
    find_highlight: 'var(yellow)',
    find_highlight_foreground: 'var(background)',
    fold_marker: 'var(yellow)',
    foreground: 'var(foreground)',
    gutter: 'var(background)',
    gutter_foreground: 'color(var(foreground) alpha(0.2))',
    highlight: 'var(yellow)',
    inactive_selection: 'color(var(cyan) alpha(0.1))',
    invisibles: 'color(var(foreground) alpha(0.3))',
    line_diff_added: 'var(diffAdded)',
    line_diff_deleted: 'var(diffDeleted)',
    line_diff_modified: 'var(diffModified)',
    line_diff_width: '2',
    rulers: 'color(var(foreground) alpha(0.5))',
    line_highlight: 'color(var(foreground) alpha(0.1))',
    misspelling: 'var(red)',
    selection: 'color(var(foreground) alpha(0.10))',
    selection_border: 'var(cyan)',
    selection_corner_radius: 'cut',
    selection_corner_style: 'cut',
    shadow: 'color(var(background) alpha(0.5))',
    stack_guide: 'var(brown)',
    tags_options: 'underline',
    tags_foreground: 'var(cyan)',
    brackets_options: 'underline',
    brackets_foreground: 'var(cyan)',
    bracket_contents_options: 'underline',
    bracket_contents_foreground: 'var(yellow)',
};
