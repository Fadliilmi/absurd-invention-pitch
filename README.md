# The Remote Control Finder

[![make.fun](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Fadliilmi/absurd-invention-pitch/rank.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Fadliilmi/absurd-invention-pitch/reward.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

An entry for the [One-Sentence Absurd Invention Pitch](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a) bounty on make.fun: one sentence pitching a ridiculous invention that fixes a tiny everyday annoyance — a remote control that never stays where you left it.

> The Remote Control Finder is a second remote that interrogates the first one, beeping accusingly until it confesses where it hid under the couch cushions.

## How it works

`main.ts` (Node) writes the single entry sentence to `/output/entry.txt` as UTF-8 text. It guards the length (1–220 characters) and throws if the sentence falls outside the gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
