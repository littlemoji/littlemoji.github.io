# 确保脚本抛出遇到的错误
set -e

# 编译生成静态文件
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 发布到上面建立的第一个仓库
git push -f git@github.com:littlemoji/littlemoji.github.io.git master

# 返回上一次工作目录
cd -
