# The Living Archive

[Complete repository directory tree](docs/DIRECTORY.md)

**Application source.** Make the full Seed → New Cycle journey explorable as an illustrated archive.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Explore three stages. Open http://127.0.0.1:8000/ in a browser. 

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
