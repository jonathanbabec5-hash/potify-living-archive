# The Living Archive

[Complete repository directory tree](docs/DIRECTORY.md)

## How to describe twelve stages without making up a grow

The name of a stage helps a keeper file a note. A dated observation tells us what happened to a particular plant. An illustration can do the first job beautifully and still say nothing about the second. That distinction is the editorial heart of the Living Archive.

This repository is a technical source reference. The [stage model](public/app.js) and [technical paper](docs/WHITEPAPER.md) show how labels and illustrations correspond. **The Living Archive remains private.** Its presence in the public source directory is not an invitation to access private grow logs or reader records.

For a maintainer review, compare stage terminology between the model and the paper. Flag a label that could be read as a documented result instead of an illustration. The public reading destination is the [free First Cycle edition](https://potify-first-cycle.wile-e-coyot.chatgpt.site/#edition).

**Source reference.** The Living Archive remains private.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

For local maintenance, open http://127.0.0.1:8000/ in a browser.

### Developer entry points

Static stage records and illustrations drive the client. Progression gives every grow log a shared vocabulary across twelve stages. Explore `public/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --check public/app.js
```

### Release scope

Display assets are a dated version. An illustration update belongs in a later reviewed revision. potify-living-archive at `fb7b561b651db339d18724e1f039abc755d43367`. Full illustrated static client.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
