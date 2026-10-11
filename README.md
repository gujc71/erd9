# ERD9

ERD9 is a web-based database modeling tool for designing and managing database structures visually.
You define tables (entities) and manage the relationships between them as an ERD (Entity Relationship Diagram).

- **[Getting started](https://gujc71.github.io/erd9/)**
- Tested in Chrome and Firefox on Windows.
- No login and no server storage. Documents are stored in your browser (IndexedDB), and you can export them to a JSON file on your PC. Take care when using a shared or public computer.

## Main features

Create and edit entities with the mouse.

![manual1](https://gujc71.github.io/erd9/images/manual_1.gif)

Supports MariaDB (MySQL), Oracle, MS-SQL and PostgreSQL. Relationships between entities are one-to-one or one-to-many, either identifying (PK) or non-identifying (AK).

![manual2](https://gujc71.github.io/erd9/images/manual_2.gif)

- **Many-to-many**: Draw an M:N relationship with the M:N tool. A mapping table with both primary keys is created and connected with two identifying relationships.
- **Constraints**: Unique (also composite) indexes and CHECK constraints in the Entity dialog (`Index / Check`), and ON DELETE / ON UPDATE actions and the constraint name in the Relationship dialog. Options a DBMS doesn't support are left as comments in the DDL.
- **Colors and subject areas**: Give an entity a background color, and group entities with subject areas. Moving an area moves the entities inside it.
- **Column templates**: Add common columns (created at, created by, ...) to an entity at once.
- **Autosave**: Unsaved work is kept in the browser every 30 seconds and when you leave the page. The next time you open ERD9, you can recover it, including the undo history.
- **History**: A version is kept each time you save (up to 20 per file). Compare a version with the current document or restore it (`Files > History`).

## Add-ons

- **Import from DDL**: Builds an ERD from DDL (Data Definition Language): tables, relationships, indexes, CHECK constraints, views and sequences. MariaDB, PostgreSQL and MS-SQL statements are analyzed with an SQL parser; Oracle and statements the parser cannot read are handled with simpler pattern matching.
- **Generate DDL**: Generates DDL from the ERD, ready to copy.
- **Compare ERD / ALTER Script**: Compares the current document with a saved file, a JSON file or a saved version, and generates the ALTER script for the selected DBMS.
- **Table Description**: Generates table descriptions from the ERD. Copy them, or download them as Markdown, HTML or Excel (xlsx).
- **Detect Missing Relationship**: Finds missing relationships between entities based on column names (and data types).
- **Auto Layout**: Rearranges entities automatically.
- **Views & Sequences**: Manages views and sequences of the document. They are included in the generated DDL and the ALTER script.
- **Data Dictionary**: Reuses column names, comments and data types you have entered before, with autocompletion.
- **Column Templates**: Manages the column templates.

`Files > Export Image & Print` downloads the diagram (all or selected entities) as PNG (1x-4x, white or transparent background) or SVG, cropped to the area the entities occupy.

![manual3](https://gujc71.github.io/erd9/images/manual_3.gif)

### With AI

Requires your own API key for OpenAI (ChatGPT), Anthropic (Claude) or Google (Gemini). Choose a suggested model or type any model name. The key is kept only in the current browser window and is sent directly from the browser to the selected service.

- **Create Entity**: Ask for an entity structure, for example "a shopping mall". The response is requested in a fixed JSON format.
- **ERD Review and Feedback**: Get an evaluation of your ERD.
- **Free Talk**: Ask for anything based on your ERD, for example MyBatis code for Java.

![manual4](https://gujc71.github.io/erd9/images/manual_4.gif)

## Shortcut keys

| Key | Action |
|---|---|
| Ctrl + `+` / Ctrl + `-` / Ctrl + mouse wheel / trackpad pinch | Zoom in / out |
| Ctrl + 0 | Reset zoom |
| Mouse wheel / Shift + mouse wheel | Scroll up and down / left and right |
| Space + drag / middle button drag | Move the view |
| Del | Remove the selected entity or relationship |
| Ctrl + A | Select all |
| Ctrl + C / Ctrl + V | Copy / paste entities |
| Ctrl + Z / Ctrl + Y | Undo / redo |
| Ctrl + S | Save document (browser storage) |
| Ctrl + F | Find entity |
| Esc | Close dialog |

## Roadmap

Done: find entity, zoom, print, multiple selection, undo/redo, missing relationship detection, ERD with AI, PostgreSQL, ERD compare and ALTER script, document history, autosave.

Planned. These need a web server and login:

- **Forward engineering**: Create a database on a database server from the ERD.
- **Reverse engineering**: Build an ERD from an existing database server.
- **Save to server**: Multi-user use, and possibly simultaneous editing later.
- **Save to GitHub**: Manage work history.
- **ERD sharing**: Share and discuss an ERD with others.
- **Code generation**: Generate CRUD code (e.g. Node.js, Python) for selected entities.

## Development

Built with TypeScript and [Vite](https://vite.dev). Requires Node.js 20 or later.

```bash
npm install            # install dependencies

npm run dev            # dev server (http://localhost:5173), loads test data automatically
npm run typecheck      # TypeScript type check
npm test               # unit tests (Vitest)
npm run build          # type check + production build (dist/)
npm run build:obf      # build + obfuscation
npm run preview        # preview dist/ (http://localhost:4173)
npm run server         # serve dist/ with Express and security headers (http://localhost:3000)
```

Source layout:

```
index.html              entry page
images/                 logo and toolbar icons
src/
  main.ts               app start-up and event wiring
  state.ts              shared application state
  erdManager.ts         document operations: new/save/load, copy/paste, view modes
  templates.ts          column templates
  ai/                   AI providers (OpenAI, Anthropic, Gemini), ERD response schema
  diagram/              Entity9, Relation9, Text9, Area9 (subject area)
  core/                 selection, undo/redo, find, auto layout (elkjs), M:N, zoom and pan (viewport)
  dialogs/              popup dialogs
  export/               image export, table description (Markdown, HTML, xlsx)
  sql/                  DDL parser, DDL generator, ERD compare (ALTER script)
  storage/              IndexedDB, autosave, file validation
  styles/erd9.css
tests/                  unit tests
index.js                Express server for dist/
scripts/obfuscate.mjs   post-build obfuscation
```

The JSON file format has a `version` field (currently 2). Files without it (version 1) are still read; when the format changes, raise `ERD_FILE_VERSION` in `src/constants.ts` and convert older files in `src/storage/validateERDFile.ts`.

## License

MIT
