<script>
// tree.vue - 大框架
import itemNode from './item.vue'
import refs from './refs.js'

let count = 0
export default {
    name: 'treeNode',

    // 传递外层参数
    props: {
        value: Array,
        options: {
            type: Array,
            default: function() {
                return []
            }
        }
    },

    data() {
        let name = 'vue_tree_' + ++count

        return {
            name
        }
    },

    created() {
        let name = this.name

        refs.init({
            name
        }, this)
    },

    destroyed() {
        let name = this.name

        refs.destroy(
            name
        )
    },

    components: {
        itemNode
    },

    render () {
        return (
            <div class="tree">
                <ul class="vue-tree">
                    {
                        this.options.map((itemData, index) => {
                            return  (
                                <item-node name={ this.name }
                                    option={itemData}
                                    key={`${this.name}${itemData['value']}${index}`}>
                                </item-node>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
</script>
