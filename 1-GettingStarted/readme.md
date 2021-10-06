# To innitialyze projects (if doesn't have package.json in your project)
> npm init -y

# add typescrypt
> yarn add typescrypt -D

# add typescrypt compiler
> yarn add ts-node -D

# OR (fast way is use full command bellow)
> yarn add typescrypt ts-node -D

# Initialize typescrypt config
> npx tsc --init

# To run
npx ts-node [file_name].ts


(Issue with es5)
line 14 update
- "target": "es5", 
+ "target": "esnext", 