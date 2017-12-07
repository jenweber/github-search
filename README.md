## GitHub Search

Scripts for retrieving GitHub repo data and analyzing it across time

### Use

To run the code, you must supply your GitHub username per GitHub's
[request header policy](https://developer.github.com/v3/#user-agent-required).

`node utils/get-past-three-years.js <your GitHub username>`

Requests are [rate limited](https://developer.github.com/v3/search/#rate-limit)
at 1 request every 7 seconds in accordance with GitHub's policy for
unauthenticated requests.
