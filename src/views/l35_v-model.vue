<script>
  export default {
    data () {
      return {
        message1: '',
        message2: '',
        checked: false,
        picked: 'One',
        selectedSingle: 'A',
        selectedMulti: [],
        checkedNames: [],
        selected: 'A',
        toggle: false,
        pick: false,
        selecedBindingValue: '',
        msg: '',
        age: 12,
        options: [
          {text: 'one', value: 'A'},
          {text: 'two', value: 'B'},
          {text: 'three', value: 'C'}
        ],
        a: '0',
        b: '1'
      }
    }
  }
</script>

<template>
  <div>
    <hr>
    <h1>基础用法</h1>
    <h3># 文本</h3>
    <span>Message is: {{message1}}</span>
    <input type="text" v-model="message1" placeholder="edit me">

    <h3># 多行文本</h3>
    <span>Multiline message is:</span>
    <p style="white-space: pre">{{ message2 }}</p>
    <br>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>

    <h3># Checkbox</h3>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>

    <h3># 多个Checkbox绑定到同一个数组</h3>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>

    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="john">john</label>

    <input type="checkbox" id="Mike" value="Mike" v-model="checkedNames">
    <label for="Mike">Mike</label>
    <br>
    <span>Checked names:{{checkedNames}}</span>

    <h3># Radio</h3>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked:{{picked}}</span>

    <h3># select(单选)</h3>
    <select v-model="selectedSingle">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected:{{selectedSingle}}</span>

    <h3># selected(多选)</h3>
    <select v-model="selectedMulti" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected:{{selectedMulti}}</span>

    <h3># selected配合 v-for 渲染</h3>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
    </select>
    <span>Selected:{{selected}}</span>

    <hr>
    <h1>绑定Value</h1>
    <h3># Checkbox</h3>
    <input
      id="checkboxBindingVlaue"
      type="checkbox"
      v-model="toggle"
      v-bind:true-value="a"
      v-bind:false-value="b">
    <label for="checkboxBindingVlaue">{{toggle}}</label>
    <br>

    <h3># Radio</h3>
    <input id="radioBindingValue" type="radio" v-model="pick" v-bind:value="a">
    <label for="radioBindingValue">{{pick}}</label>

    <h3># seleced options</h3>
    <select v-model="selecedBindingValue">
      <!-- 对象字面量 -->
      <option v-bind:value="{number:123}">123</option>
    </select>
    <span>{{selecedBindingValue}}</span>

    <hr>
    <h1>修饰符</h1>
    <h3>.lazy</h3>
    <!-- 在 'change' 而不是 'input' 事件中更新 -->
    <input id="msgBindingValue" v-model.lazy="msg">
    <label for="msgBindingValue">{{msg}}</label>

    <h3>.number</h3>
    <input v-model="age" type="number" id="ageBindingValue">
    <label for="ageBindingValue">typeof age:{{typeof age}}</label>

    <h3>.trim</h3>
    <input v-model.trim="message2" debounce="500" id="messageBingingValue">
    <label for="messageBingingValue">{{message2}}</label>
  </div>
</template>