# ATM Simulator


# static analysis (ESLINT)
- eslist install
```
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

- execute analysis
```
npx eslint
```

# tests (JEST)
- Install Jest
```
npm install jest --save-dev
npm install ts-jest --save-dev
npm install @types/jest --save-dev
```
- create a test config file 

```
npx ts-jest config:init
```
- on root project folder run the scrit
```
npx jest
```