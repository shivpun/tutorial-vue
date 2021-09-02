# 07-vue3-props

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### What is props in Vue ?
In Vue, props (or properties), are the way that we pass data from a parent component down to it's child components.

There are multiple way to implement pros:
A. Using :props-name="data-variable"
```
<componentA props-name="data-variable"></componentA>
```

1. Act as drawback in nested child components

B. Using props and inject
```
export default {
    name: 'Parent',
    components: {
        ComponentA
    }
}
```

1. Use method in provide in case data need to be updated to nested components and child comoonents.
2. Use property in provide in case data need to be updated only once to all nested components and child components.