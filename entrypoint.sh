#!/bin/sh

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "有未提交的更改，先提交它们。"
    # 自动添加并提交所有变更
    git add .
    git commit -m "自动提交变更"
else
    echo "没有未提交的更改。"
fi

# 推送到远程仓库
git push
