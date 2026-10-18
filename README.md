# ERD9

ERD9 is a web-based database modeling tool for designing and managing database structures visually.
You define tables (entities) and manage the relationships between them as an ERD (Entity Relationship Diagram).

- **[Getting started](https://gujc71.github.io/erd9/)**
- Tested in Chrome and Firefox on Windows.
- No login and no server storage. Documents are stored in your browser (IndexedDB), and you can export them to a JSON file on your PC. Take care when using a shared or public computer.

## User manual

Every feature is described with screenshots in the user manual (AsciiDoc):

- [English](doc/user-manual_en.adoc)
- [한국어 (Korean)](doc/user-manual_ko.adoc)

## Source Code

The source code is in a different repository [here](https://github.com/gujc71/ERD9-Source/)

## Main features

Create and edit entities with the mouse.

![manual1](https://gujc71.github.io/erd9/images/manual_1.gif)

Supports MariaDB (MySQL), Oracle, MS-SQL and PostgreSQL. Relationships between entities are one-to-one or one-to-many, either identifying (PK) or non-identifying (AK).

![manual2](https://gujc71.github.io/erd9/images/manual_2.gif)

- **Many-to-many**: Draw an M:N relationship with the M:N tool. An associative (intersection) table with both primary keys is created and connected with two identifying relationships.
- **Self-referencing relationship**: With a relationship tool, click the same entity twice (for example, an employee's manager). The keys are added as `PARENT_` columns that allow NULL.
- **Pages**: Use the tabs at the bottom to show part of a large model on its own page. An entity can be on several pages, at a different position on each; `Main` always shows every entity. Click `+` to make a page from the selected entities.
- **Domains**: Define a data type, default and not null once and use it in the `Domain` column of the Entity dialog. Changing a domain updates every column that uses it.
- **Data standards**: Standard words (고객 → CUST) and terms (고객번호 → CUST_NO, with a domain). In the Entity dialog, terms are suggested as you type a column name or comment, a comment that is not a term is made into a column name from the words, and `Standardize` renames every column. To start a dictionary from an existing ERD, use `Extract from ERD` in the Terms tab. `Add-ons > Domains & Standards > Check` lists the columns that don't follow the standard and can fix them.
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
- **Domains & Standards**: Manages domains and the standard word and term dictionaries (import and export as CSV for Excel), and checks the columns against them.
- **Column Templates**: Manages the column templates.

`Files > Export Image & Print` downloads the diagram (all or selected entities) as PNG (1x-4x, white or transparent background) or SVG, cropped to the area the entities occupy.

![manual3](https://gujc71.github.io/erd9/images/manual_3.gif)

### With AI

Requires your own API key for OpenAI (ChatGPT), Anthropic (Claude) or Google (Gemini). Choose a suggested model or type any model name. The key is kept only in the current browser window and is sent directly from the browser to the selected service.

- **Create Entity**: Ask for an entity structure, for example "a shopping mall". The response is requested in a fixed JSON format.
- **ERD Review and Feedback**: Get an evaluation of your ERD.
- **Free Talk**: Ask for anything based on your ERD, for example MyBatis code for Java.

## Desktop app files

In the desktop app, `Files > Save` and `Files > Open` use `.erd9` files on your PC instead of the browser storage. An `.erd9` file is the same JSON as `Export to Json`, so the web version can open it with `Import from Json`. `Save As` (Ctrl + Shift + S) saves to another file. A version is still kept on the PC each time you save, so `History` works as in the web version.

## Database (desktop app only)

The desktop app (see [Desktop app](#desktop-app)) has a **Database** menu. It is hidden in the web version, because a web browser cannot connect to a database server directly. Supported: MariaDB/MySQL, PostgreSQL, MS-SQL and Oracle (Oracle needs [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html) on the PC). Connection settings are remembered without the password.

- **Forward Engineering**: Create a database on a database server from the ERD. Generates the script (all or selected entities, optionally dropping existing objects first); review or edit it, then execute it statement by statement with a log.
- **Reverse Engineering**: Build an ERD from an existing database server: tables, columns, comments, primary keys, relationships, indexes, CHECK constraints, views and sequences. Choose the tables, then add them to the current document or a new one.
- **Compare and Merge**: Compares the ERD with the database and lists every difference (table, view, sequence). For each one choose ERD → DB (runs an ALTER script on the database), DB → ERD (updates the ERD) or Skip. The script is shown before it runs. Tables and columns are matched by name, so a renamed column appears as dropped and added.

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

- **Save to server**: Multi-user use, and possibly simultaneous editing later.
- **Save to GitHub**: Manage work history.
- **ERD sharing**: Share and discuss an ERD with others.
- **Code generation**: Generate CRUD code (e.g. Node.js, Python) for selected entities.

## License

MIT
