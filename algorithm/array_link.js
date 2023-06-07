// 数组 & 链表
// 查找：数组连续，效率高
  //   数组可以快速定位到数组中某一个节点位置的
  // 链表通过前一个元素指向下一个元素，需要前后依赖顺寻查找，效率相对较低
  // 插入：
     // 数组插入一个元素，后续所有元素的索引都会受到影响改变
     // 链表由于指向属性原因，只要改变前一项和当前被插入项的指向，即可完成插入

// 面试题 实现链表
// head => node1 => node2 => ... => null

class Linkedlist{
    constructor(){
        this.length = 0;
        // 构造空链表 => head => null
        this.head = null;
    }

    // 1.索引获取元素
    getElementAt(positon){
        if(positon < 0 || positon >= this.length) return null

        let _current = this.head;
        for(let i = 0; i < position; i++){
            _current = _current.next;
        }
        return _current
    }

    append(element){}
}

// 添加元素 => 找尾巴
// 辅助类 - 生成节点
class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

function append(element){
  let _node = new Node(element);

  if(this.head === null){
    this.head = _node;
  } else {
    let _current = this.getElementAt(this.length - 1)
    _current = _node
  }

  this.length++;
}

// 3. 插入元素
function insert(positon, element) {
    if(position < 0 || position > this.length) return false;
    
    let _node = new Node(element);
    if (positon === 0) {
        _node.next = this.head;
        this.head = _node;    
    } else {
        let _previous = this.getElementAt(position - 1);
        _node.next = _previous.next;
        _previous.next = node;
    }

    this.length++;
    return true;
}

// 4. 删除元素
function removeAt(position) {
    if(position < 0 || position > this.length) return false;

    let _current = this.head;

    if (position ===0) {
        this.head = _current.next;
    } else {
        let _previous = this.getElementAt(position - 1)

        _current = _previous.next
        _previous.next = _current.next
    }

    this.length--;
    return _current.element;
}

// 5. 定位
function indexOf(element) {
    let _current = this.head;
    for(let i = 0; i < this.length; i++) {
        if (_current.element === element) return i;

        _current = _current.next;
    }

    return -1;
}

// 双向链表
// head <=> node1 <=> node2 ... <=> null(tail)
// 区别 tail、prev

class DoubleLink extends Linkedlist {

}


