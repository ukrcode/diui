import { normalizeLocalUrl } from "@/shared/normalize-url";

const home = normalizeLocalUrl("/");
// Docs
const docs = normalizeLocalUrl("/docs");
const docsComponents = normalizeLocalUrl("/docs/components");

const materials = normalizeLocalUrl("/materials");
const diff = normalizeLocalUrl("/diff");

export const routes = {
  home,
  docs,
  docsComponents,
  materials,
  diff
};
