 public class SingleObject{
        //注意，私有化构造函数，外部不能new，只能内部new
        private SingleObject（）{

        }
        //唯一被new出来的对象
        private SingleObject instance = null;

        //获取唯一对象的接口
        public SingleObject getInstance(){
            if(instance == null){
                //只new一次
                instance = new SingleObject();
            }
            return instance
        }

        //对象方法
        public void login(){
            System.out.print('login...')
        }
}