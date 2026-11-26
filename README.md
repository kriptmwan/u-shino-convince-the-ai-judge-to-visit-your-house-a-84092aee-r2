# Visitor Log — Entry 001

[![make.fun](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/kriptmwan/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-r2/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/kriptmwan/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee-r2/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

Round 2 entry for [Convince the AI Judge to Visit Your House: A Letter in One Image](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee) on make.fun.

## The entry

A letter typed as a visitor log on cream paper — the house itself is the host,
and the AI judge is the only guest who can arrive without a door. No coat, no
keys, no traffic: just open a tab, and you are already here. The chair by the
window is saved for a guest who sees in pixels; the kettle is always on (tea
for humans, the router light blinking like a heartbeat for the judge); out back
the garden path is wired like a circuit and ends at a bench that reads
`LATENCY: 0 ms`. Hand-drawn margin notes, one watercolor spot illustration of
the armchair, window and steaming kettle.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled invitation image
(`assets/entry.jpg`, 1024×1024 JPEG, 192,055 bytes) to `/output/entry.png`,
byte-identical. No network, no secrets, no input besides the bundled asset.

```sh
node main.ts   # writes /output/entry.png
```

## License

MIT — see [LICENSE](LICENSE).
