# [`Chai`断言库API](http://chaijs.com/api/bdd/)

<!-- TOC depthFrom:2 -->

- [expect/should 风格](#expectshould-风格)
    - [语言链修饰符](#语言链修饰符)
    - [.not](#not)
    - [.deep](#deep)
    - [.nested](#nested)
    - [.own](#own)
    - [](#)

<!-- /TOC -->

## expect/should 风格

### 语言链修饰符

- to
- be
- been
- is
- that
- which
- and
- has
- have
- with
- at
- of
- same
- but
- does

语言链修饰符是为了提高语言链的可读性而存在，**不具有任何功能**，除非它被改写。

例如：可以采用任意组合修饰符的方式来编写测试用例(所有的测试用例可以放在 `mocha` 中 `it` 的函数中运行)

```js
expect('test').to.a('string');
expect('test').to.be.a('string');
expect('test').is.to.be.a('string');
```

**再次强调**：修饰符可以任意的增加组合编写，它只是为了增加可读性而存在，并没有其他实质性的作用

> ***Chai更新了很多次， 如果[官方文档](http://chaijs.com/api/bdd/)上的测试用例无法正常运行，请检查你的Chai版本是否过低***

### .not

对 `not` 之后的断言取反

```js
expect(function () {}).to.not.throw()
expect({a: 1}).to.not.have.property('b')
// expect([1, 2]).to.be.an('array').that.does.not.include(3) //fail

expect(2).to.equal(2); // pass
expect(2).to.not.equal(1); // pass
```

<!-- TODO: -->
### .deep

设置 `deep` 标记, 对 `.deep` 后的断言进行深度比较（*注：不是严格比较, 和严格比较相比更宽松*）

```js
//expect({a: 1}).to.equal({a: 1})  //fail
expect({a: 1}).to.deep.equal({a: 1}) //pass
expect({a: 1}).to.not.equal({a: 1}); //pass
```

### .nested

> nested是 chai v4 中出现的断言，如果测试报错

在其后所有的`.property`和`.include`的**断言**中，允许使用 *点* 和 *括号*。

```js
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
```

如果属性名中包含点或者括号，则需要在所有的点或括号的前面添加两个反斜杠进行转义。

```js
expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');  //pass
expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'}); //pass
```

`.nested` 不能结合 `.own` 使用

### .own

在其后所有的`.property`和`.include`的断言中，忽略**继承**的属性

```js
Object.prototype.b = 2;
        
expect({a: 1}).to.have.own.property('a');
expect({a: 1}).to.own.property('a').but.not.property('b'); 

expect({a: 1}).to.own.include({a: 1});
expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
```

`.own` 不能结合 `.nested` 使用

### .ordered