# PRINTING OFFICE CMS

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environments and configuration](#environments-and-configuration)
- [Folder structure](#folder-structure)
- [Component structure](#component-structure)
- [Styling](#styling)

## General info

This project is backoffice for printing office websites. Its content management system where you can add/edit/delete every content on your website,
including pages, sections, products, categories etc. Its very similar to Wordpress.

## Technologies

Project use:

- [Angular](https://angular.io/start) 11.1.2.
- [PrimeNG](https://www.primefaces.org/) [For UI components]
- [Quill JS](https://quilljs.com/) [For rich text editor]

## Setup

To setup this project locally you need to run this comands in root folder:

If you don`t have Angular CLI installed run command

```
$ npm install -g @angular/cli
```

and then run:

```
$ npm install
$ ng serve -o
```

> App run on http://localhost:4200/

## Environments and configuration

In **src/environments** folder you can find `apiUrl` and `mediaUrl`, change this variables with your API path.
In **src/app/core/config** folder you can find `config.js` file with all basic configuration.
For example if you want to add one more language to app you can add it in `config.ts` file.

## Folder structure

In main app folder you will find this structure:

├── app

│ ├── **core**

│ ├── **includes**

│ ├── **modules**

│ ├── **shared**

│ ├── app.component.ts

│ ├── app.module.ts

│ ├── app.component.html

│ └── app-routing.module.ts

In `app-routing.module.ts` file you can find some routing logic but mostly routing is divided in every module separately.

### Core [Folder]

├── core

│ ├── **authentication**

│ ├── **config**

│ ├── **guards**

│ ├── **interceptors**

│ ├── **services**

│ └── **shared**

**authentication** - Logic for authentication

**config** - Configuration languages

**guards** - Guards for routing

**interceptors** - Errors and JWT

**services** - All helper services and services for API

**shared** - Static resources and custom utilities

### Includes [Folder]

This folder contains top _header bar_, _sidebar_ and also _layout for auth screen and main layout_ for application.

### Modules [Folder]

├── modules

│ ├── **global**

│ ├── **login**

│ ├── **orders**

│ ├── **page-templates**

│ ├── **pages**

│ ├── **products**

│ ├── **sections**

│ ├── **settings**

│ ├── **users**

│ └── **shared**

**global** - This is global module that contains edit for footer and header menus and also contains page for preview all global sections. Global sections are sections that appear throughout the site like POPUPS for special offers.

**login** - Auth pages for Login & Reset password.

**orders** - Edit/Preview/Delete orders from customers.

**page-templates** - This pages are tempaltes for pages you can dinamicly create in CMS, you can have many pages with same page template.

**pages** - Pages are templates for pages on website. This pages are static and you can have JUST ONE Blog page or Home page etc.

**products** - Add/Edit/Delete/Preview for all products/categories/subcategories on website. You can edit/delete only CUSTOM products, you can`t edit or delete products from API.

**sections** - Some pages beside rich text editor have sections like FAQ, Banners, Hero sliders etc. so we have this structure `PAGES > SECTIONS`

**settings** - All basic settings for application like contact mails, address, logo, sitemap, website name etc.

**users** - Add/Edit/Delete/Preview all users for CMS and for public website.

### Shared

├── shared

│ ├── **components**

│ ├── **models**

│ ├── **pipes**

│ └── **style-module**

**components** - Reusable components

**models** - Models

**pipes** - Angular pipes

**style-module** - Imports for PrimeNG library.

## Component structure

Subfolders **banners-add** and **banners-edit** contains templates for add or edit some post, in this case banner.

├── banners

│ ├── **banners-add**

│ ├── **banners-edit**

│ ├── `banners-fields.service.ts`

│ ├── banners.component.html

│ ├── banners.component.scss

│ ├── banners.component.spec.ts

│ └── banners.component.ts

Since this application can have multiple languages we need to have separate form for every language.
In order not to create a thousand input fields, I divided the configuration for the form into a separate file (in this case `banners-fields.service.ts`) and JSON for each form I forward the `form-builder` component that creates the form based on that.

- `.html` file contain component template and `.ts` file contain component logic.

- `.scss` file in most cases it does not contain styles (there are exceptions if it is a reusable component), all the main styles are in **src/assets/scss** folder.

## Styling

Basically the application uses PrimeNG for component styling. All custom styles for application you can find in **src/assets/scss** folder.

├── scss

│ ├── **partials**

│ ├── **themes**

│ └── styles.scss

`styles.scss` contains imports for external libraries and also for custom SCSS.

**partials** folder contains all custom styling in separate files.

**themes** By default app has light theme, in folder themes you can find styles for dark theme. Switch for themes you can find in **app/includes/layout/main-layout**.

## Routing

Each module has its own routing and each module has lazy loading. Section routing is still in `app-routing.module.ts` and for now sections module dont have lazy loading.
