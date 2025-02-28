# Fundamental Library Styles

[![npm version](https://badge.fury.io/js/fundamental-styles.svg)](https://badge.fury.io/js/fundamental-styles)
[![Build Status](https://travis-ci.com/SAP/fundamental-styles.svg?branch=main)](https://travis-ci.com/SAP/fundamental-styles)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-styles)](https://api.reuse.software/info/github.com/SAP/fundamental-styles)
<a href="https://storybook.js.org/">
  <img src="https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg" />
</a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>

## What is Fundamental Library Styles?

Fundamental Library Styles is a light-weight presentation layer that can be used with your UI framework of choice (e.g. Angular, React, Vue, etc.). With Fundamental Library Styles, library of stylesheets and HTML tags, developers can build consistent Fiori apps in any web-based technology.

**Learn more at http://sap.github.io/fundamental-styles/**

We are also working on [Angular](https://github.com/SAP/fundamental-ngx), [React](https://github.com/SAP/fundamental-react) and [Vue](https://github.com/SAP/fundamental-vue) implementations.


## Getting Started
The library is modular so you can use as little or as much as you need.

### CDN
The fully compiled, minified library is available via CDN for inclusion in your application.

```
<link href="fundamental-styles.css" rel="stylesheet">
```

### NPM Package

The compiled CSS for the full library and modules, e.g., core, layout, etc., are distributed via [NPM](https://www.npmjs.com/package/fundamental-styles).

````
npm install fundamental-styles --save
````

> NOTE: We only distribute compiled CSS for each component, not the full project or HTML for specific components. 

### Distributed CSS Files

The distrubtion folder contains several css files per component: a default file and one file per supported theme (`sap_fiori_3`, `sap_fiori_3_dark`, `sap_fori_3_light_dark`, `sap_fiori_3_hcb`, `sap_fori_3_hcw`, `sap_horizon`). Each themed file includes fallback support for css variables in IE11 for the corresponding theme. The default file includes fallbacks for `sap_fiori_3`. 

### Icons
See the [Icon Component](https://fundamental-styles.netlify.app/?path=/docs/components-icon--sizes) for a list of icon class names. See Project Configuration below for instructions to include SAP Fiori 3 icons in your project.

### Project Configuration
This project does not contain fonts and icons - they must be added to your project separately. Download the @sap-theming library. After adding fonts and icons to your project, include the following in your css:


    @font-face {
        font-family: "72";
        src: url("~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/72-Regular-full.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "72";
        src: url("~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/72-Bold-full.woff")
            format("woff");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: "72";
        src: url("~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/72-Light-full.woff")
            format("woff");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "SAP-icons";
        src: url("~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/SAP-icons.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BusinessSuiteInAppSymbols';
        src: url('~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SAP-icons-TNT';
        src: url('~@sap-theming/theming-base-content/content/Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    html {
      font-size: 16px;
    }

If you are not supporting IE11, the recommended format is `woff2`. If supporting IE11, use `woff`.

## Working with the Project

### Download and Installation

1. **Clone Repository** - Clone the repo using the git software of your choice or using the git command `git clone https://github.com/SAP/fundamental-styles.git`

1. **Install NPM Dependencies**: `npm install`

1. **Serve the development playground and documentation website locally** - `npm start`

### Project Dependencies
The project has the following prerequisites:

* Git (for downloading this repo)
* [Node LTS](https://nodejs.org/)

## SLA
Our Service Level Agreement. Fundamental Library Styles is aiming to deliver:

### SLA - What
* Consumable CSS that strives for [Fiori 3.0](https://www.sap.com/products/fiori.html) compliance.
* Reference HTML specification that consuming libraries **MUST** adhere to.

### SLA - How
* Theme-able components built on top of [SAP Theming Base Content](https://github.com/SAP/theming-base-content) by consuming the CSS Custom Properties delivered by the theming library
* Self-contained styles. That is, each component's style file contains all the styling needed to be rendered properly. External styling won't bleed-in internal styling won't bleed-out. `Bleeding in` means that CSS global reset won't affect the component and `bleeding out` means that the component styling should not affect other HTML elements) 
* Accessibility support
  * Accessibility - Color contrast support for WCAG 2.0 level AA (4.5:1 for typical text)
  * Accessibility - Semantic HTML reference
  * Accessibility - Aria attributes noted when possible in HTML reference

This library is also being consumed by [Fundamental Library for Angular](https://github.com/SAP/fundamental-ngx), [Fundamental Library for React](https://github.com/SAP/fundamental-react), and [Fundamental Library for Vue](https://github.com/SAP/fundamental-vue).

The above SLA is the primary difference between this library and the earlier [Fundamental](https://github.com/SAP/fundamental).

## Support

If you encounter an issue, you can create a [ticket](https://github.com/SAP/fundamental-styles/issues/new/choose) or post on the [Fundamentals Slack channel](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LThlOTYxOGE3NGIzZDY3MGYyNjRiYWFlM2U0OGFjMGQ5YTA1MWU0ZjRjOTZmMGIzYWU1MmMyNzNjMjJhNzZhYzY).


## Contributing

If you want to contribute, please check the [Contribution Guidelines](https://github.com/SAP/fundamental-styles/wiki/Contribution-Guidelines). Also check the [Development Guidelines](https://github.com/SAP/fundamental-styles/wiki/Development-Guidelines) and [Visual Testing Guide](https://github.com/SAP/fundamental-styles/wiki/Visual-testing-with-Chromatic).


## Versioning

The `fundamental-styles` library follows [Semantic Versioning](https://semver.org/). These components strictly adhere to the `[MAJOR].[MINOR].[PATCH]` numbering system (also known as `[BREAKING].[FEATURE].[FIX]`).

Merges to the `main` branch will be published as a prerelease. Pre-releases will include an **rc** version (_e.g._ `[MAJOR].[MINOR].[PATCH]-rc.[RC]`).

The following circumstances will be considered a MAJOR or BREAKING change:
* Dropping existing classnames, css variables, color names, color groups, spacing parameters
* The existing underlying HTML markup of a component is altered
* Non-visual HTML attribute changes/additions (such as `role`, `aria-*`, `data-*`)
  > Note: Fundamental Styles provides CSS directly, and HTML as reference to consumers. Because of the reference relationship of the HTML seen in Fundamental Styles, we want to be very clear when we alter that reference so that it is properly reflected in JS implementation libraries. Because of this, even non-visual changes will be treated as breaking.

The following circumstances will NOT be considered a MAJOR or BREAKING change:
* Introducing new  classnames, css variables, color names, color groups, spacing parameters
* Adding or modifying CSS properties and values of existing classnames.

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
