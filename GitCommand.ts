Git:
====
Local Repository
Remote Repository
If we are creating new project then we need to run git init command to create Local Repository.
If project already exist then we need to run git clone command.

Command:
Git init===>It will create local repository.
Git remote add origin “url of the remote GitHub”===>It will link local repository to central repository.
Git pull origin master ===>It will fetch or pull the code from central repository.
Git add file_name===>It will add changed file(one file) to index.
Git add -A===>It will add all unchanged file to index.
After this run git commit -m “Message for Understanding the Code Changes”==>It will commit the code in local repository.
Git commit -a -m “Message for Understanding the Code Changes”==>It will commit the all changes once in local repository and no need to run git add -A command also.
git rm --cached file_Name==>To bring back the changes in local repository before commit.
Git branch branch_name ==>It will create new branch.
Git checkout branch_name==>To switch/move the branch.
If we create a branch in local then same branch will be get created in remote also.
If we want to merge the branch then first be into the destination branch after that write the command git merge source_branch_name(from which we want to merge).

 

git config --global user.email "you@example.com”==>To change the email address
git config --global user.name "Your Name"