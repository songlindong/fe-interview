function fn() {
    console.log('隐式绑定', this);
   }

   const obj = {
     a: 1,
     fn
   }
   obj.fn = fn;
   obj.fn();