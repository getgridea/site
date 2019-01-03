#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'hvenotes.fehey.com' > CNAME

git init
git add -A
git config user.name 'EryouHao'
git config user.email 'haoeryou@qq.com'
git commit -m 'docs: update docs'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hve-notes/site.git master:gh-pages

cd -