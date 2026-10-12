#!/bin/sh
# Pings IndexNow (Bing, Yandex, others) with every URL in the live sitemap.
set -eu
HOST=piotrkrzysztof.dev
KEY=90d810c25c630c45122515d81f668d80
urls=$(curl -fsS "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' | sed 's/.*/"&"/' | paste -sd, -)
curl -fsS -X POST https://api.indexnow.org/indexnow \
    -H 'Content-Type: application/json; charset=utf-8' \
    -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[$urls]}" \
    -o /dev/null -w "indexnow: HTTP %{http_code}\n"
