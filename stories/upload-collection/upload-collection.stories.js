export default {
    title: 'Components/Upload Collection',
    parameters: {
        description: `
The upload collection control allows users to upload single or multiple files from a device (desktop, tablet, or phone) to the SAP Fiori app. Typically, uploaded files appear in an Attachments tab. However, files can also be displayed elsewhere.

##Usage

**Use the upload collection if:**

-	You want to show a list of uploaded files that can be modified.
- You want to allow users to add or remove files, and to change the file names.
-	You are still using the old sap.ca.ui.FileUpload control.

**Do not use the byline list if:**

-	The user can upload only one file to the app. In this case, use the File Uploader control instead.

##Elements
The upload collection is essentially a byline list with a few additional elements

Modifier/Class | Description
:---------------| :---------------
\`fd-upload-collection\` | Applied on \`fd-list\` level.
\`fd-upload-collection--sm\` | A modifier class applied when the item is less than 30rem.
\`fd-upload-collection__item\` | Item container for the upload collection.
\`fd-upload-collection__thumbnail\` | Modifier class for the thumbnail.
\`fd-upload-collection__title-container\` | Container for the list title. Used when title has additional items such as Object Marker.
\`fd-upload-collection__title\` | Modifier class for the list title.
\`fd-upload-collection__description\` | Description element for the upload collection.
\`fd-upload-collection__text-separator\` | Bullet point text separator for statuses and descriptions.
\`fd-upload-collection__status-group\` | Status group container for the upload collection.
\`fd-upload-collection__button-group\` | Container for the edit/delete/Ok/Cancel buttons.
\`fd-upload-collection__form-item\` | Form item element.
\`fd-upload-collection__extension\` | File extension element for the upload collection.
`,
        tags: ['f3', 'a11y', 'theme', 'development'],
        components: ['upload-collection', 'list', 'icon', 'link', 'button', 'object-status', 'input', 'form-group', 'message-page', 'object-marker']
    }
};

export const standard = () => `<h4>Default mode</h4>
<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__title-container">
                <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--request" aria-label="icon for request" role="img"></i>
                </div>
                <div class="fd-object-marker">
                    <i class="fd-object-marker__icon sap-icon--favorite" aria-label="icon for favourite" role="img"></i>
                </div>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

<br/><br/>

<h4>Default mode - small</h4>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list" style="width: 29.5rem;">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <a href="#" class="fd-list__title fd-link fd-upload-collection__title">File_Name.extension</a>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
            <div class="fd-upload-collection__status-group">
                <span class="fd-object-status fd-object-status--negative">This is a negative status</span>
                <span class="fd-upload-collection__text-separator"> </span>
                <span class="fd-object-status fd-object-status--positive">This is a positive status</span>
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent"><i class="sap-icon--edit"></i></button>
            <button aria-label="Delete" class="fd-button fd-button--transparent"><i class="sap-icon--decline"></i></button>
        </div>
    </li>
</ul>

`;

standard.storyName = 'Default';

standard.parameters = {
    docs: {
        iframeHeight: 785,
        storyDescription: 'The default upload collection.'
    }
};

export const edit = () => `
<h4>Edit Mode</h4>

<ul class="fd-list fd-list--byline fd-upload-collection" role="list">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button fd-button--transparent">Ok</button>
            <button aria-label="Delete" class="fd-button fd-button--transparent">Cancel</button>
        </div>
    </li>
</ul>

<br/><br/>

<h4>Edit Mode - small</h4>

<ul class="fd-list fd-list--byline fd-upload-collection fd-upload-collection--sm" role="list" style="width: 29.5rem;">
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
    <li role="listitem" tabindex="0" class="fd-list__item fd-upload-collection__item">
        <span class="fd-list__thumbnail fd-upload-collection__thumbnail"><i role="presentation" class="sap-icon--activate"></i></span>
        <div class="fd-list__content">
            <div class="fd-upload-collection__form-item">
                <input class="fd-input" type="text" placeholder="Filename">
                <span class="fd-upload-collection__extension">.jpg</span>
            </div>
            <div class="fd-upload-collection__description">
                This is the file description
                <span class="fd-upload-collection__text-separator"> </span>
                This is an additional description
            </div>
        </div>
        <div class="fd-upload-collection__button-group">
            <button aria-label="Edit" class="fd-button">Ok</button>
            <button aria-label="Delete" class="fd-button">Cancel</button>
        </div>
    </li>
</ul>

`;

edit.storyName = 'Edit';

edit.parameters = {
    docs: {
        iframeHeight: 785,
        storyDescription: 'Users can activate edit mode where the file name can be changed.'
    }
};

export const noData = () => `
<div style="height: 600px; width: 100%;">
  <div class="fd-message-page">
    <div class="fd-message-page__container">
      <div class="fd-message-page__icon-container">
        <i role="presentation" class="sap-icon--attachment fd-message-page__icon"></i>
      </div>
      <div role="status" aria-live="polite" class="fd-message-page__content">
        <div class="fd-message-page__title">
          No files found.
        </div>
        <div class="fd-message-page__subtitle">
          Drop files to upload, or use the "+" button.
        </div>
      </div>
    </div>
  </div>
</div>
`;

noData.storyName = 'No Data';

noData.parameters = {
    docs: {
        iframeHeight: 785,
        storyDescription: 'Use a message page component when the user has yet to upload any files.'
    }
};
