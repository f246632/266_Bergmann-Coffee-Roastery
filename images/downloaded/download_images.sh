#!/bin/bash
# Download images from Google URLs
urls=(
"https://lh3.googleusercontent.com/p/AF1QipP-0brOT4QxTTJyL2UyHwRlR3TQRH-lqBAv8Kcy=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/p/AF1QipPeKtKJDLUdnZHoBFAbOiDQd17vkH9FTflfRjFg=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/p/AF1QipPh8zDCkDdmZO_nu-FB1kWxG18tsZv1qhHwZ1-G=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw_t2ccAx2ztWMbrSWqwytwXZFXAMi8ZKEd-op3eLdPlXp5u2rqgM5HnNoYYEqwGBs2nhzUYDk3JlKYi4E4N5h4x-Bb5y3gDehv5exIRCAK3m5VseGGs8u5dgd9nacZyx7t0IpPmQ=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy3EXJUoOwkGIaZC4kO0wjW4Xd2XGEArC_ByGaKTlG1p2bt4LQzhhUQ0QbU5C6gZ-wdXhdz7elZ5PnuoPiUQj86D6Gwk_b8N7w4TwG5UG7cNSs2lQQUuB8xz8zMRSRKw09OOtQG5ztqqrh5=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyslCYlsYCsSCO-ErdtEj0Dws1niWOFFUX5gxi1uFIBwxSitwbNOXXkvyu1LfE2JhCWZVFlec4j6e1uoLCoDp9g2-QyTnRmVD2uVQbkGxcf5bXRvoK9z5S7060iAQK4gmXw5FWbrKeiJ6s=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXK-uStCltjXFyKWSs3fFeACJRJP_RV0ZxVVC3yrky4HQUxZB9pYehxVGFKnC4G_4jdP-ZroSu6MxiYCCQp9aXzag3tMki2dwIwKcGDiFaFoBV3NMyEd-apV7DwkuPWjUT7S7A=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/p/AF1QipOZVP7KsGZJXm58g0AC-B16WYaJP_GGc49bCuXU=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/p/AF1QipOMluPxSqftJo3JRvlwQEYcO4SrlE06DWruArb8=w1920-h1080-k-no"
"https://lh3.googleusercontent.com/p/AF1QipMTue078HXSYBPYYbqfqoeg93bQhX_RVo7pcoPa=w1920-h1080-k-no"
)

counter=1
for url in "${urls[@]}"; do
  echo "Downloading image $counter..."
  curl -s -L "$url" -o "image-$counter.jpg"
  counter=$((counter+1))
done

echo "Downloaded ${#urls[@]} images"
