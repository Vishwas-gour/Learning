#include <iostream>
using namespace std;
class a{
    public:virtual void sum() = 0;
};

class b : public a{
    public:void sum(){
      cout<<" in b class ->" << 10 + 10<<endl;
    }
    
    public:void sum2(){
      cout<< " in b class ->" << 1 + 1<<endl;
    }
};
class c : public a{
    public:void sum(){
      cout<< " in c class -> " <<10 + 10<<endl;
    }
};

int main(){
    // with (new) kayword we can't create object without pointer
    a *obj = new b();
    obj->sum();
    b *obj2 = new b();
    obj2->sum();
    obj2->sum2();
    c obj3;
    obj3.sum();

    // object delete form heap
    delete obj2;
}