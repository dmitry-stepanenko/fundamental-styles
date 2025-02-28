// INCOMPLETE
export default {
    title: 'Components/Table',
    parameters: {
        description: `
A table contains a set of line items and usually comprises rows (with each row showing one line item) and columns. Line items can contain data of any kind, but also interactive elements, for example, for editing the data, navigating, or triggering actions relating to the line item.
To display large amounts of data in tabular form, several table components are provided. These are divided into two groups, each of which is defined by a consistent feature set:

- Fully responsive tables
- Desktop-centric tables


##Usage 
**Use the responsive table if:**

- The table content should be flexible and visually appealing. The responsive table offers the most flexibility in regards to its content because multiple components can be used. In addition, different rows can be based on different item templates.
- The focus lies on working on line items, not on individual cells.
- A main use case involves selecting one or more items, for which details are needed in order to choose the correct item.
- Line items are independent of each other and no operation across columns is needed.
- You want to have only one implementation for all devices.


**Use the grid table if:**

- You need to display more than 1,000 rows at the same time.
- The cell level and the spatial relationship between cells are more important than the line item, such as if users need to recognize patterns in the data, like in waterfall charts.
- Comparing items is a major use case. The grid table layout remains stable irrespective of the screen width. In addition, a cell only ever contains one component.
- You need an analytical table, but you cannot provide an analytical binding.


**Do not use the table if:**

- You want to display a simple hierarchical dataset.
- You want to use a hierarchical master list for a master-detail scenario using the **Flexible Column Layout**.
- Using a tree table would be too complex.
- The main use case involves selecting one of several hierarchical items with only a few details per item.

In these cases, use the **Tree** instead.
        `,
        docs: {
            iframeHeight: 500
        },
        components: [
            'button',
            'form-label',
            'fieldset',
            'icon',
            'link',
            'object-status',
            'table',
            'toolbar',
            'pagination',
            'popover',
            'list',
            'toolbar',
            'bar',
            'dialog',
            'input',
            'input-group',
            'multi-input',
            'checkbox',
            'select',
            'menu',
            'text',
            'object-number',
            'object-marker'
        ]
    }
};

export const primary = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Default Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text fd-table__text--no-wrap" style="max-width: 250px">
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                    Very long Text Not Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">
                <div class="fd-table__text" style="max-width: 250px">
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                    Very long Text Wrapped, limited by max-width
                </div>
            </td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Middle Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

primary.storyName = 'Primary';
primary.parameters = {
    docs: {
        storyDescription: `
The primary table contains columns with headers, and rows with links. In the first column, links are displayed. To display links within a table, add the \`fd-link\` class within the table data.
    `
    }
};

export const borderless = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders fd-table--no-vertical-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

borderless.storyName = 'Borderless';
borderless.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without borders that separate the columns, column headers, and rows. To display a borderless table, add the \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the main element.

**Note:** You can remove borders on individual cells by adding the above-mentioned modifier classes to them only.
        
    `
    }
};

export const borderlessbody = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Borders On Body</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body fd-table__body--no-horizontal-borders fd-table__body--no-vertical-borders">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

borderlessbody.storyName = 'Borderless (body)';
borderlessbody.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without borders that separate the columns and rows only, leaving the column headers with borders. To display a borderless table body, add the  \`fd-table--no-horizontal-borders\` and \`fd-table--no-vertical-borders\` modifier classes to the body element.
    `
    }
};

export const noOuterBorder = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table Without Outer Borders</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-outer-border">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

noOuterBorder.storyName = 'No outer Border';
noOuterBorder.parameters = {
    docs: {
        storyDescription: `
Table can be displayed without outer borders, might be needed when used inside some other element. To display a table without outer border, add the \`fd-table--no-outer-border\` modifier class to the main element.
    `
    }
};

export const footer = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>`;

footer.storyName = 'Footer';
footer.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with a footer. To display a table footer, add the \`fd-table__footer\` class with a \`tfoot\` element. It must contain the same amount and size of columns as the table head and body containers.
    `
    }
};

export const compactFooter = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

compactFooter.storyName = 'Footer (compact)';
compactFooter.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with a footer in compact mode, which is ideal for larger desktop screens. To display a compact table, add the \`fd-table--compact\` modifier class to the main element.
    `
    }
};

export const condensedFooter = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Footer Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
    <tfoot class="fd-table__footer">
        <tr class="fd-table__row">
            <td class="fd-table__cell"></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell"></td>
        </tr>
    </tfoot>
</table>
`;

condensedFooter.storyName = 'Footer (condensed)';
condensedFooter.parameters = {
    docs: {
        storyDescription: `
Similar to the previous example, table can be displayed with a footer in condensed mode (for desktop screens). To display a condensed table, add the \`fd-table--condensed\` modifier class to the main element.
    `
    }
};

export const interactive = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Interactive Table With Hoverable and Activable Cells and Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Hovering And</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Clicking</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">On Header's Cell</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Will Trigger</th>
            <th class="fd-table__cell fd-table__cell--activable fd-table__cell--hoverable" scope="col">Color Change</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Clicking on any Cell</td>
            <td class="fd-table__cell"><p class="fd-text">On This Row will cause</p></td>
            <td class="fd-table__cell">
                <span class="fd-object-number fd-object-number--negative">
                    <span class="fd-object-number__text">-2,000.00</span><span class="fd-object-number__unit">EUR</span>
                </span>
            </td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    <i class="fd-object-status__icon sap-icon--message-error" role="presentation"></i>
                    <span class="fd-object-status__text">Highlight of Whole Row</span>
                </span>
            </td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--activable">Clicking On Cell</td>
            <td class="fd-table__cell fd-table__cell--activable">
                <a class="fd-object-marker fd-object-marker--link">
                    <i class="fd-object-marker__icon sap-icon--private" role="presentation"></i>
                    <span class="fd-object-marker__text">Will cause</span>
                </a>
            </td>
            <td class="fd-table__cell fd-table__cell--activable">Highlight of cell</td>
            <td class="fd-table__cell fd-table__cell--activable">Last Name</td>
            <td class="fd-table__cell fd-table__cell--activable">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--hoverable">Hovering On Any Cell</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Will Change</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Background</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Of Certain</td>
            <td class="fd-table__cell fd-table__cell--hoverable">Cell</td>
        </tr>
        <tr class="fd-table__row fd-table__row--hoverable">
            <td class="fd-table__cell">Hovering On Any Cell</td>
            <td class="fd-table__cell">And cells</td>
            <td class="fd-table__cell">Will Change</td>
            <td class="fd-table__cell">Background of Whole Row</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

interactive.storyName = 'Interactive';
interactive.parameters = {
    docs: {
        storyDescription: `
The table component can be interactive with hoverable and activable cells and rows. 

Interaction | Modifier class
:------------- | :------------------
Activate | \`--activable\`
Hover | \`--hoverable\`     
    `
    }
};

export const semanticRows = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Semantic Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--status-indicator"></th>
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ez611">
                <label class="fd-checkbox__label" for="Ai9ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek611">
                <label class="fd-checkbox__label" for="Ai9ek611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell"><p class="fd-text">First Name</p></td>
            <td class="fd-table__cell"><p class="fd-text">Last Name</p></td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--valid"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek673">
                <label class="fd-checkbox__label" for="Ai9ek673"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--valid">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ek69s">
                <label class="fd-checkbox__label" for="Ai9ek69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--warning"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai9ekk69s">
                <label class="fd-checkbox__label" for="Ai9ekk69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--warning">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73k69s">
                <label class="fd-checkbox__label" for="Ai73k69s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--error"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai734F6s">
                <label class="fd-checkbox__label" for="Ai734F6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--error">01/26/17</td>
        </tr>  
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai73HE36s">
                <label class="fd-checkbox__label" for="Ai73HE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator fd-table__cell--status-indicator--information"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JDE36s">
                <label class="fd-checkbox__label" for="Ai7JDE36s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell fd-table__cell--information">01/26/17</td>
        </tr>   
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--status-indicator"></td>
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Ai7JGD6s">
                <label class="fd-checkbox__label" for="Ai7JGD6s"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>                    
    </tbody>
</table>
`;

semanticRows.storyName = 'Semantic';
semanticRows.parameters = {
    docs: {
        storyDescription: `
The table component can display highlight indicators to classify certain items with semantic states. To display status indicators in table, add the \`fd-table__cell--status-indicator\` modifier class to each row. 

**To display semantic highlight indicators, add the following modifier classes to \`fd-table__cell--status-indicator\`:**
        
Semantic states | Modifier class
:-------------------- | :-----------------
Valid | \`--valid\`
Warning | \`--warning\`
Error | \`--error\`
Information | \`--information\` 
    `
    }
};

export const focusableRows = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Rows</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
        <tr class="fd-table__row fd-table__row--focusable" tabindex="-1">
            <td class="fd-table__cell" role="gridcell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell" role="gridcell">First Name</td>
            <td class="fd-table__cell" role="gridcell">Middle Name</td>
            <td class="fd-table__cell" role="gridcell">Last Name</td>
            <td class="fd-table__cell" role="gridcell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

focusableRows.storyName = 'Focusable rows';
focusableRows.parameters = {
    docs: {
        storyDescription: `
Table can display focusable rows by adding the \`fd-table__row--focusable\` modifier class and a valid \`tabindex\` to the rows. It is not recommended to use focusable rows simultaneously with focusable cells.         
    `
    }
};

export const focusableCells = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Focusable Cells</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" role="grid">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
            <th class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">First Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Middle Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">Last Name</td>
            <td class="fd-table__cell fd-table__cell--focusable" role="gridcell" tabindex="-1">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

focusableCells.storyName = 'Focusable cells';
focusableCells.parameters = {
    docs: {
        storyDescription: `
Table can display focusable cells by adding the \`fd-table__cell--focusable\` modifier class and a valid \`tabindex\` to the cells. It is not recommended to use focusable cells simultaneously with focusable rows.
    `
    }
};

export const checkbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Cozy Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-table__checkbox" id="Ai4ez615">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez615"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Ai4ez617">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4ez617"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-table__checkbox" id="Gi4ez611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Gi4ez611"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

checkbox.storyName = 'Checkbox';
checkbox.parameters = {
    docs: {
        storyDescription: `
Table can display checkboxes to allow the user to perform bulk actions.
To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell.
It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.
Also recommended to add class \`fd-table__checkbox\` to the checkbox (input) and \`fd-table__checkbox-label\` class to the checkbox label to have appropriate styles.
    `
    }
};

export const compactCheckbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Compact Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4HF611">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4HF611"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4HFHG1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4HFHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JKHG1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JKHG1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JH23G1">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JH23G1"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

compactCheckbox.storyName = 'Checkbox (compact)';
compactCheckbox.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with checkboxes in compact mode. To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell. It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.


To display the table in compact mode, add the \`fd-table--compact\` modifier class to the table element.        
    `
    }
};

export const condensedCheckbox = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Checkbox Condensed Mode</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--condensed">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox" scope="col">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JH2BF87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JH2BF87"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4JHf87">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4JHf87"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="Ai4Jj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="Ai4Jj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox fd-checkbox--compact fd-table__checkbox" id="AGjtJj67">
                <label class="fd-checkbox__label fd-table__checkbox-label" for="AGjtJj67"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

condensedCheckbox.storyName = 'Checkbox (condensed)';
condensedCheckbox.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with checkboxes in condensed mode. To display checkboxes in table, add the \`fd-table__cell--checkbox\` modifier class to the appropriate cell. It is recommended to add the parameter \`aria-selected="true"\` to the row that is selected.


To display the table in condensed mode, add the \`fd-table--condensed\` modifier class to the table element.
    `
    }
};

export const pagination = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Pagination at The Bottom</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
<div class="fd-pagination">
    <span class="fd-pagination__total">Showing 3 of 30 items</span>
    <nav class="fd-pagination__nav">
        <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Next" aria-disabled="false"></a>
        <a href="#" class="fd-pagination__link">1</a>
        <a href="#" class="fd-pagination__link is-selected">2</a>
        <a href="#" class="fd-pagination__link">3</a>
        <span class="fd-pagination__more" role="presentation"></span>
        <a href="#" class="fd-pagination__link">10</a>
        <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next" aria-disabled="false"></a>
    </nav>
</div>
`;

pagination.storyName = 'Pagination';
pagination.parameters = {
    docs: {
        storyDescription: `
Table can be displayed with bottom pagination by adding the \`fd-pagination\` class after the table.               
    `
    }
};

export const advancedToolbar = () => `<div class="fd-dialog" id="filter-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-filter">
        <header class="fd-dialog__header fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-filter">
                        Filter By
                    </h3>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <span class="sap-icon--filter"></span>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul class="fd-list fd-list--compact">
                <li class="fd-list__item">
                    <span class="fd-list__title">Name</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Status</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Price</span>
                </li>
                <li class="fd-list__item">
                    <span class="fd-list__title">Country</span>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-dialog" id="settings-dialog-example">
    <section class="fd-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-settings">
        <header class="fd-dialog__header fd-bar fd-bar--header-with-subheader">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h3 class="fd-dialog__title" id="dialog-settings">
                        Columns
                    </h3>
                </div>
            </div>
        </header>
        <div class="fd-dialog__subheader fd-bar fd-bar--subheader">
            <div class="fd-bar__middle">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-top"></i>
                    </button>
                    <button aria-label="navigation" class="fd-button fd-button--icon fd-button--transparent fd-button--compact">
                        <i class="sap-icon--arrow-bottom"></i>
                    </button>
                </div>
                <div class="fd-bar__element fd-bar__element--full-width">
                    <div class="fd-input-group">
                        <input aria-labelledby="dialog-settings" 
                            class="fd-input fd-input-group__input fd-input--compact" type="text" placeholder="Search...">
                        <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                            <button aria-label="navigation"
                                class="fd-button fd-input-group__button fd-button--icon fd-button--transparent fd-button--compact">
                                <i class="sap-icon--search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-dialog__body fd-dialog__body--no-vertical-padding">
            <ul aria-labelledby="dialog-settings" class="fd-list fd-list--multi-input fd-list--compact"
                aria-multiselectable="true" role="listbox">
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked
                        class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ezFD1">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ezFD1">
                        <span class="fd-list__title">All</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="GGi4ez641">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="GGi4ez641">
                        <span class="fd-list__title">Name</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4FGFG612">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4FGFG612">
                        <span class="fd-list__title">Status</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4e88614">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4e88614">
                        <span class="fd-list__title">Price</span>
                    </label>
                </li>
                <li class="fd-list__item is-selected" role="option">
                    <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox fd-checkbox--compact fd-list__input" id="Ai4egh6024">
                    <label class="fd-checkbox__label fd-checkbox__label--compact fd-list__label" for="Ai4egh6024">
                        <span class="fd-list__title">Country</span>
                    </label>
                </li>
            </ul>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">OK</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="navigation" class="fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table With Advanced Shellbar</h4>
    <div class="fd-toolbar__spacer"></div>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('filter-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--filter"></i>
    </button>
    <button aria-label="navigation" class="fd-button fd-button--compact fd-button--transparent" onclick="toggleClass('settings-dialog-example', 'fd-dialog--active')">
        <i class="sap-icon--action-settings"></i>
    </button>
</div>
<table class="fd-table fd-table--compact">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
        </tr>
    </tbody>
</table>
`;

advancedToolbar.storyName = 'Advanced toolbar';
advancedToolbar.parameters = {
    docs: {
        storyDescription: `
The table component can be displayed with an advanced **Toolbar**, which allows users to customize their table. In this example, buttons trigger **Dialogs**. To display an advanced toolbar, pair \`fd-dialog\` components with an \`fd-toolbar\` component.             
    `
    }
};

export const contextualMenu = () => `<div style="min-height: 400px">
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Contextual Menu</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="pQqQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More"
                        onclick="onPopoverClick('pQqQRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="pQqQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54qQRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onPopoverClick('G54qQRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="G54qQRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <div class="fd-popover">
                    <div class="fd-popover__control">
                        <button aria-label="navigation" class="fd-button fd-button--transparent" aria-controls="G54JRFF3" aria-haspopup="true" aria-expanded="false" aria-label="More" onclick="onPopoverClick('G54JRFF3')">
                            <i class="sap-icon--overflow"></i>
                        </button>
                    </div>
                    <div class="fd-popover__body fd-popover__body--right" aria-hidden="true" id="G54JRFF3">
                        <nav class="fd-menu">
                            <ul class="fd-menu__list fd-menu__list--no-shadow">
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 1</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 2</span>
                                    </a>
                                </li>
                                <li class="fd-menu__item">
                                    <a href="#" class="fd-menu__link">
                                        <span class="fd-menu__title">Option 3</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
`;

contextualMenu.storyName = 'Contextual menu';
contextualMenu.parameters = {
    docs: {
        storyDescription: `
Table can display a contextual menu containing actions if there is not enough space in a given row. It is recommended to use a contextual menu if there are more than three actions. To display table with a contextual menu, add the \`fd-popover\` component to any given cell. See **Popover** for more details.
    `
    }
};

export const menuHeader = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Table with Popover in Headers</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table" >
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA1" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Ascending
                            <span class="fd-table__icon sap-icon--sort-ascending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA1">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">
                <div class="fd-table__popover fd-popover">
                    <div class="fd-popover__control" aria-controls="popoverA2" aria-expanded="false" aria-haspopup="true">
                        <div class="fd-table__inner">
                            Column Header Descending
                            <span class="fd-table__icon sap-icon--sort-descending"></span>
                        </div>
                    </div>
                    <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="popoverA2">
                        <ul class="fd-list fd-list--compact" role="list">
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-descending"></span>
                                <span class="fd-list__title">Sort Descending</span>
                            </li>
                            <li tabindex="0" role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--sort-ascending"></span>
                                <span class="fd-list__title">Sort Ascendnig</span>
                            </li>
                            <li role="listitem" class="fd-list__item">
                                <span class="fd-list__icon sap-icon--filter"></span>
                                <div class="fd-form-item  fd-form-item--horizontal">
                                    <label class="fd-form-label" for="input-1d">Filter</label>
                                    <input class="fd-input fd-input--compact" id="input-1d2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">01/26/17</td>
        </tr>
    </tbody>
</table>
`;

menuHeader.storyName = 'Menu header';
menuHeader.parameters = {
    docs: {
        storyDescription: `
Table can display menu options from a popover within headers. The example below demonstrates headers containing customization actions such as _Ascending_ and _Descending_. To display a menu within a header, add the \`fd-table__popover\` class to the header cells.
    `
    }
};

export const fixColumnHeader = () => `<style>
        .fd-table--fixed {
            padding-left: 200px;
        }

        [dir=rtl] .fd-table--fixed,
        .fd-table--fixed[dir=rtl] {
            padding-left: 0;
            padding-right: 200px;            
        }
        
        .fd-table--fixed .fd-table__cell {
            min-width: 200px;
            max-width: 200px;
        }
</style>
<div style="position: relative">
    <div class="fd-table--fixed">
        <table class="fd-table">
            <thead class="fd-table__header">
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last"  aria-haspopup="true" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                    <th class="fd-table__cell" scope="col">
                        Header Column
                    </th>
                </tr>
            </thead>
            <tbody class="fd-table__body">
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
                <tr class="fd-table__row">
                    <th class="fd-table__cell fd-table__cell--fixed fd-table__cell--fixed-last" scope="row">Row header</th>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                    <td class="fd-table__cell">Lorem ipsum dolor sit amet ipsum</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

fixColumnHeader.storyName = 'Fixed header';
fixColumnHeader.parameters = {
    docs: {
        storyDescription: `
Table can display columns with a fixed header.
To display fixed headers, wrap the table with the \`fd-table--fixed\` modifier class.
In addition, add the \`fd-table__cell--fixed\` modifier class to each cell element, it should be propagated to the entire row. 
Then apply \`.fd-table__cell--fixed-last\` to every last fixed cell in every column to have special border after the fixed columns.

It’s important to hardcode the width of the columns, otherwise the cells will be squished.
    `
    }
};

export const navIcon = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Responsive Table - row navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Table - icon button for navigation</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table ">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
        <tr class="fd-table__row">
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content">
                <button aria-label="navigation" class="fd-button fd-button--transparent">
                    <i class="sap-icon--navigation-right-arrow"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
`;

navIcon.storyName = 'Navigation from table rows';
navIcon.parameters = {
    docs: {
        storyDescription: `
Responsive table allows navigation from a line item. For that purpose you need to add a column with the icon \`sap-icon--slim-arrow-right\` at the end. The entire line needs to be clickable 

You have an option to add icon button \`sap-icon--navigation-right-arrow\` as a separate column for non responsive table.
    `
    }
};

export const navIndicators = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4>Table with Navigation Indication State</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI44">
                <label class="fd-checkbox__label" for="kqqzPI44"></label>
            </th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col">Column Header</th>
            <th class="fd-table__cell" scope="col"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh33">
                <label class="fd-checkbox__label" for="EWuzWh33"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable" aria-selected="true">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" checked class="fd-checkbox" id="EWuzWh334">
                <label class="fd-checkbox__label" for="EWuzWh334"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--navigated fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh335">
                <label class="fd-checkbox__label" for="EWuzWh335"></label>
            </td>
            <td class="fd-table__cell"><a class="fd-link">user.name@email.com</a></td>
            <td class="fd-table__cell">First Name</td>
            <td class="fd-table__cell">Last Name</td>
            <td class="fd-table__cell">01/26/17</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>
`;

navIndicators.storyName = 'Navigation indicators';
navIndicators.parameters = {
    docs: {
        storyDescription: `

The table component can display navigation indicators. When multi-selection is used in a master-detail scenario, it is not clear which item was last opened, you can mark it as a “navigated” indicator, as indicated in the second row, to mark an item that is currently open. To display a navigated indicator, add the \`fd-table__cell--navigated\` class to the desired table cell.
    `
    }
};

export const responsiveTable = () => `<div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
    <h4 style="margin: 0;">Responsive Table</h4>
    <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
</div>
<table class="fd-table fd-table--responsive fd-table--no-horizontal-borders">
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="kqqzPI">
                <label class="fd-checkbox__label" for="kqqzPI"></label>
            </th>
            <th class="fd-table__cell" scope="col">Name</th>
            <th class="fd-table__cell" scope="col">Status</th>
            <th class="fd-table__cell" scope="col">Price</th>
            <th class="fd-table__cell" scope="col">Country</th>
            <th class="fd-table__cell"></th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="EWuzWh">
                <label class="fd-checkbox__label" for="EWuzWh"></label>
            </td>
            <td class="fd-table__cell">Banana</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--positive">
                    Available
                </span>
            </td>
            <td class="fd-table__cell">5 EUR</td>
            <td class="fd-table__cell">India</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="19j0Sc">
                <label class="fd-checkbox__label" for="19j0Sc"></label>
            </td>
            <td class="fd-table__cell">Pineapple</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--negative">
                    Out of stock
                </span>
            </td>
            <td class="fd-table__cell">2 EUR</td>
            <td class="fd-table__cell">Mexico</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
        <tr class="fd-table__row fd-table__row--activable fd-table__row--hoverable">
            <td class="fd-table__cell fd-table__cell--checkbox">
                <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="a7SfGX">
                <label class="fd-checkbox__label" for="a7SfGX"></label>
            </td>
            <td class="fd-table__cell">Orange</td>
            <td class="fd-table__cell">
                <span class="fd-object-status fd-object-status--informative">
                    Temporary unavailable
                </span>
            </td>
            <td class="fd-table__cell">6 EUR</td>
            <td class="fd-table__cell">Spain</td>
            <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                <i class="fd-table__icon fd-table__icon--navigation sap-icon--slim-arrow-right" role="presentation"></i>
            </td>
        </tr>
    </tbody>
</table>`;

responsiveTable.storyName = 'Responsive Table';
responsiveTable.parameters = {
    docs: {
        storyDescription: `
The desktop responsive table should contain \`fd-table--responsive\` modifier.
    `
    }
};

export const responsiveTablePopInMode = () => `<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in mode</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main fd-table__row--activable fd-table__row--hoverable">
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<div style="max-width: 450px">
    <div class="fd-toolbar fd-toolbar--solid fd-toolbar--title fd-toolbar-active">
        <h4 style="margin: 0;">Responsive Table - Pop-in Mode with Checkboxes and Navigation Indicator</h4>
        <span class="fd-toolbar__spacer fd-toolbar__spacer--auto"></span>
    </div>
    <table class="fd-table fd-table--responsive fd-table--no-horizontal-borders fd-table--no-vertical-borders fd-table--pop-in">
        <tbody class="fd-table__body">
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="CWkhTG">
                    <label class="fd-checkbox__label" for="CWkhTG"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Banana</p>
                    <p class="fd-table__text">India</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    5 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--positive">
                            Available
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--main">
                <td class="fd-table__cell fd-table__cell--checkbox">
                    <input aria-label="checkbox" type="checkbox" class="fd-checkbox" id="Yeas6w">
                    <label class="fd-checkbox__label" for="Yeas6w"></label>
                </td>
                <td class="fd-table__cell">
                    <p class="fd-table__text fd-table__text--title">Very long name for orange, which no one expected, forces text wrapping into another line.</p>
                    <p class="fd-table__text">Spain</p>
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content">
                    6 EUR
                </td>
                <td class="fd-table__cell fd-table__cell--fit-content fd-table__cell--no-padding">
                    <i class="fd-table__icon fd-table__icon--navigation sap-icon--navigation-right-arrow" role="presentation"></i>
                </td>
            </tr>
            <tr class="fd-table__row fd-table__row--secondary">
                <td class="fd-table__cell fd-table__cell--checkbox"></td>
                <td class="fd-table__cell" colspan="100%">
                    <p class="fd-table__text">
                        <label class="fd-form-label">Status:</label>
                        <span class="fd-object-status fd-object-status--negative">
                            Out of stock
                        </span>
                    </p>
                    <p class="fd-table__text">
                        <label class="fd-form-label">Date Of Expire:</label>
                        12.01.12
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`;

responsiveTablePopInMode.storyName = 'Responsive Table (pop-in mode)';
responsiveTablePopInMode.parameters = {
    docs: {
        storyDescription: `
The responsive table can be displayed in pop-in mode for mobile and tablet screens. To display responsive table in pop-in mode, add the \`fd-table--pop-in\` modifier class to the main element and remove the borders (see borderless example). In pop-in mode, a row actually contains two rows:
-	\`fd-table__row--main\`
-	\`fd-table__row--secondary\`
        
**Note:** cells with titles and text should be wrapped in paragraph tags.
        
    `
    }
};

export const gridTable = () => `<table class="fd-table" aria-describedby="FU4EwF6st">
    <caption class="fd-table__caption" id="FU4EwF6st" aria-live="polite">
        Inventory Status. Use arrow keys to navigate between cells.
    </caption>
    <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th id="fd-4C0WYEyPqUS" class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select all rows" class="fd-checkbox" id="fd-gEAc87vXrAR" type="checkbox" value="" tabindex="-1" /><label for="fd-gEAc87vXrAR" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </th>
            <th id="fd-KWRjZC5EqkW" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product Name
            </th>
            <th id="fd-NPWFoAxBzUa" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Product ID
            </th>
            <th id="fd-jtbiFXSC7Uy" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Quantity
            </th>
            <th id="fd-mQuRgWM6D0u" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Status
            </th>
            <th id="fd-hEzpEm5PMU2" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Supplier
            </th>
            <th id="fd-NujEpyB6EkG" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Image
            </th>
            <th id="fd-NMFoRAVbFky" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Heavy Weight
            </th>
            <th id="fd-OspcU6H7F0q" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Categories
            </th>
            <th id="fd-nEac1Ko5K0e" class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                Delivery Date
            </th>
        </tr>
    </thead>
    <tbody class="fd-table__body">
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-7EMZOUrG2eK" name="Notebook Basic 15" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-7EMZOUrG2eK" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 15" type="text" value="HT-1000" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>10</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Very Best Screens</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-tF03y4hjeLT" type="checkbox" value="" tabindex="-1" /><label for="fd-tF03y4hjeLT" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-LbUmEre6JKj" name="Notebook Basic 17" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-LbUmEre6JKj" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 17</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 17" type="text" value="HT-1001" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>0</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--negative">Out of stock</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Fasttech</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-9WXDOs3SBLH" type="checkbox" value="" tabindex="-1" /><label for="fd-9WXDOs3SBLH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-Cmvc_Hc7N3_" name="Notebook Basic 18" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-Cmvc_Hc7N3_" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 18</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 18" type="text" value="HT-1002" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>13</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Printers for All</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-Rzaro06MMoH" type="checkbox" value="" tabindex="-1" /><label for="fd-Rzaro06MMoH" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                                <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                                <span class="fd-input-group__addon fd-input-group__addon--button">
                                    <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                        <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <tr class="fd-table__row" aria-selected="false">
            <td class="fd-table__cell fd-table__cell--checkbox" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Select row" class="fd-checkbox" id="fd-kgZvkuwUtB-" name="Notebook Basic 19" type="checkbox" value="" tabindex="-1" />
                    <label for="fd-kgZvkuwUtB-" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>Notebook Basic 19</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-NPWFoAxBzUa" class="fd-input" name="Notebook Basic 19" type="text" value="HT-1003" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span>15</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <span class="fd-object-status fd-object-status--positive">Available</span>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <div class="fd-popover fd-popover--full-width">
                        <div class="fd-popover__control">
                            <div class="fd-select" tabindex="-1" aria-labelledby="fd-hEzpEm5PMU2" aria-expanded="false" aria-haspopup="listbox">
                                <div class="fd-select__control">
                                    <span class="fd-select__text-content">Technocom</span>
                                    <span class="fd-button fd-button--transparent fd-select__button"><i aria-hidden="true" class="sap-icon--slim-arrow-down" role="img"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <a href="https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg" class="fd-link" tabindex="-1">Show image</a>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-form-item">
                    <input aria-checked="false" aria-label="Heavy Weight" class="fd-checkbox" id="fd-LHL3aUwc6pZ" type="checkbox" value="" tabindex="-1" /><label for="fd-LHL3aUwc6pZ" class="fd-form-label fd-checkbox__label"></label>
                </div>
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <input aria-labelledby="fd-OspcU6H7F0q" class="fd-input" type="text" value="" tabindex="-1" />
            </td>
            <td class="fd-table__cell fd-table__cell--focusable" tabindex="-1">
                <div class="fd-popover fd-popover--full-width">
                    <div class="fd-popover__control">
                        <div aria-expanded="false" aria-haspopup="true" class="fd-input-group--control fd-input-group">
                            <input aria-labelledby="fd-nEac1Ko5K0e" class="fd-input fd-input-group__input" placeholder="MM/DD/YYYY" type="text" value="" tabindex="-1" />
                            <span class="fd-input-group__addon fd-input-group__addon--button">
                                <button aria-label="Choose date" class="fd-button fd-button--transparent fd-input-group__button" type="button" tabindex="-1">
                                    <i aria-hidden="true" class="sap-icon--appointment-2" role="img"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`;

gridTable.storyName = 'Grid Table';
gridTable.parameters = {
    docs: {
        storyDescription: `
Grid tables can contain various input elements inside of cells, such as checkboxes, input fields, links and drop-down menus.

####Accessibility
Information about the table such as a title, summary, and/or keyboard navigation instructions should be provided in captions for screen readers. To caption table information, use the \`fd-table__caption\` class.        
    `
    }
};

export const noDataTable = () => `<table class="fd-table">
        <thead class="fd-table__header">
        <tr class="fd-table__row">
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
            <th class="fd-table__cell" scope="col">
                Header Column
            </th>
        </tr>
        </thead>
        <tbody class="fd-table__body">
        <tr class="fd-table__row">
            <td colspan="100%" class="fd-table__cell fd-table__cell--no-data">No Items available.</td>
        </tr>
        </tbody>
    </table>
`;

noDataTable.storyName = 'Table without data';
noDataTable.parameters = {
    docs: {
        storyDescription: `
Table can indicate that there is no data to display.
    `
    }
};

export const groupRowsInTable = () => `<table class="fd-table fd-table--group">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">
                    Type
                </th>
                <th class="fd-table__cell" scope="col">
                    First Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Last Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Date
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Group row (collapsed), level 1</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 1</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell" data-nesting-level="2">Regular row, level 2</td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell--group fd-table__cell--expand" colspan="4" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Group row (expanded), level 2</span>
                </td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell" data-nesting-level="3">Regular row, level 3</td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
        </tbody>
    </table>
`;

groupRowsInTable.storyName = 'Table with group rows';
groupRowsInTable.parameters = {
    docs: {
        storyDescription: `
Table can have group rows, to get this do the following:

- Add \`fd-table--group\` class to the table
- Add \`colspan\` with the appropriate value to the group cell
- Add \`fd-table__cell--group\` to the group cell
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Group cell intended to have glyph which indicates expand/collapsed state, to get it to do the following:

- Add \`fd-table__cell--expand\` class to the group cell
- Add an element with class \`fd-table__expand\` inside the group cell
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
};

export const treeRowsTable = () => `<table class="fd-table fd-table--tree">
        <thead class="fd-table__header">
            <tr class="fd-table__row">
                <th class="fd-table__cell" scope="col">
                    Type
                </th>
                <th class="fd-table__cell" scope="col">
                    First Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Last Name
                </th>
                <th class="fd-table__cell" scope="col">
                    Date
                </th>
            </tr>
        </thead>
        <tbody class="fd-table__body">
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="1">
                    Regular row, level 1
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 1, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="1">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 1, expanded</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="2">
                    Regular row, level 2
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 2, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="2">
                    <span class="fd-table__expand fd-table__expand--open"></span><span class="fd-table__text--no-wrap">Tree row, level 2, expanded</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell" data-nesting-level="3">
                    Regular row, level 3
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
            <tr class="fd-table__row">
                <td class="fd-table__cell fd-table__cell fd-table__cell--expand" data-nesting-level="3">
                    <span class="fd-table__expand fd-table__expand"></span><span class="fd-table__text--no-wrap">Tree row, level 3, collapsed</span>
                </td>
                <td class="fd-table__cell">First Name</td>
                <td class="fd-table__cell">Last Name</td>
                <td class="fd-table__cell">01/26/17</td>
            </tr>
        </tbody>
    </table>
`;

treeRowsTable.storyName = 'Tree Table';
treeRowsTable.parameters = {
    docs: {
        storyDescription: `
Table can show tree-like rows, to get this do the following:

- Add \`fd-table--tree\` class to the table
- Add \`data-nesting-level\` attribute with the appropriate value (counting starts from 1) to the first cell of every row

Tree table cells intended to have a glyph which indicates expanded/collapsed state, to get it to do the following:

- Add \`fd-table__cell--tree-expand\` class to the first cell if the row has children
- Add an element with class \`fd-table__expand\` inside the tree cell if the row has children
- Use \`fd-table__expand--open\` class on the element to indicate expanded state

Intended to have up to 20 levels deep, not more.

Please consider that you need to implement expanding/collapsing functionality by yourself.
    `
    }
};
