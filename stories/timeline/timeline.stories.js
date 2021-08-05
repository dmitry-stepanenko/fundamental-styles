export default {
    title: 'Components/Timeline',
    parameters: {
        description: `The timeline control shows entries (such as objects, events, or posts) in chronological order.

A common use case is to provide information about changes to an object, or events related to an object. These entries can be added manually or generated by the system (for example, value XY changed from A to B). The latest entry is always on top.
        
Another use case is a feed that is driven by user updates and comments. This feed can also be entirely devoid of machine-generated content.
        `,
        tags: ['f3', 'a11y', 'theme'],
        components: ['timeline', 'icon', 'avatar', 'button', 'link', 'text']
    }
};


export const final = () => `<div class="fd-timeline" style="width: 600px;">
    <div>
        <ul class="fd-timeline__group fd-timeline__group--collapsed" role="tree">
            <li class="fd-timeline__group-header-container" role="treeitem" aria-level="1">
                <div class="fd-timeline__group-header fd-timeline__group-header--collapsed" tabindex="0">
                    <span class="fd-timeline__group-header-icon">
                        <i class="sap-icon--navigation-right-arrow"></i>
                    </span>
                    <span class="fd-timeline__group-header-text">2021</span>
                </div>
                <div class="fd-timeline__group-header-bar"></div>
                <div class="fd-timeline__group-header-node-container">
                    <div class="fd-timeline__group-header-node fd-timeline__group-header-node--grouping"></div>
                    <div class="fd-timeline__group-connecting-line"></div>
                </div>
            </li>
        </ul>
        <ul class="fd-timeline__group fd-timeline__group--collapsed" role="tree">
            <li class="fd-timeline__group-header-container" role="treeitem" aria-level="1">
                <div class="fd-timeline__group-header fd-timeline__group-header--collapsed" tabindex="0">
                    <span class="fd-timeline__group-header-icon">
                        <i class="sap-icon--navigation-right-arrow"></i>
                    </span>
                    <span class="fd-timeline__group-header-text">2021</span>
                </div>
                <div class="fd-timeline__group-header-bar"></div>
                <div class="fd-timeline__group-header-node-container">
                    <div class="fd-timeline__group-header-node fd-timeline__group-header-node--grouping"></div>
                    <div class="fd-timeline__group-connecting-line"></div>
                </div>
            </li>
        </ul>
        <ul class="fd-timeline__group fd-timeline__group--collapsed" role="tree">
            <li class="fd-timeline__group-header-container" role="treeitem" aria-level="1">
                <div class="fd-timeline__group-header fd-timeline__group-header--collapsed" tabindex="0">
                    <span class="fd-timeline__group-header-icon">
                        <i class="sap-icon--navigation-right-arrow"></i>
                    </span>
                    <span class="fd-timeline__group-header-text">2021</span>
                </div>
                <div class="fd-timeline__group-header-bar"></div>
                <div class="fd-timeline__group-header-node-container">
                    <div class="fd-timeline__group-header-node fd-timeline__group-header-node--grouping"></div>
                    <div class="fd-timeline__group-connecting-line"></div>
                </div>
            </li>
        </ul>
        <ul class="fd-timeline__group fd-timeline__group--collapsed" role="tree">
            <li class="fd-timeline__group-header-container" role="treeitem" aria-level="1">
                <div class="fd-timeline__group-header fd-timeline__group-header--collapsed" tabindex="0">
                    <span class="fd-timeline__group-header-icon">
                        <i class="sap-icon--navigation-right-arrow"></i>
                    </span>
                    <span class="fd-timeline__group-header-text">2021</span>
                </div>
                <div class="fd-timeline__group-header-bar"></div>
                <div class="fd-timeline__group-header-node-container">
                    <div class="fd-timeline__group-header-node fd-timeline__group-header-node--grouping"></div>
                    <div class="fd-timeline__group-connecting-line"></div>
                </div>
            </li>
        </ul>
        <ul class="fd-timeline__group" role="tree">
            <li class="fd-timeline__group-header-container" role="treeitem" aria-level="1">
                <div class="fd-timeline__group-header" tabindex="0">
                    <span class="fd-timeline__group-header-icon">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </span>
                    <span class="fd-timeline__group-header-text">2021</span>
                </div>
            </li>
            <ul class="fd-timeline__posts">
                <li class="fd-timeline__post-container">
                    <div class="fd-timeline__post fd-timeline__post--right">
                        <div class="fd-timeline__post-content">
                            Ensure and adjust correct structuring of company (e.g. chart of accounts, legal/management entities , profit centers etc. …).
                            Ensure accuracy of financial data (profit center data).
                            Explain financial data for both compliance and management purposes. 
                        </div>
                    </div>
                   <div class="fd-timeline__group-header-node-container">
                    <div class="fd-timeline__group-header-node fd-timeline__group-header-node--icon">
                        <span class="sap-icon sap-icon--outgoing-call"></span>
                    </div>
                    <div class="fd-timeline__group-connecting-line"></div>
                   </div>
                </li>
            </ul>
        </ul>
    </div>
</div>
<br>
`;

final.storyName = 'final';
final.parameters = {
    docs: {
        storyDescription: ''
    }
};
