# Test info

- Name: E2E - Users flow >> Créer et lister un utilisateur
- Location: /Users/kentineven/Documents/M1/tests-from-scratch/e2e/tests/users.e2e.spec.ts:3:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
    at /Users/kentineven/Documents/M1/tests-from-scratch/e2e/tests/users.e2e.spec.ts:24:31
```

# Page snapshot

```yaml
- banner:
  - heading "Utilisateurs" [level=1]
  - text: "Nom :"
  - textbox "Nom :": Diane
  - button "Créer"
  - alert: "Erreur : Network request failed"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | test.describe("E2E - Users flow", () => {
   3 |   test("Créer et lister un utilisateur", async ({ page }) => {
   4 |     // 1. Aller sur la page d’accueil
   5 |     await page.goto("/");
   6 |     // Vérifier le titre ou un élément clé
   7 |     await expect(
   8 |       page.getByRole("heading", { name: /utilisateurs/i })
   9 |     ).toBeVisible();
  10 |     // 2. Saisir le nom
  11 |     const input = page.getByLabel("Nom :");
  12 |     await input.fill("Diane");
  13 |     // 3. Cliquer sur le bouton "Créer"
  14 |     const créer = page.getByRole("button", { name: "Créer" });
  15 |     await créer.click();
  16 |     // 4. Attendre la requête POST /users et vérifier le statut
  17 |     const [response] = await Promise.all([
  18 |       page.waitForResponse(
  19 |         (resp) =>
  20 |           resp.url().endsWith("/users") && resp.request().method() === "POST"
  21 |       ),
  22 |       // l’action ci-dessus (clic) déclenche l’appel
  23 |     ]);
> 24 |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |     // 5. Vérifier que la liste contient "Diane"
  26 |     const items = page.getByRole("listitem");
  27 |     await expect(items).toHaveCount(1);
  28 |     await expect(items.first()).toHaveText("Diane");
  29 |   });
  30 | });
  31 |
```