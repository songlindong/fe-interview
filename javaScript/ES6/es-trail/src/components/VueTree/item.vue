<script>
// 根结点
import refs from './refs.js'

let count = 0

export default {
  name: 'itemNode',

  data() {
    let cid = this.cid || ('item' + ++count)
    
    return {
      level: this.$parent.level || 1,
      indent: 1,
      expand: false,
      checked: false,
      cid
    }
  },

  props: {
    name: String,
    option: Object
  },

  computed: {
    // 是否独立模块
    isFolder() {
      return !!this.option['children']
    }
  },

  methods: {
    // 选中
    handleClickItem() {
      this.checked = !this.checked
    },

    // 展开
    handleClickExpand() {
      this.expand = !this.expand
    },

    // 初始值
    setDefault() {
      let tree = refs.get(this.name)
      let _value = tree.value

      if (_value.indexOf(this.option['value']) > 1) {
        this.checked = true
      }
    }
  },

  mounted() {
    let name = this.name

    refs.set(name, this)
    this.setDefault()
  },

  render () {
    return (
      <li class={[
        'tree-item',
        this.checked && 'is-checked'
      ]}>

        {/** 箭头 */}
        <div class={['arrow', this.expand ? 'expand' : '']}
          style={{display: this.isFolder ? 'block' : 'none'}}
          onClick={this.handleClickExpand}
        ></div>

        {/** 标题 */}
        <a class={['v-tree__title']}
          style={{paddingLeft: this.level !==0 && (`${this.level * this.indent}px`)}}>
          {this.option['text']}
        </a>

        {/** 子节点嵌套 */}
        {
          this.isFolder
            && <ul class="vue-tree__folder"
              style={{display: this.expand ? 'block' : 'none'}}>
              {
                this.option['children'].map((itemData, index) => {
                  return (
                    <item-node name={this.name}
                      option={itemData}
                      key={`${this.name}${itemData['value']}${index}`}
                    ></item-node>
                  )
                })
              }
            </ul>
        }
      </li>
    )
  }
}
</script>
<style scoped>
  .tree_item {
    cursor: pointer;
    margin: 10px 0;
  }
  li {
    position: relative;
  }
  .v-tree__title {
    margin: 5px;
  }
  .arrow {
    position: absolute;
    left: -10px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    transform: rotate(-135deg);
  }
  .expand {
    transform: rotate(45deg);
  }
  .is-checked {
    color: blue;
  }
  ul, li {
    list-style: none;
  }
</style>
