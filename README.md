Welcome🙏🏼 to the **Website** repo of devXsphere.

# Step by Step Guide, How you can contribute here.

### Steps Involved

1. Fork this repo
    if successful, will be redirected to your github account
2. Open Terminal to clone from your github repo
```bash
https://github.com/DevXsphere/Website-devxsphere.git
```

3. then you need to go inside the directory
```bash
cd Website-devxsphere
```
4. You need to set upstream url, run this command to do so:
```bash
git remote add upstream https://github.com/DevXsphere/Website-devxsphere.git
# as best practice before creating a new branch
git pull upstream main --rebase
```

5. Run these commands to add a different branch:

You can have anything as <branch_name> , but by convention it should indicate what you are working on

example : <branch_name> can be **add-folder**, when you are adding your folder.

```bash
# next is to create a branch 
git branch <branch_name>
git checkout <branch_name>
```

For learning more about upstream or origin and github, Watch [Kunal Kushwaha's](https://www.youtube.com/watch?v=apGV9Kg7ics) or [freecodecamp](https://www.youtube.com/watch?v=RGOj5yH7evk) course on github.



⚠️**NOTE** : Always try to make separate branches for each task and make PRs using those branches. Keeping the main of your fork clean, is always a good idea.

- Make a directory with an appropriate name

```bash
mkdir <Dir_name>
```

# Steps to create a PR
```
git add .
git commit -m <Commit Message>
git push origin <branch_name> # this will push your changes to your github repo
```

- Go to your github forked repo, You will see an option to **"Compare and Pull request"**.
- Click on that and Then You will see an option to **"Create pull request"**. Click on that.
- That's it you have made your pull request.🥳
- After your request is accepted, You will see the folder of the directory name on the repository.
- We are waiting for your pull request.
- You can always have discussions regarding posting tweets on the [Discord Channel](https:)

<a href = "https://github.com/DevXsphere/Website-devxsphere/graphs/contributors">
</a>
