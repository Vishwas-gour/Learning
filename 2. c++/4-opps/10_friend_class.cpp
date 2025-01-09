#include <iostream>
using namespace std;
class a{
    int val = 10;
    friend class b;
    friend void how();
};

// friend function
void how(){
    cout << "friend function of a " << endl;
}

// friend function
class b{
public:
    void show(a obj1){
        cout << obj1.val << endl;
    }
};
int main(){
    a obj1;
    b obj2;
    // without passing the object of class we can't access  members of that class
    obj2.show(obj1);
    how();
}