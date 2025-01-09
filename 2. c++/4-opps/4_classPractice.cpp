#include <iostream>
using namespace std;
class GrandeParent{
public:
     virtual void show() {
        cout << "in GrandeParent" << endl;
    }
};

class parent1 : virtual public GrandeParent{
public:
     void show() {
        cout << "in parent1" << endl;//---------|
    }                               //          |
};//                                            | 
class parent2 : virtual public GrandeParent{//  |-->if both have show method then it will create ambiguous error, if one parent have than call them public://            | if child have then calls to child     
     void show() {//----------------------------| 
        cout << "in parent2" << endl;//
    }
};

class child : public parent1, public parent2{
    // public:
    //  void show() {
    //     cout << "in child" << endl;
    // }
};

int main(){
    child c;
    c.show();
}