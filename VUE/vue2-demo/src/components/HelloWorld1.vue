<script>
export default {
  name: 'HelloWorld1',
  data () {
    return {
      options: [{
        value: 1
      }, {
        value: 2
      }],
      money: 100
    }
  },
  methods: {
    handleInput() {}
  },
  render() {
    const moneyNode = (
      <p>{ this.money > 99 ? 99 : this.money }</p>
    );
    return (
      <ul>
        {/* jsx实现v-for */}
        {/* v-model */}
        {
          this.options.map(item => {
            return (
              <component
                item={item}
                value={item.value}
                onInput={this.handleInput}
              >
              { HelloWorld1 }
              { moneyNode }
              </component>
            )
          })
        }
      </ul>
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
