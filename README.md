+ **Context**
    + Provider(父)，Consumer(子)钩子
    + 可同时维护多个context，互不影响，主要是多层级父子组件传值
+ **Hooks**(像一个语法糖，简化state和生命周期的一些操作代码)
    + *useState*是一个数组  
      eg: const [aaa, setAaa] = useState(xxx);  
      xxx叫啥，则state叫啥，可为各种格式;  
      setAaa是改变这个state的方法(第二个参数为方法，为了语义化，都写成setXXX的形式)
hooks在类中不运行，它使用react时不写class
    + *useEffect*     
    可以代替componentDidMount，componentDidUpdate，componentWillUnMount要做的事
WillUnMount可以返回一个cleanup函数，清理没用的state
