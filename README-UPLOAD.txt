GSTAR PRODUCT LINKS HOTFIX V1

A. GITHUB — upload/overwrite only:
1. Gstar-Management.html
2. assets/js/management.js
3. assets/js/products.js
4. products.html

Do NOT overwrite:
- assets/js/app.js
- assets/css/style.css
- assets/js/api.js
- assets/css/management.css
- Dashboard / Marketing / Sales / Support files

B. APPS SCRIPT:
1. Open the existing Gstar Workspace Apps Script project.
2. Open Code.gs.
3. Replace the entire Code.gs with apps-script/Code.gs from this ZIP.
4. Add a new Script file named ProductLinksMigration.
5. Paste apps-script/ProductLinksMigration.gs into it.
6. Save.
7. Run upgradeProductLinksSchema() once.
8. Deploy > Manage deployments > Edit > New version > Deploy.
9. Keep using the same /exec URL.

C. TEST:
1. Open Control Tower > Products > Edit GstarCAD.
2. Fill:
   - Free Trial Download URL
   - Trial + Script URL
3. Save.
4. Confirm both columns in Products sheet:
   - DownloadURL
   - TrialScriptURL
5. Hard refresh Products page.
6. Each button must open its own link.
7. If a link is blank, button shows "No link" instead of opening the official website.

This patch does not modify Dashboard, shared bell, login, style.css, or Apps Script URL.
